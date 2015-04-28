/**
 * Created by mohsom on 28.04.2015.
 */
function sort(array){
    var lngth=array.length;
    for(var i=0;i<lngth;i++)
    {
        for(var j=length-1;j>i;j--){
            if(array[j-1]>array[j]){
                var tmp=array[i];
                array[i]=array[j-1];
                array[j-1]=tmp;
            }
        }
    }
    return array;
}
var a=[3,2,4,5,1];
a.sort(); //1 2 3 4 5