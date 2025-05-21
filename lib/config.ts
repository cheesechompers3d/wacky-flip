import type { SiteConfig } from './types'

// 默认配置
export const defaultConfig: SiteConfig = {
  defaultGame: "wacky-flip",
  siteName: "Wacky Flip",
  seo: {
    title: "Wacky Flipy - Fast Arcade Flipping Game | Test Reflexes!",
    description: "Play Wacky Flipy! Flip, jump & dodge obstacles in this addictive arcade game. Challenge harder levels & compete for high scores. Free to play!",
    ogImage: "/images/hot_game/wacky-flip.jpg",
    keywords: "wacky flipy, arcade game, reflex test, free jumper, dodge obstacles, high score"
  },
  advertisement: {
    key: ""
  },
  siteInfo: {
    companyName: "Wacky Flip",
    siteUrl: "https://www.wackyflip.pro",
    email: "HarryC199101@gmail.com"
  },
  footer: {
    columns: [
      {
        title: "Games",
        description: "",
        links: [
          {
            text: "More Games",
            url: "/more-games"
          }
        ]
      }
    ],
    copyright: "© 2025 All rights reserved.",
    disclaimer: "This is an independent website and is not affiliated with any organizations."
  }
} 

export function getSiteConfig(): SiteConfig {
  return defaultConfig
} 