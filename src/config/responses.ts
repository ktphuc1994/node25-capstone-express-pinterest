import { Response } from 'express';

const responseCode = {
  success: (res: Response, data: any, message: string) => {
    res.status(200).json({
      message,
      content: data,
    });
  },
  created: (res: Response, data: any, message: string) => {
    res.status(201).json({
      message,
      content: data,
    });
  },
  failSyntax: (res: Response, data: any, message: string) => {
    res.status(400).json({
      message,
      content: data,
    });
  },
  unauthorized: (res: Response, data: any, message: string) => {
    res.status(401).json({
      message,
      content: data,
    });
  },
  notFound: (res: Response, data: any, message: string) => {
    res.status(404).json({
      message,
      content: data,
    });
  },
  conflic: (res: Response, data: any, message: string) => {
    res.status(409).json({
      message,
      content: data,
    });
  },
  error: (res: Response, message: string) => {
    res.status(500).send(message);
  },
};

export default responseCode;
