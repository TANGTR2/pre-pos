'use strict';

function countSameElements(collection) {
	var same=new Array();
	for(var i=0;i<collection.length;){
		var count=0;
		for(var j=i;j<collection.length;j++){
			if(collection[i]===collection[j])
				count++;
		}
		same.push({key: collection[i],count: count})
		i=i+count;
	}
  return same;
}
