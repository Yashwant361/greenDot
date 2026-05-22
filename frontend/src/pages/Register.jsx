
import { useState } from "react";
import BASE_URL from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [githubProfile, setGithubProfile] = useState("");
    const [subject, setSubject] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRegister = async (e) => {

        e.preventDefault();

        // Trim spaces
        const trimmedName = name.trim();
        const trimmedGithub =
            githubProfile.trim();

        // Empty field validation
        if (
            !trimmedName ||
            !trimmedGithub ||
            !subject
        ) {

            alert("Please fill all fields");
            return;

        }

        // GitHub URL validation
        const githubRegex =
            /^https:\/\/github\.com\/[A-Za-z0-9_-]+\/?$/;

        if (!githubRegex.test(trimmedGithub)) {

            alert(
                "Enter valid GitHub profile URL"
            );

            return;

        }

        try {

            setLoading(true);

            const response = await fetch(
                `${BASE_URL}/students`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        name: trimmedName,
                        githubProfile: trimmedGithub,
                        subject
                    })
                }
            );

            const data = await response.json();

            console.log(data);

            if (response.ok) {

                alert(
                    data.message ||
                    "Student Registered Successfully"
                );

                // Clear Inputs
                setName("");
                setGithubProfile("");
                setSubject("");

            } else {

                alert(
                    data.message ||
                    "Registration Failed"
                );

            }

        } catch (error) {

            console.log(error);

            alert(
                "Server error. Please try again."
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div
            className="
            min-h-screen
            bg-gray-900
            flex
            items-center
            justify-center
            text-white
            "
        >

            <form
                onSubmit={handleRegister}

                className="
                bg-gray-800
                p-8
                rounded-lg
                w-96
                flex
                flex-col
                gap-4
                shadow-lg
                "
            >

                <h1
                    className="
                    text-3xl
                    font-bold
                    text-center
                    "
                >
                    Student Registration
                </h1>

                <input
                    type="text"

                    placeholder="Enter Name"

                    value={name}

                    onChange={(e) =>
                        setName(e.target.value)
                    }

                    className="
                    p-3
                    rounded
                    bg-gray-700
                    outline-none
                    "
                />

                <input
                    type="text"

                    placeholder=
                    "GitHub Profile URL"

                    value={githubProfile}

                    onChange={(e) =>
                        setGithubProfile(
                            e.target.value
                        )
                    }

                    className="
                    p-3
                    rounded
                    bg-gray-700
                    outline-none
                    "
                />

                <select

                    value={subject}

                    onChange={(e) =>
                        setSubject(e.target.value)
                    }

                    className="
                    p-3
                    rounded
                    bg-gray-700
                    outline-none
                    "
                >

                    <option value="">
                        Select Subject
                    </option>

                    <option value="HTML">
                        HTML
                    </option>

                    <option value="CSS">
                        CSS
                    </option>

                    <option value="JavaScript">
                        JavaScript
                    </option>

                    <option value="React">
                        React
                    </option>

                    <option value="MERN">
                        MERN
                    </option>

                    <option value="DSA">
                        DSA
                    </option>

                </select>

                <button
                    type="submit"

                    disabled={loading}

                    className="
                    bg-blue-500
                    py-3
                    rounded
                    font-semibold
                    hover:bg-blue-600
                    disabled:bg-gray-500
                    "
                >

                    {
                        loading
                            ? "Registering..."
                            : "Register"
                    }

                </button>

                <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="text-sm text-gray-400 hover:text-white"
                >
                    ← Back to Home
                </button>
            </form>


        </div>

    );

}

export default Register;