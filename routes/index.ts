
import express from 'express';

const router = express.Router();


/* GET home page. */

// router to localhost/content to open home page 
router.get('/', function(req: express.Request, res: express.Response, next: express.NextFunction ) {
  res.render('index', { title: 'Home', page: 'home' });
});

// router to localhost/content to open home page 
router.get('/home', function(req: express.Request, res: express.Response, next: express.NextFunction ) {
  res.render('index', { title: 'Home', page: 'home' });
});

// router to localhost/content to open about page 
router.get('/about', function(req: express.Request, res: express.Response, next: express.NextFunction ) {
  res.render('index', { title: 'About Me', page: 'about' });
});

// router to localhost/content to open projects page
router.get('/projects', function(req: express.Request, res: express.Response, next: express.NextFunction ) {
  res.render('index', { title: 'Projects', page: 'projects' });
});

// router to localhost/content to open services page 
router.get('/services', function(req: express.Request, res: express.Response, next: express.NextFunction ) {
  res.render('index', { title: 'Services', page: 'services' });
});

// router to localhost/content to open contact page 
router.get('/contact', function(req: express.Request, res: express.Response, next: express.NextFunction ) {
  res.render('index', { title: 'Contact', page: 'contact' });
});
export default router;

