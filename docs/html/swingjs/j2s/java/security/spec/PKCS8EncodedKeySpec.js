(function(){var P$=Clazz.newPackage("java.security.spec"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PKCS8EncodedKeySpec", null, 'java.security.spec.EncodedKeySpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$BA',  function (encodedKey) {
;C$.superclazz.c$$BA.apply(this,[encodedKey]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getEncoded$',  function () {
return C$.superclazz.prototype.getEncoded$.apply(this, []);
});

Clazz.newMeth(C$, 'getFormat$',  function () {
return "PKCS#8";
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:13:49 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
