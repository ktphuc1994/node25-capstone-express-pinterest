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
  getImagesByName: async (req: Request, res: Response) => {
    try {
      const { name } = req.params;
      const imageArr = await prisma.hinh_anh.findMany({
        where: { ten_hinh: { contains: `${name}` } },
      });
      responseCode.success(res, imageArr, 'Lấy danh sách ảnh thành công');
    } catch (err) {
      responseCode.error(res, 'Lỗi Backend');
    }
  },
  getImagesById: async (req: Request, res: Response) => {
    try {
      let params = req.params;
      const id = Number(params.id);
      const imageInfo = await prisma.hinh_anh.findFirst({
        where: { hinh_id: id },
      });
      if (!imageInfo) {
        responseCode.notFound(res, { id }, 'Không tìm thấy hình ảnh');
        return;
      }
      responseCode.success(res, imageInfo, 'Lấy ảnh thành công');
    } catch (err) {
      responseCode.error(res, 'Lỗi Backend');
    }
  },
};

export default imagesController;
