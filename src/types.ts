export interface DailyActivity {
  id: string;
  time: string;
  title: string;
  italianTitle: string;
  description: string;
  location: string;
  image: string;
  highlight: string;
}

export interface Program {
  id: string;
  name: string;
  italianName: string;
  tagline: string;
  description: string;
  details: string[];
  durationOptions: {
    weeks: number;
    price: number;
  }[];
  idealFor: string;
}
