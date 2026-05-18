const getGithubContribution = async (req, res) => {

   try {

      const username = req.params.username;

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
               "Content-Type": "application/json",

               Authorization:
               `Bearer ${process.env.GITHUB_TOKEN}`
            },

            body: JSON.stringify({
               query
            })
         }
      );

      const result = await response.json();

      const weeks =
      result.data.user.contributionsCollection
      .contributionCalendar.weeks;

      let todayData = null;

      for (let week of weeks) {

         for (let day of week.contributionDays) {

            if (
               day.date ===
               new Date().toISOString().split("T")[0]
            ) {

               todayData = {
                  date: day.date,
                  contributionCount: day.contributionCount
               };

            }

         }

      }

      res.json(todayData);

   } catch (error) {

      res.status(500).json({
         message: error.message
      });

   }

};

module.exports = {
   getGithubContribution
};