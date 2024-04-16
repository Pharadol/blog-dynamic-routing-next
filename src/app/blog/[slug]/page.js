import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

async function getBlog(slug) {
  const response = await fetch(`https://dummyapi.online/api/blogposts/${slug}`);
  if (!response.status) {
    throw new Error("cannot get blog");
  }
  const data = await response.json();
  return data;
}

export default async function page({ params }) {
  const blog = await getBlog(params.slug);
  console.log(blog);
  return (
    <div>
      <Link href="/">
        <button className="inline-block bg-blue-400 px-3 py-1 rounded-md hover:bg-blue-500">
          <IoIosArrowBack className="inline-block text-white text-lg" />
        </button>
      </Link>

      <div className="my-4 px-4 py-6 pb-10 rounded-lg bg-white">
        <h1 className="font-bold text-2xl mb-4">{blog.title}</h1>
        <p>{blog.content}</p>
      </div>
    </div>
  );
}
