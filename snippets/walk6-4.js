onShowMenu: function(panel, tool, e) {

	if (!this.gearMenu) {
		this.gearMenu = Ext.create('Ext.menu.Menu', {
			plain: true,
			width: 100,
			items: [{
				xtype: 'menuitem',
				text: 'Show All',
				iconCls: 'menuitemChecked'
			}, {
				xtype: 'menuitem',
				text: 'Show X-Rays',
				iconCls: 'menuitemNoCheck'
			}, {
				xtype: 'menuitem',
				text: 'Show Drugs',
				iconCls: 'menuitemNoCheck'
			}, {
				xtype: 'menuseparator'
			}, {
				xtype: 'menuitem',
				text: 'Sort by Date',
				iconCls: 'menuitemChecked'
			}, {
				xtype: 'menuitem',
				text: 'Sort by Title',
				iconCls: 'menuitemNoCheck'
			}],
			listeners: {
				'click': {
					fn: this.onMenuClick,
					scope: this
				}
			}
		});
	}
	this.gearMenu.showBy(tool);
	},

	onMenuClick: function(menu, item, e, eOpts) {

	var dv = this.getView().down('dataview');
	var s = dv.getStore();

	var menuItems = menu.items.items;


	if (item.text == 'Show All' || item.text == 'Show X-Rays' || item.text == 'Show Drugs') {
		for (var i = 0; i <= 2; i++) {
			menuItems[i].setIconCls('menuitemNoCheck');
		}
	} else {
		for (var i = 4; i <= 5; i++) {
			menuItems[i].setIconCls('menuitemNoCheck');
		}
	}

	switch (item.text) {

		case 'Show All':
			item.setIconCls('menuitemChecked');
			s.clearFilter();
			break;

		case 'Show X-Rays':
			item.setIconCls('menuitemChecked');
			s.clearFilter(true);
			s.filter('type', 'xray');
			break;

		case 'Show Drugs':
			item.setIconCls('menuitemChecked');
			s.clearFilter(true);
			s.filter('type', 'druginfo');
			break;

		case 'Sort by Date':
			item.setIconCls('menuitemChecked');
			s.sort('date', 'DESC');
			break;

		case 'Sort by Title':
			item.setIconCls('menuitemChecked');
			s.sort('title');
			break;
	}
}