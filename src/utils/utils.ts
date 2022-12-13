import { Request, Response } from 'express';

// import prisma
import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();

// import local config
import responseCode from '../config/responses';
import { PrismaModelName } from '../types';

// const checkDataExist = async (
//   tableName: Prisma.ModelName,
//   idKey: string,
//   idValue: number
// ) => {
//   const allTableName = Object.keys(Prisma.ModelName);

//   const isDataExist = await prisma[tableName].findFirst({
//     where: { [idKey]: idValue },
//   });
//   if (isDataExist) return true;
//   return false;
// };

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
