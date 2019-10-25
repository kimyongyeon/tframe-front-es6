import $ from 'jQuery';
import Log from './Logging';

/** RestClient 클래스 정의 */
class RestClient {
    constructor() {
        this.DATA_TYPE = "json";
        this.CONTENT_TYPE = "application/json; charset=UTF-8";
    }
    /** log Print method */
    logPrint(methodName, jsonData) {
        Log.debug(`Method: ${methodName}`);
        Log.debug(JSON.stringify(jsonData));
    }
    /** 공통 RequestBoby 전송 함수 */
    postRequest(url, reqBody, methodName, callback) {
        let log = this.logPrint;
        log(methodName, `req=${reqBody}`);
        $.ajax({
            method: methodName,
            url: url,
            dataType:RestClient.DATA_TYPE,
            contentType:RestClient.CONTENT_TYPE,
            data: JSON.stringify(reqBody),
            success: function(data) {
                log(methodName, `res=${data}`);
                callback(data);
            },
            error : function(error) {
                Log.error(error);
            }
        });
    }
    /** 공통 GET 전송 함수 */
    getRequset(url, methodName, callback) {
        let log = this.logPrint;
        log(methodName, `url=${url}`);
        $.ajax({
            method: methodName,
            url: url,
            success: function(data) {
                log(methodName, `res=${data}`);
                callback(data);
            },
            error : function(error) {
                Log.error(error);
            }
        });
    }
    getPromise(url, methodName="GET") {
        let log = this.logPrint;
        return new Promise(function(resolve, reject){
            $.ajax({
                method: methodName,
                url: url,
                success: function(data) {
                    log(methodName, `res=${data}`);
                    resolve(data);
                },
                error : function(error) {
                    reject(error);
                }
            });
        });
    }
    /** Http Method GET */
    get(url="", callback) {
        this.getRequset(url, "GET", callback);
    }
    /** Http Method POST */
    post(url="", reqBody={}, callback) {
        this.postRequest(url, reqBody, "POST", callback);
    }
    /** Http Method DELETE */
    delete(url="", reqBody={}, callback) {
        this.postRequest(url, reqBody, "DELETE", callback);
    }
    /** Http Method PUT */
    put(url="", reqBody={}, callback) {
        this.postRequest(url, reqBody, "PUT", callback);
    } 
}
export default new RestClient();
