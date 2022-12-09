declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      SECRECT_KEY: string;
    }
  }
}
export {};
