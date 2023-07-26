
export type BuildMode = 'production' | 'development';
export interface BuildPath{
    entry : string,
    build : string,
    html : string,
}
export interface BuildEnv{
    port : number,
    mode : BuildMode
}
export interface BuildOption {
    mode : BuildMode,
    paths : BuildPath,
    isDev : boolean,
    port : number
}