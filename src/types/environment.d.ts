declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      SECRECT_KEY: string;
      IMAGE_URL: string;
      BCRYPT_SALT: string;
    }
  }
}
export {};
