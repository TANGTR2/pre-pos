'use strict';

function collectSameElements(collectionA, collectionB) {
  var same=new Array();
	var num=0;
	 for(var i=0;i<collectionA.length;i++){
		    for(var j=0;j<collectionB.length;j++){
		      if(collectionA[i]==collectionB[j]){
		    	 same[num]=collectionA[i];
		    	 num++;
		      } 
		      else continue;
		    }
		  }
  return same[num];
}
