import express from 'express';
const imagesRoute = express.Router();

// import local controller
import imagesController from '../controllers/imagesController';

imagesRoute.use('/', imagesController.getImages);

export default imagesRoute;
