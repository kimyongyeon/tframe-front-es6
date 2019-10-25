class Caching {
    memoizeFunc(passedFunc) {
        var cache = {};
        return function (x) {
            if (x in cache) return cache[x];
            return cache[x] = passedFunc(x);
        };
    }
}
export default new Caching();