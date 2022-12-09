import { Request, Response } from 'express';

// import prisma
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// import local config
import responseCode from '../config/responses';

const usersController = {};

export default usersController;
