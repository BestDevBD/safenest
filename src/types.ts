export interface VaultAccount {
  id: string;
  platform: string;
  username?: string;
  password?: string;
  category?: string;
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
}

export type Category = 'Email' | 'Social Media' | 'Gaming' | 'Bank' | 'Crypto' | 'Other';
export const CATEGORIES: Category[] = ['Email', 'Social Media', 'Gaming', 'Bank', 'Crypto', 'Other'];

export function detectCategory(platform: string): Category {
  const p = platform.toLowerCase();
  if (p.includes('gmail') || p.includes('yahoo') || p.includes('outlook')) return 'Email';
  if (p.includes('facebook') || p.includes('instagram') || p.includes('tiktok') || p.includes('twitter') || p.includes('x.com')) return 'Social Media';
  if (p.includes('pubg') || p.includes('free fire') || p.includes('steam') || p.includes('epic')) return 'Gaming';
  if (p.includes('bank') || p.includes('paypal') || p.includes('payoneer')) return 'Bank';
  if (p.includes('crypto') || p.includes('binance') || p.includes('coinbase') || p.includes('wallet')) return 'Crypto';
  return 'Other';
}
