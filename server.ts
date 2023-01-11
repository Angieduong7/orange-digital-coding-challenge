import express, { Express, Request, Response } from 'express';
import { data } from './data';
import cors from 'cors';

const app: Express = express();
app.use(cors());
const port = 8000;

app.get('/data', (req: Request, res: Response) => {
  return res.status(200).json(data);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
