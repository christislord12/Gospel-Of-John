(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.common"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "StandardMetadataFormatResources", null, 'java.util.ListResourceBundle');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getContents$',  function () {
return Clazz.array(java.lang.Object, -2, [Clazz.array(java.lang.Object, -1, ["Chroma", "Chroma (color) information"]), Clazz.array(java.lang.Object, -1, ["ColorSpaceType", "The raw color space of the image"]), Clazz.array(java.lang.Object, -1, ["NumChannels", "The number of channels in the raw image, including alpha"]), Clazz.array(java.lang.Object, -1, ["Gamma", "The image gamma"]), Clazz.array(java.lang.Object, -1, ["BlackIsZero", "True if smaller values represent darker shades"]), Clazz.array(java.lang.Object, -1, ["Palette", "Palette-color information"]), Clazz.array(java.lang.Object, -1, ["PaletteEntry", "A palette entry"]), Clazz.array(java.lang.Object, -1, ["PaletteEntry/index", "The index of the palette entry"]), Clazz.array(java.lang.Object, -1, ["PaletteEntry/red", "The red value for the palette entry"]), Clazz.array(java.lang.Object, -1, ["PaletteEntry/green", "The green value for the palette entry"]), Clazz.array(java.lang.Object, -1, ["PaletteEntry/blue", "The blue value for the palette entry"]), Clazz.array(java.lang.Object, -1, ["PaletteEntry/alpha", "The alpha value for the palette entry"]), Clazz.array(java.lang.Object, -1, ["BackgroundIndex", "A palette index to be used as a background"]), Clazz.array(java.lang.Object, -1, ["BackgroundColor", "An RGB triple to be used as a background"]), Clazz.array(java.lang.Object, -1, ["BackgroundColor/red", "The red background value"]), Clazz.array(java.lang.Object, -1, ["BackgroundColor/green", "The green background value"]), Clazz.array(java.lang.Object, -1, ["BackgroundColor/blue", "The blue background value"]), Clazz.array(java.lang.Object, -1, ["Compression", "Compression information"]), Clazz.array(java.lang.Object, -1, ["CompressionTypeName", "The name of the compression scheme in use"]), Clazz.array(java.lang.Object, -1, ["Lossless", "True if the compression scheme is lossless"]), Clazz.array(java.lang.Object, -1, ["BitRate", "The estimated bit rate of the compression scheme"]), Clazz.array(java.lang.Object, -1, ["NumProgressiveScans", "The number of progressive scans used in the image encoding"]), Clazz.array(java.lang.Object, -1, ["Data", "Information on the image layout"]), Clazz.array(java.lang.Object, -1, ["PlanarConfiguration", "The organization of image samples in the stream"]), Clazz.array(java.lang.Object, -1, ["SampleFormat", "The numeric format of image samples"]), Clazz.array(java.lang.Object, -1, ["BitsPerSample", "The number of bits per sample"]), Clazz.array(java.lang.Object, -1, ["BitsPerSample/value", "A list of integers, one per channel"]), Clazz.array(java.lang.Object, -1, ["SignificantBitsPerSample", "The number of significant bits per sample"]), Clazz.array(java.lang.Object, -1, ["SignificantBitsPerSample/value", "A list of integers, one per channel"]), Clazz.array(java.lang.Object, -1, ["SampleMSB", "The position of the most significant bit of each sample"]), Clazz.array(java.lang.Object, -1, ["SampleMSB/value", "A list of integers, one per channel"]), Clazz.array(java.lang.Object, -1, ["Dimension", "Dimension information"]), Clazz.array(java.lang.Object, -1, ["PixelAspectRatio", "The width of a pixel divided by its height"]), Clazz.array(java.lang.Object, -1, ["ImageOrientation", "The desired orientation of the image in terms of flips and counter-clockwise rotations"]), Clazz.array(java.lang.Object, -1, ["HorizontalPixelSize", "The width of a pixel, in millimeters, as it should be rendered on media"]), Clazz.array(java.lang.Object, -1, ["VerticalPixelSize", "The height of a pixel, in millimeters, as it should be rendered on media"]), Clazz.array(java.lang.Object, -1, ["HorizontalPhysicalPixelSpacing", "The horizontal distance in the subject of the image, in millimeters, represented by one pixel at the center of the image"]), Clazz.array(java.lang.Object, -1, ["VerticalPhysicalPixelSpacing", "The vertical distance in the subject of the image, in millimeters, represented by one pixel at the center of the image"]), Clazz.array(java.lang.Object, -1, ["HorizontalPosition", "The horizontal position, in millimeters, where the image should be rendered on media "]), Clazz.array(java.lang.Object, -1, ["VerticalPosition", "The vertical position, in millimeters, where the image should be rendered on media "]), Clazz.array(java.lang.Object, -1, ["HorizontalPixelOffset", "The horizontal position, in pixels, where the image should be rendered onto a raster display"]), Clazz.array(java.lang.Object, -1, ["VerticalPixelOffset", "The vertical position, in pixels, where the image should be rendered onto a raster display"]), Clazz.array(java.lang.Object, -1, ["HorizontalScreenSize", "The width, in pixels, of the raster display into which the image should be rendered"]), Clazz.array(java.lang.Object, -1, ["VerticalScreenSize", "The height, in pixels, of the raster display into which the image should be rendered"]), Clazz.array(java.lang.Object, -1, ["Document", "Document information"]), Clazz.array(java.lang.Object, -1, ["FormatVersion", "The version of the format used by the stream"]), Clazz.array(java.lang.Object, -1, ["SubimageInterpretation", "The interpretation of this image in relation to the other images stored in the same stream"]), Clazz.array(java.lang.Object, -1, ["ImageCreationTime", "The time of image creation"]), Clazz.array(java.lang.Object, -1, ["ImageCreationTime/year", "The full year (e.g., 1967, not 67)"]), Clazz.array(java.lang.Object, -1, ["ImageCreationTime/month", "The month, with January = 1"]), Clazz.array(java.lang.Object, -1, ["ImageCreationTime/day", "The day of the month"]), Clazz.array(java.lang.Object, -1, ["ImageCreationTime/hour", "The hour from 0 to 23"]), Clazz.array(java.lang.Object, -1, ["ImageCreationTime/minute", "The minute from 0 to 59"]), Clazz.array(java.lang.Object, -1, ["ImageCreationTime/second", "The second from 0 to 60 (60 = leap second)"]), Clazz.array(java.lang.Object, -1, ["ImageModificationTime", "The time of the last image modification"]), Clazz.array(java.lang.Object, -1, ["ImageModificationTime/year", "The full year (e.g., 1967, not 67)"]), Clazz.array(java.lang.Object, -1, ["ImageModificationTime/month", "The month, with January = 1"]), Clazz.array(java.lang.Object, -1, ["ImageModificationTime/day", "The day of the month"]), Clazz.array(java.lang.Object, -1, ["ImageModificationTime/hour", "The hour from 0 to 23"]), Clazz.array(java.lang.Object, -1, ["ImageModificationTime/minute", "The minute from 0 to 59"]), Clazz.array(java.lang.Object, -1, ["ImageModificationTime/second", "The second from 0 to 60 (60 = leap second)"]), Clazz.array(java.lang.Object, -1, ["Text", "Text information"]), Clazz.array(java.lang.Object, -1, ["TextEntry", "A text entry"]), Clazz.array(java.lang.Object, -1, ["TextEntry/keyword", "A keyword associated with the text entry"]), Clazz.array(java.lang.Object, -1, ["TextEntry/value", "the text entry"]), Clazz.array(java.lang.Object, -1, ["TextEntry/language", "The language of the text"]), Clazz.array(java.lang.Object, -1, ["TextEntry/encoding", "The encoding of the text"]), Clazz.array(java.lang.Object, -1, ["TextEntry/compression", "The method used to compress the text"]), Clazz.array(java.lang.Object, -1, ["Transparency", "Transparency information"]), Clazz.array(java.lang.Object, -1, ["Alpha", "The type of alpha information contained in the image"]), Clazz.array(java.lang.Object, -1, ["TransparentIndex", "A palette index to be treated as transparent"]), Clazz.array(java.lang.Object, -1, ["TransparentColor", "An RGB color to be treated as transparent"]), Clazz.array(java.lang.Object, -1, ["TransparentColor/red", "The red channel of the transparent color"]), Clazz.array(java.lang.Object, -1, ["TransparentColor/green", "The green channel of the transparent color"]), Clazz.array(java.lang.Object, -1, ["TransparentColor/blue", "The blue channel of the transparent color"]), Clazz.array(java.lang.Object, -1, ["TileTransparencies", "A list of completely transparent tiles"]), Clazz.array(java.lang.Object, -1, ["TransparentTile", "The index of a completely transparent tile"]), Clazz.array(java.lang.Object, -1, ["TransparentTile/x", "The tile\'s X index"]), Clazz.array(java.lang.Object, -1, ["TransparentTile/y", "The tile\'s Y index"]), Clazz.array(java.lang.Object, -1, ["TileOpacities", "A list of completely opaque tiles"]), Clazz.array(java.lang.Object, -1, ["OpaqueTile", "The index of a completely opaque tile"]), Clazz.array(java.lang.Object, -1, ["OpaqueTile/x", "The tile\'s X index"]), Clazz.array(java.lang.Object, -1, ["OpaqueTile/y", "The tile\'s Y index"])]);
});
})();
;Clazz.setTVer('3.3.1-v5');//Created 2022-08-27 14:13:25 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5