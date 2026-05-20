import { useNavigate } from "react-router-dom";

function Navbar({

  selectedSubject,

  setSelectedSubject

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

      <h1
        className="
        text-2xl
        font-bold
        "
      >
        GreenDot Classroom
      </h1>

      {/* SUBJECT BUTTONS */}

      <div
        className="
        flex
        gap-2
        flex-wrap
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