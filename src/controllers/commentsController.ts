import { Request, Response } from 'express';

// import prisma
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// import local config
import responseCode, { catchError } from '../config/responses';

// import local utils
import validators from '../validators/validators';

const commentsController = {
  // LẤY danh sách bình luận theo ID ảnh
  getCommentsByImgId: async (req: Request, res: Response) => {
    try {
      const params = req.params;
      const id = Number(params.id);

      const commentsData = await prisma.binh_luan.findMany({
        where: { hinh_id: id },
      });

      responseCode.success(
        res,
        commentsData,
        'Lấy thông tin bình luận thành công'
      );
    } catch (err) {
      responseCode.error(res, 'Lỗi Backend');
    }
  },

  // (POST) LƯU thông tin bình luận của người dùng
  postComment: async (req: Request, res: Response) => {
    try {
      const commentInfo = await validators.comment.validateAsync(req.body, {
        abortEarly: true,
        convert: false,
      });

      const postComment = await prisma.binh_luan.create({ data: commentInfo });
      responseCode.created(res, postComment, 'Đăng bình luận thành công');
    } catch (err) {
      catchError(err, req, res);
    }
  },
};

export default commentsController;
