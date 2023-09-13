import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link href={"/about"}>Go to about</Link>
    </div>
  );
}

// Nested route /about->page.js / team -> page.js

/**
 * about -> folder
 *    page.js
 *    team -> folder
 *      page.js
 *       more-folder
 *          page.js -> more pages
 *
 *
 *
 */
