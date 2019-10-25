import $ from 'jQuery';
import RestClient from "../common/RestClient"
import Log from "../common/Logging";
import { Route } from '../route';

/** 콘트롤러 클래스 정의 */
class AboutController {
    /** Http GET Request function */
    getService() {
        return RestClient.getPromise("https://jsonplaceholder.typicode.com/posts?userId=1");
    }
    /** Http POST Request function */
    postService(reqBody) {
        RestClient.post("http://httpbin.org/post", reqBody, (data) => {
            Log.debug(data);
        });
    }
    /** event listener init */
    event() {
        let self = this;
        $("#btn--postsend").on("click", function(e){
            alert("event click ok");
            let reqBody = {
                "-name-starting-with-dash": "foo"
            };
            self.postService(reqBody);
            Route.router('/');
        });           
    }
    /** Html Tag Maker */
    htmlTagMaker(data) {
        return `
            <button id='btn--postsend'>eventButton</button>
            <h1>json Data Sample</h1>
            <p>${JSON.stringify(data)}</p>
        `;
    }
}
/** Export 코드 정의 */ 
export default AboutController;