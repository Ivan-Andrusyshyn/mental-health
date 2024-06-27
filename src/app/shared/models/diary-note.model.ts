export interface DiaryEntry {
  id?: string;
  date: string;
  mood: number;
  description: string;
  physicalState: number;
  emotions: string[];
  events: string;
  selfCareMethods: string;
  achievements: string;
  gratitude: string[];
  notes: string;
}
