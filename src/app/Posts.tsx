"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./posts.module.css";

export default function Posts({ posts }: { posts: Post[] }) {
  const [indx, setindx] = useState(0);

  return (
    <>
      {posts.slice(indx * 10, indx * 10 + 10).map((x) => {
        return <Post key={x.id} post={x} />;
      })}
      <Footer key={indx} length={posts.length} index={indx} indexFn={setindx} />
    </>
  );
}

function Post({ post }: { post: Post }) {
  return (
    <div className="thumbnail">
      <Link key={post.id} href={`./${post.id}`}>
        <h6></h6>
        <h2>{post.title}</h2>
        <h5>{truncateStr(post.body, 50)}</h5>
      </Link>
    </div>
  );
}

function Footer({
  length,
  index,
  indexFn,
}: {
  length: number;
  index: number;
  indexFn: Function;
}) {
  const numbers = Array.from(Array(10).keys());
  const Btns: JSX.Element[] = [];
  numbers.map((x) => {
    Btns.push(
      <a
        key={x}
        className={x == index ? styles.selected : styles.nonselected}
        onClick={(e) => indexFn(x)}
      >
        {x + 1}
      </a>
    );
  });
  return <footer className={styles.bottomNav}>{Btns}</footer>;
}

function truncateStr(str: string, n: number) {
  if (str.length <= n) {
    return str;
  } else return str.substring(0, n) + "...";
}
