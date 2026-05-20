
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../services/api";
function Login() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        `${BASE_URL}/auth/login`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({
            email,
            password
          })
        }
      );

      const data = await response.json();

      console.log(data);

      if (response.ok) {

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

          className="
          bg-green-500
          py-3
          rounded
          font-semibold
          hover:bg-green-600
          "
        >
          Login
        </button>

      </form>

    </div>

  );

}

export default Login;