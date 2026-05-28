import BASE_URL from "./api";

export const getStudents = async (req, res) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${BASE_URL}/students`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
};
