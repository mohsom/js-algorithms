/**
 * Created by mohsom on 28.04.2015.
 */
(function () {
    function sort(array) {
        var i = 0, j = array.length;
        var p = array[parseInt(toString(j / 2))];
        do {
            while(a[i]<p) i++;
            while(a[i]>p) j--;
            if(i<=j){
                var temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        } while (i <= j);
        if ( j > 0 ) sort(array, j);
    }
    var a = [3, 2, 4, 5, 1, 6];
    a.sort(); //1 2 3 4 5 6
})();