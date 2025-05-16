export interface IFrequentlyAskData {
  id: number;
  question: string;
  answer: string;
}

export const FAQ_DATA: IFrequentlyAskData[] = [
  {
    id: 1,
    question: "What is Neos?",
    answer:
      "Neos is an AI-powered bot designed to detect emerging crypto narratives in real-time by analyzing tweets from influential figures in the cryptocurrency space. It helps users identify key trends, topics, and sentiments surrounding new crypto projects and launches.",
  },

  {
    id: 2,
    question: "How does Neos detect crypto narratives?",
    answer:
      "Neos uses Natural Language Processing (NLP) techniques to analyze tweets from top crypto influencers. It performs tasks such as topic modeling, sentiment analysis, and named entity recognition (NER) to detect emerging trends and narratives in the crypto world.",
  },

  {
    id: 3,
    question: "Which influencers does Neos track?",
    answer:
      "Neos tracks tweets from prominent crypto influencers such as Elon Musk, Vitalik Buterin, CZ (Binance CEO), and Brian Armstrong (Coinbase CEO), among others, to identify trends and narratives that may influence the market.",
  },

  {
    id: 4,
    question: "How does Neos collect data from Twitter?",
    answer:
      "Neos collects data using Twitter's API (v2), which allows the bot to fetch the latest tweets from selected crypto influencers. The data includes tweet content, metadata, and timestamp information, which is stored for further analysis.",
  },

  {
    id: 5,
    question: "What is sentiment analysis, and how is it used in Neos?",
    answer:
      "Sentiment analysis is the process of analyzing the tone of a tweet to classify it as positive, negative, or neutral. Neos uses sentiment analysis to understand the emotional tone surrounding crypto-related discussions and identify favorable or unfavorable narratives.",
  },

  {
    id: 6,
    question: "How does the notification system in Neos work?",
    answer:
      "Once Neos detects an emerging narrative, it sends real-time alerts to users via webhooks. Users can customize their notification preferences, choosing to receive alerts through email, SMS, or push notifications. Notifications include a summary of the detected trend and its sentiment.",
  },

  {
    id: 7,
    question: "Can I customize my alerts on Neos?",
    answer:
      "Yes, Neos allows users to customize their notification settings. You can choose which influencers to follow, which keywords or crypto topics to monitor, and even the type of sentiment you're interested in (positive, neutral, or negative).",
  },

  {
    id: 8,
    question: "How does Neos improve over time?",
    answer:
      "Neos uses machine learning techniques like supervised learning, reinforcement learning, and user feedback to improve the accuracy of trend detection and the timing of notifications. The more data Neos processes, the better it becomes at identifying relevant narratives.",
  },

  {
    id: 9,
    question: "How is user data protected on Neos?",
    answer:
      "Neos ensures data privacy by adhering to strict security protocols. User information and feedback are anonymized, and the platform follows Twitter’s API usage policies for handling tweet data. All communication is encrypted for added security.",
  },

  {
    id: 10,
    question: "What are some use cases for Neos?",
    answer:
      "Neos is useful for various users, including crypto traders, investors, project teams, and researchers. Traders and investors can make informed decisions based on emerging trends, while project teams can adjust their strategies when new narratives arise. Researchers can use Neos to track and analyze market sentiment and trends.",
  },
];
