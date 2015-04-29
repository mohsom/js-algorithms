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
    };
    Stack.prototype.pop=function(){

    }
})();