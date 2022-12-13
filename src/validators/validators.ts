import Joi from 'joi';
import {
  InterfaceComment,
  InterfaceImage,
  InterfaceLogin,
  InterfaceUser,
} from '../types';

const validators = {
  isNumber: Joi.number().required(),
  login: Joi.object<InterfaceLogin>({
    email: Joi.string().email().required(),
    mat_khau: Joi.string().min(1).required(),
  }),
  comment: Joi.object<InterfaceComment>({
    nguoi_dung_id: Joi.number().required(),
    hinh_id: Joi.number().required(),
    ngay_binh_luan: Joi.string().isoDate().required(),
    noi_dung: Joi.string().min(1).required(),
  }),
  user: Joi.object<InterfaceUser>({
    nguoi_dung_id: Joi.number(),
    ho_ten: Joi.string().min(1).required(),
    email: Joi.string().email().required(),
    tuoi: Joi.number().required(),
    mat_khau: Joi.string().required(),
    anh_dai_dien: Joi.string(),
  }),
  createUser: function () {
    return this.user.fork('nguoi_dung_id', (item) => item.forbidden());
  },
  image: Joi.object<InterfaceImage>({
    ten_hinh: Joi.string().min(1).required(),
    duong_dan: Joi.string().min(1).required(),
    mo_ta: Joi.string().min(1).required(),
    nguoi_dung_id: Joi.number().required(),
  }),
};

export default validators;
