import {readFileSync} from "fs"
import toml from "toml"
export const ReadConfig = ()=> {
    const tomlfile = readFileSync("atoria.toml", "utf-8");
    const config = toml.parse(tomlfile);
    return config.env
}