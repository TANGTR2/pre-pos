'use strict';

function collectSameElements(collectionA, objectB) {
  var cb=new Array();
	var bsize=collectionB.value.length;
	for(var i=0;i<bsize;i++)
		cb[i]=(collectionB.value)[i];
	var same=new Array();
	var num=0;
	 for(var i=0;i<collectionA.length;i++){
		    for(var j=0;j<bsize;j++){
		      if(collectionA[i].key==cb[j]){
		    	 same[num]=collectionA[i];
		    	 num++;
		      } 
		      else continue;
		    }
		  }
  return same[num];
}
