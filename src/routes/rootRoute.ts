import express from 'express';
const rootRoute = express.Router();

// import local config
import responseCode from '../config/responses';

// import middlewares
import tokenController from '../middlewares/basicToken';

// // import local routes
// const userRoute = require('./userRoute');
// const restaurantRoute = require('./restaurantRoute');

rootRoute.post('/newtoken', (req, res) => {
  try {
    const data = req.body;
    const newToken = tokenController.create(data);
    responseCode.created(res, newToken, 'Token created');
  } catch (err) {
    responseCode.error(res, 'Backend error');
  }
});

// rootRoute.use('/user', userRoute);
// rootRoute.use('/restaurant', restaurantRoute);

export default rootRoute;
