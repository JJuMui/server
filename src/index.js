import cors from "cors";
import express from "express";
import router from "./controller/router";

const PORT = Number(process.env.PORT) || 3000;
const app = express();

app.use(cors({ origin: process.env.CLINENT_URL, credentials: true }));
// cookie를 전달 시에는 credential을 true로 해줘야 함
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, () => console.log(`Server is started on ${PORT}`));
