(function(){var P$=Clazz.newPackage("java.nio.file"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "LinkPermission", null, 'java.security.BasicPermission');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'checkName$S',  function (name) {
if (!name.equals$O("hard") && !name.equals$O("symbolic") ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["name: " + name]);
}}, p$1);

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
p$1.checkName$S.apply(this, [name]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S',  function (name, actions) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
p$1.checkName$S.apply(this, [name]);
if (actions != null  && actions.length$() > 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["actions: " + actions]);
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:13:46 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
