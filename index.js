
var cylinder = {
  "height": 20,
  "radious":5
}
function volumeOfCylinder() {
    
  return (22 / 7) * this.radious * this.radious * this.height;
  
  
}

 var c=  volumeOfCylinder.bind(cylinder);
   var result=c()
  console.log(result)

  
    function surfaceAreaOfCylinder()
     {
      return (2 * (22 / 7) *this. radious * this.height) + (2 * (22 / 7) * this.radious * this.radious);
  }
  var c= surfaceAreaOfCylinder.bind(cylinder);
   var result=c()
  console.log(result)


  




