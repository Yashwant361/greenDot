const getGithubContribution = async (req, res) => {

   try {

      const username =
      req.params.username;

      const query = `
      query {
         user(login: "${username}") {
            contributionsCollection {
               contributionCalendar {
                  weeks {
                     contributionDays {
                        contributionCount
                        date
                     }
                  }
               }
            }
         }
      }
      `;

      const response = await fetch(
         "https://api.github.com/graphql",
         {
            method: "POST",

            headers: {
               "Content-Type":
               "application/json",

               Authorization:
               `Bearer ${process.env.GITHUB_TOKEN}`
            },

            body: JSON.stringify({
               query
            })
         }
      );

      const result =
      await response.json();

      // SAFETY CHECK
      if (
         !result.data ||
         !result.data.user
      ) {

         return res.status(404).json({
            message:
            "GitHub user not found"
         });

      }

      const weeks = result
      .data.user.contributionsCollection
      .contributionCalendar.weeks;

      // FLATTEN ALL DAYS
      const allDays =
      weeks.flatMap(
         week => week.contributionDays
      );

      // GET LATEST DAY
      const latestDay =
      allDays[allDays.length - 1];

      // SEND RESPONSE
      return res.json({

         date:
         latestDay?.date || "N/A",

         contributionCount:
         latestDay?.contributionCount || 0

      });

   } catch (error) {

      return res.status(500).json({
         message: error.message
      });

   }

};

module.exports = {
   getGithubContribution
};