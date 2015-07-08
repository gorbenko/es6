require.define({
    'math': function (require, exports) {
        exports.per = function (value, total) {
            return ((value / total) * 100);
        };

        exports.avg = function (values) {
            return values.reduce(function (a, b) {
                return a + b;
            }) / values.length;
        }
    }
});
