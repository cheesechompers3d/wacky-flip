import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface SiteConfig {
  defaultGame: string
  siteName: string
  siteInfo: {
    companyName: string
    siteUrl: string
    email: string
  }
  footer: {
    columns: Array<{
      title: string
      description?: string
      links: Array<{
        text: string
        url: string
      }>
    }>
    copyright: string
    disclaimer: string
  }
}

const siteConfig: SiteConfig = {
  defaultGame: "wacky-flip",
  siteName: "Wacky Flip",
  siteInfo: {
    companyName: "wackyflip",
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
          },
          {
            text: "Wacky Flip",
            url: "/wacky-flip"
          },
          {
            text: "Cheese Chompers 3D",
            url: "/cheese-chompers-3d"
          },
          {
            text: "Merge Fellas",
            url: "/merge-fellas"
          }
        ]
      },
      {
        title: "Quick Links",
        links: [
          {
            text: "GitHub",
            url: "https://github.com/wackyflip/wacky-flip"
          },
          {
            text: "Wacky Flip Official",
            url: "https://wackyflip.pro"
          },
          {
            text: "Privacy Policy",
            url: "/privacy-policy"
          },
          {
            text: "Terms of Service",
            url: "/terms-of-service"
          }
        ]
      },
      {
        title: "Contact Us",
        links: [
          {
            text: "HarryC199101@gmail.com",
            url: "mailto:HarryC199101@gmail.com"
          }
        ]
      }
    ],
    copyright: "© 2025 All rights reserved.",
    disclaimer: "This is an independent website and is not affiliated with any organizations."
  }
}

export function getSiteConfig(): SiteConfig {
  return siteConfig
} 