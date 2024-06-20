"use server";

export default async function sendpost(
  uid: string,
  title: string,
  content: string
) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ userId: uid, title: title, body: content }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log(response.status)
  } catch (e) {
    console.log(e)
  }
}
