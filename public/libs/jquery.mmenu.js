/*
    This file has no contents.
    If you are looking for the unminified version of jquery.mmenu.min.js,
    it is a combination of these files:
        - jquery.mmenu.oncanvas.js
        - addons/offcanvas/jquery.mmenu.offcanvas.js
        - addons/scrollbugfix/jquery.mmenu.scrollbugfix.js
*/
console.group( 'jquery.mmenu.js has no contents.' );
console.error( 'If you are looking for the unminified version of jquery.mmenu.min.js, it is a combination of the files js/jquery.mmenu.oncanvas.js, addons/offcanvas/jquery.mmenu.offcanvas.js and addons/scrollbugfix/jquery.mmenu.scrollbugfix.js' );
console.groupEnd();

/*
 * jQuery mmenu v5.7.8
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-NC-4.0
 * http://creativecommons.org/licenses/by-nc/4.0/
 */

;(function( $ ) {

    var _PLUGIN_    = 'mmenu',
        _VERSION_   = '5.7.8';


    //  Plugin already excists
    if ( $[ _PLUGIN_ ] && $[ _PLUGIN_ ].version > _VERSION_ )
    {
        return;
    }


    /*
        Class
    */
    $[ _PLUGIN_ ] = function( $menu, opts, conf )
    {
        this.$menu  = $menu;
        this._api   = [ 'bind', 'getInstance', 'update', 'initPanels', 'openPanel', 'closePanel', 'closeAllPanels', 'setSelected' ];
        this.opts   = opts;
        this.conf   = conf;
        this.vars   = {};
        this.cbck   = {};


        if ( typeof this.___deprecated == 'function' )
        {
            this.___deprecated();
        }


        this._initMenu();
        this._initAnchors();

        var $pnls = this.$pnls.children();

        this._initAddons();
        this.initPanels( $pnls );


        if ( typeof this.___debug == 'function' )
        {
            this.___debug();
        }

        return this;
    };

    $[ _PLUGIN_ ].version   = _VERSION_;
    $[ _PLUGIN_ ].addons    = {};
    $[ _PLUGIN_ ].uniqueId  = 0;


    $[ _PLUGIN_ ].defaults  = {
        extensions      : [],
        initMenu        : function() {},
        initPanels      : function() {},
        navbar          : {
            add             : true,
            title           : 'Menu',
            titleLink       : 'panel'
        },
        onClick         : {
//          close           : true,
//          preventDefault  : null,
            setSelected     : true
        },
        slidingSubmenus : true
    };

    $[ _PLUGIN_ ].configuration = {
        classNames          : {
            divider     : 'Divider',
            inset       : 'Inset',
            panel       : 'Panel',
            selected    : 'Selected',
            spacer      : 'Spacer',
            vertical    : 'Vertical'
        },
        clone               : false,
        openingInterval     : 25,
        panelNodetype       : 'ul, ol, div',
        transitionDuration  : 400
    };

    $[ _PLUGIN_ ].prototype = {

//  TEMP backward compat
init: function( $panels )
{
    this.initPanels( $panels );
},

        getInstance: function()
        {
            return this;
        },

        update: function()
        {
            this.trigger( 'update' );
        },

        initPanels: function( $panels )
        {
            $panels = $panels.not( '.' + _c.nopanel );
            $panels = this._initPanels( $panels );

            this.opts.initPanels.call( this, $panels );

            this.trigger( 'initPanels', $panels );
            this.trigger( 'update' );
        },

        openPanel: function( $panel )
        {
            var $l = $panel.parent(),
                that = this;

            //  Vertical
            if ( $l.hasClass( _c.vertical ) )
            {
                var $sub = $l.parents( '.' + _c.subopened );
                if ( $sub.length )
                {
                    this.openPanel( $sub.first() );
                    return;
                }
                $l.addClass( _c.opened );

                this.trigger( 'openPanel'   , $panel );
                this.trigger( 'openingPanel', $panel );
                this.trigger( 'openedPanel' , $panel );
            }

            //  Horizontal
            else
            {
                if ( $panel.hasClass( _c.current ) )
                {
                    return;
                }

                var $panels = this.$pnls.children( '.' + _c.panel ),
                    $current = $panels.filter( '.' + _c.current );

                $panels
                    .removeClass( _c.highest )
                    .removeClass( _c.current )
                    .not( $panel )
                    .not( $current )
                    .not( '.' + _c.vertical )
                    .addClass( _c.hidden );

                if ( !$[ _PLUGIN_ ].support.csstransitions )
                {
                    $current.addClass( _c.hidden );
                }

                if ( $panel.hasClass( _c.opened ) )
                {
                    $panel
                        .nextAll( '.' + _c.opened )
                        .addClass( _c.highest )
                        .removeClass( _c.opened )
                        .removeClass( _c.subopened );
                }
                else
                {
                    $panel.addClass( _c.highest );
                    $current.addClass( _c.subopened );
                }

                $panel
                    .removeClass( _c.hidden )
                    .addClass( _c.current );

                that.trigger( 'openPanel', $panel );

                //  Without the timeout the animation won't work because the element had display: none;
                setTimeout(
                    function()
                    {
                        $panel
                            .removeClass( _c.subopened )
                            .addClass( _c.opened );

                        that.trigger( 'openingPanel', $panel );

                        //  Callback
                        that.__transitionend( $panel,
                            function()
                            {
                                that.trigger( 'openedPanel', $panel );
                            }, that.conf.transitionDuration
                        );

                    }, this.conf.openingInterval
                );
            }
        },

        closePanel: function( $panel )
        {
            var $l = $panel.parent();

            //  Vertical only
            if ( $l.hasClass( _c.vertical ) )
            {
                $l.removeClass( _c.opened );

                this.trigger( 'closePanel'  , $panel );
                this.trigger( 'closingPanel', $panel );
                this.trigger( 'closedPanel' , $panel );
            }
        },

        closeAllPanels: function()
        {
            //  Vertical
            this.$menu
                .find( '.' + _c.listview )
                .children()
                .removeClass( _c.selected )
                .filter( '.' + _c.vertical )
                .removeClass( _c.opened );

            //  Horizontal
            var $pnls = this.$pnls.children( '.' + _c.panel ),
                $frst = $pnls.first();

            this.$pnls
                .children( '.' + _c.panel )
                .not( $frst )
                .removeClass( _c.subopened )
                .removeClass( _c.opened )
                .removeClass( _c.current )
                .removeClass( _c.highest )
                .addClass( _c.hidden );

            this.openPanel( $frst );
        },

        togglePanel: function( $panel )
        {
            var $l = $panel.parent();

            //  Vertical only
            if ( $l.hasClass( _c.vertical ) )
            {
                this[ $l.hasClass( _c.opened ) ? 'closePanel' : 'openPanel' ]( $panel );
            }
        },

        setSelected: function( $li )
        {
            this.$menu.find( '.' + _c.listview ).children( '.' + _c.selected ).removeClass( _c.selected );
            $li.addClass( _c.selected );

            this.trigger( 'setSelected', $li );
        },

        bind: function( evnt, fn )
        {

//  TEMP backward compat
evnt = (evnt == 'init') ? 'initPanels' : evnt;

            this.cbck[ evnt ] = this.cbck[ evnt ] || [];
            this.cbck[ evnt ].push( fn );
        },

        trigger: function()
        {
            var that = this,
                args = Array.prototype.slice.call( arguments ),
                evnt = args.shift();

//  TEMP backward compat
evnt = (evnt == 'init') ? 'initPanels' : evnt;

            if ( this.cbck[ evnt ] )
            {
                for ( var e = 0, l = this.cbck[ evnt ].length; e < l; e++ )
                {
                    this.cbck[ evnt ][ e ].apply( that, args );
                }
            }
        },

        _initMenu: function()
        {
            var that = this;

            //  Clone if needed
            if ( this.conf.clone )
            {
                this.$orig = this.$menu;
                this.$menu = this.$orig.clone( true );
                this.$menu.add( this.$menu.find( '[id]' ) )
                    .filter( '[id]' )
                    .each(
                        function()
                        {
                            $(this).attr( 'id', _c.mm( $(this).attr( 'id' ) ) );
                        }
                    );
            }

            //  Via options
            this.opts.initMenu.call( this, this.$menu, this.$orig );

            //  Add ID
            this.$menu.attr( 'id', this.$menu.attr( 'id' ) || this.__getUniqueId() );

            //  Add markup
            this.$pnls = $( '<div class="' + _c.panels + '" />' )
                .append( this.$menu.children( this.conf.panelNodetype ) )
                .prependTo( this.$menu );

            //  Add classes
            this.$menu
                .parent()
                .addClass( _c.wrapper );

            var clsn = [ _c.menu ];

            if ( !this.opts.slidingSubmenus )
            {
                clsn.push( _c.vertical );
            }

            //  Add extensions classes
            this.opts.extensions = this.opts.extensions.length ? 'mm-' + this.opts.extensions.join( ' mm-' ) : '';

            if ( this.opts.extensions )
            {
                clsn.push( this.opts.extensions );
            }

            this.$menu.addClass( clsn.join( ' ' ) );

            this.trigger( '_initMenu' );
        },

        _initPanels: function( $panels )
        {
            var that = this;

            var $lists = this.__findAddBack( $panels, 'ul, ol' );

            //  Add List classname
            this.__refactorClass( $lists, this.conf.classNames.inset, 'inset' )
                .addClass( _c.nolistview + ' ' + _c.nopanel );

            $lists.not( '.' + _c.nolistview )
                .addClass( _c.listview );

            var $lis = this.__findAddBack( $panels, '.' + _c.listview ).children();

            //  Refactor classnames
            this.__refactorClass( $lis, this.conf.classNames.selected, 'selected' );
            this.__refactorClass( $lis, this.conf.classNames.divider, 'divider' );
            this.__refactorClass( $lis, this.conf.classNames.spacer, 'spacer' );
            this.__refactorClass( this.__findAddBack( $panels, '.' + this.conf.classNames.panel ), this.conf.classNames.panel, 'panel' );

            //  Create panels
            var $curpanels = $(),
                $oldpanels = $panels
                    .add( $panels.find( '.' + _c.panel ) )
                    .add( this.__findAddBack( $panels, '.' + _c.listview ).children().children( this.conf.panelNodetype ) )
                    .not( '.' + _c.nopanel );

            this.__refactorClass( $oldpanels, this.conf.classNames.vertical, 'vertical' );

            if ( !this.opts.slidingSubmenus )
            {
                $oldpanels.addClass( _c.vertical );
            }

            $oldpanels
                .each(
                    function()
                    {
                        var $t = $(this),
                            $p = $t;

                        if ( $t.is( 'ul, ol' ) )
                        {
                            $t.wrap( '<div class="' + _c.panel + '" />' );
                            $p = $t.parent();
                        }
                        else
                        {
                            $p.addClass( _c.panel );
                        }

                        var id = $t.attr( 'id' );
                        $t.removeAttr( 'id' );
                        $p.attr( 'id', id || that.__getUniqueId() );

                        if ( $t.hasClass( _c.vertical ) )
                        {
                            $t.removeClass( that.conf.classNames.vertical );
                            $p.add( $p.parent() ).addClass( _c.vertical );
                        }

                        $curpanels = $curpanels.add( $p );
                    }
                );

            var $allpanels = $('.' + _c.panel, this.$menu);

            //  Add open and close links to menu items
            $curpanels
                .each(
                    function( i )
                    {
                        var $t = $(this),
                            $p = $t.parent(),
                            $a = $p.children( 'a, span' ).first();

                        var id, $b;

                        if ( !$p.is( '.' + _c.panels ) )
                        {
                            $p.data( _d.child, $t );
                            $t.data( _d.parent, $p );
                        }

                        //  Open link
                        if ( !$p.children( '.' + _c.next ).length )
                        {
                            if ( $p.parent().is( '.' + _c.listview ) )
                            {
                                id = $t.attr( 'id' );
                                $b = $( '<a class="' + _c.next + '" href="#' + id + '" data-target="#' + id + '" />' ).insertBefore( $a );

                                if ( $a.is( 'span' ) )
                                {
                                    $b.addClass( _c.fullsubopen );
                                }
                            }
                        }

                        //  Navbar
                        if ( $t.children( '.' + _c.navbar ).length ||
                            $p.hasClass( _c.vertical )
                        ) {
                            return;
                        }

                        if ( $p.parent().is( '.' + _c.listview ) )
                        {
                            //  Listview, the panel wrapping this panel
                            $p = $p.closest( '.' + _c.panel );
                        }
                        else
                        {
                            //  Non-listview, the first panel that has an anchor that links to this panel
                            $a = $p.closest( '.' + _c.panel ).find( 'a[href="#' + $t.attr( 'id' ) + '"]' ).first();
                            $p = $a.closest( '.' + _c.panel );
                        }

                        // fix: _url undefined
                        var _url = false;
                        var $navbar = $( '<div class="' + _c.navbar + '" />' );

                        if ( that.opts.navbar.add )
                        {
                            $t.addClass( _c.hasnavbar );
                        }

                        if ( $p.length )
                        {
                            id = $p.attr( 'id' );
                            switch ( that.opts.navbar.titleLink )
                            {
                                case 'anchor':
                                    _url = $a.attr( 'href' );
                                    break;

                                case 'panel':
                                case 'parent':
                                    _url = '#' + id;
                                    break;

                                default:
                                    _url = false;
                                    break;
                            }

                            $navbar
                                .append( '<a class="' + _c.btn + ' ' + _c.prev + '" href="#' + id + '" data-target="#' + id + '" />' )
                                .append( $('<a class="' + _c.title + '"' + ( _url ? ' href="' + _url + '"' : '' ) + ' />').text( $a.text() ) )
                                .prependTo( $t );
                        }
                        else if ( that.opts.navbar.title )
                        {
                            $navbar
                                .append( '<a class="' + _c.title + '">' + $[ _PLUGIN_ ].i18n( that.opts.navbar.title ) + '</a>' )
                                .prependTo( $t );
                        }
                    }
                );


            //  Add opened-classes to parents
            var $s = this.__findAddBack( $panels, '.' + _c.listview )
                .children( '.' + _c.selected )
                .removeClass( _c.selected )
                .last()
                .addClass( _c.selected );

            $s.add( $s.parentsUntil( '.' + _c.menu, 'li' ) )
                .filter( '.' + _c.vertical )
                .addClass( _c.opened )
                .end()
                .each(
                    function()
                    {
                        $(this).parentsUntil( '.' + _c.menu, '.' + _c.panel )
                            .not( '.' + _c.vertical )
                            .first()
                            .addClass( _c.opened )
                            .parentsUntil( '.' + _c.menu, '.' + _c.panel )
                            .not( '.' + _c.vertical )
                            .first()
                            .addClass( _c.opened )
                            .addClass( _c.subopened );
                    }
                );


            //  Add opened-classes to child
            $s.children( '.' + _c.panel )
                .not( '.' + _c.vertical )
                .addClass( _c.opened )
                .parentsUntil( '.' + _c.menu, '.' + _c.panel )
                .not( '.' + _c.vertical )
                .first()
                .addClass( _c.opened )
                .addClass( _c.subopened );


            //  Set current opened
            var $current = $allpanels.filter( '.' + _c.opened );
            if ( !$current.length )
            {
                $current = $curpanels.first();
            }
            $current
                .addClass( _c.opened )
                .last()
                .addClass( _c.current );


            //  Rearrange markup
            $curpanels
                .not( '.' + _c.vertical )
                .not( $current.last() )
                .addClass( _c.hidden )
                .end()
                .filter(
                    function()
                    {
                        return !$(this).parent().hasClass( _c.panels  );
                    }
                )
                .appendTo( this.$pnls );

            this.trigger( '_initPanels', $curpanels );

            return $curpanels;
        },

        _initAnchors: function()
        {
            var that = this;

            glbl.$body
                .on( _e.click + '-oncanvas',
                    'a[href]',
                    function( e )
                    {
                        var $t = $(this),
                            fired   = false,
                            inMenu  = that.$menu.find( $t ).length;

                        //  Find behavior for addons
                        for ( var a in $[ _PLUGIN_ ].addons )
                        {
                            if ( $[ _PLUGIN_ ].addons[ a ].clickAnchor.call( that, $t, inMenu ) )
                            {
                                fired = true;
                                break;
                            }
                        }

                        var _h = $t.attr( 'href' );

                        //  Open/Close panel
                        if ( !fired && inMenu )
                        {
                            if ( _h.length > 1 && _h.slice( 0, 1 ) == '#' )
                            {
                                try
                                {
                                    var $h = $(_h, that.$menu);
                                    if ( $h.is( '.' + _c.panel ) )
                                    {
                                        fired = true;
                                        that[ $t.parent().hasClass( _c.vertical ) ? 'togglePanel' : 'openPanel' ]( $h );
                                    }
                                }
                                catch( err ) {}
                            }
                        }

                        if ( fired )
                        {
                            e.preventDefault();
                        }


                        //  All other anchors in lists
                        if ( !fired && inMenu )
                        {
                            if ( $t.is( '.' + _c.listview + ' > li > a' ) && !$t.is( '[rel="external"]' ) && !$t.is( '[target="_blank"]' ) )
                            {

                                //  Set selected item
                                if ( that.__valueOrFn( that.opts.onClick.setSelected, $t ) )
                                {
                                    that.setSelected( $(e.target).parent() );
                                }

                                //  Prevent default / don't follow link. Default: false
                                var preventDefault = that.__valueOrFn( that.opts.onClick.preventDefault, $t, _h.slice( 0, 1 ) == '#' );
                                if ( preventDefault )
                                {
                                    e.preventDefault();
                                }

                                //  Close menu. Default: true if preventDefault, false otherwise
                                if ( that.__valueOrFn( that.opts.onClick.close, $t, preventDefault ) )
                                {
                                    that.close();
                                }
                            }
                        }
                    }
                );

            this.trigger( '_initAnchors' );
        },

        _initAddons: function()
        {
            //  Add add-ons to plugin
            var a;
            for ( a in $[ _PLUGIN_ ].addons )
            {
                $[ _PLUGIN_ ].addons[ a ].add.call( this );
                $[ _PLUGIN_ ].addons[ a ].add = function() {};
            }

            //  Setup adds-on for menu
            for ( a in $[ _PLUGIN_ ].addons )
            {
                $[ _PLUGIN_ ].addons[ a ].setup.call( this );
            }

            this.trigger( '_initAddons' );
        },

        _getOriginalMenuId: function()
        {
            var id = this.$menu.attr( 'id' );
            if ( id && id.length )
            {
                if ( this.conf.clone )
                {
                    id = _c.umm( id );
                }
            }
            return id;
        },

        __api: function()
        {
            var that = this,
                api = {};

            $.each( this._api,
                function( i )
                {
                    var fn = this;
                    api[ fn ] = function()
                    {
                        var re = that[ fn ].apply( that, arguments );
                        return ( typeof re == 'undefined' ) ? api : re;
                    };
                }
            );
            return api;
        },

        __valueOrFn: function( o, $e, d )
        {
            if ( typeof o == 'function' )
            {
                return o.call( $e[ 0 ] );
            }
            if ( typeof o == 'undefined' && typeof d != 'undefined' )
            {
                return d;
            }
            return o;
        },

        __refactorClass: function( $e, o, c )
        {
            return $e.filter( '.' + o ).removeClass( o ).addClass( _c[ c ] );
        },

        __findAddBack: function( $e, s )
        {
            return $e.find( s ).add( $e.filter( s ) );
        },

        __filterListItems: function( $i )
        {
            return $i
                .not( '.' + _c.divider )
                .not( '.' + _c.hidden );
        },

        __transitionend: function( $e, fn, duration )
        {
            var _ended = false,
                _fn = function( e )
                {

                    if ( typeof e !== 'undefined' )
                    {
                        if ( $(e.target).is( $e ) )
                        {
                            $e.unbind( _e.transitionend );
                            $e.unbind( _e.webkitTransitionEnd );
                        }
                        else
                        {
                            return false;
                        }
                    }

                    if ( !_ended )
                    {
                        fn.call( $e[ 0 ] );
                    }
                    _ended = true;
                };

            $e.on( _e.transitionend, _fn );
            $e.on( _e.webkitTransitionEnd, _fn );
            setTimeout( _fn, duration * 1.1 );
        },

        __getUniqueId: function()
        {
            return _c.mm( $[ _PLUGIN_ ].uniqueId++ );
        }
    };


    /*
        jQuery plugin
    */
    $.fn[ _PLUGIN_ ] = function( opts, conf )
    {
        //  First time plugin is fired
        initPlugin();

        //  Extend options
        opts = $.extend( true, {}, $[ _PLUGIN_ ].defaults, opts );
        conf = $.extend( true, {}, $[ _PLUGIN_ ].configuration, conf );

        var $result = $();
        this.each(
            function()
            {
                var $menu = $(this);
                if ( $menu.data( _PLUGIN_ ) )
                {
                    return;
                }

                var _menu = new $[ _PLUGIN_ ]( $menu, opts, conf );
                _menu.$menu.data( _PLUGIN_, _menu.__api() );

                $result = $result.add( _menu.$menu );
            }
        );

        return $result;
    };


    /*
        I18N
    */
    $[ _PLUGIN_ ].i18n = (function() {

        var trns = {};

        return function( t )
        {
            switch( typeof t )
            {
                case 'object':
                    $.extend( trns, t );
                    return trns;
                    break;

                case 'string':
                    return trns[ t ] || t;
                    break;

                case 'undefined':
                default:
                    return trns;
                    break;
            }
        };
    })();


    /*
        SUPPORT
    */
    $[ _PLUGIN_ ].support = {
        touch: 'ontouchstart' in window || navigator.msMaxTouchPoints || false,
        csstransitions: (function()
        {
            //  Use Modernizr test
            if ( typeof Modernizr !== 'undefined' &&
                 typeof Modernizr.csstransitions !== 'undefined'
            ) {
                return Modernizr.csstransitions;
            }

            var b = document.body || document.documentElement,
                s = b.style,
                p = 'transition';

            //  Default support
            if ( typeof s[ p ] == 'string' )
            {
                return true;
            }

            //  Vendor specific support
            var v = [ 'Moz', 'webkit', 'Webkit', 'Khtml', 'O', 'ms' ];
            p = p.charAt( 0 ).toUpperCase() + p.substr( 1 );

            for ( var i = 0; i < v.length; i++ )
            {
                if ( typeof s[ v[ i ] + p ] == 'string' )
                {
                    return true;
                }
            }

            //  No support
            return false;
        })(),
        csstransforms: (function() {
            if ( typeof Modernizr !== 'undefined' &&
                 typeof Modernizr.csstransforms !== 'undefined'
            ) {
                return Modernizr.csstransforms;
            }

            //  w/o Modernizr, we'll assume you only support modern browsers :/
            return true;
        })(),
        csstransforms3d: (function() {
            if ( typeof Modernizr !== 'undefined' &&
                 typeof Modernizr.csstransforms3d !== 'undefined'
            ) {
                return Modernizr.csstransforms3d;
            }

            //  w/o Modernizr, we'll assume you only support modern browsers :/
            return true;
        })()
    };


    //  Global variables
    var _c, _d, _e, glbl;

    function initPlugin()
    {
        if ( $[ _PLUGIN_ ].glbl )
        {
            return;
        }

        glbl = {
            $wndw : $(window),
            $docu : $(document),
            $html : $('html'),
            $body : $('body')
        };


        //  Classnames, Datanames, Eventnames
        _c = {};
        _d = {};
        _e = {};

        $.each( [ _c, _d, _e ],
            function( i, o )
            {
                o.add = function( a )
                {
                    a = a.split( ' ' );
                    for ( var b = 0, l = a.length; b < l; b++ )
                    {
                        o[ a[ b ] ] = o.mm( a[ b ] );
                    }
                };
            }
        );

        //  Classnames
        _c.mm = function( c ) { return 'mm-' + c; };
        _c.add( 'wrapper menu panels panel nopanel current highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen' );
        _c.umm = function( c )
        {
            if ( c.slice( 0, 3 ) == 'mm-' )
            {
                c = c.slice( 3 );
            }
            return c;
        };

        //  Datanames
        _d.mm = function( d ) { return 'mm-' + d; };
        _d.add( 'parent child' );

        //  Eventnames
        _e.mm = function( e ) { return e + '.mm'; };
        _e.add( 'transitionend webkitTransitionEnd click scroll keydown mousedown mouseup touchstart touchmove touchend orientationchange' );


        $[ _PLUGIN_ ]._c = _c;
        $[ _PLUGIN_ ]._d = _d;
        $[ _PLUGIN_ ]._e = _e;

        $[ _PLUGIN_ ].glbl = glbl;
    }


})( jQuery );






