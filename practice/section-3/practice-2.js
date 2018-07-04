'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var cb=new Array();
	var bsize=objectB.value.length;
	for(var i=0;i<bsize;i++)
		cb[i]=(objectB.value)[i];
	var same=new Array();
	 for(var i=0;i<collectionA.length;i++){
		    for(var j=0;j<bsize;j++){
		      if(collectionA[i].key==cb[j]){
		    	  var c=collectionA[i].count-parseInt(collectionA[i].count/3);
				 same.push({key: collectionA[i].key,count: c})
				 break;
		      } 
		      else if(j==bsize-1){
				 same.push({key: collectionA[i].key,count: collectionA[i].count})			 
			  }
			  else continue;
		    }
	}
  return same;
}
