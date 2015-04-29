/**
 * Created by mohsom on 29.04.2015.
 */
(function(){
    function Stack(){
        $stack=[];
        $size=0;
    }
    Stack.prototype.push=function(elem){
        $stack.push(elem);
        $size++;
        console.log($stack);
    };
    Stack.prototype.pop=function(){
        $stack.reverse();
        $stack.pop();
        $stack.reverse();
        console.log($stack);
    };
    Stack.prototype.isEmpty=function() {
        if ($size === 0)
        {
            return true;
        }
        else{
            return false;
        }
    };
    var a=new Stack();
    a.push('1');
    a.push('2');
    a.pop();
})();
