import ServerConfig from "../../../config/serverConfig";
import handleResponse from "../handleResponse";

export default (resource, props) => {
    return fetch(
        `${ServerConfig.serverRoute}` + resource, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + window.localStorage.getItem("token")
            }
        }).then(res => {
            return handleResponse(res, props);
        });
};