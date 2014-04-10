/* global require */
(function () {
    'use strict';

    require.config({
        baseUrl: 'js-built',
        paths: {
            'underscore': '../lib/underscore',
            'underscore-string': '../lib/underscore.string',
            'jquery': '../lib/jquery',
            'kendo': '../lib/kendo-ui/js/kendo.web',
            'moment': '../lib/moment',
            'react': '../lib/react-with-addons',
            'es5-shim': '../lib/es5-shim',
            'text': '../lib/text',
            'wingspan-forms': '../lib/wingspan-forms/wingspan-forms',
            'wingspan-data': '../lib/wingspan-data'
        },
        shim: {
            'underscore': { deps: [], exports: '_' },
            'underscore-string': { exports: '_s' },
            'jquery': { deps: [], exports: '$' },
            'kendo': { deps: [], exports: 'kendo' },
            'moment': { deps: [], exports: 'moment' },
            'react': { deps: [], exports: 'React'},
            'wingspan-forms': { deps: ['underscore', 'react', 'jquery', 'kendo', 'moment', 'underscore-string'] },
            'wingspan-data': { deps:['jquery', 'underscore', 'kendo', 'q', 'underscore-string'] }
        }
    });
})();
