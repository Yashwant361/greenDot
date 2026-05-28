import BASE_URL from "../services/api";
import { useState } from "react";
import Navbar from "../components/Navbar";
import StudentTable from "../components/StudentTable";
import Loading from "../components/Loading";
import useStudents from "../hooks/useStudents";

function Dashboard() {
  const { students, loading } = useStudents();

  const [selectedSubject, setSelectedSubject] = useState("All");

  const filteredStudents =
    selectedSubject === "All"
      ? students
      : students.filter((student) => student.subject === selectedSubject);

  const handleClearAll = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete all students?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`${BASE_URL}/students/all`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      alert(data.message);

      // better than reload (optional improvement later)
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="  min-h-screen bg-gray-900 ">
      <Navbar
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject}
      />

      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">
            {selectedSubject} Students
          </h1>

          <button
            onClick={handleClearAll}
            disabled={students.length === 0}
            className="
    bg-red-500 px-4 py-2 rounded
    disabled:bg-gray-600
  "
          >
            Clear All
          </button>
        </div>

        {loading ? <Loading /> : <StudentTable students={filteredStudents} />}
      </div>
    </div>
  );
}

export default Dashboard;
