import express from 'express';
import router from './routes/router.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import GymLibrary from '../L2-GymLibrary/src/GymLibrary.js'

try {

  const app = express();
  const PORT = 3000;

  const directoryFullName = dirname(fileURLToPath(import.meta.url));

  app.set('view engine', 'ejs');
  app.set('views', join(directoryFullName, 'views'));

  app.use(express.urlencoded({ extended: false }));

  app.use(express.static(join(directoryFullName, '..', 'public')));
  app.use('/L2-GymLibrary', express.static(join(directoryFullName, '..', 'L2-GymLibrary', 'src')));

  const gymLibrary = new GymLibrary();
  const mainRouter = new router(gymLibrary).getRouter();
  app.use('/', mainRouter);

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
} catch (error) {
  console.error(`Error: ${error.message}`)
  process.exit(1)
}