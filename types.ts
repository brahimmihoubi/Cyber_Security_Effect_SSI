export type SectionType = 'advantages' | 'risks' | 'disadvantages';

export interface Point {
  id: string;
  text: string;
  detail: string; // Expanded detail for the UI
}

export interface SectionData {
  title: string;
  description: string;
  color: string;
  iconName: string;
  points: Point[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}