/*
 * jQuery mmenu offCanvas add-on
 * mmenu.frebsite.nl
 * 控制 样式显示
 * Copyright (c) Fred Heusschen
 */
!function(e){var n="mmenu",t="offCanvas";e[n].addons[t]={setup:function(){if(this.opts[t]){var s=this.opts[t],a=this.conf[t];o=e[n].glbl,this._api=e.merge(this._api,["open","close","setPage"]),"top"!=s.position&&"bottom"!=s.position||(s.zposition="front"),"string"!=typeof a.pageSelector&&(a.pageSelector="> "+a.pageNodetype),o.$allMenus=(o.$allMenus||e()).add(this.$menu),this.vars.opened=!1;var r=[i.offcanvas];"left"!=s.position&&r.push(i.mm(s.position)),"back"!=s.zposition&&r.push(i.mm(s.zposition)),this.$menu.addClass(r.join(" ")).parent().removeClass(i.wrapper),e[n].support.csstransforms||this.$menu.addClass(i["no-csstransforms"]),e[n].support.csstransforms3d||this.$menu.addClass(i["no-csstransforms3d"]),this.setPage(o.$page),this._initBlocker(),this["_initWindow_"+t](),this.$menu[a.menuInjectMethod+"To"](a.menuWrapperSelector);var l=window.location.hash;if(l){var d=this._getOriginalMenuId();d&&d==l.slice(1)&&this.open()}}},add:function(){i=e[n]._c,s=e[n]._d,a=e[n]._e,i.add("offcanvas slideout blocking modal background opening blocker page no-csstransforms3d"),s.add("style"),a.add("resize")},clickAnchor:function(e,n){var s=this;if(this.opts[t]){var a=this._getOriginalMenuId();if(a&&e.is('[href="#'+a+'"]')){if(n)return!0;var r=e.closest("."+i.menu);if(r.length){var l=r.data("mmenu");if(l&&l.close)return l.close(),s.__transitionend(r,function(){s.open()},s.conf.transitionDuration),!0}return this.open(),!0}if(o.$page)return a=o.$page.first().attr("id"),a&&e.is('[href="#'+a+'"]')?(this.close(),!0):void 0}}},e[n].defaults[t]={position:"left",zposition:"back",blockUI:!0,moveBackground:!0},e[n].configuration[t]={pageNodetype:"div",pageSelector:null,noPageSelector:[],wrapPageIfNeeded:!0,menuWrapperSelector:"body",menuInjectMethod:"prepend"},e[n].prototype.open=function(){if(!this.vars.opened){var e=this;this._openSetup(),setTimeout(function(){e._openFinish()},this.conf.openingInterval),this.trigger("open")}},e[n].prototype._openSetup=function(){var n=this,r=this.opts[t];this.closeAllOthers(),o.$page.each(function(){e(this).data(s.style,e(this).attr("style")||"")}),o.$wndw.trigger(a.resize+"-"+t,[!0]);var l=[i.opened];r.blockUI&&l.push(i.blocking),"modal"==r.blockUI&&l.push(i.modal),r.moveBackground&&l.push(i.background),"left"!=r.position&&l.push(i.mm(this.opts[t].position)),"back"!=r.zposition&&l.push(i.mm(this.opts[t].zposition)),this.opts.extensions&&l.push(this.opts.extensions),o.$html.addClass(l.join(" ")),setTimeout(function(){n.vars.opened=!0},this.conf.openingInterval),this.$menu.addClass(i.current+" "+i.opened)},e[n].prototype._openFinish=function(){var e=this;this.__transitionend(o.$page.first(),function(){e.trigger("opened")},this.conf.transitionDuration),o.$html.addClass(i.opening),this.trigger("opening")},e[n].prototype.close=function(){if(this.vars.opened){var n=this;this.__transitionend(o.$page.first(),function(){n.$menu.removeClass(i.current+" "+i.opened);var a=[i.opened,i.blocking,i.modal,i.background,i.mm(n.opts[t].position),i.mm(n.opts[t].zposition)];n.opts.extensions&&a.push(n.opts.extensions),o.$html.removeClass(a.join(" ")),o.$page.each(function(){e(this).attr("style",e(this).data(s.style))}),n.vars.opened=!1,n.trigger("closed")},this.conf.transitionDuration),o.$html.removeClass(i.opening),this.trigger("close"),this.trigger("closing")}},e[n].prototype.closeAllOthers=function(){o.$allMenus.not(this.$menu).each(function(){var t=e(this).data(n);t&&t.close&&t.close()})},e[n].prototype.setPage=function(n){var s=this,a=this.conf[t];n&&n.length||(n=o.$body.find(a.pageSelector),a.noPageSelector.length&&(n=n.not(a.noPageSelector.join(", "))),n.length>1&&a.wrapPageIfNeeded&&(n=n.wrapAll("<"+this.conf[t].pageNodetype+" />").parent())),n.each(function(){e(this).attr("id",e(this).attr("id")||s.__getUniqueId())}),n.addClass(i.page+" "+i.slideout),o.$page=n,this.trigger("setPage",n)},e[n].prototype["_initWindow_"+t]=function(){o.$wndw.off(a.keydown+"-"+t).on(a.keydown+"-"+t,function(e){if(o.$html.hasClass(i.opened)&&9==e.keyCode)return e.preventDefault(),!1});var e=0;o.$wndw.off(a.resize+"-"+t).on(a.resize+"-"+t,function(n,t){if(1==o.$page.length&&(t||o.$html.hasClass(i.opened))){var s=o.$wndw.height();(t||s!=e)&&(e=s,o.$page.css("minHeight",s))}})},e[n].prototype._initBlocker=function(){var n=this;this.opts[t].blockUI&&(o.$blck||(o.$blck=e('<div id="'+i.blocker+'" class="'+i.slideout+'" />')),o.$blck.appendTo(o.$body).off(a.touchstart+"-"+t+" "+a.touchmove+"-"+t).on(a.touchstart+"-"+t+" "+a.touchmove+"-"+t,function(e){e.preventDefault(),e.stopPropagation(),o.$blck.trigger(a.mousedown+"-"+t)}).off(a.mousedown+"-"+t).on(a.mousedown+"-"+t,function(e){e.preventDefault(),o.$html.hasClass(i.modal)||(n.closeAllOthers(),n.close())}))};var i,s,a,o}(jQuery);

