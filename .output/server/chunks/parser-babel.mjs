globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { bn as getDefaultExportFromCjs, bm as commonjsGlobal } from './app/_nuxt/model-9bf70e2c.mjs';
import 'vue';
import 'vue/server-renderer';

function _mergeNamespaces(n, m) {
  m.forEach(function(e) {
    e && typeof e !== "string" && !Array.isArray(e) && Object.keys(e).forEach(function(k) {
      if (k !== "default" && !(k in n)) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k];
          }
        });
      }
    });
  });
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var parserBabel$2 = { exports: {} };
(function(module, exports) {
  (function(e) {
    module.exports = e();
  })(function() {
    var v = (h, l) => () => (l || h((l = { exports: {} }).exports, l), l.exports);
    var W = v((Bf, Jr) => {
      var Pt = function(h) {
        return h && h.Math == Math && h;
      };
      Jr.exports = Pt(typeof globalThis == "object" && globalThis) || Pt("undefined" == "object" ) || Pt(typeof self == "object" && self) || Pt(typeof commonjsGlobal == "object" && commonjsGlobal) || function() {
        return this;
      }() || Function("return this")();
    });
    var Ae = v((Mf, Yr) => {
      Yr.exports = function(h) {
        try {
          return !!h();
        } catch {
          return true;
        }
      };
    });
    var De = v((Rf, $r) => {
      var rl = Ae();
      $r.exports = !rl(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] != 7;
      });
    });
    var Tt = v((jf, Qr) => {
      var il = Ae();
      Qr.exports = !il(function() {
        var h = function() {
        }.bind();
        return typeof h != "function" || h.hasOwnProperty("prototype");
      });
    });
    var bt = v((qf, Zr) => {
      var al = Tt(), Et = Function.prototype.call;
      Zr.exports = al ? Et.bind(Et) : function() {
        return Et.apply(Et, arguments);
      };
    });
    var ri = v((si) => {
      var ei = {}.propertyIsEnumerable, ti = Object.getOwnPropertyDescriptor, nl = ti && !ei.call({ 1: 2 }, 1);
      si.f = nl ? function(l) {
        var p = ti(this, l);
        return !!p && p.enumerable;
      } : ei;
    });
    var ms = v((_f, ii) => {
      ii.exports = function(h, l) {
        return { enumerable: !(h & 1), configurable: !(h & 2), writable: !(h & 4), value: l };
      };
    });
    var ie = v((zf, oi) => {
      var ai = Tt(), ni = Function.prototype, ol = ni.bind, ys = ni.call, hl = ai && ol.bind(ys, ys);
      oi.exports = ai ? function(h) {
        return h && hl(h);
      } : function(h) {
        return h && function() {
          return ys.apply(h, arguments);
        };
      };
    });
    var vt = v((Kf, li) => {
      var hi = ie(), ll = hi({}.toString), ul = hi("".slice);
      li.exports = function(h) {
        return ul(ll(h), 8, -1);
      };
    });
    var ci = v((Vf, ui) => {
      var cl = W(), pl = ie(), fl = Ae(), dl = vt(), xs = cl.Object, ml = pl("".split);
      ui.exports = fl(function() {
        return !xs("z").propertyIsEnumerable(0);
      }) ? function(h) {
        return dl(h) == "String" ? ml(h, "") : xs(h);
      } : xs;
    });
    var gs = v((Hf, pi) => {
      var yl = W(), xl = yl.TypeError;
      pi.exports = function(h) {
        if (h == null)
          throw xl("Can't call method on " + h);
        return h;
      };
    });
    var Ct = v((Wf, fi) => {
      var gl = ci(), Al = gs();
      fi.exports = function(h) {
        return gl(Al(h));
      };
    });
    var ae = v((Gf, di) => {
      di.exports = function(h) {
        return typeof h == "function";
      };
    });
    var Fe = v((Xf, mi) => {
      var Pl = ae();
      mi.exports = function(h) {
        return typeof h == "object" ? h !== null : Pl(h);
      };
    });
    var $e = v((Jf, yi) => {
      var As = W(), Tl = ae(), El = function(h) {
        return Tl(h) ? h : void 0;
      };
      yi.exports = function(h, l) {
        return arguments.length < 2 ? El(As[h]) : As[h] && As[h][l];
      };
    });
    var gi = v((Yf, xi) => {
      var bl = ie();
      xi.exports = bl({}.isPrototypeOf);
    });
    var Pi = v(($f, Ai) => {
      var vl = $e();
      Ai.exports = vl("navigator", "userAgent") || "";
    });
    var wi = v((Qf, Si) => {
      var Ci = W(), Ps = Pi(), Ti = Ci.process, Ei = Ci.Deno, bi = Ti && Ti.versions || Ei && Ei.version, vi = bi && bi.v8, he, St;
      vi && (he = vi.split("."), St = he[0] > 0 && he[0] < 4 ? 1 : +(he[0] + he[1]));
      !St && Ps && (he = Ps.match(/Edge\/(\d+)/), (!he || he[1] >= 74) && (he = Ps.match(/Chrome\/(\d+)/), he && (St = +he[1])));
      Si.exports = St;
    });
    var Ts = v((Zf, Ii) => {
      var Ni = wi(), Cl = Ae();
      Ii.exports = !!Object.getOwnPropertySymbols && !Cl(function() {
        var h = Symbol();
        return !String(h) || !(Object(h) instanceof Symbol) || !Symbol.sham && Ni && Ni < 41;
      });
    });
    var Es = v((ed, ki) => {
      var Sl = Ts();
      ki.exports = Sl && !Symbol.sham && typeof Symbol.iterator == "symbol";
    });
    var bs = v((td, Di) => {
      var wl = W(), Nl = $e(), Il = ae(), kl = gi(), Dl = Es(), Fl = wl.Object;
      Di.exports = Dl ? function(h) {
        return typeof h == "symbol";
      } : function(h) {
        var l = Nl("Symbol");
        return Il(l) && kl(l.prototype, Fl(h));
      };
    });
    var Li = v((sd, Fi) => {
      var Ll = W(), Ol = Ll.String;
      Fi.exports = function(h) {
        try {
          return Ol(h);
        } catch {
          return "Object";
        }
      };
    });
    var wt = v((rd, Oi) => {
      var Bl = W(), Ml = ae(), Rl = Li(), jl = Bl.TypeError;
      Oi.exports = function(h) {
        if (Ml(h))
          return h;
        throw jl(Rl(h) + " is not a function");
      };
    });
    var Mi = v((id, Bi) => {
      var ql = wt();
      Bi.exports = function(h, l) {
        var p = h[l];
        return p == null ? void 0 : ql(p);
      };
    });
    var ji = v((ad, Ri) => {
      var Ul = W(), vs = bt(), Cs = ae(), Ss = Fe(), _l = Ul.TypeError;
      Ri.exports = function(h, l) {
        var p, d;
        if (l === "string" && Cs(p = h.toString) && !Ss(d = vs(p, h)) || Cs(p = h.valueOf) && !Ss(d = vs(p, h)) || l !== "string" && Cs(p = h.toString) && !Ss(d = vs(p, h)))
          return d;
        throw _l("Can't convert object to primitive value");
      };
    });
    var Ui = v((nd, qi) => {
      qi.exports = false;
    });
    var Nt = v((od, zi) => {
      var _i = W(), zl = Object.defineProperty;
      zi.exports = function(h, l) {
        try {
          zl(_i, h, { value: l, configurable: true, writable: true });
        } catch {
          _i[h] = l;
        }
        return l;
      };
    });
    var It = v((hd, Vi) => {
      var Kl = W(), Vl = Nt(), Ki = "__core-js_shared__", Hl = Kl[Ki] || Vl(Ki, {});
      Vi.exports = Hl;
    });
    var ws = v((ld, Wi) => {
      var Wl = Ui(), Hi = It();
      (Wi.exports = function(h, l) {
        return Hi[h] || (Hi[h] = l !== void 0 ? l : {});
      })("versions", []).push({ version: "3.21.1", mode: Wl ? "pure" : "global", copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE", source: "https://github.com/zloirock/core-js" });
    });
    var Ns = v((ud, Gi) => {
      var Gl = W(), Xl = gs(), Jl = Gl.Object;
      Gi.exports = function(h) {
        return Jl(Xl(h));
      };
    });
    var Ce = v((cd, Xi) => {
      var Yl = ie(), $l = Ns(), Ql = Yl({}.hasOwnProperty);
      Xi.exports = Object.hasOwn || function(l, p) {
        return Ql($l(l), p);
      };
    });
    var Is = v((pd, Ji) => {
      var Zl = ie(), eu = 0, tu = Math.random(), su = Zl(1 .toString);
      Ji.exports = function(h) {
        return "Symbol(" + (h === void 0 ? "" : h) + ")_" + su(++eu + tu, 36);
      };
    });
    var Qe = v((fd, ea) => {
      var ru = W(), iu = ws(), Yi = Ce(), au = Is(), $i = Ts(), Zi = Es(), ze = iu("wks"), Le = ru.Symbol, Qi = Le && Le.for, nu = Zi ? Le : Le && Le.withoutSetter || au;
      ea.exports = function(h) {
        if (!Yi(ze, h) || !($i || typeof ze[h] == "string")) {
          var l = "Symbol." + h;
          $i && Yi(Le, h) ? ze[h] = Le[h] : Zi && Qi ? ze[h] = Qi(l) : ze[h] = nu(l);
        }
        return ze[h];
      };
    });
    var ia = v((dd, ra) => {
      var ou = W(), hu = bt(), ta = Fe(), sa = bs(), lu = Mi(), uu = ji(), cu = Qe(), pu = ou.TypeError, fu = cu("toPrimitive");
      ra.exports = function(h, l) {
        if (!ta(h) || sa(h))
          return h;
        var p = lu(h, fu), d;
        if (p) {
          if (l === void 0 && (l = "default"), d = hu(p, h, l), !ta(d) || sa(d))
            return d;
          throw pu("Can't convert object to primitive value");
        }
        return l === void 0 && (l = "number"), uu(h, l);
      };
    });
    var ks = v((md, aa) => {
      var du = ia(), mu = bs();
      aa.exports = function(h) {
        var l = du(h, "string");
        return mu(l) ? l : l + "";
      };
    });
    var ha = v((yd, oa) => {
      var yu = W(), na = Fe(), Ds = yu.document, xu = na(Ds) && na(Ds.createElement);
      oa.exports = function(h) {
        return xu ? Ds.createElement(h) : {};
      };
    });
    var Fs = v((xd, la) => {
      var gu = De(), Au = Ae(), Pu = ha();
      la.exports = !gu && !Au(function() {
        return Object.defineProperty(Pu("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    });
    var Ls = v((ca) => {
      var Tu = De(), Eu = bt(), bu = ri(), vu = ms(), Cu = Ct(), Su = ks(), wu = Ce(), Nu = Fs(), ua = Object.getOwnPropertyDescriptor;
      ca.f = Tu ? ua : function(l, p) {
        if (l = Cu(l), p = Su(p), Nu)
          try {
            return ua(l, p);
          } catch {
          }
        if (wu(l, p))
          return vu(!Eu(bu.f, l, p), l[p]);
      };
    });
    var fa = v((Ad, pa) => {
      var Iu = De(), ku = Ae();
      pa.exports = Iu && ku(function() {
        return Object.defineProperty(function() {
        }, "prototype", { value: 42, writable: false }).prototype != 42;
      });
    });
    var Os = v((Pd, ma) => {
      var da = W(), Du = Fe(), Fu = da.String, Lu = da.TypeError;
      ma.exports = function(h) {
        if (Du(h))
          return h;
        throw Lu(Fu(h) + " is not an object");
      };
    });
    var qs = v((xa) => {
      var Ou = W(), Bu = De(), Mu = Fs(), Ru = fa(), kt = Os(), ya = ks(), ju = Ou.TypeError, Bs = Object.defineProperty, qu = Object.getOwnPropertyDescriptor, Ms = "enumerable", Rs = "configurable", js = "writable";
      xa.f = Bu ? Ru ? function(l, p, d) {
        if (kt(l), p = ya(p), kt(d), typeof l == "function" && p === "prototype" && "value" in d && js in d && !d[js]) {
          var m = qu(l, p);
          m && m[js] && (l[p] = d.value, d = { configurable: Rs in d ? d[Rs] : m[Rs], enumerable: Ms in d ? d[Ms] : m[Ms], writable: false });
        }
        return Bs(l, p, d);
      } : Bs : function(l, p, d) {
        if (kt(l), p = ya(p), kt(d), Mu)
          try {
            return Bs(l, p, d);
          } catch {
          }
        if ("get" in d || "set" in d)
          throw ju("Accessors not supported");
        return "value" in d && (l[p] = d.value), l;
      };
    });
    var Dt = v((Ed, ga) => {
      var Uu = De(), _u = qs(), zu = ms();
      ga.exports = Uu ? function(h, l, p) {
        return _u.f(h, l, zu(1, p));
      } : function(h, l, p) {
        return h[l] = p, h;
      };
    });
    var Ft = v((bd, Aa) => {
      var Ku = ie(), Vu = ae(), Us = It(), Hu = Ku(Function.toString);
      Vu(Us.inspectSource) || (Us.inspectSource = function(h) {
        return Hu(h);
      });
      Aa.exports = Us.inspectSource;
    });
    var Ea = v((vd, Ta) => {
      var Wu = W(), Gu = ae(), Xu = Ft(), Pa = Wu.WeakMap;
      Ta.exports = Gu(Pa) && /native code/.test(Xu(Pa));
    });
    var Ca = v((Cd, va) => {
      var Ju = ws(), Yu = Is(), ba = Ju("keys");
      va.exports = function(h) {
        return ba[h] || (ba[h] = Yu(h));
      };
    });
    var _s = v((Sd, Sa) => {
      Sa.exports = {};
    });
    var Fa = v((wd, Da) => {
      var $u = Ea(), ka = W(), zs = ie(), Qu = Fe(), Zu = Dt(), Ks = Ce(), Vs = It(), ec = Ca(), tc = _s(), wa = "Object already initialized", Ws = ka.TypeError, sc = ka.WeakMap, Lt, Ze, Ot, rc = function(h) {
        return Ot(h) ? Ze(h) : Lt(h, {});
      }, ic = function(h) {
        return function(l) {
          var p;
          if (!Qu(l) || (p = Ze(l)).type !== h)
            throw Ws("Incompatible receiver, " + h + " required");
          return p;
        };
      };
      $u || Vs.state ? (Se = Vs.state || (Vs.state = new sc()), Na = zs(Se.get), Hs = zs(Se.has), Ia = zs(Se.set), Lt = function(h, l) {
        if (Hs(Se, h))
          throw new Ws(wa);
        return l.facade = h, Ia(Se, h, l), l;
      }, Ze = function(h) {
        return Na(Se, h) || {};
      }, Ot = function(h) {
        return Hs(Se, h);
      }) : (Oe = ec("state"), tc[Oe] = true, Lt = function(h, l) {
        if (Ks(h, Oe))
          throw new Ws(wa);
        return l.facade = h, Zu(h, Oe, l), l;
      }, Ze = function(h) {
        return Ks(h, Oe) ? h[Oe] : {};
      }, Ot = function(h) {
        return Ks(h, Oe);
      });
      var Se, Na, Hs, Ia, Oe;
      Da.exports = { set: Lt, get: Ze, has: Ot, enforce: rc, getterFor: ic };
    });
    var Ba = v((Nd, Oa) => {
      var Gs = De(), ac = Ce(), La = Function.prototype, nc = Gs && Object.getOwnPropertyDescriptor, Xs = ac(La, "name"), oc = Xs && function() {
      }.name === "something", hc = Xs && (!Gs || Gs && nc(La, "name").configurable);
      Oa.exports = { EXISTS: Xs, PROPER: oc, CONFIGURABLE: hc };
    });
    var Ua = v((Id, qa) => {
      var lc = W(), Ma = ae(), uc = Ce(), Ra = Dt(), cc = Nt(), pc = Ft(), ja = Fa(), fc = Ba().CONFIGURABLE, dc = ja.get, mc = ja.enforce, yc = String(String).split("String");
      (qa.exports = function(h, l, p, d) {
        var m = d ? !!d.unsafe : false, A = d ? !!d.enumerable : false, x = d ? !!d.noTargetGet : false, g = d && d.name !== void 0 ? d.name : l, P;
        if (Ma(p) && (String(g).slice(0, 7) === "Symbol(" && (g = "[" + String(g).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!uc(p, "name") || fc && p.name !== g) && Ra(p, "name", g), P = mc(p), P.source || (P.source = yc.join(typeof g == "string" ? g : ""))), h === lc) {
          A ? h[l] = p : cc(l, p);
          return;
        } else
          m ? !x && h[l] && (A = true) : delete h[l];
        A ? h[l] = p : Ra(h, l, p);
      })(Function.prototype, "toString", function() {
        return Ma(this) && dc(this).source || pc(this);
      });
    });
    var Js = v((kd, _a) => {
      var xc = Math.ceil, gc = Math.floor;
      _a.exports = function(h) {
        var l = +h;
        return l !== l || l === 0 ? 0 : (l > 0 ? gc : xc)(l);
      };
    });
    var Ka = v((Dd, za) => {
      var Ac = Js(), Pc = Math.max, Tc = Math.min;
      za.exports = function(h, l) {
        var p = Ac(h);
        return p < 0 ? Pc(p + l, 0) : Tc(p, l);
      };
    });
    var Ha = v((Fd, Va) => {
      var Ec = Js(), bc = Math.min;
      Va.exports = function(h) {
        return h > 0 ? bc(Ec(h), 9007199254740991) : 0;
      };
    });
    var Bt = v((Ld, Wa) => {
      var vc = Ha();
      Wa.exports = function(h) {
        return vc(h.length);
      };
    });
    var Ja = v((Od, Xa) => {
      var Cc = Ct(), Sc = Ka(), wc = Bt(), Ga = function(h) {
        return function(l, p, d) {
          var m = Cc(l), A = wc(m), x = Sc(d, A), g;
          if (h && p != p) {
            for (; A > x; )
              if (g = m[x++], g != g)
                return true;
          } else
            for (; A > x; x++)
              if ((h || x in m) && m[x] === p)
                return h || x || 0;
          return !h && -1;
        };
      };
      Xa.exports = { includes: Ga(true), indexOf: Ga(false) };
    });
    var Qa = v((Bd, $a) => {
      var Nc = ie(), Ys = Ce(), Ic = Ct(), kc = Ja().indexOf, Dc = _s(), Ya = Nc([].push);
      $a.exports = function(h, l) {
        var p = Ic(h), d = 0, m = [], A;
        for (A in p)
          !Ys(Dc, A) && Ys(p, A) && Ya(m, A);
        for (; l.length > d; )
          Ys(p, A = l[d++]) && (~kc(m, A) || Ya(m, A));
        return m;
      };
    });
    var en = v((Md, Za) => {
      Za.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    });
    var sn = v((tn) => {
      var Fc = Qa(), Lc = en(), Oc = Lc.concat("length", "prototype");
      tn.f = Object.getOwnPropertyNames || function(l) {
        return Fc(l, Oc);
      };
    });
    var an = v((rn) => {
      rn.f = Object.getOwnPropertySymbols;
    });
    var on = v((qd, nn) => {
      var Bc = $e(), Mc = ie(), Rc = sn(), jc = an(), qc = Os(), Uc = Mc([].concat);
      nn.exports = Bc("Reflect", "ownKeys") || function(l) {
        var p = Rc.f(qc(l)), d = jc.f;
        return d ? Uc(p, d(l)) : p;
      };
    });
    var un = v((Ud, ln) => {
      var hn = Ce(), _c = on(), zc = Ls(), Kc = qs();
      ln.exports = function(h, l, p) {
        for (var d = _c(l), m = Kc.f, A = zc.f, x = 0; x < d.length; x++) {
          var g = d[x];
          !hn(h, g) && !(p && hn(p, g)) && m(h, g, A(l, g));
        }
      };
    });
    var pn = v((_d, cn) => {
      var Vc = Ae(), Hc = ae(), Wc = /#|\.prototype\./, et = function(h, l) {
        var p = Xc[Gc(h)];
        return p == Yc ? true : p == Jc ? false : Hc(l) ? Vc(l) : !!l;
      }, Gc = et.normalize = function(h) {
        return String(h).replace(Wc, ".").toLowerCase();
      }, Xc = et.data = {}, Jc = et.NATIVE = "N", Yc = et.POLYFILL = "P";
      cn.exports = et;
    });
    var Qs = v((zd, fn) => {
      var $s = W(), $c = Ls().f, Qc = Dt(), Zc = Ua(), ep = Nt(), tp = un(), sp = pn();
      fn.exports = function(h, l) {
        var p = h.target, d = h.global, m = h.stat, A, x, g, P, N, D;
        if (d ? x = $s : m ? x = $s[p] || ep(p, {}) : x = ($s[p] || {}).prototype, x)
          for (g in l) {
            if (N = l[g], h.noTargetGet ? (D = $c(x, g), P = D && D.value) : P = x[g], A = sp(d ? g : p + (m ? "." : "#") + g, h.forced), !A && P !== void 0) {
              if (typeof N == typeof P)
                continue;
              tp(N, P);
            }
            (h.sham || P && P.sham) && Qc(N, "sham", true), Zc(x, g, N, h);
          }
      };
    });
    var dn = v(() => {
      var rp = Qs(), ip = W();
      rp({ global: true }, { globalThis: ip });
    });
    var mn = v(() => {
      dn();
    });
    var Zs = v((Gd, yn) => {
      var ap = vt();
      yn.exports = Array.isArray || function(l) {
        return ap(l) == "Array";
      };
    });
    var An = v((Xd, gn) => {
      var xn = ie(), np = wt(), op = Tt(), hp = xn(xn.bind);
      gn.exports = function(h, l) {
        return np(h), l === void 0 ? h : op ? hp(h, l) : function() {
          return h.apply(l, arguments);
        };
      };
    });
    var En = v((Jd, Tn) => {
      var lp = W(), up = Zs(), cp = Bt(), pp = An(), fp = lp.TypeError, Pn = function(h, l, p, d, m, A, x, g) {
        for (var P = m, N = 0, D = x ? pp(x, g) : false, T, L; N < d; ) {
          if (N in p) {
            if (T = D ? D(p[N], N, l) : p[N], A > 0 && up(T))
              L = cp(T), P = Pn(h, l, T, L, P, A - 1) - 1;
            else {
              if (P >= 9007199254740991)
                throw fp("Exceed the acceptable array length");
              h[P] = T;
            }
            P++;
          }
          N++;
        }
        return P;
      };
      Tn.exports = Pn;
    });
    var Cn = v((Yd, vn) => {
      var dp = Qe(), mp = dp("toStringTag"), bn = {};
      bn[mp] = "z";
      vn.exports = String(bn) === "[object z]";
    });
    var wn = v(($d, Sn) => {
      var yp = W(), xp = Cn(), gp = ae(), Mt = vt(), Ap = Qe(), Pp = Ap("toStringTag"), Tp = yp.Object, Ep = Mt(function() {
        return arguments;
      }()) == "Arguments", bp = function(h, l) {
        try {
          return h[l];
        } catch {
        }
      };
      Sn.exports = xp ? Mt : function(h) {
        var l, p, d;
        return h === void 0 ? "Undefined" : h === null ? "Null" : typeof (p = bp(l = Tp(h), Pp)) == "string" ? p : Ep ? Mt(l) : (d = Mt(l)) == "Object" && gp(l.callee) ? "Arguments" : d;
      };
    });
    var Ln = v((Qd, Fn) => {
      var vp = ie(), Cp = Ae(), Nn = ae(), Sp = wn(), wp = $e(), Np = Ft(), In = function() {
      }, Ip = [], kn = wp("Reflect", "construct"), er = /^\s*(?:class|function)\b/, kp = vp(er.exec), Dp = !er.exec(In), tt = function(l) {
        if (!Nn(l))
          return false;
        try {
          return kn(In, Ip, l), true;
        } catch {
          return false;
        }
      }, Dn = function(l) {
        if (!Nn(l))
          return false;
        switch (Sp(l)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return false;
        }
        try {
          return Dp || !!kp(er, Np(l));
        } catch {
          return true;
        }
      };
      Dn.sham = true;
      Fn.exports = !kn || Cp(function() {
        var h;
        return tt(tt.call) || !tt(Object) || !tt(function() {
          h = true;
        }) || h;
      }) ? Dn : tt;
    });
    var Rn = v((Zd, Mn) => {
      var Fp = W(), On = Zs(), Lp = Ln(), Op = Fe(), Bp = Qe(), Mp = Bp("species"), Bn = Fp.Array;
      Mn.exports = function(h) {
        var l;
        return On(h) && (l = h.constructor, Lp(l) && (l === Bn || On(l.prototype)) ? l = void 0 : Op(l) && (l = l[Mp], l === null && (l = void 0))), l === void 0 ? Bn : l;
      };
    });
    var qn = v((em, jn) => {
      var Rp = Rn();
      jn.exports = function(h, l) {
        return new (Rp(h))(l === 0 ? 0 : l);
      };
    });
    var Un = v(() => {
      var jp = Qs(), qp = En(), Up = wt(), _p = Ns(), zp = Bt(), Kp = qn();
      jp({ target: "Array", proto: true }, { flatMap: function(l) {
        var p = _p(this), d = zp(p), m;
        return Up(l), m = Kp(p, 0), m.length = qp(m, p, p, d, 0, 1, l, arguments.length > 1 ? arguments[1] : void 0), m;
      } });
    });
    var Ff = v((rm, Po) => {
      var _n, zn, Kn, Vn, Hn;
      function st(h, l) {
        return l || (l = h.slice(0)), Object.freeze(Object.defineProperties(h, { raw: { value: Object.freeze(l) } }));
      }
      mn();
      Un();
      var ir = Object.defineProperty, Vp = Object.getOwnPropertyDescriptor, ar = Object.getOwnPropertyNames, Hp = Object.prototype.hasOwnProperty, Yn = (h, l) => function() {
        return h && (l = (0, h[ar(h)[0]])(h = 0)), l;
      }, H = (h, l) => function() {
        return l || (0, h[ar(h)[0]])((l = { exports: {} }).exports, l), l.exports;
      }, Wp = (h, l) => {
        for (var p in l)
          ir(h, p, { get: l[p], enumerable: true });
      }, Gp = (h, l, p, d) => {
        if (l && typeof l == "object" || typeof l == "function")
          for (let m of ar(l))
            !Hp.call(h, m) && m !== p && ir(h, m, { get: () => l[m], enumerable: !(d = Vp(l, m)) || d.enumerable });
        return h;
      }, Xp = (h) => Gp(ir({}, "__esModule", { value: true }), h), V = Yn({ "<define:process>"() {
      } }), Jp = H({ "src/utils/try-combinations.js"(h, l) {
        V();
        function p() {
          let d;
          for (var m = arguments.length, A = new Array(m), x = 0; x < m; x++)
            A[x] = arguments[x];
          for (let [g, P] of A.entries())
            try {
              return { result: P() };
            } catch (N) {
              g === 0 && (d = N);
            }
          return { error: d };
        }
        l.exports = p;
      } }), $n = H({ "src/language-js/utils/get-shebang.js"(h, l) {
        V();
        function p(d) {
          if (!d.startsWith("#!"))
            return "";
          let m = d.indexOf(`
`);
          return m === -1 ? d : d.slice(0, m);
        }
        l.exports = p;
      } }), Yp = H({ "src/utils/text/skip-inline-comment.js"(h, l) {
        V();
        function p(d, m) {
          if (m === false)
            return false;
          if (d.charAt(m) === "/" && d.charAt(m + 1) === "*") {
            for (let A = m + 2; A < d.length; ++A)
              if (d.charAt(A) === "*" && d.charAt(A + 1) === "/")
                return A + 2;
          }
          return m;
        }
        l.exports = p;
      } }), $p = H({ "src/utils/text/skip-newline.js"(h, l) {
        V();
        function p(d, m, A) {
          let x = A && A.backwards;
          if (m === false)
            return false;
          let g = d.charAt(m);
          if (x) {
            if (d.charAt(m - 1) === "\r" && g === `
`)
              return m - 2;
            if (g === `
` || g === "\r" || g === "\u2028" || g === "\u2029")
              return m - 1;
          } else {
            if (g === "\r" && d.charAt(m + 1) === `
`)
              return m + 2;
            if (g === `
` || g === "\r" || g === "\u2028" || g === "\u2029")
              return m + 1;
          }
          return m;
        }
        l.exports = p;
      } }), Qn = H({ "src/utils/text/skip.js"(h, l) {
        V();
        function p(g) {
          return (P, N, D) => {
            let T = D && D.backwards;
            if (N === false)
              return false;
            let { length: L } = P, b = N;
            for (; b >= 0 && b < L; ) {
              let _ = P.charAt(b);
              if (g instanceof RegExp) {
                if (!g.test(_))
                  return b;
              } else if (!g.includes(_))
                return b;
              T ? b-- : b++;
            }
            return b === -1 || b === L ? b : false;
          };
        }
        var d = p(/\s/), m = p(" 	"), A = p(",; 	"), x = p(/[^\n\r]/);
        l.exports = { skipWhitespace: d, skipSpaces: m, skipToLineEnd: A, skipEverythingButNewLine: x };
      } }), Qp = H({ "src/utils/text/skip-trailing-comment.js"(h, l) {
        V();
        var { skipEverythingButNewLine: p } = Qn();
        function d(m, A) {
          return A === false ? false : m.charAt(A) === "/" && m.charAt(A + 1) === "/" ? p(m, A) : A;
        }
        l.exports = d;
      } }), Zp = H({ "src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js"(h, l) {
        V();
        var p = Yp(), d = $p(), m = Qp(), { skipSpaces: A } = Qn();
        function x(g, P) {
          let N = null, D = P;
          for (; D !== N; )
            N = D, D = A(g, D), D = p(g, D), D = m(g, D), D = d(g, D);
          return D;
        }
        l.exports = x;
      } }), Zn = {};
      Wp(Zn, { EOL: () => rr, arch: () => ef, cpus: () => no, default: () => co, endianness: () => eo, freemem: () => io, getNetworkInterfaces: () => uo, hostname: () => to, loadavg: () => so, networkInterfaces: () => lo, platform: () => tf, release: () => ho, tmpDir: () => tr, tmpdir: () => sr, totalmem: () => ao, type: () => oo, uptime: () => ro });
      function eo() {
        if (typeof Rt > "u") {
          var h = new ArrayBuffer(2), l = new Uint8Array(h), p = new Uint16Array(h);
          if (l[0] = 1, l[1] = 2, p[0] === 258)
            Rt = "BE";
          else if (p[0] === 513)
            Rt = "LE";
          else
            throw new Error("unable to figure out endianess");
        }
        return Rt;
      }
      function to() {
        return typeof globalThis.location < "u" ? globalThis.location.hostname : "";
      }
      function so() {
        return [];
      }
      function ro() {
        return 0;
      }
      function io() {
        return Number.MAX_VALUE;
      }
      function ao() {
        return Number.MAX_VALUE;
      }
      function no() {
        return [];
      }
      function oo() {
        return "Browser";
      }
      function ho() {
        return typeof globalThis.navigator < "u" ? globalThis.navigator.appVersion : "";
      }
      function lo() {
      }
      function uo() {
      }
      function ef() {
        return "javascript";
      }
      function tf() {
        return "browser";
      }
      function tr() {
        return "/tmp";
      }
      var Rt, sr, rr, co, sf = Yn({ "node-modules-polyfills:os"() {
        V(), sr = tr, rr = `
`, co = { EOL: rr, tmpdir: sr, tmpDir: tr, networkInterfaces: lo, getNetworkInterfaces: uo, release: ho, type: oo, cpus: no, totalmem: ao, freemem: io, uptime: ro, loadavg: so, hostname: to, endianness: eo };
      } }), rf = H({ "node-modules-polyfills-commonjs:os"(h, l) {
        V();
        var p = (sf(), Xp(Zn));
        if (p && p.default) {
          l.exports = p.default;
          for (let d in p)
            l.exports[d] = p[d];
        } else
          p && (l.exports = p);
      } }), af = H({ "node_modules/detect-newline/index.js"(h, l) {
        V();
        var p = (d) => {
          if (typeof d != "string")
            throw new TypeError("Expected a string");
          let m = d.match(/(?:\r?\n)/g) || [];
          if (m.length === 0)
            return;
          let A = m.filter((g) => g === `\r
`).length, x = m.length - A;
          return A > x ? `\r
` : `
`;
        };
        l.exports = p, l.exports.graceful = (d) => typeof d == "string" && p(d) || `
`;
      } }), nf = H({ "node_modules/jest-docblock/build/index.js"(h) {
        V(), Object.defineProperty(h, "__esModule", { value: true }), h.extract = b, h.parse = se, h.parseWithComments = B, h.print = j, h.strip = _;
        function l() {
          let u = rf();
          return l = function() {
            return u;
          }, u;
        }
        function p() {
          let u = d(af());
          return p = function() {
            return u;
          }, u;
        }
        function d(u) {
          return u && u.__esModule ? u : { default: u };
        }
        var m = /\*\/$/, A = /^\/\*\*/, x = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/, g = /(^|\s+)\/\/([^\r\n]*)/g, P = /^(\r?\n)+/, N = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g, D = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g, T = /(\r?\n|^) *\* ?/g, L = [];
        function b(u) {
          let X = u.match(x);
          return X ? X[0].trimLeft() : "";
        }
        function _(u) {
          let X = u.match(x);
          return X && X[0] ? u.substring(X[0].length) : u;
        }
        function se(u) {
          return B(u).pragmas;
        }
        function B(u) {
          let X = (0, p().default)(u) || l().EOL;
          u = u.replace(A, "").replace(m, "").replace(T, "$1");
          let re = "";
          for (; re !== u; )
            re = u, u = u.replace(N, "".concat(X, "$1 $2").concat(X));
          u = u.replace(P, "").trimRight();
          let J = /* @__PURE__ */ Object.create(null), Be = u.replace(D, "").replace(P, "").trimRight(), Y;
          for (; Y = D.exec(u); ) {
            let z = Y[2].replace(g, "");
            typeof J[Y[1]] == "string" || Array.isArray(J[Y[1]]) ? J[Y[1]] = L.concat(J[Y[1]], z) : J[Y[1]] = z;
          }
          return { comments: Be, pragmas: J };
        }
        function j(u) {
          let { comments: X = "", pragmas: re = {} } = u, J = (0, p().default)(X) || l().EOL, Be = "/**", Y = " *", z = " */", O = Object.keys(re), E = O.map((Q) => G(Q, re[Q])).reduce((Q, le) => Q.concat(le), []).map((Q) => Y + " " + Q + J).join("");
          if (!X) {
            if (O.length === 0)
              return "";
            if (O.length === 1 && !Array.isArray(re[O[0]])) {
              let Q = re[O[0]];
              return "".concat(Be, " ").concat(G(O[0], Q)[0]).concat(z);
            }
          }
          let Ke = X.split(J).map((Q) => "".concat(Y, " ").concat(Q)).join(J) + J;
          return Be + J + (X ? Ke : "") + (X && O.length ? Y + J : "") + E + z;
        }
        function G(u, X) {
          return L.concat(X).map((re) => "@".concat(u, " ").concat(re).trim());
        }
      } }), of = H({ "src/common/end-of-line.js"(h, l) {
        V();
        function p(x) {
          let g = x.indexOf("\r");
          return g >= 0 ? x.charAt(g + 1) === `
` ? "crlf" : "cr" : "lf";
        }
        function d(x) {
          switch (x) {
            case "cr":
              return "\r";
            case "crlf":
              return `\r
`;
            default:
              return `
`;
          }
        }
        function m(x, g) {
          let P;
          switch (g) {
            case `
`:
              P = /\n/g;
              break;
            case "\r":
              P = /\r/g;
              break;
            case `\r
`:
              P = /\r\n/g;
              break;
            default:
              throw new Error('Unexpected "eol" '.concat(JSON.stringify(g), "."));
          }
          let N = x.match(P);
          return N ? N.length : 0;
        }
        function A(x) {
          return x.replace(/\r\n?/g, `
`);
        }
        l.exports = { guessEndOfLine: p, convertEndOfLineToChars: d, countEndOfLineChars: m, normalizeEndOfLine: A };
      } }), hf = H({ "src/language-js/pragma.js"(h, l) {
        V();
        var { parseWithComments: p, strip: d, extract: m, print: A } = nf(), { normalizeEndOfLine: x } = of(), g = $n();
        function P(T) {
          let L = g(T);
          L && (T = T.slice(L.length + 1));
          let b = m(T), { pragmas: _, comments: se } = p(b);
          return { shebang: L, text: T, pragmas: _, comments: se };
        }
        function N(T) {
          let L = Object.keys(P(T).pragmas);
          return L.includes("prettier") || L.includes("format");
        }
        function D(T) {
          let { shebang: L, text: b, pragmas: _, comments: se } = P(T), B = d(b), j = A({ pragmas: Object.assign({ format: "" }, _), comments: se.trimStart() });
          return (L ? "".concat(L, `
`) : "") + x(j) + (B.startsWith(`
`) ? `
` : `

`) + B;
        }
        l.exports = { hasPragma: N, insertPragma: D };
      } }), po = H({ "src/utils/is-non-empty-array.js"(h, l) {
        V();
        function p(d) {
          return Array.isArray(d) && d.length > 0;
        }
        l.exports = p;
      } }), fo = H({ "src/language-js/loc.js"(h, l) {
        V();
        var p = po();
        function d(P, N) {
          let { ignoreDecorators: D } = N || {};
          if (!D) {
            let T = P.declaration && P.declaration.decorators || P.decorators;
            if (p(T))
              return d(T[0]);
          }
          return P.range ? P.range[0] : P.start;
        }
        function m(P) {
          return P.range ? P.range[1] : P.end;
        }
        function A(P, N) {
          let D = d(P);
          return Number.isInteger(D) && D === d(N);
        }
        function x(P, N) {
          let D = m(P);
          return Number.isInteger(D) && D === m(N);
        }
        function g(P, N) {
          return A(P, N) && x(P, N);
        }
        l.exports = { locStart: d, locEnd: m, hasSameLocStart: A, hasSameLoc: g };
      } }), mo = H({ "src/language-js/parse/utils/create-parser.js"(h, l) {
        V();
        var { hasPragma: p } = hf(), { locStart: d, locEnd: m } = fo();
        function A(x) {
          return x = typeof x == "function" ? { parse: x } : x, Object.assign({ astFormat: "estree", hasPragma: p, locStart: d, locEnd: m }, x);
        }
        l.exports = A;
      } }), nr = H({ "src/common/parser-create-error.js"(h, l) {
        V();
        function p(d, m) {
          let A = new SyntaxError(d + " (" + m.start.line + ":" + m.start.column + ")");
          return A.loc = m, A;
        }
        l.exports = p;
      } }), yo = H({ "src/language-js/parse/utils/create-babel-parse-error.js"(h, l) {
        V();
        var p = nr();
        function d(m) {
          let { message: A, loc: x } = m;
          return p(A.replace(/ \(.*\)/, ""), { start: { line: x ? x.line : 0, column: x ? x.column + 1 : 0 } });
        }
        l.exports = d;
      } }), lf = H({ "src/language-js/utils/is-ts-keyword-type.js"(h, l) {
        V();
        function p(d) {
          let { type: m } = d;
          return m.startsWith("TS") && m.endsWith("Keyword");
        }
        l.exports = p;
      } }), uf = H({ "src/language-js/utils/is-block-comment.js"(h, l) {
        V();
        function p(d) {
          return d.type === "Block" || d.type === "CommentBlock" || d.type === "MultiLine";
        }
        l.exports = p;
      } }), cf = H({ "src/language-js/utils/is-type-cast-comment.js"(h, l) {
        V();
        var p = uf();
        function d(m) {
          return p(m) && m.value[0] === "*" && /@type\b/.test(m.value);
        }
        l.exports = d;
      } }), pf = H({ "src/utils/get-last.js"(h, l) {
        V();
        var p = (d) => d[d.length - 1];
        l.exports = p;
      } }), xo = H({ "src/language-js/parse/postprocess/visit-node.js"(h, l) {
        V();
        function p(d, m) {
          if (Array.isArray(d)) {
            for (let A = 0; A < d.length; A++)
              d[A] = p(d[A], m);
            return d;
          }
          if (d && typeof d == "object" && typeof d.type == "string") {
            let A = Object.keys(d);
            for (let x = 0; x < A.length; x++)
              d[A[x]] = p(d[A[x]], m);
            return m(d) || d;
          }
          return d;
        }
        l.exports = p;
      } }), ff = H({ "src/language-js/parse/postprocess/typescript.js"(h, l) {
        V();
        var p = nr(), d = xo();
        function m(P, N) {
          let { start: D, end: T } = P.loc;
          throw p(N, { start: { line: D.line, column: D.column + 1 }, end: { line: T.line, column: T.column + 1 } });
        }
        function A(P, N, D) {
          let T = P.decorators;
          if (!Array.isArray(T))
            return;
          let L = N.decorators;
          (!Array.isArray(L) || L.length !== T.length || T.some((b) => {
            let _ = D.get(b);
            return !_ || !L.includes(_);
          })) && m(N, "Leading decorators must be attached to a class declaration");
        }
        function x(P, N) {
          P.kind !== 166 || P.modifiers && !P.modifiers.some((L) => L.kind === 126) || P.initializer && N.value === null && m(N, "Abstract property cannot have an initializer");
        }
        function g(P, N) {
          let { esTreeNodeToTSNodeMap: D, tsNodeToESTreeNodeMap: T } = N.tsParseResult;
          d(P, (L) => {
            let b = D.get(L);
            if (!b)
              return;
            let _ = T.get(b);
            _ === L && (A(b, _, T), x(b, _));
          });
        }
        l.exports = { throwErrorForInvalidNodes: g };
      } }), df = H({ "src/language-js/parse/postprocess/index.js"(h, l) {
        V();
        var { locStart: p, locEnd: d } = fo(), m = lf(), A = cf(), x = pf(), g = xo(), { throwErrorForInvalidNodes: P } = ff();
        function N(b, _) {
          if (_.parser === "typescript" && /@|abstract/.test(_.originalText) && P(b, _), _.parser !== "typescript" && _.parser !== "flow" && _.parser !== "acorn" && _.parser !== "espree" && _.parser !== "meriyah") {
            let B = /* @__PURE__ */ new Set();
            b = g(b, (j) => {
              j.leadingComments && j.leadingComments.some(A) && B.add(p(j));
            }), b = g(b, (j) => {
              if (j.type === "ParenthesizedExpression") {
                let { expression: G } = j;
                if (G.type === "TypeCastExpression")
                  return G.range = j.range, G;
                let u = p(j);
                if (!B.has(u))
                  return G.extra = Object.assign(Object.assign({}, G.extra), {}, { parenthesized: true }), G;
              }
            });
          }
          return b = g(b, (B) => {
            switch (B.type) {
              case "ChainExpression":
                return D(B.expression);
              case "LogicalExpression": {
                if (T(B))
                  return L(B);
                break;
              }
              case "VariableDeclaration": {
                let j = x(B.declarations);
                j && j.init && se(B, j);
                break;
              }
              case "TSParenthesizedType":
                return m(B.typeAnnotation) || B.typeAnnotation.type === "TSThisType" || (B.typeAnnotation.range = [p(B), d(B)]), B.typeAnnotation;
              case "TSTypeParameter":
                if (typeof B.name == "string") {
                  let j = p(B);
                  B.name = { type: "Identifier", name: B.name, range: [j, j + B.name.length] };
                }
                break;
              case "SequenceExpression": {
                let j = x(B.expressions);
                B.range = [p(B), Math.min(d(j), d(B))];
                break;
              }
              case "TopicReference":
                _.__isUsingHackPipeline = true;
                break;
              case "ExportAllDeclaration": {
                let { exported: j } = B;
                if (_.parser === "meriyah" && j && j.type === "Identifier") {
                  let G = _.originalText.slice(p(j), d(j));
                  (G.startsWith('"') || G.startsWith("'")) && (B.exported = Object.assign(Object.assign({}, B.exported), {}, { type: "Literal", value: B.exported.name, raw: G }));
                }
                break;
              }
            }
          }), b;
          function se(B, j) {
            _.originalText[d(j)] !== ";" && (B.range = [p(B), d(j)]);
          }
        }
        function D(b) {
          switch (b.type) {
            case "CallExpression":
              b.type = "OptionalCallExpression", b.callee = D(b.callee);
              break;
            case "MemberExpression":
              b.type = "OptionalMemberExpression", b.object = D(b.object);
              break;
            case "TSNonNullExpression":
              b.expression = D(b.expression);
              break;
          }
          return b;
        }
        function T(b) {
          return b.type === "LogicalExpression" && b.right.type === "LogicalExpression" && b.operator === b.right.operator;
        }
        function L(b) {
          return T(b) ? L({ type: "LogicalExpression", operator: b.operator, left: L({ type: "LogicalExpression", operator: b.operator, left: b.left, right: b.right.left, range: [p(b.left), d(b.right.left)] }), right: b.right.right, range: [p(b), d(b)] }) : b;
        }
        l.exports = N;
      } }), go = H({ "node_modules/@babel/parser/lib/index.js"(h) {
        V(), Object.defineProperty(h, "__esModule", { value: true });
        function l(t, e) {
          if (t == null)
            return {};
          var s = {}, r = Object.keys(t), i, a;
          for (a = 0; a < r.length; a++)
            i = r[a], !(e.indexOf(i) >= 0) && (s[i] = t[i]);
          return s;
        }
        var p = class {
          constructor(t, e, s) {
            this.line = void 0, this.column = void 0, this.index = void 0, this.line = t, this.column = e, this.index = s;
          }
        }, d = class {
          constructor(t, e) {
            this.start = void 0, this.end = void 0, this.filename = void 0, this.identifierName = void 0, this.start = t, this.end = e;
          }
        };
        function m(t, e) {
          let { line: s, column: r, index: i } = t;
          return new p(s, r + e, i + e);
        }
        var A = Object.freeze({ SyntaxError: "BABEL_PARSER_SYNTAX_ERROR", SourceTypeModuleError: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED" }), x = function(t) {
          let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t.length - 1;
          return { get() {
            return t.reduce((s, r) => s[r], this);
          }, set(s) {
            t.reduce((r, i, a) => a === e ? r[i] = s : r[i], this);
          } };
        }, g = (t, e, s) => Object.keys(s).map((r) => [r, s[r]]).filter((r) => {
          let [, i] = r;
          return !!i;
        }).map((r) => {
          let [i, a] = r;
          return [i, typeof a == "function" ? { value: a, enumerable: false } : typeof a.reflect == "string" ? Object.assign({}, a, x(a.reflect.split("."))) : a];
        }).reduce((r, i) => {
          let [a, n] = i;
          return Object.defineProperty(r, a, Object.assign({ configurable: true }, n));
        }, Object.assign(new t(), e)), P = (t) => ({ ImportMetaOutsideModule: t(`globalThis._importMeta_ may appear only with 'sourceType: "module"'`, { code: A.SourceTypeModuleError }), ImportOutsideModule: t(`'import' and 'export' may appear only with 'sourceType: "module"'`, { code: A.SourceTypeModuleError }) }), N = { ArrayPattern: "array destructuring pattern", AssignmentExpression: "assignment expression", AssignmentPattern: "assignment expression", ArrowFunctionExpression: "arrow function expression", ConditionalExpression: "conditional expression", ForOfStatement: "for-of statement", ForInStatement: "for-in statement", ForStatement: "for-loop", FormalParameters: "function parameter list", Identifier: "identifier", ObjectPattern: "object destructuring pattern", ParenthesizedExpression: "parenthesized expression", RestElement: "rest element", UpdateExpression: { true: "prefix operation", false: "postfix operation" }, VariableDeclarator: "variable declaration", YieldExpression: "yield expression" }, D = (t) => {
          let { type: e, prefix: s } = t;
          return e === "UpdateExpression" ? N.UpdateExpression[String(s)] : N[e];
        }, T = (t) => ({ AccessorIsGenerator: t((e) => {
          let { kind: s } = e;
          return "A ".concat(s, "ter cannot be a generator.");
        }), ArgumentsInClass: t("'arguments' is only allowed in functions and class methods."), AsyncFunctionInSingleStatementContext: t("Async functions can only be declared at the top level or inside a block."), AwaitBindingIdentifier: t("Can not use 'await' as identifier inside an async function."), AwaitBindingIdentifierInStaticBlock: t("Can not use 'await' as identifier inside a static block."), AwaitExpressionFormalParameter: t("'await' is not allowed in async function parameters."), AwaitNotInAsyncContext: t("'await' is only allowed within async functions and at the top levels of modules."), AwaitNotInAsyncFunction: t("'await' is only allowed within async functions."), BadGetterArity: t("A 'get' accesor must not have any formal parameters."), BadSetterArity: t("A 'set' accesor must have exactly one formal parameter."), BadSetterRestParameter: t("A 'set' accesor function argument must not be a rest parameter."), ConstructorClassField: t("Classes may not have a field named 'constructor'."), ConstructorClassPrivateField: t("Classes may not have a private field named '#constructor'."), ConstructorIsAccessor: t("Class constructor may not be an accessor."), ConstructorIsAsync: t("Constructor can't be an async function."), ConstructorIsGenerator: t("Constructor can't be a generator."), DeclarationMissingInitializer: t((e) => {
          let { kind: s } = e;
          return "Missing initializer in ".concat(s, " declaration.");
        }), DecoratorBeforeExport: t("Decorators must be placed *before* the 'export' keyword. You can set the 'decoratorsBeforeExport' option to false to use the 'export @decorator class {}' syntax."), DecoratorConstructor: t("Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?"), DecoratorExportClass: t("Using the export keyword between a decorator and a class is not allowed. Please use `export @dec class` instead."), DecoratorSemicolon: t("Decorators must not be followed by a semicolon."), DecoratorStaticBlock: t("Decorators can't be used with a static block."), DeletePrivateField: t("Deleting a private field is not allowed."), DestructureNamedImport: t("ES2015 named imports do not destructure. Use another statement for destructuring after the import."), DuplicateConstructor: t("Duplicate constructor in the same class."), DuplicateDefaultExport: t("Only one default export allowed per module."), DuplicateExport: t((e) => {
          let { exportName: s } = e;
          return "`".concat(s, "` has already been exported. Exported identifiers must be unique.");
        }), DuplicateProto: t("Redefinition of __proto__ property."), DuplicateRegExpFlags: t("Duplicate regular expression flag."), ElementAfterRest: t("Rest element must be last element."), EscapedCharNotAnIdentifier: t("Invalid Unicode escape."), ExportBindingIsString: t((e) => {
          let { localName: s, exportName: r } = e;
          return "A string literal cannot be used as an exported binding without `from`.\n- Did you mean `export { '".concat(s, "' as '").concat(r, "' } from 'some-module'`?");
        }), ExportDefaultFromAsIdentifier: t("'from' is not allowed as an identifier after 'export default'."), ForInOfLoopInitializer: t((e) => {
          let { type: s } = e;
          return "'".concat(s === "ForInStatement" ? "for-in" : "for-of", "' loop variable declaration may not have an initializer.");
        }), ForOfAsync: t("The left-hand side of a for-of loop may not be 'async'."), ForOfLet: t("The left-hand side of a for-of loop may not start with 'let'."), GeneratorInSingleStatementContext: t("Generators can only be declared at the top level or inside a block."), IllegalBreakContinue: t((e) => {
          let { type: s } = e;
          return "Unsyntactic ".concat(s === "BreakStatement" ? "break" : "continue", ".");
        }), IllegalLanguageModeDirective: t("Illegal 'use strict' directive in function with non-simple parameter list."), IllegalReturn: t("'return' outside of function."), ImportBindingIsString: t((e) => {
          let { importName: s } = e;
          return 'A string literal cannot be used as an imported binding.\n- Did you mean `import { "'.concat(s, '" as foo }`?');
        }), ImportCallArgumentTrailingComma: t("Trailing comma is disallowed inside import(...) arguments."), ImportCallArity: t((e) => {
          let { maxArgumentCount: s } = e;
          return "`import()` requires exactly ".concat(s === 1 ? "one argument" : "one or two arguments", ".");
        }), ImportCallNotNewExpression: t("Cannot use new with import(...)."), ImportCallSpreadArgument: t("`...` is not allowed in `import()`."), IncompatibleRegExpUVFlags: t("The 'u' and 'v' regular expression flags cannot be enabled at the same time."), InvalidBigIntLiteral: t("Invalid BigIntLiteral."), InvalidCodePoint: t("Code point out of bounds."), InvalidCoverInitializedName: t("Invalid shorthand property initializer."), InvalidDecimal: t("Invalid decimal."), InvalidDigit: t((e) => {
          let { radix: s } = e;
          return "Expected number in radix ".concat(s, ".");
        }), InvalidEscapeSequence: t("Bad character escape sequence."), InvalidEscapeSequenceTemplate: t("Invalid escape sequence in template."), InvalidEscapedReservedWord: t((e) => {
          let { reservedWord: s } = e;
          return "Escape sequence in keyword ".concat(s, ".");
        }), InvalidIdentifier: t((e) => {
          let { identifierName: s } = e;
          return "Invalid identifier ".concat(s, ".");
        }), InvalidLhs: t((e) => {
          let { ancestor: s } = e;
          return "Invalid left-hand side in ".concat(D(s), ".");
        }), InvalidLhsBinding: t((e) => {
          let { ancestor: s } = e;
          return "Binding invalid left-hand side in ".concat(D(s), ".");
        }), InvalidNumber: t("Invalid number."), InvalidOrMissingExponent: t("Floating-point numbers require a valid exponent after the 'e'."), InvalidOrUnexpectedToken: t((e) => {
          let { unexpected: s } = e;
          return "Unexpected character '".concat(s, "'.");
        }), InvalidParenthesizedAssignment: t("Invalid parenthesized assignment pattern."), InvalidPrivateFieldResolution: t((e) => {
          let { identifierName: s } = e;
          return "Private name #".concat(s, " is not defined.");
        }), InvalidPropertyBindingPattern: t("Binding member expression."), InvalidRecordProperty: t("Only properties and spread elements are allowed in record definitions."), InvalidRestAssignmentPattern: t("Invalid rest operator's argument."), LabelRedeclaration: t((e) => {
          let { labelName: s } = e;
          return "Label '".concat(s, "' is already declared.");
        }), LetInLexicalBinding: t("'let' is not allowed to be used as a name in 'let' or 'const' declarations."), LineTerminatorBeforeArrow: t("No line break is allowed before '=>'."), MalformedRegExpFlags: t("Invalid regular expression flag."), MissingClassName: t("A class name is required."), MissingEqInAssignment: t("Only '=' operator can be used for specifying default value."), MissingSemicolon: t("Missing semicolon."), MissingPlugin: t((e) => {
          let { missingPlugin: s } = e;
          return "This experimental syntax requires enabling the parser plugin: ".concat(s.map((r) => JSON.stringify(r)).join(", "), ".");
        }), MissingOneOfPlugins: t((e) => {
          let { missingPlugin: s } = e;
          return "This experimental syntax requires enabling one of the following parser plugin(s): ".concat(s.map((r) => JSON.stringify(r)).join(", "), ".");
        }), MissingUnicodeEscape: t("Expecting Unicode escape sequence \\uXXXX."), MixingCoalesceWithLogical: t("Nullish coalescing operator(??) requires parens when mixing with logical operators."), ModuleAttributeDifferentFromType: t("The only accepted module attribute is `type`."), ModuleAttributeInvalidValue: t("Only string literals are allowed as module attribute values."), ModuleAttributesWithDuplicateKeys: t((e) => {
          let { key: s } = e;
          return 'Duplicate key "'.concat(s, '" is not allowed in module attributes.');
        }), ModuleExportNameHasLoneSurrogate: t((e) => {
          let { surrogateCharCode: s } = e;
          return "An export name cannot include a lone surrogate, found '\\u".concat(s.toString(16), "'.");
        }), ModuleExportUndefined: t((e) => {
          let { localName: s } = e;
          return "Export '".concat(s, "' is not defined.");
        }), MultipleDefaultsInSwitch: t("Multiple default clauses."), NewlineAfterThrow: t("Illegal newline after throw."), NoCatchOrFinally: t("Missing catch or finally clause."), NumberIdentifier: t("Identifier directly after number."), NumericSeparatorInEscapeSequence: t("Numeric separators are not allowed inside unicode escape sequences or hex escape sequences."), ObsoleteAwaitStar: t("'await*' has been removed from the async functions proposal. Use Promise.all() instead."), OptionalChainingNoNew: t("Constructors in/after an Optional Chain are not allowed."), OptionalChainingNoTemplate: t("Tagged Template Literals are not allowed in optionalChain."), OverrideOnConstructor: t("'override' modifier cannot appear on a constructor declaration."), ParamDupe: t("Argument name clash."), PatternHasAccessor: t("Object pattern can't contain getter or setter."), PatternHasMethod: t("Object pattern can't contain methods."), PrivateInExpectedIn: t((e) => {
          let { identifierName: s } = e;
          return "Private names are only allowed in property accesses (`obj.#".concat(s, "`) or in `in` expressions (`#").concat(s, " in obj`).");
        }), PrivateNameRedeclaration: t((e) => {
          let { identifierName: s } = e;
          return "Duplicate private name #".concat(s, ".");
        }), RecordExpressionBarIncorrectEndSyntaxType: t("Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'."), RecordExpressionBarIncorrectStartSyntaxType: t("Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'."), RecordExpressionHashIncorrectStartSyntaxType: t("Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'."), RecordNoProto: t("'__proto__' is not allowed in Record expressions."), RestTrailingComma: t("Unexpected trailing comma after rest element."), SloppyFunction: t("In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement."), StaticPrototype: t("Classes may not have static property named prototype."), SuperNotAllowed: t("`super()` is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?"), SuperPrivateField: t("Private fields can't be accessed on super."), TrailingDecorator: t("Decorators must be attached to a class element."), TupleExpressionBarIncorrectEndSyntaxType: t("Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'."), TupleExpressionBarIncorrectStartSyntaxType: t("Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'."), TupleExpressionHashIncorrectStartSyntaxType: t("Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'."), UnexpectedArgumentPlaceholder: t("Unexpected argument placeholder."), UnexpectedAwaitAfterPipelineBody: t('Unexpected "await" after pipeline body; await must have parentheses in minimal proposal.'), UnexpectedDigitAfterHash: t("Unexpected digit after hash token."), UnexpectedImportExport: t("'import' and 'export' may only appear at the top level."), UnexpectedKeyword: t((e) => {
          let { keyword: s } = e;
          return "Unexpected keyword '".concat(s, "'.");
        }), UnexpectedLeadingDecorator: t("Leading decorators must be attached to a class declaration."), UnexpectedLexicalDeclaration: t("Lexical declaration cannot appear in a single-statement context."), UnexpectedNewTarget: t("`new.target` can only be used in functions or class properties."), UnexpectedNumericSeparator: t("A numeric separator is only allowed between two digits."), UnexpectedPrivateField: t("Unexpected private name."), UnexpectedReservedWord: t((e) => {
          let { reservedWord: s } = e;
          return "Unexpected reserved word '".concat(s, "'.");
        }), UnexpectedSuper: t("'super' is only allowed in object methods and classes."), UnexpectedToken: t((e) => {
          let { expected: s, unexpected: r } = e;
          return "Unexpected token".concat(r ? " '".concat(r, "'.") : "").concat(s ? ', expected "'.concat(s, '"') : "");
        }), UnexpectedTokenUnaryExponentiation: t("Illegal expression. Wrap left hand side or entire exponentiation in parentheses."), UnsupportedBind: t("Binding should be performed on object property."), UnsupportedDecoratorExport: t("A decorated export must export a class declaration."), UnsupportedDefaultExport: t("Only expressions, functions or classes are allowed as the `default` export."), UnsupportedImport: t("`import` can only be used in `import()` or `import.meta`."), UnsupportedMetaProperty: t((e) => {
          let { target: s, onlyValidPropertyName: r } = e;
          return "The only valid meta property for ".concat(s, " is ").concat(s, ".").concat(r, ".");
        }), UnsupportedParameterDecorator: t("Decorators cannot be used to decorate parameters."), UnsupportedPropertyDecorator: t("Decorators cannot be used to decorate object literal properties."), UnsupportedSuper: t("'super' can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop])."), UnterminatedComment: t("Unterminated comment."), UnterminatedRegExp: t("Unterminated regular expression."), UnterminatedString: t("Unterminated string constant."), UnterminatedTemplate: t("Unterminated template."), VarRedeclaration: t((e) => {
          let { identifierName: s } = e;
          return "Identifier '".concat(s, "' has already been declared.");
        }), YieldBindingIdentifier: t("Can not use 'yield' as identifier inside a generator."), YieldInParameter: t("Yield expression is not allowed in formal parameters."), ZeroDigitNumericSeparator: t("Numeric separator can not be used after leading 0.") }), L = (t) => ({ StrictDelete: t("Deleting local variable in strict mode."), StrictEvalArguments: t((e) => {
          let { referenceName: s } = e;
          return "Assigning to '".concat(s, "' in strict mode.");
        }), StrictEvalArgumentsBinding: t((e) => {
          let { bindingName: s } = e;
          return "Binding '".concat(s, "' in strict mode.");
        }), StrictFunction: t("In strict mode code, functions can only be declared at top level or inside a block."), StrictNumericEscape: t("The only valid numeric escape in strict mode is '\\0'."), StrictOctalLiteral: t("Legacy octal literals are not allowed in strict mode."), StrictWith: t("'with' in strict mode.") }), b = /* @__PURE__ */ new Set(["ArrowFunctionExpression", "AssignmentExpression", "ConditionalExpression", "YieldExpression"]), _ = (t) => ({ PipeBodyIsTighter: t("Unexpected yield after pipeline body; any yield expression acting as Hack-style pipe body must be parenthesized due to its loose operator precedence."), PipeTopicRequiresHackPipes: t('Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.'), PipeTopicUnbound: t("Topic reference is unbound; it must be inside a pipe body."), PipeTopicUnconfiguredToken: t((e) => {
          let { token: s } = e;
          return "Invalid topic token ".concat(s, ". In order to use ").concat(s, ' as a topic reference, the pipelineOperator plugin must be configured with { "proposal": "hack", "topicToken": "').concat(s, '" }.');
        }), PipeTopicUnused: t("Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once."), PipeUnparenthesizedBody: t((e) => {
          let { type: s } = e;
          return "Hack-style pipe body cannot be an unparenthesized ".concat(D({ type: s }), "; please wrap it in parentheses.");
        }), PipelineBodyNoArrow: t('Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized.'), PipelineBodySequenceExpression: t("Pipeline body may not be a comma-separated sequence expression."), PipelineHeadSequenceExpression: t("Pipeline head should not be a comma-separated sequence expression."), PipelineTopicUnused: t("Pipeline is in topic style but does not use topic reference."), PrimaryTopicNotAllowed: t("Topic reference was used in a lexical context without topic binding."), PrimaryTopicRequiresSmartPipeline: t('Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.') }), se = ["toMessage"];
        function B(t) {
          let { toMessage: e } = t, s = l(t, se);
          return function r(i) {
            let { loc: a, details: n } = i;
            return g(SyntaxError, Object.assign({}, s, { loc: a }), { clone() {
              let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = o.loc || {};
              return r({ loc: new p("line" in c ? c.line : this.loc.line, "column" in c ? c.column : this.loc.column, "index" in c ? c.index : this.loc.index), details: Object.assign({}, this.details, o.details) });
            }, details: { value: n, enumerable: false }, message: { get() {
              return "".concat(e(this.details), " (").concat(this.loc.line, ":").concat(this.loc.column, ")");
            }, set(o) {
              Object.defineProperty(this, "message", { value: o });
            } }, pos: { reflect: "loc.index", enumerable: true }, missingPlugin: "missingPlugin" in n && { reflect: "details.missingPlugin", enumerable: true } });
          };
        }
        function j(t, e) {
          return Object.assign({ toMessage: typeof t == "string" ? () => t : t }, e);
        }
        function G(t, e) {
          if (Array.isArray(t))
            return (i) => G(i, t[0]);
          let s = t(j), r = {};
          for (let i of Object.keys(s))
            r[i] = B(Object.assign({ code: A.SyntaxError, reasonCode: i }, e ? { syntaxPlugin: e } : {}, s[i]));
          return r;
        }
        var u = Object.assign({}, G(P), G(T), G(L), G(_n || (_n = st(["pipelineOperator"])))(_)), { defineProperty: X } = Object, re = (t, e) => X(t, e, { enumerable: false, value: t[e] });
        function J(t) {
          return re(t.loc.start, "index"), re(t.loc.end, "index"), t;
        }
        var Be = (t) => class extends t {
          parse() {
            let e = J(super.parse());
            return this.options.tokens && (e.tokens = e.tokens.map(J)), e;
          }
          parseRegExpLiteral(e) {
            let { pattern: s, flags: r } = e, i = null;
            try {
              i = new RegExp(s, r);
            } catch {
            }
            let a = this.estreeParseLiteral(i);
            return a.regex = { pattern: s, flags: r }, a;
          }
          parseBigIntLiteral(e) {
            let s;
            try {
              s = BigInt(e);
            } catch {
              s = null;
            }
            let r = this.estreeParseLiteral(s);
            return r.bigint = String(r.value || e), r;
          }
          parseDecimalLiteral(e) {
            let r = this.estreeParseLiteral(null);
            return r.decimal = String(r.value || e), r;
          }
          estreeParseLiteral(e) {
            return this.parseLiteral(e, "Literal");
          }
          parseStringLiteral(e) {
            return this.estreeParseLiteral(e);
          }
          parseNumericLiteral(e) {
            return this.estreeParseLiteral(e);
          }
          parseNullLiteral() {
            return this.estreeParseLiteral(null);
          }
          parseBooleanLiteral(e) {
            return this.estreeParseLiteral(e);
          }
          directiveToStmt(e) {
            let s = e.value, r = this.startNodeAt(e.start, e.loc.start), i = this.startNodeAt(s.start, s.loc.start);
            return i.value = s.extra.expressionValue, i.raw = s.extra.raw, r.expression = this.finishNodeAt(i, "Literal", s.loc.end), r.directive = s.extra.raw.slice(1, -1), this.finishNodeAt(r, "ExpressionStatement", e.loc.end);
          }
          initFunction(e, s) {
            super.initFunction(e, s), e.expression = false;
          }
          checkDeclaration(e) {
            e != null && this.isObjectProperty(e) ? this.checkDeclaration(e.value) : super.checkDeclaration(e);
          }
          getObjectOrClassMethodParams(e) {
            return e.value.params;
          }
          isValidDirective(e) {
            var s;
            return e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value == "string" && !((s = e.expression.extra) != null && s.parenthesized);
          }
          parseBlockBody(e) {
            for (var s = arguments.length, r = new Array(s > 1 ? s - 1 : 0), i = 1; i < s; i++)
              r[i - 1] = arguments[i];
            super.parseBlockBody(e, ...r);
            let a = e.directives.map((n) => this.directiveToStmt(n));
            e.body = a.concat(e.body), delete e.directives;
          }
          pushClassMethod(e, s, r, i, a, n) {
            this.parseMethod(s, r, i, a, n, "ClassMethod", true), s.typeParameters && (s.value.typeParameters = s.typeParameters, delete s.typeParameters), e.body.push(s);
          }
          parsePrivateName() {
            let e = super.parsePrivateName();
            return this.getPluginOption("estree", "classFeatures") ? this.convertPrivateNameToPrivateIdentifier(e) : e;
          }
          convertPrivateNameToPrivateIdentifier(e) {
            let s = super.getPrivateNameSV(e);
            return e = e, delete e.id, e.name = s, e.type = "PrivateIdentifier", e;
          }
          isPrivateName(e) {
            return this.getPluginOption("estree", "classFeatures") ? e.type === "PrivateIdentifier" : super.isPrivateName(e);
          }
          getPrivateNameSV(e) {
            return this.getPluginOption("estree", "classFeatures") ? e.name : super.getPrivateNameSV(e);
          }
          parseLiteral(e, s) {
            let r = super.parseLiteral(e, s);
            return r.raw = r.extra.raw, delete r.extra, r;
          }
          parseFunctionBody(e, s) {
            let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
            super.parseFunctionBody(e, s, r), e.expression = e.body.type !== "BlockStatement";
          }
          parseMethod(e, s, r, i, a, n) {
            let o = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : false, c = this.startNode();
            return c.kind = e.kind, c = super.parseMethod(c, s, r, i, a, n, o), c.type = "FunctionExpression", delete c.kind, e.value = c, n === "ClassPrivateMethod" && (e.computed = false), n = "MethodDefinition", this.finishNode(e, n);
          }
          parseClassProperty() {
            let e = super.parseClassProperty(...arguments);
            return this.getPluginOption("estree", "classFeatures") && (e.type = "PropertyDefinition"), e;
          }
          parseClassPrivateProperty() {
            let e = super.parseClassPrivateProperty(...arguments);
            return this.getPluginOption("estree", "classFeatures") && (e.type = "PropertyDefinition", e.computed = false), e;
          }
          parseObjectMethod(e, s, r, i, a) {
            let n = super.parseObjectMethod(e, s, r, i, a);
            return n && (n.type = "Property", n.kind === "method" && (n.kind = "init"), n.shorthand = false), n;
          }
          parseObjectProperty(e, s, r, i, a) {
            let n = super.parseObjectProperty(e, s, r, i, a);
            return n && (n.kind = "init", n.type = "Property"), n;
          }
          isValidLVal(e) {
            for (var s = arguments.length, r = new Array(s > 1 ? s - 1 : 0), i = 1; i < s; i++)
              r[i - 1] = arguments[i];
            return e === "Property" ? "value" : super.isValidLVal(e, ...r);
          }
          isAssignable(e, s) {
            return e != null && this.isObjectProperty(e) ? this.isAssignable(e.value, s) : super.isAssignable(e, s);
          }
          toAssignable(e) {
            let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            if (e != null && this.isObjectProperty(e)) {
              let { key: r, value: i } = e;
              return this.isPrivateName(r) && this.classScope.usePrivateName(this.getPrivateNameSV(r), r.loc.start), this.toAssignable(i, s), e;
            }
            return super.toAssignable(e, s);
          }
          toAssignableObjectExpressionProp(e) {
            if (e.kind === "get" || e.kind === "set")
              this.raise(u.PatternHasAccessor, { at: e.key });
            else if (e.method)
              this.raise(u.PatternHasMethod, { at: e.key });
            else {
              for (var s = arguments.length, r = new Array(s > 1 ? s - 1 : 0), i = 1; i < s; i++)
                r[i - 1] = arguments[i];
              super.toAssignableObjectExpressionProp(e, ...r);
            }
          }
          finishCallExpression(e, s) {
            if (super.finishCallExpression(e, s), e.callee.type === "Import") {
              if (e.type = "ImportExpression", e.source = e.arguments[0], this.hasPlugin("importAssertions")) {
                var r;
                e.attributes = (r = e.arguments[1]) != null ? r : null;
              }
              delete e.arguments, delete e.callee;
            }
            return e;
          }
          toReferencedArguments(e) {
            e.type !== "ImportExpression" && super.toReferencedArguments(e);
          }
          parseExport(e) {
            switch (super.parseExport(e), e.type) {
              case "ExportAllDeclaration":
                e.exported = null;
                break;
              case "ExportNamedDeclaration":
                e.specifiers.length === 1 && e.specifiers[0].type === "ExportNamespaceSpecifier" && (e.type = "ExportAllDeclaration", e.exported = e.specifiers[0].exported, delete e.specifiers);
                break;
            }
            return e;
          }
          parseSubscript(e, s, r, i, a) {
            let n = super.parseSubscript(e, s, r, i, a);
            if (a.optionalChainMember) {
              if ((n.type === "OptionalMemberExpression" || n.type === "OptionalCallExpression") && (n.type = n.type.substring(8)), a.stop) {
                let o = this.startNodeAtNode(n);
                return o.expression = n, this.finishNode(o, "ChainExpression");
              }
            } else
              (n.type === "MemberExpression" || n.type === "CallExpression") && (n.optional = false);
            return n;
          }
          hasPropertyAsPrivateName(e) {
            return e.type === "ChainExpression" && (e = e.expression), super.hasPropertyAsPrivateName(e);
          }
          isOptionalChain(e) {
            return e.type === "ChainExpression";
          }
          isObjectProperty(e) {
            return e.type === "Property" && e.kind === "init" && !e.method;
          }
          isObjectMethod(e) {
            return e.method || e.kind === "get" || e.kind === "set";
          }
          finishNodeAt(e, s, r) {
            return J(super.finishNodeAt(e, s, r));
          }
          resetEndLocation(e) {
            let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.state.lastTokEndLoc;
            super.resetEndLocation(e, s), J(e);
          }
        }, Y = class {
          constructor(t, e) {
            this.token = void 0, this.preserveSpace = void 0, this.token = t, this.preserveSpace = !!e;
          }
        }, z = { brace: new Y("{"), j_oTag: new Y("<tag"), j_cTag: new Y("</tag"), j_expr: new Y("<tag>...</tag>", true) };
        z.template = new Y("`", true);
        var O = true, E = true, Ke = true, Q = true, le = true, To = true, or = class {
          constructor(t) {
            let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            this.label = void 0, this.keyword = void 0, this.beforeExpr = void 0, this.startsExpr = void 0, this.rightAssociative = void 0, this.isLoop = void 0, this.isAssign = void 0, this.prefix = void 0, this.postfix = void 0, this.binop = void 0, this.label = t, this.keyword = e.keyword, this.beforeExpr = !!e.beforeExpr, this.startsExpr = !!e.startsExpr, this.rightAssociative = !!e.rightAssociative, this.isLoop = !!e.isLoop, this.isAssign = !!e.isAssign, this.prefix = !!e.prefix, this.postfix = !!e.postfix, this.binop = e.binop != null ? e.binop : null, this.updateContext = null;
          }
        }, jt = /* @__PURE__ */ new Map();
        function q(t) {
          let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          e.keyword = t;
          let s = w(t, e);
          return jt.set(t, s), s;
        }
        function ee(t, e) {
          return w(t, { beforeExpr: O, binop: e });
        }
        var Ve = -1, ce = [], qt = [], Ut = [], _t = [], zt = [], Kt = [];
        function w(t) {
          let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var s, r, i, a;
          return ++Ve, qt.push(t), Ut.push((s = e.binop) != null ? s : -1), _t.push((r = e.beforeExpr) != null ? r : false), zt.push((i = e.startsExpr) != null ? i : false), Kt.push((a = e.prefix) != null ? a : false), ce.push(new or(t, e)), Ve;
        }
        function U(t) {
          let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var s, r, i, a;
          return ++Ve, jt.set(t, Ve), qt.push(t), Ut.push((s = e.binop) != null ? s : -1), _t.push((r = e.beforeExpr) != null ? r : false), zt.push((i = e.startsExpr) != null ? i : false), Kt.push((a = e.prefix) != null ? a : false), ce.push(new or("name", e)), Ve;
        }
        var Eo = { bracketL: w("[", { beforeExpr: O, startsExpr: E }), bracketHashL: w("#[", { beforeExpr: O, startsExpr: E }), bracketBarL: w("[|", { beforeExpr: O, startsExpr: E }), bracketR: w("]"), bracketBarR: w("|]"), braceL: w("{", { beforeExpr: O, startsExpr: E }), braceBarL: w("{|", { beforeExpr: O, startsExpr: E }), braceHashL: w("#{", { beforeExpr: O, startsExpr: E }), braceR: w("}", { beforeExpr: O }), braceBarR: w("|}"), parenL: w("(", { beforeExpr: O, startsExpr: E }), parenR: w(")"), comma: w(",", { beforeExpr: O }), semi: w(";", { beforeExpr: O }), colon: w(":", { beforeExpr: O }), doubleColon: w("::", { beforeExpr: O }), dot: w("."), question: w("?", { beforeExpr: O }), questionDot: w("?."), arrow: w("=>", { beforeExpr: O }), template: w("template"), ellipsis: w("...", { beforeExpr: O }), backQuote: w("`", { startsExpr: E }), dollarBraceL: w("${", { beforeExpr: O, startsExpr: E }), templateTail: w("...`", { startsExpr: E }), templateNonTail: w("...${", { beforeExpr: O, startsExpr: E }), at: w("@"), hash: w("#", { startsExpr: E }), interpreterDirective: w("#!..."), eq: w("=", { beforeExpr: O, isAssign: Q }), assign: w("_=", { beforeExpr: O, isAssign: Q }), slashAssign: w("_=", { beforeExpr: O, isAssign: Q }), xorAssign: w("_=", { beforeExpr: O, isAssign: Q }), moduloAssign: w("_=", { beforeExpr: O, isAssign: Q }), incDec: w("++/--", { prefix: le, postfix: To, startsExpr: E }), bang: w("!", { beforeExpr: O, prefix: le, startsExpr: E }), tilde: w("~", { beforeExpr: O, prefix: le, startsExpr: E }), doubleCaret: w("^^", { startsExpr: E }), doubleAt: w("@@", { startsExpr: E }), pipeline: ee("|>", 0), nullishCoalescing: ee("??", 1), logicalOR: ee("||", 1), logicalAND: ee("&&", 2), bitwiseOR: ee("|", 3), bitwiseXOR: ee("^", 4), bitwiseAND: ee("&", 5), equality: ee("==/!=/===/!==", 6), lt: ee("</>/<=/>=", 7), gt: ee("</>/<=/>=", 7), relational: ee("</>/<=/>=", 7), bitShift: ee("<</>>/>>>", 8), bitShiftL: ee("<</>>/>>>", 8), bitShiftR: ee("<</>>/>>>", 8), plusMin: w("+/-", { beforeExpr: O, binop: 9, prefix: le, startsExpr: E }), modulo: w("%", { binop: 10, startsExpr: E }), star: w("*", { binop: 10 }), slash: ee("/", 10), exponent: w("**", { beforeExpr: O, binop: 11, rightAssociative: true }), _in: q("in", { beforeExpr: O, binop: 7 }), _instanceof: q("instanceof", { beforeExpr: O, binop: 7 }), _break: q("break"), _case: q("case", { beforeExpr: O }), _catch: q("catch"), _continue: q("continue"), _debugger: q("debugger"), _default: q("default", { beforeExpr: O }), _else: q("else", { beforeExpr: O }), _finally: q("finally"), _function: q("function", { startsExpr: E }), _if: q("if"), _return: q("return", { beforeExpr: O }), _switch: q("switch"), _throw: q("throw", { beforeExpr: O, prefix: le, startsExpr: E }), _try: q("try"), _var: q("var"), _const: q("const"), _with: q("with"), _new: q("new", { beforeExpr: O, startsExpr: E }), _this: q("this", { startsExpr: E }), _super: q("super", { startsExpr: E }), _class: q("class", { startsExpr: E }), _extends: q("extends", { beforeExpr: O }), _export: q("export"), _import: q("import", { startsExpr: E }), _null: q("null", { startsExpr: E }), _true: q("true", { startsExpr: E }), _false: q("false", { startsExpr: E }), _typeof: q("typeof", { beforeExpr: O, prefix: le, startsExpr: E }), _void: q("void", { beforeExpr: O, prefix: le, startsExpr: E }), _delete: q("delete", { beforeExpr: O, prefix: le, startsExpr: E }), _do: q("do", { isLoop: Ke, beforeExpr: O }), _for: q("for", { isLoop: Ke }), _while: q("while", { isLoop: Ke }), _as: U("as", { startsExpr: E }), _assert: U("assert", { startsExpr: E }), _async: U("async", { startsExpr: E }), _await: U("await", { startsExpr: E }), _from: U("from", { startsExpr: E }), _get: U("get", { startsExpr: E }), _let: U("let", { startsExpr: E }), _meta: U("meta", { startsExpr: E }), _of: U("of", { startsExpr: E }), _sent: U("sent", { startsExpr: E }), _set: U("set", { startsExpr: E }), _static: U("static", { startsExpr: E }), _yield: U("yield", { startsExpr: E }), _asserts: U("asserts", { startsExpr: E }), _checks: U("checks", { startsExpr: E }), _exports: U("exports", { startsExpr: E }), _global: U("global", { startsExpr: E }), _implements: U("implements", { startsExpr: E }), _intrinsic: U("intrinsic", { startsExpr: E }), _infer: U("infer", { startsExpr: E }), _is: U("is", { startsExpr: E }), _mixins: U("mixins", { startsExpr: E }), _proto: U("proto", { startsExpr: E }), _require: U("require", { startsExpr: E }), _keyof: U("keyof", { startsExpr: E }), _readonly: U("readonly", { startsExpr: E }), _unique: U("unique", { startsExpr: E }), _abstract: U("abstract", { startsExpr: E }), _declare: U("declare", { startsExpr: E }), _enum: U("enum", { startsExpr: E }), _module: U("module", { startsExpr: E }), _namespace: U("namespace", { startsExpr: E }), _interface: U("interface", { startsExpr: E }), _type: U("type", { startsExpr: E }), _opaque: U("opaque", { startsExpr: E }), name: w("name", { startsExpr: E }), string: w("string", { startsExpr: E }), num: w("num", { startsExpr: E }), bigint: w("bigint", { startsExpr: E }), decimal: w("decimal", { startsExpr: E }), regexp: w("regexp", { startsExpr: E }), privateName: w("#name", { startsExpr: E }), eof: w("eof"), jsxName: w("jsxName"), jsxText: w("jsxText", { beforeExpr: true }), jsxTagStart: w("jsxTagStart", { startsExpr: true }), jsxTagEnd: w("jsxTagEnd"), placeholder: w("%%", { startsExpr: true }) };
        function K(t) {
          return t >= 93 && t <= 128;
        }
        function bo(t) {
          return t <= 92;
        }
        function pe(t) {
          return t >= 58 && t <= 128;
        }
        function hr(t) {
          return t >= 58 && t <= 132;
        }
        function vo(t) {
          return _t[t];
        }
        function lr(t) {
          return zt[t];
        }
        function Co(t) {
          return t >= 29 && t <= 33;
        }
        function ur(t) {
          return t >= 125 && t <= 127;
        }
        function So(t) {
          return t >= 90 && t <= 92;
        }
        function Vt(t) {
          return t >= 58 && t <= 92;
        }
        function wo(t) {
          return t >= 39 && t <= 59;
        }
        function No(t) {
          return t === 34;
        }
        function Io(t) {
          return Kt[t];
        }
        function ko(t) {
          return t >= 117 && t <= 119;
        }
        function Do(t) {
          return t >= 120 && t <= 126;
        }
        function Te(t) {
          return qt[t];
        }
        function at(t) {
          return Ut[t];
        }
        function Fo(t) {
          return t === 57;
        }
        function nt(t) {
          return t >= 24 && t <= 25;
        }
        function fe(t) {
          return ce[t];
        }
        ce[8].updateContext = (t) => {
          t.pop();
        }, ce[5].updateContext = ce[7].updateContext = ce[23].updateContext = (t) => {
          t.push(z.brace);
        }, ce[22].updateContext = (t) => {
          t[t.length - 1] === z.template ? t.pop() : t.push(z.template);
        }, ce[138].updateContext = (t) => {
          t.push(z.j_expr, z.j_oTag);
        };
        var Ht = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC", cr = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F", Lo = new RegExp("[" + Ht + "]"), Oo = new RegExp("[" + Ht + cr + "]");
        Ht = cr = null;
        var pr = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1070, 4050, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 46, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 482, 44, 11, 6, 17, 0, 322, 29, 19, 43, 1269, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4152, 8, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938], Bo = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 357, 0, 62, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
        function Wt(t, e) {
          let s = 65536;
          for (let r = 0, i = e.length; r < i; r += 2) {
            if (s += e[r], s > t)
              return false;
            if (s += e[r + 1], s >= t)
              return true;
          }
          return false;
        }
        function de(t) {
          return t < 65 ? t === 36 : t <= 90 ? true : t < 97 ? t === 95 : t <= 122 ? true : t <= 65535 ? t >= 170 && Lo.test(String.fromCharCode(t)) : Wt(t, pr);
        }
        function Me(t) {
          return t < 48 ? t === 36 : t < 58 ? true : t < 65 ? false : t <= 90 ? true : t < 97 ? t === 95 : t <= 122 ? true : t <= 65535 ? t >= 170 && Oo.test(String.fromCharCode(t)) : Wt(t, pr) || Wt(t, Bo);
        }
        var Gt = { keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"], strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"], strictBind: ["eval", "arguments"] }, Mo = new Set(Gt.keyword), Ro = new Set(Gt.strict), jo = new Set(Gt.strictBind);
        function fr(t, e) {
          return e && t === "await" || t === "enum";
        }
        function dr(t, e) {
          return fr(t, e) || Ro.has(t);
        }
        function mr(t) {
          return jo.has(t);
        }
        function yr(t, e) {
          return dr(t, e) || mr(t);
        }
        function qo(t) {
          return Mo.has(t);
        }
        function Uo(t, e, s) {
          return t === 64 && e === 64 && de(s);
        }
        var _o = /* @__PURE__ */ new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "eval", "arguments", "enum", "await"]);
        function zo(t) {
          return _o.has(t);
        }
        var Re = 0, He = 1, me = 2, Xt = 4, xr = 8, ot = 16, gr = 32, we = 64, Jt = 128, ht = 256, lt = He | me | ht, ye = 1, je = 2, Ar = 4, Ee = 8, ut = 16, Pr = 64, ct = 128, Yt = 256, $t = 512, Qt = 1024, Zt = 2048, Tr = ye | je | Ee | ct, xe = ye | 0 | Ee | 0, pt = ye | 0 | Ar | 0, Er = ye | 0 | ut | 0, Ko = 0 | je | 0 | ct, Vo = 0 | je | 0 | 0, br = ye | je | Ee | Yt, vr = 0 | Qt, Ne = 0 | Pr, Ho = ye | 0 | 0 | Pr, Wo = br | $t, Go = 0 | Qt, Xo = Zt, ft = 4, es = 2, ts = 1, ss = es | ts, Jo = es | ft, Yo = ts | ft, $o = es, Qo = ts, rs = 0, Zo = class {
          constructor() {
            this.sawUnambiguousESM = false, this.ambiguousScriptDifferentAst = false;
          }
          hasPlugin(t) {
            if (typeof t == "string")
              return this.plugins.has(t);
            {
              let [e, s] = t;
              if (!this.hasPlugin(e))
                return false;
              let r = this.plugins.get(e);
              for (let i of Object.keys(s))
                if ((r == null ? void 0 : r[i]) !== s[i])
                  return false;
              return true;
            }
          }
          getPluginOption(t, e) {
            var s;
            return (s = this.plugins.get(t)) == null ? void 0 : s[e];
          }
        };
        function Cr(t, e) {
          t.trailingComments === void 0 ? t.trailingComments = e : t.trailingComments.unshift(...e);
        }
        function eh(t, e) {
          t.leadingComments === void 0 ? t.leadingComments = e : t.leadingComments.unshift(...e);
        }
        function We(t, e) {
          t.innerComments === void 0 ? t.innerComments = e : t.innerComments.unshift(...e);
        }
        function Ge(t, e, s) {
          let r = null, i = e.length;
          for (; r === null && i > 0; )
            r = e[--i];
          r === null || r.start > s.start ? We(t, s.comments) : Cr(r, s.comments);
        }
        var th = class extends Zo {
          addComment(t) {
            this.filename && (t.loc.filename = this.filename), this.state.comments.push(t);
          }
          processComment(t) {
            let { commentStack: e } = this.state, s = e.length;
            if (s === 0)
              return;
            let r = s - 1, i = e[r];
            i.start === t.end && (i.leadingNode = t, r--);
            let { start: a } = t;
            for (; r >= 0; r--) {
              let n = e[r], o = n.end;
              if (o > a)
                n.containingNode = t, this.finalizeComment(n), e.splice(r, 1);
              else {
                o === a && (n.trailingNode = t);
                break;
              }
            }
          }
          finalizeComment(t) {
            let { comments: e } = t;
            if (t.leadingNode !== null || t.trailingNode !== null)
              t.leadingNode !== null && Cr(t.leadingNode, e), t.trailingNode !== null && eh(t.trailingNode, e);
            else {
              let { containingNode: s, start: r } = t;
              if (this.input.charCodeAt(r - 1) === 44)
                switch (s.type) {
                  case "ObjectExpression":
                  case "ObjectPattern":
                  case "RecordExpression":
                    Ge(s, s.properties, t);
                    break;
                  case "CallExpression":
                  case "OptionalCallExpression":
                    Ge(s, s.arguments, t);
                    break;
                  case "FunctionDeclaration":
                  case "FunctionExpression":
                  case "ArrowFunctionExpression":
                  case "ObjectMethod":
                  case "ClassMethod":
                  case "ClassPrivateMethod":
                    Ge(s, s.params, t);
                    break;
                  case "ArrayExpression":
                  case "ArrayPattern":
                  case "TupleExpression":
                    Ge(s, s.elements, t);
                    break;
                  case "ExportNamedDeclaration":
                  case "ImportDeclaration":
                    Ge(s, s.specifiers, t);
                    break;
                  default:
                    We(s, e);
                }
              else
                We(s, e);
            }
          }
          finalizeRemainingComments() {
            let { commentStack: t } = this.state;
            for (let e = t.length - 1; e >= 0; e--)
              this.finalizeComment(t[e]);
            this.state.commentStack = [];
          }
          resetPreviousNodeTrailingComments(t) {
            let { commentStack: e } = this.state, { length: s } = e;
            if (s === 0)
              return;
            let r = e[s - 1];
            r.leadingNode === t && (r.leadingNode = null);
          }
          takeSurroundingComments(t, e, s) {
            let { commentStack: r } = this.state, i = r.length;
            if (i === 0)
              return;
            let a = i - 1;
            for (; a >= 0; a--) {
              let n = r[a], o = n.end;
              if (n.start === s)
                n.leadingNode = t;
              else if (o === e)
                n.trailingNode = t;
              else if (o < e)
                break;
            }
          }
        }, is = /\r\n?|[\n\u2028\u2029]/, dt = new RegExp(is.source, "g");
        function Ie(t) {
          switch (t) {
            case 10:
            case 13:
            case 8232:
            case 8233:
              return true;
            default:
              return false;
          }
        }
        var as = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, sh = /(?:[^\S\n\r\u2028\u2029]|\/\/.*|\/\*.*?\*\/)*/y, Sr = new RegExp("(?=(" + sh.source + "))\\1" + /(?=[\n\r\u2028\u2029]|\/\*(?!.*?\*\/)|$)/.source, "y");
        function rh(t) {
          switch (t) {
            case 9:
            case 11:
            case 12:
            case 32:
            case 160:
            case 5760:
            case 8192:
            case 8193:
            case 8194:
            case 8195:
            case 8196:
            case 8197:
            case 8198:
            case 8199:
            case 8200:
            case 8201:
            case 8202:
            case 8239:
            case 8287:
            case 12288:
            case 65279:
              return true;
            default:
              return false;
          }
        }
        var wr = class {
          constructor() {
            this.strict = void 0, this.curLine = void 0, this.lineStart = void 0, this.startLoc = void 0, this.endLoc = void 0, this.errors = [], this.potentialArrowAt = -1, this.noArrowAt = [], this.noArrowParamsConversionAt = [], this.maybeInArrowParameters = false, this.inType = false, this.noAnonFunctionType = false, this.hasFlowComment = false, this.isAmbientContext = false, this.inAbstractClass = false, this.topicContext = { maxNumOfResolvableTopics: 0, maxTopicIndex: null }, this.soloAwait = false, this.inFSharpPipelineDirectBody = false, this.labels = [], this.decoratorStack = [[]], this.comments = [], this.commentStack = [], this.pos = 0, this.type = 135, this.value = null, this.start = 0, this.end = 0, this.lastTokEndLoc = null, this.lastTokStartLoc = null, this.lastTokStart = 0, this.context = [z.brace], this.canStartJSXElement = true, this.containsEsc = false, this.strictErrors = /* @__PURE__ */ new Map(), this.tokensLength = 0;
          }
          init(t) {
            let { strictMode: e, sourceType: s, startLine: r, startColumn: i } = t;
            this.strict = e === false ? false : e === true ? true : s === "module", this.curLine = r, this.lineStart = -i, this.startLoc = this.endLoc = new p(r, i, 0);
          }
          curPosition() {
            return new p(this.curLine, this.pos - this.lineStart, this.pos);
          }
          clone(t) {
            let e = new wr(), s = Object.keys(this);
            for (let r = 0, i = s.length; r < i; r++) {
              let a = s[r], n = this[a];
              !t && Array.isArray(n) && (n = n.slice()), e[a] = n;
            }
            return e;
          }
        }, ih = ["at"], ah = ["at"], nh = function(e) {
          return e >= 48 && e <= 57;
        }, oh = /* @__PURE__ */ new Set([103, 109, 115, 105, 121, 117, 100, 118]), Nr = { decBinOct: /* @__PURE__ */ new Set([46, 66, 69, 79, 95, 98, 101, 111]), hex: /* @__PURE__ */ new Set([46, 88, 95, 120]) }, ne = {};
        ne.bin = /* @__PURE__ */ new Set([48, 49]), ne.oct = /* @__PURE__ */ new Set([...ne.bin, 50, 51, 52, 53, 54, 55]), ne.dec = /* @__PURE__ */ new Set([...ne.oct, 56, 57]), ne.hex = /* @__PURE__ */ new Set([...ne.dec, 65, 66, 67, 68, 69, 70, 97, 98, 99, 100, 101, 102]);
        var be = class {
          constructor(t) {
            this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, this.loc = new d(t.startLoc, t.endLoc);
          }
        }, hh = class extends th {
          constructor(t, e) {
            super();
            this.isLookahead = void 0, this.tokens = [], this.state = new wr(), this.state.init(t), this.input = e, this.length = e.length, this.isLookahead = false;
          }
          pushToken(t) {
            this.tokens.length = this.state.tokensLength, this.tokens.push(t), ++this.state.tokensLength;
          }
          next() {
            this.checkKeywordEscapes(), this.options.tokens && this.pushToken(new be(this.state)), this.state.lastTokStart = this.state.start, this.state.lastTokEndLoc = this.state.endLoc, this.state.lastTokStartLoc = this.state.startLoc, this.nextToken();
          }
          eat(t) {
            return this.match(t) ? (this.next(), true) : false;
          }
          match(t) {
            return this.state.type === t;
          }
          createLookaheadState(t) {
            return { pos: t.pos, value: null, type: t.type, start: t.start, end: t.end, context: [this.curContext()], inType: t.inType, startLoc: t.startLoc, lastTokEndLoc: t.lastTokEndLoc, curLine: t.curLine, lineStart: t.lineStart, curPosition: t.curPosition };
          }
          lookahead() {
            let t = this.state;
            this.state = this.createLookaheadState(t), this.isLookahead = true, this.nextToken(), this.isLookahead = false;
            let e = this.state;
            return this.state = t, e;
          }
          nextTokenStart() {
            return this.nextTokenStartSince(this.state.pos);
          }
          nextTokenStartSince(t) {
            return as.lastIndex = t, as.test(this.input) ? as.lastIndex : t;
          }
          lookaheadCharCode() {
            return this.input.charCodeAt(this.nextTokenStart());
          }
          codePointAtPos(t) {
            let e = this.input.charCodeAt(t);
            if ((e & 64512) === 55296 && ++t < this.input.length) {
              let s = this.input.charCodeAt(t);
              (s & 64512) === 56320 && (e = 65536 + ((e & 1023) << 10) + (s & 1023));
            }
            return e;
          }
          setStrict(t) {
            this.state.strict = t, t && (this.state.strictErrors.forEach((e) => {
              let [s, r] = e;
              return this.raise(s, { at: r });
            }), this.state.strictErrors.clear());
          }
          curContext() {
            return this.state.context[this.state.context.length - 1];
          }
          nextToken() {
            if (this.skipSpace(), this.state.start = this.state.pos, this.isLookahead || (this.state.startLoc = this.state.curPosition()), this.state.pos >= this.length) {
              this.finishToken(135);
              return;
            }
            this.getTokenFromCode(this.codePointAtPos(this.state.pos));
          }
          skipBlockComment() {
            let t;
            this.isLookahead || (t = this.state.curPosition());
            let e = this.state.pos, s = this.input.indexOf("*/", e + 2);
            if (s === -1)
              throw this.raise(u.UnterminatedComment, { at: this.state.curPosition() });
            for (this.state.pos = s + 2, dt.lastIndex = e + 2; dt.test(this.input) && dt.lastIndex <= s; )
              ++this.state.curLine, this.state.lineStart = dt.lastIndex;
            if (this.isLookahead)
              return;
            let r = { type: "CommentBlock", value: this.input.slice(e + 2, s), start: e, end: s + 2, loc: new d(t, this.state.curPosition()) };
            return this.options.tokens && this.pushToken(r), r;
          }
          skipLineComment(t) {
            let e = this.state.pos, s;
            this.isLookahead || (s = this.state.curPosition());
            let r = this.input.charCodeAt(this.state.pos += t);
            if (this.state.pos < this.length)
              for (; !Ie(r) && ++this.state.pos < this.length; )
                r = this.input.charCodeAt(this.state.pos);
            if (this.isLookahead)
              return;
            let i = this.state.pos, a = this.input.slice(e + t, i), n = { type: "CommentLine", value: a, start: e, end: i, loc: new d(s, this.state.curPosition()) };
            return this.options.tokens && this.pushToken(n), n;
          }
          skipSpace() {
            let t = this.state.pos, e = [];
            e:
              for (; this.state.pos < this.length; ) {
                let s = this.input.charCodeAt(this.state.pos);
                switch (s) {
                  case 32:
                  case 160:
                  case 9:
                    ++this.state.pos;
                    break;
                  case 13:
                    this.input.charCodeAt(this.state.pos + 1) === 10 && ++this.state.pos;
                  case 10:
                  case 8232:
                  case 8233:
                    ++this.state.pos, ++this.state.curLine, this.state.lineStart = this.state.pos;
                    break;
                  case 47:
                    switch (this.input.charCodeAt(this.state.pos + 1)) {
                      case 42: {
                        let r = this.skipBlockComment();
                        r !== void 0 && (this.addComment(r), this.options.attachComment && e.push(r));
                        break;
                      }
                      case 47: {
                        let r = this.skipLineComment(2);
                        r !== void 0 && (this.addComment(r), this.options.attachComment && e.push(r));
                        break;
                      }
                      default:
                        break e;
                    }
                    break;
                  default:
                    if (rh(s))
                      ++this.state.pos;
                    else if (s === 45 && !this.inModule) {
                      let r = this.state.pos;
                      if (this.input.charCodeAt(r + 1) === 45 && this.input.charCodeAt(r + 2) === 62 && (t === 0 || this.state.lineStart > t)) {
                        let i = this.skipLineComment(3);
                        i !== void 0 && (this.addComment(i), this.options.attachComment && e.push(i));
                      } else
                        break e;
                    } else if (s === 60 && !this.inModule) {
                      let r = this.state.pos;
                      if (this.input.charCodeAt(r + 1) === 33 && this.input.charCodeAt(r + 2) === 45 && this.input.charCodeAt(r + 3) === 45) {
                        let i = this.skipLineComment(4);
                        i !== void 0 && (this.addComment(i), this.options.attachComment && e.push(i));
                      } else
                        break e;
                    } else
                      break e;
                }
              }
            if (e.length > 0) {
              let s = this.state.pos, r = { start: t, end: s, comments: e, leadingNode: null, trailingNode: null, containingNode: null };
              this.state.commentStack.push(r);
            }
          }
          finishToken(t, e) {
            this.state.end = this.state.pos, this.state.endLoc = this.state.curPosition();
            let s = this.state.type;
            this.state.type = t, this.state.value = e, this.isLookahead || this.updateContext(s);
          }
          replaceToken(t) {
            this.state.type = t, this.updateContext();
          }
          readToken_numberSign() {
            if (this.state.pos === 0 && this.readToken_interpreter())
              return;
            let t = this.state.pos + 1, e = this.codePointAtPos(t);
            if (e >= 48 && e <= 57)
              throw this.raise(u.UnexpectedDigitAfterHash, { at: this.state.curPosition() });
            if (e === 123 || e === 91 && this.hasPlugin("recordAndTuple")) {
              if (this.expectPlugin("recordAndTuple"), this.getPluginOption("recordAndTuple", "syntaxType") !== "hash")
                throw this.raise(e === 123 ? u.RecordExpressionHashIncorrectStartSyntaxType : u.TupleExpressionHashIncorrectStartSyntaxType, { at: this.state.curPosition() });
              this.state.pos += 2, e === 123 ? this.finishToken(7) : this.finishToken(1);
            } else
              de(e) ? (++this.state.pos, this.finishToken(134, this.readWord1(e))) : e === 92 ? (++this.state.pos, this.finishToken(134, this.readWord1())) : this.finishOp(27, 1);
          }
          readToken_dot() {
            let t = this.input.charCodeAt(this.state.pos + 1);
            if (t >= 48 && t <= 57) {
              this.readNumber(true);
              return;
            }
            t === 46 && this.input.charCodeAt(this.state.pos + 2) === 46 ? (this.state.pos += 3, this.finishToken(21)) : (++this.state.pos, this.finishToken(16));
          }
          readToken_slash() {
            this.input.charCodeAt(this.state.pos + 1) === 61 ? this.finishOp(31, 2) : this.finishOp(56, 1);
          }
          readToken_interpreter() {
            if (this.state.pos !== 0 || this.length < 2)
              return false;
            let t = this.input.charCodeAt(this.state.pos + 1);
            if (t !== 33)
              return false;
            let e = this.state.pos;
            for (this.state.pos += 1; !Ie(t) && ++this.state.pos < this.length; )
              t = this.input.charCodeAt(this.state.pos);
            let s = this.input.slice(e + 2, this.state.pos);
            return this.finishToken(28, s), true;
          }
          readToken_mult_modulo(t) {
            let e = t === 42 ? 55 : 54, s = 1, r = this.input.charCodeAt(this.state.pos + 1);
            t === 42 && r === 42 && (s++, r = this.input.charCodeAt(this.state.pos + 2), e = 57), r === 61 && !this.state.inType && (s++, e = t === 37 ? 33 : 30), this.finishOp(e, s);
          }
          readToken_pipe_amp(t) {
            let e = this.input.charCodeAt(this.state.pos + 1);
            if (e === t) {
              this.input.charCodeAt(this.state.pos + 2) === 61 ? this.finishOp(30, 3) : this.finishOp(t === 124 ? 41 : 42, 2);
              return;
            }
            if (t === 124) {
              if (e === 62) {
                this.finishOp(39, 2);
                return;
              }
              if (this.hasPlugin("recordAndTuple") && e === 125) {
                if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
                  throw this.raise(u.RecordExpressionBarIncorrectEndSyntaxType, { at: this.state.curPosition() });
                this.state.pos += 2, this.finishToken(9);
                return;
              }
              if (this.hasPlugin("recordAndTuple") && e === 93) {
                if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
                  throw this.raise(u.TupleExpressionBarIncorrectEndSyntaxType, { at: this.state.curPosition() });
                this.state.pos += 2, this.finishToken(4);
                return;
              }
            }
            if (e === 61) {
              this.finishOp(30, 2);
              return;
            }
            this.finishOp(t === 124 ? 43 : 45, 1);
          }
          readToken_caret() {
            let t = this.input.charCodeAt(this.state.pos + 1);
            if (t === 61 && !this.state.inType)
              this.finishOp(32, 2);
            else if (t === 94 && this.hasPlugin(["pipelineOperator", { proposal: "hack", topicToken: "^^" }])) {
              if (this.finishOp(37, 2), this.input.codePointAt(this.state.pos) === 94)
                throw this.unexpected();
            } else
              this.finishOp(44, 1);
          }
          readToken_atSign() {
            this.input.charCodeAt(this.state.pos + 1) === 64 && this.hasPlugin(["pipelineOperator", { proposal: "hack", topicToken: "@@" }]) ? this.finishOp(38, 2) : this.finishOp(26, 1);
          }
          readToken_plus_min(t) {
            let e = this.input.charCodeAt(this.state.pos + 1);
            if (e === t) {
              this.finishOp(34, 2);
              return;
            }
            e === 61 ? this.finishOp(30, 2) : this.finishOp(53, 1);
          }
          readToken_lt() {
            let { pos: t } = this.state, e = this.input.charCodeAt(t + 1);
            if (e === 60) {
              if (this.input.charCodeAt(t + 2) === 61) {
                this.finishOp(30, 3);
                return;
              }
              this.finishOp(51, 2);
              return;
            }
            if (e === 61) {
              this.finishOp(49, 2);
              return;
            }
            this.finishOp(47, 1);
          }
          readToken_gt() {
            let { pos: t } = this.state, e = this.input.charCodeAt(t + 1);
            if (e === 62) {
              let s = this.input.charCodeAt(t + 2) === 62 ? 3 : 2;
              if (this.input.charCodeAt(t + s) === 61) {
                this.finishOp(30, s + 1);
                return;
              }
              this.finishOp(52, s);
              return;
            }
            if (e === 61) {
              this.finishOp(49, 2);
              return;
            }
            this.finishOp(48, 1);
          }
          readToken_eq_excl(t) {
            let e = this.input.charCodeAt(this.state.pos + 1);
            if (e === 61) {
              this.finishOp(46, this.input.charCodeAt(this.state.pos + 2) === 61 ? 3 : 2);
              return;
            }
            if (t === 61 && e === 62) {
              this.state.pos += 2, this.finishToken(19);
              return;
            }
            this.finishOp(t === 61 ? 29 : 35, 1);
          }
          readToken_question() {
            let t = this.input.charCodeAt(this.state.pos + 1), e = this.input.charCodeAt(this.state.pos + 2);
            t === 63 ? e === 61 ? this.finishOp(30, 3) : this.finishOp(40, 2) : t === 46 && !(e >= 48 && e <= 57) ? (this.state.pos += 2, this.finishToken(18)) : (++this.state.pos, this.finishToken(17));
          }
          getTokenFromCode(t) {
            switch (t) {
              case 46:
                this.readToken_dot();
                return;
              case 40:
                ++this.state.pos, this.finishToken(10);
                return;
              case 41:
                ++this.state.pos, this.finishToken(11);
                return;
              case 59:
                ++this.state.pos, this.finishToken(13);
                return;
              case 44:
                ++this.state.pos, this.finishToken(12);
                return;
              case 91:
                if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
                  if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
                    throw this.raise(u.TupleExpressionBarIncorrectStartSyntaxType, { at: this.state.curPosition() });
                  this.state.pos += 2, this.finishToken(2);
                } else
                  ++this.state.pos, this.finishToken(0);
                return;
              case 93:
                ++this.state.pos, this.finishToken(3);
                return;
              case 123:
                if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
                  if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
                    throw this.raise(u.RecordExpressionBarIncorrectStartSyntaxType, { at: this.state.curPosition() });
                  this.state.pos += 2, this.finishToken(6);
                } else
                  ++this.state.pos, this.finishToken(5);
                return;
              case 125:
                ++this.state.pos, this.finishToken(8);
                return;
              case 58:
                this.hasPlugin("functionBind") && this.input.charCodeAt(this.state.pos + 1) === 58 ? this.finishOp(15, 2) : (++this.state.pos, this.finishToken(14));
                return;
              case 63:
                this.readToken_question();
                return;
              case 96:
                this.readTemplateToken();
                return;
              case 48: {
                let e = this.input.charCodeAt(this.state.pos + 1);
                if (e === 120 || e === 88) {
                  this.readRadixNumber(16);
                  return;
                }
                if (e === 111 || e === 79) {
                  this.readRadixNumber(8);
                  return;
                }
                if (e === 98 || e === 66) {
                  this.readRadixNumber(2);
                  return;
                }
              }
              case 49:
              case 50:
              case 51:
              case 52:
              case 53:
              case 54:
              case 55:
              case 56:
              case 57:
                this.readNumber(false);
                return;
              case 34:
              case 39:
                this.readString(t);
                return;
              case 47:
                this.readToken_slash();
                return;
              case 37:
              case 42:
                this.readToken_mult_modulo(t);
                return;
              case 124:
              case 38:
                this.readToken_pipe_amp(t);
                return;
              case 94:
                this.readToken_caret();
                return;
              case 43:
              case 45:
                this.readToken_plus_min(t);
                return;
              case 60:
                this.readToken_lt();
                return;
              case 62:
                this.readToken_gt();
                return;
              case 61:
              case 33:
                this.readToken_eq_excl(t);
                return;
              case 126:
                this.finishOp(36, 1);
                return;
              case 64:
                this.readToken_atSign();
                return;
              case 35:
                this.readToken_numberSign();
                return;
              case 92:
                this.readWord();
                return;
              default:
                if (de(t)) {
                  this.readWord(t);
                  return;
                }
            }
            throw this.raise(u.InvalidOrUnexpectedToken, { at: this.state.curPosition(), unexpected: String.fromCodePoint(t) });
          }
          finishOp(t, e) {
            let s = this.input.slice(this.state.pos, this.state.pos + e);
            this.state.pos += e, this.finishToken(t, s);
          }
          readRegexp() {
            let t = this.state.startLoc, e = this.state.start + 1, s, r, { pos: i } = this.state;
            for (; ; ++i) {
              if (i >= this.length)
                throw this.raise(u.UnterminatedRegExp, { at: m(t, 1) });
              let c = this.input.charCodeAt(i);
              if (Ie(c))
                throw this.raise(u.UnterminatedRegExp, { at: m(t, 1) });
              if (s)
                s = false;
              else {
                if (c === 91)
                  r = true;
                else if (c === 93 && r)
                  r = false;
                else if (c === 47 && !r)
                  break;
                s = c === 92;
              }
            }
            let a = this.input.slice(e, i);
            ++i;
            let n = "", o = () => m(t, i + 2 - e);
            for (; i < this.length; ) {
              let c = this.codePointAtPos(i), f = String.fromCharCode(c);
              if (oh.has(c))
                c === 118 ? (this.expectPlugin("regexpUnicodeSets", o()), n.includes("u") && this.raise(u.IncompatibleRegExpUVFlags, { at: o() })) : c === 117 && n.includes("v") && this.raise(u.IncompatibleRegExpUVFlags, { at: o() }), n.includes(f) && this.raise(u.DuplicateRegExpFlags, { at: o() });
              else if (Me(c) || c === 92)
                this.raise(u.MalformedRegExpFlags, { at: o() });
              else
                break;
              ++i, n += f;
            }
            this.state.pos = i, this.finishToken(133, { pattern: a, flags: n });
          }
          readInt(t, e, s) {
            let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, i = this.state.pos, a = t === 16 ? Nr.hex : Nr.decBinOct, n = t === 16 ? ne.hex : t === 10 ? ne.dec : t === 8 ? ne.oct : ne.bin, o = false, c = 0;
            for (let f = 0, y = e == null ? 1 / 0 : e; f < y; ++f) {
              let C = this.input.charCodeAt(this.state.pos), S;
              if (C === 95 && r !== "bail") {
                let I = this.input.charCodeAt(this.state.pos - 1), M = this.input.charCodeAt(this.state.pos + 1);
                r ? (Number.isNaN(M) || !n.has(M) || a.has(I) || a.has(M)) && this.raise(u.UnexpectedNumericSeparator, { at: this.state.curPosition() }) : this.raise(u.NumericSeparatorInEscapeSequence, { at: this.state.curPosition() }), ++this.state.pos;
                continue;
              }
              if (C >= 97 ? S = C - 97 + 10 : C >= 65 ? S = C - 65 + 10 : nh(C) ? S = C - 48 : S = 1 / 0, S >= t)
                if (this.options.errorRecovery && S <= 9)
                  S = 0, this.raise(u.InvalidDigit, { at: this.state.curPosition(), radix: t });
                else if (s)
                  S = 0, o = true;
                else
                  break;
              ++this.state.pos, c = c * t + S;
            }
            return this.state.pos === i || e != null && this.state.pos - i !== e || o ? null : c;
          }
          readRadixNumber(t) {
            let e = this.state.curPosition(), s = false;
            this.state.pos += 2;
            let r = this.readInt(t);
            r == null && this.raise(u.InvalidDigit, { at: m(e, 2), radix: t });
            let i = this.input.charCodeAt(this.state.pos);
            if (i === 110)
              ++this.state.pos, s = true;
            else if (i === 109)
              throw this.raise(u.InvalidDecimal, { at: e });
            if (de(this.codePointAtPos(this.state.pos)))
              throw this.raise(u.NumberIdentifier, { at: this.state.curPosition() });
            if (s) {
              let a = this.input.slice(e.index, this.state.pos).replace(/[_n]/g, "");
              this.finishToken(131, a);
              return;
            }
            this.finishToken(130, r);
          }
          readNumber(t) {
            let e = this.state.pos, s = this.state.curPosition(), r = false, i = false, a = false, n = false, o = false;
            !t && this.readInt(10) === null && this.raise(u.InvalidNumber, { at: this.state.curPosition() });
            let c = this.state.pos - e >= 2 && this.input.charCodeAt(e) === 48;
            if (c) {
              let S = this.input.slice(e, this.state.pos);
              if (this.recordStrictModeErrors(u.StrictOctalLiteral, { at: s }), !this.state.strict) {
                let I = S.indexOf("_");
                I > 0 && this.raise(u.ZeroDigitNumericSeparator, { at: m(s, I) });
              }
              o = c && !/[89]/.test(S);
            }
            let f = this.input.charCodeAt(this.state.pos);
            if (f === 46 && !o && (++this.state.pos, this.readInt(10), r = true, f = this.input.charCodeAt(this.state.pos)), (f === 69 || f === 101) && !o && (f = this.input.charCodeAt(++this.state.pos), (f === 43 || f === 45) && ++this.state.pos, this.readInt(10) === null && this.raise(u.InvalidOrMissingExponent, { at: s }), r = true, n = true, f = this.input.charCodeAt(this.state.pos)), f === 110 && ((r || c) && this.raise(u.InvalidBigIntLiteral, { at: s }), ++this.state.pos, i = true), f === 109 && (this.expectPlugin("decimal", this.state.curPosition()), (n || c) && this.raise(u.InvalidDecimal, { at: s }), ++this.state.pos, a = true), de(this.codePointAtPos(this.state.pos)))
              throw this.raise(u.NumberIdentifier, { at: this.state.curPosition() });
            let y = this.input.slice(e, this.state.pos).replace(/[_mn]/g, "");
            if (i) {
              this.finishToken(131, y);
              return;
            }
            if (a) {
              this.finishToken(132, y);
              return;
            }
            let C = o ? parseInt(y, 8) : parseFloat(y);
            this.finishToken(130, C);
          }
          readCodePoint(t) {
            let e = this.input.charCodeAt(this.state.pos), s;
            if (e === 123) {
              if (++this.state.pos, s = this.readHexChar(this.input.indexOf("}", this.state.pos) - this.state.pos, true, t), ++this.state.pos, s !== null && s > 1114111)
                if (t)
                  this.raise(u.InvalidCodePoint, { at: this.state.curPosition() });
                else
                  return null;
            } else
              s = this.readHexChar(4, false, t);
            return s;
          }
          readString(t) {
            let e = "", s = ++this.state.pos;
            for (; ; ) {
              if (this.state.pos >= this.length)
                throw this.raise(u.UnterminatedString, { at: this.state.startLoc });
              let r = this.input.charCodeAt(this.state.pos);
              if (r === t)
                break;
              if (r === 92)
                e += this.input.slice(s, this.state.pos), e += this.readEscapedChar(false), s = this.state.pos;
              else if (r === 8232 || r === 8233)
                ++this.state.pos, ++this.state.curLine, this.state.lineStart = this.state.pos;
              else {
                if (Ie(r))
                  throw this.raise(u.UnterminatedString, { at: this.state.startLoc });
                ++this.state.pos;
              }
            }
            e += this.input.slice(s, this.state.pos++), this.finishToken(129, e);
          }
          readTemplateContinuation() {
            this.match(8) || this.unexpected(null, 8), this.state.pos--, this.readTemplateToken();
          }
          readTemplateToken() {
            let t = "", e = this.state.pos, s = false;
            for (++this.state.pos; ; ) {
              if (this.state.pos >= this.length)
                throw this.raise(u.UnterminatedTemplate, { at: m(this.state.startLoc, 1) });
              let r = this.input.charCodeAt(this.state.pos);
              if (r === 96) {
                ++this.state.pos, t += this.input.slice(e, this.state.pos), this.finishToken(24, s ? null : t);
                return;
              }
              if (r === 36 && this.input.charCodeAt(this.state.pos + 1) === 123) {
                this.state.pos += 2, t += this.input.slice(e, this.state.pos), this.finishToken(25, s ? null : t);
                return;
              }
              if (r === 92) {
                t += this.input.slice(e, this.state.pos);
                let i = this.readEscapedChar(true);
                i === null ? s = true : t += i, e = this.state.pos;
              } else if (Ie(r)) {
                switch (t += this.input.slice(e, this.state.pos), ++this.state.pos, r) {
                  case 13:
                    this.input.charCodeAt(this.state.pos) === 10 && ++this.state.pos;
                  case 10:
                    t += `
`;
                    break;
                  default:
                    t += String.fromCharCode(r);
                    break;
                }
                ++this.state.curLine, this.state.lineStart = this.state.pos, e = this.state.pos;
              } else
                ++this.state.pos;
            }
          }
          recordStrictModeErrors(t, e) {
            let { at: s } = e, r = s.index;
            this.state.strict && !this.state.strictErrors.has(r) ? this.raise(t, { at: s }) : this.state.strictErrors.set(r, [t, s]);
          }
          readEscapedChar(t) {
            let e = !t, s = this.input.charCodeAt(++this.state.pos);
            switch (++this.state.pos, s) {
              case 110:
                return `
`;
              case 114:
                return "\r";
              case 120: {
                let r = this.readHexChar(2, false, e);
                return r === null ? null : String.fromCharCode(r);
              }
              case 117: {
                let r = this.readCodePoint(e);
                return r === null ? null : String.fromCodePoint(r);
              }
              case 116:
                return "	";
              case 98:
                return "\b";
              case 118:
                return "\v";
              case 102:
                return "\f";
              case 13:
                this.input.charCodeAt(this.state.pos) === 10 && ++this.state.pos;
              case 10:
                this.state.lineStart = this.state.pos, ++this.state.curLine;
              case 8232:
              case 8233:
                return "";
              case 56:
              case 57:
                if (t)
                  return null;
                this.recordStrictModeErrors(u.StrictNumericEscape, { at: m(this.state.curPosition(), -1) });
              default:
                if (s >= 48 && s <= 55) {
                  let r = m(this.state.curPosition(), -1), a = this.input.substr(this.state.pos - 1, 3).match(/^[0-7]+/)[0], n = parseInt(a, 8);
                  n > 255 && (a = a.slice(0, -1), n = parseInt(a, 8)), this.state.pos += a.length - 1;
                  let o = this.input.charCodeAt(this.state.pos);
                  if (a !== "0" || o === 56 || o === 57) {
                    if (t)
                      return null;
                    this.recordStrictModeErrors(u.StrictNumericEscape, { at: r });
                  }
                  return String.fromCharCode(n);
                }
                return String.fromCharCode(s);
            }
          }
          readHexChar(t, e, s) {
            let r = this.state.curPosition(), i = this.readInt(16, t, e, false);
            return i === null && (s ? this.raise(u.InvalidEscapeSequence, { at: r }) : this.state.pos = r.index - 1), i;
          }
          readWord1(t) {
            this.state.containsEsc = false;
            let e = "", s = this.state.pos, r = this.state.pos;
            for (t !== void 0 && (this.state.pos += t <= 65535 ? 1 : 2); this.state.pos < this.length; ) {
              let i = this.codePointAtPos(this.state.pos);
              if (Me(i))
                this.state.pos += i <= 65535 ? 1 : 2;
              else if (i === 92) {
                this.state.containsEsc = true, e += this.input.slice(r, this.state.pos);
                let a = this.state.curPosition(), n = this.state.pos === s ? de : Me;
                if (this.input.charCodeAt(++this.state.pos) !== 117) {
                  this.raise(u.MissingUnicodeEscape, { at: this.state.curPosition() }), r = this.state.pos - 1;
                  continue;
                }
                ++this.state.pos;
                let o = this.readCodePoint(true);
                o !== null && (n(o) || this.raise(u.EscapedCharNotAnIdentifier, { at: a }), e += String.fromCodePoint(o)), r = this.state.pos;
              } else
                break;
            }
            return e + this.input.slice(r, this.state.pos);
          }
          readWord(t) {
            let e = this.readWord1(t), s = jt.get(e);
            s !== void 0 ? this.finishToken(s, Te(s)) : this.finishToken(128, e);
          }
          checkKeywordEscapes() {
            let { type: t } = this.state;
            Vt(t) && this.state.containsEsc && this.raise(u.InvalidEscapedReservedWord, { at: this.state.startLoc, reservedWord: Te(t) });
          }
          raise(t, e) {
            let { at: s } = e, r = l(e, ih), i = s instanceof p ? s : s.loc.start, a = t({ loc: i, details: r });
            if (!this.options.errorRecovery)
              throw a;
            return this.isLookahead || this.state.errors.push(a), a;
          }
          raiseOverwrite(t, e) {
            let { at: s } = e, r = l(e, ah), i = s instanceof p ? s : s.loc.start, a = i.index, n = this.state.errors;
            for (let o = n.length - 1; o >= 0; o--) {
              let c = n[o];
              if (c.loc.index === a)
                return n[o] = t({ loc: i, details: r });
              if (c.loc.index < a)
                break;
            }
            return this.raise(t, e);
          }
          updateContext(t) {
          }
          unexpected(t, e) {
            throw this.raise(u.UnexpectedToken, { expected: e ? Te(e) : null, at: t != null ? t : this.state.startLoc });
          }
          expectPlugin(t, e) {
            if (this.hasPlugin(t))
              return true;
            throw this.raise(u.MissingPlugin, { at: e != null ? e : this.state.startLoc, missingPlugin: [t] });
          }
          expectOnePlugin(t) {
            if (!t.some((e) => this.hasPlugin(e)))
              throw this.raise(u.MissingOneOfPlugins, { at: this.state.startLoc, missingPlugin: t });
          }
        }, ns = class {
          constructor(t) {
            this.var = /* @__PURE__ */ new Set(), this.lexical = /* @__PURE__ */ new Set(), this.functions = /* @__PURE__ */ new Set(), this.flags = t;
          }
        }, os = class {
          constructor(t, e) {
            this.parser = void 0, this.scopeStack = [], this.inModule = void 0, this.undefinedExports = /* @__PURE__ */ new Map(), this.parser = t, this.inModule = e;
          }
          get inFunction() {
            return (this.currentVarScopeFlags() & me) > 0;
          }
          get allowSuper() {
            return (this.currentThisScopeFlags() & ot) > 0;
          }
          get allowDirectSuper() {
            return (this.currentThisScopeFlags() & gr) > 0;
          }
          get inClass() {
            return (this.currentThisScopeFlags() & we) > 0;
          }
          get inClassAndNotInNonArrowFunction() {
            let t = this.currentThisScopeFlags();
            return (t & we) > 0 && (t & me) === 0;
          }
          get inStaticBlock() {
            for (let t = this.scopeStack.length - 1; ; t--) {
              let { flags: e } = this.scopeStack[t];
              if (e & Jt)
                return true;
              if (e & (lt | we))
                return false;
            }
          }
          get inNonArrowFunction() {
            return (this.currentThisScopeFlags() & me) > 0;
          }
          get treatFunctionsAsVar() {
            return this.treatFunctionsAsVarInScope(this.currentScope());
          }
          createScope(t) {
            return new ns(t);
          }
          enter(t) {
            this.scopeStack.push(this.createScope(t));
          }
          exit() {
            this.scopeStack.pop();
          }
          treatFunctionsAsVarInScope(t) {
            return !!(t.flags & (me | Jt) || !this.parser.inModule && t.flags & He);
          }
          declareName(t, e, s) {
            let r = this.currentScope();
            if (e & Ee || e & ut)
              this.checkRedeclarationInScope(r, t, e, s), e & ut ? r.functions.add(t) : r.lexical.add(t), e & Ee && this.maybeExportDefined(r, t);
            else if (e & Ar)
              for (let i = this.scopeStack.length - 1; i >= 0 && (r = this.scopeStack[i], this.checkRedeclarationInScope(r, t, e, s), r.var.add(t), this.maybeExportDefined(r, t), !(r.flags & lt)); --i)
                ;
            this.parser.inModule && r.flags & He && this.undefinedExports.delete(t);
          }
          maybeExportDefined(t, e) {
            this.parser.inModule && t.flags & He && this.undefinedExports.delete(e);
          }
          checkRedeclarationInScope(t, e, s, r) {
            this.isRedeclaredInScope(t, e, s) && this.parser.raise(u.VarRedeclaration, { at: r, identifierName: e });
          }
          isRedeclaredInScope(t, e, s) {
            return s & ye ? s & Ee ? t.lexical.has(e) || t.functions.has(e) || t.var.has(e) : s & ut ? t.lexical.has(e) || !this.treatFunctionsAsVarInScope(t) && t.var.has(e) : t.lexical.has(e) && !(t.flags & xr && t.lexical.values().next().value === e) || !this.treatFunctionsAsVarInScope(t) && t.functions.has(e) : false;
          }
          checkLocalExport(t) {
            let { name: e } = t, s = this.scopeStack[0];
            !s.lexical.has(e) && !s.var.has(e) && !s.functions.has(e) && this.undefinedExports.set(e, t.loc.start);
          }
          currentScope() {
            return this.scopeStack[this.scopeStack.length - 1];
          }
          currentVarScopeFlags() {
            for (let t = this.scopeStack.length - 1; ; t--) {
              let { flags: e } = this.scopeStack[t];
              if (e & lt)
                return e;
            }
          }
          currentThisScopeFlags() {
            for (let t = this.scopeStack.length - 1; ; t--) {
              let { flags: e } = this.scopeStack[t];
              if (e & (lt | we) && !(e & Xt))
                return e;
            }
          }
        }, lh = class extends ns {
          constructor() {
            super(...arguments);
            this.declareFunctions = /* @__PURE__ */ new Set();
          }
        }, uh = class extends os {
          createScope(t) {
            return new lh(t);
          }
          declareName(t, e, s) {
            let r = this.currentScope();
            if (e & Zt) {
              this.checkRedeclarationInScope(r, t, e, s), this.maybeExportDefined(r, t), r.declareFunctions.add(t);
              return;
            }
            super.declareName(...arguments);
          }
          isRedeclaredInScope(t, e, s) {
            return super.isRedeclaredInScope(...arguments) ? true : s & Zt ? !t.declareFunctions.has(e) && (t.lexical.has(e) || t.functions.has(e)) : false;
          }
          checkLocalExport(t) {
            this.scopeStack[0].declareFunctions.has(t.name) || super.checkLocalExport(t);
          }
        }, ch = class {
          constructor() {
            this.privateNames = /* @__PURE__ */ new Set(), this.loneAccessors = /* @__PURE__ */ new Map(), this.undefinedPrivateNames = /* @__PURE__ */ new Map();
          }
        }, ph = class {
          constructor(t) {
            this.parser = void 0, this.stack = [], this.undefinedPrivateNames = /* @__PURE__ */ new Map(), this.parser = t;
          }
          current() {
            return this.stack[this.stack.length - 1];
          }
          enter() {
            this.stack.push(new ch());
          }
          exit() {
            let t = this.stack.pop(), e = this.current();
            for (let [s, r] of Array.from(t.undefinedPrivateNames))
              e ? e.undefinedPrivateNames.has(s) || e.undefinedPrivateNames.set(s, r) : this.parser.raise(u.InvalidPrivateFieldResolution, { at: r, identifierName: s });
          }
          declarePrivateName(t, e, s) {
            let { privateNames: r, loneAccessors: i, undefinedPrivateNames: a } = this.current(), n = r.has(t);
            if (e & ss) {
              let o = n && i.get(t);
              if (o) {
                let c = o & ft, f = e & ft, y = o & ss, C = e & ss;
                n = y === C || c !== f, n || i.delete(t);
              } else
                n || i.set(t, e);
            }
            n && this.parser.raise(u.PrivateNameRedeclaration, { at: s, identifierName: t }), r.add(t), a.delete(t);
          }
          usePrivateName(t, e) {
            let s;
            for (s of this.stack)
              if (s.privateNames.has(t))
                return;
            s ? s.undefinedPrivateNames.set(t, e) : this.parser.raise(u.InvalidPrivateFieldResolution, { at: e, identifierName: t });
          }
        }, fh = 0, Ir = 1, hs = 2, kr = 3, mt = class {
          constructor() {
            let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : fh;
            this.type = void 0, this.type = t;
          }
          canBeArrowParameterDeclaration() {
            return this.type === hs || this.type === Ir;
          }
          isCertainlyParameterDeclaration() {
            return this.type === kr;
          }
        }, Dr = class extends mt {
          constructor(t) {
            super(t);
            this.declarationErrors = /* @__PURE__ */ new Map();
          }
          recordDeclarationError(t, e) {
            let { at: s } = e, r = s.index;
            this.declarationErrors.set(r, [t, s]);
          }
          clearDeclarationError(t) {
            this.declarationErrors.delete(t);
          }
          iterateErrors(t) {
            this.declarationErrors.forEach(t);
          }
        }, dh = class {
          constructor(t) {
            this.parser = void 0, this.stack = [new mt()], this.parser = t;
          }
          enter(t) {
            this.stack.push(t);
          }
          exit() {
            this.stack.pop();
          }
          recordParameterInitializerError(t, e) {
            let { at: s } = e, r = { at: s.loc.start }, { stack: i } = this, a = i.length - 1, n = i[a];
            for (; !n.isCertainlyParameterDeclaration(); ) {
              if (n.canBeArrowParameterDeclaration())
                n.recordDeclarationError(t, r);
              else
                return;
              n = i[--a];
            }
            this.parser.raise(t, r);
          }
          recordParenthesizedIdentifierError(t) {
            let { at: e } = t, { stack: s } = this, r = s[s.length - 1], i = { at: e.loc.start };
            if (r.isCertainlyParameterDeclaration())
              this.parser.raise(u.InvalidParenthesizedAssignment, i);
            else if (r.canBeArrowParameterDeclaration())
              r.recordDeclarationError(u.InvalidParenthesizedAssignment, i);
            else
              return;
          }
          recordAsyncArrowParametersError(t) {
            let { at: e } = t, { stack: s } = this, r = s.length - 1, i = s[r];
            for (; i.canBeArrowParameterDeclaration(); )
              i.type === hs && i.recordDeclarationError(u.AwaitBindingIdentifier, { at: e }), i = s[--r];
          }
          validateAsPattern() {
            let { stack: t } = this, e = t[t.length - 1];
            !e.canBeArrowParameterDeclaration() || e.iterateErrors((s) => {
              let [r, i] = s;
              this.parser.raise(r, { at: i });
              let a = t.length - 2, n = t[a];
              for (; n.canBeArrowParameterDeclaration(); )
                n.clearDeclarationError(i.index), n = t[--a];
            });
          }
        };
        function mh() {
          return new mt(kr);
        }
        function yh() {
          return new Dr(Ir);
        }
        function xh() {
          return new Dr(hs);
        }
        function Fr() {
          return new mt();
        }
        var qe = 0, Lr = 1, yt = 2, Or = 4, Ue = 8, gh = class {
          constructor() {
            this.stacks = [];
          }
          enter(t) {
            this.stacks.push(t);
          }
          exit() {
            this.stacks.pop();
          }
          currentFlags() {
            return this.stacks[this.stacks.length - 1];
          }
          get hasAwait() {
            return (this.currentFlags() & yt) > 0;
          }
          get hasYield() {
            return (this.currentFlags() & Lr) > 0;
          }
          get hasReturn() {
            return (this.currentFlags() & Or) > 0;
          }
          get hasIn() {
            return (this.currentFlags() & Ue) > 0;
          }
        };
        function xt(t, e) {
          return (t ? yt : 0) | (e ? Lr : 0);
        }
        var Ah = class extends hh {
          addExtra(t, e, s) {
            let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
            if (!t)
              return;
            let i = t.extra = t.extra || {};
            r ? i[e] = s : Object.defineProperty(i, e, { enumerable: r, value: s });
          }
          isContextual(t) {
            return this.state.type === t && !this.state.containsEsc;
          }
          isUnparsedContextual(t, e) {
            let s = t + e.length;
            if (this.input.slice(t, s) === e) {
              let r = this.input.charCodeAt(s);
              return !(Me(r) || (r & 64512) === 55296);
            }
            return false;
          }
          isLookaheadContextual(t) {
            let e = this.nextTokenStart();
            return this.isUnparsedContextual(e, t);
          }
          eatContextual(t) {
            return this.isContextual(t) ? (this.next(), true) : false;
          }
          expectContextual(t, e) {
            if (!this.eatContextual(t))
              throw e != null ? this.raise(e, { at: this.state.startLoc }) : this.unexpected(null, t);
          }
          canInsertSemicolon() {
            return this.match(135) || this.match(8) || this.hasPrecedingLineBreak();
          }
          hasPrecedingLineBreak() {
            return is.test(this.input.slice(this.state.lastTokEndLoc.index, this.state.start));
          }
          hasFollowingLineBreak() {
            return Sr.lastIndex = this.state.end, Sr.test(this.input);
          }
          isLineTerminator() {
            return this.eat(13) || this.canInsertSemicolon();
          }
          semicolon() {
            ((arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true) ? this.isLineTerminator() : this.eat(13)) || this.raise(u.MissingSemicolon, { at: this.state.lastTokEndLoc });
          }
          expect(t, e) {
            this.eat(t) || this.unexpected(e, t);
          }
          tryParse(t) {
            let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.state.clone(), s = { node: null };
            try {
              let r = t(function() {
                let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
                throw s.node = i, s;
              });
              if (this.state.errors.length > e.errors.length) {
                let i = this.state;
                return this.state = e, this.state.tokensLength = i.tokensLength, { node: r, error: i.errors[e.errors.length], thrown: false, aborted: false, failState: i };
              }
              return { node: r, error: null, thrown: false, aborted: false, failState: null };
            } catch (r) {
              let i = this.state;
              if (this.state = e, r instanceof SyntaxError)
                return { node: null, error: r, thrown: true, aborted: false, failState: i };
              if (r === s)
                return { node: s.node, error: null, thrown: false, aborted: true, failState: i };
              throw r;
            }
          }
          checkExpressionErrors(t, e) {
            if (!t)
              return false;
            let { shorthandAssignLoc: s, doubleProtoLoc: r, privateKeyLoc: i, optionalParametersLoc: a } = t, n = !!s || !!r || !!a || !!i;
            if (!e)
              return n;
            s != null && this.raise(u.InvalidCoverInitializedName, { at: s }), r != null && this.raise(u.DuplicateProto, { at: r }), i != null && this.raise(u.UnexpectedPrivateField, { at: i }), a != null && this.unexpected(a);
          }
          isLiteralPropertyName() {
            return hr(this.state.type);
          }
          isPrivateName(t) {
            return t.type === "PrivateName";
          }
          getPrivateNameSV(t) {
            return t.id.name;
          }
          hasPropertyAsPrivateName(t) {
            return (t.type === "MemberExpression" || t.type === "OptionalMemberExpression") && this.isPrivateName(t.property);
          }
          isOptionalChain(t) {
            return t.type === "OptionalMemberExpression" || t.type === "OptionalCallExpression";
          }
          isObjectProperty(t) {
            return t.type === "ObjectProperty";
          }
          isObjectMethod(t) {
            return t.type === "ObjectMethod";
          }
          initializeScopes() {
            let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.sourceType === "module", e = this.state.labels;
            this.state.labels = [];
            let s = this.exportedIdentifiers;
            this.exportedIdentifiers = /* @__PURE__ */ new Set();
            let r = this.inModule;
            this.inModule = t;
            let i = this.scope, a = this.getScopeHandler();
            this.scope = new a(this, t);
            let n = this.prodParam;
            this.prodParam = new gh();
            let o = this.classScope;
            this.classScope = new ph(this);
            let c = this.expressionScope;
            return this.expressionScope = new dh(this), () => {
              this.state.labels = e, this.exportedIdentifiers = s, this.inModule = r, this.scope = i, this.prodParam = n, this.classScope = o, this.expressionScope = c;
            };
          }
          enterInitialScopes() {
            let t = qe;
            this.inModule && (t |= yt), this.scope.enter(He), this.prodParam.enter(t);
          }
          checkDestructuringPrivate(t) {
            let { privateKeyLoc: e } = t;
            e !== null && this.expectPlugin("destructuringPrivate", e);
          }
        }, gt = class {
          constructor() {
            this.shorthandAssignLoc = null, this.doubleProtoLoc = null, this.privateKeyLoc = null, this.optionalParametersLoc = null;
          }
        }, At = class {
          constructor(t, e, s) {
            this.type = "", this.start = e, this.end = 0, this.loc = new d(s), t != null && t.options.ranges && (this.range = [e, 0]), t != null && t.filename && (this.loc.filename = t.filename);
          }
        }, ls = At.prototype;
        ls.__clone = function() {
          let t = new At(), e = Object.keys(this);
          for (let s = 0, r = e.length; s < r; s++) {
            let i = e[s];
            i !== "leadingComments" && i !== "trailingComments" && i !== "innerComments" && (t[i] = this[i]);
          }
          return t;
        };
        function Ph(t) {
          return ge(t);
        }
        function ge(t) {
          let { type: e, start: s, end: r, loc: i, range: a, extra: n, name: o } = t, c = Object.create(ls);
          return c.type = e, c.start = s, c.end = r, c.loc = i, c.range = a, c.extra = n, c.name = o, e === "Placeholder" && (c.expectedNode = t.expectedNode), c;
        }
        function Th(t) {
          let { type: e, start: s, end: r, loc: i, range: a, extra: n } = t;
          if (e === "Placeholder")
            return Ph(t);
          let o = Object.create(ls);
          return o.type = e, o.start = s, o.end = r, o.loc = i, o.range = a, t.raw !== void 0 ? o.raw = t.raw : o.extra = n, o.value = t.value, o;
        }
        var Eh = class extends Ah {
          startNode() {
            return new At(this, this.state.start, this.state.startLoc);
          }
          startNodeAt(t, e) {
            return new At(this, t, e);
          }
          startNodeAtNode(t) {
            return this.startNodeAt(t.start, t.loc.start);
          }
          finishNode(t, e) {
            return this.finishNodeAt(t, e, this.state.lastTokEndLoc);
          }
          finishNodeAt(t, e, s) {
            return t.type = e, t.end = s.index, t.loc.end = s, this.options.ranges && (t.range[1] = s.index), this.options.attachComment && this.processComment(t), t;
          }
          resetStartLocation(t, e, s) {
            t.start = e, t.loc.start = s, this.options.ranges && (t.range[0] = e);
          }
          resetEndLocation(t) {
            let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.state.lastTokEndLoc;
            t.end = e.index, t.loc.end = e, this.options.ranges && (t.range[1] = e.index);
          }
          resetStartLocationFromNode(t, e) {
            this.resetStartLocation(t, e.start, e.loc.start);
          }
        }, bh = /* @__PURE__ */ new Set(["_", "any", "bool", "boolean", "empty", "extends", "false", "interface", "mixed", "null", "number", "static", "string", "true", "typeof", "void"]), F = G(zn || (zn = st(["flow"])))((t) => ({ AmbiguousConditionalArrow: t("Ambiguous expression: wrap the arrow functions in parentheses to disambiguate."), AmbiguousDeclareModuleKind: t("Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module."), AssignReservedType: t((e) => {
          let { reservedType: s } = e;
          return "Cannot overwrite reserved type ".concat(s, ".");
        }), DeclareClassElement: t("The `declare` modifier can only appear on class fields."), DeclareClassFieldInitializer: t("Initializers are not allowed in fields with the `declare` modifier."), DuplicateDeclareModuleExports: t("Duplicate `declare module.exports` statement."), EnumBooleanMemberNotInitialized: t((e) => {
          let { memberName: s, enumName: r } = e;
          return "Boolean enum members need to be initialized. Use either `".concat(s, " = true,` or `").concat(s, " = false,` in enum `").concat(r, "`.");
        }), EnumDuplicateMemberName: t((e) => {
          let { memberName: s, enumName: r } = e;
          return "Enum member names need to be unique, but the name `".concat(s, "` has already been used before in enum `").concat(r, "`.");
        }), EnumInconsistentMemberValues: t((e) => {
          let { enumName: s } = e;
          return "Enum `".concat(s, "` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.");
        }), EnumInvalidExplicitType: t((e) => {
          let { invalidEnumType: s, enumName: r } = e;
          return "Enum type `".concat(s, "` is not valid. Use one of `boolean`, `number`, `string`, or `symbol` in enum `").concat(r, "`.");
        }), EnumInvalidExplicitTypeUnknownSupplied: t((e) => {
          let { enumName: s } = e;
          return "Supplied enum type is not valid. Use one of `boolean`, `number`, `string`, or `symbol` in enum `".concat(s, "`.");
        }), EnumInvalidMemberInitializerPrimaryType: t((e) => {
          let { enumName: s, memberName: r, explicitType: i } = e;
          return "Enum `".concat(s, "` has type `").concat(i, "`, so the initializer of `").concat(r, "` needs to be a ").concat(i, " literal.");
        }), EnumInvalidMemberInitializerSymbolType: t((e) => {
          let { enumName: s, memberName: r } = e;
          return "Symbol enum members cannot be initialized. Use `".concat(r, ",` in enum `").concat(s, "`.");
        }), EnumInvalidMemberInitializerUnknownType: t((e) => {
          let { enumName: s, memberName: r } = e;
          return "The enum member initializer for `".concat(r, "` needs to be a literal (either a boolean, number, or string) in enum `").concat(s, "`.");
        }), EnumInvalidMemberName: t((e) => {
          let { enumName: s, memberName: r, suggestion: i } = e;
          return "Enum member names cannot start with lowercase 'a' through 'z'. Instead of using `".concat(r, "`, consider using `").concat(i, "`, in enum `").concat(s, "`.");
        }), EnumNumberMemberNotInitialized: t((e) => {
          let { enumName: s, memberName: r } = e;
          return "Number enum members need to be initialized, e.g. `".concat(r, " = 1` in enum `").concat(s, "`.");
        }), EnumStringMemberInconsistentlyInitailized: t((e) => {
          let { enumName: s } = e;
          return "String enum members need to consistently either all use initializers, or use no initializers, in enum `".concat(s, "`.");
        }), GetterMayNotHaveThisParam: t("A getter cannot have a `this` parameter."), ImportTypeShorthandOnlyInPureImport: t("The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements."), InexactInsideExact: t("Explicit inexact syntax cannot appear inside an explicit exact object type."), InexactInsideNonObject: t("Explicit inexact syntax cannot appear in class or interface definitions."), InexactVariance: t("Explicit inexact syntax cannot have variance."), InvalidNonTypeImportInDeclareModule: t("Imports within a `declare module` body must always be `import type` or `import typeof`."), MissingTypeParamDefault: t("Type parameter declaration needs a default, since a preceding type parameter declaration has a default."), NestedDeclareModule: t("`declare module` cannot be used inside another `declare module`."), NestedFlowComment: t("Cannot have a flow comment inside another flow comment."), PatternIsOptional: t("A binding pattern parameter cannot be optional in an implementation signature.", { reasonCode: "OptionalBindingPattern" }), SetterMayNotHaveThisParam: t("A setter cannot have a `this` parameter."), SpreadVariance: t("Spread properties cannot have variance."), ThisParamAnnotationRequired: t("A type annotation is required for the `this` parameter."), ThisParamBannedInConstructor: t("Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions."), ThisParamMayNotBeOptional: t("The `this` parameter cannot be optional."), ThisParamMustBeFirst: t("The `this` parameter must be the first function parameter."), ThisParamNoDefault: t("The `this` parameter may not have a default value."), TypeBeforeInitializer: t("Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`."), TypeCastInPattern: t("The type cast expression is expected to be wrapped with parenthesis."), UnexpectedExplicitInexactInObject: t("Explicit inexact syntax must appear at the end of an inexact object."), UnexpectedReservedType: t((e) => {
          let { reservedType: s } = e;
          return "Unexpected reserved type ".concat(s, ".");
        }), UnexpectedReservedUnderscore: t("`_` is only allowed as a type argument to call or new."), UnexpectedSpaceBetweenModuloChecks: t("Spaces between `%` and `checks` are not allowed here."), UnexpectedSpreadType: t("Spread operator cannot appear in class or interface definitions."), UnexpectedSubtractionOperand: t('Unexpected token, expected "number" or "bigint".'), UnexpectedTokenAfterTypeParameter: t("Expected an arrow function after this type parameter declaration."), UnexpectedTypeParameterBeforeAsyncArrowFunction: t("Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`."), UnsupportedDeclareExportKind: t((e) => {
          let { unsupportedExportKind: s, suggestion: r } = e;
          return "`declare export ".concat(s, "` is not supported. Use `").concat(r, "` instead.");
        }), UnsupportedStatementInDeclareModule: t("Only declares and type imports are allowed inside declare module."), UnterminatedFlowComment: t("Unterminated flow-comment.") }));
        function vh(t) {
          return t.type === "DeclareExportAllDeclaration" || t.type === "DeclareExportDeclaration" && (!t.declaration || t.declaration.type !== "TypeAlias" && t.declaration.type !== "InterfaceDeclaration");
        }
        function us(t) {
          return t.importKind === "type" || t.importKind === "typeof";
        }
        function Br(t) {
          return pe(t) && t !== 97;
        }
        var Ch = { const: "declare export var", let: "declare export var", type: "export type", interface: "export interface" };
        function Sh(t, e) {
          let s = [], r = [];
          for (let i = 0; i < t.length; i++)
            (e(t[i], i, t) ? s : r).push(t[i]);
          return [s, r];
        }
        var wh = /\*?\s*@((?:no)?flow)\b/, Nh = (t) => class extends t {
          constructor() {
            super(...arguments);
            this.flowPragma = void 0;
          }
          getScopeHandler() {
            return uh;
          }
          shouldParseTypes() {
            return this.getPluginOption("flow", "all") || this.flowPragma === "flow";
          }
          shouldParseEnums() {
            return !!this.getPluginOption("flow", "enums");
          }
          finishToken(e, s) {
            return e !== 129 && e !== 13 && e !== 28 && this.flowPragma === void 0 && (this.flowPragma = null), super.finishToken(e, s);
          }
          addComment(e) {
            if (this.flowPragma === void 0) {
              let s = wh.exec(e.value);
              if (s)
                if (s[1] === "flow")
                  this.flowPragma = "flow";
                else if (s[1] === "noflow")
                  this.flowPragma = "noflow";
                else
                  throw new Error("Unexpected flow pragma");
            }
            return super.addComment(e);
          }
          flowParseTypeInitialiser(e) {
            let s = this.state.inType;
            this.state.inType = true, this.expect(e || 14);
            let r = this.flowParseType();
            return this.state.inType = s, r;
          }
          flowParsePredicate() {
            let e = this.startNode(), s = this.state.startLoc;
            return this.next(), this.expectContextual(107), this.state.lastTokStart > s.index + 1 && this.raise(F.UnexpectedSpaceBetweenModuloChecks, { at: s }), this.eat(10) ? (e.value = this.parseExpression(), this.expect(11), this.finishNode(e, "DeclaredPredicate")) : this.finishNode(e, "InferredPredicate");
          }
          flowParseTypeAndPredicateInitialiser() {
            let e = this.state.inType;
            this.state.inType = true, this.expect(14);
            let s = null, r = null;
            return this.match(54) ? (this.state.inType = e, r = this.flowParsePredicate()) : (s = this.flowParseType(), this.state.inType = e, this.match(54) && (r = this.flowParsePredicate())), [s, r];
          }
          flowParseDeclareClass(e) {
            return this.next(), this.flowParseInterfaceish(e, true), this.finishNode(e, "DeclareClass");
          }
          flowParseDeclareFunction(e) {
            this.next();
            let s = e.id = this.parseIdentifier(), r = this.startNode(), i = this.startNode();
            this.match(47) ? r.typeParameters = this.flowParseTypeParameterDeclaration() : r.typeParameters = null, this.expect(10);
            let a = this.flowParseFunctionTypeParams();
            return r.params = a.params, r.rest = a.rest, r.this = a._this, this.expect(11), [r.returnType, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), i.typeAnnotation = this.finishNode(r, "FunctionTypeAnnotation"), s.typeAnnotation = this.finishNode(i, "TypeAnnotation"), this.resetEndLocation(s), this.semicolon(), this.scope.declareName(e.id.name, Xo, e.id.loc.start), this.finishNode(e, "DeclareFunction");
          }
          flowParseDeclare(e, s) {
            if (this.match(80))
              return this.flowParseDeclareClass(e);
            if (this.match(68))
              return this.flowParseDeclareFunction(e);
            if (this.match(74))
              return this.flowParseDeclareVariable(e);
            if (this.eatContextual(123))
              return this.match(16) ? this.flowParseDeclareModuleExports(e) : (s && this.raise(F.NestedDeclareModule, { at: this.state.lastTokStartLoc }), this.flowParseDeclareModule(e));
            if (this.isContextual(126))
              return this.flowParseDeclareTypeAlias(e);
            if (this.isContextual(127))
              return this.flowParseDeclareOpaqueType(e);
            if (this.isContextual(125))
              return this.flowParseDeclareInterface(e);
            if (this.match(82))
              return this.flowParseDeclareExportDeclaration(e, s);
            throw this.unexpected();
          }
          flowParseDeclareVariable(e) {
            return this.next(), e.id = this.flowParseTypeAnnotatableIdentifier(true), this.scope.declareName(e.id.name, pt, e.id.loc.start), this.semicolon(), this.finishNode(e, "DeclareVariable");
          }
          flowParseDeclareModule(e) {
            this.scope.enter(Re), this.match(129) ? e.id = this.parseExprAtom() : e.id = this.parseIdentifier();
            let s = e.body = this.startNode(), r = s.body = [];
            for (this.expect(5); !this.match(8); ) {
              let n = this.startNode();
              this.match(83) ? (this.next(), !this.isContextual(126) && !this.match(87) && this.raise(F.InvalidNonTypeImportInDeclareModule, { at: this.state.lastTokStartLoc }), this.parseImport(n)) : (this.expectContextual(121, F.UnsupportedStatementInDeclareModule), n = this.flowParseDeclare(n, true)), r.push(n);
            }
            this.scope.exit(), this.expect(8), this.finishNode(s, "BlockStatement");
            let i = null, a = false;
            return r.forEach((n) => {
              vh(n) ? (i === "CommonJS" && this.raise(F.AmbiguousDeclareModuleKind, { at: n }), i = "ES") : n.type === "DeclareModuleExports" && (a && this.raise(F.DuplicateDeclareModuleExports, { at: n }), i === "ES" && this.raise(F.AmbiguousDeclareModuleKind, { at: n }), i = "CommonJS", a = true);
            }), e.kind = i || "CommonJS", this.finishNode(e, "DeclareModule");
          }
          flowParseDeclareExportDeclaration(e, s) {
            if (this.expect(82), this.eat(65))
              return this.match(68) || this.match(80) ? e.declaration = this.flowParseDeclare(this.startNode()) : (e.declaration = this.flowParseType(), this.semicolon()), e.default = true, this.finishNode(e, "DeclareExportDeclaration");
            if (this.match(75) || this.isLet() || (this.isContextual(126) || this.isContextual(125)) && !s) {
              let r = this.state.value;
              throw this.raise(F.UnsupportedDeclareExportKind, { at: this.state.startLoc, unsupportedExportKind: r, suggestion: Ch[r] });
            }
            if (this.match(74) || this.match(68) || this.match(80) || this.isContextual(127))
              return e.declaration = this.flowParseDeclare(this.startNode()), e.default = false, this.finishNode(e, "DeclareExportDeclaration");
            if (this.match(55) || this.match(5) || this.isContextual(125) || this.isContextual(126) || this.isContextual(127))
              return e = this.parseExport(e), e.type === "ExportNamedDeclaration" && (e.type = "ExportDeclaration", e.default = false, delete e.exportKind), e.type = "Declare" + e.type, e;
            throw this.unexpected();
          }
          flowParseDeclareModuleExports(e) {
            return this.next(), this.expectContextual(108), e.typeAnnotation = this.flowParseTypeAnnotation(), this.semicolon(), this.finishNode(e, "DeclareModuleExports");
          }
          flowParseDeclareTypeAlias(e) {
            return this.next(), this.flowParseTypeAlias(e), e.type = "DeclareTypeAlias", e;
          }
          flowParseDeclareOpaqueType(e) {
            return this.next(), this.flowParseOpaqueType(e, true), e.type = "DeclareOpaqueType", e;
          }
          flowParseDeclareInterface(e) {
            return this.next(), this.flowParseInterfaceish(e), this.finishNode(e, "DeclareInterface");
          }
          flowParseInterfaceish(e) {
            let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            if (e.id = this.flowParseRestrictedIdentifier(!s, true), this.scope.declareName(e.id.name, s ? Er : xe, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.extends = [], e.implements = [], e.mixins = [], this.eat(81))
              do
                e.extends.push(this.flowParseInterfaceExtends());
              while (!s && this.eat(12));
            if (this.isContextual(114)) {
              this.next();
              do
                e.mixins.push(this.flowParseInterfaceExtends());
              while (this.eat(12));
            }
            if (this.isContextual(110)) {
              this.next();
              do
                e.implements.push(this.flowParseInterfaceExtends());
              while (this.eat(12));
            }
            e.body = this.flowParseObjectType({ allowStatic: s, allowExact: false, allowSpread: false, allowProto: s, allowInexact: false });
          }
          flowParseInterfaceExtends() {
            let e = this.startNode();
            return e.id = this.flowParseQualifiedTypeIdentifier(), this.match(47) ? e.typeParameters = this.flowParseTypeParameterInstantiation() : e.typeParameters = null, this.finishNode(e, "InterfaceExtends");
          }
          flowParseInterface(e) {
            return this.flowParseInterfaceish(e), this.finishNode(e, "InterfaceDeclaration");
          }
          checkNotUnderscore(e) {
            e === "_" && this.raise(F.UnexpectedReservedUnderscore, { at: this.state.startLoc });
          }
          checkReservedType(e, s, r) {
            !bh.has(e) || this.raise(r ? F.AssignReservedType : F.UnexpectedReservedType, { at: s, reservedType: e });
          }
          flowParseRestrictedIdentifier(e, s) {
            return this.checkReservedType(this.state.value, this.state.startLoc, s), this.parseIdentifier(e);
          }
          flowParseTypeAlias(e) {
            return e.id = this.flowParseRestrictedIdentifier(false, true), this.scope.declareName(e.id.name, xe, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.right = this.flowParseTypeInitialiser(29), this.semicolon(), this.finishNode(e, "TypeAlias");
          }
          flowParseOpaqueType(e, s) {
            return this.expectContextual(126), e.id = this.flowParseRestrictedIdentifier(true, true), this.scope.declareName(e.id.name, xe, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.supertype = null, this.match(14) && (e.supertype = this.flowParseTypeInitialiser(14)), e.impltype = null, s || (e.impltype = this.flowParseTypeInitialiser(29)), this.semicolon(), this.finishNode(e, "OpaqueType");
          }
          flowParseTypeParameter() {
            let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, s = this.state.startLoc, r = this.startNode(), i = this.flowParseVariance(), a = this.flowParseTypeAnnotatableIdentifier();
            return r.name = a.name, r.variance = i, r.bound = a.typeAnnotation, this.match(29) ? (this.eat(29), r.default = this.flowParseType()) : e && this.raise(F.MissingTypeParamDefault, { at: s }), this.finishNode(r, "TypeParameter");
          }
          flowParseTypeParameterDeclaration() {
            let e = this.state.inType, s = this.startNode();
            s.params = [], this.state.inType = true, this.match(47) || this.match(138) ? this.next() : this.unexpected();
            let r = false;
            do {
              let i = this.flowParseTypeParameter(r);
              s.params.push(i), i.default && (r = true), this.match(48) || this.expect(12);
            } while (!this.match(48));
            return this.expect(48), this.state.inType = e, this.finishNode(s, "TypeParameterDeclaration");
          }
          flowParseTypeParameterInstantiation() {
            let e = this.startNode(), s = this.state.inType;
            e.params = [], this.state.inType = true, this.expect(47);
            let r = this.state.noAnonFunctionType;
            for (this.state.noAnonFunctionType = false; !this.match(48); )
              e.params.push(this.flowParseType()), this.match(48) || this.expect(12);
            return this.state.noAnonFunctionType = r, this.expect(48), this.state.inType = s, this.finishNode(e, "TypeParameterInstantiation");
          }
          flowParseTypeParameterInstantiationCallOrNew() {
            let e = this.startNode(), s = this.state.inType;
            for (e.params = [], this.state.inType = true, this.expect(47); !this.match(48); )
              e.params.push(this.flowParseTypeOrImplicitInstantiation()), this.match(48) || this.expect(12);
            return this.expect(48), this.state.inType = s, this.finishNode(e, "TypeParameterInstantiation");
          }
          flowParseInterfaceType() {
            let e = this.startNode();
            if (this.expectContextual(125), e.extends = [], this.eat(81))
              do
                e.extends.push(this.flowParseInterfaceExtends());
              while (this.eat(12));
            return e.body = this.flowParseObjectType({ allowStatic: false, allowExact: false, allowSpread: false, allowProto: false, allowInexact: false }), this.finishNode(e, "InterfaceTypeAnnotation");
          }
          flowParseObjectPropertyKey() {
            return this.match(130) || this.match(129) ? this.parseExprAtom() : this.parseIdentifier(true);
          }
          flowParseObjectTypeIndexer(e, s, r) {
            return e.static = s, this.lookahead().type === 14 ? (e.id = this.flowParseObjectPropertyKey(), e.key = this.flowParseTypeInitialiser()) : (e.id = null, e.key = this.flowParseType()), this.expect(3), e.value = this.flowParseTypeInitialiser(), e.variance = r, this.finishNode(e, "ObjectTypeIndexer");
          }
          flowParseObjectTypeInternalSlot(e, s) {
            return e.static = s, e.id = this.flowParseObjectPropertyKey(), this.expect(3), this.expect(3), this.match(47) || this.match(10) ? (e.method = true, e.optional = false, e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.start, e.loc.start))) : (e.method = false, this.eat(17) && (e.optional = true), e.value = this.flowParseTypeInitialiser()), this.finishNode(e, "ObjectTypeInternalSlot");
          }
          flowParseObjectTypeMethodish(e) {
            for (e.params = [], e.rest = null, e.typeParameters = null, e.this = null, this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration()), this.expect(10), this.match(78) && (e.this = this.flowParseFunctionTypeParam(true), e.this.name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21); )
              e.params.push(this.flowParseFunctionTypeParam(false)), this.match(11) || this.expect(12);
            return this.eat(21) && (e.rest = this.flowParseFunctionTypeParam(false)), this.expect(11), e.returnType = this.flowParseTypeInitialiser(), this.finishNode(e, "FunctionTypeAnnotation");
          }
          flowParseObjectTypeCallProperty(e, s) {
            let r = this.startNode();
            return e.static = s, e.value = this.flowParseObjectTypeMethodish(r), this.finishNode(e, "ObjectTypeCallProperty");
          }
          flowParseObjectType(e) {
            let { allowStatic: s, allowExact: r, allowSpread: i, allowProto: a, allowInexact: n } = e, o = this.state.inType;
            this.state.inType = true;
            let c = this.startNode();
            c.callProperties = [], c.properties = [], c.indexers = [], c.internalSlots = [];
            let f, y, C = false;
            for (r && this.match(6) ? (this.expect(6), f = 9, y = true) : (this.expect(5), f = 8, y = false), c.exact = y; !this.match(f); ) {
              let I = false, M = null, R = null, $ = this.startNode();
              if (a && this.isContextual(115)) {
                let oe = this.lookahead();
                oe.type !== 14 && oe.type !== 17 && (this.next(), M = this.state.startLoc, s = false);
              }
              if (s && this.isContextual(104)) {
                let oe = this.lookahead();
                oe.type !== 14 && oe.type !== 17 && (this.next(), I = true);
              }
              let te = this.flowParseVariance();
              if (this.eat(0))
                M != null && this.unexpected(M), this.eat(0) ? (te && this.unexpected(te.loc.start), c.internalSlots.push(this.flowParseObjectTypeInternalSlot($, I))) : c.indexers.push(this.flowParseObjectTypeIndexer($, I, te));
              else if (this.match(10) || this.match(47))
                M != null && this.unexpected(M), te && this.unexpected(te.loc.start), c.callProperties.push(this.flowParseObjectTypeCallProperty($, I));
              else {
                let oe = "init";
                if (this.isContextual(98) || this.isContextual(103)) {
                  let ue = this.lookahead();
                  hr(ue.type) && (oe = this.state.value, this.next());
                }
                let Ye = this.flowParseObjectTypeProperty($, I, M, te, oe, i, n != null ? n : !y);
                Ye === null ? (C = true, R = this.state.lastTokStartLoc) : c.properties.push(Ye);
              }
              this.flowObjectTypeSemicolon(), R && !this.match(8) && !this.match(9) && this.raise(F.UnexpectedExplicitInexactInObject, { at: R });
            }
            this.expect(f), i && (c.inexact = C);
            let S = this.finishNode(c, "ObjectTypeAnnotation");
            return this.state.inType = o, S;
          }
          flowParseObjectTypeProperty(e, s, r, i, a, n, o) {
            if (this.eat(21))
              return this.match(12) || this.match(13) || this.match(8) || this.match(9) ? (n ? o || this.raise(F.InexactInsideExact, { at: this.state.lastTokStartLoc }) : this.raise(F.InexactInsideNonObject, { at: this.state.lastTokStartLoc }), i && this.raise(F.InexactVariance, { at: i }), null) : (n || this.raise(F.UnexpectedSpreadType, { at: this.state.lastTokStartLoc }), r != null && this.unexpected(r), i && this.raise(F.SpreadVariance, { at: i }), e.argument = this.flowParseType(), this.finishNode(e, "ObjectTypeSpreadProperty"));
            {
              e.key = this.flowParseObjectPropertyKey(), e.static = s, e.proto = r != null, e.kind = a;
              let c = false;
              return this.match(47) || this.match(10) ? (e.method = true, r != null && this.unexpected(r), i && this.unexpected(i.loc.start), e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.start, e.loc.start)), (a === "get" || a === "set") && this.flowCheckGetterSetterParams(e), !n && e.key.name === "constructor" && e.value.this && this.raise(F.ThisParamBannedInConstructor, { at: e.value.this })) : (a !== "init" && this.unexpected(), e.method = false, this.eat(17) && (c = true), e.value = this.flowParseTypeInitialiser(), e.variance = i), e.optional = c, this.finishNode(e, "ObjectTypeProperty");
            }
          }
          flowCheckGetterSetterParams(e) {
            let s = e.kind === "get" ? 0 : 1, r = e.value.params.length + (e.value.rest ? 1 : 0);
            e.value.this && this.raise(e.kind === "get" ? F.GetterMayNotHaveThisParam : F.SetterMayNotHaveThisParam, { at: e.value.this }), r !== s && this.raise(e.kind === "get" ? u.BadGetterArity : u.BadSetterArity, { at: e }), e.kind === "set" && e.value.rest && this.raise(u.BadSetterRestParameter, { at: e });
          }
          flowObjectTypeSemicolon() {
            !this.eat(13) && !this.eat(12) && !this.match(8) && !this.match(9) && this.unexpected();
          }
          flowParseQualifiedTypeIdentifier(e, s, r) {
            e = e || this.state.start, s = s || this.state.startLoc;
            let i = r || this.flowParseRestrictedIdentifier(true);
            for (; this.eat(16); ) {
              let a = this.startNodeAt(e, s);
              a.qualification = i, a.id = this.flowParseRestrictedIdentifier(true), i = this.finishNode(a, "QualifiedTypeIdentifier");
            }
            return i;
          }
          flowParseGenericType(e, s, r) {
            let i = this.startNodeAt(e, s);
            return i.typeParameters = null, i.id = this.flowParseQualifiedTypeIdentifier(e, s, r), this.match(47) && (i.typeParameters = this.flowParseTypeParameterInstantiation()), this.finishNode(i, "GenericTypeAnnotation");
          }
          flowParseTypeofType() {
            let e = this.startNode();
            return this.expect(87), e.argument = this.flowParsePrimaryType(), this.finishNode(e, "TypeofTypeAnnotation");
          }
          flowParseTupleType() {
            let e = this.startNode();
            for (e.types = [], this.expect(0); this.state.pos < this.length && !this.match(3) && (e.types.push(this.flowParseType()), !this.match(3)); )
              this.expect(12);
            return this.expect(3), this.finishNode(e, "TupleTypeAnnotation");
          }
          flowParseFunctionTypeParam(e) {
            let s = null, r = false, i = null, a = this.startNode(), n = this.lookahead(), o = this.state.type === 78;
            return n.type === 14 || n.type === 17 ? (o && !e && this.raise(F.ThisParamMustBeFirst, { at: a }), s = this.parseIdentifier(o), this.eat(17) && (r = true, o && this.raise(F.ThisParamMayNotBeOptional, { at: a })), i = this.flowParseTypeInitialiser()) : i = this.flowParseType(), a.name = s, a.optional = r, a.typeAnnotation = i, this.finishNode(a, "FunctionTypeParam");
          }
          reinterpretTypeAsFunctionTypeParam(e) {
            let s = this.startNodeAt(e.start, e.loc.start);
            return s.name = null, s.optional = false, s.typeAnnotation = e, this.finishNode(s, "FunctionTypeParam");
          }
          flowParseFunctionTypeParams() {
            let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = null, r = null;
            for (this.match(78) && (r = this.flowParseFunctionTypeParam(true), r.name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21); )
              e.push(this.flowParseFunctionTypeParam(false)), this.match(11) || this.expect(12);
            return this.eat(21) && (s = this.flowParseFunctionTypeParam(false)), { params: e, rest: s, _this: r };
          }
          flowIdentToTypeAnnotation(e, s, r, i) {
            switch (i.name) {
              case "any":
                return this.finishNode(r, "AnyTypeAnnotation");
              case "bool":
              case "boolean":
                return this.finishNode(r, "BooleanTypeAnnotation");
              case "mixed":
                return this.finishNode(r, "MixedTypeAnnotation");
              case "empty":
                return this.finishNode(r, "EmptyTypeAnnotation");
              case "number":
                return this.finishNode(r, "NumberTypeAnnotation");
              case "string":
                return this.finishNode(r, "StringTypeAnnotation");
              case "symbol":
                return this.finishNode(r, "SymbolTypeAnnotation");
              default:
                return this.checkNotUnderscore(i.name), this.flowParseGenericType(e, s, i);
            }
          }
          flowParsePrimaryType() {
            let e = this.state.start, s = this.state.startLoc, r = this.startNode(), i, a, n = false, o = this.state.noAnonFunctionType;
            switch (this.state.type) {
              case 5:
                return this.flowParseObjectType({ allowStatic: false, allowExact: false, allowSpread: true, allowProto: false, allowInexact: true });
              case 6:
                return this.flowParseObjectType({ allowStatic: false, allowExact: true, allowSpread: true, allowProto: false, allowInexact: false });
              case 0:
                return this.state.noAnonFunctionType = false, a = this.flowParseTupleType(), this.state.noAnonFunctionType = o, a;
              case 47:
                return r.typeParameters = this.flowParseTypeParameterDeclaration(), this.expect(10), i = this.flowParseFunctionTypeParams(), r.params = i.params, r.rest = i.rest, r.this = i._this, this.expect(11), this.expect(19), r.returnType = this.flowParseType(), this.finishNode(r, "FunctionTypeAnnotation");
              case 10:
                if (this.next(), !this.match(11) && !this.match(21))
                  if (K(this.state.type) || this.match(78)) {
                    let c = this.lookahead().type;
                    n = c !== 17 && c !== 14;
                  } else
                    n = true;
                if (n) {
                  if (this.state.noAnonFunctionType = false, a = this.flowParseType(), this.state.noAnonFunctionType = o, this.state.noAnonFunctionType || !(this.match(12) || this.match(11) && this.lookahead().type === 19))
                    return this.expect(11), a;
                  this.eat(12);
                }
                return a ? i = this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(a)]) : i = this.flowParseFunctionTypeParams(), r.params = i.params, r.rest = i.rest, r.this = i._this, this.expect(11), this.expect(19), r.returnType = this.flowParseType(), r.typeParameters = null, this.finishNode(r, "FunctionTypeAnnotation");
              case 129:
                return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");
              case 85:
              case 86:
                return r.value = this.match(85), this.next(), this.finishNode(r, "BooleanLiteralTypeAnnotation");
              case 53:
                if (this.state.value === "-") {
                  if (this.next(), this.match(130))
                    return this.parseLiteralAtNode(-this.state.value, "NumberLiteralTypeAnnotation", r);
                  if (this.match(131))
                    return this.parseLiteralAtNode(-this.state.value, "BigIntLiteralTypeAnnotation", r);
                  throw this.raise(F.UnexpectedSubtractionOperand, { at: this.state.startLoc });
                }
                throw this.unexpected();
              case 130:
                return this.parseLiteral(this.state.value, "NumberLiteralTypeAnnotation");
              case 131:
                return this.parseLiteral(this.state.value, "BigIntLiteralTypeAnnotation");
              case 88:
                return this.next(), this.finishNode(r, "VoidTypeAnnotation");
              case 84:
                return this.next(), this.finishNode(r, "NullLiteralTypeAnnotation");
              case 78:
                return this.next(), this.finishNode(r, "ThisTypeAnnotation");
              case 55:
                return this.next(), this.finishNode(r, "ExistsTypeAnnotation");
              case 87:
                return this.flowParseTypeofType();
              default:
                if (Vt(this.state.type)) {
                  let c = Te(this.state.type);
                  return this.next(), super.createIdentifier(r, c);
                } else if (K(this.state.type))
                  return this.isContextual(125) ? this.flowParseInterfaceType() : this.flowIdentToTypeAnnotation(e, s, r, this.parseIdentifier());
            }
            throw this.unexpected();
          }
          flowParsePostfixType() {
            let e = this.state.start, s = this.state.startLoc, r = this.flowParsePrimaryType(), i = false;
            for (; (this.match(0) || this.match(18)) && !this.canInsertSemicolon(); ) {
              let a = this.startNodeAt(e, s), n = this.eat(18);
              i = i || n, this.expect(0), !n && this.match(3) ? (a.elementType = r, this.next(), r = this.finishNode(a, "ArrayTypeAnnotation")) : (a.objectType = r, a.indexType = this.flowParseType(), this.expect(3), i ? (a.optional = n, r = this.finishNode(a, "OptionalIndexedAccessType")) : r = this.finishNode(a, "IndexedAccessType"));
            }
            return r;
          }
          flowParsePrefixType() {
            let e = this.startNode();
            return this.eat(17) ? (e.typeAnnotation = this.flowParsePrefixType(), this.finishNode(e, "NullableTypeAnnotation")) : this.flowParsePostfixType();
          }
          flowParseAnonFunctionWithoutParens() {
            let e = this.flowParsePrefixType();
            if (!this.state.noAnonFunctionType && this.eat(19)) {
              let s = this.startNodeAt(e.start, e.loc.start);
              return s.params = [this.reinterpretTypeAsFunctionTypeParam(e)], s.rest = null, s.this = null, s.returnType = this.flowParseType(), s.typeParameters = null, this.finishNode(s, "FunctionTypeAnnotation");
            }
            return e;
          }
          flowParseIntersectionType() {
            let e = this.startNode();
            this.eat(45);
            let s = this.flowParseAnonFunctionWithoutParens();
            for (e.types = [s]; this.eat(45); )
              e.types.push(this.flowParseAnonFunctionWithoutParens());
            return e.types.length === 1 ? s : this.finishNode(e, "IntersectionTypeAnnotation");
          }
          flowParseUnionType() {
            let e = this.startNode();
            this.eat(43);
            let s = this.flowParseIntersectionType();
            for (e.types = [s]; this.eat(43); )
              e.types.push(this.flowParseIntersectionType());
            return e.types.length === 1 ? s : this.finishNode(e, "UnionTypeAnnotation");
          }
          flowParseType() {
            let e = this.state.inType;
            this.state.inType = true;
            let s = this.flowParseUnionType();
            return this.state.inType = e, s;
          }
          flowParseTypeOrImplicitInstantiation() {
            if (this.state.type === 128 && this.state.value === "_") {
              let e = this.state.start, s = this.state.startLoc, r = this.parseIdentifier();
              return this.flowParseGenericType(e, s, r);
            } else
              return this.flowParseType();
          }
          flowParseTypeAnnotation() {
            let e = this.startNode();
            return e.typeAnnotation = this.flowParseTypeInitialiser(), this.finishNode(e, "TypeAnnotation");
          }
          flowParseTypeAnnotatableIdentifier(e) {
            let s = e ? this.parseIdentifier() : this.flowParseRestrictedIdentifier();
            return this.match(14) && (s.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(s)), s;
          }
          typeCastToParameter(e) {
            return e.expression.typeAnnotation = e.typeAnnotation, this.resetEndLocation(e.expression, e.typeAnnotation.loc.end), e.expression;
          }
          flowParseVariance() {
            let e = null;
            return this.match(53) && (e = this.startNode(), this.state.value === "+" ? e.kind = "plus" : e.kind = "minus", this.next(), this.finishNode(e, "Variance")), e;
          }
          parseFunctionBody(e, s) {
            let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
            return s ? this.forwardNoArrowParamsConversionAt(e, () => super.parseFunctionBody(e, true, r)) : super.parseFunctionBody(e, false, r);
          }
          parseFunctionBodyAndFinish(e, s) {
            let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
            if (this.match(14)) {
              let i = this.startNode();
              [i.typeAnnotation, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), e.returnType = i.typeAnnotation ? this.finishNode(i, "TypeAnnotation") : null;
            }
            super.parseFunctionBodyAndFinish(e, s, r);
          }
          parseStatement(e, s) {
            if (this.state.strict && this.isContextual(125)) {
              let i = this.lookahead();
              if (pe(i.type)) {
                let a = this.startNode();
                return this.next(), this.flowParseInterface(a);
              }
            } else if (this.shouldParseEnums() && this.isContextual(122)) {
              let i = this.startNode();
              return this.next(), this.flowParseEnumDeclaration(i);
            }
            let r = super.parseStatement(e, s);
            return this.flowPragma === void 0 && !this.isValidDirective(r) && (this.flowPragma = null), r;
          }
          parseExpressionStatement(e, s) {
            if (s.type === "Identifier") {
              if (s.name === "declare") {
                if (this.match(80) || K(this.state.type) || this.match(68) || this.match(74) || this.match(82))
                  return this.flowParseDeclare(e);
              } else if (K(this.state.type)) {
                if (s.name === "interface")
                  return this.flowParseInterface(e);
                if (s.name === "type")
                  return this.flowParseTypeAlias(e);
                if (s.name === "opaque")
                  return this.flowParseOpaqueType(e, false);
              }
            }
            return super.parseExpressionStatement(e, s);
          }
          shouldParseExportDeclaration() {
            let { type: e } = this.state;
            return ur(e) || this.shouldParseEnums() && e === 122 ? !this.state.containsEsc : super.shouldParseExportDeclaration();
          }
          isExportDefaultSpecifier() {
            let { type: e } = this.state;
            return ur(e) || this.shouldParseEnums() && e === 122 ? this.state.containsEsc : super.isExportDefaultSpecifier();
          }
          parseExportDefaultExpression() {
            if (this.shouldParseEnums() && this.isContextual(122)) {
              let e = this.startNode();
              return this.next(), this.flowParseEnumDeclaration(e);
            }
            return super.parseExportDefaultExpression();
          }
          parseConditional(e, s, r, i) {
            if (!this.match(17))
              return e;
            if (this.state.maybeInArrowParameters) {
              let S = this.lookaheadCharCode();
              if (S === 44 || S === 61 || S === 58 || S === 41)
                return this.setOptionalParametersError(i), e;
            }
            this.expect(17);
            let a = this.state.clone(), n = this.state.noArrowAt, o = this.startNodeAt(s, r), { consequent: c, failed: f } = this.tryParseConditionalConsequent(), [y, C] = this.getArrowLikeExpressions(c);
            if (f || C.length > 0) {
              let S = [...n];
              if (C.length > 0) {
                this.state = a, this.state.noArrowAt = S;
                for (let I = 0; I < C.length; I++)
                  S.push(C[I].start);
                (({ consequent: c, failed: f } = this.tryParseConditionalConsequent())), [y, C] = this.getArrowLikeExpressions(c);
              }
              f && y.length > 1 && this.raise(F.AmbiguousConditionalArrow, { at: a.startLoc }), f && y.length === 1 && (this.state = a, S.push(y[0].start), this.state.noArrowAt = S, { consequent: c, failed: f } = this.tryParseConditionalConsequent());
            }
            return this.getArrowLikeExpressions(c, true), this.state.noArrowAt = n, this.expect(14), o.test = e, o.consequent = c, o.alternate = this.forwardNoArrowParamsConversionAt(o, () => this.parseMaybeAssign(void 0, void 0)), this.finishNode(o, "ConditionalExpression");
          }
          tryParseConditionalConsequent() {
            this.state.noArrowParamsConversionAt.push(this.state.start);
            let e = this.parseMaybeAssignAllowIn(), s = !this.match(14);
            return this.state.noArrowParamsConversionAt.pop(), { consequent: e, failed: s };
          }
          getArrowLikeExpressions(e, s) {
            let r = [e], i = [];
            for (; r.length !== 0; ) {
              let a = r.pop();
              a.type === "ArrowFunctionExpression" ? (a.typeParameters || !a.returnType ? this.finishArrowValidation(a) : i.push(a), r.push(a.body)) : a.type === "ConditionalExpression" && (r.push(a.consequent), r.push(a.alternate));
            }
            return s ? (i.forEach((a) => this.finishArrowValidation(a)), [i, []]) : Sh(i, (a) => a.params.every((n) => this.isAssignable(n, true)));
          }
          finishArrowValidation(e) {
            var s;
            this.toAssignableList(e.params, (s = e.extra) == null ? void 0 : s.trailingCommaLoc, false), this.scope.enter(me | Xt), super.checkParams(e, false, true), this.scope.exit();
          }
          forwardNoArrowParamsConversionAt(e, s) {
            let r;
            return this.state.noArrowParamsConversionAt.indexOf(e.start) !== -1 ? (this.state.noArrowParamsConversionAt.push(this.state.start), r = s(), this.state.noArrowParamsConversionAt.pop()) : r = s(), r;
          }
          parseParenItem(e, s, r) {
            if (e = super.parseParenItem(e, s, r), this.eat(17) && (e.optional = true, this.resetEndLocation(e)), this.match(14)) {
              let i = this.startNodeAt(s, r);
              return i.expression = e, i.typeAnnotation = this.flowParseTypeAnnotation(), this.finishNode(i, "TypeCastExpression");
            }
            return e;
          }
          assertModuleNodeAllowed(e) {
            e.type === "ImportDeclaration" && (e.importKind === "type" || e.importKind === "typeof") || e.type === "ExportNamedDeclaration" && e.exportKind === "type" || e.type === "ExportAllDeclaration" && e.exportKind === "type" || super.assertModuleNodeAllowed(e);
          }
          parseExport(e) {
            let s = super.parseExport(e);
            return (s.type === "ExportNamedDeclaration" || s.type === "ExportAllDeclaration") && (s.exportKind = s.exportKind || "value"), s;
          }
          parseExportDeclaration(e) {
            if (this.isContextual(126)) {
              e.exportKind = "type";
              let s = this.startNode();
              return this.next(), this.match(5) ? (e.specifiers = this.parseExportSpecifiers(true), this.parseExportFrom(e), null) : this.flowParseTypeAlias(s);
            } else if (this.isContextual(127)) {
              e.exportKind = "type";
              let s = this.startNode();
              return this.next(), this.flowParseOpaqueType(s, false);
            } else if (this.isContextual(125)) {
              e.exportKind = "type";
              let s = this.startNode();
              return this.next(), this.flowParseInterface(s);
            } else if (this.shouldParseEnums() && this.isContextual(122)) {
              e.exportKind = "value";
              let s = this.startNode();
              return this.next(), this.flowParseEnumDeclaration(s);
            } else
              return super.parseExportDeclaration(e);
          }
          eatExportStar(e) {
            return super.eatExportStar(...arguments) ? true : this.isContextual(126) && this.lookahead().type === 55 ? (e.exportKind = "type", this.next(), this.next(), true) : false;
          }
          maybeParseExportNamespaceSpecifier(e) {
            let { startLoc: s } = this.state, r = super.maybeParseExportNamespaceSpecifier(e);
            return r && e.exportKind === "type" && this.unexpected(s), r;
          }
          parseClassId(e, s, r) {
            super.parseClassId(e, s, r), this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration());
          }
          parseClassMember(e, s, r) {
            let { startLoc: i } = this.state;
            if (this.isContextual(121)) {
              if (this.parseClassMemberFromModifier(e, s))
                return;
              s.declare = true;
            }
            super.parseClassMember(e, s, r), s.declare && (s.type !== "ClassProperty" && s.type !== "ClassPrivateProperty" && s.type !== "PropertyDefinition" ? this.raise(F.DeclareClassElement, { at: i }) : s.value && this.raise(F.DeclareClassFieldInitializer, { at: s.value }));
          }
          isIterator(e) {
            return e === "iterator" || e === "asyncIterator";
          }
          readIterator() {
            let e = super.readWord1(), s = "@@" + e;
            (!this.isIterator(e) || !this.state.inType) && this.raise(u.InvalidIdentifier, { at: this.state.curPosition(), identifierName: s }), this.finishToken(128, s);
          }
          getTokenFromCode(e) {
            let s = this.input.charCodeAt(this.state.pos + 1);
            return e === 123 && s === 124 ? this.finishOp(6, 2) : this.state.inType && (e === 62 || e === 60) ? this.finishOp(e === 62 ? 48 : 47, 1) : this.state.inType && e === 63 ? s === 46 ? this.finishOp(18, 2) : this.finishOp(17, 1) : Uo(e, s, this.input.charCodeAt(this.state.pos + 2)) ? (this.state.pos += 2, this.readIterator()) : super.getTokenFromCode(e);
          }
          isAssignable(e, s) {
            return e.type === "TypeCastExpression" ? this.isAssignable(e.expression, s) : super.isAssignable(e, s);
          }
          toAssignable(e) {
            let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            return e.type === "TypeCastExpression" ? super.toAssignable(this.typeCastToParameter(e), s) : super.toAssignable(e, s);
          }
          toAssignableList(e, s, r) {
            for (let i = 0; i < e.length; i++) {
              let a = e[i];
              (a == null ? void 0 : a.type) === "TypeCastExpression" && (e[i] = this.typeCastToParameter(a));
            }
            return super.toAssignableList(e, s, r);
          }
          toReferencedList(e, s) {
            for (let i = 0; i < e.length; i++) {
              var r;
              let a = e[i];
              a && a.type === "TypeCastExpression" && !((r = a.extra) != null && r.parenthesized) && (e.length > 1 || !s) && this.raise(F.TypeCastInPattern, { at: a.typeAnnotation });
            }
            return e;
          }
          parseArrayLike(e, s, r, i) {
            let a = super.parseArrayLike(e, s, r, i);
            return s && !this.state.maybeInArrowParameters && this.toReferencedList(a.elements), a;
          }
          isValidLVal(e) {
            for (var s = arguments.length, r = new Array(s > 1 ? s - 1 : 0), i = 1; i < s; i++)
              r[i - 1] = arguments[i];
            return e === "TypeCastExpression" || super.isValidLVal(e, ...r);
          }
          parseClassProperty(e) {
            return this.match(14) && (e.typeAnnotation = this.flowParseTypeAnnotation()), super.parseClassProperty(e);
          }
          parseClassPrivateProperty(e) {
            return this.match(14) && (e.typeAnnotation = this.flowParseTypeAnnotation()), super.parseClassPrivateProperty(e);
          }
          isClassMethod() {
            return this.match(47) || super.isClassMethod();
          }
          isClassProperty() {
            return this.match(14) || super.isClassProperty();
          }
          isNonstaticConstructor(e) {
            return !this.match(14) && super.isNonstaticConstructor(e);
          }
          pushClassMethod(e, s, r, i, a, n) {
            if (s.variance && this.unexpected(s.variance.loc.start), delete s.variance, this.match(47) && (s.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassMethod(e, s, r, i, a, n), s.params && a) {
              let o = s.params;
              o.length > 0 && this.isThisParam(o[0]) && this.raise(F.ThisParamBannedInConstructor, { at: s });
            } else if (s.type === "MethodDefinition" && a && s.value.params) {
              let o = s.value.params;
              o.length > 0 && this.isThisParam(o[0]) && this.raise(F.ThisParamBannedInConstructor, { at: s });
            }
          }
          pushClassPrivateMethod(e, s, r, i) {
            s.variance && this.unexpected(s.variance.loc.start), delete s.variance, this.match(47) && (s.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassPrivateMethod(e, s, r, i);
          }
          parseClassSuper(e) {
            if (super.parseClassSuper(e), e.superClass && this.match(47) && (e.superTypeParameters = this.flowParseTypeParameterInstantiation()), this.isContextual(110)) {
              this.next();
              let s = e.implements = [];
              do {
                let r = this.startNode();
                r.id = this.flowParseRestrictedIdentifier(true), this.match(47) ? r.typeParameters = this.flowParseTypeParameterInstantiation() : r.typeParameters = null, s.push(this.finishNode(r, "ClassImplements"));
              } while (this.eat(12));
            }
          }
          checkGetterSetterParams(e) {
            super.checkGetterSetterParams(e);
            let s = this.getObjectOrClassMethodParams(e);
            if (s.length > 0) {
              let r = s[0];
              this.isThisParam(r) && e.kind === "get" ? this.raise(F.GetterMayNotHaveThisParam, { at: r }) : this.isThisParam(r) && this.raise(F.SetterMayNotHaveThisParam, { at: r });
            }
          }
          parsePropertyNamePrefixOperator(e) {
            e.variance = this.flowParseVariance();
          }
          parseObjPropValue(e, s, r, i, a, n, o, c) {
            e.variance && this.unexpected(e.variance.loc.start), delete e.variance;
            let f;
            this.match(47) && !o && (f = this.flowParseTypeParameterDeclaration(), this.match(10) || this.unexpected()), super.parseObjPropValue(e, s, r, i, a, n, o, c), f && ((e.value || e).typeParameters = f);
          }
          parseAssignableListItemTypes(e) {
            return this.eat(17) && (e.type !== "Identifier" && this.raise(F.PatternIsOptional, { at: e }), this.isThisParam(e) && this.raise(F.ThisParamMayNotBeOptional, { at: e }), e.optional = true), this.match(14) ? e.typeAnnotation = this.flowParseTypeAnnotation() : this.isThisParam(e) && this.raise(F.ThisParamAnnotationRequired, { at: e }), this.match(29) && this.isThisParam(e) && this.raise(F.ThisParamNoDefault, { at: e }), this.resetEndLocation(e), e;
          }
          parseMaybeDefault(e, s, r) {
            let i = super.parseMaybeDefault(e, s, r);
            return i.type === "AssignmentPattern" && i.typeAnnotation && i.right.start < i.typeAnnotation.start && this.raise(F.TypeBeforeInitializer, { at: i.typeAnnotation }), i;
          }
          shouldParseDefaultImport(e) {
            return us(e) ? Br(this.state.type) : super.shouldParseDefaultImport(e);
          }
          parseImportSpecifierLocal(e, s, r) {
            s.local = us(e) ? this.flowParseRestrictedIdentifier(true, true) : this.parseIdentifier(), e.specifiers.push(this.finishImportSpecifier(s, r));
          }
          maybeParseDefaultImportSpecifier(e) {
            e.importKind = "value";
            let s = null;
            if (this.match(87) ? s = "typeof" : this.isContextual(126) && (s = "type"), s) {
              let r = this.lookahead(), { type: i } = r;
              s === "type" && i === 55 && this.unexpected(null, r.type), (Br(i) || i === 5 || i === 55) && (this.next(), e.importKind = s);
            }
            return super.maybeParseDefaultImportSpecifier(e);
          }
          parseImportSpecifier(e, s, r, i) {
            let a = e.imported, n = null;
            a.type === "Identifier" && (a.name === "type" ? n = "type" : a.name === "typeof" && (n = "typeof"));
            let o = false;
            if (this.isContextual(93) && !this.isLookaheadContextual("as")) {
              let f = this.parseIdentifier(true);
              n !== null && !pe(this.state.type) ? (e.imported = f, e.importKind = n, e.local = ge(f)) : (e.imported = a, e.importKind = null, e.local = this.parseIdentifier());
            } else {
              if (n !== null && pe(this.state.type))
                e.imported = this.parseIdentifier(true), e.importKind = n;
              else {
                if (s)
                  throw this.raise(u.ImportBindingIsString, { at: e, importName: a.value });
                e.imported = a, e.importKind = null;
              }
              this.eatContextual(93) ? e.local = this.parseIdentifier() : (o = true, e.local = ge(e.imported));
            }
            let c = us(e);
            return r && c && this.raise(F.ImportTypeShorthandOnlyInPureImport, { at: e }), (r || c) && this.checkReservedType(e.local.name, e.local.loc.start, true), o && !r && !c && this.checkReservedWord(e.local.name, e.loc.start, true, true), this.finishImportSpecifier(e, "ImportSpecifier");
          }
          parseBindingAtom() {
            switch (this.state.type) {
              case 78:
                return this.parseIdentifier(true);
              default:
                return super.parseBindingAtom();
            }
          }
          parseFunctionParams(e, s) {
            let r = e.kind;
            r !== "get" && r !== "set" && this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration()), super.parseFunctionParams(e, s);
          }
          parseVarId(e, s) {
            super.parseVarId(e, s), this.match(14) && (e.id.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(e.id));
          }
          parseAsyncArrowFromCallExpression(e, s) {
            if (this.match(14)) {
              let r = this.state.noAnonFunctionType;
              this.state.noAnonFunctionType = true, e.returnType = this.flowParseTypeAnnotation(), this.state.noAnonFunctionType = r;
            }
            return super.parseAsyncArrowFromCallExpression(e, s);
          }
          shouldParseAsyncArrow() {
            return this.match(14) || super.shouldParseAsyncArrow();
          }
          parseMaybeAssign(e, s) {
            var r;
            let i = null, a;
            if (this.hasPlugin("jsx") && (this.match(138) || this.match(47))) {
              if (i = this.state.clone(), a = this.tryParse(() => super.parseMaybeAssign(e, s), i), !a.error)
                return a.node;
              let { context: c } = this.state, f = c[c.length - 1];
              (f === z.j_oTag || f === z.j_expr) && c.pop();
            }
            if ((r = a) != null && r.error || this.match(47)) {
              var n, o;
              i = i || this.state.clone();
              let c, f = this.tryParse((C) => {
                var S;
                c = this.flowParseTypeParameterDeclaration();
                let I = this.forwardNoArrowParamsConversionAt(c, () => {
                  let R = super.parseMaybeAssign(e, s);
                  return this.resetStartLocationFromNode(R, c), R;
                });
                (S = I.extra) != null && S.parenthesized && C();
                let M = this.maybeUnwrapTypeCastExpression(I);
                return M.type !== "ArrowFunctionExpression" && C(), M.typeParameters = c, this.resetStartLocationFromNode(M, c), I;
              }, i), y = null;
              if (f.node && this.maybeUnwrapTypeCastExpression(f.node).type === "ArrowFunctionExpression") {
                if (!f.error && !f.aborted)
                  return f.node.async && this.raise(F.UnexpectedTypeParameterBeforeAsyncArrowFunction, { at: c }), f.node;
                y = f.node;
              }
              if ((n = a) != null && n.node)
                return this.state = a.failState, a.node;
              if (y)
                return this.state = f.failState, y;
              throw (o = a) != null && o.thrown ? a.error : f.thrown ? f.error : this.raise(F.UnexpectedTokenAfterTypeParameter, { at: c });
            }
            return super.parseMaybeAssign(e, s);
          }
          parseArrow(e) {
            if (this.match(14)) {
              let s = this.tryParse(() => {
                let r = this.state.noAnonFunctionType;
                this.state.noAnonFunctionType = true;
                let i = this.startNode();
                return [i.typeAnnotation, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), this.state.noAnonFunctionType = r, this.canInsertSemicolon() && this.unexpected(), this.match(19) || this.unexpected(), i;
              });
              if (s.thrown)
                return null;
              s.error && (this.state = s.failState), e.returnType = s.node.typeAnnotation ? this.finishNode(s.node, "TypeAnnotation") : null;
            }
            return super.parseArrow(e);
          }
          shouldParseArrow(e) {
            return this.match(14) || super.shouldParseArrow(e);
          }
          setArrowFunctionParameters(e, s) {
            this.state.noArrowParamsConversionAt.indexOf(e.start) !== -1 ? e.params = s : super.setArrowFunctionParameters(e, s);
          }
          checkParams(e, s, r) {
            if (!(r && this.state.noArrowParamsConversionAt.indexOf(e.start) !== -1)) {
              for (let i = 0; i < e.params.length; i++)
                this.isThisParam(e.params[i]) && i > 0 && this.raise(F.ThisParamMustBeFirst, { at: e.params[i] });
              return super.checkParams(...arguments);
            }
          }
          parseParenAndDistinguishExpression(e) {
            return super.parseParenAndDistinguishExpression(e && this.state.noArrowAt.indexOf(this.state.start) === -1);
          }
          parseSubscripts(e, s, r, i) {
            if (e.type === "Identifier" && e.name === "async" && this.state.noArrowAt.indexOf(s) !== -1) {
              this.next();
              let a = this.startNodeAt(s, r);
              a.callee = e, a.arguments = this.parseCallExpressionArguments(11, false), e = this.finishNode(a, "CallExpression");
            } else if (e.type === "Identifier" && e.name === "async" && this.match(47)) {
              let a = this.state.clone(), n = this.tryParse((c) => this.parseAsyncArrowWithTypeParameters(s, r) || c(), a);
              if (!n.error && !n.aborted)
                return n.node;
              let o = this.tryParse(() => super.parseSubscripts(e, s, r, i), a);
              if (o.node && !o.error)
                return o.node;
              if (n.node)
                return this.state = n.failState, n.node;
              if (o.node)
                return this.state = o.failState, o.node;
              throw n.error || o.error;
            }
            return super.parseSubscripts(e, s, r, i);
          }
          parseSubscript(e, s, r, i, a) {
            if (this.match(18) && this.isLookaheadToken_lt()) {
              if (a.optionalChainMember = true, i)
                return a.stop = true, e;
              this.next();
              let n = this.startNodeAt(s, r);
              return n.callee = e, n.typeArguments = this.flowParseTypeParameterInstantiation(), this.expect(10), n.arguments = this.parseCallExpressionArguments(11, false), n.optional = true, this.finishCallExpression(n, true);
            } else if (!i && this.shouldParseTypes() && this.match(47)) {
              let n = this.startNodeAt(s, r);
              n.callee = e;
              let o = this.tryParse(() => (n.typeArguments = this.flowParseTypeParameterInstantiationCallOrNew(), this.expect(10), n.arguments = this.parseCallExpressionArguments(11, false), a.optionalChainMember && (n.optional = false), this.finishCallExpression(n, a.optionalChainMember)));
              if (o.node)
                return o.error && (this.state = o.failState), o.node;
            }
            return super.parseSubscript(e, s, r, i, a);
          }
          parseNewArguments(e) {
            let s = null;
            this.shouldParseTypes() && this.match(47) && (s = this.tryParse(() => this.flowParseTypeParameterInstantiationCallOrNew()).node), e.typeArguments = s, super.parseNewArguments(e);
          }
          parseAsyncArrowWithTypeParameters(e, s) {
            let r = this.startNodeAt(e, s);
            if (this.parseFunctionParams(r), !!this.parseArrow(r))
              return this.parseArrowExpression(r, void 0, true);
          }
          readToken_mult_modulo(e) {
            let s = this.input.charCodeAt(this.state.pos + 1);
            if (e === 42 && s === 47 && this.state.hasFlowComment) {
              this.state.hasFlowComment = false, this.state.pos += 2, this.nextToken();
              return;
            }
            super.readToken_mult_modulo(e);
          }
          readToken_pipe_amp(e) {
            let s = this.input.charCodeAt(this.state.pos + 1);
            if (e === 124 && s === 125) {
              this.finishOp(9, 2);
              return;
            }
            super.readToken_pipe_amp(e);
          }
          parseTopLevel(e, s) {
            let r = super.parseTopLevel(e, s);
            return this.state.hasFlowComment && this.raise(F.UnterminatedFlowComment, { at: this.state.curPosition() }), r;
          }
          skipBlockComment() {
            if (this.hasPlugin("flowComments") && this.skipFlowComment()) {
              if (this.state.hasFlowComment)
                throw this.raise(F.NestedFlowComment, { at: this.state.startLoc });
              this.hasFlowCommentCompletion(), this.state.pos += this.skipFlowComment(), this.state.hasFlowComment = true;
              return;
            }
            if (this.state.hasFlowComment) {
              let e = this.input.indexOf("*-/", this.state.pos + 2);
              if (e === -1)
                throw this.raise(u.UnterminatedComment, { at: this.state.curPosition() });
              this.state.pos = e + 2 + 3;
              return;
            }
            return super.skipBlockComment();
          }
          skipFlowComment() {
            let { pos: e } = this.state, s = 2;
            for (; [32, 9].includes(this.input.charCodeAt(e + s)); )
              s++;
            let r = this.input.charCodeAt(s + e), i = this.input.charCodeAt(s + e + 1);
            return r === 58 && i === 58 ? s + 2 : this.input.slice(s + e, s + e + 12) === "flow-include" ? s + 12 : r === 58 && i !== 58 ? s : false;
          }
          hasFlowCommentCompletion() {
            if (this.input.indexOf("*/", this.state.pos) === -1)
              throw this.raise(u.UnterminatedComment, { at: this.state.curPosition() });
          }
          flowEnumErrorBooleanMemberNotInitialized(e, s) {
            let { enumName: r, memberName: i } = s;
            this.raise(F.EnumBooleanMemberNotInitialized, { at: e, memberName: i, enumName: r });
          }
          flowEnumErrorInvalidMemberInitializer(e, s) {
            return this.raise(s.explicitType ? s.explicitType === "symbol" ? F.EnumInvalidMemberInitializerSymbolType : F.EnumInvalidMemberInitializerPrimaryType : F.EnumInvalidMemberInitializerUnknownType, Object.assign({ at: e }, s));
          }
          flowEnumErrorNumberMemberNotInitialized(e, s) {
            let { enumName: r, memberName: i } = s;
            this.raise(F.EnumNumberMemberNotInitialized, { at: e, enumName: r, memberName: i });
          }
          flowEnumErrorStringMemberInconsistentlyInitailized(e, s) {
            let { enumName: r } = s;
            this.raise(F.EnumStringMemberInconsistentlyInitailized, { at: e, enumName: r });
          }
          flowEnumMemberInit() {
            let e = this.state.startLoc, s = () => this.match(12) || this.match(8);
            switch (this.state.type) {
              case 130: {
                let r = this.parseNumericLiteral(this.state.value);
                return s() ? { type: "number", loc: r.loc.start, value: r } : { type: "invalid", loc: e };
              }
              case 129: {
                let r = this.parseStringLiteral(this.state.value);
                return s() ? { type: "string", loc: r.loc.start, value: r } : { type: "invalid", loc: e };
              }
              case 85:
              case 86: {
                let r = this.parseBooleanLiteral(this.match(85));
                return s() ? { type: "boolean", loc: r.loc.start, value: r } : { type: "invalid", loc: e };
              }
              default:
                return { type: "invalid", loc: e };
            }
          }
          flowEnumMemberRaw() {
            let e = this.state.startLoc, s = this.parseIdentifier(true), r = this.eat(29) ? this.flowEnumMemberInit() : { type: "none", loc: e };
            return { id: s, init: r };
          }
          flowEnumCheckExplicitTypeMismatch(e, s, r) {
            let { explicitType: i } = s;
            i !== null && i !== r && this.flowEnumErrorInvalidMemberInitializer(e, s);
          }
          flowEnumMembers(e) {
            let { enumName: s, explicitType: r } = e, i = /* @__PURE__ */ new Set(), a = { booleanMembers: [], numberMembers: [], stringMembers: [], defaultedMembers: [] }, n = false;
            for (; !this.match(8); ) {
              if (this.eat(21)) {
                n = true;
                break;
              }
              let o = this.startNode(), { id: c, init: f } = this.flowEnumMemberRaw(), y = c.name;
              if (y === "")
                continue;
              /^[a-z]/.test(y) && this.raise(F.EnumInvalidMemberName, { at: c, memberName: y, suggestion: y[0].toUpperCase() + y.slice(1), enumName: s }), i.has(y) && this.raise(F.EnumDuplicateMemberName, { at: c, memberName: y, enumName: s }), i.add(y);
              let C = { enumName: s, explicitType: r, memberName: y };
              switch (o.id = c, f.type) {
                case "boolean": {
                  this.flowEnumCheckExplicitTypeMismatch(f.loc, C, "boolean"), o.init = f.value, a.booleanMembers.push(this.finishNode(o, "EnumBooleanMember"));
                  break;
                }
                case "number": {
                  this.flowEnumCheckExplicitTypeMismatch(f.loc, C, "number"), o.init = f.value, a.numberMembers.push(this.finishNode(o, "EnumNumberMember"));
                  break;
                }
                case "string": {
                  this.flowEnumCheckExplicitTypeMismatch(f.loc, C, "string"), o.init = f.value, a.stringMembers.push(this.finishNode(o, "EnumStringMember"));
                  break;
                }
                case "invalid":
                  throw this.flowEnumErrorInvalidMemberInitializer(f.loc, C);
                case "none":
                  switch (r) {
                    case "boolean":
                      this.flowEnumErrorBooleanMemberNotInitialized(f.loc, C);
                      break;
                    case "number":
                      this.flowEnumErrorNumberMemberNotInitialized(f.loc, C);
                      break;
                    default:
                      a.defaultedMembers.push(this.finishNode(o, "EnumDefaultedMember"));
                  }
              }
              this.match(8) || this.expect(12);
            }
            return { members: a, hasUnknownMembers: n };
          }
          flowEnumStringMembers(e, s, r) {
            let { enumName: i } = r;
            if (e.length === 0)
              return s;
            if (s.length === 0)
              return e;
            if (s.length > e.length) {
              for (let a of e)
                this.flowEnumErrorStringMemberInconsistentlyInitailized(a, { enumName: i });
              return s;
            } else {
              for (let a of s)
                this.flowEnumErrorStringMemberInconsistentlyInitailized(a, { enumName: i });
              return e;
            }
          }
          flowEnumParseExplicitType(e) {
            let { enumName: s } = e;
            if (!this.eatContextual(101))
              return null;
            if (!K(this.state.type))
              throw this.raise(F.EnumInvalidExplicitTypeUnknownSupplied, { at: this.state.startLoc, enumName: s });
            let { value: r } = this.state;
            return this.next(), r !== "boolean" && r !== "number" && r !== "string" && r !== "symbol" && this.raise(F.EnumInvalidExplicitType, { at: this.state.startLoc, enumName: s, invalidEnumType: r }), r;
          }
          flowEnumBody(e, s) {
            let r = s.name, i = s.loc.start, a = this.flowEnumParseExplicitType({ enumName: r });
            this.expect(5);
            let { members: n, hasUnknownMembers: o } = this.flowEnumMembers({ enumName: r, explicitType: a });
            switch (e.hasUnknownMembers = o, a) {
              case "boolean":
                return e.explicitType = true, e.members = n.booleanMembers, this.expect(8), this.finishNode(e, "EnumBooleanBody");
              case "number":
                return e.explicitType = true, e.members = n.numberMembers, this.expect(8), this.finishNode(e, "EnumNumberBody");
              case "string":
                return e.explicitType = true, e.members = this.flowEnumStringMembers(n.stringMembers, n.defaultedMembers, { enumName: r }), this.expect(8), this.finishNode(e, "EnumStringBody");
              case "symbol":
                return e.members = n.defaultedMembers, this.expect(8), this.finishNode(e, "EnumSymbolBody");
              default: {
                let c = () => (e.members = [], this.expect(8), this.finishNode(e, "EnumStringBody"));
                e.explicitType = false;
                let f = n.booleanMembers.length, y = n.numberMembers.length, C = n.stringMembers.length, S = n.defaultedMembers.length;
                if (!f && !y && !C && !S)
                  return c();
                if (!f && !y)
                  return e.members = this.flowEnumStringMembers(n.stringMembers, n.defaultedMembers, { enumName: r }), this.expect(8), this.finishNode(e, "EnumStringBody");
                if (!y && !C && f >= S) {
                  for (let I of n.defaultedMembers)
                    this.flowEnumErrorBooleanMemberNotInitialized(I.loc.start, { enumName: r, memberName: I.id.name });
                  return e.members = n.booleanMembers, this.expect(8), this.finishNode(e, "EnumBooleanBody");
                } else if (!f && !C && y >= S) {
                  for (let I of n.defaultedMembers)
                    this.flowEnumErrorNumberMemberNotInitialized(I.loc.start, { enumName: r, memberName: I.id.name });
                  return e.members = n.numberMembers, this.expect(8), this.finishNode(e, "EnumNumberBody");
                } else
                  return this.raise(F.EnumInconsistentMemberValues, { at: i, enumName: r }), c();
              }
            }
          }
          flowParseEnumDeclaration(e) {
            let s = this.parseIdentifier();
            return e.id = s, e.body = this.flowEnumBody(this.startNode(), s), this.finishNode(e, "EnumDeclaration");
          }
          isLookaheadToken_lt() {
            let e = this.nextTokenStart();
            if (this.input.charCodeAt(e) === 60) {
              let s = this.input.charCodeAt(e + 1);
              return s !== 60 && s !== 61;
            }
            return false;
          }
          maybeUnwrapTypeCastExpression(e) {
            return e.type === "TypeCastExpression" ? e.expression : e;
          }
        }, Ih = { __proto__: null, quot: '"', amp: "&", apos: "'", lt: "<", gt: ">", nbsp: "\xA0", iexcl: "\xA1", cent: "\xA2", pound: "\xA3", curren: "\xA4", yen: "\xA5", brvbar: "\xA6", sect: "\xA7", uml: "\xA8", copy: "\xA9", ordf: "\xAA", laquo: "\xAB", not: "\xAC", shy: "\xAD", reg: "\xAE", macr: "\xAF", deg: "\xB0", plusmn: "\xB1", sup2: "\xB2", sup3: "\xB3", acute: "\xB4", micro: "\xB5", para: "\xB6", middot: "\xB7", cedil: "\xB8", sup1: "\xB9", ordm: "\xBA", raquo: "\xBB", frac14: "\xBC", frac12: "\xBD", frac34: "\xBE", iquest: "\xBF", Agrave: "\xC0", Aacute: "\xC1", Acirc: "\xC2", Atilde: "\xC3", Auml: "\xC4", Aring: "\xC5", AElig: "\xC6", Ccedil: "\xC7", Egrave: "\xC8", Eacute: "\xC9", Ecirc: "\xCA", Euml: "\xCB", Igrave: "\xCC", Iacute: "\xCD", Icirc: "\xCE", Iuml: "\xCF", ETH: "\xD0", Ntilde: "\xD1", Ograve: "\xD2", Oacute: "\xD3", Ocirc: "\xD4", Otilde: "\xD5", Ouml: "\xD6", times: "\xD7", Oslash: "\xD8", Ugrave: "\xD9", Uacute: "\xDA", Ucirc: "\xDB", Uuml: "\xDC", Yacute: "\xDD", THORN: "\xDE", szlig: "\xDF", agrave: "\xE0", aacute: "\xE1", acirc: "\xE2", atilde: "\xE3", auml: "\xE4", aring: "\xE5", aelig: "\xE6", ccedil: "\xE7", egrave: "\xE8", eacute: "\xE9", ecirc: "\xEA", euml: "\xEB", igrave: "\xEC", iacute: "\xED", icirc: "\xEE", iuml: "\xEF", eth: "\xF0", ntilde: "\xF1", ograve: "\xF2", oacute: "\xF3", ocirc: "\xF4", otilde: "\xF5", ouml: "\xF6", divide: "\xF7", oslash: "\xF8", ugrave: "\xF9", uacute: "\xFA", ucirc: "\xFB", uuml: "\xFC", yacute: "\xFD", thorn: "\xFE", yuml: "\xFF", OElig: "\u0152", oelig: "\u0153", Scaron: "\u0160", scaron: "\u0161", Yuml: "\u0178", fnof: "\u0192", circ: "\u02C6", tilde: "\u02DC", Alpha: "\u0391", Beta: "\u0392", Gamma: "\u0393", Delta: "\u0394", Epsilon: "\u0395", Zeta: "\u0396", Eta: "\u0397", Theta: "\u0398", Iota: "\u0399", Kappa: "\u039A", Lambda: "\u039B", Mu: "\u039C", Nu: "\u039D", Xi: "\u039E", Omicron: "\u039F", Pi: "\u03A0", Rho: "\u03A1", Sigma: "\u03A3", Tau: "\u03A4", Upsilon: "\u03A5", Phi: "\u03A6", Chi: "\u03A7", Psi: "\u03A8", Omega: "\u03A9", alpha: "\u03B1", beta: "\u03B2", gamma: "\u03B3", delta: "\u03B4", epsilon: "\u03B5", zeta: "\u03B6", eta: "\u03B7", theta: "\u03B8", iota: "\u03B9", kappa: "\u03BA", lambda: "\u03BB", mu: "\u03BC", nu: "\u03BD", xi: "\u03BE", omicron: "\u03BF", pi: "\u03C0", rho: "\u03C1", sigmaf: "\u03C2", sigma: "\u03C3", tau: "\u03C4", upsilon: "\u03C5", phi: "\u03C6", chi: "\u03C7", psi: "\u03C8", omega: "\u03C9", thetasym: "\u03D1", upsih: "\u03D2", piv: "\u03D6", ensp: "\u2002", emsp: "\u2003", thinsp: "\u2009", zwnj: "\u200C", zwj: "\u200D", lrm: "\u200E", rlm: "\u200F", ndash: "\u2013", mdash: "\u2014", lsquo: "\u2018", rsquo: "\u2019", sbquo: "\u201A", ldquo: "\u201C", rdquo: "\u201D", bdquo: "\u201E", dagger: "\u2020", Dagger: "\u2021", bull: "\u2022", hellip: "\u2026", permil: "\u2030", prime: "\u2032", Prime: "\u2033", lsaquo: "\u2039", rsaquo: "\u203A", oline: "\u203E", frasl: "\u2044", euro: "\u20AC", image: "\u2111", weierp: "\u2118", real: "\u211C", trade: "\u2122", alefsym: "\u2135", larr: "\u2190", uarr: "\u2191", rarr: "\u2192", darr: "\u2193", harr: "\u2194", crarr: "\u21B5", lArr: "\u21D0", uArr: "\u21D1", rArr: "\u21D2", dArr: "\u21D3", hArr: "\u21D4", forall: "\u2200", part: "\u2202", exist: "\u2203", empty: "\u2205", nabla: "\u2207", isin: "\u2208", notin: "\u2209", ni: "\u220B", prod: "\u220F", sum: "\u2211", minus: "\u2212", lowast: "\u2217", radic: "\u221A", prop: "\u221D", infin: "\u221E", ang: "\u2220", and: "\u2227", or: "\u2228", cap: "\u2229", cup: "\u222A", int: "\u222B", there4: "\u2234", sim: "\u223C", cong: "\u2245", asymp: "\u2248", ne: "\u2260", equiv: "\u2261", le: "\u2264", ge: "\u2265", sub: "\u2282", sup: "\u2283", nsub: "\u2284", sube: "\u2286", supe: "\u2287", oplus: "\u2295", otimes: "\u2297", perp: "\u22A5", sdot: "\u22C5", lceil: "\u2308", rceil: "\u2309", lfloor: "\u230A", rfloor: "\u230B", lang: "\u2329", rang: "\u232A", loz: "\u25CA", spades: "\u2660", clubs: "\u2663", hearts: "\u2665", diams: "\u2666" }, ke = G(Kn || (Kn = st(["jsx"])))((t) => ({ AttributeIsEmpty: t("JSX attributes must only be assigned a non-empty expression."), MissingClosingTagElement: t((e) => {
          let { openingTagName: s } = e;
          return "Expected corresponding JSX closing tag for <".concat(s, ">.");
        }), MissingClosingTagFragment: t("Expected corresponding JSX closing tag for <>."), UnexpectedSequenceExpression: t("Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?"), UnexpectedToken: t((e) => {
          let { unexpected: s, HTMLEntity: r } = e;
          return "Unexpected token `".concat(s, "`. Did you mean `").concat(r, "` or `{'").concat(s, "'}`?");
        }), UnsupportedJsxValue: t("JSX value should be either an expression or a quoted JSX text."), UnterminatedJsxContent: t("Unterminated JSX contents."), UnwrappedAdjacentJSXElements: t("Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?") }));
        function ve(t) {
          return t ? t.type === "JSXOpeningFragment" || t.type === "JSXClosingFragment" : false;
        }
        function _e(t) {
          if (t.type === "JSXIdentifier")
            return t.name;
          if (t.type === "JSXNamespacedName")
            return t.namespace.name + ":" + t.name.name;
          if (t.type === "JSXMemberExpression")
            return _e(t.object) + "." + _e(t.property);
          throw new Error("Node had unexpected type: " + t.type);
        }
        var kh = (t) => class extends t {
          jsxReadToken() {
            let e = "", s = this.state.pos;
            for (; ; ) {
              if (this.state.pos >= this.length)
                throw this.raise(ke.UnterminatedJsxContent, { at: this.state.startLoc });
              let r = this.input.charCodeAt(this.state.pos);
              switch (r) {
                case 60:
                case 123:
                  return this.state.pos === this.state.start ? r === 60 && this.state.canStartJSXElement ? (++this.state.pos, this.finishToken(138)) : super.getTokenFromCode(r) : (e += this.input.slice(s, this.state.pos), this.finishToken(137, e));
                case 38:
                  e += this.input.slice(s, this.state.pos), e += this.jsxReadEntity(), s = this.state.pos;
                  break;
                case 62:
                case 125:
                default:
                  Ie(r) ? (e += this.input.slice(s, this.state.pos), e += this.jsxReadNewLine(true), s = this.state.pos) : ++this.state.pos;
              }
            }
          }
          jsxReadNewLine(e) {
            let s = this.input.charCodeAt(this.state.pos), r;
            return ++this.state.pos, s === 13 && this.input.charCodeAt(this.state.pos) === 10 ? (++this.state.pos, r = e ? `
` : `\r
`) : r = String.fromCharCode(s), ++this.state.curLine, this.state.lineStart = this.state.pos, r;
          }
          jsxReadString(e) {
            let s = "", r = ++this.state.pos;
            for (; ; ) {
              if (this.state.pos >= this.length)
                throw this.raise(u.UnterminatedString, { at: this.state.startLoc });
              let i = this.input.charCodeAt(this.state.pos);
              if (i === e)
                break;
              i === 38 ? (s += this.input.slice(r, this.state.pos), s += this.jsxReadEntity(), r = this.state.pos) : Ie(i) ? (s += this.input.slice(r, this.state.pos), s += this.jsxReadNewLine(false), r = this.state.pos) : ++this.state.pos;
            }
            return s += this.input.slice(r, this.state.pos++), this.finishToken(129, s);
          }
          jsxReadEntity() {
            let e = ++this.state.pos;
            if (this.codePointAtPos(this.state.pos) === 35) {
              ++this.state.pos;
              let s = 10;
              this.codePointAtPos(this.state.pos) === 120 && (s = 16, ++this.state.pos);
              let r = this.readInt(s, void 0, false, "bail");
              if (r !== null && this.codePointAtPos(this.state.pos) === 59)
                return ++this.state.pos, String.fromCodePoint(r);
            } else {
              let s = 0, r = false;
              for (; s++ < 10 && this.state.pos < this.length && !(r = this.codePointAtPos(this.state.pos) == 59); )
                ++this.state.pos;
              if (r) {
                let i = this.input.slice(e, this.state.pos), a = Ih[i];
                if (++this.state.pos, a)
                  return a;
              }
            }
            return this.state.pos = e, "&";
          }
          jsxReadWord() {
            let e, s = this.state.pos;
            do
              e = this.input.charCodeAt(++this.state.pos);
            while (Me(e) || e === 45);
            return this.finishToken(136, this.input.slice(s, this.state.pos));
          }
          jsxParseIdentifier() {
            let e = this.startNode();
            return this.match(136) ? e.name = this.state.value : Vt(this.state.type) ? e.name = Te(this.state.type) : this.unexpected(), this.next(), this.finishNode(e, "JSXIdentifier");
          }
          jsxParseNamespacedName() {
            let e = this.state.start, s = this.state.startLoc, r = this.jsxParseIdentifier();
            if (!this.eat(14))
              return r;
            let i = this.startNodeAt(e, s);
            return i.namespace = r, i.name = this.jsxParseIdentifier(), this.finishNode(i, "JSXNamespacedName");
          }
          jsxParseElementName() {
            let e = this.state.start, s = this.state.startLoc, r = this.jsxParseNamespacedName();
            if (r.type === "JSXNamespacedName")
              return r;
            for (; this.eat(16); ) {
              let i = this.startNodeAt(e, s);
              i.object = r, i.property = this.jsxParseIdentifier(), r = this.finishNode(i, "JSXMemberExpression");
            }
            return r;
          }
          jsxParseAttributeValue() {
            let e;
            switch (this.state.type) {
              case 5:
                return e = this.startNode(), this.setContext(z.brace), this.next(), e = this.jsxParseExpressionContainer(e, z.j_oTag), e.expression.type === "JSXEmptyExpression" && this.raise(ke.AttributeIsEmpty, { at: e }), e;
              case 138:
              case 129:
                return this.parseExprAtom();
              default:
                throw this.raise(ke.UnsupportedJsxValue, { at: this.state.startLoc });
            }
          }
          jsxParseEmptyExpression() {
            let e = this.startNodeAt(this.state.lastTokEndLoc.index, this.state.lastTokEndLoc);
            return this.finishNodeAt(e, "JSXEmptyExpression", this.state.startLoc);
          }
          jsxParseSpreadChild(e) {
            return this.next(), e.expression = this.parseExpression(), this.setContext(z.j_oTag), this.expect(8), this.finishNode(e, "JSXSpreadChild");
          }
          jsxParseExpressionContainer(e, s) {
            if (this.match(8))
              e.expression = this.jsxParseEmptyExpression();
            else {
              let r = this.parseExpression();
              e.expression = r;
            }
            return this.setContext(s), this.expect(8), this.finishNode(e, "JSXExpressionContainer");
          }
          jsxParseAttribute() {
            let e = this.startNode();
            return this.match(5) ? (this.setContext(z.brace), this.next(), this.expect(21), e.argument = this.parseMaybeAssignAllowIn(), this.setContext(z.j_oTag), this.expect(8), this.finishNode(e, "JSXSpreadAttribute")) : (e.name = this.jsxParseNamespacedName(), e.value = this.eat(29) ? this.jsxParseAttributeValue() : null, this.finishNode(e, "JSXAttribute"));
          }
          jsxParseOpeningElementAt(e, s) {
            let r = this.startNodeAt(e, s);
            return this.match(139) ? (this.expect(139), this.finishNode(r, "JSXOpeningFragment")) : (r.name = this.jsxParseElementName(), this.jsxParseOpeningElementAfterName(r));
          }
          jsxParseOpeningElementAfterName(e) {
            let s = [];
            for (; !this.match(56) && !this.match(139); )
              s.push(this.jsxParseAttribute());
            return e.attributes = s, e.selfClosing = this.eat(56), this.expect(139), this.finishNode(e, "JSXOpeningElement");
          }
          jsxParseClosingElementAt(e, s) {
            let r = this.startNodeAt(e, s);
            return this.match(139) ? (this.expect(139), this.finishNode(r, "JSXClosingFragment")) : (r.name = this.jsxParseElementName(), this.expect(139), this.finishNode(r, "JSXClosingElement"));
          }
          jsxParseElementAt(e, s) {
            let r = this.startNodeAt(e, s), i = [], a = this.jsxParseOpeningElementAt(e, s), n = null;
            if (!a.selfClosing) {
              e:
                for (; ; )
                  switch (this.state.type) {
                    case 138:
                      if (e = this.state.start, s = this.state.startLoc, this.next(), this.eat(56)) {
                        n = this.jsxParseClosingElementAt(e, s);
                        break e;
                      }
                      i.push(this.jsxParseElementAt(e, s));
                      break;
                    case 137:
                      i.push(this.parseExprAtom());
                      break;
                    case 5: {
                      let o = this.startNode();
                      this.setContext(z.brace), this.next(), this.match(21) ? i.push(this.jsxParseSpreadChild(o)) : i.push(this.jsxParseExpressionContainer(o, z.j_expr));
                      break;
                    }
                    default:
                      throw this.unexpected();
                  }
              ve(a) && !ve(n) && n !== null ? this.raise(ke.MissingClosingTagFragment, { at: n }) : !ve(a) && ve(n) ? this.raise(ke.MissingClosingTagElement, { at: n, openingTagName: _e(a.name) }) : !ve(a) && !ve(n) && _e(n.name) !== _e(a.name) && this.raise(ke.MissingClosingTagElement, { at: n, openingTagName: _e(a.name) });
            }
            if (ve(a) ? (r.openingFragment = a, r.closingFragment = n) : (r.openingElement = a, r.closingElement = n), r.children = i, this.match(47))
              throw this.raise(ke.UnwrappedAdjacentJSXElements, { at: this.state.startLoc });
            return ve(a) ? this.finishNode(r, "JSXFragment") : this.finishNode(r, "JSXElement");
          }
          jsxParseElement() {
            let e = this.state.start, s = this.state.startLoc;
            return this.next(), this.jsxParseElementAt(e, s);
          }
          setContext(e) {
            let { context: s } = this.state;
            s[s.length - 1] = e;
          }
          parseExprAtom(e) {
            return this.match(137) ? this.parseLiteral(this.state.value, "JSXText") : this.match(138) ? this.jsxParseElement() : this.match(47) && this.input.charCodeAt(this.state.pos) !== 33 ? (this.replaceToken(138), this.jsxParseElement()) : super.parseExprAtom(e);
          }
          skipSpace() {
            this.curContext().preserveSpace || super.skipSpace();
          }
          getTokenFromCode(e) {
            let s = this.curContext();
            if (s === z.j_expr)
              return this.jsxReadToken();
            if (s === z.j_oTag || s === z.j_cTag) {
              if (de(e))
                return this.jsxReadWord();
              if (e === 62)
                return ++this.state.pos, this.finishToken(139);
              if ((e === 34 || e === 39) && s === z.j_oTag)
                return this.jsxReadString(e);
            }
            return e === 60 && this.state.canStartJSXElement && this.input.charCodeAt(this.state.pos + 1) !== 33 ? (++this.state.pos, this.finishToken(138)) : super.getTokenFromCode(e);
          }
          updateContext(e) {
            let { context: s, type: r } = this.state;
            if (r === 56 && e === 138)
              s.splice(-2, 2, z.j_cTag), this.state.canStartJSXElement = false;
            else if (r === 138)
              s.push(z.j_oTag);
            else if (r === 139) {
              let i = s[s.length - 1];
              i === z.j_oTag && e === 56 || i === z.j_cTag ? (s.pop(), this.state.canStartJSXElement = s[s.length - 1] === z.j_expr) : (this.setContext(z.j_expr), this.state.canStartJSXElement = true);
            } else
              this.state.canStartJSXElement = vo(r);
          }
        }, Dh = class extends ns {
          constructor() {
            super(...arguments);
            this.types = /* @__PURE__ */ new Set(), this.enums = /* @__PURE__ */ new Set(), this.constEnums = /* @__PURE__ */ new Set(), this.classes = /* @__PURE__ */ new Set(), this.exportOnlyBindings = /* @__PURE__ */ new Set();
          }
        }, Fh = class extends os {
          createScope(t) {
            return new Dh(t);
          }
          declareName(t, e, s) {
            let r = this.currentScope();
            if (e & Qt) {
              this.maybeExportDefined(r, t), r.exportOnlyBindings.add(t);
              return;
            }
            super.declareName(...arguments), e & je && (e & ye || (this.checkRedeclarationInScope(r, t, e, s), this.maybeExportDefined(r, t)), r.types.add(t)), e & Yt && r.enums.add(t), e & $t && r.constEnums.add(t), e & ct && r.classes.add(t);
          }
          isRedeclaredInScope(t, e, s) {
            if (t.enums.has(e)) {
              if (s & Yt) {
                let r = !!(s & $t), i = t.constEnums.has(e);
                return r !== i;
              }
              return true;
            }
            return s & ct && t.classes.has(e) ? t.lexical.has(e) ? !!(s & ye) : false : s & je && t.types.has(e) ? true : super.isRedeclaredInScope(...arguments);
          }
          checkLocalExport(t) {
            let e = this.scopeStack[0], { name: s } = t;
            !e.types.has(s) && !e.exportOnlyBindings.has(s) && super.checkLocalExport(t);
          }
        }, Lh = (t, e) => Object.hasOwnProperty.call(t, e) && t[e];
        function Oh(t) {
          if (t == null)
            throw new Error("Unexpected ".concat(t, " value."));
          return t;
        }
        function Mr(t) {
          if (!t)
            throw new Error("Assert fail");
        }
        var k = G(Vn || (Vn = st(["typescript"])))((t) => ({ AbstractMethodHasImplementation: t((e) => {
          let { methodName: s } = e;
          return "Method '".concat(s, "' cannot have an implementation because it is marked abstract.");
        }), AbstractPropertyHasInitializer: t((e) => {
          let { propertyName: s } = e;
          return "Property '".concat(s, "' cannot have an initializer because it is marked abstract.");
        }), AccesorCannotDeclareThisParameter: t("'get' and 'set' accessors cannot declare 'this' parameters."), AccesorCannotHaveTypeParameters: t("An accessor cannot have type parameters."), CannotFindName: t((e) => {
          let { name: s } = e;
          return "Cannot find name '".concat(s, "'.");
        }), ClassMethodHasDeclare: t("Class methods cannot have the 'declare' modifier."), ClassMethodHasReadonly: t("Class methods cannot have the 'readonly' modifier."), ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference: t("A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference."), ConstructorHasTypeParameters: t("Type parameters cannot appear on a constructor declaration."), DeclareAccessor: t((e) => {
          let { kind: s } = e;
          return "'declare' is not allowed in ".concat(s, "ters.");
        }), DeclareClassFieldHasInitializer: t("Initializers are not allowed in ambient contexts."), DeclareFunctionHasImplementation: t("An implementation cannot be declared in ambient contexts."), DuplicateAccessibilityModifier: t((e) => {
          return "Accessibility modifier already seen.";
        }), DuplicateModifier: t((e) => {
          let { modifier: s } = e;
          return "Duplicate modifier: '".concat(s, "'.");
        }), EmptyHeritageClauseType: t((e) => {
          let { token: s } = e;
          return "'".concat(s, "' list cannot be empty.");
        }), EmptyTypeArguments: t("Type argument list cannot be empty."), EmptyTypeParameters: t("Type parameter list cannot be empty."), ExpectedAmbientAfterExportDeclare: t("'export declare' must be followed by an ambient declaration."), ImportAliasHasImportType: t("An import alias can not use 'import type'."), IncompatibleModifiers: t((e) => {
          let { modifiers: s } = e;
          return "'".concat(s[0], "' modifier cannot be used with '").concat(s[1], "' modifier.");
        }), IndexSignatureHasAbstract: t("Index signatures cannot have the 'abstract' modifier."), IndexSignatureHasAccessibility: t((e) => {
          let { modifier: s } = e;
          return "Index signatures cannot have an accessibility modifier ('".concat(s, "').");
        }), IndexSignatureHasDeclare: t("Index signatures cannot have the 'declare' modifier."), IndexSignatureHasOverride: t("'override' modifier cannot appear on an index signature."), IndexSignatureHasStatic: t("Index signatures cannot have the 'static' modifier."), InitializerNotAllowedInAmbientContext: t("Initializers are not allowed in ambient contexts."), InvalidModifierOnTypeMember: t((e) => {
          let { modifier: s } = e;
          return "'".concat(s, "' modifier cannot appear on a type member.");
        }), InvalidModifiersOrder: t((e) => {
          let { orderedModifiers: s } = e;
          return "'".concat(s[0], "' modifier must precede '").concat(s[1], "' modifier.");
        }), InvalidTupleMemberLabel: t("Tuple members must be labeled with a simple identifier."), MissingInterfaceName: t("'interface' declarations must be followed by an identifier."), MixedLabeledAndUnlabeledElements: t("Tuple members must all have names or all not have names."), NonAbstractClassHasAbstractMethod: t("Abstract methods can only appear within an abstract class."), NonClassMethodPropertyHasAbstractModifer: t("'abstract' modifier can only appear on a class, method, or property declaration."), OptionalTypeBeforeRequired: t("A required element cannot follow an optional element."), OverrideNotInSubClass: t("This member cannot have an 'override' modifier because its containing class does not extend another class."), PatternIsOptional: t("A binding pattern parameter cannot be optional in an implementation signature."), PrivateElementHasAbstract: t("Private elements cannot have the 'abstract' modifier."), PrivateElementHasAccessibility: t((e) => {
          let { modifier: s } = e;
          return "Private elements cannot have an accessibility modifier ('".concat(s, "').");
        }), ReadonlyForMethodSignature: t("'readonly' modifier can only appear on a property declaration or index signature."), ReservedArrowTypeParam: t("This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`."), ReservedTypeAssertion: t("This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead."), SetAccesorCannotHaveOptionalParameter: t("A 'set' accessor cannot have an optional parameter."), SetAccesorCannotHaveRestParameter: t("A 'set' accessor cannot have rest parameter."), SetAccesorCannotHaveReturnType: t("A 'set' accessor cannot have a return type annotation."), SingleTypeParameterWithoutTrailingComma: t((e) => {
          let { typeParameterName: s } = e;
          return "Single type parameter ".concat(s, " should have a trailing comma. Example usage: <").concat(s, ",>.");
        }), StaticBlockCannotHaveModifier: t("Static class blocks cannot have any modifier."), TypeAnnotationAfterAssign: t("Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`."), TypeImportCannotSpecifyDefaultAndNamed: t("A type-only import can specify a default import or named bindings, but not both."), TypeModifierIsUsedInTypeExports: t("The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement."), TypeModifierIsUsedInTypeImports: t("The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement."), UnexpectedParameterModifier: t("A parameter property is only allowed in a constructor implementation."), UnexpectedReadonly: t("'readonly' type modifier is only permitted on array and tuple literal types."), UnexpectedTypeAnnotation: t("Did not expect a type annotation here."), UnexpectedTypeCastInParameter: t("Unexpected type cast in parameter position."), UnsupportedImportTypeArgument: t("Argument in a type import must be a string literal."), UnsupportedParameterPropertyKind: t("A parameter property may not be declared using a binding pattern."), UnsupportedSignatureParameterKind: t((e) => {
          let { type: s } = e;
          return "Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got ".concat(s, ".");
        }) }));
        function Bh(t) {
          switch (t) {
            case "any":
              return "TSAnyKeyword";
            case "boolean":
              return "TSBooleanKeyword";
            case "bigint":
              return "TSBigIntKeyword";
            case "never":
              return "TSNeverKeyword";
            case "number":
              return "TSNumberKeyword";
            case "object":
              return "TSObjectKeyword";
            case "string":
              return "TSStringKeyword";
            case "symbol":
              return "TSSymbolKeyword";
            case "undefined":
              return "TSUndefinedKeyword";
            case "unknown":
              return "TSUnknownKeyword";
            default:
              return;
          }
        }
        function Rr(t) {
          return t === "private" || t === "public" || t === "protected";
        }
        var Mh = (t) => class extends t {
          getScopeHandler() {
            return Fh;
          }
          tsIsIdentifier() {
            return K(this.state.type);
          }
          tsTokenCanFollowModifier() {
            return (this.match(0) || this.match(5) || this.match(55) || this.match(21) || this.match(134) || this.isLiteralPropertyName()) && !this.hasPrecedingLineBreak();
          }
          tsNextTokenCanFollowModifier() {
            return this.next(), this.tsTokenCanFollowModifier();
          }
          tsParseModifier(e, s) {
            if (!K(this.state.type))
              return;
            let r = this.state.value;
            if (e.indexOf(r) !== -1) {
              if (s && this.tsIsStartOfStaticBlocks())
                return;
              if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this)))
                return r;
            }
          }
          tsParseModifiers(e) {
            let { modified: s, allowedModifiers: r, disallowedModifiers: i, stopOnStartOfClassStaticBlock: a } = e, n = (c, f, y, C) => {
              f === y && s[C] && this.raise(k.InvalidModifiersOrder, { at: c, orderedModifiers: [y, C] });
            }, o = (c, f, y, C) => {
              (s[y] && f === C || s[C] && f === y) && this.raise(k.IncompatibleModifiers, { at: c, modifiers: [y, C] });
            };
            for (; ; ) {
              let { startLoc: c } = this.state, f = this.tsParseModifier(r.concat(i != null ? i : []), a);
              if (!f)
                break;
              Rr(f) ? s.accessibility ? this.raise(k.DuplicateAccessibilityModifier, { at: c, modifier: f }) : (n(c, f, f, "override"), n(c, f, f, "static"), n(c, f, f, "readonly"), s.accessibility = f) : (Object.hasOwnProperty.call(s, f) ? this.raise(k.DuplicateModifier, { at: c, modifier: f }) : (n(c, f, "static", "readonly"), n(c, f, "static", "override"), n(c, f, "override", "readonly"), n(c, f, "abstract", "override"), o(c, f, "declare", "override"), o(c, f, "static", "abstract")), s[f] = true), i != null && i.includes(f) && this.raise(k.InvalidModifierOnTypeMember, { at: c, modifier: f });
            }
          }
          tsIsListTerminator(e) {
            switch (e) {
              case "EnumMembers":
              case "TypeMembers":
                return this.match(8);
              case "HeritageClauseElement":
                return this.match(5);
              case "TupleElementTypes":
                return this.match(3);
              case "TypeParametersOrArguments":
                return this.match(48);
            }
            throw new Error("Unreachable");
          }
          tsParseList(e, s) {
            let r = [];
            for (; !this.tsIsListTerminator(e); )
              r.push(s());
            return r;
          }
          tsParseDelimitedList(e, s, r) {
            return Oh(this.tsParseDelimitedListWorker(e, s, true, r));
          }
          tsParseDelimitedListWorker(e, s, r, i) {
            let a = [], n = -1;
            for (; !this.tsIsListTerminator(e); ) {
              n = -1;
              let o = s();
              if (o == null)
                return;
              if (a.push(o), this.eat(12)) {
                n = this.state.lastTokStart;
                continue;
              }
              if (this.tsIsListTerminator(e))
                break;
              r && this.expect(12);
              return;
            }
            return i && (i.value = n), a;
          }
          tsParseBracketedList(e, s, r, i, a) {
            i || (r ? this.expect(0) : this.expect(47));
            let n = this.tsParseDelimitedList(e, s, a);
            return r ? this.expect(3) : this.expect(48), n;
          }
          tsParseImportType() {
            let e = this.startNode();
            return this.expect(83), this.expect(10), this.match(129) || this.raise(k.UnsupportedImportTypeArgument, { at: this.state.startLoc }), e.argument = this.parseExprAtom(), this.expect(11), this.eat(16) && (e.qualifier = this.tsParseEntityName()), this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSImportType");
          }
          tsParseEntityName() {
            let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, s = this.parseIdentifier(e);
            for (; this.eat(16); ) {
              let r = this.startNodeAtNode(s);
              r.left = s, r.right = this.parseIdentifier(e), s = this.finishNode(r, "TSQualifiedName");
            }
            return s;
          }
          tsParseTypeReference() {
            let e = this.startNode();
            return e.typeName = this.tsParseEntityName(), !this.hasPrecedingLineBreak() && this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSTypeReference");
          }
          tsParseThisTypePredicate(e) {
            this.next();
            let s = this.startNodeAtNode(e);
            return s.parameterName = e, s.typeAnnotation = this.tsParseTypeAnnotation(false), s.asserts = false, this.finishNode(s, "TSTypePredicate");
          }
          tsParseThisTypeNode() {
            let e = this.startNode();
            return this.next(), this.finishNode(e, "TSThisType");
          }
          tsParseTypeQuery() {
            let e = this.startNode();
            return this.expect(87), this.match(83) ? e.exprName = this.tsParseImportType() : e.exprName = this.tsParseEntityName(), this.finishNode(e, "TSTypeQuery");
          }
          tsParseTypeParameter() {
            let e = this.startNode();
            return e.name = this.tsParseTypeParameterName(), e.constraint = this.tsEatThenParseType(81), e.default = this.tsEatThenParseType(29), this.finishNode(e, "TSTypeParameter");
          }
          tsTryParseTypeParameters() {
            if (this.match(47))
              return this.tsParseTypeParameters();
          }
          tsParseTypeParameters() {
            let e = this.startNode();
            this.match(47) || this.match(138) ? this.next() : this.unexpected();
            let s = { value: -1 };
            return e.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this), false, true, s), e.params.length === 0 && this.raise(k.EmptyTypeParameters, { at: e }), s.value !== -1 && this.addExtra(e, "trailingComma", s.value), this.finishNode(e, "TSTypeParameterDeclaration");
          }
          tsTryNextParseConstantContext() {
            if (this.lookahead().type !== 75)
              return null;
            this.next();
            let e = this.tsParseTypeReference();
            return e.typeParameters && this.raise(k.CannotFindName, { at: e.typeName, name: "const" }), e;
          }
          tsFillSignature(e, s) {
            let r = e === 19, i = "parameters", a = "typeAnnotation";
            s.typeParameters = this.tsTryParseTypeParameters(), this.expect(10), s[i] = this.tsParseBindingListForSignature(), r ? s[a] = this.tsParseTypeOrTypePredicateAnnotation(e) : this.match(e) && (s[a] = this.tsParseTypeOrTypePredicateAnnotation(e));
          }
          tsParseBindingListForSignature() {
            return this.parseBindingList(11, 41).map((e) => (e.type !== "Identifier" && e.type !== "RestElement" && e.type !== "ObjectPattern" && e.type !== "ArrayPattern" && this.raise(k.UnsupportedSignatureParameterKind, { at: e, type: e.type }), e));
          }
          tsParseTypeMemberSemicolon() {
            !this.eat(12) && !this.isLineTerminator() && this.expect(13);
          }
          tsParseSignatureMember(e, s) {
            return this.tsFillSignature(14, s), this.tsParseTypeMemberSemicolon(), this.finishNode(s, e);
          }
          tsIsUnambiguouslyIndexSignature() {
            return this.next(), K(this.state.type) ? (this.next(), this.match(14)) : false;
          }
          tsTryParseIndexSignature(e) {
            if (!(this.match(0) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))))
              return;
            this.expect(0);
            let s = this.parseIdentifier();
            s.typeAnnotation = this.tsParseTypeAnnotation(), this.resetEndLocation(s), this.expect(3), e.parameters = [s];
            let r = this.tsTryParseTypeAnnotation();
            return r && (e.typeAnnotation = r), this.tsParseTypeMemberSemicolon(), this.finishNode(e, "TSIndexSignature");
          }
          tsParsePropertyOrMethodSignature(e, s) {
            this.eat(17) && (e.optional = true);
            let r = e;
            if (this.match(10) || this.match(47)) {
              s && this.raise(k.ReadonlyForMethodSignature, { at: e });
              let i = r;
              i.kind && this.match(47) && this.raise(k.AccesorCannotHaveTypeParameters, { at: this.state.curPosition() }), this.tsFillSignature(14, i), this.tsParseTypeMemberSemicolon();
              let a = "parameters", n = "typeAnnotation";
              if (i.kind === "get")
                i[a].length > 0 && (this.raise(u.BadGetterArity, { at: this.state.curPosition() }), this.isThisParam(i[a][0]) && this.raise(k.AccesorCannotDeclareThisParameter, { at: this.state.curPosition() }));
              else if (i.kind === "set") {
                if (i[a].length !== 1)
                  this.raise(u.BadSetterArity, { at: this.state.curPosition() });
                else {
                  let o = i[a][0];
                  this.isThisParam(o) && this.raise(k.AccesorCannotDeclareThisParameter, { at: this.state.curPosition() }), o.type === "Identifier" && o.optional && this.raise(k.SetAccesorCannotHaveOptionalParameter, { at: this.state.curPosition() }), o.type === "RestElement" && this.raise(k.SetAccesorCannotHaveRestParameter, { at: this.state.curPosition() });
                }
                i[n] && this.raise(k.SetAccesorCannotHaveReturnType, { at: i[n] });
              } else
                i.kind = "method";
              return this.finishNode(i, "TSMethodSignature");
            } else {
              let i = r;
              s && (i.readonly = true);
              let a = this.tsTryParseTypeAnnotation();
              return a && (i.typeAnnotation = a), this.tsParseTypeMemberSemicolon(), this.finishNode(i, "TSPropertySignature");
            }
          }
          tsParseTypeMember() {
            let e = this.startNode();
            if (this.match(10) || this.match(47))
              return this.tsParseSignatureMember("TSCallSignatureDeclaration", e);
            if (this.match(77)) {
              let r = this.startNode();
              return this.next(), this.match(10) || this.match(47) ? this.tsParseSignatureMember("TSConstructSignatureDeclaration", e) : (e.key = this.createIdentifier(r, "new"), this.tsParsePropertyOrMethodSignature(e, false));
            }
            this.tsParseModifiers({ modified: e, allowedModifiers: ["readonly"], disallowedModifiers: ["declare", "abstract", "private", "protected", "public", "static", "override"] });
            let s = this.tsTryParseIndexSignature(e);
            return s || (this.parsePropertyName(e), !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && this.tsTokenCanFollowModifier() && (e.kind = e.key.name, this.parsePropertyName(e)), this.tsParsePropertyOrMethodSignature(e, !!e.readonly));
          }
          tsParseTypeLiteral() {
            let e = this.startNode();
            return e.members = this.tsParseObjectTypeMembers(), this.finishNode(e, "TSTypeLiteral");
          }
          tsParseObjectTypeMembers() {
            this.expect(5);
            let e = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
            return this.expect(8), e;
          }
          tsIsStartOfMappedType() {
            return this.next(), this.eat(53) ? this.isContextual(118) : (this.isContextual(118) && this.next(), !this.match(0) || (this.next(), !this.tsIsIdentifier()) ? false : (this.next(), this.match(58)));
          }
          tsParseMappedTypeParameter() {
            let e = this.startNode();
            return e.name = this.tsParseTypeParameterName(), e.constraint = this.tsExpectThenParseType(58), this.finishNode(e, "TSTypeParameter");
          }
          tsParseMappedType() {
            let e = this.startNode();
            return this.expect(5), this.match(53) ? (e.readonly = this.state.value, this.next(), this.expectContextual(118)) : this.eatContextual(118) && (e.readonly = true), this.expect(0), e.typeParameter = this.tsParseMappedTypeParameter(), e.nameType = this.eatContextual(93) ? this.tsParseType() : null, this.expect(3), this.match(53) ? (e.optional = this.state.value, this.next(), this.expect(17)) : this.eat(17) && (e.optional = true), e.typeAnnotation = this.tsTryParseType(), this.semicolon(), this.expect(8), this.finishNode(e, "TSMappedType");
          }
          tsParseTupleType() {
            let e = this.startNode();
            e.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), true, false);
            let s = false, r = null;
            return e.elementTypes.forEach((i) => {
              var a;
              let { type: n } = i;
              s && n !== "TSRestType" && n !== "TSOptionalType" && !(n === "TSNamedTupleMember" && i.optional) && this.raise(k.OptionalTypeBeforeRequired, { at: i }), s = s || n === "TSNamedTupleMember" && i.optional || n === "TSOptionalType", n === "TSRestType" && (i = i.typeAnnotation, n = i.type);
              let o = n === "TSNamedTupleMember";
              r = (a = r) != null ? a : o, r !== o && this.raise(k.MixedLabeledAndUnlabeledElements, { at: i });
            }), this.finishNode(e, "TSTupleType");
          }
          tsParseTupleElementType() {
            let { start: e, startLoc: s } = this.state, r = this.eat(21), i = this.tsParseType(), a = this.eat(17);
            if (this.eat(14)) {
              let o = this.startNodeAtNode(i);
              o.optional = a, i.type === "TSTypeReference" && !i.typeParameters && i.typeName.type === "Identifier" ? o.label = i.typeName : (this.raise(k.InvalidTupleMemberLabel, { at: i }), o.label = i), o.elementType = this.tsParseType(), i = this.finishNode(o, "TSNamedTupleMember");
            } else if (a) {
              let o = this.startNodeAtNode(i);
              o.typeAnnotation = i, i = this.finishNode(o, "TSOptionalType");
            }
            if (r) {
              let o = this.startNodeAt(e, s);
              o.typeAnnotation = i, i = this.finishNode(o, "TSRestType");
            }
            return i;
          }
          tsParseParenthesizedType() {
            let e = this.startNode();
            return this.expect(10), e.typeAnnotation = this.tsParseType(), this.expect(11), this.finishNode(e, "TSParenthesizedType");
          }
          tsParseFunctionOrConstructorType(e, s) {
            let r = this.startNode();
            return e === "TSConstructorType" && (r.abstract = !!s, s && this.next(), this.next()), this.tsFillSignature(19, r), this.finishNode(r, e);
          }
          tsParseLiteralTypeNode() {
            let e = this.startNode();
            return e.literal = (() => {
              switch (this.state.type) {
                case 130:
                case 131:
                case 129:
                case 85:
                case 86:
                  return this.parseExprAtom();
                default:
                  throw this.unexpected();
              }
            })(), this.finishNode(e, "TSLiteralType");
          }
          tsParseTemplateLiteralType() {
            let e = this.startNode();
            return e.literal = this.parseTemplate(false), this.finishNode(e, "TSLiteralType");
          }
          parseTemplateSubstitution() {
            return this.state.inType ? this.tsParseType() : super.parseTemplateSubstitution();
          }
          tsParseThisTypeOrThisTypePredicate() {
            let e = this.tsParseThisTypeNode();
            return this.isContextual(113) && !this.hasPrecedingLineBreak() ? this.tsParseThisTypePredicate(e) : e;
          }
          tsParseNonArrayType() {
            switch (this.state.type) {
              case 129:
              case 130:
              case 131:
              case 85:
              case 86:
                return this.tsParseLiteralTypeNode();
              case 53:
                if (this.state.value === "-") {
                  let e = this.startNode(), s = this.lookahead();
                  if (s.type !== 130 && s.type !== 131)
                    throw this.unexpected();
                  return e.literal = this.parseMaybeUnary(), this.finishNode(e, "TSLiteralType");
                }
                break;
              case 78:
                return this.tsParseThisTypeOrThisTypePredicate();
              case 87:
                return this.tsParseTypeQuery();
              case 83:
                return this.tsParseImportType();
              case 5:
                return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();
              case 0:
                return this.tsParseTupleType();
              case 10:
                return this.tsParseParenthesizedType();
              case 25:
              case 24:
                return this.tsParseTemplateLiteralType();
              default: {
                let { type: e } = this.state;
                if (K(e) || e === 88 || e === 84) {
                  let s = e === 88 ? "TSVoidKeyword" : e === 84 ? "TSNullKeyword" : Bh(this.state.value);
                  if (s !== void 0 && this.lookaheadCharCode() !== 46) {
                    let r = this.startNode();
                    return this.next(), this.finishNode(r, s);
                  }
                  return this.tsParseTypeReference();
                }
              }
            }
            throw this.unexpected();
          }
          tsParseArrayTypeOrHigher() {
            let e = this.tsParseNonArrayType();
            for (; !this.hasPrecedingLineBreak() && this.eat(0); )
              if (this.match(3)) {
                let s = this.startNodeAtNode(e);
                s.elementType = e, this.expect(3), e = this.finishNode(s, "TSArrayType");
              } else {
                let s = this.startNodeAtNode(e);
                s.objectType = e, s.indexType = this.tsParseType(), this.expect(3), e = this.finishNode(s, "TSIndexedAccessType");
              }
            return e;
          }
          tsParseTypeOperator() {
            let e = this.startNode(), s = this.state.value;
            return this.next(), e.operator = s, e.typeAnnotation = this.tsParseTypeOperatorOrHigher(), s === "readonly" && this.tsCheckTypeAnnotationForReadOnly(e), this.finishNode(e, "TSTypeOperator");
          }
          tsCheckTypeAnnotationForReadOnly(e) {
            switch (e.typeAnnotation.type) {
              case "TSTupleType":
              case "TSArrayType":
                return;
              default:
                this.raise(k.UnexpectedReadonly, { at: e });
            }
          }
          tsParseInferType() {
            let e = this.startNode();
            this.expectContextual(112);
            let s = this.startNode();
            return s.name = this.tsParseTypeParameterName(), e.typeParameter = this.finishNode(s, "TSTypeParameter"), this.finishNode(e, "TSInferType");
          }
          tsParseTypeOperatorOrHigher() {
            return ko(this.state.type) && !this.state.containsEsc ? this.tsParseTypeOperator() : this.isContextual(112) ? this.tsParseInferType() : this.tsParseArrayTypeOrHigher();
          }
          tsParseUnionOrIntersectionType(e, s, r) {
            let i = this.startNode(), a = this.eat(r), n = [];
            do
              n.push(s());
            while (this.eat(r));
            return n.length === 1 && !a ? n[0] : (i.types = n, this.finishNode(i, e));
          }
          tsParseIntersectionTypeOrHigher() {
            return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), 45);
          }
          tsParseUnionTypeOrHigher() {
            return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), 43);
          }
          tsIsStartOfFunctionType() {
            return this.match(47) ? true : this.match(10) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
          }
          tsSkipParameterStart() {
            if (K(this.state.type) || this.match(78))
              return this.next(), true;
            if (this.match(5)) {
              let { errors: e } = this.state, s = e.length;
              try {
                return this.parseObjectLike(8, true), e.length === s;
              } catch {
                return false;
              }
            }
            if (this.match(0)) {
              this.next();
              let { errors: e } = this.state, s = e.length;
              try {
                return this.parseBindingList(3, 93, true), e.length === s;
              } catch {
                return false;
              }
            }
            return false;
          }
          tsIsUnambiguouslyStartOfFunctionType() {
            return this.next(), !!(this.match(11) || this.match(21) || this.tsSkipParameterStart() && (this.match(14) || this.match(12) || this.match(17) || this.match(29) || this.match(11) && (this.next(), this.match(19))));
          }
          tsParseTypeOrTypePredicateAnnotation(e) {
            return this.tsInType(() => {
              let s = this.startNode();
              this.expect(e);
              let r = this.startNode(), i = !!this.tsTryParse(this.tsParseTypePredicateAsserts.bind(this));
              if (i && this.match(78)) {
                let o = this.tsParseThisTypeOrThisTypePredicate();
                return o.type === "TSThisType" ? (r.parameterName = o, r.asserts = true, r.typeAnnotation = null, o = this.finishNode(r, "TSTypePredicate")) : (this.resetStartLocationFromNode(o, r), o.asserts = true), s.typeAnnotation = o, this.finishNode(s, "TSTypeAnnotation");
              }
              let a = this.tsIsIdentifier() && this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));
              if (!a)
                return i ? (r.parameterName = this.parseIdentifier(), r.asserts = i, r.typeAnnotation = null, s.typeAnnotation = this.finishNode(r, "TSTypePredicate"), this.finishNode(s, "TSTypeAnnotation")) : this.tsParseTypeAnnotation(false, s);
              let n = this.tsParseTypeAnnotation(false);
              return r.parameterName = a, r.typeAnnotation = n, r.asserts = i, s.typeAnnotation = this.finishNode(r, "TSTypePredicate"), this.finishNode(s, "TSTypeAnnotation");
            });
          }
          tsTryParseTypeOrTypePredicateAnnotation() {
            return this.match(14) ? this.tsParseTypeOrTypePredicateAnnotation(14) : void 0;
          }
          tsTryParseTypeAnnotation() {
            return this.match(14) ? this.tsParseTypeAnnotation() : void 0;
          }
          tsTryParseType() {
            return this.tsEatThenParseType(14);
          }
          tsParseTypePredicatePrefix() {
            let e = this.parseIdentifier();
            if (this.isContextual(113) && !this.hasPrecedingLineBreak())
              return this.next(), e;
          }
          tsParseTypePredicateAsserts() {
            if (this.state.type !== 106)
              return false;
            let e = this.state.containsEsc;
            return this.next(), !K(this.state.type) && !this.match(78) ? false : (e && this.raise(u.InvalidEscapedReservedWord, { at: this.state.lastTokStartLoc, reservedWord: "asserts" }), true);
          }
          tsParseTypeAnnotation() {
            let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.startNode();
            return this.tsInType(() => {
              e && this.expect(14), s.typeAnnotation = this.tsParseType();
            }), this.finishNode(s, "TSTypeAnnotation");
          }
          tsParseType() {
            Mr(this.state.inType);
            let e = this.tsParseNonConditionalType();
            if (this.hasPrecedingLineBreak() || !this.eat(81))
              return e;
            let s = this.startNodeAtNode(e);
            return s.checkType = e, s.extendsType = this.tsParseNonConditionalType(), this.expect(17), s.trueType = this.tsParseType(), this.expect(14), s.falseType = this.tsParseType(), this.finishNode(s, "TSConditionalType");
          }
          isAbstractConstructorSignature() {
            return this.isContextual(120) && this.lookahead().type === 77;
          }
          tsParseNonConditionalType() {
            return this.tsIsStartOfFunctionType() ? this.tsParseFunctionOrConstructorType("TSFunctionType") : this.match(77) ? this.tsParseFunctionOrConstructorType("TSConstructorType") : this.isAbstractConstructorSignature() ? this.tsParseFunctionOrConstructorType("TSConstructorType", true) : this.tsParseUnionTypeOrHigher();
          }
          tsParseTypeAssertion() {
            this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(k.ReservedTypeAssertion, { at: this.state.startLoc });
            let e = this.startNode(), s = this.tsTryNextParseConstantContext();
            return e.typeAnnotation = s || this.tsNextThenParseType(), this.expect(48), e.expression = this.parseMaybeUnary(), this.finishNode(e, "TSTypeAssertion");
          }
          tsParseHeritageClause(e) {
            let s = this.state.startLoc, r = this.tsParseDelimitedList("HeritageClauseElement", this.tsParseExpressionWithTypeArguments.bind(this));
            return r.length || this.raise(k.EmptyHeritageClauseType, { at: s, token: e }), r;
          }
          tsParseExpressionWithTypeArguments() {
            let e = this.startNode();
            return e.expression = this.tsParseEntityName(), this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSExpressionWithTypeArguments");
          }
          tsParseInterfaceDeclaration(e) {
            let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (this.hasFollowingLineBreak())
              return null;
            this.expectContextual(125), s.declare && (e.declare = true), K(this.state.type) ? (e.id = this.parseIdentifier(), this.checkIdentifier(e.id, Ko)) : (e.id = null, this.raise(k.MissingInterfaceName, { at: this.state.startLoc })), e.typeParameters = this.tsTryParseTypeParameters(), this.eat(81) && (e.extends = this.tsParseHeritageClause("extends"));
            let r = this.startNode();
            return r.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this)), e.body = this.finishNode(r, "TSInterfaceBody"), this.finishNode(e, "TSInterfaceDeclaration");
          }
          tsParseTypeAliasDeclaration(e) {
            return e.id = this.parseIdentifier(), this.checkIdentifier(e.id, Vo), e.typeParameters = this.tsTryParseTypeParameters(), e.typeAnnotation = this.tsInType(() => {
              if (this.expect(29), this.isContextual(111) && this.lookahead().type !== 16) {
                let s = this.startNode();
                return this.next(), this.finishNode(s, "TSIntrinsicKeyword");
              }
              return this.tsParseType();
            }), this.semicolon(), this.finishNode(e, "TSTypeAliasDeclaration");
          }
          tsInNoContext(e) {
            let s = this.state.context;
            this.state.context = [s[0]];
            try {
              return e();
            } finally {
              this.state.context = s;
            }
          }
          tsInType(e) {
            let s = this.state.inType;
            this.state.inType = true;
            try {
              return e();
            } finally {
              this.state.inType = s;
            }
          }
          tsEatThenParseType(e) {
            return this.match(e) ? this.tsNextThenParseType() : void 0;
          }
          tsExpectThenParseType(e) {
            return this.tsDoThenParseType(() => this.expect(e));
          }
          tsNextThenParseType() {
            return this.tsDoThenParseType(() => this.next());
          }
          tsDoThenParseType(e) {
            return this.tsInType(() => (e(), this.tsParseType()));
          }
          tsParseEnumMember() {
            let e = this.startNode();
            return e.id = this.match(129) ? this.parseExprAtom() : this.parseIdentifier(true), this.eat(29) && (e.initializer = this.parseMaybeAssignAllowIn()), this.finishNode(e, "TSEnumMember");
          }
          tsParseEnumDeclaration(e) {
            let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return s.const && (e.const = true), s.declare && (e.declare = true), this.expectContextual(122), e.id = this.parseIdentifier(), this.checkIdentifier(e.id, e.const ? Wo : br), this.expect(5), e.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(8), this.finishNode(e, "TSEnumDeclaration");
          }
          tsParseModuleBlock() {
            let e = this.startNode();
            return this.scope.enter(Re), this.expect(5), this.parseBlockOrModuleBlockBody(e.body = [], void 0, true, 8), this.scope.exit(), this.finishNode(e, "TSModuleBlock");
          }
          tsParseModuleOrNamespaceDeclaration(e) {
            let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            if (e.id = this.parseIdentifier(), s || this.checkIdentifier(e.id, Go), this.eat(16)) {
              let r = this.startNode();
              this.tsParseModuleOrNamespaceDeclaration(r, true), e.body = r;
            } else
              this.scope.enter(ht), this.prodParam.enter(qe), e.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit();
            return this.finishNode(e, "TSModuleDeclaration");
          }
          tsParseAmbientExternalModuleDeclaration(e) {
            return this.isContextual(109) ? (e.global = true, e.id = this.parseIdentifier()) : this.match(129) ? e.id = this.parseExprAtom() : this.unexpected(), this.match(5) ? (this.scope.enter(ht), this.prodParam.enter(qe), e.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit()) : this.semicolon(), this.finishNode(e, "TSModuleDeclaration");
          }
          tsParseImportEqualsDeclaration(e, s) {
            e.isExport = s || false, e.id = this.parseIdentifier(), this.checkIdentifier(e.id, xe), this.expect(29);
            let r = this.tsParseModuleReference();
            return e.importKind === "type" && r.type !== "TSExternalModuleReference" && this.raise(k.ImportAliasHasImportType, { at: r }), e.moduleReference = r, this.semicolon(), this.finishNode(e, "TSImportEqualsDeclaration");
          }
          tsIsExternalModuleReference() {
            return this.isContextual(116) && this.lookaheadCharCode() === 40;
          }
          tsParseModuleReference() {
            return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(false);
          }
          tsParseExternalModuleReference() {
            let e = this.startNode();
            if (this.expectContextual(116), this.expect(10), !this.match(129))
              throw this.unexpected();
            return e.expression = this.parseExprAtom(), this.expect(11), this.finishNode(e, "TSExternalModuleReference");
          }
          tsLookAhead(e) {
            let s = this.state.clone(), r = e();
            return this.state = s, r;
          }
          tsTryParseAndCatch(e) {
            let s = this.tryParse((r) => e() || r());
            if (!(s.aborted || !s.node))
              return s.error && (this.state = s.failState), s.node;
          }
          tsTryParse(e) {
            let s = this.state.clone(), r = e();
            if (r !== void 0 && r !== false)
              return r;
            this.state = s;
          }
          tsTryParseDeclare(e) {
            if (this.isLineTerminator())
              return;
            let s = this.state.type, r;
            return this.isContextual(99) && (s = 74, r = "let"), this.tsInAmbientContext(() => {
              if (s === 68)
                return e.declare = true, this.parseFunctionStatement(e, false, true);
              if (s === 80)
                return e.declare = true, this.parseClass(e, true, false);
              if (s === 122)
                return this.tsParseEnumDeclaration(e, { declare: true });
              if (s === 109)
                return this.tsParseAmbientExternalModuleDeclaration(e);
              if (s === 75 || s === 74)
                return !this.match(75) || !this.isLookaheadContextual("enum") ? (e.declare = true, this.parseVarStatement(e, r || this.state.value, true)) : (this.expect(75), this.tsParseEnumDeclaration(e, { const: true, declare: true }));
              if (s === 125) {
                let i = this.tsParseInterfaceDeclaration(e, { declare: true });
                if (i)
                  return i;
              }
              if (K(s))
                return this.tsParseDeclaration(e, this.state.value, true);
            });
          }
          tsTryParseExportDeclaration() {
            return this.tsParseDeclaration(this.startNode(), this.state.value, true);
          }
          tsParseExpressionStatement(e, s) {
            switch (s.name) {
              case "declare": {
                let r = this.tsTryParseDeclare(e);
                if (r)
                  return r.declare = true, r;
                break;
              }
              case "global":
                if (this.match(5)) {
                  this.scope.enter(ht), this.prodParam.enter(qe);
                  let r = e;
                  return r.global = true, r.id = s, r.body = this.tsParseModuleBlock(), this.scope.exit(), this.prodParam.exit(), this.finishNode(r, "TSModuleDeclaration");
                }
                break;
              default:
                return this.tsParseDeclaration(e, s.name, false);
            }
          }
          tsParseDeclaration(e, s, r) {
            switch (s) {
              case "abstract":
                if (this.tsCheckLineTerminator(r) && (this.match(80) || K(this.state.type)))
                  return this.tsParseAbstractDeclaration(e);
                break;
              case "module":
                if (this.tsCheckLineTerminator(r)) {
                  if (this.match(129))
                    return this.tsParseAmbientExternalModuleDeclaration(e);
                  if (K(this.state.type))
                    return this.tsParseModuleOrNamespaceDeclaration(e);
                }
                break;
              case "namespace":
                if (this.tsCheckLineTerminator(r) && K(this.state.type))
                  return this.tsParseModuleOrNamespaceDeclaration(e);
                break;
              case "type":
                if (this.tsCheckLineTerminator(r) && K(this.state.type))
                  return this.tsParseTypeAliasDeclaration(e);
                break;
            }
          }
          tsCheckLineTerminator(e) {
            return e ? this.hasFollowingLineBreak() ? false : (this.next(), true) : !this.isLineTerminator();
          }
          tsTryParseGenericAsyncArrowFunction(e, s) {
            if (!this.match(47))
              return;
            let r = this.state.maybeInArrowParameters;
            this.state.maybeInArrowParameters = true;
            let i = this.tsTryParseAndCatch(() => {
              let a = this.startNodeAt(e, s);
              return a.typeParameters = this.tsParseTypeParameters(), super.parseFunctionParams(a), a.returnType = this.tsTryParseTypeOrTypePredicateAnnotation(), this.expect(19), a;
            });
            if (this.state.maybeInArrowParameters = r, !!i)
              return this.parseArrowExpression(i, null, true);
          }
          tsParseTypeArgumentsInExpression() {
            if (this.reScan_lt() === 47)
              return this.tsParseTypeArguments();
          }
          tsParseTypeArguments() {
            let e = this.startNode();
            return e.params = this.tsInType(() => this.tsInNoContext(() => (this.expect(47), this.tsParseDelimitedList("TypeParametersOrArguments", this.tsParseType.bind(this))))), e.params.length === 0 && this.raise(k.EmptyTypeArguments, { at: e }), this.expect(48), this.finishNode(e, "TSTypeParameterInstantiation");
          }
          tsIsDeclarationStart() {
            return Do(this.state.type);
          }
          isExportDefaultSpecifier() {
            return this.tsIsDeclarationStart() ? false : super.isExportDefaultSpecifier();
          }
          parseAssignableListItem(e, s) {
            let r = this.state.start, i = this.state.startLoc, a, n = false, o = false;
            if (e !== void 0) {
              let y = {};
              this.tsParseModifiers({ modified: y, allowedModifiers: ["public", "private", "protected", "override", "readonly"] }), a = y.accessibility, o = y.override, n = y.readonly, e === false && (a || n || o) && this.raise(k.UnexpectedParameterModifier, { at: i });
            }
            let c = this.parseMaybeDefault();
            this.parseAssignableListItemTypes(c);
            let f = this.parseMaybeDefault(c.start, c.loc.start, c);
            if (a || n || o) {
              let y = this.startNodeAt(r, i);
              return s.length && (y.decorators = s), a && (y.accessibility = a), n && (y.readonly = n), o && (y.override = o), f.type !== "Identifier" && f.type !== "AssignmentPattern" && this.raise(k.UnsupportedParameterPropertyKind, { at: y }), y.parameter = f, this.finishNode(y, "TSParameterProperty");
            }
            return s.length && (c.decorators = s), f;
          }
          isSimpleParameter(e) {
            return e.type === "TSParameterProperty" && super.isSimpleParameter(e.parameter) || super.isSimpleParameter(e);
          }
          parseFunctionBodyAndFinish(e, s) {
            let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
            this.match(14) && (e.returnType = this.tsParseTypeOrTypePredicateAnnotation(14));
            let i = s === "FunctionDeclaration" ? "TSDeclareFunction" : s === "ClassMethod" || s === "ClassPrivateMethod" ? "TSDeclareMethod" : void 0;
            if (i && !this.match(5) && this.isLineTerminator()) {
              this.finishNode(e, i);
              return;
            }
            if (i === "TSDeclareFunction" && this.state.isAmbientContext && (this.raise(k.DeclareFunctionHasImplementation, { at: e }), e.declare)) {
              super.parseFunctionBodyAndFinish(e, i, r);
              return;
            }
            super.parseFunctionBodyAndFinish(e, s, r);
          }
          registerFunctionStatementId(e) {
            !e.body && e.id ? this.checkIdentifier(e.id, vr) : super.registerFunctionStatementId(...arguments);
          }
          tsCheckForInvalidTypeCasts(e) {
            e.forEach((s) => {
              (s == null ? void 0 : s.type) === "TSTypeCastExpression" && this.raise(k.UnexpectedTypeAnnotation, { at: s.typeAnnotation });
            });
          }
          toReferencedList(e, s) {
            return this.tsCheckForInvalidTypeCasts(e), e;
          }
          parseArrayLike() {
            let e = super.parseArrayLike(...arguments);
            return e.type === "ArrayExpression" && this.tsCheckForInvalidTypeCasts(e.elements), e;
          }
          parseSubscript(e, s, r, i, a) {
            if (!this.hasPrecedingLineBreak() && this.match(35)) {
              this.state.canStartJSXElement = false, this.next();
              let o = this.startNodeAt(s, r);
              return o.expression = e, this.finishNode(o, "TSNonNullExpression");
            }
            let n = false;
            if (this.match(18) && this.lookaheadCharCode() === 60) {
              if (i)
                return a.stop = true, e;
              a.optionalChainMember = n = true, this.next();
            }
            if (this.match(47) || this.match(51)) {
              let o, c = this.tsTryParseAndCatch(() => {
                if (!i && this.atPossibleAsyncArrow(e)) {
                  let C = this.tsTryParseGenericAsyncArrowFunction(s, r);
                  if (C)
                    return C;
                }
                let f = this.startNodeAt(s, r);
                f.callee = e;
                let y = this.tsParseTypeArgumentsInExpression();
                if (y) {
                  if (n && !this.match(10) && (o = this.state.curPosition(), this.unexpected()), !i && this.eat(10))
                    return f.arguments = this.parseCallExpressionArguments(11, false), this.tsCheckForInvalidTypeCasts(f.arguments), f.typeParameters = y, a.optionalChainMember && (f.optional = n), this.finishCallExpression(f, a.optionalChainMember);
                  if (nt(this.state.type)) {
                    let C = this.parseTaggedTemplateExpression(e, s, r, a);
                    return C.typeParameters = y, C;
                  }
                }
                this.unexpected();
              });
              if (o && this.unexpected(o, 10), c)
                return c;
            }
            return super.parseSubscript(e, s, r, i, a);
          }
          parseNewArguments(e) {
            if (this.match(47) || this.match(51)) {
              let s = this.tsTryParseAndCatch(() => {
                let r = this.tsParseTypeArgumentsInExpression();
                return this.match(10) || this.unexpected(), r;
              });
              s && (e.typeParameters = s);
            }
            super.parseNewArguments(e);
          }
          parseExprOp(e, s, r, i) {
            if (at(58) > i && !this.hasPrecedingLineBreak() && this.isContextual(93)) {
              let a = this.startNodeAt(s, r);
              a.expression = e;
              let n = this.tsTryNextParseConstantContext();
              return n ? a.typeAnnotation = n : a.typeAnnotation = this.tsNextThenParseType(), this.finishNode(a, "TSAsExpression"), this.reScan_lt_gt(), this.parseExprOp(a, s, r, i);
            }
            return super.parseExprOp(e, s, r, i);
          }
          checkReservedWord(e, s, r, i) {
            this.state.isAmbientContext || super.checkReservedWord(e, s, r, i);
          }
          checkDuplicateExports() {
          }
          parseImport(e) {
            if (e.importKind = "value", K(this.state.type) || this.match(55) || this.match(5)) {
              let r = this.lookahead();
              if (this.isContextual(126) && r.type !== 12 && r.type !== 97 && r.type !== 29 && (e.importKind = "type", this.next(), r = this.lookahead()), K(this.state.type) && r.type === 29)
                return this.tsParseImportEqualsDeclaration(e);
            }
            let s = super.parseImport(e);
            return s.importKind === "type" && s.specifiers.length > 1 && s.specifiers[0].type === "ImportDefaultSpecifier" && this.raise(k.TypeImportCannotSpecifyDefaultAndNamed, { at: s }), s;
          }
          parseExport(e) {
            if (this.match(83))
              return this.next(), this.isContextual(126) && this.lookaheadCharCode() !== 61 ? (e.importKind = "type", this.next()) : e.importKind = "value", this.tsParseImportEqualsDeclaration(e, true);
            if (this.eat(29)) {
              let s = e;
              return s.expression = this.parseExpression(), this.semicolon(), this.finishNode(s, "TSExportAssignment");
            } else if (this.eatContextual(93)) {
              let s = e;
              return this.expectContextual(124), s.id = this.parseIdentifier(), this.semicolon(), this.finishNode(s, "TSNamespaceExportDeclaration");
            } else
              return this.isContextual(126) && this.lookahead().type === 5 ? (this.next(), e.exportKind = "type") : e.exportKind = "value", super.parseExport(e);
          }
          isAbstractClass() {
            return this.isContextual(120) && this.lookahead().type === 80;
          }
          parseExportDefaultExpression() {
            if (this.isAbstractClass()) {
              let e = this.startNode();
              return this.next(), e.abstract = true, this.parseClass(e, true, true), e;
            }
            if (this.match(125)) {
              let e = this.tsParseInterfaceDeclaration(this.startNode());
              if (e)
                return e;
            }
            return super.parseExportDefaultExpression();
          }
          parseVarStatement(e, s) {
            let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, { isAmbientContext: i } = this.state, a = super.parseVarStatement(e, s, r || i);
            if (!i)
              return a;
            for (let { id: n, init: o } of a.declarations)
              !o || (s !== "const" || !!n.typeAnnotation ? this.raise(k.InitializerNotAllowedInAmbientContext, { at: o }) : o.type !== "StringLiteral" && o.type !== "BooleanLiteral" && o.type !== "NumericLiteral" && o.type !== "BigIntLiteral" && (o.type !== "TemplateLiteral" || o.expressions.length > 0) && !Rh(o) && this.raise(k.ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference, { at: o }));
            return a;
          }
          parseStatementContent(e, s) {
            if (this.match(75) && this.isLookaheadContextual("enum")) {
              let r = this.startNode();
              return this.expect(75), this.tsParseEnumDeclaration(r, { const: true });
            }
            if (this.isContextual(122))
              return this.tsParseEnumDeclaration(this.startNode());
            if (this.isContextual(125)) {
              let r = this.tsParseInterfaceDeclaration(this.startNode());
              if (r)
                return r;
            }
            return super.parseStatementContent(e, s);
          }
          parseAccessModifier() {
            return this.tsParseModifier(["public", "protected", "private"]);
          }
          tsHasSomeModifiers(e, s) {
            return s.some((r) => Rr(r) ? e.accessibility === r : !!e[r]);
          }
          tsIsStartOfStaticBlocks() {
            return this.isContextual(104) && this.lookaheadCharCode() === 123;
          }
          parseClassMember(e, s, r) {
            let i = ["declare", "private", "public", "protected", "override", "abstract", "readonly", "static"];
            this.tsParseModifiers({ modified: s, allowedModifiers: i, stopOnStartOfClassStaticBlock: true });
            let a = () => {
              this.tsIsStartOfStaticBlocks() ? (this.next(), this.next(), this.tsHasSomeModifiers(s, i) && this.raise(k.StaticBlockCannotHaveModifier, { at: this.state.curPosition() }), this.parseClassStaticBlock(e, s)) : this.parseClassMemberWithIsStatic(e, s, r, !!s.static);
            };
            s.declare ? this.tsInAmbientContext(a) : a();
          }
          parseClassMemberWithIsStatic(e, s, r, i) {
            let a = this.tsTryParseIndexSignature(s);
            if (a) {
              e.body.push(a), s.abstract && this.raise(k.IndexSignatureHasAbstract, { at: s }), s.accessibility && this.raise(k.IndexSignatureHasAccessibility, { at: s, modifier: s.accessibility }), s.declare && this.raise(k.IndexSignatureHasDeclare, { at: s }), s.override && this.raise(k.IndexSignatureHasOverride, { at: s });
              return;
            }
            !this.state.inAbstractClass && s.abstract && this.raise(k.NonAbstractClassHasAbstractMethod, { at: s }), s.override && (r.hadSuperClass || this.raise(k.OverrideNotInSubClass, { at: s })), super.parseClassMemberWithIsStatic(e, s, r, i);
          }
          parsePostMemberNameModifiers(e) {
            this.eat(17) && (e.optional = true), e.readonly && this.match(10) && this.raise(k.ClassMethodHasReadonly, { at: e }), e.declare && this.match(10) && this.raise(k.ClassMethodHasDeclare, { at: e });
          }
          parseExpressionStatement(e, s) {
            return (s.type === "Identifier" ? this.tsParseExpressionStatement(e, s) : void 0) || super.parseExpressionStatement(e, s);
          }
          shouldParseExportDeclaration() {
            return this.tsIsDeclarationStart() ? true : super.shouldParseExportDeclaration();
          }
          parseConditional(e, s, r, i) {
            if (!this.state.maybeInArrowParameters || !this.match(17))
              return super.parseConditional(e, s, r, i);
            let a = this.tryParse(() => super.parseConditional(e, s, r));
            return a.node ? (a.error && (this.state = a.failState), a.node) : (a.error && super.setOptionalParametersError(i, a.error), e);
          }
          parseParenItem(e, s, r) {
            if (e = super.parseParenItem(e, s, r), this.eat(17) && (e.optional = true, this.resetEndLocation(e)), this.match(14)) {
              let i = this.startNodeAt(s, r);
              return i.expression = e, i.typeAnnotation = this.tsParseTypeAnnotation(), this.finishNode(i, "TSTypeCastExpression");
            }
            return e;
          }
          parseExportDeclaration(e) {
            if (!this.state.isAmbientContext && this.isContextual(121))
              return this.tsInAmbientContext(() => this.parseExportDeclaration(e));
            let s = this.state.start, r = this.state.startLoc, i = this.eatContextual(121);
            if (i && (this.isContextual(121) || !this.shouldParseExportDeclaration()))
              throw this.raise(k.ExpectedAmbientAfterExportDeclare, { at: this.state.startLoc });
            let n = K(this.state.type) && this.tsTryParseExportDeclaration() || super.parseExportDeclaration(e);
            return n ? ((n.type === "TSInterfaceDeclaration" || n.type === "TSTypeAliasDeclaration" || i) && (e.exportKind = "type"), i && (this.resetStartLocation(n, s, r), n.declare = true), n) : null;
          }
          parseClassId(e, s, r) {
            if ((!s || r) && this.isContextual(110))
              return;
            super.parseClassId(e, s, r, e.declare ? vr : Tr);
            let i = this.tsTryParseTypeParameters();
            i && (e.typeParameters = i);
          }
          parseClassPropertyAnnotation(e) {
            !e.optional && this.eat(35) && (e.definite = true);
            let s = this.tsTryParseTypeAnnotation();
            s && (e.typeAnnotation = s);
          }
          parseClassProperty(e) {
            if (this.parseClassPropertyAnnotation(e), this.state.isAmbientContext && this.match(29) && this.raise(k.DeclareClassFieldHasInitializer, { at: this.state.startLoc }), e.abstract && this.match(29)) {
              let { key: s } = e;
              this.raise(k.AbstractPropertyHasInitializer, { at: this.state.startLoc, propertyName: s.type === "Identifier" && !e.computed ? s.name : "[".concat(this.input.slice(s.start, s.end), "]") });
            }
            return super.parseClassProperty(e);
          }
          parseClassPrivateProperty(e) {
            return e.abstract && this.raise(k.PrivateElementHasAbstract, { at: e }), e.accessibility && this.raise(k.PrivateElementHasAccessibility, { at: e, modifier: e.accessibility }), this.parseClassPropertyAnnotation(e), super.parseClassPrivateProperty(e);
          }
          pushClassMethod(e, s, r, i, a, n) {
            let o = this.tsTryParseTypeParameters();
            o && a && this.raise(k.ConstructorHasTypeParameters, { at: o });
            let { declare: c = false, kind: f } = s;
            c && (f === "get" || f === "set") && this.raise(k.DeclareAccessor, { at: s, kind: f }), o && (s.typeParameters = o), super.pushClassMethod(e, s, r, i, a, n);
          }
          pushClassPrivateMethod(e, s, r, i) {
            let a = this.tsTryParseTypeParameters();
            a && (s.typeParameters = a), super.pushClassPrivateMethod(e, s, r, i);
          }
          declareClassPrivateMethodInScope(e, s) {
            e.type !== "TSDeclareMethod" && (e.type === "MethodDefinition" && !e.value.body || super.declareClassPrivateMethodInScope(e, s));
          }
          parseClassSuper(e) {
            super.parseClassSuper(e), e.superClass && (this.match(47) || this.match(51)) && (e.superTypeParameters = this.tsParseTypeArgumentsInExpression()), this.eatContextual(110) && (e.implements = this.tsParseHeritageClause("implements"));
          }
          parseObjPropValue(e) {
            let s = this.tsTryParseTypeParameters();
            s && (e.typeParameters = s);
            for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
              i[a - 1] = arguments[a];
            super.parseObjPropValue(e, ...i);
          }
          parseFunctionParams(e, s) {
            let r = this.tsTryParseTypeParameters();
            r && (e.typeParameters = r), super.parseFunctionParams(e, s);
          }
          parseVarId(e, s) {
            super.parseVarId(e, s), e.id.type === "Identifier" && !this.hasPrecedingLineBreak() && this.eat(35) && (e.definite = true);
            let r = this.tsTryParseTypeAnnotation();
            r && (e.id.typeAnnotation = r, this.resetEndLocation(e.id));
          }
          parseAsyncArrowFromCallExpression(e, s) {
            return this.match(14) && (e.returnType = this.tsParseTypeAnnotation()), super.parseAsyncArrowFromCallExpression(e, s);
          }
          parseMaybeAssign() {
            for (var e = arguments.length, s = new Array(e), r = 0; r < e; r++)
              s[r] = arguments[r];
            var i, a, n, o, c, f, y;
            let C, S, I;
            if (this.hasPlugin("jsx") && (this.match(138) || this.match(47))) {
              if (C = this.state.clone(), S = this.tryParse(() => super.parseMaybeAssign(...s), C), !S.error)
                return S.node;
              let { context: $ } = this.state, te = $[$.length - 1];
              (te === z.j_oTag || te === z.j_expr) && $.pop();
            }
            if (!((i = S) != null && i.error) && !this.match(47))
              return super.parseMaybeAssign(...s);
            let M;
            C = C || this.state.clone();
            let R = this.tryParse(($) => {
              var te, oe, Ye;
              M = this.tsParseTypeParameters();
              let ue = super.parseMaybeAssign(...s);
              return (ue.type !== "ArrowFunctionExpression" || (te = ue.extra) != null && te.parenthesized) && $(), ((oe = M) == null ? void 0 : oe.params.length) !== 0 && this.resetStartLocationFromNode(ue, M), ue.typeParameters = M, this.hasPlugin("jsx") && ue.typeParameters.params.length === 1 && !((Ye = ue.typeParameters.extra) != null && Ye.trailingComma) && ue.typeParameters.params[0].constraint, ue;
            }, C);
            if (!R.error && !R.aborted)
              return M && this.reportReservedArrowTypeParam(M), R.node;
            if (!S && (Mr(!this.hasPlugin("jsx")), I = this.tryParse(() => super.parseMaybeAssign(...s), C), !I.error))
              return I.node;
            if ((a = S) != null && a.node)
              return this.state = S.failState, S.node;
            if (R.node)
              return this.state = R.failState, M && this.reportReservedArrowTypeParam(M), R.node;
            if ((n = I) != null && n.node)
              return this.state = I.failState, I.node;
            throw (o = S) != null && o.thrown ? S.error : R.thrown ? R.error : (c = I) != null && c.thrown ? I.error : ((f = S) == null ? void 0 : f.error) || R.error || ((y = I) == null ? void 0 : y.error);
          }
          reportReservedArrowTypeParam(e) {
            var s;
            e.params.length === 1 && !((s = e.extra) != null && s.trailingComma) && this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(k.ReservedArrowTypeParam, { at: e });
          }
          parseMaybeUnary(e) {
            return !this.hasPlugin("jsx") && this.match(47) ? this.tsParseTypeAssertion() : super.parseMaybeUnary(e);
          }
          parseArrow(e) {
            if (this.match(14)) {
              let s = this.tryParse((r) => {
                let i = this.tsParseTypeOrTypePredicateAnnotation(14);
                return (this.canInsertSemicolon() || !this.match(19)) && r(), i;
              });
              if (s.aborted)
                return;
              s.thrown || (s.error && (this.state = s.failState), e.returnType = s.node);
            }
            return super.parseArrow(e);
          }
          parseAssignableListItemTypes(e) {
            this.eat(17) && (e.type !== "Identifier" && !this.state.isAmbientContext && !this.state.inType && this.raise(k.PatternIsOptional, { at: e }), e.optional = true);
            let s = this.tsTryParseTypeAnnotation();
            return s && (e.typeAnnotation = s), this.resetEndLocation(e), e;
          }
          isAssignable(e, s) {
            switch (e.type) {
              case "TSTypeCastExpression":
                return this.isAssignable(e.expression, s);
              case "TSParameterProperty":
                return true;
              default:
                return super.isAssignable(e, s);
            }
          }
          toAssignable(e) {
            let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            switch (e.type) {
              case "TSTypeCastExpression":
                return super.toAssignable(this.typeCastToParameter(e), s);
              case "TSParameterProperty":
                return super.toAssignable(e, s);
              case "ParenthesizedExpression":
                return this.toAssignableParenthesizedExpression(e, s);
              case "TSAsExpression":
              case "TSNonNullExpression":
              case "TSTypeAssertion":
                return e.expression = this.toAssignable(e.expression, s), e;
              default:
                return super.toAssignable(e, s);
            }
          }
          toAssignableParenthesizedExpression(e, s) {
            switch (e.expression.type) {
              case "TSAsExpression":
              case "TSNonNullExpression":
              case "TSTypeAssertion":
              case "ParenthesizedExpression":
                return e.expression = this.toAssignable(e.expression, s), e;
              default:
                return super.toAssignable(e, s);
            }
          }
          isValidLVal(e, s, r) {
            return Lh({ TSTypeCastExpression: true, TSParameterProperty: "parameter", TSNonNullExpression: "expression", TSAsExpression: (r !== Ne || s) && ["expression", true], TSTypeAssertion: (r !== Ne || s) && ["expression", true] }, e) || super.isValidLVal(e, s, r);
          }
          parseBindingAtom() {
            switch (this.state.type) {
              case 78:
                return this.parseIdentifier(true);
              default:
                return super.parseBindingAtom();
            }
          }
          parseMaybeDecoratorArguments(e) {
            if (this.match(47) || this.match(51)) {
              let s = this.tsParseTypeArgumentsInExpression();
              if (this.match(10)) {
                let r = super.parseMaybeDecoratorArguments(e);
                return r.typeParameters = s, r;
              }
              this.unexpected(null, 10);
            }
            return super.parseMaybeDecoratorArguments(e);
          }
          checkCommaAfterRest(e) {
            return this.state.isAmbientContext && this.match(12) && this.lookaheadCharCode() === e ? (this.next(), false) : super.checkCommaAfterRest(e);
          }
          isClassMethod() {
            return this.match(47) || super.isClassMethod();
          }
          isClassProperty() {
            return this.match(35) || this.match(14) || super.isClassProperty();
          }
          parseMaybeDefault() {
            let e = super.parseMaybeDefault(...arguments);
            return e.type === "AssignmentPattern" && e.typeAnnotation && e.right.start < e.typeAnnotation.start && this.raise(k.TypeAnnotationAfterAssign, { at: e.typeAnnotation }), e;
          }
          getTokenFromCode(e) {
            if (this.state.inType) {
              if (e === 62)
                return this.finishOp(48, 1);
              if (e === 60)
                return this.finishOp(47, 1);
            }
            return super.getTokenFromCode(e);
          }
          reScan_lt_gt() {
            let { type: e } = this.state;
            e === 47 ? (this.state.pos -= 1, this.readToken_lt()) : e === 48 && (this.state.pos -= 1, this.readToken_gt());
          }
          reScan_lt() {
            let { type: e } = this.state;
            return e === 51 ? (this.state.pos -= 2, this.finishOp(47, 1), 47) : e;
          }
          toAssignableList(e) {
            for (let s = 0; s < e.length; s++) {
              let r = e[s];
              if (!!r)
                switch (r.type) {
                  case "TSTypeCastExpression":
                    e[s] = this.typeCastToParameter(r);
                    break;
                  case "TSAsExpression":
                  case "TSTypeAssertion":
                    this.state.maybeInArrowParameters ? this.raise(k.UnexpectedTypeCastInParameter, { at: r }) : e[s] = this.typeCastToParameter(r);
                    break;
                }
            }
            return super.toAssignableList(...arguments);
          }
          typeCastToParameter(e) {
            return e.expression.typeAnnotation = e.typeAnnotation, this.resetEndLocation(e.expression, e.typeAnnotation.loc.end), e.expression;
          }
          shouldParseArrow(e) {
            return this.match(14) ? e.every((s) => this.isAssignable(s, true)) : super.shouldParseArrow(e);
          }
          shouldParseAsyncArrow() {
            return this.match(14) || super.shouldParseAsyncArrow();
          }
          canHaveLeadingDecorator() {
            return super.canHaveLeadingDecorator() || this.isAbstractClass();
          }
          jsxParseOpeningElementAfterName(e) {
            if (this.match(47) || this.match(51)) {
              let s = this.tsTryParseAndCatch(() => this.tsParseTypeArgumentsInExpression());
              s && (e.typeParameters = s);
            }
            return super.jsxParseOpeningElementAfterName(e);
          }
          getGetterSetterExpectedParamCount(e) {
            let s = super.getGetterSetterExpectedParamCount(e), i = this.getObjectOrClassMethodParams(e)[0];
            return i && this.isThisParam(i) ? s + 1 : s;
          }
          parseCatchClauseParam() {
            let e = super.parseCatchClauseParam(), s = this.tsTryParseTypeAnnotation();
            return s && (e.typeAnnotation = s, this.resetEndLocation(e)), e;
          }
          tsInAmbientContext(e) {
            let s = this.state.isAmbientContext;
            this.state.isAmbientContext = true;
            try {
              return e();
            } finally {
              this.state.isAmbientContext = s;
            }
          }
          parseClass(e) {
            let s = this.state.inAbstractClass;
            this.state.inAbstractClass = !!e.abstract;
            try {
              for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
                i[a - 1] = arguments[a];
              return super.parseClass(e, ...i);
            } finally {
              this.state.inAbstractClass = s;
            }
          }
          tsParseAbstractDeclaration(e) {
            if (this.match(80))
              return e.abstract = true, this.parseClass(e, true, false);
            if (this.isContextual(125)) {
              if (!this.hasFollowingLineBreak())
                return e.abstract = true, this.raise(k.NonClassMethodPropertyHasAbstractModifer, { at: e }), this.tsParseInterfaceDeclaration(e);
            } else
              this.unexpected(null, 80);
          }
          parseMethod() {
            let e = super.parseMethod(...arguments);
            if (e.abstract && (this.hasPlugin("estree") ? !!e.value.body : !!e.body)) {
              let { key: r } = e;
              this.raise(k.AbstractMethodHasImplementation, { at: e, methodName: r.type === "Identifier" && !e.computed ? r.name : "[".concat(this.input.slice(r.start, r.end), "]") });
            }
            return e;
          }
          tsParseTypeParameterName() {
            return this.parseIdentifier().name;
          }
          shouldParseAsAmbientContext() {
            return !!this.getPluginOption("typescript", "dts");
          }
          parse() {
            return this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = true), super.parse();
          }
          getExpression() {
            return this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = true), super.getExpression();
          }
          parseExportSpecifier(e, s, r, i) {
            return !s && i ? (this.parseTypeOnlyImportExportSpecifier(e, false, r), this.finishNode(e, "ExportSpecifier")) : (e.exportKind = "value", super.parseExportSpecifier(e, s, r, i));
          }
          parseImportSpecifier(e, s, r, i) {
            return !s && i ? (this.parseTypeOnlyImportExportSpecifier(e, true, r), this.finishNode(e, "ImportSpecifier")) : (e.importKind = "value", super.parseImportSpecifier(e, s, r, i));
          }
          parseTypeOnlyImportExportSpecifier(e, s, r) {
            let i = s ? "imported" : "local", a = s ? "local" : "exported", n = e[i], o, c = false, f = true, y = n.loc.start;
            if (this.isContextual(93)) {
              let S = this.parseIdentifier();
              if (this.isContextual(93)) {
                let I = this.parseIdentifier();
                pe(this.state.type) ? (c = true, n = S, o = s ? this.parseIdentifier() : this.parseModuleExportName(), f = false) : (o = I, f = false);
              } else
                pe(this.state.type) ? (f = false, o = s ? this.parseIdentifier() : this.parseModuleExportName()) : (c = true, n = S);
            } else
              pe(this.state.type) && (c = true, n = s ? this.parseIdentifier() : this.parseModuleExportName());
            c && r && this.raise(s ? k.TypeModifierIsUsedInTypeImports : k.TypeModifierIsUsedInTypeExports, { at: y }), e[i] = n, e[a] = o;
            let C = s ? "importKind" : "exportKind";
            e[C] = c ? "type" : "value", f && this.eatContextual(93) && (e[a] = s ? this.parseIdentifier() : this.parseModuleExportName()), e[a] || (e[a] = ge(e[i])), s && this.checkIdentifier(e[a], xe);
          }
        };
        function Rh(t) {
          if (t.type !== "MemberExpression")
            return false;
          let { computed: e, property: s } = t;
          return e && s.type !== "StringLiteral" && (s.type !== "TemplateLiteral" || s.expressions.length > 0) ? false : jr(t.object);
        }
        function jr(t) {
          return t.type === "Identifier" ? true : t.type !== "MemberExpression" || t.computed ? false : jr(t.object);
        }
        var qr = G(Hn || (Hn = st(["placeholders"])))((t) => ({ ClassNameIsRequired: t("A class name is required."), UnexpectedSpace: t("Unexpected space in placeholder.") })), jh = (t) => class extends t {
          parsePlaceholder(e) {
            if (this.match(140)) {
              let s = this.startNode();
              return this.next(), this.assertNoSpace(), s.name = super.parseIdentifier(true), this.assertNoSpace(), this.expect(140), this.finishPlaceholder(s, e);
            }
          }
          finishPlaceholder(e, s) {
            let r = !!(e.expectedNode && e.type === "Placeholder");
            return e.expectedNode = s, r ? e : this.finishNode(e, "Placeholder");
          }
          getTokenFromCode(e) {
            return e === 37 && this.input.charCodeAt(this.state.pos + 1) === 37 ? this.finishOp(140, 2) : super.getTokenFromCode(...arguments);
          }
          parseExprAtom() {
            return this.parsePlaceholder("Expression") || super.parseExprAtom(...arguments);
          }
          parseIdentifier() {
            return this.parsePlaceholder("Identifier") || super.parseIdentifier(...arguments);
          }
          checkReservedWord(e) {
            e !== void 0 && super.checkReservedWord(...arguments);
          }
          parseBindingAtom() {
            return this.parsePlaceholder("Pattern") || super.parseBindingAtom(...arguments);
          }
          isValidLVal(e) {
            for (var s = arguments.length, r = new Array(s > 1 ? s - 1 : 0), i = 1; i < s; i++)
              r[i - 1] = arguments[i];
            return e === "Placeholder" || super.isValidLVal(e, ...r);
          }
          toAssignable(e) {
            return e && e.type === "Placeholder" && e.expectedNode === "Expression" ? (e.expectedNode = "Pattern", e) : super.toAssignable(...arguments);
          }
          isLet(e) {
            return super.isLet(e) ? true : !this.isContextual(99) || e ? false : this.lookahead().type === 140;
          }
          verifyBreakContinue(e) {
            e.label && e.label.type === "Placeholder" || super.verifyBreakContinue(...arguments);
          }
          parseExpressionStatement(e, s) {
            if (s.type !== "Placeholder" || s.extra && s.extra.parenthesized)
              return super.parseExpressionStatement(...arguments);
            if (this.match(14)) {
              let r = e;
              return r.label = this.finishPlaceholder(s, "Identifier"), this.next(), r.body = this.parseStatement("label"), this.finishNode(r, "LabeledStatement");
            }
            return this.semicolon(), e.name = s.name, this.finishPlaceholder(e, "Statement");
          }
          parseBlock() {
            return this.parsePlaceholder("BlockStatement") || super.parseBlock(...arguments);
          }
          parseFunctionId() {
            return this.parsePlaceholder("Identifier") || super.parseFunctionId(...arguments);
          }
          parseClass(e, s, r) {
            let i = s ? "ClassDeclaration" : "ClassExpression";
            this.next(), this.takeDecorators(e);
            let a = this.state.strict, n = this.parsePlaceholder("Identifier");
            if (n)
              if (this.match(81) || this.match(140) || this.match(5))
                e.id = n;
              else {
                if (r || !s)
                  return e.id = null, e.body = this.finishPlaceholder(n, "ClassBody"), this.finishNode(e, i);
                throw this.raise(qr.ClassNameIsRequired, { at: this.state.startLoc });
              }
            else
              this.parseClassId(e, s, r);
            return this.parseClassSuper(e), e.body = this.parsePlaceholder("ClassBody") || this.parseClassBody(!!e.superClass, a), this.finishNode(e, i);
          }
          parseExport(e) {
            let s = this.parsePlaceholder("Identifier");
            if (!s)
              return super.parseExport(...arguments);
            if (!this.isContextual(97) && !this.match(12))
              return e.specifiers = [], e.source = null, e.declaration = this.finishPlaceholder(s, "Declaration"), this.finishNode(e, "ExportNamedDeclaration");
            this.expectPlugin("exportDefaultFrom");
            let r = this.startNode();
            return r.exported = s, e.specifiers = [this.finishNode(r, "ExportDefaultSpecifier")], super.parseExport(e);
          }
          isExportDefaultSpecifier() {
            if (this.match(65)) {
              let e = this.nextTokenStart();
              if (this.isUnparsedContextual(e, "from") && this.input.startsWith(Te(140), this.nextTokenStartSince(e + 4)))
                return true;
            }
            return super.isExportDefaultSpecifier();
          }
          maybeParseExportDefaultSpecifier(e) {
            return e.specifiers && e.specifiers.length > 0 ? true : super.maybeParseExportDefaultSpecifier(...arguments);
          }
          checkExport(e) {
            let { specifiers: s } = e;
            s != null && s.length && (e.specifiers = s.filter((r) => r.exported.type === "Placeholder")), super.checkExport(e), e.specifiers = s;
          }
          parseImport(e) {
            let s = this.parsePlaceholder("Identifier");
            if (!s)
              return super.parseImport(...arguments);
            if (e.specifiers = [], !this.isContextual(97) && !this.match(12))
              return e.source = this.finishPlaceholder(s, "StringLiteral"), this.semicolon(), this.finishNode(e, "ImportDeclaration");
            let r = this.startNodeAtNode(s);
            return r.local = s, this.finishNode(r, "ImportDefaultSpecifier"), e.specifiers.push(r), this.eat(12) && (this.maybeParseStarImportSpecifier(e) || this.parseNamedImportSpecifiers(e)), this.expectContextual(97), e.source = this.parseImportSource(), this.semicolon(), this.finishNode(e, "ImportDeclaration");
          }
          parseImportSource() {
            return this.parsePlaceholder("StringLiteral") || super.parseImportSource(...arguments);
          }
          assertNoSpace() {
            this.state.start > this.state.lastTokEndLoc.index && this.raise(qr.UnexpectedSpace, { at: this.state.lastTokEndLoc });
          }
        }, qh = (t) => class extends t {
          parseV8Intrinsic() {
            if (this.match(54)) {
              let e = this.state.startLoc, s = this.startNode();
              if (this.next(), K(this.state.type)) {
                let r = this.parseIdentifierName(this.state.start), i = this.createIdentifier(s, r);
                if (i.type = "V8IntrinsicIdentifier", this.match(10))
                  return i;
              }
              this.unexpected(e);
            }
          }
          parseExprAtom() {
            return this.parseV8Intrinsic() || super.parseExprAtom(...arguments);
          }
        };
        function Z(t, e) {
          let [s, r] = typeof e == "string" ? [e, {}] : e, i = Object.keys(r), a = i.length === 0;
          return t.some((n) => {
            if (typeof n == "string")
              return a && n === s;
            {
              let [o, c] = n;
              if (o !== s)
                return false;
              for (let f of i)
                if (c[f] !== r[f])
                  return false;
              return true;
            }
          });
        }
        function Xe(t, e, s) {
          let r = t.find((i) => Array.isArray(i) ? i[0] === e : i === e);
          return r && Array.isArray(r) ? r[1][s] : null;
        }
        var Ur = ["minimal", "fsharp", "hack", "smart"], _r = ["^^", "@@", "^", "%", "#"], zr = ["hash", "bar"];
        function Uh(t) {
          if (Z(t, "decorators")) {
            if (Z(t, "decorators-legacy"))
              throw new Error("Cannot use the decorators and decorators-legacy plugin together");
            let e = Xe(t, "decorators", "decoratorsBeforeExport");
            if (e == null)
              throw new Error("The 'decorators' plugin requires a 'decoratorsBeforeExport' option, whose value must be a boolean. If you are migrating from Babylon/Babel 6 or want to use the old decorators proposal, you should use the 'decorators-legacy' plugin instead of 'decorators'.");
            if (typeof e != "boolean")
              throw new Error("'decoratorsBeforeExport' must be a boolean.");
          }
          if (Z(t, "flow") && Z(t, "typescript"))
            throw new Error("Cannot combine flow and typescript plugins.");
          if (Z(t, "placeholders") && Z(t, "v8intrinsic"))
            throw new Error("Cannot combine placeholders and v8intrinsic plugins.");
          if (Z(t, "pipelineOperator")) {
            let e = Xe(t, "pipelineOperator", "proposal");
            if (!Ur.includes(e)) {
              let r = Ur.map((i) => '"'.concat(i, '"')).join(", ");
              throw new Error('"pipelineOperator" requires "proposal" option whose value must be one of: '.concat(r, "."));
            }
            let s = Z(t, ["recordAndTuple", { syntaxType: "hash" }]);
            if (e === "hack") {
              if (Z(t, "placeholders"))
                throw new Error("Cannot combine placeholders plugin and Hack-style pipes.");
              if (Z(t, "v8intrinsic"))
                throw new Error("Cannot combine v8intrinsic plugin and Hack-style pipes.");
              let r = Xe(t, "pipelineOperator", "topicToken");
              if (!_r.includes(r)) {
                let i = _r.map((a) => '"'.concat(a, '"')).join(", ");
                throw new Error('"pipelineOperator" in "proposal": "hack" mode also requires a "topicToken" option whose value must be one of: '.concat(i, "."));
              }
              if (r === "#" && s)
                throw new Error('Plugin conflict between `["pipelineOperator", { proposal: "hack", topicToken: "#" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.');
            } else if (e === "smart" && s)
              throw new Error('Plugin conflict between `["pipelineOperator", { proposal: "smart" }]` and `["recordAndtuple", { syntaxType: "hash"}]`.');
          }
          if (Z(t, "moduleAttributes")) {
            if (Z(t, "importAssertions"))
              throw new Error("Cannot combine importAssertions and moduleAttributes plugins.");
            if (Xe(t, "moduleAttributes", "version") !== "may-2020")
              throw new Error("The 'moduleAttributes' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is 'may-2020'.");
          }
          if (Z(t, "recordAndTuple") && !zr.includes(Xe(t, "recordAndTuple", "syntaxType")))
            throw new Error("'recordAndTuple' requires 'syntaxType' option whose value should be one of: " + zr.map((e) => "'".concat(e, "'")).join(", "));
          if (Z(t, "asyncDoExpressions") && !Z(t, "doExpressions")) {
            let e = new Error("'asyncDoExpressions' requires 'doExpressions', please add 'doExpressions' to parser plugins.");
            throw e.missingPlugins = "doExpressions", e;
          }
        }
        var Kr = { estree: Be, jsx: kh, flow: Nh, typescript: Mh, v8intrinsic: qh, placeholders: jh }, _h = Object.keys(Kr), Vr = { sourceType: "script", sourceFilename: void 0, startColumn: 0, startLine: 1, allowAwaitOutsideFunction: false, allowReturnOutsideFunction: false, allowImportExportEverywhere: false, allowSuperOutsideMethod: false, allowUndeclaredExports: false, plugins: [], strictMode: null, ranges: false, tokens: false, createParenthesizedExpressions: false, errorRecovery: false, attachComment: true };
        function zh(t) {
          let e = {};
          for (let s of Object.keys(Vr))
            e[s] = t && t[s] != null ? t[s] : Vr[s];
          return e;
        }
        var Kh = (t, e) => Object.hasOwnProperty.call(t, e) && t[e], cs = (t) => t.type === "ParenthesizedExpression" ? cs(t.expression) : t, Vh = class extends Eh {
          toAssignable(t) {
            let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
            var s, r;
            let i;
            switch ((t.type === "ParenthesizedExpression" || (s = t.extra) != null && s.parenthesized) && (i = cs(t), e ? i.type === "Identifier" ? this.expressionScope.recordParenthesizedIdentifierError({ at: t }) : i.type !== "MemberExpression" && this.raise(u.InvalidParenthesizedAssignment, { at: t }) : this.raise(u.InvalidParenthesizedAssignment, { at: t })), t.type) {
              case "Identifier":
              case "ObjectPattern":
              case "ArrayPattern":
              case "AssignmentPattern":
              case "RestElement":
                break;
              case "ObjectExpression":
                t.type = "ObjectPattern";
                for (let n = 0, o = t.properties.length, c = o - 1; n < o; n++) {
                  var a;
                  let f = t.properties[n], y = n === c;
                  this.toAssignableObjectExpressionProp(f, y, e), y && f.type === "RestElement" && (a = t.extra) != null && a.trailingCommaLoc && this.raise(u.RestTrailingComma, { at: t.extra.trailingCommaLoc });
                }
                break;
              case "ObjectProperty": {
                let { key: n, value: o } = t;
                this.isPrivateName(n) && this.classScope.usePrivateName(this.getPrivateNameSV(n), n.loc.start), this.toAssignable(o, e);
                break;
              }
              case "SpreadElement": {
                this.checkToRestConversion(t), t.type = "RestElement";
                let n = t.argument;
                this.toAssignable(n, e);
                break;
              }
              case "ArrayExpression":
                t.type = "ArrayPattern", this.toAssignableList(t.elements, (r = t.extra) == null ? void 0 : r.trailingCommaLoc, e);
                break;
              case "AssignmentExpression":
                t.operator !== "=" && this.raise(u.MissingEqInAssignment, { at: t.left.loc.end }), t.type = "AssignmentPattern", delete t.operator, this.toAssignable(t.left, e);
                break;
              case "ParenthesizedExpression":
                this.toAssignable(i, e);
                break;
            }
            return t;
          }
          toAssignableObjectExpressionProp(t, e, s) {
            t.type === "ObjectMethod" ? this.raise(t.kind === "get" || t.kind === "set" ? u.PatternHasAccessor : u.PatternHasMethod, { at: t.key }) : t.type === "SpreadElement" && !e ? this.raise(u.RestTrailingComma, { at: t }) : this.toAssignable(t, s);
          }
          toAssignableList(t, e, s) {
            let r = t.length;
            if (r) {
              let i = t[r - 1];
              if ((i == null ? void 0 : i.type) === "RestElement")
                --r;
              else if ((i == null ? void 0 : i.type) === "SpreadElement") {
                i.type = "RestElement";
                let a = i.argument;
                this.toAssignable(a, s), a = cs(a), a.type !== "Identifier" && a.type !== "MemberExpression" && a.type !== "ArrayPattern" && a.type !== "ObjectPattern" && this.unexpected(a.start), e && this.raise(u.RestTrailingComma, { at: e }), --r;
              }
            }
            for (let i = 0; i < r; i++) {
              let a = t[i];
              a && (this.toAssignable(a, s), a.type === "RestElement" && this.raise(u.RestTrailingComma, { at: a }));
            }
            return t;
          }
          isAssignable(t, e) {
            switch (t.type) {
              case "Identifier":
              case "ObjectPattern":
              case "ArrayPattern":
              case "AssignmentPattern":
              case "RestElement":
                return true;
              case "ObjectExpression": {
                let s = t.properties.length - 1;
                return t.properties.every((r, i) => r.type !== "ObjectMethod" && (i === s || r.type !== "SpreadElement") && this.isAssignable(r));
              }
              case "ObjectProperty":
                return this.isAssignable(t.value);
              case "SpreadElement":
                return this.isAssignable(t.argument);
              case "ArrayExpression":
                return t.elements.every((s) => s === null || this.isAssignable(s));
              case "AssignmentExpression":
                return t.operator === "=";
              case "ParenthesizedExpression":
                return this.isAssignable(t.expression);
              case "MemberExpression":
              case "OptionalMemberExpression":
                return !e;
              default:
                return false;
            }
          }
          toReferencedList(t, e) {
            return t;
          }
          toReferencedListDeep(t, e) {
            this.toReferencedList(t, e);
            for (let s of t)
              (s == null ? void 0 : s.type) === "ArrayExpression" && this.toReferencedListDeep(s.elements);
          }
          parseSpread(t, e) {
            let s = this.startNode();
            return this.next(), s.argument = this.parseMaybeAssignAllowIn(t, void 0, e), this.finishNode(s, "SpreadElement");
          }
          parseRestBinding() {
            let t = this.startNode();
            return this.next(), t.argument = this.parseBindingAtom(), this.finishNode(t, "RestElement");
          }
          parseBindingAtom() {
            switch (this.state.type) {
              case 0: {
                let t = this.startNode();
                return this.next(), t.elements = this.parseBindingList(3, 93, true), this.finishNode(t, "ArrayPattern");
              }
              case 5:
                return this.parseObjectLike(8, true);
            }
            return this.parseIdentifier();
          }
          parseBindingList(t, e, s, r) {
            let i = [], a = true;
            for (; !this.eat(t); )
              if (a ? a = false : this.expect(12), s && this.match(12))
                i.push(null);
              else {
                if (this.eat(t))
                  break;
                if (this.match(21)) {
                  if (i.push(this.parseAssignableListItemTypes(this.parseRestBinding())), !this.checkCommaAfterRest(e)) {
                    this.expect(t);
                    break;
                  }
                } else {
                  let n = [];
                  for (this.match(26) && this.hasPlugin("decorators") && this.raise(u.UnsupportedParameterDecorator, { at: this.state.startLoc }); this.match(26); )
                    n.push(this.parseDecorator());
                  i.push(this.parseAssignableListItem(r, n));
                }
              }
            return i;
          }
          parseBindingRestProperty(t) {
            return this.next(), t.argument = this.parseIdentifier(), this.checkCommaAfterRest(125), this.finishNode(t, "RestElement");
          }
          parseBindingProperty() {
            let t = this.startNode(), { type: e, start: s, startLoc: r } = this.state;
            return e === 21 ? this.parseBindingRestProperty(t) : (e === 134 ? (this.expectPlugin("destructuringPrivate", r), this.classScope.usePrivateName(this.state.value, r), t.key = this.parsePrivateName()) : this.parsePropertyName(t), t.method = false, this.parseObjPropValue(t, s, r, false, false, true, false), t);
          }
          parseAssignableListItem(t, e) {
            let s = this.parseMaybeDefault();
            this.parseAssignableListItemTypes(s);
            let r = this.parseMaybeDefault(s.start, s.loc.start, s);
            return e.length && (s.decorators = e), r;
          }
          parseAssignableListItemTypes(t) {
            return t;
          }
          parseMaybeDefault(t, e, s) {
            var r, i, a;
            if (e = (r = e) != null ? r : this.state.startLoc, t = (i = t) != null ? i : this.state.start, s = (a = s) != null ? a : this.parseBindingAtom(), !this.eat(29))
              return s;
            let n = this.startNodeAt(t, e);
            return n.left = s, n.right = this.parseMaybeAssignAllowIn(), this.finishNode(n, "AssignmentPattern");
          }
          isValidLVal(t, e, s) {
            return Kh({ AssignmentPattern: "left", RestElement: "argument", ObjectProperty: "value", ParenthesizedExpression: "expression", ArrayPattern: "elements", ObjectPattern: "properties" }, t);
          }
          checkLVal(t, e) {
            let { in: s, binding: r = Ne, checkClashes: i = false, strictModeChanged: a = false, allowingSloppyLetBinding: n = !(r & Ee), hasParenthesizedAncestor: o = false } = e;
            var c;
            let f = t.type;
            if (this.isObjectMethod(t))
              return;
            if (f === "MemberExpression") {
              r !== Ne && this.raise(u.InvalidPropertyBindingPattern, { at: t });
              return;
            }
            if (t.type === "Identifier") {
              this.checkIdentifier(t, r, a, n);
              let { name: M } = t;
              i && (i.has(M) ? this.raise(u.ParamDupe, { at: t }) : i.add(M));
              return;
            }
            let y = this.isValidLVal(t.type, o || ((c = t.extra) == null ? void 0 : c.parenthesized), r);
            if (y === true)
              return;
            if (y === false) {
              let M = r === Ne ? u.InvalidLhs : u.InvalidLhsBinding;
              this.raise(M, { at: t, ancestor: s.type === "UpdateExpression" ? { type: "UpdateExpression", prefix: s.prefix } : { type: s.type } });
              return;
            }
            let [C, S] = Array.isArray(y) ? y : [y, f === "ParenthesizedExpression"], I = t.type === "ArrayPattern" || t.type === "ObjectPattern" || t.type === "ParenthesizedExpression" ? t : s;
            for (let M of [].concat(t[C]))
              M && this.checkLVal(M, { in: I, binding: r, checkClashes: i, allowingSloppyLetBinding: n, strictModeChanged: a, hasParenthesizedAncestor: S });
          }
          checkIdentifier(t, e) {
            let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !(e & Ee);
            this.state.strict && (s ? yr(t.name, this.inModule) : mr(t.name)) && (e === Ne ? this.raise(u.StrictEvalArguments, { at: t, referenceName: t.name }) : this.raise(u.StrictEvalArgumentsBinding, { at: t, bindingName: t.name })), !r && t.name === "let" && this.raise(u.LetInLexicalBinding, { at: t }), e & Ne || this.declareNameFromIdentifier(t, e);
          }
          declareNameFromIdentifier(t, e) {
            this.scope.declareName(t.name, e, t.loc.start);
          }
          checkToRestConversion(t) {
            t.argument.type !== "Identifier" && t.argument.type !== "MemberExpression" && this.raise(u.InvalidRestAssignmentPattern, { at: t.argument });
          }
          checkCommaAfterRest(t) {
            return this.match(12) ? (this.raise(this.lookaheadCharCode() === t ? u.RestTrailingComma : u.ElementAfterRest, { at: this.state.startLoc }), true) : false;
          }
        }, Hh = class extends Vh {
          checkProto(t, e, s, r) {
            if (t.type === "SpreadElement" || this.isObjectMethod(t) || t.computed || t.shorthand)
              return;
            let i = t.key;
            if ((i.type === "Identifier" ? i.name : i.value) === "__proto__") {
              if (e) {
                this.raise(u.RecordNoProto, { at: i });
                return;
              }
              s.used && (r ? r.doubleProtoLoc === null && (r.doubleProtoLoc = i.loc.start) : this.raise(u.DuplicateProto, { at: i })), s.used = true;
            }
          }
          shouldExitDescending(t, e) {
            return t.type === "ArrowFunctionExpression" && t.start === e;
          }
          getExpression() {
            this.enterInitialScopes(), this.nextToken();
            let t = this.parseExpression();
            return this.match(135) || this.unexpected(), this.finalizeRemainingComments(), t.comments = this.state.comments, t.errors = this.state.errors, this.options.tokens && (t.tokens = this.tokens), t;
          }
          parseExpression(t, e) {
            return t ? this.disallowInAnd(() => this.parseExpressionBase(e)) : this.allowInAnd(() => this.parseExpressionBase(e));
          }
          parseExpressionBase(t) {
            let e = this.state.start, s = this.state.startLoc, r = this.parseMaybeAssign(t);
            if (this.match(12)) {
              let i = this.startNodeAt(e, s);
              for (i.expressions = [r]; this.eat(12); )
                i.expressions.push(this.parseMaybeAssign(t));
              return this.toReferencedList(i.expressions), this.finishNode(i, "SequenceExpression");
            }
            return r;
          }
          parseMaybeAssignDisallowIn(t, e) {
            return this.disallowInAnd(() => this.parseMaybeAssign(t, e));
          }
          parseMaybeAssignAllowIn(t, e) {
            return this.allowInAnd(() => this.parseMaybeAssign(t, e));
          }
          setOptionalParametersError(t, e) {
            var s;
            t.optionalParametersLoc = (s = e == null ? void 0 : e.loc) != null ? s : this.state.startLoc;
          }
          parseMaybeAssign(t, e) {
            let s = this.state.start, r = this.state.startLoc;
            if (this.isContextual(105) && this.prodParam.hasYield) {
              let o = this.parseYield();
              return e && (o = e.call(this, o, s, r)), o;
            }
            let i;
            t ? i = false : (t = new gt(), i = true);
            let { type: a } = this.state;
            (a === 10 || K(a)) && (this.state.potentialArrowAt = this.state.start);
            let n = this.parseMaybeConditional(t);
            if (e && (n = e.call(this, n, s, r)), Co(this.state.type)) {
              let o = this.startNodeAt(s, r), c = this.state.value;
              return o.operator = c, this.match(29) ? (o.left = this.toAssignable(n, true), t.doubleProtoLoc != null && t.doubleProtoLoc.index >= s && (t.doubleProtoLoc = null), t.shorthandAssignLoc != null && t.shorthandAssignLoc.index >= s && (t.shorthandAssignLoc = null), t.privateKeyLoc != null && t.privateKeyLoc.index >= s && (this.checkDestructuringPrivate(t), t.privateKeyLoc = null)) : o.left = n, this.next(), o.right = this.parseMaybeAssign(), this.checkLVal(n, { in: this.finishNode(o, "AssignmentExpression") }), o;
            } else
              i && this.checkExpressionErrors(t, true);
            return n;
          }
          parseMaybeConditional(t) {
            let e = this.state.start, s = this.state.startLoc, r = this.state.potentialArrowAt, i = this.parseExprOps(t);
            return this.shouldExitDescending(i, r) ? i : this.parseConditional(i, e, s, t);
          }
          parseConditional(t, e, s, r) {
            if (this.eat(17)) {
              let i = this.startNodeAt(e, s);
              return i.test = t, i.consequent = this.parseMaybeAssignAllowIn(), this.expect(14), i.alternate = this.parseMaybeAssign(), this.finishNode(i, "ConditionalExpression");
            }
            return t;
          }
          parseMaybeUnaryOrPrivate(t) {
            return this.match(134) ? this.parsePrivateName() : this.parseMaybeUnary(t);
          }
          parseExprOps(t) {
            let e = this.state.start, s = this.state.startLoc, r = this.state.potentialArrowAt, i = this.parseMaybeUnaryOrPrivate(t);
            return this.shouldExitDescending(i, r) ? i : this.parseExprOp(i, e, s, -1);
          }
          parseExprOp(t, e, s, r) {
            if (this.isPrivateName(t)) {
              let a = this.getPrivateNameSV(t);
              (r >= at(58) || !this.prodParam.hasIn || !this.match(58)) && this.raise(u.PrivateInExpectedIn, { at: t, identifierName: a }), this.classScope.usePrivateName(a, t.loc.start);
            }
            let i = this.state.type;
            if (wo(i) && (this.prodParam.hasIn || !this.match(58))) {
              let a = at(i);
              if (a > r) {
                if (i === 39) {
                  if (this.expectPlugin("pipelineOperator"), this.state.inFSharpPipelineDirectBody)
                    return t;
                  this.checkPipelineAtInfixOperator(t, s);
                }
                let n = this.startNodeAt(e, s);
                n.left = t, n.operator = this.state.value;
                let o = i === 41 || i === 42, c = i === 40;
                if (c && (a = at(42)), this.next(), i === 39 && this.hasPlugin(["pipelineOperator", { proposal: "minimal" }]) && this.state.type === 96 && this.prodParam.hasAwait)
                  throw this.raise(u.UnexpectedAwaitAfterPipelineBody, { at: this.state.startLoc });
                n.right = this.parseExprOpRightExpr(i, a), this.finishNode(n, o || c ? "LogicalExpression" : "BinaryExpression");
                let f = this.state.type;
                if (c && (f === 41 || f === 42) || o && f === 40)
                  throw this.raise(u.MixingCoalesceWithLogical, { at: this.state.startLoc });
                return this.parseExprOp(n, e, s, r);
              }
            }
            return t;
          }
          parseExprOpRightExpr(t, e) {
            let s = this.state.start, r = this.state.startLoc;
            switch (t) {
              case 39:
                switch (this.getPluginOption("pipelineOperator", "proposal")) {
                  case "hack":
                    return this.withTopicBindingContext(() => this.parseHackPipeBody());
                  case "smart":
                    return this.withTopicBindingContext(() => {
                      if (this.prodParam.hasYield && this.isContextual(105))
                        throw this.raise(u.PipeBodyIsTighter, { at: this.state.startLoc });
                      return this.parseSmartPipelineBodyInStyle(this.parseExprOpBaseRightExpr(t, e), s, r);
                    });
                  case "fsharp":
                    return this.withSoloAwaitPermittingContext(() => this.parseFSharpPipelineBody(e));
                }
              default:
                return this.parseExprOpBaseRightExpr(t, e);
            }
          }
          parseExprOpBaseRightExpr(t, e) {
            let s = this.state.start, r = this.state.startLoc;
            return this.parseExprOp(this.parseMaybeUnaryOrPrivate(), s, r, Fo(t) ? e - 1 : e);
          }
          parseHackPipeBody() {
            var t;
            let { startLoc: e } = this.state, s = this.parseMaybeAssign();
            return b.has(s.type) && !((t = s.extra) != null && t.parenthesized) && this.raise(u.PipeUnparenthesizedBody, { at: e, type: s.type }), this.topicReferenceWasUsedInCurrentContext() || this.raise(u.PipeTopicUnused, { at: e }), s;
          }
          checkExponentialAfterUnary(t) {
            this.match(57) && this.raise(u.UnexpectedTokenUnaryExponentiation, { at: t.argument });
          }
          parseMaybeUnary(t, e) {
            let s = this.state.start, r = this.state.startLoc, i = this.isContextual(96);
            if (i && this.isAwaitAllowed()) {
              this.next();
              let c = this.parseAwait(s, r);
              return e || this.checkExponentialAfterUnary(c), c;
            }
            let a = this.match(34), n = this.startNode();
            if (Io(this.state.type)) {
              n.operator = this.state.value, n.prefix = true, this.match(72) && this.expectPlugin("throwExpressions");
              let c = this.match(89);
              if (this.next(), n.argument = this.parseMaybeUnary(null, true), this.checkExpressionErrors(t, true), this.state.strict && c) {
                let f = n.argument;
                f.type === "Identifier" ? this.raise(u.StrictDelete, { at: n }) : this.hasPropertyAsPrivateName(f) && this.raise(u.DeletePrivateField, { at: n });
              }
              if (!a)
                return e || this.checkExponentialAfterUnary(n), this.finishNode(n, "UnaryExpression");
            }
            let o = this.parseUpdate(n, a, t);
            if (i) {
              let { type: c } = this.state;
              if ((this.hasPlugin("v8intrinsic") ? lr(c) : lr(c) && !this.match(54)) && !this.isAmbiguousAwait())
                return this.raiseOverwrite(u.AwaitNotInAsyncContext, { at: r }), this.parseAwait(s, r);
            }
            return o;
          }
          parseUpdate(t, e, s) {
            if (e)
              return this.checkLVal(t.argument, { in: this.finishNode(t, "UpdateExpression") }), t;
            let r = this.state.start, i = this.state.startLoc, a = this.parseExprSubscripts(s);
            if (this.checkExpressionErrors(s, false))
              return a;
            for (; No(this.state.type) && !this.canInsertSemicolon(); ) {
              let n = this.startNodeAt(r, i);
              n.operator = this.state.value, n.prefix = false, n.argument = a, this.next(), this.checkLVal(a, { in: a = this.finishNode(n, "UpdateExpression") });
            }
            return a;
          }
          parseExprSubscripts(t) {
            let e = this.state.start, s = this.state.startLoc, r = this.state.potentialArrowAt, i = this.parseExprAtom(t);
            return this.shouldExitDescending(i, r) ? i : this.parseSubscripts(i, e, s);
          }
          parseSubscripts(t, e, s, r) {
            let i = { optionalChainMember: false, maybeAsyncArrow: this.atPossibleAsyncArrow(t), stop: false };
            do
              t = this.parseSubscript(t, e, s, r, i), i.maybeAsyncArrow = false;
            while (!i.stop);
            return t;
          }
          parseSubscript(t, e, s, r, i) {
            let { type: a } = this.state;
            if (!r && a === 15)
              return this.parseBind(t, e, s, r, i);
            if (nt(a))
              return this.parseTaggedTemplateExpression(t, e, s, i);
            let n = false;
            if (a === 18) {
              if (r && this.lookaheadCharCode() === 40)
                return i.stop = true, t;
              i.optionalChainMember = n = true, this.next();
            }
            if (!r && this.match(10))
              return this.parseCoverCallAndAsyncArrowHead(t, e, s, i, n);
            {
              let o = this.eat(0);
              return o || n || this.eat(16) ? this.parseMember(t, e, s, i, o, n) : (i.stop = true, t);
            }
          }
          parseMember(t, e, s, r, i, a) {
            let n = this.startNodeAt(e, s);
            return n.object = t, n.computed = i, i ? (n.property = this.parseExpression(), this.expect(3)) : this.match(134) ? (t.type === "Super" && this.raise(u.SuperPrivateField, { at: s }), this.classScope.usePrivateName(this.state.value, this.state.startLoc), n.property = this.parsePrivateName()) : n.property = this.parseIdentifier(true), r.optionalChainMember ? (n.optional = a, this.finishNode(n, "OptionalMemberExpression")) : this.finishNode(n, "MemberExpression");
          }
          parseBind(t, e, s, r, i) {
            let a = this.startNodeAt(e, s);
            return a.object = t, this.next(), a.callee = this.parseNoCallExpr(), i.stop = true, this.parseSubscripts(this.finishNode(a, "BindExpression"), e, s, r);
          }
          parseCoverCallAndAsyncArrowHead(t, e, s, r, i) {
            let a = this.state.maybeInArrowParameters, n = null;
            this.state.maybeInArrowParameters = true, this.next();
            let o = this.startNodeAt(e, s);
            o.callee = t;
            let { maybeAsyncArrow: c, optionalChainMember: f } = r;
            return c && (this.expressionScope.enter(xh()), n = new gt()), f && (o.optional = i), i ? o.arguments = this.parseCallExpressionArguments(11) : o.arguments = this.parseCallExpressionArguments(11, t.type === "Import", t.type !== "Super", o, n), this.finishCallExpression(o, f), c && this.shouldParseAsyncArrow() && !i ? (r.stop = true, this.checkDestructuringPrivate(n), this.expressionScope.validateAsPattern(), this.expressionScope.exit(), o = this.parseAsyncArrowFromCallExpression(this.startNodeAt(e, s), o)) : (c && (this.checkExpressionErrors(n, true), this.expressionScope.exit()), this.toReferencedArguments(o)), this.state.maybeInArrowParameters = a, o;
          }
          toReferencedArguments(t, e) {
            this.toReferencedListDeep(t.arguments, e);
          }
          parseTaggedTemplateExpression(t, e, s, r) {
            let i = this.startNodeAt(e, s);
            return i.tag = t, i.quasi = this.parseTemplate(true), r.optionalChainMember && this.raise(u.OptionalChainingNoTemplate, { at: s }), this.finishNode(i, "TaggedTemplateExpression");
          }
          atPossibleAsyncArrow(t) {
            return t.type === "Identifier" && t.name === "async" && this.state.lastTokEndLoc.index === t.end && !this.canInsertSemicolon() && t.end - t.start === 5 && t.start === this.state.potentialArrowAt;
          }
          finishCallExpression(t, e) {
            if (t.callee.type === "Import")
              if (t.arguments.length === 2 && (this.hasPlugin("moduleAttributes") || this.expectPlugin("importAssertions")), t.arguments.length === 0 || t.arguments.length > 2)
                this.raise(u.ImportCallArity, { at: t, maxArgumentCount: this.hasPlugin("importAssertions") || this.hasPlugin("moduleAttributes") ? 2 : 1 });
              else
                for (let s of t.arguments)
                  s.type === "SpreadElement" && this.raise(u.ImportCallSpreadArgument, { at: s });
            return this.finishNode(t, e ? "OptionalCallExpression" : "CallExpression");
          }
          parseCallExpressionArguments(t, e, s, r, i) {
            let a = [], n = true, o = this.state.inFSharpPipelineDirectBody;
            for (this.state.inFSharpPipelineDirectBody = false; !this.eat(t); ) {
              if (n)
                n = false;
              else if (this.expect(12), this.match(t)) {
                e && !this.hasPlugin("importAssertions") && !this.hasPlugin("moduleAttributes") && this.raise(u.ImportCallArgumentTrailingComma, { at: this.state.lastTokStartLoc }), r && this.addTrailingCommaExtraToNode(r), this.next();
                break;
              }
              a.push(this.parseExprListItem(false, i, s));
            }
            return this.state.inFSharpPipelineDirectBody = o, a;
          }
          shouldParseAsyncArrow() {
            return this.match(19) && !this.canInsertSemicolon();
          }
          parseAsyncArrowFromCallExpression(t, e) {
            var s;
            return this.resetPreviousNodeTrailingComments(e), this.expect(19), this.parseArrowExpression(t, e.arguments, true, (s = e.extra) == null ? void 0 : s.trailingCommaLoc), e.innerComments && We(t, e.innerComments), e.callee.trailingComments && We(t, e.callee.trailingComments), t;
          }
          parseNoCallExpr() {
            let t = this.state.start, e = this.state.startLoc;
            return this.parseSubscripts(this.parseExprAtom(), t, e, true);
          }
          parseExprAtom(t) {
            let e, { type: s } = this.state;
            switch (s) {
              case 79:
                return this.parseSuper();
              case 83:
                return e = this.startNode(), this.next(), this.match(16) ? this.parseImportMetaProperty(e) : (this.match(10) || this.raise(u.UnsupportedImport, { at: this.state.lastTokStartLoc }), this.finishNode(e, "Import"));
              case 78:
                return e = this.startNode(), this.next(), this.finishNode(e, "ThisExpression");
              case 90:
                return this.parseDo(this.startNode(), false);
              case 56:
              case 31:
                return this.readRegexp(), this.parseRegExpLiteral(this.state.value);
              case 130:
                return this.parseNumericLiteral(this.state.value);
              case 131:
                return this.parseBigIntLiteral(this.state.value);
              case 132:
                return this.parseDecimalLiteral(this.state.value);
              case 129:
                return this.parseStringLiteral(this.state.value);
              case 84:
                return this.parseNullLiteral();
              case 85:
                return this.parseBooleanLiteral(true);
              case 86:
                return this.parseBooleanLiteral(false);
              case 10: {
                let r = this.state.potentialArrowAt === this.state.start;
                return this.parseParenAndDistinguishExpression(r);
              }
              case 2:
              case 1:
                return this.parseArrayLike(this.state.type === 2 ? 4 : 3, false, true);
              case 0:
                return this.parseArrayLike(3, true, false, t);
              case 6:
              case 7:
                return this.parseObjectLike(this.state.type === 6 ? 9 : 8, false, true);
              case 5:
                return this.parseObjectLike(8, false, false, t);
              case 68:
                return this.parseFunctionOrFunctionSent();
              case 26:
                this.parseDecorators();
              case 80:
                return e = this.startNode(), this.takeDecorators(e), this.parseClass(e, false);
              case 77:
                return this.parseNewOrNewTarget();
              case 25:
              case 24:
                return this.parseTemplate(false);
              case 15: {
                e = this.startNode(), this.next(), e.object = null;
                let r = e.callee = this.parseNoCallExpr();
                if (r.type === "MemberExpression")
                  return this.finishNode(e, "BindExpression");
                throw this.raise(u.UnsupportedBind, { at: r });
              }
              case 134:
                return this.raise(u.PrivateInExpectedIn, { at: this.state.startLoc, identifierName: this.state.value }), this.parsePrivateName();
              case 33:
                return this.parseTopicReferenceThenEqualsSign(54, "%");
              case 32:
                return this.parseTopicReferenceThenEqualsSign(44, "^");
              case 37:
              case 38:
                return this.parseTopicReference("hack");
              case 44:
              case 54:
              case 27: {
                let r = this.getPluginOption("pipelineOperator", "proposal");
                if (r)
                  return this.parseTopicReference(r);
                throw this.unexpected();
              }
              case 47: {
                let r = this.input.codePointAt(this.nextTokenStart());
                if (de(r) || r === 62) {
                  this.expectOnePlugin(["jsx", "flow", "typescript"]);
                  break;
                } else
                  throw this.unexpected();
              }
              default:
                if (K(s)) {
                  if (this.isContextual(123) && this.lookaheadCharCode() === 123 && !this.hasFollowingLineBreak())
                    return this.parseModuleExpression();
                  let r = this.state.potentialArrowAt === this.state.start, i = this.state.containsEsc, a = this.parseIdentifier();
                  if (!i && a.name === "async" && !this.canInsertSemicolon()) {
                    let { type: n } = this.state;
                    if (n === 68)
                      return this.resetPreviousNodeTrailingComments(a), this.next(), this.parseFunction(this.startNodeAtNode(a), void 0, true);
                    if (K(n))
                      return this.lookaheadCharCode() === 61 ? this.parseAsyncArrowUnaryFunction(this.startNodeAtNode(a)) : a;
                    if (n === 90)
                      return this.resetPreviousNodeTrailingComments(a), this.parseDo(this.startNodeAtNode(a), true);
                  }
                  return r && this.match(19) && !this.canInsertSemicolon() ? (this.next(), this.parseArrowExpression(this.startNodeAtNode(a), [a], false)) : a;
                } else
                  throw this.unexpected();
            }
          }
          parseTopicReferenceThenEqualsSign(t, e) {
            let s = this.getPluginOption("pipelineOperator", "proposal");
            if (s)
              return this.state.type = t, this.state.value = e, this.state.pos--, this.state.end--, this.state.endLoc = m(this.state.endLoc, -1), this.parseTopicReference(s);
            throw this.unexpected();
          }
          parseTopicReference(t) {
            let e = this.startNode(), s = this.state.startLoc, r = this.state.type;
            return this.next(), this.finishTopicReference(e, s, t, r);
          }
          finishTopicReference(t, e, s, r) {
            if (this.testTopicReferenceConfiguration(s, e, r)) {
              let i = s === "smart" ? "PipelinePrimaryTopicReference" : "TopicReference";
              return this.topicReferenceIsAllowedInCurrentContext() || this.raise(s === "smart" ? u.PrimaryTopicNotAllowed : u.PipeTopicUnbound, { at: e }), this.registerTopicReference(), this.finishNode(t, i);
            } else
              throw this.raise(u.PipeTopicUnconfiguredToken, { at: e, token: Te(r) });
          }
          testTopicReferenceConfiguration(t, e, s) {
            switch (t) {
              case "hack":
                return this.hasPlugin(["pipelineOperator", { topicToken: Te(s) }]);
              case "smart":
                return s === 27;
              default:
                throw this.raise(u.PipeTopicRequiresHackPipes, { at: e });
            }
          }
          parseAsyncArrowUnaryFunction(t) {
            this.prodParam.enter(xt(true, this.prodParam.hasYield));
            let e = [this.parseIdentifier()];
            return this.prodParam.exit(), this.hasPrecedingLineBreak() && this.raise(u.LineTerminatorBeforeArrow, { at: this.state.curPosition() }), this.expect(19), this.parseArrowExpression(t, e, true), t;
          }
          parseDo(t, e) {
            this.expectPlugin("doExpressions"), e && this.expectPlugin("asyncDoExpressions"), t.async = e, this.next();
            let s = this.state.labels;
            return this.state.labels = [], e ? (this.prodParam.enter(yt), t.body = this.parseBlock(), this.prodParam.exit()) : t.body = this.parseBlock(), this.state.labels = s, this.finishNode(t, "DoExpression");
          }
          parseSuper() {
            let t = this.startNode();
            return this.next(), this.match(10) && !this.scope.allowDirectSuper && !this.options.allowSuperOutsideMethod ? this.raise(u.SuperNotAllowed, { at: t }) : !this.scope.allowSuper && !this.options.allowSuperOutsideMethod && this.raise(u.UnexpectedSuper, { at: t }), !this.match(10) && !this.match(0) && !this.match(16) && this.raise(u.UnsupportedSuper, { at: t }), this.finishNode(t, "Super");
          }
          parsePrivateName() {
            let t = this.startNode(), e = this.startNodeAt(this.state.start + 1, new p(this.state.curLine, this.state.start + 1 - this.state.lineStart, this.state.start + 1)), s = this.state.value;
            return this.next(), t.id = this.createIdentifier(e, s), this.finishNode(t, "PrivateName");
          }
          parseFunctionOrFunctionSent() {
            let t = this.startNode();
            if (this.next(), this.prodParam.hasYield && this.match(16)) {
              let e = this.createIdentifier(this.startNodeAtNode(t), "function");
              return this.next(), this.match(102) ? this.expectPlugin("functionSent") : this.hasPlugin("functionSent") || this.unexpected(), this.parseMetaProperty(t, e, "sent");
            }
            return this.parseFunction(t);
          }
          parseMetaProperty(t, e, s) {
            t.meta = e;
            let r = this.state.containsEsc;
            return t.property = this.parseIdentifier(true), (t.property.name !== s || r) && this.raise(u.UnsupportedMetaProperty, { at: t.property, target: e.name, onlyValidPropertyName: s }), this.finishNode(t, "MetaProperty");
          }
          parseImportMetaProperty(t) {
            let e = this.createIdentifier(this.startNodeAtNode(t), "import");
            return this.next(), this.isContextual(100) && (this.inModule || this.raise(u.ImportMetaOutsideModule, { at: e }), this.sawUnambiguousESM = true), this.parseMetaProperty(t, e, "meta");
          }
          parseLiteralAtNode(t, e, s) {
            return this.addExtra(s, "rawValue", t), this.addExtra(s, "raw", this.input.slice(s.start, this.state.end)), s.value = t, this.next(), this.finishNode(s, e);
          }
          parseLiteral(t, e) {
            let s = this.startNode();
            return this.parseLiteralAtNode(t, e, s);
          }
          parseStringLiteral(t) {
            return this.parseLiteral(t, "StringLiteral");
          }
          parseNumericLiteral(t) {
            return this.parseLiteral(t, "NumericLiteral");
          }
          parseBigIntLiteral(t) {
            return this.parseLiteral(t, "BigIntLiteral");
          }
          parseDecimalLiteral(t) {
            return this.parseLiteral(t, "DecimalLiteral");
          }
          parseRegExpLiteral(t) {
            let e = this.parseLiteral(t.value, "RegExpLiteral");
            return e.pattern = t.pattern, e.flags = t.flags, e;
          }
          parseBooleanLiteral(t) {
            let e = this.startNode();
            return e.value = t, this.next(), this.finishNode(e, "BooleanLiteral");
          }
          parseNullLiteral() {
            let t = this.startNode();
            return this.next(), this.finishNode(t, "NullLiteral");
          }
          parseParenAndDistinguishExpression(t) {
            let e = this.state.start, s = this.state.startLoc, r;
            this.next(), this.expressionScope.enter(yh());
            let i = this.state.maybeInArrowParameters, a = this.state.inFSharpPipelineDirectBody;
            this.state.maybeInArrowParameters = true, this.state.inFSharpPipelineDirectBody = false;
            let n = this.state.start, o = this.state.startLoc, c = [], f = new gt(), y = true, C, S;
            for (; !this.match(11); ) {
              if (y)
                y = false;
              else if (this.expect(12, f.optionalParametersLoc === null ? null : f.optionalParametersLoc), this.match(11)) {
                S = this.state.startLoc;
                break;
              }
              if (this.match(21)) {
                let $ = this.state.start, te = this.state.startLoc;
                if (C = this.state.startLoc, c.push(this.parseParenItem(this.parseRestBinding(), $, te)), !this.checkCommaAfterRest(41))
                  break;
              } else
                c.push(this.parseMaybeAssignAllowIn(f, this.parseParenItem));
            }
            let I = this.state.lastTokEndLoc;
            this.expect(11), this.state.maybeInArrowParameters = i, this.state.inFSharpPipelineDirectBody = a;
            let M = this.startNodeAt(e, s);
            if (t && this.shouldParseArrow(c) && (M = this.parseArrow(M)))
              return this.checkDestructuringPrivate(f), this.expressionScope.validateAsPattern(), this.expressionScope.exit(), this.parseArrowExpression(M, c, false), M;
            if (this.expressionScope.exit(), c.length || this.unexpected(this.state.lastTokStartLoc), S && this.unexpected(S), C && this.unexpected(C), this.checkExpressionErrors(f, true), this.toReferencedListDeep(c, true), c.length > 1 ? (r = this.startNodeAt(n, o), r.expressions = c, this.finishNode(r, "SequenceExpression"), this.resetEndLocation(r, I)) : r = c[0], !this.options.createParenthesizedExpressions)
              return this.addExtra(r, "parenthesized", true), this.addExtra(r, "parenStart", e), this.takeSurroundingComments(r, e, this.state.lastTokEndLoc.index), r;
            let R = this.startNodeAt(e, s);
            return R.expression = r, this.finishNode(R, "ParenthesizedExpression"), R;
          }
          shouldParseArrow(t) {
            return !this.canInsertSemicolon();
          }
          parseArrow(t) {
            if (this.eat(19))
              return t;
          }
          parseParenItem(t, e, s) {
            return t;
          }
          parseNewOrNewTarget() {
            let t = this.startNode();
            if (this.next(), this.match(16)) {
              let e = this.createIdentifier(this.startNodeAtNode(t), "new");
              this.next();
              let s = this.parseMetaProperty(t, e, "target");
              return !this.scope.inNonArrowFunction && !this.scope.inClass && this.raise(u.UnexpectedNewTarget, { at: s }), s;
            }
            return this.parseNew(t);
          }
          parseNew(t) {
            return t.callee = this.parseNoCallExpr(), t.callee.type === "Import" ? this.raise(u.ImportCallNotNewExpression, { at: t.callee }) : this.isOptionalChain(t.callee) ? this.raise(u.OptionalChainingNoNew, { at: this.state.lastTokEndLoc }) : this.eat(18) && this.raise(u.OptionalChainingNoNew, { at: this.state.startLoc }), this.parseNewArguments(t), this.finishNode(t, "NewExpression");
          }
          parseNewArguments(t) {
            if (this.eat(10)) {
              let e = this.parseExprList(11);
              this.toReferencedList(e), t.arguments = e;
            } else
              t.arguments = [];
          }
          parseTemplateElement(t) {
            let { start: e, startLoc: s, end: r, value: i } = this.state, a = e + 1, n = this.startNodeAt(a, m(s, 1));
            i === null && (t || this.raise(u.InvalidEscapeSequenceTemplate, { at: m(s, 2) }));
            let o = this.match(24), c = o ? -1 : -2, f = r + c;
            return n.value = { raw: this.input.slice(a, f).replace(/\r\n?/g, `
`), cooked: i === null ? null : i.slice(1, c) }, n.tail = o, this.next(), this.finishNode(n, "TemplateElement"), this.resetEndLocation(n, m(this.state.lastTokEndLoc, c)), n;
          }
          parseTemplate(t) {
            let e = this.startNode();
            e.expressions = [];
            let s = this.parseTemplateElement(t);
            for (e.quasis = [s]; !s.tail; )
              e.expressions.push(this.parseTemplateSubstitution()), this.readTemplateContinuation(), e.quasis.push(s = this.parseTemplateElement(t));
            return this.finishNode(e, "TemplateLiteral");
          }
          parseTemplateSubstitution() {
            return this.parseExpression();
          }
          parseObjectLike(t, e, s, r) {
            s && this.expectPlugin("recordAndTuple");
            let i = this.state.inFSharpPipelineDirectBody;
            this.state.inFSharpPipelineDirectBody = false;
            let a = /* @__PURE__ */ Object.create(null), n = true, o = this.startNode();
            for (o.properties = [], this.next(); !this.match(t); ) {
              if (n)
                n = false;
              else if (this.expect(12), this.match(t)) {
                this.addTrailingCommaExtraToNode(o);
                break;
              }
              let f;
              e ? f = this.parseBindingProperty() : (f = this.parsePropertyDefinition(r), this.checkProto(f, s, a, r)), s && !this.isObjectProperty(f) && f.type !== "SpreadElement" && this.raise(u.InvalidRecordProperty, { at: f }), f.shorthand && this.addExtra(f, "shorthand", true), o.properties.push(f);
            }
            this.next(), this.state.inFSharpPipelineDirectBody = i;
            let c = "ObjectExpression";
            return e ? c = "ObjectPattern" : s && (c = "RecordExpression"), this.finishNode(o, c);
          }
          addTrailingCommaExtraToNode(t) {
            this.addExtra(t, "trailingComma", this.state.lastTokStart), this.addExtra(t, "trailingCommaLoc", this.state.lastTokStartLoc, false);
          }
          maybeAsyncOrAccessorProp(t) {
            return !t.computed && t.key.type === "Identifier" && (this.isLiteralPropertyName() || this.match(0) || this.match(55));
          }
          parsePropertyDefinition(t) {
            let e = [];
            if (this.match(26))
              for (this.hasPlugin("decorators") && this.raise(u.UnsupportedPropertyDecorator, { at: this.state.startLoc }); this.match(26); )
                e.push(this.parseDecorator());
            let s = this.startNode(), r = false, i = false, a, n;
            if (this.match(21))
              return e.length && this.unexpected(), this.parseSpread();
            e.length && (s.decorators = e, e = []), s.method = false, t && (a = this.state.start, n = this.state.startLoc);
            let o = this.eat(55);
            this.parsePropertyNamePrefixOperator(s);
            let c = this.state.containsEsc, f = this.parsePropertyName(s, t);
            if (!o && !c && this.maybeAsyncOrAccessorProp(s)) {
              let y = f.name;
              y === "async" && !this.hasPrecedingLineBreak() && (r = true, this.resetPreviousNodeTrailingComments(f), o = this.eat(55), this.parsePropertyName(s)), (y === "get" || y === "set") && (i = true, this.resetPreviousNodeTrailingComments(f), s.kind = y, this.match(55) && (o = true, this.raise(u.AccessorIsGenerator, { at: this.state.curPosition(), kind: y }), this.next()), this.parsePropertyName(s));
            }
            return this.parseObjPropValue(s, a, n, o, r, false, i, t), s;
          }
          getGetterSetterExpectedParamCount(t) {
            return t.kind === "get" ? 0 : 1;
          }
          getObjectOrClassMethodParams(t) {
            return t.params;
          }
          checkGetterSetterParams(t) {
            var e;
            let s = this.getGetterSetterExpectedParamCount(t), r = this.getObjectOrClassMethodParams(t);
            r.length !== s && this.raise(t.kind === "get" ? u.BadGetterArity : u.BadSetterArity, { at: t }), t.kind === "set" && ((e = r[r.length - 1]) == null ? void 0 : e.type) === "RestElement" && this.raise(u.BadSetterRestParameter, { at: t });
          }
          parseObjectMethod(t, e, s, r, i) {
            if (i)
              return this.parseMethod(t, e, false, false, false, "ObjectMethod"), this.checkGetterSetterParams(t), t;
            if (s || e || this.match(10))
              return r && this.unexpected(), t.kind = "method", t.method = true, this.parseMethod(t, e, s, false, false, "ObjectMethod");
          }
          parseObjectProperty(t, e, s, r, i) {
            if (t.shorthand = false, this.eat(14))
              return t.value = r ? this.parseMaybeDefault(this.state.start, this.state.startLoc) : this.parseMaybeAssignAllowIn(i), this.finishNode(t, "ObjectProperty");
            if (!t.computed && t.key.type === "Identifier") {
              if (this.checkReservedWord(t.key.name, t.key.loc.start, true, false), r)
                t.value = this.parseMaybeDefault(e, s, ge(t.key));
              else if (this.match(29)) {
                let a = this.state.startLoc;
                i != null ? i.shorthandAssignLoc === null && (i.shorthandAssignLoc = a) : this.raise(u.InvalidCoverInitializedName, { at: a }), t.value = this.parseMaybeDefault(e, s, ge(t.key));
              } else
                t.value = ge(t.key);
              return t.shorthand = true, this.finishNode(t, "ObjectProperty");
            }
          }
          parseObjPropValue(t, e, s, r, i, a, n, o) {
            let c = this.parseObjectMethod(t, r, i, a, n) || this.parseObjectProperty(t, e, s, a, o);
            return c || this.unexpected(), c;
          }
          parsePropertyName(t, e) {
            if (this.eat(0))
              t.computed = true, t.key = this.parseMaybeAssignAllowIn(), this.expect(3);
            else {
              let { type: s, value: r } = this.state, i;
              if (pe(s))
                i = this.parseIdentifier(true);
              else
                switch (s) {
                  case 130:
                    i = this.parseNumericLiteral(r);
                    break;
                  case 129:
                    i = this.parseStringLiteral(r);
                    break;
                  case 131:
                    i = this.parseBigIntLiteral(r);
                    break;
                  case 132:
                    i = this.parseDecimalLiteral(r);
                    break;
                  case 134: {
                    let a = this.state.startLoc;
                    e != null ? e.privateKeyLoc === null && (e.privateKeyLoc = a) : this.raise(u.UnexpectedPrivateField, { at: a }), i = this.parsePrivateName();
                    break;
                  }
                  default:
                    throw this.unexpected();
                }
              t.key = i, s !== 134 && (t.computed = false);
            }
            return t.key;
          }
          initFunction(t, e) {
            t.id = null, t.generator = false, t.async = !!e;
          }
          parseMethod(t, e, s, r, i, a) {
            let n = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : false;
            this.initFunction(t, s), t.generator = !!e;
            let o = r;
            return this.scope.enter(me | ot | (n ? we : 0) | (i ? gr : 0)), this.prodParam.enter(xt(s, t.generator)), this.parseFunctionParams(t, o), this.parseFunctionBodyAndFinish(t, a, true), this.prodParam.exit(), this.scope.exit(), t;
          }
          parseArrayLike(t, e, s, r) {
            s && this.expectPlugin("recordAndTuple");
            let i = this.state.inFSharpPipelineDirectBody;
            this.state.inFSharpPipelineDirectBody = false;
            let a = this.startNode();
            return this.next(), a.elements = this.parseExprList(t, !s, r, a), this.state.inFSharpPipelineDirectBody = i, this.finishNode(a, s ? "TupleExpression" : "ArrayExpression");
          }
          parseArrowExpression(t, e, s, r) {
            this.scope.enter(me | Xt);
            let i = xt(s, false);
            !this.match(5) && this.prodParam.hasIn && (i |= Ue), this.prodParam.enter(i), this.initFunction(t, s);
            let a = this.state.maybeInArrowParameters;
            return e && (this.state.maybeInArrowParameters = true, this.setArrowFunctionParameters(t, e, r)), this.state.maybeInArrowParameters = false, this.parseFunctionBody(t, true), this.prodParam.exit(), this.scope.exit(), this.state.maybeInArrowParameters = a, this.finishNode(t, "ArrowFunctionExpression");
          }
          setArrowFunctionParameters(t, e, s) {
            t.params = this.toAssignableList(e, s, false);
          }
          parseFunctionBodyAndFinish(t, e) {
            let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
            this.parseFunctionBody(t, false, s), this.finishNode(t, e);
          }
          parseFunctionBody(t, e) {
            let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, r = e && !this.match(5);
            if (this.expressionScope.enter(Fr()), r)
              t.body = this.parseMaybeAssign(), this.checkParams(t, false, e, false);
            else {
              let i = this.state.strict, a = this.state.labels;
              this.state.labels = [], this.prodParam.enter(this.prodParam.currentFlags() | Or), t.body = this.parseBlock(true, false, (n) => {
                let o = !this.isSimpleParamList(t.params);
                n && o && this.raise(u.IllegalLanguageModeDirective, { at: (t.kind === "method" || t.kind === "constructor") && !!t.key ? t.key.loc.end : t });
                let c = !i && this.state.strict;
                this.checkParams(t, !this.state.strict && !e && !s && !o, e, c), this.state.strict && t.id && this.checkIdentifier(t.id, Ho, c);
              }), this.prodParam.exit(), this.state.labels = a;
            }
            this.expressionScope.exit();
          }
          isSimpleParameter(t) {
            return t.type === "Identifier";
          }
          isSimpleParamList(t) {
            for (let e = 0, s = t.length; e < s; e++)
              if (!this.isSimpleParameter(t[e]))
                return false;
            return true;
          }
          checkParams(t, e, s) {
            let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, i = !e && /* @__PURE__ */ new Set(), a = { type: "FormalParameters" };
            for (let n of t.params)
              this.checkLVal(n, { in: a, binding: pt, checkClashes: i, strictModeChanged: r });
          }
          parseExprList(t, e, s, r) {
            let i = [], a = true;
            for (; !this.eat(t); ) {
              if (a)
                a = false;
              else if (this.expect(12), this.match(t)) {
                r && this.addTrailingCommaExtraToNode(r), this.next();
                break;
              }
              i.push(this.parseExprListItem(e, s));
            }
            return i;
          }
          parseExprListItem(t, e, s) {
            let r;
            if (this.match(12))
              t || this.raise(u.UnexpectedToken, { at: this.state.curPosition(), unexpected: "," }), r = null;
            else if (this.match(21)) {
              let i = this.state.start, a = this.state.startLoc;
              r = this.parseParenItem(this.parseSpread(e), i, a);
            } else if (this.match(17)) {
              this.expectPlugin("partialApplication"), s || this.raise(u.UnexpectedArgumentPlaceholder, { at: this.state.startLoc });
              let i = this.startNode();
              this.next(), r = this.finishNode(i, "ArgumentPlaceholder");
            } else
              r = this.parseMaybeAssignAllowIn(e, this.parseParenItem);
            return r;
          }
          parseIdentifier(t) {
            let e = this.startNode(), s = this.parseIdentifierName(e.start, t);
            return this.createIdentifier(e, s);
          }
          createIdentifier(t, e) {
            return t.name = e, t.loc.identifierName = e, this.finishNode(t, "Identifier");
          }
          parseIdentifierName(t, e) {
            let s, { startLoc: r, type: i } = this.state;
            if (pe(i))
              s = this.state.value;
            else
              throw this.unexpected();
            let a = bo(i);
            return e ? a && this.replaceToken(128) : this.checkReservedWord(s, r, a, false), this.next(), s;
          }
          checkReservedWord(t, e, s, r) {
            if (t.length > 10 || !zo(t))
              return;
            if (t === "yield") {
              if (this.prodParam.hasYield) {
                this.raise(u.YieldBindingIdentifier, { at: e });
                return;
              }
            } else if (t === "await") {
              if (this.prodParam.hasAwait) {
                this.raise(u.AwaitBindingIdentifier, { at: e });
                return;
              }
              if (this.scope.inStaticBlock) {
                this.raise(u.AwaitBindingIdentifierInStaticBlock, { at: e });
                return;
              }
              this.expressionScope.recordAsyncArrowParametersError({ at: e });
            } else if (t === "arguments" && this.scope.inClassAndNotInNonArrowFunction) {
              this.raise(u.ArgumentsInClass, { at: e });
              return;
            }
            if (s && qo(t)) {
              this.raise(u.UnexpectedKeyword, { at: e, keyword: t });
              return;
            }
            (this.state.strict ? r ? yr : dr : fr)(t, this.inModule) && this.raise(u.UnexpectedReservedWord, { at: e, reservedWord: t });
          }
          isAwaitAllowed() {
            return !!(this.prodParam.hasAwait || this.options.allowAwaitOutsideFunction && !this.scope.inFunction);
          }
          parseAwait(t, e) {
            let s = this.startNodeAt(t, e);
            return this.expressionScope.recordParameterInitializerError(u.AwaitExpressionFormalParameter, { at: s }), this.eat(55) && this.raise(u.ObsoleteAwaitStar, { at: s }), !this.scope.inFunction && !this.options.allowAwaitOutsideFunction && (this.isAmbiguousAwait() ? this.ambiguousScriptDifferentAst = true : this.sawUnambiguousESM = true), this.state.soloAwait || (s.argument = this.parseMaybeUnary(null, true)), this.finishNode(s, "AwaitExpression");
          }
          isAmbiguousAwait() {
            if (this.hasPrecedingLineBreak())
              return true;
            let { type: t } = this.state;
            return t === 53 || t === 10 || t === 0 || nt(t) || t === 133 || t === 56 || this.hasPlugin("v8intrinsic") && t === 54;
          }
          parseYield() {
            let t = this.startNode();
            this.expressionScope.recordParameterInitializerError(u.YieldInParameter, { at: t }), this.next();
            let e = false, s = null;
            if (!this.hasPrecedingLineBreak())
              switch (e = this.eat(55), this.state.type) {
                case 13:
                case 135:
                case 8:
                case 11:
                case 3:
                case 9:
                case 14:
                case 12:
                  if (!e)
                    break;
                default:
                  s = this.parseMaybeAssign();
              }
            return t.delegate = e, t.argument = s, this.finishNode(t, "YieldExpression");
          }
          checkPipelineAtInfixOperator(t, e) {
            this.hasPlugin(["pipelineOperator", { proposal: "smart" }]) && t.type === "SequenceExpression" && this.raise(u.PipelineHeadSequenceExpression, { at: e });
          }
          parseSmartPipelineBodyInStyle(t, e, s) {
            let r = this.startNodeAt(e, s);
            return this.isSimpleReference(t) ? (r.callee = t, this.finishNode(r, "PipelineBareFunction")) : (this.checkSmartPipeTopicBodyEarlyErrors(s), r.expression = t, this.finishNode(r, "PipelineTopicExpression"));
          }
          isSimpleReference(t) {
            switch (t.type) {
              case "MemberExpression":
                return !t.computed && this.isSimpleReference(t.object);
              case "Identifier":
                return true;
              default:
                return false;
            }
          }
          checkSmartPipeTopicBodyEarlyErrors(t) {
            if (this.match(19))
              throw this.raise(u.PipelineBodyNoArrow, { at: this.state.startLoc });
            this.topicReferenceWasUsedInCurrentContext() || this.raise(u.PipelineTopicUnused, { at: t });
          }
          withTopicBindingContext(t) {
            let e = this.state.topicContext;
            this.state.topicContext = { maxNumOfResolvableTopics: 1, maxTopicIndex: null };
            try {
              return t();
            } finally {
              this.state.topicContext = e;
            }
          }
          withSmartMixTopicForbiddingContext(t) {
            if (this.hasPlugin(["pipelineOperator", { proposal: "smart" }])) {
              let e = this.state.topicContext;
              this.state.topicContext = { maxNumOfResolvableTopics: 0, maxTopicIndex: null };
              try {
                return t();
              } finally {
                this.state.topicContext = e;
              }
            } else
              return t();
          }
          withSoloAwaitPermittingContext(t) {
            let e = this.state.soloAwait;
            this.state.soloAwait = true;
            try {
              return t();
            } finally {
              this.state.soloAwait = e;
            }
          }
          allowInAnd(t) {
            let e = this.prodParam.currentFlags();
            if (Ue & ~e) {
              this.prodParam.enter(e | Ue);
              try {
                return t();
              } finally {
                this.prodParam.exit();
              }
            }
            return t();
          }
          disallowInAnd(t) {
            let e = this.prodParam.currentFlags();
            if (Ue & e) {
              this.prodParam.enter(e & ~Ue);
              try {
                return t();
              } finally {
                this.prodParam.exit();
              }
            }
            return t();
          }
          registerTopicReference() {
            this.state.topicContext.maxTopicIndex = 0;
          }
          topicReferenceIsAllowedInCurrentContext() {
            return this.state.topicContext.maxNumOfResolvableTopics >= 1;
          }
          topicReferenceWasUsedInCurrentContext() {
            return this.state.topicContext.maxTopicIndex != null && this.state.topicContext.maxTopicIndex >= 0;
          }
          parseFSharpPipelineBody(t) {
            let e = this.state.start, s = this.state.startLoc;
            this.state.potentialArrowAt = this.state.start;
            let r = this.state.inFSharpPipelineDirectBody;
            this.state.inFSharpPipelineDirectBody = true;
            let i = this.parseExprOp(this.parseMaybeUnaryOrPrivate(), e, s, t);
            return this.state.inFSharpPipelineDirectBody = r, i;
          }
          parseModuleExpression() {
            this.expectPlugin("moduleBlocks");
            let t = this.startNode();
            this.next(), this.eat(5);
            let e = this.initializeScopes(true);
            this.enterInitialScopes();
            let s = this.startNode();
            try {
              t.body = this.parseProgram(s, 8, "module");
            } finally {
              e();
            }
            return this.eat(8), this.finishNode(t, "ModuleExpression");
          }
          parsePropertyNamePrefixOperator(t) {
          }
        }, ps = { kind: "loop" }, Wh = { kind: "switch" }, Gh = 0, fs = 1, Hr = 2, Wr = 4, Xh = /[\uD800-\uDFFF]/u, ds = /in(?:stanceof)?/y;
        function Jh(t, e) {
          for (let s = 0; s < t.length; s++) {
            let r = t[s], { type: i } = r;
            if (typeof i == "number") {
              {
                if (i === 134) {
                  let { loc: a, start: n, value: o, end: c } = r, f = n + 1, y = m(a.start, 1);
                  t.splice(s, 1, new be({ type: fe(27), value: "#", start: n, end: f, startLoc: a.start, endLoc: y }), new be({ type: fe(128), value: o, start: f, end: c, startLoc: y, endLoc: a.end })), s++;
                  continue;
                }
                if (nt(i)) {
                  let { loc: a, start: n, value: o, end: c } = r, f = n + 1, y = m(a.start, 1), C;
                  e.charCodeAt(n) === 96 ? C = new be({ type: fe(22), value: "`", start: n, end: f, startLoc: a.start, endLoc: y }) : C = new be({ type: fe(8), value: "}", start: n, end: f, startLoc: a.start, endLoc: y });
                  let S, I, M, R;
                  i === 24 ? (I = c - 1, M = m(a.end, -1), S = o === null ? null : o.slice(1, -1), R = new be({ type: fe(22), value: "`", start: I, end: c, startLoc: M, endLoc: a.end })) : (I = c - 2, M = m(a.end, -2), S = o === null ? null : o.slice(1, -2), R = new be({ type: fe(23), value: "${", start: I, end: c, startLoc: M, endLoc: a.end })), t.splice(s, 1, C, new be({ type: fe(20), value: S, start: f, end: I, startLoc: y, endLoc: M }), R), s += 2;
                  continue;
                }
              }
              r.type = fe(i);
            }
          }
          return t;
        }
        var Yh = class extends Hh {
          parseTopLevel(t, e) {
            return t.program = this.parseProgram(e), t.comments = this.state.comments, this.options.tokens && (t.tokens = Jh(this.tokens, this.input)), this.finishNode(t, "File");
          }
          parseProgram(t) {
            let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 135, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.options.sourceType;
            if (t.sourceType = s, t.interpreter = this.parseInterpreterDirective(), this.parseBlockBody(t, true, true, e), this.inModule && !this.options.allowUndeclaredExports && this.scope.undefinedExports.size > 0)
              for (let [r, i] of Array.from(this.scope.undefinedExports))
                this.raise(u.ModuleExportUndefined, { at: i, localName: r });
            return this.finishNode(t, "Program");
          }
          stmtToDirective(t) {
            let e = t;
            e.type = "Directive", e.value = e.expression, delete e.expression;
            let s = e.value, r = s.value, i = this.input.slice(s.start, s.end), a = s.value = i.slice(1, -1);
            return this.addExtra(s, "raw", i), this.addExtra(s, "rawValue", a), this.addExtra(s, "expressionValue", r), s.type = "DirectiveLiteral", e;
          }
          parseInterpreterDirective() {
            if (!this.match(28))
              return null;
            let t = this.startNode();
            return t.value = this.state.value, this.next(), this.finishNode(t, "InterpreterDirective");
          }
          isLet(t) {
            return this.isContextual(99) ? this.isLetKeyword(t) : false;
          }
          isLetKeyword(t) {
            let e = this.nextTokenStart(), s = this.codePointAtPos(e);
            if (s === 92 || s === 91)
              return true;
            if (t)
              return false;
            if (s === 123)
              return true;
            if (de(s)) {
              if (ds.lastIndex = e, ds.test(this.input)) {
                let r = this.codePointAtPos(ds.lastIndex);
                if (!Me(r) && r !== 92)
                  return false;
              }
              return true;
            }
            return false;
          }
          parseStatement(t, e) {
            return this.match(26) && this.parseDecorators(true), this.parseStatementContent(t, e);
          }
          parseStatementContent(t, e) {
            let s = this.state.type, r = this.startNode(), i;
            switch (this.isLet(t) && (s = 74, i = "let"), s) {
              case 60:
                return this.parseBreakContinueStatement(r, true);
              case 63:
                return this.parseBreakContinueStatement(r, false);
              case 64:
                return this.parseDebuggerStatement(r);
              case 90:
                return this.parseDoStatement(r);
              case 91:
                return this.parseForStatement(r);
              case 68:
                if (this.lookaheadCharCode() === 46)
                  break;
                return t && (this.state.strict ? this.raise(u.StrictFunction, { at: this.state.startLoc }) : t !== "if" && t !== "label" && this.raise(u.SloppyFunction, { at: this.state.startLoc })), this.parseFunctionStatement(r, false, !t);
              case 80:
                return t && this.unexpected(), this.parseClass(r, true);
              case 69:
                return this.parseIfStatement(r);
              case 70:
                return this.parseReturnStatement(r);
              case 71:
                return this.parseSwitchStatement(r);
              case 72:
                return this.parseThrowStatement(r);
              case 73:
                return this.parseTryStatement(r);
              case 75:
              case 74:
                return i = i || this.state.value, t && i !== "var" && this.raise(u.UnexpectedLexicalDeclaration, { at: this.state.startLoc }), this.parseVarStatement(r, i);
              case 92:
                return this.parseWhileStatement(r);
              case 76:
                return this.parseWithStatement(r);
              case 5:
                return this.parseBlock();
              case 13:
                return this.parseEmptyStatement(r);
              case 83: {
                let o = this.lookaheadCharCode();
                if (o === 40 || o === 46)
                  break;
              }
              case 82: {
                !this.options.allowImportExportEverywhere && !e && this.raise(u.UnexpectedImportExport, { at: this.state.startLoc }), this.next();
                let o;
                return s === 83 ? (o = this.parseImport(r), o.type === "ImportDeclaration" && (!o.importKind || o.importKind === "value") && (this.sawUnambiguousESM = true)) : (o = this.parseExport(r), (o.type === "ExportNamedDeclaration" && (!o.exportKind || o.exportKind === "value") || o.type === "ExportAllDeclaration" && (!o.exportKind || o.exportKind === "value") || o.type === "ExportDefaultDeclaration") && (this.sawUnambiguousESM = true)), this.assertModuleNodeAllowed(r), o;
              }
              default:
                if (this.isAsyncFunction())
                  return t && this.raise(u.AsyncFunctionInSingleStatementContext, { at: this.state.startLoc }), this.next(), this.parseFunctionStatement(r, true, !t);
            }
            let a = this.state.value, n = this.parseExpression();
            return K(s) && n.type === "Identifier" && this.eat(14) ? this.parseLabeledStatement(r, a, n, t) : this.parseExpressionStatement(r, n);
          }
          assertModuleNodeAllowed(t) {
            !this.options.allowImportExportEverywhere && !this.inModule && this.raise(u.ImportOutsideModule, { at: t });
          }
          takeDecorators(t) {
            let e = this.state.decoratorStack[this.state.decoratorStack.length - 1];
            e.length && (t.decorators = e, this.resetStartLocationFromNode(t, e[0]), this.state.decoratorStack[this.state.decoratorStack.length - 1] = []);
          }
          canHaveLeadingDecorator() {
            return this.match(80);
          }
          parseDecorators(t) {
            let e = this.state.decoratorStack[this.state.decoratorStack.length - 1];
            for (; this.match(26); ) {
              let s = this.parseDecorator();
              e.push(s);
            }
            if (this.match(82))
              t || this.unexpected(), this.hasPlugin("decorators") && !this.getPluginOption("decorators", "decoratorsBeforeExport") && this.raise(u.DecoratorExportClass, { at: this.state.startLoc });
            else if (!this.canHaveLeadingDecorator())
              throw this.raise(u.UnexpectedLeadingDecorator, { at: this.state.startLoc });
          }
          parseDecorator() {
            this.expectOnePlugin(["decorators-legacy", "decorators"]);
            let t = this.startNode();
            if (this.next(), this.hasPlugin("decorators")) {
              this.state.decoratorStack.push([]);
              let e = this.state.start, s = this.state.startLoc, r;
              if (this.eat(10))
                r = this.parseExpression(), this.expect(11);
              else
                for (r = this.parseIdentifier(false); this.eat(16); ) {
                  let i = this.startNodeAt(e, s);
                  i.object = r, i.property = this.parseIdentifier(true), i.computed = false, r = this.finishNode(i, "MemberExpression");
                }
              t.expression = this.parseMaybeDecoratorArguments(r), this.state.decoratorStack.pop();
            } else
              t.expression = this.parseExprSubscripts();
            return this.finishNode(t, "Decorator");
          }
          parseMaybeDecoratorArguments(t) {
            if (this.eat(10)) {
              let e = this.startNodeAtNode(t);
              return e.callee = t, e.arguments = this.parseCallExpressionArguments(11, false), this.toReferencedList(e.arguments), this.finishNode(e, "CallExpression");
            }
            return t;
          }
          parseBreakContinueStatement(t, e) {
            return this.next(), this.isLineTerminator() ? t.label = null : (t.label = this.parseIdentifier(), this.semicolon()), this.verifyBreakContinue(t, e), this.finishNode(t, e ? "BreakStatement" : "ContinueStatement");
          }
          verifyBreakContinue(t, e) {
            let s;
            for (s = 0; s < this.state.labels.length; ++s) {
              let r = this.state.labels[s];
              if ((t.label == null || r.name === t.label.name) && (r.kind != null && (e || r.kind === "loop") || t.label && e))
                break;
            }
            if (s === this.state.labels.length) {
              let r = e ? "BreakStatement" : "ContinueStatement";
              this.raise(u.IllegalBreakContinue, { at: t, type: r });
            }
          }
          parseDebuggerStatement(t) {
            return this.next(), this.semicolon(), this.finishNode(t, "DebuggerStatement");
          }
          parseHeaderExpression() {
            this.expect(10);
            let t = this.parseExpression();
            return this.expect(11), t;
          }
          parseDoStatement(t) {
            return this.next(), this.state.labels.push(ps), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("do")), this.state.labels.pop(), this.expect(92), t.test = this.parseHeaderExpression(), this.eat(13), this.finishNode(t, "DoWhileStatement");
          }
          parseForStatement(t) {
            this.next(), this.state.labels.push(ps);
            let e = null;
            if (this.isAwaitAllowed() && this.eatContextual(96) && (e = this.state.lastTokStartLoc), this.scope.enter(Re), this.expect(10), this.match(13))
              return e !== null && this.unexpected(e), this.parseFor(t, null);
            let s = this.isContextual(99), r = s && this.isLetKeyword();
            if (this.match(74) || this.match(75) || r) {
              let c = this.startNode(), f = r ? "let" : this.state.value;
              return this.next(), this.parseVar(c, true, f), this.finishNode(c, "VariableDeclaration"), (this.match(58) || this.isContextual(101)) && c.declarations.length === 1 ? this.parseForIn(t, c, e) : (e !== null && this.unexpected(e), this.parseFor(t, c));
            }
            let i = this.isContextual(95), a = new gt(), n = this.parseExpression(true, a), o = this.isContextual(101);
            if (o && (s && this.raise(u.ForOfLet, { at: n }), e === null && i && n.type === "Identifier" && this.raise(u.ForOfAsync, { at: n })), o || this.match(58)) {
              this.checkDestructuringPrivate(a), this.toAssignable(n, true);
              let c = o ? "ForOfStatement" : "ForInStatement";
              return this.checkLVal(n, { in: { type: c } }), this.parseForIn(t, n, e);
            } else
              this.checkExpressionErrors(a, true);
            return e !== null && this.unexpected(e), this.parseFor(t, n);
          }
          parseFunctionStatement(t, e, s) {
            return this.next(), this.parseFunction(t, fs | (s ? 0 : Hr), e);
          }
          parseIfStatement(t) {
            return this.next(), t.test = this.parseHeaderExpression(), t.consequent = this.parseStatement("if"), t.alternate = this.eat(66) ? this.parseStatement("if") : null, this.finishNode(t, "IfStatement");
          }
          parseReturnStatement(t) {
            return !this.prodParam.hasReturn && !this.options.allowReturnOutsideFunction && this.raise(u.IllegalReturn, { at: this.state.startLoc }), this.next(), this.isLineTerminator() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement");
          }
          parseSwitchStatement(t) {
            this.next(), t.discriminant = this.parseHeaderExpression();
            let e = t.cases = [];
            this.expect(5), this.state.labels.push(Wh), this.scope.enter(Re);
            let s;
            for (let r; !this.match(8); )
              if (this.match(61) || this.match(65)) {
                let i = this.match(61);
                s && this.finishNode(s, "SwitchCase"), e.push(s = this.startNode()), s.consequent = [], this.next(), i ? s.test = this.parseExpression() : (r && this.raise(u.MultipleDefaultsInSwitch, { at: this.state.lastTokStartLoc }), r = true, s.test = null), this.expect(14);
              } else
                s ? s.consequent.push(this.parseStatement(null)) : this.unexpected();
            return this.scope.exit(), s && this.finishNode(s, "SwitchCase"), this.next(), this.state.labels.pop(), this.finishNode(t, "SwitchStatement");
          }
          parseThrowStatement(t) {
            return this.next(), this.hasPrecedingLineBreak() && this.raise(u.NewlineAfterThrow, { at: this.state.lastTokEndLoc }), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement");
          }
          parseCatchClauseParam() {
            let t = this.parseBindingAtom(), e = t.type === "Identifier";
            return this.scope.enter(e ? xr : 0), this.checkLVal(t, { in: { type: "CatchClause" }, binding: xe, allowingSloppyLetBinding: true }), t;
          }
          parseTryStatement(t) {
            if (this.next(), t.block = this.parseBlock(), t.handler = null, this.match(62)) {
              let e = this.startNode();
              this.next(), this.match(10) ? (this.expect(10), e.param = this.parseCatchClauseParam(), this.expect(11)) : (e.param = null, this.scope.enter(Re)), e.body = this.withSmartMixTopicForbiddingContext(() => this.parseBlock(false, false)), this.scope.exit(), t.handler = this.finishNode(e, "CatchClause");
            }
            return t.finalizer = this.eat(67) ? this.parseBlock() : null, !t.handler && !t.finalizer && this.raise(u.NoCatchOrFinally, { at: t }), this.finishNode(t, "TryStatement");
          }
          parseVarStatement(t, e) {
            let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
            return this.next(), this.parseVar(t, false, e, s), this.semicolon(), this.finishNode(t, "VariableDeclaration");
          }
          parseWhileStatement(t) {
            return this.next(), t.test = this.parseHeaderExpression(), this.state.labels.push(ps), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("while")), this.state.labels.pop(), this.finishNode(t, "WhileStatement");
          }
          parseWithStatement(t) {
            return this.state.strict && this.raise(u.StrictWith, { at: this.state.startLoc }), this.next(), t.object = this.parseHeaderExpression(), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("with")), this.finishNode(t, "WithStatement");
          }
          parseEmptyStatement(t) {
            return this.next(), this.finishNode(t, "EmptyStatement");
          }
          parseLabeledStatement(t, e, s, r) {
            for (let a of this.state.labels)
              a.name === e && this.raise(u.LabelRedeclaration, { at: s, labelName: e });
            let i = So(this.state.type) ? "loop" : this.match(71) ? "switch" : null;
            for (let a = this.state.labels.length - 1; a >= 0; a--) {
              let n = this.state.labels[a];
              if (n.statementStart === t.start)
                n.statementStart = this.state.start, n.kind = i;
              else
                break;
            }
            return this.state.labels.push({ name: e, kind: i, statementStart: this.state.start }), t.body = this.parseStatement(r ? r.indexOf("label") === -1 ? r + "label" : r : "label"), this.state.labels.pop(), t.label = s, this.finishNode(t, "LabeledStatement");
          }
          parseExpressionStatement(t, e) {
            return t.expression = e, this.semicolon(), this.finishNode(t, "ExpressionStatement");
          }
          parseBlock() {
            let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, s = arguments.length > 2 ? arguments[2] : void 0, r = this.startNode();
            return t && this.state.strictErrors.clear(), this.expect(5), e && this.scope.enter(Re), this.parseBlockBody(r, t, false, 8, s), e && this.scope.exit(), this.finishNode(r, "BlockStatement");
          }
          isValidDirective(t) {
            return t.type === "ExpressionStatement" && t.expression.type === "StringLiteral" && !t.expression.extra.parenthesized;
          }
          parseBlockBody(t, e, s, r, i) {
            let a = t.body = [], n = t.directives = [];
            this.parseBlockOrModuleBlockBody(a, e ? n : void 0, s, r, i);
          }
          parseBlockOrModuleBlockBody(t, e, s, r, i) {
            let a = this.state.strict, n = false, o = false;
            for (; !this.match(r); ) {
              let c = this.parseStatement(null, s);
              if (e && !o) {
                if (this.isValidDirective(c)) {
                  let f = this.stmtToDirective(c);
                  e.push(f), !n && f.value.value === "use strict" && (n = true, this.setStrict(true));
                  continue;
                }
                o = true, this.state.strictErrors.clear();
              }
              t.push(c);
            }
            i && i.call(this, n), a || this.setStrict(false), this.next();
          }
          parseFor(t, e) {
            return t.init = e, this.semicolon(false), t.test = this.match(13) ? null : this.parseExpression(), this.semicolon(false), t.update = this.match(11) ? null : this.parseExpression(), this.expect(11), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("for")), this.scope.exit(), this.state.labels.pop(), this.finishNode(t, "ForStatement");
          }
          parseForIn(t, e, s) {
            let r = this.match(58);
            return this.next(), r ? s !== null && this.unexpected(s) : t.await = s !== null, e.type === "VariableDeclaration" && e.declarations[0].init != null && (!r || this.state.strict || e.kind !== "var" || e.declarations[0].id.type !== "Identifier") && this.raise(u.ForInOfLoopInitializer, { at: e, type: r ? "ForInStatement" : "ForOfStatement" }), e.type === "AssignmentPattern" && this.raise(u.InvalidLhs, { at: e, ancestor: { type: "ForStatement" } }), t.left = e, t.right = r ? this.parseExpression() : this.parseMaybeAssignAllowIn(), this.expect(11), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement("for")), this.scope.exit(), this.state.labels.pop(), this.finishNode(t, r ? "ForInStatement" : "ForOfStatement");
          }
          parseVar(t, e, s) {
            let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false, i = t.declarations = [];
            for (t.kind = s; ; ) {
              let a = this.startNode();
              if (this.parseVarId(a, s), a.init = this.eat(29) ? e ? this.parseMaybeAssignDisallowIn() : this.parseMaybeAssignAllowIn() : null, a.init === null && !r && (a.id.type !== "Identifier" && !(e && (this.match(58) || this.isContextual(101))) ? this.raise(u.DeclarationMissingInitializer, { at: this.state.lastTokEndLoc, kind: "destructuring" }) : s === "const" && !(this.match(58) || this.isContextual(101)) && this.raise(u.DeclarationMissingInitializer, { at: this.state.lastTokEndLoc, kind: "const" })), i.push(this.finishNode(a, "VariableDeclarator")), !this.eat(12))
                break;
            }
            return t;
          }
          parseVarId(t, e) {
            t.id = this.parseBindingAtom(), this.checkLVal(t.id, { in: { type: "VariableDeclarator" }, binding: e === "var" ? pt : xe });
          }
          parseFunction(t) {
            let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Gh, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, r = e & fs, i = e & Hr, a = !!r && !(e & Wr);
            this.initFunction(t, s), this.match(55) && i && this.raise(u.GeneratorInSingleStatementContext, { at: this.state.startLoc }), t.generator = this.eat(55), r && (t.id = this.parseFunctionId(a));
            let n = this.state.maybeInArrowParameters;
            return this.state.maybeInArrowParameters = false, this.scope.enter(me), this.prodParam.enter(xt(s, t.generator)), r || (t.id = this.parseFunctionId()), this.parseFunctionParams(t, false), this.withSmartMixTopicForbiddingContext(() => {
              this.parseFunctionBodyAndFinish(t, r ? "FunctionDeclaration" : "FunctionExpression");
            }), this.prodParam.exit(), this.scope.exit(), r && !i && this.registerFunctionStatementId(t), this.state.maybeInArrowParameters = n, t;
          }
          parseFunctionId(t) {
            return t || K(this.state.type) ? this.parseIdentifier() : null;
          }
          parseFunctionParams(t, e) {
            this.expect(10), this.expressionScope.enter(mh()), t.params = this.parseBindingList(11, 41, false, e), this.expressionScope.exit();
          }
          registerFunctionStatementId(t) {
            !t.id || this.scope.declareName(t.id.name, this.state.strict || t.generator || t.async ? this.scope.treatFunctionsAsVar ? pt : xe : Er, t.id.loc.start);
          }
          parseClass(t, e, s) {
            this.next(), this.takeDecorators(t);
            let r = this.state.strict;
            return this.state.strict = true, this.parseClassId(t, e, s), this.parseClassSuper(t), t.body = this.parseClassBody(!!t.superClass, r), this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression");
          }
          isClassProperty() {
            return this.match(29) || this.match(13) || this.match(8);
          }
          isClassMethod() {
            return this.match(10);
          }
          isNonstaticConstructor(t) {
            return !t.computed && !t.static && (t.key.name === "constructor" || t.key.value === "constructor");
          }
          parseClassBody(t, e) {
            this.classScope.enter();
            let s = { hadConstructor: false, hadSuperClass: t }, r = [], i = this.startNode();
            if (i.body = [], this.expect(5), this.withSmartMixTopicForbiddingContext(() => {
              for (; !this.match(8); ) {
                if (this.eat(13)) {
                  if (r.length > 0)
                    throw this.raise(u.DecoratorSemicolon, { at: this.state.lastTokEndLoc });
                  continue;
                }
                if (this.match(26)) {
                  r.push(this.parseDecorator());
                  continue;
                }
                let a = this.startNode();
                r.length && (a.decorators = r, this.resetStartLocationFromNode(a, r[0]), r = []), this.parseClassMember(i, a, s), a.kind === "constructor" && a.decorators && a.decorators.length > 0 && this.raise(u.DecoratorConstructor, { at: a });
              }
            }), this.state.strict = e, this.next(), r.length)
              throw this.raise(u.TrailingDecorator, { at: this.state.startLoc });
            return this.classScope.exit(), this.finishNode(i, "ClassBody");
          }
          parseClassMemberFromModifier(t, e) {
            let s = this.parseIdentifier(true);
            if (this.isClassMethod()) {
              let r = e;
              return r.kind = "method", r.computed = false, r.key = s, r.static = false, this.pushClassMethod(t, r, false, false, false, false), true;
            } else if (this.isClassProperty()) {
              let r = e;
              return r.computed = false, r.key = s, r.static = false, t.body.push(this.parseClassProperty(r)), true;
            }
            return this.resetPreviousNodeTrailingComments(s), false;
          }
          parseClassMember(t, e, s) {
            let r = this.isContextual(104);
            if (r) {
              if (this.parseClassMemberFromModifier(t, e))
                return;
              if (this.eat(5)) {
                this.parseClassStaticBlock(t, e);
                return;
              }
            }
            this.parseClassMemberWithIsStatic(t, e, s, r);
          }
          parseClassMemberWithIsStatic(t, e, s, r) {
            let i = e, a = e, n = e, o = e, c = e, f = i, y = i;
            if (e.static = r, this.parsePropertyNamePrefixOperator(e), this.eat(55)) {
              f.kind = "method";
              let R = this.match(134);
              if (this.parseClassElementName(f), R) {
                this.pushClassPrivateMethod(t, a, true, false);
                return;
              }
              this.isNonstaticConstructor(i) && this.raise(u.ConstructorIsGenerator, { at: i.key }), this.pushClassMethod(t, i, true, false, false, false);
              return;
            }
            let C = K(this.state.type) && !this.state.containsEsc, S = this.match(134), I = this.parseClassElementName(e), M = this.state.startLoc;
            if (this.parsePostMemberNameModifiers(y), this.isClassMethod()) {
              if (f.kind = "method", S) {
                this.pushClassPrivateMethod(t, a, false, false);
                return;
              }
              let R = this.isNonstaticConstructor(i), $ = false;
              R && (i.kind = "constructor", s.hadConstructor && !this.hasPlugin("typescript") && this.raise(u.DuplicateConstructor, { at: I }), R && this.hasPlugin("typescript") && e.override && this.raise(u.OverrideOnConstructor, { at: I }), s.hadConstructor = true, $ = s.hadSuperClass), this.pushClassMethod(t, i, false, false, R, $);
            } else if (this.isClassProperty())
              S ? this.pushClassPrivateProperty(t, o) : this.pushClassProperty(t, n);
            else if (C && I.name === "async" && !this.isLineTerminator()) {
              this.resetPreviousNodeTrailingComments(I);
              let R = this.eat(55);
              y.optional && this.unexpected(M), f.kind = "method";
              let $ = this.match(134);
              this.parseClassElementName(f), this.parsePostMemberNameModifiers(y), $ ? this.pushClassPrivateMethod(t, a, R, true) : (this.isNonstaticConstructor(i) && this.raise(u.ConstructorIsAsync, { at: i.key }), this.pushClassMethod(t, i, R, true, false, false));
            } else if (C && (I.name === "get" || I.name === "set") && !(this.match(55) && this.isLineTerminator())) {
              this.resetPreviousNodeTrailingComments(I), f.kind = I.name;
              let R = this.match(134);
              this.parseClassElementName(i), R ? this.pushClassPrivateMethod(t, a, false, false) : (this.isNonstaticConstructor(i) && this.raise(u.ConstructorIsAccessor, { at: i.key }), this.pushClassMethod(t, i, false, false, false, false)), this.checkGetterSetterParams(i);
            } else if (C && I.name === "accessor" && !this.isLineTerminator()) {
              this.expectPlugin("decoratorAutoAccessors"), this.resetPreviousNodeTrailingComments(I);
              let R = this.match(134);
              this.parseClassElementName(n), this.pushClassAccessorProperty(t, c, R);
            } else
              this.isLineTerminator() ? S ? this.pushClassPrivateProperty(t, o) : this.pushClassProperty(t, n) : this.unexpected();
          }
          parseClassElementName(t) {
            let { type: e, value: s } = this.state;
            if ((e === 128 || e === 129) && t.static && s === "prototype" && this.raise(u.StaticPrototype, { at: this.state.startLoc }), e === 134) {
              s === "constructor" && this.raise(u.ConstructorClassPrivateField, { at: this.state.startLoc });
              let r = this.parsePrivateName();
              return t.key = r, r;
            }
            return this.parsePropertyName(t);
          }
          parseClassStaticBlock(t, e) {
            var s;
            this.scope.enter(we | Jt | ot);
            let r = this.state.labels;
            this.state.labels = [], this.prodParam.enter(qe);
            let i = e.body = [];
            this.parseBlockOrModuleBlockBody(i, void 0, false, 8), this.prodParam.exit(), this.scope.exit(), this.state.labels = r, t.body.push(this.finishNode(e, "StaticBlock")), (s = e.decorators) != null && s.length && this.raise(u.DecoratorStaticBlock, { at: e });
          }
          pushClassProperty(t, e) {
            !e.computed && (e.key.name === "constructor" || e.key.value === "constructor") && this.raise(u.ConstructorClassField, { at: e.key }), t.body.push(this.parseClassProperty(e));
          }
          pushClassPrivateProperty(t, e) {
            let s = this.parseClassPrivateProperty(e);
            t.body.push(s), this.classScope.declarePrivateName(this.getPrivateNameSV(s.key), rs, s.key.loc.start);
          }
          pushClassAccessorProperty(t, e, s) {
            if (!s && !e.computed) {
              let i = e.key;
              (i.name === "constructor" || i.value === "constructor") && this.raise(u.ConstructorClassField, { at: i });
            }
            let r = this.parseClassAccessorProperty(e);
            t.body.push(r), s && this.classScope.declarePrivateName(this.getPrivateNameSV(r.key), rs, r.key.loc.start);
          }
          pushClassMethod(t, e, s, r, i, a) {
            t.body.push(this.parseMethod(e, s, r, i, a, "ClassMethod", true));
          }
          pushClassPrivateMethod(t, e, s, r) {
            let i = this.parseMethod(e, s, r, false, false, "ClassPrivateMethod", true);
            t.body.push(i);
            let a = i.kind === "get" ? i.static ? Jo : $o : i.kind === "set" ? i.static ? Yo : Qo : rs;
            this.declareClassPrivateMethodInScope(i, a);
          }
          declareClassPrivateMethodInScope(t, e) {
            this.classScope.declarePrivateName(this.getPrivateNameSV(t.key), e, t.key.loc.start);
          }
          parsePostMemberNameModifiers(t) {
          }
          parseClassPrivateProperty(t) {
            return this.parseInitializer(t), this.semicolon(), this.finishNode(t, "ClassPrivateProperty");
          }
          parseClassProperty(t) {
            return this.parseInitializer(t), this.semicolon(), this.finishNode(t, "ClassProperty");
          }
          parseClassAccessorProperty(t) {
            return this.parseInitializer(t), this.semicolon(), this.finishNode(t, "ClassAccessorProperty");
          }
          parseInitializer(t) {
            this.scope.enter(we | ot), this.expressionScope.enter(Fr()), this.prodParam.enter(qe), t.value = this.eat(29) ? this.parseMaybeAssignAllowIn() : null, this.expressionScope.exit(), this.prodParam.exit(), this.scope.exit();
          }
          parseClassId(t, e, s) {
            let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Tr;
            if (K(this.state.type))
              t.id = this.parseIdentifier(), e && this.declareNameFromIdentifier(t.id, r);
            else if (s || !e)
              t.id = null;
            else
              throw this.raise(u.MissingClassName, { at: this.state.startLoc });
          }
          parseClassSuper(t) {
            t.superClass = this.eat(81) ? this.parseExprSubscripts() : null;
          }
          parseExport(t) {
            let e = this.maybeParseExportDefaultSpecifier(t), s = !e || this.eat(12), r = s && this.eatExportStar(t), i = r && this.maybeParseExportNamespaceSpecifier(t), a = s && (!i || this.eat(12)), n = e || r;
            if (r && !i)
              return e && this.unexpected(), this.parseExportFrom(t, true), this.finishNode(t, "ExportAllDeclaration");
            let o = this.maybeParseExportNamedSpecifiers(t);
            if (e && s && !r && !o || i && a && !o)
              throw this.unexpected(null, 5);
            let c;
            if (n || o ? (c = false, this.parseExportFrom(t, n)) : c = this.maybeParseExportDeclaration(t), n || o || c)
              return this.checkExport(t, true, false, !!t.source), this.finishNode(t, "ExportNamedDeclaration");
            if (this.eat(65))
              return t.declaration = this.parseExportDefaultExpression(), this.checkExport(t, true, true), this.finishNode(t, "ExportDefaultDeclaration");
            throw this.unexpected(null, 5);
          }
          eatExportStar(t) {
            return this.eat(55);
          }
          maybeParseExportDefaultSpecifier(t) {
            if (this.isExportDefaultSpecifier()) {
              this.expectPlugin("exportDefaultFrom");
              let e = this.startNode();
              return e.exported = this.parseIdentifier(true), t.specifiers = [this.finishNode(e, "ExportDefaultSpecifier")], true;
            }
            return false;
          }
          maybeParseExportNamespaceSpecifier(t) {
            if (this.isContextual(93)) {
              t.specifiers || (t.specifiers = []);
              let e = this.startNodeAt(this.state.lastTokStart, this.state.lastTokStartLoc);
              return this.next(), e.exported = this.parseModuleExportName(), t.specifiers.push(this.finishNode(e, "ExportNamespaceSpecifier")), true;
            }
            return false;
          }
          maybeParseExportNamedSpecifiers(t) {
            if (this.match(5)) {
              t.specifiers || (t.specifiers = []);
              let e = t.exportKind === "type";
              return t.specifiers.push(...this.parseExportSpecifiers(e)), t.source = null, t.declaration = null, this.hasPlugin("importAssertions") && (t.assertions = []), true;
            }
            return false;
          }
          maybeParseExportDeclaration(t) {
            return this.shouldParseExportDeclaration() ? (t.specifiers = [], t.source = null, this.hasPlugin("importAssertions") && (t.assertions = []), t.declaration = this.parseExportDeclaration(t), true) : false;
          }
          isAsyncFunction() {
            if (!this.isContextual(95))
              return false;
            let t = this.nextTokenStart();
            return !is.test(this.input.slice(this.state.pos, t)) && this.isUnparsedContextual(t, "function");
          }
          parseExportDefaultExpression() {
            let t = this.startNode(), e = this.isAsyncFunction();
            if (this.match(68) || e)
              return this.next(), e && this.next(), this.parseFunction(t, fs | Wr, e);
            if (this.match(80))
              return this.parseClass(t, true, true);
            if (this.match(26))
              return this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") && this.raise(u.DecoratorBeforeExport, { at: this.state.startLoc }), this.parseDecorators(false), this.parseClass(t, true, true);
            if (this.match(75) || this.match(74) || this.isLet())
              throw this.raise(u.UnsupportedDefaultExport, { at: this.state.startLoc });
            let s = this.parseMaybeAssignAllowIn();
            return this.semicolon(), s;
          }
          parseExportDeclaration(t) {
            return this.parseStatement(null);
          }
          isExportDefaultSpecifier() {
            let { type: t } = this.state;
            if (K(t)) {
              if (t === 95 && !this.state.containsEsc || t === 99)
                return false;
              if ((t === 126 || t === 125) && !this.state.containsEsc) {
                let { type: r } = this.lookahead();
                if (K(r) && r !== 97 || r === 5)
                  return this.expectOnePlugin(["flow", "typescript"]), false;
              }
            } else if (!this.match(65))
              return false;
            let e = this.nextTokenStart(), s = this.isUnparsedContextual(e, "from");
            if (this.input.charCodeAt(e) === 44 || K(this.state.type) && s)
              return true;
            if (this.match(65) && s) {
              let r = this.input.charCodeAt(this.nextTokenStartSince(e + 4));
              return r === 34 || r === 39;
            }
            return false;
          }
          parseExportFrom(t, e) {
            if (this.eatContextual(97)) {
              t.source = this.parseImportSource(), this.checkExport(t);
              let s = this.maybeParseImportAssertions();
              s && (t.assertions = s);
            } else
              e && this.unexpected();
            this.semicolon();
          }
          shouldParseExportDeclaration() {
            let { type: t } = this.state;
            if (t === 26 && (this.expectOnePlugin(["decorators", "decorators-legacy"]), this.hasPlugin("decorators"))) {
              if (this.getPluginOption("decorators", "decoratorsBeforeExport"))
                throw this.raise(u.DecoratorBeforeExport, { at: this.state.startLoc });
              return true;
            }
            return t === 74 || t === 75 || t === 68 || t === 80 || this.isLet() || this.isAsyncFunction();
          }
          checkExport(t, e, s, r) {
            if (e) {
              if (s) {
                if (this.checkDuplicateExports(t, "default"), this.hasPlugin("exportDefaultFrom")) {
                  var i;
                  let n = t.declaration;
                  n.type === "Identifier" && n.name === "from" && n.end - n.start === 4 && !((i = n.extra) != null && i.parenthesized) && this.raise(u.ExportDefaultFromAsIdentifier, { at: n });
                }
              } else if (t.specifiers && t.specifiers.length)
                for (let n of t.specifiers) {
                  let { exported: o } = n, c = o.type === "Identifier" ? o.name : o.value;
                  if (this.checkDuplicateExports(n, c), !r && n.local) {
                    let { local: f } = n;
                    f.type !== "Identifier" ? this.raise(u.ExportBindingIsString, { at: n, localName: f.value, exportName: c }) : (this.checkReservedWord(f.name, f.loc.start, true, false), this.scope.checkLocalExport(f));
                  }
                }
              else if (t.declaration) {
                if (t.declaration.type === "FunctionDeclaration" || t.declaration.type === "ClassDeclaration") {
                  let n = t.declaration.id;
                  if (!n)
                    throw new Error("Assertion failure");
                  this.checkDuplicateExports(t, n.name);
                } else if (t.declaration.type === "VariableDeclaration")
                  for (let n of t.declaration.declarations)
                    this.checkDeclaration(n.id);
              }
            }
            if (this.state.decoratorStack[this.state.decoratorStack.length - 1].length)
              throw this.raise(u.UnsupportedDecoratorExport, { at: t });
          }
          checkDeclaration(t) {
            if (t.type === "Identifier")
              this.checkDuplicateExports(t, t.name);
            else if (t.type === "ObjectPattern")
              for (let e of t.properties)
                this.checkDeclaration(e);
            else if (t.type === "ArrayPattern")
              for (let e of t.elements)
                e && this.checkDeclaration(e);
            else
              t.type === "ObjectProperty" ? this.checkDeclaration(t.value) : t.type === "RestElement" ? this.checkDeclaration(t.argument) : t.type === "AssignmentPattern" && this.checkDeclaration(t.left);
          }
          checkDuplicateExports(t, e) {
            this.exportedIdentifiers.has(e) && (e === "default" ? this.raise(u.DuplicateDefaultExport, { at: t }) : this.raise(u.DuplicateExport, { at: t, exportName: e })), this.exportedIdentifiers.add(e);
          }
          parseExportSpecifiers(t) {
            let e = [], s = true;
            for (this.expect(5); !this.eat(8); ) {
              if (s)
                s = false;
              else if (this.expect(12), this.eat(8))
                break;
              let r = this.isContextual(126), i = this.match(129), a = this.startNode();
              a.local = this.parseModuleExportName(), e.push(this.parseExportSpecifier(a, i, t, r));
            }
            return e;
          }
          parseExportSpecifier(t, e, s, r) {
            return this.eatContextual(93) ? t.exported = this.parseModuleExportName() : e ? t.exported = Th(t.local) : t.exported || (t.exported = ge(t.local)), this.finishNode(t, "ExportSpecifier");
          }
          parseModuleExportName() {
            if (this.match(129)) {
              let t = this.parseStringLiteral(this.state.value), e = t.value.match(Xh);
              return e && this.raise(u.ModuleExportNameHasLoneSurrogate, { at: t, surrogateCharCode: e[0].charCodeAt(0) }), t;
            }
            return this.parseIdentifier(true);
          }
          parseImport(t) {
            if (t.specifiers = [], !this.match(129)) {
              let r = !this.maybeParseDefaultImportSpecifier(t) || this.eat(12), i = r && this.maybeParseStarImportSpecifier(t);
              r && !i && this.parseNamedImportSpecifiers(t), this.expectContextual(97);
            }
            t.source = this.parseImportSource();
            let e = this.maybeParseImportAssertions();
            if (e)
              t.assertions = e;
            else {
              let s = this.maybeParseModuleAttributes();
              s && (t.attributes = s);
            }
            return this.semicolon(), this.finishNode(t, "ImportDeclaration");
          }
          parseImportSource() {
            return this.match(129) || this.unexpected(), this.parseExprAtom();
          }
          shouldParseDefaultImport(t) {
            return K(this.state.type);
          }
          parseImportSpecifierLocal(t, e, s) {
            e.local = this.parseIdentifier(), t.specifiers.push(this.finishImportSpecifier(e, s));
          }
          finishImportSpecifier(t, e) {
            return this.checkLVal(t.local, { in: t, binding: xe }), this.finishNode(t, e);
          }
          parseAssertEntries() {
            let t = [], e = /* @__PURE__ */ new Set();
            do {
              if (this.match(8))
                break;
              let s = this.startNode(), r = this.state.value;
              if (e.has(r) && this.raise(u.ModuleAttributesWithDuplicateKeys, { at: this.state.startLoc, key: r }), e.add(r), this.match(129) ? s.key = this.parseStringLiteral(r) : s.key = this.parseIdentifier(true), this.expect(14), !this.match(129))
                throw this.raise(u.ModuleAttributeInvalidValue, { at: this.state.startLoc });
              s.value = this.parseStringLiteral(this.state.value), this.finishNode(s, "ImportAttribute"), t.push(s);
            } while (this.eat(12));
            return t;
          }
          maybeParseModuleAttributes() {
            if (this.match(76) && !this.hasPrecedingLineBreak())
              this.expectPlugin("moduleAttributes"), this.next();
            else
              return this.hasPlugin("moduleAttributes") ? [] : null;
            let t = [], e = /* @__PURE__ */ new Set();
            do {
              let s = this.startNode();
              if (s.key = this.parseIdentifier(true), s.key.name !== "type" && this.raise(u.ModuleAttributeDifferentFromType, { at: s.key }), e.has(s.key.name) && this.raise(u.ModuleAttributesWithDuplicateKeys, { at: s.key, key: s.key.name }), e.add(s.key.name), this.expect(14), !this.match(129))
                throw this.raise(u.ModuleAttributeInvalidValue, { at: this.state.startLoc });
              s.value = this.parseStringLiteral(this.state.value), this.finishNode(s, "ImportAttribute"), t.push(s);
            } while (this.eat(12));
            return t;
          }
          maybeParseImportAssertions() {
            if (this.isContextual(94) && !this.hasPrecedingLineBreak())
              this.expectPlugin("importAssertions"), this.next();
            else
              return this.hasPlugin("importAssertions") ? [] : null;
            this.eat(5);
            let t = this.parseAssertEntries();
            return this.eat(8), t;
          }
          maybeParseDefaultImportSpecifier(t) {
            return this.shouldParseDefaultImport(t) ? (this.parseImportSpecifierLocal(t, this.startNode(), "ImportDefaultSpecifier"), true) : false;
          }
          maybeParseStarImportSpecifier(t) {
            if (this.match(55)) {
              let e = this.startNode();
              return this.next(), this.expectContextual(93), this.parseImportSpecifierLocal(t, e, "ImportNamespaceSpecifier"), true;
            }
            return false;
          }
          parseNamedImportSpecifiers(t) {
            let e = true;
            for (this.expect(5); !this.eat(8); ) {
              if (e)
                e = false;
              else {
                if (this.eat(14))
                  throw this.raise(u.DestructureNamedImport, { at: this.state.startLoc });
                if (this.expect(12), this.eat(8))
                  break;
              }
              let s = this.startNode(), r = this.match(129), i = this.isContextual(126);
              s.imported = this.parseModuleExportName();
              let a = this.parseImportSpecifier(s, r, t.importKind === "type" || t.importKind === "typeof", i);
              t.specifiers.push(a);
            }
          }
          parseImportSpecifier(t, e, s, r) {
            if (this.eatContextual(93))
              t.local = this.parseIdentifier();
            else {
              let { imported: i } = t;
              if (e)
                throw this.raise(u.ImportBindingIsString, { at: t, importName: i.value });
              this.checkReservedWord(i.name, t.loc.start, true, true), t.local || (t.local = ge(i));
            }
            return this.finishImportSpecifier(t, "ImportSpecifier");
          }
          isThisParam(t) {
            return t.type === "Identifier" && t.name === "this";
          }
        }, Gr = class extends Yh {
          constructor(t, e) {
            t = zh(t);
            super(t, e);
            this.options = t, this.initializeScopes(), this.plugins = $h(this.options.plugins), this.filename = t.sourceFilename;
          }
          getScopeHandler() {
            return os;
          }
          parse() {
            this.enterInitialScopes();
            let t = this.startNode(), e = this.startNode();
            return this.nextToken(), t.errors = null, this.parseTopLevel(t, e), t.errors = this.state.errors, t;
          }
        };
        function $h(t) {
          let e = /* @__PURE__ */ new Map();
          for (let s of t) {
            let [r, i] = Array.isArray(s) ? s : [s, {}];
            e.has(r) || e.set(r, i || {});
          }
          return e;
        }
        function Qh(t, e) {
          var s;
          if (((s = e) == null ? void 0 : s.sourceType) === "unambiguous") {
            e = Object.assign({}, e);
            try {
              e.sourceType = "module";
              let r = Je(e, t), i = r.parse();
              if (r.sawUnambiguousESM)
                return i;
              if (r.ambiguousScriptDifferentAst)
                try {
                  return e.sourceType = "script", Je(e, t).parse();
                } catch {
                }
              else
                i.program.sourceType = "script";
              return i;
            } catch (r) {
              try {
                return e.sourceType = "script", Je(e, t).parse();
              } catch {
              }
              throw r;
            }
          } else
            return Je(e, t).parse();
        }
        function Zh(t, e) {
          let s = Je(e, t);
          return s.options.strictMode && (s.state.strict = true), s.getExpression();
        }
        function el(t) {
          let e = {};
          for (let s of Object.keys(t))
            e[s] = fe(t[s]);
          return e;
        }
        var tl = el(Eo);
        function Je(t, e) {
          let s = Gr;
          return t != null && t.plugins && (Uh(t.plugins), s = sl(t.plugins)), new s(t, e);
        }
        var Xr = {};
        function sl(t) {
          let e = _h.filter((i) => Z(t, i)), s = e.join("/"), r = Xr[s];
          if (!r) {
            r = Gr;
            for (let i of e)
              r = Kr[i](r);
            Xr[s] = r;
          }
          return r;
        }
        h.parse = Qh, h.parseExpression = Zh, h.tokTypes = tl;
      } }), mf = H({ "src/language-js/parse/json.js"(h, l) {
        V();
        var p = po(), d = nr(), m = mo(), A = yo();
        function x() {
          let T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, { allowComments: L = true } = T;
          return function(_) {
            let { parseExpression: se } = go(), B;
            try {
              B = se(_, { tokens: true, ranges: true });
            } catch (j) {
              throw A(j);
            }
            if (!L && p(B.comments))
              throw g(B.comments[0], "Comment");
            return P(B), B;
          };
        }
        function g(T, L) {
          let [b, _] = [T.loc.start, T.loc.end].map((se) => {
            let { line: B, column: j } = se;
            return { line: B, column: j + 1 };
          });
          return d("".concat(L, " is not allowed in JSON."), { start: b, end: _ });
        }
        function P(T) {
          switch (T.type) {
            case "ArrayExpression":
              for (let L of T.elements)
                L !== null && P(L);
              return;
            case "ObjectExpression":
              for (let L of T.properties)
                P(L);
              return;
            case "ObjectProperty":
              if (T.computed)
                throw g(T.key, "Computed key");
              if (T.shorthand)
                throw g(T.key, "Shorthand property");
              T.key.type !== "Identifier" && P(T.key), P(T.value);
              return;
            case "UnaryExpression": {
              let { operator: L, argument: b } = T;
              if (L !== "+" && L !== "-")
                throw g(T, "Operator '".concat(T.operator, "'"));
              if (b.type === "NumericLiteral" || b.type === "Identifier" && (b.name === "Infinity" || b.name === "NaN"))
                return;
              throw g(b, "Operator '".concat(L, "' before '").concat(b.type, "'"));
            }
            case "Identifier":
              if (T.name !== "Infinity" && T.name !== "NaN" && T.name !== "undefined")
                throw g(T, "Identifier '".concat(T.name, "'"));
              return;
            case "TemplateLiteral":
              if (p(T.expressions))
                throw g(T.expressions[0], "'TemplateLiteral' with expression");
              for (let L of T.quasis)
                P(L);
              return;
            case "NullLiteral":
            case "BooleanLiteral":
            case "NumericLiteral":
            case "StringLiteral":
            case "TemplateElement":
              return;
            default:
              throw g(T, "'".concat(T.type, "'"));
          }
        }
        var N = x(), D = { json: m({ parse: N, hasPragma() {
          return true;
        } }), json5: m(N), "json-stringify": m({ parse: x({ allowComments: false }), astFormat: "estree-json" }) };
        l.exports = D;
      } });
      V();
      var yf = Jp(), xf = $n(), gf = Zp(), rt = mo(), Af = yo(), Pf = df(), Tf = mf(), Ef = { sourceType: "module", allowImportExportEverywhere: true, allowReturnOutsideFunction: true, allowSuperOutsideMethod: true, allowUndeclaredExports: true, errorRecovery: true, createParenthesizedExpressions: true, plugins: ["doExpressions", "exportDefaultFrom", "functionBind", "functionSent", "throwExpressions", "partialApplication", ["decorators", { decoratorsBeforeExport: false }], "importAssertions", "decimal", "moduleBlocks", "asyncDoExpressions", "regexpUnicodeSets", "destructuringPrivate", "decoratorAutoAccessors"], tokens: true, ranges: true }, bf = ["recordAndTuple", { syntaxType: "hash" }], Wn = "v8intrinsic", Gn = [["pipelineOperator", { proposal: "hack", topicToken: "%" }], ["pipelineOperator", { proposal: "minimal" }], ["pipelineOperator", { proposal: "fsharp" }]], Pe = function(h) {
        let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ef;
        return Object.assign(Object.assign({}, l), {}, { plugins: [...l.plugins, ...h] });
      }, vf = /@(?:no)?flow\b/;
      function Cf(h, l) {
        if (l.filepath && l.filepath.endsWith(".js.flow"))
          return true;
        let p = xf(h);
        p && (h = h.slice(p.length));
        let d = gf(h, 0);
        return d !== false && (h = h.slice(0, d)), vf.test(h);
      }
      function Sf(h, l, p) {
        let m = go()[h](l, p), A = m.errors.find((x) => !Df.has(x.reasonCode));
        if (A)
          throw A;
        return m;
      }
      function it(h) {
        for (var l = arguments.length, p = new Array(l > 1 ? l - 1 : 0), d = 1; d < l; d++)
          p[d - 1] = arguments[d];
        return function(m, A) {
          let x = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          if ((x.parser === "babel" || x.parser === "__babel_estree") && Cf(m, x))
            return x.parser = "babel-flow", Ao(m, A, x);
          let g = p;
          x.__babelSourceType === "script" && (g = g.map((T) => Object.assign(Object.assign({}, T), {}, { sourceType: "script" }))), /#[[{]/.test(m) && (g = g.map((T) => Pe([bf], T)));
          let P = /%[A-Z]/.test(m);
          m.includes("|>") ? g = (P ? [...Gn, Wn] : Gn).flatMap((L) => g.map((b) => Pe([L], b))) : P && (g = g.map((T) => Pe([Wn], T)));
          let { result: N, error: D } = yf(...g.map((T) => () => Sf(h, m, T)));
          if (!N)
            throw Af(D);
          return x.originalText = m, Pf(N, x);
        };
      }
      var wf = it("parse", Pe(["jsx", "flow"])), Ao = it("parse", Pe(["jsx", ["flow", { all: true, enums: true }]])), Nf = it("parse", Pe(["jsx", "typescript"]), Pe(["typescript"])), If = it("parse", Pe(["jsx", "flow", "estree"])), kf = it("parseExpression", Pe(["jsx"])), Df = /* @__PURE__ */ new Set(["StrictNumericEscape", "StrictWith", "StrictOctalLiteral", "StrictDelete", "StrictEvalArguments", "StrictEvalArgumentsBinding", "StrictFunction", "EmptyTypeArguments", "EmptyTypeParameters", "ConstructorHasTypeParameters", "UnsupportedParameterPropertyKind", "UnexpectedParameterModifier", "MixedLabeledAndUnlabeledElements", "InvalidTupleMemberLabel", "NonClassMethodPropertyHasAbstractModifer", "ReadonlyForMethodSignature", "ClassMethodHasDeclare", "ClassMethodHasReadonly", "InvalidModifierOnTypeMember", "DuplicateAccessibilityModifier", "IndexSignatureHasDeclare", "DecoratorExportClass", "ParamDupe", "InvalidDecimal", "RestTrailingComma", "UnsupportedParameterDecorator", "UnterminatedJsxContent", "UnexpectedReservedWord", "ModuleAttributesWithDuplicateKeys", "LineTerminatorBeforeArrow", "InvalidEscapeSequenceTemplate", "NonAbstractClassHasAbstractMethod", "UnsupportedPropertyDecorator", "OptionalTypeBeforeRequired", "PatternIsOptional", "OptionalBindingPattern", "DeclareClassFieldHasInitializer", "TypeImportCannotSpecifyDefaultAndNamed", "DeclareFunctionHasImplementation", "ConstructorClassField", "VarRedeclaration", "InvalidPrivateFieldResolution", "DuplicateExport"]), Xn = rt(wf), Jn = rt(kf);
      Po.exports = { parsers: Object.assign(Object.assign({ babel: Xn, "babel-flow": rt(Ao), "babel-ts": rt(Nf) }, Tf), {}, { __js_expression: Jn, __vue_expression: Jn, __vue_event_binding: Xn, __babel_estree: rt(If) }) };
    });
    return Ff();
  });
})(parserBabel$2);
var parserBabel = /* @__PURE__ */ getDefaultExportFromCjs(parserBabel$2.exports);
var parserBabel$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": parserBabel
}, [parserBabel$2.exports]);

export { parserBabel$1 as p };
//# sourceMappingURL=parser-babel.mjs.map
