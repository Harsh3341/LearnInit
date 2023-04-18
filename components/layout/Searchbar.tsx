import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="rounded-3xl flex items-center bg-stone-950 px-7">
      <input
        className="h-full rounded-3xl bg-stone-950 outline-none w-80"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <FaSearch className="text-stone-700" />
    </div>
  );
};

export default Searchbar;
