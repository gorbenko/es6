// вариант RequireJs
//define(function() {
//    return {
//        now: function() {
//            return new Date();
//        }
//    }
//});

// совместимость с CommonJs
define(function(require, exports) {
    exports.now = function() {
        return new Date();
    }
});

