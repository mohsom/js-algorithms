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
        $queue.pop(elem);
        $size++;
    };
    Queue.prototype.dequeue = function () {
        if (!this.isEmpty()) {
            var val = $queue[0];
            $queue.splice(0,1);
        }
        else {
            return null;
        }
    }
    ;
    Queue.prototype.isEmpty = function () {
        if ($size === 0) {
            return true;
        }
        else {
            return false;
        }
    }
})
();