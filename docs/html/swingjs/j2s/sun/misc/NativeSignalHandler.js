(function(){var P$=Clazz.newPackage("sun.misc"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "NativeSignalHandler", null, null, 'sun.misc.SignalHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['handler']]]

Clazz.newMeth(C$, 'getHandler$',  function () {
return this.handler;
});

Clazz.newMeth(C$, 'c$$J',  function (handler) {
;C$.$init$.apply(this);
this.handler=handler;
}, 1);

Clazz.newMeth(C$, 'handle$sun_misc_Signal',  function (sig) {
C$.handle0$I$J(sig.getNumber$(), this.handler);
});

Clazz.newMeth(C$, 'handle0$I$J',  function (number, handler) {
alert('native method must be replaced! handle0');
}
, 2);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:14:31 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
