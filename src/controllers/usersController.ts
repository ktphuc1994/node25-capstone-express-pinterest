import { Request, Response } from 'express';

// import prisma
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// import bcrypt
import bcrypt from 'bcrypt';

// import local config
import 'dotenv/config';
import responseCode, { catchError } from '../config/responses';

// import validator
import validators from '../validators/validators';

// import controller
import tokenController from '../middlewares/basicToken';

const usersController = {
  // SIGN UP Đăng ký user mới
  signup: async (req: Request, res: Response) => {
    try {
      const newUser = await validators
        .createUser()
        .validateAsync(req.body, { stripUnknown: true });

      const checkEmail = await prisma.nguoi_dung.findFirst({
        where: { email: newUser.email },
      });
      if (checkEmail) {
        responseCode.conflict(
          res,
          { email: newUser.email },
          'Email đã tồn tại'
        );
        return;
      }

      newUser.mat_khau = bcrypt.hashSync(
        newUser.mat_khau,
        Number(process.env.BCRYPT_SALT)
      );
      const result = await prisma.nguoi_dung.create({ data: newUser });

      responseCode.created(res, 'Success', 'Đăng ký thành công');
    } catch (err) {
      catchError(err, req, res);
    }
  },

  // ĐĂNG NHẬP
  login: async (req: Request, res: Response) => {
    try {
      const loginInfo = await validators.login.validateAsync(req.body, {
        stripUnknown: true,
      });

      const user = await prisma.nguoi_dung.findFirst({
        where: {
          email: loginInfo.email,
        },
      });
      if (!user) {
        responseCode.unauthorized(
          res,
          'Login failed',
          'Email hoặc mật khẩu không đúng'
        );
        return;
      }

      const checkPass = bcrypt.compareSync(loginInfo.mat_khau, user.mat_khau);
      if (!checkPass) {
        responseCode.unauthorized(
          res,
          'Login failed',
          'Email hoặc mật khẩu không đúng'
        );
        return;
      }

      const authtoken = tokenController.create(user);
      responseCode.created(res, { authtoken }, 'Đăng nhập thành công');
    } catch (err) {
      catchError(err, req, res);
    }
  },

  // LẤY thông tin toàn bộ user
  getUser: async (_: Request, res: Response) => {
    try {
      const usersList = await prisma.nguoi_dung.findMany({
        select: {
          nguoi_dung_id: true,
          email: true,
          ho_ten: true,
          tuoi: true,
          anh_dai_dien: true,
        },
      });
      responseCode.success(res, usersList, 'Lấy thông tin user thành công');
    } catch (err) {
      responseCode.error(res, 'Lỗi Backend');
    }
  },

  // LẤY thông tin user theo ID
  getUserById: async (req: Request, res: Response) => {
    try {
      const id = await validators.isNumber.validateAsync(
        Number(req.params.id),
        { messages: { 'number.base': 'nguoi_dung_id phải là dạng số' } }
      );

      const user = await prisma.nguoi_dung.findFirst({
        where: { nguoi_dung_id: id },
        select: {
          nguoi_dung_id: true,
          email: true,
          ho_ten: true,
          tuoi: true,
          anh_dai_dien: true,
        },
      });

      if (!user) {
        return responseCode.notFound(
          res,
          { nguoi_dung_id: id },
          'Người dùng không tồn tại'
        );
      }
      responseCode.success(res, user, 'Lấy thông tin người dùng thành công');
    } catch (err) {
      catchError(err, req, res);
    }
  },

  // LẤY danh sách hình ảnh được User tạo
  getOwnedImages: async (req: Request, res: Response) => {
    try {
      const id = await validators.isNumber.validateAsync(
        Number(req.params.id),
        { messages: { 'number.base': 'nguoi_dung_id phải là dạng số' } }
      );

      const imagesList = await prisma.hinh_anh.findMany({
        where: { nguoi_dung_id: id },
      });

      responseCode.success(res, imagesList, 'Lấy danh sách ảnh thành thông');
    } catch (err) {
      catchError(err, req, res);
    }
  },

  // LẤY danh sách hình ảnh được User Saved
  getSavedImages: async (req: Request, res: Response) => {
    try {
      const id = await validators.isNumber.validateAsync(
        Number(req.params.id),
        { messages: { 'number.base': 'nguoi_dung_id phải là dạng số' } }
      );

      const imagesList = await prisma.hinh_anh.findMany({
        where: {
          luu_anh: {
            some: { nguoi_dung_id: id },
          },
        },
      });

      responseCode.success(res, imagesList, 'Lấy danh sách ảnh thành thông');
    } catch (err) {
      catchError(err, req, res);
    }
  },

  // CẬP NHẬT thông tin User
  updateUser: async (req: Request, res: Response) => {
    try {
      const userInfo = await validators.user().validateAsync(req.body, {
        stripUnknown: true,
      });

      userInfo.mat_khau = bcrypt.hashSync(
        userInfo.mat_khau,
        Number(process.env.BCRYPT_SALT)
      );
      const result = await prisma.nguoi_dung.update({
        where: { nguoi_dung_id: userInfo.nguoi_dung_id },
        data: userInfo,
        select: {
          nguoi_dung_id: true,
          email: true,
          ho_ten: true,
          tuoi: true,
          anh_dai_dien: true,
        },
      });

      responseCode.success(res, result, 'Cập nhật user thành công');
    } catch (err) {
      catchError(err, req, res);
    }
  },
};

export default usersController;
