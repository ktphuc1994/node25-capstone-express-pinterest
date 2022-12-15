import { Request, Response } from 'express';

// import prisma
import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();

// import local config
import responseCode from '../config/responses';

const checkDataExist = async (
  tableName: Prisma.ModelName,
  idKey: string,
  idValue: number
) => {
  let isDataExist: any;

  if ((tableName = 'nguoi_dung')) {
    isDataExist = await prisma[tableName].findFirst({
      where: { [idKey]: idValue },
    });
  }
  if ((tableName = 'hinh_anh')) {
    isDataExist = await prisma[tableName].findFirst({
      where: { [idKey]: idValue },
    });
  }
  if ((tableName = 'binh_luan')) {
    isDataExist = await prisma[tableName].findFirst({
      where: { [idKey]: idValue },
    });
  }
  if ((tableName = 'luu_anh')) {
    isDataExist = await prisma[tableName].findFirst({
      where: { [idKey]: idValue },
    });
  }

  if (isDataExist) return true;
  return false;
};

const checkReqData = (res: Response, ...reqData: any[]) => {
  for (const data of reqData) {
    if (data === undefined) {
      responseCode.badRequest(res, '', 'Missing or incorrect request data');
      return false;
    }
  }
  return true;
};

const getFileUrl = (req: Request, dir: string, filename: string) => {
  const url = req.protocol + '://' + req.get('host') + dir + '/' + filename;
  return url;
};

export { checkReqData, getFileUrl };
