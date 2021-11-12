var power={
    voltage:10,
    current:5

}
function calculatepower()
{
    return this.voltage*this.current;
}
var c=calculatepower.bind(power);
var result=c()

console.log(result)