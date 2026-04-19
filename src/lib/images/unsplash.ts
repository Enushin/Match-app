/**
 * Unsplash画像URL定義
 * 全て無料・商用利用可能なUnsplash Source API使用
 * サイズ指定でパフォーマンス最適化
 */

const UNSPLASH_BASE = "https://images.unsplash.com";

export const images = {
  hero: `${UNSPLASH_BASE}/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&q=80`,
  heroCover: `${UNSPLASH_BASE}/photo-1556761175-5973dc0f32e7?w=1920&h=600&fit=crop&q=80`,

  avatars: [
    `${UNSPLASH_BASE}/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face&q=80`,
    `${UNSPLASH_BASE}/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&q=80`,
    `${UNSPLASH_BASE}/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face&q=80`,
    `${UNSPLASH_BASE}/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face&q=80`,
    `${UNSPLASH_BASE}/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face&q=80`,
    `${UNSPLASH_BASE}/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face&q=80`,
  ],

  features: {
    aiMatching: `${UNSPLASH_BASE}/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&q=80`,
    collaboration: `${UNSPLASH_BASE}/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&q=80`,
    meeting: `${UNSPLASH_BASE}/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&q=80`,
  },

  profileCover: `${UNSPLASH_BASE}/photo-1497366216548-37526070297c?w=1200&h=400&fit=crop&q=80`,

  testimonials: [
    `${UNSPLASH_BASE}/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face&q=80`,
    `${UNSPLASH_BASE}/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face&q=80`,
    `${UNSPLASH_BASE}/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face&q=80`,
  ],

  portfolio: [
    `${UNSPLASH_BASE}/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80`,
    `${UNSPLASH_BASE}/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80`,
  ],
} as const;
