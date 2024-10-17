import PropTypes from "prop-types";
import Book from "../Book/Book";

const Bookmarks = ({ bookmarks, readTimes }) => {
    // console.log(bookmarks)
    return (
        <div className="w-1/3 rounded-lg px-5 py-8 bg-gray-50">
            <div className="border-2 border-sky-500 px-5 py-6 rounded-lg mb-10 bg-white">
                <h2 className="text-center text-2xl text-blue-700 font-bold">Spend Time On Read: {readTimes} min</h2>
            </div>
            <h2 className="text-3xl font-bold">Bookmarked Blogs : {bookmarks.length}</h2>
            <div className="space-y-5 mt-5">
            {
                bookmarks.map(book=><Book key={book.id} book={book}></Book>)
            }
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
}
export default Bookmarks;