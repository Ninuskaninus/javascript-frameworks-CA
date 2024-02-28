import React from "react";
import SearchIcon from "../../img/search.png";

function SearchBar() {
    return (
        <form className="search-form" action="search">
            <input type="text" placeholder="Search" />
            <button><img src={SearchIcon} alt="Search" /></button>
        </form>
    );  
}

export default SearchBar;