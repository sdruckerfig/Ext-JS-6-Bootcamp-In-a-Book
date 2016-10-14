/**
* A mixin that adds an animation effect to 
* a closing Ext.window.Window
*/

Ext.define('Ext.ux.mixins.WindowAnimations', {
    extend: 'Ext.Mixin',
    
    /**
    * @property {String} closeAnimation (required)
    * Either 'fade' or 'switchoff'
    */
    
    closeAnimation: 'fade',
    
    mixinConfig: {
        before: {
            close: 'onBeforeClose'
        }
    },
    
    onBeforeClose: function() {
        if (this.closeAnimation == 'fade') {
            this.el.animate({
                opacity: 0,
                callback: function() {
                    this.fireEvent('close', this);
                    this[this.closeAction]();
                },
                scope: this
            });
        } else {
            this.el.switchOff({
                callback: function() {
                    this.fireEvent('close', this);
                    this[this.closeAction]();
                },
                scope: this
            });
        }
        return false; // prevent default action
    }
});