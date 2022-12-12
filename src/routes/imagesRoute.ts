import express from 'express';
const imagesRoute = express.Router();

// import local controller
import imagesController from '../controllers/imagesController';
import commentsController from '../controllers/commentsController';
import uploadImage from '../middlewares/uploadImage';

imagesRoute.get('/', imagesController.getImages);
imagesRoute.get('/:id', imagesController.getImagesById);
imagesRoute.get('/:id/comments', commentsController.getCommentsByImgId);
imagesRoute.get('/search/:name', imagesController.getImagesByName);
imagesRoute.get('/is-saved/:id/:userid', imagesController.isImageSaved);
imagesRoute.post(
  '/upload',
  uploadImage.single('createdImage'),
  imagesController.uploadImage
);
imagesRoute.post('/create', imagesController.createImage);
imagesRoute.delete('/delete/:id', imagesController.deleteImage);

export default imagesRoute;
