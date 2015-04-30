/**
 * Created by mohsom on 30.04.2015.
 */
(function(){
    function Deque(){
        $deque=[];
        $first=null;
        $last=null;
        $size=0;
    }
    Deque.prototype.isEmpty=function(){
        if ($size === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Deque.prototype.pushBegin=function(elem){
        $deque.reverse();
        $deque.push(elem);
        $deque.reverse();
        $size++;
        $first=$deque[0];
    };
    Deque.prototype.pushEnd=function(elem){
        $deque.reverse();
        $deque.push(elem);
        $deque.reverse();
        $size++;
        $last=$deque[$size-1];
    };
    Deque.prototype.popBegin=function(){
        if (!this.isEmpty()) {
            $stack.reverse();
            $stack.pop();
            $stack.reverse();
            $size--;
            $first=$deque[0];
        }
        else {
            return false;
        }
    };
    Deque.prototype.popEnd=function(){
        if (!this.isEmpty()) {
            $stack.pop();
            $size--;
            $last=$deque[$size-1];
        }
        else {
            return false;
        }
    };
    Deque.prototype.getFirst=function(){
        if(!this.isEmpty()){
            return $first;
        }
        else{
            return null;
        }
    };
    Deque.prototype.getLast=function(){
        if(!this.isEmpty()){
            return $last;
        }
        else{
            return null;
        }
    }
})();