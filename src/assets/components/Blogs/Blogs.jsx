import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddToBookmark, handleReadTime }) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    // console.log(blogs)
    return (
        <div className="w-2/3 border-red-500">
            {/* <h1>Blogs NO : {blogs.length}</h1> */}
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddToBookmark={handleAddToBookmark} handleReadTime={handleReadTime}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes={
    handleAddToBookmark:PropTypes.func.isRequired,
    handleReadTime:PropTypes.func.isRequired
}

export default Blogs;