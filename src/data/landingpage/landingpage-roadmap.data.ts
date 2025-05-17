interface MileStone {
  title: string;
  description?: string;
  subMilestones?: string[];
}

export interface IRoadMapData {
  id?: number;
  indicatorLabel: string;
  title: string;
  goal: string;
  deliverables: string[];
  milestones?: MileStone[];
}

export const ROADMAP_DATA: IRoadMapData[] = [
  {
    id: 1,
    indicatorLabel: "Q1",
    title: "Core Development and Telegram Bot Launch",
    goal: "Establish foundational infrastructure, develop the Telegram bot, and finalize the app UI.",
    milestones: [
      {
        title: "Infrastructure Setup:",
        subMilestones: [
          "Tech Stack: Python, MongoDB/SQL, AWS/GCP",
          "Set up project infrastructure (repositories, CI/CD pipelines).",
          "Apply for Twitter Developer API access to collect tweet data.",
        ],
      },

      {
        title: "Data Collection & Preprocessing:",
        subMilestones: [
          "Tech Stack: Tweepy API.",
          "Fetch real-time data from top crypto influencers (Elon Musk, Vitalik Buterin, etc.).",
          "Preprocess tweets for NLP analysis.",
        ],
      },

      {
        title: "Telegram Bot Development:",
        subMilestones: [
          "Tech Stack: Python, Telegram Bot API.",
          "Launch Telegram bot to send alerts on detected crypto narratives in real-time.",
          "Implement basic features: narrative detection, user preferences, and notifications.",
        ],
      },

      {
        title: "Launchpad Development (V1):",
        subMilestones: [
          "Tech Stack: React.js, Web3.js.",
          "Develop the first version of the launchpad allowing users to auto-buy tokens based on narrative alerts.",
          "Integrate wallet connection (e.g., MetaMask) for seamless transactions.",
        ],
      },

      {
        title: "App UI Design Finalization:",
        subMilestones: [
          "Tech Stack: React.js (Frontend).",
          "Finalize app design, focusing on user dashboard and real-time alerts",
        ],
      },

      {
        title: "Marketing Preparation:",
        subMilestones: [
          "Teaser Campaign: Start social media campaigns to build buzz (Twitter, Reddit, YouTube).",
          " Influencer Outreach: Onboard key crypto KOLs (Key Opinion Leaders) to promote the upcoming launch.",
        ],
      },
    ],
    deliverables: [
      "Infrastructure Setup:",
      "Active Telegram bot with notifications.",
      "Finalized app UI design.",
    ],
  },

  {
    id: 2,
    indicatorLabel: "Q2",
    title: "App Development, Advanced NLP, & Multi-Channel Notifications",
    goal: "Develop mobile/web apps, enhance notifications, and improve NLP capabilities.",
    milestones: [
      {
        title: "App Development:",
        subMilestones: [
          "Tech Stack: React.js, Flask/Django.",
          "Build app's core features (user preferences, dashboard, trend alerts).",
          "Integrate auto-buy functionality within the app.",
        ],
      },

      {
        title: "Advanced NLP Features:",
        subMilestones: [
          "Tech Stack: Hugging Face, Spacy (NER).",
          "Enhance sentiment analysis and introduce Named Entity Recognition (NER) to track specific crypto projects.",
          "Implement image-based narrative detection using deep learning models.",
        ],
      },

      {
        title: "Multi-Channel Notification System:",
        subMilestones: [
          " Tech Stack: Firebase, Twilio.",
          "Expand notifications to SMS, email, and push notifications.",
        ],
      },

      {
        title: "Launchpad Enhancements:",
        subMilestones: [
          "Integrate DEXTools and DexScreener links for real-time token analytics.",
          "Implement 'Alpha Wallets' feature to track top-performing wallets.",
        ],
      },

      {
        title: "Marketing Campaign:",
        subMilestones: [
          "CEX Partnerships: Begin conversations with centralized exchanges (CEXs) to list Neos and integrate with their platforms for broader visibility.",
          "Launch Social Media Campaign: Engage crypto communities (Twitter, Discord, Telegram) and organize giveaways to increase awareness.",
          "Influencer Promotions: KOLs promote the Telegram bot and app; offer exclusive early access to their followers.",
        ],
      },
    ],
    deliverables: [
      "Mobile/Web apps in development.",
      "Advanced NLP features (sentiment analysis, NER).",
      "Multi-channel notification system (push, email, SMS).",
      "Enhanced launchpad with DEXTools and DexScreener integration.",
    ],
  },

  {
    id: 3,
    indicatorLabel: "Q3",
    title: "App Launch, User Onboarding, & Marketing Ramp-up",
    goal: "Launch the app, onboard users, and initiate aggressive marketing.",
    milestones: [
      {
        title: "App Launch:",
        subMilestones: [
          "Tech Stack: React Native for mobile, Firebase for notifications.",
          "Finalize and launch mobile/web apps.",
          "Implement features like direct links to trading platforms, live market data, and token watchlists.",
        ],
      },

      {
        title: "User Onboarding:",
        subMilestones: [
          "Onboarding Flow: Streamline user registration and setup process.",
          " Referral Program: Introduce a referral system for early users to invite others in exchange for rewards (e.g., access to premium features or exclusive content).",
        ],
      },

      {
        title: "Aggressive Marketing Push:",
        subMilestones: [
          "Social Media Blitz: Paid ads on Twitter, YouTube, Instagram, and crypto forums to drive awareness.",
          "CEX Listings: Push for listings on top CEXs and promote app through these exchanges.",
          "Partnerships with Exchanges & Wallets: Establish partnerships with wallet apps and exchanges for cross-promotional marketing.",
        ],
      },
    ],
    deliverables: [
      "Successful app launch (mobile/web).",
      "Active user onboarding and referral program.",
      "CEX listings and exchange promotions.",
    ],
  },

  {
    id: 4,
    indicatorLabel: "Q4",
    title: "Scaling, Advanced Features, & Global Growth",
    goal: "Scale platform, expand globally, and refine features based on user feedback.",
    milestones: [
      {
        title: "App Scaling & Cloud Infrastructure:",
        subMilestones: [
          "Tech Stack: Kubernetes, AWS, Google Cloud.",
          "Implement horizontal scaling to handle growing user base and increasing data volumes.",
        ],
      },

      {
        title: "Advanced Features & AI Enhancements:",
        subMilestones: [
          "Tech Stack: Machine learning models for trend prediction.",
          "Enhance prediction models for future crypto trends and integrate data from additional sources (e.g., exchange prices, market data).",
        ],
      },

      {
        title: "Global Expansion:",
        subMilestones: [
          "Internationalization: Expand Neos to detect narratives in multiple languages (Spanish, Chinese, etc.).",
          "Marketing Expansion: Scale marketing efforts globally by reaching new markets (Asia, Europe, etc.) through crypto communities on Telegram, WeChat, etc.",
        ],
      },

      {
        title: "Collaborations & Partnerships:",
        subMilestones: [
          "Launch Cross-Platform Support: Expand into other crypto platforms like Reddit, Telegram, and Discord.",
          "Launch a Premium Tier: Offer a paid version of Neos with advanced features (customizable alerts, trend predictions).",
        ],
      },
    ],
    deliverables: [
      "Scalable platform with global reach.",
      "Advanced AI features for trend prediction.",
      "International marketing push and global partnerships.",
    ],
  },
];
