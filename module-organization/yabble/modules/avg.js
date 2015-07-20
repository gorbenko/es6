require.define({
    "avg": {
        injects: ["require", "module", "exports"],
        factory: function (require, module, exports) {
            exports.avg = function (values) {
                return require("math").avg(values);
            }
        }
    }
});
