String.prototype.toCamelCase = function(){
    return this.split('').map(function (char, i, word) {
        if(char == '-'){
            word[i + 1] = word[i + 1].toUpperCase();
            return '';
        }
        return char;
    }).join('');
}
String.prototype.deCamelCase = function(separator){
    var separator = separator || '-';
    return this.split('').map(function (char, i) {
        if(char == char.toUpperCase()){
            return i > 0 ? separator + char.toLowerCase() : char.toLowerCase();
        }
        return char;
    }).join('');
}