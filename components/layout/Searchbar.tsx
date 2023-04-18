import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="rounded-3xl flex items-center bg-neutral-950 bg-opacity-60 px-7">
      <input
        className="h-full rounded-3xl bg-neutral-950 bg-opacity-0 outline-none w-80"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <FaSearch />
    </div>
  );
};

export default Searchbar;
