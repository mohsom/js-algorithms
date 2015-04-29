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
    var a = new Stack();
    a.push('1');
    a.push('3');
    a.push('2');
    a.pop();
    console.log(a.top());
    a.clear();
})();
