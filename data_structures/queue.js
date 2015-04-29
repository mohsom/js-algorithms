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
        console.log($queue, +' ' + $size + ' ' + $head + ' ' + $tail);
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
            console.log($queue, +' ' + $size + ' ' + $head + ' ' + $tail);
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
    };
    var a = new Queue();
    a.enqueue('1');
    a.enqueue('2');
    console.log(a.isEmpty());
    a.dequeue();
    a.dequeue();
})();