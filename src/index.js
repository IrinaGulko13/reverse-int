module.exports = function reverse (n) {
    nPos = Math.abs(n);
    var nStr = nPos.toString(); 
    var strArray = nStr.split(""); 
    var revArray = strArray.reverse(); 
    var rev = revArray.join(""); 
    return Number(rev);
}
