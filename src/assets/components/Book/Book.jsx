import PropTypes from "prop-types";

const Book = ({book}) => {
    return (
        <div className="bg-white space-y-4 p-5 rounded-lg">
            <h2>{book.title}</h2>            
        </div>
    );
};
Book.propTypes ={
    book:PropTypes.array.isRequired
}

export default Book;