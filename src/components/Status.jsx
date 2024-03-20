export default function Status() {
  return (
    <div>
      <label htmlFor="status" className="text-white">
        Status
      </label>
      <select
        id="status"
        className="block w-full py-2 px-3 mt-1 rounded-md border border-gray-300 bg-storm-dust-800 text-white focus:outline-none "
      >
        <option value="backlog">Backlog</option>
        <option value="todo">To Do</option>
        <option value="inprogress">In Progress</option>
        <option value="done">Done</option>
        <option value="cancelled">Cancelled</option>
      </select>
    </div>
  );
}
