import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import BASE_URL from "../services/api";
function Dashboard() {

  const [students, setStudents] =
  useState([]);

  const [loading, setLoading] =
  useState(true);

  useEffect(() => {

    fetchStudents();

  }, []);

  const fetchStudents = async () => {

    try {

      const token =
      localStorage.getItem("token");

      if (!token) {

        alert("Please login first");
        return;

      }

      const response = await fetch(
        `http://${BASE_URL}:8085/students`,
        {
          headers: {
            Authorization:
            `Bearer ${token}`
          }
        }
      );

      const data =
      await response.json();

      const updatedStudents =
      await Promise.all(

        data.map(async (student) => {

          try {

            const contributionResponse =
            await fetch(
              `http://${BASE_URL}:8085/github/${student.githubUsername}`
            );

            const contributionData =
            await contributionResponse.json();

            return {

              ...student,

              commits:
              contributionData
              ?.contributionCount || 0,

              date:
              contributionData
              ?.date || "N/A"

            };

          } catch {

            return {

              ...student,

              commits: 0,

              date: "N/A"

            };

          }

        })

      );

      setStudents(updatedStudents);

    } catch (error) {

      console.log(error);

      alert(
        "Failed to fetch students"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <>

      <Navbar />

      <div
        className="
        min-h-screen
        bg-gray-900
        text-white
        p-10
        "
      >

        <h1
          className="
          text-4xl
          font-bold
          mb-8
          "
        >
          GreenDot Classroom Dashboard
        </h1>

        {
          loading

          ? (

            <h1
              className="
              text-2xl
              "
            >
              Loading...
            </h1>

          )

          : (

            <div
              className="
              overflow-x-auto
              border
              border-gray-700
              rounded-lg
              "
            >

              <table
                className="
                min-w-full
                table-auto
                "
              >

                <thead>

                  <tr
                    className="
                    bg-gray-800
                    "
                  >

                    <th className="p-4 whitespace-nowrap">
                      Name
                    </th>

                    <th className="p-4 whitespace-nowrap">
                      Subject
                    </th>

                    <th className="p-4 whitespace-nowrap">
                      GitHub
                    </th>

                    <th className="p-4 whitespace-nowrap">
                      Commits
                    </th>

                    <th className="p-4 whitespace-nowrap">
                      Date
                    </th>

                    <th className="p-4 whitespace-nowrap">
                      Status
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {
                    students.length === 0

                    ? (

                      <tr>

                        <td
                          colSpan="6"

                          className="
                          text-center
                          p-6
                          "
                        >
                          No Students Found
                        </td>

                      </tr>

                    )

                    : (

                      students.map((student) => (

                        <tr

                          key={
                            student.githubUsername
                          }

                          className="
                          text-center
                          border-t
                          border-gray-700
                          hover:bg-gray-800
                          "
                        >

                          <td className="p-4 whitespace-nowrap">
                            {student.name}
                          </td>

                          <td className="p-4 whitespace-nowrap">
                            {student.subject}
                          </td>

                          <td className="p-4 whitespace-nowrap">
                            {student.githubUsername}
                          </td>

                          <td className="p-4 whitespace-nowrap">
                            {student.commits}
                          </td>

                          <td
                            className="
                            p-4
                            whitespace-nowrap
                            text-yellow-400
                            "
                          >
                            {student.date || "N/A"}
                          </td>

                          <td className="p-4 whitespace-nowrap">

                            {
                              student.commits >= 6

                              ? "✅ Completed"

                              : "❌ Pending"
                            }

                          </td>

                        </tr>

                      ))

                    )
                  }

                </tbody>

              </table>

            </div>

          )
        }

      </div>

    </>

  );

}

export default Dashboard;