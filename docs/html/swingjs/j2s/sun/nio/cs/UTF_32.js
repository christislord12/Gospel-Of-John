(function(){var P$=Clazz.newPackage("sun.nio.cs"),I$=[[0,'sun.nio.cs.StandardCharsets',['sun.nio.cs.UTF_32Coder','.Decoder'],['sun.nio.cs.UTF_32Coder','.Encoder']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UTF_32", null, 'sun.nio.cs.Unicode');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S$SA.apply(this,["UTF-32", $I$(1).aliases_UTF_32]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'historicalName$',  function () {
return "UTF-32";
});

Clazz.newMeth(C$, 'newDecoder$',  function () {
return Clazz.new_($I$(2,1).c$$java_nio_charset_Charset$I,[this, 0]);
});

Clazz.newMeth(C$, 'newEncoder$',  function () {
return Clazz.new_($I$(3,1).c$$java_nio_charset_Charset$I$Z,[this, 1, false]);
});
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:14:32 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
