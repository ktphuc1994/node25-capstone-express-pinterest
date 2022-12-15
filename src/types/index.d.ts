import { PrismaClient, Prisma } from '@prisma/client';

export * from './comment';
export * from './user';
export * from './image';

// https://github.com/prisma/prisma/discussions/5107?sort=new
type Model = Prisma.ModelName;
type ModelAction =
  | 'findUnique'
  | 'findMany'
  | 'findFirst'
  | 'create'
  | 'update'
  | 'updateMany'
  | 'upsert'
  | 'delete'
  | 'deleteMany'
  | 'aggregate'
  | 'count';

type GetArgumentType<M extends Model, Action extends ModelAction> = Parameters<
  PrismaClient[M][Action]
>[0];
