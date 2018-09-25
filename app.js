//1)var http = require('http');

//var moritz = [{name: 'Anderson', color: 'yellow'}, {name: 'Satie', color: 'blue'}];

//var v1 = [1, 2, 3, 4, 5, 6, 7];
//var v2 = [11, 12, 13, 14, 15, 16, 17];

/*
var app = http.createServer(function(req, res){
	console.log("request:" + req.url);
//	res.end(JSON.stringify(moritz)); 
	console.log(v1.length);
		for(var i = 0; i < v1.length; i++){				
			console.log(v1[i]);
		}
//	var jsonmoritz = JSON.parse(moritz);	
	res.end();
});

app.listen(3000);
console.log("Listenig port 3000");
*/


//2)
/*
var events = require('events');
var util = require('util');

var car = function (brand){
	this.name = brand;

	this.carvalue = function(carcost, caryear){
		return carcost - (carcost * (caryear/10000));  
	}

}

util.inherits(car, events.EventEmitter); 

var car1 = new car('Suzuki');
var car2 = new car('Toyota');
var car3 = new car('Honda');

var reseller = [car1, car2, car3];

//each car 
reseller.forEach(function(car){
	car.on('action', function(actionmsg){
		console.log(car.name + ':' + actionmsg + ' value:' + car.carvalue(65000, 2015));
	});
//	console.log(salad);
});

car1.emit('action', 'needs washing');
car2.emit('action', 'needs fixing');
car3.emit('action', 'needs changing enginee');
*/
//result
//Suzuki:needs washing value:51902.5
//Toyota:needs fixing value:51902.5
//Honda:needs changing enginee value:51902.5

//3)
/*
var obj = JSON.parse('{"name":"Anderson","color":"yellow"}',
	'{"name":"John", "color":"blue"}');

var stringg = JSON.stringify(obj);

		console.log(obj);
*/

//4) that piece of code will fin the model of Honda car´s  format json 
/*var obj = [
  {
   model: 'Mondel',
   brand: 'Ford'

  },
     {
    model: 'Corolla',
    brand: 'Toyota'

  },
     {
    model: 'HRV',
    brand: 'Honda'

  },{
    model: 'Civic',
    brand: 'Honda'

  }
];

var sstring = JSON.stringify(obj);

var result = obj.filter(function(item) {
  return item.brand == 'Honda';
});

//console.log(sstring);
console.log(result);
*/

console.log('hellowwwww');

	