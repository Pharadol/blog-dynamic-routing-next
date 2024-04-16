import Link from "next/link";

async function getBlogs() {
  const response = await fetch(
    // `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`
    `https://dummyapi.online/api/blogposts`
  );
  if (!response.status) {
    throw new Error("cannot get blogs");
  }
  const data = await response.json();
  return data;
}

export default async function Home({ params }) {
  const blogs = await getBlogs();
  console.log(blogs);
  return (
    <main>
      <h1 className="text-blue-600 font-bold text-2xl mb-4">BLOG LISTS</h1>
      <div className="bg-white rounded-lg p-4 pt-0">
        {blogs.map((blog) => (
          <div className="py-4 border-b-2 hover:text-blue-500" key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <h2 className="font-bold">{blog.title}</h2>
              <p className="line-clamp-2">{blog.content}</p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
