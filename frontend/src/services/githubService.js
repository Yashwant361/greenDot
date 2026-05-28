import BASE_URL from "./api";

export const getGithubCommits = async (username) => {
  const response = await fetch(`${BASE_URL}/github/${username}`);

  return await response.json();
};
