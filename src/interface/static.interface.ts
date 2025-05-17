export interface IFrequentlyAskData {
  id: number;
  question: string;
  answer: string;
  bulletPoints?: string[];
}

export interface INavigationData {
  id: number;
  label: string;
  href: string;
  as?: "anchor" | "link";
}
