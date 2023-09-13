"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getData().then((res) => setData(res));
    // setData();
  }, []);
  async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }
  if (!data) return <p>Loading...</p>;

  return (
    <main className="p-4">
      <h1 className="text-5xl mb-4">Client Side Rendering</h1>
      <div className="grid grid-cols-4 gap-4 ">
        {data.map((post) => (
          <div
            className="border border-2 p-4 border-rose-500 rounded-md"
            key={post.id}
          >
            <p>{post.title}</p>
            <p>{post.completed}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
