import React from "react";

const Temp = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `

/*! jQuery v1.11.2 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!(function (a, b) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
    d = c.slice,
    e = c.concat,
    f = c.push,
    g = c.indexOf,
    h = {},
    i = h.toString,
    j = h.hasOwnProperty,
    k = {},
    l = "1.11.2",
    m = function (a, b) {
      return new m.fn.init(a, b);
    },
    n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    o = /^-ms-/,
    p = /-([\da-z])/gi,
    q = function (a, b) {
      return b.toUpperCase();
    };
  (m.fn = m.prototype = {
    jquery: l,
    constructor: m,
    selector: "",
    length: 0,
    toArray: function () {
      return d.call(this);
    },
    get: function (a) {
      return null != a
        ? 0 > a
          ? this[a + this.length]
          : this[a]
        : d.call(this);
    },
    pushStack: function (a) {
      var b = m.merge(this.constructor(), a);
      return (b.prevObject = this), (b.context = this.context), b;
    },
    each: function (a, b) {
      return m.each(this, a, b);
    },
    map: function (a) {
      return this.pushStack(
        m.map(this, function (b, c) {
          return a.call(b, c, b);
        })
      );
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
      var b = this.length,
        c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor(null);
    },
    push: f,
    sort: c.sort,
    splice: c.splice,
  }),
    (m.extend = m.fn.extend = function () {
      var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;
      for (
        "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
          "object" == typeof g || m.isFunction(g) || (g = {}),
          h === i && ((g = this), h--);
        i > h;
        h++
      )
        if (null != (e = arguments[h]))
          for (d in e)
            (a = g[d]),
              (c = e[d]),
              g !== c &&
                (j && c && (m.isPlainObject(c) || (b = m.isArray(c)))
                  ? (b
                      ? ((b = !1), (f = a && m.isArray(a) ? a : []))
                      : (f = a && m.isPlainObject(a) ? a : {}),
                    (g[d] = m.extend(j, f, c)))
                  : void 0 !== c && (g[d] = c));
      return g;
    }),
    m.extend({
      expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === m.type(a);
      },
      isArray:
        Array.isArray ||
        function (a) {
          return "array" === m.type(a);
        },
      isWindow: function (a) {
        return null != a && a == a.window;
      },
      isNumeric: function (a) {
        return !m.isArray(a) && a - parseFloat(a) + 1 >= 0;
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      isPlainObject: function (a) {
        var b;
        if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a))
          return !1;
        try {
          if (
            a.constructor &&
            !j.call(a, "constructor") &&
            !j.call(a.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (c) {
          return !1;
        }
        if (k.ownLast) for (b in a) return j.call(a, b);
        for (b in a);
        return void 0 === b || j.call(a, b);
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? h[i.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (b) {
        b &&
          m.trim(b) &&
          (
            a.execScript ||
            function (b) {
              a.eval.call(a, b);
            }
          )(b);
      },
      camelCase: function (a) {
        return a.replace(o, "ms-").replace(p, q);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (a, b, c) {
        var d,
          e = 0,
          f = a.length,
          g = r(a);
        if (c) {
          if (g) {
            for (; f > e; e++) if (((d = b.apply(a[e], c)), d === !1)) break;
          } else for (e in a) if (((d = b.apply(a[e], c)), d === !1)) break;
        } else if (g) {
          for (; f > e; e++) if (((d = b.call(a[e], e, a[e])), d === !1)) break;
        } else for (e in a) if (((d = b.call(a[e], e, a[e])), d === !1)) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : (a + "").replace(n, "");
      },
      makeArray: function (a, b) {
        var c = b || [];
        return (
          null != a &&
            (r(Object(a))
              ? m.merge(c, "string" == typeof a ? [a] : a)
              : f.call(c, a)),
          c
        );
      },
      inArray: function (a, b, c) {
        var d;
        if (b) {
          if (g) return g.call(b, a, c);
          for (
            d = b.length, c = c ? (0 > c ? Math.max(0, d + c) : c) : 0;
            d > c;
            c++
          )
            if (c in b && b[c] === a) return c;
        }
        return -1;
      },
      merge: function (a, b) {
        var c = +b.length,
          d = 0,
          e = a.length;
        while (c > d) a[e++] = b[d++];
        if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var d,
          f = 0,
          g = a.length,
          h = r(a),
          i = [];
        if (h) for (; g > f; f++) (d = b(a[f], f, c)), null != d && i.push(d);
        else for (f in a) (d = b(a[f], f, c)), null != d && i.push(d);
        return e.apply([], i);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, e, f;
        return (
          "string" == typeof b && ((f = a[b]), (b = a), (a = f)),
          m.isFunction(a)
            ? ((c = d.call(arguments, 2)),
              (e = function () {
                return a.apply(b || this, c.concat(d.call(arguments)));
              }),
              (e.guid = a.guid = a.guid || m.guid++),
              e)
            : void 0
        );
      },
      now: function () {
        return +new Date();
      },
      support: k,
    }),
    m.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase();
      }
    );
  function r(a) {
    var b = a.length,
      c = m.type(a);
    return "function" === c || m.isWindow(a)
      ? !1
      : 1 === a.nodeType && b
      ? !0
      : "array" === c ||
        0 === b ||
        ("number" == typeof b && b > 0 && b - 1 in a);
  }
  var s = (function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = "sizzle" + 1 * new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = hb(),
      z = hb(),
      A = hb(),
      B = function (a, b) {
        return a === b && (l = !0), 0;
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
        return -1;
      },
      K =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      N = M.replace("w", "w#"),
      O =
        "\\[" +
        L +
        "*(" +
        M +
        ")(?:" +
        L +
        "*([*^$|!~]?=)" +
        L +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        N +
        "))|)" +
        L +
        "*\\]",
      P =
        ":(" +
        M +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        O +
        ")*)|.*)\\)|)",
      Q = new RegExp(L + "+", "g"),
      R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      S = new RegExp("^" + L + "*," + L + "*"),
      T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      V = new RegExp(P),
      W = new RegExp("^" + N + "$"),
      X = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + O),
        PSEUDO: new RegExp("^" + P),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            L +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            L +
            "*(?:([+-]|)" +
            L +
            "*(\\d+)|))" +
            L +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            L +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            L +
            "*((?:-\\d)?\\d*)" +
            L +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /^(?:input|select|textarea|button)$/i,
      Z = /^h\d$/i,
      $ = /^[^{]+\{\s*\[native \w/,
      _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ab = /[+~]/,
      bb = /'|\\/g,
      cb = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      db = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : 0 > d
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      },
      eb = function () {
        m();
      };
    try {
      H.apply((E = I.call(v.childNodes)), v.childNodes),
        E[v.childNodes.length].nodeType;
    } catch (fb) {
      H = {
        apply: E.length
          ? function (a, b) {
              G.apply(a, I.call(b));
            }
          : function (a, b) {
              var c = a.length,
                d = 0;
              while ((a[c++] = b[d++]));
              a.length = c - 1;
            },
      };
    }
    function gb(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w, x;
      if (
        ((b ? b.ownerDocument || b : v) !== n && m(b),
        (b = b || n),
        (d = d || []),
        (k = b.nodeType),
        "string" != typeof a || !a || (1 !== k && 9 !== k && 11 !== k))
      )
        return d;
      if (!e && p) {
        if (11 !== k && (f = _.exec(a)))
          if ((j = f[1])) {
            if (9 === k) {
              if (((h = b.getElementById(j)), !h || !h.parentNode)) return d;
              if (h.id === j) return d.push(h), d;
            } else if (
              b.ownerDocument &&
              (h = b.ownerDocument.getElementById(j)) &&
              t(b, h) &&
              h.id === j
            )
              return d.push(h), d;
          } else {
            if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
            if ((j = f[3]) && c.getElementsByClassName)
              return H.apply(d, b.getElementsByClassName(j)), d;
          }
        if (c.qsa && (!q || !q.test(a))) {
          if (
            ((s = r = u),
            (w = b),
            (x = 1 !== k && a),
            1 === k && "object" !== b.nodeName.toLowerCase())
          ) {
            (o = g(a)),
              (r = b.getAttribute("id"))
                ? (s = r.replace(bb, "\\$&"))
                : b.setAttribute("id", s),
              (s = "[id='" + s + "'] "),
              (l = o.length);
            while (l--) o[l] = s + rb(o[l]);
            (w = (ab.test(a) && pb(b.parentNode)) || b), (x = o.join(","));
          }
          if (x)
            try {
              return H.apply(d, w.querySelectorAll(x)), d;
            } catch (y) {
            } finally {
              r || b.removeAttribute("id");
            }
        }
      }
      return i(a.replace(R, "$1"), b, d, e);
    }
    function hb() {
      var a = [];
      function b(c, e) {
        return (
          a.push(c + " ") > d.cacheLength && delete b[a.shift()],
          (b[c + " "] = e)
        );
      }
      return b;
    }
    function ib(a) {
      return (a[u] = !0), a;
    }
    function jb(a) {
      var b = n.createElement("div");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function kb(a, b) {
      var c = a.split("|"),
        e = a.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function lb(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function mb(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }
    function nb(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function ob(a) {
      return ib(function (b) {
        return (
          (b = +b),
          ib(function (c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function pb(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    (c = gb.support = {}),
      (f = gb.isXML = function (a) {
        var b = a && (a.ownerDocument || a).documentElement;
        return b ? "HTML" !== b.nodeName : !1;
      }),
      (m = gb.setDocument = function (a) {
        var b,
          e,
          g = a ? a.ownerDocument || a : v;
        return g !== n && 9 === g.nodeType && g.documentElement
          ? ((n = g),
            (o = g.documentElement),
            (e = g.defaultView),
            e &&
              e !== e.top &&
              (e.addEventListener
                ? e.addEventListener("unload", eb, !1)
                : e.attachEvent && e.attachEvent("onunload", eb)),
            (p = !f(g)),
            (c.attributes = jb(function (a) {
              return (a.className = "i"), !a.getAttribute("className");
            })),
            (c.getElementsByTagName = jb(function (a) {
              return (
                a.appendChild(g.createComment("")),
                !a.getElementsByTagName("*").length
              );
            })),
            (c.getElementsByClassName = $.test(g.getElementsByClassName)),
            (c.getById = jb(function (a) {
              return (
                (o.appendChild(a).id = u),
                !g.getElementsByName || !g.getElementsByName(u).length
              );
            })),
            c.getById
              ? ((d.find.ID = function (a, b) {
                  if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : [];
                  }
                }),
                (d.filter.ID = function (a) {
                  var b = a.replace(cb, db);
                  return function (a) {
                    return a.getAttribute("id") === b;
                  };
                }))
              : (delete d.find.ID,
                (d.filter.ID = function (a) {
                  var b = a.replace(cb, db);
                  return function (a) {
                    var c =
                      "undefined" != typeof a.getAttributeNode &&
                      a.getAttributeNode("id");
                    return c && c.value === b;
                  };
                })),
            (d.find.TAG = c.getElementsByTagName
              ? function (a, b) {
                  return "undefined" != typeof b.getElementsByTagName
                    ? b.getElementsByTagName(a)
                    : c.qsa
                    ? b.querySelectorAll(a)
                    : void 0;
                }
              : function (a, b) {
                  var c,
                    d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                  if ("*" === a) {
                    while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                    return d;
                  }
                  return f;
                }),
            (d.find.className =
              c.getElementsByClassName &&
              function (a, b) {
                return p ? b.getElementsByClassName(a) : void 0;
              }),
            (r = []),
            (q = []),
            (c.qsa = $.test(g.querySelectorAll)) &&
              (jb(function (a) {
                (o.appendChild(a).innerHTML =
                  "<a id='" +
                  u +
                  "'></a><select id='" +
                  u +
                  "-\f]' msallowcapture=''><option selected=''></option></select>"),
                  a.querySelectorAll("[msallowcapture^='']").length &&
                    q.push("[*^$]=" + L + "*(?:''|\"\")"),
                  a.querySelectorAll("[selected]").length ||
                    q.push("\\[" + L + "*(?:value|" + K + ")"),
                  a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                  a.querySelectorAll(":checked").length || q.push(":checked"),
                  a.querySelectorAll("a#" + u + "+*").length ||
                    q.push(".#.+[+~]");
              }),
              jb(function (a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"),
                  a.appendChild(b).setAttribute("name", "D"),
                  a.querySelectorAll("[name=d]").length &&
                    q.push("name" + L + "*[*^$|!~]?="),
                  a.querySelectorAll(":enabled").length ||
                    q.push(":enabled", ":disabled"),
                  a.querySelectorAll("*,:x"),
                  q.push(",.*:");
              })),
            (c.matchesSelector = $.test(
              (s =
                o.matches ||
                o.webkitMatchesSelector ||
                o.mozMatchesSelector ||
                o.oMatchesSelector ||
                o.msMatchesSelector)
            )) &&
              jb(function (a) {
                (c.disconnectedMatch = s.call(a, "div")),
                  s.call(a, "[s!='']:x"),
                  r.push("!=", P);
              }),
            (q = q.length && new RegExp(q.join("|"))),
            (r = r.length && new RegExp(r.join("|"))),
            (b = $.test(o.compareDocumentPosition)),
            (t =
              b || $.test(o.contains)
                ? function (a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                      d = b && b.parentNode;
                    return (
                      a === d ||
                      !(
                        !d ||
                        1 !== d.nodeType ||
                        !(c.contains
                          ? c.contains(d)
                          : a.compareDocumentPosition &&
                            16 & a.compareDocumentPosition(d))
                      )
                    );
                  }
                : function (a, b) {
                    if (b) while ((b = b.parentNode)) if (b === a) return !0;
                    return !1;
                  }),
            (B = b
              ? function (a, b) {
                  if (a === b) return (l = !0), 0;
                  var d =
                    !a.compareDocumentPosition - !b.compareDocumentPosition;
                  return d
                    ? d
                    : ((d =
                        (a.ownerDocument || a) === (b.ownerDocument || b)
                          ? a.compareDocumentPosition(b)
                          : 1),
                      1 & d ||
                      (!c.sortDetached && b.compareDocumentPosition(a) === d)
                        ? a === g || (a.ownerDocument === v && t(v, a))
                          ? -1
                          : b === g || (b.ownerDocument === v && t(v, b))
                          ? 1
                          : k
                          ? J(k, a) - J(k, b)
                          : 0
                        : 4 & d
                        ? -1
                        : 1);
                }
              : function (a, b) {
                  if (a === b) return (l = !0), 0;
                  var c,
                    d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                  if (!e || !f)
                    return a === g
                      ? -1
                      : b === g
                      ? 1
                      : e
                      ? -1
                      : f
                      ? 1
                      : k
                      ? J(k, a) - J(k, b)
                      : 0;
                  if (e === f) return lb(a, b);
                  c = a;
                  while ((c = c.parentNode)) h.unshift(c);
                  c = b;
                  while ((c = c.parentNode)) i.unshift(c);
                  while (h[d] === i[d]) d++;
                  return d
                    ? lb(h[d], i[d])
                    : h[d] === v
                    ? -1
                    : i[d] === v
                    ? 1
                    : 0;
                }),
            g)
          : n;
      }),
      (gb.matches = function (a, b) {
        return gb(a, null, null, b);
      }),
      (gb.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(U, "='$1']")),
          !(!c.matchesSelector || !p || (r && r.test(b)) || (q && q.test(b))))
        )
          try {
            var d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (e) {}
        return gb(b, n, null, [a]).length > 0;
      }),
      (gb.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (gb.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
          ? a.getAttribute(b)
          : (f = a.getAttributeNode(b)) && f.specified
          ? f.value
          : null;
      }),
      (gb.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (gb.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = gb.getText = function (a) {
        var b,
          c = "",
          d = 0,
          f = a.nodeType;
        if (f) {
          if (1 === f || 9 === f || 11 === f) {
            if ("string" == typeof a.textContent) return a.textContent;
            for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
          } else if (3 === f || 4 === f) return a.nodeValue;
        } else while ((b = a[d++])) c += e(b);
        return c;
      }),
      (d = gb.selectors = {
        cacheLength: 50,
        createPseudo: ib,
        match: X,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (a) {
            return (
              (a[1] = a[1].replace(cb, db)),
              (a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db)),
              "~=" === a[2] && (a[3] = " " + a[3] + " "),
              a.slice(0, 4)
            );
          },
          CHILD: function (a) {
            return (
              (a[1] = a[1].toLowerCase()),
              "nth" === a[1].slice(0, 3)
                ? (a[3] || gb.error(a[0]),
                  (a[4] = +(a[4]
                    ? a[5] + (a[6] || 1)
                    : 2 * ("even" === a[3] || "odd" === a[3]))),
                  (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                : a[3] && gb.error(a[0]),
              a
            );
          },
          PSEUDO: function (a) {
            var b,
              c = !a[6] && a[2];
            return X.CHILD.test(a[0])
              ? null
              : (a[3]
                  ? (a[2] = a[4] || a[5] || "")
                  : c &&
                    V.test(c) &&
                    (b = g(c, !0)) &&
                    (b = c.indexOf(")", c.length - b) - c.length) &&
                    ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                a.slice(0, 3));
          },
        },
        filter: {
          TAG: function (a) {
            var b = a.replace(cb, db).toLowerCase();
            return "*" === a
              ? function () {
                  return !0;
                }
              : function (a) {
                  return a.nodeName && a.nodeName.toLowerCase() === b;
                };
          },
          CLASS: function (a) {
            var b = y[a + " "];
            return (
              b ||
              ((b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) &&
                y(a, function (a) {
                  return b.test(
                    ("string" == typeof a.className && a.className) ||
                      ("undefined" != typeof a.getAttribute &&
                        a.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (a, b, c) {
            return function (d) {
              var e = gb.attr(d, a);
              return null == e
                ? "!=" === b
                : b
                ? ((e += ""),
                  "=" === b
                    ? e === c
                    : "!=" === b
                    ? e !== c
                    : "^=" === b
                    ? c && 0 === e.indexOf(c)
                    : "*=" === b
                    ? c && e.indexOf(c) > -1
                    : "$=" === b
                    ? c && e.slice(-c.length) === c
                    : "~=" === b
                    ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1
                    : "|=" === b
                    ? e === c || e.slice(0, c.length + 1) === c + "-"
                    : !1)
                : !0;
            };
          },
          CHILD: function (a, b, c, d, e) {
            var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;
            return 1 === d && 0 === e
              ? function (a) {
                  return !!a.parentNode;
                }
              : function (b, c, i) {
                  var j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p = f !== g ? "nextSibling" : "previousSibling",
                    q = b.parentNode,
                    r = h && b.nodeName.toLowerCase(),
                    s = !i && !h;
                  if (q) {
                    if (f) {
                      while (p) {
                        l = b;
                        while ((l = l[p]))
                          if (
                            h
                              ? l.nodeName.toLowerCase() === r
                              : 1 === l.nodeType
                          )
                            return !1;
                        o = p = "only" === a && !o && "nextSibling";
                      }
                      return !0;
                    }
                    if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                      (k = q[u] || (q[u] = {})),
                        (j = k[a] || []),
                        (n = j[0] === w && j[1]),
                        (m = j[0] === w && j[2]),
                        (l = n && q.childNodes[n]);
                      while ((l = (++n && l && l[p]) || (m = n = 0) || o.pop()))
                        if (1 === l.nodeType && ++m && l === b) {
                          k[a] = [w, n, m];
                          break;
                        }
                    } else if (
                      s &&
                      (j = (b[u] || (b[u] = {}))[a]) &&
                      j[0] === w
                    )
                      m = j[1];
                    else
                      while ((l = (++n && l && l[p]) || (m = n = 0) || o.pop()))
                        if (
                          (h
                            ? l.nodeName.toLowerCase() === r
                            : 1 === l.nodeType) &&
                          ++m &&
                          (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)
                        )
                          break;
                    return (m -= e), m === d || (m % d === 0 && m / d >= 0);
                  }
                };
          },
          PSEUDO: function (a, b) {
            var c,
              e =
                d.pseudos[a] ||
                d.setFilters[a.toLowerCase()] ||
                gb.error("unsupported pseudo: " + a);
            return e[u]
              ? e(b)
              : e.length > 1
              ? ((c = [a, a, "", b]),
                d.setFilters.hasOwnProperty(a.toLowerCase())
                  ? ib(function (a, c) {
                      var d,
                        f = e(a, b),
                        g = f.length;
                      while (g--) (d = J(a, f[g])), (a[d] = !(c[d] = f[g]));
                    })
                  : function (a) {
                      return e(a, 0, c);
                    })
              : e;
          },
        },
        pseudos: {
          not: ib(function (a) {
            var b = [],
              c = [],
              d = h(a.replace(R, "$1"));
            return d[u]
              ? ib(function (a, b, c, e) {
                  var f,
                    g = d(a, null, e, []),
                    h = a.length;
                  while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                })
              : function (a, e, f) {
                  return (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop();
                };
          }),
          has: ib(function (a) {
            return function (b) {
              return gb(a, b).length > 0;
            };
          }),
          contains: ib(function (a) {
            return (
              (a = a.replace(cb, db)),
              function (b) {
                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
              }
            );
          }),
          lang: ib(function (a) {
            return (
              W.test(a || "") || gb.error("unsupported lang: " + a),
              (a = a.replace(cb, db).toLowerCase()),
              function (b) {
                var c;
                do
                  if (
                    (c = p
                      ? b.lang
                      : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                  )
                    return (
                      (c = c.toLowerCase()), c === a || 0 === c.indexOf(a + "-")
                    );
                while ((b = b.parentNode) && 1 === b.nodeType);
                return !1;
              }
            );
          }),
          target: function (b) {
            var c = a.location && a.location.hash;
            return c && c.slice(1) === b.id;
          },
          root: function (a) {
            return a === o;
          },
          focus: function (a) {
            return (
              a === n.activeElement &&
              (!n.hasFocus || n.hasFocus()) &&
              !!(a.type || a.href || ~a.tabIndex)
            );
          },
          enabled: function (a) {
            return a.disabled === !1;
          },
          disabled: function (a) {
            return a.disabled === !0;
          },
          checked: function (a) {
            var b = a.nodeName.toLowerCase();
            return (
              ("input" === b && !!a.checked) || ("option" === b && !!a.selected)
            );
          },
          selected: function (a) {
            return (
              a.parentNode && a.parentNode.selectedIndex, a.selected === !0
            );
          },
          empty: function (a) {
            for (a = a.firstChild; a; a = a.nextSibling)
              if (a.nodeType < 6) return !1;
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
            return ("input" === b && "button" === a.type) || "button" === b;
          },
          text: function (a) {
            var b;
            return (
              "input" === a.nodeName.toLowerCase() &&
              "text" === a.type &&
              (null == (b = a.getAttribute("type")) ||
                "text" === b.toLowerCase())
            );
          },
          first: ob(function () {
            return [0];
          }),
          last: ob(function (a, b) {
            return [b - 1];
          }),
          eq: ob(function (a, b, c) {
            return [0 > c ? c + b : c];
          }),
          even: ob(function (a, b) {
            for (var c = 0; b > c; c += 2) a.push(c);
            return a;
          }),
          odd: ob(function (a, b) {
            for (var c = 1; b > c; c += 2) a.push(c);
            return a;
          }),
          lt: ob(function (a, b, c) {
            for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
            return a;
          }),
          gt: ob(function (a, b, c) {
            for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
            return a;
          }),
        },
      }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = mb(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = nb(b);
    function qb() {}
    (qb.prototype = d.filters = d.pseudos),
      (d.setFilters = new qb()),
      (g = gb.tokenize = function (a, b) {
        var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];
        if (k) return b ? 0 : k.slice(0);
        (h = a), (i = []), (j = d.preFilter);
        while (h) {
          (!c || (e = S.exec(h))) &&
            (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
            (c = !1),
            (e = T.exec(h)) &&
              ((c = e.shift()),
              f.push({ value: c, type: e[0].replace(R, " ") }),
              (h = h.slice(c.length)));
          for (g in d.filter)
            !(e = X[g].exec(h)) ||
              (j[g] && !(e = j[g](e))) ||
              ((c = e.shift()),
              f.push({ value: c, type: g, matches: e }),
              (h = h.slice(c.length)));
          if (!c) break;
        }
        return b ? h.length : h ? gb.error(a) : z(a, i).slice(0);
      });
    function rb(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d;
    }
    function sb(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = x++;
      return b.first
        ? function (b, c, f) {
            while ((b = b[d])) if (1 === b.nodeType || e) return a(b, c, f);
          }
        : function (b, c, g) {
            var h,
              i,
              j = [w, f];
            if (g) {
              while ((b = b[d]))
                if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
            } else
              while ((b = b[d]))
                if (1 === b.nodeType || e) {
                  if (
                    ((i = b[u] || (b[u] = {})),
                    (h = i[d]) && h[0] === w && h[1] === f)
                  )
                    return (j[2] = h[2]);
                  if (((i[d] = j), (j[2] = a(b, c, g)))) return !0;
                }
          };
    }
    function tb(a) {
      return a.length > 1
        ? function (b, c, d) {
            var e = a.length;
            while (e--) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function ub(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) gb(a, b[d], c);
      return c;
    }
    function vb(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g;
    }
    function wb(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = wb(d)),
        e && !e[u] && (e = wb(e, f)),
        ib(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ub(b || "*", h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : vb(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = vb(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) &&
                  (j = e ? J(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else (r = vb(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : H.apply(g, r);
        })
      );
    }
    function xb(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[" "],
          i = g ? 1 : 0,
          k = sb(
            function (a) {
              return a === b;
            },
            h,
            !0
          ),
          l = sb(
            function (a) {
              return J(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function (a, c, d) {
              var e =
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
              return (b = null), e;
            },
          ];
        f > i;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [sb(tb(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
            return wb(
              i > 1 && tb(m),
              i > 1 &&
                rb(
                  a
                    .slice(0, i - 1)
                    .concat({ value: " " === a[i - 2].type ? "*" : "" })
                ).replace(R, "$1"),
              c,
              e > i && xb(a.slice(i, e)),
              f > e && xb((a = a.slice(e))),
              f > e && rb(a)
            );
          }
          m.push(c);
        }
      return tb(m);
    }
    function yb(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l,
            m,
            o,
            p = 0,
            q = "0",
            r = f && [],
            s = [],
            t = j,
            u = f || (e && d.find.TAG("*", k)),
            v = (w += null == t ? 1 : Math.random() || 0.1),
            x = u.length;
          for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
            if (e && l) {
              m = 0;
              while ((o = a[m++]))
                if (o(l, g, h)) {
                  i.push(l);
                  break;
                }
              k && (w = v);
            }
            c && ((l = !o && l) && p--, f && r.push(l));
          }
          if (((p += q), c && q !== p)) {
            m = 0;
            while ((o = b[m++])) o(r, s, g, h);
            if (f) {
              if (p > 0) while (q--) r[q] || s[q] || (s[q] = F.call(i));
              s = vb(s);
            }
            H.apply(i, s),
              k && !f && s.length > 0 && p + b.length > 1 && gb.uniqueSort(i);
          }
          return k && ((w = v), (j = t)), r;
        };
      return c ? ib(f) : f;
    }
    return (
      (h = gb.compile = function (a, b) {
        var c,
          d = [],
          e = [],
          f = A[a + " "];
        if (!f) {
          b || (b = g(a)), (c = b.length);
          while (c--) (f = xb(b[c])), f[u] ? d.push(f) : e.push(f);
          (f = A(a, yb(e, d))), (f.selector = a);
        }
        return f;
      }),
      (i = gb.select = function (a, b, e, f) {
        var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g((a = n.selector || a));
        if (((e = e || []), 1 === o.length)) {
          if (
            ((j = o[0] = o[0].slice(0)),
            j.length > 2 &&
              "ID" === (k = j[0]).type &&
              c.getById &&
              9 === b.nodeType &&
              p &&
              d.relative[j[1].type])
          ) {
            if (
              ((b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0]), !b)
            )
              return e;
            n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
          }
          i = X.needsContext.test(a) ? 0 : j.length;
          while (i--) {
            if (((k = j[i]), d.relative[(l = k.type)])) break;
            if (
              (m = d.find[l]) &&
              (f = m(
                k.matches[0].replace(cb, db),
                (ab.test(j[0].type) && pb(b.parentNode)) || b
              ))
            ) {
              if ((j.splice(i, 1), (a = f.length && rb(j)), !a))
                return H.apply(e, f), e;
              break;
            }
          }
        }
        return (
          (n || h(a, o))(f, b, !p, e, (ab.test(a) && pb(b.parentNode)) || b), e
        );
      }),
      (c.sortStable = u.split("").sort(B).join("") === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = jb(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement("div"));
      })),
      jb(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        kb("type|href|height|width", function (a, b, c) {
          return c
            ? void 0
            : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        jb(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        kb("value", function (a, b, c) {
          return c || "input" !== a.nodeName.toLowerCase()
            ? void 0
            : a.defaultValue;
        }),
      jb(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        kb(K, function (a, b, c) {
          var d;
          return c
            ? void 0
            : a[b] === !0
            ? b.toLowerCase()
            : (d = a.getAttributeNode(b)) && d.specified
            ? d.value
            : null;
        }),
      gb
    );
  })(a);
  (m.find = s),
    (m.expr = s.selectors),
    (m.expr[":"] = m.expr.pseudos),
    (m.unique = s.uniqueSort),
    (m.text = s.getText),
    (m.isXMLDoc = s.isXML),
    (m.contains = s.contains);
  var t = m.expr.match.needsContext,
    u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    v = /^.[^:#\[\.,]*$/;
  function w(a, b, c) {
    if (m.isFunction(b))
      return m.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c;
      });
    if (b.nodeType)
      return m.grep(a, function (a) {
        return (a === b) !== c;
      });
    if ("string" == typeof b) {
      if (v.test(b)) return m.filter(b, a, c);
      b = m.filter(b, a);
    }
    return m.grep(a, function (a) {
      return m.inArray(a, b) >= 0 !== c;
    });
  }
  (m.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? m.find.matchesSelector(d, a)
          ? [d]
          : []
        : m.find.matches(
            a,
            m.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    m.fn.extend({
      find: function (a) {
        var b,
          c = [],
          d = this,
          e = d.length;
        if ("string" != typeof a)
          return this.pushStack(
            m(a).filter(function () {
              for (b = 0; e > b; b++) if (m.contains(d[b], this)) return !0;
            })
          );
        for (b = 0; e > b; b++) m.find(a, d[b], c);
        return (
          (c = this.pushStack(e > 1 ? m.unique(c) : c)),
          (c.selector = this.selector ? this.selector + " " + a : a),
          c
        );
      },
      filter: function (a) {
        return this.pushStack(w(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(w(this, a || [], !0));
      },
      is: function (a) {
        return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1)
          .length;
      },
    });
  var x,
    y = a.document,
    z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    A = (m.fn.init = function (a, b) {
      var c, d;
      if (!a) return this;
      if ("string" == typeof a) {
        if (
          ((c =
            "<" === a.charAt(0) &&
            ">" === a.charAt(a.length - 1) &&
            a.length >= 3
              ? [null, a, null]
              : z.exec(a)),
          !c || (!c[1] && b))
        )
          return !b || b.jquery
            ? (b || x).find(a)
            : this.constructor(b).find(a);
        if (c[1]) {
          if (
            ((b = b instanceof m ? b[0] : b),
            m.merge(
              this,
              m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)
            ),
            u.test(c[1]) && m.isPlainObject(b))
          )
            for (c in b)
              m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
          return this;
        }
        if (((d = y.getElementById(c[2])), d && d.parentNode)) {
          if (d.id !== c[2]) return x.find(a);
          (this.length = 1), (this[0] = d);
        }
        return (this.context = y), (this.selector = a), this;
      }
      return a.nodeType
        ? ((this.context = this[0] = a), (this.length = 1), this)
        : m.isFunction(a)
        ? "undefined" != typeof x.ready
          ? x.ready(a)
          : a(m)
        : (void 0 !== a.selector &&
            ((this.selector = a.selector), (this.context = a.context)),
          m.makeArray(a, this));
    });
  (A.prototype = m.fn), (x = m(y));
  var B = /^(?:parents|prev(?:Until|All))/,
    C = { children: !0, contents: !0, next: !0, prev: !0 };
  m.extend({
    dir: function (a, b, c) {
      var d = [],
        e = a[b];
      while (
        e &&
        9 !== e.nodeType &&
        (void 0 === c || 1 !== e.nodeType || !m(e).is(c))
      )
        1 === e.nodeType && d.push(e), (e = e[b]);
      return d;
    },
    sibling: function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
  }),
    m.fn.extend({
      has: function (a) {
        var b,
          c = m(a, this),
          d = c.length;
        return this.filter(function () {
          for (b = 0; d > b; b++) if (m.contains(this, c[b])) return !0;
        });
      },
      closest: function (a, b) {
        for (
          var c,
            d = 0,
            e = this.length,
            f = [],
            g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0;
          e > d;
          d++
        )
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (
              c.nodeType < 11 &&
              (g
                ? g.index(c) > -1
                : 1 === c.nodeType && m.find.matchesSelector(c, a))
            ) {
              f.push(c);
              break;
            }
        return this.pushStack(f.length > 1 ? m.unique(f) : f);
      },
      index: function (a) {
        return a
          ? "string" == typeof a
            ? m.inArray(this[0], m(a))
            : m.inArray(a.jquery ? a[0] : a, this)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (a, b) {
        return this.pushStack(m.unique(m.merge(this.get(), m(a, b))));
      },
      addBack: function (a) {
        return this.add(
          null == a ? this.prevObject : this.prevObject.filter(a)
        );
      },
    });
  function D(a, b) {
    do a = a[b];
    while (a && 1 !== a.nodeType);
    return a;
  }
  m.each(
    {
      parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function (a) {
        return m.dir(a, "parentNode");
      },
      parentsUntil: function (a, b, c) {
        return m.dir(a, "parentNode", c);
      },
      next: function (a) {
        return D(a, "nextSibling");
      },
      prev: function (a) {
        return D(a, "previousSibling");
      },
      nextAll: function (a) {
        return m.dir(a, "nextSibling");
      },
      prevAll: function (a) {
        return m.dir(a, "previousSibling");
      },
      nextUntil: function (a, b, c) {
        return m.dir(a, "nextSibling", c);
      },
      prevUntil: function (a, b, c) {
        return m.dir(a, "previousSibling", c);
      },
      siblings: function (a) {
        return m.sibling((a.parentNode || {}).firstChild, a);
      },
      children: function (a) {
        return m.sibling(a.firstChild);
      },
      contents: function (a) {
        return m.nodeName(a, "iframe")
          ? a.contentDocument || a.contentWindow.document
          : m.merge([], a.childNodes);
      },
    },
    function (a, b) {
      m.fn[a] = function (c, d) {
        var e = m.map(this, b, c);
        return (
          "Until" !== a.slice(-5) && (d = c),
          d && "string" == typeof d && (e = m.filter(d, e)),
          this.length > 1 &&
            (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())),
          this.pushStack(e)
        );
      };
    }
  );
  var E = /\S+/g,
    F = {};
  function G(a) {
    var b = (F[a] = {});
    return (
      m.each(a.match(E) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  (m.Callbacks = function (a) {
    a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
    var b,
      c,
      d,
      e,
      f,
      g,
      h = [],
      i = !a.once && [],
      j = function (l) {
        for (
          c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0;
          h && e > f;
          f++
        )
          if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
            c = !1;
            break;
          }
        (b = !1),
          h && (i ? i.length && j(i.shift()) : c ? (h = []) : k.disable());
      },
      k = {
        add: function () {
          if (h) {
            var d = h.length;
            !(function f(b) {
              m.each(b, function (b, c) {
                var d = m.type(c);
                "function" === d
                  ? (a.unique && k.has(c)) || h.push(c)
                  : c && c.length && "string" !== d && f(c);
              });
            })(arguments),
              b ? (e = h.length) : c && ((g = d), j(c));
          }
          return this;
        },
        remove: function () {
          return (
            h &&
              m.each(arguments, function (a, c) {
                var d;
                while ((d = m.inArray(c, h, d)) > -1)
                  h.splice(d, 1), b && (e >= d && e--, f >= d && f--);
              }),
            this
          );
        },
        has: function (a) {
          return a ? m.inArray(a, h) > -1 : !(!h || !h.length);
        },
        empty: function () {
          return (h = []), (e = 0), this;
        },
        disable: function () {
          return (h = i = c = void 0), this;
        },
        disabled: function () {
          return !h;
        },
        lock: function () {
          return (i = void 0), c || k.disable(), this;
        },
        locked: function () {
          return !i;
        },
        fireWith: function (a, c) {
          return (
            !h ||
              (d && !i) ||
              ((c = c || []),
              (c = [a, c.slice ? c.slice() : c]),
              b ? i.push(c) : j(c)),
            this
          );
        },
        fire: function () {
          return k.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!d;
        },
      };
    return k;
  }),
    m.extend({
      Deferred: function (a) {
        var b = [
            ["resolve", "done", m.Callbacks("once memory"), "resolved"],
            ["reject", "fail", m.Callbacks("once memory"), "rejected"],
            ["notify", "progress", m.Callbacks("memory")],
          ],
          c = "pending",
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return m
                .Deferred(function (c) {
                  m.each(b, function (b, f) {
                    var g = m.isFunction(a[b]) && a[b];
                    e[f[1]](function () {
                      var a = g && g.apply(this, arguments);
                      a && m.isFunction(a.promise)
                        ? a
                            .promise()
                            .done(c.resolve)
                            .fail(c.reject)
                            .progress(c.notify)
                        : c[f[0] + "With"](
                            this === d ? c.promise() : this,
                            g ? [a] : arguments
                          );
                    });
                  }),
                    (a = null);
                })
                .promise();
            },
            promise: function (a) {
              return null != a ? m.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          m.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function () {
                    c = h;
                  },
                  b[1 ^ a][2].disable,
                  b[2][2].lock
                ),
              (e[f[0]] = function () {
                return e[f[0] + "With"](this === e ? d : this, arguments), this;
              }),
              (e[f[0] + "With"] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var b = 0,
          c = d.call(arguments),
          e = c.length,
          f = 1 !== e || (a && m.isFunction(a.promise)) ? e : 0,
          g = 1 === f ? a : m.Deferred(),
          h = function (a, b, c) {
            return function (e) {
              (b[a] = this),
                (c[a] = arguments.length > 1 ? d.call(arguments) : e),
                c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
            };
          },
          i,
          j,
          k;
        if (e > 1)
          for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
            c[b] && m.isFunction(c[b].promise)
              ? c[b]
                  .promise()
                  .done(h(b, k, c))
                  .fail(g.reject)
                  .progress(h(b, j, i))
              : --f;
        return f || g.resolveWith(k, c), g.promise();
      },
    });
  var H;
  (m.fn.ready = function (a) {
    return m.ready.promise().done(a), this;
  }),
    m.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? m.readyWait++ : m.ready(!0);
      },
      ready: function (a) {
        if (a === !0 ? !--m.readyWait : !m.isReady) {
          if (!y.body) return setTimeout(m.ready);
          (m.isReady = !0),
            (a !== !0 && --m.readyWait > 0) ||
              (H.resolveWith(y, [m]),
              m.fn.triggerHandler &&
                (m(y).triggerHandler("ready"), m(y).off("ready")));
        }
      },
    });
  function I() {
    y.addEventListener
      ? (y.removeEventListener("DOMContentLoaded", J, !1),
        a.removeEventListener("load", J, !1))
      : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J));
  }
  function J() {
    (y.addEventListener ||
      "load" === event.type ||
      "complete" === y.readyState) &&
      (I(), m.ready());
  }
  m.ready.promise = function (b) {
    if (!H)
      if (((H = m.Deferred()), "complete" === y.readyState))
        setTimeout(m.ready);
      else if (y.addEventListener)
        y.addEventListener("DOMContentLoaded", J, !1),
          a.addEventListener("load", J, !1);
      else {
        y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
        var c = !1;
        try {
          c = null == a.frameElement && y.documentElement;
        } catch (d) {}
        c &&
          c.doScroll &&
          !(function e() {
            if (!m.isReady) {
              try {
                c.doScroll("left");
              } catch (a) {
                return setTimeout(e, 50);
              }
              I(), m.ready();
            }
          })();
      }
    return H.promise(b);
  };
  var K = "undefined",
    L;
  for (L in m(k)) break;
  (k.ownLast = "0" !== L),
    (k.inlineBlockNeedsLayout = !1),
    m(function () {
      var a, b, c, d;
      (c = y.getElementsByTagName("body")[0]),
        c &&
          c.style &&
          ((b = y.createElement("div")),
          (d = y.createElement("div")),
          (d.style.cssText =
            "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
          c.appendChild(d).appendChild(b),
          typeof b.style.zoom !== K &&
            ((b.style.cssText =
              "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
            (k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth),
            a && (c.style.zoom = 1)),
          c.removeChild(d));
    }),
    (function () {
      var a = y.createElement("div");
      if (null == k.deleteExpando) {
        k.deleteExpando = !0;
        try {
          delete a.test;
        } catch (b) {
          k.deleteExpando = !1;
        }
      }
      a = null;
    })(),
    (m.acceptData = function (a) {
      var b = m.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;
      return 1 !== c && 9 !== c
        ? !1
        : !b || (b !== !0 && a.getAttribute("classid") === b);
    });
  var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    N = /([A-Z])/g;
  function O(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(N, "-$1").toLowerCase();
      if (((c = a.getAttribute(d)), "string" == typeof c)) {
        try {
          c =
            "true" === c
              ? !0
              : "false" === c
              ? !1
              : "null" === c
              ? null
              : +c + "" === c
              ? +c
              : M.test(c)
              ? m.parseJSON(c)
              : c;
        } catch (e) {}
        m.data(a, b, c);
      } else c = void 0;
    }
    return c;
  }
  function P(a) {
    var b;
    for (b in a)
      if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    return !0;
  }
  function Q(a, b, d, e) {
    if (m.acceptData(a)) {
      var f,
        g,
        h = m.expando,
        i = a.nodeType,
        j = i ? m.cache : a,
        k = i ? a[h] : a[h] && h;
      if (
        (k && j[k] && (e || j[k].data)) ||
        void 0 !== d ||
        "string" != typeof b
      )
        return (
          k || (k = i ? (a[h] = c.pop() || m.guid++) : h),
          j[k] || (j[k] = i ? {} : { toJSON: m.noop }),
          ("object" == typeof b || "function" == typeof b) &&
            (e
              ? (j[k] = m.extend(j[k], b))
              : (j[k].data = m.extend(j[k].data, b))),
          (g = j[k]),
          e || (g.data || (g.data = {}), (g = g.data)),
          void 0 !== d && (g[m.camelCase(b)] = d),
          "string" == typeof b
            ? ((f = g[b]), null == f && (f = g[m.camelCase(b)]))
            : (f = g),
          f
        );
    }
  }
  function R(a, b, c) {
    if (m.acceptData(a)) {
      var d,
        e,
        f = a.nodeType,
        g = f ? m.cache : a,
        h = f ? a[m.expando] : m.expando;
      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          m.isArray(b)
            ? (b = b.concat(m.map(b, m.camelCase)))
            : b in d
            ? (b = [b])
            : ((b = m.camelCase(b)), (b = b in d ? [b] : b.split(" "))),
            (e = b.length);
          while (e--) delete d[b[e]];
          if (c ? !P(d) : !m.isEmptyObject(d)) return;
        }
        (c || (delete g[h].data, P(g[h]))) &&
          (f
            ? m.cleanData([a], !0)
            : k.deleteExpando || g != g.window
            ? delete g[h]
            : (g[h] = null));
      }
    }
  }
  m.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    },
    hasData: function (a) {
      return (
        (a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando]), !!a && !P(a)
      );
    },
    data: function (a, b, c) {
      return Q(a, b, c);
    },
    removeData: function (a, b) {
      return R(a, b);
    },
    _data: function (a, b, c) {
      return Q(a, b, c, !0);
    },
    _removeData: function (a, b) {
      return R(a, b, !0);
    },
  }),
    m.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = m.data(f)), 1 === f.nodeType && !m._data(f, "parsedAttrs"))
          ) {
            c = g.length;
            while (c--)
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = m.camelCase(d.slice(5))), O(f, d, e[d])));
            m._data(f, "parsedAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
              m.data(this, a);
            })
          : arguments.length > 1
          ? this.each(function () {
              m.data(this, a, b);
            })
          : f
          ? O(f, a, m.data(f, a))
          : void 0;
      },
      removeData: function (a) {
        return this.each(function () {
          m.removeData(this, a);
        });
      },
    }),
    m.extend({
      queue: function (a, b, c) {
        var d;
        return a
          ? ((b = (b || "fx") + "queue"),
            (d = m._data(a, b)),
            c &&
              (!d || m.isArray(c)
                ? (d = m._data(a, b, m.makeArray(c)))
                : d.push(c)),
            d || [])
          : void 0;
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = m.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = m._queueHooks(a, b),
          g = function () {
            m.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          m._data(a, c) ||
          m._data(a, c, {
            empty: m.Callbacks("once memory").add(function () {
              m._removeData(a, b + "queue"), m._removeData(a, c);
            }),
          })
        );
      },
    }),
    m.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? m.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          m.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = m.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
        while (g--)
          (c = m._data(f[g], a + "queueHooks")),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    });
  var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    T = ["Top", "Right", "Bottom", "Left"],
    U = function (a, b) {
      return (
        (a = b || a),
        "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
      );
    },
    V = (m.access = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === m.type(c)) {
        e = !0;
        for (h in c) m.access(a, b, h, c[h], !0, f, g);
      } else if (
        void 0 !== d &&
        ((e = !0),
        m.isFunction(d) || (g = !0),
        j &&
          (g
            ? (b.call(a, d), (b = null))
            : ((j = b),
              (b = function (a, b, c) {
                return j.call(m(a), c);
              }))),
        b)
      )
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    }),
    W = /^(?:checkbox|radio)$/i;
  !(function () {
    var a = y.createElement("input"),
      b = y.createElement("div"),
      c = y.createDocumentFragment();
    if (
      ((b.innerHTML =
        "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (k.leadingWhitespace = 3 === b.firstChild.nodeType),
      (k.tbody = !b.getElementsByTagName("tbody").length),
      (k.htmlSerialize = !!b.getElementsByTagName("link").length),
      (k.html5Clone =
        "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML),
      (a.type = "checkbox"),
      (a.checked = !0),
      c.appendChild(a),
      (k.appendChecked = a.checked),
      (b.innerHTML = "<textarea>x</textarea>"),
      (k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue),
      c.appendChild(b),
      (b.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
      (k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (k.noCloneEvent = !0),
      b.attachEvent &&
        (b.attachEvent("onclick", function () {
          k.noCloneEvent = !1;
        }),
        b.cloneNode(!0).click()),
      null == k.deleteExpando)
    ) {
      k.deleteExpando = !0;
      try {
        delete b.test;
      } catch (d) {
        k.deleteExpando = !1;
      }
    }
  })(),
    (function () {
      var b,
        c,
        d = y.createElement("div");
      for (b in { submit: !0, change: !0, focusin: !0 })
        (c = "on" + b),
          (k[b + "Bubbles"] = c in a) ||
            (d.setAttribute(c, "t"),
            (k[b + "Bubbles"] = d.attributes[c].expando === !1));
      d = null;
    })();
  var X = /^(?:input|select|textarea)$/i,
    Y = /^key/,
    Z = /^(?:mouse|pointer|contextmenu)|click/,
    $ = /^(?:focusinfocus|focusoutblur)$/,
    _ = /^([^.]*)(?:\.(.+)|)$/;
  function ab() {
    return !0;
  }
  function bb() {
    return !1;
  }
  function cb() {
    try {
      return y.activeElement;
    } catch (a) {}
  }
  (m.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        n,
        o,
        p,
        q,
        r = m._data(a);
      if (r) {
        c.handler && ((i = c), (c = i.handler), (e = i.selector)),
          c.guid || (c.guid = m.guid++),
          (g = r.events) || (g = r.events = {}),
          (k = r.handle) ||
            ((k = r.handle = function (a) {
              return typeof m === K || (a && m.event.triggered === a.type)
                ? void 0
                : m.event.dispatch.apply(k.elem, arguments);
            }),
            (k.elem = a)),
          (b = (b || "").match(E) || [""]),
          (h = b.length);
        while (h--)
          (f = _.exec(b[h]) || []),
            (o = q = f[1]),
            (p = (f[2] || "").split(".").sort()),
            o &&
              ((j = m.event.special[o] || {}),
              (o = (e ? j.delegateType : j.bindType) || o),
              (j = m.event.special[o] || {}),
              (l = m.extend(
                {
                  type: o,
                  origType: q,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && m.expr.match.needsContext.test(e),
                  namespace: p.join("."),
                },
                i
              )),
              (n = g[o]) ||
                ((n = g[o] = []),
                (n.delegateCount = 0),
                (j.setup && j.setup.call(a, d, p, k) !== !1) ||
                  (a.addEventListener
                    ? a.addEventListener(o, k, !1)
                    : a.attachEvent && a.attachEvent("on" + o, k))),
              j.add &&
                (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)),
              e ? n.splice(n.delegateCount++, 0, l) : n.push(l),
              (m.event.global[o] = !0));
        a = null;
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        n,
        o,
        p,
        q,
        r = m.hasData(a) && m._data(a);
      if (r && (k = r.events)) {
        (b = (b || "").match(E) || [""]), (j = b.length);
        while (j--)
          if (
            ((h = _.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o)
          ) {
            (l = m.event.special[o] || {}),
              (o = (d ? l.delegateType : l.bindType) || o),
              (n = k[o] || []),
              (h =
                h[2] &&
                new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (i = f = n.length);
            while (f--)
              (g = n[f]),
                (!e && q !== g.origType) ||
                  (c && c.guid !== g.guid) ||
                  (h && !h.test(g.namespace)) ||
                  (d && d !== g.selector && ("**" !== d || !g.selector)) ||
                  (n.splice(f, 1),
                  g.selector && n.delegateCount--,
                  l.remove && l.remove.call(a, g));
            i &&
              !n.length &&
              ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) ||
                m.removeEvent(a, o, r.handle),
              delete k[o]);
          } else for (o in k) m.event.remove(a, o + b[j], c, d, !0);
        m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"));
      }
    },
    trigger: function (b, c, d, e) {
      var f,
        g,
        h,
        i,
        k,
        l,
        n,
        o = [d || y],
        p = j.call(b, "type") ? b.type : b,
        q = j.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((h = l = d = d || y),
        3 !== d.nodeType &&
          8 !== d.nodeType &&
          !$.test(p + m.event.triggered) &&
          (p.indexOf(".") >= 0 &&
            ((q = p.split(".")), (p = q.shift()), q.sort()),
          (g = p.indexOf(":") < 0 && "on" + p),
          (b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b)),
          (b.isTrigger = e ? 2 : 3),
          (b.namespace = q.join(".")),
          (b.namespace_re = b.namespace
            ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = d),
          (c = null == c ? [b] : m.makeArray(c, [b])),
          (k = m.event.special[p] || {}),
          e || !k.trigger || k.trigger.apply(d, c) !== !1))
      ) {
        if (!e && !k.noBubble && !m.isWindow(d)) {
          for (
            i = k.delegateType || p, $.test(i + p) || (h = h.parentNode);
            h;
            h = h.parentNode
          )
            o.push(h), (l = h);
          l === (d.ownerDocument || y) &&
            o.push(l.defaultView || l.parentWindow || a);
        }
        n = 0;
        while ((h = o[n++]) && !b.isPropagationStopped())
          (b.type = n > 1 ? i : k.bindType || p),
            (f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle")),
            f && f.apply(h, c),
            (f = g && h[g]),
            f &&
              f.apply &&
              m.acceptData(h) &&
              ((b.result = f.apply(h, c)),
              b.result === !1 && b.preventDefault());
        if (
          ((b.type = p),
          !e &&
            !b.isDefaultPrevented() &&
            (!k._default || k._default.apply(o.pop(), c) === !1) &&
            m.acceptData(d) &&
            g &&
            d[p] &&
            !m.isWindow(d))
        ) {
          (l = d[g]), l && (d[g] = null), (m.event.triggered = p);
          try {
            d[p]();
          } catch (r) {}
          (m.event.triggered = void 0), l && (d[g] = l);
        }
        return b.result;
      }
    },
    dispatch: function (a) {
      a = m.event.fix(a);
      var b,
        c,
        e,
        f,
        g,
        h = [],
        i = d.call(arguments),
        j = (m._data(this, "events") || {})[a.type] || [],
        k = m.event.special[a.type] || {};
      if (
        ((i[0] = a),
        (a.delegateTarget = this),
        !k.preDispatch || k.preDispatch.call(this, a) !== !1)
      ) {
        (h = m.event.handlers.call(this, a, j)), (b = 0);
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          (a.currentTarget = f.elem), (g = 0);
          while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())
            (!a.namespace_re || a.namespace_re.test(e.namespace)) &&
              ((a.handleObj = e),
              (a.data = e.data),
              (c = (
                (m.event.special[e.origType] || {}).handle || e.handler
              ).apply(f.elem, i)),
              void 0 !== c &&
                (a.result = c) === !1 &&
                (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g = [],
        h = b.delegateCount,
        i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type))
        for (; i != this; i = i.parentNode || this)
          if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
            for (e = [], f = 0; h > f; f++)
              (d = b[f]),
                (c = d.selector + " "),
                void 0 === e[c] &&
                  (e[c] = d.needsContext
                    ? m(c, this).index(i) >= 0
                    : m.find(c, this, null, [i]).length),
                e[c] && e.push(d);
            e.length && g.push({ elem: i, handlers: e });
          }
      return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    },
    fix: function (a) {
      if (a[m.expando]) return a;
      var b,
        c,
        d,
        e = a.type,
        f = a,
        g = this.fixHooks[e];
      g ||
        (this.fixHooks[e] = g = Z.test(e)
          ? this.mouseHooks
          : Y.test(e)
          ? this.keyHooks
          : {}),
        (d = g.props ? this.props.concat(g.props) : this.props),
        (a = new m.Event(f)),
        (b = d.length);
      while (b--) (c = d[b]), (a[c] = f[c]);
      return (
        a.target || (a.target = f.srcElement || y),
        3 === a.target.nodeType && (a.target = a.target.parentNode),
        (a.metaKey = !!a.metaKey),
        g.filter ? g.filter(a, f) : a
      );
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
      " "
    ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return (
          null == a.which &&
            (a.which = null != b.charCode ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
        " "
      ),
      filter: function (a, b) {
        var c,
          d,
          e,
          f = b.button,
          g = b.fromElement;
        return (
          null == a.pageX &&
            null != b.clientX &&
            ((d = a.target.ownerDocument || y),
            (e = d.documentElement),
            (c = d.body),
            (a.pageX =
              b.clientX +
              ((e && e.scrollLeft) || (c && c.scrollLeft) || 0) -
              ((e && e.clientLeft) || (c && c.clientLeft) || 0)),
            (a.pageY =
              b.clientY +
              ((e && e.scrollTop) || (c && c.scrollTop) || 0) -
              ((e && e.clientTop) || (c && c.clientTop) || 0))),
          !a.relatedTarget &&
            g &&
            (a.relatedTarget = g === a.target ? b.toElement : g),
          a.which ||
            void 0 === f ||
            (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
          a
        );
      },
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== cb() && this.focus)
            try {
              return this.focus(), !1;
            } catch (a) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === cb() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return m.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (a) {
          return m.nodeName(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
    simulate: function (a, b, c, d) {
      var e = m.extend(new m.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {},
      });
      d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e),
        e.isDefaultPrevented() && c.preventDefault();
    },
  }),
    (m.removeEvent = y.removeEventListener
      ? function (a, b, c) {
          a.removeEventListener && a.removeEventListener(b, c, !1);
        }
      : function (a, b, c) {
          var d = "on" + b;
          a.detachEvent &&
            (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c));
        }),
    (m.Event = function (a, b) {
      return this instanceof m.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                  ? ab
                  : bb))
            : (this.type = a),
          b && m.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || m.now()),
          void (this[m.expando] = !0))
        : new m.Event(a, b);
    }),
    (m.Event.prototype = {
      isDefaultPrevented: bb,
      isPropagationStopped: bb,
      isImmediatePropagationStopped: bb,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = ab),
          a && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = ab),
          a &&
            (a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = ab),
          a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    m.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, b) {
        m.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (!e || (e !== d && !m.contains(d, e))) &&
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    k.submitBubbles ||
      (m.event.special.submit = {
        setup: function () {
          return m.nodeName(this, "form")
            ? !1
            : void m.event.add(
                this,
                "click._submit keypress._submit",
                function (a) {
                  var b = a.target,
                    c =
                      m.nodeName(b, "input") || m.nodeName(b, "button")
                        ? b.form
                        : void 0;
                  c &&
                    !m._data(c, "submitBubbles") &&
                    (m.event.add(c, "submit._submit", function (a) {
                      a._submit_bubble = !0;
                    }),
                    m._data(c, "submitBubbles", !0));
                }
              );
        },
        postDispatch: function (a) {
          a._submit_bubble &&
            (delete a._submit_bubble,
            this.parentNode &&
              !a.isTrigger &&
              m.event.simulate("submit", this.parentNode, a, !0));
        },
        teardown: function () {
          return m.nodeName(this, "form")
            ? !1
            : void m.event.remove(this, "._submit");
        },
      }),
    k.changeBubbles ||
      (m.event.special.change = {
        setup: function () {
          return X.test(this.nodeName)
            ? (("checkbox" === this.type || "radio" === this.type) &&
                (m.event.add(this, "propertychange._change", function (a) {
                  "checked" === a.originalEvent.propertyName &&
                    (this._just_changed = !0);
                }),
                m.event.add(this, "click._change", function (a) {
                  this._just_changed &&
                    !a.isTrigger &&
                    (this._just_changed = !1),
                    m.event.simulate("change", this, a, !0);
                })),
              !1)
            : void m.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                X.test(b.nodeName) &&
                  !m._data(b, "changeBubbles") &&
                  (m.event.add(b, "change._change", function (a) {
                    !this.parentNode ||
                      a.isSimulated ||
                      a.isTrigger ||
                      m.event.simulate("change", this.parentNode, a, !0);
                  }),
                  m._data(b, "changeBubbles", !0));
              });
        },
        handle: function (a) {
          var b = a.target;
          return this !== b ||
            a.isSimulated ||
            a.isTrigger ||
            ("radio" !== b.type && "checkbox" !== b.type)
            ? a.handleObj.handler.apply(this, arguments)
            : void 0;
        },
        teardown: function () {
          return m.event.remove(this, "._change"), !X.test(this.nodeName);
        },
      }),
    k.focusinBubbles ||
      m.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          m.event.simulate(b, a.target, m.event.fix(a), !0);
        };
        m.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = m._data(d, b);
            e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = m._data(d, b) - 1;
            e
              ? m._data(d, b, e)
              : (d.removeEventListener(a, c, !0), m._removeData(d, b));
          },
        };
      }),
    m.fn.extend({
      on: function (a, b, c, d, e) {
        var f, g;
        if ("object" == typeof a) {
          "string" != typeof b && ((c = c || b), (b = void 0));
          for (f in a) this.on(f, b, c, a[f], e);
          return this;
        }
        if (
          (null == c && null == d
            ? ((d = b), (c = b = void 0))
            : null == d &&
              ("string" == typeof b
                ? ((d = c), (c = void 0))
                : ((d = c), (c = b), (b = void 0))),
          d === !1)
        )
          d = bb;
        else if (!d) return this;
        return (
          1 === e &&
            ((g = d),
            (d = function (a) {
              return m().off(a), g.apply(this, arguments);
            }),
            (d.guid = g.guid || (g.guid = m.guid++))),
          this.each(function () {
            m.event.add(this, a, d, c, b);
          })
        );
      },
      one: function (a, b, c, d) {
        return this.on(a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            m(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b === !1 || "function" == typeof b) && ((c = b), (b = void 0)),
          c === !1 && (c = bb),
          this.each(function () {
            m.event.remove(this, a, c, b);
          })
        );
      },
      trigger: function (a, b) {
        return this.each(function () {
          m.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        return c ? m.event.trigger(a, b, c, !0) : void 0;
      },
    });
  function db(a) {
    var b = eb.split("|"),
      c = a.createDocumentFragment();
    if (c.createElement) while (b.length) c.createElement(b.pop());
    return c;
  }
  var eb =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    fb = / jQuery\d+="(?:null|\d+)"/g,
    gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"),
    hb = /^\s+/,
    ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    jb = /<([\w:]+)/,
    kb = /<tbody/i,
    lb = /<|&#?\w+;/,
    mb = /<(?:script|style|link)/i,
    nb = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ob = /^$|\/(?:java|ecma)script/i,
    pb = /^true\/(.*)/,
    qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    rb = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
    },
    sb = db(y),
    tb = sb.appendChild(y.createElement("div"));
  (rb.optgroup = rb.option),
    (rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead),
    (rb.th = rb.td);
  function ub(a, b) {
    var c,
      d,
      e = 0,
      f =
        typeof a.getElementsByTagName !== K
          ? a.getElementsByTagName(b || "*")
          : typeof a.querySelectorAll !== K
          ? a.querySelectorAll(b || "*")
          : void 0;
    if (!f)
      for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)
        !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
    return void 0 === b || (b && m.nodeName(a, b)) ? m.merge([a], f) : f;
  }
  function vb(a) {
    W.test(a.type) && (a.defaultChecked = a.checked);
  }
  function wb(a, b) {
    return m.nodeName(a, "table") &&
      m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? a.getElementsByTagName("tbody")[0] ||
          a.appendChild(a.ownerDocument.createElement("tbody"))
      : a;
  }
  function xb(a) {
    return (a.type = (null !== m.find.attr(a, "type")) + "/" + a.type), a;
  }
  function yb(a) {
    var b = pb.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function zb(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++)
      m._data(c, "globalEval", !b || m._data(b[d], "globalEval"));
  }
  function Ab(a, b) {
    if (1 === b.nodeType && m.hasData(a)) {
      var c,
        d,
        e,
        f = m._data(a),
        g = m._data(b, f),
        h = f.events;
      if (h) {
        delete g.handle, (g.events = {});
        for (c in h)
          for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d]);
      }
      g.data && (g.data = m.extend({}, g.data));
    }
  }
  function Bb(a, b) {
    var c, d, e;
    if (1 === b.nodeType) {
      if (((c = b.nodeName.toLowerCase()), !k.noCloneEvent && b[m.expando])) {
        e = m._data(b);
        for (d in e.events) m.removeEvent(b, d, e.handle);
        b.removeAttribute(m.expando);
      }
      "script" === c && b.text !== a.text
        ? ((xb(b).text = a.text), yb(b))
        : "object" === c
        ? (b.parentNode && (b.outerHTML = a.outerHTML),
          k.html5Clone &&
            a.innerHTML &&
            !m.trim(b.innerHTML) &&
            (b.innerHTML = a.innerHTML))
        : "input" === c && W.test(a.type)
        ? ((b.defaultChecked = b.checked = a.checked),
          b.value !== a.value && (b.value = a.value))
        : "option" === c
        ? (b.defaultSelected = b.selected = a.defaultSelected)
        : ("input" === c || "textarea" === c) &&
          (b.defaultValue = a.defaultValue);
    }
  }
  m.extend({
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i = m.contains(a.ownerDocument, a);
      if (
        (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">")
          ? (f = a.cloneNode(!0))
          : ((tb.innerHTML = a.outerHTML), tb.removeChild((f = tb.firstChild))),
        !(
          (k.noCloneEvent && k.noCloneChecked) ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          m.isXMLDoc(a)
        ))
      )
        for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g)
          d[g] && Bb(e, d[g]);
      if (b)
        if (c)
          for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++)
            Ab(e, d[g]);
        else Ab(a, f);
      return (
        (d = ub(f, "script")),
        d.length > 0 && zb(d, !i && ub(a, "script")),
        (d = h = e = null),
        f
      );
    },
    buildFragment: function (a, b, c, d) {
      for (
        var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0;
        n > q;
        q++
      )
        if (((f = a[q]), f || 0 === f))
          if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);
          else if (lb.test(f)) {
            (h = h || o.appendChild(b.createElement("div"))),
              (i = (jb.exec(f) || ["", ""])[1].toLowerCase()),
              (l = rb[i] || rb._default),
              (h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2]),
              (e = l[0]);
            while (e--) h = h.lastChild;
            if (
              (!k.leadingWhitespace &&
                hb.test(f) &&
                p.push(b.createTextNode(hb.exec(f)[0])),
              !k.tbody)
            ) {
              (f =
                "table" !== i || kb.test(f)
                  ? "<table>" !== l[1] || kb.test(f)
                    ? 0
                    : h
                  : h.firstChild),
                (e = f && f.childNodes.length);
              while (e--)
                m.nodeName((j = f.childNodes[e]), "tbody") &&
                  !j.childNodes.length &&
                  f.removeChild(j);
            }
            m.merge(p, h.childNodes), (h.textContent = "");
            while (h.firstChild) h.removeChild(h.firstChild);
            h = o.lastChild;
          } else p.push(b.createTextNode(f));
      h && o.removeChild(h),
        k.appendChecked || m.grep(ub(p, "input"), vb),
        (q = 0);
      while ((f = p[q++]))
        if (
          (!d || -1 === m.inArray(f, d)) &&
          ((g = m.contains(f.ownerDocument, f)),
          (h = ub(o.appendChild(f), "script")),
          g && zb(h),
          c)
        ) {
          e = 0;
          while ((f = h[e++])) ob.test(f.type || "") && c.push(f);
        }
      return (h = null), o;
    },
    cleanData: function (a, b) {
      for (
        var d,
          e,
          f,
          g,
          h = 0,
          i = m.expando,
          j = m.cache,
          l = k.deleteExpando,
          n = m.event.special;
        null != (d = a[h]);
        h++
      )
        if ((b || m.acceptData(d)) && ((f = d[i]), (g = f && j[f]))) {
          if (g.events)
            for (e in g.events)
              n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
          j[f] &&
            (delete j[f],
            l
              ? delete d[i]
              : typeof d.removeAttribute !== K
              ? d.removeAttribute(i)
              : (d[i] = null),
            c.push(f));
        }
    },
  }),
    m.fn.extend({
      text: function (a) {
        return V(
          this,
          function (a) {
            return void 0 === a
              ? m.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || y).createTextNode(a)
                );
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = wb(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = wb(this, a);
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
        for (
          var c, d = a ? m.filter(a, this) : this, e = 0;
          null != (c = d[e]);
          e++
        )
          b || 1 !== c.nodeType || m.cleanData(ub(c)),
            c.parentNode &&
              (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")),
              c.parentNode.removeChild(c));
        return this;
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++) {
          1 === a.nodeType && m.cleanData(ub(a, !1));
          while (a.firstChild) a.removeChild(a.firstChild);
          a.options && m.nodeName(a, "select") && (a.options.length = 0);
        }
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null == a ? !1 : a),
          (b = null == b ? a : b),
          this.map(function () {
            return m.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return V(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a)
              return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;
            if (
              !(
                "string" != typeof a ||
                mb.test(a) ||
                (!k.htmlSerialize && gb.test(a)) ||
                (!k.leadingWhitespace && hb.test(a)) ||
                rb[(jb.exec(a) || ["", ""])[1].toLowerCase()]
              )
            ) {
              a = a.replace(ib, "<$1></$2>");
              try {
                for (; d > c; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (m.cleanData(ub(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = arguments[0];
        return (
          this.domManip(arguments, function (b) {
            (a = this.parentNode),
              m.cleanData(ub(this)),
              a && a.replaceChild(b, this);
          }),
          a && (a.length || a.nodeType) ? this : this.remove()
        );
      },
      detach: function (a) {
        return this.remove(a, !0);
      },
      domManip: function (a, b) {
        a = e.apply([], a);
        var c,
          d,
          f,
          g,
          h,
          i,
          j = 0,
          l = this.length,
          n = this,
          o = l - 1,
          p = a[0],
          q = m.isFunction(p);
        if (q || (l > 1 && "string" == typeof p && !k.checkClone && nb.test(p)))
          return this.each(function (c) {
            var d = n.eq(c);
            q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
          });
        if (
          l &&
          ((i = m.buildFragment(a, this[0].ownerDocument, !1, this)),
          (c = i.firstChild),
          1 === i.childNodes.length && (i = c),
          c)
        ) {
          for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++)
            (d = i),
              j !== o &&
                ((d = m.clone(d, !0, !0)), f && m.merge(g, ub(d, "script"))),
              b.call(this[j], d, j);
          if (f)
            for (
              h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0;
              f > j;
              j++
            )
              (d = g[j]),
                ob.test(d.type || "") &&
                  !m._data(d, "globalEval") &&
                  m.contains(h, d) &&
                  (d.src
                    ? m._evalUrl && m._evalUrl(d.src)
                    : m.globalEval(
                        (d.text || d.textContent || d.innerHTML || "").replace(
                          qb,
                          ""
                        )
                      ));
          i = c = null;
        }
        return this;
      },
    }),
    m.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        m.fn[a] = function (a) {
          for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++)
            (c = d === h ? this : this.clone(!0)),
              m(g[d])[b](c),
              f.apply(e, c.get());
          return this.pushStack(e);
        };
      }
    );
  var Cb,
    Db = {};
  function Eb(b, c) {
    var d,
      e = m(c.createElement(b)).appendTo(c.body),
      f =
        a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0]))
          ? d.display
          : m.css(e[0], "display");
    return e.detach(), f;
  }
  function Fb(a) {
    var b = y,
      c = Db[a];
    return (
      c ||
        ((c = Eb(a, b)),
        ("none" !== c && c) ||
          ((Cb = (
            Cb || m("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(b.documentElement)),
          (b = (Cb[0].contentWindow || Cb[0].contentDocument).document),
          b.write(),
          b.close(),
          (c = Eb(a, b)),
          Cb.detach()),
        (Db[a] = c)),
      c
    );
  }
  !(function () {
    var a;
    k.shrinkWrapBlocks = function () {
      if (null != a) return a;
      a = !1;
      var b, c, d;
      return (
        (c = y.getElementsByTagName("body")[0]),
        c && c.style
          ? ((b = y.createElement("div")),
            (d = y.createElement("div")),
            (d.style.cssText =
              "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
            c.appendChild(d).appendChild(b),
            typeof b.style.zoom !== K &&
              ((b.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
              (b.appendChild(y.createElement("div")).style.width = "5px"),
              (a = 3 !== b.offsetWidth)),
            c.removeChild(d),
            a)
          : void 0
      );
    };
  })();
  var Gb = /^margin/,
    Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
    Ib,
    Jb,
    Kb = /^(top|right|bottom|left)$/;
  a.getComputedStyle
    ? ((Ib = function (b) {
        return b.ownerDocument.defaultView.opener
          ? b.ownerDocument.defaultView.getComputedStyle(b, null)
          : a.getComputedStyle(b, null);
      }),
      (Jb = function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.style;
        return (
          (c = c || Ib(a)),
          (g = c ? c.getPropertyValue(b) || c[b] : void 0),
          c &&
            ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)),
            Hb.test(g) &&
              Gb.test(b) &&
              ((d = h.width),
              (e = h.minWidth),
              (f = h.maxWidth),
              (h.minWidth = h.maxWidth = h.width = g),
              (g = c.width),
              (h.width = d),
              (h.minWidth = e),
              (h.maxWidth = f))),
          void 0 === g ? g : g + ""
        );
      }))
    : y.documentElement.currentStyle &&
      ((Ib = function (a) {
        return a.currentStyle;
      }),
      (Jb = function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.style;
        return (
          (c = c || Ib(a)),
          (g = c ? c[b] : void 0),
          null == g && h && h[b] && (g = h[b]),
          Hb.test(g) &&
            !Kb.test(b) &&
            ((d = h.left),
            (e = a.runtimeStyle),
            (f = e && e.left),
            f && (e.left = a.currentStyle.left),
            (h.left = "fontSize" === b ? "1em" : g),
            (g = h.pixelLeft + "px"),
            (h.left = d),
            f && (e.left = f)),
          void 0 === g ? g : g + "" || "auto"
        );
      }));
  function Lb(a, b) {
    return {
      get: function () {
        var c = a();
        if (null != c)
          return c
            ? void delete this.get
            : (this.get = b).apply(this, arguments);
      },
    };
  }
  !(function () {
    var b, c, d, e, f, g, h;
    if (
      ((b = y.createElement("div")),
      (b.innerHTML =
        "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (d = b.getElementsByTagName("a")[0]),
      (c = d && d.style))
    ) {
      (c.cssText = "float:left;opacity:.5"),
        (k.opacity = "0.5" === c.opacity),
        (k.cssFloat = !!c.cssFloat),
        (b.style.backgroundClip = "content-box"),
        (b.cloneNode(!0).style.backgroundClip = ""),
        (k.clearCloneStyle = "content-box" === b.style.backgroundClip),
        (k.boxSizing =
          "" === c.boxSizing ||
          "" === c.MozBoxSizing ||
          "" === c.WebkitBoxSizing),
        m.extend(k, {
          reliableHiddenOffsets: function () {
            return null == g && i(), g;
          },
          boxSizingReliable: function () {
            return null == f && i(), f;
          },
          pixelPosition: function () {
            return null == e && i(), e;
          },
          reliableMarginRight: function () {
            return null == h && i(), h;
          },
        });
      function i() {
        var b, c, d, i;
        (c = y.getElementsByTagName("body")[0]),
          c &&
            c.style &&
            ((b = y.createElement("div")),
            (d = y.createElement("div")),
            (d.style.cssText =
              "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
            c.appendChild(d).appendChild(b),
            (b.style.cssText =
              "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
            (e = f = !1),
            (h = !0),
            a.getComputedStyle &&
              ((e = "1%" !== (a.getComputedStyle(b, null) || {}).top),
              (f =
                "4px" ===
                (a.getComputedStyle(b, null) || { width: "4px" }).width),
              (i = b.appendChild(y.createElement("div"))),
              (i.style.cssText = b.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (i.style.marginRight = i.style.width = "0"),
              (b.style.width = "1px"),
              (h = !parseFloat(
                (a.getComputedStyle(i, null) || {}).marginRight
              )),
              b.removeChild(i)),
            (b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            (i = b.getElementsByTagName("td")),
            (i[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
            (g = 0 === i[0].offsetHeight),
            g &&
              ((i[0].style.display = ""),
              (i[1].style.display = "none"),
              (g = 0 === i[0].offsetHeight)),
            c.removeChild(d));
      }
    }
  })(),
    (m.swap = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    });
  var Mb = /alpha\([^)]*\)/i,
    Nb = /opacity\s*=\s*([^)]*)/,
    Ob = /^(none|table(?!-c[ea]).+)/,
    Pb = new RegExp("^(" + S + ")(.*)$", "i"),
    Qb = new RegExp("^([+-])=(" + S + ")", "i"),
    Rb = { position: "absolute", visibility: "hidden", display: "block" },
    Sb = { letterSpacing: "0", fontWeight: "400" },
    Tb = ["Webkit", "O", "Moz", "ms"];
  function Ub(a, b) {
    if (b in a) return b;
    var c = b.charAt(0).toUpperCase() + b.slice(1),
      d = b,
      e = Tb.length;
    while (e--) if (((b = Tb[e] + c), b in a)) return b;
    return d;
  }
  function Vb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
      (d = a[g]),
        d.style &&
          ((f[g] = m._data(d, "olddisplay")),
          (c = d.style.display),
          b
            ? (f[g] || "none" !== c || (d.style.display = ""),
              "" === d.style.display &&
                U(d) &&
                (f[g] = m._data(d, "olddisplay", Fb(d.nodeName))))
            : ((e = U(d)),
              ((c && "none" !== c) || !e) &&
                m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
    for (g = 0; h > g; g++)
      (d = a[g]),
        d.style &&
          ((b && "none" !== d.style.display && "" !== d.style.display) ||
            (d.style.display = b ? f[g] || "" : "none"));
    return a;
  }
  function Wb(a, b, c) {
    var d = Pb.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }
  function Xb(a, b, c, d, e) {
    for (
      var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
        g = 0;
      4 > f;
      f += 2
    )
      "margin" === c && (g += m.css(a, c + T[f], !0, e)),
        d
          ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)),
            "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e)))
          : ((g += m.css(a, "padding" + T[f], !0, e)),
            "padding" !== c &&
              (g += m.css(a, "border" + T[f] + "Width", !0, e)));
    return g;
  }
  function Yb(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = Ib(a),
      g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (
        ((e = Jb(a, b, f)),
        (0 > e || null == e) && (e = a.style[b]),
        Hb.test(e))
      )
        return e;
      (d = g && (k.boxSizingReliable() || e === a.style[b])),
        (e = parseFloat(e) || 0);
    }
    return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }
  m.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Jb(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
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
      zoom: !0,
    },
    cssProps: { float: k.cssFloat ? "cssFloat" : "styleFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = m.camelCase(b),
          i = a.style;
        if (
          ((b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h))),
          (g = m.cssHooks[b] || m.cssHooks[h]),
          void 0 === c)
        )
          return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
        if (
          ((f = typeof c),
          "string" === f &&
            (e = Qb.exec(c)) &&
            ((c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b))), (f = "number")),
          null != c &&
            c === c &&
            ("number" !== f || m.cssNumber[h] || (c += "px"),
            k.clearCloneStyle ||
              "" !== c ||
              0 !== b.indexOf("background") ||
              (i[b] = "inherit"),
            !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))
        )
          try {
            i[b] = c;
          } catch (j) {}
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = m.camelCase(b);
      return (
        (b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h))),
        (g = m.cssHooks[b] || m.cssHooks[h]),
        g && "get" in g && (f = g.get(a, !0, c)),
        void 0 === f && (f = Jb(a, b, d)),
        "normal" === f && b in Sb && (f = Sb[b]),
        "" === c || c
          ? ((e = parseFloat(f)), c === !0 || m.isNumeric(e) ? e || 0 : f)
          : f
      );
    },
  }),
    m.each(["height", "width"], function (a, b) {
      m.cssHooks[b] = {
        get: function (a, c, d) {
          return c
            ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth
              ? m.swap(a, Rb, function () {
                  return Yb(a, b, d);
                })
              : Yb(a, b, d)
            : void 0;
        },
        set: function (a, c, d) {
          var e = d && Ib(a);
          return Wb(
            a,
            c,
            d
              ? Xb(
                  a,
                  b,
                  d,
                  k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e),
                  e
                )
              : 0
          );
        },
      };
    }),
    k.opacity ||
      (m.cssHooks.opacity = {
        get: function (a, b) {
          return Nb.test(
            (b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : b
            ? "1"
            : "";
        },
        set: function (a, b) {
          var c = a.style,
            d = a.currentStyle,
            e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
            f = (d && d.filter) || c.filter || "";
          (c.zoom = 1),
            ((b >= 1 || "" === b) &&
              "" === m.trim(f.replace(Mb, "")) &&
              c.removeAttribute &&
              (c.removeAttribute("filter"), "" === b || (d && !d.filter))) ||
              (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e);
        },
      }),
    (m.cssHooks.marginRight = Lb(k.reliableMarginRight, function (a, b) {
      return b
        ? m.swap(a, { display: "inline-block" }, Jb, [a, "marginRight"])
        : void 0;
    })),
    m.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (m.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            4 > d;
            d++
          )
            e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        Gb.test(a) || (m.cssHooks[a + b].set = Wb);
    }),
    m.fn.extend({
      css: function (a, b) {
        return V(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (m.isArray(b)) {
              for (d = Ib(a), e = b.length; e > g; g++)
                f[b[g]] = m.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? m.style(a, b, c) : m.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
      show: function () {
        return Vb(this, !0);
      },
      hide: function () {
        return Vb(this);
      },
      toggle: function (a) {
        return "boolean" == typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
              U(this) ? m(this).show() : m(this).hide();
            });
      },
    });
  function Zb(a, b, c, d, e) {
    return new Zb.prototype.init(a, b, c, d, e);
  }
  (m.Tween = Zb),
    (Zb.prototype = {
      constructor: Zb,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || "swing"),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (m.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = Zb.propHooks[this.prop];
        return a && a.get ? a.get(this) : Zb.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = Zb.propHooks[this.prop];
        return (
          (this.pos = b = this.options.duration
            ? m.easing[this.easing](
                a,
                this.options.duration * a,
                0,
                1,
                this.options.duration
              )
            : a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : Zb.propHooks._default.set(this),
          this
        );
      },
    }),
    (Zb.prototype.init.prototype = Zb.prototype),
    (Zb.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return null == a.elem[a.prop] ||
            (a.elem.style && null != a.elem.style[a.prop])
            ? ((b = m.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0)
            : a.elem[a.prop];
        },
        set: function (a) {
          m.fx.step[a.prop]
            ? m.fx.step[a.prop](a)
            : a.elem.style &&
              (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop])
            ? m.style(a.elem, a.prop, a.now + a.unit)
            : (a.elem[a.prop] = a.now);
        },
      },
    }),
    (Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {
      set: function (a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
      },
    }),
    (m.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
    }),
    (m.fx = Zb.prototype.init),
    (m.fx.step = {});
  var $b,
    _b,
    ac = /^(?:toggle|show|hide)$/,
    bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
    cc = /queueHooks$/,
    dc = [ic],
    ec = {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b),
            d = c.cur(),
            e = bc.exec(b),
            f = (e && e[3]) || (m.cssNumber[a] ? "" : "px"),
            g =
              (m.cssNumber[a] || ("px" !== f && +d)) &&
              bc.exec(m.css(c.elem, a)),
            h = 1,
            i = 20;
          if (g && g[3] !== f) {
            (f = f || g[3]), (e = e || []), (g = +d || 1);
            do (h = h || ".5"), (g /= h), m.style(c.elem, a, g + f);
            while (h !== (h = c.cur() / d) && 1 !== h && --i);
          }
          return (
            e &&
              ((g = c.start = +g || +d || 0),
              (c.unit = f),
              (c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2])),
            c
          );
        },
      ],
    };
  function fc() {
    return (
      setTimeout(function () {
        $b = void 0;
      }),
      ($b = m.now())
    );
  }
  function gc(a, b) {
    var c,
      d = { height: a },
      e = 0;
    for (b = b ? 1 : 0; 4 > e; e += 2 - b)
      (c = T[e]), (d["margin" + c] = d["padding" + c] = a);
    return b && (d.opacity = d.width = a), d;
  }
  function hc(a, b, c) {
    for (
      var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length;
      g > f;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function ic(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      l,
      n = this,
      o = {},
      p = a.style,
      q = a.nodeType && U(a),
      r = m._data(a, "fxshow");
    c.queue ||
      ((h = m._queueHooks(a, "fx")),
      null == h.unqueued &&
        ((h.unqueued = 0),
        (i = h.empty.fire),
        (h.empty.fire = function () {
          h.unqueued || i();
        })),
      h.unqueued++,
      n.always(function () {
        n.always(function () {
          h.unqueued--, m.queue(a, "fx").length || h.empty.fire();
        });
      })),
      1 === a.nodeType &&
        ("height" in b || "width" in b) &&
        ((c.overflow = [p.overflow, p.overflowX, p.overflowY]),
        (j = m.css(a, "display")),
        (l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j),
        "inline" === l &&
          "none" === m.css(a, "float") &&
          (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName)
            ? (p.zoom = 1)
            : (p.display = "inline-block"))),
      c.overflow &&
        ((p.overflow = "hidden"),
        k.shrinkWrapBlocks() ||
          n.always(function () {
            (p.overflow = c.overflow[0]),
              (p.overflowX = c.overflow[1]),
              (p.overflowY = c.overflow[2]);
          }));
    for (d in b)
      if (((e = b[d]), ac.exec(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (q ? "hide" : "show"))
        ) {
          if ("show" !== e || !r || void 0 === r[d]) continue;
          q = !0;
        }
        o[d] = (r && r[d]) || m.style(a, d);
      } else j = void 0;
    if (m.isEmptyObject(o))
      "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j);
    else {
      r ? "hidden" in r && (q = r.hidden) : (r = m._data(a, "fxshow", {})),
        f && (r.hidden = !q),
        q
          ? m(a).show()
          : n.done(function () {
              m(a).hide();
            }),
        n.done(function () {
          var b;
          m._removeData(a, "fxshow");
          for (b in o) m.style(a, b, o[b]);
        });
      for (d in o)
        (g = hc(q ? r[d] : 0, d, n)),
          d in r ||
            ((r[d] = g.start),
            q &&
              ((g.end = g.start),
              (g.start = "width" === d || "height" === d ? 1 : 0)));
    }
  }
  function jc(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = m.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        m.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = m.cssHooks[d]),
        g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function kc(a, b, c) {
    var d,
      e,
      f = 0,
      g = dc.length,
      h = m.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = $b || fc(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          i > g;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: m.extend({}, b),
        opts: m.extend(!0, { specialEasing: {} }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: $b || fc(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = m.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
        },
      }),
      k = j.props;
    for (jc(k, j.opts.specialEasing); g > f; f++)
      if ((d = dc[f].call(j, a, k, j.opts))) return d;
    return (
      m.map(k, hc, j),
      m.isFunction(j.opts.start) && j.opts.start.call(a, j),
      m.fx.timer(m.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  (m.Animation = m.extend(kc, {
    tweener: function (a, b) {
      m.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.split(" "));
      for (var c, d = 0, e = a.length; e > d; d++)
        (c = a[d]), (ec[c] = ec[c] || []), ec[c].unshift(b);
    },
    prefilter: function (a, b) {
      b ? dc.unshift(a) : dc.push(a);
    },
  })),
    (m.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? m.extend({}, a)
          : {
              complete: c || (!c && b) || (m.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !m.isFunction(b) && b),
            };
      return (
        (d.duration = m.fx.off
          ? 0
          : "number" == typeof d.duration
          ? d.duration
          : d.duration in m.fx.speeds
          ? m.fx.speeds[d.duration]
          : m.fx.speeds._default),
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          m.isFunction(d.old) && d.old.call(this),
            d.queue && m.dequeue(this, d.queue);
        }),
        d
      );
    }),
    m.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(U)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = m.isEmptyObject(a),
          f = m.speed(b, c, d),
          g = function () {
            var b = kc(this, m.extend({}, a), f);
            (e || m._data(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = m.timers,
              g = m._data(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && cc.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (b || !c) && m.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || "fx"),
          this.each(function () {
            var b,
              c = m._data(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = m.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                m.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    m.each(["toggle", "show", "hide"], function (a, b) {
      var c = m.fn[b];
      m.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(gc(b, !0), a, d, e);
      };
    }),
    m.each(
      {
        slideDown: gc("show"),
        slideUp: gc("hide"),
        slideToggle: gc("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        m.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (m.timers = []),
    (m.fx.tick = function () {
      var a,
        b = m.timers,
        c = 0;
      for ($b = m.now(); c < b.length; c++)
        (a = b[c]), a() || b[c] !== a || b.splice(c--, 1);
      b.length || m.fx.stop(), ($b = void 0);
    }),
    (m.fx.timer = function (a) {
      m.timers.push(a), a() ? m.fx.start() : m.timers.pop();
    }),
    (m.fx.interval = 13),
    (m.fx.start = function () {
      _b || (_b = setInterval(m.fx.tick, m.fx.interval));
    }),
    (m.fx.stop = function () {
      clearInterval(_b), (_b = null);
    }),
    (m.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (m.fn.delay = function (a, b) {
      return (
        (a = m.fx ? m.fx.speeds[a] || a : a),
        (b = b || "fx"),
        this.queue(b, function (b, c) {
          var d = setTimeout(b, a);
          c.stop = function () {
            clearTimeout(d);
          };
        })
      );
    }),
    (function () {
      var a, b, c, d, e;
      (b = y.createElement("div")),
        b.setAttribute("className", "t"),
        (b.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (d = b.getElementsByTagName("a")[0]),
        (c = y.createElement("select")),
        (e = c.appendChild(y.createElement("option"))),
        (a = b.getElementsByTagName("input")[0]),
        (d.style.cssText = "top:1px"),
        (k.getSetAttribute = "t" !== b.className),
        (k.style = /top/.test(d.getAttribute("style"))),
        (k.hrefNormalized = "/a" === d.getAttribute("href")),
        (k.checkOn = !!a.value),
        (k.optSelected = e.selected),
        (k.enctype = !!y.createElement("form").enctype),
        (c.disabled = !0),
        (k.optDisabled = !e.disabled),
        (a = y.createElement("input")),
        a.setAttribute("value", ""),
        (k.input = "" === a.getAttribute("value")),
        (a.value = "t"),
        a.setAttribute("type", "radio"),
        (k.radioValue = "t" === a.value);
    })();
  var lc = /\r/g;
  m.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = m.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, m(this).val()) : a),
                null == e
                  ? (e = "")
                  : "number" == typeof e
                  ? (e += "")
                  : m.isArray(e) &&
                    (e = m.map(e, function (a) {
                      return null == a ? "" : a + "";
                    })),
                (b =
                  m.valHooks[this.type] ||
                  m.valHooks[this.nodeName.toLowerCase()]),
                (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c)
          );
      }
    },
  }),
    m.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = m.find.attr(a, "value");
            return null != b ? b : m.trim(m.text(a));
          },
        },
        select: {
          get: function (a) {
            for (
              var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = "select-one" === a.type || 0 > e,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = 0 > e ? h : f ? e : 0;
              h > i;
              i++
            )
              if (
                ((c = d[i]),
                !(
                  (!c.selected && i !== e) ||
                  (k.optDisabled
                    ? c.disabled
                    : null !== c.getAttribute("disabled")) ||
                  (c.parentNode.disabled &&
                    m.nodeName(c.parentNode, "optgroup"))
                ))
              ) {
                if (((b = m(c).val()), f)) return b;
                g.push(b);
              }
            return g;
          },
          set: function (a, b) {
            var c,
              d,
              e = a.options,
              f = m.makeArray(b),
              g = e.length;
            while (g--)
              if (((d = e[g]), m.inArray(m.valHooks.option.get(d), f) >= 0))
                try {
                  d.selected = c = !0;
                } catch (h) {
                  d.scrollHeight;
                }
              else d.selected = !1;
            return c || (a.selectedIndex = -1), e;
          },
        },
      },
    }),
    m.each(["radio", "checkbox"], function () {
      (m.valHooks[this] = {
        set: function (a, b) {
          return m.isArray(b)
            ? (a.checked = m.inArray(m(a).val(), b) >= 0)
            : void 0;
        },
      }),
        k.checkOn ||
          (m.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    });
  var mc,
    nc,
    oc = m.expr.attrHandle,
    pc = /^(?:checked|selected)$/i,
    qc = k.getSetAttribute,
    rc = k.input;
  m.fn.extend({
    attr: function (a, b) {
      return V(this, m.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        m.removeAttr(this, a);
      });
    },
  }),
    m.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (a && 3 !== f && 8 !== f && 2 !== f)
          return typeof a.getAttribute === K
            ? m.prop(a, b, c)
            : ((1 === f && m.isXMLDoc(a)) ||
                ((b = b.toLowerCase()),
                (d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc))),
              void 0 === c
                ? d && "get" in d && null !== (e = d.get(a, b))
                  ? e
                  : ((e = m.find.attr(a, b)), null == e ? void 0 : e)
                : null !== c
                ? d && "set" in d && void 0 !== (e = d.set(a, c, b))
                  ? e
                  : (a.setAttribute(b, c + ""), c)
                : void m.removeAttr(a, b));
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e = 0,
          f = b && b.match(E);
        if (f && 1 === a.nodeType)
          while ((c = f[e++]))
            (d = m.propFix[c] || c),
              m.expr.match.bool.test(c)
                ? (rc && qc) || !pc.test(c)
                  ? (a[d] = !1)
                  : (a[m.camelCase("default-" + c)] = a[d] = !1)
                : m.attr(a, c, ""),
              a.removeAttribute(qc ? c : d);
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
    }),
    (nc = {
      set: function (a, b, c) {
        return (
          b === !1
            ? m.removeAttr(a, c)
            : (rc && qc) || !pc.test(c)
            ? a.setAttribute((!qc && m.propFix[c]) || c, c)
            : (a[m.camelCase("default-" + c)] = a[c] = !0),
          c
        );
      },
    }),
    m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = oc[b] || m.find.attr;
      oc[b] =
        (rc && qc) || !pc.test(b)
          ? function (a, b, d) {
              var e, f;
              return (
                d ||
                  ((f = oc[b]),
                  (oc[b] = e),
                  (e = null != c(a, b, d) ? b.toLowerCase() : null),
                  (oc[b] = f)),
                e
              );
            }
          : function (a, b, c) {
              return c
                ? void 0
                : a[m.camelCase("default-" + b)]
                ? b.toLowerCase()
                : null;
            };
    }),
    (rc && qc) ||
      (m.attrHooks.value = {
        set: function (a, b, c) {
          return m.nodeName(a, "input")
            ? void (a.defaultValue = b)
            : mc && mc.set(a, b, c);
        },
      }),
    qc ||
      ((mc = {
        set: function (a, b, c) {
          var d = a.getAttributeNode(c);
          return (
            d || a.setAttributeNode((d = a.ownerDocument.createAttribute(c))),
            (d.value = b += ""),
            "value" === c || b === a.getAttribute(c) ? b : void 0
          );
        },
      }),
      (oc.id = oc.name = oc.coords = function (a, b, c) {
        var d;
        return c
          ? void 0
          : (d = a.getAttributeNode(b)) && "" !== d.value
          ? d.value
          : null;
      }),
      (m.valHooks.button = {
        get: function (a, b) {
          var c = a.getAttributeNode(b);
          return c && c.specified ? c.value : void 0;
        },
        set: mc.set,
      }),
      (m.attrHooks.contenteditable = {
        set: function (a, b, c) {
          mc.set(a, "" === b ? !1 : b, c);
        },
      }),
      m.each(["width", "height"], function (a, b) {
        m.attrHooks[b] = {
          set: function (a, c) {
            return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
          },
        };
      })),
    k.style ||
      (m.attrHooks.style = {
        get: function (a) {
          return a.style.cssText || void 0;
        },
        set: function (a, b) {
          return (a.style.cssText = b + "");
        },
      });
  var sc = /^(?:input|select|textarea|button|object)$/i,
    tc = /^(?:a|area)$/i;
  m.fn.extend({
    prop: function (a, b) {
      return V(this, m.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return (
        (a = m.propFix[a] || a),
        this.each(function () {
          try {
            (this[a] = void 0), delete this[a];
          } catch (b) {}
        })
      );
    },
  }),
    m.extend({
      propFix: { for: "htmlFor", class: "className" },
      prop: function (a, b, c) {
        var d,
          e,
          f,
          g = a.nodeType;
        if (a && 3 !== g && 8 !== g && 2 !== g)
          return (
            (f = 1 !== g || !m.isXMLDoc(a)),
            f && ((b = m.propFix[b] || b), (e = m.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var b = m.find.attr(a, "tabindex");
            return b
              ? parseInt(b, 10)
              : sc.test(a.nodeName) || (tc.test(a.nodeName) && a.href)
              ? 0
              : -1;
          },
        },
      },
    }),
    k.hrefNormalized ||
      m.each(["href", "src"], function (a, b) {
        m.propHooks[b] = {
          get: function (a) {
            return a.getAttribute(b, 4);
          },
        };
      }),
    k.optSelected ||
      (m.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return (
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
            null
          );
        },
      }),
    m.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        m.propFix[this.toLowerCase()] = this;
      }
    ),
    k.enctype || (m.propFix.enctype = "encoding");
  var uc = /[\t\r\n\f]/g;
  m.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = 0,
        i = this.length,
        j = "string" == typeof a && a;
      if (m.isFunction(a))
        return this.each(function (b) {
          m(this).addClass(a.call(this, b, this.className));
        });
      if (j)
        for (b = (a || "").match(E) || []; i > h; h++)
          if (
            ((c = this[h]),
            (d =
              1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")))
          ) {
            f = 0;
            while ((e = b[f++])) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
            (g = m.trim(d)), c.className !== g && (c.className = g);
          }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = 0,
        i = this.length,
        j = 0 === arguments.length || ("string" == typeof a && a);
      if (m.isFunction(a))
        return this.each(function (b) {
          m(this).removeClass(a.call(this, b, this.className));
        });
      if (j)
        for (b = (a || "").match(E) || []; i > h; h++)
          if (
            ((c = this[h]),
            (d =
              1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(uc, " ") : "")))
          ) {
            f = 0;
            while ((e = b[f++]))
              while (d.indexOf(" " + e + " ") >= 0)
                d = d.replace(" " + e + " ", " ");
            (g = a ? m.trim(d) : ""), c.className !== g && (c.className = g);
          }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : this.each(
            m.isFunction(a)
              ? function (c) {
                  m(this).toggleClass(a.call(this, c, this.className, b), b);
                }
              : function () {
                  if ("string" === c) {
                    var b,
                      d = 0,
                      e = m(this),
                      f = a.match(E) || [];
                    while ((b = f[d++]))
                      e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                  } else
                    (c === K || "boolean" === c) &&
                      (this.className &&
                        m._data(this, "__className__", this.className),
                      (this.className =
                        this.className || a === !1
                          ? ""
                          : m._data(this, "__className__") || ""));
                }
          );
    },
    hasClass: function (a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
        if (
          1 === this[c].nodeType &&
          (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0
        )
          return !0;
      return !1;
    },
  }),
    m.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (a, b) {
        m.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    m.fn.extend({
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
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
    });
  var vc = m.now(),
    wc = /\?/,
    xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (m.parseJSON = function (b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
    var c,
      d = null,
      e = m.trim(b + "");
    return e &&
      !m.trim(
        e.replace(xc, function (a, b, e, f) {
          return (
            c && b && (d = 0), 0 === d ? a : ((c = e || b), (d += !f - !e), "")
          );
        })
      )
      ? Function("return " + e)()
      : m.error("Invalid JSON: " + b);
  }),
    (m.parseXML = function (b) {
      var c, d;
      if (!b || "string" != typeof b) return null;
      try {
        a.DOMParser
          ? ((d = new DOMParser()), (c = d.parseFromString(b, "text/xml")))
          : ((c = new ActiveXObject("Microsoft.XMLDOM")),
            (c.async = "false"),
            c.loadXML(b));
      } catch (e) {
        c = void 0;
      }
      return (
        (c &&
          c.documentElement &&
          !c.getElementsByTagName("parsererror").length) ||
          m.error("Invalid XML: " + b),
        c
      );
    });
  var yc,
    zc,
    Ac = /#.*$/,
    Bc = /([?&])_=[^&]*/,
    Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Ec = /^(?:GET|HEAD)$/,
    Fc = /^\/\//,
    Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Hc = {},
    Ic = {},
    Jc = "*/".concat("*");
  try {
    zc = location.href;
  } catch (Kc) {
    (zc = y.createElement("a")), (zc.href = ""), (zc = zc.href);
  }
  yc = Gc.exec(zc.toLowerCase()) || [];
  function Lc(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(E) || [];
      if (m.isFunction(c))
        while ((d = f[e++]))
          "+" === d.charAt(0)
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function Mc(a, b, c, d) {
    var e = {},
      f = a === Ic;
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        m.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function Nc(a, b) {
    var c,
      d,
      e = m.ajaxSettings.flatOptions || {};
    for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    return c && m.extend(!0, a, c), a;
  }
  function Oc(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0])
      i.shift(),
        void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    if (e)
      for (g in h)
        if (h[g] && h[g].test(e)) {
          i.unshift(g);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;
          break;
        }
        d || (d = g);
      }
      f = f || d;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function Pc(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (((g = j[i + " " + f] || j["* " + f]), !g))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a["throws"]) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f,
                };
              }
        }
    return { state: "success", data: b };
  }
  m.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: zc,
      type: "GET",
      isLocal: Dc.test(yc[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Jc,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /xml/, html: /html/, json: /json/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": m.parseJSON,
        "text xml": m.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (a, b) {
      return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a);
    },
    ajaxPrefilter: Lc(Hc),
    ajaxTransport: Lc(Ic),
    ajax: function (a, b) {
      "object" == typeof a && ((b = a), (a = void 0)), (b = b || {});
      var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = m.ajaxSetup({}, b),
        l = k.context || k,
        n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
        o = m.Deferred(),
        p = m.Callbacks("once memory"),
        q = k.statusCode || {},
        r = {},
        s = {},
        t = 0,
        u = "canceled",
        v = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === t) {
              if (!j) {
                j = {};
                while ((b = Cc.exec(f))) j[b[1].toLowerCase()] = b[2];
              }
              b = j[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return 2 === t ? f : null;
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return t || ((a = s[c] = s[c] || a), (r[a] = b)), this;
          },
          overrideMimeType: function (a) {
            return t || (k.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (2 > t) for (b in a) q[b] = [q[b], a[b]];
              else v.always(a[v.status]);
            return this;
          },
          abort: function (a) {
            var b = a || u;
            return i && i.abort(b), x(0, b), this;
          },
        };
      if (
        ((o.promise(v).complete = p.add),
        (v.success = v.done),
        (v.error = v.fail),
        (k.url = ((a || k.url || zc) + "")
          .replace(Ac, "")
          .replace(Fc, yc[1] + "//")),
        (k.type = b.method || b.type || k.method || k.type),
        (k.dataTypes = m
          .trim(k.dataType || "*")
          .toLowerCase()
          .match(E) || [""]),
        null == k.crossDomain &&
          ((c = Gc.exec(k.url.toLowerCase())),
          (k.crossDomain = !(
            !c ||
            (c[1] === yc[1] &&
              c[2] === yc[2] &&
              (c[3] || ("http:" === c[1] ? "80" : "443")) ===
                (yc[3] || ("http:" === yc[1] ? "80" : "443")))
          ))),
        k.data &&
          k.processData &&
          "string" != typeof k.data &&
          (k.data = m.param(k.data, k.traditional)),
        Mc(Hc, k, b, v),
        2 === t)
      )
        return v;
      (h = m.event && k.global),
        h && 0 === m.active++ && m.event.trigger("ajaxStart"),
        (k.type = k.type.toUpperCase()),
        (k.hasContent = !Ec.test(k.type)),
        (e = k.url),
        k.hasContent ||
          (k.data &&
            ((e = k.url += (wc.test(e) ? "&" : "?") + k.data), delete k.data),
          k.cache === !1 &&
            (k.url = Bc.test(e)
              ? e.replace(Bc, "$1_=" + vc++)
              : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)),
        k.ifModified &&
          (m.lastModified[e] &&
            v.setRequestHeader("If-Modified-Since", m.lastModified[e]),
          m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])),
        ((k.data && k.hasContent && k.contentType !== !1) || b.contentType) &&
          v.setRequestHeader("Content-Type", k.contentType),
        v.setRequestHeader(
          "Accept",
          k.dataTypes[0] && k.accepts[k.dataTypes[0]]
            ? k.accepts[k.dataTypes[0]] +
                ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "")
            : k.accepts["*"]
        );
      for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
        return v.abort();
      u = "abort";
      for (d in { success: 1, error: 1, complete: 1 }) v[d](k[d]);
      if ((i = Mc(Ic, k, b, v))) {
        (v.readyState = 1),
          h && n.trigger("ajaxSend", [v, k]),
          k.async &&
            k.timeout > 0 &&
            (g = setTimeout(function () {
              v.abort("timeout");
            }, k.timeout));
        try {
          (t = 1), i.send(r, x);
        } catch (w) {
          if (!(2 > t)) throw w;
          x(-1, w);
        }
      } else x(-1, "No Transport");
      function x(a, b, c, d) {
        var j,
          r,
          s,
          u,
          w,
          x = b;
        2 !== t &&
          ((t = 2),
          g && clearTimeout(g),
          (i = void 0),
          (f = d || ""),
          (v.readyState = a > 0 ? 4 : 0),
          (j = (a >= 200 && 300 > a) || 304 === a),
          c && (u = Oc(k, v, c)),
          (u = Pc(k, u, v, j)),
          j
            ? (k.ifModified &&
                ((w = v.getResponseHeader("Last-Modified")),
                w && (m.lastModified[e] = w),
                (w = v.getResponseHeader("etag")),
                w && (m.etag[e] = w)),
              204 === a || "HEAD" === k.type
                ? (x = "nocontent")
                : 304 === a
                ? (x = "notmodified")
                : ((x = u.state), (r = u.data), (s = u.error), (j = !s)))
            : ((s = x), (a || !x) && ((x = "error"), 0 > a && (a = 0))),
          (v.status = a),
          (v.statusText = (b || x) + ""),
          j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
          v.statusCode(q),
          (q = void 0),
          h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]),
          p.fireWith(l, [v, x]),
          h &&
            (n.trigger("ajaxComplete", [v, k]),
            --m.active || m.event.trigger("ajaxStop")));
      }
      return v;
    },
    getJSON: function (a, b, c) {
      return m.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return m.get(a, void 0, b, "script");
    },
  }),
    m.each(["get", "post"], function (a, b) {
      m[b] = function (a, c, d, e) {
        return (
          m.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          m.ajax({ url: a, type: b, dataType: e, data: c, success: d })
        );
      };
    }),
    (m._evalUrl = function (a) {
      return m.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    m.fn.extend({
      wrapAll: function (a) {
        if (m.isFunction(a))
          return this.each(function (b) {
            m(this).wrapAll(a.call(this, b));
          });
        if (this[0]) {
          var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function () {
                var a = this;
                while (a.firstChild && 1 === a.firstChild.nodeType)
                  a = a.firstChild;
                return a;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (a) {
        return this.each(
          m.isFunction(a)
            ? function (b) {
                m(this).wrapInner(a.call(this, b));
              }
            : function () {
                var b = m(this),
                  c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
              }
        );
      },
      wrap: function (a) {
        var b = m.isFunction(a);
        return this.each(function (c) {
          m(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            m.nodeName(this, "body") || m(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (m.expr.filters.hidden = function (a) {
      return (
        (a.offsetWidth <= 0 && a.offsetHeight <= 0) ||
        (!k.reliableHiddenOffsets() &&
          "none" === ((a.style && a.style.display) || m.css(a, "display")))
      );
    }),
    (m.expr.filters.visible = function (a) {
      return !m.expr.filters.hidden(a);
    });
  var Qc = /%20/g,
    Rc = /\[\]$/,
    Sc = /\r?\n/g,
    Tc = /^(?:submit|button|image|reset|file)$/i,
    Uc = /^(?:input|select|textarea|keygen)/i;
  function Vc(a, b, c, d) {
    var e;
    if (m.isArray(b))
      m.each(b, function (b, e) {
        c || Rc.test(a)
          ? d(a, e)
          : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
      });
    else if (c || "object" !== m.type(b)) d(a, b);
    else for (e in b) Vc(a + "[" + e + "]", b[e], c, d);
  }
  (m.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        (b = m.isFunction(b) ? b() : null == b ? "" : b),
          (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
      };
    if (
      (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional),
      m.isArray(a) || (a.jquery && !m.isPlainObject(a)))
    )
      m.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) Vc(c, a[c], b, e);
    return d.join("&").replace(Qc, "+");
  }),
    m.fn.extend({
      serialize: function () {
        return m.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = m.prop(this, "elements");
          return a ? m.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !m(this).is(":disabled") &&
              Uc.test(this.nodeName) &&
              !Tc.test(a) &&
              (this.checked || !W.test(a))
            );
          })
          .map(function (a, b) {
            var c = m(this).val();
            return null == c
              ? null
              : m.isArray(c)
              ? m.map(c, function (a) {
                  return { name: b.name, value: a.replace(Sc, "\r\n") };
                })
              : { name: b.name, value: c.replace(Sc, "\r\n") };
          })
          .get();
      },
    }),
    (m.ajaxSettings.xhr =
      void 0 !== a.ActiveXObject
        ? function () {
            return (
              (!this.isLocal &&
                /^(get|post|head|put|delete|options)$/i.test(this.type) &&
                Zc()) ||
              $c()
            );
          }
        : Zc);
  var Wc = 0,
    Xc = {},
    Yc = m.ajaxSettings.xhr();
  a.attachEvent &&
    a.attachEvent("onunload", function () {
      for (var a in Xc) Xc[a](void 0, !0);
    }),
    (k.cors = !!Yc && "withCredentials" in Yc),
    (Yc = k.ajax = !!Yc),
    Yc &&
      m.ajaxTransport(function (a) {
        if (!a.crossDomain || k.cors) {
          var b;
          return {
            send: function (c, d) {
              var e,
                f = a.xhr(),
                g = ++Wc;
              if (
                (f.open(a.type, a.url, a.async, a.username, a.password),
                a.xhrFields)
              )
                for (e in a.xhrFields) f[e] = a.xhrFields[e];
              a.mimeType &&
                f.overrideMimeType &&
                f.overrideMimeType(a.mimeType),
                a.crossDomain ||
                  c["X-Requested-With"] ||
                  (c["X-Requested-With"] = "XMLHttpRequest");
              for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
              f.send((a.hasContent && a.data) || null),
                (b = function (c, e) {
                  var h, i, j;
                  if (b && (e || 4 === f.readyState))
                    if (
                      (delete Xc[g],
                      (b = void 0),
                      (f.onreadystatechange = m.noop),
                      e)
                    )
                      4 !== f.readyState && f.abort();
                    else {
                      (j = {}),
                        (h = f.status),
                        "string" == typeof f.responseText &&
                          (j.text = f.responseText);
                      try {
                        i = f.statusText;
                      } catch (k) {
                        i = "";
                      }
                      h || !a.isLocal || a.crossDomain
                        ? 1223 === h && (h = 204)
                        : (h = j.text ? 200 : 404);
                    }
                  j && d(h, i, j, f.getAllResponseHeaders());
                }),
                a.async
                  ? 4 === f.readyState
                    ? setTimeout(b)
                    : (f.onreadystatechange = Xc[g] = b)
                  : b();
            },
            abort: function () {
              b && b(void 0, !0);
            },
          };
        }
      });
  function Zc() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }
  function $c() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }
  m.ajaxSetup({
    accepts: {
      script:
        "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
    },
    contents: { script: /(?:java|ecma)script/ },
    converters: {
      "text script": function (a) {
        return m.globalEval(a), a;
      },
    },
  }),
    m.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1),
        a.crossDomain && ((a.type = "GET"), (a.global = !1));
    }),
    m.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b,
          c = y.head || m("head")[0] || y.documentElement;
        return {
          send: function (d, e) {
            (b = y.createElement("script")),
              (b.async = !0),
              a.scriptCharset && (b.charset = a.scriptCharset),
              (b.src = a.url),
              (b.onload = b.onreadystatechange = function (a, c) {
                (c || !b.readyState || /loaded|complete/.test(b.readyState)) &&
                  ((b.onload = b.onreadystatechange = null),
                  b.parentNode && b.parentNode.removeChild(b),
                  (b = null),
                  c || e(200, "success"));
              }),
              c.insertBefore(b, c.firstChild);
          },
          abort: function () {
            b && b.onload(void 0, !0);
          },
        };
      }
    });
  var _c = [],
    ad = /(=)\?(?=&|$)|\?\?/;
  m.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = _c.pop() || m.expando + "_" + vc++;
      return (this[a] = !0), a;
    },
  }),
    m.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (ad.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              !(b.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              ad.test(b.data) &&
              "data");
      return h || "jsonp" === b.dataTypes[0]
        ? ((e = b.jsonpCallback = m.isFunction(b.jsonpCallback)
            ? b.jsonpCallback()
            : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(ad, "$1" + e))
            : b.jsonp !== !1 &&
              (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || m.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), _c.push(e)),
              g && m.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script")
        : void 0;
    }),
    (m.parseHTML = function (a, b, c) {
      if (!a || "string" != typeof a) return null;
      "boolean" == typeof b && ((c = b), (b = !1)), (b = b || y);
      var d = u.exec(a),
        e = !c && [];
      return d
        ? [b.createElement(d[1])]
        : ((d = m.buildFragment([a], b, e)),
          e && e.length && m(e).remove(),
          m.merge([], d.childNodes));
    });
  var bd = m.fn.load;
  (m.fn.load = function (a, b, c) {
    if ("string" != typeof a && bd) return bd.apply(this, arguments);
    var d,
      e,
      f,
      g = this,
      h = a.indexOf(" ");
    return (
      h >= 0 && ((d = m.trim(a.slice(h, a.length))), (a = a.slice(0, h))),
      m.isFunction(b)
        ? ((c = b), (b = void 0))
        : b && "object" == typeof b && (f = "POST"),
      g.length > 0 &&
        m
          .ajax({ url: a, type: f, dataType: "html", data: b })
          .done(function (a) {
            (e = arguments),
              g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a);
          })
          .complete(
            c &&
              function (a, b) {
                g.each(c, e || [a.responseText, b, a]);
              }
          ),
      this
    );
  }),
    m.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        m.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    (m.expr.filters.animated = function (a) {
      return m.grep(m.timers, function (b) {
        return a === b.elem;
      }).length;
    });
  var cd = a.document.documentElement;
  function dd(a) {
    return m.isWindow(a)
      ? a
      : 9 === a.nodeType
      ? a.defaultView || a.parentWindow
      : !1;
  }
  (m.offset = {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = m.css(a, "position"),
        l = m(a),
        n = {};
      "static" === k && (a.style.position = "relative"),
        (h = l.offset()),
        (f = m.css(a, "top")),
        (i = m.css(a, "left")),
        (j =
          ("absolute" === k || "fixed" === k) &&
          m.inArray("auto", [f, i]) > -1),
        j
          ? ((d = l.position()), (g = d.top), (e = d.left))
          : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
        m.isFunction(b) && (b = b.call(a, c, h)),
        null != b.top && (n.top = b.top - h.top + g),
        null != b.left && (n.left = b.left - h.left + e),
        "using" in b ? b.using.call(a, n) : l.css(n);
    },
  }),
    m.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                m.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d = { top: 0, left: 0 },
          e = this[0],
          f = e && e.ownerDocument;
        if (f)
          return (
            (b = f.documentElement),
            m.contains(b, e)
              ? (typeof e.getBoundingClientRect !== K &&
                  (d = e.getBoundingClientRect()),
                (c = dd(f)),
                {
                  top:
                    d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                  left:
                    d.left +
                    (c.pageXOffset || b.scrollLeft) -
                    (b.clientLeft || 0),
                })
              : d
          );
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = { top: 0, left: 0 },
            d = this[0];
          return (
            "fixed" === m.css(d, "position")
              ? (b = d.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                m.nodeName(a[0], "html") || (c = a.offset()),
                (c.top += m.css(a[0], "borderTopWidth", !0)),
                (c.left += m.css(a[0], "borderLeftWidth", !0))),
            {
              top: b.top - c.top - m.css(d, "marginTop", !0),
              left: b.left - c.left - m.css(d, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent || cd;
          while (
            a &&
            !m.nodeName(a, "html") &&
            "static" === m.css(a, "position")
          )
            a = a.offsetParent;
          return a || cd;
        });
      },
    }),
    m.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (
      a,
      b
    ) {
      var c = /Y/.test(b);
      m.fn[a] = function (d) {
        return V(
          this,
          function (a, d, e) {
            var f = dd(a);
            return void 0 === e
              ? f
                ? b in f
                  ? f[b]
                  : f.document.documentElement[d]
                : a[d]
              : void (f
                  ? f.scrollTo(
                      c ? m(f).scrollLeft() : e,
                      c ? e : m(f).scrollTop()
                    )
                  : (a[d] = e));
          },
          a,
          d,
          arguments.length,
          null
        );
      };
    }),
    m.each(["top", "left"], function (a, b) {
      m.cssHooks[b] = Lb(k.pixelPosition, function (a, c) {
        return c
          ? ((c = Jb(a, b)), Hb.test(c) ? m(a).position()[b] + "px" : c)
          : void 0;
      });
    }),
    m.each({ Height: "height", Width: "width" }, function (a, b) {
      m.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (
        c,
        d
      ) {
        m.fn[d] = function (d, e) {
          var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");
          return V(
            this,
            function (b, c, d) {
              var e;
              return m.isWindow(b)
                ? b.document.documentElement["client" + a]
                : 9 === b.nodeType
                ? ((e = b.documentElement),
                  Math.max(
                    b.body["scroll" + a],
                    e["scroll" + a],
                    b.body["offset" + a],
                    e["offset" + a],
                    e["client" + a]
                  ))
                : void 0 === d
                ? m.css(b, c, g)
                : m.style(b, c, d, g);
            },
            b,
            f ? d : void 0,
            f,
            null
          );
        };
      });
    }),
    (m.fn.size = function () {
      return this.length;
    }),
    (m.fn.andSelf = m.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return m;
      });
  var ed = a.jQuery,
    fd = a.$;
  return (
    (m.noConflict = function (b) {
      return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m;
    }),
    typeof b === K && (a.jQuery = a.$ = m),
    m
  );
});
/*!
 * MediaElement.js
 * http://www.mediaelementjs.com/
 *
 * Wrapper that mimics native HTML5 MediaElement (audio and video)
 * using a variety of technologies (pure JavaScript, Flash, iframe)
 *
 * Copyright 2010-2017, John Dyer (http://j.hn/)
 * License: MIT
 *
 */ /*!
 * MediaElement.js
 * http://www.mediaelementjs.com/
 *
 * Wrapper that mimics native HTML5 MediaElement (audio and video)
 * using a variety of technologies (pure JavaScript, Flash, iframe)
 *
 * Copyright 2010-2017, John Dyer (http://j.hn/)
 * License: MIT
 *
 */
!(function a(b, c, d) {
  function e(g, h) {
    if (!c[g]) {
      if (!b[g]) {
        var i = "function" == typeof require && require;
        if (!h && i) return i(g, !0);
        if (f) return f(g, !0);
        var j = new Error("Cannot find module '" + g + "'");
        throw ((j.code = "MODULE_NOT_FOUND"), j);
      }
      var k = (c[g] = { exports: {} });
      b[g][0].call(
        k.exports,
        function (a) {
          var c = b[g][1][a];
          return e(c ? c : a);
        },
        k,
        k.exports,
        a,
        b,
        c,
        d
      );
    }
    return c[g].exports;
  }
  for (
    var f = "function" == typeof require && require, g = 0;
    g < d.length;
    g++
  )
    e(d[g]);
  return e;
})(
  {
    1: [function (a, b, c) {}, {}],
    2: [
      function (a, b, c) {
        (function (c) {
          var d =
              "undefined" != typeof c
                ? c
                : "undefined" != typeof window
                ? window
                : {},
            e = a(1);
          if ("undefined" != typeof document) b.exports = document;
          else {
            var f = d["__GLOBAL_DOCUMENT_CACHE@4"];
            f || (f = d["__GLOBAL_DOCUMENT_CACHE@4"] = e), (b.exports = f);
          }
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      { 1: 1 },
    ],
    3: [
      function (a, b, c) {
        (function (a) {
          "undefined" != typeof window
            ? (b.exports = window)
            : "undefined" != typeof a
            ? (b.exports = a)
            : "undefined" != typeof self
            ? (b.exports = self)
            : (b.exports = {});
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      {},
    ],
    4: [
      function (a, b, c) {
        "use strict";
        function d(a) {
          return a && a.__esModule ? a : { default: a };
        }
        Object.defineProperty(c, "__esModule", { value: !0 });
        var e =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (a) {
                  return typeof a;
                }
              : function (a) {
                  return a &&
                    "function" == typeof Symbol &&
                    a.constructor === Symbol &&
                    a !== Symbol.prototype
                    ? "symbol"
                    : typeof a;
                },
          f = a(6),
          g = d(f),
          h = a(14),
          i = a(25),
          j = { lang: "en", en: h.EN };
        (j.language = function () {
          for (var a = arguments.length, b = Array(a), c = 0; a > c; c++)
            b[c] = arguments[c];
          if (null !== b && void 0 !== b && b.length) {
            if ("string" != typeof b[0])
              throw new TypeError("Language code must be a string value");
            if (!b[0].match(/^[a-z]{2}(\-[a-z]{2})?$/i))
              throw new TypeError(
                "Language code must have format xx or xx-xx"
              );
            (j.lang = b[0]),
              void 0 === j[b[0]]
                ? ((b[1] =
                    null !== b[1] && void 0 !== b[1] && "object" === e(b[1])
                      ? b[1]
                      : {}),
                  (j[b[0]] = i.isObjectEmpty(b[1]) ? h.EN : b[1]))
                : null !== b[1] &&
                  void 0 !== b[1] &&
                  "object" === e(b[1]) &&
                  (j[b[0]] = b[1]);
          }
          return j.lang;
        }),
          (j.t = function (a) {
            var b =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
            if ("string" == typeof a && a.length) {
              var c = void 0,
                d = void 0,
                f = j.language(),
                g = function (a, b, c) {
                  if (
                    "object" !==
                      ("undefined" == typeof a ? "undefined" : e(a)) ||
                    "number" != typeof b ||
                    "number" != typeof c
                  )
                    return a;
                  var d = (function () {
                    return [
                      function () {
                        return arguments.length <= 1 ? void 0 : arguments[1];
                      },
                      function () {
                        return 1 ===
                          (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : arguments.length <= 2
                          ? void 0
                          : arguments[2];
                      },
                      function () {
                        return 0 ===
                          (arguments.length <= 0 ? void 0 : arguments[0]) ||
                          1 === (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : arguments.length <= 2
                          ? void 0
                          : arguments[2];
                      },
                      function () {
                        return (arguments.length <= 0 ? void 0 : arguments[0]) %
                          10 ===
                          1 &&
                          (arguments.length <= 0 ? void 0 : arguments[0]) %
                            100 !==
                            11
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : 0 !==
                            (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : arguments.length <= 3
                          ? void 0
                          : arguments[3];
                      },
                      function () {
                        return 1 ===
                          (arguments.length <= 0 ? void 0 : arguments[0]) ||
                          11 === (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : 2 ===
                              (arguments.length <= 0 ? void 0 : arguments[0]) ||
                            12 ===
                              (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : (arguments.length <= 0 ? void 0 : arguments[0]) >
                              2 &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) < 20
                          ? arguments.length <= 3
                            ? void 0
                            : arguments[3]
                          : arguments.length <= 4
                          ? void 0
                          : arguments[4];
                      },
                      function () {
                        return 1 ===
                          (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : 0 ===
                              (arguments.length <= 0 ? void 0 : arguments[0]) ||
                            ((arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 >
                              0 &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 <
                                20)
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : arguments.length <= 3
                          ? void 0
                          : arguments[3];
                      },
                      function () {
                        return (arguments.length <= 0 ? void 0 : arguments[0]) %
                          10 ===
                          1 &&
                          (arguments.length <= 0 ? void 0 : arguments[0]) %
                            100 !==
                            11
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : (arguments.length <= 0 ? void 0 : arguments[0]) %
                              10 >=
                              2 &&
                            ((arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 <
                              10 ||
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 >=
                                20)
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : [3];
                      },
                      function () {
                        return (arguments.length <= 0 ? void 0 : arguments[0]) %
                          10 ===
                          1 &&
                          (arguments.length <= 0 ? void 0 : arguments[0]) %
                            100 !==
                            11
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : (arguments.length <= 0 ? void 0 : arguments[0]) %
                              10 >=
                              2 &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) %
                              10 <=
                              4 &&
                            ((arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 <
                              10 ||
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 >=
                                20)
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : arguments.length <= 3
                          ? void 0
                          : arguments[3];
                      },
                      function () {
                        return 1 ===
                          (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : (arguments.length <= 0 ? void 0 : arguments[0]) >=
                              2 &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) <= 4
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : arguments.length <= 3
                          ? void 0
                          : arguments[3];
                      },
                      function () {
                        return 1 ===
                          (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : (arguments.length <= 0 ? void 0 : arguments[0]) %
                              10 >=
                              2 &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) %
                              10 <=
                              4 &&
                            ((arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 <
                              10 ||
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 >=
                                20)
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : arguments.length <= 3
                          ? void 0
                          : arguments[3];
                      },
                      function () {
                        return (arguments.length <= 0 ? void 0 : arguments[0]) %
                          100 ===
                          1
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : (arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 ===
                            2
                          ? arguments.length <= 3
                            ? void 0
                            : arguments[3]
                          : (arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 ===
                              3 ||
                            (arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 ===
                              4
                          ? arguments.length <= 4
                            ? void 0
                            : arguments[4]
                          : arguments.length <= 1
                          ? void 0
                          : arguments[1];
                      },
                      function () {
                        return 1 ===
                          (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : 2 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : (arguments.length <= 0 ? void 0 : arguments[0]) >
                              2 &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) < 7
                          ? arguments.length <= 3
                            ? void 0
                            : arguments[3]
                          : (arguments.length <= 0 ? void 0 : arguments[0]) >
                              6 &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) < 11
                          ? arguments.length <= 4
                            ? void 0
                            : arguments[4]
                          : arguments.length <= 5
                          ? void 0
                          : arguments[5];
                      },
                      function () {
                        return 0 ===
                          (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : 2 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 3
                            ? void 0
                            : arguments[3]
                          : (arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 >=
                              3 &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 <=
                              10
                          ? arguments.length <= 4
                            ? void 0
                            : arguments[4]
                          : (arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 >=
                            11
                          ? arguments.length <= 5
                            ? void 0
                            : arguments[5]
                          : arguments.length <= 6
                          ? void 0
                          : arguments[6];
                      },
                      function () {
                        return 1 ===
                          (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : 0 ===
                              (arguments.length <= 0 ? void 0 : arguments[0]) ||
                            ((arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 >
                              1 &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 <
                                11)
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : (arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 >
                              10 &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 <
                              20
                          ? arguments.length <= 3
                            ? void 0
                            : arguments[3]
                          : arguments.length <= 4
                          ? void 0
                          : arguments[4];
                      },
                      function () {
                        return (arguments.length <= 0 ? void 0 : arguments[0]) %
                          10 ===
                          1
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : (arguments.length <= 0 ? void 0 : arguments[0]) %
                              10 ===
                            2
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : arguments.length <= 3
                          ? void 0
                          : arguments[3];
                      },
                      function () {
                        return 11 !==
                          (arguments.length <= 0 ? void 0 : arguments[0]) &&
                          (arguments.length <= 0 ? void 0 : arguments[0]) %
                            10 ===
                            1
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : arguments.length <= 2
                          ? void 0
                          : arguments[2];
                      },
                      function () {
                        return 1 ===
                          (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : (arguments.length <= 0 ? void 0 : arguments[0]) %
                              10 >=
                              2 &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) %
                              10 <=
                              4 &&
                            ((arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 <
                              10 ||
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 >=
                                20)
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : arguments.length <= 3
                          ? void 0
                          : arguments[3];
                      },
                      function () {
                        return 1 ===
                          (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : 2 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : 8 !==
                              (arguments.length <= 0 ? void 0 : arguments[0]) &&
                            11 !==
                              (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 3
                            ? void 0
                            : arguments[3]
                          : arguments.length <= 4
                          ? void 0
                          : arguments[4];
                      },
                      function () {
                        return 0 ===
                          (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : arguments.length <= 2
                          ? void 0
                          : arguments[2];
                      },
                      function () {
                        return 1 ===
                          (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : 2 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : 3 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 3
                            ? void 0
                            : arguments[3]
                          : arguments.length <= 4
                          ? void 0
                          : arguments[4];
                      },
                      function () {
                        return 0 ===
                          (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : arguments.length <= 3
                          ? void 0
                          : arguments[3];
                      },
                    ];
                  })();
                  return d[c].apply(null, [b].concat(a));
                };
              return (
                void 0 !== j[f] &&
                  ((c = j[f][a]),
                  null !== b &&
                    "number" == typeof b &&
                    ((d = j[f]["mejs.plural-form"]),
                    (c = g.apply(null, [c, b, d])))),
                !c &&
                  j.en &&
                  ((c = j.en[a]),
                  null !== b &&
                    "number" == typeof b &&
                    ((d = j.en["mejs.plural-form"]),
                    (c = g.apply(null, [c, b, d])))),
                (c = c || a),
                null !== b && "number" == typeof b && (c = c.replace("%1", b)),
                i.escapeHTML(c)
              );
            }
            return a;
          }),
          (g["default"].i18n = j),
          "undefined" != typeof mejsL10n &&
            g["default"].i18n.language(mejsL10n.language, mejsL10n.strings),
          (c["default"] = j);
      },
      { 14: 14, 25: 25, 6: 6 },
    ],
    5: [
      function (a, b, c) {
        "use strict";
        function d(a) {
          return a && a.__esModule ? a : { default: a };
        }
        function e(a, b) {
          if (!(a instanceof b))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(c, "__esModule", { value: !0 });
        var f = a(3),
          g = d(f),
          h = a(2),
          i = d(h),
          j = a(6),
          k = d(j),
          l = a(25),
          m = a(26),
          n = a(7),
          o = function p(a, b, c) {
            var d = this;
            e(this, p);
            var f = this;
            (c = Array.isArray(c) ? c : null),
              (f.defaults = {
                renderers: [],
                fakeNodeName: "mediaelementwrapper",
                pluginPath: "build/",
                shimScriptAccess: "sameDomain",
                customError: "",
              }),
              (b = Object.assign(f.defaults, b)),
              (f.mediaElement = i["default"].createElement(b.fakeNodeName)),
              (f.mediaElement.options = b);
            var g = a,
              h = !1;
            if (
              ("string" == typeof a
                ? (f.mediaElement.originalNode = i["default"].getElementById(a))
                : ((f.mediaElement.originalNode = a), (g = a.id)),
              (g = g || "mejs_" + Math.random().toString().slice(2)),
              void 0 !== f.mediaElement.originalNode &&
                null !== f.mediaElement.originalNode &&
                f.mediaElement.appendChild)
            ) {
              f.mediaElement.originalNode.setAttribute("id", g + "_from_mejs");
              var j = f.mediaElement.originalNode.tagName.toLowerCase();
              ["video", "audio"].includes(j) &&
                !f.mediaElement.originalNode.getAttribute("preload") &&
                f.mediaElement.originalNode.setAttribute("preload", "none"),
                f.mediaElement.originalNode.parentNode.insertBefore(
                  f.mediaElement,
                  f.mediaElement.originalNode
                ),
                f.mediaElement.appendChild(f.mediaElement.originalNode);
            }
            (f.mediaElement.id = g),
              (f.mediaElement.renderers = {}),
              (f.mediaElement.renderer = null),
              (f.mediaElement.rendererName = null),
              (f.mediaElement.changeRenderer = function (a, b) {
                var c = d;
                if (
                  void 0 !== c.mediaElement.renderer &&
                  null !== c.mediaElement.renderer &&
                  c.mediaElement.renderer.name === a
                )
                  return (
                    c.mediaElement.renderer.pause(),
                    c.mediaElement.renderer.stop &&
                      c.mediaElement.renderer.stop(),
                    c.mediaElement.renderer.show(),
                    c.mediaElement.renderer.setSrc(b[0].src),
                    !0
                  );
                void 0 !== c.mediaElement.renderer &&
                  null !== c.mediaElement.renderer &&
                  (c.mediaElement.renderer.pause(),
                  c.mediaElement.renderer.stop &&
                    c.mediaElement.renderer.stop(),
                  c.mediaElement.renderer.hide());
                var e = c.mediaElement.renderers[a],
                  f = null;
                if (void 0 !== e && null !== e)
                  return (
                    e.show(),
                    e.setSrc(b[0].src),
                    (c.mediaElement.renderer = e),
                    (c.mediaElement.rendererName = a),
                    !0
                  );
                for (
                  var g = c.mediaElement.options.renderers.length
                      ? c.mediaElement.options.renderers
                      : n.renderer.order,
                    h = 0,
                    i = g.length;
                  i > h;
                  h++
                ) {
                  var j = g[h];
                  if (j === a) {
                    var k = n.renderer.renderers;
                    f = k[j];
                    var l = Object.assign(f.options, c.mediaElement.options);
                    return (
                      (e = f.create(c.mediaElement, l, b)),
                      (e.name = a),
                      (c.mediaElement.renderers[f.name] = e),
                      (c.mediaElement.renderer = e),
                      (c.mediaElement.rendererName = a),
                      e.show(),
                      !0
                    );
                  }
                }
                return !1;
              }),
              (f.mediaElement.setSize = function (a, b) {
                void 0 !== f.mediaElement.renderer &&
                  null !== f.mediaElement.renderer &&
                  f.mediaElement.renderer.setSize(a, b);
              }),
              (f.mediaElement.createErrorMessage = function (a) {
                a = Array.isArray(a) ? a : [];
                var b = i["default"].createElement("div");
                (b.className = "me_cannotplay"),
                  (b.style.width = "100%"),
                  (b.style.height = "100%");
                var c = f.mediaElement.options.customError;
                if (!c) {
                  var d = f.mediaElement.originalNode.getAttribute("poster");
                  d &&
                    (c +=
                      '<img src="' +
                      d +
                      '" width="100%" height="100%" alt="' +
                      k["default"].i18n.t("mejs.download-file") +
                      '">');
                  for (var e = 0, g = a.length; g > e; e++) {
                    var j = a[e];
                    c +=
                      '<a href="' +
                      j.src +
                      '" data-type="' +
                      j.type +
                      '"><span>' +
                      k["default"].i18n.t("mejs.download-file") +
                      ": " +
                      j.src +
                      "</span></a>";
                  }
                }
                (b.innerHTML = c),
                  f.mediaElement.originalNode.parentNode.insertBefore(
                    b,
                    f.mediaElement.originalNode
                  ),
                  (f.mediaElement.originalNode.style.display = "none"),
                  (h = !0);
              });
            var o = k["default"].html5media.properties,
              q = k["default"].html5media.methods,
              r = function (a, b, c, d) {
                var e = a[b],
                  f = function () {
                    return c.apply(a, [e]);
                  },
                  g = function (b) {
                    return (e = d.apply(a, [b]));
                  };
                Object.defineProperty(a, b, { get: f, set: g });
              },
              s = function (a) {
                "src" !== a &&
                  !(function () {
                    var b =
                        "" + a.substring(0, 1).toUpperCase() + a.substring(1),
                      c = function () {
                        return void 0 !== f.mediaElement.renderer &&
                          null !== f.mediaElement.renderer
                          ? f.mediaElement.renderer["get" + b]()
                          : null;
                      },
                      d = function (a) {
                        void 0 !== f.mediaElement.renderer &&
                          null !== f.mediaElement.renderer &&
                          f.mediaElement.renderer["set" + b](a);
                      };
                    r(f.mediaElement, a, c, d),
                      (f.mediaElement["get" + b] = c),
                      (f.mediaElement["set" + b] = d);
                  })();
              },
              t = function () {
                return void 0 !== f.mediaElement.renderer &&
                  null !== f.mediaElement.renderer
                  ? f.mediaElement.renderer.getSrc()
                  : null;
              },
              u = function (a) {
                var b = [];
                if ("string" == typeof a)
                  b.push({ src: a, type: a ? m.getTypeFromFile(a) : "" });
                else
                  for (var c = 0, d = a.length; d > c; c++) {
                    var e = m.absolutizeUrl(a[c].src),
                      g = a[c].type;
                    b.push({
                      src: e,
                      type:
                        ("" !== g && null !== g && void 0 !== g) || !e
                          ? g
                          : m.getTypeFromFile(e),
                    });
                  }
                var h = n.renderer.select(
                    b,
                    f.mediaElement.options.renderers.length
                      ? f.mediaElement.options.renderers
                      : []
                  ),
                  i = void 0;
                return (
                  f.mediaElement.paused ||
                    (f.mediaElement.pause(),
                    (i = l.createEvent("pause", f.mediaElement)),
                    f.mediaElement.dispatchEvent(i)),
                  f.mediaElement.originalNode.setAttribute(
                    "src",
                    b[0].src || ""
                  ),
                  f.mediaElement.querySelector(".me_cannotplay") &&
                    f.mediaElement.querySelector(".me_cannotplay").remove(),
                  null === h
                    ? (f.mediaElement.createErrorMessage(b),
                      (i = l.createEvent("error", f.mediaElement)),
                      (i.message = "No renderer found"),
                      void f.mediaElement.dispatchEvent(i))
                    : (f.mediaElement.changeRenderer(h.rendererName, b),
                      void 0 === f.mediaElement.renderer ||
                      null === f.mediaElement.renderer
                        ? ((i = l.createEvent("error", f.mediaElement)),
                          (i.message = "Error creating renderer"),
                          f.mediaElement.dispatchEvent(i),
                          void f.mediaElement.createErrorMessage(b))
                        : void 0)
                );
              },
              v = function (a) {
                f.mediaElement[a] = function () {
                  for (
                    var b = arguments.length, c = Array(b), d = 0;
                    b > d;
                    d++
                  )
                    c[d] = arguments[d];
                  if (
                    void 0 !== f.mediaElement.renderer &&
                    null !== f.mediaElement.renderer &&
                    "function" == typeof f.mediaElement.renderer[a]
                  )
                    try {
                      f.mediaElement.renderer[a](c);
                    } catch (e) {
                      f.mediaElement.createErrorMessage();
                    }
                  return null;
                };
              };
            r(f.mediaElement, "src", t, u),
              (f.mediaElement.getSrc = t),
              (f.mediaElement.setSrc = u);
            for (var w = 0, x = o.length; x > w; w++) s(o[w]);
            for (var y = 0, z = q.length; z > y; y++) v(q[y]);
            (f.mediaElement.events = {}),
              (f.mediaElement.addEventListener = function (a, b) {
                (f.mediaElement.events[a] = f.mediaElement.events[a] || []),
                  f.mediaElement.events[a].push(b);
              }),
              (f.mediaElement.removeEventListener = function (a, b) {
                if (!a) return (f.mediaElement.events = {}), !0;
                var c = f.mediaElement.events[a];
                if (!c) return !0;
                if (!b) return (f.mediaElement.events[a] = []), !0;
                for (var d = 0; d < c.length; d++)
                  if (c[d] === b)
                    return f.mediaElement.events[a].splice(d, 1), !0;
                return !1;
              }),
              (f.mediaElement.dispatchEvent = function (a) {
                var b = f.mediaElement.events[a.type];
                if (b) for (var c = 0; c < b.length; c++) b[c].apply(null, [a]);
              });
            var A = void 0;
            if (null !== c) A = c;
            else if (null !== f.mediaElement.originalNode)
              switch (
                ((A = []), f.mediaElement.originalNode.nodeName.toLowerCase())
              ) {
                case "iframe":
                  A.push({
                    type: "",
                    src: f.mediaElement.originalNode.getAttribute("src"),
                  });
                  break;
                case "audio":
                case "video":
                  var B = f.mediaElement.originalNode.childNodes.length,
                    C = f.mediaElement.originalNode.getAttribute("src");
                  if (C) {
                    var D = f.mediaElement.originalNode;
                    A.push({
                      type: m.formatType(C, D.getAttribute("type")),
                      src: C,
                    });
                  }
                  for (var E = 0; B > E; E++) {
                    var F = f.mediaElement.originalNode.childNodes[E];
                    if (
                      F.nodeType === Node.ELEMENT_NODE &&
                      "source" === F.tagName.toLowerCase()
                    ) {
                      var G = F.getAttribute("src"),
                        H = m.formatType(G, F.getAttribute("type"));
                      A.push({ type: H, src: G });
                    }
                  }
              }
            return (
              A.length && (f.mediaElement.src = A),
              f.mediaElement.options.success &&
                f.mediaElement.options.success(
                  f.mediaElement,
                  f.mediaElement.originalNode
                ),
              h &&
                f.mediaElement.options.error &&
                f.mediaElement.options.error(
                  f.mediaElement,
                  f.mediaElement.originalNode
                ),
              f.mediaElement
            );
          };
        (g["default"].MediaElement = o), (c["default"] = o);
      },
      { 2: 2, 25: 25, 26: 26, 3: 3, 6: 6, 7: 7 },
    ],
    6: [
      function (a, b, c) {
        "use strict";
        function d(a) {
          return a && a.__esModule ? a : { default: a };
        }
        Object.defineProperty(c, "__esModule", { value: !0 });
        var e = a(3),
          f = d(e),
          g = {};
        (g.version = "4.0.3"),
          (g.html5media = {
            properties: [
              "volume",
              "src",
              "currentTime",
              "muted",
              "duration",
              "paused",
              "ended",
              "buffered",
              "error",
              "networkState",
              "readyState",
              "seeking",
              "seekable",
              "currentSrc",
              "preload",
              "bufferedBytes",
              "bufferedTime",
              "initialTime",
              "startOffsetTime",
              "defaultPlaybackRate",
              "playbackRate",
              "played",
              "autoplay",
              "loop",
              "controls",
            ],
            readOnlyProperties: [
              "duration",
              "paused",
              "ended",
              "buffered",
              "error",
              "networkState",
              "readyState",
              "seeking",
              "seekable",
            ],
            methods: ["load", "play", "pause", "canPlayType"],
            events: [
              "loadstart",
              "progress",
              "suspend",
              "abort",
              "error",
              "emptied",
              "stalled",
              "play",
              "pause",
              "loadedmetadata",
              "loadeddata",
              "waiting",
              "playing",
              "canplay",
              "canplaythrough",
              "seeking",
              "seeked",
              "timeupdate",
              "ended",
              "ratechange",
              "durationchange",
              "volumechange",
            ],
            mediaTypes: [
              "audio/mp3",
              "audio/ogg",
              "audio/oga",
              "audio/wav",
              "audio/x-wav",
              "audio/wave",
              "audio/x-pn-wav",
              "audio/mpeg",
              "audio/mp4",
              "video/mp4",
              "video/webm",
              "video/ogg",
            ],
          }),
          (f["default"].mejs = g),
          (c["default"] = g);
      },
      { 3: 3 },
    ],
    7: [
      function (a, b, c) {
        "use strict";
        function d(a) {
          return a && a.__esModule ? a : { default: a };
        }
        function e(a, b) {
          if (!(a instanceof b))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(c, "__esModule", { value: !0 }),
          (c.renderer = void 0);
        var f =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (a) {
                  return typeof a;
                }
              : function (a) {
                  return a &&
                    "function" == typeof Symbol &&
                    a.constructor === Symbol &&
                    a !== Symbol.prototype
                    ? "symbol"
                    : typeof a;
                },
          g = (function () {
            function a(a, b) {
              for (var c = 0; c < b.length; c++) {
                var d = b[c];
                (d.enumerable = d.enumerable || !1),
                  (d.configurable = !0),
                  "value" in d && (d.writable = !0),
                  Object.defineProperty(a, d.key, d);
              }
            }
            return function (b, c, d) {
              return c && a(b.prototype, c), d && a(b, d), b;
            };
          })(),
          h = a(6),
          i = d(h),
          j = (function () {
            function a() {
              e(this, a), (this.renderers = {}), (this.order = []);
            }
            return (
              g(a, [
                {
                  key: "add",
                  value: function (a) {
                    if (void 0 === a.name)
                      throw new TypeError(
                        "renderer must contain at least name property"
                      );
                    (this.renderers[a.name] = a), this.order.push(a.name);
                  },
                },
                {
                  key: "select",
                  value: function (a) {
                    var b =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : [],
                      c = b.length;
                    (b = b.length ? b : this.order),
                      c ||
                        !(function () {
                          var a = [/^(html5|native)/, /^flash/, /iframe$/],
                            c = function (b) {
                              for (var c = 0, d = a.length; d > c; c++)
                                if (null !== b.match(a[c])) return c;
                              return a.length;
                            };
                          b.sort(function (a, b) {
                            return c(a) - c(b);
                          });
                        })();
                    for (var d = 0, e = b.length; e > d; d++) {
                      var f = b[d],
                        g = this.renderers[f];
                      if (null !== g && void 0 !== g)
                        for (var h = 0, i = a.length; i > h; h++)
                          if (
                            "function" == typeof g.canPlayType &&
                            "string" == typeof a[h].type &&
                            g.canPlayType(a[h].type)
                          )
                            return { rendererName: g.name, src: a[h].src };
                    }
                    return null;
                  },
                },
                {
                  key: "order",
                  set: function (a) {
                    if (!Array.isArray(a))
                      throw new TypeError("order must be an array of strings.");
                    this._order = a;
                  },
                  get: function () {
                    return this._order;
                  },
                },
                {
                  key: "renderers",
                  set: function (a) {
                    if (
                      null !== a &&
                      "object" !==
                        ("undefined" == typeof a ? "undefined" : f(a))
                    )
                      throw new TypeError(
                        "renderers must be an array of objects."
                      );
                    this._renderers = a;
                  },
                  get: function () {
                    return this._renderers;
                  },
                },
              ]),
              a
            );
          })(),
          k = (c.renderer = new j());
        i["default"].Renderers = k;
      },
      { 6: 6 },
    ],
    8: [
      function (a, b, c) {
        "use strict";
        function d(a) {
          if (a && a.__esModule) return a;
          var b = {};
          if (null != a)
            for (var c in a)
              Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
          return (b["default"] = a), b;
        }
        function e(a) {
          return a && a.__esModule ? a : { default: a };
        }
        var f = a(3),
          g = e(f),
          h = a(2),
          i = e(h),
          j = a(4),
          k = e(j),
          l = a(16),
          m = e(l),
          n = a(23),
          o = d(n),
          p = a(25),
          q = a(24);
        Object.assign(l.config, {
          usePluginFullScreen: !0,
          fullscreenText: null,
        }),
          Object.assign(m["default"].prototype, {
            isFullScreen: !1,
            isNativeFullScreen: !1,
            isInIframe: !1,
            isPluginClickThroughCreated: !1,
            fullscreenMode: "",
            containerSizeTimeout: null,
            buildfullscreen: function (a, b, c, d) {
              if (a.isVideo) {
                (a.isInIframe =
                  g["default"].location !== g["default"].parent.location),
                  d.addEventListener("loadstart", function () {
                    a.detectFullscreenMode();
                  });
                var e = this,
                  f = p.isString(e.options.fullscreenText)
                    ? e.options.fullscreenText
                    : k["default"].t("mejs.fullscreen"),
                  h = i["default"].createElement("div");
                if (
                  ((h.className =
                    e.options.classPrefix +
                    "button " +
                    e.options.classPrefix +
                    "fullscreen-button"),
                  (h.innerHTML =
                    '<button type="button" aria-controls="' +
                    e.id +
                    '" title="' +
                    f +
                    '" aria-label="' +
                    f +
                    '" tabindex="0"></button>'),
                  e.addControlElement(h, "fullscreen"),
                  h.addEventListener("click", function () {
                    var b =
                      (o.HAS_TRUE_NATIVE_FULLSCREEN && o.IS_FULLSCREEN) ||
                      a.isFullScreen;
                    b ? a.exitFullScreen() : a.enterFullScreen();
                  }),
                  (a.fullscreenBtn = h),
                  e.globalBind("keydown", function (b) {
                    var c = b.which || b.keyCode || 0;
                    27 === c &&
                      ((o.HAS_TRUE_NATIVE_FULLSCREEN && o.IS_FULLSCREEN) ||
                        e.isFullScreen) &&
                      a.exitFullScreen();
                  }),
                  (e.normalHeight = 0),
                  (e.normalWidth = 0),
                  o.HAS_TRUE_NATIVE_FULLSCREEN)
                ) {
                  var j = function () {
                    a.isFullScreen &&
                      (o.isFullScreen()
                        ? ((a.isNativeFullScreen = !0), a.setControlsSize())
                        : ((a.isNativeFullScreen = !1), a.exitFullScreen()));
                  };
                  a.globalBind(o.FULLSCREEN_EVENT_NAME, j);
                }
              }
            },
            detectFullscreenMode: function () {
              var a = this,
                b =
                  null !== a.media.rendererName &&
                  null !== a.media.rendererName.match(/(native|html5)/),
                c = "";
              return (
                (c =
                  o.HAS_TRUE_NATIVE_FULLSCREEN && b
                    ? "native-native"
                    : o.HAS_TRUE_NATIVE_FULLSCREEN && !b
                    ? "plugin-native"
                    : a.usePluginFullScreen && o.SUPPORT_POINTER_EVENTS
                    ? "plugin-click"
                    : "fullwindow"),
                (a.fullscreenMode = c),
                c
              );
            },
            cleanfullscreen: function (a) {
              a.exitFullScreen();
            },
            enterFullScreen: function () {
              var a = this,
                b =
                  null !== a.media.rendererName &&
                  null !== a.media.rendererName.match(/(html5|native)/),
                c = getComputedStyle(a.container);
              if (
                o.IS_IOS &&
                o.HAS_IOS_FULLSCREEN &&
                "function" == typeof a.media.webkitEnterFullscreen
              )
                return void a.media.webkitEnterFullscreen();
              if (
                (q.addClass(
                  i["default"].documentElement,
                  a.options.classPrefix + "fullscreen"
                ),
                q.addClass(
                  a.container,
                  a.options.classPrefix + "container-fullscreen"
                ),
                (a.normalHeight = parseFloat(c.height)),
                (a.normalWidth = parseFloat(c.width)),
                "native-native" === a.fullscreenMode ||
                "plugin-native" === a.fullscreenMode
                  ? (o.requestFullScreen(a.container),
                    a.isInIframe &&
                      setTimeout(function r() {
                        if (a.isNativeFullScreen) {
                          var b = 0.002,
                            c =
                              g["default"].innerWidth ||
                              i["default"].documentElement.clientWidth ||
                              i["default"].body.clientWidth,
                            d = screen.width,
                            e = Math.abs(d - c),
                            f = d * b;
                          e > f ? a.exitFullScreen() : setTimeout(r, 500);
                        }
                      }, 1e3))
                  : "fullwindow" === a.fullscreeMode,
                (a.container.style.width = "100%"),
                (a.container.style.height = "100%"),
                (a.containerSizeTimeout = setTimeout(function () {
                  (a.container.style.width = "100%"),
                    (a.container.style.height = "100%"),
                    a.setControlsSize();
                }, 500)),
                b)
              )
                (a.node.style.width = "100%"), (a.node.style.height = "100%");
              else
                for (
                  var d = a.container.querySelectorAll(
                      "iframe, embed, object, video"
                    ),
                    e = d.length,
                    f = 0;
                  e > f;
                  f++
                )
                  (d[f].style.width = "100%"), (d[f].style.height = "100%");
              a.options.setDimensions &&
                "function" == typeof a.media.setSize &&
                a.media.setSize(screen.width, screen.height);
              for (var h = a.layers.childNodes, j = h.length, k = 0; j > k; k++)
                (h[k].style.width = "100%"), (h[k].style.height = "100%");
              a.fullscreenBtn &&
                (q.removeClass(
                  a.fullscreenBtn,
                  a.options.classPrefix + "fullscreen"
                ),
                q.addClass(
                  a.fullscreenBtn,
                  a.options.classPrefix + "unfullscreen"
                )),
                a.setControlsSize(),
                (a.isFullScreen = !0);
              var l = Math.min(
                  screen.width / a.width,
                  screen.height / a.height
                ),
                m = a.container.querySelector(
                  "." + a.options.classPrefix + "captions-text"
                );
              m &&
                ((m.style.fontSize = 100 * l + "%"),
                (m.style.lineHeight = "normal"),
                (a.container.querySelector(
                  "." + a.options.classPrefix + "captions-position"
                ).style.bottom = "45px"));
              var n = p.createEvent("enteredfullscreen", a.container);
              a.container.dispatchEvent(n);
            },
            exitFullScreen: function () {
              var a = this,
                b =
                  null !== a.media.rendererName &&
                  null !== a.media.rendererName.match(/(native|html5)/);
              if (
                (clearTimeout(a.containerSizeTimeout),
                o.HAS_TRUE_NATIVE_FULLSCREEN &&
                  (o.IS_FULLSCREEN || a.isFullScreen) &&
                  o.cancelFullScreen(),
                q.removeClass(
                  i["default"].documentElement,
                  a.options.classPrefix + "fullscreen"
                ),
                q.removeClass(
                  a.container,
                  a.options.classPrefix + "container-fullscreen"
                ),
                a.options.setDimensions)
              ) {
                if (
                  ((a.container.style.width = a.normalWidth + "px"),
                  (a.container.style.height = a.normalHeight + "px"),
                  b)
                )
                  (a.node.style.width = a.normalWidth + "px"),
                    (a.node.style.height = a.normalHeight + "px");
                else
                  for (
                    var c = a.container.querySelectorAll(
                        "iframe, embed, object, video"
                      ),
                      d = c.length,
                      e = 0;
                    d > e;
                    e++
                  )
                    (c[e].style.width = a.normalWidth + "px"),
                      (c[e].style.height = a.normalHeight + "px");
                "function" == typeof a.media.setSize &&
                  a.media.setSize(a.normalWidth, a.normalHeight);
                for (
                  var f = a.layers.childNodes, g = f.length, h = 0;
                  g > h;
                  h++
                )
                  (f[h].style.width = a.normalWidth + "px"),
                    (f[h].style.height = a.normalHeight + "px");
              }
              q.removeClass(
                a.fullscreenBtn,
                a.options.classPrefix + "unfullscreen"
              ),
                q.addClass(
                  a.fullscreenBtn,
                  a.options.classPrefix + "fullscreen"
                ),
                a.setControlsSize(),
                (a.isFullScreen = !1);
              var j = a.container.querySelector(
                "." + a.options.classPrefix + "captions-text"
              );
              j &&
                ((j.style.fontSize = ""),
                (j.style.lineHeight = ""),
                (a.container.querySelector(
                  "." + a.options.classPrefix + "captions-position"
                ).style.bottom = ""));
              var k = p.createEvent("exitedfullscreen", a.container);
              a.container.dispatchEvent(k);
            },
          });
      },
      { 16: 16, 2: 2, 23: 23, 24: 24, 25: 25, 3: 3, 4: 4 },
    ],
    9: [
      function (a, b, c) {
        "use strict";
        function d(a) {
          return a && a.__esModule ? a : { default: a };
        }
        var e = a(2),
          f = d(e),
          g = a(16),
          h = d(g),
          i = a(4),
          j = d(i),
          k = a(25),
          l = a(24);
        Object.assign(g.config, { playText: null, pauseText: null }),
          Object.assign(h["default"].prototype, {
            buildplaypause: function (a, b, c, d) {
              function e(a) {
                "play" === a
                  ? (l.removeClass(n, g.options.classPrefix + "play"),
                    l.removeClass(n, g.options.classPrefix + "replay"),
                    l.addClass(n, g.options.classPrefix + "pause"),
                    o.setAttribute("title", m),
                    o.setAttribute("aria-label", m))
                  : (l.removeClass(n, g.options.classPrefix + "pause"),
                    l.removeClass(n, g.options.classPrefix + "replay"),
                    l.addClass(n, g.options.classPrefix + "play"),
                    o.setAttribute("title", i),
                    o.setAttribute("aria-label", i));
              }
              var g = this,
                h = g.options,
                i = k.isString(h.playText)
                  ? h.playText
                  : j["default"].t("mejs.play"),
                m = k.isString(h.pauseText)
                  ? h.pauseText
                  : j["default"].t("mejs.pause"),
                n = f["default"].createElement("div");
              (n.className =
                g.options.classPrefix +
                "button " +
                g.options.classPrefix +
                "playpause-button " +
                g.options.classPrefix +
                "play"),
                (n.innerHTML =
                  '<button type="button" aria-controls="' +
                  g.id +
                  '" title="' +
                  i +
                  '" aria-label="' +
                  m +
                  '" tabindex="0"></button>'),
                n.addEventListener("click", function () {
                  d.paused ? d.play() : d.pause();
                });
              var o = n.querySelector("button");
              g.addControlElement(n, "playpause"),
                e("pse"),
                d.addEventListener("loadedmetadata", function () {
                  null === d.rendererName.match(/flash/) && e("pse");
                }),
                d.addEventListener("play", function () {
                  e("play");
                }),
                d.addEventListener("playing", function () {
                  e("play");
                }),
                d.addEventListener("pause", function () {
                  e("pse");
                }),
                d.addEventListener("ended", function () {
                  a.options.loop ||
                    (l.removeClass(n, g.options.classPrefix + "pause"),
                    l.removeClass(n, g.options.classPrefix + "play"),
                    l.addClass(n, g.options.classPrefix + "replay"),
                    o.setAttribute("title", i),
                    o.setAttribute("aria-label", i));
                });
            },
          });
      },
      { 16: 16, 2: 2, 24: 24, 25: 25, 4: 4 },
    ],
    10: [
      function (a, b, c) {
        "use strict";
        function d(a) {
          return a && a.__esModule ? a : { default: a };
        }
        var e = a(2),
          f = d(e),
          g = a(16),
          h = d(g),
          i = a(4),
          j = d(i),
          k = a(23),
          l = a(28),
          m = a(24);
        Object.assign(g.config, { enableProgressTooltip: !0 }),
          Object.assign(h["default"].prototype, {
            buildprogress: function (a, b, c, d) {
              var e = 0,
                g = !1,
                h = !1,
                i = this,
                n = a.options.autoRewind,
                o = a.options.enableProgressTooltip
                  ? '<span className="' +
                    i.options.classPrefix +
                    'time-float">' +
                    ('<span className="' +
                      i.options.classPrefix +
                      'time-float-current">00:00</span>') +
                    ('<span className="' +
                      i.options.classPrefix +
                      'time-float-corner"></span>') +
                    "</span>"
                  : "",
                p = f["default"].createElement("div");
              (p.className = i.options.classPrefix + "time-rail"),
                (p.innerHTML =
                  '<span className="' +
                  i.options.classPrefix +
                  "time-total " +
                  i.options.classPrefix +
                  'time-slider">' +
                  ('<span className="' +
                    i.options.classPrefix +
                    'time-buffering"></span>') +
                  ('<span className="' +
                    i.options.classPrefix +
                    'time-loaded"></span>') +
                  ('<span className="' +
                    i.options.classPrefix +
                    'time-current"></span>') +
                  ('<span className="' +
                    i.options.classPrefix +
                    'time-handle"></span>') +
                  ("" + o) +
                  "</span>"),
                i.addControlElement(p, "progress"),
                (b.querySelector(
                  "." + i.options.classPrefix + "time-buffering"
                ).style.display = "none"),
                (i.rail = b.querySelector(
                  "." + i.options.classPrefix + "time-rail"
                )),
                (i.total = b.querySelector(
                  "." + i.options.classPrefix + "time-total"
                )),
                (i.loaded = b.querySelector(
                  "." + i.options.classPrefix + "time-loaded"
                )),
                (i.current = b.querySelector(
                  "." + i.options.classPrefix + "time-current"
                )),
                (i.handle = b.querySelector(
                  "." + i.options.classPrefix + "time-handle"
                )),
                (i.timefloat = b.querySelector(
                  "." + i.options.classPrefix + "time-float"
                )),
                (i.timefloatcurrent = b.querySelector(
                  "." + i.options.classPrefix + "time-float-current"
                )),
                (i.slider = b.querySelector(
                  "." + i.options.classPrefix + "time-slider"
                )),
                (i.newTime = 0),
                (i.forcedHandlePause = !1);
              var q = function (b) {
                  var c = getComputedStyle(i.total),
                    e = m.offset(i.total),
                    f = parseFloat(c.width),
                    h = 0,
                    j = 0,
                    n = void 0;
                  (n =
                    b.originalEvent && b.originalEvent.changedTouches
                      ? b.originalEvent.changedTouches[0].pageX
                      : b.changedTouches
                      ? b.changedTouches[0].pageX
                      : b.pageX),
                    d.duration &&
                      (n < e.left
                        ? (n = e.left)
                        : n > f + e.left && (n = f + e.left),
                      (j = n - e.left),
                      (h = j / f),
                      (i.newTime = 0.02 >= h ? 0 : h * d.duration),
                      g &&
                        null !== d.currentTime &&
                        i.newTime.toFixed(4) !== d.currentTime.toFixed(4) &&
                        (i.setCurrentRailHandle(i.newTime),
                        i.updateCurrent(i.newTime)),
                      k.IS_IOS ||
                        k.IS_ANDROID ||
                        !i.timefloat ||
                        ((i.timefloat.style.left = j + "px"),
                        (i.timefloatcurrent.innerHTML = l.secondsToTimeCode(
                          i.newTime,
                          a.options.alwaysShowHours,
                          a.options.showTimecodeFrameCount,
                          a.options.framesPerSecond,
                          a.options.secondsDecimalLength
                        )),
                        (i.timefloat.style.display = "block")));
                },
                r = function () {
                  var b = d.currentTime,
                    c = j["default"].t("mejs.time-slider"),
                    e = l.secondsToTimeCode(
                      b,
                      a.options.alwaysShowHours,
                      a.options.showTimecodeFrameCount,
                      a.options.framesPerSecond,
                      a.options.secondsDecimalLength
                    ),
                    f = d.duration;
                  i.slider.setAttribute("role", "slider"),
                    (i.slider.tabIndex = 0),
                    d.paused
                      ? (i.slider.setAttribute("aria-label", c),
                        i.slider.setAttribute("aria-valuemin", 0),
                        i.slider.setAttribute("aria-valuemax", f),
                        i.slider.setAttribute("aria-valuenow", b),
                        i.slider.setAttribute("aria-valuetext", e))
                      : (i.slider.removeAttribute("aria-label"),
                        i.slider.removeAttribute("aria-valuemin"),
                        i.slider.removeAttribute("aria-valuemax"),
                        i.slider.removeAttribute("aria-valuenow"),
                        i.slider.removeAttribute("aria-valuetext"));
                },
                s = function () {
                  var a = new Date();
                  a - e >= 1e3 && d.play();
                },
                t = function () {
                  g &&
                    null !== d.currentTime &&
                    i.newTime.toFixed(4) !== d.currentTime.toFixed(4) &&
                    (d.setCurrentTime(i.newTime),
                    a.setCurrentRail(),
                    i.updateCurrent(i.newTime)),
                    i.forcedHandlePause && i.media.play(),
                    (i.forcedHandlePause = !1);
                };
              i.slider.addEventListener("focus", function () {
                a.options.autoRewind = !1;
              }),
                i.slider.addEventListener("blur", function () {
                  a.options.autoRewind = n;
                }),
                i.slider.addEventListener("keydown", function (b) {
                  if (
                    (new Date() - e >= 1e3 && (h = d.paused),
                    i.options.keyActions.length)
                  ) {
                    var c = b.which || b.keyCode || 0,
                      f = d.duration,
                      g = a.options.defaultSeekForwardInterval(d),
                      j = a.options.defaultSeekBackwardInterval(d),
                      l = d.currentTime;
                    switch (c) {
                      case 37:
                      case 40:
                        d.duration !== 1 / 0 && (l -= j);
                        break;
                      case 39:
                      case 38:
                        d.duration !== 1 / 0 && (l += g);
                        break;
                      case 36:
                        l = 0;
                        break;
                      case 35:
                        l = f;
                        break;
                      case 32:
                        return void (
                          k.IS_FIREFOX || (d.paused ? d.play() : d.pause())
                        );
                      case 13:
                        return void (d.paused ? d.play() : d.pause());
                      default:
                        return;
                    }
                    (l = 0 > l ? 0 : l >= f ? f : Math.floor(l)),
                      (e = new Date()),
                      h || d.pause(),
                      l < d.duration && !h && setTimeout(s, 1100),
                      d.setCurrentTime(l),
                      b.preventDefault(),
                      b.stopPropagation();
                  }
                });
              var u = ["mousedown", "touchstart"];
              i.slider.addEventListener("dragstart", function () {
                return !1;
              });
              for (var v = 0, w = u.length; w > v; v++)
                i.slider.addEventListener(u[v], function (a) {
                  (i.forcedHandlePause = !1),
                    d.duration !== 1 / 0 &&
                      (1 === a.which || 0 === a.which) &&
                      (d.paused ||
                        (i.media.pause(), (i.forcedHandlePause = !0)),
                      (g = !0),
                      q(a),
                      i.globalBind("mousemove.dur touchmove.dur", function (a) {
                        var b = a.target;
                        (b === i.slider ||
                          b.closest(
                            "." + i.options.classPrefix + "time-slider"
                          )) &&
                          q(a);
                      }),
                      i.globalBind("mouseup.dur touchend.dur", function () {
                        t(),
                          (g = !1),
                          i.timefloat && (i.timefloat.style.display = "none"),
                          i.globalUnbind(
                            "mousemove.dur touchmove.dur mouseup.dur touchend.dur"
                          );
                      }));
                });
              i.slider.addEventListener("mouseenter", function (a) {
                a.target === i.slider &&
                  d.duration !== 1 / 0 &&
                  (i.globalBind("mousemove.dur", function (a) {
                    var b = a.target;
                    (b === i.slider ||
                      b.closest("." + i.options.classPrefix + "time-slider")) &&
                      q(a);
                  }),
                  !i.timefloat ||
                    k.IS_IOS ||
                    k.IS_ANDROID ||
                    (i.timefloat.style.display = "block"));
              }),
                i.slider.addEventListener("mouseleave", function () {
                  d.duration !== 1 / 0 &&
                    (g ||
                      (i.globalUnbind("mousemove.dur"),
                      i.timefloat && (i.timefloat.style.display = "none")));
                }),
                d.addEventListener("progress", function (c) {
                  var e = b.querySelector(
                    "." + i.options.classPrefix + "broadcast"
                  );
                  if (d.duration !== 1 / 0)
                    e && ((i.slider.style.display = ""), e.remove()),
                      a.setProgressRail(c),
                      i.forcedHandlePause || a.setCurrentRail(c);
                  else if (!e) {
                    var g = f["default"].createElement("span");
                    (g.className = i.options.classPrefix + "broadcast"),
                      (g.innerText = j["default"].t("mejs.live-broadcast")),
                      (i.slider.style.display = "none");
                  }
                }),
                d.addEventListener("timeupdate", function (c) {
                  var e = b.querySelector(
                    "." + i.options.classPrefix + "broadcast"
                  );
                  if (d.duration !== 1 / 0)
                    e && ((i.slider.style.display = ""), e.remove()),
                      a.setProgressRail(c),
                      i.forcedHandlePause || a.setCurrentRail(c),
                      r(c);
                  else if (!e) {
                    var g = f["default"].createElement("span");
                    (g.className = i.options.classPrefix + "broadcast"),
                      (g.innerText = j["default"].t("mejs.live-broadcast")),
                      b
                        .querySelector(
                          "." + i.options.classPrefix + "time-rail"
                        )
                        .appendChild(g),
                      (i.slider.style.display = "none");
                  }
                }),
                i.container.addEventListener("controlsresize", function (b) {
                  d.duration !== 1 / 0 &&
                    (a.setProgressRail(b),
                    i.forcedHandlePause || a.setCurrentRail(b));
                });
            },
            setProgressRail: function (a) {
              var b = null,
                c = this,
                d = void 0 !== a ? a.target : c.media;
              d &&
              d.buffered &&
              d.buffered.length > 0 &&
              d.buffered.end &&
              d.duration
                ? (b = d.buffered.end(d.buffered.length - 1) / d.duration)
                : d &&
                  void 0 !== d.bytesTotal &&
                  d.bytesTotal > 0 &&
                  void 0 !== d.bufferedBytes
                ? (b = d.bufferedBytes / d.bytesTotal)
                : a &&
                  a.lengthComputable &&
                  0 !== a.total &&
                  (b = a.loaded / a.total),
                null !== b &&
                  ((b = Math.min(1, Math.max(0, b))),
                  c.loaded &&
                    c.total &&
                    (c.loaded.style.width = 100 * b + "%"));
            },
            setCurrentRailHandle: function (a) {
              var b = this;
              b.setCurrentRailMain(b, a);
            },
            setCurrentRail: function () {
              var a = this;
              a.setCurrentRailMain(a);
            },
            setCurrentRailMain: function (a, b) {
              if (void 0 !== a.media.currentTime && a.media.duration) {
                var c = "undefined" == typeof b ? a.media.currentTime : b;
                if (a.total && a.handle) {
                  var d = Math.round(
                      (parseFloat(getComputedStyle(a.total).width) * c) /
                        a.media.duration
                    ),
                    e = d - Math.round(a.handle.offsetWidth / 2);
                  (d = (c / a.media.duration) * 100),
                    (a.current.style.width = d + "%"),
                    (a.handle.style.left = e + "px");
                }
              }
            },
          });
      },
      { 16: 16, 2: 2, 23: 23, 24: 24, 28: 28, 4: 4 },
    ],
    11: [
      function (a, b, c) {
        "use strict";
        function d(a) {
          return a && a.__esModule ? a : { default: a };
        }
        var e = a(2),
          f = d(e),
          g = a(16),
          h = d(g),
          i = a(28),
          j = a(24);
        Object.assign(g.config, {
          duration: 0,
          timeAndDurationSeparator: "<span> | </span>",
        }),
          Object.assign(h["default"].prototype, {
            buildcurrent: function (a, b, c, d) {
              var e = this,
                g = f["default"].createElement("div");
              (g.className = e.options.classPrefix + "time"),
                g.setAttribute("role", "timer"),
                g.setAttribute("aria-live", "off"),
                (g.innerHTML =
                  '<span className="' +
                  e.options.classPrefix +
                  'currenttime">' +
                  i.secondsToTimeCode(
                    0,
                    a.options.alwaysShowHours,
                    a.options.showTimecodeFrameCount,
                    a.options.framesPerSecond,
                    a.options.secondsDecimalLength
                  ) +
                  "</span>"),
                e.addControlElement(g, "current"),
                d.addEventListener("timeupdate", function () {
                  e.controlsAreVisible && a.updateCurrent();
                });
            },
            buildduration: function (a, b, c, d) {
              var e = this,
                g = b.lastChild.querySelector(
                  "." + e.options.classPrefix + "currenttime"
                );
              if (g)
                b.querySelector(
                  "." + e.options.classPrefix + "time"
                ).innerHTML +=
                  e.options.timeAndDurationSeparator +
                  '<span className="' +
                  e.options.classPrefix +
                  'duration">' +
                  (i.secondsToTimeCode(
                    e.options.duration,
                    e.options.alwaysShowHours,
                    e.options.showTimecodeFrameCount,
                    e.options.framesPerSecond,
                    e.options.secondsDecimalLength
                  ) +
                    "</span>");
              else {
                b.querySelector("." + e.options.classPrefix + "currenttime") &&
                  j.addClass(
                    b.querySelector("." + e.options.classPrefix + "currenttime")
                      .parentNode,
                    e.options.classPrefix + "currenttime-container"
                  );
                var h = f["default"].createElement("div");
                (h.className =
                  e.options.classPrefix +
                  "time " +
                  e.options.classPrefix +
                  "duration-container"),
                  (h.innerHTML =
                    '<span className="' +
                    e.options.classPrefix +
                    'duration">' +
                    (i.secondsToTimeCode(
                      e.options.duration,
                      e.options.alwaysShowHours,
                      e.options.showTimecodeFrameCount,
                      e.options.framesPerSecond,
                      e.options.secondsDecimalLength
                    ) +
                      "</span>")),
                  e.addControlElement(h, "duration");
              }
              d.addEventListener("timeupdate", function () {
                e.controlsAreVisible && a.updateDuration();
              });
            },
            updateCurrent: function () {
              var a = this,
                b = a.media.currentTime;
              isNaN(b) && (b = 0),
                a.controls.querySelector(
                  "." + a.options.classPrefix + "currenttime"
                ) &&
                  (a.controls.querySelector(
                    "." + a.options.classPrefix + "currenttime"
                  ).innerText = i.secondsToTimeCode(
                    b,
                    a.options.alwaysShowHours,
                    a.options.showTimecodeFrameCount,
                    a.options.framesPerSecond,
                    a.options.secondsDecimalLength
                  ));
            },
            updateDuration: function () {
              var a = this,
                b = a.media.duration;
              (isNaN(b) || b === 1 / 0 || 0 > b) &&
                (a.media.duration = a.options.duration = b = 0),
                a.options.duration > 0 && (b = a.options.duration);
              var c = i.secondsToTimeCode(
                b,
                a.options.alwaysShowHours,
                a.options.showTimecodeFrameCount,
                a.options.framesPerSecond,
                a.options.secondsDecimalLength
              );
              c.length > 5 &&
                j.toggleClass(
                  a.container,
                  a.options.classPrefix + "long-video"
                ),
                a.controls.querySelector(
                  "." + a.options.classPrefix + "duration"
                ) &&
                  b > 0 &&
                  (a.controls.querySelector(
                    "." + a.options.classPrefix + "duration"
                  ).innerHTML = c);
            },
          });
      },
      { 16: 16, 2: 2, 24: 24, 28: 28 },
    ],
    12: [
      function (a, b, c) {
        "use strict";
        function d(a) {
          return a && a.__esModule ? a : { default: a };
        }
        var e = a(2),
          f = d(e),
          g = a(6),
          h = d(g),
          i = a(4),
          j = d(i),
          k = a(16),
          l = d(k),
          m = a(28),
          n = a(25),
          o = a(24);
        Object.assign(k.config, {
          startLanguage: "",
          tracksText: null,
          chaptersText: null,
          tracksAriaLive: !1,
          hideCaptionsButtonWhenEmpty: !0,
          toggleCaptionsButtonWhenOnlyOne: !1,
          slidesSelector: "",
        }),
          Object.assign(l["default"].prototype, {
            hasChapters: !1,
            buildtracks: function (a, b, c, d) {
              if (
                a.tracks.length ||
                (a.trackFiles && 0 !== !a.trackFiles.length)
              ) {
                var e = this,
                  g = e.options.tracksAriaLive
                    ? ' role="log" aria-live="assertive" aria-atomic="false"'
                    : "",
                  h = n.isString(e.options.tracksText)
                    ? e.options.tracksText
                    : j["default"].t("mejs.captions-subtitles"),
                  i = n.isString(e.options.chaptersText)
                    ? e.options.chaptersText
                    : j["default"].t("mejs.captions-chapters"),
                  k =
                    null === a.trackFiles
                      ? a.tracks.length
                      : a.trackFiles.length;
                if (e.domNode.textTracks)
                  for (var l = e.domNode.textTracks.length - 1; l >= 0; l--)
                    e.domNode.textTracks[l].mode = "hidden";
                e.cleartracks(a),
                  (a.captions = f["default"].createElement("div")),
                  (a.captions.className =
                    e.options.classPrefix +
                    "captions-layer " +
                    e.options.classPrefix +
                    "layer"),
                  (a.captions.innerHTML =
                    '<div className="' +
                    e.options.classPrefix +
                    "captions-position " +
                    e.options.classPrefix +
                    'captions-position-hover"' +
                    g +
                    ">" +
                    ('<span className="' +
                      e.options.classPrefix +
                      'captions-text"></span>') +
                    "</div>"),
                  (a.captions.style.display = "none"),
                  c.insertBefore(a.captions, c.firstChild),
                  (a.captionsText = a.captions.querySelector(
                    "." + e.options.classPrefix + "captions-text"
                  )),
                  (a.captionsButton = f["default"].createElement("div")),
                  (a.captionsButton.className =
                    e.options.classPrefix +
                    "button " +
                    e.options.classPrefix +
                    "captions-button"),
                  (a.captionsButton.innerHTML =
                    '<button type="button" aria-controls="' +
                    e.id +
                    '" title="' +
                    h +
                    '" aria-label="' +
                    h +
                    '" tabindex="0"></button>' +
                    ('<div className="' +
                      e.options.classPrefix +
                      "captions-selector " +
                      e.options.classPrefix +
                      'offscreen">') +
                    ('<ul className="' +
                      e.options.classPrefix +
                      'captions-selector-list">') +
                    ('<li className="' +
                      e.options.classPrefix +
                      'captions-selector-list-item">') +
                    ('<input type="radio" className="' +
                      e.options.classPrefix +
                      'captions-selector-input" ') +
                    ('name="' +
                      a.id +
                      '_captions" id="' +
                      a.id +
                      '_captions_none" ') +
                    'value="none" checked disabled>' +
                    ('<label className="' +
                      e.options.classPrefix +
                      "captions-selector-label ") +
                    (e.options.classPrefix + 'captions-selected" ') +
                    ('for="' +
                      a.id +
                      '_captions_none">' +
                      j["default"].t("mejs.none") +
                      "</label>") +
                    "</li></ul></div>"),
                  e.addControlElement(a.captionsButton, "tracks"),
                  (a.captionsButton.querySelector(
                    "." + e.options.classPrefix + "captions-selector-list-item"
                  ).disabled = !1),
                  (a.chaptersButton = f["default"].createElement("div")),
                  (a.chaptersButton.className =
                    e.options.classPrefix +
                    "button " +
                    e.options.classPrefix +
                    "chapters-button"),
                  (a.chaptersButton.innerHTML =
                    '<button type="button" aria-controls="' +
                    e.id +
                    '" title="' +
                    i +
                    '" aria-label="' +
                    i +
                    '" tabindex="0"></button>' +
                    ('<div className="' +
                      e.options.classPrefix +
                      "chapters-selector " +
                      e.options.classPrefix +
                      'offscreen">') +
                    ('<ul className="' +
                      e.options.classPrefix +
                      'chapters-selector-list"></ul>') +
                    "</div>");
                for (var m = 0, p = 0; k > p; p++) {
                  var q = a.tracks[p].kind;
                  "subtitles" === q || "captions" === q
                    ? m++
                    : "chapters" !== q ||
                      b.querySelector(
                        "." + e.options.classPrefix + "chapter-selector"
                      ) ||
                      a.captionsButton.parentNode.insertBefore(
                        a.chaptersButton,
                        a.captionsButton
                      );
                }
                (a.trackToLoad = -1),
                  (a.selectedTrack = null),
                  (a.isLoadingTrack = !1);
                for (var r = 0; k > r; r++) {
                  var s = a.tracks[r].kind;
                  ("subtitles" === s || "captions" === s) &&
                    a.addTrackButton(
                      a.tracks[r].trackId,
                      a.tracks[r].srclang,
                      a.tracks[r].label
                    );
                }
                a.loadNextTrack();
                var t = ["mouseenter", "focusin"],
                  u = ["mouseleave", "focusout"];
                if (e.options.toggleCaptionsButtonWhenOnlyOne && 1 === m)
                  a.captionsButton.addEventListener("click", function () {
                    var b = "none";
                    null === a.selectedTrack && (b = a.tracks[0].trackId),
                      a.setTrack(b);
                  });
                else {
                  for (
                    var v = a.captionsButton.querySelectorAll(
                        "." + e.options.classPrefix + "captions-selector-label"
                      ),
                      w = a.captionsButton.querySelectorAll(
                        "input[type=radio]"
                      ),
                      x = 0,
                      y = t.length;
                    y > x;
                    x++
                  )
                    a.captionsButton.addEventListener(t[x], function () {
                      o.removeClass(
                        this.querySelector(
                          "." + e.options.classPrefix + "captions-selector"
                        ),
                        e.options.classPrefix + "offscreen"
                      );
                    });
                  for (var z = 0, A = u.length; A > z; z++)
                    a.captionsButton.addEventListener(u[z], function () {
                      o.addClass(
                        this.querySelector(
                          "." + e.options.classPrefix + "captions-selector"
                        ),
                        e.options.classPrefix + "offscreen"
                      );
                    });
                  for (var B = 0, C = w.length; C > B; B++)
                    w[B].addEventListener("click", function () {
                      a.setTrack(this.value);
                    });
                  for (var D = 0, E = v.length; E > D; D++)
                    v[D].addEventListener("click", function () {
                      var a = o.siblings(this, function (a) {
                          return "INPUT" === a.tagName;
                        })[0],
                        b = n.createEvent("click", a);
                      a.dispatchEvent(b);
                    });
                  a.captionsButton.addEventListener("keydown", function (a) {
                    a.stopPropagation();
                  });
                }
                for (var F = 0, G = t.length; G > F; F++)
                  a.chaptersButton.addEventListener(t[F], function () {
                    this.querySelector(
                      "." + e.options.classPrefix + "chapters-selector-list"
                    ).childNodes.length &&
                      o.removeClass(
                        this.querySelector(
                          "." + e.options.classPrefix + "chapters-selector"
                        ),
                        e.options.classPrefix + "offscreen"
                      );
                  });
                for (var H = 0, I = u.length; I > H; H++)
                  a.chaptersButton.addEventListener(u[H], function () {
                    o.addClass(
                      this.querySelector(
                        "." + e.options.classPrefix + "chapters-selector"
                      ),
                      e.options.classPrefix + "offscreen"
                    );
                  });
                a.chaptersButton.addEventListener("keydown", function (a) {
                  a.stopPropagation();
                }),
                  a.options.alwaysShowControls
                    ? o.addClass(
                        a.container.querySelector(
                          "." + e.options.classPrefix + "captions-position"
                        ),
                        e.options.classPrefix + "captions-position-hover"
                      )
                    : (a.container.addEventListener(
                        "controlsshown",
                        function () {
                          o.addClass(
                            a.container.querySelector(
                              "." + e.options.classPrefix + "captions-position"
                            ),
                            e.options.classPrefix + "captions-position-hover"
                          );
                        }
                      ),
                      a.container.addEventListener(
                        "controlshidden",
                        function () {
                          d.paused ||
                            o.removeClass(
                              a.container.querySelector(
                                "." +
                                  e.options.classPrefix +
                                  "captions-position"
                              ),
                              e.options.classPrefix + "captions-position-hover"
                            );
                        }
                      )),
                  d.addEventListener("timeupdate", function () {
                    a.displayCaptions();
                  }),
                  "" !== a.options.slidesSelector &&
                    ((a.slidesContainer = f["default"].querySelectorAll(
                      a.options.slidesSelector
                    )),
                    d.addEventListener("timeupdate", function () {
                      a.displaySlides();
                    }));
              }
            },
            cleartracks: function (a) {
              a &&
                (a.captions && a.captions.remove(),
                a.chapters && a.chapters.remove(),
                a.captionsText && a.captionsText.remove(),
                a.captionsButton && a.captionsButton.remove(),
                a.chaptersButton && a.chaptersButton.remove());
            },
            rebuildtracks: function () {
              var a = this;
              a.findTracks(), a.buildtracks(a, a.controls, a.layers, a.media);
            },
            findTracks: function () {
              var a = this,
                b =
                  null === a.trackFiles
                    ? a.node.querySelectorAll("track")
                    : a.trackFiles,
                c = b.length;
              a.tracks = [];
              for (var d = 0; c > d; d++) {
                var e = b[d],
                  f = e.getAttribute("srclang").toLowerCase() || "",
                  g =
                    a.id +
                    "_track_" +
                    d +
                    "_" +
                    e.getAttribute("kind") +
                    "_" +
                    f;
                a.tracks.push({
                  trackId: g,
                  srclang: f,
                  src: e.getAttribute("src"),
                  kind: e.getAttribute("kind"),
                  label: e.getAttribute("label") || "",
                  entries: [],
                  isLoaded: !1,
                });
              }
            },
            setTrack: function (a) {
              for (
                var b = this,
                  c = b.captionsButton.querySelectorAll('input[type="radio"]'),
                  d = b.captionsButton.querySelectorAll(
                    "." + b.options.classPrefix + "captions-selected"
                  ),
                  e = b.captionsButton.querySelector(
                    'input[value="' + a + '"]'
                  ),
                  f = 0,
                  g = c.length;
                g > f;
                f++
              )
                c[f].checked = !1;
              for (var h = 0, i = d.length; i > h; h++)
                o.removeClass(
                  d[h],
                  b.options.classPrefix + "captions-selected"
                );
              e.checked = !0;
              for (
                var j = o.siblings(e, function (a) {
                    return o.hasClass(
                      a,
                      b.options.classPrefix + "captions-selector-label"
                    );
                  }),
                  k = 0,
                  l = j.length;
                l > k;
                k++
              )
                o.addClass(j[k], b.options.classPrefix + "captions-selected");
              if ("none" === a)
                (b.selectedTrack = null),
                  o.removeClass(
                    b.captionsButton,
                    b.options.classPrefix + "captions-enabled"
                  );
              else
                for (var m = 0, p = b.tracks.length; p > m; m++) {
                  var q = b.tracks[m];
                  if (q.trackId === a) {
                    null === b.selectedTrack &&
                      o.addClass(
                        b.captionsButton,
                        b.options.classPrefix + "captions-enabled"
                      ),
                      (b.selectedTrack = q),
                      b.captions.setAttribute("lang", b.selectedTrack.srclang),
                      b.displayCaptions();
                    break;
                  }
                }
              var r = n.createEvent("captionschange", b.media);
              (r.detail.caption = b.selectedTrack), b.media.dispatchEvent(r);
            },
            loadNextTrack: function () {
              var a = this;
              a.trackToLoad++,
                a.trackToLoad < a.tracks.length
                  ? ((a.isLoadingTrack = !0), a.loadTrack(a.trackToLoad))
                  : ((a.isLoadingTrack = !1), a.checkForTracks());
            },
            loadTrack: function (a) {
              var b = this,
                c = b.tracks[a];
              void 0 === c ||
                (void 0 === c.src && "" === c.src) ||
                o.ajax(
                  c.src,
                  "text",
                  function (a) {
                    (c.entries =
                      "string" == typeof a && /<tt\s+xml/gi.exec(a)
                        ? h["default"].TrackFormatParser.dfxp.parse(a)
                        : h["default"].TrackFormatParser.webvtt.parse(a)),
                      (c.isLoaded = !0),
                      b.enableTrackButton(c),
                      b.loadNextTrack(),
                      "slides" === c.kind
                        ? b.setupSlides(c)
                        : "chapters" !== c.kind ||
                          b.hasChapters ||
                          (b.drawChapters(c), (b.hasChapters = !0));
                  },
                  function () {
                    b.removeTrackButton(c.trackId), b.loadNextTrack();
                  }
                );
            },
            enableTrackButton: function (a) {
              var b = this,
                c = a.srclang,
                d = f["default"].getElementById("" + a.trackId);
              if (d) {
                var e = a.label;
                "" === e &&
                  (e = j["default"].t(h["default"].language.codes[c]) || c),
                  (d.disabled = !1);
                for (
                  var g = o.siblings(d, function (a) {
                      return o.hasClass(
                        a,
                        b.options.classPrefix + "captions-selector-label"
                      );
                    }),
                    i = 0,
                    k = g.length;
                  k > i;
                  i++
                )
                  g[i].innerHTML = e;
                if (b.options.startLanguage === c) {
                  d.checked = !0;
                  var l = n.createEvent("click", d);
                  d.dispatchEvent(l);
                }
              }
            },
            removeTrackButton: function (a) {
              var b = f["default"].getElementById("" + a);
              if (b) {
                var c = b.closest("li");
                c && c.remove();
              }
            },
            addTrackButton: function (a, b, c) {
              var d = this;
              "" === c &&
                (c = j["default"].t(h["default"].language.codes[b]) || b),
                (d.captionsButton.querySelector("ul").innerHTML +=
                  '<li className="' +
                  d.options.classPrefix +
                  'captions-selector-list-item">' +
                  ('<input type="radio" className="' +
                    d.options.classPrefix +
                    'captions-selector-input" ') +
                  ('name="' +
                    d.id +
                    '_captions" id="' +
                    a +
                    '" value="' +
                    a +
                    '" disabled>') +
                  ('<label className="' +
                    d.options.classPrefix +
                    'captions-selector-label">' +
                    c +
                    " (loading)</label>") +
                  "</li>");
            },
            checkForTracks: function () {
              var a = this,
                b = !1;
              if (a.options.hideCaptionsButtonWhenEmpty) {
                for (var c = 0, d = a.tracks.length; d > c; c++) {
                  var e = a.tracks[c].kind;
                  if (
                    ("subtitles" === e || "captions" === e) &&
                    a.tracks[c].isLoaded
                  ) {
                    b = !0;
                    break;
                  }
                }
                (a.captionsButton.style.display = b ? "" : "none"),
                  a.setControlsSize();
              }
            },
            displayCaptions: function () {
              if (void 0 !== this.tracks) {
                var a = this,
                  b = a.selectedTrack,
                  c = function (a) {
                    var b = f["default"].createElement("div");
                    b.innerHTML = a;
                    for (
                      var c = b.getElementsByTagName("script"), d = c.length;
                      d--;

                    )
                      c[d].remove();
                    for (
                      var e = b.getElementsByTagName("*"), g = 0, h = e.length;
                      h > g;
                      g++
                    )
                      for (
                        var i = e[g].attributes,
                          j = Array.prototype.slice.call(i),
                          k = 0,
                          l = j.length;
                        l > k;
                        k++
                      )
                        j[k].name.startsWith("on") ||
                        j[k].value.startsWith("javascript")
                          ? e[g].remove()
                          : "style" === j[k].name &&
                            e[g].removeAttribute(j[k].name);
                    return b.innerHTML;
                  };
                if (null !== b && b.isLoaded) {
                  var d = a.searchTrackPosition(b.entries, a.media.currentTime);
                  if (d > -1)
                    return (
                      (a.captionsText.innerHTML = c(b.entries[d].text)),
                      (a.captionsText.className =
                        a.options.classPrefix +
                        "captions-text " +
                        (b.entries[d].identifier || "")),
                      (a.captions.style.display = ""),
                      void (a.captions.style.height = "0px")
                    );
                  a.captions.style.display = "none";
                } else a.captions.style.display = "none";
              }
            },
            setupSlides: function (a) {
              var b = this;
              (b.slides = a),
                (b.slides.entries.imgs = [b.slides.entries.length]),
                b.showSlide(0);
            },
            showSlide: function (a) {
              var b = this,
                c = this;
              if (void 0 !== c.tracks && void 0 !== c.slidesContainer) {
                var d = c.slides.entries[a].text,
                  e = c.slides.entries[a].imgs;
                void 0 === e || void 0 === e.fadeIn
                  ? !(function () {
                      var g = f["default"].createElement("img");
                      (g.src = d),
                        g.addEventListener("load", function () {
                          var a = b,
                            d = o.siblings(a, function (a) {
                              return d(a);
                            });
                          (a.style.display = "none"),
                            (c.slidesContainer.innerHTML += a.innerHTML),
                            o.fadeIn(c.slidesContainer.querySelector(g));
                          for (var e = 0, f = d.length; f > e; e++)
                            o.fadeOut(d[e], 400);
                        }),
                        (c.slides.entries[a].imgs = e = g);
                    })()
                  : o.visible(e) ||
                    !(function () {
                      var a = o.siblings(self, function (b) {
                        return a(b);
                      });
                      o.fadeIn(c.slidesContainer.querySelector(e));
                      for (var b = 0, d = a.length; d > b; b++) o.fadeOut(a[b]);
                    })();
              }
            },
            displaySlides: function () {
              var a = this;
              if (void 0 !== this.slides) {
                var b = a.slides,
                  c = a.searchTrackPosition(b.entries, a.media.currentTime);
                return c > -1 ? void a.showSlide(c) : void 0;
              }
            },
            drawChapters: function (a) {
              var b = this,
                c = a.entries.length;
              if (c) {
                b.chaptersButton.querySelector("ul").innerHTML = "";
                for (var d = 0; c > d; d++)
                  b.chaptersButton.querySelector("ul").innerHTML +=
                    '<li className="' +
                    b.options.classPrefix +
                    'chapters-selector-list-item" role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="false">' +
                    ('<input type="radio" className="' +
                      b.options.classPrefix +
                      'captions-selector-input" ') +
                    ('name="' +
                      b.id +
                      '_chapters" value="' +
                      a.entries[d].start +
                      '" disabled>') +
                    ('<label className="' +
                      b.options.classPrefix +
                      'chapters-selector-label">' +
                      a.entries[d].text +
                      "</label>") +
                    "</li>";
                for (
                  var e = b.chaptersButton.querySelectorAll(
                      'input[type="radio"]'
                    ),
                    f = b.chaptersButton.querySelectorAll(
                      "." + b.options.classPrefix + "chapters-selector-label"
                    ),
                    g = 0,
                    h = e.length;
                  h > g;
                  g++
                )
                  (e[g].disabled = !1),
                    (e[g].checked = !1),
                    e[g].addEventListener("click", function () {
                      var a = this,
                        c = b.chaptersButton.querySelectorAll("li"),
                        d = o.siblings(a, function (a) {
                          return o.hasClass(
                            a,
                            b.options.classPrefix + "chapters-selector-label"
                          );
                        })[0];
                      (a.checked = !0),
                        a.parentNode.setAttribute("aria-checked", !0),
                        o.addClass(
                          d,
                          b.options.classPrefix + "chapters-selected"
                        ),
                        o.removeClass(
                          b.chaptersButton.querySelector(
                            "." + b.options.classPrefix + "chapters-selected"
                          ),
                          b.options.classPrefix + "chapters-selected"
                        );
                      for (var e = 0, f = c.length; f > e; e++)
                        c[e].setAttribute("aria-checked", !1);
                      b.media.setCurrentTime(parseFloat(a.value)),
                        b.media.paused && b.media.play();
                    });
                for (var i = 0, j = f.length; j > i; i++)
                  f[i].addEventListener("click", function () {
                    var a = o.siblings(this, function (a) {
                        return "INPUT" === a.tagName;
                      })[0],
                      b = n.createEvent("click", a);
                    a.dispatchEvent(b);
                  });
              }
            },
            searchTrackPosition: function (a, b) {
              for (
                var c = 0, d = a.length - 1, e = void 0, f = void 0, g = void 0;
                d >= c;

              ) {
                if (
                  ((e = (c + d) >> 1),
                  (f = a[e].start),
                  (g = a[e].stop),
                  b >= f && g > b)
                )
                  return e;
                b > f ? (c = e + 1) : f > b && (d = e - 1);
              }
              return -1;
            },
          }),
          (h["default"].language = {
            codes: {
              af: "mejs.afrikaans",
              sq: "mejs.albanian",
              ar: "mejs.arabic",
              be: "mejs.belarusian",
              bg: "mejs.bulgarian",
              ca: "mejs.catalan",
              zh: "mejs.chinese",
              "zh-cn": "mejs.chinese-simplified",
              "zh-tw": "mejs.chines-traditional",
              hr: "mejs.croatian",
              cs: "mejs.czech",
              da: "mejs.danish",
              nl: "mejs.dutch",
              en: "mejs.english",
              et: "mejs.estonian",
              fl: "mejs.filipino",
              fi: "mejs.finnish",
              fr: "mejs.french",
              gl: "mejs.galician",
              de: "mejs.german",
              el: "mejs.greek",
              ht: "mejs.haitian-creole",
              iw: "mejs.hebrew",
              hi: "mejs.hindi",
              hu: "mejs.hungarian",
              is: "mejs.icelandic",
              id: "mejs.indonesian",
              ga: "mejs.irish",
              it: "mejs.italian",
              ja: "mejs.japanese",
              ko: "mejs.korean",
              lv: "mejs.latvian",
              lt: "mejs.lithuanian",
              mk: "mejs.macedonian",
              ms: "mejs.malay",
              mt: "mejs.maltese",
              no: "mejs.norwegian",
              fa: "mejs.persian",
              pl: "mejs.polish",
              pt: "mejs.portuguese",
              ro: "mejs.romanian",
              ru: "mejs.russian",
              sr: "mejs.serbian",
              sk: "mejs.slovak",
              sl: "mejs.slovenian",
              es: "mejs.spanish",
              sw: "mejs.swahili",
              sv: "mejs.swedish",
              tl: "mejs.tagalog",
              th: "mejs.thai",
              tr: "mejs.turkish",
              uk: "mejs.ukrainian",
              vi: "mejs.vietnamese",
              cy: "mejs.welsh",
              yi: "mejs.yiddish",
            },
          }),
          (h["default"].TrackFormatParser = {
            webvtt: {
              pattern: /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
              parse: function (a) {
                for (
                  var b = a.split(/\r?\n/),
                    c = [],
                    d = void 0,
                    e = void 0,
                    f = void 0,
                    g = 0,
                    h = b.length;
                  h > g;
                  g++
                ) {
                  if (((d = this.pattern.exec(b[g])), d && g < b.length)) {
                    for (
                      g - 1 >= 0 && "" !== b[g - 1] && (f = b[g - 1]),
                        g++,
                        e = b[g],
                        g++;
                      "" !== b[g] && g < b.length;

                    )
                      (e = e + "\n" + b[g]), g++;
                    (e = e
                      .trim()
                      .replace(
                        /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
                        "<a href='$1' target='_blank'>$1</a>"
                      )),
                      c.push({
                        identifier: f,
                        start:
                          0 === m.convertSMPTEtoSeconds(d[1])
                            ? 0.2
                            : m.convertSMPTEtoSeconds(d[1]),
                        stop: m.convertSMPTEtoSeconds(d[3]),
                        text: e,
                        settings: d[5],
                      });
                  }
                  f = "";
                }
                return c;
              },
            },
            dfxp: {
              parse: function (a) {
                a = $(a).filter("tt");
                var b = a.firstChild,
                  c = b.querySelectorAll("p"),
                  d = a.getElementById("" + b.attr("style")),
                  e = [],
                  f = void 0;
                if (d.length) {
                  d.removeAttribute("id");
                  var g = d.attributes;
                  if (g.length) {
                    f = {};
                    for (var h = 0, i = g.length; i > h; h++)
                      f[g[h].name.split(":")[1]] = g[h].value;
                  }
                }
                for (var j = 0, k = c.length; k > j; j++) {
                  var l = void 0,
                    n = { start: null, stop: null, style: null, text: null };
                  if (
                    (c.eq(j).attr("begin") &&
                      (n.start = m.convertSMPTEtoSeconds(
                        c.eq(j).attr("begin")
                      )),
                    !n.start &&
                      c.eq(j - 1).attr("end") &&
                      (n.start = m.convertSMPTEtoSeconds(
                        c.eq(j - 1).attr("end")
                      )),
                    c.eq(j).attr("end") &&
                      (n.stop = m.convertSMPTEtoSeconds(c.eq(j).attr("end"))),
                    !n.stop &&
                      c.eq(j + 1).attr("begin") &&
                      (n.stop = m.convertSMPTEtoSeconds(
                        c.eq(j + 1).attr("begin")
                      )),
                    f)
                  ) {
                    l = "";
                    for (var o in f) l += o + ":" + f[o] + ";";
                  }
                  l && (n.style = l),
                    0 === n.start && (n.start = 0.2),
                    (n.text = c
                      .eq(j)
                      .innerHTML.trim()
                      .replace(
                        /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
                        "<a href='$1' target='_blank'>$1</a>"
                      )),
                    e.push(n);
                }
                return e;
              },
            },
          });
      },
      { 16: 16, 2: 2, 24: 24, 25: 25, 28: 28, 4: 4, 6: 6 },
    ],
    13: [
      function (a, b, c) {
        "use strict";
        function d(a) {
          return a && a.__esModule ? a : { default: a };
        }
        var e = a(2),
          f = d(e),
          g = a(16),
          h = d(g),
          i = a(4),
          j = d(i),
          k = a(23),
          l = a(25),
          m = a(24);
        Object.assign(g.config, {
          muteText: null,
          unmuteText: null,
          allyVolumeControlText: null,
          hideVolumeOnTouchDevices: !0,
          audioVolume: "horizontal",
          videoVolume: "vertical",
        }),
          Object.assign(h["default"].prototype, {
            buildvolume: function (a, b, c, d) {
              if (
                (!k.IS_ANDROID && !k.IS_IOS) ||
                !this.options.hideVolumeOnTouchDevices
              ) {
                var e = this,
                  g = e.isVideo ? e.options.videoVolume : e.options.audioVolume,
                  h = l.isString(e.options.muteText)
                    ? e.options.muteText
                    : j["default"].t("mejs.mute"),
                  i = l.isString(e.options.unmuteText)
                    ? e.options.unmuteText
                    : j["default"].t("mejs.unmute"),
                  n = l.isString(e.options.allyVolumeControlText)
                    ? e.options.allyVolumeControlText
                    : j["default"].t("mejs.volume-help-text"),
                  o = f["default"].createElement("div");
                if (
                  ((o.className =
                    e.options.classPrefix +
                    "button " +
                    e.options.classPrefix +
                    "volume-button " +
                    e.options.classPrefix +
                    "mute"),
                  (o.innerHTML =
                    "horizontal" === g
                      ? '<button type="button" aria-controls="' +
                        e.id +
                        '" title="' +
                        h +
                        '" aria-label="' +
                        h +
                        '" tabindex="0"></button>'
                      : '<button type="button" aria-controls="' +
                        e.id +
                        '" title="' +
                        h +
                        '" aria-label="' +
                        h +
                        '" tabindex="0"></button>' +
                        ('<a href="javascript:void(0);" className="' +
                          e.options.classPrefix +
                          'volume-slider">') +
                        ('<span className="' +
                          e.options.classPrefix +
                          'offscreen">' +
                          n +
                          "</span>") +
                        ('<div className="' +
                          e.options.classPrefix +
                          'volume-total">') +
                        ('<div className="' +
                          e.options.classPrefix +
                          'volume-current"></div>') +
                        ('<div className="' +
                          e.options.classPrefix +
                          'volume-handle"></div>') +
                        "</div></a>"),
                  e.addControlElement(o, "volume"),
                  "horizontal" === g)
                ) {
                  var p = f["default"].createElement("a");
                  (p.className =
                    e.options.classPrefix + "horizontal-volume-slider"),
                    (p.href = "javascript:void(0);"),
                    (p.innerHTML +=
                      '<span className="' +
                      e.options.classPrefix +
                      'offscreen">' +
                      n +
                      "</span>" +
                      ('<div className="' +
                        e.options.classPrefix +
                        'horizontal-volume-total">') +
                      ('<div className="' +
                        e.options.classPrefix +
                        'horizontal-volume-current"></div>') +
                      ('<div className="' +
                        e.options.classPrefix +
                        'horizontal-volume-handle"></div>') +
                      "</div>"),
                    o.parentNode.insertBefore(p, o.nextSibling);
                }
                var q =
                    "vertical" === g
                      ? e.container.querySelector(
                          "." + e.options.classPrefix + "volume-slider"
                        )
                      : e.container.querySelector(
                          "." +
                            e.options.classPrefix +
                            "horizontal-volume-slider"
                        ),
                  r =
                    "vertical" === g
                      ? e.container.querySelector(
                          "." + e.options.classPrefix + "volume-total"
                        )
                      : e.container.querySelector(
                          "." +
                            e.options.classPrefix +
                            "horizontal-volume-total"
                        ),
                  s =
                    "vertical" === g
                      ? e.container.querySelector(
                          "." + e.options.classPrefix + "volume-current"
                        )
                      : e.container.querySelector(
                          "." +
                            e.options.classPrefix +
                            "horizontal-volume-current"
                        ),
                  t =
                    "vertical" === g
                      ? e.container.querySelector(
                          "." + e.options.classPrefix + "volume-handle"
                        )
                      : e.container.querySelector(
                          "." +
                            e.options.classPrefix +
                            "horizontal-volume-handle"
                        ),
                  u = o.firstElementChild,
                  v = function (a) {
                    if (((a = Math.max(0, a)), (a = Math.min(a, 1)), 0 === a)) {
                      m.removeClass(o, e.options.classPrefix + "mute"),
                        m.addClass(o, e.options.classPrefix + "unmute");
                      var b = o.firstElementChild;
                      b.setAttribute("title", i),
                        b.setAttribute("aria-label", i);
                    } else {
                      m.removeClass(o, e.options.classPrefix + "unmute"),
                        m.addClass(o, e.options.classPrefix + "mute");
                      var c = o.firstElementChild;
                      c.setAttribute("title", h),
                        c.setAttribute("aria-label", h);
                    }
                    var d = 100 * a + "%",
                      f = getComputedStyle(t);
                    "vertical" === g
                      ? ((s.style.bottom = 0),
                        (s.style.height = d),
                        (t.style.bottom = d),
                        (t.style.marginBottom =
                          -parseFloat(f.height) / 2 + "px"))
                      : ((s.style.left = 0),
                        (s.style.width = d),
                        (t.style.left = d),
                        (t.style.marginLeft = -parseFloat(f.width) / 2 + "px"));
                  },
                  w = function (a) {
                    var b = m.offset(r),
                      c = getComputedStyle(r),
                      e = null;
                    if ("vertical" === g) {
                      var f = parseFloat(c.height),
                        h = a.pageY - b.top;
                      if (((e = (f - h) / f), 0 === b.top || 0 === b.left))
                        return;
                    } else {
                      var i = parseFloat(c.width),
                        j = a.pageX - b.left;
                      e = j / i;
                    }
                    (e = Math.max(0, e)),
                      (e = Math.min(e, 1)),
                      v(e),
                      0 === e ? d.setMuted(!0) : d.setMuted(!1),
                      d.setVolume(e),
                      a.preventDefault(),
                      a.stopPropagation();
                  };
                o.addEventListener("mouseenter", function (a) {
                  a.target === o &&
                    ((q.style.display = "block"),
                    (y = !0),
                    a.preventDefault(),
                    a.stopPropagation());
                }),
                  o.addEventListener("focusin", function () {
                    (q.style.display = "block"), (y = !0);
                  }),
                  o.addEventListener("mouseleave", function () {
                    (y = !1),
                      x || "vertical" !== g || (q.style.display = "none");
                  }),
                  o.addEventListener("focusout", function () {
                    (y = !1),
                      x || "vertical" !== g || (q.style.display = "none");
                  }),
                  o.addEventListener("keydown", function (a) {
                    if (e.options.keyActions.length) {
                      var b = a.which || a.keyCode || 0,
                        c = d.volume;
                      switch (b) {
                        case 38:
                          c = Math.min(c + 0.1, 1);
                          break;
                        case 40:
                          c = Math.max(0, c - 0.1);
                          break;
                        default:
                          return !0;
                      }
                      (x = !1),
                        v(c),
                        d.setVolume(c),
                        a.preventDefault(),
                        a.stopPropagation();
                    }
                  });
                var x = !1,
                  y = !1,
                  z = function () {
                    var a = Math.floor(100 * d.volume);
                    q.setAttribute(
                      "aria-label",
                      j["default"].t("mejs.volume-slider")
                    ),
                      q.setAttribute("aria-valuemin", 0),
                      q.setAttribute("aria-valuemax", 100),
                      q.setAttribute("aria-valuenow", a),
                      q.setAttribute("aria-valuetext", a + "%"),
                      q.setAttribute("role", "slider"),
                      (q.tabIndex = -1);
                  };
                q.addEventListener("dragstart", function () {
                  return !1;
                }),
                  q.addEventListener("mouseover", function () {
                    y = !0;
                  }),
                  q.addEventListener("mousedown", function (a) {
                    w(a),
                      e.globalBind("mousemove.vol", function (a) {
                        var b = a.target;
                        x &&
                          (b === q ||
                            b.closest(
                              "vertical" === g
                                ? "." + e.options.classPrefix + "volume-slider"
                                : "." +
                                    e.options.classPrefix +
                                    "horizontal-volume-slider"
                            )) &&
                          w(a);
                      }),
                      e.globalBind("mouseup.vol", function () {
                        (x = !1),
                          e.globalUnbind("mousemove.vol mouseup.vol"),
                          y || "vertical" !== g || (q.style.display = "none");
                      }),
                      (x = !0),
                      a.preventDefault(),
                      a.stopPropagation();
                  }),
                  u.addEventListener("click", function () {
                    d.setMuted(!d.muted);
                    var a = l.createEvent("volumechange", d);
                    d.dispatchEvent(a);
                  }),
                  u.addEventListener("focus", function () {
                    "vertical" === g && (q.style.display = "block");
                  }),
                  u.addEventListener("blur", function () {
                    "vertical" === g && (q.style.display = "none");
                  }),
                  d.addEventListener("volumechange", function (a) {
                    x ||
                      (d.muted
                        ? (v(0),
                          m.removeClass(o, e.options.classPrefix + "mute"),
                          m.addClass(o, e.options.classPrefix + "unmute"))
                        : (v(d.volume),
                          m.removeClass(o, e.options.classPrefix + "unmute"),
                          m.addClass(o, e.options.classPrefix + "mute"))),
                      z(a);
                  }),
                  0 === a.options.startVolume && d.setMuted(!0);
                var A =
                  null !== e.media.rendererName &&
                  null !== e.media.rendererName.match(/(native|html5)/);
                A && d.setVolume(a.options.startVolume),
                  e.container.addEventListener("controlsresize", function () {
                    d.muted
                      ? (v(0),
                        m.removeClass(o, e.options.classPrefix + "mute"),
                        m.addClass(o, e.options.classPrefix + "unmute"))
                      : (v(d.volume),
                        m.removeClass(o, e.options.classPrefix + "unmute"),
                        m.addClass(o, e.options.classPrefix + "mute"));
                  });
              }
            },
          });
      },
      { 16: 16, 2: 2, 23: 23, 24: 24, 25: 25, 4: 4 },
    ],
    14: [
      function (a, b, c) {
        "use strict";
        /*!
         * This is a i18n language object.
         *
         * English; This can serve as a template for other languages to translate
         *
         * @author
         *   TBD
         *   Sascha Greuel (Twitter: @SoftCreatR)
         *
         * @see core/i18n.js
         */
        Object.defineProperty(c, "__esModule", { value: !0 });
        c.EN = {
          "mejs.plural-form": 1,
          "mejs.download-file": "Download File",
          "mejs.install-flash":
            "You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https://get.adobe.com/flashplayer/",
          "mejs.fullscreen": "Fullscreen",
          "mejs.play": "Play",
          "mejs.pause": "Pause",
          "mejs.time-slider": "Time Slider",
          "mejs.time-help-text":
            "Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.",
          "mejs.live-broadcast": "Live Broadcast",
          "mejs.volume-help-text":
            "Use Up/Down Arrow keys to increase or decrease volume.",
          "mejs.unmute": "Unmute",
          "mejs.mute": "Mute",
          "mejs.volume-slider": "Volume Slider",
          "mejs.video-player": "Video Player",
          "mejs.audio-player": "Audio Player",
          "mejs.captions-subtitles": "Captions/Subtitles",
          "mejs.captions-chapters": "Chapters",
          "mejs.none": "None",
          "mejs.afrikaans": "Afrikaans",
          "mejs.albanian": "Albanian",
          "mejs.arabic": "Arabic",
          "mejs.belarusian": "Belarusian",
          "mejs.bulgarian": "Bulgarian",
          "mejs.catalan": "Catalan",
          "mejs.chinese": "Chinese",
          "mejs.chinese-simplified": "Chinese (Simplified)",
          "mejs.chinese-traditional": "Chinese (Traditional)",
          "mejs.croatian": "Croatian",
          "mejs.czech": "Czech",
          "mejs.danish": "Danish",
          "mejs.dutch": "Dutch",
          "mejs.english": "English",
          "mejs.estonian": "Estonian",
          "mejs.filipino": "Filipino",
          "mejs.finnish": "Finnish",
          "mejs.french": "French",
          "mejs.galician": "Galician",
          "mejs.german": "German",
          "mejs.greek": "Greek",
          "mejs.haitian-creole": "Haitian Creole",
          "mejs.hebrew": "Hebrew",
          "mejs.hindi": "Hindi",
          "mejs.hungarian": "Hungarian",
          "mejs.icelandic": "Icelandic",
          "mejs.indonesian": "Indonesian",
          "mejs.irish": "Irish",
          "mejs.italian": "Italian",
          "mejs.japanese": "Japanese",
          "mejs.korean": "Korean",
          "mejs.latvian": "Latvian",
          "mejs.lithuanian": "Lithuanian",
          "mejs.macedonian": "Macedonian",
          "mejs.malay": "Malay",
          "mejs.maltese": "Maltese",
          "mejs.norwegian": "Norwegian",
          "mejs.persian": "Persian",
          "mejs.polish": "Polish",
          "mejs.portuguese": "Portuguese",
          "mejs.romanian": "Romanian",
          "mejs.russian": "Russian",
          "mejs.serbian": "Serbian",
          "mejs.slovak": "Slovak",
          "mejs.slovenian": "Slovenian",
          "mejs.spanish": "Spanish",
          "mejs.swahili": "Swahili",
          "mejs.swedish": "Swedish",
          "mejs.tagalog": "Tagalog",
          "mejs.thai": "Thai",
          "mejs.turkish": "Turkish",
          "mejs.ukrainian": "Ukrainian",
          "mejs.vietnamese": "Vietnamese",
          "mejs.welsh": "Welsh",
          "mejs.yiddish": "Yiddish",
        };
      },
      {},
    ],
    15: [
      function (a, b, c) {
        "use strict";
        function d(a) {
          return a && a.__esModule ? a : { default: a };
        }
        var e = a(3),
          f = d(e),
          g = a(6),
          h = d(g);
        "undefined" != typeof jQuery
          ? (h["default"].$ = f["default"].jQuery = f["default"].$ = jQuery)
          : "undefined" != typeof Zepto
          ? (h["default"].$ = f["default"].Zepto = f["default"].$ = Zepto)
          : "undefined" != typeof ender &&
            (h["default"].$ = f["default"].ender = f["default"].$ = ender);
      },
      { 3: 3, 6: 6 },
    ],
    16: [
      function (a, b, c) {
        "use strict";
        function d(a) {
          if (a && a.__esModule) return a;
          var b = {};
          if (null != a)
            for (var c in a)
              Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
          return (b["default"] = a), b;
        }
        function e(a) {
          return a && a.__esModule ? a : { default: a };
        }
        function f(a, b) {
          if (!(a instanceof b))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(c, "__esModule", { value: !0 }),
          (c.config = void 0);
        var g =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (a) {
                  return typeof a;
                }
              : function (a) {
                  return a &&
                    "function" == typeof Symbol &&
                    a.constructor === Symbol &&
                    a !== Symbol.prototype
                    ? "symbol"
                    : typeof a;
                },
          h = (function () {
            function a(a, b) {
              for (var c = 0; c < b.length; c++) {
                var d = b[c];
                (d.enumerable = d.enumerable || !1),
                  (d.configurable = !0),
                  "value" in d && (d.writable = !0),
                  Object.defineProperty(a, d.key, d);
              }
            }
            return function (b, c, d) {
              return c && a(b.prototype, c), d && a(b, d), b;
            };
          })(),
          i = a(3),
          j = e(i),
          k = a(2),
          l = e(k),
          m = a(6),
          n = e(m),
          o = a(5),
          p = e(o),
          q = a(4),
          r = e(q),
          s = a(23),
          t = a(25),
          u = a(28),
          v = a(26),
          w = a(24),
          x = d(w);
        (n["default"].mepIndex = 0), (n["default"].players = {});
        var y = (c.config = {
          poster: "",
          showPosterWhenEnded: !1,
          showPosterWhenPaused: !1,
          defaultVideoWidth: 480,
          defaultVideoHeight: 270,
          videoWidth: -1,
          videoHeight: -1,
          defaultAudioWidth: 400,
          defaultAudioHeight: 40,
          defaultSeekBackwardInterval: function (a) {
            return 0.05 * a.duration;
          },
          defaultSeekForwardInterval: function (a) {
            return 0.05 * a.duration;
          },
          setDimensions: !0,
          audioWidth: -1,
          audioHeight: -1,
          startVolume: 0.8,
          loop: !1,
          autoRewind: !0,
          enableAutosize: !0,
          timeFormat: "",
          alwaysShowHours: !1,
          showTimecodeFrameCount: !1,
          framesPerSecond: 25,
          alwaysShowControls: !1,
          hideVideoControlsOnLoad: !1,
          hideVideoControlsOnPause: !1,
          clickToPlayPause: !0,
          controlsTimeoutDefault: 1500,
          controlsTimeoutMouseEnter: 2500,
          controlsTimeoutMouseLeave: 1e3,
          iPadUseNativeControls: !1,
          iPhoneUseNativeControls: !1,
          AndroidUseNativeControls: !1,
          features: [
            "playpause",
            "current",
            "progress",
            "duration",
            "tracks",
            "volume",
            "fullscreen",
          ],
          isVideo: !0,
          stretching: "auto",
          classPrefix: "mejs__",
          enableKeyboard: !0,
          pauseOtherPlayers: !0,
          secondsDecimalLength: 0,
          keyActions: [
            {
              keys: [32, 179],
              action: function (a, b) {
                s.IS_FIREFOX || (b.paused || b.ended ? b.play() : b.pause());
              },
            },
            {
              keys: [38],
              action: function (a, b) {
                (a.container
                  .querySelector("." + y.classPrefix + "volume-button>button")
                  .matches(":focus") ||
                  a.container
                    .querySelector("." + y.classPrefix + "volume-slider")
                    .matches(":focus")) &&
                  (a.container.querySelector(
                    "." + y.classPrefix + "volume-slider"
                  ).style.display = ""),
                  a.isVideo && (a.showControls(), a.startControlsTimer());
                var c = Math.min(b.volume + 0.1, 1);
                b.setVolume(c), c > 0 && b.setMuted(!1);
              },
            },
            {
              keys: [40],
              action: function (a, b) {
                (a.container
                  .querySelector("." + y.classPrefix + "volume-button>button")
                  .matches(":focus") ||
                  a.container
                    .querySelector("." + y.classPrefix + "volume-slider")
                    .matches(":focus")) &&
                  (a.container.querySelector(
                    "." + y.classPrefix + "volume-slider"
                  ).style.display = ""),
                  a.isVideo && (a.showControls(), a.startControlsTimer());
                var c = Math.max(b.volume - 0.1, 0);
                b.setVolume(c), 0.1 >= c && b.setMuted(!0);
              },
            },
            {
              keys: [37, 227],
              action: function (a, b) {
                if (!isNaN(b.duration) && b.duration > 0) {
                  a.isVideo && (a.showControls(), a.startControlsTimer());
                  var c = Math.max(
                    b.currentTime - a.options.defaultSeekBackwardInterval(b),
                    0
                  );
                  b.setCurrentTime(c);
                }
              },
            },
            {
              keys: [39, 228],
              action: function (a, b) {
                if (!isNaN(b.duration) && b.duration > 0) {
                  a.isVideo && (a.showControls(), a.startControlsTimer());
                  var c = Math.min(
                    b.currentTime + a.options.defaultSeekForwardInterval(b),
                    b.duration
                  );
                  b.setCurrentTime(c);
                }
              },
            },
            {
              keys: [70],
              action: function (a, b, c, d) {
                d.ctrlKey ||
                  ("undefined" != typeof a.enterFullScreen &&
                    (a.isFullScreen
                      ? a.exitFullScreen()
                      : a.enterFullScreen()));
              },
            },
            {
              keys: [77],
              action: function (a) {
                (a.container.querySelector(
                  "." + y.classPrefix + "volume-slider"
                ).style.display = ""),
                  a.isVideo && (a.showControls(), a.startControlsTimer()),
                  a.media.muted ? a.setMuted(!1) : a.setMuted(!0);
              },
            },
          ],
        });
        n["default"].MepDefaults = y;
        var z = (function () {
          function a(b, c) {
            f(this, a);
            var d = this,
              e = "string" == typeof b ? l["default"].getElementById(b) : b;
            if (
              ((d.hasFocus = !1),
              (d.controlsAreVisible = !0),
              (d.controlsEnabled = !0),
              (d.controlsTimer = null),
              !(d instanceof a))
            )
              return new a(e, c);
            if (((d.node = d.media = e), d.node)) {
              if (void 0 !== d.media.player) return d.media.player;
              void 0 === c && (c = d.node.getAttribute("data-mejsoptions")),
                (d.options = Object.assign({}, y, c)),
                d.options.timeFormat ||
                  ((d.options.timeFormat = "mm:ss"),
                  d.options.alwaysShowHours &&
                    (d.options.timeFormat = "hh:mm:ss"),
                  d.options.showTimecodeFrameCount &&
                    (d.options.timeFormat += ":ff")),
                u.calculateTimeFormat(
                  0,
                  d.options,
                  d.options.framesPerSecond || 25
                ),
                (d.id = "mep_" + n["default"].mepIndex++),
                (n["default"].players[d.id] = d);
              var g = Object.assign({}, d.options, {
                  success: function (a, b) {
                    d._meReady(a, b);
                  },
                  error: function (a) {
                    d._handleError(a);
                  },
                }),
                h = d.node.tagName.toLowerCase();
              if (
                ((d.isDynamic = "audio" !== h && "video" !== h),
                (d.isVideo = d.isDynamic
                  ? d.options.isVideo
                  : "audio" !== h && d.options.isVideo),
                (d.mediaFiles = null),
                (d.trackFiles = null),
                (s.IS_IPAD && d.options.iPadUseNativeControls) ||
                  (s.IS_IPHONE && d.options.iPhoneUseNativeControls))
              )
                d.node.setAttribute("controls", !0),
                  s.IS_IPAD && d.node.getAttribute("autoplay") && d.play();
              else if (
                !(d.isVideo || (!d.isVideo && d.options.features.length)) ||
                (s.IS_ANDROID && d.options.AndroidUseNativeControls)
              )
                d.isVideo ||
                  d.options.features.length ||
                  (d.node.style.display = "none");
              else {
                d.node.removeAttribute("controls");
                var i = d.isVideo
                    ? r["default"].t("mejs.video-player")
                    : r["default"].t("mejs.audio-player"),
                  j = l["default"].createElement("span");
                if (
                  ((j.className = d.options.classPrefix + "offscreen"),
                  (j.innerText = i),
                  d.media.parentNode.insertBefore(j, d.media),
                  (d.container = l["default"].createElement("div")),
                  (d.container.id = d.id),
                  (d.container.className =
                    d.options.classPrefix +
                    "container " +
                    d.options.classPrefix +
                    "container-keyboard-inactive " +
                    d.media.className),
                  (d.container.tabIndex = 0),
                  d.container.setAttribute("role", "application"),
                  d.container.setAttribute("aria-label", i),
                  (d.container.innerHTML =
                    '<div className="' +
                    d.options.classPrefix +
                    'inner">' +
                    ('<div className="' +
                      d.options.classPrefix +
                      'mediaelement"></div>') +
                    ('<div className="' +
                      d.options.classPrefix +
                      'layers"></div>') +
                    ('<div className="' +
                      d.options.classPrefix +
                      'controls"></div>') +
                    ('<div className="' +
                      d.options.classPrefix +
                      'clear"></div>') +
                    "</div>"),
                  d.container.addEventListener("focus", function (a) {
                    if (
                      !d.controlsAreVisible &&
                      !d.hasFocus &&
                      d.controlsEnabled &&
                      (d.showControls(!0), !s.HAS_MS_NATIVE_FULLSCREEN)
                    ) {
                      var b = t.isNodeAfter(a.relatedTarget, d.container)
                          ? "." +
                            d.options.classPrefix +
                            "controls ." +
                            d.options.classPrefix +
                            "button:last-child > button"
                          : "." +
                            d.options.classPrefix +
                            "playpause-button > button",
                        c = d.container.querySelector(b);
                      c.focus();
                    }
                  }),
                  d.node.parentNode.insertBefore(d.container, d.node),
                  d.options.features.length ||
                    ((d.container.style.background = "transparent"),
                    (d.container.querySelector(
                      "." + d.options.classPrefix + "controls"
                    ).style.display = "none")),
                  d.isVideo &&
                    "fill" === d.options.stretching &&
                    !x.hasClass(
                      d.container.parentNode,
                      d.options.classPrefix + "fill-container"
                    ))
                ) {
                  d.outerContainer = d.media.parentNode;
                  var k = l["default"].createElement("div");
                  (k.className = d.options.classPrefix + "fill-container"),
                    d.container.parentNode.insertBefore(k, d.container),
                    k.appendChild(d.container);
                }
                if (
                  (s.IS_ANDROID &&
                    x.addClass(d.container, d.options.classPrefix + "android"),
                  s.IS_IOS &&
                    x.addClass(d.container, d.options.classPrefix + "ios"),
                  s.IS_IPAD &&
                    x.addClass(d.container, d.options.classPrefix + "ipad"),
                  s.IS_IPHONE &&
                    x.addClass(d.container, d.options.classPrefix + "iphone"),
                  x.addClass(
                    d.container,
                    d.isVideo
                      ? d.options.classPrefix + "video"
                      : d.options.classPrefix + "audio"
                  ),
                  s.IS_SAFARI && !s.IS_IOS)
                ) {
                  x.addClass(d.container, d.options.classPrefix + "hide-cues");
                  for (
                    var m = d.node.cloneNode(),
                      o = d.node.childNodes,
                      q = [],
                      w = [],
                      z = 0,
                      A = o.length;
                    A > z;
                    z++
                  ) {
                    var B = o[z];
                    if (B && B.nodeType !== Node.TEXT_NODE)
                      switch (B.tagName.toLowerCase()) {
                        case "source":
                          var C = B.getAttribute("src");
                          q.push({
                            type: v.formatType(C, B.getAttribute("type")),
                            src: C,
                          });
                          break;
                        case "track":
                          (B.mode = "hidden"), w.push(B);
                          break;
                        default:
                          m.appendChild(B);
                      }
                  }
                  d.node.remove(),
                    (d.node = d.media = m),
                    q.length && (d.mediaFiles = q),
                    w.length && (d.trackFiles = w);
                }
                d.container
                  .querySelector("." + d.options.classPrefix + "mediaelement")
                  .appendChild(d.node),
                  (d.media.player = d),
                  (d.controls = d.container.querySelector(
                    "." + d.options.classPrefix + "controls"
                  )),
                  (d.layers = d.container.querySelector(
                    "." + d.options.classPrefix + "layers"
                  ));
                var D = d.isVideo ? "video" : "audio",
                  E = D.substring(0, 1).toUpperCase() + D.substring(1);
                d.options[D + "Width"] > 0 ||
                d.options[D + "Width"].toString().indexOf("%") > -1
                  ? (d.width = d.options[D + "Width"])
                  : "" !== d.node.style.width && null !== d.node.style.width
                  ? (d.width = d.node.style.width)
                  : d.node.getAttribute("width")
                  ? (d.width = d.node.getAttribute("width"))
                  : (d.width = d.options["default" + E + "Width"]),
                  d.options[D + "Height"] > 0 ||
                  d.options[D + "Height"].toString().indexOf("%") > -1
                    ? (d.height = d.options[D + "Height"])
                    : "" !== d.node.style.height && null !== d.node.style.height
                    ? (d.height = d.node.style.height)
                    : d.node.getAttribute("height")
                    ? (d.height = d.node.getAttribute("height"))
                    : (d.height = d.options["default" + E + "Height"]),
                  (d.initialAspectRatio =
                    d.height >= d.width
                      ? d.width / d.height
                      : d.height / d.width),
                  d.setPlayerSize(d.width, d.height),
                  (g.pluginWidth = d.width),
                  (g.pluginHeight = d.height);
              }
              if (
                (new p["default"](d.media, g, d.mediaFiles),
                void 0 !== d.container &&
                  d.options.features.length &&
                  d.controlsAreVisible &&
                  !d.options.hideVideoControlsOnLoad)
              ) {
                var F = t.createEvent("controlsshown", d.container);
                d.container.dispatchEvent(F);
              }
              return d;
            }
          }
          return (
            h(a, [
              {
                key: "showControls",
                value: function (a) {
                  var b = this;
                  if (((a = void 0 === a || a), !b.controlsAreVisible)) {
                    if (a)
                      !(function () {
                        x.removeClass(
                          b.controls,
                          b.options.classPrefix + "offscreen"
                        ),
                          x.fadeIn(b.controls, 200, function () {
                            var a = t.createEvent("controlsshown", b.container);
                            b.container.dispatchEvent(a);
                          });
                        for (
                          var a = b.container.querySelectorAll(
                              "." + b.options.classPrefix + "control"
                            ),
                            c = function (c, d) {
                              x.fadeIn(a[c], 200, function () {
                                x.removeClass(
                                  a[c],
                                  b.options.classPrefix + "offscreen"
                                );
                              });
                            },
                            d = 0,
                            e = a.length;
                          e > d;
                          d++
                        )
                          c(d, e);
                      })();
                    else {
                      x.removeClass(
                        b.controls,
                        b.options.classPrefix + "offscreen"
                      ),
                        (b.controls.style.display = "");
                      for (
                        var c = b.container.querySelectorAll(
                            "." + b.options.classPrefix + "control"
                          ),
                          d = 0,
                          e = c.length;
                        e > d;
                        d++
                      )
                        x.removeClass(
                          c[d],
                          b.options.classPrefix + "offscreen"
                        ),
                          (c[d].style.display = "");
                      var f = t.createEvent("controlsshown", b.container);
                      b.container.dispatchEvent(f);
                    }
                    (b.controlsAreVisible = !0), b.setControlsSize();
                  }
                },
              },
              {
                key: "hideControls",
                value: function (a, b) {
                  var c = this;
                  if (
                    ((a = void 0 === a || a),
                    b === !0 ||
                      !(
                        !c.controlsAreVisible ||
                        c.options.alwaysShowControls ||
                        c.keyboardAction ||
                        (c.media.paused &&
                          4 === c.media.readyState &&
                          ((!c.options.hideVideoControlsOnLoad &&
                            c.media.currentTime <= 0) ||
                            (!c.options.hideVideoControlsOnPause &&
                              c.media.currentTime > 0))) ||
                        (c.isVideo &&
                          !c.options.hideVideoControlsOnLoad &&
                          !c.media.readyState) ||
                        c.media.ended
                      ))
                  ) {
                    if (a)
                      !(function () {
                        x.fadeOut(c.controls, 200, function () {
                          x.addClass(
                            c.controls,
                            c.options.classPrefix + "offscreen"
                          ),
                            (c.controls.style.display = "");
                          var a = t.createEvent("controlshidden", c.container);
                          c.container.dispatchEvent(a);
                        });
                        for (
                          var a = c.container.querySelectorAll(
                              "." + c.options.classPrefix + "control"
                            ),
                            b = function (b, d) {
                              x.fadeOut(a[b], 200, function () {
                                x.addClass(
                                  a[b],
                                  c.options.classPrefix + "offscreen"
                                ),
                                  (a[b].style.display = "");
                              });
                            },
                            d = 0,
                            e = a.length;
                          e > d;
                          d++
                        )
                          b(d, e);
                      })();
                    else {
                      x.addClass(
                        c.controls,
                        c.options.classPrefix + "offscreen"
                      ),
                        (c.controls.style.display = "");
                      for (
                        var d = c.container.querySelectorAll(
                            "." + c.options.classPrefix + "control"
                          ),
                          e = 0,
                          f = d.length;
                        f > e;
                        e++
                      )
                        x.addClass(d[e], c.options.classPrefix + "offscreen"),
                          (d[e].style.display = "");
                      var g = t.createEvent("controlshidden", c.container);
                      c.container.dispatchEvent(g);
                    }
                    c.controlsAreVisible = !1;
                  }
                },
              },
              {
                key: "startControlsTimer",
                value: function (a) {
                  var b = this;
                  (a =
                    "undefined" != typeof a
                      ? a
                      : b.options.controlsTimeoutDefault),
                    b.killControlsTimer("start"),
                    (b.controlsTimer = setTimeout(function () {
                      b.hideControls(), b.killControlsTimer("hide");
                    }, a));
                },
              },
              {
                key: "killControlsTimer",
                value: function () {
                  var a = this;
                  null !== a.controlsTimer &&
                    (clearTimeout(a.controlsTimer),
                    delete a.controlsTimer,
                    (a.controlsTimer = null));
                },
              },
              {
                key: "disableControls",
                value: function () {
                  var a = this;
                  a.killControlsTimer(),
                    (a.controlsEnabled = !0),
                    a.hideControls(!1, !0);
                },
              },
              {
                key: "enableControls",
                value: function () {
                  var a = this;
                  (a.controlsEnabled = !0), a.showControls(!1);
                },
              },
              {
                key: "_meReady",
                value: function (a, b) {
                  var c = this,
                    d = b.getAttribute("autoplay"),
                    e = !(void 0 === d || null === d || "false" === d),
                    f =
                      null !== a.rendererName &&
                      null !== a.rendererName.match(/(native|html5)/);
                  if (
                    (c.controls && c.enableControls(),
                    c.container.querySelector(
                      "." + c.options.classPrefix + "overlay-play"
                    ) &&
                      (c.container.querySelector(
                        "." + c.options.classPrefix + "overlay-play"
                      ).style.display = ""),
                    !c.created)
                  ) {
                    if (
                      ((c.created = !0),
                      (c.media = a),
                      (c.domNode = b),
                      !(
                        (s.IS_ANDROID && c.options.AndroidUseNativeControls) ||
                        (s.IS_IPAD && c.options.iPadUseNativeControls) ||
                        (s.IS_IPHONE && c.options.iPhoneUseNativeControls)
                      ))
                    ) {
                      var h = (function () {
                        if (!c.isVideo && !c.options.features.length)
                          return (
                            e && f && c.play(),
                            c.options.success &&
                              ("string" == typeof c.options.success
                                ? j["default"][c.options.success](
                                    c.media,
                                    c.domNode,
                                    c
                                  )
                                : c.options.success(c.media, c.domNode, c)),
                            { v: void 0 }
                          );
                        c.buildposter(c, c.controls, c.layers, c.media),
                          c.buildkeyboard(c, c.controls, c.layers, c.media),
                          c.buildoverlays(c, c.controls, c.layers, c.media),
                          c.findTracks(),
                          (c.featurePosition = {});
                        for (
                          var a = 0, b = c.options.features.length;
                          b > a;
                          a++
                        ) {
                          var d = c.options.features[a];
                          if (c["build" + d])
                            try {
                              c["build" + d](c, c.controls, c.layers, c.media);
                            } catch (g) {
                              console.error("error building " + d, g);
                            }
                        }
                        var h = t.createEvent("controlsready", c.container);
                        c.container.dispatchEvent(h),
                          c.setPlayerSize(c.width, c.height),
                          c.setControlsSize(),
                          c.isVideo &&
                            ((c.clickToPlayPauseCallback = function () {
                              if (c.options.clickToPlayPause) {
                                var a = c.container.querySelector(
                                    "." +
                                      c.options.classPrefix +
                                      "overlay-button"
                                  ),
                                  b = a.getAttribute("aria-pressed");
                                c.media.paused && b
                                  ? c.pause()
                                  : c.media.paused
                                  ? c.play()
                                  : c.pause(),
                                  a.setAttribute("aria-pressed", !b);
                              }
                            }),
                            c.createIframeLayer(),
                            c.media.addEventListener(
                              "click",
                              c.clickToPlayPauseCallback
                            ),
                            (!s.IS_ANDROID && !s.IS_IOS) ||
                            c.options.alwaysShowControls
                              ? (c.container.addEventListener(
                                  "mouseenter",
                                  function () {
                                    c.controlsEnabled &&
                                      (c.options.alwaysShowControls ||
                                        (c.killControlsTimer("enter"),
                                        c.showControls(),
                                        c.startControlsTimer(
                                          c.options.controlsTimeoutMouseEnter
                                        )));
                                  }
                                ),
                                c.container.addEventListener(
                                  "mousemove",
                                  function () {
                                    c.controlsEnabled &&
                                      (c.controlsAreVisible || c.showControls(),
                                      c.options.alwaysShowControls ||
                                        c.startControlsTimer(
                                          c.options.controlsTimeoutMouseEnter
                                        ));
                                  }
                                ),
                                c.container.addEventListener(
                                  "mouseleave",
                                  function () {
                                    c.controlsEnabled &&
                                      (c.media.paused ||
                                        c.options.alwaysShowControls ||
                                        c.startControlsTimer(
                                          c.options.controlsTimeoutMouseLeave
                                        ));
                                  }
                                ))
                              : c.node.addEventListener(
                                  "touchstart",
                                  function () {
                                    c.controlsAreVisible
                                      ? c.hideControls(!1)
                                      : c.controlsEnabled && c.showControls(!1);
                                  }
                                ),
                            c.options.hideVideoControlsOnLoad &&
                              c.hideControls(!1),
                            e &&
                              !c.options.alwaysShowControls &&
                              c.hideControls(),
                            c.options.enableAutosize &&
                              c.media.addEventListener(
                                "loadedmetadata",
                                function (a) {
                                  c.options.videoHeight <= 0 &&
                                    !c.domNode.getAttribute("height") &&
                                    null !== a.target &&
                                    !isNaN(a.target.videoHeight) &&
                                    (c.setPlayerSize(
                                      a.target.videoWidth,
                                      a.target.videoHeight
                                    ),
                                    c.setControlsSize(),
                                    c.media.setSize(
                                      a.target.videoWidth,
                                      a.target.videoHeight
                                    ));
                                }
                              )),
                          c.media.addEventListener("play", function () {
                            c.hasFocus = !0;
                            for (var a in n["default"].players)
                              if (n["default"].players.hasOwnProperty(a)) {
                                var b = n["default"].players[a];
                                b.id === c.id ||
                                  !c.options.pauseOtherPlayers ||
                                  b.paused ||
                                  b.ended ||
                                  (b.pause(), (b.hasFocus = !1));
                              }
                          }),
                          c.media.addEventListener("ended", function () {
                            if (c.options.autoRewind)
                              try {
                                c.media.setCurrentTime(0),
                                  setTimeout(function () {
                                    c.container.querySelector(
                                      "." +
                                        c.options.classPrefix +
                                        "overlay-loading"
                                    ).parentNode.style.display = "none";
                                  }, 20);
                              } catch (a) {}
                            "function" == typeof c.media.stop
                              ? c.media.stop()
                              : c.media.pause(),
                              c.setProgressRail && c.setProgressRail(),
                              c.setCurrentRail && c.setCurrentRail(),
                              c.options.loop
                                ? c.play()
                                : !c.options.alwaysShowControls &&
                                  c.controlsEnabled &&
                                  c.showControls();
                          }),
                          c.media.addEventListener(
                            "loadedmetadata",
                            function () {
                              u.calculateTimeFormat(
                                c.duration,
                                c.options,
                                c.options.framesPerSecond || 25
                              ),
                                c.updateDuration && c.updateDuration(),
                                c.updateCurrent && c.updateCurrent(),
                                c.isFullScreen ||
                                  (c.setPlayerSize(c.width, c.height),
                                  c.setControlsSize());
                            }
                          );
                        var i = null;
                        c.media.addEventListener("timeupdate", function () {
                          i !== c.media.duration &&
                            ((i = c.media.duration),
                            u.calculateTimeFormat(
                              i,
                              c.options,
                              c.options.framesPerSecond || 25
                            ),
                            c.updateDuration && c.updateDuration(),
                            c.updateCurrent && c.updateCurrent(),
                            c.setControlsSize());
                        }),
                          c.container.addEventListener("focusout", function (
                            a
                          ) {
                            setTimeout(function () {
                              a.relatedTarget &&
                                c.keyboardAction &&
                                !a.relatedTarget.closest(".mejs-container") &&
                                ((c.keyboardAction = !1),
                                c.isVideo &&
                                  !c.options.alwaysShowControls &&
                                  c.hideControls(!0));
                            }, 0);
                          }),
                          setTimeout(function () {
                            c.setPlayerSize(c.width, c.height),
                              c.setControlsSize();
                          }, 0),
                          c.globalBind("resize", function () {
                            c.isFullScreen ||
                              (s.HAS_TRUE_NATIVE_FULLSCREEN &&
                                l["default"].webkitIsFullScreen) ||
                              c.setPlayerSize(c.width, c.height),
                              c.setControlsSize();
                          }),
                          c.globalBind("click", function (a) {
                            a.target.matches(
                              "." + c.options.classPrefix + "container"
                            )
                              ? x.addClass(
                                  a.target,
                                  c.options.classPrefix +
                                    "container-keyboard-inactive"
                                )
                              : a.target.closest(
                                  "." + c.options.classPrefix + "container"
                                ) &&
                                x.addClass(
                                  a.target.closest(
                                    "." + c.options.classPrefix + "container"
                                  ),
                                  c.options.classPrefix +
                                    "container-keyboard-inactive"
                                );
                          }),
                          c.globalBind("keydown", function (a) {
                            a.target.matches(
                              "." + c.options.classPrefix + "container"
                            )
                              ? x.removeClass(
                                  a.target,
                                  c.options.classPrefix +
                                    "container-keyboard-inactive"
                                )
                              : a.target.closest(
                                  "." + c.options.classPrefix + "container"
                                ) &&
                                x.removeClass(
                                  h.target.closest(
                                    "." + c.options.classPrefix + "container"
                                  ),
                                  c.options.classPrefix +
                                    "container-keyboard-inactive"
                                );
                          });
                      })();
                      if (
                        "object" ===
                        ("undefined" == typeof h ? "undefined" : g(h))
                      )
                        return h.v;
                    }
                    e && f && c.play(),
                      c.options.success &&
                        ("string" == typeof c.options.success
                          ? j["default"][c.options.success](
                              c.media,
                              c.domNode,
                              c
                            )
                          : c.options.success(c.media, c.domNode, c));
                  }
                },
              },
              {
                key: "_handleError",
                value: function (a) {
                  var b = this;
                  b.controls && b.disableControls();
                  var c = b.layers.querySelector(
                    "." + b.options.classPrefix + "overlay-play"
                  );
                  c && (c.style.display = "none"),
                    b.options.error && b.options.error(a);
                },
              },
              {
                key: "setPlayerSize",
                value: function (a, b) {
                  var c = this;
                  if (!c.options.setDimensions) return !1;
                  switch (
                    ("undefined" != typeof a && (c.width = a),
                    "undefined" != typeof b && (c.height = b),
                    c.options.stretching)
                  ) {
                    case "fill":
                      c.isVideo
                        ? c.setFillMode()
                        : c.setDimensions(c.width, c.height);
                      break;
                    case "responsive":
                      c.setResponsiveMode();
                      break;
                    case "none":
                      c.setDimensions(c.width, c.height);
                      break;
                    default:
                      c.hasFluidMode() === !0
                        ? c.setResponsiveMode()
                        : c.setDimensions(c.width, c.height);
                  }
                },
              },
              {
                key: "hasFluidMode",
                value: function () {
                  var a = this;
                  return (
                    a.height.toString().includes("%") ||
                    (a.node &&
                      a.node.style.maxWidth &&
                      "none" !== a.node.style.maxWidth &&
                      a.node.style.maxWidth !== a.width) ||
                    (a.node &&
                      a.node.currentStyle &&
                      "100%" === a.node.currentStyle.maxWidth)
                  );
                },
              },
              {
                key: "setResponsiveMode",
                value: function () {
                  var a = this,
                    b = (function () {
                      for (var b = void 0, c = a.container; c; ) {
                        if (((b = c.parentElement), b && x.visible(b)))
                          return b;
                        c = b;
                      }
                      return null;
                    })(),
                    c = getComputedStyle(b, null),
                    d = (function () {
                      return a.isVideo
                        ? a.media.videoWidth && a.media.videoWidth > 0
                          ? a.media.videoWidth
                          : a.node.getAttribute("width")
                          ? a.node.getAttribute("width")
                          : a.options.defaultVideoWidth
                        : a.options.defaultAudioWidth;
                    })(),
                    e = (function () {
                      return a.isVideo
                        ? a.media.videoHeight && a.media.videoHeight > 0
                          ? a.media.videoHeight
                          : a.node.getAttribute("height")
                          ? a.node.getAttribute("height")
                          : a.options.defaultVideoHeight
                        : a.options.defaultAudioHeight;
                    })(),
                    f = (function () {
                      var b = 1;
                      return a.isVideo
                        ? ((b =
                            a.media.videoWidth &&
                            a.media.videoWidth > 0 &&
                            a.media.videoHeight &&
                            a.media.videoHeight > 0
                              ? a.height >= a.width
                                ? a.media.videoWidth / a.media.videoHeight
                                : a.media.videoHeight / a.media.videoWidth
                              : a.initialAspectRatio),
                          (isNaN(b) || 0.01 > b || b > 100) && (b = 1),
                          b)
                        : b;
                    })(),
                    g = parseFloat(c.height),
                    h = void 0,
                    i = parseFloat(c.width);
                  if (
                    ((h = a.isVideo
                      ? "100%" === a.height
                        ? parseInt((i * e) / d, 10)
                        : a.height >= a.width
                        ? parseInt(i / f, 10)
                        : parseInt(i * f, 10)
                      : e),
                    isNaN(h) && (h = g),
                    a.container.parentNode.length > 0 &&
                      "body" === a.container.parentNode.tagName.toLowerCase() &&
                      ((i =
                        j["default"].innerWidth ||
                        l["default"].documentElement.clientWidth ||
                        l["default"].body.clientWidth),
                      (h =
                        j["default"].innerHeight ||
                        l["default"].documentElement.clientHeight ||
                        l["default"].body.clientHeight)),
                    h && i)
                  ) {
                    (a.container.style.width = i + "px"),
                      (a.container.style.height = h + "px"),
                      (a.node.style.width = "100%"),
                      (a.node.style.height = "100%"),
                      a.isVideo && a.media.setSize && a.media.setSize(i, h);
                    for (
                      var k = a.layers.childNodes, m = 0, n = k.length;
                      n > m;
                      m++
                    )
                      (k[m].style.width = "100%"), (k[m].style.height = "100%");
                  }
                },
              },
              {
                key: "setFillMode",
                value: function () {
                  var a = this,
                    b = a.outerContainer,
                    c = getComputedStyle(b);
                  "none" !== a.node.style.height &&
                    a.node.style.height !== a.height &&
                    (a.node.style.height = "auto"),
                    "none" !== a.node.style.maxWidth &&
                      a.node.style.maxWidth !== a.width &&
                      (a.node.style.maxWidth = "none"),
                    "none" !== a.node.style.maxHeight &&
                      a.node.style.maxHeight !== a.height &&
                      (a.node.style.maxHeight = "none"),
                    a.node.currentStyle &&
                      ("100%" === a.node.currentStyle.height &&
                        (a.node.currentStyle.height = "auto"),
                      "100%" === a.node.currentStyle.maxWidth &&
                        (a.node.currentStyle.maxWidth = "none"),
                      "100%" === a.node.currentStyle.maxHeight &&
                        (a.node.currentStyle.maxHeight = "none")),
                    parseFloat(c.width) ||
                      (b.style.width = a.media.offsetWidth + "px"),
                    parseFloat(c.height) ||
                      (b.style.height = a.media.offsetHeight + "px"),
                    (c = getComputedStyle(b));
                  var d = parseFloat(c.width),
                    e = parseFloat(c.height);
                  a.setDimensions("100%", "100%");
                  var f = a.container.querySelector(
                    a.options.classPrefix + "poster img"
                  );
                  f && (f.style.display = "");
                  for (
                    var g = a.container.querySelectorAll(
                        "object, embed, iframe, video"
                      ),
                      h = a.height,
                      i = a.width,
                      j = d,
                      k = (h * d) / i,
                      l = (i * e) / h,
                      m = e,
                      n = l > d == !1,
                      o = n ? Math.floor(j) : Math.floor(l),
                      p = n ? Math.floor(k) : Math.floor(m),
                      q = n ? d + "px" : o + "px",
                      r = n ? p + "px" : e + "px",
                      s = 0,
                      t = g.length;
                    t > s;
                    s++
                  )
                    (g[s].style.height = r),
                      (g[s].style.width = q),
                      a.media.setSize && a.media.setSize(q, r),
                      (g[s].style.marginLeft = Math.floor((d - o) / 2) + "px"),
                      (g[s].style.marginTop = 0);
                },
              },
              {
                key: "setDimensions",
                value: function (a, b) {
                  var c = this;
                  (a =
                    t.isString(a) && a.includes("%")
                      ? a
                      : parseFloat(a) + "px"),
                    (b =
                      t.isString(b) && b.includes("%")
                        ? b
                        : parseFloat(b) + "px"),
                    (c.container.style.width = a),
                    (c.container.style.height = b);
                  for (
                    var d = c.layers.childNodes, e = 0, f = d.length;
                    f > e;
                    e++
                  )
                    (d[e].style.width = a), (d[e].style.height = b);
                },
              },
              {
                key: "setControlsSize",
                value: function () {
                  var a = this;
                  if (x.visible(a.container) && a.rail && x.visible(a.rail)) {
                    for (
                      var b = getComputedStyle(a.rail),
                        c = getComputedStyle(a.total),
                        d =
                          parseFloat(b.marginLeft) + parseFloat(b.marginRight),
                        e =
                          parseFloat(c.marginLeft) +
                            parseFloat(c.marginRight) || 0,
                        f = 0,
                        g = x.siblings(a.rail, function (b) {
                          return b !== a.rail;
                        }),
                        h = g.length,
                        i = 0;
                      h > i;
                      i++
                    )
                      f += g[i].offsetWidth;
                    f += e + (0 === e ? 2 * d : d) + 1;
                    var j = parseFloat(a.controls.offsetWidth);
                    a.rail.style.width = (f > j ? 0 : j - f) + "px";
                    var k = t.createEvent("controlsresize", a.container);
                    a.container.dispatchEvent(k);
                  }
                },
              },
              {
                key: "addControlElement",
                value: function (a, b) {
                  var c = this;
                  if (void 0 !== c.featurePosition[b]) {
                    var d = c.controls.childNodes[c.featurePosition[b] - 1];
                    d.parentNode.insertBefore(a, d.nextSibling);
                  } else {
                    c.controls.appendChild(a);
                    for (
                      var e = c.controls.childNodes, f = 0, g = e.length;
                      g > f;
                      f++
                    )
                      if (a == e[f]) {
                        c.featurePosition[b] = f;
                        break;
                      }
                  }
                },
              },
              {
                key: "createIframeLayer",
                value: function () {
                  var a = this;
                  if (
                    a.isVideo &&
                    null !== a.media.rendererName &&
                    null !== a.media.rendererName.match(/iframe/i) &&
                    !l["default"].getElementById(a.media.id + "-iframe-overlay")
                  ) {
                    var b = l["default"].createElement("div"),
                      c = l["default"].getElementById(
                        a.media.id + "_" + a.media.rendererName
                      );
                    (b.id = a.media.id + "-iframe-overlay"),
                      (b.className = a.options.classPrefix + "iframe-overlay"),
                      b.addEventListener("click", function (b) {
                        a.options.clickToPlayPause &&
                          (a.media.paused ? a.media.play() : a.media.pause(),
                          b.preventDefault(),
                          b.stopPropagation());
                      }),
                      c.parentNode.insertBefore(b, c);
                  }
                },
              },
              {
                key: "resetSize",
                value: function () {
                  var a = this;
                  setTimeout(function () {
                    a.setPlayerSize(a.width, a.height), a.setControlsSize();
                  }, 50);
                },
              },
              {
                key: "setPoster",
                value: function (a) {
                  var b = this,
                    c = b.container.querySelector(
                      "." + b.options.classPrefix + "poster"
                    ),
                    d = c.querySelector("img");
                  d ||
                    ((d = l["default"].createElement("img")),
                    (d.className = b.options.classPrefix + "poster-img"),
                    (d.width = "100%"),
                    (d.height = "100%"),
                    c.appendChild(d)),
                    d.setAttribute("src", a),
                    (c.style.backgroundImage = 'url("' + a + '")');
                },
              },
              {
                key: "changeSkin",
                value: function (a) {
                  var b = this;
                  (b.container.className =
                    b.options.classPrefix + "container " + a),
                    b.setPlayerSize(b.width, b.height),
                    b.setControlsSize();
                },
              },
              {
                key: "globalBind",
                value: function (a, b) {
                  var c = this,
                    d = c.node ? c.node.ownerDocument : l["default"];
                  if (((a = t.splitEvents(a, c.id)), a.d))
                    for (
                      var e = a.d.split(" "), f = 0, g = e.length;
                      g > f;
                      f++
                    )
                      e[f].split(".").reduce(function (a, c) {
                        return d.addEventListener(c, b, !1), c;
                      }, "");
                  if (a.w)
                    for (
                      var h = a.w.split(" "), i = 0, k = h.length;
                      k > i;
                      i++
                    )
                      h[i].split(".").reduce(function (a, c) {
                        return j["default"].addEventListener(c, b, !1), c;
                      }, "");
                },
              },
              {
                key: "globalUnbind",
                value: function (a, b) {
                  var c = this,
                    d = c.node ? c.node.ownerDocument : l["default"];
                  if (((a = t.splitEvents(a, c.id)), a.d))
                    for (
                      var e = a.d.split(" "), f = 0, g = e.length;
                      g > f;
                      f++
                    )
                      e[f].split(".").reduce(function (a, c) {
                        return d.removeEventListener(c, b, !1), c;
                      }, "");
                  if (a.w)
                    for (
                      var h = a.d.split(" "), i = 0, k = h.length;
                      k > i;
                      i++
                    )
                      h[i].split(".").reduce(function (a, c) {
                        return j["default"].removeEventListener(c, b, !1), c;
                      }, "");
                },
              },
              {
                key: "buildposter",
                value: function (a, b, c, d) {
                  var e = this,
                    f = l["default"].createElement("div");
                  (f.className =
                    e.options.classPrefix +
                    "poster " +
                    e.options.classPrefix +
                    "layer"),
                    c.appendChild(f);
                  var g = a.media.getAttribute("poster");
                  "" !== a.options.poster && (g = a.options.poster),
                    g ? e.setPoster(g) : (f.style.display = "none"),
                    d.addEventListener("play", function () {
                      f.style.display = "none";
                    }),
                    d.addEventListener("playing", function () {
                      f.style.display = "none";
                    }),
                    a.options.showPosterWhenEnded &&
                      a.options.autoRewind &&
                      d.addEventListener("ended", function () {
                        f.style.display = "";
                      }),
                    d.addEventListener("error", function () {
                      f.style.display = "none";
                    }),
                    a.options.showPosterWhenPaused &&
                      d.addEventListener("pause", function () {
                        d.ended || (f.style.display = "");
                      });
                },
              },
              {
                key: "buildoverlays",
                value: function (a, b, c, d) {
                  if (a.isVideo) {
                    var e = this,
                      f = l["default"].createElement("div"),
                      g = l["default"].createElement("div"),
                      h = l["default"].createElement("div"),
                      i = b.querySelector(
                        "." + e.options.classPrefix + "time-buffering"
                      );
                    (f.style.display = "none"),
                      (f.className =
                        e.options.classPrefix +
                        "overlay " +
                        e.options.classPrefix +
                        "layer"),
                      (f.innerHTML =
                        '<div className="' +
                        e.options.classPrefix +
                        'overlay-loading">' +
                        ('<span className="' +
                          e.options.classPrefix +
                          'overlay-loading-bg-img"></span>') +
                        "</div>"),
                      c.appendChild(f),
                      (g.style.display = "none"),
                      (g.className =
                        e.options.classPrefix +
                        "overlay " +
                        e.options.classPrefix +
                        "layer"),
                      (g.innerHTML =
                        '<div className="' +
                        e.options.classPrefix +
                        'overlay-error"></div>'),
                      c.appendChild(g),
                      (h.className =
                        e.options.classPrefix +
                        "overlay " +
                        e.options.classPrefix +
                        "layer " +
                        e.options.classPrefix +
                        "overlay-play"),
                      (h.innerHTML =
                        '<div className="' +
                        e.options.classPrefix +
                        'overlay-button" role="button" tabindex="0"' +
                        ('aria-label="' +
                          r["default"].t("mejs.play") +
                          '" aria-pressed="false"></div>')),
                      h.addEventListener("click", function () {
                        if (e.options.clickToPlayPause) {
                          var a = e.container.querySelector(
                              "." + e.options.classPrefix + "overlay-button"
                            ),
                            b = a.getAttribute("aria-pressed");
                          d.paused ? d.play() : d.pause(),
                            a.setAttribute("aria-pressed", !!b);
                        }
                      }),
                      c.appendChild(h),
                      null !== e.media.rendererName &&
                        ((e.media.rendererName.match(/(youtube|facebook)/) &&
                          !a.media.originalNode.getAttribute("poster") &&
                          !a.options.poster) ||
                          s.IS_STOCK_ANDROID) &&
                        (h.style.display = "none"),
                      d.addEventListener("play", function () {
                        (h.style.display = "none"),
                          (f.style.display = "none"),
                          i && (i.style.display = "none"),
                          (g.style.display = "none");
                      }),
                      d.addEventListener("playing", function () {
                        (h.style.display = "none"),
                          (f.style.display = "none"),
                          i && (i.style.display = "none"),
                          (g.style.display = "none");
                      }),
                      d.addEventListener("seeking", function () {
                        (h.style.display = "none"),
                          (f.style.display = ""),
                          i && (i.style.display = "");
                      }),
                      d.addEventListener("seeked", function () {
                        (h.style.display =
                          d.paused && !s.IS_STOCK_ANDROID ? "" : "none"),
                          (f.style.display = "none"),
                          i && (i.style.display = "");
                      }),
                      d.addEventListener("pause", function () {
                        (f.style.display = "none"),
                          s.IS_STOCK_ANDROID || (h.style.display = ""),
                          i && (i.style.display = "none");
                      }),
                      d.addEventListener("waiting", function () {
                        (f.style.display = ""), i && (i.style.display = "");
                      }),
                      d.addEventListener("loadeddata", function () {
                        (f.style.display = ""),
                          i && (i.style.display = ""),
                          s.IS_ANDROID &&
                            (d.canplayTimeout = setTimeout(function () {
                              if (l["default"].createEvent) {
                                var a = l["default"].createEvent("HTMLEvents");
                                return (
                                  a.initEvent("canplay", !0, !0),
                                  d.dispatchEvent(a)
                                );
                              }
                            }, 300));
                      }),
                      d.addEventListener("canplay", function () {
                        (f.style.display = "none"),
                          i && (i.style.display = "none"),
                          clearTimeout(d.canplayTimeout);
                      }),
                      d.addEventListener("error", function (a) {
                        e._handleError(a),
                          (f.style.display = "none"),
                          (h.style.display = "none"),
                          i && (i.style.display = "none"),
                          a.message &&
                            ((g.style.display = "block"),
                            (g.querySelector(
                              "." + e.options.classPrefix + "overlay-error"
                            ).innerHTML = a.message));
                      }),
                      d.addEventListener("keydown", function (b) {
                        e.onkeydown(a, d, b);
                      });
                  }
                },
              },
              {
                key: "buildkeyboard",
                value: function (a, b, c, d) {
                  var e = this;
                  e.container.addEventListener("keydown", function () {
                    e.keyboardAction = !0;
                  }),
                    e.globalBind("keydown", function (b) {
                      var c = l["default"].activeElement.closest(
                          "." + e.options.classPrefix + "container"
                        ),
                        f = e.media.closest(
                          "." + e.options.classPrefix + "container"
                        );
                      return (
                        (e.hasFocus = !(!c || !f || c.id !== f.id)),
                        e.onkeydown(a, d, b)
                      );
                    }),
                    e.globalBind("click", function (a) {
                      e.hasFocus = !!a.target.closest(
                        "." + e.options.classPrefix + "container"
                      );
                    });
                },
              },
              {
                key: "onkeydown",
                value: function (a, b, c) {
                  if (a.hasFocus && a.options.enableKeyboard)
                    for (var d = 0, e = a.options.keyActions.length; e > d; d++)
                      for (
                        var f = a.options.keyActions[d],
                          g = 0,
                          h = f.keys.length;
                        h > g;
                        g++
                      )
                        c.keyCode === f.keys[g] &&
                          (f.action(a, b, c.keyCode, c),
                          c.preventDefault(),
                          c.stopPropagation());
                  return !0;
                },
              },
              {
                key: "play",
                value: function () {
                  var a = this;
                  a.media.getCurrentTime() <= 0 && a.load(), a.media.play();
                },
              },
              {
                key: "pause",
                value: function () {
                  try {
                    this.media.pause();
                  } catch (a) {}
                },
              },
              {
                key: "load",
                value: function () {
                  var a = this;
                  a.isLoaded || a.media.load(), (a.isLoaded = !0);
                },
              },
              {
                key: "setMuted",
                value: function (a) {
                  this.media.setMuted(a);
                },
              },
              {
                key: "setCurrentTime",
                value: function (a) {
                  this.media.setCurrentTime(a);
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.media.currentTime;
                },
              },
              {
                key: "setVolume",
                value: function (a) {
                  this.media.setVolume(a);
                },
              },
              {
                key: "getVolume",
                value: function () {
                  return this.media.volume;
                },
              },
              {
                key: "setSrc",
                value: function (a) {
                  var b = this,
                    c = l["default"].getElementById(
                      b.media.id + "-iframe-overlay"
                    );
                  c && c.remove(), b.media.setSrc(a), b.createIframeLayer();
                },
              },
              {
                key: "remove",
                value: function () {
                  var a = this,
                    b = a.media.rendererName;
                  a.media.paused || a.media.pause();
                  var c = a.media.getSrc();
                  a.media.setSrc("");
                  for (var d in a.options.features) {
                    var e = a.options.features[d];
                    if (a["clean" + e])
                      try {
                        a["clean" + e](a);
                      } catch (f) {
                        console.error("error cleaning " + e, f);
                      }
                  }
                  var h = a.node.getAttribute("width"),
                    i = a.node.getAttribute("height");
                  if (
                    (h ? null === h.match("%") && (h += "px") : (h = "auto"),
                    i ? null === i.match("%") && (i += "px") : (i = "auto"),
                    (a.node.style.width = h),
                    (a.node.style.height = i),
                    a.isDynamic
                      ? a.container.parentNode.insertBefore(a.node, a.container)
                      : !(function () {
                          if (
                            (a.node.setAttribute("controls", !0),
                            a.node.setAttribute(
                              "id",
                              a.node
                                .getAttribute("id")
                                .replace("_" + b, "")
                                .replace("_from_mejs", "")
                            ),
                            delete a.node.autoplay,
                            "" !== a.media.canPlayType(v.getTypeFromFile(c)) &&
                              a.node.setAttribute("src", c),
                            null !== b.match(/iframe/i))
                          ) {
                            var d = l["default"].getElementById(
                              a.media.id + "-iframe-overlay"
                            );
                            d.remove();
                          }
                          var e = a.node.cloneNode();
                          if (
                            ((e.style.display = ""),
                            a.container.parentNode.insertBefore(e, a.container),
                            a.node.remove(),
                            a.mediaFiles)
                          )
                            for (
                              var f = 0, g = a.mediaFiles.length;
                              g > f;
                              f++
                            ) {
                              var h = l["default"].createElement("source");
                              h.setAttribute("src", a.mediaFiles[f].src),
                                h.setAttribute("type", a.mediaFiles[f].type),
                                e.appendChild(h);
                            }
                          if (a.trackFiles)
                            for (
                              var i = function (b, c) {
                                  var d = a.trackFiles[b],
                                    f = l["default"].createElement("track");
                                  (f.kind = d.kind),
                                    (f.label = d.label),
                                    (f.srclang = d.srclang),
                                    (f.src = d.src),
                                    e.appendChild(f),
                                    f.addEventListener("load", function () {
                                      (this.mode = "showing"),
                                        (e.textTracks[b].mode = "showing");
                                    });
                                },
                                j = 0,
                                k = a.trackFiles.length;
                              k > j;
                              j++
                            )
                              i(j, k);
                          delete a.node,
                            delete a.mediaFiles,
                            delete a.trackFiles;
                        })(),
                    "function" == typeof a.media.destroy && a.media.destroy(),
                    delete n["default"].players[a.id],
                    "object" === g(a.container))
                  ) {
                    var j = a.container.parentNode.querySelector(
                      "." + a.options.classPrefix + "offscreen"
                    );
                    j.remove(), a.container.remove();
                  }
                  a.globalUnbind(), delete a.media.player;
                },
              },
            ]),
            a
          );
        })();
        (j["default"].MediaElementPlayer = z),
          (c["default"] = z),
          (function (a) {
            "undefined" != typeof a &&
              ((a.fn.mediaelementplayer = function (b) {
                return (
                  b === !1
                    ? this.each(function () {
                        var b = a(this).data("mediaelementplayer");
                        b && b.remove(),
                          a(this).removeData("mediaelementplayer");
                      })
                    : this.each(function () {
                        a(this).data("mediaelementplayer", new z(this, b));
                      }),
                  this
                );
              }),
              a(l["default"]).ready(function () {
                a("." + y.classPrefix + "player").mediaelementplayer();
              }));
          })(n["default"].$);
      },
      { 2: 2, 23: 23, 24: 24, 25: 25, 26: 26, 28: 28, 3: 3, 4: 4, 5: 5, 6: 6 },
    ],
    17: [
      function (a, b, c) {
        "use strict";
        function d(a) {
          return a && a.__esModule ? a : { default: a };
        }
        var e = a(3),
          f = d(e),
          g = a(2),
          h = d(g),
          i = a(6),
          j = d(i),
          k = a(7),
          l = a(25),
          m = a(26),
          n = a(23),
          o = {
            isMediaLoaded: !1,
            creationQueue: [],
            prepareSettings: function (a) {
              o.isLoaded
                ? o.createInstance(a)
                : (o.loadScript(a), o.creationQueue.push(a));
            },
            loadScript: function (a) {
              "undefined" != typeof dashjs
                ? o.createInstance(a)
                : o.isScriptLoaded ||
                  !(function () {
                    a.options.path =
                      "string" == typeof a.options.path
                        ? a.options.path
                        : "//cdn.dashjs.org/latest/dash.mediaplayer.min.js";
                    var b = h["default"].createElement("script"),
                      c = h["default"].getElementsByTagName("script")[0],
                      d = !1;
                    (b.src = a.options.path),
                      (b.onload = b.onreadystatechange = function () {
                        d ||
                          (this.readyState &&
                            void 0 !== this.readyState &&
                            "loaded" !== this.readyState &&
                            "complete" !== this.readyState) ||
                          ((d = !0),
                          o.mediaReady(),
                          (b.onload = b.onreadystatechange = null));
                      }),
                      c.parentNode.insertBefore(b, c),
                      (o.isScriptLoaded = !0);
                  })();
            },
            mediaReady: function () {
              for (
                o.isLoaded = !0, o.isScriptLoaded = !0;
                o.creationQueue.length > 0;

              ) {
                var a = o.creationQueue.pop();
                o.createInstance(a);
              }
            },
            createInstance: function (a) {
              var b = dashjs.MediaPlayer().create();
              f["default"]["__ready__" + a.id](b);
            },
          },
          p = {
            name: "native_dash",
            options: {
              prefix: "native_dash",
              dash: {
                path: "//cdn.dashjs.org/latest/dash.mediaplayer.min.js",
                debug: !1,
              },
            },
            canPlayType: function (a) {
              return n.HAS_MSE && ["application/dash+xml"].includes(a);
            },
            create: function (a, b, c) {
              var d = a.originalNode,
                e = a.id + "_" + b.prefix,
                g = d.getAttribute("preload"),
                h = d.autoplay,
                i = null,
                m = null;
              (i = d.cloneNode(!0)), (b = Object.assign(b, a.options));
              for (
                var n = j["default"].html5media.properties,
                  p = function (a) {
                    var b =
                      "" + a.substring(0, 1).toUpperCase() + a.substring(1);
                    (i["get" + b] = function () {
                      return null !== m ? i[a] : null;
                    }),
                      (i["set" + b] = function (b) {
                        j["default"].html5media.readOnlyProperties.includes(
                          a
                        ) ||
                          (null !== m &&
                            ("src" === a && (m.attachSource(b), h && i.play()),
                            (i[a] = b)));
                      });
                  },
                  q = 0,
                  r = n.length;
                r > q;
                q++
              )
                p(n[q]);
              if (
                ((f["default"]["__ready__" + e] = function (c) {
                  (a.dashPlayer = m = c),
                    m.getDebug().setLogToBrowserConsole(b.dash.debug),
                    m.setAutoPlay((g && "auto" === g) || h),
                    m.setScheduleWhilePaused((g && "auto" === g) || h);
                  for (
                    var d = j["default"].html5media.events.concat([
                        "click",
                        "mouseover",
                        "mouseout",
                      ]),
                      e = dashjs.MediaPlayer.events,
                      f = function (b) {
                        "loadedmetadata" === b && m.initialize(i, i.src, !1),
                          i.addEventListener(b, function (b) {
                            var c = l.createEvent(b.type, a);
                            a.dispatchEvent(c);
                          });
                      },
                      k = 0,
                      n = d.length;
                    n > k;
                    k++
                  )
                    f(d[k]);
                  var o = function (b) {
                    var c = l.createEvent(b.type, i);
                    (c.data = b),
                      a.dispatchEvent(c),
                      "error" === b.type.toLowerCase() && console.error(b);
                  };
                  for (var p in e) e.hasOwnProperty(p) && m.on(e[p], o);
                }),
                c && c.length > 0)
              )
                for (var s = 0, t = c.length; t > s; s++)
                  if (k.renderer.renderers[b.prefix].canPlayType(c[s].type)) {
                    i.setAttribute("src", c[s].src);
                    break;
                  }
              i.setAttribute("id", e),
                d.parentNode.insertBefore(i, d),
                (d.autoplay = !1),
                (d.style.display = "none"),
                o.prepareSettings({ options: b.dash, id: e }),
                (i.setSize = function (a, b) {
                  return (
                    (i.style.width = a + "px"), (i.style.height = b + "px"), i
                  );
                }),
                (i.hide = function () {
                  return i.pause(), (i.style.display = "none"), i;
                }),
                (i.show = function () {
                  return (i.style.display = ""), i;
                });
              var u = l.createEvent("rendererready", i);
              return a.dispatchEvent(u), i;
            },
          };
        m.typeChecks.push(function (a) {
          return (
            (a = a.toLowerCase()),
            a.includes(".mpd") ? "application/dash+xml" : null
          );
        }),
          k.renderer.add(p);
      },
      { 2: 2, 23: 23, 25: 25, 26: 26, 3: 3, 6: 6, 7: 7 },
    ],
    18: [
      function (a, b, c) {
        "use strict";
        function d(a) {
          return a && a.__esModule ? a : { default: a };
        }
        Object.defineProperty(c, "__esModule", { value: !0 }),
          (c.PluginDetector = void 0);
        var e =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (a) {
                  return typeof a;
                }
              : function (a) {
                  return a &&
                    "function" == typeof Symbol &&
                    a.constructor === Symbol &&
                    a !== Symbol.prototype
                    ? "symbol"
                    : typeof a;
                },
          f = a(3),
          g = d(f),
          h = a(2),
          i = d(h),
          j = a(6),
          k = d(j),
          l = a(4),
          m = d(l),
          n = a(7),
          o = a(25),
          p = a(23),
          q = a(26),
          r = (c.PluginDetector = {
            plugins: [],
            hasPluginVersion: function (a, b) {
              var c = r.plugins[a];
              return (
                (b[1] = b[1] || 0),
                (b[2] = b[2] || 0),
                c[0] > b[0] ||
                  (c[0] === b[0] && c[1] > b[1]) ||
                  (c[0] === b[0] && c[1] === b[1] && c[2] >= b[2])
              );
            },
            addPlugin: function (a, b, c, d, e) {
              r.plugins[a] = r.detectPlugin(b, c, d, e);
            },
            detectPlugin: function (a, b, c, d) {
              var f = [0, 0, 0],
                h = void 0,
                i = void 0;
              if (
                null !== p.NAV.plugins &&
                void 0 !== p.NAV.plugins &&
                "object" === e(p.NAV.plugins[a])
              ) {
                if (
                  ((h = p.NAV.plugins[a].description),
                  h &&
                    ("undefined" == typeof p.NAV.mimeTypes ||
                      !p.NAV.mimeTypes[b] ||
                      p.NAV.mimeTypes[b].enabledPlugin))
                ) {
                  f = h
                    .replace(a, "")
                    .replace(/^\s+/, "")
                    .replace(/\sr/gi, ".")
                    .split(".");
                  for (var j = 0, k = f.length; k > j; j++)
                    f[j] = parseInt(f[j].match(/\d+/), 10);
                }
              } else if (void 0 !== g["default"].ActiveXObject)
                try {
                  (i = new ActiveXObject(c)), i && (f = d(i));
                } catch (l) {}
              return f;
            },
          });
        r.addPlugin(
          "flash",
          "Shockwave Flash",
          "application/x-shockwave-flash",
          "ShockwaveFlash.ShockwaveFlash",
          function (a) {
            var b = [],
              c = a.GetVariable("$version");
            return (
              c &&
                ((c = c.split(" ")[1].split(",")),
                (b = [
                  parseInt(c[0], 10),
                  parseInt(c[1], 10),
                  parseInt(c[2], 10),
                ])),
              b
            );
          }
        );
        var s = {
            create: function (a, b, c) {
              var d = {};
              (d.options = b),
                (d.id = a.id + "_" + d.options.prefix),
                (d.mediaElement = a),
                (d.flashState = {}),
                (d.flashApi = null),
                (d.flashApiStack = []);
              for (
                var f = k["default"].html5media.properties,
                  h = function (a) {
                    d.flashState[a] = null;
                    var b =
                      "" + a.substring(0, 1).toUpperCase() + a.substring(1);
                    (d["get" + b] = function () {
                      if (null === d.flashApi) return null;
                      if (void 0 === d.flashApi["get_" + a]) return null;
                      var b = (function () {
                        var b = d.flashApi["get_" + a]();
                        return "buffered" === a
                          ? {
                              v: {
                                start: function () {
                                  return 0;
                                },
                                end: function () {
                                  return b;
                                },
                                length: 1,
                              },
                            }
                          : { v: b };
                      })();
                      return "object" ===
                        ("undefined" == typeof b ? "undefined" : e(b))
                        ? b.v
                        : void 0;
                    }),
                      (d["set" + b] = function (b) {
                        "src" === a && (b = q.absolutizeUrl(b)),
                          null !== d.flashApi &&
                          void 0 !== d.flashApi["set_" + a]
                            ? d.flashApi["set_" + a](b)
                            : d.flashApiStack.push({
                                type: "set",
                                propName: a,
                                value: b,
                              });
                      });
                  },
                  j = 0,
                  l = f.length;
                l > j;
                j++
              )
                h(f[j]);
              var r = k["default"].html5media.methods,
                s = function (a) {
                  d[a] = function () {
                    if (null !== d.flashApi) {
                      if (d.flashApi["fire_" + a])
                        try {
                          d.flashApi["fire_" + a]();
                        } catch (b) {}
                    } else
                      d.flashApiStack.push({ type: "call", methodName: a });
                  };
                };
              r.push("stop");
              for (var t = 0, u = r.length; u > t; t++) s(r[t]);
              for (var v = ["rendererready"], w = 0, x = v.length; x > w; w++) {
                var y = o.createEvent(v[w], d);
                a.dispatchEvent(y);
              }
              (g["default"]["__ready__" + d.id] = function () {
                if (
                  ((d.flashReady = !0),
                  (d.flashApi = i["default"].getElementById("__" + d.id)),
                  d.flashApiStack.length)
                )
                  for (var a = 0, b = d.flashApiStack.length; b > a; a++) {
                    var c = d.flashApiStack[a];
                    if ("set" === c.type) {
                      var e = c.propName,
                        f =
                          "" + e.substring(0, 1).toUpperCase() + e.substring(1);
                      d["set" + f](c.value);
                    } else "call" === c.type && d[c.methodName]();
                  }
              }),
                (g["default"]["__event__" + d.id] = function (a, b) {
                  var c = o.createEvent(a, d);
                  (c.message = b || ""), d.mediaElement.dispatchEvent(c);
                }),
                (d.flashWrapper = i["default"].createElement("div")),
                ["always", "sameDomain"].includes(d.options.shimScriptAccess) ||
                  (d.options.shimScriptAccess = "sameDomain");
              var z = a.originalNode.autoplay,
                A = [
                  "uid=" + d.id,
                  "autoplay=" + z,
                  "allowScriptAccess=" + d.options.shimScriptAccess,
                ],
                B =
                  null !== a.originalNode &&
                  "video" === a.originalNode.tagName.toLowerCase(),
                C = B ? a.originalNode.height : 1,
                D = B ? a.originalNode.width : 1;
              a.originalNode.getAttribute("src") &&
                A.push("src=" + a.originalNode.getAttribute("src")),
                d.options.enablePseudoStreaming === !0 &&
                  (A.push(
                    "pseudostreamstart=" +
                      d.options.pseudoStreamingStartQueryParam
                  ),
                  A.push("pseudostreamtype=" + d.options.pseudoStreamingType)),
                a.appendChild(d.flashWrapper),
                null !== a.originalNode &&
                  (a.originalNode.style.display = "none");
              var E = [];
              if (p.IS_IE) {
                var F = i["default"].createElement("div");
                d.flashWrapper.appendChild(F),
                  (E = [
                    'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"',
                    'codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"',
                    'id="__' + d.id + '"',
                    'width="' + D + '"',
                    'height="' + C + '"',
                  ]),
                  B ||
                    E.push('style="clip: rect(0 0 0 0); position: absolute;"'),
                  (F.outerHTML =
                    "<object " +
                    E.join(" ") +
                    ">" +
                    ('<param name="movie" value="' +
                      d.options.pluginPath +
                      d.options.filename +
                      "?x=" +
                      new Date() +
                      '" />') +
                    ('<param name="flashvars" value="' +
                      A.join("&amp;") +
                      '" />') +
                    '<param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" />' +
                    ('<param name="allowScriptAccess" value="' +
                      d.options.shimScriptAccess +
                      '" />') +
                    '<param name="allowFullScreen" value="true" />' +
                    ("<div>" +
                      m["default"].t("mejs.install-flash") +
                      "</div>") +
                    "</object>");
              } else
                (E = [
                  'id="__' + d.id + '"',
                  'name="__' + d.id + '"',
                  'play="true"',
                  'loop="false"',
                  'quality="high"',
                  'bgcolor="#000000"',
                  'wmode="transparent"',
                  'allowScriptAccess="' + d.options.shimScriptAccess + '"',
                  'allowFullScreen="true"',
                  'type="application/x-shockwave-flash"',
                  'pluginspage="//www.macromedia.com/go/getflashplayer"',
                  'src="' + d.options.pluginPath + d.options.filename + '"',
                  'flashvars="' + A.join("&") + '"',
                  'width="' + D + '"',
                  'height="' + C + '"',
                ]),
                  B ||
                    E.push('style="clip: rect(0 0 0 0); position: absolute;"'),
                  (d.flashWrapper.innerHTML = "<embed " + E.join(" ") + ">");
              if (
                ((d.flashNode = d.flashWrapper.lastChild),
                (d.hide = function () {
                  B && (d.flashNode.style.display = "none");
                }),
                (d.show = function () {
                  B && (d.flashNode.style.display = "");
                }),
                (d.setSize = function (a, b) {
                  (d.flashNode.style.width = a + "px"),
                    (d.flashNode.style.height = b + "px"),
                    null !== d.flashApi &&
                      "function" == typeof d.flashApi.fire_setSize &&
                      d.flashApi.fire_setSize(a, b);
                }),
                (d.destroy = function () {
                  d.flashNode.remove();
                }),
                c && c.length > 0)
              )
                for (var G = 0, H = c.length; H > G; G++)
                  if (n.renderer.renderers[b.prefix].canPlayType(c[G].type)) {
                    d.setSrc(c[G].src);
                    break;
                  }
              return d;
            },
          },
          t = r.hasPluginVersion("flash", [10, 0, 0]);
        if (t) {
          q.typeChecks.push(function (a) {
            return (
              (a = a.toLowerCase()),
              a.startsWith("rtmp")
                ? a.includes(".mp3")
                  ? "audio/rtmp"
                  : "video/rtmp"
                : a.includes(".oga") || a.includes(".ogg")
                ? "audio/ogg"
                : a.includes(".m3u8")
                ? "application/x-mpegURL"
                : a.includes(".mpd")
                ? "application/dash+xml"
                : a.includes(".flv")
                ? "video/flv"
                : null
            );
          });
          var u = {
            name: "flash_video",
            options: {
              prefix: "flash_video",
              filename: "mediaelement-flash-video.swf",
              enablePseudoStreaming: !1,
              pseudoStreamingStartQueryParam: "start",
              pseudoStreamingType: "byte",
            },
            canPlayType: function (a) {
              return [
                "video/mp4",
                "video/rtmp",
                "audio/rtmp",
                "rtmp/mp4",
                "audio/mp4",
                "video/flv",
                "video/x-flv",
              ].includes(a.toLowerCase());
            },
            create: s.create,
          };
          n.renderer.add(u);
          var v = {
            name: "flash_hls",
            options: {
              prefix: "flash_hls",
              filename: "mediaelement-flash-video-hls.swf",
            },
            canPlayType: function (a) {
              return [
                "application/x-mpegurl",
                "vnd.apple.mpegurl",
                "audio/mpegurl",
                "audio/hls",
                "video/hls",
              ].includes(a.toLowerCase());
            },
            create: s.create,
          };
          n.renderer.add(v);
          var w = {
            name: "flash_dash",
            options: {
              prefix: "flash_dash",
              filename: "mediaelement-flash-video-mdash.swf",
            },
            canPlayType: function (a) {
              return ["application/dash+xml"].includes(a.toLowerCase());
            },
            create: s.create,
          };
          n.renderer.add(w);
          var x = {
            name: "flash_audio",
            options: {
              prefix: "flash_audio",
              filename: "mediaelement-flash-audio.swf",
            },
            canPlayType: function (a) {
              return ["audio/mp3"].includes(a.toLowerCase());
            },
            create: s.create,
          };
          n.renderer.add(x);
          var y = {
            name: "flash_audio_ogg",
            options: {
              prefix: "flash_audio_ogg",
              filename: "mediaelement-flash-audio-ogg.swf",
            },
            canPlayType: function (a) {
              return ["audio/ogg", "audio/oga", "audio/ogv"].includes(
                a.toLowerCase()
              );
            },
            create: s.create,
          };
          n.renderer.add(y);
        }
      },
      { 2: 2, 23: 23, 25: 25, 26: 26, 3: 3, 4: 4, 6: 6, 7: 7 },
    ],
    19: [
      function (a, b, c) {
        "use strict";
        function d(a) {
          return a && a.__esModule ? a : { default: a };
        }
        var e = a(3),
          f = d(e),
          g = a(2),
          h = d(g),
          i = a(6),
          j = d(i),
          k = a(7),
          l = a(25),
          m = a(23),
          n = a(26),
          o = {
            isMediaStarted: !1,
            isMediaLoaded: !1,
            creationQueue: [],
            prepareSettings: function (a) {
              o.isLoaded
                ? o.createInstance(a)
                : (o.loadScript(a), o.creationQueue.push(a));
            },
            loadScript: function (a) {
              "undefined" != typeof flvjs
                ? o.createInstance(a)
                : o.isMediaStarted ||
                  !(function () {
                    a.options.path =
                      "string" == typeof a.options.path
                        ? a.options.path
                        : "//cdnjs.cloudflare.com/ajax/libs/flv.js/1.1.0/flv.min.js";
                    var b = h["default"].createElement("script"),
                      c = h["default"].getElementsByTagName("script")[0],
                      d = !1;
                    (b.src = a.options.path),
                      (b.onload = b.onreadystatechange = function () {
                        d ||
                          (this.readyState &&
                            void 0 !== this.readyState &&
                            "loaded" !== this.readyState &&
                            "complete" !== this.readyState) ||
                          ((d = !0),
                          o.mediaReady(),
                          (b.onload = b.onreadystatechange = null));
                      }),
                      c.parentNode.insertBefore(b, c),
                      (o.isMediaStarted = !0);
                  })();
            },
            mediaReady: function () {
              for (
                o.isLoaded = !0, o.isMediaLoaded = !0;
                o.creationQueue.length > 0;

              ) {
                var a = o.creationQueue.pop();
                o.createInstance(a);
              }
            },
            createInstance: function (a) {
              var b = flvjs.createPlayer(a.options);
              f["default"]["__ready__" + a.id](b);
            },
          },
          p = {
            name: "native_flv",
            options: {
              prefix: "native_flv",
              flv: {
                path:
                  "//cdnjs.cloudflare.com/ajax/libs/flv.js/1.1.0/flv.min.js",
                cors: !0,
              },
            },
            canPlayType: function (a) {
              return m.HAS_MSE && ["video/x-flv", "video/flv"].includes(a);
            },
            create: function (a, b, c) {
              var d = a.originalNode,
                e = a.id + "_" + b.prefix,
                g = null,
                h = null;
              (g = d.cloneNode(!0)), (b = Object.assign(b, a.options));
              for (
                var i = j["default"].html5media.properties,
                  m = function (a) {
                    var b =
                      "" + a.substring(0, 1).toUpperCase() + a.substring(1);
                    (g["get" + b] = function () {
                      return null !== h ? g[a] : null;
                    }),
                      (g["set" + b] = function (b) {
                        j["default"].html5media.readOnlyProperties.includes(
                          a
                        ) ||
                          (null !== h &&
                            ((g[a] = b),
                            "src" === a &&
                              (h.unload(),
                              h.detachMediaElement(),
                              h.attachMediaElement(g),
                              h.load())));
                      });
                  },
                  n = 0,
                  p = i.length;
                p > n;
                n++
              )
                m(i[n]);
              if (
                ((f["default"]["__ready__" + e] = function (b) {
                  a.flvPlayer = h = b;
                  for (
                    var c = j["default"].html5media.events.concat([
                        "click",
                        "mouseover",
                        "mouseout",
                      ]),
                      d = function (b) {
                        "loadedmetadata" === b &&
                          (h.unload(),
                          h.detachMediaElement(),
                          h.attachMediaElement(g),
                          h.load()),
                          g.addEventListener(b, function (b) {
                            var c = l.createEvent(b.type, a);
                            a.dispatchEvent(c);
                          });
                      },
                      e = 0,
                      f = c.length;
                    f > e;
                    e++
                  )
                    d(c[e]);
                }),
                c && c.length > 0)
              )
                for (var q = 0, r = c.length; r > q; q++)
                  if (k.renderer.renderers[b.prefix].canPlayType(c[q].type)) {
                    g.setAttribute("src", c[q].src);
                    break;
                  }
              g.setAttribute("id", e),
                d.parentNode.insertBefore(g, d),
                (d.autoplay = !1),
                (d.style.display = "none"),
                (b.flv.type = "flv"),
                (b.flv.url = g.getAttribute("src")),
                o.prepareSettings({ options: b.flv, id: e }),
                (g.setSize = function (a, b) {
                  return (
                    (g.style.width = a + "px"), (g.style.height = b + "px"), g
                  );
                }),
                (g.hide = function () {
                  return null !== h && h.pause(), (g.style.display = "none"), g;
                }),
                (g.show = function () {
                  return (g.style.display = ""), g;
                }),
                (g.destroy = function () {
                  null !== h && h.destroy();
                });
              var s = l.createEvent("rendererready", g);
              return a.dispatchEvent(s), g;
            },
          };
        n.typeChecks.push(function (a) {
          return (a = a.toLowerCase()), a.includes(".flv") ? "video/flv" : null;
        }),
          k.renderer.add(p);
      },
      { 2: 2, 23: 23, 25: 25, 26: 26, 3: 3, 6: 6, 7: 7 },
    ],
    20: [
      function (a, b, c) {
        "use strict";
        function d(a) {
          return a && a.__esModule ? a : { default: a };
        }
        var e = a(3),
          f = d(e),
          g = a(2),
          h = d(g),
          i = a(6),
          j = d(i),
          k = a(7),
          l = a(25),
          m = a(23),
          n = a(26),
          o = {
            isMediaStarted: !1,
            isMediaLoaded: !1,
            creationQueue: [],
            prepareSettings: function (a) {
              o.isLoaded
                ? o.createInstance(a)
                : (o.loadScript(a), o.creationQueue.push(a));
            },
            loadScript: function (a) {
              "undefined" != typeof Hls
                ? o.createInstance(a)
                : o.isMediaStarted ||
                  !(function () {
                    a.options.path =
                      "string" == typeof a.options.path
                        ? a.options.path
                        : "//cdn.jsdelivr.net/hls.js/latest/hls.min.js";
                    var b = h["default"].createElement("script"),
                      c = h["default"].getElementsByTagName("script")[0],
                      d = !1;
                    (b.src = a.options.path),
                      (b.onload = b.onreadystatechange = function () {
                        d ||
                          (this.readyState &&
                            void 0 !== this.readyState &&
                            "loaded" !== this.readyState &&
                            "complete" !== this.readyState) ||
                          ((d = !0),
                          o.mediaReady(),
                          (b.onload = b.onreadystatechange = null));
                      }),
                      c.parentNode.insertBefore(b, c),
                      (o.isMediaStarted = !0);
                  })();
            },
            mediaReady: function () {
              for (
                o.isLoaded = !0, o.isMediaLoaded = !0;
                o.creationQueue.length > 0;

              ) {
                var a = o.creationQueue.pop();
                o.createInstance(a);
              }
            },
            createInstance: function (a) {
              var b = new Hls(a.options);
              return f["default"]["__ready__" + a.id](b), b;
            },
          },
          p = {
            name: "native_hls",
            options: {
              prefix: "native_hls",
              hls: {
                path: "//cdn.jsdelivr.net/hls.js/latest/hls.min.js",
                autoStartLoad: !1,
                debug: !1,
              },
            },
            canPlayType: function (a) {
              return (
                m.HAS_MSE &&
                [
                  "application/x-mpegurl",
                  "vnd.apple.mpegurl",
                  "audio/mpegurl",
                  "audio/hls",
                  "video/hls",
                ].includes(a.toLowerCase())
              );
            },
            create: function (a, b, c) {
              var d = a.originalNode,
                e = a.id + "_" + b.prefix,
                g = d.getAttribute("preload"),
                h = d.autoplay,
                i = null,
                m = null;
              (m = d.cloneNode(!0)),
                (b = Object.assign(b, a.options)),
                (b.hls.autoStartLoad = (g && "none" !== g) || h);
              for (
                var n = j["default"].html5media.properties,
                  p = function (a) {
                    var c =
                      "" + a.substring(0, 1).toUpperCase() + a.substring(1);
                    (m["get" + c] = function () {
                      return null !== i ? m[a] : null;
                    }),
                      (m["set" + c] = function (c) {
                        j["default"].html5media.readOnlyProperties.includes(
                          a
                        ) ||
                          (null !== i &&
                            ((m[a] = c),
                            "src" === a &&
                              (i.destroy(),
                              (i = o.createInstance({ options: b.hls, id: e })),
                              i.loadSource(c),
                              i.attachMedia(m))));
                      });
                  },
                  q = 0,
                  r = n.length;
                r > q;
                q++
              )
                p(n[q]);
              if (
                ((f["default"]["__ready__" + e] = function (b) {
                  a.hlsPlayer = i = b;
                  for (
                    var c = j["default"].html5media.events.concat([
                        "click",
                        "mouseover",
                        "mouseout",
                      ]),
                      d = Hls.Events,
                      e = function (b) {
                        if ("loadedmetadata" === b) {
                          var c = a.originalNode.src;
                          i.detachMedia(), i.loadSource(c), i.attachMedia(m);
                        }
                        m.addEventListener(b, function (b) {
                          var c = l.createEvent(b.type, a);
                          a.dispatchEvent(c);
                        });
                      },
                      f = 0,
                      g = c.length;
                    g > f;
                    f++
                  )
                    e(c[f]);
                  var h = void 0,
                    k = void 0,
                    n = function (b, c) {
                      var d = l.createEvent(b, m);
                      if (
                        ((d.data = c),
                        a.dispatchEvent(d),
                        "hlsError" === b && (console.warn(b, c), c.fatal))
                      )
                        switch (c.type) {
                          case "mediaError":
                            var e = new Date().getTime();
                            !h || e - h > 3e3
                              ? ((h = new Date().getTime()),
                                i.recoverMediaError())
                              : !k || e - k > 3e3
                              ? ((k = new Date().getTime()),
                                console.warn(
                                  "Attempting to swap Audio Codec and recover from media error"
                                ),
                                i.swapAudioCodec(),
                                i.recoverMediaError())
                              : console.error(
                                  "Cannot recover, last media error recovery failed"
                                );
                            break;
                          case "networkError":
                            console.error("Network error");
                            break;
                          default:
                            i.destroy();
                        }
                    };
                  for (var o in d) d.hasOwnProperty(o) && i.on(d[o], n);
                }),
                c && c.length > 0)
              )
                for (var s = 0, t = c.length; t > s; s++)
                  if (k.renderer.renderers[b.prefix].canPlayType(c[s].type)) {
                    m.setAttribute("src", c[s].src);
                    break;
                  }
              "auto" === g ||
                h ||
                (m.addEventListener("play", function () {
                  null !== i && i.startLoad();
                }),
                m.addEventListener("pause", function () {
                  null !== i && i.stopLoad();
                })),
                m.setAttribute("id", e),
                d.parentNode.insertBefore(m, d),
                (d.autoplay = !1),
                (d.style.display = "none"),
                o.prepareSettings({ options: b.hls, id: e }),
                (m.setSize = function (a, b) {
                  return (
                    (m.style.width = a + "px"), (m.style.height = b + "px"), m
                  );
                }),
                (m.hide = function () {
                  return m.pause(), (m.style.display = "none"), m;
                }),
                (m.show = function () {
                  return (m.style.display = ""), m;
                }),
                (m.destroy = function () {
                  null !== i && i.destroy();
                }),
                (m.stop = function () {
                  null !== i && i.stopLoad();
                });
              var u = l.createEvent("rendererready", m);
              return a.dispatchEvent(u), m;
            },
          };
        n.typeChecks.push(function (a) {
          return (
            (a = a.toLowerCase()),
            a.includes(".m3u8") ? "application/x-mpegURL" : null
          );
        }),
          k.renderer.add(p);
      },
      { 2: 2, 23: 23, 25: 25, 26: 26, 3: 3, 6: 6, 7: 7 },
    ],
    21: [
      function (a, b, c) {
        "use strict";
        function d(a) {
          return a && a.__esModule ? a : { default: a };
        }
        var e = a(3),
          f = d(e),
          g = a(2),
          h = d(g),
          i = a(6),
          j = d(i),
          k = a(7),
          l = a(25),
          m = a(23),
          n = {
            name: "html5",
            options: { prefix: "html5" },
            canPlayType: function (a) {
              var b = h["default"].createElement("video");
              return (m.IS_ANDROID && null !== a.match(/\/mp(3|4)$/gi)) ||
                ([
                  "application/x-mpegurl",
                  "vnd.apple.mpegurl",
                  "audio/mpegurl",
                  "audio/hls",
                  "video/hls",
                ].includes(a.toLowerCase()) &&
                  m.SUPPORTS_NATIVE_HLS)
                ? "yes"
                : b.canPlayType
                ? b.canPlayType(a).replace(/no/, "")
                : "";
            },
            create: function (a, b, c) {
              var d = a.id + "_" + b.prefix,
                e = null;
              void 0 === a.originalNode || null === a.originalNode
                ? ((e = h["default"].createElement("audio")), a.appendChild(e))
                : (e = a.originalNode),
                e.setAttribute("id", d);
              for (
                var f = j["default"].html5media.properties,
                  g = function (a) {
                    var b =
                      "" + a.substring(0, 1).toUpperCase() + a.substring(1);
                    (e["get" + b] = function () {
                      return e[a];
                    }),
                      (e["set" + b] = function (b) {
                        j["default"].html5media.readOnlyProperties.includes(
                          a
                        ) || (e[a] = b);
                      });
                  },
                  i = 0,
                  m = f.length;
                m > i;
                i++
              )
                g(f[i]);
              for (
                var n = j["default"].html5media.events.concat([
                    "click",
                    "mouseover",
                    "mouseout",
                  ]),
                  o = function (b) {
                    e.addEventListener(b, function (b) {
                      var c = l.createEvent(b.type, a);
                      a.dispatchEvent(c);
                    });
                  },
                  p = 0,
                  q = n.length;
                q > p;
                p++
              )
                o(n[p]);
              if (
                ((e.setSize = function (a, b) {
                  return (
                    (e.style.width = a + "px"), (e.style.height = b + "px"), e
                  );
                }),
                (e.hide = function () {
                  return (e.style.display = "none"), e;
                }),
                (e.show = function () {
                  return (e.style.display = ""), e;
                }),
                c && c.length > 0)
              )
                for (var r = 0, s = c.length; s > r; r++)
                  if (k.renderer.renderers[b.prefix].canPlayType(c[r].type)) {
                    e.setAttribute("src", c[r].src);
                    break;
                  }
              var t = l.createEvent("rendererready", e);
              return a.dispatchEvent(t), e;
            },
          };
        (f["default"].HtmlMediaElement = j["default"].HtmlMediaElement = n),
          k.renderer.add(n);
      },
      { 2: 2, 23: 23, 25: 25, 3: 3, 6: 6, 7: 7 },
    ],
    22: [
      function (a, b, c) {
        "use strict";
        function d(a) {
          return a && a.__esModule ? a : { default: a };
        }
        var e =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (a) {
                  return typeof a;
                }
              : function (a) {
                  return a &&
                    "function" == typeof Symbol &&
                    a.constructor === Symbol &&
                    a !== Symbol.prototype
                    ? "symbol"
                    : typeof a;
                },
          f = a(3),
          g = d(f),
          h = a(2),
          i = d(h),
          j = a(6),
          k = d(j),
          l = a(7),
          m = a(25),
          n = a(26),
          o = {
            isIframeStarted: !1,
            isIframeLoaded: !1,
            iframeQueue: [],
            enqueueIframe: function (a) {
              (o.isLoaded = "undefined" != typeof YT && YT.loaded),
                o.isLoaded
                  ? o.createIframe(a)
                  : (o.loadIframeApi(), o.iframeQueue.push(a));
            },
            loadIframeApi: function () {
              if (!o.isIframeStarted) {
                var a = i["default"].createElement("script");
                a.src = "//www.youtube.com/player_api";
                var b = i["default"].getElementsByTagName("script")[0];
                b.parentNode.insertBefore(a, b), (o.isIframeStarted = !0);
              }
            },
            iFrameReady: function () {
              for (
                o.isLoaded = !0, o.isIframeLoaded = !0;
                o.iframeQueue.length > 0;

              ) {
                var a = o.iframeQueue.pop();
                o.createIframe(a);
              }
            },
            createIframe: function (a) {
              return new YT.Player(a.containerId, a);
            },
            getYouTubeId: function (a) {
              var b = "";
              return (
                a.indexOf("?") > 0
                  ? ((b = o.getYouTubeIdFromParam(a)),
                    "" === b && (b = o.getYouTubeIdFromUrl(a)))
                  : (b = o.getYouTubeIdFromUrl(a)),
                b
              );
            },
            getYouTubeIdFromParam: function (a) {
              if (void 0 === a || null === a || !a.trim().length) return null;
              for (
                var b = a.split("?"),
                  c = b[1].split("&"),
                  d = "",
                  e = 0,
                  f = c.length;
                f > e;
                e++
              ) {
                var g = c[e].split("=");
                if ("v" === g[0]) {
                  d = g[1];
                  break;
                }
              }
              return d;
            },
            getYouTubeIdFromUrl: function (a) {
              if (void 0 === a || null === a || !a.trim().length) return null;
              var b = a.split("?");
              return (a = b[0]), a.substring(a.lastIndexOf("/") + 1);
            },
            getYouTubeNoCookieUrl: function (a) {
              if (
                void 0 === a ||
                null === a ||
                !a.trim().length ||
                !a.includes("//www.youtube")
              )
                return a;
              var b = a.split("/");
              return (
                (b[2] = b[2].replace(".com", "-nocookie.com")), b.join("/")
              );
            },
          },
          p = {
            name: "youtube_iframe",
            options: {
              prefix: "youtube_iframe",
              youtube: {
                autoplay: 0,
                controls: 0,
                disablekb: 1,
                end: 0,
                loop: 0,
                modestbranding: 0,
                playsinline: 0,
                rel: 0,
                showinfo: 0,
                start: 0,
                iv_load_policy: 3,
                nocookie: !1,
              },
            },
            canPlayType: function (a) {
              return ["video/youtube", "video/x-youtube"].includes(a);
            },
            create: function (a, b, c) {
              var d = {},
                f = [],
                h = 4,
                j = null,
                l = !0,
                n = !1,
                p = null,
                q = 1;
              (d.options = b),
                (d.id = a.id + "_" + b.prefix),
                (d.mediaElement = a);
              for (
                var r = k["default"].html5media.properties,
                  s = function (b) {
                    var c =
                      "" + b.substring(0, 1).toUpperCase() + b.substring(1);
                    (d["get" + c] = function () {
                      if (null !== j) {
                        var a = null,
                          c = (function () {
                            switch (b) {
                              case "currentTime":
                                return { v: j.getCurrentTime() };
                              case "duration":
                                return { v: j.getDuration() };
                              case "volume":
                                return (q = j.getVolume() / 100), { v: q };
                              case "paused":
                                return { v: l };
                              case "ended":
                                return { v: n };
                              case "muted":
                                return { v: j.isMuted() };
                              case "buffered":
                                var a = j.getVideoLoadedFraction(),
                                  c = j.getDuration();
                                return {
                                  v: {
                                    start: function () {
                                      return 0;
                                    },
                                    end: function () {
                                      return a * c;
                                    },
                                    length: 1,
                                  },
                                };
                              case "src":
                                return { v: j.getVideoUrl() };
                              case "readyState":
                                return { v: h };
                            }
                          })();
                        return "object" ===
                          ("undefined" == typeof c ? "undefined" : e(c))
                          ? c.v
                          : a;
                      }
                      return null;
                    }),
                      (d["set" + c] = function (c) {
                        if (null !== j)
                          switch (b) {
                            case "src":
                              var e = "string" == typeof c ? c : c[0].src,
                                g = o.getYouTubeId(e);
                              a.originalNode.autoplay
                                ? j.loadVideoById(g)
                                : j.cueVideoById(g);
                              break;
                            case "currentTime":
                              j.seekTo(c);
                              break;
                            case "muted":
                              c ? j.mute() : j.unMute(),
                                setTimeout(function () {
                                  var b = m.createEvent("volumechange", d);
                                  a.dispatchEvent(b);
                                }, 50);
                              break;
                            case "volume":
                              (q = c),
                                j.setVolume(100 * c),
                                setTimeout(function () {
                                  var b = m.createEvent("volumechange", d);
                                  a.dispatchEvent(b);
                                }, 50);
                              break;
                            case "readyState":
                              var h = m.createEvent("canplay", d);
                              a.dispatchEvent(h);
                          }
                        else f.push({ type: "set", propName: b, value: c });
                      });
                  },
                  t = 0,
                  u = r.length;
                u > t;
                t++
              )
                s(r[t]);
              for (
                var v = k["default"].html5media.methods,
                  w = function (a) {
                    d[a] = function () {
                      if (null !== j)
                        switch (a) {
                          case "play":
                            return (l = !1), j.playVideo();
                          case "pause":
                            return (l = !0), j.pauseVideo();
                          case "load":
                            return null;
                        }
                      else f.push({ type: "call", methodName: a });
                    };
                  },
                  x = 0,
                  y = v.length;
                y > x;
                x++
              )
                w(v[x]);
              var z = i["default"].createElement("div");
              (z.id = d.id),
                d.options.youtube.nocookie &&
                  a.originalNode.setAttribute(
                    "src",
                    o.getYouTubeNoCookieUrl(c[0].src)
                  ),
                a.originalNode.parentNode.insertBefore(z, a.originalNode),
                (a.originalNode.style.display = "none");
              var A = "audio" === a.originalNode.tagName.toLowerCase(),
                B = A ? "0" : a.originalNode.height,
                C = A ? "0" : a.originalNode.width,
                D = o.getYouTubeId(c[0].src),
                E = {
                  id: d.id,
                  containerId: z.id,
                  videoId: D,
                  height: B,
                  width: C,
                  playerVars: Object.assign(
                    {
                      controls: 0,
                      rel: 0,
                      disablekb: 1,
                      showinfo: 0,
                      modestbranding: 0,
                      html5: 1,
                      playsinline: 0,
                      start: 0,
                      end: 0,
                      iv_load_policy: 3,
                    },
                    d.options.youtube
                  ),
                  origin: g["default"].location.host,
                  events: {
                    onReady: function (b) {
                      if (
                        ((a.youTubeApi = j = b.target),
                        (a.youTubeState = { paused: !0, ended: !1 }),
                        f.length)
                      )
                        for (var c = 0, e = f.length; e > c; c++) {
                          var g = f[c];
                          if ("set" === g.type) {
                            var h = g.propName,
                              i =
                                "" +
                                h.substring(0, 1).toUpperCase() +
                                h.substring(1);
                            d["set" + i](g.value);
                          } else "call" === g.type && d[g.methodName]();
                        }
                      p = j.getIframe();
                      for (
                        var k = ["mouseover", "mouseout"],
                          l = function (b) {
                            var c = m.createEvent(b.type, d);
                            a.dispatchEvent(c);
                          },
                          n = 0,
                          o = k.length;
                        o > n;
                        n++
                      )
                        p.addEventListener(k[n], l, !1);
                      for (
                        var q = [
                            "rendererready",
                            "loadeddata",
                            "loadedmetadata",
                            "canplay",
                          ],
                          r = 0,
                          s = q.length;
                        s > r;
                        r++
                      ) {
                        var t = m.createEvent(q[r], d);
                        a.dispatchEvent(t);
                      }
                    },
                    onStateChange: function (b) {
                      var c = [];
                      switch (b.data) {
                        case -1:
                          (c = ["loadedmetadata"]), (l = !0), (n = !1);
                          break;
                        case 0:
                          (c = ["ended"]), (l = !1), (n = !0), d.stopInterval();
                          break;
                        case 1:
                          (c = ["play", "playing"]),
                            (l = !1),
                            (n = !1),
                            d.startInterval();
                          break;
                        case 2:
                          (c = ["pause"]), (l = !0), (n = !1), d.stopInterval();
                          break;
                        case 3:
                          (c = ["progress"]), (n = !1);
                          break;
                        case 5:
                          (c = ["loadeddata", "loadedmetadata", "canplay"]),
                            (l = !0),
                            (n = !1);
                      }
                      for (var e = 0, f = c.length; f > e; e++) {
                        var g = m.createEvent(c[e], d);
                        a.dispatchEvent(g);
                      }
                    },
                    onError: function (b) {
                      var c = m.createEvent("error", d);
                      (c.data = b.data), a.dispatchEvent(c);
                    },
                  },
                };
              return (
                A && (E.playerVars.playsinline = 1),
                o.enqueueIframe(E),
                (d.onEvent = function (b, c, d) {
                  null !== d && void 0 !== d && (a.youTubeState = d);
                }),
                (d.setSize = function (a, b) {
                  null !== j && j.setSize(a, b);
                }),
                (d.hide = function () {
                  d.stopInterval(), d.pause(), p && (p.style.display = "none");
                }),
                (d.show = function () {
                  p && (p.style.display = "");
                }),
                (d.destroy = function () {
                  j.destroy();
                }),
                (d.interval = null),
                (d.startInterval = function () {
                  d.interval = setInterval(function () {
                    var b = m.createEvent("timeupdate", d);
                    a.dispatchEvent(b);
                  }, 250);
                }),
                (d.stopInterval = function () {
                  d.interval && clearInterval(d.interval);
                }),
                d
              );
            },
          };
        g["default"].postMessage &&
          e(g["default"].addEventListener) &&
          ((g["default"].onYouTubePlayerAPIReady = function () {
            o.iFrameReady();
          }),
          n.typeChecks.push(function (a) {
            return (
              (a = a.toLowerCase()),
              a.includes("//www.youtube") || a.includes("//youtu.be")
                ? "video/x-youtube"
                : null
            );
          }),
          l.renderer.add(p));
      },
      { 2: 2, 25: 25, 26: 26, 3: 3, 6: 6, 7: 7 },
    ],
    23: [
      function (a, b, c) {
        "use strict";
        function d(a) {
          return a && a.__esModule ? a : { default: a };
        }
        Object.defineProperty(c, "__esModule", { value: !0 }),
          (c.cancelFullScreen = c.requestFullScreen = c.isFullScreen = c.FULLSCREEN_EVENT_NAME = c.HAS_NATIVE_FULLSCREEN_ENABLED = c.HAS_TRUE_NATIVE_FULLSCREEN = c.HAS_IOS_FULLSCREEN = c.HAS_MS_NATIVE_FULLSCREEN = c.HAS_MOZ_NATIVE_FULLSCREEN = c.HAS_WEBKIT_NATIVE_FULLSCREEN = c.HAS_NATIVE_FULLSCREEN = c.SUPPORTS_NATIVE_HLS = c.SUPPORT_POINTER_EVENTS = c.HAS_MSE = c.IS_STOCK_ANDROID = c.IS_SAFARI = c.IS_FIREFOX = c.IS_CHROME = c.IS_EDGE = c.IS_IE = c.IS_ANDROID = c.IS_IOS = c.IS_IPHONE = c.IS_IPAD = c.UA = c.NAV = void 0);
        for (
          var e = a(3),
            f = d(e),
            g = a(2),
            h = d(g),
            i = a(6),
            j = d(i),
            k = (c.NAV = f["default"].navigator),
            l = (c.UA = k.userAgent.toLowerCase()),
            m = (c.IS_IPAD = null !== l.match(/ipad/i)),
            n = (c.IS_IPHONE = null !== l.match(/iphone/i)),
            o =
              ((c.IS_IOS = n || m),
              (c.IS_ANDROID = null !== l.match(/android/i))),
            p = (c.IS_IE =
              k.appName.toLowerCase().includes("microsoft") ||
              null !== k.appName.toLowerCase().match(/trident/gi)),
            q = (c.IS_EDGE =
              ("msLaunchUri" in k) && !("documentMode" in h["default"])),
            r = (c.IS_CHROME = null !== l.match(/chrome/gi)),
            s = (c.IS_FIREFOX = null !== l.match(/firefox/gi)),
            t = (c.IS_SAFARI = null !== l.match(/safari/gi) && !r),
            u = (c.IS_STOCK_ANDROID =
              null !== l.match(/^mozilla\/\d+\.\d+\s\(linux;\su;/gi)),
            v = (c.HAS_MSE = ("MediaSource" in f["default"])),
            w = (c.SUPPORT_POINTER_EVENTS = (function () {
              var a = h["default"].createElement("x"),
                b = h["default"].documentElement,
                c = f["default"].getComputedStyle;
              if (!("pointerEvents" in a.style)) return !1;
              (a.style.pointerEvents = "auto"),
                (a.style.pointerEvents = "x"),
                b.appendChild(a);
              var d = c && "auto" === c(a, "").pointerEvents;
              return a.remove(), !!d;
            })()),
            x = ["source", "track", "audio", "video"],
            y = void 0,
            z = 0,
            A = x.length;
          A > z;
          z++
        )
          y = h["default"].createElement(x[z]);
        var B = (c.SUPPORTS_NATIVE_HLS =
            t || (o && (r || u)) || (p && null !== l.match(/edge/gi))),
          C = void 0 !== y.webkitEnterFullscreen,
          D = void 0 !== y.requestFullscreen;
        C && l.match(/mac os x 10_5/i) && ((D = !1), (C = !1));
        var E = void 0 !== y.webkitRequestFullScreen,
          F = void 0 !== y.mozRequestFullScreen,
          G = void 0 !== y.msRequestFullscreen,
          H = E || F || G,
          I = H,
          J = "",
          K = void 0,
          L = void 0,
          M = void 0;
        F
          ? (I = h["default"].mozFullScreenEnabled)
          : G && (I = h["default"].msFullscreenEnabled),
          r && (C = !1),
          H &&
            (E
              ? (J = "webkitfullscreenchange")
              : F
              ? (J = "mozfullscreenchange")
              : G && (J = "MSFullscreenChange"),
            (c.isFullScreen = K = function () {
              return F
                ? h["default"].mozFullScreen
                : E
                ? h["default"].webkitIsFullScreen
                : G
                ? null !== h["default"].msFullscreenElement
                : void 0;
            }),
            (c.requestFullScreen = L = function (a) {
              E
                ? a.webkitRequestFullScreen()
                : F
                ? a.mozRequestFullScreen()
                : G && a.msRequestFullscreen();
            }),
            (c.cancelFullScreen = M = function () {
              E
                ? h["default"].webkitCancelFullScreen()
                : F
                ? h["default"].mozCancelFullScreen()
                : G && h["default"].msExitFullscreen();
            }));
        var N = (c.HAS_NATIVE_FULLSCREEN = D),
          O = (c.HAS_WEBKIT_NATIVE_FULLSCREEN = E),
          P = (c.HAS_MOZ_NATIVE_FULLSCREEN = F),
          Q = (c.HAS_MS_NATIVE_FULLSCREEN = G),
          R = (c.HAS_IOS_FULLSCREEN = C),
          S = (c.HAS_TRUE_NATIVE_FULLSCREEN = H),
          T = (c.HAS_NATIVE_FULLSCREEN_ENABLED = I),
          U = (c.FULLSCREEN_EVENT_NAME = J);
        (c.isFullScreen = K),
          (c.requestFullScreen = L),
          (c.cancelFullScreen = M),
          (j["default"].Features = j["default"].Features || {}),
          (j["default"].Features.isiPad = m),
          (j["default"].Features.isiPhone = n),
          (j["default"].Features.isiOS =
            j["default"].Features.isiPhone || j["default"].Features.isiPad),
          (j["default"].Features.isAndroid = o),
          (j["default"].Features.isIE = p),
          (j["default"].Features.isEdge = q),
          (j["default"].Features.isChrome = r),
          (j["default"].Features.isFirefox = s),
          (j["default"].Features.isSafari = t),
          (j["default"].Features.isStockAndroid = u),
          (j["default"].Features.hasMSE = v),
          (j["default"].Features.supportsNativeHLS = B),
          (j["default"].Features.supportsPointerEvents = w),
          (j["default"].Features.hasiOSFullScreen = R),
          (j["default"].Features.hasNativeFullscreen = N),
          (j["default"].Features.hasWebkitNativeFullScreen = O),
          (j["default"].Features.hasMozNativeFullScreen = P),
          (j["default"].Features.hasMsNativeFullScreen = Q),
          (j["default"].Features.hasTrueNativeFullScreen = S),
          (j["default"].Features.nativeFullScreenEnabled = T),
          (j["default"].Features.fullScreenEventName = U),
          (j["default"].Features.isFullScreen = K),
          (j["default"].Features.requestFullScreen = L),
          (j["default"].Features.cancelFullScreen = M);
      },
      { 2: 2, 3: 3, 6: 6 },
    ],
    24: [
      function (a, b, c) {
        "use strict";
        function d(a) {
          return a && a.__esModule ? a : { default: a };
        }
        function e(a) {
          var b = a.getBoundingClientRect(),
            c =
              m["default"].pageXOffset ||
              o["default"].documentElement.scrollLeft,
            d =
              m["default"].pageYOffset ||
              o["default"].documentElement.scrollTop;
          return { top: b.top + d, left: b.left + c };
        }
        function f(a, b) {
          u(a, b) ? w(a, b) : v(a, b);
        }
        function g(a) {
          var b =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 400,
            c = arguments[2];
          a.style.opacity || (a.style.opacity = 1);
          var d = null;
          m["default"].requestAnimationFrame(function e(f) {
            d = d || f;
            var g = f - d,
              h = parseFloat(1 - g / b, 2);
            (a.style.opacity = 0 > h ? 0 : h),
              g > b
                ? c && "function" == typeof c && c()
                : m["default"].requestAnimationFrame(e);
          });
        }
        function h(a) {
          var b =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 400,
            c = arguments[2];
          a.style.opacity || (a.style.opacity = 0);
          var d = null;
          m["default"].requestAnimationFrame(function e(f) {
            d = d || f;
            var g = f - d,
              h = parseFloat(g / b, 2);
            (a.style.opacity = h > 1 ? 1 : h),
              g > b
                ? c && "function" == typeof c && c()
                : m["default"].requestAnimationFrame(e);
          });
        }
        function i(a, b) {
          var c = [];
          a = a.parentNode.firstChild;
          do (!b || b(a)) && c.push(a);
          while ((a = a.nextSibling));
          return c;
        }
        function j(a) {
          return !!(
            a.offsetWidth ||
            a.offsetHeight ||
            a.getClientRects().length
          );
        }
        function k(a, b, c, d) {
          var e = m["default"].XMLHttpRequest
              ? new XMLHttpRequest()
              : new ActiveXObject("Microsoft.XMLHTTP"),
            f = "application/x-www-form-urlencoded; charset=UTF-8",
            g = !1,
            h = "*/".concat("*");
          switch (b) {
            case "text":
              f = "text/plain";
              break;
            case "json":
              f = "application/json, text/javascript";
              break;
            case "html":
              f = "text/html";
              break;
            case "xml":
              f = "application/xml, text/xml";
          }
          f.includes("application/x-www-form-urlencoded") ||
            (h = f + ", */*; q=0.01"),
            e &&
              (e.open("GET", a, !0),
              e.setRequestHeader("Accept", h),
              (e.onreadystatechange = function () {
                if (!g && 4 === e.readyState)
                  if (200 === e.status) {
                    g = !0;
                    var a = void 0;
                    switch (b) {
                      case "json":
                        a = JSON.parse(e.responseText);
                        break;
                      case "xml":
                        a = e.responseXML;
                        break;
                      default:
                        a = e.responseText;
                    }
                    c(a);
                  } else "function" == typeof d && d(e.status);
              }),
              e.send());
        }
        Object.defineProperty(c, "__esModule", { value: !0 }),
          (c.removeclassName = c.addclassName = c.hasclassName = void 0),
          (c.offset = e),
          (c.toggleclassName = f),
          (c.fadeOut = g),
          (c.fadeIn = h),
          (c.siblings = i),
          (c.visible = j),
          (c.ajax = k);
        var l = a(3),
          m = d(l),
          n = a(2),
          o = d(n),
          p = a(6),
          q = d(p),
          r = void 0,
          s = void 0,
          t = void 0;
        "classList" in o["default"].documentElement
          ? ((r = function (a, b) {
              return void 0 !== a.classList && a.classList.contains(b);
            }),
            (s = function (a, b) {
              return a.classList.add(b);
            }),
            (t = function (a, b) {
              return a.classList.remove(b);
            }))
          : ((r = function (a, b) {
              return new RegExp("\\b" + b + "\\b").test(a.className);
            }),
            (s = function (a, b) {
              u(a, b) || (a.className += " " + b);
            }),
            (t = function (a, b) {
              a.className = a.className.replace(
                new RegExp("\\b" + b + "\\b", "g"),
                ""
              );
            }));
        var u = (c.hasclassName = r),
          v = (c.addclassName = s),
          w = (c.removeclassName = t);
        (q["default"].Utils = q["default"].Utils || {}),
          (q["default"].Utils.offset = e),
          (q["default"].Utils.hasclassName = u),
          (q["default"].Utils.addclassName = v),
          (q["default"].Utils.removeclassName = w),
          (q["default"].Utils.toggleclassName = f),
          (q["default"].Utils.fadeIn = h),
          (q["default"].Utils.fadeOut = g),
          (q["default"].Utils.siblings = i),
          (q["default"].Utils.visible = j),
          (q["default"].Utils.ajax = k);
      },
      { 2: 2, 3: 3, 6: 6 },
    ],
    25: [
      function (a, b, c) {
        "use strict";
        function d(a) {
          return a && a.__esModule ? a : { default: a };
        }
        function e(a) {
          if ("string" != typeof a)
            throw new Error("Argument passed must be a string");
          var b = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
          return a.replace(/[&<>"]/g, function (a) {
            return b[a];
          });
        }
        function f(a, b) {
          var c = this,
            d = arguments,
            e =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : !1;
          if ("function" != typeof a)
            throw new Error("First argument must be a function");
          if ("number" != typeof b)
            throw new Error("Second argument must be a numeric value");
          var f = void 0;
          return function () {
            var g = c,
              h = d,
              i = function () {
                (f = null), e || a.apply(g, h);
              },
              j = e && !f;
            clearTimeout(f), (f = setTimeout(i, b)), j && a.apply(g, h);
          };
        }
        function g(a) {
          return Object.getOwnPropertyNames(a).length <= 0;
        }
        function h(a, b) {
          var c = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/,
            d = { d: [], w: [] };
          return (
            (a || "").split(" ").forEach(function (a) {
              var e = "" + a + (b ? "." + b : "");
              e.startsWith(".")
                ? (d.d.push(e), d.w.push(e))
                : d[c.test(a) ? "w" : "d"].push(e);
            }),
            (d.d = d.d.join(" ")),
            (d.w = d.w.join(" ")),
            d
          );
        }
        function i(a, b) {
          if ("string" != typeof a)
            throw new Error("Event name must be a string");
          var c = a.match(/[a-z]+\.([a-z]+)/),
            d = { target: b };
          return (
            null !== c && ((a = c[0]), (d.namespace = c[1])),
            new window.CustomEvent(a, { detail: d })
          );
        }
        function j(a, b) {
          return !!(a && b && 2 & a.compareDocumentPosition(b));
        }
        function k(a) {
          return "string" == typeof a;
        }
        Object.defineProperty(c, "__esModule", { value: !0 }),
          (c.escapeHTML = e),
          (c.debounce = f),
          (c.isObjectEmpty = g),
          (c.splitEvents = h),
          (c.createEvent = i),
          (c.isNodeAfter = j),
          (c.isString = k);
        var l = a(6),
          m = d(l);
        (m["default"].Utils = m["default"].Utils || {}),
          (m["default"].Utils.escapeHTML = e),
          (m["default"].Utils.debounce = f),
          (m["default"].Utils.isObjectEmpty = g),
          (m["default"].Utils.splitEvents = h),
          (m["default"].Utils.createEvent = i),
          (m["default"].Utils.isNodeAfter = j),
          (m["default"].Utils.isString = k);
      },
      { 6: 6 },
    ],
    26: [
      function (a, b, c) {
        "use strict";
        function d(a) {
          return a && a.__esModule ? a : { default: a };
        }
        function e(a) {
          if ("string" != typeof a)
            throw new Error("url argument must be a string");
          var b = document.createElement("div");
          return (
            (b.innerHTML = '<a href="' + m.escapeHTML(a) + '">x</a>'),
            b.firstChild.href
          );
        }
        function f(a) {
          var b =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          return a && !b ? h(a) : g(b);
        }
        function g(a) {
          if ("string" != typeof a)
            throw new Error("type argument must be a string");
          return a && ~a.indexOf(";") ? a.substr(0, a.indexOf(";")) : a;
        }
        function h(a) {
          if ("string" != typeof a)
            throw new Error("url argument must be a string");
          for (var b = 0, c = n.length; c > b; b++) {
            var d = n[b](a);
            if (d) return d;
          }
          var e = i(a),
            f = j(e),
            g = "video/mp4";
          return (
            f &&
              ([
                "mp4",
                "m4v",
                "ogg",
                "ogv",
                "webm",
                "flv",
                "mpeg",
                "mov",
              ].includes(f)
                ? (g = "video/" + f)
                : ["mp3", "oga", "wav", "mid", "midi"].includes(f) &&
                  (g = "audio/" + f)),
            g
          );
        }
        function i(a) {
          if ("string" != typeof a)
            throw new Error("url argument must be a string");
          var b = a.split("?")[0],
            c = b.split("\\").pop().split("/").pop();
          return c.indexOf(".") > -1 ? c.substring(c.lastIndexOf(".") + 1) : "";
        }
        function j(a) {
          if ("string" != typeof a)
            throw new Error("extension argument must be a string");
          switch (a) {
            case "mp4":
            case "m4v":
              return "mp4";
            case "webm":
            case "webma":
            case "webmv":
              return "webm";
            case "ogg":
            case "oga":
            case "ogv":
              return "ogg";
            default:
              return a;
          }
        }
        Object.defineProperty(c, "__esModule", { value: !0 }),
          (c.typeChecks = void 0),
          (c.absolutizeUrl = e),
          (c.formatType = f),
          (c.getMimeFromType = g),
          (c.getTypeFromFile = h),
          (c.getExtension = i),
          (c.normalizeExtension = j);
        var k = a(6),
          l = d(k),
          m = a(25),
          n = (c.typeChecks = []);
        (l["default"].Utils = l["default"].Utils || {}),
          (l["default"].Utils.typeChecks = n),
          (l["default"].Utils.absolutizeUrl = e),
          (l["default"].Utils.formatType = f),
          (l["default"].Utils.getMimeFromType = g),
          (l["default"].Utils.getTypeFromFile = h),
          (l["default"].Utils.getExtension = i),
          (l["default"].Utils.normalizeExtension = j);
      },
      { 25: 25, 6: 6 },
    ],
    27: [
      function (a, b, c) {
        "use strict";
        function d(a) {
          return a && a.__esModule ? a : { default: a };
        }
        var e = a(2),
          f = d(e);
        !(function (a) {
          a.forEach(function (a) {
            a.hasOwnProperty("remove") ||
              Object.defineProperty(a, "remove", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: function () {
                  this.parentNode.removeChild(this);
                },
              });
          });
        })([
          Element.prototype,
          CharacterData.prototype,
          DocumentType.prototype,
        ]),
          (function () {
            function a(a, b) {
              b = b || { bubbles: !1, cancelable: !1, detail: void 0 };
              var c = f["default"].createEvent("CustomEvent");
              return c.initCustomEvent(a, b.bubbles, b.cancelable, b.detail), c;
            }
            return "function" == typeof window.CustomEvent
              ? !1
              : ((a.prototype = window.Event.prototype),
                void (window.CustomEvent = a));
          })(),
          "function" != typeof Object.assign &&
            (Object.assign = function (a) {
              if (null === a || void 0 === a)
                throw new TypeError(
                  "Cannot convert undefined or null to object"
                );
              for (var b = Object(a), c = 1, d = arguments.length; d > c; c++) {
                var e = arguments[c];
                if (null !== e)
                  for (var f in e)
                    Object.prototype.hasOwnProperty.call(e, f) && (b[f] = e[f]);
              }
              return b;
            }),
          Array.prototype.includes ||
            Object.defineProperty(Array.prototype, "includes", {
              value: function (a, b) {
                if (null === this || void 0 === this)
                  throw new TypeError('"this" is null or not defined');
                var c = Object(this),
                  d = c.length >>> 0;
                if (0 === d) return !1;
                for (
                  var e = 0 | b, f = Math.max(e >= 0 ? e : d - Math.abs(e), 0);
                  d > f;

                ) {
                  if (c[f] === a) return !0;
                  f++;
                }
                return !1;
              },
            }),
          String.prototype.includes ||
            (String.prototype.includes = function (a, b) {
              return (
                "number" != typeof b && (b = 0),
                b + a.length > this.length ? !1 : -1 !== this.indexOf(a, b)
              );
            }),
          String.prototype.startsWith ||
            (String.prototype.startsWith = function (a, b) {
              return (b = b || 0), this.substr(b, a.length) === a;
            }),
          Element.prototype.matches ||
            (Element.prototype.matches =
              Element.prototype.matchesSelector ||
              Element.prototype.mozMatchesSelector ||
              Element.prototype.msMatchesSelector ||
              Element.prototype.oMatchesSelector ||
              Element.prototype.webkitMatchesSelector ||
              function (a) {
                for (
                  var b = (
                      this.document || this.ownerDocument
                    ).querySelectorAll(a),
                    c = b.length - 1;
                  --c >= 0 && b.item(c) !== this;

                );
                return c > -1;
              }),
          window.Element &&
            !Element.prototype.closest &&
            (Element.prototype.closest = function (a) {
              var b = (this.document || this.ownerDocument).querySelectorAll(a),
                c = void 0,
                d = this;
              do for (c = b.length; --c >= 0 && b.item(c) !== d; );
              while (0 > c && (d = d.parentElement));
              return d;
            }),
          (function () {
            for (
              var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0;
              c < b.length && !window.requestAnimationFrame;
              ++c
            )
              (window.requestAnimationFrame =
                window[b[c] + "RequestAnimationFrame"]),
                (window.cancelAnimationFrame =
                  window[b[c] + "CancelAnimationFrame"] ||
                  window[b[c] + "CancelRequestAnimationFrame"]);
            window.requestAnimationFrame ||
              (window.requestAnimationFrame = function (b) {
                var c = new Date().getTime(),
                  d = Math.max(0, 16 - (c - a)),
                  e = window.setTimeout(function () {
                    b(c + d);
                  }, d);
                return (a = c + d), e;
              }),
              window.cancelAnimationFrame ||
                (window.cancelAnimationFrame = function (a) {
                  clearTimeout(a);
                });
          })();
      },
      { 2: 2 },
    ],
    28: [
      function (a, b, c) {
        "use strict";
        function d(a) {
          return a && a.__esModule ? a : { default: a };
        }
        function e() {
          var a =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
          return !(a % 1 === 0);
        }
        function f(a) {
          var b =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : !1,
            c =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : !1,
            d =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 25,
            f =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 0;
          a = !a || "number" != typeof a || 0 > a ? 0 : a;
          var g = Math.round(0.066666 * d),
            h = Math.round(d),
            i = 24 * Math.round(3600 * d),
            j = Math.round(600 * d),
            k = e(d) ? ";" : ":",
            l = void 0,
            m = void 0,
            n = void 0,
            o = void 0,
            p = Math.round(a * d);
          if (e(d)) {
            0 > p && (p = i + p), (p %= i);
            var q = Math.floor(p / j),
              r = p % j;
            (p += 9 * g * q),
              r > g && (p += g * Math.floor((r - g) / Math.round(60 * h - g)));
            var s = Math.floor(p / h);
            (l = Math.floor(Math.floor(s / 60) / 60)),
              (m = Math.floor(s / 60) % 60),
              (n = c ? s % 60 : ((p / h) % 60).toFixed(f));
          } else
            (l = Math.floor(a / 3600) % 24),
              (m = Math.floor(a / 60) % 60),
              (n = c ? Math.floor(a % 60) : (a % 60).toFixed(f));
          (l = 0 >= l ? 0 : l), (m = 0 >= m ? 0 : m), (n = 0 >= n ? 0 : n);
          var t = b || l > 0 ? (10 > l ? "0" + l : l) + ":" : "";
          return (
            (t += (10 > m ? "0" + m : m) + ":"),
            (t += "" + (10 > n ? "0" + n : n)),
            c &&
              ((o = (p % h).toFixed(0)),
              (o = 0 >= o ? 0 : o),
              (t += 10 > o ? k + "0" + o : "" + k + o)),
            t
          );
        }
        function g(a) {
          var b =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 25;
          if ("string" != typeof a)
            throw new TypeError("Time must be a string");
          if (
            (a.indexOf(";") > 0 && (a = a.replace(";", ":")),
            !a.match(/\d{2}(\:\d{2}){0,3}/))
          )
            throw new TypeError("Time code must have the format 00:00:00");
          var c = a.split(":"),
            d = void 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = Math.round(0.066666 * b),
            l = Math.round(b),
            m = 3600 * l,
            n = 60 * l;
          switch (c.length) {
            default:
            case 1:
              h = parseInt(c[0], 10);
              break;
            case 2:
              (g = parseInt(c[0], 10)), (h = parseInt(c[1], 10));
              break;
            case 3:
              (f = parseInt(c[0], 10)),
                (g = parseInt(c[1], 10)),
                (h = parseInt(c[2], 10));
              break;
            case 4:
              (f = parseInt(c[0], 10)),
                (g = parseInt(c[1], 10)),
                (h = parseInt(c[2], 10)),
                (i = parseInt(c[3], 10));
          }
          return (
            e(b)
              ? ((j = 60 * f + g),
                (d = m * f + n * g + l * h + i - k * (j - Math.floor(j / 10))))
              : (d = (m * f + n * g + b * h + i) / b),
            parseFloat(d.toFixed(3))
          );
        }
        function h(a, b) {
          var c =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 25;
          a = !a || "number" != typeof a || 0 > a ? 0 : a;
          for (
            var d = Math.floor(a / 3600) % 24,
              e = Math.floor(a / 60) % 60,
              f = Math.floor(a % 60),
              g = Math.floor(((a % 1) * c).toFixed(3)),
              h = [
                [g, "f"],
                [f, "s"],
                [e, "m"],
                [d, "h"],
              ],
              i = b.timeFormat,
              j = i[1] === i[0],
              k = j ? 2 : 1,
              l = i.length < k ? i[k] : ":",
              m = i[0],
              n = !1,
              o = 0,
              p = h.length;
            p > o;
            o++
          )
            if (i.indexOf(h[o][1]) > -1) n = !0;
            else if (n) {
              for (var q = !1, r = o; p > r; r++)
                if (h[r][0] > 0) {
                  q = !0;
                  break;
                }
              if (!q) break;
              j || (i = m + i),
                (i = h[o][1] + l + i),
                j && (i = h[o][1] + i),
                (m = h[o][1]);
            }
          b.currentTimeFormat = i;
        }
        function i(a) {
          if ("string" != typeof a)
            throw new TypeError("Argument must be a string value");
          a = a.replace(",", ".");
          var b = a.indexOf(".") > -1 ? a.split(".")[1].length : 0,
            c = 0,
            d = 1;
          a = a.split(":").reverse();
          for (var e = 0, f = a.length; f > e; e++)
            (d = 1), e > 0 && (d = Math.pow(60, e)), (c += Number(a[e]) * d);
          return Number(c.toFixed(b));
        }
        Object.defineProperty(c, "__esModule", { value: !0 }),
          (c.isDropFrame = e),
          (c.secondsToTimeCode = f),
          (c.timeCodeToSeconds = g),
          (c.calculateTimeFormat = h),
          (c.convertSMPTEtoSeconds = i);
        var j = a(6),
          k = d(j);
        (k["default"].Utils = k["default"].Utils || {}),
          (k["default"].Utils.secondsToTimeCode = f),
          (k["default"].Utils.timeCodeToSeconds = g),
          (k["default"].Utils.calculateTimeFormat = h),
          (k["default"].Utils.convertSMPTEtoSeconds = i);
      },
      { 6: 6 },
    ],
  },
  {},
  [27, 5, 4, 14, 21, 18, 17, 19, 20, 22, 15, 16, 8, 9, 10, 11, 12, 13]
);

// Simply Scroll

/*
 * simplyScroll 2 - a scroll-tastic jQuery plugin
 *
 * http://logicbox.net/jquery/simplyscroll/
 *
 * Copyright (c) 2009-2012 Will Kelly - http://logicbox.net
 *
 * Dual licensed under the MIT and GPL licenses.
 *
 * Version: 2.0.5 Last revised: 10/05/2012
 *
 */

(function ($, window, undefined) {
  $.fn.simplyScroll = function (options) {
    return this.each(function () {
      new $.simplyScroll(this, options);
    });
  };

  var defaults = {
    customClass: "simply-scroll",
    frameRate: 24, //No of movements per second
    speed: 1, //No of pixels per frame
    orientation: "horizontal", //'horizontal or 'vertical' - not to be confused with device orientation
    auto: true,
    autoMode: "loop", //auto = true, 'loop' or 'bounce',
    manualMode: "end", //auto = false, 'loop' or 'end'
    direction: "forwards", //'forwards' or 'backwards'.
    pauseOnHover: true, //autoMode = loop|bounce only
    pauseOnTouch: true, //" touch device only
    pauseButton: false, //" generates an extra element to allow manual pausing
    startOnLoad: false, //use this to delay starting of plugin until all page assets have loaded
  };

  $.simplyScroll = function (el, options) {
    var self = this;

    this.o = $.extend({}, defaults, options || {});
    this.isAuto =
      this.o.auto !== false && this.o.autoMode.match(/^loop|bounce$/) !== null;
    this.isHorizontal =
      this.o.orientation.match(/^horizontal|vertical$/) !== null &&
      this.o.orientation == defaults.orientation;
    this.isRTL = this.isHorizontal && $("html").attr("dir") == "rtl";
    this.isForwards =
      !this.isAuto ||
      (this.isAuto &&
        this.o.direction.match(/^forwards|backwards$/) !== null &&
        this.o.direction == defaults.direction &&
        !this.isRTL);
    this.isLoop =
      (this.isAuto && this.o.autoMode == "loop") ||
      (!this.isAuto && this.o.manualMode == "loop");

    this.supportsTouch = "createTouch" in document;

    this.events = this.supportsTouch
      ? {
          start: "touchstart MozTouchDown",
          move: "touchmove MozTouchMove",
          end: "touchend touchcancel MozTouchRelease",
        }
      : { start: "mouseenter", end: "mouseleave" };

    this.$list = $(el); //called on ul/ol/div etc
    var $items = this.$list.children();

    //generate extra markup
    this.$list
      .addClass("simply-scroll-list")
      .wrap('<div className="simply-scroll-clip"></div>')
      .parent()
      .wrap(
        '<div className="' +
          this.o.customClass +
          ' simply-scroll-container"></div>'
      );

    if (!this.isAuto) {
      //button placeholders
      this.$list
        .parent()
        .parent()
        .prepend('<div className="simply-scroll-forward"></div>')
        .prepend('<div className="simply-scroll-back"></div>');
    } else {
      if (this.o.pauseButton) {
        this.$list
          .parent()
          .parent()
          .prepend(
            '<div className="simply-scroll-btn simply-scroll-btn-pause"></div>'
          );
        this.o.pauseOnHover = false;
      }
    }

    //wrap an extra div around the whole lot if elements scrolled aren't equal
    if ($items.length > 1) {
      var extra_wrap = false,
        total = 0;

      if (this.isHorizontal) {
        $items.each(function () {
          total += $(this).outerWidth(true);
        });
        extra_wrap = $items.eq(0).outerWidth(true) * $items.length !== total;
      } else {
        $items.each(function () {
          total += $(this).outerHeight(true);
        });
        extra_wrap = $items.eq(0).outerHeight(true) * $items.length !== total;
      }

      if (extra_wrap) {
        this.$list = this.$list
          .wrap("<div></div>")
          .parent()
          .addClass("simply-scroll-list");
        if (this.isHorizontal) {
          this.$list.children().css({ float: "left", width: total + "px" });
        } else {
          this.$list.children().css({ height: total + "px" });
        }
      }
    }

    if (!this.o.startOnLoad) {
      this.init();
    } else {
      //wait for load before completing setup
      $(window).load(function () {
        self.init();
      });
    }
  };

  $.simplyScroll.fn = $.simplyScroll.prototype = {};

  $.simplyScroll.fn.extend = $.simplyScroll.extend = $.extend;

  $.simplyScroll.fn.extend({
    init: function () {
      this.$items = this.$list.children();
      this.$clip = this.$list.parent(); //this is the element that scrolls
      this.$container = this.$clip.parent();
      this.$btnBack = $(".simply-scroll-back", this.$container);
      this.$btnForward = $(".simply-scroll-forward", this.$container);

      if (!this.isHorizontal) {
        this.itemMax = this.$items.eq(0).outerHeight(true);
        this.clipMax = this.$clip.height();
        this.dimension = "height";
        this.moveBackClass = "simply-scroll-btn-up";
        this.moveForwardClass = "simply-scroll-btn-down";
        this.scrollPos = "Top";
      } else {
        this.itemMax = this.$items.eq(0).outerWidth(true);
        this.clipMax = this.$clip.width();
        this.dimension = "width";
        this.moveBackClass = "simply-scroll-btn-left";
        this.moveForwardClass = "simply-scroll-btn-right";
        this.scrollPos = "Left";
      }

      this.posMin = 0;

      this.posMax = this.$items.length * this.itemMax;

      var addItems = Math.ceil(this.clipMax / this.itemMax);

      //auto scroll loop & manual scroll bounce or end(to-end)
      if (this.isAuto && this.o.autoMode == "loop") {
        this.$list.css(
          this.dimension,
          this.posMax + this.itemMax * addItems + "px"
        );

        this.posMax += this.clipMax - this.o.speed;

        if (this.isForwards) {
          this.$items.slice(0, addItems).clone(true).appendTo(this.$list);
          this.resetPosition = 0;
        } else {
          this.$items.slice(-addItems).clone(true).prependTo(this.$list);
          this.resetPosition = this.$items.length * this.itemMax;
          //due to inconsistent RTL implementation force back to LTR then fake
          if (this.isRTL) {
            this.$clip[0].dir = "ltr";
            //based on feedback seems a good idea to force float right
            this.$items.css("float", "right");
          }
        }

        //manual and loop
      } else if (!this.isAuto && this.o.manualMode == "loop") {
        this.posMax += this.itemMax * addItems;

        this.$list.css(
          this.dimension,
          this.posMax + this.itemMax * addItems + "px"
        );

        this.posMax += this.clipMax - this.o.speed;

        var items_append = this.$items
          .slice(0, addItems)
          .clone(true)
          .appendTo(this.$list);
        var items_prepend = this.$items
          .slice(-addItems)
          .clone(true)
          .prependTo(this.$list);

        this.resetPositionForwards = this.resetPosition =
          addItems * this.itemMax;
        this.resetPositionBackwards = this.$items.length * this.itemMax;

        //extra events to force scroll direction change
        var self = this;

        this.$btnBack.bind(this.events.start, function () {
          self.isForwards = false;
          self.resetPosition = self.resetPositionBackwards;
        });

        this.$btnForward.bind(this.events.start, function () {
          self.isForwards = true;
          self.resetPosition = self.resetPositionForwards;
        });
      } else {
        //(!this.isAuto && this.o.manualMode=='end')

        this.$list.css(this.dimension, this.posMax + "px");

        if (this.isForwards) {
          this.resetPosition = 0;
        } else {
          this.resetPosition = this.$items.length * this.itemMax;
          //due to inconsistent RTL implementation force back to LTR then fake
          if (this.isRTL) {
            this.$clip[0].dir = "ltr";
            //based on feedback seems a good idea to force float right
            this.$items.css("float", "right");
          }
        }
      }

      this.resetPos(); //ensure scroll position is reset

      this.interval = null;
      this.intervalDelay = Math.floor(1000 / this.o.frameRate);

      if (!(!this.isAuto && this.o.manualMode == "end")) {
        //loop mode
        //ensure that speed is divisible by item width. Helps to always make images even not odd widths!
        while (this.itemMax % this.o.speed !== 0) {
          this.o.speed--;
          if (this.o.speed === 0) {
            this.o.speed = 1;
            break;
          }
        }
      }

      var self = this;
      this.trigger = null;
      this.funcMoveBack = function (e) {
        if (e !== undefined) {
          e.preventDefault();
        }
        self.trigger = !self.isAuto && self.o.manualMode == "end" ? this : null;
        if (self.isAuto) {
          self.isForwards ? self.moveBack() : self.moveForward();
        } else {
          self.moveBack();
        }
      };
      this.funcMoveForward = function (e) {
        if (e !== undefined) {
          e.preventDefault();
        }
        self.trigger = !self.isAuto && self.o.manualMode == "end" ? this : null;
        if (self.isAuto) {
          self.isForwards ? self.moveForward() : self.moveBack();
        } else {
          self.moveForward();
        }
      };
      this.funcMovePause = function () {
        self.movePause();
      };
      this.funcMoveStop = function () {
        self.moveStop();
      };
      this.funcMoveResume = function () {
        self.moveResume();
      };

      if (this.isAuto) {
        this.paused = false;

        function togglePause() {
          if (self.paused === false) {
            self.paused = true;
            self.funcMovePause();
          } else {
            self.paused = false;
            self.funcMoveResume();
          }
          return self.paused;
        }

        //disable pauseTouch when links are present
        if (this.supportsTouch && this.$items.find("a").length) {
          this.supportsTouch = false;
        }

        if (this.isAuto && this.o.pauseOnHover && !this.supportsTouch) {
          this.$clip
            .bind(this.events.start, this.funcMovePause)
            .bind(this.events.end, this.funcMoveResume);
        } else if (
          this.isAuto &&
          this.o.pauseOnTouch &&
          !this.o.pauseButton &&
          this.supportsTouch
        ) {
          var touchStartPos, scrollStartPos;

          this.$clip
            .bind(this.events.start, function (e) {
              togglePause();
              var touch = e.originalEvent.touches[0];
              touchStartPos = self.isHorizontal ? touch.pageX : touch.pageY;
              scrollStartPos = self.$clip[0]["scroll" + self.scrollPos];
              e.stopPropagation();
              e.preventDefault();
            })
            .bind(this.events.move, function (e) {
              e.stopPropagation();
              e.preventDefault();

              var touch = e.originalEvent.touches[0],
                endTouchPos = self.isHorizontal ? touch.pageX : touch.pageY,
                pos = touchStartPos - endTouchPos + scrollStartPos;

              if (pos < 0) pos = 0;
              else if (pos > self.posMax) pos = self.posMax;

              self.$clip[0]["scroll" + self.scrollPos] = pos;

              //force pause
              self.funcMovePause();
              self.paused = true;
            });
        } else {
          if (this.o.pauseButton) {
            this.$btnPause = $(
              ".simply-scroll-btn-pause",
              this.$container
            ).bind("click", function (e) {
              e.preventDefault();
              togglePause()
                ? $(this).addClass("active")
                : $(this).removeClass("active");
            });
          }
        }
        this.funcMoveForward();
      } else {
        this.$btnBack
          .addClass("simply-scroll-btn" + " " + this.moveBackClass)
          .bind(this.events.start, this.funcMoveBack)
          .bind(this.events.end, this.funcMoveStop);
        this.$btnForward
          .addClass("simply-scroll-btn" + " " + this.moveForwardClass)
          .bind(this.events.start, this.funcMoveForward)
          .bind(this.events.end, this.funcMoveStop);

        if (this.o.manualMode == "end") {
          !this.isRTL
            ? this.$btnBack.addClass("disabled")
            : this.$btnForward.addClass("disabled");
        }
      }
    },
    moveForward: function () {
      var self = this;
      this.movement = "forward";
      if (this.trigger !== null) {
        this.$btnBack.removeClass("disabled");
      }
      self.interval = setInterval(function () {
        if (
          self.$clip[0]["scroll" + self.scrollPos] <
          self.posMax - self.clipMax
        ) {
          self.$clip[0]["scroll" + self.scrollPos] += self.o.speed;
        } else if (self.isLoop) {
          self.resetPos();
        } else {
          self.moveStop(self.movement);
        }
      }, self.intervalDelay);
    },
    moveBack: function () {
      var self = this;
      this.movement = "back";
      if (this.trigger !== null) {
        this.$btnForward.removeClass("disabled");
      }
      self.interval = setInterval(function () {
        if (self.$clip[0]["scroll" + self.scrollPos] > self.posMin) {
          self.$clip[0]["scroll" + self.scrollPos] -= self.o.speed;
        } else if (self.isLoop) {
          self.resetPos();
        } else {
          self.moveStop(self.movement);
        }
      }, self.intervalDelay);
    },
    movePause: function () {
      clearInterval(this.interval);
    },
    moveStop: function (moveDir) {
      this.movePause();
      if (this.trigger !== null) {
        if (typeof moveDir !== "undefined") {
          $(this.trigger).addClass("disabled");
        }
        this.trigger = null;
      }
      if (this.isAuto) {
        if (this.o.autoMode == "bounce") {
          moveDir == "forward" ? this.moveBack() : this.moveForward();
        }
      }
    },
    moveResume: function () {
      this.movement == "forward" ? this.moveForward() : this.moveBack();
    },
    resetPos: function () {
      this.$clip[0]["scroll" + this.scrollPos] = this.resetPosition;
    },
  });
})(jQuery, window);

// Slide Nav

!(function (a) {
  "use strict";

  function b() {
    var a,
      b = document.createElement("fakeelement"),
      c = {
        transition: "transitionend",
        OTransition: "oTransitionEnd",
        MozTransition: "transitionend",
        WebkitTransition: "webkitTransitionEnd",
      };
    for (a in c) if (void 0 !== b.style[a]) return c[a];
  }

  function c(b) {
    var c = 0,
      d = 0;
    if (!b) var b = a.event;
    return (
      b.pageX || b.pageY
        ? ((c = b.pageX), (d = b.pageY))
        : (b.clientX || b.clientY) &&
          ((c =
            b.clientX +
            document.body.scrollLeft +
            document.documentElement.scrollLeft),
          (d =
            b.clientY +
            document.body.scrollTop +
            document.documentElement.scrollTop)),
      { x: c, y: d }
    );
  }

  function d(b) {
    var c = b.getBoundingClientRect(),
      d = document.body,
      e = document.documentElement,
      f = a.pageYOffset || e.scrollTop || d.scrollTop,
      g = a.pageXOffset || e.scrollLeft || d.scrollLeft,
      h = e.clientTop || d.clientTop || 0,
      i = e.clientLeft || d.clientLeft || 0,
      j = c.top + f - h,
      k = c.left + g - i;
    return { x: Math.round(k), y: Math.round(j) };
  }

  function e() {
    (this.body = document.body),
      (this.wrapper = document.querySelector("#wrapper")),
      (this.toggle = document.querySelector("#mm-menu-toggle")),
      (this.menu = document.querySelector("#mm-menu")),
      (this.menuItems = this.menu.querySelectorAll("li")),
      (this.menuItemLinks = this.menu.querySelectorAll("a")),
      (this.menuPosition = "off"),
      (this.mask = document.createElement("div")),
      (this.mask.className = "mm-menu-mask"),
      document.body.appendChild(this.mask),
      this._init();
  }
  var f = b();
  (e.prototype._init = function () {
    this._initToggleEvents(),
      this._initItemTransitions(),
      this._initTouchEffect(),
      this._initMaskEvents();
  }),
    (e.prototype._initToggleEvents = function () {
      var a = this;
      this.toggle.addEventListener("click", function () {
        "off" == a.menuPosition ? a._toggleMenuOn() : a._toggleMenuOff();
      });
    }),
    (e.prototype._toggleMenuOn = function () {
      var a = this;
      this.body.classList.add("mm-menu-open"),
        this.wrapper.classList.add("mm-menu-open"),
        this.toggle.classList.add("active"),
        this.menu.classList.add("active");
      for (var b = 0; b < a.menuItems.length; b++) {
        var c = a.menuItems[b];
        !(function (a) {
          a.classList.add("in-view");
        })(c);
      }
      this.mask.classList.add("active"), (this.menuPosition = "on");
    }),
    (e.prototype._toggleMenuOff = function () {
      var a = this;
      this.body.classList.remove("mm-menu-open"),
        this.wrapper.classList.remove("mm-menu-open"),
        this.toggle.classList.remove("active"),
        this.menu.classList.remove("active");
      for (var b = 0; b < a.menuItems.length; b++) {
        var c = a.menuItems[b];
        !(function (a) {
          a.classList.remove("in-view");
        })(c);
      }
      this.mask.classList.remove("active"), (this.menuPosition = "off");
    }),
    (e.prototype._initItemTransitions = function () {
      for (var a = this.menuItems.length, b = 0; a > b; b++) {
        var c = b + 1,
          d = this.menuItems[b];
        this._itemTransitionHandler(d, c);
      }
    }),
    (e.prototype._itemTransitionHandler = function (a, b) {
      a.classList.add("item-" + b);
    }),
    (e.prototype._initTouchEffect = function () {
      for (var a = this.menuItemLinks.length, b = 0; a > b; b++) {
        var c = this.menuItemLinks[b];
        this._touchEffectHandler(c);
      }
    }),
    (e.prototype._touchEffectHandler = function (a) {
      var b = a.offsetWidth,
        e = a.offsetHeight,
        g = 2 * Math.max(b, e),
        h = document.createElement("span");
      (h.className = "mm-menu__link--touch-effect"),
        (h.style.width = g + "px"),
        (h.style.height = g + "px"),
        a.insertBefore(h, a.firstChild),
        a.addEventListener("click", function (a) {
          var b = c(a).x - d(this).x,
            e = c(a).y - d(this).y;
          (h.style.top = e + "px"),
            (h.style.left = b + "px"),
            (h.style.marginTop = -(g / 2) + "px"),
            (h.style.marginLeft = -(g / 2) + "px"),
            h.classList.add("animating");
        }),
        h.addEventListener(f, function () {
          this.classList.remove("animating");
        });
    }),
    (e.prototype._initMaskEvents = function () {
      var a = this;
      this.mask.addEventListener("click", function (b) {
        b.preventDefault(), "on" == a.menuPosition ? a._toggleMenuOff() : !1;
      });
    }),
    (a.Menu = e);
})(window);
var menu = new Menu();

$(".modalbox");
setTimeout(function () {
  $(".modalbox").fadeOut("slow");
}, 5000);

$(document).ready(function () {
  $(".detail-box .editor-box")
    .find("img")
    .each(function () {
      var imageWidth = jQuery(this).width();
      if (imageWidth < 500 && imageWidth > 10) {
        jQuery(this).parent(".image").width(jQuery(this).width());
      }
    });
});

var sourcesSelector = document.body.querySelectorAll("select"),
  sourcesTotal = sourcesSelector.length;
for (var i = 0; i < sourcesTotal; i++) {
  sourcesSelector[i].addEventListener("change", function (e) {
    var media = e.target
        .closest(".media-container")
        .querySelector(".mejs__container").id,
      player = mejs.players[media];
    player.setSrc(e.target.value.replace("&amp;", "&"));
    player.setPoster("");
    player.load();
  });

  // These media types cannot play at all on iOS, so disabling them
  if (mejs.Features.isiOS) {
    sourcesSelector[i].querySelector('option[value^="rtmp"]').disabled = true;
    if (sourcesSelector[i].querySelector('option[value$="webm"]')) {
      sourcesSelector[i].querySelector('option[value$="webm"]').disabled = true;
    }
    if (sourcesSelector[i].querySelector('option[value$=".mpd"]')) {
      sourcesSelector[i].querySelector('option[value$=".mpd"]').disabled = true;
    }
    if (sourcesSelector[i].querySelector('option[value$=".ogg"]')) {
      sourcesSelector[i].querySelector('option[value$=".ogg"]').disabled = true;
    }
    if (sourcesSelector[i].querySelector('option[value$=".flv"]')) {
      sourcesSelector[i].querySelector('option[value*=".flv"]').disabled = true;
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var mediaElements = document.querySelectorAll("video, audio"),
    total = mediaElements.length;

  for (var i = 0; i < total; i++) {
    new MediaElementPlayer(mediaElements[i], {
      pluginPath: "dist/",
      success: function () {
        var target = document.body.querySelectorAll(".player"),
          targetTotal = target.length;
        for (var j = 0; j < targetTotal; j++) {
          target[j].style.visibility = "visible";
        }
      },
    });
  }
});

(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

`,
      }}
    />
  );
};

export default Temp;
