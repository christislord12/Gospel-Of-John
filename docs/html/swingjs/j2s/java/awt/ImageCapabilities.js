(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'InternalError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ImageCapabilities", null, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.accelerated=false;
},1);

C$.$fields$=[['Z',['accelerated']]]

Clazz.newMeth(C$, 'c$$Z',  function (accelerated) {
;C$.$init$.apply(this);
this.accelerated=accelerated;
}, 1);

Clazz.newMeth(C$, 'isAccelerated$',  function () {
return this.accelerated;
});

Clazz.newMeth(C$, 'isTrueVolatile$',  function () {
return false;
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
return Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(1,1));
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:13:32 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
