import Link from "next/link";
import NavBar from "./NavBar";
import Posts from "./Posts";

async function getBlogPosts() {
  const result: Post[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((x) => x.json());
  return result;
}

export default async function Blogs() {
  const posts = await getBlogPosts();
  return (
    <>
      <NavBar />
      <Posts key={0} posts={posts} />
    </>
  );
}
