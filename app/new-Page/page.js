"use client";
export default function ReadMore({ post }) {
  return (
    <button
      type="button"
      onClick={() => {
        router.push({
          pathname: "/post/[pid]",
          query: { pid: post.id },
        });
      }}
    >
      Click here to read more
    </button>
  );
}
