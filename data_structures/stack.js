/**
 * Created by mohsom on 29.04.2015.
 */
(function () {
    function Stack() {
        $stack = [];
        $size = 0;
    }

    Stack.prototype.push = function (elem) {
        $stack.reverse();
        $stack.push(elem);
        $stack.reverse();
        $size++;
    };
    Stack.prototype.pop = function () {
        if (!this.isEmpty()) {
            $stack.reverse();
            $stack.pop();
            $stack.reverse();
            $size--;
        }
    };
    Stack.prototype.isEmpty = function () {
        if ($size === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Stack.prototype.clear = function () {
        $stack.splice(0, $size - 1);
        $size = 0;
    };
    Stack.prototype.top = function () {
        if (!this.isEmpty()) {
            return $stack[0];
        }
        else {
            return null;
        }
    };
    Stack.prototype.size = function () {
        return $size;
    };
    Stack.prototype.swap = function () {
        if (this.size() >= 2) {
             var tmp=$stack[1];
            $stack[1]=$stack[0];
            $stack[0]=tmp;
        }
        else {
            return false;
        }
    };
    var a = new Stack();
    a.push('1');
    a.push('3');
    a.push('2');
    a.pop();
    a.swap();
    a.clear();
})();
