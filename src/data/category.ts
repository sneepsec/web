export interface Props {
  title: string;
  slug: string;
  color: "green" | "blue" | "orange" | "purple" | "pink";
  description: string;
}
export type Category = Props;

export const categories: Props[] = [
  {
    title: "Topic",
    slug: "topic",
    color: "blue",
    description:
      "The interesting English content that you can read and learn from it.",
  },
  {
    title: "Thông báo",
    slug: "announcement",
    color: "orange",
    description:
      "Latest news, announcements, and updates for the English community.",
  },
  {
    title: "Content",
    slug: "content",
    color: "green",
    description:
      "Content of SEC is the king. Read and learn from the best content creators.",
  },
  {
    title: "Travel",
    slug: "travel",
    color: "pink",
    description:
      "Plan your next adventure and get travel tips and inspiration from experienced travelers, with articles covering destinations, cultures, and more.",
  },
  {
    title: "Design",
    slug: "design",
    color: "purple",
    description:
      "Get insights and inspiration from the world of design, with articles covering graphic design, product design, interior design, and more.",
  },
];
