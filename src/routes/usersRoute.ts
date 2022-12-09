import express from 'express';
const usersRoute = express.Router();

// import local controller
import usersController from '../controllers/usersController';

usersRoute.get('/');
usersRoute.post('/signup');
usersRoute.post('/login');

export default usersRoute;
