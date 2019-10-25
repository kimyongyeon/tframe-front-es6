import Log from './Logging';

/** Storage 클래스 정의 */
class Storage {
    logPrint(key, body) {
        Log.debug(`key=${key}, body=${JSON.stringify(body)}`);
    }
    /** Storage 키 저장 */
    save(key, body) {
        this.logPrint(key, body);
        localStorage.setItem(key, JSON.stringify(body));
    }
    /** Storage 키 조회 */
    get(key) {
        this.logPrint(key, body);
        return localStorage.getItem(key);
    }
    /** Storage 키 수정 */
    update(key, body) {
        this.logPrint(key, body);
        let readBody = this.get(key);
        /** 기존 값과 동일할 경우 수정없이 return */
        if (readBody == JSON.parse(body)) {
            return;
        }
        localStorage.setItem(key, JSON.stringify(body));
    }
    /** Storage 키 삭제 */
    del(key) {
        this.logPrint(key, body);
        localStorage.removeItem(key);
    }
    /** Storage 전체 삭제 */
    clear() {
        this.logPrint(key, body);
        localStorage.clear();
    }
} 
export default new Storage();