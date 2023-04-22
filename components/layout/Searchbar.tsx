import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="rounded-3xl flex items-center bg-white bg-opacity-20 px-7 border border-black/20 shadow-inner w-3/5 h-12 justify-between">
      <input
        className="h-full rounded-3xl bg-white bg-opacity-0 outline-none w-80"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <FaSearch className="hover:cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300" />
    </div>
  );
};

export default Searchbar;
