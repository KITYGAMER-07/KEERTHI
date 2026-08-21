export interface MemoryItem {
  id: string;
  category: 'teddy' | 'fun' | 'laughs' | 'conversations' | 'special' | 'unforgettable';
  title: string;
  emoji: string;
  description: string;
  quote: string;
  tags: string[];
  themeColor: string;
  imageAccent: string;
}

export interface YearMilestone {
  yearNumber: number;
  yearLabel: string;
  title: string;
  highlight: string;
  iconName: string;
}

export interface TeddyReaction {
  text: string;
  emoji: string;
}
