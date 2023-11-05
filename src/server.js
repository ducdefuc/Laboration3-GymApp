import express from 'express';
import mainRouter from './routes/mainRouter.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import GymLibrary from '../L2-GymLibrary/src/GymLibrary.js';
import dotenv from 'dotenv';

dotenv.config();

try {
  const app = express();
  const PORT = process.env.PORT || 5060;
  const currentDirectory = dirname(fileURLToPath(import.meta.url));

  app.set('view engine', 'ejs');
  app.set('views', join(currentDirectory, 'views'));
  app.use(express.urlencoded({ extended: false }));

  const gymLibrary = new GymLibrary();
  const mainRouterInstance = new mainRouter(gymLibrary).getRouter();

  app.use('/gym-app', mainRouterInstance);
  app.use('/gym-app', express.static(join(currentDirectory, '..', 'public')));
  app.use('/L2-GymLibrary', express.static(join(currentDirectory, '..', 'L2-GymLibrary', 'src')));

  app.get('/test', (req, res) => {
    res.send('Test route works');
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}












