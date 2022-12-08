declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      SECRECT_KEY: any;
    }
  }
}
export {};
