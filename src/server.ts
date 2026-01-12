import express from 'express';
import bodyParser from "body-parser"
import cors from "cors"

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

export default app;