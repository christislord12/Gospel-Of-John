(function(){var P$=Clazz.newPackage("java.security"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AccessControlException", null, 'SecurityException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['perm','java.security.Permission']]]

Clazz.newMeth(C$, 'c$$S',  function (s) {
;C$.superclazz.c$$S.apply(this,[s]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$java_security_Permission',  function (s, p) {
;C$.superclazz.c$$S.apply(this,[s]);C$.$init$.apply(this);
this.perm=p;
}, 1);

Clazz.newMeth(C$, 'getPermission$',  function () {
return this.perm;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:13:47 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
