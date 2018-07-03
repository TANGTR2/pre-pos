'use strict';

function collectSameElements(collectionA, collectionB) {
  var cb=new Array();
	var bsize=collectionB[0].length;
	for(var i=0;i<bsize;i++)
		cb[i]=(collectionB[0])[i];
	var same=new Array();
	var num=0;
	 for(var i=0;i<collectionA.length;i++){
		    for(var j=0;j<bsize;j++){
		      if(collectionA[i]==cb[j]){
		    	 same[num]=collectionA[i];
		    	 num++;
		      } 
		      else continue;
		    }
		  }
  return same[num];
}
