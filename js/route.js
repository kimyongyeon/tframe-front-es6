/** view template file import */
import AboutController from './data/about.js';
import {axiosAsyncGetTest,htmlMaker} from './data/home.js';
import {HTML_SERVICE_TAG, myFunction} from './data/service.js';
/** 컨텐츠 영역 지정 */
const root = document.querySelector('.app-root');

/** Path 분기 처리 클래스 정의 */
const routes = {
    '/': function () {
        /** Promise 객체를 받아서 결과값을 화면에 렌더링 한다. */
        axiosAsyncGetTest().then((data) => {
            let html = htmlMaker(data);
            Route.renderHtml(`${html}`);
        });  
    },
    '/service': function () {
        Route.renderHtml(`${HTML_SERVICE_TAG}`);
        /** Button Tag에 파라미터를 넘겨야 할 경우 */
        const btn = document.querySelector('#btnTest');
        btn.addEventListener("click", myFunction, false);
    },
    '/about': function () {
        /** about Controller 호출 */
        let aboutCtrl = new AboutController();     
        /** about Service 호출 */
        aboutCtrl.getService().then((data) => {
            /** HTML rendering 출력 */
            Route.renderHtml(aboutCtrl.htmlTagMaker(data));
            /** Event Handler 등록 */
            aboutCtrl.event();
        });        
    },
    otherwise(path) {
      root.innerHTML = `${path} Not Found`;
    }
};
/** 라우트 클래스 정의 */
export const Route = {
    /** redering json 처리 용도 */
    render: function (data) {
        const json = data;
        root.innerHTML = `<h1>${json.title}</h1><p>${json.content}</p>`;
    },
    /** redering html 처리 용도 */
    renderHtml: function(html) {
        root.innerHTML = html;
    },
    /** pjax 처리 용도 */
    get: function(url) {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open('GET', url);
            req.send();
            req.onreadystatechange = function () {
              if (req.readyState === XMLHttpRequest.DONE) {
                if (req.status === 200) resolve(req.response);
                else reject(req.statusText);
              }
            };
          });
    },
    /** 라우터 클래스 호출 용도 */
    router: function (path) {
        (routes[path] || routes.otherwise)(path);
    },

}