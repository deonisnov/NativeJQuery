String.prototype.snake_case = function(){
    return this
        .replace( /[A-Z]/g, function($1) { return '_' + $1 } )
        .toLowerCase();
}