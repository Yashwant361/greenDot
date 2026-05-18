const express = require("express");

const {
    getGithubContribution
} = require("../controllers/githubController");

const router = express.Router();

router.get("/:username", getGithubContribution);

module.exports = router;