/*
 * jQuery mmenu scrollBugFix add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var n="mmenu",t="scrollBugFix";e[n].addons[t]={setup:function(){var s=this,r=this.opts[t];this.conf[t];if(o=e[n].glbl,e[n].support.touch&&this.opts.offCanvas&&this.opts.offCanvas.blockUI&&("boolean"==typeof r&&(r={fix:r}),"object"!=typeof r&&(r={}),r=this.opts[t]=e.extend(!0,{},e[n].defaults[t],r),r.fix)){var l=this.$menu.attr("id"),d=!1;this.bind("opening",function(){this.$pnls.children("."+i.current).scrollTop(0)}),o.$docu.on(a.touchmove,function(e){s.vars.opened&&e.preventDefault()}),o.$body.on(a.touchstart,"#"+l+"> ."+i.panels+"> ."+i.current,function(e){s.vars.opened&&(d||(d=!0,0===e.currentTarget.scrollTop?e.currentTarget.scrollTop=1:e.currentTarget.scrollHeight===e.currentTarget.scrollTop+e.currentTarget.offsetHeight&&(e.currentTarget.scrollTop-=1),d=!1))}).on(a.touchmove,"#"+l+"> ."+i.panels+"> ."+i.current,function(n){s.vars.opened&&e(this)[0].scrollHeight>e(this).innerHeight()&&n.stopPropagation()}),o.$wndw.on(a.orientationchange,function(){s.$pnls.children("."+i.current).scrollTop(0).css({"-webkit-overflow-scrolling":"auto"}).css({"-webkit-overflow-scrolling":"touch"})})}},add:function(){i=e[n]._c,s=e[n]._d,a=e[n]._e},clickAnchor:function(e,n){}},e[n].defaults[t]={fix:!0};var i,s,a,o}(jQuery);

/*
 * jQuery mmenu autoHeight add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var n="mmenu",t="autoHeight";e[n].addons[t]={setup:function(){if(this.opts.offCanvas){var s=this.opts[t];this.conf[t];if(o=e[n].glbl,"boolean"==typeof s&&s&&(s={height:"auto"}),"string"==typeof s&&(s={height:s}),"object"!=typeof s&&(s={}),s=this.opts[t]=e.extend(!0,{},e[n].defaults[t],s),"auto"==s.height||"highest"==s.height){this.$menu.addClass(i.autoheight);var a=function(n){if(this.vars.opened){var t=parseInt(this.$pnls.css("top"),10)||0,a=parseInt(this.$pnls.css("bottom"),10)||0,o=0;this.$menu.addClass(i.measureheight),"auto"==s.height?(n=n||this.$pnls.children("."+i.current),n.is("."+i.vertical)&&(n=n.parents("."+i.panel).not("."+i.vertical).first()),o=n.outerHeight()):"highest"==s.height&&this.$pnls.children().each(function(){var n=e(this);n.is("."+i.vertical)&&(n=n.parents("."+i.panel).not("."+i.vertical).first()),o=Math.max(o,n.outerHeight())}),this.$menu.height(o+t+a).removeClass(i.measureheight)}};this.bind("opening",a),"highest"==s.height&&this.bind("initPanels",a),"auto"==s.height&&(this.bind("update",a),this.bind("openPanel",a),this.bind("closePanel",a))}}},add:function(){i=e[n]._c,s=e[n]._d,a=e[n]._e,i.add("autoheight measureheight"),a.add("resize")},clickAnchor:function(e,n){}},e[n].defaults[t]={height:"default"};var i,s,a,o}(jQuery);

/*
 * jQuery mmenu backButton add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var n="mmenu",t="backButton";e[n].addons[t]={setup:function(){if(this.opts.offCanvas){var s=this,a=this.opts[t];this.conf[t];if(o=e[n].glbl,"boolean"==typeof a&&(a={close:a}),"object"!=typeof a&&(a={}),a=e.extend(!0,{},e[n].defaults[t],a),a.close){var r="#"+s.$menu.attr("id");this.bind("opened",function(e){location.hash!=r&&history.pushState(null,document.title,r)}),e(window).on("popstate",function(e){o.$html.hasClass(i.opened)?(e.stopPropagation(),s.close()):location.hash==r&&(e.stopPropagation(),s.open())})}}},add:function(){return window.history&&window.history.pushState?(i=e[n]._c,s=e[n]._d,void(a=e[n]._e)):void(e[n].addons[t].setup=function(){})},clickAnchor:function(e,n){}},e[n].defaults[t]={close:!1};var i,s,a,o}(jQuery);

/*
 * jQuery mmenu columns add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var n="mmenu",t="columns";e[n].addons[t]={setup:function(){var s=this.opts[t];this.conf[t];if(o=e[n].glbl,"boolean"==typeof s&&(s={add:s}),"number"==typeof s&&(s={add:!0,visible:s}),"object"!=typeof s&&(s={}),"number"==typeof s.visible&&(s.visible={min:s.visible,max:s.visible}),s=this.opts[t]=e.extend(!0,{},e[n].defaults[t],s),s.add){s.visible.min=Math.max(1,Math.min(6,s.visible.min)),s.visible.max=Math.max(s.visible.min,Math.min(6,s.visible.max)),this.$menu.addClass(i.columns);for(var a=this.opts.offCanvas?this.$menu.add(o.$html):this.$menu,r=[],l=0;l<=s.visible.max;l++)r.push(i.columns+"-"+l);r=r.join(" ");var d=function(e){u.call(this,this.$pnls.children("."+i.current))},c=function(){var e=this.$pnls.children("."+i.panel).filter("."+i.opened).length;e=Math.min(s.visible.max,Math.max(s.visible.min,e)),a.removeClass(r).addClass(i.columns+"-"+e)},h=function(){this.opts.offCanvas&&o.$html.removeClass(r)},u=function(n){this.$pnls.children("."+i.panel).removeClass(r).filter("."+i.subopened).removeClass(i.hidden).add(n).slice(-s.visible.max).each(function(n){e(this).addClass(i.columns+"-"+n)})};this.bind("open",c),this.bind("close",h),this.bind("initPanels",d),this.bind("openPanel",u),this.bind("openingPanel",c),this.bind("openedPanel",c),this.opts.offCanvas||c.call(this)}},add:function(){i=e[n]._c,s=e[n]._d,a=e[n]._e,i.add("columns")},clickAnchor:function(n,s){if(!this.opts[t].add)return!1;if(s){var a=n.attr("href");if(a.length>1&&"#"==a.slice(0,1))try{var o=e(a,this.$menu);if(o.is("."+i.panel))for(var r=parseInt(n.closest("."+i.panel).attr("class").split(i.columns+"-")[1].split(" ")[0],10)+1;r!==!1;){var l=this.$pnls.children("."+i.columns+"-"+r);if(!l.length){r=!1;break}r++,l.removeClass(i.subopened).removeClass(i.opened).removeClass(i.current).removeClass(i.highest).addClass(i.hidden)}}catch(d){}}}},e[n].defaults[t]={add:!1,visible:{min:1,max:3}};var i,s,a,o}(jQuery);


/*
 * jQuery mmenu fixedElements add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var n="mmenu",t="fixedElements";e[n].addons[t]={setup:function(){if(this.opts.offCanvas){var i=this.opts[t];this.conf[t];o=e[n].glbl,i=this.opts[t]=e.extend(!0,{},e[n].defaults[t],i);var s=function(e){var n=this.conf.classNames[t].fixed;this.__refactorClass(e.find("."+n),n,"slideout").appendTo(o.$body)};s.call(this,o.$page),this.bind("setPage",s)}},add:function(){i=e[n]._c,s=e[n]._d,a=e[n]._e,i.add("fixed")},clickAnchor:function(e,n){}},e[n].configuration.classNames[t]={fixed:"Fixed"};var i,s,a,o}(jQuery);

/*
 * jQuery mmenu dropdown add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var n="mmenu",t="dropdown";e[n].addons[t]={setup:function(){if(this.opts.offCanvas){var r=this,l=this.opts[t],d=this.conf[t];if(o=e[n].glbl,"boolean"==typeof l&&l&&(l={drop:l}),"object"!=typeof l&&(l={}),"string"==typeof l.position&&(l.position={of:l.position}),l=this.opts[t]=e.extend(!0,{},e[n].defaults[t],l),l.drop){if("string"!=typeof l.position.of){var c=this.$menu.attr("id");c&&c.length&&(this.conf.clone&&(c=i.umm(c)),l.position.of='[href="#'+c+'"]')}if("string"==typeof l.position.of){var h=e(l.position.of);if(h.length){this.$menu.addClass(i.dropdown),l.tip&&this.$menu.addClass(i.tip),l.event=l.event.split(" "),1==l.event.length&&(l.event[1]=l.event[0]),"hover"==l.event[0]&&h.on(a.mouseenter+"-dropdown",function(){r.open()}),"hover"==l.event[1]&&this.$menu.on(a.mouseleave+"-dropdown",function(){r.close()}),this.bind("opening",function(){this.$menu.data(s.style,this.$menu.attr("style")||""),o.$html.addClass(i.dropdown)}),this.bind("closed",function(){this.$menu.attr("style",this.$menu.data(s.style)),o.$html.removeClass(i.dropdown)});var u=function(s,a){var r=a[0],c=a[1],u="x"==s?"scrollLeft":"scrollTop",f="x"==s?"outerWidth":"outerHeight",p="x"==s?"left":"top",v="x"==s?"right":"bottom",m="x"==s?"width":"height",g="x"==s?"maxWidth":"maxHeight",b=null,_=o.$wndw[u](),C=h.offset()[p]-=_,y=C+h[f](),$=o.$wndw[m](),w=d.offset.button[s]+d.offset.viewport[s];if(l.position[s])switch(l.position[s]){case"left":case"bottom":b="after";break;case"right":case"top":b="before"}null===b&&(b=C+(y-C)/2<$/2?"after":"before");var x,k;return"after"==b?(x="x"==s?C:y,k=$-(x+w),r[p]=x+d.offset.button[s],r[v]="auto",c.push(i["x"==s?"tipleft":"tiptop"])):(x="x"==s?y:C,k=x-w,r[v]="calc( 100% - "+(x-d.offset.button[s])+"px )",r[p]="auto",c.push(i["x"==s?"tipright":"tipbottom"])),r[g]=Math.min(e[n].configuration[t][m].max,k),[r,c]},f=function(e){if(this.vars.opened){this.$menu.attr("style",this.$menu.data(s.style));var n=[{},[]];n=u.call(this,"y",n),n=u.call(this,"x",n),this.$menu.css(n[0]),l.tip&&this.$menu.removeClass(i.tipleft+" "+i.tipright+" "+i.tiptop+" "+i.tipbottom).addClass(n[1].join(" "))}};this.bind("opening",f),o.$wndw.on(a.resize+"-dropdown",function(e){f.call(r)}),this.opts.offCanvas.blockUI||o.$wndw.on(a.scroll+"-dropdown",function(e){f.call(r)})}}}}},add:function(){i=e[n]._c,s=e[n]._d,a=e[n]._e,i.add("dropdown tip tipleft tipright tiptop tipbottom"),a.add("mouseenter mouseleave resize scroll")},clickAnchor:function(e,n){}},e[n].defaults[t]={drop:!1,event:"click",position:{},tip:!0},e[n].configuration[t]={offset:{button:{x:-10,y:10},viewport:{x:20,y:20}},height:{max:880},width:{max:440}};var i,s,a,o}(jQuery);



/*
 * jQuery mmenu lazySubmenus add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var n="mmenu",t="lazySubmenus";e[n].addons[t]={setup:function(){var a=this.opts[t];this.conf[t];o=e[n].glbl,"boolean"==typeof a&&(a={load:a}),"object"!=typeof a&&(a={}),a=this.opts[t]=e.extend(!0,{},e[n].defaults[t],a),a.load&&(this.$menu.find("li").find("li").children(this.conf.panelNodetype).each(function(){e(this).parent().addClass(i.lazysubmenu).data(s.lazysubmenu,this).end().remove()}),this.bind("openingPanel",function(n){var t=n.find("."+i.lazysubmenu);t.length&&(t.each(function(){e(this).append(e(this).data(s.lazysubmenu)).removeData(s.lazysubmenu).removeClass(i.lazysubmenu)}),this.initPanels(n))}))},add:function(){i=e[n]._c,s=e[n]._d,a=e[n]._e,i.add("lazysubmenu"),s.add("lazysubmenu")},clickAnchor:function(e,n){}},e[n].defaults[t]={load:!1},e[n].configuration[t]={};var i,s,a,o}(jQuery);

/*
 * jQuery mmenu navbar add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var n="mmenu",t="navbars";e[n].addons[t]={setup:function(){var s=this,a=this.opts[t],r=this.conf[t];if(o=e[n].glbl,"undefined"!=typeof a){a instanceof Array||(a=[a]);var l={};if(a.length){e.each(a,function(o){var d=a[o];"boolean"==typeof d&&d&&(d={}),"object"!=typeof d&&(d={}),"undefined"==typeof d.content&&(d.content=["prev","title"]),d.content instanceof Array||(d.content=[d.content]),d=e.extend(!0,{},s.opts.navbar,d);var c=d.position,h=d.height;"number"!=typeof h&&(h=1),h=Math.min(4,Math.max(1,h)),"bottom"!=c&&(c="top"),l[c]||(l[c]=0),l[c]++;var u=e("<div />").addClass(i.navbar+" "+i.navbar+"-"+c+" "+i.navbar+"-"+c+"-"+l[c]+" "+i.navbar+"-size-"+h);l[c]+=h-1;for(var f=0,p=0,v=d.content.length;p<v;p++){var m=e[n].addons[t][d.content[p]]||!1;m?f+=m.call(s,u,d,r):(m=d.content[p],m instanceof e||(m=e(d.content[p])),u.append(m))}f+=Math.ceil(u.children().not("."+i.btn).length/h),f>1&&u.addClass(i.navbar+"-content-"+f),u.children("."+i.btn).length&&u.addClass(i.hasbtns),u.prependTo(s.$menu)});for(var d in l)s.$menu.addClass(i.hasnavbar+"-"+d+"-"+l[d])}}},add:function(){i=e[n]._c,s=e[n]._d,a=e[n]._e,i.add("close hasbtns")},clickAnchor:function(e,n){}},e[n].configuration[t]={breadcrumbSeparator:"/"},e[n].configuration.classNames[t]={};var i,s,a,o}(jQuery);

/*
 * jQuery mmenu navbar add-on breadcrumbs content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var n="mmenu",t="navbars",i="breadcrumbs";e[n].addons[t][i]=function(t,i,s){var a=e[n]._c,o=e[n]._d;a.add("breadcrumbs separator");var r=e('<span class="'+a.breadcrumbs+'" />').appendTo(t);this.bind("initPanels",function(n){n.removeClass(a.hasnavbar).each(function(){for(var n=[],t=e(this),i=e('<span class="'+a.breadcrumbs+'"></span>'),r=e(this).children().first(),l=!0;r&&r.length;){r.is("."+a.panel)||(r=r.closest("."+a.panel));var d=r.children("."+a.navbar).children("."+a.title).text();n.unshift(l?"<span>"+d+"</span>":'<a href="#'+r.attr("id")+'">'+d+"</a>"),l=!1,r=r.data(o.parent)}i.append(n.join('<span class="'+a.separator+'">'+s.breadcrumbSeparator+"</span>")).appendTo(t.children("."+a.navbar))})});var l=function(){r.html(this.$pnls.children("."+a.current).children("."+a.navbar).children("."+a.breadcrumbs).html())};return this.bind("openPanel",l),this.bind("initPanels",l),0}}(jQuery);

/*
 * jQuery mmenu navbar add-on close content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var n="mmenu",t="navbars",i="close";e[n].addons[t][i]=function(t,i){var s=e[n]._c,a=e[n].glbl,o=e('<a class="'+s.close+" "+s.btn+'" href="#" />').appendTo(t),r=function(e){o.attr("href","#"+e.attr("id"))};return r.call(this,a.$page),this.bind("setPage",r),-1}}(jQuery);

/*
 * jQuery mmenu navbar add-on next content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var n="mmenu",t="navbars",i="next";e[n].addons[t][i]=function(i,s){var a,o,r,l=e[n]._c,d=e('<a class="'+l.next+" "+l.btn+'" href="#" />').appendTo(i),c=function(e){e=e||this.$pnls.children("."+l.current);var n=e.find("."+this.conf.classNames[t].panelNext);a=n.attr("href"),r=n.attr("aria-owns"),o=n.html(),d[a?"attr":"removeAttr"]("href",a),d[r?"attr":"removeAttr"]("aria-owns",r),d[a||o?"removeClass":"addClass"](l.hidden),d.html(o)};return this.bind("openPanel",c),this.bind("initPanels",function(){c.call(this)}),-1},e[n].configuration.classNames[t].panelNext="Next"}(jQuery);

/*
 * jQuery mmenu navbar add-on prev content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var n="mmenu",t="navbars",i="prev";e[n].addons[t][i]=function(i,s){var a=e[n]._c,o=e('<a class="'+a.prev+" "+a.btn+'" href="#" />').appendTo(i);this.bind("initPanels",function(e){e.removeClass(a.hasnavbar).children("."+a.navbar).addClass(a.hidden)});var r,l,d,c=function(e){if(e=e||this.$pnls.children("."+a.current),!e.hasClass(a.vertical)){var n=e.find("."+this.conf.classNames[t].panelPrev);n.length||(n=e.children("."+a.navbar).children("."+a.prev)),r=n.attr("href"),d=n.attr("aria-owns"),l=n.html(),o[r?"attr":"removeAttr"]("href",r),o[d?"attr":"removeAttr"]("aria-owns",d),o[r||l?"removeClass":"addClass"](a.hidden),o.html(l)}};return this.bind("openPanel",c),this.bind("initPanels",function(){c.call(this)}),-1},e[n].configuration.classNames[t].panelPrev="Prev"}(jQuery);

/*
 * jQuery mmenu navbar add-on searchfield content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var n="mmenu",t="navbars",i="searchfield";e[n].addons[t][i]=function(t,i){var s=e[n]._c,a=e('<div class="'+s.search+'" />').appendTo(t);return"object"!=typeof this.opts.searchfield&&(this.opts.searchfield={}),this.opts.searchfield.add=!0,this.opts.searchfield.addTo=a,0}}(jQuery);

/*
 * jQuery mmenu navbar add-on title content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var n="mmenu",t="navbars",i="title";e[n].addons[t][i]=function(i,s){var a,o,r=e[n]._c,l=e('<a class="'+r.title+'" />').appendTo(i),d=function(e){if(e=e||this.$pnls.children("."+r.current),!e.hasClass(r.vertical)){var n=e.find("."+this.conf.classNames[t].panelTitle);n.length||(n=e.children("."+r.navbar).children("."+r.title)),a=n.attr("href"),o=n.html()||s.title,l[a?"attr":"removeAttr"]("href",a),l[a||o?"removeClass":"addClass"](r.hidden),l.html(o)}};return this.bind("openPanel",d),this.bind("initPanels",function(e){d.call(this)}),0},e[n].configuration.classNames[t].panelTitle="Title"}(jQuery);

/*
 * jQuery mmenu RTL add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var n="mmenu",t="rtl";e[n].addons[t]={setup:function(){var s=this.opts[t];this.conf[t];o=e[n].glbl,"object"!=typeof s&&(s={use:s}),s=this.opts[t]=e.extend(!0,{},e[n].defaults[t],s),"boolean"!=typeof s.use&&(s.use="rtl"==(o.$html.attr("dir")||"").toLowerCase()),s.use&&this.$menu.addClass(i.rtl)},add:function(){i=e[n]._c,s=e[n]._d,a=e[n]._e,i.add("rtl")},clickAnchor:function(e,n){}},e[n].defaults[t]={use:"detect"};var i,s,a,o}(jQuery);

/*
 * jQuery mmenu screenReader add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){function n(e,n,t){e.prop("aria-"+n,t)[t?"attr":"removeAttr"]("aria-"+n,t)}function t(e){return'<span class="'+a.sronly+'">'+e+"</span>"}var i="mmenu",s="screenReader";e[i].addons[s]={setup:function(){var o=this.opts[s],r=this.conf[s];if(l=e[i].glbl,"boolean"==typeof o&&(o={aria:o,text:o}),"object"!=typeof o&&(o={}),o=this.opts[s]=e.extend(!0,{},e[i].defaults[s],o),o.aria){if(this.opts.offCanvas){var d=function(){n(this.$menu,"hidden",!1)},c=function(){n(this.$menu,"hidden",!0)};this.bind("open",d),this.bind("close",c),n(this.$menu,"hidden",!0)}var h=function(){},u=function(e){var t=this.$menu.children("."+a.navbar),i=t.children("."+a.prev),s=t.children("."+a.next),r=t.children("."+a.title);n(i,"hidden",i.is("."+a.hidden)),n(s,"hidden",s.is("."+a.hidden)),o.text&&n(r,"hidden",!i.is("."+a.hidden)),n(this.$pnls.children("."+a.panel).not(e),"hidden",!0),n(e,"hidden",!1)};this.bind("update",h),this.bind("openPanel",h),this.bind("openPanel",u);var f=function(t){var i;t=t||this.$menu;var s=t.children("."+a.navbar),r=s.children("."+a.prev),l=s.children("."+a.next);s.children("."+a.title);n(r,"haspopup",!0),n(l,"haspopup",!0),i=t.is("."+a.panel)?t.find("."+a.prev+", ."+a.next):r.add(l),i.each(function(){n(e(this),"owns",e(this).attr("href").replace("#",""))}),o.text&&t.is("."+a.panel)&&(i=t.find("."+a.listview).find("."+a.fullsubopen).parent().children("span"),n(i,"hidden",!0))};this.bind("initPanels",f),this.bind("_initAddons",f)}if(o.text){var p=function(n){var s;n=n||this.$menu;var o=n.children("."+a.navbar);o.each(function(){var n=e(this),o=e[i].i18n(r.text.closeSubmenu);s=n.children("."+a.title),s.length&&(o+=" ("+s.text()+")"),n.children("."+a.prev).html(t(o))}),o.children("."+a.close).html(t(e[i].i18n(r.text.closeMenu))),n.is("."+a.panel)&&n.find("."+a.listview).children("li").children("."+a.next).each(function(){var n=e(this),o=e[i].i18n(r.text[n.parent().is("."+a.vertical)?"toggleSubmenu":"openSubmenu"]);s=n.nextAll("span, a").first(),s.length&&(o+=" ("+s.text()+")"),n.html(t(o))})};this.bind("initPanels",p),this.bind("_initAddons",p)}},add:function(){a=e[i]._c,o=e[i]._d,r=e[i]._e,a.add("sronly")},clickAnchor:function(e,n){}},e[i].defaults[s]={aria:!1,text:!1},e[i].configuration[s]={text:{closeMenu:"Close menu",closeSubmenu:"Close submenu",openSubmenu:"Open submenu",toggleSubmenu:"Toggle submenu"}};var a,o,r,l}(jQuery);

/*
 * jQuery mmenu searchfield add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){function n(e){switch(e){case 9:case 16:case 17:case 18:case 37:case 38:case 39:case 40:return!0}return!1}var t="mmenu",i="searchfield";e[t].addons[i]={setup:function(){var l=this,d=this.opts[i],c=this.conf[i];r=e[t].glbl,"boolean"==typeof d&&(d={add:d}),"object"!=typeof d&&(d={}),"boolean"==typeof d.resultsPanel&&(d.resultsPanel={add:d.resultsPanel}),d=this.opts[i]=e.extend(!0,{},e[t].defaults[i],d),c=this.conf[i]=e.extend(!0,{},e[t].configuration[i],c),this.bind("close",function(){this.$menu.find("."+s.search).find("input").blur()}),this.bind("initPanels",function(r){if(d.add){var h;switch(d.addTo){case"panels":h=r;break;default:h=this.$menu.find(d.addTo)}if(h.each(function(){var n=e(this);if(!n.is("."+s.panel)||!n.is("."+s.vertical)){if(!n.children("."+s.search).length){var i=l.__valueOrFn(c.clear,n),a=l.__valueOrFn(c.form,n),r=l.__valueOrFn(c.input,n),h=l.__valueOrFn(c.submit,n),u=e("<"+(a?"form":"div")+' class="'+s.search+'" />'),f=e('<input placeholder="'+e[t].i18n(d.placeholder)+'" type="text" autocomplete="off" />');u.append(f);var p;if(r)for(p in r)f.attr(p,r[p]);if(i&&e('<a class="'+s.btn+" "+s.clear+'" href="#" />').appendTo(u).on(o.click+"-searchfield",function(e){e.preventDefault(),f.val("").trigger(o.keyup+"-searchfield")}),a){for(p in a)u.attr(p,a[p]);h&&!i&&e('<a class="'+s.btn+" "+s.next+'" href="#" />').appendTo(u).on(o.click+"-searchfield",function(e){e.preventDefault(),u.submit()})}n.hasClass(s.search)?n.replaceWith(u):n.prepend(u).addClass(s.hassearch)}if(d.noResults){var v=n.closest("."+s.panel).length;if(v||(n=l.$pnls.children("."+s.panel).first()),!n.children("."+s.noresultsmsg).length){var m=n.children("."+s.listview).first();e('<div class="'+s.noresultsmsg+" "+s.hidden+'" />').append(e[t].i18n(d.noResults))[m.length?"insertAfter":"prependTo"](m.length?m:n)}}}}),d.search){if(d.resultsPanel.add){d.showSubPanels=!1;var u=this.$pnls.children("."+s.resultspanel);u.length||(u=e('<div class="'+s.panel+" "+s.resultspanel+" "+s.hidden+'" />').appendTo(this.$pnls).append('<div class="'+s.navbar+" "+s.hidden+'"><a class="'+s.title+'">'+e[t].i18n(d.resultsPanel.title)+"</a></div>").append('<ul class="'+s.listview+'" />').append(this.$pnls.find("."+s.noresultsmsg).first().clone()),this.initPanels(u))}this.$menu.find("."+s.search).each(function(){var t,r,c=e(this),h=c.closest("."+s.panel).length;h?(t=c.closest("."+s.panel),r=t):(t=e("."+s.panel,l.$menu),r=l.$menu),d.resultsPanel.add&&(t=t.not(u));var f=c.children("input"),p=l.__findAddBack(t,"."+s.listview).children("li"),v=p.filter("."+s.divider),m=l.__filterListItems(p),g="a",b=g+", span",_="",C=function(){var n=f.val().toLowerCase();if(n!=_){if(_=n,d.resultsPanel.add&&u.children("."+s.listview).empty(),t.scrollTop(0),m.add(v).addClass(s.hidden).find("."+s.fullsubopensearch).removeClass(s.fullsubopen+" "+s.fullsubopensearch),m.each(function(){var n=e(this),t=g;(d.showTextItems||d.showSubPanels&&n.find("."+s.next))&&(t=b);var i=n.data(a.searchtext)||n.children(t).text();i.toLowerCase().indexOf(_)>-1&&n.add(n.prevAll("."+s.divider).first()).removeClass(s.hidden)}),d.showSubPanels&&t.each(function(n){var t=e(this);l.__filterListItems(t.find("."+s.listview).children()).each(function(){var n=e(this),t=n.data(a.child);n.removeClass(s.nosubresults),t&&t.find("."+s.listview).children().removeClass(s.hidden)})}),d.resultsPanel.add)if(""===_)this.closeAllPanels(),this.openPanel(this.$pnls.children("."+s.subopened).last());else{var i=e();t.each(function(){var n=l.__filterListItems(e(this).find("."+s.listview).children()).not("."+s.hidden).clone(!0);n.length&&(d.resultsPanel.dividers&&(i=i.add('<li class="'+s.divider+'">'+e(this).children("."+s.navbar).text()+"</li>")),i=i.add(n))}),i.find("."+s.next).remove(),u.children("."+s.listview).append(i),this.openPanel(u)}else e(t.get().reverse()).each(function(n){var t=e(this),i=t.data(a.parent);i&&(l.__filterListItems(t.find("."+s.listview).children()).length?(i.hasClass(s.hidden)&&i.children("."+s.next).not("."+s.fullsubopen).addClass(s.fullsubopen).addClass(s.fullsubopensearch),i.removeClass(s.hidden).removeClass(s.nosubresults).prevAll("."+s.divider).first().removeClass(s.hidden)):h||(t.hasClass(s.opened)&&setTimeout(function(){l.openPanel(i.closest("."+s.panel))},(n+1)*(1.5*l.conf.openingInterval)),i.addClass(s.nosubresults)))});r.find("."+s.noresultsmsg)[m.not("."+s.hidden).length?"addClass":"removeClass"](s.hidden),this.update()}};f.off(o.keyup+"-"+i+" "+o.change+"-"+i).on(o.keyup+"-"+i,function(e){n(e.keyCode)||C.call(l)}).on(o.change+"-"+i,function(e){C.call(l)});var y=c.children("."+s.btn);y.length&&f.on(o.keyup+"-"+i,function(e){y[f.val().length?"removeClass":"addClass"](s.hidden)}),f.trigger(o.keyup+"-"+i)})}}})},add:function(){s=e[t]._c,a=e[t]._d,o=e[t]._e,s.add("clear search hassearch resultspanel noresultsmsg noresults nosubresults fullsubopensearch"),a.add("searchtext"),o.add("change keyup")},clickAnchor:function(e,n){}},e[t].defaults[i]={add:!1,addTo:"panels",placeholder:"Search",noResults:"No results found.",resultsPanel:{add:!1,dividers:!0,title:"Search results"},search:!0,showTextItems:!1,showSubPanels:!0},e[t].configuration[i]={clear:!1,form:!1,input:!1,submit:!1};var s,a,o,r}(jQuery);

/*
 * jQuery mmenu sectionIndexer add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var n="mmenu",t="sectionIndexer";e[n].addons[t]={setup:function(){var s=this,r=this.opts[t];this.conf[t];o=e[n].glbl,"boolean"==typeof r&&(r={add:r}),"object"!=typeof r&&(r={}),r=this.opts[t]=e.extend(!0,{},e[n].defaults[t],r),this.bind("initPanels",function(n){if(r.add){var t;switch(r.addTo){case"panels":t=n;break;default:t=e(r.addTo,this.$menu).filter("."+i.panel)}t.find("."+i.divider).closest("."+i.panel).addClass(i.hasindexer)}if(!this.$indexer&&this.$pnls.children("."+i.hasindexer).length){this.$indexer=e('<div class="'+i.indexer+'" />').prependTo(this.$pnls).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>'),this.$indexer.children().on(a.mouseover+"-sectionindexer "+i.touchstart+"-sectionindexer",function(n){var t=e(this).attr("href").slice(1),a=s.$pnls.children("."+i.current),o=a.find("."+i.listview),r=!1,l=a.scrollTop();a.scrollTop(0),o.children("."+i.divider).not("."+i.hidden).each(function(){r===!1&&t==e(this).text().slice(0,1).toLowerCase()&&(r=e(this).position().top)}),a.scrollTop(r!==!1?r:l)});var o=function(e){s.$menu[(e.hasClass(i.hasindexer)?"add":"remove")+"Class"](i.hasindexer)};this.bind("openPanel",o),o.call(this,this.$pnls.children("."+i.current))}})},add:function(){i=e[n]._c,s=e[n]._d,a=e[n]._e,i.add("indexer hasindexer"),a.add("mouseover touchstart")},clickAnchor:function(e,n){if(e.parent().is("."+i.indexer))return!0}},e[n].defaults[t]={add:!1,addTo:"panels"};var i,s,a,o}(jQuery);

/*
 * jQuery mmenu setSelected add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var n="mmenu",t="setSelected";e[n].addons[t]={setup:function(){var a=this,r=this.opts[t];this.conf[t];if(o=e[n].glbl,"boolean"==typeof r&&(r={hover:r,parent:r}),"object"!=typeof r&&(r={}),r=this.opts[t]=e.extend(!0,{},e[n].defaults[t],r),"detect"==r.current){var l=function(e){e=e.split("?")[0].split("#")[0];var n=a.$menu.find('a[href="'+e+'"], a[href="'+e+'/"]');n.length?a.setSelected(n.parent(),!0):(e=e.split("/").slice(0,-1),e.length&&l(e.join("/")))};l(window.location.href)}else r.current||this.bind("initPanels",function(e){e.find("."+i.listview).children("."+i.selected).removeClass(i.selected)});if(r.hover&&this.$menu.addClass(i.hoverselected),r.parent){this.$menu.addClass(i.parentselected);var d=function(e){this.$pnls.find("."+i.listview).find("."+i.next).removeClass(i.selected);for(var n=e.data(s.parent);n&&n.length;)n=n.not("."+i.vertical).children("."+i.next).addClass(i.selected).end().closest("."+i.panel).data(s.parent)};this.bind("openedPanel",d),this.bind("initPanels",function(e){d.call(this,this.$pnls.children("."+i.current))})}},add:function(){i=e[n]._c,s=e[n]._d,a=e[n]._e,i.add("hoverselected parentselected")},clickAnchor:function(e,n){}},e[n].defaults[t]={current:!0,hover:!1,parent:!1};var i,s,a,o}(jQuery);

/*
 * jQuery mmenu toggles add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(e){var n="mmenu",t="toggles";e[n].addons[t]={setup:function(){var s=this;this.opts[t],this.conf[t];o=e[n].glbl,this.bind("initPanels",function(n){this.__refactorClass(e("input",n),this.conf.classNames[t].toggle,"toggle"),this.__refactorClass(e("input",n),this.conf.classNames[t].check,"check"),e("input."+i.toggle+", input."+i.check,n).each(function(){var n=e(this),t=n.closest("li"),a=n.hasClass(i.toggle)?"toggle":"check",o=n.attr("id")||s.__getUniqueId();t.children('label[for="'+o+'"]').length||(n.attr("id",o),t.prepend(n),e('<label for="'+o+'" class="'+i[a]+'"></label>').insertBefore(t.children("a, span").last()))})})},add:function(){i=e[n]._c,s=e[n]._d,a=e[n]._e,i.add("toggle check")},clickAnchor:function(e,n){}},e[n].configuration.classNames[t]={toggle:"Toggle",check:"Check"};var i,s,a,o}(jQuery);

































































