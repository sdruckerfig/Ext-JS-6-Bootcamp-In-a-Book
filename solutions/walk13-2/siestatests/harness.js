var Harness = Siesta.Harness.Browser.ExtJS;

Harness.configure({
    title       : 'Doctor Ext Test Suite',
    /*
    preload     : [
        // version of ExtJS used by your application
        'bootstrap.js',
        '//tinymce.cachefly.net/4.1/tinymce.min.js',
        '../shared/pdfpanel/lib/pdf.js/compatibility.js',
        '../shared/pdfpanel/lib/pdf.js/pdf.js'
    ]
    */
});

Harness.start(
 {
    hostPageUrl: 'index.html',
    url: 'siesta/001-existence.js'
 }
);