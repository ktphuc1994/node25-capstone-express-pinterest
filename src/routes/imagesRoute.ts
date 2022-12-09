import express from 'express';
const imagesRoute = express.Router();

// import local controller
import imagesController from '../controllers/imagesController';

imagesRoute.get('/', imagesController.getImages);
imagesRoute.get('/:id', imagesController.getImagesById);
imagesRoute.get('/search/:name', imagesController.getImagesByName);

export default imagesRoute;
