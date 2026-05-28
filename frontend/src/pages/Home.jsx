import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div
        className="
      min-h-screen
      bg-gray-900
      text-white
      flex
      flex-col
      items-center
      justify-center
      gap-6
      "
      >
        <h1
          className="
        text-5xl
        font-bold
        "
        >
          GreenDot Classroom
        </h1>

        <p
          className="
        text-gray-300
        text-lg
        "
        >
          Track coding consistency daily
        </p>

        <div className="flex gap-4">
          <Link to="/login">
            <button
              className="
            bg-green-500
            px-6
            py-3
            rounded-lg
            font-semibold
            hover:bg-green-600
            "
            >
              Tutor Login
            </button>
          </Link>

          <Link to="/register">
            <button
              className="
            bg-blue-500
            px-6
            py-3
            rounded-lg
            font-semibold
            hover:bg-blue-600
            "
            >
              Student Registration
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
