"use client"

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Game } from '@/lib/types'
import { getGameBySlug } from '@/lib/games'
import Home from '@/components/Home'

export default function GamePage() {
  const params = useParams()
  const slug = params?.slug as string || ''
  const [defaultGame, setDefaultGame] = useState<Game | null>(null)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!slug) return

    const fetchGame = async () => {
      try {
        const game = await getGameBySlug(slug)
        if (game) {
          setDefaultGame(game)
        } else {
          setError(new Error('Game not found'))
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load game'))
      }
    }

    fetchGame()
  }, [slug])

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-red-600">Loading Failed</h1>
          <p className="text-gray-600">{error.message}</p>
        </div>
      </div>
    )
  }

  if (!defaultGame) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Loading...</h1>
        </div>
      </div>
    )
  }

  return (
    <>
      <Home defaultGame={defaultGame} />
    </>
  )
} 