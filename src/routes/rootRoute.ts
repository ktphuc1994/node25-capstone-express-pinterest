import express from 'express';
const rootRoute = express.Router();

// import middlewares
import tokenController from '../middlewares/basicToken';

// import local routes
import imagesRoute from './imagesRoute';
import usersRoute from './usersRoute';
import commentsRoute from './commentsRoute';

// import controller
import utilsController from '../controllers/utilsController';
import usersController from '../controllers/usersController';

// rootRoute.post('/new-token', (req: Request, res: Response) => {
//   try {
//     const data = req.body;
//     const newToken = tokenController.create(data);
//     responseCode.created(res, newToken, 'Token created');
//   } catch (err) {
//     responseCode.error(res, 'Backend error');
//   }
// });

rootRoute.get('/readme', utilsController.readme);
rootRoute.post('/signup', usersController.signup);
rootRoute.post('/login', usersController.login);
rootRoute.use('/images', imagesRoute);
rootRoute.use('/users', usersRoute);
rootRoute.use('/comments', commentsRoute);

export default rootRoute;
