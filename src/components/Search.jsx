import { CiSearch } from "react-icons/ci";
const Search = ({ search, inputRef }) => {
  const handleKey = (e) => {
    if (e.key === "Enter") {
      search(inputRef.current.value);
    }
  };
  return (
    <div>
      {/* ---Search---- */}
      <div className="flex justify-between px-">
        <input
          ref={inputRef}
          onKeyDown={handleKey}
          className="bg-gray-200 rounded-full px-4 min-w-2/12 mx-2 border-none outline-none"
          placeholder="Search city..."
          type="text"
        />
        <button
          className="bg-gray-200 rounded-full p-4 text-2xl text-gray-400 hover:text-gray-900 transition-colors duration-300"
          onClick={() => search(inputRef.current.value)}
        >
          <CiSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
