import { createServer } from 'http';
import { readFile } from 'fs';
import { join } from 'path';

const __dirname = "."

const server = createServer((req, res) => {
    let filePath = join(__dirname, 'index.html');

    switch (req.url) {
      case '/about':
          filePath = join(__dirname, 'about.html');
          break;
      case '/contact-me':
          filePath = join(__dirname, 'contact-me.html');
          break;
      case '/':
          filePath = join(__dirname, 'index.html');
          break;
      default:
          filePath = join(__dirname, '404.html');
          break;
    }

    readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end('Error loading page');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }
    });
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});