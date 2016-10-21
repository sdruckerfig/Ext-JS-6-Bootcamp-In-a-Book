/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('FileDragDrop.view.main.Main', {
    extend: 'Ext.grid.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'FileDragDrop.view.main.MainController',
        'FileDragDrop.view.main.MainModel',
        'Ext.ux.FileDropper'
    ],

    bind: {
        store: '{fileUploadStore}'
    },

    controller: 'main',
    viewModel: 'main',
    title: 'File Drag and Drop',
    columns: [{
        dataIndex: 'fileName',
        text: 'File Name',
        flex: 1
    }, {
        dataIndex: 'size',
        text: 'Size'
    }],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        layout: {
            pack: 'center'
        },
        items: [{
            xtype: 'button',
            text: 'Upload'
        }]
    }],
    initComponent: function() {

        this.plugins.push({
            ptype: 'filedropper',
            overCls: 'dragfileover',
            callback: function(fileList) {
                for (var i = 0; i < fileList.length; i++) {
                    this.getStore().add({
                        fileName: fileList[i].name,
                        size: fileList[i].size
                    });
                }

             
                /*
                 var url = 'example.org'
                var xhr = new XMLHttpRequest();
                var fd = new FormData();

                xhr.open("POST", url, true);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        // Handle response.
                        alert(xhr.responseText); // handle response.
                    }
                };

                for (var i = 0; i < files.length; i++) {
                    fd.append('files', files.item(i));
                }

                // Initiate a multipart/form-data upload
                xhr.send(fd);
                */


            },
            scope: this
        });

        this.callParent(arguments);

    }
});