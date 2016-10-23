/*

    Excel.js - convert an ExtJS 5 grid into an Excel spreadsheet using nothing but
    javascript and good intentions.

    By: Steve Drucker
    Dec 26, 2014
    Original Ext 3 Implementation by: Nige "Animal" White?
    
    Contact Info:

    e. sdrucker@figleaf.com
    blog: druckit.wordpress.com
    linkedin: www.linkedin.com/in/uberfig
    git: http://github.com/sdruckerfig
    company: Fig Leaf Software (http://www.figleaf.com / http://training.figleaf.com)

    Invocation:  grid.downloadExcelXml(includeHiddenColumns,title)

    Upgraded for ExtJS5 on Dec 26, 2014

*/


var Base64 = (function() {
    // Private property
    var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    // Private method for UTF-8 encoding

    function utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }

    // Public method for encoding
    return {
        encode: (typeof btoa == 'function') ? function(input) {
            return btoa(utf8Encode(input));
        } : function(input) {
            var output = "";
            var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
            var i = 0;
            input = utf8Encode(input);
            while (i < input.length) {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);
                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }
                output = output +
                    keyStr.charAt(enc1) + keyStr.charAt(enc2) +
                    keyStr.charAt(enc3) + keyStr.charAt(enc4);
            }
            return output;
        }
    };
})();

