(function(){var P$=Clazz.newPackage("java.lang.annotation"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "IncompleteAnnotationException", null, 'RuntimeException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['elementName'],'O',['annotationType','Class']]]

Clazz.newMeth(C$, 'c$$Class$S',  function (annotationType, elementName) {
;C$.superclazz.c$$S.apply(this,[annotationType.getName$() + " missing element " + elementName.toString() ]);C$.$init$.apply(this);
this.annotationType=annotationType;
this.elementName=elementName;
}, 1);

Clazz.newMeth(C$, 'annotationType$',  function () {
return this.annotationType;
});

Clazz.newMeth(C$, 'elementName$',  function () {
return this.elementName;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:13:43 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
