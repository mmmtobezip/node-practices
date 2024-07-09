// 방법1 
var app = function() {
    console.log('app() called');
}
exports = app;

// 방법2 
exports = function() {
    console.log('app() called');
}
