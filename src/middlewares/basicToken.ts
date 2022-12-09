import { NextFunction, Request, Response } from 'express';
import 'dotenv/config';
import jwt, { JsonWebTokenError, Secret } from 'jsonwebtoken';

// import local config
import responseCode from '../config/responses';

// jwt config
const secrectKey: Secret = process.env.SECRECT_KEY!;

const tokenController = {
  create: (nguoi_dung_id: string, ho_ten: string): string => {
    const token = jwt.sign({ nguoi_dung_id, ho_ten }, secrectKey, {
      algorithm: 'HS256',
      expiresIn: '2d',
    });
    return token;
  },
  check: (token: string): { checkData: boolean; message: string } => {
    try {
      const checkToken = jwt.verify(token, secrectKey);
      return { checkData: true, message: '' };
    } catch (err) {
      if (err instanceof JsonWebTokenError) {
        return { checkData: false, message: err.message };
      }
      return { checkData: false, message: 'Unknown' };
    }
  },
  verify: (req: Request, res: Response, next: NextFunction): void => {
    try {
      const authtoken = req.header('authtoken');
      if (!authtoken) {
        responseCode.unauthorized(res, 'Token không hợp lệ', 'Token not found');
        return;
      }
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
