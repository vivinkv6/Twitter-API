const rwClient = require("./twitterClient.js");
const CronJob = require("cron").CronJob;

const tweet = async () => {

    try {
        await rwClient.v2.tweet("Hello coders");
    }

    catch (error) {
        console.error(error);
    }

}


const job = new CronJob("* * * * *", () => {
    console.log("cronjob running")//check if it is work or not
    tweet();
});      //tweet after 1 minute


job.start();
