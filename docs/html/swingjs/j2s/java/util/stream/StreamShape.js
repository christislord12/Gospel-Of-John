(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "StreamShape", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "REFERENCE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "INT_VALUE", 1, []);
Clazz.newEnumConst($vals, C$.c$, "LONG_VALUE", 2, []);
Clazz.newEnumConst($vals, C$.c$, "DOUBLE_VALUE", 3, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:14:01 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
