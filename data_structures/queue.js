/**
 * Created by mohsom on 29.04.2015.
 */
(function () {
    function Queue() {
        $queue = [];
        $size = 0;
        $head = null;
        $tail = null;
    }

    Queue.prototype.enqueue = function (elem) {
        $queue.push(elem);
        $size++;
        $head = $queue[0];
        $tail = $queue[$size - 1];
    };
    Queue.prototype.dequeue = function () {
        if (!this.isEmpty()) {
            var val = $queue[0];
            $size--;
            $queue.splice(0, 1);
            if (!this.isEmpty()) {
                $head = $queue[0];
                $tail = $queue[$size - 1];
            }
            else{
                $head = null;
                $tail = null;
            }
            return val;
        }
        else {
            return null;
        }
    };
    Queue.prototype.isEmpty = function () {
        if ($size === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Queue.prototype.clear = function () {
        if (!this.isEmpty()) {
            $queue.splice(0, $size - 1);
            $size = 0;
        }
        else {
            return false;
        }
    };
})();