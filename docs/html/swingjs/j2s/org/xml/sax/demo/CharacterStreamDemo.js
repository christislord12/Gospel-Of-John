(function(){var P$=Clazz.newPackage("org.xml.sax.demo"),I$=[[0,'org.xml.sax.helpers.ParserFactory','org.xml.sax.demo.DemoHandler','java.io.StringReader','org.xml.sax.InputSource']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CharacterStreamDemo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
var handler;
var source;
var parser;
var reader;
if (args.length != 0) {
System.err.println$S("Usage: java CharTest");
System.exit$I(2);
}parser=$I$(1).makeParser$();
handler=Clazz.new_($I$(2,1));
parser.setEntityResolver$org_xml_sax_EntityResolver(handler);
parser.setDTDHandler$org_xml_sax_DTDHandler(handler);
parser.setDocumentHandler$org_xml_sax_DocumentHandler(handler);
parser.setErrorHandler$org_xml_sax_ErrorHandler(handler);
reader=Clazz.new_(["<?xml version=\"1.0\"?><doc>\n<title>Hello</title>\n<para>Hello, world!</para>\n</doc>\n"],$I$(3,1).c$$S);
parser.parse$org_xml_sax_InputSource(Clazz.new_($I$(4,1).c$$java_io_Reader,[reader]));
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:14:28 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
