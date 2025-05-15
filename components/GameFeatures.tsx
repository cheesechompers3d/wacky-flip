"use client"

import Image from "next/image"
import { GameFeature } from "@/lib/types"

interface GameFeaturesProps {
  features?: GameFeature | null
  characteristics?: GameFeature | null
}

export default function GameFeatures({ features, characteristics }: GameFeaturesProps) {
  if ((!features?.items?.length && !characteristics?.items?.length)) {
    return null
  }

  const parseFeatureItem = (item: any) => {
    // 如果 item 是字符串类型
    if (typeof item === 'string') {
      // 查找第一个冒号的位置
      const colonIndex = item.indexOf(':')
      if (colonIndex !== -1) {
        // 提取标题和描述，并移除可能的前导空格和破折号
        const title = item.slice(0, colonIndex).replace(/^[-\s]+/, '').trim()
        const description = item.slice(colonIndex + 1).trim()
        
        // 如果标题或描述为空，返回整个字符串作为标题
        if (!title || !description) {
          return {
            title: item.replace(/^[-\s]+/, '').trim(),
            description: ''
          }
        }
        
        return {
          title,
          description
        }
      }
      // 如果没有冒号，返回整个字符串作为标题
      return {
        title: item.replace(/^[-\s]+/, '').trim(),
        description: ''
      }
    }

    // 如果 item 是对象类型
    if (typeof item === 'object' && item !== null) {
      const title = item.title || ''
      const description = item.description || ''
      
      // 如果对象格式不完整，尝试将其转换为字符串
      if (!title && !description && item.toString) {
        const str = item.toString().replace(/^[-\s]+/, '').trim()
        return {
          title: str,
          description: ''
        }
      }
      
      return { title, description }
    }

    // 如果是其他类型，返回空对象
    return {
      title: '',
      description: ''
    }
  }

  return (
    <div className="mt-8 space-y-12">
      {/* Key Features Section */}
      {features?.items && features.items.length > 0 && (
        <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900 rounded-xl p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* 左侧图片 */}
            <div className="lg:w-1/3 aspect-video relative rounded-lg overflow-hidden bg-gradient-to-br from-indigo-800/30 to-purple-800/30 backdrop-blur-sm">
              {features?.image ? (
                <Image
                  src={features.image}
                  alt="Feature Image"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-indigo-300/50">
                  Feature Image
                </div>
              )}
            </div>
            {/* 右侧内容 */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-purple-200">
                {features?.title}
              </h2>
              <div className="grid gap-4">
                {features?.items.map((feature, index) => {
                  const { title, description } = parseFeatureItem(feature)
                  return (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-indigo-200 mb-1">{title}</h3>
                        {description && (
                          <p className="text-indigo-300/80">{description}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Game Characteristics Section */}
      {characteristics?.items && characteristics.items.length > 0 && (
        <div className="bg-gradient-to-br from-cyan-900 via-teal-900 to-emerald-900 rounded-xl p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row-reverse gap-8">
            {/* 右侧图片 */}
            <div className="lg:w-1/3 aspect-video relative rounded-lg overflow-hidden bg-gradient-to-br from-cyan-800/30 to-teal-800/30 backdrop-blur-sm">
              {characteristics?.image ? (
                <Image
                  src={characteristics.image}
                  alt="Characteristics Image"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-cyan-300/50">
                  Characteristics Image
                </div>
              )}
            </div>
            {/* 左侧内容 */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 to-teal-200">
                {characteristics?.title}
              </h2>
              <div className="grid gap-6">
                {characteristics?.items.map((characteristic, index) => {
                  const { title, description } = parseFeatureItem(characteristic)
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-br from-cyan-800/20 to-teal-800/20 hover:from-cyan-800/30 hover:to-teal-800/30 transition-colors backdrop-blur-sm"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-cyan-200 mb-1">{title}</h3>
                        {description && (
                          <p className="text-cyan-300/80">{description}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
