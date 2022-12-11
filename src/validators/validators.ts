import Joi from 'joi';
import { InterfaceComment, InterfaceUser } from '../types';

const validators = {
  isNumber: Joi.number().required(),
  comment: Joi.object<InterfaceComment>({
    nguoi_dung_id: Joi.number().required(),
    hinh_id: Joi.number().required(),
    ngay_binh_luan: Joi.string().isoDate().required(),
    noi_dung: Joi.string().min(1).required(),
  }),
  user: Joi.object<InterfaceUser>({
    nguoi_dung_id: Joi.number().required(),
    ho_ten: Joi.string().min(1).required(),
    email: Joi.string().email().required(),
    tuoi: Joi.number().required(),
    mat_khau: Joi.string().required(),
    anh_dai_dien: Joi.string(),
  }),
};

export default validators;
