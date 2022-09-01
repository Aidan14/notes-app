import { BsSearch } from "react-icons/bs";

function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        spellCheck="false"
        className="search-bar__input"
        placeholder="Search By Content or Category"
      />
      <button className="search-bar__button--search">
        <BsSearch />
      </button>
    </div>
  );
}

export default SearchBar;
