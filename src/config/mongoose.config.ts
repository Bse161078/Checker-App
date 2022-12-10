import {config} from "dotenv";
import { NodeEnvironments } from "src/common/enums";
config();
export default function dbConfig(){
    const {NODE_ENV, DB_HOST, DB_PASSWORD, DB_NAME, DB_USERNAME, DB_PORT, DB_OPTION} = process.env;

    const connection = 
    NODE_ENV === NodeEnvironments.PRODUCTION ?
        `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?${DB_OPTION}` :
        `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
    return connection;

}