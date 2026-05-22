
import { useState } from "react";
import Navbar from "../components/Navbar";
import StudentTable from "../components/StudentTable";
import Loading from "../components/Loading";
import useStudents from "../hooks/useStudents";

function Dashboard() {

  const {

    students,

    loading

  } = useStudents();

  const [

    selectedSubject,

    setSelectedSubject

  ] = useState("All");

  const filteredStudents =

    selectedSubject === "All"

    ? students

    : students.filter(

        (student) =>

          student.subject ===
          selectedSubject

      );

  return (

    <div
      className="
      min-h-screen
      bg-gray-900
      "
    >

      <Navbar

        selectedSubject={
          selectedSubject
        }

        setSelectedSubject={
          setSelectedSubject
        }

      />

      <div className="p-8">

        <h1
          className="
          text-3xl
          font-bold
          text-white
          mb-6
          "
        >

          {selectedSubject} Students

        </h1>

        {

          loading

          ? <Loading />

          : (

              <StudentTable
                students={
                  filteredStudents
                }
              />

            )

        }

      </div>

    </div>

  );

}

export default Dashboard;