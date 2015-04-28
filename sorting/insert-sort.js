/**
 * Created by mohsom on 28.04.2015.
 */
(function () {
    function sort(array) {
        var size = array.length;
        for (var i = 0; i < size; i++) {
            var x = array[i];
            for (var j = i - 1; j >= 0 && a[j] > x; j--) {
                array[j + 1] = array[j];
            }
            array[j + 1] = x;
        }
    }
    var a = [3, 2, 4, 5, 1, 6];
    a.sort(); //1 2 3 4 5 6
})();
