import Link from "next/link";
import styles from "./page.module.css"
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
      <div className={styles.listTitle}>Post Lists</div>
      <Posts key={0} posts={posts} />
    </>
  );
}
