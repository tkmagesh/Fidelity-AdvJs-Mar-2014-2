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

//convert the above function in such a way that you can sort any list by any attribute

sort(products);
