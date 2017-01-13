;
(function () {
    var test = {};
    return test;
}.call(this));
define('test', [], function () {
    return;
});
!function (a, b) {
    'object' == typeof module && 'object' == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document)
            throw new Error('jQuery requires a window with a document');
        return b(a);
    } : b(a);
}('undefined' != typeof window ? window : this, function (a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = a.document, m = '2.1.1', n = function (a, b) {
            return new n.fn.init(a, b);
        }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) {
            return b.toUpperCase();
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: '',
        length: 0,
        toArray: function () {
            return d.call(this);
        },
        get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
        },
        pushStack: function (a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function (a, b) {
            return n.each(this, a, b);
        },
        map: function (a) {
            return this.pushStack(n.map(this, function (b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function () {
            return this.pushStack(d.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor(null);
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ('boolean' == typeof g && (j = g, g = arguments[h] || {}, h++), 'object' == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a)
                    c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g;
    }, n.extend({
        expando: 'jQuery' + (m + Math.random()).replace(/\D/g, ''),
        isReady: !0,
        error: function (a) {
            throw new Error(a);
        },
        noop: function () {
        },
        isFunction: function (a) {
            return 'function' === n.type(a);
        },
        isArray: Array.isArray,
        isWindow: function (a) {
            return null != a && a === a.window;
        },
        isNumeric: function (a) {
            return !n.isArray(a) && a - parseFloat(a) >= 0;
        },
        isPlainObject: function (a) {
            return 'object' !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, 'isPrototypeOf') ? !1 : !0;
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a)
                return !1;
            return !0;
        },
        type: function (a) {
            return null == a ? a + '' : 'object' == typeof a || 'function' == typeof a ? h[i.call(a)] || 'object' : typeof a;
        },
        globalEval: function (a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf('use strict') ? (b = l.createElement('script'), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
        },
        camelCase: function (a) {
            return a.replace(p, 'ms-').replace(q, r);
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function (a, b, c) {
            var d, e = 0, f = a.length, g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1)
                            break;
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1)
                            break;
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1)
                        break;
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1)
                        break;
            return a;
        },
        trim: function (a) {
            return null == a ? '' : (a + '').replace(o, '');
        },
        makeArray: function (a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, 'string' == typeof a ? [a] : a) : f.call(c, a)), c;
        },
        inArray: function (a, b, c) {
            return null == b ? -1 : g.call(b, a, c);
        },
        merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++)
                a[e++] = b[d];
            return a.length = e, a;
        },
        grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f), d !== h && e.push(a[f]);
            return e;
        },
        map: function (a, b, c) {
            var d, f = 0, g = a.length, h = s(a), i = [];
            if (h)
                for (; g > f; f++)
                    d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a)
                    d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i);
        },
        guid: 1,
        proxy: function (a, b) {
            var c, e, f;
            return 'string' == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
                return a.apply(b || this, e.concat(d.call(arguments)));
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
        },
        now: Date.now,
        support: k
    }), n.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (a, b) {
        h['[object ' + b + ']'] = b.toLowerCase();
    });
    function s(a) {
        var b = a.length, c = n.type(a);
        return 'function' === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : 'array' === c || 0 === b || 'number' == typeof b && b > 0 && b - 1 in a;
    }
    var t = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = 'sizzle' + -new Date(), v = a.document, w = 0, x = 0, y = gb(), z = gb(), A = gb(), B = function (a, b) {
                return a === b && (l = !0), 0;
            }, C = 'undefined', D = 1 << 31, E = {}.hasOwnProperty, F = [], G = F.pop, H = F.push, I = F.push, J = F.slice, K = F.indexOf || function (a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a)
                        return b;
                return -1;
            }, L = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', M = '[\\x20\\t\\r\\n\\f]', N = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+', O = N.replace('w', 'w#'), P = '\\[' + M + '*(' + N + ')(?:' + M + '*([*^$|!~]?=)' + M + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + O + '))|)' + M + '*\\]', Q = ':(' + N + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + P + ')*)|.*)\\)|)', R = new RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g'), S = new RegExp('^' + M + '*,' + M + '*'), T = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'), U = new RegExp('=' + M + '*([^\\]\'"]*?)' + M + '*\\]', 'g'), V = new RegExp(Q), W = new RegExp('^' + O + '$'), X = {
                ID: new RegExp('^#(' + N + ')'),
                CLASS: new RegExp('^\\.(' + N + ')'),
                TAG: new RegExp('^(' + N.replace('w', 'w*') + ')'),
                ATTR: new RegExp('^' + P),
                PSEUDO: new RegExp('^' + Q),
                CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + M + '*(even|odd|(([+-]|)(\\d*)n|)' + M + '*(?:([+-]|)' + M + '*(\\d+)|))' + M + '*\\)|)', 'i'),
                bool: new RegExp('^(?:' + L + ')$', 'i'),
                needsContext: new RegExp('^' + M + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + M + '*((?:-\\d)?\\d*)' + M + '*\\)|)(?=[^-]|$)', 'i')
            }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp('\\\\([\\da-f]{1,6}' + M + '?|(' + M + ')|.)', 'ig'), db = function (a, b, c) {
                var d = '0x' + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
            };
        try {
            I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType;
        } catch (eb) {
            I = {
                apply: F.length ? function (a, b) {
                    H.apply(a, J.call(b));
                } : function (a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1;
                }
            };
        }
        function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || 'string' != typeof a)
                return d;
            if (1 !== (k = b.nodeType) && 9 !== k)
                return [];
            if (p && !e) {
                if (f = _.exec(a))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode)
                                return d;
                            if (h.id === j)
                                return d.push(h), d;
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)
                            return d.push(h), d;
                    } else {
                        if (f[2])
                            return I.apply(d, b.getElementsByTagName(a)), d;
                        if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName)
                            return I.apply(d, b.getElementsByClassName(j)), d;
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 9 === k && a, 1 === k && 'object' !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute('id')) ? s = r.replace(bb, '\\$&') : b.setAttribute('id', s), s = '[id=\'' + s + '\'] ', l = o.length;
                        while (l--)
                            o[l] = s + qb(o[l]);
                        w = ab.test(a) && ob(b.parentNode) || b, x = o.join(',');
                    }
                    if (x)
                        try {
                            return I.apply(d, w.querySelectorAll(x)), d;
                        } catch (y) {
                        } finally {
                            r || b.removeAttribute('id');
                        }
                }
            }
            return i(a.replace(R, '$1'), b, d, e);
        }
        function gb() {
            var a = [];
            function b(c, e) {
                return a.push(c + ' ') > d.cacheLength && delete b[a.shift()], b[c + ' '] = e;
            }
            return b;
        }
        function hb(a) {
            return a[u] = !0, a;
        }
        function ib(a) {
            var b = n.createElement('div');
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function jb(a, b) {
            var c = a.split('|'), e = a.length;
            while (e--)
                d.attrHandle[c[e]] = b;
        }
        function kb(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1;
        }
        function lb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return 'input' === c && b.type === a;
            };
        }
        function mb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ('input' === c || 'button' === c) && b.type === a;
            };
        }
        function nb(a) {
            return hb(function (b) {
                return b = +b, hb(function (c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function ob(a) {
            return a && typeof a.getElementsByTagName !== C && a;
        }
        c = fb.support = {}, f = fb.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? 'HTML' !== b.nodeName : !1;
        }, m = fb.setDocument = function (a) {
            var b, e = a ? a.ownerDocument || a : v, g = e.defaultView;
            return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener('unload', function () {
                m();
            }, !1) : g.attachEvent && g.attachEvent('onunload', function () {
                m();
            })), c.attributes = ib(function (a) {
                return a.className = 'i', !a.getAttribute('className');
            }), c.getElementsByTagName = ib(function (a) {
                return a.appendChild(e.createComment('')), !a.getElementsByTagName('*').length;
            }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function (a) {
                return a.innerHTML = '<div class=\'a\'></div><div class=\'a i\'></div>', a.firstChild.className = 'i', 2 === a.getElementsByClassName('i').length;
            }), c.getById = ib(function (a) {
                return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length;
            }), c.getById ? (d.find.ID = function (a, b) {
                if (typeof b.getElementById !== C && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : [];
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(cb, db);
                return function (a) {
                    return a.getAttribute('id') === b;
                };
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(cb, db);
                return function (a) {
                    var c = typeof a.getAttributeNode !== C && a.getAttributeNode('id');
                    return c && c.value === b;
                };
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0;
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ('*' === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0;
            }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function (a) {
                a.innerHTML = '<select msallowclip=\'\'><option selected=\'\'></option></select>', a.querySelectorAll('[msallowclip^=\'\']').length && q.push('[*^$]=' + M + '*(?:\'\'|"")'), a.querySelectorAll('[selected]').length || q.push('\\[' + M + '*(?:value|' + L + ')'), a.querySelectorAll(':checked').length || q.push(':checked');
            }), ib(function (a) {
                var b = e.createElement('input');
                b.setAttribute('type', 'hidden'), a.appendChild(b).setAttribute('name', 'D'), a.querySelectorAll('[name=d]').length && q.push('name' + M + '*[*^$|!~]?='), a.querySelectorAll(':enabled').length || q.push(':enabled', ':disabled'), a.querySelectorAll('*,:x'), q.push(',.*:');
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function (a) {
                c.disconnectedMatch = s.call(a, 'div'), s.call(a, '[s!=\'\']:x'), r.push('!=', Q);
            }), q = q.length && new RegExp(q.join('|')), r = r.length && new RegExp(r.join('|')), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function (a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1;
            }, B = b ? function (a, b) {
                if (a === b)
                    return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1);
            } : function (a, b) {
                if (a === b)
                    return l = !0, 0;
                var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], i = [b];
                if (!f || !g)
                    return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
                if (f === g)
                    return kb(a, b);
                c = a;
                while (c = c.parentNode)
                    h.unshift(c);
                c = b;
                while (c = c.parentNode)
                    i.unshift(c);
                while (h[d] === i[d])
                    d++;
                return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
            }, e) : n;
        }, fb.matches = function (a, b) {
            return fb(a, null, null, b);
        }, fb.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, '=\'$1\']'), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d;
                } catch (e) {
                }
            return fb(b, n, null, [a]).length > 0;
        }, fb.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, fb.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, fb.error = function (a) {
            throw new Error('Syntax error, unrecognized expression: ' + a);
        }, fb.uniqueSort = function (a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1);
            }
            return k = null, a;
        }, e = fb.getText = function (a) {
            var b, c = '', d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ('string' == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a);
                } else if (3 === f || 4 === f)
                    return a.nodeValue;
            } else
                while (b = a[d++])
                    c += e(b);
            return c;
        }, d = fb.selectors = {
            cacheLength: 50,
            createPseudo: hb,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                '>': {
                    dir: 'parentNode',
                    first: !0
                },
                ' ': { dir: 'parentNode' },
                '+': {
                    dir: 'previousSibling',
                    first: !0
                },
                '~': { dir: 'previousSibling' }
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || '').replace(cb, db), '~=' === a[2] && (a[3] = ' ' + a[3] + ' '), a.slice(0, 4);
                },
                CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), 'nth' === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ('even' === a[3] || 'odd' === a[3])), a[5] = +(a[7] + a[8] || 'odd' === a[3])) : a[3] && fb.error(a[0]), a;
                },
                PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || '' : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(')', c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return '*' === a ? function () {
                        return !0;
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function (a) {
                    var b = y[a + ' '];
                    return b || (b = new RegExp('(^|' + M + ')' + a + '(' + M + '|$)')) && y(a, function (a) {
                        return b.test('string' == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute('class') || '');
                    });
                },
                ATTR: function (a, b, c) {
                    return function (d) {
                        var e = fb.attr(d, a);
                        return null == e ? '!=' === b : b ? (e += '', '=' === b ? e === c : '!=' === b ? e !== c : '^=' === b ? c && 0 === e.indexOf(c) : '*=' === b ? c && e.indexOf(c) > -1 : '$=' === b ? c && e.slice(-c.length) === c : '~=' === b ? (' ' + e + ' ').indexOf(c) > -1 : '|=' === b ? e === c || e.slice(0, c.length + 1) === c + '-' : !1) : !0;
                    };
                },
                CHILD: function (a, b, c, d, e) {
                    var f = 'nth' !== a.slice(0, 3), g = 'last' !== a.slice(-4), h = 'of-type' === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode;
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? 'nextSibling' : 'previousSibling', q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                            return !1;
                                    o = p = 'only' === a && !o && 'nextSibling';
                                }
                                return !0;
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [
                                            w,
                                            n,
                                            m
                                        ];
                                        break;
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)
                                m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [
                                            w,
                                            m
                                        ]), l === b))
                                        break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error('unsupported pseudo: ' + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [
                        a,
                        a,
                        '',
                        b
                    ], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function (a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)
                            d = K.call(a, f[g]), a[d] = !(c[d] = f[g]);
                    }) : function (a) {
                        return e(a, 0, c);
                    }) : e;
                }
            },
            pseudos: {
                not: hb(function (a) {
                    var b = [], c = [], d = h(a.replace(R, '$1'));
                    return d[u] ? hb(function (a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)
                            (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop();
                    };
                }),
                has: hb(function (a) {
                    return function (b) {
                        return fb(a, b).length > 0;
                    };
                }),
                contains: hb(function (a) {
                    return function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }),
                lang: hb(function (a) {
                    return W.test(a || '') || fb.error('unsupported lang: ' + a), a = a.replace(cb, db).toLowerCase(), function (b) {
                        var c;
                        do
                            if (c = p ? b.lang : b.getAttribute('xml:lang') || b.getAttribute('lang'))
                                return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + '-');
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function (a) {
                    return a === o;
                },
                focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function (a) {
                    return a.disabled === !1;
                },
                disabled: function (a) {
                    return a.disabled === !0;
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return 'input' === b && !!a.checked || 'option' === b && !!a.selected;
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0;
                },
                parent: function (a) {
                    return !d.pseudos.empty(a);
                },
                header: function (a) {
                    return Z.test(a.nodeName);
                },
                input: function (a) {
                    return Y.test(a.nodeName);
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return 'input' === b && 'button' === a.type || 'button' === b;
                },
                text: function (a) {
                    var b;
                    return 'input' === a.nodeName.toLowerCase() && 'text' === a.type && (null == (b = a.getAttribute('type')) || 'text' === b.toLowerCase());
                },
                first: nb(function () {
                    return [0];
                }),
                last: nb(function (a, b) {
                    return [b - 1];
                }),
                eq: nb(function (a, b, c) {
                    return [0 > c ? c + b : c];
                }),
                even: nb(function (a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a;
                }),
                odd: nb(function (a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a;
                }),
                lt: nb(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;)
                        a.push(d);
                    return a;
                }),
                gt: nb(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;)
                        a.push(d);
                    return a;
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
            d.pseudos[b] = lb(b);
        for (b in {
                submit: !0,
                reset: !0
            })
            d.pseudos[b] = mb(b);
        function pb() {
        }
        pb.prototype = d.filters = d.pseudos, d.setFilters = new pb(), g = fb.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + ' '];
            if (k)
                return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, ' ')
                }), h = h.slice(c.length));
                for (g in d.filter)
                    !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                        value: c,
                        type: g,
                        matches: e
                    }), h = h.slice(c.length));
                if (!c)
                    break;
            }
            return b ? h.length : h ? fb.error(a) : z(a, i).slice(0);
        };
        function qb(a) {
            for (var b = 0, c = a.length, d = ''; c > b; b++)
                d += a[b].value;
            return d;
        }
        function rb(a, b, c) {
            var d = b.dir, e = c && 'parentNode' === d, f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f);
            } : function (b, c, g) {
                var h, i, j = [
                        w,
                        f
                    ];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0;
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)
                                return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g))
                                return !0;
                        }
            };
        }
        function sb(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0;
            } : a[0];
        }
        function tb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                fb(a, b[d], c);
            return c;
        }
        function ub(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g;
        }
        function vb(a, b, c, d, e, f) {
            return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function (f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || tb(b || '*', h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ub(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ub(r, n), d(j, [], h, i), k = j.length;
                    while (k--)
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)
                                (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i);
                        }
                        k = r.length;
                        while (k--)
                            (l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                    }
                } else
                    r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r);
            });
        }
        function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[' '], i = g ? 1 : 0, k = rb(function (a) {
                        return a === b;
                    }, h, !0), l = rb(function (a) {
                        return K.call(b, a) > -1;
                    }, h, !0), m = [function (a, c, d) {
                            return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                        }]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [rb(sb(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                        return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({ value: ' ' === a[i - 2].type ? '*' : '' })).replace(R, '$1'), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a));
                    }
                    m.push(c);
                }
            return sb(m);
        }
        function xb(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
                    var l, m, o, p = 0, q = '0', r = f && [], s = [], t = j, u = f || e && d.find.TAG('*', k), v = w += null == t ? 1 : Math.random() || 0.1, x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++])
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break;
                                }
                            k && (w = v);
                        }
                        c && ((l = !o && l) && p--, f && r.push(l));
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++])
                            o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                while (q--)
                                    r[q] || s[q] || (s[q] = G.call(i));
                            s = ub(s);
                        }
                        I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i);
                    }
                    return k && (w = v, j = t), r;
                };
            return c ? hb(f) : f;
        }
        return h = fb.compile = function (a, b) {
            var c, d = [], e = [], f = A[a + ' '];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--)
                    f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xb(e, d)), f.selector = a;
            }
            return f;
        }, i = fb.select = function (a, b, e, f) {
            var i, j, k, l, m, n = 'function' == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && 'ID' === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b)
                        return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type])
                        break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qb(j), !a)
                            return I.apply(e, f), e;
                        break;
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e;
        }, c.sortStable = u.split('').sort(B).join('') === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement('div'));
        }), ib(function (a) {
            return a.innerHTML = '<a href=\'#\'></a>', '#' === a.firstChild.getAttribute('href');
        }) || jb('type|href|height|width', function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, 'type' === b.toLowerCase() ? 1 : 2);
        }), c.attributes && ib(function (a) {
            return a.innerHTML = '<input/>', a.firstChild.setAttribute('value', ''), '' === a.firstChild.getAttribute('value');
        }) || jb('value', function (a, b, c) {
            return c || 'input' !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), ib(function (a) {
            return null == a.getAttribute('disabled');
        }) || jb(L, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), fb;
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[':'] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;
    function x(a, b, c) {
        if (n.isFunction(b))
            return n.grep(a, function (a, d) {
                return !!b.call(a, d, a) !== c;
            });
        if (b.nodeType)
            return n.grep(a, function (a) {
                return a === b !== c;
            });
        if ('string' == typeof b) {
            if (w.test(b))
                return n.filter(b, a, c);
            b = n.filter(b, a);
        }
        return n.grep(a, function (a) {
            return g.call(b, a) >= 0 !== c;
        });
    }
    n.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ':not(' + a + ')'), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
            return 1 === a.nodeType;
        }));
    }, n.fn.extend({
        find: function (a) {
            var b, c = this.length, d = [], e = this;
            if ('string' != typeof a)
                return this.pushStack(n(a).filter(function () {
                    for (b = 0; c > b; b++)
                        if (n.contains(e[b], this))
                            return !0;
                }));
            for (b = 0; c > b; b++)
                n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + ' ' + a : a, d;
        },
        filter: function (a) {
            return this.pushStack(x(this, a || [], !1));
        },
        not: function (a) {
            return this.pushStack(x(this, a || [], !0));
        },
        is: function (a) {
            return !!x(this, 'string' == typeof a && u.test(a) ? n(a) : a || [], !1).length;
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function (a, b) {
            var c, d;
            if (!a)
                return this;
            if ('string' == typeof a) {
                if (c = '<' === a[0] && '>' === a[a.length - 1] && a.length >= 3 ? [
                        null,
                        a,
                        null
                    ] : z.exec(a), !c || !c[1] && b)
                    return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))
                        for (c in b)
                            n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this;
                }
                return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this;
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? 'undefined' != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
        };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/, C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.extend({
        dir: function (a, b, c) {
            var d = [], e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c))
                        break;
                    d.push(a);
                }
            return d;
        },
        sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    }), n.fn.extend({
        has: function (a) {
            var b = n(a, this), c = b.length;
            return this.filter(function () {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a]))
                        return !0;
            });
        },
        closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || 'string' != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break;
                    }
            return this.pushStack(f.length > 1 ? n.unique(f) : f);
        },
        index: function (a) {
            return a ? 'string' == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    });
    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a;
    }
    n.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function (a) {
            return n.dir(a, 'parentNode');
        },
        parentsUntil: function (a, b, c) {
            return n.dir(a, 'parentNode', c);
        },
        next: function (a) {
            return D(a, 'nextSibling');
        },
        prev: function (a) {
            return D(a, 'previousSibling');
        },
        nextAll: function (a) {
            return n.dir(a, 'nextSibling');
        },
        prevAll: function (a) {
            return n.dir(a, 'previousSibling');
        },
        nextUntil: function (a, b, c) {
            return n.dir(a, 'nextSibling', c);
        },
        prevUntil: function (a, b, c) {
            return n.dir(a, 'previousSibling', c);
        },
        siblings: function (a) {
            return n.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function (a) {
            return n.sibling(a.firstChild);
        },
        contents: function (a) {
            return a.contentDocument || n.merge([], a.childNodes);
        }
    }, function (a, b) {
        n.fn[a] = function (c, d) {
            var e = n.map(this, b, c);
            return 'Until' !== a.slice(-5) && (d = c), d && 'string' == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e);
        };
    });
    var E = /\S+/g, F = {};
    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function (a, c) {
            b[c] = !0;
        }), b;
    }
    n.Callbacks = function (a) {
        a = 'string' == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
                for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)
                    if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        b = !1;
                        break;
                    }
                d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
            }, k = {
                add: function () {
                    if (h) {
                        var c = h.length;
                        !function g(b) {
                            n.each(b, function (b, c) {
                                var d = n.type(c);
                                'function' === d ? a.unique && k.has(c) || h.push(c) : c && c.length && 'string' !== d && g(c);
                            });
                        }(arguments), d ? f = h.length : b && (e = c, j(b));
                    }
                    return this;
                },
                remove: function () {
                    return h && n.each(arguments, function (a, b) {
                        var c;
                        while ((c = n.inArray(b, h, c)) > -1)
                            h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
                    }), this;
                },
                has: function (a) {
                    return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
                },
                empty: function () {
                    return h = [], f = 0, this;
                },
                disable: function () {
                    return h = i = b = void 0, this;
                },
                disabled: function () {
                    return !h;
                },
                lock: function () {
                    return i = void 0, b || k.disable(), this;
                },
                locked: function () {
                    return !i;
                },
                fireWith: function (a, b) {
                    return !h || c && !i || (b = b || [], b = [
                        a,
                        b.slice ? b.slice() : b
                    ], d ? i.push(b) : j(b)), this;
                },
                fire: function () {
                    return k.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!c;
                }
            };
        return k;
    }, n.extend({
        Deferred: function (a) {
            var b = [
                    [
                        'resolve',
                        'done',
                        n.Callbacks('once memory'),
                        'resolved'
                    ],
                    [
                        'reject',
                        'fail',
                        n.Callbacks('once memory'),
                        'rejected'
                    ],
                    [
                        'notify',
                        'progress',
                        n.Callbacks('memory')
                    ]
                ], c = 'pending', d = {
                    state: function () {
                        return c;
                    },
                    always: function () {
                        return e.done(arguments).fail(arguments), this;
                    },
                    then: function () {
                        var a = arguments;
                        return n.Deferred(function (c) {
                            n.each(b, function (b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + 'With'](this === d ? c.promise() : this, g ? [a] : arguments);
                                });
                            }), a = null;
                        }).promise();
                    },
                    promise: function (a) {
                        return null != a ? n.extend(a, d) : d;
                    }
                }, e = {};
            return d.pipe = d.then, n.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + 'With'](this === e ? d : this, arguments), this;
                }, e[f[0] + 'With'] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function (a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function (a, b, c) {
                    return function (e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                    };
                }, i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
                    c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise();
        }
    });
    var H;
    n.fn.ready = function (a) {
        return n.ready.promise().done(a), this;
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? n.readyWait++ : n.ready(!0);
        },
        ready: function (a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler('ready'), n(l).off('ready'))));
        }
    });
    function I() {
        l.removeEventListener('DOMContentLoaded', I, !1), a.removeEventListener('load', I, !1), n.ready();
    }
    n.ready.promise = function (b) {
        return H || (H = n.Deferred(), 'complete' === l.readyState ? setTimeout(n.ready) : (l.addEventListener('DOMContentLoaded', I, !1), a.addEventListener('load', I, !1))), H.promise(b);
    }, n.ready.promise();
    var J = n.access = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ('object' === n.type(c)) {
            e = !0;
            for (h in c)
                n.access(a, b, h, c[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                return j.call(n(a), c);
            })), b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    };
    n.acceptData = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {};
            }
        }), this.expando = n.expando + Math.random();
    }
    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function (a) {
            if (!K.accepts(a))
                return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = { value: c }, Object.defineProperties(a, b);
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b);
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c;
        },
        set: function (a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ('string' == typeof b)
                f[b] = c;
            else if (n.isEmptyObject(f))
                n.extend(this.cache[e], b);
            else
                for (d in b)
                    f[d] = b[d];
            return f;
        },
        get: function (a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b];
        },
        access: function (a, b, c) {
            var d;
            return void 0 === b || b && 'string' == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
        },
        remove: function (a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b)
                this.cache[f] = {};
            else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [
                    b,
                    e
                ] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                while (c--)
                    delete g[d[c]];
            }
        },
        hasData: function (a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {});
        },
        discard: function (a) {
            a[this.expando] && delete this.cache[a[this.expando]];
        }
    };
    var L = new K(), M = new K(), N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;
    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = 'data-' + b.replace(O, '-$1').toLowerCase(), c = a.getAttribute(d), 'string' == typeof c) {
                try {
                    c = 'true' === c ? !0 : 'false' === c ? !1 : 'null' === c ? null : +c + '' === c ? +c : N.test(c) ? n.parseJSON(c) : c;
                } catch (e) {
                }
                M.set(a, b, c);
            } else
                c = void 0;
        return c;
    }
    n.extend({
        hasData: function (a) {
            return M.hasData(a) || L.hasData(a);
        },
        data: function (a, b, c) {
            return M.access(a, b, c);
        },
        removeData: function (a, b) {
            M.remove(a, b);
        },
        _data: function (a, b, c) {
            return L.access(a, b, c);
        },
        _removeData: function (a, b) {
            L.remove(a, b);
        }
    }), n.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, 'hasDataAttrs'))) {
                    c = g.length;
                    while (c--)
                        g[c] && (d = g[c].name, 0 === d.indexOf('data-') && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    L.set(f, 'hasDataAttrs', !0);
                }
                return e;
            }
            return 'object' == typeof a ? this.each(function () {
                M.set(this, a);
            }) : J(this, function (b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c)
                        return c;
                    if (c = M.get(f, d), void 0 !== c)
                        return c;
                    if (c = P(f, d, void 0), void 0 !== c)
                        return c;
                } else
                    this.each(function () {
                        var c = M.get(this, d);
                        M.set(this, d, b), -1 !== a.indexOf('-') && void 0 !== c && M.set(this, a, b);
                    });
            }, null, b, arguments.length > 1, null, !0);
        },
        removeData: function (a) {
            return this.each(function () {
                M.remove(this, a);
            });
        }
    }), n.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || 'fx') + 'queue', d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
        },
        dequeue: function (a, b) {
            b = b || 'fx';
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () {
                    n.dequeue(a, b);
                };
            'inprogress' === e && (e = c.shift(), d--), e && ('fx' === b && c.unshift('inprogress'), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function (a, b) {
            var c = b + 'queueHooks';
            return L.get(a, c) || L.access(a, c, {
                empty: n.Callbacks('once memory').add(function () {
                    L.remove(a, [
                        b + 'queue',
                        c
                    ]);
                })
            });
        }
    }), n.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return 'string' != typeof a && (b = a, a = 'fx', c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), 'fx' === a && 'inprogress' !== c[0] && n.dequeue(this, a);
            });
        },
        dequeue: function (a) {
            return this.each(function () {
                n.dequeue(this, a);
            });
        },
        clearQueue: function (a) {
            return this.queue(a || 'fx', []);
        },
        promise: function (a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () {
                    --d || e.resolveWith(f, [f]);
                };
            'string' != typeof a && (b = a, a = void 0), a = a || 'fx';
            while (g--)
                c = L.get(f[g], a + 'queueHooks'), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = [
            'Top',
            'Right',
            'Bottom',
            'Left'
        ], S = function (a, b) {
            return a = b || a, 'none' === n.css(a, 'display') || !n.contains(a.ownerDocument, a);
        }, T = /^(?:checkbox|radio)$/i;
    !function () {
        var a = l.createDocumentFragment(), b = a.appendChild(l.createElement('div')), c = l.createElement('input');
        c.setAttribute('type', 'radio'), c.setAttribute('checked', 'checked'), c.setAttribute('name', 't'), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = '<textarea>x</textarea>', k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();
    var U = 'undefined';
    k.focusinBubbles = 'onfocusin' in a;
    var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/;
    function Z() {
        return !0;
    }
    function $() {
        return !1;
    }
    function _() {
        try {
            return l.activeElement;
        } catch (a) {
        }
    }
    n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
                }), b = (b || '').match(E) || [''], j = b.length;
                while (j--)
                    h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || '').split('.').sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join('.')
                    }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || '').match(E) || [''], j = b.length;
                while (j--)
                    if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || '').split('.').sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)'), g = f = m.length;
                        while (f--)
                            k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ('**' !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
                    } else
                        for (o in i)
                            n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, 'events'));
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, 'type') ? b.type : b, r = j.call(b, 'namespace') ? b.namespace.split('.') : [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf('.') >= 0 && (r = q.split('.'), q = r.shift(), r.sort()), k = q.indexOf(':') < 0 && 'on' + q, b = b[n.expando] ? b : new n.Event(q, 'object' == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join('.'), b.namespace_re = b.namespace ? new RegExp('(^|\\.)' + r.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)
                        p.push(g), h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped())
                    b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, 'events') || {})[b.type] && L.get(g, 'handle'), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result;
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, 'events') || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
                        (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || 'click' !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || 'click' !== a.type) {
                        for (d = [], c = 0; h > c; c++)
                            f = b[c], e = f.selector + ' ', void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        });
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g;
        },
        props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
        fixHooks: {},
        keyHooks: {
            props: 'char charCode key keyCode'.split(' '),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
            }
        },
        mouseHooks: {
            props: 'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
            filter: function (a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
            }
        },
        fix: function (a) {
            if (a[n.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--)
                c = d[b], a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a;
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: 'focusin'
            },
            blur: {
                trigger: function () {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: 'focusout'
            },
            click: {
                trigger: function () {
                    return 'checkbox' === this.type && this.click && n.nodeName(this, 'input') ? (this.click(), !1) : void 0;
                },
                _default: function (a) {
                    return n.nodeName(a.target, 'a');
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = n.extend(new n.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        }
    }, n.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    }, n.Event = function (a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
        }
    }, n.each({
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout'
    }, function (a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
            }
        };
    }), k.focusinBubbles || n.each({
        focus: 'focusin',
        blur: 'focusout'
    }, function (a, b) {
        var c = function (a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0);
        };
        n.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
            },
            teardown: function () {
                var d = this.ownerDocument || this, e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
            }
        };
    }), n.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ('object' == typeof a) {
                'string' != typeof b && (c = c || b, b = void 0);
                for (g in a)
                    this.on(g, b, c, a[g], e);
                return this;
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ('string' == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)
                d = $;
            else if (!d)
                return this;
            return 1 === e && (f = d, d = function (a) {
                return n().off(a), f.apply(this, arguments);
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
                n.event.add(this, a, d, c, b);
            });
        },
        one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + '.' + d.namespace : d.origType, d.selector, d.handler), this;
            if ('object' == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this;
            }
            return (b === !1 || 'function' == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
                n.event.remove(this, a, c, b);
            });
        },
        trigger: function (a, b) {
            return this.each(function () {
                n.event.trigger(a, b, this);
            });
        },
        triggerHandler: function (a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0;
        }
    });
    var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bb = /<([\w:]+)/, cb = /<|&#?\w+;/, db = /<(?:script|style|link)/i, eb = /checked\s*(?:[^=]|=\s*.checked.)/i, fb = /^$|\/(?:java|ecma)script/i, gb = /^true\/(.*)/, hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ib = {
            option: [
                1,
                '<select multiple=\'multiple\'>',
                '</select>'
            ],
            thead: [
                1,
                '<table>',
                '</table>'
            ],
            col: [
                2,
                '<table><colgroup>',
                '</colgroup></table>'
            ],
            tr: [
                2,
                '<table><tbody>',
                '</tbody></table>'
            ],
            td: [
                3,
                '<table><tbody><tr>',
                '</tr></tbody></table>'
            ],
            _default: [
                0,
                '',
                ''
            ]
        };
    ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td;
    function jb(a, b) {
        return n.nodeName(a, 'table') && n.nodeName(11 !== b.nodeType ? b : b.firstChild, 'tr') ? a.getElementsByTagName('tbody')[0] || a.appendChild(a.ownerDocument.createElement('tbody')) : a;
    }
    function kb(a) {
        return a.type = (null !== a.getAttribute('type')) + '/' + a.type, a;
    }
    function lb(a) {
        var b = gb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute('type'), a;
    }
    function mb(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            L.set(a[c], 'globalEval', !b || L.get(b[c], 'globalEval'));
    }
    function nb(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++)
                        n.event.add(b, e, j[e][c]);
            }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i));
        }
    }
    function ob(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || '*') : a.querySelectorAll ? a.querySelectorAll(b || '*') : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
    }
    function pb(a, b) {
        var c = b.nodeName.toLowerCase();
        'input' === c && T.test(a.type) ? b.checked = a.checked : ('input' === c || 'textarea' === c) && (b.defaultValue = a.defaultValue);
    }
    n.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++)
                    pb(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++)
                        nb(f[d], g[d]);
                else
                    nb(a, h);
            return g = ob(h, 'script'), g.length > 0 && mb(g, !i && ob(a, 'script')), h;
        },
        buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
                if (e = a[m], e || 0 === e)
                    if ('object' === n.type(e))
                        n.merge(l, e.nodeType ? [e] : e);
                    else if (cb.test(e)) {
                        f = f || k.appendChild(b.createElement('div')), g = (bb.exec(e) || [
                            '',
                            ''
                        ])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, '<$1></$2>') + h[2], j = h[0];
                        while (j--)
                            f = f.lastChild;
                        n.merge(l, f.childNodes), f = k.firstChild, f.textContent = '';
                    } else
                        l.push(b.createTextNode(e));
            k.textContent = '', m = 0;
            while (e = l[m++])
                if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = ob(k.appendChild(e), 'script'), i && mb(f), c)) {
                    j = 0;
                    while (e = f[j++])
                        fb.test(e.type || '') && c.push(e);
                }
            return k;
        },
        cleanData: function (a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events)
                        for (d in b.events)
                            f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e];
                }
                delete M.cache[c[M.expando]];
            }
        }
    }), n.fn.extend({
        text: function (a) {
            return J(this, function (a) {
                return void 0 === a ? n.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
                });
            }, null, a, arguments.length);
        },
        append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        remove: function (a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                b || 1 !== c.nodeType || n.cleanData(ob(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && mb(ob(c, 'script')), c.parentNode.removeChild(c));
            return this;
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++)
                1 === a.nodeType && (n.cleanData(ob(a, !1)), a.textContent = '');
            return this;
        },
        clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return n.clone(this, a, b);
            });
        },
        html: function (a) {
            return J(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType)
                    return b.innerHTML;
                if ('string' == typeof a && !db.test(a) && !ib[(bb.exec(a) || [
                        '',
                        ''
                    ])[1].toLowerCase()]) {
                    a = a.replace(ab, '<$1></$2>');
                    try {
                        for (; d > c; c++)
                            b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ob(b, !1)), b.innerHTML = a);
                        b = 0;
                    } catch (e) {
                    }
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, n.cleanData(ob(this)), a && a.replaceChild(b, this);
            }), a && (a.length || a.nodeType) ? this : this.remove();
        },
        detach: function (a) {
            return this.remove(a, !0);
        },
        domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
            if (q || l > 1 && 'string' == typeof p && !k.checkClone && eb.test(p))
                return this.each(function (c) {
                    var d = m.eq(c);
                    q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
                });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(ob(c, 'script'), kb), g = f.length; l > j; j++)
                    h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, ob(h, 'script'))), b.call(this[j], h, j);
                if (g)
                    for (i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0; g > j; j++)
                        h = f[j], fb.test(h.type || '') && !L.access(h, 'globalEval') && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(hb, '')));
            }
            return this;
        }
    }), n.each({
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith'
    }, function (a, b) {
        n.fn[a] = function (a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)
                c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d);
        };
    });
    var qb, rb = {};
    function sb(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], 'display');
        return e.detach(), f;
    }
    function tb(a) {
        var b = l, c = rb[a];
        return c || (c = sb(a, b), 'none' !== c && c || (qb = (qb || n('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>')).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c;
    }
    var ub = /^margin/, vb = new RegExp('^(' + Q + ')(?!px)[a-z%]+$', 'i'), wb = function (a) {
            return a.ownerDocument.defaultView.getComputedStyle(a, null);
        };
    function xb(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ('' !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + '' : g;
    }
    function yb(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            }
        };
    }
    !function () {
        var b, c, d = l.documentElement, e = l.createElement('div'), f = l.createElement('div');
        if (f.style) {
            f.style.backgroundClip = 'content-box', f.cloneNode(!0).style.backgroundClip = '', k.clearCloneStyle = 'content-box' === f.style.backgroundClip, e.style.cssText = 'border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute', e.appendChild(f);
            function g() {
                f.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute', f.innerHTML = '', d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = '1%' !== g.top, c = '4px' === g.width, d.removeChild(e);
            }
            a.getComputedStyle && n.extend(k, {
                pixelPosition: function () {
                    return g(), b;
                },
                boxSizingReliable: function () {
                    return null == c && g(), c;
                },
                reliableMarginRight: function () {
                    var b, c = f.appendChild(l.createElement('div'));
                    return c.style.cssText = f.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0', c.style.marginRight = c.style.width = '0', f.style.width = '1px', d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), b;
                }
            });
        }
    }(), n.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e;
    };
    var zb = /^(none|table(?!-c[ea]).+)/, Ab = new RegExp('^(' + Q + ')(.*)$', 'i'), Bb = new RegExp('^([+-])=(' + Q + ')', 'i'), Cb = {
            position: 'absolute',
            visibility: 'hidden',
            display: 'block'
        }, Db = {
            letterSpacing: '0',
            fontWeight: '400'
        }, Eb = [
            'Webkit',
            'O',
            'Moz',
            'ms'
        ];
    function Fb(a, b) {
        if (b in a)
            return b;
        var c = b[0].toUpperCase() + b.slice(1), d = b, e = Eb.length;
        while (e--)
            if (b = Eb[e] + c, b in a)
                return b;
        return d;
    }
    function Gb(a, b, c) {
        var d = Ab.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || 'px') : b;
    }
    function Hb(a, b, c, d, e) {
        for (var f = c === (d ? 'border' : 'content') ? 4 : 'width' === b ? 1 : 0, g = 0; 4 > f; f += 2)
            'margin' === c && (g += n.css(a, c + R[f], !0, e)), d ? ('content' === c && (g -= n.css(a, 'padding' + R[f], !0, e)), 'margin' !== c && (g -= n.css(a, 'border' + R[f] + 'Width', !0, e))) : (g += n.css(a, 'padding' + R[f], !0, e), 'padding' !== c && (g += n.css(a, 'border' + R[f] + 'Width', !0, e)));
        return g;
    }
    function Ib(a, b, c) {
        var d = !0, e = 'width' === b ? a.offsetWidth : a.offsetHeight, f = wb(a), g = 'border-box' === n.css(a, 'boxSizing', !1, f);
        if (0 >= e || null == e) {
            if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e))
                return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
        }
        return e + Hb(a, b, c || (g ? 'border' : 'content'), d, f) + 'px';
    }
    function Jb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g], d.style && (f[g] = L.get(d, 'olddisplay'), c = d.style.display, b ? (f[g] || 'none' !== c || (d.style.display = ''), '' === d.style.display && S(d) && (f[g] = L.access(d, 'olddisplay', tb(d.nodeName)))) : (e = S(d), 'none' === c && e || L.set(d, 'olddisplay', e ? c : n.css(d, 'display'))));
        for (g = 0; h > g; g++)
            d = a[g], d.style && (b && 'none' !== d.style.display && '' !== d.style.display || (d.style.display = b ? f[g] || '' : 'none'));
        return a;
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = xb(a, 'opacity');
                        return '' === c ? '1' : c;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: { 'float': 'cssFloat' },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && 'get' in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, 'string' === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = 'number'), null != c && c === c && ('number' !== f || n.cssNumber[h] || (c += 'px'), k.clearCloneStyle || '' !== c || 0 !== b.indexOf('background') || (i[b] = 'inherit'), g && 'set' in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && 'get' in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), 'normal' === e && b in Db && (e = Db[b]), '' === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e;
        }
    }), n.each([
        'height',
        'width'
    ], function (a, b) {
        n.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? zb.test(n.css(a, 'display')) && 0 === a.offsetWidth ? n.swap(a, Cb, function () {
                    return Ib(a, b, d);
                }) : Ib(a, b, d) : void 0;
            },
            set: function (a, c, d) {
                var e = d && wb(a);
                return Gb(a, c, d ? Hb(a, b, d, 'border-box' === n.css(a, 'boxSizing', !1, e), e) : 0);
            }
        };
    }), n.cssHooks.marginRight = yb(k.reliableMarginRight, function (a, b) {
        return b ? n.swap(a, { display: 'inline-block' }, xb, [
            a,
            'marginRight'
        ]) : void 0;
    }), n.each({
        margin: '',
        padding: '',
        border: 'Width'
    }, function (a, b) {
        n.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = 'string' == typeof c ? c.split(' ') : [c]; 4 > d; d++)
                    e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, ub.test(a) || (n.cssHooks[a + b].set = Gb);
    }), n.fn.extend({
        css: function (a, b) {
            return J(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = wb(a), e = b.length; e > g; g++)
                        f[b[g]] = n.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
            }, a, b, arguments.length > 1);
        },
        show: function () {
            return Jb(this, !0);
        },
        hide: function () {
            return Jb(this);
        },
        toggle: function (a) {
            return 'boolean' == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                S(this) ? n(this).show() : n(this).hide();
            });
        }
    });
    function Kb(a, b, c, d, e) {
        return new Kb.prototype.init(a, b, c, d, e);
    }
    n.Tween = Kb, Kb.prototype = {
        constructor: Kb,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || 'swing', this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? '' : 'px');
        },
        cur: function () {
            var a = Kb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Kb.propHooks._default.get(this);
        },
        run: function (a) {
            var b, c = Kb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this;
        }
    }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ''), b && 'auto' !== b ? b : 0) : a.elem[a.prop];
            },
            set: function (a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            }
        }
    }, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, n.easing = {
        linear: function (a) {
            return a;
        },
        swing: function (a) {
            return 0.5 - Math.cos(a * Math.PI) / 2;
        }
    }, n.fx = Kb.prototype.init, n.fx.step = {};
    var Lb, Mb, Nb = /^(?:toggle|show|hide)$/, Ob = new RegExp('^(?:([+-])=|)(' + Q + ')([a-z%]*)$', 'i'), Pb = /queueHooks$/, Qb = [Vb], Rb = {
            '*': [function (a, b) {
                    var c = this.createTween(a, b), d = c.cur(), e = Ob.exec(b), f = e && e[3] || (n.cssNumber[a] ? '' : 'px'), g = (n.cssNumber[a] || 'px' !== f && +d) && Ob.exec(n.css(c.elem, a)), h = 1, i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do
                            h = h || '.5', g /= h, n.style(c.elem, a, g + f);
                        while (h !== (h = c.cur() / d) && 1 !== h && --i);
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
                }]
        };
    function Sb() {
        return setTimeout(function () {
            Lb = void 0;
        }), Lb = n.now();
    }
    function Tb(a, b) {
        var c, d = 0, e = { height: a };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b)
            c = R[d], e['margin' + c] = e['padding' + c] = a;
        return b && (e.opacity = e.width = a), e;
    }
    function Ub(a, b, c) {
        for (var d, e = (Rb[b] || []).concat(Rb['*']), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d;
    }
    function Vb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, 'fxshow');
        c.queue || (h = n._queueHooks(a, 'fx'), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i();
        }), h.unqueued++, l.always(function () {
            l.always(function () {
                h.unqueued--, n.queue(a, 'fx').length || h.empty.fire();
            });
        })), 1 === a.nodeType && ('height' in b || 'width' in b) && (c.overflow = [
            o.overflow,
            o.overflowX,
            o.overflowY
        ], j = n.css(a, 'display'), k = 'none' === j ? L.get(a, 'olddisplay') || tb(a.nodeName) : j, 'inline' === k && 'none' === n.css(a, 'float') && (o.display = 'inline-block')), c.overflow && (o.overflow = 'hidden', l.always(function () {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
        }));
        for (d in b)
            if (e = b[d], Nb.exec(e)) {
                if (delete b[d], f = f || 'toggle' === e, e === (p ? 'hide' : 'show')) {
                    if ('show' !== e || !q || void 0 === q[d])
                        continue;
                    p = !0;
                }
                m[d] = q && q[d] || n.style(a, d);
            } else
                j = void 0;
        if (n.isEmptyObject(m))
            'inline' === ('none' === j ? tb(a.nodeName) : j) && (o.display = j);
        else {
            q ? 'hidden' in q && (p = q.hidden) : q = L.access(a, 'fxshow', {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
                n(a).hide();
            }), l.done(function () {
                var b;
                L.remove(a, 'fxshow');
                for (b in m)
                    n.style(a, b, m[b]);
            });
            for (d in m)
                g = Ub(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = 'width' === d || 'height' === d ? 1 : 0));
        }
    }
    function Wb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && 'expand' in g) {
                f = g.expand(f), delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c], b[c] = e);
            } else
                b[d] = e;
    }
    function Xb(a, b, c) {
        var d, e, f = 0, g = Qb.length, h = n.Deferred().always(function () {
                delete i.elem;
            }), i = function () {
                if (e)
                    return !1;
                for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                    j.tweens[g].run(f);
                return h.notifyWith(a, [
                    j,
                    f,
                    c
                ]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
            }, j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, { specialEasing: {} }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Lb || Sb(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d;
                },
                stop: function (b) {
                    var c = 0, d = b ? j.tweens.length : 0;
                    if (e)
                        return this;
                    for (e = !0; d > c; c++)
                        j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [
                        j,
                        b
                    ]) : h.rejectWith(a, [
                        j,
                        b
                    ]), this;
                }
            }), k = j.props;
        for (Wb(k, j.opts.specialEasing); g > f; f++)
            if (d = Qb[f].call(j, a, k, j.opts))
                return d;
        return n.map(k, Ub, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    n.Animation = n.extend(Xb, {
        tweener: function (a, b) {
            n.isFunction(a) ? (b = a, a = ['*']) : a = a.split(' ');
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b);
        },
        prefilter: function (a, b) {
            b ? Qb.unshift(a) : Qb.push(a);
        }
    }), n.speed = function (a, b, c) {
        var d = a && 'object' == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : 'number' == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = 'fx'), d.old = d.complete, d.complete = function () {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
        }, d;
    }, n.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(S).css('opacity', 0).show().end().animate({ opacity: b }, a, c, d);
        },
        animate: function (a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () {
                    var b = Xb(this, n.extend({}, a), f);
                    (e || L.get(this, 'finish')) && b.stop(!0);
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return 'string' != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || 'fx', []), this.each(function () {
                var b = !0, e = null != a && a + 'queueHooks', f = n.timers, g = L.get(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && Pb.test(e) && d(g[e]);
                for (e = f.length; e--;)
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a);
            });
        },
        finish: function (a) {
            return a !== !1 && (a = a || 'fx'), this.each(function () {
                var b, c = L.get(this), d = c[a + 'queue'], e = c[a + 'queueHooks'], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), n.each([
        'toggle',
        'show',
        'hide'
    ], function (a, b) {
        var c = n.fn[b];
        n.fn[b] = function (a, d, e) {
            return null == a || 'boolean' == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e);
        };
    }), n.each({
        slideDown: Tb('show'),
        slideUp: Tb('hide'),
        slideToggle: Tb('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' }
    }, function (a, b) {
        n.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), n.timers = [], n.fx.tick = function () {
        var a, b = 0, c = n.timers;
        for (Lb = n.now(); b < c.length; b++)
            a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), Lb = void 0;
    }, n.fx.timer = function (a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }, n.fx.interval = 13, n.fx.start = function () {
        Mb || (Mb = setInterval(n.fx.tick, n.fx.interval));
    }, n.fx.stop = function () {
        clearInterval(Mb), Mb = null;
    }, n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, n.fn.delay = function (a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || 'fx', this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d);
            };
        });
    }, function () {
        var a = l.createElement('input'), b = l.createElement('select'), c = b.appendChild(l.createElement('option'));
        a.type = 'checkbox', k.checkOn = '' !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement('input'), a.value = 't', a.type = 'radio', k.radioValue = 't' === a.value;
    }();
    var Yb, Zb, $b = n.expr.attrHandle;
    n.fn.extend({
        attr: function (a, b) {
            return J(this, n.attr, a, b, arguments.length > 1);
        },
        removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a);
            });
        }
    }), n.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)
                return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && 'get' in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && 'set' in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ''), c) : void n.removeAttr(a, b));
        },
        removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++])
                    d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!k.radioValue && 'radio' === b && n.nodeName(a, 'input')) {
                        var c = a.value;
                        return a.setAttribute('type', b), c && (a.value = c), b;
                    }
                }
            }
        }
    }), Zb = {
        set: function (a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = $b[b] || n.find.attr;
        $b[b] = function (a, b, d) {
            var e, f;
            return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e;
        };
    });
    var _b = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return J(this, n.prop, a, b, arguments.length > 1);
        },
        removeProp: function (a) {
            return this.each(function () {
                delete this[n.propFix[a] || a];
            });
        }
    }), n.extend({
        propFix: {
            'for': 'htmlFor',
            'class': 'className'
        },
        prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)
                return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && 'set' in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && 'get' in e && null !== (d = e.get(a, b)) ? d : a[b];
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    return a.hasAttribute('tabindex') || _b.test(a.nodeName) || a.href ? a.tabIndex : -1;
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        }
    }), n.each([
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable'
    ], function () {
        n.propFix[this.toLowerCase()] = this;
    });
    var ac = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = 'string' == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))
                return this.each(function (b) {
                    n(this).addClass(a.call(this, b, this.className));
                });
            if (h)
                for (b = (a || '').match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (' ' + c.className + ' ').replace(ac, ' ') : ' ')) {
                        f = 0;
                        while (e = b[f++])
                            d.indexOf(' ' + e + ' ') < 0 && (d += e + ' ');
                        g = n.trim(d), c.className !== g && (c.className = g);
                    }
            return this;
        },
        removeClass: function (a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || 'string' == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))
                return this.each(function (b) {
                    n(this).removeClass(a.call(this, b, this.className));
                });
            if (h)
                for (b = (a || '').match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (' ' + c.className + ' ').replace(ac, ' ') : '')) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(' ' + e + ' ') >= 0)
                                d = d.replace(' ' + e + ' ', ' ');
                        g = a ? n.trim(d) : '', c.className !== g && (c.className = g);
                    }
            return this;
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return 'boolean' == typeof b && 'string' === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b);
            } : function () {
                if ('string' === c) {
                    var b, d = 0, e = n(this), f = a.match(E) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                } else
                    (c === U || 'boolean' === c) && (this.className && L.set(this, '__className__', this.className), this.className = this.className || a === !1 ? '' : L.get(this, '__className__') || '');
            });
        },
        hasClass: function (a) {
            for (var b = ' ' + a + ' ', c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (' ' + this[c].className + ' ').replace(ac, ' ').indexOf(b) >= 0)
                    return !0;
            return !1;
        }
    });
    var bc = /\r/g;
    n.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = n.isFunction(a), this.each(function (c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = '' : 'number' == typeof e ? e += '' : n.isArray(e) && (e = n.map(e, function (a) {
                            return null == a ? '' : a + '';
                        })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && 'set' in b && void 0 !== b.set(this, e, 'value') || (this.value = e));
                    });
                if (e)
                    return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && 'get' in b && void 0 !== (c = b.get(e, 'value')) ? c : (c = e.value, 'string' == typeof c ? c.replace(bc, '') : null == c ? '' : c);
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = n.find.attr(a, 'value');
                    return null != b ? b : n.trim(n.text(a));
                }
            },
            select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = 'select-one' === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute('disabled')) || c.parentNode.disabled && n.nodeName(c.parentNode, 'optgroup'))) {
                            if (b = n(c).val(), f)
                                return b;
                            g.push(b);
                        }
                    return g;
                },
                set: function (a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--)
                        d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        }
    }), n.each([
        'radio',
        'checkbox'
    ], function () {
        n.valHooks[this] = {
            set: function (a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
            }
        }, k.checkOn || (n.valHooks[this].get = function (a) {
            return null === a.getAttribute('value') ? 'on' : a.value;
        });
    }), n.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function (a, b) {
        n.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), n.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function (a, b) {
            return this.off(a, null, b);
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, '**') : this.off(b, a || '**', c);
        }
    });
    var cc = n.now(), dc = /\?/;
    n.parseJSON = function (a) {
        return JSON.parse(a + '');
    }, n.parseXML = function (a) {
        var b, c;
        if (!a || 'string' != typeof a)
            return null;
        try {
            c = new DOMParser(), b = c.parseFromString(a, 'text/xml');
        } catch (d) {
            b = void 0;
        }
        return (!b || b.getElementsByTagName('parsererror').length) && n.error('Invalid XML: ' + a), b;
    };
    var ec, fc, gc = /#.*$/, hc = /([?&])_=[^&]*/, ic = /^(.*?):[ \t]*([^\r\n]*)$/gm, jc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, kc = /^(?:GET|HEAD)$/, lc = /^\/\//, mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, nc = {}, oc = {}, pc = '*/'.concat('*');
    try {
        fc = location.href;
    } catch (qc) {
        fc = l.createElement('a'), fc.href = '', fc = fc.href;
    }
    ec = mc.exec(fc.toLowerCase()) || [];
    function rc(a) {
        return function (b, c) {
            'string' != typeof b && (c = b, b = '*');
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c))
                while (d = f[e++])
                    '+' === d[0] ? (d = d.slice(1) || '*', (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function sc(a, b, c, d) {
        var e = {}, f = a === oc;
        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return 'string' != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
            }), i;
        }
        return g(b.dataTypes[0]) || !e['*'] && g('*');
    }
    function tc(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b)
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a;
    }
    function uc(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ('*' === i[0])
            i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader('Content-Type'));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break;
                }
        if (i[0] in c)
            f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + ' ' + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function vc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ('*' === f)
                    f = i;
                else if ('*' !== i && i !== f) {
                    if (g = j[i + ' ' + f] || j['* ' + f], !g)
                        for (e in j)
                            if (h = e.split(' '), h[1] === f && (g = j[i + ' ' + h[0]] || j['* ' + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                break;
                            }
                    if (g !== !0)
                        if (g && a['throws'])
                            b = g(b);
                        else
                            try {
                                b = g(b);
                            } catch (l) {
                                return {
                                    state: 'parsererror',
                                    error: g ? l : 'No conversion from ' + i + ' to ' + f
                                };
                            }
                }
        return {
            state: 'success',
            data: b
        };
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: fc,
            type: 'GET',
            isLocal: jc.test(ec[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            accepts: {
                '*': pc,
                text: 'text/plain',
                html: 'text/html',
                xml: 'application/xml, text/xml',
                json: 'application/json, text/javascript'
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: 'responseXML',
                text: 'responseText',
                json: 'responseJSON'
            },
            converters: {
                '* text': String,
                'text html': !0,
                'text json': n.parseJSON,
                'text xml': n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? tc(tc(a, n.ajaxSettings), b) : tc(n.ajaxSettings, a);
        },
        ajaxPrefilter: rc(nc),
        ajaxTransport: rc(oc),
        ajax: function (a, b) {
            'object' == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks('once memory'), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = 'canceled', v = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!f) {
                                f = {};
                                while (b = ic.exec(e))
                                    f[b[1].toLowerCase()] = b[2];
                            }
                            b = f[a.toLowerCase()];
                        }
                        return null == b ? null : b;
                    },
                    getAllResponseHeaders: function () {
                        return 2 === t ? e : null;
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this;
                    },
                    overrideMimeType: function (a) {
                        return t || (k.mimeType = a), this;
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a)
                                    q[b] = [
                                        q[b],
                                        a[b]
                                    ];
                            else
                                v.always(a[v.status]);
                        return this;
                    },
                    abort: function (a) {
                        var b = a || u;
                        return c && c.abort(b), x(0, b), this;
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || fc) + '').replace(gc, '').replace(lc, ec[1] + '//'), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || '*').toLowerCase().match(E) || [''], null == k.crossDomain && (h = mc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === ec[1] && h[2] === ec[2] && (h[3] || ('http:' === h[1] ? '80' : '443')) === (ec[3] || ('http:' === ec[1] ? '80' : '443')))), k.data && k.processData && 'string' != typeof k.data && (k.data = n.param(k.data, k.traditional)), sc(nc, k, b, v), 2 === t)
                return v;
            i = k.global, i && 0 === n.active++ && n.event.trigger('ajaxStart'), k.type = k.type.toUpperCase(), k.hasContent = !kc.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? '&' : '?') + k.data, delete k.data), k.cache === !1 && (k.url = hc.test(d) ? d.replace(hc, '$1_=' + cc++) : d + (dc.test(d) ? '&' : '?') + '_=' + cc++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader('If-Modified-Since', n.lastModified[d]), n.etag[d] && v.setRequestHeader('If-None-Match', n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader('Content-Type', k.contentType), v.setRequestHeader('Accept', k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ('*' !== k.dataTypes[0] ? ', ' + pc + '; q=0.01' : '') : k.accepts['*']);
            for (j in k.headers)
                v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
                return v.abort();
            u = 'abort';
            for (j in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                v[j](k[j]);
            if (c = sc(oc, k, b, v)) {
                v.readyState = 1, i && m.trigger('ajaxSend', [
                    v,
                    k
                ]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort('timeout');
                }, k.timeout));
                try {
                    t = 1, c.send(r, x);
                } catch (w) {
                    if (!(2 > t))
                        throw w;
                    x(-1, w);
                }
            } else
                x(-1, 'No Transport');
            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || '', v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = uc(k, v, f)), u = vc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader('Last-Modified'), w && (n.lastModified[d] = w), w = v.getResponseHeader('etag'), w && (n.etag[d] = w)), 204 === a || 'HEAD' === k.type ? x = 'nocontent' : 304 === a ? x = 'notmodified' : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = 'error', 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + '', j ? o.resolveWith(l, [
                    r,
                    x,
                    v
                ]) : o.rejectWith(l, [
                    v,
                    x,
                    s
                ]), v.statusCode(q), q = void 0, i && m.trigger(j ? 'ajaxSuccess' : 'ajaxError', [
                    v,
                    k,
                    j ? r : s
                ]), p.fireWith(l, [
                    v,
                    x
                ]), i && (m.trigger('ajaxComplete', [
                    v,
                    k
                ]), --n.active || n.event.trigger('ajaxStop')));
            }
            return v;
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, 'json');
        },
        getScript: function (a, b) {
            return n.get(a, void 0, b, 'script');
        }
    }), n.each([
        'get',
        'post'
    ], function (a, b) {
        n[b] = function (a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            });
        };
    }), n.each([
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend'
    ], function (a, b) {
        n.fn[b] = function (a) {
            return this.on(b, a);
        };
    }), n._evalUrl = function (a) {
        return n.ajax({
            url: a,
            type: 'GET',
            dataType: 'script',
            async: !1,
            global: !1,
            'throws': !0
        });
    }, n.fn.extend({
        wrapAll: function (a) {
            var b;
            return n.isFunction(a) ? this.each(function (b) {
                n(this).wrapAll(a.call(this, b));
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;
                while (a.firstElementChild)
                    a = a.firstElementChild;
                return a;
            }).append(this)), this);
        },
        wrapInner: function (a) {
            return this.each(n.isFunction(a) ? function (b) {
                n(this).wrapInner(a.call(this, b));
            } : function () {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function (a) {
            var b = n.isFunction(a);
            return this.each(function (c) {
                n(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function () {
            return this.parent().each(function () {
                n.nodeName(this, 'body') || n(this).replaceWith(this.childNodes);
            }).end();
        }
    }), n.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }, n.expr.filters.visible = function (a) {
        return !n.expr.filters.hidden(a);
    };
    var wc = /%20/g, xc = /\[\]$/, yc = /\r?\n/g, zc = /^(?:submit|button|image|reset|file)$/i, Ac = /^(?:input|select|textarea|keygen)/i;
    function Bc(a, b, c, d) {
        var e;
        if (n.isArray(b))
            n.each(b, function (b, e) {
                c || xc.test(a) ? d(a, e) : Bc(a + '[' + ('object' == typeof e ? b : '') + ']', e, c, d);
            });
        else if (c || 'object' !== n.type(b))
            d(a, b);
        else
            for (e in b)
                Bc(a + '[' + e + ']', b[e], c, d);
    }
    n.param = function (a, b) {
        var c, d = [], e = function (a, b) {
                b = n.isFunction(b) ? b() : null == b ? '' : b, d[d.length] = encodeURIComponent(a) + '=' + encodeURIComponent(b);
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a))
            n.each(a, function () {
                e(this.name, this.value);
            });
        else
            for (c in a)
                Bc(c, a[c], b, e);
        return d.join('&').replace(wc, '+');
    }, n.fn.extend({
        serialize: function () {
            return n.param(this.serializeArray());
        },
        serializeArray: function () {
            return this.map(function () {
                var a = n.prop(this, 'elements');
                return a ? n.makeArray(a) : this;
            }).filter(function () {
                var a = this.type;
                return this.name && !n(this).is(':disabled') && Ac.test(this.nodeName) && !zc.test(a) && (this.checked || !T.test(a));
            }).map(function (a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(yc, '\r\n')
                    };
                }) : {
                    name: b.name,
                    value: c.replace(yc, '\r\n')
                };
            }).get();
        }
    }), n.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest();
        } catch (a) {
        }
    };
    var Cc = 0, Dc = {}, Ec = {
            0: 200,
            1223: 204
        }, Fc = n.ajaxSettings.xhr();
    a.ActiveXObject && n(a).on('unload', function () {
        for (var a in Dc)
            Dc[a]();
    }), k.cors = !!Fc && 'withCredentials' in Fc, k.ajax = Fc = !!Fc, n.ajaxTransport(function (a) {
        var b;
        return k.cors || Fc && !a.crossDomain ? {
            send: function (c, d) {
                var e, f = a.xhr(), g = ++Cc;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields)
                        f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c['X-Requested-With'] || (c['X-Requested-With'] = 'XMLHttpRequest');
                for (e in c)
                    f.setRequestHeader(e, c[e]);
                b = function (a) {
                    return function () {
                        b && (delete Dc[g], b = f.onload = f.onerror = null, 'abort' === a ? f.abort() : 'error' === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, 'string' == typeof f.responseText ? { text: f.responseText } : void 0, f.getAllResponseHeaders()));
                    };
                }, f.onload = b(), f.onerror = b('error'), b = Dc[g] = b('abort');
                try {
                    f.send(a.hasContent && a.data || null);
                } catch (h) {
                    if (b)
                        throw h;
                }
            },
            abort: function () {
                b && b();
            }
        } : void 0;
    }), n.ajaxSetup({
        accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
        contents: { script: /(?:java|ecma)script/ },
        converters: {
            'text script': function (a) {
                return n.globalEval(a), a;
            }
        }
    }), n.ajaxPrefilter('script', function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = 'GET');
    }), n.ajaxTransport('script', function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (d, e) {
                    b = n('<script>').prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on('load error', c = function (a) {
                        b.remove(), c = null, a && e('error' === a.type ? 404 : 200, a.type);
                    }), l.head.appendChild(b[0]);
                },
                abort: function () {
                    c && c();
                }
            };
        }
    });
    var Gc = [], Hc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function () {
            var a = Gc.pop() || n.expando + '_' + cc++;
            return this[a] = !0, a;
        }
    }), n.ajaxPrefilter('json jsonp', function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Hc.test(b.url) ? 'url' : 'string' == typeof b.data && !(b.contentType || '').indexOf('application/x-www-form-urlencoded') && Hc.test(b.data) && 'data');
        return h || 'jsonp' === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hc, '$1' + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? '&' : '?') + b.jsonp + '=' + e), b.converters['script json'] = function () {
            return g || n.error(e + ' was not called'), g[0];
        }, b.dataTypes[0] = 'json', f = a[e], a[e] = function () {
            g = arguments;
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
        }), 'script') : void 0;
    }), n.parseHTML = function (a, b, c) {
        if (!a || 'string' != typeof a)
            return null;
        'boolean' == typeof b && (c = b, b = !1), b = b || l;
        var d = v.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes));
    };
    var Ic = n.fn.load;
    n.fn.load = function (a, b, c) {
        if ('string' != typeof a && Ic)
            return Ic.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(' ');
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && 'object' == typeof b && (e = 'POST'), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: 'html',
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? n('<div>').append(n.parseHTML(a)).find(d) : a);
        }).complete(c && function (a, b) {
            g.each(c, f || [
                a.responseText,
                b,
                a
            ]);
        }), this;
    }, n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
            return a === b.elem;
        }).length;
    };
    var Jc = a.document.documentElement;
    function Kc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    n.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, 'position'), l = n(a), m = {};
            'static' === k && (a.style.position = 'relative'), h = l.offset(), f = n.css(a, 'top'), i = n.css(a, 'left'), j = ('absolute' === k || 'fixed' === k) && (f + i).indexOf('auto') > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), 'using' in b ? b.using.call(a, m) : l.css(m);
        }
    }, n.fn.extend({
        offset: function (a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function (b) {
                    n.offset.setOffset(this, a, b);
                });
            var b, c, d = this[0], e = {
                    top: 0,
                    left: 0
                }, f = d && d.ownerDocument;
            if (f)
                return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Kc(f), {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e;
        },
        position: function () {
            if (this[0]) {
                var a, b, c = this[0], d = {
                        top: 0,
                        left: 0
                    };
                return 'fixed' === n.css(c, 'position') ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], 'html') || (d = a.offset()), d.top += n.css(a[0], 'borderTopWidth', !0), d.left += n.css(a[0], 'borderLeftWidth', !0)), {
                    top: b.top - d.top - n.css(c, 'marginTop', !0),
                    left: b.left - d.left - n.css(c, 'marginLeft', !0)
                };
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || Jc;
                while (a && !n.nodeName(a, 'html') && 'static' === n.css(a, 'position'))
                    a = a.offsetParent;
                return a || Jc;
            });
        }
    }), n.each({
        scrollLeft: 'pageXOffset',
        scrollTop: 'pageYOffset'
    }, function (b, c) {
        var d = 'pageYOffset' === c;
        n.fn[b] = function (e) {
            return J(this, function (b, e, f) {
                var g = Kc(b);
                return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
            }, b, e, arguments.length, null);
        };
    }), n.each([
        'top',
        'left'
    ], function (a, b) {
        n.cssHooks[b] = yb(k.pixelPosition, function (a, c) {
            return c ? (c = xb(a, b), vb.test(c) ? n(a).position()[b] + 'px' : c) : void 0;
        });
    }), n.each({
        Height: 'height',
        Width: 'width'
    }, function (a, b) {
        n.each({
            padding: 'inner' + a,
            content: b,
            '': 'outer' + a
        }, function (c, d) {
            n.fn[d] = function (d, e) {
                var f = arguments.length && (c || 'boolean' != typeof d), g = c || (d === !0 || e === !0 ? 'margin' : 'border');
                return J(this, function (b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement['client' + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body['scroll' + a], e['scroll' + a], b.body['offset' + a], e['offset' + a], e['client' + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
                }, b, f ? d : void 0, f, null);
            };
        });
    }), n.fn.size = function () {
        return this.length;
    }, n.fn.andSelf = n.fn.addBack, 'function' == typeof define && define.amd && define('jquery', [], function () {
        return n;
    });
    var Lc = a.jQuery, Mc = a.$;
    return n.noConflict = function (b) {
        return a.$ === n && (a.$ = Mc), b && a.jQuery === n && (a.jQuery = Lc), n;
    }, typeof b === U && (a.jQuery = a.$ = n), n;
});
;
(function () {
    var undefined;
    var VERSION = '3.9.3';
    var BIND_FLAG = 1, BIND_KEY_FLAG = 2, CURRY_BOUND_FLAG = 4, CURRY_FLAG = 8, CURRY_RIGHT_FLAG = 16, PARTIAL_FLAG = 32, PARTIAL_RIGHT_FLAG = 64, ARY_FLAG = 128, REARG_FLAG = 256;
    var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = '...';
    var HOT_COUNT = 150, HOT_SPAN = 16;
    var LAZY_DROP_WHILE_FLAG = 0, LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2;
    var FUNC_ERROR_TEXT = 'Expected a function';
    var PLACEHOLDER = '__lodash_placeholder__';
    var argsTag = '[object Arguments]', arrayTag = '[object Array]', boolTag = '[object Boolean]', dateTag = '[object Date]', errorTag = '[object Error]', funcTag = '[object Function]', mapTag = '[object Map]', numberTag = '[object Number]', objectTag = '[object Object]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', weakMapTag = '[object WeakMap]';
    var arrayBufferTag = '[object ArrayBuffer]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
    var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
    var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g, reUnescapedHtml = /[&<>"'`]/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
    var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
    var reRegExpChars = /[.*+?^${}()|[\]\/\\]/g, reHasRegExpChars = RegExp(reRegExpChars.source);
    var reComboMark = /[\u0300-\u036f\ufe20-\ufe23]/g;
    var reEscapeChar = /\\(\\)?/g;
    var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    var reFlags = /\w*$/;
    var reHasHexPrefix = /^0[xX]/;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^\d+$/;
    var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;
    var reNoMatch = /($^)/;
    var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
    var reWords = function () {
        var upper = '[A-Z\\xc0-\\xd6\\xd8-\\xde]', lower = '[a-z\\xdf-\\xf6\\xf8-\\xff]+';
        return RegExp(upper + '+(?=' + upper + lower + ')|' + upper + '?' + lower + '|' + upper + '+|[0-9]+', 'g');
    }();
    var whitespace = ' \t\x0B\f\xA0\uFEFF' + '\n\r\u2028\u2029' + '\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000';
    var contextProps = [
        'Array',
        'ArrayBuffer',
        'Date',
        'Error',
        'Float32Array',
        'Float64Array',
        'Function',
        'Int8Array',
        'Int16Array',
        'Int32Array',
        'Math',
        'Number',
        'Object',
        'RegExp',
        'Set',
        'String',
        '_',
        'clearTimeout',
        'document',
        'isFinite',
        'parseFloat',
        'parseInt',
        'setTimeout',
        'TypeError',
        'Uint8Array',
        'Uint8ClampedArray',
        'Uint16Array',
        'Uint32Array',
        'WeakMap',
        'window'
    ];
    var templateCounter = -1;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[stringTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[mapTag] = cloneableTags[setTag] = cloneableTags[weakMapTag] = false;
    var debounceOptions = {
        'leading': false,
        'maxWait': 0,
        'trailing': false
    };
    var deburredLetters = {
        'À': 'A',
        'Á': 'A',
        'Â': 'A',
        'Ã': 'A',
        'Ä': 'A',
        'Å': 'A',
        'à': 'a',
        'á': 'a',
        'â': 'a',
        'ã': 'a',
        'ä': 'a',
        'å': 'a',
        'Ç': 'C',
        'ç': 'c',
        'Ð': 'D',
        'ð': 'd',
        'È': 'E',
        'É': 'E',
        'Ê': 'E',
        'Ë': 'E',
        'è': 'e',
        'é': 'e',
        'ê': 'e',
        'ë': 'e',
        'Ì': 'I',
        'Í': 'I',
        'Î': 'I',
        'Ï': 'I',
        'ì': 'i',
        'í': 'i',
        'î': 'i',
        'ï': 'i',
        'Ñ': 'N',
        'ñ': 'n',
        'Ò': 'O',
        'Ó': 'O',
        'Ô': 'O',
        'Õ': 'O',
        'Ö': 'O',
        'Ø': 'O',
        'ò': 'o',
        'ó': 'o',
        'ô': 'o',
        'õ': 'o',
        'ö': 'o',
        'ø': 'o',
        'Ù': 'U',
        'Ú': 'U',
        'Û': 'U',
        'Ü': 'U',
        'ù': 'u',
        'ú': 'u',
        'û': 'u',
        'ü': 'u',
        'Ý': 'Y',
        'ý': 'y',
        'ÿ': 'y',
        'Æ': 'Ae',
        'æ': 'ae',
        'Þ': 'Th',
        'þ': 'th',
        'ß': 'ss'
    };
    var htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&#39;',
        '`': '&#96;'
    };
    var htmlUnescapes = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': '\'',
        '&#96;': '`'
    };
    var objectTypes = {
        'function': true,
        'object': true
    };
    var stringEscapes = {
        '\\': '\\',
        '\'': '\'',
        '\n': 'n',
        '\r': 'r',
        '\u2028': 'u2028',
        '\u2029': 'u2029'
    };
    var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
    var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
    var freeGlobal = freeExports && freeModule && typeof global == 'object' && global && global.Object && global;
    var freeSelf = objectTypes[typeof self] && self && self.Object && self;
    var freeWindow = objectTypes[typeof window] && window && window.Object && window;
    var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;
    var root = freeGlobal || freeWindow !== (this && this.window) && freeWindow || freeSelf || this;
    function baseCompareAscending(value, other) {
        if (value !== other) {
            var valIsNull = value === null, valIsUndef = value === undefined, valIsReflexive = value === value;
            var othIsNull = other === null, othIsUndef = other === undefined, othIsReflexive = other === other;
            if (value > other && !othIsNull || !valIsReflexive || valIsNull && !othIsUndef && othIsReflexive || valIsUndef && othIsReflexive) {
                return 1;
            }
            if (value < other && !valIsNull || !othIsReflexive || othIsNull && !valIsUndef && valIsReflexive || othIsUndef && valIsReflexive) {
                return -1;
            }
        }
        return 0;
    }
    function baseFindIndex(array, predicate, fromRight) {
        var length = array.length, index = fromRight ? length : -1;
        while (fromRight ? index-- : ++index < length) {
            if (predicate(array[index], index, array)) {
                return index;
            }
        }
        return -1;
    }
    function baseIndexOf(array, value, fromIndex) {
        if (value !== value) {
            return indexOfNaN(array, fromIndex);
        }
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
            if (array[index] === value) {
                return index;
            }
        }
        return -1;
    }
    function baseIsFunction(value) {
        return typeof value == 'function' || false;
    }
    function baseToString(value) {
        if (typeof value == 'string') {
            return value;
        }
        return value == null ? '' : value + '';
    }
    function charsLeftIndex(string, chars) {
        var index = -1, length = string.length;
        while (++index < length && chars.indexOf(string.charAt(index)) > -1) {
        }
        return index;
    }
    function charsRightIndex(string, chars) {
        var index = string.length;
        while (index-- && chars.indexOf(string.charAt(index)) > -1) {
        }
        return index;
    }
    function compareAscending(object, other) {
        return baseCompareAscending(object.criteria, other.criteria) || object.index - other.index;
    }
    function compareMultiple(object, other, orders) {
        var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
        while (++index < length) {
            var result = baseCompareAscending(objCriteria[index], othCriteria[index]);
            if (result) {
                if (index >= ordersLength) {
                    return result;
                }
                return result * (orders[index] ? 1 : -1);
            }
        }
        return object.index - other.index;
    }
    function deburrLetter(letter) {
        return deburredLetters[letter];
    }
    function escapeHtmlChar(chr) {
        return htmlEscapes[chr];
    }
    function escapeStringChar(chr) {
        return '\\' + stringEscapes[chr];
    }
    function indexOfNaN(array, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 0 : -1);
        while (fromRight ? index-- : ++index < length) {
            var other = array[index];
            if (other !== other) {
                return index;
            }
        }
        return -1;
    }
    function isObjectLike(value) {
        return !!value && typeof value == 'object';
    }
    function isSpace(charCode) {
        return charCode <= 160 && (charCode >= 9 && charCode <= 13) || charCode == 32 || charCode == 160 || charCode == 5760 || charCode == 6158 || charCode >= 8192 && (charCode <= 8202 || charCode == 8232 || charCode == 8233 || charCode == 8239 || charCode == 8287 || charCode == 12288 || charCode == 65279);
    }
    function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = -1, result = [];
        while (++index < length) {
            if (array[index] === placeholder) {
                array[index] = PLACEHOLDER;
                result[++resIndex] = index;
            }
        }
        return result;
    }
    function sortedUniq(array, iteratee) {
        var seen, index = -1, length = array.length, resIndex = -1, result = [];
        while (++index < length) {
            var value = array[index], computed = iteratee ? iteratee(value, index, array) : value;
            if (!index || seen !== computed) {
                seen = computed;
                result[++resIndex] = value;
            }
        }
        return result;
    }
    function trimmedLeftIndex(string) {
        var index = -1, length = string.length;
        while (++index < length && isSpace(string.charCodeAt(index))) {
        }
        return index;
    }
    function trimmedRightIndex(string) {
        var index = string.length;
        while (index-- && isSpace(string.charCodeAt(index))) {
        }
        return index;
    }
    function unescapeHtmlChar(chr) {
        return htmlUnescapes[chr];
    }
    function runInContext(context) {
        context = context ? _.defaults(root.Object(), context, _.pick(root, contextProps)) : root;
        var Array = context.Array, Date = context.Date, Error = context.Error, Function = context.Function, Math = context.Math, Number = context.Number, Object = context.Object, RegExp = context.RegExp, String = context.String, TypeError = context.TypeError;
        var arrayProto = Array.prototype, objectProto = Object.prototype, stringProto = String.prototype;
        var document = (document = context.window) ? document.document : null;
        var fnToString = Function.prototype.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var objToString = objectProto.toString;
        var oldDash = context._;
        var reIsNative = RegExp('^' + escapeRegExp(fnToString.call(hasOwnProperty)).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
        var ArrayBuffer = getNative(context, 'ArrayBuffer'), bufferSlice = getNative(ArrayBuffer && new ArrayBuffer(0), 'slice'), ceil = Math.ceil, clearTimeout = context.clearTimeout, floor = Math.floor, getPrototypeOf = getNative(Object, 'getPrototypeOf'), parseFloat = context.parseFloat, push = arrayProto.push, Set = getNative(context, 'Set'), setTimeout = context.setTimeout, splice = arrayProto.splice, Uint8Array = getNative(context, 'Uint8Array'), WeakMap = getNative(context, 'WeakMap');
        var Float64Array = function () {
            try {
                var func = getNative(context, 'Float64Array'), result = new func(new ArrayBuffer(10), 0, 1) && func;
            } catch (e) {
            }
            return result || null;
        }();
        var nativeCreate = getNative(Object, 'create'), nativeIsArray = getNative(Array, 'isArray'), nativeIsFinite = context.isFinite, nativeKeys = getNative(Object, 'keys'), nativeMax = Math.max, nativeMin = Math.min, nativeNow = getNative(Date, 'now'), nativeNumIsFinite = getNative(Number, 'isFinite'), nativeParseInt = context.parseInt, nativeRandom = Math.random;
        var NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY, POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
        var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
        var FLOAT64_BYTES_PER_ELEMENT = Float64Array ? Float64Array.BYTES_PER_ELEMENT : 0;
        var MAX_SAFE_INTEGER = 9007199254740991;
        var metaMap = WeakMap && new WeakMap();
        var realNames = {};
        function lodash(value) {
            if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
                if (value instanceof LodashWrapper) {
                    return value;
                }
                if (hasOwnProperty.call(value, '__chain__') && hasOwnProperty.call(value, '__wrapped__')) {
                    return wrapperClone(value);
                }
            }
            return new LodashWrapper(value);
        }
        function baseLodash() {
        }
        function LodashWrapper(value, chainAll, actions) {
            this.__wrapped__ = value;
            this.__actions__ = actions || [];
            this.__chain__ = !!chainAll;
        }
        var support = lodash.support = {};
        (function (x) {
            var Ctor = function () {
                    this.x = x;
                }, object = {
                    '0': x,
                    'length': x
                }, props = [];
            Ctor.prototype = {
                'valueOf': x,
                'y': x
            };
            for (var key in new Ctor()) {
                props.push(key);
            }
            try {
                support.dom = document.createDocumentFragment().nodeType === 11;
            } catch (e) {
                support.dom = false;
            }
        }(1, 0));
        lodash.templateSettings = {
            'escape': reEscape,
            'evaluate': reEvaluate,
            'interpolate': reInterpolate,
            'variable': '',
            'imports': { '_': lodash }
        };
        function LazyWrapper(value) {
            this.__wrapped__ = value;
            this.__actions__ = null;
            this.__dir__ = 1;
            this.__dropCount__ = 0;
            this.__filtered__ = false;
            this.__iteratees__ = null;
            this.__takeCount__ = POSITIVE_INFINITY;
            this.__views__ = null;
        }
        function lazyClone() {
            var actions = this.__actions__, iteratees = this.__iteratees__, views = this.__views__, result = new LazyWrapper(this.__wrapped__);
            result.__actions__ = actions ? arrayCopy(actions) : null;
            result.__dir__ = this.__dir__;
            result.__filtered__ = this.__filtered__;
            result.__iteratees__ = iteratees ? arrayCopy(iteratees) : null;
            result.__takeCount__ = this.__takeCount__;
            result.__views__ = views ? arrayCopy(views) : null;
            return result;
        }
        function lazyReverse() {
            if (this.__filtered__) {
                var result = new LazyWrapper(this);
                result.__dir__ = -1;
                result.__filtered__ = true;
            } else {
                result = this.clone();
                result.__dir__ *= -1;
            }
            return result;
        }
        function lazyValue() {
            var array = this.__wrapped__.value();
            if (!isArray(array)) {
                return baseWrapperValue(array, this.__actions__);
            }
            var dir = this.__dir__, isRight = dir < 0, view = getView(0, array.length, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, takeCount = nativeMin(length, this.__takeCount__), iteratees = this.__iteratees__, iterLength = iteratees ? iteratees.length : 0, resIndex = 0, result = [];
            outer:
                while (length-- && resIndex < takeCount) {
                    index += dir;
                    var iterIndex = -1, value = array[index];
                    while (++iterIndex < iterLength) {
                        var data = iteratees[iterIndex], iteratee = data.iteratee, type = data.type;
                        if (type == LAZY_DROP_WHILE_FLAG) {
                            if (data.done && (isRight ? index > data.index : index < data.index)) {
                                data.count = 0;
                                data.done = false;
                            }
                            data.index = index;
                            if (!data.done) {
                                var limit = data.limit;
                                if (!(data.done = limit > -1 ? data.count++ >= limit : !iteratee(value))) {
                                    continue outer;
                                }
                            }
                        } else {
                            var computed = iteratee(value);
                            if (type == LAZY_MAP_FLAG) {
                                value = computed;
                            } else if (!computed) {
                                if (type == LAZY_FILTER_FLAG) {
                                    continue outer;
                                } else {
                                    break outer;
                                }
                            }
                        }
                    }
                    result[resIndex++] = value;
                }
            return result;
        }
        function MapCache() {
            this.__data__ = {};
        }
        function mapDelete(key) {
            return this.has(key) && delete this.__data__[key];
        }
        function mapGet(key) {
            return key == '__proto__' ? undefined : this.__data__[key];
        }
        function mapHas(key) {
            return key != '__proto__' && hasOwnProperty.call(this.__data__, key);
        }
        function mapSet(key, value) {
            if (key != '__proto__') {
                this.__data__[key] = value;
            }
            return this;
        }
        function SetCache(values) {
            var length = values ? values.length : 0;
            this.data = {
                'hash': nativeCreate(null),
                'set': new Set()
            };
            while (length--) {
                this.push(values[length]);
            }
        }
        function cacheIndexOf(cache, value) {
            var data = cache.data, result = typeof value == 'string' || isObject(value) ? data.set.has(value) : data.hash[value];
            return result ? 0 : -1;
        }
        function cachePush(value) {
            var data = this.data;
            if (typeof value == 'string' || isObject(value)) {
                data.set.add(value);
            } else {
                data.hash[value] = true;
            }
        }
        function arrayCopy(source, array) {
            var index = -1, length = source.length;
            array || (array = Array(length));
            while (++index < length) {
                array[index] = source[index];
            }
            return array;
        }
        function arrayEach(array, iteratee) {
            var index = -1, length = array.length;
            while (++index < length) {
                if (iteratee(array[index], index, array) === false) {
                    break;
                }
            }
            return array;
        }
        function arrayEachRight(array, iteratee) {
            var length = array.length;
            while (length--) {
                if (iteratee(array[length], length, array) === false) {
                    break;
                }
            }
            return array;
        }
        function arrayEvery(array, predicate) {
            var index = -1, length = array.length;
            while (++index < length) {
                if (!predicate(array[index], index, array)) {
                    return false;
                }
            }
            return true;
        }
        function arrayExtremum(array, iteratee, comparator, exValue) {
            var index = -1, length = array.length, computed = exValue, result = computed;
            while (++index < length) {
                var value = array[index], current = +iteratee(value);
                if (comparator(current, computed)) {
                    computed = current;
                    result = value;
                }
            }
            return result;
        }
        function arrayFilter(array, predicate) {
            var index = -1, length = array.length, resIndex = -1, result = [];
            while (++index < length) {
                var value = array[index];
                if (predicate(value, index, array)) {
                    result[++resIndex] = value;
                }
            }
            return result;
        }
        function arrayMap(array, iteratee) {
            var index = -1, length = array.length, result = Array(length);
            while (++index < length) {
                result[index] = iteratee(array[index], index, array);
            }
            return result;
        }
        function arrayReduce(array, iteratee, accumulator, initFromArray) {
            var index = -1, length = array.length;
            if (initFromArray && length) {
                accumulator = array[++index];
            }
            while (++index < length) {
                accumulator = iteratee(accumulator, array[index], index, array);
            }
            return accumulator;
        }
        function arrayReduceRight(array, iteratee, accumulator, initFromArray) {
            var length = array.length;
            if (initFromArray && length) {
                accumulator = array[--length];
            }
            while (length--) {
                accumulator = iteratee(accumulator, array[length], length, array);
            }
            return accumulator;
        }
        function arraySome(array, predicate) {
            var index = -1, length = array.length;
            while (++index < length) {
                if (predicate(array[index], index, array)) {
                    return true;
                }
            }
            return false;
        }
        function arraySum(array) {
            var length = array.length, result = 0;
            while (length--) {
                result += +array[length] || 0;
            }
            return result;
        }
        function assignDefaults(objectValue, sourceValue) {
            return objectValue === undefined ? sourceValue : objectValue;
        }
        function assignOwnDefaults(objectValue, sourceValue, key, object) {
            return objectValue === undefined || !hasOwnProperty.call(object, key) ? sourceValue : objectValue;
        }
        function assignWith(object, source, customizer) {
            var index = -1, props = keys(source), length = props.length;
            while (++index < length) {
                var key = props[index], value = object[key], result = customizer(value, source[key], key, object, source);
                if ((result === result ? result !== value : value === value) || value === undefined && !(key in object)) {
                    object[key] = result;
                }
            }
            return object;
        }
        function baseAssign(object, source) {
            return source == null ? object : baseCopy(source, keys(source), object);
        }
        function baseAt(collection, props) {
            var index = -1, isNil = collection == null, isArr = !isNil && isArrayLike(collection), length = isArr ? collection.length : 0, propsLength = props.length, result = Array(propsLength);
            while (++index < propsLength) {
                var key = props[index];
                if (isArr) {
                    result[index] = isIndex(key, length) ? collection[key] : undefined;
                } else {
                    result[index] = isNil ? undefined : collection[key];
                }
            }
            return result;
        }
        function baseCopy(source, props, object) {
            object || (object = {});
            var index = -1, length = props.length;
            while (++index < length) {
                var key = props[index];
                object[key] = source[key];
            }
            return object;
        }
        function baseCallback(func, thisArg, argCount) {
            var type = typeof func;
            if (type == 'function') {
                return thisArg === undefined ? func : bindCallback(func, thisArg, argCount);
            }
            if (func == null) {
                return identity;
            }
            if (type == 'object') {
                return baseMatches(func);
            }
            return thisArg === undefined ? property(func) : baseMatchesProperty(func, thisArg);
        }
        function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
            var result;
            if (customizer) {
                result = object ? customizer(value, key, object) : customizer(value);
            }
            if (result !== undefined) {
                return result;
            }
            if (!isObject(value)) {
                return value;
            }
            var isArr = isArray(value);
            if (isArr) {
                result = initCloneArray(value);
                if (!isDeep) {
                    return arrayCopy(value, result);
                }
            } else {
                var tag = objToString.call(value), isFunc = tag == funcTag;
                if (tag == objectTag || tag == argsTag || isFunc && !object) {
                    result = initCloneObject(isFunc ? {} : value);
                    if (!isDeep) {
                        return baseAssign(result, value);
                    }
                } else {
                    return cloneableTags[tag] ? initCloneByTag(value, tag, isDeep) : object ? value : {};
                }
            }
            stackA || (stackA = []);
            stackB || (stackB = []);
            var length = stackA.length;
            while (length--) {
                if (stackA[length] == value) {
                    return stackB[length];
                }
            }
            stackA.push(value);
            stackB.push(result);
            (isArr ? arrayEach : baseForOwn)(value, function (subValue, key) {
                result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
            });
            return result;
        }
        var baseCreate = function () {
            function object() {
            }
            return function (prototype) {
                if (isObject(prototype)) {
                    object.prototype = prototype;
                    var result = new object();
                    object.prototype = null;
                }
                return result || {};
            };
        }();
        function baseDelay(func, wait, args) {
            if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            return setTimeout(function () {
                func.apply(undefined, args);
            }, wait);
        }
        function baseDifference(array, values) {
            var length = array ? array.length : 0, result = [];
            if (!length) {
                return result;
            }
            var index = -1, indexOf = getIndexOf(), isCommon = indexOf == baseIndexOf, cache = isCommon && values.length >= 200 ? createCache(values) : null, valuesLength = values.length;
            if (cache) {
                indexOf = cacheIndexOf;
                isCommon = false;
                values = cache;
            }
            outer:
                while (++index < length) {
                    var value = array[index];
                    if (isCommon && value === value) {
                        var valuesIndex = valuesLength;
                        while (valuesIndex--) {
                            if (values[valuesIndex] === value) {
                                continue outer;
                            }
                        }
                        result.push(value);
                    } else if (indexOf(values, value, 0) < 0) {
                        result.push(value);
                    }
                }
            return result;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
            var result = true;
            baseEach(collection, function (value, index, collection) {
                result = !!predicate(value, index, collection);
                return result;
            });
            return result;
        }
        function baseExtremum(collection, iteratee, comparator, exValue) {
            var computed = exValue, result = computed;
            baseEach(collection, function (value, index, collection) {
                var current = +iteratee(value, index, collection);
                if (comparator(current, computed) || current === exValue && current === result) {
                    computed = current;
                    result = value;
                }
            });
            return result;
        }
        function baseFill(array, value, start, end) {
            var length = array.length;
            start = start == null ? 0 : +start || 0;
            if (start < 0) {
                start = -start > length ? 0 : length + start;
            }
            end = end === undefined || end > length ? length : +end || 0;
            if (end < 0) {
                end += length;
            }
            length = start > end ? 0 : end >>> 0;
            start >>>= 0;
            while (start < length) {
                array[start++] = value;
            }
            return array;
        }
        function baseFilter(collection, predicate) {
            var result = [];
            baseEach(collection, function (value, index, collection) {
                if (predicate(value, index, collection)) {
                    result.push(value);
                }
            });
            return result;
        }
        function baseFind(collection, predicate, eachFunc, retKey) {
            var result;
            eachFunc(collection, function (value, key, collection) {
                if (predicate(value, key, collection)) {
                    result = retKey ? key : value;
                    return false;
                }
            });
            return result;
        }
        function baseFlatten(array, isDeep, isStrict) {
            var index = -1, length = array.length, resIndex = -1, result = [];
            while (++index < length) {
                var value = array[index];
                if (isObjectLike(value) && isArrayLike(value) && (isStrict || isArray(value) || isArguments(value))) {
                    if (isDeep) {
                        value = baseFlatten(value, isDeep, isStrict);
                    }
                    var valIndex = -1, valLength = value.length;
                    while (++valIndex < valLength) {
                        result[++resIndex] = value[valIndex];
                    }
                } else if (!isStrict) {
                    result[++resIndex] = value;
                }
            }
            return result;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForIn(object, iteratee) {
            return baseFor(object, iteratee, keysIn);
        }
        function baseForOwn(object, iteratee) {
            return baseFor(object, iteratee, keys);
        }
        function baseForOwnRight(object, iteratee) {
            return baseForRight(object, iteratee, keys);
        }
        function baseFunctions(object, props) {
            var index = -1, length = props.length, resIndex = -1, result = [];
            while (++index < length) {
                var key = props[index];
                if (isFunction(object[key])) {
                    result[++resIndex] = key;
                }
            }
            return result;
        }
        function baseGet(object, path, pathKey) {
            if (object == null) {
                return;
            }
            if (pathKey !== undefined && pathKey in toObject(object)) {
                path = [pathKey];
            }
            var index = 0, length = path.length;
            while (object != null && index < length) {
                object = object[path[index++]];
            }
            return index && index == length ? object : undefined;
        }
        function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
            if (value === other) {
                return true;
            }
            if (value == null || other == null || !isObject(value) && !isObjectLike(other)) {
                return value !== value && other !== other;
            }
            return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
        }
        function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
            var objIsArr = isArray(object), othIsArr = isArray(other), objTag = arrayTag, othTag = arrayTag;
            if (!objIsArr) {
                objTag = objToString.call(object);
                if (objTag == argsTag) {
                    objTag = objectTag;
                } else if (objTag != objectTag) {
                    objIsArr = isTypedArray(object);
                }
            }
            if (!othIsArr) {
                othTag = objToString.call(other);
                if (othTag == argsTag) {
                    othTag = objectTag;
                } else if (othTag != objectTag) {
                    othIsArr = isTypedArray(other);
                }
            }
            var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
            if (isSameTag && !(objIsArr || objIsObj)) {
                return equalByTag(object, other, objTag);
            }
            if (!isLoose) {
                var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'), othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
                if (objIsWrapped || othIsWrapped) {
                    return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
                }
            }
            if (!isSameTag) {
                return false;
            }
            stackA || (stackA = []);
            stackB || (stackB = []);
            var length = stackA.length;
            while (length--) {
                if (stackA[length] == object) {
                    return stackB[length] == other;
                }
            }
            stackA.push(object);
            stackB.push(other);
            var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);
            stackA.pop();
            stackB.pop();
            return result;
        }
        function baseIsMatch(object, matchData, customizer) {
            var index = matchData.length, length = index, noCustomizer = !customizer;
            if (object == null) {
                return !length;
            }
            object = toObject(object);
            while (index--) {
                var data = matchData[index];
                if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
                    return false;
                }
            }
            while (++index < length) {
                data = matchData[index];
                var key = data[0], objValue = object[key], srcValue = data[1];
                if (noCustomizer && data[2]) {
                    if (objValue === undefined && !(key in object)) {
                        return false;
                    }
                } else {
                    var result = customizer ? customizer(objValue, srcValue, key) : undefined;
                    if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
                        return false;
                    }
                }
            }
            return true;
        }
        function baseMap(collection, iteratee) {
            var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
            baseEach(collection, function (value, key, collection) {
                result[++index] = iteratee(value, key, collection);
            });
            return result;
        }
        function baseMatches(source) {
            var matchData = getMatchData(source);
            if (matchData.length == 1 && matchData[0][2]) {
                var key = matchData[0][0], value = matchData[0][1];
                return function (object) {
                    if (object == null) {
                        return false;
                    }
                    return object[key] === value && (value !== undefined || key in toObject(object));
                };
            }
            return function (object) {
                return baseIsMatch(object, matchData);
            };
        }
        function baseMatchesProperty(path, srcValue) {
            var isArr = isArray(path), isCommon = isKey(path) && isStrictComparable(srcValue), pathKey = path + '';
            path = toPath(path);
            return function (object) {
                if (object == null) {
                    return false;
                }
                var key = pathKey;
                object = toObject(object);
                if ((isArr || !isCommon) && !(key in object)) {
                    object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
                    if (object == null) {
                        return false;
                    }
                    key = last(path);
                    object = toObject(object);
                }
                return object[key] === srcValue ? srcValue !== undefined || key in object : baseIsEqual(srcValue, object[key], undefined, true);
            };
        }
        function baseMerge(object, source, customizer, stackA, stackB) {
            if (!isObject(object)) {
                return object;
            }
            var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)), props = isSrcArr ? null : keys(source);
            arrayEach(props || source, function (srcValue, key) {
                if (props) {
                    key = srcValue;
                    srcValue = source[key];
                }
                if (isObjectLike(srcValue)) {
                    stackA || (stackA = []);
                    stackB || (stackB = []);
                    baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
                } else {
                    var value = object[key], result = customizer ? customizer(value, srcValue, key, object, source) : undefined, isCommon = result === undefined;
                    if (isCommon) {
                        result = srcValue;
                    }
                    if ((result !== undefined || isSrcArr && !(key in object)) && (isCommon || (result === result ? result !== value : value === value))) {
                        object[key] = result;
                    }
                }
            });
            return object;
        }
        function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
            var length = stackA.length, srcValue = source[key];
            while (length--) {
                if (stackA[length] == srcValue) {
                    object[key] = stackB[length];
                    return;
                }
            }
            var value = object[key], result = customizer ? customizer(value, srcValue, key, object, source) : undefined, isCommon = result === undefined;
            if (isCommon) {
                result = srcValue;
                if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
                    result = isArray(value) ? value : isArrayLike(value) ? arrayCopy(value) : [];
                } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
                    result = isArguments(value) ? toPlainObject(value) : isPlainObject(value) ? value : {};
                } else {
                    isCommon = false;
                }
            }
            stackA.push(srcValue);
            stackB.push(result);
            if (isCommon) {
                object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
            } else if (result === result ? result !== value : value === value) {
                object[key] = result;
            }
        }
        function baseProperty(key) {
            return function (object) {
                return object == null ? undefined : object[key];
            };
        }
        function basePropertyDeep(path) {
            var pathKey = path + '';
            path = toPath(path);
            return function (object) {
                return baseGet(object, path, pathKey);
            };
        }
        function basePullAt(array, indexes) {
            var length = array ? indexes.length : 0;
            while (length--) {
                var index = indexes[length];
                if (index != previous && isIndex(index)) {
                    var previous = index;
                    splice.call(array, index, 1);
                }
            }
            return array;
        }
        function baseRandom(min, max) {
            return min + floor(nativeRandom() * (max - min + 1));
        }
        function baseReduce(collection, iteratee, accumulator, initFromCollection, eachFunc) {
            eachFunc(collection, function (value, index, collection) {
                accumulator = initFromCollection ? (initFromCollection = false, value) : iteratee(accumulator, value, index, collection);
            });
            return accumulator;
        }
        var baseSetData = !metaMap ? identity : function (func, data) {
            metaMap.set(func, data);
            return func;
        };
        function baseSlice(array, start, end) {
            var index = -1, length = array.length;
            start = start == null ? 0 : +start || 0;
            if (start < 0) {
                start = -start > length ? 0 : length + start;
            }
            end = end === undefined || end > length ? length : +end || 0;
            if (end < 0) {
                end += length;
            }
            length = start > end ? 0 : end - start >>> 0;
            start >>>= 0;
            var result = Array(length);
            while (++index < length) {
                result[index] = array[index + start];
            }
            return result;
        }
        function baseSome(collection, predicate) {
            var result;
            baseEach(collection, function (value, index, collection) {
                result = predicate(value, index, collection);
                return !result;
            });
            return !!result;
        }
        function baseSortBy(array, comparer) {
            var length = array.length;
            array.sort(comparer);
            while (length--) {
                array[length] = array[length].value;
            }
            return array;
        }
        function baseSortByOrder(collection, iteratees, orders) {
            var callback = getCallback(), index = -1;
            iteratees = arrayMap(iteratees, function (iteratee) {
                return callback(iteratee);
            });
            var result = baseMap(collection, function (value) {
                var criteria = arrayMap(iteratees, function (iteratee) {
                    return iteratee(value);
                });
                return {
                    'criteria': criteria,
                    'index': ++index,
                    'value': value
                };
            });
            return baseSortBy(result, function (object, other) {
                return compareMultiple(object, other, orders);
            });
        }
        function baseSum(collection, iteratee) {
            var result = 0;
            baseEach(collection, function (value, index, collection) {
                result += +iteratee(value, index, collection) || 0;
            });
            return result;
        }
        function baseUniq(array, iteratee) {
            var index = -1, indexOf = getIndexOf(), length = array.length, isCommon = indexOf == baseIndexOf, isLarge = isCommon && length >= 200, seen = isLarge ? createCache() : null, result = [];
            if (seen) {
                indexOf = cacheIndexOf;
                isCommon = false;
            } else {
                isLarge = false;
                seen = iteratee ? [] : result;
            }
            outer:
                while (++index < length) {
                    var value = array[index], computed = iteratee ? iteratee(value, index, array) : value;
                    if (isCommon && value === value) {
                        var seenIndex = seen.length;
                        while (seenIndex--) {
                            if (seen[seenIndex] === computed) {
                                continue outer;
                            }
                        }
                        if (iteratee) {
                            seen.push(computed);
                        }
                        result.push(value);
                    } else if (indexOf(seen, computed, 0) < 0) {
                        if (iteratee || isLarge) {
                            seen.push(computed);
                        }
                        result.push(value);
                    }
                }
            return result;
        }
        function baseValues(object, props) {
            var index = -1, length = props.length, result = Array(length);
            while (++index < length) {
                result[index] = object[props[index]];
            }
            return result;
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
            var length = array.length, index = fromRight ? length : -1;
            while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
            }
            return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
            var result = value;
            if (result instanceof LazyWrapper) {
                result = result.value();
            }
            var index = -1, length = actions.length;
            while (++index < length) {
                var args = [result], action = actions[index];
                push.apply(args, action.args);
                result = action.func.apply(action.thisArg, args);
            }
            return result;
        }
        function binaryIndex(array, value, retHighest) {
            var low = 0, high = array ? array.length : low;
            if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
                while (low < high) {
                    var mid = low + high >>> 1, computed = array[mid];
                    if ((retHighest ? computed <= value : computed < value) && computed !== null) {
                        low = mid + 1;
                    } else {
                        high = mid;
                    }
                }
                return high;
            }
            return binaryIndexBy(array, value, identity, retHighest);
        }
        function binaryIndexBy(array, value, iteratee, retHighest) {
            value = iteratee(value);
            var low = 0, high = array ? array.length : 0, valIsNaN = value !== value, valIsNull = value === null, valIsUndef = value === undefined;
            while (low < high) {
                var mid = floor((low + high) / 2), computed = iteratee(array[mid]), isDef = computed !== undefined, isReflexive = computed === computed;
                if (valIsNaN) {
                    var setLow = isReflexive || retHighest;
                } else if (valIsNull) {
                    setLow = isReflexive && isDef && (retHighest || computed != null);
                } else if (valIsUndef) {
                    setLow = isReflexive && (retHighest || isDef);
                } else if (computed == null) {
                    setLow = false;
                } else {
                    setLow = retHighest ? computed <= value : computed < value;
                }
                if (setLow) {
                    low = mid + 1;
                } else {
                    high = mid;
                }
            }
            return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function bindCallback(func, thisArg, argCount) {
            if (typeof func != 'function') {
                return identity;
            }
            if (thisArg === undefined) {
                return func;
            }
            switch (argCount) {
            case 1:
                return function (value) {
                    return func.call(thisArg, value);
                };
            case 3:
                return function (value, index, collection) {
                    return func.call(thisArg, value, index, collection);
                };
            case 4:
                return function (accumulator, value, index, collection) {
                    return func.call(thisArg, accumulator, value, index, collection);
                };
            case 5:
                return function (value, other, key, object, source) {
                    return func.call(thisArg, value, other, key, object, source);
                };
            }
            return function () {
                return func.apply(thisArg, arguments);
            };
        }
        function bufferClone(buffer) {
            return bufferSlice.call(buffer, 0);
        }
        if (!bufferSlice) {
            bufferClone = !(ArrayBuffer && Uint8Array) ? constant(null) : function (buffer) {
                var byteLength = buffer.byteLength, floatLength = Float64Array ? floor(byteLength / FLOAT64_BYTES_PER_ELEMENT) : 0, offset = floatLength * FLOAT64_BYTES_PER_ELEMENT, result = new ArrayBuffer(byteLength);
                if (floatLength) {
                    var view = new Float64Array(result, 0, floatLength);
                    view.set(new Float64Array(buffer, 0, floatLength));
                }
                if (byteLength != offset) {
                    view = new Uint8Array(result, offset);
                    view.set(new Uint8Array(buffer, offset));
                }
                return result;
            };
        }
        function composeArgs(args, partials, holders) {
            var holdersLength = holders.length, argsIndex = -1, argsLength = nativeMax(args.length - holdersLength, 0), leftIndex = -1, leftLength = partials.length, result = Array(argsLength + leftLength);
            while (++leftIndex < leftLength) {
                result[leftIndex] = partials[leftIndex];
            }
            while (++argsIndex < holdersLength) {
                result[holders[argsIndex]] = args[argsIndex];
            }
            while (argsLength--) {
                result[leftIndex++] = args[argsIndex++];
            }
            return result;
        }
        function composeArgsRight(args, partials, holders) {
            var holdersIndex = -1, holdersLength = holders.length, argsIndex = -1, argsLength = nativeMax(args.length - holdersLength, 0), rightIndex = -1, rightLength = partials.length, result = Array(argsLength + rightLength);
            while (++argsIndex < argsLength) {
                result[argsIndex] = args[argsIndex];
            }
            var offset = argsIndex;
            while (++rightIndex < rightLength) {
                result[offset + rightIndex] = partials[rightIndex];
            }
            while (++holdersIndex < holdersLength) {
                result[offset + holders[holdersIndex]] = args[argsIndex++];
            }
            return result;
        }
        function createAggregator(setter, initializer) {
            return function (collection, iteratee, thisArg) {
                var result = initializer ? initializer() : {};
                iteratee = getCallback(iteratee, thisArg, 3);
                if (isArray(collection)) {
                    var index = -1, length = collection.length;
                    while (++index < length) {
                        var value = collection[index];
                        setter(result, value, iteratee(value, index, collection), collection);
                    }
                } else {
                    baseEach(collection, function (value, key, collection) {
                        setter(result, value, iteratee(value, key, collection), collection);
                    });
                }
                return result;
            };
        }
        function createAssigner(assigner) {
            return restParam(function (object, sources) {
                var index = -1, length = object == null ? 0 : sources.length, customizer = length > 2 ? sources[length - 2] : undefined, guard = length > 2 ? sources[2] : undefined, thisArg = length > 1 ? sources[length - 1] : undefined;
                if (typeof customizer == 'function') {
                    customizer = bindCallback(customizer, thisArg, 5);
                    length -= 2;
                } else {
                    customizer = typeof thisArg == 'function' ? thisArg : undefined;
                    length -= customizer ? 1 : 0;
                }
                if (guard && isIterateeCall(sources[0], sources[1], guard)) {
                    customizer = length < 3 ? undefined : customizer;
                    length = 1;
                }
                while (++index < length) {
                    var source = sources[index];
                    if (source) {
                        assigner(object, source, customizer);
                    }
                }
                return object;
            });
        }
        function createBaseEach(eachFunc, fromRight) {
            return function (collection, iteratee) {
                var length = collection ? getLength(collection) : 0;
                if (!isLength(length)) {
                    return eachFunc(collection, iteratee);
                }
                var index = fromRight ? length : -1, iterable = toObject(collection);
                while (fromRight ? index-- : ++index < length) {
                    if (iteratee(iterable[index], index, iterable) === false) {
                        break;
                    }
                }
                return collection;
            };
        }
        function createBaseFor(fromRight) {
            return function (object, iteratee, keysFunc) {
                var iterable = toObject(object), props = keysFunc(object), length = props.length, index = fromRight ? length : -1;
                while (fromRight ? index-- : ++index < length) {
                    var key = props[index];
                    if (iteratee(iterable[key], key, iterable) === false) {
                        break;
                    }
                }
                return object;
            };
        }
        function createBindWrapper(func, thisArg) {
            var Ctor = createCtorWrapper(func);
            function wrapper() {
                var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
                return fn.apply(thisArg, arguments);
            }
            return wrapper;
        }
        var createCache = !(nativeCreate && Set) ? constant(null) : function (values) {
            return new SetCache(values);
        };
        function createCompounder(callback) {
            return function (string) {
                var index = -1, array = words(deburr(string)), length = array.length, result = '';
                while (++index < length) {
                    result = callback(result, array[index], index);
                }
                return result;
            };
        }
        function createCtorWrapper(Ctor) {
            return function () {
                var args = arguments;
                switch (args.length) {
                case 0:
                    return new Ctor();
                case 1:
                    return new Ctor(args[0]);
                case 2:
                    return new Ctor(args[0], args[1]);
                case 3:
                    return new Ctor(args[0], args[1], args[2]);
                case 4:
                    return new Ctor(args[0], args[1], args[2], args[3]);
                case 5:
                    return new Ctor(args[0], args[1], args[2], args[3], args[4]);
                }
                var thisBinding = baseCreate(Ctor.prototype), result = Ctor.apply(thisBinding, args);
                return isObject(result) ? result : thisBinding;
            };
        }
        function createCurry(flag) {
            function curryFunc(func, arity, guard) {
                if (guard && isIterateeCall(func, arity, guard)) {
                    arity = null;
                }
                var result = createWrapper(func, flag, null, null, null, null, null, arity);
                result.placeholder = curryFunc.placeholder;
                return result;
            }
            return curryFunc;
        }
        function createExtremum(comparator, exValue) {
            return function (collection, iteratee, thisArg) {
                if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
                    iteratee = null;
                }
                iteratee = getCallback(iteratee, thisArg, 3);
                if (iteratee.length == 1) {
                    collection = toIterable(collection);
                    var result = arrayExtremum(collection, iteratee, comparator, exValue);
                    if (!(collection.length && result === exValue)) {
                        return result;
                    }
                }
                return baseExtremum(collection, iteratee, comparator, exValue);
            };
        }
        function createFind(eachFunc, fromRight) {
            return function (collection, predicate, thisArg) {
                predicate = getCallback(predicate, thisArg, 3);
                if (isArray(collection)) {
                    var index = baseFindIndex(collection, predicate, fromRight);
                    return index > -1 ? collection[index] : undefined;
                }
                return baseFind(collection, predicate, eachFunc);
            };
        }
        function createFindIndex(fromRight) {
            return function (array, predicate, thisArg) {
                if (!(array && array.length)) {
                    return -1;
                }
                predicate = getCallback(predicate, thisArg, 3);
                return baseFindIndex(array, predicate, fromRight);
            };
        }
        function createFindKey(objectFunc) {
            return function (object, predicate, thisArg) {
                predicate = getCallback(predicate, thisArg, 3);
                return baseFind(object, predicate, objectFunc, true);
            };
        }
        function createFlow(fromRight) {
            return function () {
                var wrapper, length = arguments.length, index = fromRight ? length : -1, leftIndex = 0, funcs = Array(length);
                while (fromRight ? index-- : ++index < length) {
                    var func = funcs[leftIndex++] = arguments[index];
                    if (typeof func != 'function') {
                        throw new TypeError(FUNC_ERROR_TEXT);
                    }
                    if (!wrapper && LodashWrapper.prototype.thru && getFuncName(func) == 'wrapper') {
                        wrapper = new LodashWrapper([]);
                    }
                }
                index = wrapper ? -1 : length;
                while (++index < length) {
                    func = funcs[index];
                    var funcName = getFuncName(func), data = funcName == 'wrapper' ? getData(func) : null;
                    if (data && isLaziable(data[0]) && data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) && !data[4].length && data[9] == 1) {
                        wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
                    } else {
                        wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
                    }
                }
                return function () {
                    var args = arguments;
                    if (wrapper && args.length == 1 && isArray(args[0])) {
                        return wrapper.plant(args[0]).value();
                    }
                    var index = 0, result = length ? funcs[index].apply(this, args) : args[0];
                    while (++index < length) {
                        result = funcs[index].call(this, result);
                    }
                    return result;
                };
            };
        }
        function createForEach(arrayFunc, eachFunc) {
            return function (collection, iteratee, thisArg) {
                return typeof iteratee == 'function' && thisArg === undefined && isArray(collection) ? arrayFunc(collection, iteratee) : eachFunc(collection, bindCallback(iteratee, thisArg, 3));
            };
        }
        function createForIn(objectFunc) {
            return function (object, iteratee, thisArg) {
                if (typeof iteratee != 'function' || thisArg !== undefined) {
                    iteratee = bindCallback(iteratee, thisArg, 3);
                }
                return objectFunc(object, iteratee, keysIn);
            };
        }
        function createForOwn(objectFunc) {
            return function (object, iteratee, thisArg) {
                if (typeof iteratee != 'function' || thisArg !== undefined) {
                    iteratee = bindCallback(iteratee, thisArg, 3);
                }
                return objectFunc(object, iteratee);
            };
        }
        function createObjectMapper(isMapKeys) {
            return function (object, iteratee, thisArg) {
                var result = {};
                iteratee = getCallback(iteratee, thisArg, 3);
                baseForOwn(object, function (value, key, object) {
                    var mapped = iteratee(value, key, object);
                    key = isMapKeys ? mapped : key;
                    value = isMapKeys ? value : mapped;
                    result[key] = value;
                });
                return result;
            };
        }
        function createPadDir(fromRight) {
            return function (string, length, chars) {
                string = baseToString(string);
                return (fromRight ? string : '') + createPadding(string, length, chars) + (fromRight ? '' : string);
            };
        }
        function createPartial(flag) {
            var partialFunc = restParam(function (func, partials) {
                var holders = replaceHolders(partials, partialFunc.placeholder);
                return createWrapper(func, flag, null, partials, holders);
            });
            return partialFunc;
        }
        function createReduce(arrayFunc, eachFunc) {
            return function (collection, iteratee, accumulator, thisArg) {
                var initFromArray = arguments.length < 3;
                return typeof iteratee == 'function' && thisArg === undefined && isArray(collection) ? arrayFunc(collection, iteratee, accumulator, initFromArray) : baseReduce(collection, getCallback(iteratee, thisArg, 4), accumulator, initFromArray, eachFunc);
            };
        }
        function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
            var isAry = bitmask & ARY_FLAG, isBind = bitmask & BIND_FLAG, isBindKey = bitmask & BIND_KEY_FLAG, isCurry = bitmask & CURRY_FLAG, isCurryBound = bitmask & CURRY_BOUND_FLAG, isCurryRight = bitmask & CURRY_RIGHT_FLAG, Ctor = isBindKey ? null : createCtorWrapper(func);
            function wrapper() {
                var length = arguments.length, index = length, args = Array(length);
                while (index--) {
                    args[index] = arguments[index];
                }
                if (partials) {
                    args = composeArgs(args, partials, holders);
                }
                if (partialsRight) {
                    args = composeArgsRight(args, partialsRight, holdersRight);
                }
                if (isCurry || isCurryRight) {
                    var placeholder = wrapper.placeholder, argsHolders = replaceHolders(args, placeholder);
                    length -= argsHolders.length;
                    if (length < arity) {
                        var newArgPos = argPos ? arrayCopy(argPos) : null, newArity = nativeMax(arity - length, 0), newsHolders = isCurry ? argsHolders : null, newHoldersRight = isCurry ? null : argsHolders, newPartials = isCurry ? args : null, newPartialsRight = isCurry ? null : args;
                        bitmask |= isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG;
                        bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);
                        if (!isCurryBound) {
                            bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
                        }
                        var newData = [
                                func,
                                bitmask,
                                thisArg,
                                newPartials,
                                newsHolders,
                                newPartialsRight,
                                newHoldersRight,
                                newArgPos,
                                ary,
                                newArity
                            ], result = createHybridWrapper.apply(undefined, newData);
                        if (isLaziable(func)) {
                            setData(result, newData);
                        }
                        result.placeholder = placeholder;
                        return result;
                    }
                }
                var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
                if (argPos) {
                    args = reorder(args, argPos);
                }
                if (isAry && ary < args.length) {
                    args.length = ary;
                }
                if (this && this !== root && this instanceof wrapper) {
                    fn = Ctor || createCtorWrapper(func);
                }
                return fn.apply(thisBinding, args);
            }
            return wrapper;
        }
        function createPadding(string, length, chars) {
            var strLength = string.length;
            length = +length;
            if (strLength >= length || !nativeIsFinite(length)) {
                return '';
            }
            var padLength = length - strLength;
            chars = chars == null ? ' ' : chars + '';
            return repeat(chars, ceil(padLength / chars.length)).slice(0, padLength);
        }
        function createPartialWrapper(func, bitmask, thisArg, partials) {
            var isBind = bitmask & BIND_FLAG, Ctor = createCtorWrapper(func);
            function wrapper() {
                var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array(argsLength + leftLength);
                while (++leftIndex < leftLength) {
                    args[leftIndex] = partials[leftIndex];
                }
                while (argsLength--) {
                    args[leftIndex++] = arguments[++argsIndex];
                }
                var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
                return fn.apply(isBind ? thisArg : this, args);
            }
            return wrapper;
        }
        function createSortedIndex(retHighest) {
            return function (array, value, iteratee, thisArg) {
                var callback = getCallback(iteratee);
                return iteratee == null && callback === baseCallback ? binaryIndex(array, value, retHighest) : binaryIndexBy(array, value, callback(iteratee, thisArg, 1), retHighest);
            };
        }
        function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
            var isBindKey = bitmask & BIND_KEY_FLAG;
            if (!isBindKey && typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            var length = partials ? partials.length : 0;
            if (!length) {
                bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
                partials = holders = null;
            }
            length -= holders ? holders.length : 0;
            if (bitmask & PARTIAL_RIGHT_FLAG) {
                var partialsRight = partials, holdersRight = holders;
                partials = holders = null;
            }
            var data = isBindKey ? null : getData(func), newData = [
                    func,
                    bitmask,
                    thisArg,
                    partials,
                    holders,
                    partialsRight,
                    holdersRight,
                    argPos,
                    ary,
                    arity
                ];
            if (data) {
                mergeData(newData, data);
                bitmask = newData[1];
                arity = newData[9];
            }
            newData[9] = arity == null ? isBindKey ? 0 : func.length : nativeMax(arity - length, 0) || 0;
            if (bitmask == BIND_FLAG) {
                var result = createBindWrapper(newData[0], newData[2]);
            } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !newData[4].length) {
                result = createPartialWrapper.apply(undefined, newData);
            } else {
                result = createHybridWrapper.apply(undefined, newData);
            }
            var setter = data ? baseSetData : setData;
            return setter(result, newData);
        }
        function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
            var index = -1, arrLength = array.length, othLength = other.length;
            if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
                return false;
            }
            while (++index < arrLength) {
                var arrValue = array[index], othValue = other[index], result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;
                if (result !== undefined) {
                    if (result) {
                        continue;
                    }
                    return false;
                }
                if (isLoose) {
                    if (!arraySome(other, function (othValue) {
                            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
                        })) {
                        return false;
                    }
                } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
                    return false;
                }
            }
            return true;
        }
        function equalByTag(object, other, tag) {
            switch (tag) {
            case boolTag:
            case dateTag:
                return +object == +other;
            case errorTag:
                return object.name == other.name && object.message == other.message;
            case numberTag:
                return object != +object ? other != +other : object == +other;
            case regexpTag:
            case stringTag:
                return object == other + '';
            }
            return false;
        }
        function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
            var objProps = keys(object), objLength = objProps.length, othProps = keys(other), othLength = othProps.length;
            if (objLength != othLength && !isLoose) {
                return false;
            }
            var index = objLength;
            while (index--) {
                var key = objProps[index];
                if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
                    return false;
                }
            }
            var skipCtor = isLoose;
            while (++index < objLength) {
                key = objProps[index];
                var objValue = object[key], othValue = other[key], result = customizer ? customizer(isLoose ? othValue : objValue, isLoose ? objValue : othValue, key) : undefined;
                if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
                    return false;
                }
                skipCtor || (skipCtor = key == 'constructor');
            }
            if (!skipCtor) {
                var objCtor = object.constructor, othCtor = other.constructor;
                if (objCtor != othCtor && ('constructor' in object && 'constructor' in other) && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
                    return false;
                }
            }
            return true;
        }
        function getCallback(func, thisArg, argCount) {
            var result = lodash.callback || callback;
            result = result === callback ? baseCallback : result;
            return argCount ? result(func, thisArg, argCount) : result;
        }
        var getData = !metaMap ? noop : function (func) {
            return metaMap.get(func);
        };
        function getFuncName(func) {
            var result = func.name, array = realNames[result], length = array ? array.length : 0;
            while (length--) {
                var data = array[length], otherFunc = data.func;
                if (otherFunc == null || otherFunc == func) {
                    return data.name;
                }
            }
            return result;
        }
        function getIndexOf(collection, target, fromIndex) {
            var result = lodash.indexOf || indexOf;
            result = result === indexOf ? baseIndexOf : result;
            return collection ? result(collection, target, fromIndex) : result;
        }
        var getLength = baseProperty('length');
        function getMatchData(object) {
            var result = pairs(object), length = result.length;
            while (length--) {
                result[length][2] = isStrictComparable(result[length][1]);
            }
            return result;
        }
        function getNative(object, key) {
            var value = object == null ? undefined : object[key];
            return isNative(value) ? value : undefined;
        }
        function getView(start, end, transforms) {
            var index = -1, length = transforms ? transforms.length : 0;
            while (++index < length) {
                var data = transforms[index], size = data.size;
                switch (data.type) {
                case 'drop':
                    start += size;
                    break;
                case 'dropRight':
                    end -= size;
                    break;
                case 'take':
                    end = nativeMin(end, start + size);
                    break;
                case 'takeRight':
                    start = nativeMax(start, end - size);
                    break;
                }
            }
            return {
                'start': start,
                'end': end
            };
        }
        function initCloneArray(array) {
            var length = array.length, result = new array.constructor(length);
            if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
                result.index = array.index;
                result.input = array.input;
            }
            return result;
        }
        function initCloneObject(object) {
            var Ctor = object.constructor;
            if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
                Ctor = Object;
            }
            return new Ctor();
        }
        function initCloneByTag(object, tag, isDeep) {
            var Ctor = object.constructor;
            switch (tag) {
            case arrayBufferTag:
                return bufferClone(object);
            case boolTag:
            case dateTag:
                return new Ctor(+object);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
                var buffer = object.buffer;
                return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);
            case numberTag:
            case stringTag:
                return new Ctor(object);
            case regexpTag:
                var result = new Ctor(object.source, reFlags.exec(object));
                result.lastIndex = object.lastIndex;
            }
            return result;
        }
        function invokePath(object, path, args) {
            if (object != null && !isKey(path, object)) {
                path = toPath(path);
                object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
                path = last(path);
            }
            var func = object == null ? object : object[path];
            return func == null ? undefined : func.apply(object, args);
        }
        function isArrayLike(value) {
            return value != null && isLength(getLength(value));
        }
        function isIndex(value, length) {
            value = typeof value == 'number' || reIsUint.test(value) ? +value : -1;
            length = length == null ? MAX_SAFE_INTEGER : length;
            return value > -1 && value % 1 == 0 && value < length;
        }
        function isIterateeCall(value, index, object) {
            if (!isObject(object)) {
                return false;
            }
            var type = typeof index;
            if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
                var other = object[index];
                return value === value ? value === other : other !== other;
            }
            return false;
        }
        function isKey(value, object) {
            var type = typeof value;
            if (type == 'string' && reIsPlainProp.test(value) || type == 'number') {
                return true;
            }
            if (isArray(value)) {
                return false;
            }
            var result = !reIsDeepProp.test(value);
            return result || object != null && value in toObject(object);
        }
        function isLaziable(func) {
            var funcName = getFuncName(func);
            if (!(funcName in LazyWrapper.prototype)) {
                return false;
            }
            var other = lodash[funcName];
            if (func === other) {
                return true;
            }
            var data = getData(other);
            return !!data && func === data[0];
        }
        function isLength(value) {
            return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isStrictComparable(value) {
            return value === value && !isObject(value);
        }
        function mergeData(data, source) {
            var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < ARY_FLAG;
            var isCombo = srcBitmask == ARY_FLAG && bitmask == CURRY_FLAG || srcBitmask == ARY_FLAG && bitmask == REARG_FLAG && data[7].length <= source[8] || srcBitmask == (ARY_FLAG | REARG_FLAG) && bitmask == CURRY_FLAG;
            if (!(isCommon || isCombo)) {
                return data;
            }
            if (srcBitmask & BIND_FLAG) {
                data[2] = source[2];
                newBitmask |= bitmask & BIND_FLAG ? 0 : CURRY_BOUND_FLAG;
            }
            var value = source[3];
            if (value) {
                var partials = data[3];
                data[3] = partials ? composeArgs(partials, value, source[4]) : arrayCopy(value);
                data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : arrayCopy(source[4]);
            }
            value = source[5];
            if (value) {
                partials = data[5];
                data[5] = partials ? composeArgsRight(partials, value, source[6]) : arrayCopy(value);
                data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : arrayCopy(source[6]);
            }
            value = source[7];
            if (value) {
                data[7] = arrayCopy(value);
            }
            if (srcBitmask & ARY_FLAG) {
                data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
            }
            if (data[9] == null) {
                data[9] = source[9];
            }
            data[0] = source[0];
            data[1] = newBitmask;
            return data;
        }
        function pickByArray(object, props) {
            object = toObject(object);
            var index = -1, length = props.length, result = {};
            while (++index < length) {
                var key = props[index];
                if (key in object) {
                    result[key] = object[key];
                }
            }
            return result;
        }
        function pickByCallback(object, predicate) {
            var result = {};
            baseForIn(object, function (value, key, object) {
                if (predicate(value, key, object)) {
                    result[key] = value;
                }
            });
            return result;
        }
        function reorder(array, indexes) {
            var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = arrayCopy(array);
            while (length--) {
                var index = indexes[length];
                array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
            }
            return array;
        }
        var setData = function () {
            var count = 0, lastCalled = 0;
            return function (key, value) {
                var stamp = now(), remaining = HOT_SPAN - (stamp - lastCalled);
                lastCalled = stamp;
                if (remaining > 0) {
                    if (++count >= HOT_COUNT) {
                        return key;
                    }
                } else {
                    count = 0;
                }
                return baseSetData(key, value);
            };
        }();
        function shimIsPlainObject(value) {
            var Ctor, support = lodash.support;
            if (!(isObjectLike(value) && objToString.call(value) == objectTag) || !hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor))) {
                return false;
            }
            var result;
            baseForIn(value, function (subValue, key) {
                result = key;
            });
            return result === undefined || hasOwnProperty.call(value, result);
        }
        function shimKeys(object) {
            var props = keysIn(object), propsLength = props.length, length = propsLength && object.length;
            var allowIndexes = !!length && isLength(length) && (isArray(object) || isArguments(object));
            var index = -1, result = [];
            while (++index < propsLength) {
                var key = props[index];
                if (allowIndexes && isIndex(key, length) || hasOwnProperty.call(object, key)) {
                    result.push(key);
                }
            }
            return result;
        }
        function toIterable(value) {
            if (value == null) {
                return [];
            }
            if (!isArrayLike(value)) {
                return values(value);
            }
            return isObject(value) ? value : Object(value);
        }
        function toObject(value) {
            return isObject(value) ? value : Object(value);
        }
        function toPath(value) {
            if (isArray(value)) {
                return value;
            }
            var result = [];
            baseToString(value).replace(rePropName, function (match, number, quote, string) {
                result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
            });
            return result;
        }
        function wrapperClone(wrapper) {
            return wrapper instanceof LazyWrapper ? wrapper.clone() : new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__, arrayCopy(wrapper.__actions__));
        }
        function chunk(array, size, guard) {
            if (guard ? isIterateeCall(array, size, guard) : size == null) {
                size = 1;
            } else {
                size = nativeMax(+size || 1, 1);
            }
            var index = 0, length = array ? array.length : 0, resIndex = -1, result = Array(ceil(length / size));
            while (index < length) {
                result[++resIndex] = baseSlice(array, index, index += size);
            }
            return result;
        }
        function compact(array) {
            var index = -1, length = array ? array.length : 0, resIndex = -1, result = [];
            while (++index < length) {
                var value = array[index];
                if (value) {
                    result[++resIndex] = value;
                }
            }
            return result;
        }
        var difference = restParam(function (array, values) {
            return isArrayLike(array) ? baseDifference(array, baseFlatten(values, false, true)) : [];
        });
        function drop(array, n, guard) {
            var length = array ? array.length : 0;
            if (!length) {
                return [];
            }
            if (guard ? isIterateeCall(array, n, guard) : n == null) {
                n = 1;
            }
            return baseSlice(array, n < 0 ? 0 : n);
        }
        function dropRight(array, n, guard) {
            var length = array ? array.length : 0;
            if (!length) {
                return [];
            }
            if (guard ? isIterateeCall(array, n, guard) : n == null) {
                n = 1;
            }
            n = length - (+n || 0);
            return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array, predicate, thisArg) {
            return array && array.length ? baseWhile(array, getCallback(predicate, thisArg, 3), true, true) : [];
        }
        function dropWhile(array, predicate, thisArg) {
            return array && array.length ? baseWhile(array, getCallback(predicate, thisArg, 3), true) : [];
        }
        function fill(array, value, start, end) {
            var length = array ? array.length : 0;
            if (!length) {
                return [];
            }
            if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
                start = 0;
                end = length;
            }
            return baseFill(array, value, start, end);
        }
        var findIndex = createFindIndex();
        var findLastIndex = createFindIndex(true);
        function first(array) {
            return array ? array[0] : undefined;
        }
        function flatten(array, isDeep, guard) {
            var length = array ? array.length : 0;
            if (guard && isIterateeCall(array, isDeep, guard)) {
                isDeep = false;
            }
            return length ? baseFlatten(array, isDeep) : [];
        }
        function flattenDeep(array) {
            var length = array ? array.length : 0;
            return length ? baseFlatten(array, true) : [];
        }
        function indexOf(array, value, fromIndex) {
            var length = array ? array.length : 0;
            if (!length) {
                return -1;
            }
            if (typeof fromIndex == 'number') {
                fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : fromIndex;
            } else if (fromIndex) {
                var index = binaryIndex(array, value), other = array[index];
                if (value === value ? value === other : other !== other) {
                    return index;
                }
                return -1;
            }
            return baseIndexOf(array, value, fromIndex || 0);
        }
        function initial(array) {
            return dropRight(array, 1);
        }
        var intersection = restParam(function (arrays) {
            var othLength = arrays.length, othIndex = othLength, caches = Array(length), indexOf = getIndexOf(), isCommon = indexOf == baseIndexOf, result = [];
            while (othIndex--) {
                var value = arrays[othIndex] = isArrayLike(value = arrays[othIndex]) ? value : [];
                caches[othIndex] = isCommon && value.length >= 120 ? createCache(othIndex && value) : null;
            }
            var array = arrays[0], index = -1, length = array ? array.length : 0, seen = caches[0];
            outer:
                while (++index < length) {
                    value = array[index];
                    if ((seen ? cacheIndexOf(seen, value) : indexOf(result, value, 0)) < 0) {
                        var othIndex = othLength;
                        while (--othIndex) {
                            var cache = caches[othIndex];
                            if ((cache ? cacheIndexOf(cache, value) : indexOf(arrays[othIndex], value, 0)) < 0) {
                                continue outer;
                            }
                        }
                        if (seen) {
                            seen.push(value);
                        }
                        result.push(value);
                    }
                }
            return result;
        });
        function last(array) {
            var length = array ? array.length : 0;
            return length ? array[length - 1] : undefined;
        }
        function lastIndexOf(array, value, fromIndex) {
            var length = array ? array.length : 0;
            if (!length) {
                return -1;
            }
            var index = length;
            if (typeof fromIndex == 'number') {
                index = (fromIndex < 0 ? nativeMax(length + fromIndex, 0) : nativeMin(fromIndex || 0, length - 1)) + 1;
            } else if (fromIndex) {
                index = binaryIndex(array, value, true) - 1;
                var other = array[index];
                if (value === value ? value === other : other !== other) {
                    return index;
                }
                return -1;
            }
            if (value !== value) {
                return indexOfNaN(array, index, true);
            }
            while (index--) {
                if (array[index] === value) {
                    return index;
                }
            }
            return -1;
        }
        function pull() {
            var args = arguments, array = args[0];
            if (!(array && array.length)) {
                return array;
            }
            var index = 0, indexOf = getIndexOf(), length = args.length;
            while (++index < length) {
                var fromIndex = 0, value = args[index];
                while ((fromIndex = indexOf(array, value, fromIndex)) > -1) {
                    splice.call(array, fromIndex, 1);
                }
            }
            return array;
        }
        var pullAt = restParam(function (array, indexes) {
            indexes = baseFlatten(indexes);
            var result = baseAt(array, indexes);
            basePullAt(array, indexes.sort(baseCompareAscending));
            return result;
        });
        function remove(array, predicate, thisArg) {
            var result = [];
            if (!(array && array.length)) {
                return result;
            }
            var index = -1, indexes = [], length = array.length;
            predicate = getCallback(predicate, thisArg, 3);
            while (++index < length) {
                var value = array[index];
                if (predicate(value, index, array)) {
                    result.push(value);
                    indexes.push(index);
                }
            }
            basePullAt(array, indexes);
            return result;
        }
        function rest(array) {
            return drop(array, 1);
        }
        function slice(array, start, end) {
            var length = array ? array.length : 0;
            if (!length) {
                return [];
            }
            if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
                start = 0;
                end = length;
            }
            return baseSlice(array, start, end);
        }
        var sortedIndex = createSortedIndex();
        var sortedLastIndex = createSortedIndex(true);
        function take(array, n, guard) {
            var length = array ? array.length : 0;
            if (!length) {
                return [];
            }
            if (guard ? isIterateeCall(array, n, guard) : n == null) {
                n = 1;
            }
            return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function takeRight(array, n, guard) {
            var length = array ? array.length : 0;
            if (!length) {
                return [];
            }
            if (guard ? isIterateeCall(array, n, guard) : n == null) {
                n = 1;
            }
            n = length - (+n || 0);
            return baseSlice(array, n < 0 ? 0 : n);
        }
        function takeRightWhile(array, predicate, thisArg) {
            return array && array.length ? baseWhile(array, getCallback(predicate, thisArg, 3), false, true) : [];
        }
        function takeWhile(array, predicate, thisArg) {
            return array && array.length ? baseWhile(array, getCallback(predicate, thisArg, 3)) : [];
        }
        var union = restParam(function (arrays) {
            return baseUniq(baseFlatten(arrays, false, true));
        });
        function uniq(array, isSorted, iteratee, thisArg) {
            var length = array ? array.length : 0;
            if (!length) {
                return [];
            }
            if (isSorted != null && typeof isSorted != 'boolean') {
                thisArg = iteratee;
                iteratee = isIterateeCall(array, isSorted, thisArg) ? null : isSorted;
                isSorted = false;
            }
            var callback = getCallback();
            if (!(iteratee == null && callback === baseCallback)) {
                iteratee = callback(iteratee, thisArg, 3);
            }
            return isSorted && getIndexOf() == baseIndexOf ? sortedUniq(array, iteratee) : baseUniq(array, iteratee);
        }
        function unzip(array) {
            if (!(array && array.length)) {
                return [];
            }
            var index = -1, length = 0;
            array = arrayFilter(array, function (group) {
                if (isArrayLike(group)) {
                    length = nativeMax(group.length, length);
                    return true;
                }
            });
            var result = Array(length);
            while (++index < length) {
                result[index] = arrayMap(array, baseProperty(index));
            }
            return result;
        }
        function unzipWith(array, iteratee, thisArg) {
            var length = array ? array.length : 0;
            if (!length) {
                return [];
            }
            var result = unzip(array);
            if (iteratee == null) {
                return result;
            }
            iteratee = bindCallback(iteratee, thisArg, 4);
            return arrayMap(result, function (group) {
                return arrayReduce(group, iteratee, undefined, true);
            });
        }
        var without = restParam(function (array, values) {
            return isArrayLike(array) ? baseDifference(array, values) : [];
        });
        function xor() {
            var index = -1, length = arguments.length;
            while (++index < length) {
                var array = arguments[index];
                if (isArrayLike(array)) {
                    var result = result ? baseDifference(result, array).concat(baseDifference(array, result)) : array;
                }
            }
            return result ? baseUniq(result) : [];
        }
        var zip = restParam(unzip);
        function zipObject(props, values) {
            var index = -1, length = props ? props.length : 0, result = {};
            if (length && !values && !isArray(props[0])) {
                values = [];
            }
            while (++index < length) {
                var key = props[index];
                if (values) {
                    result[key] = values[index];
                } else if (key) {
                    result[key[0]] = key[1];
                }
            }
            return result;
        }
        var zipWith = restParam(function (arrays) {
            var length = arrays.length, iteratee = length > 2 ? arrays[length - 2] : undefined, thisArg = length > 1 ? arrays[length - 1] : undefined;
            if (length > 2 && typeof iteratee == 'function') {
                length -= 2;
            } else {
                iteratee = length > 1 && typeof thisArg == 'function' ? (--length, thisArg) : undefined;
                thisArg = undefined;
            }
            arrays.length = length;
            return unzipWith(arrays, iteratee, thisArg);
        });
        function chain(value) {
            var result = lodash(value);
            result.__chain__ = true;
            return result;
        }
        function tap(value, interceptor, thisArg) {
            interceptor.call(thisArg, value);
            return value;
        }
        function thru(value, interceptor, thisArg) {
            return interceptor.call(thisArg, value);
        }
        function wrapperChain() {
            return chain(this);
        }
        function wrapperCommit() {
            return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperPlant(value) {
            var result, parent = this;
            while (parent instanceof baseLodash) {
                var clone = wrapperClone(parent);
                if (result) {
                    previous.__wrapped__ = clone;
                } else {
                    result = clone;
                }
                var previous = clone;
                parent = parent.__wrapped__;
            }
            previous.__wrapped__ = value;
            return result;
        }
        function wrapperReverse() {
            var value = this.__wrapped__;
            if (value instanceof LazyWrapper) {
                if (this.__actions__.length) {
                    value = new LazyWrapper(this);
                }
                return new LodashWrapper(value.reverse(), this.__chain__);
            }
            return this.thru(function (value) {
                return value.reverse();
            });
        }
        function wrapperToString() {
            return this.value() + '';
        }
        function wrapperValue() {
            return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var at = restParam(function (collection, props) {
            return baseAt(collection, baseFlatten(props));
        });
        var countBy = createAggregator(function (result, value, key) {
            hasOwnProperty.call(result, key) ? ++result[key] : result[key] = 1;
        });
        function every(collection, predicate, thisArg) {
            var func = isArray(collection) ? arrayEvery : baseEvery;
            if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
                predicate = null;
            }
            if (typeof predicate != 'function' || thisArg !== undefined) {
                predicate = getCallback(predicate, thisArg, 3);
            }
            return func(collection, predicate);
        }
        function filter(collection, predicate, thisArg) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            predicate = getCallback(predicate, thisArg, 3);
            return func(collection, predicate);
        }
        var find = createFind(baseEach);
        var findLast = createFind(baseEachRight, true);
        function findWhere(collection, source) {
            return find(collection, baseMatches(source));
        }
        var forEach = createForEach(arrayEach, baseEach);
        var forEachRight = createForEach(arrayEachRight, baseEachRight);
        var groupBy = createAggregator(function (result, value, key) {
            if (hasOwnProperty.call(result, key)) {
                result[key].push(value);
            } else {
                result[key] = [value];
            }
        });
        function includes(collection, target, fromIndex, guard) {
            var length = collection ? getLength(collection) : 0;
            if (!isLength(length)) {
                collection = values(collection);
                length = collection.length;
            }
            if (!length) {
                return false;
            }
            if (typeof fromIndex != 'number' || guard && isIterateeCall(target, fromIndex, guard)) {
                fromIndex = 0;
            } else {
                fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : fromIndex || 0;
            }
            return typeof collection == 'string' || !isArray(collection) && isString(collection) ? fromIndex < length && collection.indexOf(target, fromIndex) > -1 : getIndexOf(collection, target, fromIndex) > -1;
        }
        var indexBy = createAggregator(function (result, value, key) {
            result[key] = value;
        });
        var invoke = restParam(function (collection, path, args) {
            var index = -1, isFunc = typeof path == 'function', isProp = isKey(path), result = isArrayLike(collection) ? Array(collection.length) : [];
            baseEach(collection, function (value) {
                var func = isFunc ? path : isProp && value != null ? value[path] : null;
                result[++index] = func ? func.apply(value, args) : invokePath(value, path, args);
            });
            return result;
        });
        function map(collection, iteratee, thisArg) {
            var func = isArray(collection) ? arrayMap : baseMap;
            iteratee = getCallback(iteratee, thisArg, 3);
            return func(collection, iteratee);
        }
        var partition = createAggregator(function (result, value, key) {
            result[key ? 0 : 1].push(value);
        }, function () {
            return [
                [],
                []
            ];
        });
        function pluck(collection, path) {
            return map(collection, property(path));
        }
        var reduce = createReduce(arrayReduce, baseEach);
        var reduceRight = createReduce(arrayReduceRight, baseEachRight);
        function reject(collection, predicate, thisArg) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            predicate = getCallback(predicate, thisArg, 3);
            return func(collection, function (value, index, collection) {
                return !predicate(value, index, collection);
            });
        }
        function sample(collection, n, guard) {
            if (guard ? isIterateeCall(collection, n, guard) : n == null) {
                collection = toIterable(collection);
                var length = collection.length;
                return length > 0 ? collection[baseRandom(0, length - 1)] : undefined;
            }
            var index = -1, result = toArray(collection), length = result.length, lastIndex = length - 1;
            n = nativeMin(n < 0 ? 0 : +n || 0, length);
            while (++index < n) {
                var rand = baseRandom(index, lastIndex), value = result[rand];
                result[rand] = result[index];
                result[index] = value;
            }
            result.length = n;
            return result;
        }
        function shuffle(collection) {
            return sample(collection, POSITIVE_INFINITY);
        }
        function size(collection) {
            var length = collection ? getLength(collection) : 0;
            return isLength(length) ? length : keys(collection).length;
        }
        function some(collection, predicate, thisArg) {
            var func = isArray(collection) ? arraySome : baseSome;
            if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
                predicate = null;
            }
            if (typeof predicate != 'function' || thisArg !== undefined) {
                predicate = getCallback(predicate, thisArg, 3);
            }
            return func(collection, predicate);
        }
        function sortBy(collection, iteratee, thisArg) {
            if (collection == null) {
                return [];
            }
            if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
                iteratee = null;
            }
            var index = -1;
            iteratee = getCallback(iteratee, thisArg, 3);
            var result = baseMap(collection, function (value, key, collection) {
                return {
                    'criteria': iteratee(value, key, collection),
                    'index': ++index,
                    'value': value
                };
            });
            return baseSortBy(result, compareAscending);
        }
        var sortByAll = restParam(function (collection, iteratees) {
            if (collection == null) {
                return [];
            }
            var guard = iteratees[2];
            if (guard && isIterateeCall(iteratees[0], iteratees[1], guard)) {
                iteratees.length = 1;
            }
            return baseSortByOrder(collection, baseFlatten(iteratees), []);
        });
        function sortByOrder(collection, iteratees, orders, guard) {
            if (collection == null) {
                return [];
            }
            if (guard && isIterateeCall(iteratees, orders, guard)) {
                orders = null;
            }
            if (!isArray(iteratees)) {
                iteratees = iteratees == null ? [] : [iteratees];
            }
            if (!isArray(orders)) {
                orders = orders == null ? [] : [orders];
            }
            return baseSortByOrder(collection, iteratees, orders);
        }
        function where(collection, source) {
            return filter(collection, baseMatches(source));
        }
        var now = nativeNow || function () {
            return new Date().getTime();
        };
        function after(n, func) {
            if (typeof func != 'function') {
                if (typeof n == 'function') {
                    var temp = n;
                    n = func;
                    func = temp;
                } else {
                    throw new TypeError(FUNC_ERROR_TEXT);
                }
            }
            n = nativeIsFinite(n = +n) ? n : 0;
            return function () {
                if (--n < 1) {
                    return func.apply(this, arguments);
                }
            };
        }
        function ary(func, n, guard) {
            if (guard && isIterateeCall(func, n, guard)) {
                n = null;
            }
            n = func && n == null ? func.length : nativeMax(+n || 0, 0);
            return createWrapper(func, ARY_FLAG, null, null, null, null, n);
        }
        function before(n, func) {
            var result;
            if (typeof func != 'function') {
                if (typeof n == 'function') {
                    var temp = n;
                    n = func;
                    func = temp;
                } else {
                    throw new TypeError(FUNC_ERROR_TEXT);
                }
            }
            return function () {
                if (--n > 0) {
                    result = func.apply(this, arguments);
                }
                if (n <= 1) {
                    func = null;
                }
                return result;
            };
        }
        var bind = restParam(function (func, thisArg, partials) {
            var bitmask = BIND_FLAG;
            if (partials.length) {
                var holders = replaceHolders(partials, bind.placeholder);
                bitmask |= PARTIAL_FLAG;
            }
            return createWrapper(func, bitmask, thisArg, partials, holders);
        });
        var bindAll = restParam(function (object, methodNames) {
            methodNames = methodNames.length ? baseFlatten(methodNames) : functions(object);
            var index = -1, length = methodNames.length;
            while (++index < length) {
                var key = methodNames[index];
                object[key] = createWrapper(object[key], BIND_FLAG, object);
            }
            return object;
        });
        var bindKey = restParam(function (object, key, partials) {
            var bitmask = BIND_FLAG | BIND_KEY_FLAG;
            if (partials.length) {
                var holders = replaceHolders(partials, bindKey.placeholder);
                bitmask |= PARTIAL_FLAG;
            }
            return createWrapper(key, bitmask, object, partials, holders);
        });
        var curry = createCurry(CURRY_FLAG);
        var curryRight = createCurry(CURRY_RIGHT_FLAG);
        function debounce(func, wait, options) {
            var args, maxTimeoutId, result, stamp, thisArg, timeoutId, trailingCall, lastCalled = 0, maxWait = false, trailing = true;
            if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            wait = wait < 0 ? 0 : +wait || 0;
            if (options === true) {
                var leading = true;
                trailing = false;
            } else if (isObject(options)) {
                leading = options.leading;
                maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
                trailing = 'trailing' in options ? options.trailing : trailing;
            }
            function cancel() {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
                if (maxTimeoutId) {
                    clearTimeout(maxTimeoutId);
                }
                maxTimeoutId = timeoutId = trailingCall = undefined;
            }
            function delayed() {
                var remaining = wait - (now() - stamp);
                if (remaining <= 0 || remaining > wait) {
                    if (maxTimeoutId) {
                        clearTimeout(maxTimeoutId);
                    }
                    var isCalled = trailingCall;
                    maxTimeoutId = timeoutId = trailingCall = undefined;
                    if (isCalled) {
                        lastCalled = now();
                        result = func.apply(thisArg, args);
                        if (!timeoutId && !maxTimeoutId) {
                            args = thisArg = null;
                        }
                    }
                } else {
                    timeoutId = setTimeout(delayed, remaining);
                }
            }
            function maxDelayed() {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
                maxTimeoutId = timeoutId = trailingCall = undefined;
                if (trailing || maxWait !== wait) {
                    lastCalled = now();
                    result = func.apply(thisArg, args);
                    if (!timeoutId && !maxTimeoutId) {
                        args = thisArg = null;
                    }
                }
            }
            function debounced() {
                args = arguments;
                stamp = now();
                thisArg = this;
                trailingCall = trailing && (timeoutId || !leading);
                if (maxWait === false) {
                    var leadingCall = leading && !timeoutId;
                } else {
                    if (!maxTimeoutId && !leading) {
                        lastCalled = stamp;
                    }
                    var remaining = maxWait - (stamp - lastCalled), isCalled = remaining <= 0 || remaining > maxWait;
                    if (isCalled) {
                        if (maxTimeoutId) {
                            maxTimeoutId = clearTimeout(maxTimeoutId);
                        }
                        lastCalled = stamp;
                        result = func.apply(thisArg, args);
                    } else if (!maxTimeoutId) {
                        maxTimeoutId = setTimeout(maxDelayed, remaining);
                    }
                }
                if (isCalled && timeoutId) {
                    timeoutId = clearTimeout(timeoutId);
                } else if (!timeoutId && wait !== maxWait) {
                    timeoutId = setTimeout(delayed, wait);
                }
                if (leadingCall) {
                    isCalled = true;
                    result = func.apply(thisArg, args);
                }
                if (isCalled && !timeoutId && !maxTimeoutId) {
                    args = thisArg = null;
                }
                return result;
            }
            debounced.cancel = cancel;
            return debounced;
        }
        var defer = restParam(function (func, args) {
            return baseDelay(func, 1, args);
        });
        var delay = restParam(function (func, wait, args) {
            return baseDelay(func, wait, args);
        });
        var flow = createFlow();
        var flowRight = createFlow(true);
        function memoize(func, resolver) {
            if (typeof func != 'function' || resolver && typeof resolver != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            var memoized = function () {
                var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
                if (cache.has(key)) {
                    return cache.get(key);
                }
                var result = func.apply(this, args);
                memoized.cache = cache.set(key, result);
                return result;
            };
            memoized.cache = new memoize.Cache();
            return memoized;
        }
        function negate(predicate) {
            if (typeof predicate != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            return function () {
                return !predicate.apply(this, arguments);
            };
        }
        function once(func) {
            return before(2, func);
        }
        var partial = createPartial(PARTIAL_FLAG);
        var partialRight = createPartial(PARTIAL_RIGHT_FLAG);
        var rearg = restParam(function (func, indexes) {
            return createWrapper(func, REARG_FLAG, null, null, null, baseFlatten(indexes));
        });
        function restParam(func, start) {
            if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            start = nativeMax(start === undefined ? func.length - 1 : +start || 0, 0);
            return function () {
                var args = arguments, index = -1, length = nativeMax(args.length - start, 0), rest = Array(length);
                while (++index < length) {
                    rest[index] = args[start + index];
                }
                switch (start) {
                case 0:
                    return func.call(this, rest);
                case 1:
                    return func.call(this, args[0], rest);
                case 2:
                    return func.call(this, args[0], args[1], rest);
                }
                var otherArgs = Array(start + 1);
                index = -1;
                while (++index < start) {
                    otherArgs[index] = args[index];
                }
                otherArgs[start] = rest;
                return func.apply(this, otherArgs);
            };
        }
        function spread(func) {
            if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            return function (array) {
                return func.apply(this, array);
            };
        }
        function throttle(func, wait, options) {
            var leading = true, trailing = true;
            if (typeof func != 'function') {
                throw new TypeError(FUNC_ERROR_TEXT);
            }
            if (options === false) {
                leading = false;
            } else if (isObject(options)) {
                leading = 'leading' in options ? !!options.leading : leading;
                trailing = 'trailing' in options ? !!options.trailing : trailing;
            }
            debounceOptions.leading = leading;
            debounceOptions.maxWait = +wait;
            debounceOptions.trailing = trailing;
            return debounce(func, wait, debounceOptions);
        }
        function wrap(value, wrapper) {
            wrapper = wrapper == null ? identity : wrapper;
            return createWrapper(wrapper, PARTIAL_FLAG, null, [value], []);
        }
        function clone(value, isDeep, customizer, thisArg) {
            if (isDeep && typeof isDeep != 'boolean' && isIterateeCall(value, isDeep, customizer)) {
                isDeep = false;
            } else if (typeof isDeep == 'function') {
                thisArg = customizer;
                customizer = isDeep;
                isDeep = false;
            }
            return typeof customizer == 'function' ? baseClone(value, isDeep, bindCallback(customizer, thisArg, 1)) : baseClone(value, isDeep);
        }
        function cloneDeep(value, customizer, thisArg) {
            return typeof customizer == 'function' ? baseClone(value, true, bindCallback(customizer, thisArg, 1)) : baseClone(value, true);
        }
        function gt(value, other) {
            return value > other;
        }
        function gte(value, other) {
            return value >= other;
        }
        function isArguments(value) {
            return isObjectLike(value) && isArrayLike(value) && objToString.call(value) == argsTag;
        }
        var isArray = nativeIsArray || function (value) {
            return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
        };
        function isBoolean(value) {
            return value === true || value === false || isObjectLike(value) && objToString.call(value) == boolTag;
        }
        function isDate(value) {
            return isObjectLike(value) && objToString.call(value) == dateTag;
        }
        function isElement(value) {
            return !!value && value.nodeType === 1 && isObjectLike(value) && objToString.call(value).indexOf('Element') > -1;
        }
        if (!support.dom) {
            isElement = function (value) {
                return !!value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
            };
        }
        function isEmpty(value) {
            if (value == null) {
                return true;
            }
            if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value) || isObjectLike(value) && isFunction(value.splice))) {
                return !value.length;
            }
            return !keys(value).length;
        }
        function isEqual(value, other, customizer, thisArg) {
            customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
            var result = customizer ? customizer(value, other) : undefined;
            return result === undefined ? baseIsEqual(value, other, customizer) : !!result;
        }
        function isError(value) {
            return isObjectLike(value) && typeof value.message == 'string' && objToString.call(value) == errorTag;
        }
        var isFinite = nativeNumIsFinite || function (value) {
            return typeof value == 'number' && nativeIsFinite(value);
        };
        var isFunction = !(baseIsFunction(/x/) || Uint8Array && !baseIsFunction(Uint8Array)) ? baseIsFunction : function (value) {
            return objToString.call(value) == funcTag;
        };
        function isObject(value) {
            var type = typeof value;
            return !!value && (type == 'object' || type == 'function');
        }
        function isMatch(object, source, customizer, thisArg) {
            customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
            return baseIsMatch(object, getMatchData(source), customizer);
        }
        function isNaN(value) {
            return isNumber(value) && value != +value;
        }
        function isNative(value) {
            if (value == null) {
                return false;
            }
            if (objToString.call(value) == funcTag) {
                return reIsNative.test(fnToString.call(value));
            }
            return isObjectLike(value) && reIsHostCtor.test(value);
        }
        function isNull(value) {
            return value === null;
        }
        function isNumber(value) {
            return typeof value == 'number' || isObjectLike(value) && objToString.call(value) == numberTag;
        }
        var isPlainObject = !getPrototypeOf ? shimIsPlainObject : function (value) {
            if (!(value && objToString.call(value) == objectTag)) {
                return false;
            }
            var valueOf = getNative(value, 'valueOf'), objProto = valueOf && (objProto = getPrototypeOf(valueOf)) && getPrototypeOf(objProto);
            return objProto ? value == objProto || getPrototypeOf(value) == objProto : shimIsPlainObject(value);
        };
        function isRegExp(value) {
            return isObjectLike(value) && objToString.call(value) == regexpTag;
        }
        function isString(value) {
            return typeof value == 'string' || isObjectLike(value) && objToString.call(value) == stringTag;
        }
        function isTypedArray(value) {
            return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
        }
        function isUndefined(value) {
            return value === undefined;
        }
        function lt(value, other) {
            return value < other;
        }
        function lte(value, other) {
            return value <= other;
        }
        function toArray(value) {
            var length = value ? getLength(value) : 0;
            if (!isLength(length)) {
                return values(value);
            }
            if (!length) {
                return [];
            }
            return arrayCopy(value);
        }
        function toPlainObject(value) {
            return baseCopy(value, keysIn(value));
        }
        var assign = createAssigner(function (object, source, customizer) {
            return customizer ? assignWith(object, source, customizer) : baseAssign(object, source);
        });
        function create(prototype, properties, guard) {
            var result = baseCreate(prototype);
            if (guard && isIterateeCall(prototype, properties, guard)) {
                properties = null;
            }
            return properties ? baseAssign(result, properties) : result;
        }
        var defaults = restParam(function (args) {
            var object = args[0];
            if (object == null) {
                return object;
            }
            args.push(assignDefaults);
            return assign.apply(undefined, args);
        });
        var findKey = createFindKey(baseForOwn);
        var findLastKey = createFindKey(baseForOwnRight);
        var forIn = createForIn(baseFor);
        var forInRight = createForIn(baseForRight);
        var forOwn = createForOwn(baseForOwn);
        var forOwnRight = createForOwn(baseForOwnRight);
        function functions(object) {
            return baseFunctions(object, keysIn(object));
        }
        function get(object, path, defaultValue) {
            var result = object == null ? undefined : baseGet(object, toPath(path), path + '');
            return result === undefined ? defaultValue : result;
        }
        function has(object, path) {
            if (object == null) {
                return false;
            }
            var result = hasOwnProperty.call(object, path);
            if (!result && !isKey(path)) {
                path = toPath(path);
                object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
                if (object == null) {
                    return false;
                }
                path = last(path);
                result = hasOwnProperty.call(object, path);
            }
            return result || isLength(object.length) && isIndex(path, object.length) && (isArray(object) || isArguments(object));
        }
        function invert(object, multiValue, guard) {
            if (guard && isIterateeCall(object, multiValue, guard)) {
                multiValue = null;
            }
            var index = -1, props = keys(object), length = props.length, result = {};
            while (++index < length) {
                var key = props[index], value = object[key];
                if (multiValue) {
                    if (hasOwnProperty.call(result, value)) {
                        result[value].push(key);
                    } else {
                        result[value] = [key];
                    }
                } else {
                    result[value] = key;
                }
            }
            return result;
        }
        var keys = !nativeKeys ? shimKeys : function (object) {
            var Ctor = object == null ? null : object.constructor;
            if (typeof Ctor == 'function' && Ctor.prototype === object || typeof object != 'function' && isArrayLike(object)) {
                return shimKeys(object);
            }
            return isObject(object) ? nativeKeys(object) : [];
        };
        function keysIn(object) {
            if (object == null) {
                return [];
            }
            if (!isObject(object)) {
                object = Object(object);
            }
            var length = object.length;
            length = length && isLength(length) && (isArray(object) || isArguments(object)) && length || 0;
            var Ctor = object.constructor, index = -1, isProto = typeof Ctor == 'function' && Ctor.prototype === object, result = Array(length), skipIndexes = length > 0;
            while (++index < length) {
                result[index] = index + '';
            }
            for (var key in object) {
                if (!(skipIndexes && isIndex(key, length)) && !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
                    result.push(key);
                }
            }
            return result;
        }
        var mapKeys = createObjectMapper(true);
        var mapValues = createObjectMapper();
        var merge = createAssigner(baseMerge);
        var omit = restParam(function (object, props) {
            if (object == null) {
                return {};
            }
            if (typeof props[0] != 'function') {
                var props = arrayMap(baseFlatten(props), String);
                return pickByArray(object, baseDifference(keysIn(object), props));
            }
            var predicate = bindCallback(props[0], props[1], 3);
            return pickByCallback(object, function (value, key, object) {
                return !predicate(value, key, object);
            });
        });
        function pairs(object) {
            object = toObject(object);
            var index = -1, props = keys(object), length = props.length, result = Array(length);
            while (++index < length) {
                var key = props[index];
                result[index] = [
                    key,
                    object[key]
                ];
            }
            return result;
        }
        var pick = restParam(function (object, props) {
            if (object == null) {
                return {};
            }
            return typeof props[0] == 'function' ? pickByCallback(object, bindCallback(props[0], props[1], 3)) : pickByArray(object, baseFlatten(props));
        });
        function result(object, path, defaultValue) {
            var result = object == null ? undefined : object[path];
            if (result === undefined) {
                if (object != null && !isKey(path, object)) {
                    path = toPath(path);
                    object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
                    result = object == null ? undefined : object[last(path)];
                }
                result = result === undefined ? defaultValue : result;
            }
            return isFunction(result) ? result.call(object) : result;
        }
        function set(object, path, value) {
            if (object == null) {
                return object;
            }
            var pathKey = path + '';
            path = object[pathKey] != null || isKey(path, object) ? [pathKey] : toPath(path);
            var index = -1, length = path.length, lastIndex = length - 1, nested = object;
            while (nested != null && ++index < length) {
                var key = path[index];
                if (isObject(nested)) {
                    if (index == lastIndex) {
                        nested[key] = value;
                    } else if (nested[key] == null) {
                        nested[key] = isIndex(path[index + 1]) ? [] : {};
                    }
                }
                nested = nested[key];
            }
            return object;
        }
        function transform(object, iteratee, accumulator, thisArg) {
            var isArr = isArray(object) || isTypedArray(object);
            iteratee = getCallback(iteratee, thisArg, 4);
            if (accumulator == null) {
                if (isArr || isObject(object)) {
                    var Ctor = object.constructor;
                    if (isArr) {
                        accumulator = isArray(object) ? new Ctor() : [];
                    } else {
                        accumulator = baseCreate(isFunction(Ctor) ? Ctor.prototype : null);
                    }
                } else {
                    accumulator = {};
                }
            }
            (isArr ? arrayEach : baseForOwn)(object, function (value, index, object) {
                return iteratee(accumulator, value, index, object);
            });
            return accumulator;
        }
        function values(object) {
            return baseValues(object, keys(object));
        }
        function valuesIn(object) {
            return baseValues(object, keysIn(object));
        }
        function inRange(value, start, end) {
            start = +start || 0;
            if (typeof end === 'undefined') {
                end = start;
                start = 0;
            } else {
                end = +end || 0;
            }
            return value >= nativeMin(start, end) && value < nativeMax(start, end);
        }
        function random(min, max, floating) {
            if (floating && isIterateeCall(min, max, floating)) {
                max = floating = null;
            }
            var noMin = min == null, noMax = max == null;
            if (floating == null) {
                if (noMax && typeof min == 'boolean') {
                    floating = min;
                    min = 1;
                } else if (typeof max == 'boolean') {
                    floating = max;
                    noMax = true;
                }
            }
            if (noMin && noMax) {
                max = 1;
                noMax = false;
            }
            min = +min || 0;
            if (noMax) {
                max = min;
                min = 0;
            } else {
                max = +max || 0;
            }
            if (floating || min % 1 || max % 1) {
                var rand = nativeRandom();
                return nativeMin(min + rand * (max - min + parseFloat('1e-' + ((rand + '').length - 1))), max);
            }
            return baseRandom(min, max);
        }
        var camelCase = createCompounder(function (result, word, index) {
            word = word.toLowerCase();
            return result + (index ? word.charAt(0).toUpperCase() + word.slice(1) : word);
        });
        function capitalize(string) {
            string = baseToString(string);
            return string && string.charAt(0).toUpperCase() + string.slice(1);
        }
        function deburr(string) {
            string = baseToString(string);
            return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
        }
        function endsWith(string, target, position) {
            string = baseToString(string);
            target = target + '';
            var length = string.length;
            position = position === undefined ? length : nativeMin(position < 0 ? 0 : +position || 0, length);
            position -= target.length;
            return position >= 0 && string.indexOf(target, position) == position;
        }
        function escape(string) {
            string = baseToString(string);
            return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
            string = baseToString(string);
            return string && reHasRegExpChars.test(string) ? string.replace(reRegExpChars, '\\$&') : string;
        }
        var kebabCase = createCompounder(function (result, word, index) {
            return result + (index ? '-' : '') + word.toLowerCase();
        });
        function pad(string, length, chars) {
            string = baseToString(string);
            length = +length;
            var strLength = string.length;
            if (strLength >= length || !nativeIsFinite(length)) {
                return string;
            }
            var mid = (length - strLength) / 2, leftLength = floor(mid), rightLength = ceil(mid);
            chars = createPadding('', rightLength, chars);
            return chars.slice(0, leftLength) + string + chars;
        }
        var padLeft = createPadDir();
        var padRight = createPadDir(true);
        function parseInt(string, radix, guard) {
            if (guard && isIterateeCall(string, radix, guard)) {
                radix = 0;
            }
            return nativeParseInt(string, radix);
        }
        if (nativeParseInt(whitespace + '08') != 8) {
            parseInt = function (string, radix, guard) {
                if (guard ? isIterateeCall(string, radix, guard) : radix == null) {
                    radix = 0;
                } else if (radix) {
                    radix = +radix;
                }
                string = trim(string);
                return nativeParseInt(string, radix || (reHasHexPrefix.test(string) ? 16 : 10));
            };
        }
        function repeat(string, n) {
            var result = '';
            string = baseToString(string);
            n = +n;
            if (n < 1 || !string || !nativeIsFinite(n)) {
                return result;
            }
            do {
                if (n % 2) {
                    result += string;
                }
                n = floor(n / 2);
                string += string;
            } while (n);
            return result;
        }
        var snakeCase = createCompounder(function (result, word, index) {
            return result + (index ? '_' : '') + word.toLowerCase();
        });
        var startCase = createCompounder(function (result, word, index) {
            return result + (index ? ' ' : '') + (word.charAt(0).toUpperCase() + word.slice(1));
        });
        function startsWith(string, target, position) {
            string = baseToString(string);
            position = position == null ? 0 : nativeMin(position < 0 ? 0 : +position || 0, string.length);
            return string.lastIndexOf(target, position) == position;
        }
        function template(string, options, otherOptions) {
            var settings = lodash.templateSettings;
            if (otherOptions && isIterateeCall(string, options, otherOptions)) {
                options = otherOptions = null;
            }
            string = baseToString(string);
            options = assignWith(baseAssign({}, otherOptions || options), settings, assignOwnDefaults);
            var imports = assignWith(baseAssign({}, options.imports), settings.imports, assignOwnDefaults), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
            var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = '__p += \'';
            var reDelimiters = RegExp((options.escape || reNoMatch).source + '|' + interpolate.source + '|' + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' + (options.evaluate || reNoMatch).source + '|$', 'g');
            var sourceURL = '//# sourceURL=' + ('sourceURL' in options ? options.sourceURL : 'lodash.templateSources[' + ++templateCounter + ']') + '\n';
            string.replace(reDelimiters, function (match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
                interpolateValue || (interpolateValue = esTemplateValue);
                source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
                if (escapeValue) {
                    isEscaping = true;
                    source += '\' +\n__e(' + escapeValue + ') +\n\'';
                }
                if (evaluateValue) {
                    isEvaluating = true;
                    source += '\';\n' + evaluateValue + ';\n__p += \'';
                }
                if (interpolateValue) {
                    source += '\' +\n((__t = (' + interpolateValue + ')) == null ? \'\' : __t) +\n\'';
                }
                index = offset + match.length;
                return match;
            });
            source += '\';\n';
            var variable = options.variable;
            if (!variable) {
                source = 'with (obj) {\n' + source + '\n}\n';
            }
            source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source).replace(reEmptyStringMiddle, '$1').replace(reEmptyStringTrailing, '$1;');
            source = 'function(' + (variable || 'obj') + ') {\n' + (variable ? '' : 'obj || (obj = {});\n') + 'var __t, __p = \'\'' + (isEscaping ? ', __e = _.escape' : '') + (isEvaluating ? ', __j = Array.prototype.join;\n' + 'function print() { __p += __j.call(arguments, \'\') }\n' : ';\n') + source + 'return __p\n}';
            var result = attempt(function () {
                return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
            });
            result.source = source;
            if (isError(result)) {
                throw result;
            }
            return result;
        }
        function trim(string, chars, guard) {
            var value = string;
            string = baseToString(string);
            if (!string) {
                return string;
            }
            if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
                return string.slice(trimmedLeftIndex(string), trimmedRightIndex(string) + 1);
            }
            chars = chars + '';
            return string.slice(charsLeftIndex(string, chars), charsRightIndex(string, chars) + 1);
        }
        function trimLeft(string, chars, guard) {
            var value = string;
            string = baseToString(string);
            if (!string) {
                return string;
            }
            if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
                return string.slice(trimmedLeftIndex(string));
            }
            return string.slice(charsLeftIndex(string, chars + ''));
        }
        function trimRight(string, chars, guard) {
            var value = string;
            string = baseToString(string);
            if (!string) {
                return string;
            }
            if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
                return string.slice(0, trimmedRightIndex(string) + 1);
            }
            return string.slice(0, charsRightIndex(string, chars + '') + 1);
        }
        function trunc(string, options, guard) {
            if (guard && isIterateeCall(string, options, guard)) {
                options = null;
            }
            var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
            if (options != null) {
                if (isObject(options)) {
                    var separator = 'separator' in options ? options.separator : separator;
                    length = 'length' in options ? +options.length || 0 : length;
                    omission = 'omission' in options ? baseToString(options.omission) : omission;
                } else {
                    length = +options || 0;
                }
            }
            string = baseToString(string);
            if (length >= string.length) {
                return string;
            }
            var end = length - omission.length;
            if (end < 1) {
                return omission;
            }
            var result = string.slice(0, end);
            if (separator == null) {
                return result + omission;
            }
            if (isRegExp(separator)) {
                if (string.slice(end).search(separator)) {
                    var match, newEnd, substring = string.slice(0, end);
                    if (!separator.global) {
                        separator = RegExp(separator.source, (reFlags.exec(separator) || '') + 'g');
                    }
                    separator.lastIndex = 0;
                    while (match = separator.exec(substring)) {
                        newEnd = match.index;
                    }
                    result = result.slice(0, newEnd == null ? end : newEnd);
                }
            } else if (string.indexOf(separator, end) != end) {
                var index = result.lastIndexOf(separator);
                if (index > -1) {
                    result = result.slice(0, index);
                }
            }
            return result + omission;
        }
        function unescape(string) {
            string = baseToString(string);
            return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        function words(string, pattern, guard) {
            if (guard && isIterateeCall(string, pattern, guard)) {
                pattern = null;
            }
            string = baseToString(string);
            return string.match(pattern || reWords) || [];
        }
        var attempt = restParam(function (func, args) {
            try {
                return func.apply(undefined, args);
            } catch (e) {
                return isError(e) ? e : new Error(e);
            }
        });
        function callback(func, thisArg, guard) {
            if (guard && isIterateeCall(func, thisArg, guard)) {
                thisArg = null;
            }
            return isObjectLike(func) ? matches(func) : baseCallback(func, thisArg);
        }
        function constant(value) {
            return function () {
                return value;
            };
        }
        function identity(value) {
            return value;
        }
        function matches(source) {
            return baseMatches(baseClone(source, true));
        }
        function matchesProperty(path, srcValue) {
            return baseMatchesProperty(path, baseClone(srcValue, true));
        }
        var method = restParam(function (path, args) {
            return function (object) {
                return invokePath(object, path, args);
            };
        });
        var methodOf = restParam(function (object, args) {
            return function (path) {
                return invokePath(object, path, args);
            };
        });
        function mixin(object, source, options) {
            if (options == null) {
                var isObj = isObject(source), props = isObj ? keys(source) : null, methodNames = props && props.length ? baseFunctions(source, props) : null;
                if (!(methodNames ? methodNames.length : isObj)) {
                    methodNames = false;
                    options = source;
                    source = object;
                    object = this;
                }
            }
            if (!methodNames) {
                methodNames = baseFunctions(source, keys(source));
            }
            var chain = true, index = -1, isFunc = isFunction(object), length = methodNames.length;
            if (options === false) {
                chain = false;
            } else if (isObject(options) && 'chain' in options) {
                chain = options.chain;
            }
            while (++index < length) {
                var methodName = methodNames[index], func = source[methodName];
                object[methodName] = func;
                if (isFunc) {
                    object.prototype[methodName] = function (func) {
                        return function () {
                            var chainAll = this.__chain__;
                            if (chain || chainAll) {
                                var result = object(this.__wrapped__), actions = result.__actions__ = arrayCopy(this.__actions__);
                                actions.push({
                                    'func': func,
                                    'args': arguments,
                                    'thisArg': object
                                });
                                result.__chain__ = chainAll;
                                return result;
                            }
                            var args = [this.value()];
                            push.apply(args, arguments);
                            return func.apply(object, args);
                        };
                    }(func);
                }
            }
            return object;
        }
        function noConflict() {
            context._ = oldDash;
            return this;
        }
        function noop() {
        }
        function property(path) {
            return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
        }
        function propertyOf(object) {
            return function (path) {
                return baseGet(object, toPath(path), path + '');
            };
        }
        function range(start, end, step) {
            if (step && isIterateeCall(start, end, step)) {
                end = step = null;
            }
            start = +start || 0;
            step = step == null ? 1 : +step || 0;
            if (end == null) {
                end = start;
                start = 0;
            } else {
                end = +end || 0;
            }
            var index = -1, length = nativeMax(ceil((end - start) / (step || 1)), 0), result = Array(length);
            while (++index < length) {
                result[index] = start;
                start += step;
            }
            return result;
        }
        function times(n, iteratee, thisArg) {
            n = floor(n);
            if (n < 1 || !nativeIsFinite(n)) {
                return [];
            }
            var index = -1, result = Array(nativeMin(n, MAX_ARRAY_LENGTH));
            iteratee = bindCallback(iteratee, thisArg, 1);
            while (++index < n) {
                if (index < MAX_ARRAY_LENGTH) {
                    result[index] = iteratee(index);
                } else {
                    iteratee(index);
                }
            }
            return result;
        }
        function uniqueId(prefix) {
            var id = ++idCounter;
            return baseToString(prefix) + id;
        }
        function add(augend, addend) {
            return (+augend || 0) + (+addend || 0);
        }
        var max = createExtremum(gt, NEGATIVE_INFINITY);
        var min = createExtremum(lt, POSITIVE_INFINITY);
        function sum(collection, iteratee, thisArg) {
            if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
                iteratee = null;
            }
            var callback = getCallback(), noIteratee = iteratee == null;
            if (!(noIteratee && callback === baseCallback)) {
                noIteratee = false;
                iteratee = callback(iteratee, thisArg, 3);
            }
            return noIteratee ? arraySum(isArray(collection) ? collection : toIterable(collection)) : baseSum(collection, iteratee);
        }
        lodash.prototype = baseLodash.prototype;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        MapCache.prototype['delete'] = mapDelete;
        MapCache.prototype.get = mapGet;
        MapCache.prototype.has = mapHas;
        MapCache.prototype.set = mapSet;
        SetCache.prototype.push = cachePush;
        memoize.Cache = MapCache;
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.callback = callback;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.functions = functions;
        lodash.groupBy = groupBy;
        lodash.indexBy = indexBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.invert = invert;
        lodash.invoke = invoke;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.omit = omit;
        lodash.once = once;
        lodash.pairs = pairs;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pluck = pluck;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.restParam = restParam;
        lodash.set = set;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortByAll = sortByAll;
        lodash.sortByOrder = sortByOrder;
        lodash.spread = spread;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.times = times;
        lodash.toArray = toArray;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.union = union;
        lodash.uniq = uniq;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.where = where;
        lodash.without = without;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipWith = zipWith;
        lodash.backflow = flowRight;
        lodash.collect = map;
        lodash.compose = flowRight;
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.extend = assign;
        lodash.iteratee = callback;
        lodash.methods = functions;
        lodash.object = zipObject;
        lodash.select = filter;
        lodash.tail = rest;
        lodash.unique = uniq;
        mixin(lodash, lodash);
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.deburr = deburr;
        lodash.endsWith = endsWith;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.findWhere = findWhere;
        lodash.first = first;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isBoolean = isBoolean;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isError = isError;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isMatch = isMatch;
        lodash.isNaN = isNaN;
        lodash.isNative = isNative;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isString = isString;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max;
        lodash.min = min;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padLeft = padLeft;
        lodash.padRight = padRight;
        lodash.parseInt = parseInt;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.result = result;
        lodash.runInContext = runInContext;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.sum = sum;
        lodash.template = template;
        lodash.trim = trim;
        lodash.trimLeft = trimLeft;
        lodash.trimRight = trimRight;
        lodash.trunc = trunc;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;
        lodash.words = words;
        lodash.all = every;
        lodash.any = some;
        lodash.contains = includes;
        lodash.eq = isEqual;
        lodash.detect = find;
        lodash.foldl = reduce;
        lodash.foldr = reduceRight;
        lodash.head = first;
        lodash.include = includes;
        lodash.inject = reduce;
        mixin(lodash, function () {
            var source = {};
            baseForOwn(lodash, function (func, methodName) {
                if (!lodash.prototype[methodName]) {
                    source[methodName] = func;
                }
            });
            return source;
        }(), false);
        lodash.sample = sample;
        lodash.prototype.sample = function (n) {
            if (!this.__chain__ && n == null) {
                return sample(this.value());
            }
            return this.thru(function (value) {
                return sample(value, n);
            });
        };
        lodash.VERSION = VERSION;
        arrayEach([
            'bind',
            'bindKey',
            'curry',
            'curryRight',
            'partial',
            'partialRight'
        ], function (methodName) {
            lodash[methodName].placeholder = lodash;
        });
        arrayEach([
            'dropWhile',
            'filter',
            'map',
            'takeWhile'
        ], function (methodName, type) {
            var isFilter = type != LAZY_MAP_FLAG, isDropWhile = type == LAZY_DROP_WHILE_FLAG;
            LazyWrapper.prototype[methodName] = function (iteratee, thisArg) {
                var filtered = this.__filtered__, result = filtered && isDropWhile ? new LazyWrapper(this) : this.clone(), iteratees = result.__iteratees__ || (result.__iteratees__ = []);
                iteratees.push({
                    'done': false,
                    'count': 0,
                    'index': 0,
                    'iteratee': getCallback(iteratee, thisArg, 1),
                    'limit': -1,
                    'type': type
                });
                result.__filtered__ = filtered || isFilter;
                return result;
            };
        });
        arrayEach([
            'drop',
            'take'
        ], function (methodName, index) {
            var whileName = methodName + 'While';
            LazyWrapper.prototype[methodName] = function (n) {
                var filtered = this.__filtered__, result = filtered && !index ? this.dropWhile() : this.clone();
                n = n == null ? 1 : nativeMax(floor(n) || 0, 0);
                if (filtered) {
                    if (index) {
                        result.__takeCount__ = nativeMin(result.__takeCount__, n);
                    } else {
                        last(result.__iteratees__).limit = n;
                    }
                } else {
                    var views = result.__views__ || (result.__views__ = []);
                    views.push({
                        'size': n,
                        'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
                    });
                }
                return result;
            };
            LazyWrapper.prototype[methodName + 'Right'] = function (n) {
                return this.reverse()[methodName](n).reverse();
            };
            LazyWrapper.prototype[methodName + 'RightWhile'] = function (predicate, thisArg) {
                return this.reverse()[whileName](predicate, thisArg).reverse();
            };
        });
        arrayEach([
            'first',
            'last'
        ], function (methodName, index) {
            var takeName = 'take' + (index ? 'Right' : '');
            LazyWrapper.prototype[methodName] = function () {
                return this[takeName](1).value()[0];
            };
        });
        arrayEach([
            'initial',
            'rest'
        ], function (methodName, index) {
            var dropName = 'drop' + (index ? '' : 'Right');
            LazyWrapper.prototype[methodName] = function () {
                return this[dropName](1);
            };
        });
        arrayEach([
            'pluck',
            'where'
        ], function (methodName, index) {
            var operationName = index ? 'filter' : 'map', createCallback = index ? baseMatches : property;
            LazyWrapper.prototype[methodName] = function (value) {
                return this[operationName](createCallback(value));
            };
        });
        LazyWrapper.prototype.compact = function () {
            return this.filter(identity);
        };
        LazyWrapper.prototype.reject = function (predicate, thisArg) {
            predicate = getCallback(predicate, thisArg, 1);
            return this.filter(function (value) {
                return !predicate(value);
            });
        };
        LazyWrapper.prototype.slice = function (start, end) {
            start = start == null ? 0 : +start || 0;
            var result = this;
            if (start < 0) {
                result = this.takeRight(-start);
            } else if (start) {
                result = this.drop(start);
            }
            if (end !== undefined) {
                end = +end || 0;
                result = end < 0 ? result.dropRight(-end) : result.take(end - start);
            }
            return result;
        };
        LazyWrapper.prototype.toArray = function () {
            return this.drop(0);
        };
        baseForOwn(LazyWrapper.prototype, function (func, methodName) {
            var lodashFunc = lodash[methodName];
            if (!lodashFunc) {
                return;
            }
            var checkIteratee = /^(?:filter|map|reject)|While$/.test(methodName), retUnwrapped = /^(?:first|last)$/.test(methodName);
            lodash.prototype[methodName] = function () {
                var args = arguments, chainAll = this.__chain__, value = this.__wrapped__, isHybrid = !!this.__actions__.length, isLazy = value instanceof LazyWrapper, iteratee = args[0], useLazy = isLazy || isArray(value);
                if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
                    isLazy = useLazy = false;
                }
                var onlyLazy = isLazy && !isHybrid;
                if (retUnwrapped && !chainAll) {
                    return onlyLazy ? func.call(value) : lodashFunc.call(lodash, this.value());
                }
                var interceptor = function (value) {
                    var otherArgs = [value];
                    push.apply(otherArgs, args);
                    return lodashFunc.apply(lodash, otherArgs);
                };
                if (useLazy) {
                    var wrapper = onlyLazy ? value : new LazyWrapper(this), result = func.apply(wrapper, args);
                    if (!retUnwrapped && (isHybrid || result.__actions__)) {
                        var actions = result.__actions__ || (result.__actions__ = []);
                        actions.push({
                            'func': thru,
                            'args': [interceptor],
                            'thisArg': lodash
                        });
                    }
                    return new LodashWrapper(result, chainAll);
                }
                return this.thru(interceptor);
            };
        });
        arrayEach([
            'concat',
            'join',
            'pop',
            'push',
            'replace',
            'shift',
            'sort',
            'splice',
            'split',
            'unshift'
        ], function (methodName) {
            var func = (/^(?:replace|split)$/.test(methodName) ? stringProto : arrayProto)[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru', retUnwrapped = /^(?:join|pop|replace|shift)$/.test(methodName);
            lodash.prototype[methodName] = function () {
                var args = arguments;
                if (retUnwrapped && !this.__chain__) {
                    return func.apply(this.value(), args);
                }
                return this[chainName](function (value) {
                    return func.apply(value, args);
                });
            };
        });
        baseForOwn(LazyWrapper.prototype, function (func, methodName) {
            var lodashFunc = lodash[methodName];
            if (lodashFunc) {
                var key = lodashFunc.name, names = realNames[key] || (realNames[key] = []);
                names.push({
                    'name': methodName,
                    'func': lodashFunc
                });
            }
        });
        realNames[createHybridWrapper(null, BIND_KEY_FLAG).name] = [{
                'name': 'wrapper',
                'func': null
            }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toString = wrapperToString;
        lodash.prototype.run = lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        lodash.prototype.collect = lodash.prototype.map;
        lodash.prototype.head = lodash.prototype.first;
        lodash.prototype.select = lodash.prototype.filter;
        lodash.prototype.tail = lodash.prototype.rest;
        return lodash;
    }
    var _ = runInContext();
    if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
        root._ = _;
        define('underscore', [], function () {
            return _;
        });
    } else if (freeExports && freeModule) {
        if (moduleExports) {
            (freeModule.exports = _)._ = _;
        } else {
            freeExports._ = _;
        }
    } else {
        root._ = _;
    }
}.call(this));
(function () {
    ;
    (function (root, factory) {
        if (typeof define === 'function' && define.amd) {
            define('purebackbone', [
                'underscore',
                'jquery',
                'exports',
                'underscore',
                'jquery'
            ], function (_, $, exports) {
                root.Backbone = factory(root, exports, _, $);
            });
        } else if (typeof exports !== 'undefined') {
            var _ = require('underscore');
            factory(root, exports, _);
        } else {
            root.Backbone = factory(root, {}, root._, root.jQuery || root.Zepto || root.ender || root.$);
        }
    }(this, function (root, Backbone, _, $) {
        var previousBackbone = root.Backbone;
        var array = [];
        var slice = array.slice;
        Backbone.VERSION = '1.1.2';
        Backbone.$ = $;
        Backbone.noConflict = function () {
            root.Backbone = previousBackbone;
            return this;
        };
        Backbone.emulateHTTP = false;
        Backbone.emulateJSON = false;
        var Events = Backbone.Events = {
            on: function (name, callback, context) {
                if (!eventsApi(this, 'on', name, [
                        callback,
                        context
                    ]) || !callback)
                    return this;
                this._events || (this._events = {});
                var events = this._events[name] || (this._events[name] = []);
                events.push({
                    callback: callback,
                    context: context,
                    ctx: context || this
                });
                return this;
            },
            once: function (name, callback, context) {
                if (!eventsApi(this, 'once', name, [
                        callback,
                        context
                    ]) || !callback)
                    return this;
                var self = this;
                var once = _.once(function () {
                    self.off(name, once);
                    callback.apply(this, arguments);
                });
                once._callback = callback;
                return this.on(name, once, context);
            },
            off: function (name, callback, context) {
                if (!this._events || !eventsApi(this, 'off', name, [
                        callback,
                        context
                    ]))
                    return this;
                if (!name && !callback && !context) {
                    this._events = void 0;
                    return this;
                }
                var names = name ? [name] : _.keys(this._events);
                for (var i = 0, length = names.length; i < length; i++) {
                    name = names[i];
                    var events = this._events[name];
                    if (!events)
                        continue;
                    if (!callback && !context) {
                        delete this._events[name];
                        continue;
                    }
                    var remaining = [];
                    for (var j = 0, k = events.length; j < k; j++) {
                        var event = events[j];
                        if (callback && callback !== event.callback && callback !== event.callback._callback || context && context !== event.context) {
                            remaining.push(event);
                        }
                    }
                    if (remaining.length) {
                        this._events[name] = remaining;
                    } else {
                        delete this._events[name];
                    }
                }
                return this;
            },
            trigger: function (name) {
                if (!this._events)
                    return this;
                var args = slice.call(arguments, 1);
                if (!eventsApi(this, 'trigger', name, args))
                    return this;
                var events = this._events[name];
                var allEvents = this._events.all;
                if (events)
                    triggerEvents(events, args);
                if (allEvents)
                    triggerEvents(allEvents, arguments);
                return this;
            },
            listenTo: function (obj, name, callback) {
                var listeningTo = this._listeningTo || (this._listeningTo = {});
                var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
                listeningTo[id] = obj;
                if (!callback && typeof name === 'object')
                    callback = this;
                obj.on(name, callback, this);
                return this;
            },
            listenToOnce: function (obj, name, callback) {
                if (typeof name === 'object') {
                    for (var event in name)
                        this.listenToOnce(obj, event, name[event]);
                    return this;
                }
                if (eventSplitter.test(name)) {
                    var names = name.split(eventSplitter);
                    for (var i = 0, length = names.length; i < length; i++) {
                        this.listenToOnce(obj, names[i], callback);
                    }
                    return this;
                }
                if (!callback)
                    return this;
                var once = _.once(function () {
                    this.stopListening(obj, name, once);
                    callback.apply(this, arguments);
                });
                once._callback = callback;
                return this.listenTo(obj, name, once);
            },
            stopListening: function (obj, name, callback) {
                var listeningTo = this._listeningTo;
                if (!listeningTo)
                    return this;
                var remove = !name && !callback;
                if (!callback && typeof name === 'object')
                    callback = this;
                if (obj)
                    (listeningTo = {})[obj._listenId] = obj;
                for (var id in listeningTo) {
                    obj = listeningTo[id];
                    obj.off(name, callback, this);
                    if (remove || _.isEmpty(obj._events))
                        delete this._listeningTo[id];
                }
                return this;
            }
        };
        var eventSplitter = /\s+/;
        var eventsApi = function (obj, action, name, rest) {
            if (!name)
                return true;
            if (typeof name === 'object') {
                for (var key in name) {
                    obj[action].apply(obj, [
                        key,
                        name[key]
                    ].concat(rest));
                }
                return false;
            }
            if (eventSplitter.test(name)) {
                var names = name.split(eventSplitter);
                for (var i = 0, length = names.length; i < length; i++) {
                    obj[action].apply(obj, [names[i]].concat(rest));
                }
                return false;
            }
            return true;
        };
        var triggerEvents = function (events, args) {
            var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
            switch (args.length) {
            case 0:
                while (++i < l)
                    (ev = events[i]).callback.call(ev.ctx);
                return;
            case 1:
                while (++i < l)
                    (ev = events[i]).callback.call(ev.ctx, a1);
                return;
            case 2:
                while (++i < l)
                    (ev = events[i]).callback.call(ev.ctx, a1, a2);
                return;
            case 3:
                while (++i < l)
                    (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
                return;
            default:
                while (++i < l)
                    (ev = events[i]).callback.apply(ev.ctx, args);
                return;
            }
        };
        Events.bind = Events.on;
        Events.unbind = Events.off;
        _.extend(Backbone, Events);
        var Model = Backbone.Model = function (attributes, options) {
            var attrs = attributes || {};
            options || (options = {});
            this.cid = _.uniqueId('c');
            this.attributes = {};
            if (options.collection)
                this.collection = options.collection;
            if (options.parse)
                attrs = this.parse(attrs, options) || {};
            attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
            this.set(attrs, options);
            this.changed = {};
            this.initialize.apply(this, arguments);
        };
        _.extend(Model.prototype, Events, {
            changed: null,
            validationError: null,
            idAttribute: 'id',
            initialize: function () {
            },
            toJSON: function (options) {
                return _.clone(this.attributes);
            },
            sync: function () {
                return Backbone.sync.apply(this, arguments);
            },
            get: function (attr) {
                return this.attributes[attr];
            },
            escape: function (attr) {
                return _.escape(this.get(attr));
            },
            has: function (attr) {
                return this.get(attr) != null;
            },
            matches: function (attrs) {
                return _.matches(attrs)(this.attributes);
            },
            set: function (key, val, options) {
                var attr, attrs, unset, changes, silent, changing, prev, current;
                if (key == null)
                    return this;
                if (typeof key === 'object') {
                    attrs = key;
                    options = val;
                } else {
                    (attrs = {})[key] = val;
                }
                options || (options = {});
                if (!this._validate(attrs, options))
                    return false;
                unset = options.unset;
                silent = options.silent;
                changes = [];
                changing = this._changing;
                this._changing = true;
                if (!changing) {
                    this._previousAttributes = _.clone(this.attributes);
                    this.changed = {};
                }
                current = this.attributes, prev = this._previousAttributes;
                if (this.idAttribute in attrs)
                    this.id = attrs[this.idAttribute];
                for (attr in attrs) {
                    val = attrs[attr];
                    if (!_.isEqual(current[attr], val))
                        changes.push(attr);
                    if (!_.isEqual(prev[attr], val)) {
                        this.changed[attr] = val;
                    } else {
                        delete this.changed[attr];
                    }
                    unset ? delete current[attr] : current[attr] = val;
                }
                if (!silent) {
                    if (changes.length)
                        this._pending = options;
                    for (var i = 0, length = changes.length; i < length; i++) {
                        this.trigger('change:' + changes[i], this, current[changes[i]], options);
                    }
                }
                if (changing)
                    return this;
                if (!silent) {
                    while (this._pending) {
                        options = this._pending;
                        this._pending = false;
                        this.trigger('change', this, options);
                    }
                }
                this._pending = false;
                this._changing = false;
                return this;
            },
            unset: function (attr, options) {
                return this.set(attr, void 0, _.extend({}, options, { unset: true }));
            },
            clear: function (options) {
                var attrs = {};
                for (var key in this.attributes)
                    attrs[key] = void 0;
                return this.set(attrs, _.extend({}, options, { unset: true }));
            },
            hasChanged: function (attr) {
                if (attr == null)
                    return !_.isEmpty(this.changed);
                return _.has(this.changed, attr);
            },
            changedAttributes: function (diff) {
                if (!diff)
                    return this.hasChanged() ? _.clone(this.changed) : false;
                var val, changed = false;
                var old = this._changing ? this._previousAttributes : this.attributes;
                for (var attr in diff) {
                    if (_.isEqual(old[attr], val = diff[attr]))
                        continue;
                    (changed || (changed = {}))[attr] = val;
                }
                return changed;
            },
            previous: function (attr) {
                if (attr == null || !this._previousAttributes)
                    return null;
                return this._previousAttributes[attr];
            },
            previousAttributes: function () {
                return _.clone(this._previousAttributes);
            },
            fetch: function (options) {
                options = options ? _.clone(options) : {};
                if (options.parse === void 0)
                    options.parse = true;
                var model = this;
                var success = options.success;
                options.success = function (resp) {
                    if (!model.set(model.parse(resp, options), options))
                        return false;
                    if (success)
                        success(model, resp, options);
                    model.trigger('sync', model, resp, options);
                };
                wrapError(this, options);
                return this.sync('read', this, options);
            },
            save: function (key, val, options) {
                var attrs, method, xhr, attributes = this.attributes;
                if (key == null || typeof key === 'object') {
                    attrs = key;
                    options = val;
                } else {
                    (attrs = {})[key] = val;
                }
                options = _.extend({ validate: true }, options);
                if (attrs && !options.wait) {
                    if (!this.set(attrs, options))
                        return false;
                } else {
                    if (!this._validate(attrs, options))
                        return false;
                }
                if (attrs && options.wait) {
                    this.attributes = _.extend({}, attributes, attrs);
                }
                if (options.parse === void 0)
                    options.parse = true;
                var model = this;
                var success = options.success;
                options.success = function (resp) {
                    model.attributes = attributes;
                    var serverAttrs = model.parse(resp, options);
                    if (options.wait)
                        serverAttrs = _.extend(attrs || {}, serverAttrs);
                    if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
                        return false;
                    }
                    if (success)
                        success(model, resp, options);
                    model.trigger('sync', model, resp, options);
                };
                wrapError(this, options);
                method = this.isNew() ? 'create' : options.patch ? 'patch' : 'update';
                if (method === 'patch' && !options.attrs)
                    options.attrs = attrs;
                xhr = this.sync(method, this, options);
                if (attrs && options.wait)
                    this.attributes = attributes;
                return xhr;
            },
            destroy: function (options) {
                options = options ? _.clone(options) : {};
                var model = this;
                var success = options.success;
                var destroy = function () {
                    model.stopListening();
                    model.trigger('destroy', model, model.collection, options);
                };
                options.success = function (resp) {
                    if (options.wait || model.isNew())
                        destroy();
                    if (success)
                        success(model, resp, options);
                    if (!model.isNew())
                        model.trigger('sync', model, resp, options);
                };
                if (this.isNew()) {
                    options.success();
                    return false;
                }
                wrapError(this, options);
                var xhr = this.sync('delete', this, options);
                if (!options.wait)
                    destroy();
                return xhr;
            },
            url: function () {
                var base = _.result(this, 'urlRoot') || _.result(this.collection, 'url') || urlError();
                if (this.isNew())
                    return base;
                return base.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id);
            },
            parse: function (resp, options) {
                return resp;
            },
            clone: function () {
                return new this.constructor(this.attributes);
            },
            isNew: function () {
                return !this.has(this.idAttribute);
            },
            isValid: function (options) {
                return this._validate({}, _.extend(options || {}, { validate: true }));
            },
            _validate: function (attrs, options) {
                if (!options.validate || !this.validate)
                    return true;
                attrs = _.extend({}, this.attributes, attrs);
                var error = this.validationError = this.validate(attrs, options) || null;
                if (!error)
                    return true;
                this.trigger('invalid', this, error, _.extend(options, { validationError: error }));
                return false;
            }
        });
        var modelMethods = [
            'keys',
            'values',
            'pairs',
            'invert',
            'pick',
            'omit',
            'chain',
            'isEmpty'
        ];
        _.each(modelMethods, function (method) {
            if (!_[method])
                return;
            Model.prototype[method] = function () {
                var args = slice.call(arguments);
                args.unshift(this.attributes);
                return _[method].apply(_, args);
            };
        });
        var Collection = Backbone.Collection = function (models, options) {
            options || (options = {});
            if (options.model)
                this.model = options.model;
            if (options.comparator !== void 0)
                this.comparator = options.comparator;
            this._reset();
            this.initialize.apply(this, arguments);
            if (models)
                this.reset(models, _.extend({ silent: true }, options));
        };
        var setOptions = {
            add: true,
            remove: true,
            merge: true
        };
        var addOptions = {
            add: true,
            remove: false
        };
        _.extend(Collection.prototype, Events, {
            model: Model,
            initialize: function () {
            },
            toJSON: function (options) {
                return this.map(function (model) {
                    return model.toJSON(options);
                });
            },
            sync: function () {
                return Backbone.sync.apply(this, arguments);
            },
            add: function (models, options) {
                return this.set(models, _.extend({ merge: false }, options, addOptions));
            },
            remove: function (models, options) {
                var singular = !_.isArray(models);
                models = singular ? [models] : _.clone(models);
                options || (options = {});
                for (var i = 0, length = models.length; i < length; i++) {
                    var model = models[i] = this.get(models[i]);
                    if (!model)
                        continue;
                    var id = this.modelId(model.attributes);
                    if (id != null)
                        delete this._byId[id];
                    delete this._byId[model.cid];
                    var index = this.indexOf(model);
                    this.models.splice(index, 1);
                    this.length--;
                    if (!options.silent) {
                        options.index = index;
                        model.trigger('remove', model, this, options);
                    }
                    this._removeReference(model, options);
                }
                return singular ? models[0] : models;
            },
            set: function (models, options) {
                options = _.defaults({}, options, setOptions);
                if (options.parse)
                    models = this.parse(models, options);
                var singular = !_.isArray(models);
                models = singular ? models ? [models] : [] : models.slice();
                var id, model, attrs, existing, sort;
                var at = options.at;
                if (at != null)
                    at = +at;
                if (at < 0)
                    at += this.length + 1;
                var sortable = this.comparator && at == null && options.sort !== false;
                var sortAttr = _.isString(this.comparator) ? this.comparator : null;
                var toAdd = [], toRemove = [], modelMap = {};
                var add = options.add, merge = options.merge, remove = options.remove;
                var order = !sortable && add && remove ? [] : false;
                var orderChanged = false;
                for (var i = 0, length = models.length; i < length; i++) {
                    attrs = models[i];
                    if (existing = this.get(attrs)) {
                        if (remove)
                            modelMap[existing.cid] = true;
                        if (merge && attrs !== existing) {
                            attrs = this._isModel(attrs) ? attrs.attributes : attrs;
                            if (options.parse)
                                attrs = existing.parse(attrs, options);
                            existing.set(attrs, options);
                            if (sortable && !sort && existing.hasChanged(sortAttr))
                                sort = true;
                        }
                        models[i] = existing;
                    } else if (add) {
                        model = models[i] = this._prepareModel(attrs, options);
                        if (!model)
                            continue;
                        toAdd.push(model);
                        this._addReference(model, options);
                    }
                    model = existing || model;
                    if (!model)
                        continue;
                    id = this.modelId(model.attributes);
                    if (order && (model.isNew() || !modelMap[id])) {
                        order.push(model);
                        orderChanged = orderChanged || !this.models[i] || model.cid !== this.models[i].cid;
                    }
                    modelMap[id] = true;
                }
                if (remove) {
                    for (var i = 0, length = this.length; i < length; i++) {
                        if (!modelMap[(model = this.models[i]).cid])
                            toRemove.push(model);
                    }
                    if (toRemove.length)
                        this.remove(toRemove, options);
                }
                if (toAdd.length || orderChanged) {
                    if (sortable)
                        sort = true;
                    this.length += toAdd.length;
                    if (at != null) {
                        for (var i = 0, length = toAdd.length; i < length; i++) {
                            this.models.splice(at + i, 0, toAdd[i]);
                        }
                    } else {
                        if (order)
                            this.models.length = 0;
                        var orderedModels = order || toAdd;
                        for (var i = 0, length = orderedModels.length; i < length; i++) {
                            this.models.push(orderedModels[i]);
                        }
                    }
                }
                if (sort)
                    this.sort({ silent: true });
                if (!options.silent) {
                    var addOpts = at != null ? _.clone(options) : options;
                    for (var i = 0, length = toAdd.length; i < length; i++) {
                        if (at != null)
                            addOpts.index = at + i;
                        (model = toAdd[i]).trigger('add', model, this, addOpts);
                    }
                    if (sort || orderChanged)
                        this.trigger('sort', this, options);
                }
                return singular ? models[0] : models;
            },
            reset: function (models, options) {
                options = options ? _.clone(options) : {};
                for (var i = 0, length = this.models.length; i < length; i++) {
                    this._removeReference(this.models[i], options);
                }
                options.previousModels = this.models;
                this._reset();
                models = this.add(models, _.extend({ silent: true }, options));
                if (!options.silent)
                    this.trigger('reset', this, options);
                return models;
            },
            push: function (model, options) {
                return this.add(model, _.extend({ at: this.length }, options));
            },
            pop: function (options) {
                var model = this.at(this.length - 1);
                this.remove(model, options);
                return model;
            },
            unshift: function (model, options) {
                return this.add(model, _.extend({ at: 0 }, options));
            },
            shift: function (options) {
                var model = this.at(0);
                this.remove(model, options);
                return model;
            },
            slice: function () {
                return slice.apply(this.models, arguments);
            },
            get: function (obj) {
                if (obj == null)
                    return void 0;
                var id = this.modelId(this._isModel(obj) ? obj.attributes : obj);
                return this._byId[obj] || this._byId[id] || this._byId[obj.cid];
            },
            at: function (index) {
                if (index < 0)
                    index += this.length;
                return this.models[index];
            },
            where: function (attrs, first) {
                var matches = _.matches(attrs);
                return this[first ? 'find' : 'filter'](function (model) {
                    return matches(model.attributes);
                });
            },
            findWhere: function (attrs) {
                return this.where(attrs, true);
            },
            sort: function (options) {
                if (!this.comparator)
                    throw new Error('Cannot sort a set without a comparator');
                options || (options = {});
                if (_.isString(this.comparator) || this.comparator.length === 1) {
                    this.models = this.sortBy(this.comparator, this);
                } else {
                    this.models.sort(_.bind(this.comparator, this));
                }
                if (!options.silent)
                    this.trigger('sort', this, options);
                return this;
            },
            pluck: function (attr) {
                return _.invoke(this.models, 'get', attr);
            },
            fetch: function (options) {
                options = options ? _.clone(options) : {};
                if (options.parse === void 0)
                    options.parse = true;
                var success = options.success;
                var collection = this;
                options.success = function (resp) {
                    var method = options.reset ? 'reset' : 'set';
                    collection[method](resp, options);
                    if (success)
                        success(collection, resp, options);
                    collection.trigger('sync', collection, resp, options);
                };
                wrapError(this, options);
                return this.sync('read', this, options);
            },
            create: function (model, options) {
                options = options ? _.clone(options) : {};
                if (!(model = this._prepareModel(model, options)))
                    return false;
                if (!options.wait)
                    this.add(model, options);
                var collection = this;
                var success = options.success;
                options.success = function (model, resp) {
                    if (options.wait)
                        collection.add(model, options);
                    if (success)
                        success(model, resp, options);
                };
                model.save(null, options);
                return model;
            },
            parse: function (resp, options) {
                return resp;
            },
            clone: function () {
                return new this.constructor(this.models, {
                    model: this.model,
                    comparator: this.comparator
                });
            },
            modelId: function (attrs) {
                return attrs[this.model.prototype.idAttribute || 'id'];
            },
            _reset: function () {
                this.length = 0;
                this.models = [];
                this._byId = {};
            },
            _prepareModel: function (attrs, options) {
                if (this._isModel(attrs)) {
                    if (!attrs.collection)
                        attrs.collection = this;
                    return attrs;
                }
                options = options ? _.clone(options) : {};
                options.collection = this;
                var model = new this.model(attrs, options);
                if (!model.validationError)
                    return model;
                this.trigger('invalid', this, model.validationError, options);
                return false;
            },
            _isModel: function (model) {
                return model instanceof Model;
            },
            _addReference: function (model, options) {
                this._byId[model.cid] = model;
                var id = this.modelId(model.attributes);
                if (id != null)
                    this._byId[id] = model;
                model.on('all', this._onModelEvent, this);
            },
            _removeReference: function (model, options) {
                if (this === model.collection)
                    delete model.collection;
                model.off('all', this._onModelEvent, this);
            },
            _onModelEvent: function (event, model, collection, options) {
                if ((event === 'add' || event === 'remove') && collection !== this)
                    return;
                if (event === 'destroy')
                    this.remove(model, options);
                if (event === 'change') {
                    var prevId = this.modelId(model.previousAttributes());
                    var id = this.modelId(model.attributes);
                    if (prevId !== id) {
                        if (prevId != null)
                            delete this._byId[prevId];
                        if (id != null)
                            this._byId[id] = model;
                    }
                }
                this.trigger.apply(this, arguments);
            }
        });
        var methods = [
            'forEach',
            'each',
            'map',
            'collect',
            'reduce',
            'foldl',
            'inject',
            'reduceRight',
            'foldr',
            'find',
            'detect',
            'filter',
            'select',
            'reject',
            'every',
            'all',
            'some',
            'any',
            'include',
            'contains',
            'invoke',
            'max',
            'min',
            'toArray',
            'size',
            'first',
            'head',
            'take',
            'initial',
            'rest',
            'tail',
            'drop',
            'last',
            'without',
            'difference',
            'indexOf',
            'shuffle',
            'lastIndexOf',
            'isEmpty',
            'chain',
            'sample',
            'partition'
        ];
        _.each(methods, function (method) {
            if (!_[method])
                return;
            Collection.prototype[method] = function () {
                var args = slice.call(arguments);
                args.unshift(this.models);
                return _[method].apply(_, args);
            };
        });
        var attributeMethods = [
            'groupBy',
            'countBy',
            'sortBy',
            'indexBy'
        ];
        _.each(attributeMethods, function (method) {
            if (!_[method])
                return;
            Collection.prototype[method] = function (value, context) {
                var iterator = _.isFunction(value) ? value : function (model) {
                    return model.get(value);
                };
                return _[method](this.models, iterator, context);
            };
        });
        var View = Backbone.View = function (options) {
            this.cid = _.uniqueId('view');
            options || (options = {});
            _.extend(this, _.pick(options, viewOptions));
            this._ensureElement();
            this.initialize.apply(this, arguments);
        };
        var delegateEventSplitter = /^(\S+)\s*(.*)$/;
        var viewOptions = [
            'model',
            'collection',
            'el',
            'id',
            'attributes',
            'className',
            'tagName',
            'events'
        ];
        _.extend(View.prototype, Events, {
            tagName: 'div',
            $: function (selector) {
                return this.$el.find(selector);
            },
            initialize: function () {
            },
            render: function () {
                return this;
            },
            remove: function () {
                this._removeElement();
                this.stopListening();
                return this;
            },
            _removeElement: function () {
                this.$el.remove();
            },
            setElement: function (element) {
                this.undelegateEvents();
                this._setElement(element);
                this.delegateEvents();
                return this;
            },
            _setElement: function (el) {
                this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
                this.el = this.$el[0];
            },
            delegateEvents: function (events) {
                if (!(events || (events = _.result(this, 'events'))))
                    return this;
                this.undelegateEvents();
                for (var key in events) {
                    var method = events[key];
                    if (!_.isFunction(method))
                        method = this[events[key]];
                    if (!method)
                        continue;
                    var match = key.match(delegateEventSplitter);
                    this.delegate(match[1], match[2], _.bind(method, this));
                }
                return this;
            },
            delegate: function (eventName, selector, listener) {
                this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
            },
            undelegateEvents: function () {
                if (this.$el)
                    this.$el.off('.delegateEvents' + this.cid);
                return this;
            },
            undelegate: function (eventName, selector, listener) {
                this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
            },
            _createElement: function (tagName) {
                return document.createElement(tagName);
            },
            _ensureElement: function () {
                if (!this.el) {
                    var attrs = _.extend({}, _.result(this, 'attributes'));
                    if (this.id)
                        attrs.id = _.result(this, 'id');
                    if (this.className)
                        attrs['class'] = _.result(this, 'className');
                    this.setElement(this._createElement(_.result(this, 'tagName')));
                    this._setAttributes(attrs);
                } else {
                    this.setElement(_.result(this, 'el'));
                }
            },
            _setAttributes: function (attributes) {
                this.$el.attr(attributes);
            }
        });
        Backbone.sync = function (method, model, options) {
            var type = methodMap[method];
            _.defaults(options || (options = {}), {
                emulateHTTP: Backbone.emulateHTTP,
                emulateJSON: Backbone.emulateJSON
            });
            var params = {
                type: type,
                dataType: 'json'
            };
            if (!options.url) {
                params.url = _.result(model, 'url') || urlError();
            }
            if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
                params.contentType = 'application/json';
                params.data = JSON.stringify(options.attrs || model.toJSON(options));
            }
            if (options.emulateJSON) {
                params.contentType = 'application/x-www-form-urlencoded';
                params.data = params.data ? { model: params.data } : {};
            }
            if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
                params.type = 'POST';
                if (options.emulateJSON)
                    params.data._method = type;
                var beforeSend = options.beforeSend;
                options.beforeSend = function (xhr) {
                    xhr.setRequestHeader('X-HTTP-Method-Override', type);
                    if (beforeSend)
                        return beforeSend.apply(this, arguments);
                };
            }
            if (params.type !== 'GET' && !options.emulateJSON) {
                params.processData = false;
            }
            var error = options.error;
            options.error = function (xhr, textStatus, errorThrown) {
                options.textStatus = textStatus;
                options.errorThrown = errorThrown;
                if (error)
                    error.apply(this, arguments);
            };
            var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
            model.trigger('request', model, xhr, options);
            return xhr;
        };
        var methodMap = {
            'create': 'POST',
            'update': 'PUT',
            'patch': 'PATCH',
            'delete': 'DELETE',
            'read': 'GET'
        };
        Backbone.ajax = function () {
            return Backbone.$.ajax.apply(Backbone.$, arguments);
        };
        var Router = Backbone.Router = function (options) {
            options || (options = {});
            if (options.routes)
                this.routes = options.routes;
            this._bindRoutes();
            this.initialize.apply(this, arguments);
        };
        var optionalParam = /\((.*?)\)/g;
        var namedParam = /(\(\?)?:\w+/g;
        var splatParam = /\*\w+/g;
        var escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        _.extend(Router.prototype, Events, {
            initialize: function () {
            },
            route: function (route, name, callback) {
                if (!_.isRegExp(route))
                    route = this._routeToRegExp(route);
                if (_.isFunction(name)) {
                    callback = name;
                    name = '';
                }
                if (!callback)
                    callback = this[name];
                var router = this;
                Backbone.history.route(route, function (fragment) {
                    var args = router._extractParameters(route, fragment);
                    if (router.execute(callback, args, name) !== false) {
                        router.trigger.apply(router, ['route:' + name].concat(args));
                        router.trigger('route', name, args);
                        Backbone.history.trigger('route', router, name, args);
                    }
                });
                return this;
            },
            execute: function (callback, args, name) {
                if (callback)
                    callback.apply(this, args);
            },
            navigate: function (fragment, options) {
                Backbone.history.navigate(fragment, options);
                return this;
            },
            _bindRoutes: function () {
                if (!this.routes)
                    return;
                this.routes = _.result(this, 'routes');
                var route, routes = _.keys(this.routes);
                while ((route = routes.pop()) != null) {
                    this.route(route, this.routes[route]);
                }
            },
            _routeToRegExp: function (route) {
                route = route.replace(escapeRegExp, '\\$&').replace(optionalParam, '(?:$1)?').replace(namedParam, function (match, optional) {
                    return optional ? match : '([^/?]+)';
                }).replace(splatParam, '([^?]*?)');
                return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
            },
            _extractParameters: function (route, fragment) {
                var params = route.exec(fragment).slice(1);
                return _.map(params, function (param, i) {
                    if (i === params.length - 1)
                        return param || null;
                    return param ? decodeURIComponent(param) : null;
                });
            }
        });
        var History = Backbone.History = function () {
            this.handlers = [];
            _.bindAll(this, 'checkUrl');
            if (typeof window !== 'undefined') {
                this.location = window.location;
                this.history = window.history;
            }
        };
        var routeStripper = /^[#\/]|\s+$/g;
        var rootStripper = /^\/+|\/+$/g;
        var pathStripper = /#.*$/;
        History.started = false;
        _.extend(History.prototype, Events, {
            interval: 50,
            atRoot: function () {
                var path = this.location.pathname.replace(/[^\/]$/, '$&/');
                return path === this.root && !this.getSearch();
            },
            getSearch: function () {
                var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
                return match ? match[0] : '';
            },
            getHash: function (window) {
                var match = (window || this).location.href.match(/#(.*)$/);
                return match ? match[1] : '';
            },
            getPath: function () {
                var path = decodeURI(this.location.pathname + this.getSearch());
                var root = this.root.slice(0, -1);
                if (!path.indexOf(root))
                    path = path.slice(root.length);
                return path.charAt(0) === '/' ? path.slice(1) : path;
            },
            getFragment: function (fragment) {
                if (fragment == null) {
                    if (this._hasPushState || !this._wantsHashChange) {
                        fragment = this.getPath();
                    } else {
                        fragment = this.getHash();
                    }
                }
                return fragment.replace(routeStripper, '');
            },
            start: function (options) {
                if (History.started)
                    throw new Error('Backbone.history has already been started');
                History.started = true;
                this.options = _.extend({ root: '/' }, this.options, options);
                this.root = this.options.root;
                this._wantsHashChange = this.options.hashChange !== false;
                this._hasHashChange = 'onhashchange' in window;
                this._wantsPushState = !!this.options.pushState;
                this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                this.fragment = this.getFragment();
                this.root = ('/' + this.root + '/').replace(rootStripper, '/');
                if (this._wantsHashChange && this._wantsPushState) {
                    if (!this._hasPushState && !this.atRoot()) {
                        var root = this.root.slice(0, -1) || '/';
                        this.location.replace(root + '#' + this.getPath());
                        return true;
                    } else if (this._hasPushState && this.atRoot()) {
                        this.navigate(this.getHash(), { replace: true });
                    }
                }
                if (!this._hasHashChange && this._wantsHashChange && (!this._wantsPushState || !this._hasPushState)) {
                    var iframe = document.createElement('iframe');
                    iframe.src = 'javascript:0';
                    iframe.style.display = 'none';
                    iframe.tabIndex = -1;
                    var body = document.body;
                    this.iframe = body.insertBefore(iframe, body.firstChild).contentWindow;
                    this.iframe.document.open().close();
                    this.iframe.location.hash = '#' + this.fragment;
                }
                var addEventListener = window.addEventListener || function (eventName, listener) {
                    return attachEvent('on' + eventName, listener);
                };
                if (this._hasPushState) {
                    addEventListener('popstate', this.checkUrl, false);
                } else if (this._wantsHashChange && this._hasHashChange && !this.iframe) {
                    addEventListener('hashchange', this.checkUrl, false);
                } else if (this._wantsHashChange) {
                    this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
                }
                if (!this.options.silent)
                    return this.loadUrl();
            },
            stop: function () {
                var removeEventListener = window.removeEventListener || function (eventName, listener) {
                    return detachEvent('on' + eventName, listener);
                };
                if (this._hasPushState) {
                    removeEventListener('popstate', this.checkUrl, false);
                } else if (this._wantsHashChange && this._hasHashChange && !this.iframe) {
                    removeEventListener('hashchange', this.checkUrl, false);
                }
                if (this.iframe) {
                    document.body.removeChild(this.iframe.frameElement);
                    this.iframe = null;
                }
                if (this._checkUrlInterval)
                    clearInterval(this._checkUrlInterval);
                History.started = false;
            },
            route: function (route, callback) {
                this.handlers.unshift({
                    route: route,
                    callback: callback
                });
            },
            checkUrl: function (e) {
                var current = this.getFragment();
                if (current === this.fragment && this.iframe) {
                    current = this.getHash(this.iframe);
                }
                if (current === this.fragment)
                    return false;
                if (this.iframe)
                    this.navigate(current);
                this.loadUrl();
            },
            loadUrl: function (fragment) {
                fragment = this.fragment = this.getFragment(fragment);
                return _.any(this.handlers, function (handler) {
                    if (handler.route.test(fragment)) {
                        handler.callback(fragment);
                        return true;
                    }
                });
            },
            navigate: function (fragment, options) {
                if (!History.started)
                    return false;
                if (!options || options === true)
                    options = { trigger: !!options };
                fragment = this.getFragment(fragment || '');
                var root = this.root;
                if (fragment === '' || fragment.charAt(0) === '?') {
                    root = root.slice(0, -1) || '/';
                }
                var url = root + fragment;
                fragment = decodeURI(fragment.replace(pathStripper, ''));
                if (this.fragment === fragment)
                    return;
                this.fragment = fragment;
                if (this._hasPushState) {
                    this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);
                } else if (this._wantsHashChange) {
                    this._updateHash(this.location, fragment, options.replace);
                    if (this.iframe && fragment !== this.getHash(this.iframe)) {
                        if (!options.replace)
                            this.iframe.document.open().close();
                        this._updateHash(this.iframe.location, fragment, options.replace);
                    }
                } else {
                    return this.location.assign(url);
                }
                if (options.trigger)
                    return this.loadUrl(fragment);
            },
            _updateHash: function (location, fragment, replace) {
                if (replace) {
                    var href = location.href.replace(/(javascript:|#).*$/, '');
                    location.replace(href + '#' + fragment);
                } else {
                    location.hash = '#' + fragment;
                }
            }
        });
        Backbone.history = new History();
        var extend = function (protoProps, staticProps) {
            var parent = this;
            var child;
            if (protoProps && _.has(protoProps, 'constructor')) {
                child = protoProps.constructor;
            } else {
                child = function () {
                    return parent.apply(this, arguments);
                };
            }
            _.extend(child, parent, staticProps);
            var Surrogate = function () {
                this.constructor = child;
            };
            Surrogate.prototype = parent.prototype;
            child.prototype = new Surrogate();
            if (protoProps)
                _.extend(child.prototype, protoProps);
            child.__super__ = parent.prototype;
            return child;
        };
        Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;
        var urlError = function () {
            throw new Error('A "url" property or function must be specified');
        };
        var wrapError = function (model, options) {
            var error = options.error;
            options.error = function (resp) {
                if (error)
                    error(model, resp, options);
                model.trigger('error', model, resp, options);
            };
        };
        return Backbone;
    }));
}.call(this));
define('backbone', ['purebackbone'], function (BB) {
    return BB;
});
;
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('marionette', [
            'backbone',
            'underscore'
        ], function (Backbone, _) {
            return root.Marionette = root.Mn = factory(root, Backbone, _);
        });
    } else if (typeof exports !== 'undefined') {
        var Backbone = require('backbone');
        var _ = require('underscore');
        module.exports = factory(root, Backbone, _);
    } else {
        root.Marionette = root.Mn = factory(root, root.Backbone, root._);
    }
}(this, function (root, Backbone, _) {
    'use strict';
    (function (Backbone, _) {
        'use strict';
        var previousChildViewContainer = Backbone.ChildViewContainer;
        Backbone.ChildViewContainer = function (Backbone, _) {
            var Container = function (views) {
                this._views = {};
                this._indexByModel = {};
                this._indexByCustom = {};
                this._updateLength();
                _.each(views, this.add, this);
            };
            _.extend(Container.prototype, {
                add: function (view, customIndex) {
                    var viewCid = view.cid;
                    this._views[viewCid] = view;
                    if (view.model) {
                        this._indexByModel[view.model.cid] = viewCid;
                    }
                    if (customIndex) {
                        this._indexByCustom[customIndex] = viewCid;
                    }
                    this._updateLength();
                    return this;
                },
                findByModel: function (model) {
                    return this.findByModelCid(model.cid);
                },
                findByModelCid: function (modelCid) {
                    var viewCid = this._indexByModel[modelCid];
                    return this.findByCid(viewCid);
                },
                findByCustom: function (index) {
                    var viewCid = this._indexByCustom[index];
                    return this.findByCid(viewCid);
                },
                findByIndex: function (index) {
                    return _.values(this._views)[index];
                },
                findByCid: function (cid) {
                    return this._views[cid];
                },
                remove: function (view) {
                    var viewCid = view.cid;
                    if (view.model) {
                        delete this._indexByModel[view.model.cid];
                    }
                    _.any(this._indexByCustom, function (cid, key) {
                        if (cid === viewCid) {
                            delete this._indexByCustom[key];
                            return true;
                        }
                    }, this);
                    delete this._views[viewCid];
                    this._updateLength();
                    return this;
                },
                call: function (method) {
                    this.apply(method, _.tail(arguments));
                },
                apply: function (method, args) {
                    _.each(this._views, function (view) {
                        if (_.isFunction(view[method])) {
                            view[method].apply(view, args || []);
                        }
                    });
                },
                _updateLength: function () {
                    this.length = _.size(this._views);
                }
            });
            var methods = [
                'forEach',
                'each',
                'map',
                'find',
                'detect',
                'filter',
                'select',
                'reject',
                'every',
                'all',
                'some',
                'any',
                'include',
                'contains',
                'invoke',
                'toArray',
                'first',
                'initial',
                'rest',
                'last',
                'without',
                'isEmpty',
                'pluck',
                'reduce'
            ];
            _.each(methods, function (method) {
                Container.prototype[method] = function () {
                    var views = _.values(this._views);
                    var args = [views].concat(_.toArray(arguments));
                    return _[method].apply(_, args);
                };
            });
            return Container;
        }(Backbone, _);
        Backbone.ChildViewContainer.VERSION = '0.1.10';
        Backbone.ChildViewContainer.noConflict = function () {
            Backbone.ChildViewContainer = previousChildViewContainer;
            return this;
        };
        return Backbone.ChildViewContainer;
    }(Backbone, _));
    (function (Backbone, _) {
        'use strict';
        var previousWreqr = Backbone.Wreqr;
        var Wreqr = Backbone.Wreqr = {};
        Backbone.Wreqr.VERSION = '1.3.5';
        Backbone.Wreqr.noConflict = function () {
            Backbone.Wreqr = previousWreqr;
            return this;
        };
        Wreqr.Handlers = function (Backbone, _) {
            'use strict';
            var Handlers = function (options) {
                this.options = options;
                this._wreqrHandlers = {};
                if (_.isFunction(this.initialize)) {
                    this.initialize(options);
                }
            };
            Handlers.extend = Backbone.Model.extend;
            _.extend(Handlers.prototype, Backbone.Events, {
                setHandlers: function (handlers) {
                    _.each(handlers, function (handler, name) {
                        var context = null;
                        if (_.isObject(handler) && !_.isFunction(handler)) {
                            context = handler.context;
                            handler = handler.callback;
                        }
                        this.setHandler(name, handler, context);
                    }, this);
                },
                setHandler: function (name, handler, context) {
                    var config = {
                        callback: handler,
                        context: context
                    };
                    this._wreqrHandlers[name] = config;
                    this.trigger('handler:add', name, handler, context);
                },
                hasHandler: function (name) {
                    return !!this._wreqrHandlers[name];
                },
                getHandler: function (name) {
                    var config = this._wreqrHandlers[name];
                    if (!config) {
                        return;
                    }
                    return function () {
                        return config.callback.apply(config.context, arguments);
                    };
                },
                removeHandler: function (name) {
                    delete this._wreqrHandlers[name];
                },
                removeAllHandlers: function () {
                    this._wreqrHandlers = {};
                }
            });
            return Handlers;
        }(Backbone, _);
        Wreqr.CommandStorage = function () {
            'use strict';
            var CommandStorage = function (options) {
                this.options = options;
                this._commands = {};
                if (_.isFunction(this.initialize)) {
                    this.initialize(options);
                }
            };
            _.extend(CommandStorage.prototype, Backbone.Events, {
                getCommands: function (commandName) {
                    var commands = this._commands[commandName];
                    if (!commands) {
                        commands = {
                            command: commandName,
                            instances: []
                        };
                        this._commands[commandName] = commands;
                    }
                    return commands;
                },
                addCommand: function (commandName, args) {
                    var command = this.getCommands(commandName);
                    command.instances.push(args);
                },
                clearCommands: function (commandName) {
                    var command = this.getCommands(commandName);
                    command.instances = [];
                }
            });
            return CommandStorage;
        }();
        Wreqr.Commands = function (Wreqr, _) {
            'use strict';
            return Wreqr.Handlers.extend({
                storageType: Wreqr.CommandStorage,
                constructor: function (options) {
                    this.options = options || {};
                    this._initializeStorage(this.options);
                    this.on('handler:add', this._executeCommands, this);
                    Wreqr.Handlers.prototype.constructor.apply(this, arguments);
                },
                execute: function (name) {
                    name = arguments[0];
                    var args = _.rest(arguments);
                    if (this.hasHandler(name)) {
                        this.getHandler(name).apply(this, args);
                    } else {
                        this.storage.addCommand(name, args);
                    }
                },
                _executeCommands: function (name, handler, context) {
                    var command = this.storage.getCommands(name);
                    _.each(command.instances, function (args) {
                        handler.apply(context, args);
                    });
                    this.storage.clearCommands(name);
                },
                _initializeStorage: function (options) {
                    var storage;
                    var StorageType = options.storageType || this.storageType;
                    if (_.isFunction(StorageType)) {
                        storage = new StorageType();
                    } else {
                        storage = StorageType;
                    }
                    this.storage = storage;
                }
            });
        }(Wreqr, _);
        Wreqr.RequestResponse = function (Wreqr, _) {
            'use strict';
            return Wreqr.Handlers.extend({
                request: function (name) {
                    if (this.hasHandler(name)) {
                        return this.getHandler(name).apply(this, _.rest(arguments));
                    }
                }
            });
        }(Wreqr, _);
        Wreqr.EventAggregator = function (Backbone, _) {
            'use strict';
            var EA = function () {
            };
            EA.extend = Backbone.Model.extend;
            _.extend(EA.prototype, Backbone.Events);
            return EA;
        }(Backbone, _);
        Wreqr.Channel = function (Wreqr) {
            'use strict';
            var Channel = function (channelName) {
                this.vent = new Backbone.Wreqr.EventAggregator();
                this.reqres = new Backbone.Wreqr.RequestResponse();
                this.commands = new Backbone.Wreqr.Commands();
                this.channelName = channelName;
            };
            _.extend(Channel.prototype, {
                reset: function () {
                    this.vent.off();
                    this.vent.stopListening();
                    this.reqres.removeAllHandlers();
                    this.commands.removeAllHandlers();
                    return this;
                },
                connectEvents: function (hash, context) {
                    this._connect('vent', hash, context);
                    return this;
                },
                connectCommands: function (hash, context) {
                    this._connect('commands', hash, context);
                    return this;
                },
                connectRequests: function (hash, context) {
                    this._connect('reqres', hash, context);
                    return this;
                },
                _connect: function (type, hash, context) {
                    if (!hash) {
                        return;
                    }
                    context = context || this;
                    var method = type === 'vent' ? 'on' : 'setHandler';
                    _.each(hash, function (fn, eventName) {
                        this[type][method](eventName, _.bind(fn, context));
                    }, this);
                }
            });
            return Channel;
        }(Wreqr);
        Wreqr.radio = function (Wreqr, _) {
            'use strict';
            var Radio = function () {
                this._channels = {};
                this.vent = {};
                this.commands = {};
                this.reqres = {};
                this._proxyMethods();
            };
            _.extend(Radio.prototype, {
                channel: function (channelName) {
                    if (!channelName) {
                        throw new Error('Channel must receive a name');
                    }
                    return this._getChannel(channelName);
                },
                _getChannel: function (channelName) {
                    var channel = this._channels[channelName];
                    if (!channel) {
                        channel = new Wreqr.Channel(channelName);
                        this._channels[channelName] = channel;
                    }
                    return channel;
                },
                _proxyMethods: function () {
                    _.each([
                        'vent',
                        'commands',
                        'reqres'
                    ], function (system) {
                        _.each(messageSystems[system], function (method) {
                            this[system][method] = proxyMethod(this, system, method);
                        }, this);
                    }, this);
                }
            });
            var messageSystems = {
                vent: [
                    'on',
                    'off',
                    'trigger',
                    'once',
                    'stopListening',
                    'listenTo',
                    'listenToOnce'
                ],
                commands: [
                    'execute',
                    'setHandler',
                    'setHandlers',
                    'removeHandler',
                    'removeAllHandlers'
                ],
                reqres: [
                    'request',
                    'setHandler',
                    'setHandlers',
                    'removeHandler',
                    'removeAllHandlers'
                ]
            };
            var proxyMethod = function (radio, system, method) {
                return function (channelName) {
                    var messageSystem = radio._getChannel(channelName)[system];
                    return messageSystem[method].apply(messageSystem, _.rest(arguments));
                };
            };
            return new Radio();
        }(Wreqr, _);
        return Backbone.Wreqr;
    }(Backbone, _));
    var previousMarionette = root.Marionette;
    var previousMn = root.Mn;
    var Marionette = Backbone.Marionette = {};
    Marionette.VERSION = '2.4.4';
    Marionette.noConflict = function () {
        root.Marionette = previousMarionette;
        root.Mn = previousMn;
        return this;
    };
    Backbone.Marionette = Marionette;
    Marionette.Deferred = Backbone.$.Deferred;
    Marionette.extend = Backbone.Model.extend;
    Marionette.isNodeAttached = function (el) {
        return Backbone.$.contains(document.documentElement, el);
    };
    Marionette.mergeOptions = function (options, keys) {
        if (!options) {
            return;
        }
        _.extend(this, _.pick(options, keys));
    };
    Marionette.getOption = function (target, optionName) {
        if (!target || !optionName) {
            return;
        }
        if (target.options && target.options[optionName] !== undefined) {
            return target.options[optionName];
        } else {
            return target[optionName];
        }
    };
    Marionette.proxyGetOption = function (optionName) {
        return Marionette.getOption(this, optionName);
    };
    Marionette._getValue = function (value, context, params) {
        if (_.isFunction(value)) {
            value = params ? value.apply(context, params) : value.call(context);
        }
        return value;
    };
    Marionette.normalizeMethods = function (hash) {
        return _.reduce(hash, function (normalizedHash, method, name) {
            if (!_.isFunction(method)) {
                method = this[method];
            }
            if (method) {
                normalizedHash[name] = method;
            }
            return normalizedHash;
        }, {}, this);
    };
    Marionette.normalizeUIString = function (uiString, ui) {
        return uiString.replace(/@ui\.[a-zA-Z_$0-9]*/g, function (r) {
            return ui[r.slice(4)];
        });
    };
    Marionette.normalizeUIKeys = function (hash, ui) {
        return _.reduce(hash, function (memo, val, key) {
            var normalizedKey = Marionette.normalizeUIString(key, ui);
            memo[normalizedKey] = val;
            return memo;
        }, {});
    };
    Marionette.normalizeUIValues = function (hash, ui, properties) {
        _.each(hash, function (val, key) {
            if (_.isString(val)) {
                hash[key] = Marionette.normalizeUIString(val, ui);
            } else if (_.isObject(val) && _.isArray(properties)) {
                _.extend(val, Marionette.normalizeUIValues(_.pick(val, properties), ui));
                _.each(properties, function (property) {
                    var propertyVal = val[property];
                    if (_.isString(propertyVal)) {
                        val[property] = Marionette.normalizeUIString(propertyVal, ui);
                    }
                });
            }
        });
        return hash;
    };
    Marionette.actAsCollection = function (object, listProperty) {
        var methods = [
            'forEach',
            'each',
            'map',
            'find',
            'detect',
            'filter',
            'select',
            'reject',
            'every',
            'all',
            'some',
            'any',
            'include',
            'contains',
            'invoke',
            'toArray',
            'first',
            'initial',
            'rest',
            'last',
            'without',
            'isEmpty',
            'pluck'
        ];
        _.each(methods, function (method) {
            object[method] = function () {
                var list = _.values(_.result(this, listProperty));
                var args = [list].concat(_.toArray(arguments));
                return _[method].apply(_, args);
            };
        });
    };
    var deprecate = Marionette.deprecate = function (message, test) {
        if (_.isObject(message)) {
            message = message.prev + ' is going to be removed in the future. ' + 'Please use ' + message.next + ' instead.' + (message.url ? ' See: ' + message.url : '');
        }
        if ((test === undefined || !test) && !deprecate._cache[message]) {
            deprecate._warn('Deprecation warning: ' + message);
            deprecate._cache[message] = true;
        }
    };
    deprecate._warn = typeof console !== 'undefined' && (console.warn || console.log) || function () {
    };
    deprecate._cache = {};
    Marionette._triggerMethod = function () {
        var splitter = /(^|:)(\w)/gi;
        function getEventName(match, prefix, eventName) {
            return eventName.toUpperCase();
        }
        return function (context, event, args) {
            var noEventArg = arguments.length < 3;
            if (noEventArg) {
                args = event;
                event = args[0];
            }
            var methodName = 'on' + event.replace(splitter, getEventName);
            var method = context[methodName];
            var result;
            if (_.isFunction(method)) {
                result = method.apply(context, noEventArg ? _.rest(args) : args);
            }
            if (_.isFunction(context.trigger)) {
                if (noEventArg + args.length > 1) {
                    context.trigger.apply(context, noEventArg ? args : [event].concat(_.drop(args, 0)));
                } else {
                    context.trigger(event);
                }
            }
            return result;
        };
    }();
    Marionette.triggerMethod = function (event) {
        return Marionette._triggerMethod(this, arguments);
    };
    Marionette.triggerMethodOn = function (context) {
        var fnc = _.isFunction(context.triggerMethod) ? context.triggerMethod : Marionette.triggerMethod;
        return fnc.apply(context, _.rest(arguments));
    };
    Marionette.MonitorDOMRefresh = function (view) {
        if (view._isDomRefreshMonitored) {
            return;
        }
        view._isDomRefreshMonitored = true;
        function handleShow() {
            view._isShown = true;
            triggerDOMRefresh();
        }
        function handleRender() {
            view._isRendered = true;
            triggerDOMRefresh();
        }
        function triggerDOMRefresh() {
            if (view._isShown && view._isRendered && Marionette.isNodeAttached(view.el)) {
                Marionette.triggerMethodOn(view, 'dom:refresh', view);
            }
        }
        view.on({
            show: handleShow,
            render: handleRender
        });
    };
    (function (Marionette) {
        'use strict';
        function bindFromStrings(target, entity, evt, methods) {
            var methodNames = methods.split(/\s+/);
            _.each(methodNames, function (methodName) {
                var method = target[methodName];
                if (!method) {
                    throw new Marionette.Error('Method "' + methodName + '" was configured as an event handler, but does not exist.');
                }
                target.listenTo(entity, evt, method);
            });
        }
        function bindToFunction(target, entity, evt, method) {
            target.listenTo(entity, evt, method);
        }
        function unbindFromStrings(target, entity, evt, methods) {
            var methodNames = methods.split(/\s+/);
            _.each(methodNames, function (methodName) {
                var method = target[methodName];
                target.stopListening(entity, evt, method);
            });
        }
        function unbindToFunction(target, entity, evt, method) {
            target.stopListening(entity, evt, method);
        }
        function iterateEvents(target, entity, bindings, functionCallback, stringCallback) {
            if (!entity || !bindings) {
                return;
            }
            if (!_.isObject(bindings)) {
                throw new Marionette.Error({
                    message: 'Bindings must be an object or function.',
                    url: 'marionette.functions.html#marionettebindentityevents'
                });
            }
            bindings = Marionette._getValue(bindings, target);
            _.each(bindings, function (methods, evt) {
                if (_.isFunction(methods)) {
                    functionCallback(target, entity, evt, methods);
                } else {
                    stringCallback(target, entity, evt, methods);
                }
            });
        }
        Marionette.bindEntityEvents = function (target, entity, bindings) {
            iterateEvents(target, entity, bindings, bindToFunction, bindFromStrings);
        };
        Marionette.unbindEntityEvents = function (target, entity, bindings) {
            iterateEvents(target, entity, bindings, unbindToFunction, unbindFromStrings);
        };
        Marionette.proxyBindEntityEvents = function (entity, bindings) {
            return Marionette.bindEntityEvents(this, entity, bindings);
        };
        Marionette.proxyUnbindEntityEvents = function (entity, bindings) {
            return Marionette.unbindEntityEvents(this, entity, bindings);
        };
    }(Marionette));
    var errorProps = [
        'description',
        'fileName',
        'lineNumber',
        'name',
        'message',
        'number'
    ];
    Marionette.Error = Marionette.extend.call(Error, {
        urlRoot: 'http://marionettejs.com/docs/v' + Marionette.VERSION + '/',
        constructor: function (message, options) {
            if (_.isObject(message)) {
                options = message;
                message = options.message;
            } else if (!options) {
                options = {};
            }
            var error = Error.call(this, message);
            _.extend(this, _.pick(error, errorProps), _.pick(options, errorProps));
            this.captureStackTrace();
            if (options.url) {
                this.url = this.urlRoot + options.url;
            }
        },
        captureStackTrace: function () {
            if (Error.captureStackTrace) {
                Error.captureStackTrace(this, Marionette.Error);
            }
        },
        toString: function () {
            return this.name + ': ' + this.message + (this.url ? ' See: ' + this.url : '');
        }
    });
    Marionette.Error.extend = Marionette.extend;
    Marionette.Callbacks = function () {
        this._deferred = Marionette.Deferred();
        this._callbacks = [];
    };
    _.extend(Marionette.Callbacks.prototype, {
        add: function (callback, contextOverride) {
            var promise = _.result(this._deferred, 'promise');
            this._callbacks.push({
                cb: callback,
                ctx: contextOverride
            });
            promise.then(function (args) {
                if (contextOverride) {
                    args.context = contextOverride;
                }
                callback.call(args.context, args.options);
            });
        },
        run: function (options, context) {
            this._deferred.resolve({
                options: options,
                context: context
            });
        },
        reset: function () {
            var callbacks = this._callbacks;
            this._deferred = Marionette.Deferred();
            this._callbacks = [];
            _.each(callbacks, function (cb) {
                this.add(cb.cb, cb.ctx);
            }, this);
        }
    });
    Marionette.Controller = function (options) {
        this.options = options || {};
        if (_.isFunction(this.initialize)) {
            this.initialize(this.options);
        }
    };
    Marionette.Controller.extend = Marionette.extend;
    _.extend(Marionette.Controller.prototype, Backbone.Events, {
        destroy: function () {
            Marionette._triggerMethod(this, 'before:destroy', arguments);
            Marionette._triggerMethod(this, 'destroy', arguments);
            this.stopListening();
            this.off();
            return this;
        },
        triggerMethod: Marionette.triggerMethod,
        mergeOptions: Marionette.mergeOptions,
        getOption: Marionette.proxyGetOption
    });
    Marionette.Object = function (options) {
        this.options = _.extend({}, _.result(this, 'options'), options);
        this.initialize.apply(this, arguments);
    };
    Marionette.Object.extend = Marionette.extend;
    _.extend(Marionette.Object.prototype, Backbone.Events, {
        initialize: function () {
        },
        destroy: function (options) {
            options = options || {};
            this.triggerMethod('before:destroy', options);
            this.triggerMethod('destroy', options);
            this.stopListening();
            return this;
        },
        triggerMethod: Marionette.triggerMethod,
        mergeOptions: Marionette.mergeOptions,
        getOption: Marionette.proxyGetOption,
        bindEntityEvents: Marionette.proxyBindEntityEvents,
        unbindEntityEvents: Marionette.proxyUnbindEntityEvents
    });
    Marionette.Region = Marionette.Object.extend({
        constructor: function (options) {
            this.options = options || {};
            this.el = this.getOption('el');
            this.el = this.el instanceof Backbone.$ ? this.el[0] : this.el;
            if (!this.el) {
                throw new Marionette.Error({
                    name: 'NoElError',
                    message: 'An "el" must be specified for a region.'
                });
            }
            this.$el = this.getEl(this.el);
            Marionette.Object.call(this, options);
        },
        show: function (view, options) {
            if (!this._ensureElement()) {
                return;
            }
            this._ensureViewIsIntact(view);
            Marionette.MonitorDOMRefresh(view);
            var showOptions = options || {};
            var isDifferentView = view !== this.currentView;
            var preventDestroy = !!showOptions.preventDestroy;
            var forceShow = !!showOptions.forceShow;
            var isChangingView = !!this.currentView;
            var _shouldDestroyView = isDifferentView && !preventDestroy;
            var _shouldShowView = isDifferentView || forceShow;
            if (isChangingView) {
                this.triggerMethod('before:swapOut', this.currentView, this, options);
            }
            if (this.currentView) {
                delete this.currentView._parent;
            }
            if (_shouldDestroyView) {
                this.empty();
            } else if (isChangingView && _shouldShowView) {
                this.currentView.off('destroy', this.empty, this);
            }
            if (_shouldShowView) {
                view.once('destroy', this.empty, this);
                view._parent = this;
                this._renderView(view);
                if (isChangingView) {
                    this.triggerMethod('before:swap', view, this, options);
                }
                this.triggerMethod('before:show', view, this, options);
                Marionette.triggerMethodOn(view, 'before:show', view, this, options);
                if (isChangingView) {
                    this.triggerMethod('swapOut', this.currentView, this, options);
                }
                var attachedRegion = Marionette.isNodeAttached(this.el);
                var displayedViews = [];
                var attachOptions = _.extend({
                    triggerBeforeAttach: this.triggerBeforeAttach,
                    triggerAttach: this.triggerAttach
                }, showOptions);
                if (attachedRegion && attachOptions.triggerBeforeAttach) {
                    displayedViews = this._displayedViews(view);
                    this._triggerAttach(displayedViews, 'before:');
                }
                this.attachHtml(view);
                this.currentView = view;
                if (attachedRegion && attachOptions.triggerAttach) {
                    displayedViews = this._displayedViews(view);
                    this._triggerAttach(displayedViews);
                }
                if (isChangingView) {
                    this.triggerMethod('swap', view, this, options);
                }
                this.triggerMethod('show', view, this, options);
                Marionette.triggerMethodOn(view, 'show', view, this, options);
                return this;
            }
            return this;
        },
        triggerBeforeAttach: true,
        triggerAttach: true,
        _triggerAttach: function (views, prefix) {
            var eventName = (prefix || '') + 'attach';
            _.each(views, function (view) {
                Marionette.triggerMethodOn(view, eventName, view, this);
            }, this);
        },
        _displayedViews: function (view) {
            return _.union([view], _.result(view, '_getNestedViews') || []);
        },
        _renderView: function (view) {
            if (!view.supportsRenderLifecycle) {
                Marionette.triggerMethodOn(view, 'before:render', view);
            }
            view.render();
            if (!view.supportsRenderLifecycle) {
                Marionette.triggerMethodOn(view, 'render', view);
            }
        },
        _ensureElement: function () {
            if (!_.isObject(this.el)) {
                this.$el = this.getEl(this.el);
                this.el = this.$el[0];
            }
            if (!this.$el || this.$el.length === 0) {
                if (this.getOption('allowMissingEl')) {
                    return false;
                } else {
                    throw new Marionette.Error('An "el" ' + this.$el.selector + ' must exist in DOM');
                }
            }
            return true;
        },
        _ensureViewIsIntact: function (view) {
            if (!view) {
                throw new Marionette.Error({
                    name: 'ViewNotValid',
                    message: 'The view passed is undefined and therefore invalid. You must pass a view instance to show.'
                });
            }
            if (view.isDestroyed) {
                throw new Marionette.Error({
                    name: 'ViewDestroyedError',
                    message: 'View (cid: "' + view.cid + '") has already been destroyed and cannot be used.'
                });
            }
        },
        getEl: function (el) {
            return Backbone.$(el, Marionette._getValue(this.options.parentEl, this));
        },
        attachHtml: function (view) {
            this.$el.contents().detach();
            this.el.appendChild(view.el);
        },
        empty: function (options) {
            var view = this.currentView;
            var emptyOptions = options || {};
            var preventDestroy = !!emptyOptions.preventDestroy;
            if (!view) {
                return this;
            }
            view.off('destroy', this.empty, this);
            this.triggerMethod('before:empty', view);
            if (!preventDestroy) {
                this._destroyView();
            }
            this.triggerMethod('empty', view);
            delete this.currentView;
            if (preventDestroy) {
                this.$el.contents().detach();
            }
            return this;
        },
        _destroyView: function () {
            var view = this.currentView;
            if (view.isDestroyed) {
                return;
            }
            if (!view.supportsDestroyLifecycle) {
                Marionette.triggerMethodOn(view, 'before:destroy', view);
            }
            if (view.destroy) {
                view.destroy();
            } else {
                view.remove();
                view.isDestroyed = true;
            }
            if (!view.supportsDestroyLifecycle) {
                Marionette.triggerMethodOn(view, 'destroy', view);
            }
        },
        attachView: function (view) {
            if (this.currentView) {
                delete this.currentView._parent;
            }
            view._parent = this;
            this.currentView = view;
            return this;
        },
        hasView: function () {
            return !!this.currentView;
        },
        reset: function () {
            this.empty();
            if (this.$el) {
                this.el = this.$el.selector;
            }
            delete this.$el;
            return this;
        }
    }, {
        buildRegion: function (regionConfig, DefaultRegionClass) {
            if (_.isString(regionConfig)) {
                return this._buildRegionFromSelector(regionConfig, DefaultRegionClass);
            }
            if (regionConfig.selector || regionConfig.el || regionConfig.regionClass) {
                return this._buildRegionFromObject(regionConfig, DefaultRegionClass);
            }
            if (_.isFunction(regionConfig)) {
                return this._buildRegionFromRegionClass(regionConfig);
            }
            throw new Marionette.Error({
                message: 'Improper region configuration type.',
                url: 'marionette.region.html#region-configuration-types'
            });
        },
        _buildRegionFromSelector: function (selector, DefaultRegionClass) {
            return new DefaultRegionClass({ el: selector });
        },
        _buildRegionFromObject: function (regionConfig, DefaultRegionClass) {
            var RegionClass = regionConfig.regionClass || DefaultRegionClass;
            var options = _.omit(regionConfig, 'selector', 'regionClass');
            if (regionConfig.selector && !options.el) {
                options.el = regionConfig.selector;
            }
            return new RegionClass(options);
        },
        _buildRegionFromRegionClass: function (RegionClass) {
            return new RegionClass();
        }
    });
    Marionette.RegionManager = Marionette.Controller.extend({
        constructor: function (options) {
            this._regions = {};
            this.length = 0;
            Marionette.Controller.call(this, options);
            this.addRegions(this.getOption('regions'));
        },
        addRegions: function (regionDefinitions, defaults) {
            regionDefinitions = Marionette._getValue(regionDefinitions, this, arguments);
            return _.reduce(regionDefinitions, function (regions, definition, name) {
                if (_.isString(definition)) {
                    definition = { selector: definition };
                }
                if (definition.selector) {
                    definition = _.defaults({}, definition, defaults);
                }
                regions[name] = this.addRegion(name, definition);
                return regions;
            }, {}, this);
        },
        addRegion: function (name, definition) {
            var region;
            if (definition instanceof Marionette.Region) {
                region = definition;
            } else {
                region = Marionette.Region.buildRegion(definition, Marionette.Region);
            }
            this.triggerMethod('before:add:region', name, region);
            region._parent = this;
            this._store(name, region);
            this.triggerMethod('add:region', name, region);
            return region;
        },
        get: function (name) {
            return this._regions[name];
        },
        getRegions: function () {
            return _.clone(this._regions);
        },
        removeRegion: function (name) {
            var region = this._regions[name];
            this._remove(name, region);
            return region;
        },
        removeRegions: function () {
            var regions = this.getRegions();
            _.each(this._regions, function (region, name) {
                this._remove(name, region);
            }, this);
            return regions;
        },
        emptyRegions: function () {
            var regions = this.getRegions();
            _.invoke(regions, 'empty');
            return regions;
        },
        destroy: function () {
            this.removeRegions();
            return Marionette.Controller.prototype.destroy.apply(this, arguments);
        },
        _store: function (name, region) {
            if (!this._regions[name]) {
                this.length++;
            }
            this._regions[name] = region;
        },
        _remove: function (name, region) {
            this.triggerMethod('before:remove:region', name, region);
            region.empty();
            region.stopListening();
            delete region._parent;
            delete this._regions[name];
            this.length--;
            this.triggerMethod('remove:region', name, region);
        }
    });
    Marionette.actAsCollection(Marionette.RegionManager.prototype, '_regions');
    Marionette.TemplateCache = function (templateId) {
        this.templateId = templateId;
    };
    _.extend(Marionette.TemplateCache, {
        templateCaches: {},
        get: function (templateId, options) {
            var cachedTemplate = this.templateCaches[templateId];
            if (!cachedTemplate) {
                cachedTemplate = new Marionette.TemplateCache(templateId);
                this.templateCaches[templateId] = cachedTemplate;
            }
            return cachedTemplate.load(options);
        },
        clear: function () {
            var i;
            var args = _.toArray(arguments);
            var length = args.length;
            if (length > 0) {
                for (i = 0; i < length; i++) {
                    delete this.templateCaches[args[i]];
                }
            } else {
                this.templateCaches = {};
            }
        }
    });
    _.extend(Marionette.TemplateCache.prototype, {
        load: function (options) {
            if (this.compiledTemplate) {
                return this.compiledTemplate;
            }
            var template = this.loadTemplate(this.templateId, options);
            this.compiledTemplate = this.compileTemplate(template, options);
            return this.compiledTemplate;
        },
        loadTemplate: function (templateId, options) {
            var $template = Backbone.$(templateId);
            if (!$template.length) {
                throw new Marionette.Error({
                    name: 'NoTemplateError',
                    message: 'Could not find template: "' + templateId + '"'
                });
            }
            return $template.html();
        },
        compileTemplate: function (rawTemplate, options) {
            return _.template(rawTemplate, options);
        }
    });
    Marionette.Renderer = {
        render: function (template, data) {
            if (!template) {
                throw new Marionette.Error({
                    name: 'TemplateNotFoundError',
                    message: 'Cannot render the template since its false, null or undefined.'
                });
            }
            var templateFunc = _.isFunction(template) ? template : Marionette.TemplateCache.get(template);
            return templateFunc(data);
        }
    };
    Marionette.View = Backbone.View.extend({
        isDestroyed: false,
        supportsRenderLifecycle: true,
        supportsDestroyLifecycle: true,
        constructor: function (options) {
            this.render = _.bind(this.render, this);
            options = Marionette._getValue(options, this);
            this.options = _.extend({}, _.result(this, 'options'), options);
            this._behaviors = Marionette.Behaviors(this);
            Backbone.View.call(this, this.options);
            Marionette.MonitorDOMRefresh(this);
        },
        getTemplate: function () {
            return this.getOption('template');
        },
        serializeModel: function (model) {
            return model.toJSON.apply(model, _.rest(arguments));
        },
        mixinTemplateHelpers: function (target) {
            target = target || {};
            var templateHelpers = this.getOption('templateHelpers');
            templateHelpers = Marionette._getValue(templateHelpers, this);
            return _.extend(target, templateHelpers);
        },
        normalizeUIKeys: function (hash) {
            var uiBindings = _.result(this, '_uiBindings');
            return Marionette.normalizeUIKeys(hash, uiBindings || _.result(this, 'ui'));
        },
        normalizeUIValues: function (hash, properties) {
            var ui = _.result(this, 'ui');
            var uiBindings = _.result(this, '_uiBindings');
            return Marionette.normalizeUIValues(hash, uiBindings || ui, properties);
        },
        configureTriggers: function () {
            if (!this.triggers) {
                return;
            }
            var triggers = this.normalizeUIKeys(_.result(this, 'triggers'));
            return _.reduce(triggers, function (events, value, key) {
                events[key] = this._buildViewTrigger(value);
                return events;
            }, {}, this);
        },
        delegateEvents: function (events) {
            this._delegateDOMEvents(events);
            this.bindEntityEvents(this.model, this.getOption('modelEvents'));
            this.bindEntityEvents(this.collection, this.getOption('collectionEvents'));
            _.each(this._behaviors, function (behavior) {
                behavior.bindEntityEvents(this.model, behavior.getOption('modelEvents'));
                behavior.bindEntityEvents(this.collection, behavior.getOption('collectionEvents'));
            }, this);
            return this;
        },
        _delegateDOMEvents: function (eventsArg) {
            var events = Marionette._getValue(eventsArg || this.events, this);
            events = this.normalizeUIKeys(events);
            if (_.isUndefined(eventsArg)) {
                this.events = events;
            }
            var combinedEvents = {};
            var behaviorEvents = _.result(this, 'behaviorEvents') || {};
            var triggers = this.configureTriggers();
            var behaviorTriggers = _.result(this, 'behaviorTriggers') || {};
            _.extend(combinedEvents, behaviorEvents, events, triggers, behaviorTriggers);
            Backbone.View.prototype.delegateEvents.call(this, combinedEvents);
        },
        undelegateEvents: function () {
            Backbone.View.prototype.undelegateEvents.apply(this, arguments);
            this.unbindEntityEvents(this.model, this.getOption('modelEvents'));
            this.unbindEntityEvents(this.collection, this.getOption('collectionEvents'));
            _.each(this._behaviors, function (behavior) {
                behavior.unbindEntityEvents(this.model, behavior.getOption('modelEvents'));
                behavior.unbindEntityEvents(this.collection, behavior.getOption('collectionEvents'));
            }, this);
            return this;
        },
        _ensureViewIsIntact: function () {
            if (this.isDestroyed) {
                throw new Marionette.Error({
                    name: 'ViewDestroyedError',
                    message: 'View (cid: "' + this.cid + '") has already been destroyed and cannot be used.'
                });
            }
        },
        destroy: function () {
            if (this.isDestroyed) {
                return this;
            }
            var args = _.toArray(arguments);
            this.triggerMethod.apply(this, ['before:destroy'].concat(args));
            this.isDestroyed = true;
            this.triggerMethod.apply(this, ['destroy'].concat(args));
            this.unbindUIElements();
            this.isRendered = false;
            this.remove();
            _.invoke(this._behaviors, 'destroy', args);
            return this;
        },
        bindUIElements: function () {
            this._bindUIElements();
            _.invoke(this._behaviors, this._bindUIElements);
        },
        _bindUIElements: function () {
            if (!this.ui) {
                return;
            }
            if (!this._uiBindings) {
                this._uiBindings = this.ui;
            }
            var bindings = _.result(this, '_uiBindings');
            this.ui = {};
            _.each(bindings, function (selector, key) {
                this.ui[key] = this.$(selector);
            }, this);
        },
        unbindUIElements: function () {
            this._unbindUIElements();
            _.invoke(this._behaviors, this._unbindUIElements);
        },
        _unbindUIElements: function () {
            if (!this.ui || !this._uiBindings) {
                return;
            }
            _.each(this.ui, function ($el, name) {
                delete this.ui[name];
            }, this);
            this.ui = this._uiBindings;
            delete this._uiBindings;
        },
        _buildViewTrigger: function (triggerDef) {
            var options = _.defaults({}, triggerDef, {
                preventDefault: true,
                stopPropagation: true
            });
            var eventName = _.isObject(triggerDef) ? options.event : triggerDef;
            return function (e) {
                if (e) {
                    if (e.preventDefault && options.preventDefault) {
                        e.preventDefault();
                    }
                    if (e.stopPropagation && options.stopPropagation) {
                        e.stopPropagation();
                    }
                }
                var args = {
                    view: this,
                    model: this.model,
                    collection: this.collection
                };
                this.triggerMethod(eventName, args);
            };
        },
        setElement: function () {
            var ret = Backbone.View.prototype.setElement.apply(this, arguments);
            _.invoke(this._behaviors, 'proxyViewProperties', this);
            return ret;
        },
        triggerMethod: function () {
            var ret = Marionette._triggerMethod(this, arguments);
            this._triggerEventOnBehaviors(arguments);
            this._triggerEventOnParentLayout(arguments[0], _.rest(arguments));
            return ret;
        },
        _triggerEventOnBehaviors: function (args) {
            var triggerMethod = Marionette._triggerMethod;
            var behaviors = this._behaviors;
            for (var i = 0, length = behaviors && behaviors.length; i < length; i++) {
                triggerMethod(behaviors[i], args);
            }
        },
        _triggerEventOnParentLayout: function (eventName, args) {
            var layoutView = this._parentLayoutView();
            if (!layoutView) {
                return;
            }
            var eventPrefix = Marionette.getOption(layoutView, 'childViewEventPrefix');
            var prefixedEventName = eventPrefix + ':' + eventName;
            var callArgs = [this].concat(args);
            Marionette._triggerMethod(layoutView, prefixedEventName, callArgs);
            var childEvents = Marionette.getOption(layoutView, 'childEvents');
            childEvents = Marionette._getValue(childEvents, layoutView);
            var normalizedChildEvents = layoutView.normalizeMethods(childEvents);
            if (normalizedChildEvents && _.isFunction(normalizedChildEvents[eventName])) {
                normalizedChildEvents[eventName].apply(layoutView, callArgs);
            }
        },
        _getImmediateChildren: function () {
            return [];
        },
        _getNestedViews: function () {
            var children = this._getImmediateChildren();
            if (!children.length) {
                return children;
            }
            return _.reduce(children, function (memo, view) {
                if (!view._getNestedViews) {
                    return memo;
                }
                return memo.concat(view._getNestedViews());
            }, children);
        },
        _parentLayoutView: function () {
            var parent = this._parent;
            while (parent) {
                if (parent instanceof Marionette.LayoutView) {
                    return parent;
                }
                parent = parent._parent;
            }
        },
        normalizeMethods: Marionette.normalizeMethods,
        mergeOptions: Marionette.mergeOptions,
        getOption: Marionette.proxyGetOption,
        bindEntityEvents: Marionette.proxyBindEntityEvents,
        unbindEntityEvents: Marionette.proxyUnbindEntityEvents
    });
    Marionette.ItemView = Marionette.View.extend({
        constructor: function () {
            Marionette.View.apply(this, arguments);
        },
        serializeData: function () {
            if (!this.model && !this.collection) {
                return {};
            }
            var args = [this.model || this.collection];
            if (arguments.length) {
                args.push.apply(args, arguments);
            }
            if (this.model) {
                return this.serializeModel.apply(this, args);
            } else {
                return { items: this.serializeCollection.apply(this, args) };
            }
        },
        serializeCollection: function (collection) {
            return collection.toJSON.apply(collection, _.rest(arguments));
        },
        render: function () {
            this._ensureViewIsIntact();
            this.triggerMethod('before:render', this);
            this._renderTemplate();
            this.isRendered = true;
            this.bindUIElements();
            this.triggerMethod('render', this);
            return this;
        },
        _renderTemplate: function () {
            var template = this.getTemplate();
            if (template === false) {
                return;
            }
            if (!template) {
                throw new Marionette.Error({
                    name: 'UndefinedTemplateError',
                    message: 'Cannot render the template since it is null or undefined.'
                });
            }
            var data = this.mixinTemplateHelpers(this.serializeData());
            var html = Marionette.Renderer.render(template, data, this);
            this.attachElContent(html);
            return this;
        },
        attachElContent: function (html) {
            this.$el.html(html);
            return this;
        }
    });
    Marionette.CollectionView = Marionette.View.extend({
        childViewEventPrefix: 'childview',
        sort: true,
        constructor: function (options) {
            this.once('render', this._initialEvents);
            this._initChildViewStorage();
            Marionette.View.apply(this, arguments);
            this.on({
                'before:show': this._onBeforeShowCalled,
                'show': this._onShowCalled,
                'before:attach': this._onBeforeAttachCalled,
                'attach': this._onAttachCalled
            });
            this.initRenderBuffer();
        },
        initRenderBuffer: function () {
            this._bufferedChildren = [];
        },
        startBuffering: function () {
            this.initRenderBuffer();
            this.isBuffering = true;
        },
        endBuffering: function () {
            var canTriggerAttach = this._isShown && Marionette.isNodeAttached(this.el);
            var nestedViews;
            this.isBuffering = false;
            if (this._isShown) {
                this._triggerMethodMany(this._bufferedChildren, this, 'before:show');
            }
            if (canTriggerAttach && this._triggerBeforeAttach) {
                nestedViews = this._getNestedViews();
                this._triggerMethodMany(nestedViews, this, 'before:attach');
            }
            this.attachBuffer(this, this._createBuffer());
            if (canTriggerAttach && this._triggerAttach) {
                nestedViews = this._getNestedViews();
                this._triggerMethodMany(nestedViews, this, 'attach');
            }
            if (this._isShown) {
                this._triggerMethodMany(this._bufferedChildren, this, 'show');
            }
            this.initRenderBuffer();
        },
        _triggerMethodMany: function (targets, source, eventName) {
            var args = _.drop(arguments, 3);
            _.each(targets, function (target) {
                Marionette.triggerMethodOn.apply(target, [
                    target,
                    eventName,
                    target,
                    source
                ].concat(args));
            });
        },
        _initialEvents: function () {
            if (this.collection) {
                this.listenTo(this.collection, 'add', this._onCollectionAdd);
                this.listenTo(this.collection, 'remove', this._onCollectionRemove);
                this.listenTo(this.collection, 'reset', this.render);
                if (this.getOption('sort')) {
                    this.listenTo(this.collection, 'sort', this._sortViews);
                }
            }
        },
        _onCollectionAdd: function (child, collection, opts) {
            var index = opts.at !== undefined && (opts.index || collection.indexOf(child));
            if (this.getOption('filter') || index === false) {
                index = _.indexOf(this._filteredSortedModels(index), child);
            }
            if (this._shouldAddChild(child, index)) {
                this.destroyEmptyView();
                var ChildView = this.getChildView(child);
                this.addChild(child, ChildView, index);
            }
        },
        _onCollectionRemove: function (model) {
            var view = this.children.findByModel(model);
            this.removeChildView(view);
            this.checkEmpty();
        },
        _onBeforeShowCalled: function () {
            this._triggerBeforeAttach = this._triggerAttach = false;
            this.children.each(function (childView) {
                Marionette.triggerMethodOn(childView, 'before:show', childView);
            });
        },
        _onShowCalled: function () {
            this.children.each(function (childView) {
                Marionette.triggerMethodOn(childView, 'show', childView);
            });
        },
        _onBeforeAttachCalled: function () {
            this._triggerBeforeAttach = true;
        },
        _onAttachCalled: function () {
            this._triggerAttach = true;
        },
        render: function () {
            this._ensureViewIsIntact();
            this.triggerMethod('before:render', this);
            this._renderChildren();
            this.isRendered = true;
            this.triggerMethod('render', this);
            return this;
        },
        reorder: function () {
            var children = this.children;
            var models = this._filteredSortedModels();
            var anyModelsAdded = _.some(models, function (model) {
                return !children.findByModel(model);
            });
            if (anyModelsAdded) {
                this.render();
            } else {
                var elsToReorder = _.map(models, function (model, index) {
                    var view = children.findByModel(model);
                    view._index = index;
                    return view.el;
                });
                var filteredOutViews = children.filter(function (view) {
                    return !_.contains(elsToReorder, view.el);
                });
                this.triggerMethod('before:reorder');
                this._appendReorderedChildren(elsToReorder);
                _.each(filteredOutViews, this.removeChildView, this);
                this.checkEmpty();
                this.triggerMethod('reorder');
            }
        },
        resortView: function () {
            if (Marionette.getOption(this, 'reorderOnSort')) {
                this.reorder();
            } else {
                this.render();
            }
        },
        _sortViews: function () {
            var models = this._filteredSortedModels();
            var orderChanged = _.find(models, function (item, index) {
                var view = this.children.findByModel(item);
                return !view || view._index !== index;
            }, this);
            if (orderChanged) {
                this.resortView();
            }
        },
        _emptyViewIndex: -1,
        _appendReorderedChildren: function (children) {
            this.$el.append(children);
        },
        _renderChildren: function () {
            this.destroyEmptyView();
            this.destroyChildren({ checkEmpty: false });
            if (this.isEmpty(this.collection)) {
                this.showEmptyView();
            } else {
                this.triggerMethod('before:render:collection', this);
                this.startBuffering();
                this.showCollection();
                this.endBuffering();
                this.triggerMethod('render:collection', this);
                if (this.children.isEmpty() && this.getOption('filter')) {
                    this.showEmptyView();
                }
            }
        },
        showCollection: function () {
            var ChildView;
            var models = this._filteredSortedModels();
            _.each(models, function (child, index) {
                ChildView = this.getChildView(child);
                this.addChild(child, ChildView, index);
            }, this);
        },
        _filteredSortedModels: function (addedAt) {
            var viewComparator = this.getViewComparator();
            var models = this.collection.models;
            addedAt = Math.min(Math.max(addedAt, 0), models.length - 1);
            if (viewComparator) {
                var addedModel;
                if (addedAt) {
                    addedModel = models[addedAt];
                    models = models.slice(0, addedAt).concat(models.slice(addedAt + 1));
                }
                models = this._sortModelsBy(models, viewComparator);
                if (addedModel) {
                    models.splice(addedAt, 0, addedModel);
                }
            }
            if (this.getOption('filter')) {
                models = _.filter(models, function (model, index) {
                    return this._shouldAddChild(model, index);
                }, this);
            }
            return models;
        },
        _sortModelsBy: function (models, comparator) {
            if (typeof comparator === 'string') {
                return _.sortBy(models, function (model) {
                    return model.get(comparator);
                }, this);
            } else if (comparator.length === 1) {
                return _.sortBy(models, comparator, this);
            } else {
                return models.sort(_.bind(comparator, this));
            }
        },
        showEmptyView: function () {
            var EmptyView = this.getEmptyView();
            if (EmptyView && !this._showingEmptyView) {
                this.triggerMethod('before:render:empty');
                this._showingEmptyView = true;
                var model = new Backbone.Model();
                this.addEmptyView(model, EmptyView);
                this.triggerMethod('render:empty');
            }
        },
        destroyEmptyView: function () {
            if (this._showingEmptyView) {
                this.triggerMethod('before:remove:empty');
                this.destroyChildren();
                delete this._showingEmptyView;
                this.triggerMethod('remove:empty');
            }
        },
        getEmptyView: function () {
            return this.getOption('emptyView');
        },
        addEmptyView: function (child, EmptyView) {
            var canTriggerAttach = this._isShown && !this.isBuffering && Marionette.isNodeAttached(this.el);
            var nestedViews;
            var emptyViewOptions = this.getOption('emptyViewOptions') || this.getOption('childViewOptions');
            if (_.isFunction(emptyViewOptions)) {
                emptyViewOptions = emptyViewOptions.call(this, child, this._emptyViewIndex);
            }
            var view = this.buildChildView(child, EmptyView, emptyViewOptions);
            view._parent = this;
            this.proxyChildEvents(view);
            view.once('render', function () {
                if (this._isShown) {
                    Marionette.triggerMethodOn(view, 'before:show', view);
                }
                if (canTriggerAttach && this._triggerBeforeAttach) {
                    nestedViews = this._getViewAndNested(view);
                    this._triggerMethodMany(nestedViews, this, 'before:attach');
                }
            }, this);
            this.children.add(view);
            this.renderChildView(view, this._emptyViewIndex);
            if (canTriggerAttach && this._triggerAttach) {
                nestedViews = this._getViewAndNested(view);
                this._triggerMethodMany(nestedViews, this, 'attach');
            }
            if (this._isShown) {
                Marionette.triggerMethodOn(view, 'show', view);
            }
        },
        getChildView: function (child) {
            var childView = this.getOption('childView');
            if (!childView) {
                throw new Marionette.Error({
                    name: 'NoChildViewError',
                    message: 'A "childView" must be specified'
                });
            }
            return childView;
        },
        addChild: function (child, ChildView, index) {
            var childViewOptions = this.getOption('childViewOptions');
            childViewOptions = Marionette._getValue(childViewOptions, this, [
                child,
                index
            ]);
            var view = this.buildChildView(child, ChildView, childViewOptions);
            this._updateIndices(view, true, index);
            this.triggerMethod('before:add:child', view);
            this._addChildView(view, index);
            this.triggerMethod('add:child', view);
            view._parent = this;
            return view;
        },
        _updateIndices: function (view, increment, index) {
            if (!this.getOption('sort')) {
                return;
            }
            if (increment) {
                view._index = index;
            }
            this.children.each(function (laterView) {
                if (laterView._index >= view._index) {
                    laterView._index += increment ? 1 : -1;
                }
            });
        },
        _addChildView: function (view, index) {
            var canTriggerAttach = this._isShown && !this.isBuffering && Marionette.isNodeAttached(this.el);
            var nestedViews;
            this.proxyChildEvents(view);
            view.once('render', function () {
                if (this._isShown && !this.isBuffering) {
                    Marionette.triggerMethodOn(view, 'before:show', view);
                }
                if (canTriggerAttach && this._triggerBeforeAttach) {
                    nestedViews = this._getViewAndNested(view);
                    this._triggerMethodMany(nestedViews, this, 'before:attach');
                }
            }, this);
            this.children.add(view);
            this.renderChildView(view, index);
            if (canTriggerAttach && this._triggerAttach) {
                nestedViews = this._getViewAndNested(view);
                this._triggerMethodMany(nestedViews, this, 'attach');
            }
            if (this._isShown && !this.isBuffering) {
                Marionette.triggerMethodOn(view, 'show', view);
            }
        },
        renderChildView: function (view, index) {
            if (!view.supportsRenderLifecycle) {
                Marionette.triggerMethodOn(view, 'before:render', view);
            }
            view.render();
            if (!view.supportsRenderLifecycle) {
                Marionette.triggerMethodOn(view, 'render', view);
            }
            this.attachHtml(this, view, index);
            return view;
        },
        buildChildView: function (child, ChildViewClass, childViewOptions) {
            var options = _.extend({ model: child }, childViewOptions);
            var childView = new ChildViewClass(options);
            Marionette.MonitorDOMRefresh(childView);
            return childView;
        },
        removeChildView: function (view) {
            if (!view) {
                return view;
            }
            this.triggerMethod('before:remove:child', view);
            if (!view.supportsDestroyLifecycle) {
                Marionette.triggerMethodOn(view, 'before:destroy', view);
            }
            if (view.destroy) {
                view.destroy();
            } else {
                view.remove();
            }
            if (!view.supportsDestroyLifecycle) {
                Marionette.triggerMethodOn(view, 'destroy', view);
            }
            delete view._parent;
            this.stopListening(view);
            this.children.remove(view);
            this.triggerMethod('remove:child', view);
            this._updateIndices(view, false);
            return view;
        },
        isEmpty: function () {
            return !this.collection || this.collection.length === 0;
        },
        checkEmpty: function () {
            if (this.isEmpty(this.collection)) {
                this.showEmptyView();
            }
        },
        attachBuffer: function (collectionView, buffer) {
            collectionView.$el.append(buffer);
        },
        _createBuffer: function () {
            var elBuffer = document.createDocumentFragment();
            _.each(this._bufferedChildren, function (b) {
                elBuffer.appendChild(b.el);
            });
            return elBuffer;
        },
        attachHtml: function (collectionView, childView, index) {
            if (collectionView.isBuffering) {
                collectionView._bufferedChildren.splice(index, 0, childView);
            } else {
                if (!collectionView._insertBefore(childView, index)) {
                    collectionView._insertAfter(childView);
                }
            }
        },
        _insertBefore: function (childView, index) {
            var currentView;
            var findPosition = this.getOption('sort') && index < this.children.length - 1;
            if (findPosition) {
                currentView = this.children.find(function (view) {
                    return view._index === index + 1;
                });
            }
            if (currentView) {
                currentView.$el.before(childView.el);
                return true;
            }
            return false;
        },
        _insertAfter: function (childView) {
            this.$el.append(childView.el);
        },
        _initChildViewStorage: function () {
            this.children = new Backbone.ChildViewContainer();
        },
        destroy: function () {
            if (this.isDestroyed) {
                return this;
            }
            this.triggerMethod('before:destroy:collection');
            this.destroyChildren({ checkEmpty: false });
            this.triggerMethod('destroy:collection');
            return Marionette.View.prototype.destroy.apply(this, arguments);
        },
        destroyChildren: function (options) {
            var destroyOptions = options || {};
            var shouldCheckEmpty = true;
            var childViews = this.children.map(_.identity);
            if (!_.isUndefined(destroyOptions.checkEmpty)) {
                shouldCheckEmpty = destroyOptions.checkEmpty;
            }
            this.children.each(this.removeChildView, this);
            if (shouldCheckEmpty) {
                this.checkEmpty();
            }
            return childViews;
        },
        _shouldAddChild: function (child, index) {
            var filter = this.getOption('filter');
            return !_.isFunction(filter) || filter.call(this, child, index, this.collection);
        },
        proxyChildEvents: function (view) {
            var prefix = this.getOption('childViewEventPrefix');
            this.listenTo(view, 'all', function () {
                var args = _.toArray(arguments);
                var rootEvent = args[0];
                var childEvents = this.normalizeMethods(_.result(this, 'childEvents'));
                args[0] = prefix + ':' + rootEvent;
                args.splice(1, 0, view);
                if (typeof childEvents !== 'undefined' && _.isFunction(childEvents[rootEvent])) {
                    childEvents[rootEvent].apply(this, args.slice(1));
                }
                this.triggerMethod.apply(this, args);
            });
        },
        _getImmediateChildren: function () {
            return _.values(this.children._views);
        },
        _getViewAndNested: function (view) {
            return [view].concat(_.result(view, '_getNestedViews') || []);
        },
        getViewComparator: function () {
            return this.getOption('viewComparator');
        }
    });
    Marionette.CompositeView = Marionette.CollectionView.extend({
        constructor: function () {
            Marionette.CollectionView.apply(this, arguments);
        },
        _initialEvents: function () {
            if (this.collection) {
                this.listenTo(this.collection, 'add', this._onCollectionAdd);
                this.listenTo(this.collection, 'remove', this._onCollectionRemove);
                this.listenTo(this.collection, 'reset', this._renderChildren);
                if (this.getOption('sort')) {
                    this.listenTo(this.collection, 'sort', this._sortViews);
                }
            }
        },
        getChildView: function (child) {
            var childView = this.getOption('childView') || this.constructor;
            return childView;
        },
        serializeData: function () {
            var data = {};
            if (this.model) {
                data = _.partial(this.serializeModel, this.model).apply(this, arguments);
            }
            return data;
        },
        render: function () {
            this._ensureViewIsIntact();
            this._isRendering = true;
            this.resetChildViewContainer();
            this.triggerMethod('before:render', this);
            this._renderTemplate();
            this._renderChildren();
            this._isRendering = false;
            this.isRendered = true;
            this.triggerMethod('render', this);
            return this;
        },
        _renderChildren: function () {
            if (this.isRendered || this._isRendering) {
                Marionette.CollectionView.prototype._renderChildren.call(this);
            }
        },
        _renderTemplate: function () {
            var data = {};
            data = this.serializeData();
            data = this.mixinTemplateHelpers(data);
            this.triggerMethod('before:render:template');
            var template = this.getTemplate();
            var html = Marionette.Renderer.render(template, data, this);
            this.attachElContent(html);
            this.bindUIElements();
            this.triggerMethod('render:template');
        },
        attachElContent: function (html) {
            this.$el.html(html);
            return this;
        },
        attachBuffer: function (compositeView, buffer) {
            var $container = this.getChildViewContainer(compositeView);
            $container.append(buffer);
        },
        _insertAfter: function (childView) {
            var $container = this.getChildViewContainer(this, childView);
            $container.append(childView.el);
        },
        _appendReorderedChildren: function (children) {
            var $container = this.getChildViewContainer(this);
            $container.append(children);
        },
        getChildViewContainer: function (containerView, childView) {
            if (!!containerView.$childViewContainer) {
                return containerView.$childViewContainer;
            }
            var container;
            var childViewContainer = Marionette.getOption(containerView, 'childViewContainer');
            if (childViewContainer) {
                var selector = Marionette._getValue(childViewContainer, containerView);
                if (selector.charAt(0) === '@' && containerView.ui) {
                    container = containerView.ui[selector.substr(4)];
                } else {
                    container = containerView.$(selector);
                }
                if (container.length <= 0) {
                    throw new Marionette.Error({
                        name: 'ChildViewContainerMissingError',
                        message: 'The specified "childViewContainer" was not found: ' + containerView.childViewContainer
                    });
                }
            } else {
                container = containerView.$el;
            }
            containerView.$childViewContainer = container;
            return container;
        },
        resetChildViewContainer: function () {
            if (this.$childViewContainer) {
                this.$childViewContainer = undefined;
            }
        }
    });
    Marionette.LayoutView = Marionette.ItemView.extend({
        regionClass: Marionette.Region,
        options: { destroyImmediate: false },
        childViewEventPrefix: 'childview',
        constructor: function (options) {
            options = options || {};
            this._firstRender = true;
            this._initializeRegions(options);
            Marionette.ItemView.call(this, options);
        },
        render: function () {
            this._ensureViewIsIntact();
            if (this._firstRender) {
                this._firstRender = false;
            } else {
                this._reInitializeRegions();
            }
            return Marionette.ItemView.prototype.render.apply(this, arguments);
        },
        destroy: function () {
            if (this.isDestroyed) {
                return this;
            }
            if (this.getOption('destroyImmediate') === true) {
                this.$el.remove();
            }
            this.regionManager.destroy();
            return Marionette.ItemView.prototype.destroy.apply(this, arguments);
        },
        showChildView: function (regionName, view, options) {
            var region = this.getRegion(regionName);
            return region.show.apply(region, _.rest(arguments));
        },
        getChildView: function (regionName) {
            return this.getRegion(regionName).currentView;
        },
        addRegion: function (name, definition) {
            var regions = {};
            regions[name] = definition;
            return this._buildRegions(regions)[name];
        },
        addRegions: function (regions) {
            this.regions = _.extend({}, this.regions, regions);
            return this._buildRegions(regions);
        },
        removeRegion: function (name) {
            delete this.regions[name];
            return this.regionManager.removeRegion(name);
        },
        getRegion: function (region) {
            return this.regionManager.get(region);
        },
        getRegions: function () {
            return this.regionManager.getRegions();
        },
        _buildRegions: function (regions) {
            var defaults = {
                regionClass: this.getOption('regionClass'),
                parentEl: _.partial(_.result, this, 'el')
            };
            return this.regionManager.addRegions(regions, defaults);
        },
        _initializeRegions: function (options) {
            var regions;
            this._initRegionManager();
            regions = Marionette._getValue(this.regions, this, [options]) || {};
            var regionOptions = this.getOption.call(options, 'regions');
            regionOptions = Marionette._getValue(regionOptions, this, [options]);
            _.extend(regions, regionOptions);
            regions = this.normalizeUIValues(regions, [
                'selector',
                'el'
            ]);
            this.addRegions(regions);
        },
        _reInitializeRegions: function () {
            this.regionManager.invoke('reset');
        },
        getRegionManager: function () {
            return new Marionette.RegionManager();
        },
        _initRegionManager: function () {
            this.regionManager = this.getRegionManager();
            this.regionManager._parent = this;
            this.listenTo(this.regionManager, 'before:add:region', function (name) {
                this.triggerMethod('before:add:region', name);
            });
            this.listenTo(this.regionManager, 'add:region', function (name, region) {
                this[name] = region;
                this.triggerMethod('add:region', name, region);
            });
            this.listenTo(this.regionManager, 'before:remove:region', function (name) {
                this.triggerMethod('before:remove:region', name);
            });
            this.listenTo(this.regionManager, 'remove:region', function (name, region) {
                delete this[name];
                this.triggerMethod('remove:region', name, region);
            });
        },
        _getImmediateChildren: function () {
            return _.chain(this.regionManager.getRegions()).pluck('currentView').compact().value();
        }
    });
    Marionette.Behavior = Marionette.Object.extend({
        constructor: function (options, view) {
            this.view = view;
            this.defaults = _.result(this, 'defaults') || {};
            this.options = _.extend({}, this.defaults, options);
            this.ui = _.extend({}, _.result(view, 'ui'), _.result(this, 'ui'));
            Marionette.Object.apply(this, arguments);
        },
        $: function () {
            return this.view.$.apply(this.view, arguments);
        },
        destroy: function () {
            this.stopListening();
            return this;
        },
        proxyViewProperties: function (view) {
            this.$el = view.$el;
            this.el = view.el;
        }
    });
    Marionette.Behaviors = function (Marionette, _) {
        var delegateEventSplitter = /^(\S+)\s*(.*)$/;
        function Behaviors(view, behaviors) {
            if (!_.isObject(view.behaviors)) {
                return {};
            }
            behaviors = Behaviors.parseBehaviors(view, behaviors || _.result(view, 'behaviors'));
            Behaviors.wrap(view, behaviors, _.keys(methods));
            return behaviors;
        }
        var methods = {
            behaviorTriggers: function (behaviorTriggers, behaviors) {
                var triggerBuilder = new BehaviorTriggersBuilder(this, behaviors);
                return triggerBuilder.buildBehaviorTriggers();
            },
            behaviorEvents: function (behaviorEvents, behaviors) {
                var _behaviorsEvents = {};
                _.each(behaviors, function (b, i) {
                    var _events = {};
                    var behaviorEvents = _.clone(_.result(b, 'events')) || {};
                    behaviorEvents = Marionette.normalizeUIKeys(behaviorEvents, getBehaviorsUI(b));
                    var j = 0;
                    _.each(behaviorEvents, function (behaviour, key) {
                        var match = key.match(delegateEventSplitter);
                        var eventName = match[1] + '.' + [
                            this.cid,
                            i,
                            j++,
                            ' '
                        ].join('');
                        var selector = match[2];
                        var eventKey = eventName + selector;
                        var handler = _.isFunction(behaviour) ? behaviour : b[behaviour];
                        _events[eventKey] = _.bind(handler, b);
                    }, this);
                    _behaviorsEvents = _.extend(_behaviorsEvents, _events);
                }, this);
                return _behaviorsEvents;
            }
        };
        _.extend(Behaviors, {
            behaviorsLookup: function () {
                throw new Marionette.Error({
                    message: 'You must define where your behaviors are stored.',
                    url: 'marionette.behaviors.html#behaviorslookup'
                });
            },
            getBehaviorClass: function (options, key) {
                if (options.behaviorClass) {
                    return options.behaviorClass;
                }
                return Marionette._getValue(Behaviors.behaviorsLookup, this, [
                    options,
                    key
                ])[key];
            },
            parseBehaviors: function (view, behaviors) {
                return _.chain(behaviors).map(function (options, key) {
                    var BehaviorClass = Behaviors.getBehaviorClass(options, key);
                    var behavior = new BehaviorClass(options, view);
                    var nestedBehaviors = Behaviors.parseBehaviors(view, _.result(behavior, 'behaviors'));
                    return [behavior].concat(nestedBehaviors);
                }).flatten().value();
            },
            wrap: function (view, behaviors, methodNames) {
                _.each(methodNames, function (methodName) {
                    view[methodName] = _.partial(methods[methodName], view[methodName], behaviors);
                });
            }
        });
        function BehaviorTriggersBuilder(view, behaviors) {
            this._view = view;
            this._behaviors = behaviors;
            this._triggers = {};
        }
        _.extend(BehaviorTriggersBuilder.prototype, {
            buildBehaviorTriggers: function () {
                _.each(this._behaviors, this._buildTriggerHandlersForBehavior, this);
                return this._triggers;
            },
            _buildTriggerHandlersForBehavior: function (behavior, i) {
                var triggersHash = _.clone(_.result(behavior, 'triggers')) || {};
                triggersHash = Marionette.normalizeUIKeys(triggersHash, getBehaviorsUI(behavior));
                _.each(triggersHash, _.bind(this._setHandlerForBehavior, this, behavior, i));
            },
            _setHandlerForBehavior: function (behavior, i, eventName, trigger) {
                var triggerKey = trigger.replace(/^\S+/, function (triggerName) {
                    return triggerName + '.' + 'behaviortriggers' + i;
                });
                this._triggers[triggerKey] = this._view._buildViewTrigger(eventName);
            }
        });
        function getBehaviorsUI(behavior) {
            return behavior._uiBindings || behavior.ui;
        }
        return Behaviors;
    }(Marionette, _);
    Marionette.AppRouter = Backbone.Router.extend({
        constructor: function (options) {
            this.options = options || {};
            Backbone.Router.apply(this, arguments);
            var appRoutes = this.getOption('appRoutes');
            var controller = this._getController();
            this.processAppRoutes(controller, appRoutes);
            this.on('route', this._processOnRoute, this);
        },
        appRoute: function (route, methodName) {
            var controller = this._getController();
            this._addAppRoute(controller, route, methodName);
        },
        _processOnRoute: function (routeName, routeArgs) {
            if (_.isFunction(this.onRoute)) {
                var routePath = _.invert(this.getOption('appRoutes'))[routeName];
                this.onRoute(routeName, routePath, routeArgs);
            }
        },
        processAppRoutes: function (controller, appRoutes) {
            if (!appRoutes) {
                return;
            }
            var routeNames = _.keys(appRoutes).reverse();
            _.each(routeNames, function (route) {
                this._addAppRoute(controller, route, appRoutes[route]);
            }, this);
        },
        _getController: function () {
            return this.getOption('controller');
        },
        _addAppRoute: function (controller, route, methodName) {
            var method = controller[methodName];
            if (!method) {
                throw new Marionette.Error('Method "' + methodName + '" was not found on the controller');
            }
            this.route(route, methodName, _.bind(method, controller));
        },
        mergeOptions: Marionette.mergeOptions,
        getOption: Marionette.proxyGetOption,
        triggerMethod: Marionette.triggerMethod,
        bindEntityEvents: Marionette.proxyBindEntityEvents,
        unbindEntityEvents: Marionette.proxyUnbindEntityEvents
    });
    Marionette.Application = Marionette.Object.extend({
        constructor: function (options) {
            this._initializeRegions(options);
            this._initCallbacks = new Marionette.Callbacks();
            this.submodules = {};
            _.extend(this, options);
            this._initChannel();
            Marionette.Object.apply(this, arguments);
        },
        execute: function () {
            this.commands.execute.apply(this.commands, arguments);
        },
        request: function () {
            return this.reqres.request.apply(this.reqres, arguments);
        },
        addInitializer: function (initializer) {
            this._initCallbacks.add(initializer);
        },
        start: function (options) {
            this.triggerMethod('before:start', options);
            this._initCallbacks.run(options, this);
            this.triggerMethod('start', options);
        },
        addRegions: function (regions) {
            return this._regionManager.addRegions(regions);
        },
        emptyRegions: function () {
            return this._regionManager.emptyRegions();
        },
        removeRegion: function (region) {
            return this._regionManager.removeRegion(region);
        },
        getRegion: function (region) {
            return this._regionManager.get(region);
        },
        getRegions: function () {
            return this._regionManager.getRegions();
        },
        module: function (moduleNames, moduleDefinition) {
            var ModuleClass = Marionette.Module.getClass(moduleDefinition);
            var args = _.toArray(arguments);
            args.unshift(this);
            return ModuleClass.create.apply(ModuleClass, args);
        },
        getRegionManager: function () {
            return new Marionette.RegionManager();
        },
        _initializeRegions: function (options) {
            var regions = _.isFunction(this.regions) ? this.regions(options) : this.regions || {};
            this._initRegionManager();
            var optionRegions = Marionette.getOption(options, 'regions');
            if (_.isFunction(optionRegions)) {
                optionRegions = optionRegions.call(this, options);
            }
            _.extend(regions, optionRegions);
            this.addRegions(regions);
            return this;
        },
        _initRegionManager: function () {
            this._regionManager = this.getRegionManager();
            this._regionManager._parent = this;
            this.listenTo(this._regionManager, 'before:add:region', function () {
                Marionette._triggerMethod(this, 'before:add:region', arguments);
            });
            this.listenTo(this._regionManager, 'add:region', function (name, region) {
                this[name] = region;
                Marionette._triggerMethod(this, 'add:region', arguments);
            });
            this.listenTo(this._regionManager, 'before:remove:region', function () {
                Marionette._triggerMethod(this, 'before:remove:region', arguments);
            });
            this.listenTo(this._regionManager, 'remove:region', function (name) {
                delete this[name];
                Marionette._triggerMethod(this, 'remove:region', arguments);
            });
        },
        _initChannel: function () {
            this.channelName = _.result(this, 'channelName') || 'global';
            this.channel = _.result(this, 'channel') || Backbone.Wreqr.radio.channel(this.channelName);
            this.vent = _.result(this, 'vent') || this.channel.vent;
            this.commands = _.result(this, 'commands') || this.channel.commands;
            this.reqres = _.result(this, 'reqres') || this.channel.reqres;
        }
    });
    Marionette.Module = function (moduleName, app, options) {
        this.moduleName = moduleName;
        this.options = _.extend({}, this.options, options);
        this.initialize = options.initialize || this.initialize;
        this.submodules = {};
        this._setupInitializersAndFinalizers();
        this.app = app;
        if (_.isFunction(this.initialize)) {
            this.initialize(moduleName, app, this.options);
        }
    };
    Marionette.Module.extend = Marionette.extend;
    _.extend(Marionette.Module.prototype, Backbone.Events, {
        startWithParent: true,
        initialize: function () {
        },
        addInitializer: function (callback) {
            this._initializerCallbacks.add(callback);
        },
        addFinalizer: function (callback) {
            this._finalizerCallbacks.add(callback);
        },
        start: function (options) {
            if (this._isInitialized) {
                return;
            }
            _.each(this.submodules, function (mod) {
                if (mod.startWithParent) {
                    mod.start(options);
                }
            });
            this.triggerMethod('before:start', options);
            this._initializerCallbacks.run(options, this);
            this._isInitialized = true;
            this.triggerMethod('start', options);
        },
        stop: function () {
            if (!this._isInitialized) {
                return;
            }
            this._isInitialized = false;
            this.triggerMethod('before:stop');
            _.invoke(this.submodules, 'stop');
            this._finalizerCallbacks.run(undefined, this);
            this._initializerCallbacks.reset();
            this._finalizerCallbacks.reset();
            this.triggerMethod('stop');
        },
        addDefinition: function (moduleDefinition, customArgs) {
            this._runModuleDefinition(moduleDefinition, customArgs);
        },
        _runModuleDefinition: function (definition, customArgs) {
            if (!definition) {
                return;
            }
            var args = _.flatten([
                this,
                this.app,
                Backbone,
                Marionette,
                Backbone.$,
                _,
                customArgs
            ]);
            definition.apply(this, args);
        },
        _setupInitializersAndFinalizers: function () {
            this._initializerCallbacks = new Marionette.Callbacks();
            this._finalizerCallbacks = new Marionette.Callbacks();
        },
        triggerMethod: Marionette.triggerMethod
    });
    _.extend(Marionette.Module, {
        create: function (app, moduleNames, moduleDefinition) {
            var module = app;
            var customArgs = _.drop(arguments, 3);
            moduleNames = moduleNames.split('.');
            var length = moduleNames.length;
            var moduleDefinitions = [];
            moduleDefinitions[length - 1] = moduleDefinition;
            _.each(moduleNames, function (moduleName, i) {
                var parentModule = module;
                module = this._getModule(parentModule, moduleName, app, moduleDefinition);
                this._addModuleDefinition(parentModule, module, moduleDefinitions[i], customArgs);
            }, this);
            return module;
        },
        _getModule: function (parentModule, moduleName, app, def, args) {
            var options = _.extend({}, def);
            var ModuleClass = this.getClass(def);
            var module = parentModule[moduleName];
            if (!module) {
                module = new ModuleClass(moduleName, app, options);
                parentModule[moduleName] = module;
                parentModule.submodules[moduleName] = module;
            }
            return module;
        },
        getClass: function (moduleDefinition) {
            var ModuleClass = Marionette.Module;
            if (!moduleDefinition) {
                return ModuleClass;
            }
            if (moduleDefinition.prototype instanceof ModuleClass) {
                return moduleDefinition;
            }
            return moduleDefinition.moduleClass || ModuleClass;
        },
        _addModuleDefinition: function (parentModule, module, def, args) {
            var fn = this._getDefine(def);
            var startWithParent = this._getStartWithParent(def, module);
            if (fn) {
                module.addDefinition(fn, args);
            }
            this._addStartWithParent(parentModule, module, startWithParent);
        },
        _getStartWithParent: function (def, module) {
            var swp;
            if (_.isFunction(def) && def.prototype instanceof Marionette.Module) {
                swp = module.constructor.prototype.startWithParent;
                return _.isUndefined(swp) ? true : swp;
            }
            if (_.isObject(def)) {
                swp = def.startWithParent;
                return _.isUndefined(swp) ? true : swp;
            }
            return true;
        },
        _getDefine: function (def) {
            if (_.isFunction(def) && !(def.prototype instanceof Marionette.Module)) {
                return def;
            }
            if (_.isObject(def)) {
                return def.define;
            }
            return null;
        },
        _addStartWithParent: function (parentModule, module, startWithParent) {
            module.startWithParent = module.startWithParent && startWithParent;
            if (!module.startWithParent || !!module.startWithParentIsConfigured) {
                return;
            }
            module.startWithParentIsConfigured = true;
            parentModule.addInitializer(function (options) {
                if (module.startWithParent) {
                    module.start(options);
                }
            });
        }
    });
    return Marionette;
}));
;
(function (root, factory) {
    'use strict';
    if (typeof module == 'object' && typeof module.exports == 'object') {
        module.exports = root.document ? factory(root, true) : function (w) {
            if (!w.document) {
                throw new Error('AniJS requires a window with a document');
            }
            return factory(w);
        };
    } else {
        factory(root);
    }
}(typeof window !== 'undefined' ? window : this, function (window, noGlobal) {
    var TouchSlideLib = function () {
        var instance = this;
        instance._initializer = function () {
        };
        instance.init = function (a) {
            a = a || {};
            var opts = {
                slideCell: a.slideCell || '#touchSlide',
                titCell: a.titCell || '.hd li',
                mainCell: a.mainCell || '.bd',
                effect: a.effect || 'left',
                autoPlay: a.autoPlay || false,
                delayTime: a.delayTime || 200,
                interTime: a.interTime || 2500,
                defaultIndex: a.defaultIndex || 0,
                titOnClassName: a.titOnClassName || 'on',
                titType: a.titType || 'default',
                autoPage: a.autoPage || false,
                prevCell: a.prevCell || '.prev',
                nextCell: a.nextCell || '.next',
                pageStateCell: a.pageStateCell || '.pageState',
                pnLoop: a.pnLoop == 'undefined ' ? true : a.pnLoop,
                startFun: a.startFun || null,
                endFun: a.endFun || null,
                switchLoad: a.switchLoad || null,
                isTravelNotes: a.isTravelNotes || false
            };
            var slideCell = document.getElementById(opts.slideCell.replace('#', ''));
            if (!slideCell)
                return false;
            var obj = function (str, parEle) {
                str = str.split(' ');
                var par = [];
                parEle = parEle || document;
                var retn = [parEle];
                for (var i in str) {
                    if (str[i].length != 0)
                        par.push(str[i]);
                }
                for (var i in par) {
                    if (retn.length == 0)
                        return false;
                    var _retn = [];
                    for (var r in retn) {
                        if (par[i][0] == '#')
                            _retn.push(document.getElementById(par[i].replace('#', '')));
                        else if (par[i][0] == '.') {
                            var tag = retn[r].getElementsByTagName('*');
                            for (var j = 0; j < tag.length; j++) {
                                var cln = tag[j].className;
                                if (cln && cln.search(new RegExp('\\b' + par[i].replace('.', '') + '\\b')) != -1) {
                                    _retn.push(tag[j]);
                                }
                            }
                        } else {
                            var tag = retn[r].getElementsByTagName(par[i]);
                            for (var j = 0; j < tag.length; j++) {
                                _retn.push(tag[j]);
                            }
                        }
                    }
                    retn = _retn;
                }
                return retn.length == 0 || retn[0] == parEle ? false : retn;
            };
            var wrap = function (el, v) {
                var tmp = document.createElement('div');
                tmp.innerHTML = v;
                tmp = tmp.children[0];
                var _el = el.cloneNode(true);
                tmp.appendChild(_el);
                el.parentNode.replaceChild(tmp, el);
                conBox = _el;
                return tmp;
            };
            var getStyleVal = function (el, attr) {
                var v = 0;
                if (el.currentStyle) {
                    v = el.currentStyle[attr];
                } else {
                    v = getComputedStyle(el, false)[attr];
                }
                return parseInt(v.replace('px', ''));
            };
            var addClass = function (ele, className) {
                if (!ele || !className || ele.className && ele.className.search(new RegExp('\\b' + className + '\\b')) != -1)
                    return;
                ele.className += (ele.className ? ' ' : '') + className;
            };
            var removeClass = function (ele, className) {
                if (!ele || !className || ele.className && ele.className.search(new RegExp('\\b' + className + '\\b')) == -1)
                    return;
                ele.className = ele.className.replace(new RegExp('\\s*\\b' + className + '\\b', 'g'), '');
            };
            var effect = opts.effect;
            var prevBtn = obj(opts.prevCell, slideCell)[0];
            var nextBtn = obj(opts.nextCell, slideCell)[0];
            var pageState = obj(opts.pageStateCell)[0];
            var conBox = obj(opts.mainCell, slideCell)[0];
            if (!conBox)
                return false;
            var conBoxSize = conBox.children.length;
            var navObj = obj(opts.titCell, slideCell);
            var navObjSize = navObj ? navObj.length : conBoxSize;
            var sLoad = opts.switchLoad;
            var index = parseInt(opts.defaultIndex);
            var delayTime = parseInt(opts.delayTime);
            var interTime = parseInt(opts.interTime);
            var autoPlay = opts.autoPlay == 'false' || opts.autoPlay == false ? false : true;
            var autoPage = opts.autoPage == 'false' || opts.autoPage == false ? false : true;
            var loop = opts.pnLoop == 'false' || opts.pnLoop == false ? false : true;
            var oldIndex = index;
            var inter = null;
            var timeout = null;
            var endTimeout = null;
            var startX = 0;
            var startY = 0;
            var distX = 0;
            var distY = 0;
            var dist = 0;
            var isTouchPad = /hp-tablet/gi.test(navigator.appVersion);
            var hasTouch = 'ontouchstart' in window && !isTouchPad;
            var touchStart = hasTouch ? 'touchstart' : 'mousedown';
            var touchMove = hasTouch ? 'touchmove' : '';
            var touchEnd = hasTouch ? 'touchend' : 'mouseup';
            var slideH = 0;
            var slideW = conBox.parentNode.clientWidth;
            var twCell;
            var scrollY;
            var tempSize = conBoxSize;
            if (navObjSize == 0)
                navObjSize = conBoxSize;
            if (autoPage) {
                navObjSize = conBoxSize;
                navObj = navObj[0];
                navObj.innerHTML = '';
                var str = '';
                if (opts.autoPage == true || opts.autoPage == 'true') {
                    for (var i = 0; i < navObjSize; i++) {
                        str += '<li>' + (i + 1) + '</li>';
                    }
                } else {
                    for (var i = 0; i < navObjSize; i++) {
                        str += opts.autoPage.replace('$', i + 1);
                    }
                }
                navObj.innerHTML = str;
                navObj = navObj.children;
            } else {
            }
            if (effect == 'leftLoop') {
                tempSize += 2;
                conBox.appendChild(conBox.children[0].cloneNode(true));
                conBox.insertBefore(conBox.children[conBoxSize - 1].cloneNode(true), conBox.children[0]);
            }
            twCell = wrap(conBox, '<div class="tempWrap" style="overflow:hidden; position:relative;"></div>');
            conBox.style.cssText = 'width:' + tempSize * slideW + 'px;' + 'position:relative;overflow:hidden;padding:0;margin:0;';
            for (var i = 0; i < tempSize; i++) {
                conBox.children[i].style.cssText = 'display:table-cell;vertical-align:top;width:' + slideW + 'px';
            }
            var doStartFun = function () {
                if (typeof opts.startFun == 'function') {
                    opts.startFun(index, navObjSize);
                }
            };
            var doEndFun = function () {
                if (typeof opts.endFun == 'function') {
                    opts.endFun(index, navObjSize);
                }
            };
            var doSwitchLoad = function (moving) {
                var curIndex = (effect == 'leftLoop' ? index + 1 : index) + moving;
                var changeImg = function (ind) {
                    var img;
                    if (conBox.children[ind]) {
                        img = conBox.children[ind].getElementsByTagName('img');
                    } else {
                        return false;
                    }
                    for (var i = 0; i < img.length; i++) {
                        if (img[i].getAttribute(sLoad)) {
                            img[i].setAttribute('src', img[i].getAttribute(sLoad));
                            img[i].removeAttribute(sLoad);
                        }
                    }
                };
                changeImg(curIndex);
                if (effect == 'leftLoop') {
                    switch (curIndex) {
                    case 0:
                        changeImg(conBoxSize);
                        break;
                    case 1:
                        changeImg(conBoxSize + 1);
                        break;
                    case conBoxSize:
                        changeImg(0);
                        break;
                    case conBoxSize + 1:
                        changeImg(1);
                        break;
                    }
                }
            };
            var orientationChange = function () {
                slideW = twCell.clientWidth;
                conBox.style.width = tempSize * slideW + 'px';
                for (var i = 0; i < tempSize; i++) {
                    conBox.children[i].style.width = slideW + 'px';
                }
                var ind = effect == 'leftLoop' ? index + 1 : index;
                translate(-ind * slideW, 0);
            };
            window.addEventListener('resize', orientationChange, false);
            var translate = function (dist, speed, ele) {
                if (!!ele) {
                    ele = ele.style;
                } else {
                    ele = conBox.style;
                }
                ele.webkitTransitionDuration = ele.MozTransitionDuration = ele.msTransitionDuration = ele.OTransitionDuration = ele.transitionDuration = speed + 'ms';
                ele.webkitTransform = 'translate(' + dist + 'px,0)' + 'translateZ(0)';
                ele.msTransform = ele.MozTransform = ele.OTransform = 'translateX(' + dist + 'px)';
            };
            var doPlay = function (isTouch) {
                switch (effect) {
                case 'left':
                    if (index >= navObjSize) {
                        index = isTouch ? index - 1 : 0;
                    } else if (index < 0) {
                        index = isTouch ? 0 : navObjSize - 1;
                    }
                    if (sLoad != null) {
                        doSwitchLoad(0);
                    }
                    translate(-index * slideW, delayTime);
                    oldIndex = index;
                    break;
                case 'leftLoop':
                    if (sLoad != null) {
                        doSwitchLoad(0);
                    }
                    translate(-(index + 1) * slideW, delayTime);
                    if (index == -1) {
                        timeout = setTimeout(function () {
                            translate(-navObjSize * slideW, 0);
                        }, delayTime);
                        index = navObjSize - 1;
                    } else if (index == navObjSize) {
                        timeout = setTimeout(function () {
                            translate(-slideW, 0);
                        }, delayTime);
                        index = 0;
                    }
                    oldIndex = index;
                    break;
                }
                doStartFun();
                endTimeout = setTimeout(function () {
                    doEndFun();
                }, delayTime);
                if (opts.titType == 'present') {
                    for (var i = 0; i < navObjSize; i++) {
                        console.log(i + '-' + index);
                        if (i <= index) {
                            addClass(navObj[i], opts.titOnClassName);
                        } else {
                            removeClass(navObj[i], opts.titOnClassName);
                        }
                    }
                    if (loop == false) {
                        removeClass(nextBtn, 'nextStop');
                        removeClass(prevBtn, 'prevStop');
                        if (index == 0) {
                            addClass(prevBtn, 'prevStop');
                        } else if (index == navObjSize - 1) {
                            addClass(nextBtn, 'nextStop');
                        }
                    }
                    if (pageState) {
                        pageState.innerHTML = '<span>' + (index + 1) + '</span>/' + navObjSize;
                    }
                } else if (opts.titType == 'number') {
                } else {
                    for (var i = 0; i < navObjSize; i++) {
                        removeClass(navObj[i], opts.titOnClassName);
                        if (i == index) {
                            addClass(navObj[i], opts.titOnClassName);
                        }
                    }
                    if (loop == false) {
                        removeClass(nextBtn, 'nextStop');
                        removeClass(prevBtn, 'prevStop');
                        if (index == 0) {
                            addClass(prevBtn, 'prevStop');
                        } else if (index == navObjSize - 1) {
                            addClass(nextBtn, 'nextStop');
                        }
                    }
                    if (pageState) {
                        pageState.innerHTML = '<span>' + (index + 1) + '</span>/' + navObjSize;
                    }
                }
                if (opts.isTravelNotes) {
                    var wH = $(window).height();
                    $('#list-detail').height(wH);
                    var headerH = $('#list-detail header').height();
                    var picScroll = $('#picScroll');
                    picScroll.height(wH - headerH);
                    var hd = picScroll.find('.hd');
                    var hdH = 3;
                    picScroll.find('.tempWrap, .bd, .bd>section').height(wH - hdH - headerH);
                    var section = picScroll.find('section').eq(index);
                    var title = section.find('.title').height() || 0;
                    var imgBoard = section.find('.imgBoard').height() || 0;
                    ;
                    var content = section.find('.content');
                    var contentH = wH - hdH - title - imgBoard - headerH;
                    console.log('contentH: ' + contentH + ', wH: ' + wH + ', hdH: ' + hdH + ', title:' + title + ', imgBoard: ' + imgBoard + ', headerH: ' + headerH);
                    content.height(contentH);
                    var precent = (index + 1) * 100 / parseInt(navObjSize);
                    console.log('precent: ' + precent);
                    $('.progress-bar').css('width', precent + '%');
                    if (window._platform == 'native') {
                        var detail = $('#list-detail');
                        var picScroll = detail.find('#picScroll');
                        var tempWrap = detail.find('.tempWrap');
                        detail.find('.header').hide();
                        var dh = detail.height();
                        picScroll.height(dh);
                        tempWrap.height(dh);
                        detail.find('.bd').height(dh);
                        detail.find('.bd section').height(dh);
                        var ch = dh - detail.find('.title').height() - detail.find('.imgBoard').height();
                        detail.find('.bd section .content').height(ch);
                        detail.find('.content p').css({ 'padding-top': '0rem' });
                        picScroll.css({ 'padding-top': '0rem' });
                    }
                }
            };
            doPlay();
            if (autoPlay) {
                inter = setInterval(function () {
                    index++;
                    doPlay();
                }, interTime);
            }
            if (navObj) {
                for (var i = 0; i < navObjSize; i++) {
                    (function () {
                        var j = i;
                        navObj[j].addEventListener('click', function (e) {
                            clearTimeout(timeout);
                            clearTimeout(endTimeout);
                            index = j;
                            doPlay();
                        });
                    }());
                }
            }
            if (nextBtn) {
                nextBtn.addEventListener('click', function (e) {
                    if (loop == true || index != navObjSize - 1) {
                        clearTimeout(timeout);
                        clearTimeout(endTimeout);
                        index++;
                        doPlay();
                    }
                });
            }
            if (prevBtn) {
                prevBtn.addEventListener('click', function (e) {
                    if (loop == true || index != 0) {
                        clearTimeout(timeout);
                        clearTimeout(endTimeout);
                        index--;
                        doPlay();
                    }
                });
            }
            var tStart = function (e) {
                clearTimeout(timeout);
                clearTimeout(endTimeout);
                scrollY = undefined;
                distX = 0;
                var point = hasTouch ? e.touches[0] : e;
                startX = point.pageX;
                startY = point.pageY;
                conBox.addEventListener(touchMove, tMove, false);
                conBox.addEventListener(touchEnd, tEnd, false);
            };
            var tMove = function (e) {
                if (hasTouch) {
                    if (e.touches.length > 1 || e.scale && e.scale !== 1)
                        return;
                }
                ;
                var point = hasTouch ? e.touches[0] : e;
                distX = point.pageX - startX;
                distY = point.pageY - startY;
                if (typeof scrollY == 'undefined') {
                    scrollY = !!(scrollY || Math.abs(distX) < Math.abs(distY));
                }
                if (!scrollY) {
                    e.preventDefault();
                    if (autoPlay) {
                        clearInterval(inter);
                    }
                    switch (effect) {
                    case 'left':
                        if (index == 0 && distX > 0 || index >= navObjSize - 1 && distX < 0) {
                            distX = distX * 0.4;
                        }
                        translate(-index * slideW + distX, 0);
                        break;
                    case 'leftLoop':
                        translate(-(index + 1) * slideW + distX, 0);
                        break;
                    }
                    if (sLoad != null && Math.abs(distX) > slideW / 3) {
                        doSwitchLoad(distX > -0 ? -1 : 1);
                    }
                }
            };
            var tEnd = function (e) {
                if (distX == 0)
                    return;
                e.preventDefault();
                if (!scrollY) {
                    if (Math.abs(distX) > slideW / 10) {
                        distX > 0 ? index-- : index++;
                    }
                    doPlay(true);
                    if (autoPlay) {
                        inter = setInterval(function () {
                            index++;
                            doPlay();
                        }, interTime);
                    }
                }
                conBox.removeEventListener(touchMove, tMove, false);
                conBox.removeEventListener(touchEnd, tEnd, false);
            };
            conBox.addEventListener(touchStart, tStart, false);
        };
        instance._isFunction = function (obj) {
            return !!(obj && obj.constructor && obj.call && obj.apply);
        };
    };
    var TouchSlide = new TouchSlideLib();
    if (typeof define === 'function' && define.amd) {
        define('touchSlide', [], function () {
            return TouchSlide;
        });
    }
    if (typeof noGlobal == typeof undefined) {
        window.TouchSlide = TouchSlide;
    }
    return TouchSlide;
}));
;
(function (root, factory) {
    'use strict';
    if (typeof module == 'object' && typeof module.exports == 'object') {
        module.exports = root.document ? factory(root, true) : function (w) {
            if (!w.document) {
                throw new Error('PageLoader requires a window with a document');
            }
            return factory(w);
        };
    } else {
        factory(root);
    }
}(typeof window !== 'undefined' ? window : this, function (window, noGlobal) {
    var PageLoaderLib = function () {
        var instance = this;
        instance._initializer = function () {
        };
        instance.init = function (pageSettings) {
            pageSettings = pageSettings || {};
            var opts = {
                url: pageSettings.url || '/api/v1/url',
                block: pageSettings.block || false,
                page: pageSettings.page || 1,
                current: pageSettings.current || 0,
                scrolldelay: pageSettings.scrolldelay || null,
                count: pageSettings.count || 2
            };
            if (pageSettings.loaderSelector) {
                opts.$loader = $('' + pageSettings.loaderSelector);
            } else {
                opts.$loader = $('.loading-new');
            }
            if (pageSettings.callback) {
                opts.callback = pageSettings.callback;
            } else {
                opts.callback = function () {
                    $.get(instance.opts.url, {
                        page: instance.opts.page,
                        type: 'continue'
                    }, function (res) {
                        console.log('GET');
                        if (res.status == 'ok') {
                            var html = res.content;
                            instance.opts.block = false;
                            instance.opts.current += 1;
                            instance.session('page', instance.opts.page);
                            console.log('page: ' + instance.session('page'));
                            var oldHtml = instance.session('data');
                            oldHtml = oldHtml + html;
                            instance.session('data', oldHtml);
                            instance.opts.$loader.before(html);
                        }
                    }, 'json');
                };
            }
            instance.opts = opts;
            opts.instance = instance;
            instance.run();
        };
        instance.session = function (name, value) {
            if (!window.sessionStorage) {
                return false;
            }
            var path = window.location.href;
            if (typeof value != 'undefined') {
                window.sessionStorage.setItem(name + '_' + path, value);
            } else {
                return window.sessionStorage.getItem(name + '_' + path) || '';
            }
        };
        instance.remember = function () {
            try {
                if ($('#container a').length <= window.name) {
                    return false;
                }
                var fragment = [];
                $('#container a').each(function (i, e) {
                    if (i >= window.name) {
                        fragment.push('<a>' + e.innerHTML + '</a>');
                    }
                });
                session('data', fragment.join(''));
                session('top', document.body.scrollTop);
                session('page', opts.current || 0);
            } catch (e) {
            }
        };
        instance.loadRes = function () {
            try {
                var html = session('data');
                if (html) {
                    instance.opts.$loader.before(html);
                    window.LazyLoad();
                    document.body.scrollTop = session('top');
                    page = parseInt(session('page'));
                }
            } catch (e) {
            }
        };
        instance.listenScroll = function () {
            window.addEventListener('scroll', function () {
                instance.session('top', document.body.scrollTop);
                instance.opts.scrolldelay = setTimeout(function () {
                    if (document.body.scrollTop > (document.height || document.documentElement.offsetHeight) - window.innerHeight - 10) {
                    }
                }, 100);
            });
        };
        instance.run = function () {
            instance.listenScroll();
            $(function () {
                var container = $('#container');
                window.name = container.find('a').length;
                instance.loadRes();
            });
            console.log('run window scroll');
            window.onscroll = null;
            window.onscroll = function (e) {
                console.log('page loader scroll');
                var screenHeight = $(window).height();
                var loaderTop;
                if (instance.opts.$loader.offset()) {
                    loaderTop = instance.opts.$loader.offset().top - screenHeight;
                } else {
                }
                var scrollTop = window.scrollY;
                if (scrollTop >= loaderTop) {
                    if (instance.opts.block) {
                        return false;
                    }
                    instance.opts.block = true;
                    instance.opts.page = parseInt(instance.opts.page);
                    instance.opts.page = instance.opts.page + 1;
                    console.log('page: ' + instance.opts.page + ', count: ' + instance.opts.count);
                    if (instance.opts.page > instance.opts.count) {
                        $('.loading-new').find('span').html('已显示全部数据');
                        return false;
                    } else {
                        instance.opts.callback.call(this, instance.opts);
                    }
                }
            };
        };
        instance._isFunction = function (obj) {
            return !!(obj && obj.constructor && obj.call && obj.apply);
        };
    };
    var PageLoader = new PageLoaderLib();
    if (typeof define === 'function' && define.amd) {
        define('pageLoader', [], function () {
            return PageLoader;
        });
    }
    if (typeof noGlobal == typeof undefined) {
        window.PageLoader = PageLoader;
    }
    return PageLoader;
}));
;
(function () {
    'use strict';
    function safe_add(x, y) {
        var lsw = (x & 65535) + (y & 65535), msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return msw << 16 | lsw & 65535;
    }
    function bit_rol(num, cnt) {
        return num << cnt | num >>> 32 - cnt;
    }
    function md5_cmn(q, a, b, x, s, t) {
        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
    }
    function md5_ff(a, b, c, d, x, s, t) {
        return md5_cmn(b & c | ~b & d, a, b, x, s, t);
    }
    function md5_gg(a, b, c, d, x, s, t) {
        return md5_cmn(b & d | c & ~d, a, b, x, s, t);
    }
    function md5_hh(a, b, c, d, x, s, t) {
        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
    }
    function md5_ii(a, b, c, d, x, s, t) {
        return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
    }
    function binl_md5(x, len) {
        x[len >> 5] |= 128 << len % 32;
        x[(len + 64 >>> 9 << 4) + 14] = len;
        var i, olda, oldb, oldc, oldd, a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
        for (i = 0; i < x.length; i += 16) {
            olda = a;
            oldb = b;
            oldc = c;
            oldd = d;
            a = md5_ff(a, b, c, d, x[i], 7, -680876936);
            d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
            c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
            b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
            a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
            d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
            c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
            b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
            a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
            d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
            c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
            b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
            d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
            a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
            d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
            c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
            b = md5_gg(b, c, d, a, x[i], 20, -373897302);
            a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
            d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
            c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
            a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
            d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
            c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
            b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
            a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
            d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
            c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
            b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
            a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
            d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
            c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
            b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
            d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
            c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
            b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
            d = md5_hh(d, a, b, c, x[i], 11, -358537222);
            c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
            b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
            a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
            d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
            b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
            a = md5_ii(a, b, c, d, x[i], 6, -198630844);
            d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
            c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
            a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
            d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
            c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
            a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
            d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
            b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
            a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
            d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
            b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
            a = safe_add(a, olda);
            b = safe_add(b, oldb);
            c = safe_add(c, oldc);
            d = safe_add(d, oldd);
        }
        return [
            a,
            b,
            c,
            d
        ];
    }
    function binl2rstr(input) {
        var i, output = '';
        for (i = 0; i < input.length * 32; i += 8) {
            output += String.fromCharCode(input[i >> 5] >>> i % 32 & 255);
        }
        return output;
    }
    function rstr2binl(input) {
        var i, output = [];
        output[(input.length >> 2) - 1] = undefined;
        for (i = 0; i < output.length; i += 1) {
            output[i] = 0;
        }
        for (i = 0; i < input.length * 8; i += 8) {
            output[i >> 5] |= (input.charCodeAt(i / 8) & 255) << i % 32;
        }
        return output;
    }
    function rstr_md5(s) {
        return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
    }
    function rstr_hmac_md5(key, data) {
        var i, bkey = rstr2binl(key), ipad = [], opad = [], hash;
        ipad[15] = opad[15] = undefined;
        if (bkey.length > 16) {
            bkey = binl_md5(bkey, key.length * 8);
        }
        for (i = 0; i < 16; i += 1) {
            ipad[i] = bkey[i] ^ 909522486;
            opad[i] = bkey[i] ^ 1549556828;
        }
        hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
        return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));
    }
    function rstr2hex(input) {
        var hex_tab = '0123456789abcdef', output = '', x, i;
        for (i = 0; i < input.length; i += 1) {
            x = input.charCodeAt(i);
            output += hex_tab.charAt(x >>> 4 & 15) + hex_tab.charAt(x & 15);
        }
        return output;
    }
    function str2rstr_utf8(input) {
        return unescape(encodeURIComponent(input));
    }
    function raw_md5(s) {
        return rstr_md5(str2rstr_utf8(s));
    }
    function hex_md5(s) {
        return rstr2hex(raw_md5(s));
    }
    function raw_hmac_md5(k, d) {
        return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d));
    }
    function hex_hmac_md5(k, d) {
        return rstr2hex(raw_hmac_md5(k, d));
    }
    function md5(string, key, raw) {
        if (!key) {
            if (!raw) {
                return hex_md5(string);
            }
            return raw_md5(string);
        }
        if (!raw) {
            return hex_hmac_md5(key, string);
        }
        return raw_hmac_md5(key, string);
    }
    if (typeof define === 'function' && define.amd) {
        define('md5', [], function () {
            return md5;
        });
    } else if (typeof module === 'object' && module.exports) {
        module.exports = md5;
    } else {
        $.md5 = md5;
    }
}.call(this));
;
(function (root, factory) {
    'use strict';
    if (typeof module == 'object' && typeof module.exports == 'object') {
        module.exports = root.document ? factory(root, true) : function (w) {
            if (!w.document) {
                throw new Error('AniJS requires a window with a document');
            }
            return factory(w);
        };
    } else {
        factory(root);
    }
}(typeof window !== 'undefined' ? window : this, function (window, noGlobal) {
    var AniJSLib = function () {
        var instance = this, ANIJS_DATATAG_NAME = 'data-anijs', DEFAULT = 'default', BODY = 'body', MULTIPLE_CLASS_SEPARATOR = '$', EVENT_RESERVED_WORD = 'if', EVENT_TARGET_RESERVED_WORD = 'on', BEHAVIOR_RESERVED_WORD = 'do', BEHAVIOR_TARGET_RESERVED_WORD = 'to';
        instance._initializer = function () {
            instance.helperCollection = {};
            instance.eventCollection = {};
            instance.eventIdCounter = 0;
            var defaultHelper = instance._createDefaultHelper();
            instance.registerHelper(DEFAULT, defaultHelper);
            instance.helperDefaultIndex = DEFAULT;
            instance.rootDOMTravelScope = document;
            instance.Parser = instance._createParser();
            instance.animationEndEvent = instance._animationEndPrefix();
            instance.classNamesWhenAnim = '';
        };
        instance.setDOMRootTravelScope = function (selector) {
            var rootDOMTravelScope;
            try {
                if (selector === 'document') {
                    rootDOMTravelScope = document;
                } else {
                    rootDOMTravelScope = document.querySelector(selector);
                    if (!rootDOMTravelScope) {
                        rootDOMTravelScope = document;
                    }
                }
            } catch (e) {
                rootDOMTravelScope = document;
            }
            instance.rootDOMTravelScope = rootDOMTravelScope;
        };
        instance.run = function () {
            var aniJSNodeCollection = [], aniJSParsedSentenceCollection = {};
            instance.purgeAll();
            aniJSNodeCollection = instance._findAniJSNodeCollection(instance.rootDOMTravelScope);
            var size = aniJSNodeCollection.length, i = 0, item;
            for (i; i < size; i++) {
                item = aniJSNodeCollection[i];
                aniJSParsedSentenceCollection = instance._getParsedAniJSSentenceCollection(item.getAttribute(ANIJS_DATATAG_NAME));
                instance._setupElementAnim(item, aniJSParsedSentenceCollection);
            }
        };
        instance.createAnimation = function (aniJSParsedSentenceCollection, element) {
            var nodeElement = element || '';
            instance._setupElementAnim(nodeElement, aniJSParsedSentenceCollection);
        };
        instance.getHelper = function (helperID) {
            var helperCollection = instance.helperCollection;
            return helperCollection[helperID] || helperCollection[DEFAULT];
        };
        instance.registerHelper = function (helperName, helperInstance) {
            instance.helperCollection[helperName] = helperInstance;
        };
        instance.purge = function (selector) {
            if (selector && selector !== '' && selector !== ' ') {
                var purgeNodeCollection = document.querySelectorAll(selector), size = purgeNodeCollection.length, i = 0;
                for (i; i < size; i++) {
                    instance._purgeNode(purgeNodeCollection[i]);
                }
            }
        };
        instance.purgeAll = function () {
            var eventCollection = instance.eventCollection, eventCollectionKeyList = Object.keys(eventCollection), size = eventCollectionKeyList.length, i = 0, key, eventObject;
            for (i; i < size; i++) {
                key = eventCollectionKeyList[i];
                eventObject = eventCollection[key];
                if (eventObject && eventObject.handleCollection && eventObject.handleCollection.length > 0) {
                    instance._purgeNode(eventObject.handleCollection[0].element);
                }
                delete eventCollection[key];
            }
        };
        instance.setClassNamesWhenAnim = function (defaultClasses) {
            instance.classNamesWhenAnim = ' ' + defaultClasses;
        };
        instance._createDefaultHelper = function () {
            var defaultHelper = {
                removeAnim: function (e, animationContext) {
                    animationContext.nodeHelper.removeClass(e.target, animationContext.behavior);
                }
            };
            return defaultHelper;
        };
        instance._createParser = function () {
            return new Parser();
        };
        instance._setupElementAnim = function (element, aniJSParsedSentenceCollection) {
            var size = aniJSParsedSentenceCollection.length, i = 0, item;
            for (i; i < size; i++) {
                item = aniJSParsedSentenceCollection[i];
                instance._setupElementSentenceAnim(element, item);
            }
        };
        instance._setupElementSentenceAnim = function (element, aniJSParsedSentence) {
            var event = instance._eventHelper(aniJSParsedSentence), eventTargetList = instance._eventTargetHelper(element, aniJSParsedSentence);
            if (event !== '') {
                var size = eventTargetList.length, i = 0, eventTargetItem;
                for (i; i < size; i++) {
                    eventTargetItem = eventTargetList[i];
                    var listener = function (event) {
                        var behaviorTargetList = instance._behaviorTargetHelper(element, aniJSParsedSentence), behavior = instance._behaviorHelper(aniJSParsedSentence), before = instance._beforeHelper(element, aniJSParsedSentence), after = instance._afterHelper(element, aniJSParsedSentence);
                        if (instance.classNamesWhenAnim !== '') {
                            behavior += instance.classNamesWhenAnim;
                        }
                        var animationContextConfig = {
                                behaviorTargetList: behaviorTargetList,
                                nodeHelper: NodeHelper,
                                animationEndEvent: instance.animationEndEvent,
                                behavior: behavior,
                                after: after
                            }, animationContextInstance = new AnimationContext(animationContextConfig);
                        if (before && instance._isFunction(before)) {
                            before(event, animationContextInstance);
                        } else {
                            animationContextInstance.run();
                        }
                    };
                    eventTargetItem.addEventListener(event, listener, false);
                    instance._registerEventHandle(eventTargetItem, event, listener);
                }
            } else {
                console.log('You must define some event');
            }
        };
        instance._registerEventHandle = function (element, eventType, listener) {
            var aniJSEventID = element._aniJSEventID, eventCollection = instance.eventCollection, elementEventHandle = {
                    eventType: eventType,
                    listener: listener,
                    element: element
                };
            if (aniJSEventID) {
                eventCollection[aniJSEventID].handleCollection.push(elementEventHandle);
            } else {
                var tempEventHandle = { handleCollection: [elementEventHandle] };
                eventCollection[++instance.eventIdCounter] = tempEventHandle;
                element._aniJSEventID = instance.eventIdCounter;
            }
        };
        instance._purgeNode = function (element) {
            var aniJSEventID = element._aniJSEventID, elementHandleCollection;
            if (aniJSEventID) {
                elementHandleCollection = instance.eventCollection[aniJSEventID].handleCollection;
                var size = elementHandleCollection.length, i = 0, item;
                for (i; i < size; i++) {
                    item = elementHandleCollection[i];
                    element.removeEventListener(item.eventType, item.listener);
                }
                instance.eventCollection[aniJSEventID] = null;
                element._aniJSEventID = null;
            }
        };
        instance._eventHelper = function (aniJSParsedSentence) {
            var defaultValue = '', event = aniJSParsedSentence.event || defaultValue;
            if (event === 'animationend') {
                event = instance._animationEndPrefix();
            }
            return event;
        };
        instance._eventTargetHelper = function (element, aniJSParsedSentence) {
            var defaultValue = element, eventTargetNodeList = [defaultValue], rootDOMTravelScope = instance.rootDOMTravelScope;
            if (aniJSParsedSentence.eventTarget) {
                if (aniJSParsedSentence.eventTarget === 'document') {
                    eventTargetNodeList = [document];
                } else if (aniJSParsedSentence.eventTarget === 'window') {
                    eventTargetNodeList = [window];
                } else {
                    try {
                        eventTargetNodeList = rootDOMTravelScope.querySelectorAll(aniJSParsedSentence.eventTarget);
                    } catch (e) {
                        console.log('Ugly Selector Here');
                        eventTargetNodeList = [];
                    }
                }
            }
            return eventTargetNodeList;
        };
        instance._behaviorTargetHelper = function (element, aniJSParsedSentence) {
            var defaultValue = element, behaviorTargetNodeList = [defaultValue], rootDOMTravelScope = instance.rootDOMTravelScope, behaviorTarget = aniJSParsedSentence.behaviorTarget;
            if (behaviorTarget) {
                behaviorTarget = behaviorTarget.split(MULTIPLE_CLASS_SEPARATOR).join(',');
                try {
                    behaviorTargetNodeList = rootDOMTravelScope.querySelectorAll(behaviorTarget);
                } catch (e) {
                    behaviorTargetNodeList = [];
                    console.log('there are an ugly selector here');
                }
            }
            return behaviorTargetNodeList;
        };
        instance._behaviorHelper = function (aniJSParsedSentence) {
            var defaultValue = aniJSParsedSentence.behavior || '';
            return defaultValue;
        };
        instance._afterHelper = function (element, aniJSParsedSentence) {
            var defaultValue = instance._callbackHelper(element, aniJSParsedSentence, aniJSParsedSentence.after);
            return defaultValue;
        };
        instance._beforeHelper = function (element, aniJSParsedSentence) {
            var defaultValue = instance._callbackHelper(element, aniJSParsedSentence, aniJSParsedSentence.before);
            return defaultValue;
        };
        instance._callbackHelper = function (element, aniJSParsedSentence, callbackFunction) {
            var defaultValue = callbackFunction || '', helper = instance._helperHelper(aniJSParsedSentence);
            if (defaultValue) {
                if (!instance._isFunction(defaultValue)) {
                    var helperCollection = instance.helperCollection, helperInstance = helperCollection[helper];
                    if (helperInstance && helperInstance[defaultValue]) {
                        defaultValue = helperInstance[defaultValue];
                    } else {
                        defaultValue = false;
                    }
                }
            }
            return defaultValue;
        };
        instance._helperHelper = function (aniJSParsedSentence) {
            var defaultValue = aniJSParsedSentence.helper || instance.helperDefaultIndex;
            return defaultValue;
        };
        instance._getParsedAniJSSentenceCollection = function (stringDeclaration) {
            return instance.Parser.parse(stringDeclaration);
        };
        instance._findAniJSNodeCollection = function (rootDOMTravelScope) {
            var aniJSDataTagName = '[' + ANIJS_DATATAG_NAME + ']';
            return rootDOMTravelScope.querySelectorAll(aniJSDataTagName);
        };
        instance._animationEndPrefix = function () {
            var endPrefixBrowserDetectionIndex = instance._endPrefixBrowserDetectionIndex(), animationEndBrowserPrefix = [
                    'animationend',
                    'oAnimationEnd',
                    'animationend',
                    'webkitAnimationEnd'
                ];
            return animationEndBrowserPrefix[endPrefixBrowserDetectionIndex];
        };
        instance._transitionEndPrefix = function () {
            var endPrefixBrowserDetectionIndex = instance._endPrefixBrowserDetectionIndex(), transitionEndBrowserPrefix = [
                    'transitionend',
                    'oTransitionEnd',
                    'transitionend',
                    'webkitTransitionEnd'
                ];
            return transitionEndBrowserPrefix[endPrefixBrowserDetectionIndex];
        };
        instance._endPrefixBrowserDetectionIndex = function () {
            var el = document.createElement('fakeelement'), animationBrowserDetection = [
                    'animation',
                    'OAnimation',
                    'MozAnimation',
                    'webkitAnimation'
                ];
            for (var i = 0; i < animationBrowserDetection.length; i++) {
                if (el.style[animationBrowserDetection[i]] !== undefined) {
                    return i;
                }
            }
        };
        instance._isFunction = function (obj) {
            return !!(obj && obj.constructor && obj.call && obj.apply);
        };
        var AnimationContext = function (config) {
            var animationContextInstance = this;
            animationContextInstance.initializer = function (config) {
                animationContextInstance.behaviorTargetList = config.behaviorTargetList || [];
                animationContextInstance.nodeHelper = config.nodeHelper;
                animationContextInstance.animationEndEvent = config.animationEndEvent;
                animationContextInstance.behavior = config.behavior;
                animationContextInstance.after = config.after;
            }, animationContextInstance.run = function () {
                var behaviorTargetList = animationContextInstance.behaviorTargetList, behaviorTargetListSize = behaviorTargetList.length, nodeHelper = animationContextInstance.nodeHelper, behavior = animationContextInstance.behavior, animationEndEvent = animationContextInstance.animationEndEvent, after = animationContextInstance.after, j = 0, behaviorTargetListItem;
                for (j; j < behaviorTargetListSize; j++) {
                    behaviorTargetListItem = behaviorTargetList[j];
                    nodeHelper.addClass(behaviorTargetListItem, behavior);
                    behaviorTargetListItem.addEventListener(animationEndEvent, function (e) {
                        e.target.removeEventListener(e.type, arguments.callee);
                        if (after) {
                            after(e, animationContextInstance);
                        }
                    });
                }
            };
            animationContextInstance.initializer(config);
        };
        var Parser = function () {
            var parserInstance = this;
            parserInstance.parse = function (aniJSDeclaration) {
                return parserInstance._parseDeclaration(aniJSDeclaration);
            };
            parserInstance._parseDeclaration = function (declaration) {
                var parsedDeclaration = [], sentenceCollection, parsedSentence;
                sentenceCollection = declaration.split(';');
                var size = sentenceCollection.length, i = 0;
                for (i; i < size; i++) {
                    parsedSentence = parserInstance._parseSentence(sentenceCollection[i]);
                    parsedDeclaration.push(parsedSentence);
                }
                return parsedDeclaration;
            };
            parserInstance._parseSentence = function (sentence) {
                var parsedSentence = {}, definitionCollection, parsedDefinition;
                definitionCollection = sentence.split(',');
                var size = definitionCollection.length, i = 0;
                for (i; i < size; i++) {
                    parsedDefinition = parserInstance._parseDefinition(definitionCollection[i]);
                    parsedSentence[parsedDefinition.key] = parsedDefinition.value;
                }
                return parsedSentence;
            };
            parserInstance._parseDefinition = function (definition) {
                var parsedDefinition = {}, definitionBody, definitionKey, definitionValue, EVENT_KEY = 'event', EVENT_TARGET_KEY = 'eventTarget', BEHAVIOR_KEY = 'behavior', BEHAVIOR_TARGET_KEY = 'behaviorTarget';
                definitionBody = definition.split(':');
                if (definitionBody.length > 1) {
                    definitionKey = definitionBody[0].trim();
                    definitionValue = definitionBody[1].trim();
                    if (definitionKey === EVENT_RESERVED_WORD) {
                        definitionKey = EVENT_KEY;
                    } else if (definitionKey === EVENT_TARGET_RESERVED_WORD) {
                        definitionKey = EVENT_TARGET_KEY;
                    } else if (definitionKey === BEHAVIOR_RESERVED_WORD) {
                        definitionKey = BEHAVIOR_KEY;
                    } else if (definitionKey === BEHAVIOR_TARGET_RESERVED_WORD) {
                        definitionKey = BEHAVIOR_TARGET_KEY;
                    }
                    parsedDefinition.key = definitionKey;
                    parsedDefinition.value = definitionValue;
                }
                return parsedDefinition;
            };
        };
        var NodeHelper = {
            addClass: function (elem, string) {
                if (!(string instanceof Array)) {
                    string = string.split(' ');
                }
                for (var i = 0, len = string.length; i < len; ++i) {
                    if (string[i] && !new RegExp('(\\s+|^)' + string[i] + '(\\s+|$)').test(elem.className)) {
                        elem.className = elem.className.trim() + ' ' + string[i];
                    }
                }
            },
            removeClass: function (elem, string) {
                if (!(string instanceof Array)) {
                    string = string.split(' ');
                }
                for (var i = 0, len = string.length; i < len; ++i) {
                    elem.className = elem.className.replace(new RegExp('(\\s+|^)' + string[i] + '(\\s+|$)'), ' ').trim();
                }
            },
            toggleClass: function (elem, string) {
                if (string) {
                    if (new RegExp('(\\s+|^)' + string + '(\\s+|$)').test(elem.className)) {
                        elem.className = elem.className.replace(new RegExp('(\\s+|^)' + string + '(\\s+|$)'), ' ').trim();
                    } else {
                        elem.className = elem.className.trim() + ' ' + string;
                    }
                }
            },
            hasClass: function (elem, string) {
                return string && new RegExp('(\\s+|^)' + string + '(\\s+|$)').test(elem.className);
            }
        };
        instance._initializer();
    };
    var AniJS = new AniJSLib();
    AniJS.run();
    if (typeof define === 'function' && define.amd) {
        define('anijs', [], function () {
            return AniJS;
        });
    }
    if (typeof noGlobal == typeof undefined) {
        window.AniJS = AniJS;
    }
    return AniJS;
}));
;
(function (root, factory) {
    if (typeof exports === 'object' && typeof require === 'function') {
        module.exports = factory(require('backbone'));
    } else if (typeof define === 'function' && define.amd) {
        define('localStorage', ['backbone'], function (Backbone) {
            return factory(Backbone || root.Backbone);
        });
    } else {
        factory(Backbone);
    }
}(this, function (Backbone) {
    function S4() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
    }
    ;
    function guid() {
        return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
    }
    ;
    function isObject(item) {
        return item === Object(item);
    }
    function contains(array, item) {
        var i = array.length;
        while (i--)
            if (array[i] === item)
                return true;
        return false;
    }
    function extend(obj, props) {
        for (var key in props)
            obj[key] = props[key];
        return obj;
    }
    function result(object, property) {
        if (object == null)
            return void 0;
        var value = object[property];
        return typeof value === 'function' ? object[property]() : value;
    }
    Backbone.LocalStorage = window.Store = function (name, serializer) {
        if (!this.localStorage) {
            throw 'Backbone.localStorage: Environment does not support localStorage.';
        }
        this.name = name;
        this.serializer = serializer || {
            serialize: function (item) {
                return isObject(item) ? JSON.stringify(item) : item;
            },
            deserialize: function (data) {
                return data && JSON.parse(data);
            }
        };
        var store = this.localStorage().getItem(this.name);
        this.records = store && store.split(',') || [];
    };
    extend(Backbone.LocalStorage.prototype, {
        save: function () {
            this.localStorage().setItem(this.name, this.records.join(','));
        },
        create: function (model) {
            if (!model.id && model.id !== 0) {
                model.id = guid();
                model.set(model.idAttribute, model.id);
            }
            this.localStorage().setItem(this._itemName(model.id), this.serializer.serialize(model));
            this.records.push(model.id.toString());
            this.save();
            return this.find(model);
        },
        update: function (model) {
            this.localStorage().setItem(this._itemName(model.id), this.serializer.serialize(model));
            var modelId = model.id.toString();
            if (!contains(this.records, modelId)) {
                this.records.push(modelId);
                this.save();
            }
            return this.find(model);
        },
        find: function (model) {
            return this.serializer.deserialize(this.localStorage().getItem(this._itemName(model.id)));
        },
        findAll: function () {
            var result = [];
            for (var i = 0, id, data; i < this.records.length; i++) {
                id = this.records[i];
                data = this.serializer.deserialize(this.localStorage().getItem(this._itemName(id)));
                if (data != null)
                    result.push(data);
            }
            return result;
        },
        destroy: function (model) {
            this.localStorage().removeItem(this._itemName(model.id));
            var modelId = model.id.toString();
            for (var i = 0, id; i < this.records.length; i++) {
                if (this.records[i] === modelId) {
                    this.records.splice(i, 1);
                }
            }
            this.save();
            return model;
        },
        localStorage: function () {
            return localStorage;
        },
        _clear: function () {
            var local = this.localStorage(), itemRe = new RegExp('^' + this.name + '-');
            local.removeItem(this.name);
            for (var k in local) {
                if (itemRe.test(k)) {
                    local.removeItem(k);
                }
            }
            this.records.length = 0;
        },
        _storageSize: function () {
            return this.localStorage().length;
        },
        _itemName: function (id) {
            return this.name + '-' + id;
        }
    });
    Backbone.LocalStorage.sync = window.Store.sync = Backbone.localSync = function (method, model, options) {
        var store = result(model, 'localStorage') || result(model.collection, 'localStorage');
        var resp, errorMessage;
        var syncDfd = Backbone.$ ? Backbone.$.Deferred && Backbone.$.Deferred() : Backbone.Deferred && Backbone.Deferred();
        try {
            switch (method) {
            case 'read':
                resp = model.id != undefined ? store.find(model) : store.findAll();
                break;
            case 'create':
                resp = store.create(model);
                break;
            case 'update':
                resp = store.update(model);
                break;
            case 'delete':
                resp = store.destroy(model);
                break;
            }
        } catch (error) {
            if (error.code === 22 && store._storageSize() === 0)
                errorMessage = 'Private browsing is unsupported';
            else
                errorMessage = error.message;
        }
        if (resp) {
            if (options && options.success) {
                if (Backbone.VERSION === '0.9.10') {
                    options.success(model, resp, options);
                } else {
                    options.success(resp);
                }
            }
            if (syncDfd) {
                syncDfd.resolve(resp);
            }
        } else {
            errorMessage = errorMessage ? errorMessage : 'Record Not Found';
            if (options && options.error)
                if (Backbone.VERSION === '0.9.10') {
                    options.error(model, errorMessage, options);
                } else {
                    options.error(errorMessage);
                }
            if (syncDfd)
                syncDfd.reject(errorMessage);
        }
        if (options && options.complete)
            options.complete(resp);
        return syncDfd && syncDfd.promise();
    };
    Backbone.ajaxSync = Backbone.sync;
    Backbone.getSyncMethod = function (model, options) {
        var forceAjaxSync = options && options.ajaxSync;
        if (!forceAjaxSync && (result(model, 'localStorage') || result(model.collection, 'localStorage'))) {
            return Backbone.localSync;
        }
        return Backbone.ajaxSync;
    };
    Backbone.sync = function (method, model, options) {
        return Backbone.getSyncMethod(model, options).apply(this, [
            method,
            model,
            options
        ]);
    };
    return Backbone.LocalStorage;
}));
;
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define('jqcookie', ['jquery'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function ($) {
    var pluses = /\+/g;
    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }
    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }
    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }
    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }
        try {
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch (e) {
        }
    }
    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }
    var config = $.cookie = function (key, value, options) {
        if (value !== undefined && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);
            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setTime(+t + days * 86400000);
            }
            return document.cookie = [
                encode(key),
                '=',
                stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '',
                options.path ? '; path=' + options.path : '',
                options.domain ? '; domain=' + options.domain : '',
                options.secure ? '; secure' : ''
            ].join('');
        }
        var result = key ? undefined : {};
        var cookies = document.cookie ? document.cookie.split('; ') : [];
        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = parts.join('=');
            if (key && key === name) {
                result = read(cookie, value);
                break;
            }
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }
        return result;
    };
    config.defaults = {};
    $.removeCookie = function (key, options) {
        if ($.cookie(key) === undefined) {
            return false;
        }
        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
        return !$.cookie(key);
    };
}));
;
(function () {
    try {
        var t = window.localStorage;
        window.localStorageEnabled = true;
    } catch (e) {
        window.localStorageEnabled = false;
    }
}());
define('libs', [
    'test',
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'touchSlide',
    'pageLoader',
    'md5',
    'anijs',
    'localStorage',
    'jqcookie'
], function (test, jquery, underscore, backbone, marionette, touchSlide, pageLoader, md5, anijs, localStorage, jqcookie) {
    return {
        test: test,
        jquery: jquery,
        underscore: underscore,
        Backbone: backbone,
        Marionette: marionette,
        TouchSlide: touchSlide,
        PageLoader: pageLoader,
        Md5: md5,
        Anijs: anijs,
        LocalStorage: localStorage,
        jqcookie: jqcookie
    };
});
define('language/src/view/common/home', [
    'require',
    'exports',
    'module',
    'libs'
], function (require, exports) {
    var libs = require('libs');
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    var HomeView = Backbone.View.extend({
        el: 'home-page',
        events: {
            'submit #add': 'addItem',
            'submit #filter': 'filterItems',
            'click #clear-filter': 'clearFilter'
        },
        initialize: function () {
            console.log('view home initialize');
        },
        render: function () {
            console.log('view home render');
        },
        addItem: function (e) {
            e.preventDefault();
        },
        filterItems: function (e) {
            e.preventDefault();
        },
        clearFilter: function (e) {
            e.preventDefault();
        }
    });
    return HomeView;
});
define('language/src/template/common/header.html', [], function () {
    return '<!--\n<header class="header head_top">\n    <a href="#index" class=""><i></i></a>\n</header>\n-->\n<div class="nav-line-bar">\n    <% if (_type == \'studying\') { %>\n    <a href="javascript:void(0);" class="active">学习中</a>\n    <a href="#index/webapp/completed">已完成</a>\n    <% } else if (_type == \'completed\') { %>\n    <a href="#index/webapp/studying">学习中</a>\n    <a href="javascript:void(0);" class="active">已完成</a>\n    <% } else { %>\n    <a href="#free/webapp" class="free-bar">公共课</a>\n    <% }; %>\n</div>';
});
define('language/src/view/common/HeaderView', [
    'marionette',
    'language/src/template/common/header.html'
], function (Marionette, template) {
    return Marionette.ItemView.extend({
        el: '#header',
        template: _.template(template),
        initialize: function () {
            var that = this;
            $('header').on('click', 'a', function (e) {
                that.changeActive(e);
            });
        },
        changeActive: function (e) {
            var me = $(e.target);
            $('header a').removeClass('active');
            me.addClass('active');
        },
        render: function (type) {
            console.log('header view render');
            var _type = type || '';
            var data = {};
            data._type = _type;
            var html = this.template(data);
            console.log('header html: ' + html);
            $(this.el).html('').html(html);
        }
    });
});
define('language/src/layout/RootLayoutView', [
    'require',
    'exports',
    'module',
    'libs'
], function (require, exports) {
    var libs = require('libs');
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    return Marionette.LayoutView.extend({
        el: 'body',
        regions: {}
    });
});
define('language/src/main/app', [
    'libs',
    'language/src/view/common/home',
    'language/src/view/common/HeaderView',
    'language/src/layout/RootLayoutView'
], function (libs, HomeView, HeaderView, RootLayoutView) {
    var libs = require('libs');
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    var App = new Backbone.Marionette.Application();
    App.rootLayout = new RootLayoutView();
    App.static = {};
    App.static.mobile = isMobile();
    App.rootLayout = new RootLayoutView();
    App.on('start', function (options) {
        App.static.init();
    });
    function isMobile() {
        var ua = (navigator.userAgent || navigator.vendor || window.opera, window, window.document);
        return /iPhone|iPod|iPad|Android|BlackBerry|Opera Mini|IEMobile/.test(ua);
    }
    App.static = {
        init: function () {
            if (Backbone.history)
                Backbone.history.start();
        },
        initView: function () {
            new HomeView();
        },
        initEvents: function () {
        },
        Model: {},
        Views: {},
        Controller: {},
        Collection: {}
    };
    App.static.Controller.Route = Backbone.Router.extend({
        routes: {
            '': 'index',
            '!/hello': 'hello',
            'aaa': 'aaa',
            'home': 'home',
            'list': 'list',
            'mine': 'mine'
        }
    });
    return App;
});
define('language/src/model/course/list', [
    'require',
    'exports',
    'module',
    'libs'
], function (require, exports) {
    var libs = require('libs');
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    var Model = Backbone.Model.extend({
        initialize: function () {
        },
        defaults: {
            id: null,
            title: '',
            lesson: []
        }
    });
    return Model;
});
define('language/src/collection/course/ListCollection', [
    'require',
    'exports',
    'module',
    'libs',
    'language/src/model/course/list'
], function (require, exports) {
    var libs = require('libs');
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    var Item = require('language/src/model/course/list');
    var Collection = Backbone.Collection.extend({
        model: Item,
        url: '/api/v1/language/list',
        initialize: function (options) {
            console.log('List Model initialize');
        },
        done: function () {
            console.log('list collection done');
        },
        updateSet: function () {
        }
    });
    return Collection;
});
define('language/src/template/course/course-list.html', [], function () {
    return '\n\n\n    <% _.each(items, function (item) { %>\n    <div class="ui-collapsible-set ui-corner-all">\n        <div class="ui-collapsible-inset">\n            <h3 class="ui-collapsible-heading">\n                <a href="javascript:void(0);" class="ui-collapsible-heading-toggle">\n                    <%= item.title %>\n                </a>\n            </h3>\n            <div class="ui-collapsible-list">\n                <% _.each(item.lessons, function (lesson, i) { %>\n                <a href="#lesson/webapp/<%= type %>/<%= lesson.id %>" class="ui-collapsible-content">\n                    <p>Lesson <%= (i+1) %></p>\n                    <p><%= lesson.title %></p>\n                </a>\n                <% }); %>\n            </div>\n        </div>\n    </div>\n    <% }); %>\n\n\n\n';
});
define('language/src/view/course/ListView', [
    'libs',
    'language/src/collection/course/ListCollection',
    'language/src/template/course/course-list.html'
], function (libs, Collection, template) {
    var libs = require('libs');
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    var PageLoader = libs.PageLoader;
    return Marionette.ItemView.extend({
        template: _.template(template),
        events: {
            'click li a': 'clickedButton',
            'click button.add-tips': 'showAddTips',
            'click button.save-tips': 'saveTips',
            'click span.del': 'clear'
        },
        initialize: function () {
            console.log('Listview initialize');
        },
        render: function (response, type) {
            console.log('list view render type: ' + type);
            var that = this;
            var container = $('#course-list');
            if (type == 'free') {
                container = $('#free');
            }
            var data = $.extend(true, { type: type }, response.data);
            console.log(data);
            var html = this.template(data);
            var loadingHtml = '' + '<div class="loading-new" id="loading-new">' + '<span><i></i>正在加载...</span>' + '</div>';
            container.html('').html(html);
            function callback(opts) {
                var _opts = opts;
                console.log(opts);
                $.get(_opts.url, {
                    page: _opts.page,
                    type: 'continue'
                }, function (res) {
                    console.log('GET');
                    if (res.code == '0') {
                        var html = that.template(response.data);
                        _opts.block = false;
                        _opts.current += 1;
                        _opts.instance.session('page', _opts.page);
                        console.log('page: ' + _opts.instance.session('page'));
                        var oldHtml = _opts.instance.session('data');
                        oldHtml = oldHtml + html;
                        _opts.instance.session('data', oldHtml);
                        _opts.$loader.before(html);
                    } else {
                    }
                }, 'json');
            }
            PageLoader.init({
                url: '/api/v1/language/list',
                limit: 10,
                count: 2,
                current: 1,
                tplType: 'search',
                callback: callback
            });
        }
    });
});
define('language/src/controller/course/ListController', [
    'libs',
    'language/src/view/course/ListView',
    'language/src/collection/course/ListCollection'
], function (libs, ListView, ListCollection) {
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    var LocalStorage = libs.LocalStorage;
    var Controller = {
        initialize: function (options) {
            console.log('course Controller initialize');
            var type = options.type;
            var collection = new ListCollection({ type: type });
            var view = new ListView();
            collection.fetch({
                data: { type: type },
                success: function (model, response) {
                    console.log('course Controller fetch success');
                    view.render(response, type);
                }
            });
        },
        done: function () {
            console.log('course Controller done');
        },
        changeView: function (url) {
        }
    };
    return Controller;
});
define('language/src/model/course/lesson', [
    'require',
    'exports',
    'module',
    'libs'
], function (require, exports) {
    var libs = require('libs');
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    var Model = Backbone.Model.extend({
        initialize: function () {
        },
        defaults: {
            id: null,
            name: '',
            cover: null,
            aImage: []
        }
    });
    return Model;
});
define('language/src/collection/course/CourselCollection', [
    'require',
    'exports',
    'module',
    'libs',
    'language/src/model/course/lesson'
], function (require, exports) {
    var libs = require('libs');
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    var Item = require('language/src/model/course/lesson');
    var Collection = Backbone.Collection.extend({
        model: Item,
        url: '/api/v1/language/lesson',
        initialize: function () {
            console.log('lesson detail Model initialize');
        },
        done: function () {
            console.log('lesson detail collection done');
        },
        updateSet: function () {
        }
    });
    return Collection;
});
define('language/src/template/course/course-detail.html', [], function () {
    return '\n\n\n\n<div id="picScroll" class="picScroll">\n    <div class="hd">\n            <span class="next"></span>\n            <ul></ul>\n            <span class="prev"></span>\n            <a href="#index">\n                <h3>返回</h3>\n            </a>\n    </div>\n    <div class="bd">\n        <section>\n            <div class="title">\n                <span>Day1</span>\n            </div>\n            <ul class="imgBoard">\n                <li><a href="#"><img _src="./images/book1.jpg" src="./images/blank.png" /></a></li>\n                <li><a href="#"><img _src="./images/book2.jpg" src="./images/blank.png" /></a></li>\n                <li><a href="#"><img _src="./images/book3.jpg" src="./images/blank.png" /></a></li>\n            </ul>\n            <div class="content">\n                <p>\n                    1111111111111111\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    2222222222222222\n                </p>\n            </div>\n        </section>\n        <section>\n            <div class="title">\n                <span>Day2</span>\n            </div>\n            <ul class="">\n                <li><a href="#"><img _src="./images/book4.jpg" src="./images/blank.png" /></a></li>\n                <li><a href="#"><img _src="./images/book5.jpg" src="./images/blank.png" /></a></li>\n                <li><a href="#"><img _src="./images/book6.jpg" src="./images/blank.png" /></a></li>\n            </ul>\n            <div class="content">\n                <p>\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                </p>\n            </div>\n        </section>\n        <section>\n            <div class="title">\n                <span>Day3</span>\n            </div>\n            <ul class="">\n                <li><a href="#"><img _src="./images/book7.jpg" src="./images/blank.png" /></a></li>\n                <li><a href="#"><img _src="./images/book8.jpg" src="./images/blank.png" /></a></li>\n                <li><a href="#"><img _src="./images/book9.jpg" src="./images/blank.png" /></a></li>\n            </ul>\n            <div class="content">\n                <p>\n                    这是一段小小的简介\n                </p>\n            </div>\n        </section>\n    </div>\n</div>\n\n\n\n';
});
define('language/src/view/course/CourseView', [
    'libs',
    'language/src/collection/course/CourselCollection',
    'language/src/template/course/course-detail.html'
], function (libs, Collection, template) {
    var libs = require('libs');
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    return Marionette.ItemView.extend({
        template: _.template(template),
        events: {
            'click li a': 'clickedButton',
            'click button.add-tips': 'showAddTips',
            'click button.save-tips': 'saveTips',
            'click span.del': 'clear'
        },
        initialize: function () {
            console.log('ListDetailview initialize');
        },
        render: function (response) {
            console.log('list detail view render');
            var that = this;
            var html = this.template(response.data);
            var container = $('#list-detail');
            container.html('').html(html);
            var touchSlide = TouchSlide;
            console.log(touchSlide);
            touchSlide.init({
                slideCell: '#picScroll',
                isTravelNotes: 'true',
                titCell: '.hd ul',
                titType: 'present',
                autoPage: true,
                pnLoop: 'false',
                switchLoad: '_src'
            });
        }
    });
});
define('language/src/controller/course/CourseController', [
    'libs',
    'language/src/view/course/CourseView',
    'language/src/collection/course/CourselCollection'
], function (libs, courseView, courselCollection) {
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    var LocalStorage = libs.LocalStorage;
    var TouchSlide = libs.TouchSlide;
    var Controller = {
        initialize: function (options) {
            console.log('course Detail Controller initialize');
            var collection = new courselCollection();
            var view = new courseView();
            var opt = options;
            collection.fetch({
                data: { id: opt.id },
                success: function (model, response) {
                    console.log('course Detail Controller fetch success');
                    view.render(response);
                }
            });
        },
        done: function () {
            console.log('course Controller done');
        },
        changeView: function (url) {
        }
    };
    return Controller;
});
define('language/src/model/lesson/lesson', [
    'require',
    'exports',
    'module',
    'libs'
], function (require, exports) {
    var libs = require('libs');
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    var Model = Backbone.Model.extend({
        initialize: function () {
        },
        defaults: {
            title: null,
            subtitle: null,
            author: null,
            avatar: null,
            fans: null,
            rank: null
        },
        validate: function (attrs) {
        },
        addVote: function () {
            this.set('fans', this.get('fans') + 1);
        },
        rankUp: function () {
            this.set({ rank: this.get('rank') - 1 });
        },
        rankDown: function () {
            this.set({ rank: this.get('rank') + 1 });
        }
    });
    return Model;
});
define('language/src/collection/lesson/LessonCollection', [
    'require',
    'exports',
    'module',
    'libs',
    'language/src/model/lesson/lesson'
], function (require, exports) {
    var libs = require('libs');
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    var Item = require('language/src/model/lesson/lesson');
    var Collection = Backbone.Collection.extend({
        model: Item,
        url: '/api/v1/language/lesson',
        initialize: function (options) {
            console.log('lesson Model initialize');
        },
        done: function () {
            console.log('lesson collection done');
        },
        updateSet: function () {
        }
    });
    return Collection;
});
define('language/src/template/lesson/lesson-list.html', [], function () {
    return '\n<div id="picScroll" class="picScroll">\n    <div class="progress">\n        <div class="progress-bar"></div>\n    </div>\n    <div class="hd">\n        <span class="next"></span>\n        <ul></ul>\n        <span class="prev"></span>\n    </div>\n    <div class="bd">\n        <section>\n            <div class="title">\n                <span>Day1</span>\n            </div>\n            <ul class="imgBoard">\n                <li><a href="#"><img _src="./images/book1.jpg" src="./images/blank.png" /></a></li>\n                <li><a href="#"><img _src="./images/book2.jpg" src="./images/blank.png" /></a></li>\n                <li><a href="#"><img _src="./images/book3.jpg" src="./images/blank.png" /></a></li>\n            </ul>\n            <div class="content">\n                <p>\n                    1111111111111111\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    2222222222222222\n                </p>\n            </div>\n        </section>\n        <section>\n            <div class="title">\n                <span>Day2</span>\n            </div>\n            <ul class="imgBoard">\n                <li><a href="#"><img _src="./images/book4.jpg" src="./images/blank.png" /></a></li>\n                <li><a href="#"><img _src="./images/book5.jpg" src="./images/blank.png" /></a></li>\n                <li><a href="#"><img _src="./images/book6.jpg" src="./images/blank.png" /></a></li>\n            </ul>\n            <div class="content">\n                <p>\n                    1111111111111111\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    2222222222222222\n                </p>\n            </div>\n        </section>\n        <section>\n            <div class="title">\n                <span>Day3</span>\n            </div>\n            <ul class="imgBoard">\n                <li><a href="#"><img _src="./images/book7.jpg" src="./images/blank.png" /></a></li>\n                <li><a href="#"><img _src="./images/book8.jpg" src="./images/blank.png" /></a></li>\n                <li><a href="#"><img _src="./images/book9.jpg" src="./images/blank.png" /></a></li>\n            </ul>\n            <div class="content">\n                <p>\n                    1111111111111111\n                    这是一段小小的简介\n                    2222222222222222\n                </p>\n            </div>\n        </section>\n        <section>\n            <div class="title">\n                <span>Day4</span>\n            </div>\n            <ul class="imgBoard">\n                <li><a href="#"><img _src="./images/book1.jpg" src="./images/blank.png" /></a></li>\n                <li><a href="#"><img _src="./images/book2.jpg" src="./images/blank.png" /></a></li>\n                <li><a href="#"><img _src="./images/book3.jpg" src="./images/blank.png" /></a></li>\n            </ul>\n            <div class="content">\n                <p>\n                    1111111111111111\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    这是一段小小的简介\n                    2222222222222222\n                </p>\n            </div>\n        </section>\n    </div>\n</div>\n\n\n\n';
});
define('language/src/view/lesson/LessonView', [
    'libs',
    'language/src/collection/lesson/LessonCollection',
    'language/src/template/lesson/lesson-list.html'
], function (libs, Collection, template) {
    var libs = require('libs');
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    var PageLoader = libs.PageLoader;
    return Marionette.ItemView.extend({
        template: _.template(template),
        events: {
            'click li a': 'clickedButton',
            'click button.add-tips': 'showAddTips',
            'click button.save-tips': 'saveTips',
            'click span.del': 'clear'
        },
        initialize: function () {
            console.log('Lesson view initialize');
        },
        render: function (response, type) {
            console.log('lesson view render');
            var that = this;
            var html = this.template(response.data);
            var container = $('#lesson');
            container.append(html);
        }
    });
});
define('language/src/template/lesson/nav.html', [], function () {
    return '<header class="header head_top">\n    <a href="#index/webapp/<%= type %>" class="back"><i></i><%= title %></a>\n</header>';
});
define('language/src/view/lesson/LessonNavView', [
    'libs',
    'language/src/template/lesson/nav.html'
], function (libs, template) {
    var libs = require('libs');
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    var PageLoader = libs.PageLoader;
    return Marionette.ItemView.extend({
        template: _.template(template),
        events: {
            'click li a': 'clickedButton',
            'click button.add-tips': 'showAddTips',
            'click button.save-tips': 'saveTips',
            'click span.del': 'clear'
        },
        initialize: function () {
            console.log('List nav view initialize');
        },
        render: function (options) {
            var _options = options;
            var that = this;
            var html = this.template({
                type: _options.type,
                url: 'index',
                title: _options.title
            });
            var container = $('#lesson');
            container.append(html);
        }
    });
});
define('language/src/controller/lesson/LessonController', [
    'libs',
    'language/src/view/lesson/LessonView',
    'language/src/view/lesson/LessonNavView',
    'language/src/collection/lesson/LessonCollection'
], function (libs, LessonView, LessonNavView, LessonCollection) {
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    var LocalStorage = libs.LocalStorage;
    var Controller = {
        initialize: function (options) {
            console.log('lesson Controller initialize');
            var _options = options;
            var type = options.type;
            var view = new LessonView();
            var navView = new LessonNavView();
            var container = $('#lesson');
            container.html('');
            var collection = new LessonCollection({ type: type });
            console.log('back type : ' + _options.type);
            navView.render({
                type: _options.type,
                title: _options.title
            });
            collection.fetch({
                data: { type: type },
                success: function (model, response) {
                    console.log('lesson Controller fetch success');
                    view.render(response, type);
                }
            });
        },
        done: function () {
            console.log('lesson Controller done');
        },
        changeView: function (url) {
        }
    };
    return Controller;
});
define('language/src/model/mine/user', [
    'require',
    'exports',
    'module',
    'libs'
], function (require, exports) {
    var libs = require('libs');
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    var Model = Backbone.Model.extend({
        initialize: function () {
        },
        defaults: {
            username: null,
            nickname: null,
            avatar: null,
            birth: null,
            mobile: null,
            fans: null,
            rank: null
        },
        validate: function (attrs) {
        },
        addVote: function () {
            this.set('fans', this.get('fans') + 1);
        },
        rankUp: function () {
            this.set({ rank: this.get('rank') - 1 });
        },
        rankDown: function () {
            this.set({ rank: this.get('rank') + 1 });
        }
    });
    return Model;
});
define('language/src/collection/mine/MineCollection', [
    'require',
    'exports',
    'module',
    'libs',
    'language/src/model/mine/user'
], function (require, exports) {
    var libs = require('libs');
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    var Item = require('language/src/model/mine/user');
    var Collection = Backbone.Collection.extend({
        model: Item,
        url: '/api/v1/language/mine/user',
        initialize: function () {
            console.log('Mine Model initialize');
        },
        done: function () {
            console.log('Mine collection done');
        },
        updateSet: function () {
        }
    });
    return Collection;
});
define('language/src/template/mine/mine-index.html', [], function () {
    return '\n\n<ul>\n    <li>\n        <a href="#myHomework/webapp" class="my-homework">\n            我的作业\n        </a>\n    </li>\n    <li>\n        <a href="#myNote/webapp" class="my-notebook">\n            我的笔记\n        </a>\n    </li>\n    <li>\n        <a href="#myInfo/webapp" class="my-info">\n            我的资料\n        </a>\n    </li>\n    <li>\n        <a href="/blog" class="my-blog">\n            觅拓游记\n        </a>\n    </li>\n    <li>\n        <a href="#about/webapp" class="about-nirtou">\n            关于觅拓\n        </a>\n    </li>\n</ul>\n\n\n';
});
define('language/src/view/mine/MineView', [
    'libs',
    'language/src/collection/mine/MineCollection',
    'language/src/template/mine/mine-index.html'
], function (libs, Collection, template) {
    var libs = require('libs');
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    var PageLoader = libs.PageLoader;
    return Marionette.ItemView.extend({
        template: _.template(template),
        events: {
            'click li a': 'clickedButton',
            'click button.add-tips': 'showAddTips',
            'click button.save-tips': 'saveTips',
            'click span.del': 'clear'
        },
        initialize: function () {
            console.log('Listview initialize');
        },
        render: function (response) {
            console.log('mine view render');
            var that = this;
            var html = this.template(response.data);
            var container = $('#mine');
            container.html('').html(html);
            function callback(opts) {
                var _opts = opts;
                console.log(opts);
            }
        }
    });
});
define('language/src/controller/mine/MineController', [
    'libs',
    'language/src/view/mine/MineView',
    'language/src/collection/mine/MineCollection'
], function (libs, MineView, MineCollection) {
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    var LocalStorage = libs.LocalStorage;
    var Controller = {
        initialize: function (options) {
            console.log('Mine Controller initialize');
            var collection = new MineCollection();
            var view = new MineView();
            collection.fetch({
                success: function (model, response) {
                    console.log('Mine Controller fetch success');
                    var data = response;
                    view.render(data);
                }
            });
        },
        done: function () {
            console.log('Mine Controller done');
        },
        changeView: function (url) {
        }
    };
    return Controller;
});
define('language/src/model/mine/homework', [
    'require',
    'exports',
    'module',
    'libs'
], function (require, exports) {
    var libs = require('libs');
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    var Model = Backbone.Model.extend({
        initialize: function () {
        },
        defaults: {
            username: null,
            nickname: null,
            avatar: null,
            birth: null,
            mobile: null,
            fans: null,
            rank: null
        },
        validate: function (attrs) {
        },
        addVote: function () {
            this.set('fans', this.get('fans') + 1);
        },
        rankUp: function () {
            this.set({ rank: this.get('rank') - 1 });
        },
        rankDown: function () {
            this.set({ rank: this.get('rank') + 1 });
        }
    });
    return Model;
});
define('language/src/collection/mine/HomeworkCollection', [
    'require',
    'exports',
    'module',
    'libs',
    'language/src/model/mine/homework'
], function (require, exports) {
    var libs = require('libs');
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    var Item = require('language/src/model/mine/homework');
    var Collection = Backbone.Collection.extend({
        model: Item,
        url: '/api/v1/language/mine/homework',
        initialize: function () {
            console.log('homework Model initialize');
        },
        done: function () {
            console.log('homework collection done');
        },
        updateSet: function () {
        }
    });
    return Collection;
});
define('language/src/template/mine/my-homework.html', [], function () {
    return '';
});
define('language/src/view/mine/HomeworkView', [
    'libs',
    'language/src/collection/mine/HomeworkCollection',
    'language/src/template/mine/my-homework.html'
], function (libs, Collection, template) {
    var libs = require('libs');
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    var PageLoader = libs.PageLoader;
    return Marionette.ItemView.extend({
        template: _.template(template),
        events: {
            'click li a': 'clickedButton',
            'click button.add-tips': 'showAddTips',
            'click button.save-tips': 'saveTips',
            'click span.del': 'clear'
        },
        initialize: function () {
            console.log('Listview initialize');
        },
        render: function (response) {
            console.log('homework view render');
            var that = this;
            var html = this.template(response.data);
            var container = $('#homework');
            container.html('').html(html);
        }
    });
});
define('language/src/controller/mine/HomeworkController', [
    'libs',
    'language/src/view/mine/HomeworkView',
    'language/src/collection/mine/HomeworkCollection'
], function (libs, HomeworkView, HomeworkCollection) {
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    var LocalStorage = libs.LocalStorage;
    var Controller = {
        initialize: function (options) {
            console.log('Mine Controller initialize');
            var collection = new HomeworkCollection();
            var view = new HomeworkView();
            collection.fetch({
                success: function (model, response) {
                    console.log('Notebook Controller fetch success');
                    var data = response;
                    view.render(data);
                }
            });
        },
        done: function () {
            console.log('Mine Controller done');
        },
        changeView: function (url) {
        }
    };
    return Controller;
});
define('language/src/model/mine/notebook', [
    'require',
    'exports',
    'module',
    'libs'
], function (require, exports) {
    var libs = require('libs');
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    var Model = Backbone.Model.extend({
        initialize: function () {
        },
        defaults: {
            username: null,
            nickname: null,
            avatar: null,
            birth: null,
            mobile: null,
            fans: null,
            rank: null
        },
        validate: function (attrs) {
        },
        addVote: function () {
            this.set('fans', this.get('fans') + 1);
        },
        rankUp: function () {
            this.set({ rank: this.get('rank') - 1 });
        },
        rankDown: function () {
            this.set({ rank: this.get('rank') + 1 });
        }
    });
    return Model;
});
define('language/src/collection/mine/NotebookCollection', [
    'require',
    'exports',
    'module',
    'libs',
    'language/src/model/mine/notebook'
], function (require, exports) {
    var libs = require('libs');
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    var Item = require('language/src/model/mine/notebook');
    var Collection = Backbone.Collection.extend({
        model: Item,
        url: '/api/v1/language/mine/notebook',
        initialize: function () {
            console.log('notebook Model initialize');
        },
        done: function () {
            console.log('notebook collection done');
        },
        updateSet: function () {
        }
    });
    return Collection;
});
define('language/src/template/mine/my-notebook.html', [], function () {
    return '';
});
define('language/src/view/mine/NotebookView', [
    'libs',
    'language/src/collection/mine/NotebookCollection',
    'language/src/template/mine/my-notebook.html'
], function (libs, Collection, template) {
    var libs = require('libs');
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    var PageLoader = libs.PageLoader;
    return Marionette.ItemView.extend({
        template: _.template(template),
        events: {
            'click li a': 'clickedButton',
            'click button.add-tips': 'showAddTips',
            'click button.save-tips': 'saveTips',
            'click span.del': 'clear'
        },
        initialize: function () {
            console.log('Listview initialize');
        },
        render: function (response) {
            console.log('notebook view render');
            var that = this;
            var html = this.template(response.data);
            var container = $('#notebook');
            container.html('').html(html);
        }
    });
});
define('language/src/controller/mine/NotebookController', [
    'libs',
    'language/src/view/mine/NotebookView',
    'language/src/collection/mine/NotebookCollection'
], function (libs, NotebookView, NotebookCollection) {
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    var LocalStorage = libs.LocalStorage;
    var Controller = {
        initialize: function (options) {
            console.log('Mine Controller initialize');
            var collection = new NotebookCollection();
            var view = new NotebookView();
            collection.fetch({
                success: function (model, response) {
                    console.log('Notebook Controller fetch success');
                    var data = response;
                    view.render(data);
                }
            });
        },
        done: function () {
            console.log('Mine Controller done');
        },
        changeView: function (url) {
        }
    };
    return Controller;
});
define('language/src/template/common/bottom.html', [], function () {
    return '\n\n<div>BOTTOM</div>\n\n';
});
define('language/src/view/common/BottomView', [
    'marionette',
    'language/src/template/common/bottom.html'
], function (Marionette, template) {
    return Marionette.ItemView.extend({
        template: _.template(template),
        tagName: 'ul',
        events: { 'click li a': 'clickedButton' },
        clickedButton: function (e) {
            var me = $(e.target);
        }
    });
});
define('language/src/controller/Controller', [
    'language/src/main/app',
    'libs',
    'language/src/controller/course/ListController',
    'language/src/controller/course/CourseController',
    'language/src/controller/lesson/LessonController',
    'language/src/controller/mine/MineController',
    'language/src/controller/mine/HomeworkController',
    'language/src/controller/mine/NotebookController',
    'language/src/view/common/HeaderView',
    'language/src/view/common/BottomView'
], function (App, libs, ListController, CourseController, LessonController, MineController, HomeworkCollection, NotebookController, HeaderView, BottomNavView) {
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    var LocalStorage = libs.LocalStorage;
    var TouchSlide = libs.TouchSlide;
    var Controller = Backbone.Marionette.Controller.extend({
        initialize: function (options) {
            console.log('Controller initialize');
            this.back = {
                studying: { title: '学习中' },
                completed: { title: '已完成' },
                free: { title: '公共课' }
            };
        },
        index: function (platform, type) {
            var _type = type || 'studying';
            var _plat = platform || 'webapp';
            if (_type == 'free') {
                this.free(_plat);
                return;
            }
            console.log('index: ' + type + ', p: ' + _plat);
            var header = new HeaderView();
            header.render(_type);
            window.onscroll = null;
            $('#header').show();
            $('#course-list').show();
            $('#free').hide();
            $('#lesson').hide();
            $('#mine').hide();
            $('#mod-navs').show();
            $('.navs-item.navs-current').removeClass('navs-current');
            $('.navs-item-home').addClass('navs-current');
            var listController = ListController;
            listController.initialize({ type: _type });
            $('#mask').hide();
            var courseContainer = $('#course-list');
            if (courseContainer.hasClass('bind-course-list')) {
                return;
            } else {
                courseContainer.addClass('bind-course-list');
                courseContainer.on('click', '.ui-collapsible-heading-toggle', function (e) {
                    var me = $(e.target);
                    var fa = me.parents('.ui-collapsible-heading');
                    var li = fa.siblings('.ui-collapsible-list');
                    if (li.hasClass('active')) {
                        courseContainer.find('.ui-collapsible-list.active').removeClass('active');
                    } else {
                        courseContainer.find('.ui-collapsible-list.active').removeClass('active');
                        li.addClass('active');
                    }
                });
            }
        },
        lesson: function (platform, back, id) {
            console.log('lesson back: ' + back + ', id: ' + id);
            var _plat = platform || 'webapp';
            var back = back || 'index';
            var id = id || 'index';
            $('#mask').show();
            window.onscroll = null;
            $('#header').hide();
            $('#course-list').hide();
            $('#free').hide();
            $('#mine').hide();
            $('#lesson').show();
            $('#mod-navs').hide();
            var title = this.back[back].title;
            var lessonController = LessonController;
            lessonController.initialize({
                type: back,
                title: title
            });
            $('#mask').hide();
        },
        free: function (platform) {
            console.log('free');
            var _plat = platform || 'webapp';
            $('#mask').show();
            var type = 'free';
            var header = new HeaderView();
            header.render(type);
            window.onscroll = null;
            $('#header').show();
            $('#course-list').hide();
            $('#free').show();
            $('#lesson').hide();
            $('#mine').hide();
            $('#mod-navs').show();
            $('.navs-item.navs-current').removeClass('navs-current');
            $('.navs-item-cart').addClass('navs-current');
            var type = 'free';
            var listController = ListController;
            listController.initialize({ type: type });
            $('#mask').hide();
            var courseContainer = $('#free');
            if (courseContainer.hasClass('bind-course-list')) {
                return;
            } else {
                courseContainer.addClass('bind-course-list');
                courseContainer.on('click', '.ui-collapsible-heading-toggle', function (e) {
                    var me = $(e.target);
                    var fa = me.parents('.ui-collapsible-heading');
                    var li = fa.siblings('.ui-collapsible-list');
                    if (li.hasClass('active')) {
                        courseContainer.find('.ui-collapsible-list.active').removeClass('active');
                    } else {
                        courseContainer.find('.ui-collapsible-list.active').removeClass('active');
                        li.addClass('active');
                    }
                });
            }
        },
        mine: function (platform) {
            console.log('mine');
            var _plat = platform || 'webapp';
            $('#mask').show();
            var mineController = MineController;
            mineController.initialize();
            window.onscroll = null;
            $('#header').hide();
            $('#course-list').hide();
            $('#free').hide();
            $('#lesson').hide();
            $('#mine').show();
            $('#mod-navs').show();
            $('.navs-item.navs-current').removeClass('navs-current');
            $('.navs-item-mine').addClass('navs-current');
            $('#mask').hide();
        },
        myHomework: function (platform) {
            console.log('myHomework');
            var _plat = platform || 'webapp';
            $('#mask').show();
            $('#lesson').hide();
            $('#mod-navs').show();
            var homeworkCollection = HomeworkCollection;
            homeworkCollection.initialize();
            $('#mask').hide();
        },
        myNotebook: function (platform) {
            console.log('myNotebook');
            var _plat = platform || 'webapp';
            $('#mask').show();
            $('#lesson').hide();
            $('#mod-navs').show();
            var notebookController = NotebookController;
            notebookController.initialize();
            $('#mask').hide();
        },
        myInfo: function (platform) {
            console.log('myInfo');
            var _plat = platform || 'webapp';
            $('#lesson').hide();
            $('#mod-navs').show();
        },
        about: function (platform) {
            console.log('about');
            var _plat = platform || 'webapp';
            $('#lesson').hide();
            $('#mod-navs').show();
        },
        changeView: function (options) {
            var _name = options.name;
            var _title = options.title;
        },
        showDialog: function (type) {
            var run = this.loadIndex();
            if (!run)
                return;
            $('body').removeClass().addClass('ohidden');
            $('#showdow').show();
            $('#dialog').show();
        },
        closeDialog: function () {
            var run = this.loadIndex();
            if (!run)
                return;
            $('body').removeClass().addClass('oauto');
            $('#showdow').hide();
            $('#dialog').hide();
        }
    });
    return Controller;
});
define('language/src/router/AppRouter', [
    'require',
    'exports',
    'module',
    'libs',
    'language/src/controller/Controller'
], function (require, exports) {
    var libs = require('libs');
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    var Controller = require('language/src/controller/Controller');
    return Marionette.AppRouter.extend({
        appRoutes: {
            '': 'index',
            'index': 'index',
            'index/:platform': 'index',
            'index/:platform/:type': 'index',
            'lesson/:platform/:back/:id': 'lesson',
            'free/:platform': 'free',
            'mine/:platform': 'mine',
            'myHomemwork/:platform': 'myHomework',
            'myNote/:platform': 'myNotebook',
            'myInfo/:platform': 'myInfo',
            'about': 'about'
        }
    });
});
define('language/main', [
    'libs',
    'language/src/main/app',
    'language/src/router/AppRouter',
    'language/src/controller/Controller'
], function (libs, App, AppRouter, Controller) {
    var libs = require('libs');
    var _ = libs.underscore;
    var $ = libs.jquery;
    var Backbone = libs.Backbone;
    var Marionette = libs.Marionette;
    var exports = {
        init: function () {
            App.appRouter = new AppRouter({ controller: new Controller() });
            App.start();
            $('#mask').hide();
        }
    };
    return exports;
});