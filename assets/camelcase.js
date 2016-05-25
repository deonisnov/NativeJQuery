String.prototype.toCamelCase = function(){
    return this.toLowerCase()
        .replace( /\W+/g, ' ' )
        .replace( / (.)/g, function($1) { return $1.toUpperCase(); })
        .replace( / /g, '' );
}