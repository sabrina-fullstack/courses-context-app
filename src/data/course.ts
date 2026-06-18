// src/data/course.ts

export interface Course {
  id: string;
  title: string;
  level: string;
  duration: string;
  description: string;
  image: string;
}

export const courses: Course[] = [
  {
    id: "1",
    title: "React Basics",
    level: "Beginner",
    duration: "6 hours",
    description: "Apprenez les bases de React : composants, props et state.",
    image: "https://picsum.photos/300/200?random=1",
  },
  {
    id: "2",
    title: "TypeScript Pro",
    level: "Intermediate",
    duration: "8 hours",
    description: "Maîtrisez TypeScript avec les interfaces, types et generics.",
    image: "https://picsum.photos/300/200?random=2",
  },
  {
    id: "3",
    title: "CSS Avancé",
    level: "Beginner",
    duration: "4 hours",
    description: "Flexbox, Grid et animations CSS modernes.",
    image: "https://picsum.photos/300/200?random=3",
  },
  {
    id: "4",
    title: "Node.js API",
    level: "Advanced",
    duration: "10 hours",
    description: "Créez une API REST complète avec Node.js et Express.",
    image: "https://picsum.photos/300/200?random=4",
  },
];
