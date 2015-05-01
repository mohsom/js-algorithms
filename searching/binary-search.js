/**
 * Created by mohsom on 01.05.2015.
 */
(function () {
    function search(array, key) {
        var left = 0,
            right = array.length,
            mid;
        while (left <= right) {
            mid = left + (right - left) / 2;
            if (key < array[mid]) right = mid - 1;
            else if (key > array[mid]) left = mid + 1;
            else return mid;
        }
        return null;
    }
})();