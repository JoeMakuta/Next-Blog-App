import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>This is the Home page</div>
      <Link href="/blog" >
        Blog 
      </Link>
    </>
  );
}
