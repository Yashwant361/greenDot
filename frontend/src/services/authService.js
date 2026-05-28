import BASE_URL from "./api";

export const loginTeacher = async (email, password) => {
  const response = await fetch(
    `${BASE_URL}/auth/login`,

    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  return await response.json();
};
