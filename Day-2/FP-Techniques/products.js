var products = [
	{id : 16, name : "pen", cost : 80, units : 10, category : 1},
	{id : 13, name : "hen", cost : 30, units : 80, category : 1},
	{id : 19, name : "den", cost : 70, units : 20, category : 2},
	{id : 12, name : "len", cost : 20, units : 10, category : 1},
	{id : 15, name : "ken", cost : 40, units : 50, category : 2},
	{id : 10, name : "ten", cost : 10, units : 40, category : 1}
]

function sort(list){
  for(var i=0;i<list.length-1;i++)
    for(var j=i+1;j<list.length;j++){
       if (list[i].id > list[j].id){
          var temp = list[i];
          list[i] = list[j];
          list[j] = temp;
       }
    }
}

0 -> left === right
1 -> left > right
-1 -> left < right

//convert the above function in such a way that you can sort any list by any attribute
function sort(list,comparerFn){
  for(var i=0;i<list.length-1;i++)
    for(var j=i+1;j<list.length;j++){
       if (comparerFn(list[i],list[j]) > 0){
          var temp = list[i];
          list[i] = list[j];
          list[j] = temp;
       }
    }
}

function compareProductsByValue(p1,p2){
  var p1Value = p1.units * p1.cost,
      p2Value = p2.units * p2.cost;
  if (p1Value > p2Value) return 1;
  if (p1Value === p2Value) return 0;
  return -1;
}

/*function compareProductsByValueInDesc(p1,p2,comparerFn){
	var p1Value = p1.units * p1.cost,
	      p2Value = p2.units * p2.cost;
	  if (p1Value > p2Value) return -1;
	  if (p1Value === p2Value) return 0;
	  return 1;
}
*/
//generalization of the above function is

function getInverseComparer(comparerFn){
	var _comparerFn = comparerFn;
	return function(p1,p2){
		return _comparerFn(p1, p2) * -1;
	}
}

var compareProductsByValueInDesc = getInverseComparer(compareProductsByValue);

sort(products,compareProductsByValueInDesc);

function filter(list,criteriaFn){
  var result = [];
  for(var i=0;i<list.length;i++)
    if (criteriaFn(list[i])) result.push(list[i]);
  return result;
}

function countBy(list,criteriaFn){
  var result = 0;
  for(var i=0;i<list.length;i++)
   if (criteriaFn(list[i])) result++;
  return result;
}

function min(list,attrName){
	var result = list[0][attrName];
	for(var i=1;i<list.length;i++)
		if (list[i][attrName] < result) result = list[i][attrName];
	return result;
}

function max(list,attrName){
	var result = list[0][attrName];
	for(var i=1;i<list.length;i++)
		if (list[i][attrName] > result) result = list[i][attrName];
	return result;
}

function max(list,attrName){
	var result = list[0];
	for(var i=1;i<list.length;i++)
		if (list[i][attrName] > result[attrName]) result = list[i];
	return result;
}

function every(list,predicate){
  for(var i=0;i<list.length;i++)
    if (!predicate(list[i])) return false;
  return true;
}

every(products,function(p){return p.cost >= 10;})

function some(list,predicate){
   for(var i=0;i<list.length;i++)
      if (predicate(list[i])) return true;
   return false;
}
some(products,function(p){return p.cost > 50;})


function groupBy(list,attrName){
 var result = {};
 for(var i=0;i<list.length;i++){
    var key = list[i][attrName];
    if (typeof result[key] === "undefined") result[key] = [];
    result[key].push(list[i]);
 }
 return result;
}

var productsByCategory = groupBy(products,"category");

var categories = [
	{id : 1, name : "stationary" },
	{id : 2, name : "grocery"}
]

function join(leftList, rightList, leftAttrName, rightAttrName, transformFn){
  var result = [];
  for(var i=0;i<leftList.length;i++){
     var leftKey = leftList[i][leftAttrName];
     for(var j=0;j<rightList.length;j++){
        var rightKey = rightList[j][rightAttrName];
        if (leftKey === rightKey){
           result.push(transformFn(leftList[i],rightList[j]));
        }
     }
  }
  return result;
}

var result = join(products,categories,"category","id",function(p,c){
     return { id : p.id, name : p.name, cost : p.cost, units : p.units, category : c.name};
 });

console.table(result);
