const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const githubRoute = require('./routes/githubRoutes');
const connectDB = require('./db/dbConnection');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Connect to database
connectDB();

app.use('/github', githubRoute);

app.get('/', (req, res) => {
    res.send('Server Running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});   