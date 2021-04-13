/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.*',
        'Ext.Panel',
        'MyApp.view.main.MainController',
        'MyApp.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },

    tabBarPosition: 'bottom',


    items: [
        // TODO - Replace the content of this view to suit the needs of your application.

        {
            title: 'Home',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'mainlist'
            }]
        }, {
            title: 'Calculator',
            iconCls: 'x-fa fa-user',
            defaultType: 'button',
            defaults: {
                width: 50,
                height: 50,
                cls: 'btn',
                handler: 'onClickNumber',
            },
            resizable: false,

            items: [{
                    xtype: 'displayfield',
                    colspan: 4,
                    width: 200,
                    cls: 'display',
                    bind: {
                        value: '{display}'
                    },
                    height: 60,
                    padding: 0

                },
                {
                    text: 'C',
                    colspan: 2,
                    width: 100,
                    cls: 'btn-green',
                    handler: 'onClickClear'
                },
                {
                    text: '+/-',
                    cls: 'btn-green',
                    handler: 'onClickChangeSign'
                },
                {
                    text: '&divide;',
                    cls: 'btn-orange',
                    handler: 'onClickOp'
                },
                {
                    text: '7'
                },
                {
                    text: '8'
                },
                {
                    text: '9'
                },
                {
                    text: '&times;',
                    cls: 'btn-orange',
                    handler: 'onClickOp'
                },
                {
                    text: '4'
                },
                {
                    text: '5'
                },
                {
                    text: '6'
                },
                {
                    text: '-',
                    cls: 'btn-orange',
                    handler: 'onClickOp'
                },
                {
                    text: '1'
                },
                {
                    text: '2'
                },
                {
                    text: '3'
                },
                {
                    text: '+',
                    cls: 'btn-orange',
                    handler: 'onClickOp'
                },
                {
                    text: '0',
                    width: 100,
                    colspan: 2
                },
                {
                    text: '.',
                    handler: 'onClickDot'
                },
                {
                    text: '=',
                    cls: 'btn-orange',
                    handler: 'onClickOp'
                }
            ]
        },
        {
            title: 'Settings',
            iconCls: 'x-fa fa-cog',
            items: [{
                xtype: 'settings'
            }]
        },
        {
            title: 'Groups',
            iconCls: 'x-fa fa-users',
            layout: {
                type: 'center',
                columns: 4
            },
            items: [
                { html: '1,1', rowspan: 3 },
                { html: '1,2' },
                { html: '1,3' },
                { html: '2,2', colspan: 2 },
                { html: '3,2' },
                { html: '3,3' }
            ],
        }
    ]
});