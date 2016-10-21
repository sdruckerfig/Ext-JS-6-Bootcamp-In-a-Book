Ext.define('Ext.ux.FileDropper', {
    extend: 'Ext.plugin.Abstract',
    alias: 'plugin.filedropper',

    overCls: '',

    init: function(c) {
        this.target = c;
        c.on({
            element: 'el',
            scope: this,
            dragover: this.onDragOver,
            dragenter: this.onDragEnter,
            dragLeave: this.onDragLeave,
            drop: this.onDrop
        });
    },

    onDragOver: function(e) {
        e.stopEvent();
    },

    onDragEnter: function(e) {
        this.target.addCls(this.overCls);
        e.stopEvent();
    },

    onDragLeave: function() {
        this.target.removeCls(this.overCls);
    },

    onDrop: function(e) {
        var callback = this.callback,
            scope = this.scope || this;

        e.stopEvent();
        this.target.removeCls(this.overCls);
        if (callback) {
            callback.call(scope, e.browserEvent.dataTransfer.files);
        }
    }
});