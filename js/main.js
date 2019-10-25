import 'babel-polyfill';
import world from './world';
import { Route } from './route';
/** route 초기화 리스너 작업 */
window.addEventListener('popstate', e => {
    console.log('[popstate]', e.state);
    Route.router(e.state.path);
});

/** navigation 클릭 이벤트 등록 */
const navigation = document.getElementById('navigation');
navigation.addEventListener('click', e => {
    if (!e.target || e.target.nodeName !== 'A') return;
    e.preventDefault();
    const path = e.target.getAttribute('href');
    history.pushState({ path }, null, path);
    Route.router(path);
});

/** 초기 라우터 위치 지정 */
Route.router('/');
/** selector tag 테스트 용도 */
document.getElementById('output').innerHTML = `Hello ${world}!`;