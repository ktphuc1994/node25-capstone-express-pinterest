import express, { Request, Response } from 'express';
const rootRoute = express.Router();

// import local config
import responseCode from '../config/responses';

// import middlewares
import tokenController from '../middlewares/basicToken';

// // import local routes
import imagesRoute from './imagesRoute';
// const restaurantRoute = require('./restaurantRoute');

// rootRoute.post('/new-token', (req: Request, res: Response) => {
//   try {
//     const data = req.body;
//     const newToken = tokenController.create(data);
//     responseCode.created(res, newToken, 'Token created');
//   } catch (err) {
//     responseCode.error(res, 'Backend error');
//   }
// });

rootRoute.use('/images', imagesRoute);
// rootRoute.use('/restaurant', restaurantRoute);

export default rootRoute;
