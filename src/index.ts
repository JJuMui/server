import cors from 'cors';
import express from 'express';
import router from './controller/router';
import AppDataSource from './config/dataSource';
import errorHandler from './util/errorHandler';

const PORT = Number(process.env.PORT) || 3000;
const app = express();

AppDataSource.initialize().then(() => console.log('DATABASE IS CONNECTED!'));

app.use(cors({ origin: process.env.CLINENT_URL, credentials: true }));
// cookie를 전달 시에는 credential을 true로 해줘야 함
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is started on ${PORT}`));
