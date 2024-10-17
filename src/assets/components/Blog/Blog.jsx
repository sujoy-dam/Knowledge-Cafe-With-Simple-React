import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog, handleAddToBookmark, handleReadTime }) => {
    // console.log(blog)
    const { title, cover, author, author_img, hashtags, posted_date, reading_time } = blog
    return (
        <div className="p-5 pt-0 space-y-8">
            <div>
                <img className="w-full rounded-md" src={cover} alt={`Cover picture of the title ${title}`} />
            </div>
            <div className="flex justify-between">
                <div className="flex gap-5">
                    <div>
                        <img className="w-12 h-12 object-cover rounded-full" src={author_img} alt="" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">{author}</h3>
                        <p className="font-medium">{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <p>{`${reading_time} min read`}</p>
                    <button onClick={()=>handleAddToBookmark(blog)}>
                        <CiBookmark />
                    </button>
                </div>
            </div>
            <h1 className="text-4xl font-bold">{title}</h1>
            <div>
                {
                    hashtags.map((hastag, idx) => <span key={idx} className="mr-3 bg-gray-200 py-1 px-2 rounded-full">{hastag}</span>)
                }
            </div>
            <button className="text-sky-600 font-bold hover:underline" onClick={()=>handleReadTime(reading_time)}>Mark as read</button>
            <hr />
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func.isRequired
}

export default Blog;