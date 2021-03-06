'use strict';

/**
 * Config for the router
 */

angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', function ($stateProvider, $urlRouterProvider, JQ_CONFIG) {

        $urlRouterProvider
            .otherwise('/app/dashboard');

        $stateProvider

            .state('app', {
                abstract: true,
                url: '/app',
                templateUrl: 'partials/app.html'
            })
            .state('app.dashboard', {
                url: '/dashboard',
                templateUrl: 'partials/app_dashboard.html',
                resolve: {
                    deps: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load('chart.js')
                                .then(function () {
                                    return $ocLazyLoad.load('js/controllers/dashboard.js');
                                })
                                .then(function () {
                                    return $ocLazyLoad.load('../bower_components/font-awesome/css/font-awesome.css');
                                })
                            ;
                        }
                    ]
                }
            })
            .state('app.searchapp', {
                url: '/searchapp',
                templateUrl: 'partials/searchapp.html',
            })
            .state('access', {
                url: '/access',
                template: '<div ui-view class=""></div>'
            })
            .state('access.login', {
                url: '/login',
                templateUrl: 'partials/login.html',
                resolve: {
                    deps: ['uiLoad',
                        function (uiLoad) {
                            return uiLoad.load(['js/controllers/login.js',
                                '../bower_components/font-awesome/css/font-awesome.css']);
                        }
                    ]
                }
            })
            .state('access.register', {
                url: '/register',
                templateUrl: 'partials/register.html',
                resolve: {
                    deps: ['uiLoad',
                        function (uiLoad) {
                            return uiLoad.load(['js/controllers/register.js', '../bower_components/font-awesome/css/font-awesome.css']);
                        }
                    ]
                }
            })
            .state('access.forgotpwd', {
                url: '/forgotpwd',
                templateUrl: 'partials/forgotpwd.html',
            })
            .state('access.404', {
                url: '/404',
                templateUrl: 'partials/ui-404.html',
            })
            .state('access.500', {
                url: '/500',
                templateUrl: 'partials/ui-500.html'
            })
            .state('access.403', {
                url: '/403',
                templateUrl: 'partials/ui-403.html',
            })
            .state('access.405', {
                url: '/405',
                templateUrl: 'partials/ui-405.html',
            })
            .state('access.408', {
                url: '/408',
                templateUrl: 'partials/ui-408.html',
            })
            .state('access.503', {
                url: '/503',
                templateUrl: 'partials/ui-503.html',
            })
            .state('access.offline', {
                url: '/offline',
                templateUrl: 'partials/ui-offline.html',
            })

            .state('app.ui', {
                url: '/ui',
                template: '<div ui-view class=""></div>'
            })
            .state('app.city', {
                url: '/city',
                templateUrl: 'partials/city.html',
                resolve: {
                    deps: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'js/directives/ui-todowidget.js',
                                'js/controllers/members.js',
                                'js/controllers/video-play.js',
                                '../bower_components/font-awesome/css/font-awesome.css'
                            ]);
                        }
                    ]
                }
            })
            .state('app.video', {
                url: '/video',
                templateUrl: 'partials/video.html',
                resolve: {
                    deps: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'js/directives/ui-todowidget.js',
                                'js/controllers/members.js',
                                'js/controllers/video-play.js',
                                '../bower_components/font-awesome/css/font-awesome.css'
                            ]);
                        }
                    ]
                }
            })
            .state('app.settings', {
                url: '/settings',
                templateUrl: 'partials/settings.html',
                controller: 'SettingsCtrl',
                resolve: {
                    deps: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load(['xeditable', 'angularFileUpload']).then(
                                function () {
                                    return $ocLazyLoad.load([
                                        'js/map/load-google-maps.js',
                                        'js/map/ui-map.js',
                                        'js/controllers/file-upload.js',
                                        'js/controllers/settings.js',
                                        '../bower_components/font-awesome/css/font-awesome.css'
                                    ]).then(
                                        function () {
                                            return loadGoogleMaps();
                                        }
                                    );;
                                }
                            );
                        }
                    ]
                }
            })
            .state('app.paymenthistory', {
                url: '/paymenthistory',
                templateUrl: 'partials/paymenthistory.html'
            })
            .state('app.posts', {
                url: '/posts',
                templateUrl: 'partials/dash-posts.html',
                controller: 'PostsCtrl',
                resolve: {
                    deps: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '../bower_components/datatables/media/js/jquery.dataTables.min.js',
                                'js/controllers/posts.js',
                                '../bower_components/font-awesome/css/font-awesome.css']);
                        }
                    ]
                }
            })
            .state('app.subscribers', {
                url: '/subscribers',
                templateUrl: 'partials/dash-subscribers.html',
                controller: 'SubscribersCtrl',
                resolve: {
                    deps: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load('chart.js').then(
                                function () {
                                    return $ocLazyLoad.load([
                                        '../bower_components/datatables/media/js/jquery.dataTables.min.js',
                                        'js/controllers/users.js',
                                        '../bower_components/font-awesome/css/font-awesome.css']);
                                }
                            );
                        }
                    ]
                }
            })

            .state('app.ui.members', {
                url: '/members',
                templateUrl: 'partials/ui-members.html',
                resolve: {
                    deps: ['uiLoad',
                        function (uiLoad) {
                            return uiLoad.load([
                                'js/controllers/members.js',
                                '../bower_components/font-awesome/css/font-awesome.css']);
                        }
                    ]
                }
            })
            .state('app.ui.search', {
                url: '/search',
                templateUrl: 'partials/ui-search.html',
                resolve: {
                    deps: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'js/filters/search-startfrom.js',
                                'js/controllers/search.js',
                                'js/directives/ui-searchtabs.js',
                                '../bower_components/font-awesome/css/font-awesome.css']);
                        }
                    ]
                }
            })
            .state('app.ui.faq', {
                url: '/faq',
                templateUrl: 'partials/ui-faq.html',
                resolve: {
                    deps: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load(['js/controllers/faq.js']);
                        }
                    ]
                }
            })


            //------------------------------------------------------------
            // FUTURE FEATURES - NOT NECESSARY FOR V1 MVP (CLIFF 11/21/16)
            //------------------------------------------------------------

            .state('app.mail', {
                abstract: true,
                url: '/mail',
                templateUrl: 'partials/mail.html',
                resolve: {
                    deps: ['uiLoad',
                        function (uiLoad) {
                            return uiLoad.load([
                                '../bower_components/font-awesome/css/font-awesome.css',
                                'js/controllers/mail.js',
                                'js/services/mail-service.js',
                                JQ_CONFIG.moment
                            ]);
                        }
                    ]
                }
            })
            .state('app.mail.list', {
                url: '/{fold}',
                templateUrl: 'partials/mail-list.html'
            })
            .state('app.mail.compose', {
                url: '/compose',
                templateUrl: 'partials/mail-compose.html'
            })
            .state('app.mail.view', {
                url: '/{mailId:[0-9]{1,4}}',
                templateUrl: 'partials/mail-view.html'
            })
            .state('app.store', {
                url: '/store',
                templateUrl: 'partials/store.html',
                resolve: {
                    deps: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                '../node_modules/isotope-layout/dist/isotope.pkgd.min.js',
                                'js/controllers/store.js',
                            ]);
                        }
                    ]
                }
            })
            .state('app.calendar', {
                url: '/calendar',
                templateUrl: 'partials/calendar.html',
                resolve: {
                    deps: ['$ocLazyLoad', 'uiLoad',
                        function ($ocLazyLoad, uiLoad) {
                            return uiLoad.load(
                                JQ_CONFIG.fullcalendar.concat('js/controllers/calendar.js')
                            ).then(
                                function () {
                                    return $ocLazyLoad.load('ui.calendar');
                                }
                            )
                        }
                    ]
                }
            })


            //---------------------------------------------------------------------------------------------
            // ORIGINAL TEMPLATE PAGES - LEAVING JUST FOR REFERENCE, CAN EVENTUALLY DELETE (CLIFF 11/21/16)
            //---------------------------------------------------------------------------------------------

            .state('app.charts', {
                url: '/charts',
                template: '<div ui-view class=""></div>',
            })
            .state('app.charts.chartjs', {
                url: '/chartjspie',
                templateUrl: 'partials/charts-chartjs.html',
                resolve: {
                    deps: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load('chart.js').then(
                                function () {
                                    return $ocLazyLoad.load('js/controllers/chartjs.js');
                                }
                            );
                        }
                    ]
                }
            })
            .state('app.charts.easypiechart', {
                url: '/easypiechart',
                templateUrl: 'partials/charts-easypiechart.html'
            })
            .state('app.tables', {
                url: '/tables',
                template: '<div ui-view class=""></div>'
            })
            .state('app.tables.basic', {
                url: '/basic',
                templateUrl: 'partials/tables-basic.html'
            })
            .state('app.tables.data', {
                url: '/data',
                templateUrl: 'partials/tables-data.html'
            })
            .state('app.tables.footable', {
                url: '/footable',
                templateUrl: 'partials/tables-footable.html'
            })
            .state('app.tables.nggrid', {
                url: '/nggrid',
                templateUrl: 'partials/tables-nggrid.html',
                resolve: {
                    deps: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load('ngGrid').then(
                                function () {
                                    return $ocLazyLoad.load('js/controllers/table-nggrid.js');
                                }
                            );
                        }
                    ]
                }
            })
            .state('app.tables.editable', {
                url: '/editable',
                templateUrl: 'partials/tables-editable.html',
                controller: 'SettingsCtrl',
                resolve: {
                    deps: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load('xeditable').then(
                                function () {
                                    return $ocLazyLoad.load('js/controllers/settings.js');
                                }
                            );
                        }
                    ]
                }
            })
            .state('app.tables.smart', {
                url: '/smart',
                templateUrl: 'partials/table-smart.html',
                resolve: {
                    deps: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load('smart-table').then(
                                function () {
                                    return $ocLazyLoad.load('js/controllers/table-smart.js');
                                }
                            );
                        }
                    ]
                }
            })
            .state('app.ui.profile', {
                url: '/profile',
                templateUrl: 'partials/ui-profile.html',
                resolve: {
                    deps: ['uiLoad',
                        function (uiLoad) {
                            return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                        }
                    ]
                }
            })



            // NOT USED - CAN EVENTUALLY BE DELETED
            // Keeping just for reference, can be removed for Production

            .state('app.form', {
                url: '/form',
                template: '<div ui-view class=""></div>'
            })

            .state('app.form.premade', {
                url: '/premade',
                templateUrl: 'partials/form-premade.html',
                resolve: {
                    deps: ['uiLoad',
                        function (uiLoad) {
                            return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                        }
                    ]
                }
            })
            .state('app.form.elements', {
                url: '/elements',
                templateUrl: 'partials/form-elements-check.html',
                resolve: {
                    deps: ['uiLoad',
                        function (uiLoad) {
                            return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                        }
                    ]
                }
            })
            .state('app.form.components', {
                url: '/components',
                templateUrl: 'partials/form-components.html',
                resolve: {
                    deps: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load('colorpicker.module').then(
                                function () {
                                    return $ocLazyLoad.load('js/controllers/colorpicker.js');
                                }
                            ).then(
                                function () {
                                    return $ocLazyLoad.load('../bower_components/font-awesome/css/font-awesome.css');
                                }
                            );
                        }
                    ]
                }
            })
            .state('app.form.wizard', {
                url: '/wizard',
                templateUrl: 'partials/form-wizard.html',
                resolve: {
                    deps: ['uiLoad',
                        function (uiLoad) {
                            return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css']);
                        }
                    ]
                }
            })
            .state('app.form.validation', {
                url: '/validation',
                templateUrl: 'partials/form-validation.html',
                resolve: {
                    deps: ['uiLoad',
                        function (uiLoad) {
                            return uiLoad.load('js/controllers/form-validation.js');
                        }
                    ]
                }
            })
            .state('app.form.masks', {
                url: '/masks',
                templateUrl: 'partials/form-masks.html'
            })
            .state('app.form.editable', {
                url: '/editable',
                templateUrl: 'partials/form-editable.html',
                controller: 'SettingsCtrl',
                resolve: {
                    deps: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load('xeditable').then(
                                function () {
                                    return $ocLazyLoad.load('js/controllers/settings.js');
                                }
                            );
                        }
                    ]
                }
            })
            .state('app.form.fileupload', {
                url: '/fileupload',
                templateUrl: 'partials/form-fileupload.html',
                resolve: {
                    deps: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load('angularFileUpload').then(
                                function () {
                                    return $ocLazyLoad.load('js/controllers/file-upload.js');
                                }
                            );
                        }
                    ]
                }
            })
            .state('app.ui.imagecrop', {
                url: '/imagecrop',
                templateUrl: 'partials/ui-imagecrop.html',
                resolve: {
                    deps: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load('ngImgCrop').then(
                                function () {
                                    return $ocLazyLoad.load('js/controllers/imagecrop.js');
                                }
                            );
                        }
                    ]
                }
            })
            .state('app.ui.notifications', {
                url: '/notifications',
                templateUrl: 'partials/ui-notifications.html',
                resolve: {
                    deps: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load('cgNotify').then(
                                function () {
                                    return $ocLazyLoad.load('js/controllers/notify.js');
                                }
                            );
                        }
                    ]
                }
            })
            .state('app.widgets', {
                url: '/widgets',
                templateUrl: 'partials/widgets.html',
                resolve: {
                    deps: ['$ocLazyLoad',
                        function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'countTo',
                                //'js/controllers/countto.js',
                                'js/controllers/vectormap.js',
                                'js/controllers/vectormap.js',
                                'js/controllers/messages-widget.js',
                                'js/directives/ui-todowidget.js',
                                '../bower_components/font-awesome/css/font-awesome.css'
                            ]);
                        }
                    ]
                }
            })
            .state('app.ui.sortable', {
                url: '/sortable',
                templateUrl: 'partials/ui-sortable.html'
            })
            .state('app.ui.tooltips', {
                url: '/tooltips',
                templateUrl: 'partials/ui-tooltips.html'
            })
    }
    ]);
