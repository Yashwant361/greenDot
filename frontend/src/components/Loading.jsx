import SkeletonRow from "./SkeletonRow";

function Loading() {
  return (
    <div className="overflow-x-auto border border-white-700 rounded-lg">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="p-4">Name</th>
            <th className="p-4">Subject</th>
            <th className="p-4">Github</th>
            <th className="p-4">Commits</th>
            <th className="p-4">Date</th>
            <th className="p-4">Status</th>
          </tr>
        </thead>
        <tbody>
          <SkeletonRow />
          <SkeletonRow />
          <SkeletonRow />
          <SkeletonRow />
          <SkeletonRow />
        </tbody>
      </table>
    </div>
  );
}

export default Loading;
