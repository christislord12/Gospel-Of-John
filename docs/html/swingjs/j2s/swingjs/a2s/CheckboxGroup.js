(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CheckboxGroup", null, 'javax.swing.ButtonGroup');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getSelectedCheckbox$',  function () {
for (var e=C$.superclazz.prototype.getElements$.apply(this, []); e.hasMoreElements$(); ) {
var ab=e.nextElement$();
if (ab.isSelected$()) return ab;
}
return null;
});
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:14:41 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
