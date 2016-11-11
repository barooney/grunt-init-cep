﻿module.exports =
{
    bundle: {
        version: '{%= version %}',
        id: '{%= id %}',
        name: '{%= name %}',
        author_name: '{%= author_name %}',
        description: '{%= description %}',
        ui_access: 'You can run this extension by choosing<br><b>Window &gt; Extensions &gt; {%= name %}.</b>',
    },

    extensions: [{
        version: '{%= version %}',
        id: '{%= id %}.panel',
        name: '{%= name %}',
        main_path: '{%= basename %}.html',
        script_path: 'extendscript/{%= basename %}.jsx',
        icons: {
            light: {
                normal: 'icons/icon-light.png',
                hover: 'icons/icon-light-hover.png',
                disabled: 'icons/icon-light-disabled.png'
            },
            dark: {
                normal: 'icons/icon-dark.png',
                hover: 'icons/icon-dark-hover.png',
                disabled: 'icons/icon-dark-disabled.png'
            },
        },
        manifest: 'bundle/manifest.extension.xml',
    }],

    builds: [
        // CC2017
        {
            bundle: { manifest: 'bundle/manifest.bundle.cc2017.xml' },
            products: {%= products %},
            source: 'src',
            families: ['CC2017'],
        },
        // CC2015
        {
            bundle: { manifest: 'bundle/manifest.bundle.cc2015.xml' },
            products: {%= products %},
            source: 'src',
            families: ['CC2015'],
        },
        // Adobe CC and CC2014
        {
            bundle: { manifest: 'bundle/manifest.bundle.cc.xml' },
            products: {%= products %},
            source: 'src',
            families: ['CC2014', 'CC'],
        }
    ],
};
