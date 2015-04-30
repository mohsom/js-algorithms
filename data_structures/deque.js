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
        console.log($deque+' '+'head: '+$first+' tail: '+$last);
    };
    Deque.prototype.pushEnd=function(elem){
        $deque.reverse();
        $deque.push(elem);
        $deque.reverse();
        $size++;
        $first=$deque[0];
        $last=$deque[$size-1];
        console.log($deque+' '+'head: '+$first+' tail: '+$last);
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
            console.log($deque+' '+'head: '+$first+' tail: '+$last);
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
            console.log($deque+' '+'head: '+$first+' tail: '+$last);
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
            console.log($deque+' '+'head: '+$first+' tail: '+$last);
        }
        else {
            return false;
        }
    };
    var a=new Deque();
    a.pushBegin('1');
    a.pushEnd('2');
    a.pushEnd('3');
    a.popBegin();
    a.popEnd();
    a.clear();
})();