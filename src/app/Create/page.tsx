"use client";

import { useState } from "react";
import sendpost from "./sendpost";
import NavBar from "../NavBar";
import styles from "./page.module.css";

export default function Create() {
  const [title, setTitle] = useState("");
  const [content, setcontent] = useState("");
  const uid: string = "11";

  return (
    <>
      <NavBar />
      <form className={styles.form} onSubmit={(e) => { sendpost(uid, title, content);alert("Post sent") }}>
        <h3 className={styles.label}>Title</h3>
        <textarea
          className={styles.textArea}
          name="title"
          id="title"
          placeholder="Title"
          value={title}
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></textarea>

        <h3 className={styles.label}>content</h3>
        <textarea
          className={styles.textArea}
          name="content"
          id="content"
          placeholder="content"
          value={content}
          onChange={(e) => {
            setcontent(e.target.value);
          }}
        ></textarea>
        <button className={styles.submit} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
