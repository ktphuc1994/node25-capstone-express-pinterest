import { Request, Response } from 'express';

// import prisma
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// import local config
import responseCode from '../config/responses';

const imagesController = {
  getImages: async (_: Request, res: Response) => {
    try {
      const imageArr = await prisma.hinh_anh.findMany();
      responseCode.success(res, imageArr, 'Lấy danh sách ảnh thành công');
    } catch (err) {
      responseCode.error(res, 'Lỗi Backend');
    }
  },
};

export default imagesController;
