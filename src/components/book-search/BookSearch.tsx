import React from "react";
import IBookSearch from "../shared/interfaces/bookSearch";

const BookSearch = ({ bookTypeToSearch, setBookTypeToSearch }: IBookSearch) =>
    <div className="search-params">
        <form
            onSubmit={(e) => {
                e.preventDefault();
                setBookTypeToSearch(bookTypeToSearch);
            }}
        >
            <input
                className="full-width"
                autoFocus
                name="gsearch"
                type="search"
                value={bookTypeToSearch}
                placeholder="Search for books to add to your reading list and press Enter"
                onChange={e => {
                    setBookTypeToSearch(e.target.value);
                }}
            />
        </form>
    </div>

export default BookSearch;