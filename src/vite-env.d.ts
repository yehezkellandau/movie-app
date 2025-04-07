/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_TOKEN_API:string,
    readonly VITE_ACCOUNT_ID:string,
    readonly VITE_URL_API:string,
}
interface ImportMeta {
    readonly env:ImportMetaEnv
}