Ext.define('Shared.overrides.view.Grid', {
    override: 'Ext.grid.GridPanel',
    requires: ['Ext.form.action.StandardSubmit'],

    /*
        Kick off process
    */

    downloadExcelXml: function(includeHidden, title) {

        if (!title) title = this.title;

        var vExportContent = this.getExcelXml(includeHidden, title);


        /* 
          dynamically create and anchor tag to force download with suggested filename 
          note: download attribute is Google Chrome specific
        */

        if (Ext.isChrome) {
            var gridEl = this.getEl();
            var location = 'data:application/vnd.ms-excel;base64,' + Base64.encode(vExportContent);

            var el = Ext.DomHelper.append(gridEl, {
                tag: "a",
                download: title + "-" + Ext.Date.format(new Date(), 'Y-m-d Hi') + '.xls',
                href: location
            });

            el.click();

            Ext.fly(el).destroy();

        } else {

            var form = this.down('form#uploadForm');
            if (form) {
                form.destroy();
            }
            form = this.add({
                xtype: 'form',
                itemId: 'uploadForm',
                hidden: true,
                standardSubmit: true,
                url: 'http://webapps.figleaf.com/dataservices/Excel.cfc?method=echo&mimetype=application/vnd.ms-excel&filename=' + escape(title + ".xls"),
                items: [{
                    xtype: 'hiddenfield',
                    name: 'data',
                    value: vExportContent
                }]
            });

            form.getForm().submit();

        }
    },

    /*

        Welcome to XML Hell
        See: http://msdn.microsoft.com/en-us/library/office/aa140066(v=office.10).aspx
        for more details

    */
    getExcelXml: function(includeHidden, title) {

        var theTitle = title || this.title;

        var worksheet = this.createWorksheet(includeHidden, theTitle);
        if (this.columnManager.columns) {
            var totalWidth = this.columnManager.columns.length;
        } else {
             var totalWidth = this.columns.length;
        }

        return ''.concat(
            '<?xml version="1.0"?>',
            '<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet" xmlns:html="http://www.w3.org/TR/REC-html40">',
            '<DocumentProperties xmlns="urn:schemas-microsoft-com:office:office"><Title>' + theTitle + '</Title></DocumentProperties>',
            '<OfficeDocumentSettings xmlns="urn:schemas-microsoft-com:office:office"><AllowPNG/></OfficeDocumentSettings>',
            '<ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel">',
            '<WindowHeight>' + worksheet.height + '</WindowHeight>',
            '<WindowWidth>' + worksheet.width + '</WindowWidth>',
            '<ProtectStructure>False</ProtectStructure>',
            '<ProtectWindows>False</ProtectWindows>',
            '</ExcelWorkbook>',

            '<Styles>',

            '<Style ss:ID="Default" ss:Name="Normal">',
            '<Alignment ss:Vertical="Bottom"/>',
            '<Borders/>',
            '<Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="12" ss:Color="#000000"/>',
            '<Interior/>',
            '<NumberFormat/>',
            '<Protection/>',
            '</Style>',

            '<Style ss:ID="title">',
            '<Borders />',
            '<Font ss:Bold="1" ss:Size="18" />',
            '<Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1" />',
            '<NumberFormat ss:Format="@" />',
            '</Style>',

            '<Style ss:ID="headercell">',
            '<Font ss:Bold="1" ss:Size="10" />',
            '<Alignment ss:Horizontal="Center" ss:WrapText="1" />',
            '<Interior ss:Color="#A3C9F1" ss:Pattern="Solid" />',
            '</Style>',


            '<Style ss:ID="even">',
            '<Interior ss:Color="#CCFFFF" ss:Pattern="Solid" />',
            '</Style>',


            '<Style ss:ID="evendate" ss:Parent="even">',
            '<NumberFormat ss:Format="yyyy-mm-dd" />',
            '</Style>',


            '<Style ss:ID="evenint" ss:Parent="even">',
            '<Numberformat ss:Format="0" />',
            '</Style>',

            '<Style ss:ID="evenfloat" ss:Parent="even">',
            '<Numberformat ss:Format="0.00" />',
            '</Style>',

            '<Style ss:ID="odd">',
            '<Interior ss:Color="#CCCCFF" ss:Pattern="Solid" />',
            '</Style>',

            '<Style ss:ID="groupSeparator">',
            '<Interior ss:Color="#D3D3D3" ss:Pattern="Solid" />',
            '</Style>',

            '<Style ss:ID="odddate" ss:Parent="odd">',
            '<NumberFormat ss:Format="yyyy-mm-dd" />',
            '</Style>',

            '<Style ss:ID="oddint" ss:Parent="odd">',
            '<NumberFormat Format="0" />',
            '</Style>',

            '<Style ss:ID="oddfloat" ss:Parent="odd">',
            '<NumberFormat Format="0.00" />',
            '</Style>',


            '</Styles>',
            worksheet.xml,
            '</Workbook>'
        );
    },

    /*

        Support function to return field info from store based on fieldname

    */

    getModelField: function(fieldName) {

        var fields = this.store.model.getFields();
        for (var i = 0; i < fields.length; i++) {
            if (fields[i].name === fieldName) {
                return fields[i];
            }
        }
    },

    /*
        
        Convert store into Excel Worksheet

    */
    generateEmptyGroupRow: function(dataIndex, value, cellTypes, includeHidden) {


        var cm = this.columnManager.columns;
        var colCount = cm.length;
        var rowTpl = '<Row ss:AutoFitHeight="0"><Cell ss:StyleID="groupSeparator" ss:MergeAcross="{0}"><Data ss:Type="String"><html:b>{1}</html:b></Data></Cell></Row>';
        var visibleCols = 0;

        // rowXml += '<Cell ss:StyleID="groupSeparator">'

        for (var j = 0; j < colCount; j++) {
            if (cm[j].xtype != 'actioncolumn' && (cm[j].dataIndex != '') && (includeHidden || !cm[j].hidden)) {
                // rowXml += '<Cell ss:StyleID="groupSeparator"/>';
                visibleCols++;
            }
        }

        // rowXml += "</Row>";

        return Ext.String.format(rowTpl, visibleCols - 1, Ext.String.htmlEncode(value));
    },


    createWorksheet: function(includeHidden, theTitle) {
        // Calculate cell data types and extra class names which affect formatting
        var cellType = [];
        var cellTypeClass = [];
        console.log(this);
        if (this.columnManager.columns) {
            var cm = this.columnManager.columns;
        } else {
            var cm = this.columns;
        }
        console.log(cm);
        var colCount = cm.length;
        var totalWidthInPixels = 0;
        var colXml = '';
        var headerXml = '';
        var visibleColumnCountReduction = 0;
       

        for (var i = 0; i < cm.length; i++) {
            if (cm[i].xtype != 'actioncolumn' && (cm[i].dataIndex != '') && (includeHidden || !cm[i].hidden)) {
                var w = cm[i].getEl().getWidth();
                totalWidthInPixels += w;

                if (cm[i].text === "") {
                    cellType.push("None");
                    cellTypeClass.push("");
                    ++visibleColumnCountReduction;
                } else {
                    colXml += '<Column ss:AutoFitWidth="1" ss:Width="' + w + '" />';
                    headerXml += '<Cell ss:StyleID="headercell">' +
                        '<Data ss:Type="String">' + cm[i].text.replace("<br>"," ") + '</Data>' +
                        '<NamedCell ss:Name="Print_Titles"></NamedCell></Cell>';


                    var fld = this.getModelField(cm[i].dataIndex);
                    
                    switch (fld.$className) {
                        case "Ext.data.field.Integer":
                            cellType.push("Number");
                            cellTypeClass.push("int");
                            break;
                        case "Ext.data.field.Number":
                            cellType.push("Number");
                            cellTypeClass.push("float");
                            break;
                        case "Ext.data.field.Boolean":
                            cellType.push("String");
                            cellTypeClass.push("");
                            break;
                        case "Ext.data.field.Date":
                            cellType.push("DateTime");
                            cellTypeClass.push("date");
                            break;
                        default:
                            cellType.push("String");
                            cellTypeClass.push("");
                            break;
                    }
                }
            }
        }
        var visibleColumnCount = cellType.length - visibleColumnCountReduction;

        var result = {
            height: 9000,
            width: Math.floor(totalWidthInPixels * 30) + 50
        };

        // Generate worksheet header details.

        // determine number of rows
        var numGridRows = this.store.getCount() + 2;
        if ((this.store.groupField &&!Ext.isEmpty(this.store.groupField)) || (this.store.groupers && this.store.groupers.items.length > 0)) {
            numGridRows = numGridRows + this.store.getGroups().length;
        }

        // create header for worksheet
        var t = ''.concat(
            '<Worksheet ss:Name="' + theTitle + '">',

            '<Names>',
            '<NamedRange ss:Name="Print_Titles" ss:RefersTo="=\'' + theTitle + '\'!R1:R2">',
            '</NamedRange></Names>',

            '<Table ss:ExpandedColumnCount="' + (visibleColumnCount + 2),
            '" ss:ExpandedRowCount="' + numGridRows + '" x:FullColumns="1" x:FullRows="1" ss:DefaultColumnWidth="65" ss:DefaultRowHeight="15">',
            colXml,
            '<Row ss:Height="38">',
            '<Cell ss:MergeAcross="' + (visibleColumnCount - 1) + '" ss:StyleID="title">',
            '<Data ss:Type="String" xmlns:html="http://www.w3.org/TR/REC-html40">',
            '<html:b>' + theTitle + '</html:b></Data><NamedCell ss:Name="Print_Titles">',
            '</NamedCell></Cell>',
            '</Row>',
            '<Row ss:AutoFitHeight="1">',
            headerXml +
            '</Row>'
        );

        // Generate the data rows from the data in the Store
        var groupVal = "";
        var groupField = "";
        if (this.store.groupers && this.store.groupers.keys.length > 0) {
            groupField = this.store.groupers.keys[0];
        } else if (this.store.groupField != '') {
             groupField = this.store.groupField;
        }
        
        for (var i = 0, it = this.store.data.items, l = it.length; i < l; i++) {

            if (!Ext.isEmpty(groupField)) {
                if (groupVal != this.store.getAt(i).get(groupField)) {
                    groupVal = this.store.getAt(i).get(groupField);
                    t += this.generateEmptyGroupRow(groupField, groupVal, cellType, includeHidden);
                }
            }
            t += '<Row>';
            var cellClass = (i & 1) ? 'odd' : 'even';
            r = it[i].data;
            var k = 0;
            for (var j = 0; j < colCount; j++) {
                if (cm[j].xtype != 'actioncolumn' && (cm[j].dataIndex != '') && (includeHidden || !cm[j].hidden)) {
                    var v = r[cm[j].dataIndex];
                    if (cellType[k] !== "None") {
                        t += '<Cell ss:StyleID="' + cellClass + cellTypeClass[k] + '"><Data ss:Type="' + cellType[k] + '">';
                        if (cellType[k] == 'DateTime') {
                            t += Ext.Date.format(v, 'Y-m-d');
                        } else {
                            t += Ext.String.htmlEncode(v);
                        }
                        t += '</Data></Cell>';
                    }
                    k++;
                }
            }
            t += '</Row>';
        }

        result.xml = t.concat(
            '</Table>',
            '<WorksheetOptions xmlns="urn:schemas-microsoft-com:office:excel">',
            '<PageLayoutZoom>0</PageLayoutZoom>',
            '<Selected/>',
            '<Panes>',
            '<Pane>',
            '<Number>3</Number>',
            '<ActiveRow>2</ActiveRow>',
            '</Pane>',
            '</Panes>',
            '<ProtectObjects>False</ProtectObjects>',
            '<ProtectScenarios>False</ProtectScenarios>',
            '</WorksheetOptions>',
            '</Worksheet>'
        );
        return result;
    }
},
function() {

    if (Ext.getVersion().major > 5) {
       console.log(
        "Shared.overrides.view.Grid patch may not be compatible with this version of Ext JS"
       );
    }
});