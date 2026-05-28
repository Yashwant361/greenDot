import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginTeacher } from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");

      return;
    }

    try {
      setLoading(true);

      const data = await loginTeacher(email, password);

      if (data.token) {
        localStorage.setItem("token", data.token);

        // navigate("/dashboard");
        window.location.href = "/dashboard";
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);

      alert("Login Failed");
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
        onSubmit={handleLogin}
        className="
  bg-gray-800/90
  backdrop-blur-md
  border
  border-gray-700
  shadow-2xl
  p-8
  rounded-2xl
  w-full
  max-w-md
  flex
  flex-col
  gap-5
  "
      >
        <div className="text-center">
          <h1
            className="
      text-4xl
      font-extrabold
      text-green-400
      "
          >
            Tutor Login
          </h1>

          <p
            className="
      text-gray-400
      mt-2
      text-sm
      "
          >
            Access GreenDot Classroom Dashboard
          </p>
        </div>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="
    p-3
    rounded-xl
    bg-gray-700
    border
    border-gray-600
    outline-none
    focus:ring-2
    focus:ring-green-500
    focus:border-green-500
    transition
    "
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          className="
    p-3
    rounded-xl
    bg-gray-700
    border
    border-gray-600
    outline-none
    focus:ring-2
    focus:ring-green-500
    focus:border-green-500
    transition
    "
        />

        <button
          type="submit"
          disabled={loading}
          className="
    bg-green-500
    py-3
    rounded-xl
    font-semibold
    text-lg
    hover:bg-green-600
    transition
    duration-300
    disabled:bg-gray-600
    disabled:cursor-not-allowed
    "
        >
          {loading ? "Logging In..." : "Login"}
        </button>

        <div
          className="
    bg-gray-900
    border
    border-gray-700
    rounded-xl
    p-3
    text-sm
    text-gray-300
    text-center
    "
        >
          <span className="text-green-400 font-semibold">Demo Credentials</span>
          <br />
          admin@gmail.com
          <br />
          Password: 123456
        </div>

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

export default Login;
