import Link from "next/link";

export default function BlogPage() {
  return (
    <>
      Welcome To Blog Page
      <p>
        <Link href="/blog/post-1">POST 1</Link>
      </p>
      <p>
        <Link href="/blog/post-2">POST 2</Link>
      </p>
    </>
  );
}
