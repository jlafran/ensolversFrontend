import ServerConfig from "../../../config/serverConfig";
import handleResponse from "../handleResponse";

export default (resource, props, body) => {
    return fetch(
        `${ServerConfig.serverRoute}` + resource, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + window.localStorage.getItem("token")
            },
            body: body
        }).then(res => {
            return handleResponse(res, props);
        });
};