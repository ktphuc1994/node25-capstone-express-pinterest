import Joi from 'joi';
import { InterfaceComment } from '../types';

const validators = {
  comment: Joi.object<InterfaceComment>({
    nguoi_dung_id: Joi.number().required(),
    hinh_id: Joi.number().required(),
    ngay_binh_luan: Joi.date().iso().required(),
    noi_dung: Joi.string().min(1).required(),
  }),
};

export default validators;
