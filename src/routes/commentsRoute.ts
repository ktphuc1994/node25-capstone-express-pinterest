import express from 'express';
const commentsRoute = express.Router();

// import local controller
import commentsController from '../controllers/commentsController';

commentsRoute.post('/post', commentsController.postComment);

export default commentsRoute;
