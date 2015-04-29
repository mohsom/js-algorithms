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
        console.log($queue,+' '+$size);
    };
    Queue.prototype.dequeue = function () {
        if (!this.isEmpty()) {
            var val = $queue[0];
            $size--;
            $queue.splice(0, 1);
            console.log($queue,+' '+$size);
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
    var a=new Queue();
    a.enqueue('1');
    a.enqueue('2');
})();