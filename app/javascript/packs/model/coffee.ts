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

export function roastToText(roast: string): string {
  return {
    cinnamon: "シナモン",
    city: "シティ",
    french: "フレンチ",
    fullcity: "フルシティ",
    high: "ハイ",
    medium: "ミディアム",
  }[roast];
}
