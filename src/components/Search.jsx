export default function Search() {
  return (
    <div className="flex flex-col sm:flex-row items-center mx-8 my-8 relative">
      <label
        htmlFor="issue"
        className="text-md font-medium mr-2 text-white mb-2 sm:mb-0"
      >
        Look Up Issue
      </label>
      <div className="flex items-center w-full sm:w-64 rounded-sm bg-storm-dust-800">
        <input
          id="issue"
          type="text"
          name="issue"
          className="w-full px-4 py-2 rounded-sm placeholder-white text-white bg-storm-dust-800 focus:ring-2 sm:text-sm"
          placeholder="Search"
        />
      </div>
    </div>
  );
}
