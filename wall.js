function paintWall(n, h, w) 
{
    
    var areaOfWall = h * w;
    if (areaOfWall % n == 0)
        return areaOfWall / n;
    
    return (areaOfWall/n)+1;
}

var n = 10;
var h = 4;
var w = 5;

var result = paintWall(n, h, w);

console.log(result);