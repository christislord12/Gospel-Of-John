(function(){var P$=Clazz.newPackage("java.beans"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PropertyChangeListenerProxy", null, 'java.util.EventListenerProxy', 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['propertyName']]]

Clazz.newMeth(C$, 'c$$S$java_beans_PropertyChangeListener',  function (propertyName, listener) {
;C$.superclazz.c$$java_util_EventListener.apply(this,[listener]);C$.$init$.apply(this);
this.propertyName=propertyName;
}, 1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (evt) {
(this.getListener$()).propertyChange$java_beans_PropertyChangeEvent(evt);
});

Clazz.newMeth(C$, 'getPropertyName$',  function () {
return this.propertyName;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:13:39 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
