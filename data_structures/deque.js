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
        $last=$deque[$size-1];
    };
    Deque.prototype.pushEnd=function(elem){
        $deque.reverse();
        $deque.push(elem);
        $deque.reverse();
        $size++;
        $first=$deque[0];
        $last=$deque[$size-1];
    };
    Deque.prototype.popBegin=function(){
        if (!this.isEmpty()) {
            var return_val=$deque[0];
            $deque.reverse();
            $deque.pop();
            $deque.reverse();
            $size--;
            $first=$deque[0];
            $last=$deque[$size-1];
            return return_val;
        }
        else {
            return false;
        }
    };
    Deque.prototype.popEnd=function(){
        if (!this.isEmpty()) {
            var return_val=$deque[$size-1];
            $deque.pop();
            $size--;
            $first=$deque[0];
            $last=$deque[$size-1];
            return return_val;
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
    };
    Deque.prototype.clear = function () {
        if (!this.isEmpty()) {
            $deque.splice(0, $size - 1);
            $size = 0;
            $first=null;
            $last=null;
        }
        else {
            return false;
        }
    }
})();