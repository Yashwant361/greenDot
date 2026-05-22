import { useEffect, useState } from "react";

import { getStudents }
    from "../services/studentService";

import { getGithubCommits }
    from "../services/githubService";

function useStudents() {

    const [students, setStudents] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        fetchAllStudents();

    }, []);

    const fetchAllStudents =
        async () => {

            try {

                const studentsData =
                    await getStudents();

                const updatedStudents =
                    await Promise.all(

                        studentsData.map(

                            async (student) => {

                                try {

                                    const githubData =
                                        await getGithubCommits(
                                            student.githubUsername
                                        );

                                    return {

                                        ...student,

                                        commits:
                                            githubData
                                                ?.contributionCount || 0,

                                        date:
                                            githubData
                                                ?.date || "N/A"

                                    };

                                } catch {

                                    return {

                                        ...student,

                                        commits: 0,

                                        date: "N/A"

                                    };

                                }

                            }

                        )

                    );

                setStudents(updatedStudents);

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }

        };

    return {

        students,

        loading

    };

}

export default useStudents;