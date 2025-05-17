export interface ILaunchPadArticleData {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  descriptionPlacement?: "top" | "bottom";
}

export const LaunchPadArticleData: ILaunchPadArticleData[] = [
  {
    id: 1,
    thumbnail: "/image/launchpad-article/launchpad-article-card-1.png",
    title: "Launchpad",
    description:
      "Auto-buy trending narratives in seconds with Neos bot alerts.",
  },
  {
    id: 2,
    thumbnail: "/image/launchpad-article/launchpad-article-card-3.png",
    title: "Launchpad",
    description:
      "Find a real-time feed of what’s trending and monitor insights on narratives per major Crypto Twitter (CT) voice.",
  },
  {
    id: 3,
    thumbnail: "/image/launchpad-article/launchpad-article-card-2.png",
    title: "Launchpad",
    description: "Launch your own token based on trending narratives.",
    descriptionPlacement: "top",
  },
];
