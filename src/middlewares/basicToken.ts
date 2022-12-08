import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import responseCode from '../config/responses';
import 'dotenv/config';

const tokenController = {
  create: (data: any) => {
    const token = jwt.sign({ data }, 'KhucThienPhuc', {
      algorithm: 'HS256',
      expiresIn: '2d',
    });
    return token;
  },
  check: (token: any) => {
    try {
      const checkToken = jwt.verify(token, 'KhucThienPhuc');
      return { checkData: true, message: '' };
    } catch (err: any) {
      return { checkData: false, message: err.message };
    }
  },
  verify: (req: Request, res: Response, next: NextFunction) => {
    try {
      const { authtoken } = req.headers;
      const verifyToken = tokenController.check(authtoken);
      if (verifyToken.checkData) {
        next();
        return;
      }
      responseCode.unauthorized(res, 'Token không hợp lệ', verifyToken.message);
    } catch (err) {
      responseCode.error(res, 'Lỗi Backend');
    }
  },
};

export default tokenController;
