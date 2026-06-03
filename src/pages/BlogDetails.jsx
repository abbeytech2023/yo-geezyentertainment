import { useParams } from "react-router-dom";
import { useBlog } from "../hooks/useFetchBlogs";

export default function BlogDetails() {
  const { id } = useParams();
  const { blog, isLoading, error } = useBlog(id);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="max-w-4xl mx-auto mt-20 p-6">
      <h1 className="text-4xl font-bold mb-4">{blog.blogsTitle}</h1>

      <p className="text-purple-700 font-semibold">{blog.artist}</p>

      <p className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-bold px-4 py-2 rounded-full shadow-md mb-6">
        <span className="text-purple-300">📅</span>
        {new Date(blog.created_at).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        })}
      </p>

      <div className="text-gray-700 whitespace-pre-wrap">{blog.blogsNews}</div>
    </div>
  );
}
