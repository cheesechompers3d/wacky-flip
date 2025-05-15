import { Metadata } from 'next'
import Home from '@/components/Home'
import { getGameBySlug } from '@/lib/games'
import { getSiteConfig } from '@/lib/config'

interface PageProps {
  params: { slug?: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const config = getSiteConfig()
  return {
    title: config.siteName,
    description: `Play ${config.siteName} - The Ultimate Gaming Experience`
  }
}

export default async function Page({ params, searchParams }: PageProps) {
  const config = getSiteConfig()
  const defaultGame = await getGameBySlug(config.defaultGame)
  return <Home defaultGame={defaultGame} />
}

