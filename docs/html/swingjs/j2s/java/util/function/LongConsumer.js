(function(){var P$=Clazz.newPackage("java.util.function"),I$=[[0,'java.util.Objects']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "LongConsumer");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'andThen$java_util_function_LongConsumer',  function (after) {
$I$(1).requireNonNull$O(after);
return ((P$.LongConsumer$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "LongConsumer$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$J','accept$O'],  function (t) {
this.accept$J(t);
this.$finals$.after.accept$J(t);
});
})()
), Clazz.new_(P$.LongConsumer$lambda1.$init$,[this, {after:after}]));
});
};})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:13:58 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
