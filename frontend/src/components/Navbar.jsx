import { useNavigate } from "react-router-dom";

function Navbar({
  selectedSubject,  setSelectedSubject
}) {

  const navigate = useNavigate();

  const subjects = [

    "All",

    "HTML",

    "CSS",

    "JavaScript",

    "React",

    "MERN",

    "DSA"

  ];

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };

  return (

    <div
      className="
      bg-gray-800
      p-4
      flex
      flex-wrap
      items-center
      justify-between
      gap-4
      "
    >

      {/* LOGO */}

      <h1
        className="
        text-2xl
        font-bold
        text-green-400
        "
      >
        GreenDot Classroom
      </h1>

      {/* SUBJECT FILTER */}

      <div
        className="
        flex
        flex-wrap
        gap-2
        "
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

  );

}

export default Navbar;