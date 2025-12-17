import { NextResponse } from "next/server";

export type Blog = {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
  image: string;
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "Going all-in with millennial design",
    date: "14 Oct 2022",
    category: "Wood",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/img/blog/blog1.avif",
  },
  {
    id: 2,
    title: "Exploring new ways of decorating",
    date: "15 Oct 2022",
    category: "Handmade",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/img/blog/blog2.jpg",
  },
  {
    id: 3,
    title: "Handmade pieces that took time to make",
    date: "16 Oct 2022",
    category: "Interior",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/img/blog/blog3.webp",
  },
  {
    id: 2,
    title: "Exploring new ways of decorating",
    date: "15 Oct 2022",
    category: "Handmade",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/img/blog/blog2.jpg",
  },
  {
    id: 2,
    title: "Exploring new ways of decorating",
    date: "15 Oct 2022",
    category: "Handmade",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/img/blog/blog2.jpg",
  },
];

export async function GET() {
  return NextResponse.json(blogs);
}
