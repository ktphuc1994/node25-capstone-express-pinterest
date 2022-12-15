import { Request, Response } from 'express';

// import prisma
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// import local config
import responseCode, { catchError } from '../config/responses';

const utilsController = {
  readme: (req: Request, res: Response) => {
    try {
      responseCode.success(
        res,
        {
          dbPort: 3306,
          backendPort: 8080,
          optional: 'drop table db_pinterest if there is no data there',
          first: 'yarn prisma db push',
          second: 'yarn prisma generate',
          third: 'yarn prisma db seed',
          fourth: 'LOGIN First',
        },
        'Cảm ơn mentor đã chấm bài'
      );
    } catch (err) {
      catchError(err, req, res);
    }
  },
};

export default utilsController;
