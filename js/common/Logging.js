import logMode from './CommonConstants';

/** Log 클래스 정의 */
class Log {
    constructor() {}
    /** Warring Log */
    warn(str) {
        if (logMode == "warn") {
            console.warn(str);
        }
    }
    /** Debug Log */
    debug(str) {
        if (logMode == "debug") {
            console.debug(str);
        }
    }
    /** Info Log */
    info(str) {
        if (logMode == "info") {
            console.log(str);
        }
    }
    /** Error Log */
    error(str) {
        if (logMode == "error") {
            console.error(str);
        }
    }
}
export default new Log();