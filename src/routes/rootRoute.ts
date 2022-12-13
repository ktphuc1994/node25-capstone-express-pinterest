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

rootRoute.get('/readme', utilsController.readme);
rootRoute.post('/signup', usersController.signup);
rootRoute.post('/login', usersController.login);
rootRoute.use('/images', tokenController.verify, imagesRoute);
rootRoute.use('/users', tokenController.verify, usersRoute);
rootRoute.use('/comments', tokenController.verify, commentsRoute);

export default rootRoute;
