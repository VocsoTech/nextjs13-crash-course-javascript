"use client";
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <main className="p-4">
      <h1 className="text-5xl mb-4">Server Side Rendering</h1>
      <div className="grid grid-cols-4 gap-4 ">
        {data.map((post) => (
          <div
            className="border border-2 p-4 border-indigo-500 rounded-md"
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
