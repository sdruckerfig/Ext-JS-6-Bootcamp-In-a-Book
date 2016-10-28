initComponent: function() {

     var vp = this.up('viewport');

     if (vp.getWidth() > vp.getHeight()) {

         Ext.apply(this, {
             layout: {
                 type: 'vbox',
                 align: 'stretch'
             },
             width: 170,
             bodyPadding: 5
         });
         this.defaults.flex = null;
         this.defaults.margin = '0 0 10 0';

     } else {

         Ext.apply(this, {
             layout: {
                 type: 'hbox',
                 align: 'stretch'
             },
             height: 50,
             bodyPadding: 0,
             collapseMode: 'mini'
         });

         this.defaults.flex = 1;
         this.defaults.margin = '0 5 0 0';

     }

     this.callParent(arguments);
 },

 listeners: {

    'afterrender' : function(cmp) {

        var vp = this.up('viewport');
        if (vp.getWidth() < vp.getHeight()) {
            var buttons = cmp.query('button');
            for (var i=0; i<buttons.length; i++) {
                buttons[i].setIconCls('');
            }
        }

    }
}