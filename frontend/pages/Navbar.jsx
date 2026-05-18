import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../services/api";

function Dashboard() {

    const navigate = useNavigate();

    const [students, setStudents] = useState([]);

    const [loading, setLoading] = useState(true);

    const [
        selectedSubject,
        setSelectedSubject] =
        useState("All");

    const subjects = [
        "All",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "MERN",
        "DSA"
    ];

    useEffect(() => {
        const token =
            localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }
        fetchStudents();
    }, []);
    const fetchStudents = async () => {
        try {
            const token =
                localStorage.getItem("token");
            const response = await fetch(
                `${BASE_URL}/students`,
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );

            const data = await response.json();
            console.log(data);
            const updatedStudents =
                await Promise.all(
                    data.map(async (student) => {
                        try {
                            const contributionResponse =
                                await fetch(
                                    `${BASE_URL}/github/${student.githubUsername}`
                                );
                            const contributionData =
                                await contributionResponse.json();
                            return {
                                ...student,
                                commits:
                                    contributionData
                                        ?.contributionCount || 0
                            };
                        } catch {
                            return {
                                ...student,
                                commits: 0
                            };
                        }
                    })
                );
            setStudents(updatedStudents);
        } catch (error) {
            console.log(error);
            alert("Failed to fetch students" );

        } finally {

            setLoading(false);
        }
    };
    // FILTER STUDENTS
    const filteredStudents =
        selectedSubject === "All"
            ? students
            : students.filter(
                (student) =>
                    student.subject ===
                    selectedSubject
            );
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };
    return (
        <div
            className="
            min-h-screen
            bg-gray-900
            text-white
            "
        >
            {/* NAVBAR */}
            <div
                className="bg-gray-800 p-4 flex flex-wrap items-centerjustify-between gap-4"
            >
                <h1
                    className=" text-2xl  font-bold "
                >
                    GreenDot Classroom
                </h1>

                {/* SUBJECT BUTTONS */}
                <div
                    className=" flex gap-2 flex-wrap"
                >
                    {
                        subjects.map((subject) => (
                            <button
                                key={subject}
                                onClick={() =>
                                    setSelectedSubject(subject)
                                }
                                className={`
                                px-4
                                py-2
                                rounded
                                font-semibold
                                transition

                                ${selectedSubject === subject

                                        ? "bg-green-500"

                                        : "bg-gray-700 hover:bg-gray-600"
                                    }
                                `}
                            >

                                {subject}

                            </button>

                        ))
                    }

                </div>

                {/* LOGOUT */}
                <button

                    onClick={handleLogout}

                    className="
                    bg-red-500
                    px-4
                    py-2
                    rounded
                    hover:bg-red-600
                    "
                >
                    Logout
                </button>

            </div>

            {/* DASHBOARD */}
            <div className="p-8">

                <h2
                    className="
                    text-3xl
                    font-bold
                    mb-6
                    "
                >
                    {selectedSubject} Students
                </h2>

                {
                    loading

                        ? (

                            <h1
                                className="
                            text-xl
                            "
                            >
                                Loading...
                            </h1>

                        )

                        : (

                            <div
                                className="
                            overflow-x-auto
                            "
                            >

                                <table
                                    className="
                                w-full
                                border
                                border-gray-700
                                "
                                >

                                    <thead>
                                        <tr className=" bg-gray-800  " >

                                            <th className="p-4">
                                                Name
                                            </th>
                                            <th className="p-4">
                                                Subject
                                            </th>
                                            <th className="p-4">
                                                GitHub
                                            </th>
                                            <th className="p-4">
                                                Commits
                                            </th>
                                            <th className="p-4">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            filteredStudents.length === 0
                                                ? (
                                                    <tr>
                                                        <td colSpan="5" className=" text-center p-6 ">
                                                            No Students Found
                                                        </td>

                                                    </tr>
                                                )
                                                : (
                                                    filteredStudents.map((student) => (
                                                        <tr
                                                            key={student.githubUsername}
                                                            className=" text-center border-t border-gray-700 "
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

                                                            <td className="p-4">
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
        </div>
    );
}

export default Dashboard;