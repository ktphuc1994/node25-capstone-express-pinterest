import { Request, Response } from 'express';

// import prisma
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// import local config
import responseCode, { catchError } from '../config/responses';

// import validator
import validators from '../validators/validators';

const imagesController = {
  // LẤY danh sách ảnh
  getImages: async (_: Request, res: Response) => {
    try {
      const imagesData = await prisma.hinh_anh.findMany();
      responseCode.success(res, imagesData, 'Lấy danh sách ảnh thành công');
    } catch (err) {
      responseCode.error(res, 'Lỗi Backend');
    }
  },

  // LẤY danh sách ảnh theo tên
  getImagesByName: async (req: Request, res: Response) => {
    try {
      const { name } = req.params;
      const imagesData = await prisma.hinh_anh.findMany({
        where: { ten_hinh: { contains: `${name}` } },
      });

      if (imagesData.length === 0) {
        responseCode.notFound(res, { name }, 'Không tìm thấy hình ảnh');
      }

      responseCode.success(res, imagesData, 'Lấy danh sách ảnh thành công');
    } catch (err) {
      responseCode.error(res, 'Lỗi Backend');
    }
  },

  // LẤY danh sách ảnh theo ID
  getImagesById: async (req: Request, res: Response) => {
    try {
      const id = await validators.isNumber.validateAsync(
        Number(req.params.id),
        { messages: { 'number.base': 'hinh_id phải là dạng số' } }
      );

      const imageInfo = await prisma.hinh_anh.findFirst({
        where: { hinh_id: id },
        include: {
          nguoi_dung: {
            select: {
              nguoi_dung_id: true,
              email: true,
              ho_ten: true,
              tuoi: true,
              anh_dai_dien: true,
            },
          },
        },
      });

      if (!imageInfo) {
        responseCode.notFound(res, { id }, 'Không tìm thấy hình ảnh');
        return;
      }
      responseCode.success(res, imageInfo, 'Lấy thông tin ảnh thành công');
    } catch (err) {
      catchError(err, req, res);
    }
  },

  // LẤY thông tin đã lưu hình chưa
  isImageSaved: async (req: Request, res: Response) => {
    try {
      const { id, userid } = req.params;

      const savedImgData = await prisma.luu_anh.findFirst({
        where: {
          hinh_id: Number(id),
          nguoi_dung_id: Number(userid),
        },
      });

      responseCode.success(
        res,
        { isSaved: savedImgData ? true : false },
        'Success'
      );
    } catch (err) {
      responseCode.error(res, 'Lỗi Backend');
    }
  },

  // XÓA ảnh theo ID
  deleteImage: async (req: Request, res: Response) => {
    try {
      const id = await validators.isNumber.validateAsync(
        Number(req.params.id),
        { messages: { 'number.base': 'hinh_id phải là dạng số' } }
      );

      const result = await prisma.hinh_anh.delete({ where: { hinh_id: id } });
      responseCode.success(res, result, 'Xóa hình thành công');
    } catch (err) {
      catchError(err, req, res);
    }
  },
};

export default imagesController;
