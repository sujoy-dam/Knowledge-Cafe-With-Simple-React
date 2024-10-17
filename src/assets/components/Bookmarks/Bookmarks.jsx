import PropTypes from "prop-types";
import Book from "../Book/Book";

const Bookmarks = ({ bookmarks }) => {
    console.log(bookmarks)
    return (
        <div className="w-1/3 rounded-lg border-green-500 px-5 py-8 bg-gray-50">
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