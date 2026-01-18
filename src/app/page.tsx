import { FiArrowUpRight } from "react-icons/fi";
import { FiArrowDownRight } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

export default function Home() {
  return (
    <div className="max-w-250 mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="mr-2">Sort</span>
          <div className="flex items-center gap-1">
            <button
              title="Ascending"
              className="bg-green-surface-dark border-2 border-green-surface p-1 rounded-lg cursor-pointer"
            >
              <FiArrowUpRight size={24} />
            </button>
            <button
              title="Descending"
              className="bg-green-surface p-1 rounded-lg cursor-pointer"
            >
              <FiArrowDownRight size={24} />
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <label htmlFor="artist" className="mr-2">
            Search artist
          </label>
          <div className="relative flex items-center">
            <input
              className="border-2 border-green-surface py-1 pl-2 pr-10 rounded-lg focus:outline-3 outline-green-400 text-text-secondary"
              type="text"
              name=""
              id="artist"
            />
            <IoSearch
              className="absolute right-2.25"
              size={24}
              color="#12873D"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
