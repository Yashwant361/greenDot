function StudentRow({ student }) {

    return (

        <tr
            className="
      text-center
      border-t
      border-gray-700
      hover:bg-gray-800
      "
        >

            <td className="p-4">
                {student.name}
            </td>

            <td className="p-4">
                {student.subject}
            </td>

            <td className="p-4">
                {student.githubUsername}
            </td>

            <td className="p-4">
                {student.commits}
            </td>

            <td className="p-4 text-yellow-400">
                {student.date}
            </td>

            <td className="p-4">

                {

                    student.commits >= 6

                        ? "✅ Completed"

                        : "❌ Pending"

                }

            </td>

        </tr>

    );

}

export default StudentRow;