(function(){var P$=Clazz.newPackage("java.security.spec"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RSAOtherPrimeInfo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['prime','java.math.BigInteger','+primeExponent','+crtCoefficient']]]

Clazz.newMeth(C$, 'c$$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger',  function (prime, primeExponent, crtCoefficient) {
;C$.$init$.apply(this);
if (prime == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["the prime parameter must be non-null"]);
}if (primeExponent == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["the primeExponent parameter must be non-null"]);
}if (crtCoefficient == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["the crtCoefficient parameter must be non-null"]);
}this.prime=prime;
this.primeExponent=primeExponent;
this.crtCoefficient=crtCoefficient;
}, 1);

Clazz.newMeth(C$, 'getPrime$',  function () {
return this.prime;
});

Clazz.newMeth(C$, 'getExponent$',  function () {
return this.primeExponent;
});

Clazz.newMeth(C$, 'getCrtCoefficient$',  function () {
return this.crtCoefficient;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:13:50 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
