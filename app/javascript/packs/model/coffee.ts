export interface Coffee {
  shop: string;
  roast_text: string;
  roast: string;
  country: string;
  area: string;
  taste: string;
  new: boolean;
  arrival_date: string;
  arrival_month: number;
  url: string;
}

const raosts: { [index: string]: string } = {
  cinnamon: 'シナモン',
  city: 'シティ',
  french: 'フレンチ',
  fullcity: 'フルシティ',
  high: 'ハイ',
  medium: 'ミディアム',
};

export function roastToText(roast: string): string {
  return raosts[roast];
}
