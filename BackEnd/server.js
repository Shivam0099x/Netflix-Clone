import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import axios from "axios";

import authRoutes from "./routes/auth.routes.js";
import movieRoutes from "./routes/movie.routes.js";
import tvRoutes from "./routes/tv.routes.js";
import searchRoutes from "./routes/search.routes.js";

import { ENV_VARS } from "./config/envVars.js";
import { connectDb } from "./config/db.js";
import { protectRoute } from "./middlewares/protectedRoutes.js";
const app = express();
const PORT = ENV_VARS.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173', // Replace with the frontend URL
  methods: 'GET,POST,PUT,DELETE',
  credentials: true // Allows cookies and other credentials to be sent
}));

axios.defaults.baseURL = 'http://localhost:5000';



app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie",protectRoute, movieRoutes);
app.use("/api/v1/tv",protectRoute, tvRoutes);
app.use("/api/v1/search",protectRoute, searchRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDb()
});