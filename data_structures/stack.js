/**
 * Created by mohsom on 29.04.2015.
 */
(function () {
    function Stack() {
        $stack = [];
        $size = 0;
    }

    Stack.prototype.push = function (elem) {
        $stack.push(elem);
        $size++;
    };
    Stack.prototype.pop = function () {
        $stack.reverse();
        $stack.pop();
        $stack.reverse();
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
    };
    Stack.prototype.top = function () {
        if (!this.isEmpty()) {
            return $stack[0];
        }
        else{
            return null;
        }
    };
    var a = new Stack();
    a.push('1');
    a.push('2');
    a.pop();
    a.clear();
})();
