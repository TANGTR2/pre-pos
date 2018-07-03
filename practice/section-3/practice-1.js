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
				 same.push({key: collectionA[i].key,count: collectionA[i].count-1})
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
