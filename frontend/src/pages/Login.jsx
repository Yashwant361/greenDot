import { useState } from "react";
import { useNavigate } from "react-router-dom";


import { loginTeacher } from "../services/authService";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] =
  useState("");

  const [password, setPassword] =
  useState("");

  const [loading, setLoading] =
  useState(false);

  const handleLogin =
  async (e) => {

    e.preventDefault();

    if (!email || !password) {

      alert("Please fill all fields");

      return;

    }

    try {

      setLoading(true);

      const data =
      await loginTeacher(
        email,
        password
      );

      if (data.token) {

        localStorage.setItem(
          "token",
          data.token
        );

        navigate("/dashboard");

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
        bg-gray-800
        p-8
        rounded-lg
        w-96
        flex
        flex-col
        gap-4
        "
      >

        <h1
          className="
          text-3xl
          font-bold
          text-center
          "
        >
          Tutor Login
        </h1>

        <input

          type="email"

          placeholder="Enter Email"

          value={email}

          onChange={(e) =>
            setEmail(e.target.value)
          }

          className="
          p-3
          rounded
          bg-gray-700
          outline-none
          "
        />

        <input

          type="password"

          placeholder="Enter Password"

          value={password}

          onChange={(e) =>
            setPassword(e.target.value)
          }

          className="
          p-3
          rounded
          bg-gray-700
          outline-none
          "
        />

        <button

          type="submit"

          disabled={loading}

          className="
          bg-green-500
          py-3
          rounded
          font-semibold
          hover:bg-green-600
          disabled:bg-gray-600
          "
        >

          {

            loading

            ? "Logging In..."

            : "Login"

          }

        </button>

      </form>

    </div>

  );

}

export default Login;