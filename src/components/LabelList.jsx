import AddIssue from './AddIssue.jsx';
import Status from './Status.jsx';
export default function LabelList() {
  const labels = [
    'bugs',
    'feature',
    'enhancements',
    'questions',
    'help wanted',
    'wont fix',
    'duplicate',
  ];

  return (
    <div className="flex flex-col  mx-1 my-1 px-1 py-1 ">
      <h1 className="text-storm-dust-100 font-bold text-3xl ">Labels</h1>
      <div className="flex flex-wrap gap-2 mt-2">
        {labels.map((label) => (
          <button
            key={label}
            className="bg-storm-dust-700 text-white px-3 py-1 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          >
            {label}
          </button>
        ))}
      </div>
      <Status />
      <AddIssue />
    </div>
  );
}
