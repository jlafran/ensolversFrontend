import ServerConfig from "../config/serverConfig";
import handleResponse from "../handleResponse";

export default (resource, props) => {
    return fetch(
        `${ServerConfig.serverRoute}` + resource, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(res => {
            return handleResponse(res, props);
        });
};