import express from 'express';
const imagesRoute = express.Router();

// import local controller
import imagesController from '../controllers/imagesController';
import commentsController from '../controllers/commentsController';

imagesRoute.get('/', imagesController.getImages);
imagesRoute.get('/:id', imagesController.getImagesById);
imagesRoute.get('/:id/comments', commentsController.getCommentsByImgId);
imagesRoute.get('/search/:name', imagesController.getImagesByName);
imagesRoute.delete('/delete/:id', imagesController.deleteImage);
imagesRoute.get('/is-saved/:id/:userid', imagesController.isImageSaved);

export default imagesRoute;
