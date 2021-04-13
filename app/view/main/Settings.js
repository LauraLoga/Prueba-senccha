Ext.define('MyApp.view.main.Calculator', {
    extend: 'Ext.grid.Grid',
    xtype: 'settings',

    requires: [
        'MyApp.store.Personnel'
    ],

    title: 'Settings',

    store: {
        type: 'personnel'
    },

    columns: [{
        text: 'Name',
        dataIndex: 'name',
        width: 100,
        cell: {
            userCls: 'bold'
        }
    }, {
        text: 'Email',
        dataIndex: 'email',
        width: 230
    }, {
        text: 'Phone',
        dataIndex: 'phone',
        width: 150
    }],

    listeners: {
        select: 'onItemSelected'
    }
});