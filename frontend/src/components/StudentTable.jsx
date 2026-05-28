import StudentRow from "./StudentRow";

function StudentTable({ students, contributions }) {
  return (
    <div
      className=" overflow-x-auto
      border
      border-gray-700
      rounded-lg
"
    >
      <table
        className="
        min-w-full
        table-auto
        text-white
        "
      >
        <thead>
          <tr
            className="
            bg-gray-800
            "
          >
            <th className="p-4">Name</th>

            <th className="p-4">Subject</th>

            <th className="p-4">GitHub</th>

            <th className="p-4">Commits</th>

            <th className="p-4">Date</th>

            <th className="p-4">Status</th>
          </tr>
        </thead>

        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center  p-6 ">
                No Students Found
              </td>
            </tr>
          ) : (
            students.map((student) => (
              <StudentRow key={student.githubUsername} student={student} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
