var x = "global";
var func = function(){
  console.log(x);
	var x = "local";
  console.log(x);
}
func();