import express from 'express';
import { router } from './routes/router.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

try {
  const app = express();
  const PORT = 3000;

  // Get the directory name of the current module's path. (equivalent to __dirname in CommonJS).
  const directoryFullName = dirname(fileURLToPath(import.meta.url));

  app.set('view engine', 'ejs');
  // Set views directory. Note: join is used to join the directory paths
  app.set('views', join(directoryFullName, 'views'));

  // Serve static files. Assuming they are in a directory named 'public' at the root of your project.
  app.use(express.static(join(directoryFullName, '..', 'public')));

  // Register routes. Assuming all your routes will start from the root
  app.use('/', router);

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
} catch (error) {
  console.error(`Error: ${err.message}`)
  process.exit(1)
}