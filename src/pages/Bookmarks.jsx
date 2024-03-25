import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../utilities";
import BlogCard from "../components/BlogCard/BlogCard";
import EmptyState from "../components/EmptyState/EmptyState";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);
  const handleDelete = (id) => {
    deleteBlog(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  };
  if (blogs.length < 1)
    return (
      <EmptyState
        message="No Bookmarks Available!"
        address={"/blogs"}
        label={"Go to blogs"}></EmptyState>
    );
  return (
    <div className="grid  px-4 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          handleDelete={handleDelete}
          deletable={true}
          blog={blog}></BlogCard>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {};

export default Bookmarks;
