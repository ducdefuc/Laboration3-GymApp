import express from 'express';
import { router } from './routes/router.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

try {
  const app = express();
  const PORT = 3000;

  const directoryFullName = dirname(fileURLToPath(import.meta.url));

  app.set('view engine', 'ejs');
  app.set('views', join(directoryFullName, 'views'));

  app.use(express.static(join(directoryFullName, '..', 'public')));
  app.use('/', router);

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
} catch (error) {
  console.error(`Error: ${err.message}`)
  process.exit(1)
}