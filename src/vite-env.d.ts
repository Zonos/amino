/// <reference types="vite/client" />

type ImportMetaEnv = {
  readonly VITE_APP_TITLE: string;
  // more env variables...
};

type ImportMeta = {
  readonly env: ImportMetaEnv;
};
