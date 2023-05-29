import { bn as getDefaultExportFromCjs, bm as commonjsGlobal } from './app/_nuxt/model-9bf70e2c.mjs';
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
var parserHtml$2 = { exports: {} };
(function(module, exports) {
  (function(e) {
    module.exports = e();
  })(function() {
    var T = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
    var G = T((UD, Xr) => {
      var Be = function(e) {
        return e && e.Math == Math && e;
      };
      Xr.exports = Be(typeof globalThis == "object" && globalThis) || Be("undefined" == "object" ) || Be(typeof self == "object" && self) || Be(typeof commonjsGlobal == "object" && commonjsGlobal) || function() {
        return this;
      }() || Function("return this")();
    });
    var se = T((GD, Hr) => {
      Hr.exports = function(e) {
        try {
          return !!e();
        } catch {
          return true;
        }
      };
    });
    var oe = T((VD, zr) => {
      var As = se();
      zr.exports = !As(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] != 7;
      });
    });
    var we = T((XD, Wr) => {
      var vs = se();
      Wr.exports = !vs(function() {
        var e = function() {
        }.bind();
        return typeof e != "function" || e.hasOwnProperty("prototype");
      });
    });
    var ce = T((HD, Yr) => {
      var _s = we(), Ne = Function.prototype.call;
      Yr.exports = _s ? Ne.bind(Ne) : function() {
        return Ne.apply(Ne, arguments);
      };
    });
    var Zr = T((Jr) => {
      var Qr = {}.propertyIsEnumerable, Kr = Object.getOwnPropertyDescriptor, Ss = Kr && !Qr.call({ 1: 2 }, 1);
      Jr.f = Ss ? function(r) {
        var t = Kr(this, r);
        return !!t && t.enumerable;
      } : Qr;
    });
    var Oe = T((WD, et) => {
      et.exports = function(e, r) {
        return { enumerable: !(e & 1), configurable: !(e & 2), writable: !(e & 4), value: r };
      };
    });
    var Q = T((YD, ut) => {
      var rt = we(), tt = Function.prototype, ys = tt.bind, Je = tt.call, Ts = rt && ys.bind(Je, Je);
      ut.exports = rt ? function(e) {
        return e && Ts(e);
      } : function(e) {
        return e && function() {
          return Je.apply(e, arguments);
        };
      };
    });
    var qe = T((QD, st) => {
      var nt = Q(), bs = nt({}.toString), Bs = nt("".slice);
      st.exports = function(e) {
        return Bs(bs(e), 8, -1);
      };
    });
    var it = T((KD, at) => {
      var ws = G(), Ns = Q(), Os = se(), qs = qe(), Ze = ws.Object, Is = Ns("".split);
      at.exports = Os(function() {
        return !Ze("z").propertyIsEnumerable(0);
      }) ? function(e) {
        return qs(e) == "String" ? Is(e, "") : Ze(e);
      } : Ze;
    });
    var er = T((JD, ot) => {
      var Rs = G(), xs = Rs.TypeError;
      ot.exports = function(e) {
        if (e == null)
          throw xs("Can't call method on " + e);
        return e;
      };
    });
    var Ie = T((ZD, ct) => {
      var Ps = it(), ks = er();
      ct.exports = function(e) {
        return Ps(ks(e));
      };
    });
    var K = T((el, Dt) => {
      Dt.exports = function(e) {
        return typeof e == "function";
      };
    });
    var De = T((rl, lt) => {
      var Ls = K();
      lt.exports = function(e) {
        return typeof e == "object" ? e !== null : Ls(e);
      };
    });
    var me = T((tl, pt) => {
      var rr = G(), Ms = K(), js = function(e) {
        return Ms(e) ? e : void 0;
      };
      pt.exports = function(e, r) {
        return arguments.length < 2 ? js(rr[e]) : rr[e] && rr[e][r];
      };
    });
    var tr = T((ul, ht) => {
      var $s = Q();
      ht.exports = $s({}.isPrototypeOf);
    });
    var Et = T((nl, ft) => {
      var Us = me();
      ft.exports = Us("navigator", "userAgent") || "";
    });
    var vt = T((sl, At) => {
      var Ft = G(), ur = Et(), dt = Ft.process, Ct = Ft.Deno, mt = dt && dt.versions || Ct && Ct.version, gt = mt && mt.v8, te, Re;
      gt && (te = gt.split("."), Re = te[0] > 0 && te[0] < 4 ? 1 : +(te[0] + te[1]));
      !Re && ur && (te = ur.match(/Edge\/(\d+)/), (!te || te[1] >= 74) && (te = ur.match(/Chrome\/(\d+)/), te && (Re = +te[1])));
      At.exports = Re;
    });
    var nr = T((al, St) => {
      var _t = vt(), Gs = se();
      St.exports = !!Object.getOwnPropertySymbols && !Gs(function() {
        var e = Symbol();
        return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && _t && _t < 41;
      });
    });
    var sr = T((il, yt) => {
      var Vs = nr();
      yt.exports = Vs && !Symbol.sham && typeof Symbol.iterator == "symbol";
    });
    var ar = T((ol, Tt) => {
      var Xs = G(), Hs = me(), zs = K(), Ws = tr(), Ys = sr(), Qs = Xs.Object;
      Tt.exports = Ys ? function(e) {
        return typeof e == "symbol";
      } : function(e) {
        var r = Hs("Symbol");
        return zs(r) && Ws(r.prototype, Qs(e));
      };
    });
    var xe = T((cl, bt) => {
      var Ks = G(), Js = Ks.String;
      bt.exports = function(e) {
        try {
          return Js(e);
        } catch {
          return "Object";
        }
      };
    });
    var ge = T((Dl, Bt) => {
      var Zs = G(), ea = K(), ra = xe(), ta = Zs.TypeError;
      Bt.exports = function(e) {
        if (ea(e))
          return e;
        throw ta(ra(e) + " is not a function");
      };
    });
    var Pe = T((ll, wt) => {
      var ua = ge();
      wt.exports = function(e, r) {
        var t = e[r];
        return t == null ? void 0 : ua(t);
      };
    });
    var Ot = T((pl, Nt) => {
      var na = G(), ir = ce(), or = K(), cr = De(), sa = na.TypeError;
      Nt.exports = function(e, r) {
        var t, a;
        if (r === "string" && or(t = e.toString) && !cr(a = ir(t, e)) || or(t = e.valueOf) && !cr(a = ir(t, e)) || r !== "string" && or(t = e.toString) && !cr(a = ir(t, e)))
          return a;
        throw sa("Can't convert object to primitive value");
      };
    });
    var It = T((hl, qt) => {
      qt.exports = false;
    });
    var ke = T((fl, xt) => {
      var Rt = G(), aa = Object.defineProperty;
      xt.exports = function(e, r) {
        try {
          aa(Rt, e, { value: r, configurable: true, writable: true });
        } catch {
          Rt[e] = r;
        }
        return r;
      };
    });
    var Le = T((El, kt) => {
      var ia = G(), oa = ke(), Pt = "__core-js_shared__", ca = ia[Pt] || oa(Pt, {});
      kt.exports = ca;
    });
    var Dr = T((dl, Mt) => {
      var Da = It(), Lt = Le();
      (Mt.exports = function(e, r) {
        return Lt[e] || (Lt[e] = r !== void 0 ? r : {});
      })("versions", []).push({ version: "3.21.1", mode: Da ? "pure" : "global", copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE", source: "https://github.com/zloirock/core-js" });
    });
    var lr = T((Cl, jt) => {
      var la = G(), pa = er(), ha = la.Object;
      jt.exports = function(e) {
        return ha(pa(e));
      };
    });
    var ae = T((ml, $t) => {
      var fa = Q(), Ea = lr(), da = fa({}.hasOwnProperty);
      $t.exports = Object.hasOwn || function(r, t) {
        return da(Ea(r), t);
      };
    });
    var pr = T((gl, Ut) => {
      var Ca = Q(), ma = 0, ga = Math.random(), Fa = Ca(1 .toString);
      Ut.exports = function(e) {
        return "Symbol(" + (e === void 0 ? "" : e) + ")_" + Fa(++ma + ga, 36);
      };
    });
    var pe = T((Fl, zt) => {
      var Aa = G(), va = Dr(), Gt = ae(), _a = pr(), Vt = nr(), Ht = sr(), fe = va("wks"), le = Aa.Symbol, Xt = le && le.for, Sa = Ht ? le : le && le.withoutSetter || _a;
      zt.exports = function(e) {
        if (!Gt(fe, e) || !(Vt || typeof fe[e] == "string")) {
          var r = "Symbol." + e;
          Vt && Gt(le, e) ? fe[e] = le[e] : Ht && Xt ? fe[e] = Xt(r) : fe[e] = Sa(r);
        }
        return fe[e];
      };
    });
    var Kt = T((Al, Qt) => {
      var ya = G(), Ta = ce(), Wt = De(), Yt = ar(), ba = Pe(), Ba = Ot(), wa = pe(), Na = ya.TypeError, Oa = wa("toPrimitive");
      Qt.exports = function(e, r) {
        if (!Wt(e) || Yt(e))
          return e;
        var t = ba(e, Oa), a;
        if (t) {
          if (r === void 0 && (r = "default"), a = Ta(t, e, r), !Wt(a) || Yt(a))
            return a;
          throw Na("Can't convert object to primitive value");
        }
        return r === void 0 && (r = "number"), Ba(e, r);
      };
    });
    var Me = T((vl, Jt) => {
      var qa = Kt(), Ia = ar();
      Jt.exports = function(e) {
        var r = qa(e, "string");
        return Ia(r) ? r : r + "";
      };
    });
    var ru = T((_l, eu) => {
      var Ra = G(), Zt = De(), hr = Ra.document, xa = Zt(hr) && Zt(hr.createElement);
      eu.exports = function(e) {
        return xa ? hr.createElement(e) : {};
      };
    });
    var fr = T((Sl, tu) => {
      var Pa = oe(), ka = se(), La = ru();
      tu.exports = !Pa && !ka(function() {
        return Object.defineProperty(La("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    });
    var Er = T((nu) => {
      var Ma = oe(), ja = ce(), $a = Zr(), Ua = Oe(), Ga = Ie(), Va = Me(), Xa = ae(), Ha = fr(), uu = Object.getOwnPropertyDescriptor;
      nu.f = Ma ? uu : function(r, t) {
        if (r = Ga(r), t = Va(t), Ha)
          try {
            return uu(r, t);
          } catch {
          }
        if (Xa(r, t))
          return Ua(!ja($a.f, r, t), r[t]);
      };
    });
    var au = T((Tl, su) => {
      var za = oe(), Wa = se();
      su.exports = za && Wa(function() {
        return Object.defineProperty(function() {
        }, "prototype", { value: 42, writable: false }).prototype != 42;
      });
    });
    var Ee = T((bl, ou) => {
      var iu = G(), Ya = De(), Qa = iu.String, Ka = iu.TypeError;
      ou.exports = function(e) {
        if (Ya(e))
          return e;
        throw Ka(Qa(e) + " is not an object");
      };
    });
    var $e = T((Du) => {
      var Ja = G(), Za = oe(), ei = fr(), ri = au(), je = Ee(), cu = Me(), ti = Ja.TypeError, dr = Object.defineProperty, ui = Object.getOwnPropertyDescriptor, Cr = "enumerable", mr = "configurable", gr = "writable";
      Du.f = Za ? ri ? function(r, t, a) {
        if (je(r), t = cu(t), je(a), typeof r == "function" && t === "prototype" && "value" in a && gr in a && !a[gr]) {
          var D = ui(r, t);
          D && D[gr] && (r[t] = a.value, a = { configurable: mr in a ? a[mr] : D[mr], enumerable: Cr in a ? a[Cr] : D[Cr], writable: false });
        }
        return dr(r, t, a);
      } : dr : function(r, t, a) {
        if (je(r), t = cu(t), je(a), ei)
          try {
            return dr(r, t, a);
          } catch {
          }
        if ("get" in a || "set" in a)
          throw ti("Accessors not supported");
        return "value" in a && (r[t] = a.value), r;
      };
    });
    var Ue = T((wl, lu) => {
      var ni = oe(), si = $e(), ai = Oe();
      lu.exports = ni ? function(e, r, t) {
        return si.f(e, r, ai(1, t));
      } : function(e, r, t) {
        return e[r] = t, e;
      };
    });
    var Ge = T((Nl, pu) => {
      var ii = Q(), oi = K(), Fr = Le(), ci = ii(Function.toString);
      oi(Fr.inspectSource) || (Fr.inspectSource = function(e) {
        return ci(e);
      });
      pu.exports = Fr.inspectSource;
    });
    var Eu = T((Ol, fu) => {
      var Di = G(), li = K(), pi = Ge(), hu = Di.WeakMap;
      fu.exports = li(hu) && /native code/.test(pi(hu));
    });
    var mu = T((ql, Cu) => {
      var hi = Dr(), fi = pr(), du = hi("keys");
      Cu.exports = function(e) {
        return du[e] || (du[e] = fi(e));
      };
    });
    var Ar = T((Il, gu) => {
      gu.exports = {};
    });
    var yu = T((Rl, Su) => {
      var Ei = Eu(), _u = G(), vr = Q(), di = De(), Ci = Ue(), _r = ae(), Sr = Le(), mi = mu(), gi = Ar(), Fu = "Object already initialized", Tr = _u.TypeError, Fi = _u.WeakMap, Ve, Fe, Xe, Ai = function(e) {
        return Xe(e) ? Fe(e) : Ve(e, {});
      }, vi = function(e) {
        return function(r) {
          var t;
          if (!di(r) || (t = Fe(r)).type !== e)
            throw Tr("Incompatible receiver, " + e + " required");
          return t;
        };
      };
      Ei || Sr.state ? (ie = Sr.state || (Sr.state = new Fi()), Au = vr(ie.get), yr = vr(ie.has), vu = vr(ie.set), Ve = function(e, r) {
        if (yr(ie, e))
          throw new Tr(Fu);
        return r.facade = e, vu(ie, e, r), r;
      }, Fe = function(e) {
        return Au(ie, e) || {};
      }, Xe = function(e) {
        return yr(ie, e);
      }) : (he = mi("state"), gi[he] = true, Ve = function(e, r) {
        if (_r(e, he))
          throw new Tr(Fu);
        return r.facade = e, Ci(e, he, r), r;
      }, Fe = function(e) {
        return _r(e, he) ? e[he] : {};
      }, Xe = function(e) {
        return _r(e, he);
      });
      var ie, Au, yr, vu, he;
      Su.exports = { set: Ve, get: Fe, has: Xe, enforce: Ai, getterFor: vi };
    });
    var Bu = T((xl, bu) => {
      var br = oe(), _i = ae(), Tu = Function.prototype, Si = br && Object.getOwnPropertyDescriptor, Br = _i(Tu, "name"), yi = Br && function() {
      }.name === "something", Ti = Br && (!br || br && Si(Tu, "name").configurable);
      bu.exports = { EXISTS: Br, PROPER: yi, CONFIGURABLE: Ti };
    });
    var Iu = T((Pl, qu) => {
      var bi = G(), wu = K(), Bi = ae(), Nu = Ue(), wi = ke(), Ni = Ge(), Ou = yu(), Oi = Bu().CONFIGURABLE, qi = Ou.get, Ii = Ou.enforce, Ri = String(String).split("String");
      (qu.exports = function(e, r, t, a) {
        var D = a ? !!a.unsafe : false, n = a ? !!a.enumerable : false, c = a ? !!a.noTargetGet : false, E = a && a.name !== void 0 ? a.name : r, p;
        if (wu(t) && (String(E).slice(0, 7) === "Symbol(" && (E = "[" + String(E).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!Bi(t, "name") || Oi && t.name !== E) && Nu(t, "name", E), p = Ii(t), p.source || (p.source = Ri.join(typeof E == "string" ? E : ""))), e === bi) {
          n ? e[r] = t : wi(r, t);
          return;
        } else
          D ? !c && e[r] && (n = true) : delete e[r];
        n ? e[r] = t : Nu(e, r, t);
      })(Function.prototype, "toString", function() {
        return wu(this) && qi(this).source || Ni(this);
      });
    });
    var wr = T((kl, Ru) => {
      var xi = Math.ceil, Pi = Math.floor;
      Ru.exports = function(e) {
        var r = +e;
        return r !== r || r === 0 ? 0 : (r > 0 ? Pi : xi)(r);
      };
    });
    var Pu = T((Ll, xu) => {
      var ki = wr(), Li = Math.max, Mi = Math.min;
      xu.exports = function(e, r) {
        var t = ki(e);
        return t < 0 ? Li(t + r, 0) : Mi(t, r);
      };
    });
    var Lu = T((Ml, ku) => {
      var ji = wr(), $i = Math.min;
      ku.exports = function(e) {
        return e > 0 ? $i(ji(e), 9007199254740991) : 0;
      };
    });
    var Ae = T((jl, Mu) => {
      var Ui = Lu();
      Mu.exports = function(e) {
        return Ui(e.length);
      };
    });
    var Uu = T(($l, $u) => {
      var Gi = Ie(), Vi = Pu(), Xi = Ae(), ju = function(e) {
        return function(r, t, a) {
          var D = Gi(r), n = Xi(D), c = Vi(a, n), E;
          if (e && t != t) {
            for (; n > c; )
              if (E = D[c++], E != E)
                return true;
          } else
            for (; n > c; c++)
              if ((e || c in D) && D[c] === t)
                return e || c || 0;
          return !e && -1;
        };
      };
      $u.exports = { includes: ju(true), indexOf: ju(false) };
    });
    var Xu = T((Ul, Vu) => {
      var Hi = Q(), Nr = ae(), zi = Ie(), Wi = Uu().indexOf, Yi = Ar(), Gu = Hi([].push);
      Vu.exports = function(e, r) {
        var t = zi(e), a = 0, D = [], n;
        for (n in t)
          !Nr(Yi, n) && Nr(t, n) && Gu(D, n);
        for (; r.length > a; )
          Nr(t, n = r[a++]) && (~Wi(D, n) || Gu(D, n));
        return D;
      };
    });
    var zu = T((Gl, Hu) => {
      Hu.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    });
    var Yu = T((Wu) => {
      var Qi = Xu(), Ki = zu(), Ji = Ki.concat("length", "prototype");
      Wu.f = Object.getOwnPropertyNames || function(r) {
        return Qi(r, Ji);
      };
    });
    var Ku = T((Qu) => {
      Qu.f = Object.getOwnPropertySymbols;
    });
    var Zu = T((Hl, Ju) => {
      var Zi = me(), eo = Q(), ro = Yu(), to = Ku(), uo = Ee(), no = eo([].concat);
      Ju.exports = Zi("Reflect", "ownKeys") || function(r) {
        var t = ro.f(uo(r)), a = to.f;
        return a ? no(t, a(r)) : t;
      };
    });
    var tn = T((zl, rn) => {
      var en = ae(), so = Zu(), ao = Er(), io = $e();
      rn.exports = function(e, r, t) {
        for (var a = so(r), D = io.f, n = ao.f, c = 0; c < a.length; c++) {
          var E = a[c];
          !en(e, E) && !(t && en(t, E)) && D(e, E, n(r, E));
        }
      };
    });
    var nn = T((Wl, un) => {
      var oo = se(), co = K(), Do = /#|\.prototype\./, ve = function(e, r) {
        var t = po[lo(e)];
        return t == fo ? true : t == ho ? false : co(r) ? oo(r) : !!r;
      }, lo = ve.normalize = function(e) {
        return String(e).replace(Do, ".").toLowerCase();
      }, po = ve.data = {}, ho = ve.NATIVE = "N", fo = ve.POLYFILL = "P";
      un.exports = ve;
    });
    var He = T((Yl, sn) => {
      var Or = G(), Eo = Er().f, Co = Ue(), mo = Iu(), go = ke(), Fo = tn(), Ao = nn();
      sn.exports = function(e, r) {
        var t = e.target, a = e.global, D = e.stat, n, c, E, p, g, s;
        if (a ? c = Or : D ? c = Or[t] || go(t, {}) : c = (Or[t] || {}).prototype, c)
          for (E in r) {
            if (g = r[E], e.noTargetGet ? (s = Eo(c, E), p = s && s.value) : p = c[E], n = Ao(a ? E : t + (D ? "." : "#") + E, e.forced), !n && p !== void 0) {
              if (typeof g == typeof p)
                continue;
              Fo(g, p);
            }
            (e.sham || p && p.sham) && Co(g, "sham", true), mo(c, E, g, e);
          }
      };
    });
    var an = T(() => {
      var vo = He(), _o = G();
      vo({ global: true }, { globalThis: _o });
    });
    var on = T(() => {
      an();
    });
    var qr = T((e2, cn) => {
      var So = qe();
      cn.exports = Array.isArray || function(r) {
        return So(r) == "Array";
      };
    });
    var Ir = T((r2, ln) => {
      var Dn = Q(), yo = ge(), To = we(), bo = Dn(Dn.bind);
      ln.exports = function(e, r) {
        return yo(e), r === void 0 ? e : To ? bo(e, r) : function() {
          return e.apply(r, arguments);
        };
      };
    });
    var fn = T((t2, hn) => {
      var Bo = G(), wo = qr(), No = Ae(), Oo = Ir(), qo = Bo.TypeError, pn = function(e, r, t, a, D, n, c, E) {
        for (var p = D, g = 0, s = c ? Oo(c, E) : false, o, l; g < a; ) {
          if (g in t) {
            if (o = s ? s(t[g], g, r) : t[g], n > 0 && wo(o))
              l = No(o), p = pn(e, r, o, l, p, n - 1) - 1;
            else {
              if (p >= 9007199254740991)
                throw qo("Exceed the acceptable array length");
              e[p] = o;
            }
            p++;
          }
          g++;
        }
        return p;
      };
      hn.exports = pn;
    });
    var Cn = T((u2, dn) => {
      var Io = pe(), Ro = Io("toStringTag"), En = {};
      En[Ro] = "z";
      dn.exports = String(En) === "[object z]";
    });
    var Rr = T((n2, mn) => {
      var xo = G(), Po = Cn(), ko = K(), ze = qe(), Lo = pe(), Mo = Lo("toStringTag"), jo = xo.Object, $o = ze(function() {
        return arguments;
      }()) == "Arguments", Uo = function(e, r) {
        try {
          return e[r];
        } catch {
        }
      };
      mn.exports = Po ? ze : function(e) {
        var r, t, a;
        return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (t = Uo(r = jo(e), Mo)) == "string" ? t : $o ? ze(r) : (a = ze(r)) == "Object" && ko(r.callee) ? "Arguments" : a;
      };
    });
    var Sn = T((s2, _n) => {
      var Go = Q(), Vo = se(), gn = K(), Xo = Rr(), Ho = me(), zo = Ge(), Fn = function() {
      }, Wo = [], An = Ho("Reflect", "construct"), xr = /^\s*(?:class|function)\b/, Yo = Go(xr.exec), Qo = !xr.exec(Fn), _e = function(r) {
        if (!gn(r))
          return false;
        try {
          return An(Fn, Wo, r), true;
        } catch {
          return false;
        }
      }, vn = function(r) {
        if (!gn(r))
          return false;
        switch (Xo(r)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return false;
        }
        try {
          return Qo || !!Yo(xr, zo(r));
        } catch {
          return true;
        }
      };
      vn.sham = true;
      _n.exports = !An || Vo(function() {
        var e;
        return _e(_e.call) || !_e(Object) || !_e(function() {
          e = true;
        }) || e;
      }) ? vn : _e;
    });
    var Bn = T((a2, bn) => {
      var Ko = G(), yn = qr(), Jo = Sn(), Zo = De(), ec = pe(), rc = ec("species"), Tn = Ko.Array;
      bn.exports = function(e) {
        var r;
        return yn(e) && (r = e.constructor, Jo(r) && (r === Tn || yn(r.prototype)) ? r = void 0 : Zo(r) && (r = r[rc], r === null && (r = void 0))), r === void 0 ? Tn : r;
      };
    });
    var Nn = T((i2, wn) => {
      var tc = Bn();
      wn.exports = function(e, r) {
        return new (tc(e))(r === 0 ? 0 : r);
      };
    });
    var On = T(() => {
      var uc = He(), nc = fn(), sc = ge(), ac = lr(), ic = Ae(), oc = Nn();
      uc({ target: "Array", proto: true }, { flatMap: function(r) {
        var t = ac(this), a = ic(t), D;
        return sc(r), D = oc(t, 0), D.length = nc(D, t, t, a, 0, 1, r, arguments.length > 1 ? arguments[1] : void 0), D;
      } });
    });
    var Pr = T((D2, qn) => {
      qn.exports = {};
    });
    var Rn = T((l2, In) => {
      var cc = pe(), Dc = Pr(), lc = cc("iterator"), pc = Array.prototype;
      In.exports = function(e) {
        return e !== void 0 && (Dc.Array === e || pc[lc] === e);
      };
    });
    var kr = T((p2, Pn) => {
      var hc = Rr(), xn = Pe(), fc = Pr(), Ec = pe(), dc = Ec("iterator");
      Pn.exports = function(e) {
        if (e != null)
          return xn(e, dc) || xn(e, "@@iterator") || fc[hc(e)];
      };
    });
    var Ln = T((h2, kn) => {
      var Cc = G(), mc = ce(), gc = ge(), Fc = Ee(), Ac = xe(), vc = kr(), _c = Cc.TypeError;
      kn.exports = function(e, r) {
        var t = arguments.length < 2 ? vc(e) : r;
        if (gc(t))
          return Fc(mc(t, e));
        throw _c(Ac(e) + " is not iterable");
      };
    });
    var $n = T((f2, jn) => {
      var Sc = ce(), Mn = Ee(), yc = Pe();
      jn.exports = function(e, r, t) {
        var a, D;
        Mn(e);
        try {
          if (a = yc(e, "return"), !a) {
            if (r === "throw")
              throw t;
            return t;
          }
          a = Sc(a, e);
        } catch (n) {
          D = true, a = n;
        }
        if (r === "throw")
          throw t;
        if (D)
          throw a;
        return Mn(a), t;
      };
    });
    var Hn = T((E2, Xn) => {
      var Tc = G(), bc = Ir(), Bc = ce(), wc = Ee(), Nc = xe(), Oc = Rn(), qc = Ae(), Un = tr(), Ic = Ln(), Rc = kr(), Gn = $n(), xc = Tc.TypeError, We = function(e, r) {
        this.stopped = e, this.result = r;
      }, Vn = We.prototype;
      Xn.exports = function(e, r, t) {
        var a = t && t.that, D = !!(t && t.AS_ENTRIES), n = !!(t && t.IS_ITERATOR), c = !!(t && t.INTERRUPTED), E = bc(r, a), p, g, s, o, l, C, f, m = function(B) {
          return p && Gn(p, "normal", B), new We(true, B);
        }, b = function(B) {
          return D ? (wc(B), c ? E(B[0], B[1], m) : E(B[0], B[1])) : c ? E(B, m) : E(B);
        };
        if (n)
          p = e;
        else {
          if (g = Rc(e), !g)
            throw xc(Nc(e) + " is not iterable");
          if (Oc(g)) {
            for (s = 0, o = qc(e); o > s; s++)
              if (l = b(e[s]), l && Un(Vn, l))
                return l;
            return new We(false);
          }
          p = Ic(e, g);
        }
        for (C = p.next; !(f = Bc(C, p)).done; ) {
          try {
            l = b(f.value);
          } catch (B) {
            Gn(p, "throw", B);
          }
          if (typeof l == "object" && l && Un(Vn, l))
            return l;
        }
        return new We(false);
      };
    });
    var Wn = T((d2, zn) => {
      var Pc = Me(), kc = $e(), Lc = Oe();
      zn.exports = function(e, r, t) {
        var a = Pc(r);
        a in e ? kc.f(e, a, Lc(0, t)) : e[a] = t;
      };
    });
    var Yn = T(() => {
      var Mc = He(), jc = Hn(), $c = Wn();
      Mc({ target: "Object", stat: true }, { fromEntries: function(r) {
        var t = {};
        return jc(r, function(a, D) {
          $c(t, a, D);
        }, { AS_ENTRIES: true }), t;
      } });
    });
    var jD = T((g2, Fs) => {
      var Uc = ["cliName", "cliCategory", "cliDescription"], Qn, Kn, Jn, Zn, es, rs;
      function Gc(e, r) {
        if (e == null)
          return {};
        var t = Vc(e, r), a, D;
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (D = 0; D < n.length; D++)
            a = n[D], !(r.indexOf(a) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, a) || (t[a] = e[a]));
        }
        return t;
      }
      function Vc(e, r) {
        if (e == null)
          return {};
        var t = {}, a = Object.keys(e), D, n;
        for (n = 0; n < a.length; n++)
          D = a[n], !(r.indexOf(D) >= 0) && (t[D] = e[D]);
        return t;
      }
      function de(e, r) {
        return r || (r = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(r) } }));
      }
      on();
      On();
      Yn();
      var is = Object.getOwnPropertyNames, Xc = (e, r) => function() {
        return e && (r = (0, e[is(e)[0]])(e = 0)), r;
      }, R = (e, r) => function() {
        return r || (0, e[is(e)[0]])((r = { exports: {} }).exports, r), r.exports;
      }, ts, us, Se, P = Xc({ "<define:process>"() {
        ts = {}, us = [], Se = { env: ts, argv: us };
      } }), os = R({ "node_modules/angular-html-parser/lib/compiler/src/chars.js"(e) {
        P(), Object.defineProperty(e, "__esModule", { value: true }), e.$EOF = 0, e.$BSPACE = 8, e.$TAB = 9, e.$LF = 10, e.$VTAB = 11, e.$FF = 12, e.$CR = 13, e.$SPACE = 32, e.$BANG = 33, e.$DQ = 34, e.$HASH = 35, e.$$ = 36, e.$PERCENT = 37, e.$AMPERSAND = 38, e.$SQ = 39, e.$LPAREN = 40, e.$RPAREN = 41, e.$STAR = 42, e.$PLUS = 43, e.$COMMA = 44, e.$MINUS = 45, e.$PERIOD = 46, e.$SLASH = 47, e.$COLON = 58, e.$SEMICOLON = 59, e.$LT = 60, e.$EQ = 61, e.$GT = 62, e.$QUESTION = 63, e.$0 = 48, e.$7 = 55, e.$9 = 57, e.$A = 65, e.$E = 69, e.$F = 70, e.$X = 88, e.$Z = 90, e.$LBRACKET = 91, e.$BACKSLASH = 92, e.$RBRACKET = 93, e.$CARET = 94, e.$_ = 95, e.$a = 97, e.$b = 98, e.$e = 101, e.$f = 102, e.$n = 110, e.$r = 114, e.$t = 116, e.$u = 117, e.$v = 118, e.$x = 120, e.$z = 122, e.$LBRACE = 123, e.$BAR = 124, e.$RBRACE = 125, e.$NBSP = 160, e.$PIPE = 124, e.$TILDA = 126, e.$AT = 64, e.$BT = 96;
        function r(E) {
          return E >= e.$TAB && E <= e.$SPACE || E == e.$NBSP;
        }
        e.isWhitespace = r;
        function t(E) {
          return e.$0 <= E && E <= e.$9;
        }
        e.isDigit = t;
        function a(E) {
          return E >= e.$a && E <= e.$z || E >= e.$A && E <= e.$Z;
        }
        e.isAsciiLetter = a;
        function D(E) {
          return E >= e.$a && E <= e.$f || E >= e.$A && E <= e.$F || t(E);
        }
        e.isAsciiHexDigit = D;
        function n(E) {
          return E === e.$LF || E === e.$CR;
        }
        e.isNewLine = n;
        function c(E) {
          return e.$0 <= E && E <= e.$7;
        }
        e.isOctalDigit = c;
      } }), Hc = R({ "node_modules/angular-html-parser/lib/compiler/src/aot/static_symbol.js"(e) {
        P(), Object.defineProperty(e, "__esModule", { value: true });
        var r = class {
          constructor(a, D, n) {
            this.filePath = a, this.name = D, this.members = n;
          }
          assertNoMembers() {
            if (this.members.length)
              throw new Error("Illegal state: symbol without members expected, but got ".concat(JSON.stringify(this), "."));
          }
        };
        e.StaticSymbol = r;
        var t = class {
          constructor() {
            this.cache = /* @__PURE__ */ new Map();
          }
          get(a, D, n) {
            n = n || [];
            let c = n.length ? ".".concat(n.join(".")) : "", E = '"'.concat(a, '".').concat(D).concat(c), p = this.cache.get(E);
            return p || (p = new r(a, D, n), this.cache.set(E, p)), p;
          }
        };
        e.StaticSymbolCache = t;
      } }), zc = R({ "node_modules/angular-html-parser/lib/compiler/src/util.js"(e) {
        P(), Object.defineProperty(e, "__esModule", { value: true });
        var r = /-+([a-z0-9])/g;
        function t(i) {
          return i.replace(r, function() {
            for (var d = arguments.length, h = new Array(d), _ = 0; _ < d; _++)
              h[_] = arguments[_];
            return h[1].toUpperCase();
          });
        }
        e.dashCaseToCamelCase = t;
        function a(i, d) {
          return n(i, ":", d);
        }
        e.splitAtColon = a;
        function D(i, d) {
          return n(i, ".", d);
        }
        e.splitAtPeriod = D;
        function n(i, d, h) {
          let _ = i.indexOf(d);
          return _ == -1 ? h : [i.slice(0, _).trim(), i.slice(_ + 1).trim()];
        }
        function c(i, d, h) {
          return Array.isArray(i) ? d.visitArray(i, h) : v(i) ? d.visitStringMap(i, h) : i == null || typeof i == "string" || typeof i == "number" || typeof i == "boolean" ? d.visitPrimitive(i, h) : d.visitOther(i, h);
        }
        e.visitValue = c;
        function E(i) {
          return i != null;
        }
        e.isDefined = E;
        function p(i) {
          return i === void 0 ? null : i;
        }
        e.noUndefined = p;
        var g = class {
          visitArray(i, d) {
            return i.map((h) => c(h, this, d));
          }
          visitStringMap(i, d) {
            let h = {};
            return Object.keys(i).forEach((_) => {
              h[_] = c(i[_], this, d);
            }), h;
          }
          visitPrimitive(i, d) {
            return i;
          }
          visitOther(i, d) {
            return i;
          }
        };
        e.ValueTransformer = g, e.SyncAsync = { assertSync: (i) => {
          if (A(i))
            throw new Error("Illegal state: value cannot be a promise");
          return i;
        }, then: (i, d) => A(i) ? i.then(d) : d(i), all: (i) => i.some(A) ? Promise.all(i) : i };
        function s(i) {
          throw new Error("Internal Error: ".concat(i));
        }
        e.error = s;
        function o(i, d) {
          let h = Error(i);
          return h[l] = true, d && (h[C] = d), h;
        }
        e.syntaxError = o;
        var l = "ngSyntaxError", C = "ngParseErrors";
        function f(i) {
          return i[l];
        }
        e.isSyntaxError = f;
        function m(i) {
          return i[C] || [];
        }
        e.getParseErrors = m;
        function b(i) {
          return i.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
        }
        e.escapeRegExp = b;
        var B = Object.getPrototypeOf({});
        function v(i) {
          return typeof i == "object" && i !== null && Object.getPrototypeOf(i) === B;
        }
        function O(i) {
          let d = "";
          for (let h = 0; h < i.length; h++) {
            let _ = i.charCodeAt(h);
            if (_ >= 55296 && _ <= 56319 && i.length > h + 1) {
              let k = i.charCodeAt(h + 1);
              k >= 56320 && k <= 57343 && (h++, _ = (_ - 55296 << 10) + k - 56320 + 65536);
            }
            _ <= 127 ? d += String.fromCharCode(_) : _ <= 2047 ? d += String.fromCharCode(_ >> 6 & 31 | 192, _ & 63 | 128) : _ <= 65535 ? d += String.fromCharCode(_ >> 12 | 224, _ >> 6 & 63 | 128, _ & 63 | 128) : _ <= 2097151 && (d += String.fromCharCode(_ >> 18 & 7 | 240, _ >> 12 & 63 | 128, _ >> 6 & 63 | 128, _ & 63 | 128));
          }
          return d;
        }
        e.utf8Encode = O;
        function F(i) {
          if (typeof i == "string")
            return i;
          if (i instanceof Array)
            return "[" + i.map(F).join(", ") + "]";
          if (i == null)
            return "" + i;
          if (i.overriddenName)
            return "".concat(i.overriddenName);
          if (i.name)
            return "".concat(i.name);
          if (!i.toString)
            return "object";
          let d = i.toString();
          if (d == null)
            return "" + d;
          let h = d.indexOf(`
`);
          return h === -1 ? d : d.substring(0, h);
        }
        e.stringify = F;
        function x(i) {
          return typeof i == "function" && i.hasOwnProperty("__forward_ref__") ? i() : i;
        }
        e.resolveForwardRef = x;
        function A(i) {
          return !!i && typeof i.then == "function";
        }
        e.isPromise = A;
        var w = class {
          constructor(i) {
            this.full = i;
            let d = i.split(".");
            this.major = d[0], this.minor = d[1], this.patch = d.slice(2).join(".");
          }
        };
        e.Version = w;
        var I = "undefined" < "u" , L = typeof self < "u" && typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && self, j = typeof globalThis < "u" && globalThis, u = j || I || L;
        e.global = u;
      } }), Wc = R({ "node_modules/angular-html-parser/lib/compiler/src/compile_metadata.js"(e) {
        P(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Hc(), t = zc(), a = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;
        function D(h) {
          return h.replace(/\W/g, "_");
        }
        e.sanitizeIdentifier = D;
        var n = 0;
        function c(h) {
          if (!h || !h.reference)
            return null;
          let _ = h.reference;
          if (_ instanceof r.StaticSymbol)
            return _.name;
          if (_.__anonymousType)
            return _.__anonymousType;
          let k = t.stringify(_);
          return k.indexOf("(") >= 0 ? (k = "anonymous_".concat(n++), _.__anonymousType = k) : k = D(k), k;
        }
        e.identifierName = c;
        function E(h) {
          let _ = h.reference;
          return _ instanceof r.StaticSymbol ? _.filePath : "./".concat(t.stringify(_));
        }
        e.identifierModuleUrl = E;
        function p(h, _) {
          return "View_".concat(c({ reference: h }), "_").concat(_);
        }
        e.viewClassName = p;
        function g(h) {
          return "RenderType_".concat(c({ reference: h }));
        }
        e.rendererTypeName = g;
        function s(h) {
          return "HostView_".concat(c({ reference: h }));
        }
        e.hostViewClassName = s;
        function o(h) {
          return "".concat(c({ reference: h }), "NgFactory");
        }
        e.componentFactoryName = o;
        var l;
        (function(h) {
          h[h.Pipe = 0] = "Pipe", h[h.Directive = 1] = "Directive", h[h.NgModule = 2] = "NgModule", h[h.Injectable = 3] = "Injectable";
        })(l = e.CompileSummaryKind || (e.CompileSummaryKind = {}));
        function C(h) {
          return h.value != null ? D(h.value) : c(h.identifier);
        }
        e.tokenName = C;
        function f(h) {
          return h.identifier != null ? h.identifier.reference : h.value;
        }
        e.tokenReference = f;
        var m = class {
          constructor() {
            let { moduleUrl: h, styles: _, styleUrls: k } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            this.moduleUrl = h || null, this.styles = A(_), this.styleUrls = A(k);
          }
        };
        e.CompileStylesheetMetadata = m;
        var b = class {
          constructor(h) {
            let { encapsulation: _, template: k, templateUrl: $, htmlAst: W, styles: X, styleUrls: H, externalStylesheets: z, animations: J, ngContentSelectors: Z, interpolation: ee, isInline: S, preserveWhitespaces: y } = h;
            if (this.encapsulation = _, this.template = k, this.templateUrl = $, this.htmlAst = W, this.styles = A(X), this.styleUrls = A(H), this.externalStylesheets = A(z), this.animations = J ? I(J) : [], this.ngContentSelectors = Z || [], ee && ee.length != 2)
              throw new Error("'interpolation' should have a start and an end symbol.");
            this.interpolation = ee, this.isInline = S, this.preserveWhitespaces = y;
          }
          toSummary() {
            return { ngContentSelectors: this.ngContentSelectors, encapsulation: this.encapsulation, styles: this.styles, animations: this.animations };
          }
        };
        e.CompileTemplateMetadata = b;
        var B = class {
          static create(h) {
            let { isHost: _, type: k, isComponent: $, selector: W, exportAs: X, changeDetection: H, inputs: z, outputs: J, host: Z, providers: ee, viewProviders: S, queries: y, guards: N, viewQueries: q, entryComponents: M, template: U, componentViewType: V, rendererType: Y, componentFactory: ue } = h, Te = {}, be = {}, Ur = {};
            Z != null && Object.keys(Z).forEach((re) => {
              let ne = Z[re], Ce = re.match(a);
              Ce === null ? Ur[re] = ne : Ce[1] != null ? be[Ce[1]] = ne : Ce[2] != null && (Te[Ce[2]] = ne);
            });
            let Gr = {};
            z != null && z.forEach((re) => {
              let ne = t.splitAtColon(re, [re, re]);
              Gr[ne[0]] = ne[1];
            });
            let Vr = {};
            return J != null && J.forEach((re) => {
              let ne = t.splitAtColon(re, [re, re]);
              Vr[ne[0]] = ne[1];
            }), new B({ isHost: _, type: k, isComponent: !!$, selector: W, exportAs: X, changeDetection: H, inputs: Gr, outputs: Vr, hostListeners: Te, hostProperties: be, hostAttributes: Ur, providers: ee, viewProviders: S, queries: y, guards: N, viewQueries: q, entryComponents: M, template: U, componentViewType: V, rendererType: Y, componentFactory: ue });
          }
          constructor(h) {
            let { isHost: _, type: k, isComponent: $, selector: W, exportAs: X, changeDetection: H, inputs: z, outputs: J, hostListeners: Z, hostProperties: ee, hostAttributes: S, providers: y, viewProviders: N, queries: q, guards: M, viewQueries: U, entryComponents: V, template: Y, componentViewType: ue, rendererType: Te, componentFactory: be } = h;
            this.isHost = !!_, this.type = k, this.isComponent = $, this.selector = W, this.exportAs = X, this.changeDetection = H, this.inputs = z, this.outputs = J, this.hostListeners = Z, this.hostProperties = ee, this.hostAttributes = S, this.providers = A(y), this.viewProviders = A(N), this.queries = A(q), this.guards = M, this.viewQueries = A(U), this.entryComponents = A(V), this.template = Y, this.componentViewType = ue, this.rendererType = Te, this.componentFactory = be;
          }
          toSummary() {
            return { summaryKind: l.Directive, type: this.type, isComponent: this.isComponent, selector: this.selector, exportAs: this.exportAs, inputs: this.inputs, outputs: this.outputs, hostListeners: this.hostListeners, hostProperties: this.hostProperties, hostAttributes: this.hostAttributes, providers: this.providers, viewProviders: this.viewProviders, queries: this.queries, guards: this.guards, viewQueries: this.viewQueries, entryComponents: this.entryComponents, changeDetection: this.changeDetection, template: this.template && this.template.toSummary(), componentViewType: this.componentViewType, rendererType: this.rendererType, componentFactory: this.componentFactory };
          }
        };
        e.CompileDirectiveMetadata = B;
        var v = class {
          constructor(h) {
            let { type: _, name: k, pure: $ } = h;
            this.type = _, this.name = k, this.pure = !!$;
          }
          toSummary() {
            return { summaryKind: l.Pipe, type: this.type, name: this.name, pure: this.pure };
          }
        };
        e.CompilePipeMetadata = v;
        var O = class {
        };
        e.CompileShallowModuleMetadata = O;
        var F = class {
          constructor(h) {
            let { type: _, providers: k, declaredDirectives: $, exportedDirectives: W, declaredPipes: X, exportedPipes: H, entryComponents: z, bootstrapComponents: J, importedModules: Z, exportedModules: ee, schemas: S, transitiveModule: y, id: N } = h;
            this.type = _ || null, this.declaredDirectives = A($), this.exportedDirectives = A(W), this.declaredPipes = A(X), this.exportedPipes = A(H), this.providers = A(k), this.entryComponents = A(z), this.bootstrapComponents = A(J), this.importedModules = A(Z), this.exportedModules = A(ee), this.schemas = A(S), this.id = N || null, this.transitiveModule = y || null;
          }
          toSummary() {
            let h = this.transitiveModule;
            return { summaryKind: l.NgModule, type: this.type, entryComponents: h.entryComponents, providers: h.providers, modules: h.modules, exportedDirectives: h.exportedDirectives, exportedPipes: h.exportedPipes };
          }
        };
        e.CompileNgModuleMetadata = F;
        var x = class {
          constructor() {
            this.directivesSet = /* @__PURE__ */ new Set(), this.directives = [], this.exportedDirectivesSet = /* @__PURE__ */ new Set(), this.exportedDirectives = [], this.pipesSet = /* @__PURE__ */ new Set(), this.pipes = [], this.exportedPipesSet = /* @__PURE__ */ new Set(), this.exportedPipes = [], this.modulesSet = /* @__PURE__ */ new Set(), this.modules = [], this.entryComponentsSet = /* @__PURE__ */ new Set(), this.entryComponents = [], this.providers = [];
          }
          addProvider(h, _) {
            this.providers.push({ provider: h, module: _ });
          }
          addDirective(h) {
            this.directivesSet.has(h.reference) || (this.directivesSet.add(h.reference), this.directives.push(h));
          }
          addExportedDirective(h) {
            this.exportedDirectivesSet.has(h.reference) || (this.exportedDirectivesSet.add(h.reference), this.exportedDirectives.push(h));
          }
          addPipe(h) {
            this.pipesSet.has(h.reference) || (this.pipesSet.add(h.reference), this.pipes.push(h));
          }
          addExportedPipe(h) {
            this.exportedPipesSet.has(h.reference) || (this.exportedPipesSet.add(h.reference), this.exportedPipes.push(h));
          }
          addModule(h) {
            this.modulesSet.has(h.reference) || (this.modulesSet.add(h.reference), this.modules.push(h));
          }
          addEntryComponent(h) {
            this.entryComponentsSet.has(h.componentType) || (this.entryComponentsSet.add(h.componentType), this.entryComponents.push(h));
          }
        };
        e.TransitiveCompileNgModuleMetadata = x;
        function A(h) {
          return h || [];
        }
        var w = class {
          constructor(h, _) {
            let { useClass: k, useValue: $, useExisting: W, useFactory: X, deps: H, multi: z } = _;
            this.token = h, this.useClass = k || null, this.useValue = $, this.useExisting = W, this.useFactory = X || null, this.dependencies = H || null, this.multi = !!z;
          }
        };
        e.ProviderMeta = w;
        function I(h) {
          return h.reduce((_, k) => {
            let $ = Array.isArray(k) ? I(k) : k;
            return _.concat($);
          }, []);
        }
        e.flatten = I;
        function L(h) {
          return h.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///");
        }
        function j(h, _, k) {
          let $;
          return k.isInline ? _.type.reference instanceof r.StaticSymbol ? $ = "".concat(_.type.reference.filePath, ".").concat(_.type.reference.name, ".html") : $ = "".concat(c(h), "/").concat(c(_.type), ".html") : $ = k.templateUrl, _.type.reference instanceof r.StaticSymbol ? $ : L($);
        }
        e.templateSourceUrl = j;
        function u(h, _) {
          let k = h.moduleUrl.split(/\/\\/g), $ = k[k.length - 1];
          return L("css/".concat(_).concat($, ".ngstyle.js"));
        }
        e.sharedStylesheetJitUrl = u;
        function i(h) {
          return L("".concat(c(h.type), "/module.ngfactory.js"));
        }
        e.ngModuleJitUrl = i;
        function d(h, _) {
          return L("".concat(c(h), "/").concat(c(_.type), ".ngfactory.js"));
        }
        e.templateJitUrl = d;
      } }), ye = R({ "node_modules/angular-html-parser/lib/compiler/src/parse_util.js"(e) {
        P(), Object.defineProperty(e, "__esModule", { value: true });
        var r = os(), t = Wc(), a = class {
          constructor(s, o, l, C) {
            this.file = s, this.offset = o, this.line = l, this.col = C;
          }
          toString() {
            return this.offset != null ? "".concat(this.file.url, "@").concat(this.line, ":").concat(this.col) : this.file.url;
          }
          moveBy(s) {
            let o = this.file.content, l = o.length, C = this.offset, f = this.line, m = this.col;
            for (; C > 0 && s < 0; )
              if (C--, s++, o.charCodeAt(C) == r.$LF) {
                f--;
                let B = o.substr(0, C - 1).lastIndexOf(String.fromCharCode(r.$LF));
                m = B > 0 ? C - B : C;
              } else
                m--;
            for (; C < l && s > 0; ) {
              let b = o.charCodeAt(C);
              C++, s--, b == r.$LF ? (f++, m = 0) : m++;
            }
            return new a(this.file, C, f, m);
          }
          getContext(s, o) {
            let l = this.file.content, C = this.offset;
            if (C != null) {
              C > l.length - 1 && (C = l.length - 1);
              let f = C, m = 0, b = 0;
              for (; m < s && C > 0 && (C--, m++, !(l[C] == `
` && ++b == o)); )
                ;
              for (m = 0, b = 0; m < s && f < l.length - 1 && (f++, m++, !(l[f] == `
` && ++b == o)); )
                ;
              return { before: l.substring(C, this.offset), after: l.substring(this.offset, f + 1) };
            }
            return null;
          }
        };
        e.ParseLocation = a;
        var D = class {
          constructor(s, o) {
            this.content = s, this.url = o;
          }
        };
        e.ParseSourceFile = D;
        var n = class {
          constructor(s, o) {
            let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
            this.start = s, this.end = o, this.details = l;
          }
          toString() {
            return this.start.file.content.substring(this.start.offset, this.end.offset);
          }
        };
        e.ParseSourceSpan = n, e.EMPTY_PARSE_LOCATION = new a(new D("", ""), 0, 0, 0), e.EMPTY_SOURCE_SPAN = new n(e.EMPTY_PARSE_LOCATION, e.EMPTY_PARSE_LOCATION);
        var c;
        (function(s) {
          s[s.WARNING = 0] = "WARNING", s[s.ERROR = 1] = "ERROR";
        })(c = e.ParseErrorLevel || (e.ParseErrorLevel = {}));
        var E = class {
          constructor(s, o) {
            let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : c.ERROR;
            this.span = s, this.msg = o, this.level = l;
          }
          contextualMessage() {
            let s = this.span.start.getContext(100, 3);
            return s ? "".concat(this.msg, ' ("').concat(s.before, "[").concat(c[this.level], " ->]").concat(s.after, '")') : this.msg;
          }
          toString() {
            let s = this.span.details ? ", ".concat(this.span.details) : "";
            return "".concat(this.contextualMessage(), ": ").concat(this.span.start).concat(s);
          }
        };
        e.ParseError = E;
        function p(s, o) {
          let l = t.identifierModuleUrl(o), C = l != null ? "in ".concat(s, " ").concat(t.identifierName(o), " in ").concat(l) : "in ".concat(s, " ").concat(t.identifierName(o)), f = new D("", C);
          return new n(new a(f, -1, -1, -1), new a(f, -1, -1, -1));
        }
        e.typeSourceSpan = p;
        function g(s, o, l) {
          let C = "in ".concat(s, " ").concat(o, " in ").concat(l), f = new D("", C);
          return new n(new a(f, -1, -1, -1), new a(f, -1, -1, -1));
        }
        e.r3JitTypeSourceSpan = g;
      } }), Yc = R({ "src/utils/front-matter/parse.js"(e, r) {
        P();
        var t = new RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s");
        function a(D) {
          let n = D.match(t);
          if (!n)
            return { content: D };
          let { startDelimiter: c, language: E, value: p = "", endDelimiter: g } = n.groups, s = E.trim() || "yaml";
          if (c === "+++" && (s = "toml"), s !== "yaml" && c !== g)
            return { content: D };
          let [o] = n;
          return { frontMatter: { type: "front-matter", lang: s, value: p, startDelimiter: c, endDelimiter: g, raw: o.replace(/\n$/, "") }, content: o.replace(/[^\n]/g, " ") + D.slice(o.length) };
        }
        r.exports = a;
      } }), Mr = R({ "src/utils/get-last.js"(e, r) {
        P();
        var t = (a) => a[a.length - 1];
        r.exports = t;
      } }), Qc = R({ "src/common/parser-create-error.js"(e, r) {
        P();
        function t(a, D) {
          let n = new SyntaxError(a + " (" + D.start.line + ":" + D.start.column + ")");
          return n.loc = D, n;
        }
        r.exports = t;
      } }), Kc = R({ "vendors/escape-string-regexp.js"(e, r) {
        P();
        var t = Object.defineProperty, a = Object.getOwnPropertyDescriptor, D = Object.getOwnPropertyNames, n = Object.prototype.hasOwnProperty, c = (o, l) => {
          for (var C in l)
            t(o, C, { get: l[C], enumerable: true });
        }, E = (o, l, C, f) => {
          if (l && typeof l == "object" || typeof l == "function")
            for (let m of D(l))
              !n.call(o, m) && m !== C && t(o, m, { get: () => l[m], enumerable: !(f = a(l, m)) || f.enumerable });
          return o;
        }, p = (o) => E(t({}, "__esModule", { value: true }), o), g = {};
        c(g, { default: () => s }), r.exports = p(g);
        function s(o) {
          if (typeof o != "string")
            throw new TypeError("Expected a string");
          return o.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
        }
      } }), cs = R({ "node_modules/semver/internal/debug.js"(e, r) {
        P();
        var t = typeof Se == "object" && Se.env && Se.env.NODE_DEBUG && /\bsemver\b/i.test(Se.env.NODE_DEBUG) ? function() {
          for (var a = arguments.length, D = new Array(a), n = 0; n < a; n++)
            D[n] = arguments[n];
          return console.error("SEMVER", ...D);
        } : () => {
        };
        r.exports = t;
      } }), Ds = R({ "node_modules/semver/internal/constants.js"(e, r) {
        P();
        var t = "2.0.0", a = 256, D = Number.MAX_SAFE_INTEGER || 9007199254740991, n = 16;
        r.exports = { SEMVER_SPEC_VERSION: t, MAX_LENGTH: a, MAX_SAFE_INTEGER: D, MAX_SAFE_COMPONENT_LENGTH: n };
      } }), Jc = R({ "node_modules/semver/internal/re.js"(e, r) {
        P();
        var { MAX_SAFE_COMPONENT_LENGTH: t } = Ds(), a = cs();
        e = r.exports = {};
        var D = e.re = [], n = e.src = [], c = e.t = {}, E = 0, p = (g, s, o) => {
          let l = E++;
          a(l, s), c[g] = l, n[l] = s, D[l] = new RegExp(s, o ? "g" : void 0);
        };
        p("NUMERICIDENTIFIER", "0|[1-9]\\d*"), p("NUMERICIDENTIFIERLOOSE", "[0-9]+"), p("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), p("MAINVERSION", "(".concat(n[c.NUMERICIDENTIFIER], ")\\.(").concat(n[c.NUMERICIDENTIFIER], ")\\.(").concat(n[c.NUMERICIDENTIFIER], ")")), p("MAINVERSIONLOOSE", "(".concat(n[c.NUMERICIDENTIFIERLOOSE], ")\\.(").concat(n[c.NUMERICIDENTIFIERLOOSE], ")\\.(").concat(n[c.NUMERICIDENTIFIERLOOSE], ")")), p("PRERELEASEIDENTIFIER", "(?:".concat(n[c.NUMERICIDENTIFIER], "|").concat(n[c.NONNUMERICIDENTIFIER], ")")), p("PRERELEASEIDENTIFIERLOOSE", "(?:".concat(n[c.NUMERICIDENTIFIERLOOSE], "|").concat(n[c.NONNUMERICIDENTIFIER], ")")), p("PRERELEASE", "(?:-(".concat(n[c.PRERELEASEIDENTIFIER], "(?:\\.").concat(n[c.PRERELEASEIDENTIFIER], ")*))")), p("PRERELEASELOOSE", "(?:-?(".concat(n[c.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(n[c.PRERELEASEIDENTIFIERLOOSE], ")*))")), p("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), p("BUILD", "(?:\\+(".concat(n[c.BUILDIDENTIFIER], "(?:\\.").concat(n[c.BUILDIDENTIFIER], ")*))")), p("FULLPLAIN", "v?".concat(n[c.MAINVERSION]).concat(n[c.PRERELEASE], "?").concat(n[c.BUILD], "?")), p("FULL", "^".concat(n[c.FULLPLAIN], "$")), p("LOOSEPLAIN", "[v=\\s]*".concat(n[c.MAINVERSIONLOOSE]).concat(n[c.PRERELEASELOOSE], "?").concat(n[c.BUILD], "?")), p("LOOSE", "^".concat(n[c.LOOSEPLAIN], "$")), p("GTLT", "((?:<|>)?=?)"), p("XRANGEIDENTIFIERLOOSE", "".concat(n[c.NUMERICIDENTIFIERLOOSE], "|x|X|\\*")), p("XRANGEIDENTIFIER", "".concat(n[c.NUMERICIDENTIFIER], "|x|X|\\*")), p("XRANGEPLAIN", "[v=\\s]*(".concat(n[c.XRANGEIDENTIFIER], ")(?:\\.(").concat(n[c.XRANGEIDENTIFIER], ")(?:\\.(").concat(n[c.XRANGEIDENTIFIER], ")(?:").concat(n[c.PRERELEASE], ")?").concat(n[c.BUILD], "?)?)?")), p("XRANGEPLAINLOOSE", "[v=\\s]*(".concat(n[c.XRANGEIDENTIFIERLOOSE], ")(?:\\.(").concat(n[c.XRANGEIDENTIFIERLOOSE], ")(?:\\.(").concat(n[c.XRANGEIDENTIFIERLOOSE], ")(?:").concat(n[c.PRERELEASELOOSE], ")?").concat(n[c.BUILD], "?)?)?")), p("XRANGE", "^".concat(n[c.GTLT], "\\s*").concat(n[c.XRANGEPLAIN], "$")), p("XRANGELOOSE", "^".concat(n[c.GTLT], "\\s*").concat(n[c.XRANGEPLAINLOOSE], "$")), p("COERCE", "(^|[^\\d])(\\d{1,".concat(t, "})(?:\\.(\\d{1,").concat(t, "}))?(?:\\.(\\d{1,").concat(t, "}))?(?:$|[^\\d])")), p("COERCERTL", n[c.COERCE], true), p("LONETILDE", "(?:~>?)"), p("TILDETRIM", "(\\s*)".concat(n[c.LONETILDE], "\\s+"), true), e.tildeTrimReplace = "$1~", p("TILDE", "^".concat(n[c.LONETILDE]).concat(n[c.XRANGEPLAIN], "$")), p("TILDELOOSE", "^".concat(n[c.LONETILDE]).concat(n[c.XRANGEPLAINLOOSE], "$")), p("LONECARET", "(?:\\^)"), p("CARETTRIM", "(\\s*)".concat(n[c.LONECARET], "\\s+"), true), e.caretTrimReplace = "$1^", p("CARET", "^".concat(n[c.LONECARET]).concat(n[c.XRANGEPLAIN], "$")), p("CARETLOOSE", "^".concat(n[c.LONECARET]).concat(n[c.XRANGEPLAINLOOSE], "$")), p("COMPARATORLOOSE", "^".concat(n[c.GTLT], "\\s*(").concat(n[c.LOOSEPLAIN], ")$|^$")), p("COMPARATOR", "^".concat(n[c.GTLT], "\\s*(").concat(n[c.FULLPLAIN], ")$|^$")), p("COMPARATORTRIM", "(\\s*)".concat(n[c.GTLT], "\\s*(").concat(n[c.LOOSEPLAIN], "|").concat(n[c.XRANGEPLAIN], ")"), true), e.comparatorTrimReplace = "$1$2$3", p("HYPHENRANGE", "^\\s*(".concat(n[c.XRANGEPLAIN], ")\\s+-\\s+(").concat(n[c.XRANGEPLAIN], ")\\s*$")), p("HYPHENRANGELOOSE", "^\\s*(".concat(n[c.XRANGEPLAINLOOSE], ")\\s+-\\s+(").concat(n[c.XRANGEPLAINLOOSE], ")\\s*$")), p("STAR", "(<|>)?=?\\s*\\*"), p("GTE0", "^\\s*>=\\s*0.0.0\\s*$"), p("GTE0PRE", "^\\s*>=\\s*0.0.0-0\\s*$");
      } }), Zc = R({ "node_modules/semver/internal/parse-options.js"(e, r) {
        P();
        var t = ["includePrerelease", "loose", "rtl"], a = (D) => D ? typeof D != "object" ? { loose: true } : t.filter((n) => D[n]).reduce((n, c) => (n[c] = true, n), {}) : {};
        r.exports = a;
      } }), eD = R({ "node_modules/semver/internal/identifiers.js"(e, r) {
        P();
        var t = /^[0-9]+$/, a = (n, c) => {
          let E = t.test(n), p = t.test(c);
          return E && p && (n = +n, c = +c), n === c ? 0 : E && !p ? -1 : p && !E ? 1 : n < c ? -1 : 1;
        }, D = (n, c) => a(c, n);
        r.exports = { compareIdentifiers: a, rcompareIdentifiers: D };
      } }), rD = R({ "node_modules/semver/classes/semver.js"(e, r) {
        P();
        var t = cs(), { MAX_LENGTH: a, MAX_SAFE_INTEGER: D } = Ds(), { re: n, t: c } = Jc(), E = Zc(), { compareIdentifiers: p } = eD(), g = class {
          constructor(s, o) {
            if (o = E(o), s instanceof g) {
              if (s.loose === !!o.loose && s.includePrerelease === !!o.includePrerelease)
                return s;
              s = s.version;
            } else if (typeof s != "string")
              throw new TypeError("Invalid Version: ".concat(s));
            if (s.length > a)
              throw new TypeError("version is longer than ".concat(a, " characters"));
            t("SemVer", s, o), this.options = o, this.loose = !!o.loose, this.includePrerelease = !!o.includePrerelease;
            let l = s.trim().match(o.loose ? n[c.LOOSE] : n[c.FULL]);
            if (!l)
              throw new TypeError("Invalid Version: ".concat(s));
            if (this.raw = s, this.major = +l[1], this.minor = +l[2], this.patch = +l[3], this.major > D || this.major < 0)
              throw new TypeError("Invalid major version");
            if (this.minor > D || this.minor < 0)
              throw new TypeError("Invalid minor version");
            if (this.patch > D || this.patch < 0)
              throw new TypeError("Invalid patch version");
            l[4] ? this.prerelease = l[4].split(".").map((C) => {
              if (/^[0-9]+$/.test(C)) {
                let f = +C;
                if (f >= 0 && f < D)
                  return f;
              }
              return C;
            }) : this.prerelease = [], this.build = l[5] ? l[5].split(".") : [], this.format();
          }
          format() {
            return this.version = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch), this.prerelease.length && (this.version += "-".concat(this.prerelease.join("."))), this.version;
          }
          toString() {
            return this.version;
          }
          compare(s) {
            if (t("SemVer.compare", this.version, this.options, s), !(s instanceof g)) {
              if (typeof s == "string" && s === this.version)
                return 0;
              s = new g(s, this.options);
            }
            return s.version === this.version ? 0 : this.compareMain(s) || this.comparePre(s);
          }
          compareMain(s) {
            return s instanceof g || (s = new g(s, this.options)), p(this.major, s.major) || p(this.minor, s.minor) || p(this.patch, s.patch);
          }
          comparePre(s) {
            if (s instanceof g || (s = new g(s, this.options)), this.prerelease.length && !s.prerelease.length)
              return -1;
            if (!this.prerelease.length && s.prerelease.length)
              return 1;
            if (!this.prerelease.length && !s.prerelease.length)
              return 0;
            let o = 0;
            do {
              let l = this.prerelease[o], C = s.prerelease[o];
              if (t("prerelease compare", o, l, C), l === void 0 && C === void 0)
                return 0;
              if (C === void 0)
                return 1;
              if (l === void 0)
                return -1;
              if (l === C)
                continue;
              return p(l, C);
            } while (++o);
          }
          compareBuild(s) {
            s instanceof g || (s = new g(s, this.options));
            let o = 0;
            do {
              let l = this.build[o], C = s.build[o];
              if (t("prerelease compare", o, l, C), l === void 0 && C === void 0)
                return 0;
              if (C === void 0)
                return 1;
              if (l === void 0)
                return -1;
              if (l === C)
                continue;
              return p(l, C);
            } while (++o);
          }
          inc(s, o) {
            switch (s) {
              case "premajor":
                this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", o);
                break;
              case "preminor":
                this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", o);
                break;
              case "prepatch":
                this.prerelease.length = 0, this.inc("patch", o), this.inc("pre", o);
                break;
              case "prerelease":
                this.prerelease.length === 0 && this.inc("patch", o), this.inc("pre", o);
                break;
              case "major":
                (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                break;
              case "minor":
                (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
                break;
              case "patch":
                this.prerelease.length === 0 && this.patch++, this.prerelease = [];
                break;
              case "pre":
                if (this.prerelease.length === 0)
                  this.prerelease = [0];
                else {
                  let l = this.prerelease.length;
                  for (; --l >= 0; )
                    typeof this.prerelease[l] == "number" && (this.prerelease[l]++, l = -2);
                  l === -1 && this.prerelease.push(0);
                }
                o && (this.prerelease[0] === o ? isNaN(this.prerelease[1]) && (this.prerelease = [o, 0]) : this.prerelease = [o, 0]);
                break;
              default:
                throw new Error("invalid increment argument: ".concat(s));
            }
            return this.format(), this.raw = this.version, this;
          }
        };
        r.exports = g;
      } }), jr = R({ "node_modules/semver/functions/compare.js"(e, r) {
        P();
        var t = rD(), a = (D, n, c) => new t(D, c).compare(new t(n, c));
        r.exports = a;
      } }), tD = R({ "node_modules/semver/functions/lt.js"(e, r) {
        P();
        var t = jr(), a = (D, n, c) => t(D, n, c) < 0;
        r.exports = a;
      } }), uD = R({ "node_modules/semver/functions/gte.js"(e, r) {
        P();
        var t = jr(), a = (D, n, c) => t(D, n, c) >= 0;
        r.exports = a;
      } }), nD = R({ "src/utils/arrayify.js"(e, r) {
        P(), r.exports = (t, a) => Object.entries(t).map((D) => {
          let [n, c] = D;
          return Object.assign({ [a]: n }, c);
        });
      } }), sD = R({ "package.json"(e, r) {
        r.exports = { version: "2.6.2" };
      } }), aD = R({ "node_modules/outdent/lib/index.js"(e, r) {
        P(), Object.defineProperty(e, "__esModule", { value: true }), e.outdent = void 0;
        function t() {
          for (var v = [], O = 0; O < arguments.length; O++)
            v[O] = arguments[O];
        }
        function a() {
          return typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : D();
        }
        function D() {
          return { add: t, delete: t, get: t, set: t, has: function(v) {
            return false;
          } };
        }
        var n = Object.prototype.hasOwnProperty, c = function(v, O) {
          return n.call(v, O);
        };
        function E(v, O) {
          for (var F in O)
            c(O, F) && (v[F] = O[F]);
          return v;
        }
        var p = /^[ \t]*(?:\r\n|\r|\n)/, g = /(?:\r\n|\r|\n)[ \t]*$/, s = /^(?:[\r\n]|$)/, o = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/, l = /^[ \t]*[\r\n][ \t\r\n]*$/;
        function C(v, O, F) {
          var x = 0, A = v[0].match(o);
          A && (x = A[1].length);
          var w = "(\\r\\n|\\r|\\n).{0," + x + "}", I = new RegExp(w, "g");
          O && (v = v.slice(1));
          var L = F.newline, j = F.trimLeadingNewline, u = F.trimTrailingNewline, i = typeof L == "string", d = v.length, h = v.map(function(_, k) {
            return _ = _.replace(I, "$1"), k === 0 && j && (_ = _.replace(p, "")), k === d - 1 && u && (_ = _.replace(g, "")), i && (_ = _.replace(/\r\n|\n|\r/g, function($) {
              return L;
            })), _;
          });
          return h;
        }
        function f(v, O) {
          for (var F = "", x = 0, A = v.length; x < A; x++)
            F += v[x], x < A - 1 && (F += O[x]);
          return F;
        }
        function m(v) {
          return c(v, "raw") && c(v, "length");
        }
        function b(v) {
          var O = a(), F = a();
          function x(w) {
            for (var I = [], L = 1; L < arguments.length; L++)
              I[L - 1] = arguments[L];
            if (m(w)) {
              var j = w, u = (I[0] === x || I[0] === B) && l.test(j[0]) && s.test(j[1]), i = u ? F : O, d = i.get(j);
              if (d || (d = C(j, u, v), i.set(j, d)), I.length === 0)
                return d[0];
              var h = f(d, u ? I.slice(1) : I);
              return h;
            } else
              return b(E(E({}, v), w || {}));
          }
          var A = E(x, { string: function(w) {
            return C([w], false, v)[0];
          } });
          return A;
        }
        var B = b({ trimLeadingNewline: true, trimTrailingNewline: true });
        if (e.outdent = B, e.default = B, typeof r < "u")
          try {
            r.exports = B, Object.defineProperty(B, "__esModule", { value: true }), B.default = B, B.outdent = B;
          } catch {
          }
      } }), iD = R({ "src/main/core-options.js"(e, r) {
        P();
        var { outdent: t } = aD(), a = "Config", D = "Editor", n = "Format", c = "Other", E = "Output", p = "Global", g = "Special", s = { cursorOffset: { since: "1.4.0", category: g, type: "int", default: -1, range: { start: -1, end: Number.POSITIVE_INFINITY, step: 1 }, description: t(Qn || (Qn = de([`
      Print (to stderr) where a cursor at the given position would move to after formatting.
      This option cannot be used with --range-start and --range-end.
    `]))), cliCategory: D }, endOfLine: { since: "1.15.0", category: p, type: "choice", default: [{ since: "1.15.0", value: "auto" }, { since: "2.0.0", value: "lf" }], description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: t(Kn || (Kn = de([`
          Maintain existing
          (mixed values within one file are normalised by looking at what's used after the first line)
        `]))) }] }, filepath: { since: "1.4.0", category: g, type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: c, cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { since: "1.8.0", category: g, type: "boolean", default: false, description: "Insert @format pragma into file's first docblock comment.", cliCategory: c }, parser: { since: "0.0.10", category: p, type: "choice", default: [{ since: "0.0.10", value: "babylon" }, { since: "1.13.0", value: void 0 }], description: "Which parser to use.", exception: (o) => typeof o == "string" || typeof o == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", since: "1.16.0", description: "JavaScript" }, { value: "babel-flow", since: "1.16.0", description: "Flow" }, { value: "babel-ts", since: "2.0.0", description: "TypeScript" }, { value: "typescript", since: "1.4.0", description: "TypeScript" }, { value: "acorn", since: "2.6.0", description: "JavaScript" }, { value: "espree", since: "2.2.0", description: "JavaScript" }, { value: "meriyah", since: "2.2.0", description: "JavaScript" }, { value: "css", since: "1.7.1", description: "CSS" }, { value: "less", since: "1.7.1", description: "Less" }, { value: "scss", since: "1.7.1", description: "SCSS" }, { value: "json", since: "1.5.0", description: "JSON" }, { value: "json5", since: "1.13.0", description: "JSON5" }, { value: "json-stringify", since: "1.13.0", description: "JSON.stringify" }, { value: "graphql", since: "1.5.0", description: "GraphQL" }, { value: "markdown", since: "1.8.0", description: "Markdown" }, { value: "mdx", since: "1.15.0", description: "MDX" }, { value: "vue", since: "1.10.0", description: "Vue" }, { value: "yaml", since: "1.14.0", description: "YAML" }, { value: "glimmer", since: "2.3.0", description: "Ember / Handlebars" }, { value: "html", since: "1.15.0", description: "HTML" }, { value: "angular", since: "1.15.0", description: "Angular" }, { value: "lwc", since: "1.17.0", description: "Lightning Web Components" }] }, plugins: { since: "1.10.0", type: "path", array: true, default: [{ value: [] }], category: p, description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (o) => typeof o == "string" || typeof o == "object", cliName: "plugin", cliCategory: a }, pluginSearchDirs: { since: "1.13.0", type: "path", array: true, default: [{ value: [] }], category: p, description: t(Jn || (Jn = de([`
      Custom directory that contains prettier plugins in node_modules subdirectory.
      Overrides default behavior when plugins are searched relatively to the location of Prettier.
      Multiple values are accepted.
    `]))), exception: (o) => typeof o == "string" || typeof o == "object", cliName: "plugin-search-dir", cliCategory: a }, printWidth: { since: "0.0.0", category: p, type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, rangeEnd: { since: "1.4.0", category: g, type: "int", default: Number.POSITIVE_INFINITY, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: t(Zn || (Zn = de([`
      Format code ending at a given character offset (exclusive).
      The range will extend forwards to the end of the selected statement.
      This option cannot be used with --cursor-offset.
    `]))), cliCategory: D }, rangeStart: { since: "1.4.0", category: g, type: "int", default: 0, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: t(es || (es = de([`
      Format code starting at a given character offset.
      The range will extend backwards to the start of the first line containing the selected statement.
      This option cannot be used with --cursor-offset.
    `]))), cliCategory: D }, requirePragma: { since: "1.7.0", category: g, type: "boolean", default: false, description: t(rs || (rs = de([`
      Require either '@prettier' or '@format' to be present in the file's first docblock comment
      in order for it to be formatted.
    `]))), cliCategory: c }, tabWidth: { type: "int", category: p, default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, useTabs: { since: "1.0.0", category: p, type: "boolean", default: false, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { since: "2.1.0", category: p, type: "choice", default: [{ since: "2.1.0", value: "auto" }], description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
        r.exports = { CATEGORY_CONFIG: a, CATEGORY_EDITOR: D, CATEGORY_FORMAT: n, CATEGORY_OTHER: c, CATEGORY_OUTPUT: E, CATEGORY_GLOBAL: p, CATEGORY_SPECIAL: g, options: s };
      } }), oD = R({ "src/main/support.js"(e, r) {
        P();
        var t = { compare: jr(), lt: tD(), gte: uD() }, a = nD(), D = sD().version, n = iD().options;
        function c() {
          let { plugins: p = [], showUnreleased: g = false, showDeprecated: s = false, showInternal: o = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = D.split("-", 1)[0], C = p.flatMap((v) => v.languages || []).filter(m), f = a(Object.assign({}, ...p.map((v) => {
            let { options: O } = v;
            return O;
          }), n), "name").filter((v) => m(v) && b(v)).sort((v, O) => v.name === O.name ? 0 : v.name < O.name ? -1 : 1).map(B).map((v) => {
            v = Object.assign({}, v), Array.isArray(v.default) && (v.default = v.default.length === 1 ? v.default[0].value : v.default.filter(m).sort((F, x) => t.compare(x.since, F.since))[0].value), Array.isArray(v.choices) && (v.choices = v.choices.filter((F) => m(F) && b(F)), v.name === "parser" && E(v, C, p));
            let O = Object.fromEntries(p.filter((F) => F.defaultOptions && F.defaultOptions[v.name] !== void 0).map((F) => [F.name, F.defaultOptions[v.name]]));
            return Object.assign(Object.assign({}, v), {}, { pluginDefaults: O });
          });
          return { languages: C, options: f };
          function m(v) {
            return g || !("since" in v) || v.since && t.gte(l, v.since);
          }
          function b(v) {
            return s || !("deprecated" in v) || v.deprecated && t.lt(l, v.deprecated);
          }
          function B(v) {
            if (o)
              return v;
            return Gc(v, Uc);
          }
        }
        function E(p, g, s) {
          let o = new Set(p.choices.map((l) => l.value));
          for (let l of g)
            if (l.parsers) {
              for (let C of l.parsers)
                if (!o.has(C)) {
                  o.add(C);
                  let f = s.find((b) => b.parsers && b.parsers[C]), m = l.name;
                  f && f.name && (m += " (plugin: ".concat(f.name, ")")), p.choices.push({ value: C, description: m });
                }
            }
        }
        r.exports = { getSupportInfo: c };
      } }), cD = R({ "src/utils/is-non-empty-array.js"(e, r) {
        P();
        function t(a) {
          return Array.isArray(a) && a.length > 0;
        }
        r.exports = t;
      } }), DD = R({ "vendors/string-width.js"(e, r) {
        P();
        var t = Object.create, a = Object.defineProperty, D = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, c = Object.getPrototypeOf, E = Object.prototype.hasOwnProperty, p = (F, x) => function() {
          return x || (0, F[n(F)[0]])((x = { exports: {} }).exports, x), x.exports;
        }, g = (F, x) => {
          for (var A in x)
            a(F, A, { get: x[A], enumerable: true });
        }, s = (F, x, A, w) => {
          if (x && typeof x == "object" || typeof x == "function")
            for (let I of n(x))
              !E.call(F, I) && I !== A && a(F, I, { get: () => x[I], enumerable: !(w = D(x, I)) || w.enumerable });
          return F;
        }, o = (F, x, A) => (A = F != null ? t(c(F)) : {}, s(x || !F || !F.__esModule ? a(A, "default", { value: F, enumerable: true }) : A, F)), l = (F) => s(a({}, "__esModule", { value: true }), F), C = p({ "node_modules/emoji-regex/index.js"(F, x) {
          x.exports = function() {
            return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
          };
        } }), f = {};
        g(f, { default: () => O }), r.exports = l(f);
        function m() {
          let { onlyFirst: F = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, x = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
          return new RegExp(x, F ? void 0 : "g");
        }
        function b(F) {
          if (typeof F != "string")
            throw new TypeError("Expected a `string`, got `".concat(typeof F, "`"));
          return F.replace(m(), "");
        }
        function B(F) {
          return Number.isInteger(F) ? F >= 4352 && (F <= 4447 || F === 9001 || F === 9002 || 11904 <= F && F <= 12871 && F !== 12351 || 12880 <= F && F <= 19903 || 19968 <= F && F <= 42182 || 43360 <= F && F <= 43388 || 44032 <= F && F <= 55203 || 63744 <= F && F <= 64255 || 65040 <= F && F <= 65049 || 65072 <= F && F <= 65131 || 65281 <= F && F <= 65376 || 65504 <= F && F <= 65510 || 110592 <= F && F <= 110593 || 127488 <= F && F <= 127569 || 131072 <= F && F <= 262141) : false;
        }
        var v = o(C(), 1);
        function O(F) {
          if (typeof F != "string" || F.length === 0 || (F = b(F), F.length === 0))
            return 0;
          F = F.replace((0, v.default)(), "  ");
          let x = 0;
          for (let A = 0; A < F.length; A++) {
            let w = F.codePointAt(A);
            w <= 31 || w >= 127 && w <= 159 || w >= 768 && w <= 879 || (w > 65535 && A++, x += B(w) ? 2 : 1);
          }
          return x;
        }
      } }), lD = R({ "src/utils/get-string-width.js"(e, r) {
        P();
        var t = DD().default, a = /[^\x20-\x7F]/;
        function D(n) {
          return n ? a.test(n) ? t(n) : n.length : 0;
        }
        r.exports = D;
      } }), $r = R({ "src/utils/text/skip.js"(e, r) {
        P();
        function t(E) {
          return (p, g, s) => {
            let o = s && s.backwards;
            if (g === false)
              return false;
            let { length: l } = p, C = g;
            for (; C >= 0 && C < l; ) {
              let f = p.charAt(C);
              if (E instanceof RegExp) {
                if (!E.test(f))
                  return C;
              } else if (!E.includes(f))
                return C;
              o ? C-- : C++;
            }
            return C === -1 || C === l ? C : false;
          };
        }
        var a = t(/\s/), D = t(" 	"), n = t(",; 	"), c = t(/[^\n\r]/);
        r.exports = { skipWhitespace: a, skipSpaces: D, skipToLineEnd: n, skipEverythingButNewLine: c };
      } }), ls = R({ "src/utils/text/skip-inline-comment.js"(e, r) {
        P();
        function t(a, D) {
          if (D === false)
            return false;
          if (a.charAt(D) === "/" && a.charAt(D + 1) === "*") {
            for (let n = D + 2; n < a.length; ++n)
              if (a.charAt(n) === "*" && a.charAt(n + 1) === "/")
                return n + 2;
          }
          return D;
        }
        r.exports = t;
      } }), ps = R({ "src/utils/text/skip-trailing-comment.js"(e, r) {
        P();
        var { skipEverythingButNewLine: t } = $r();
        function a(D, n) {
          return n === false ? false : D.charAt(n) === "/" && D.charAt(n + 1) === "/" ? t(D, n) : n;
        }
        r.exports = a;
      } }), hs = R({ "src/utils/text/skip-newline.js"(e, r) {
        P();
        function t(a, D, n) {
          let c = n && n.backwards;
          if (D === false)
            return false;
          let E = a.charAt(D);
          if (c) {
            if (a.charAt(D - 1) === "\r" && E === `
`)
              return D - 2;
            if (E === `
` || E === "\r" || E === "\u2028" || E === "\u2029")
              return D - 1;
          } else {
            if (E === "\r" && a.charAt(D + 1) === `
`)
              return D + 2;
            if (E === `
` || E === "\r" || E === "\u2028" || E === "\u2029")
              return D + 1;
          }
          return D;
        }
        r.exports = t;
      } }), pD = R({ "src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js"(e, r) {
        P();
        var t = ls(), a = hs(), D = ps(), { skipSpaces: n } = $r();
        function c(E, p) {
          let g = null, s = p;
          for (; s !== g; )
            g = s, s = n(E, s), s = t(E, s), s = D(E, s), s = a(E, s);
          return s;
        }
        r.exports = c;
      } }), fs = R({ "src/common/util.js"(e, r) {
        P();
        var { default: t } = Kc(), a = Mr(), { getSupportInfo: D } = oD(), n = cD(), c = lD(), { skipWhitespace: E, skipSpaces: p, skipToLineEnd: g, skipEverythingButNewLine: s } = $r(), o = ls(), l = ps(), C = hs(), f = pD(), m = (S) => S[S.length - 2];
        function b(S) {
          return (y, N, q) => {
            let M = q && q.backwards;
            if (N === false)
              return false;
            let { length: U } = y, V = N;
            for (; V >= 0 && V < U; ) {
              let Y = y.charAt(V);
              if (S instanceof RegExp) {
                if (!S.test(Y))
                  return V;
              } else if (!S.includes(Y))
                return V;
              M ? V-- : V++;
            }
            return V === -1 || V === U ? V : false;
          };
        }
        function B(S, y) {
          let N = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, q = p(S, N.backwards ? y - 1 : y, N), M = C(S, q, N);
          return q !== M;
        }
        function v(S, y, N) {
          for (let q = y; q < N; ++q)
            if (S.charAt(q) === `
`)
              return true;
          return false;
        }
        function O(S, y, N) {
          let q = N(y) - 1;
          q = p(S, q, { backwards: true }), q = C(S, q, { backwards: true }), q = p(S, q, { backwards: true });
          let M = C(S, q, { backwards: true });
          return q !== M;
        }
        function F(S, y) {
          let N = null, q = y;
          for (; q !== N; )
            N = q, q = g(S, q), q = o(S, q), q = p(S, q);
          return q = l(S, q), q = C(S, q), q !== false && B(S, q);
        }
        function x(S, y, N) {
          return F(S, N(y));
        }
        function A(S, y, N) {
          return f(S, N(y));
        }
        function w(S, y, N) {
          return S.charAt(A(S, y, N));
        }
        function I(S, y) {
          let N = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return p(S, N.backwards ? y - 1 : y, N) !== y;
        }
        function L(S, y) {
          let N = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, q = 0;
          for (let M = N; M < S.length; ++M)
            S[M] === "	" ? q = q + y - q % y : q++;
          return q;
        }
        function j(S, y) {
          let N = S.lastIndexOf(`
`);
          return N === -1 ? 0 : L(S.slice(N + 1).match(/^[\t ]*/)[0], y);
        }
        function u(S, y) {
          let N = { quote: '"', regex: /"/g, escaped: "&quot;" }, q = { quote: "'", regex: /'/g, escaped: "&apos;" }, M = y === "'" ? q : N, U = M === q ? N : q, V = M;
          if (S.includes(M.quote) || S.includes(U.quote)) {
            let Y = (S.match(M.regex) || []).length, ue = (S.match(U.regex) || []).length;
            V = Y > ue ? U : M;
          }
          return V;
        }
        function i(S, y) {
          let N = S.slice(1, -1), q = y.parser === "json" || y.parser === "json5" && y.quoteProps === "preserve" && !y.singleQuote ? '"' : y.__isInHtmlAttribute ? "'" : u(N, y.singleQuote ? "'" : '"').quote;
          return d(N, q, !(y.parser === "css" || y.parser === "less" || y.parser === "scss" || y.__embeddedInHtml));
        }
        function d(S, y, N) {
          let q = y === '"' ? "'" : '"', M = /\\(.)|(["'])/gs, U = S.replace(M, (V, Y, ue) => Y === q ? Y : ue === y ? "\\" + ue : ue || (N && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(Y) ? Y : "\\" + Y));
          return y + U + y;
        }
        function h(S) {
          return S.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
        }
        function _(S, y) {
          let N = S.match(new RegExp("(".concat(t(y), ")+"), "g"));
          return N === null ? 0 : N.reduce((q, M) => Math.max(q, M.length / y.length), 0);
        }
        function k(S, y) {
          let N = S.match(new RegExp("(".concat(t(y), ")+"), "g"));
          if (N === null)
            return 0;
          let q = /* @__PURE__ */ new Map(), M = 0;
          for (let U of N) {
            let V = U.length / y.length;
            q.set(V, true), V > M && (M = V);
          }
          for (let U = 1; U < M; U++)
            if (!q.get(U))
              return U;
          return M + 1;
        }
        function $(S, y) {
          (S.comments || (S.comments = [])).push(y), y.printed = false, y.nodeDescription = ee(S);
        }
        function W(S, y) {
          y.leading = true, y.trailing = false, $(S, y);
        }
        function X(S, y, N) {
          y.leading = false, y.trailing = false, N && (y.marker = N), $(S, y);
        }
        function H(S, y) {
          y.leading = false, y.trailing = true, $(S, y);
        }
        function z(S, y) {
          let { languages: N } = D({ plugins: y.plugins }), q = N.find((M) => {
            let { name: U } = M;
            return U.toLowerCase() === S;
          }) || N.find((M) => {
            let { aliases: U } = M;
            return Array.isArray(U) && U.includes(S);
          }) || N.find((M) => {
            let { extensions: U } = M;
            return Array.isArray(U) && U.includes(".".concat(S));
          });
          return q && q.parsers[0];
        }
        function J(S) {
          return S && S.type === "front-matter";
        }
        function Z(S) {
          let y = /* @__PURE__ */ new WeakMap();
          return function(N) {
            return y.has(N) || y.set(N, Symbol(S)), y.get(N);
          };
        }
        function ee(S) {
          let y = S.type || S.kind || "(unknown type)", N = String(S.name || S.id && (typeof S.id == "object" ? S.id.name : S.id) || S.key && (typeof S.key == "object" ? S.key.name : S.key) || S.value && (typeof S.value == "object" ? "" : String(S.value)) || S.operator || "");
          return N.length > 20 && (N = N.slice(0, 19) + "\u2026"), y + (N ? " " + N : "");
        }
        r.exports = { inferParserByLanguage: z, getStringWidth: c, getMaxContinuousCount: _, getMinNotPresentContinuousCount: k, getPenultimate: m, getLast: a, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: f, getNextNonSpaceNonCommentCharacterIndex: A, getNextNonSpaceNonCommentCharacter: w, skip: b, skipWhitespace: E, skipSpaces: p, skipToLineEnd: g, skipEverythingButNewLine: s, skipInlineComment: o, skipTrailingComment: l, skipNewline: C, isNextLineEmptyAfterIndex: F, isNextLineEmpty: x, isPreviousLineEmpty: O, hasNewline: B, hasNewlineInRange: v, hasSpaces: I, getAlignmentSize: L, getIndentSize: j, getPreferredQuote: u, printString: i, printNumber: h, makeString: d, addLeadingComment: W, addDanglingComment: X, addTrailingComment: H, isFrontMatterNode: J, isNonEmptyArray: n, createGroupIdMapper: Z };
      } }), hD = R({ "vendors/html-tag-names.json"(e, r) {
        r.exports = { htmlTagNames: ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"] };
      } }), Es = R({ "src/language-html/utils/array-to-map.js"(e, r) {
        P();
        function t(a) {
          let D = /* @__PURE__ */ Object.create(null);
          for (let n of a)
            D[n] = true;
          return D;
        }
        r.exports = t;
      } }), fD = R({ "src/language-html/utils/html-tag-names.js"(e, r) {
        P();
        var { htmlTagNames: t } = hD(), a = Es(), D = a(t);
        r.exports = D;
      } }), ED = R({ "vendors/html-element-attributes.json"(e, r) {
        r.exports = { htmlElementAttributes: { "*": ["accesskey", "autocapitalize", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "hidden", "id", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "slot", "spellcheck", "style", "tabindex", "title", "translate"], a: ["charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "target", "type"], applet: ["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"], area: ["alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "target", "type"], audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"], base: ["href", "target"], basefont: ["color", "face", "size"], blockquote: ["cite"], body: ["alink", "background", "bgcolor", "link", "text", "vlink"], br: ["clear"], button: ["disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "type", "value"], canvas: ["height", "width"], caption: ["align"], col: ["align", "char", "charoff", "span", "valign", "width"], colgroup: ["align", "char", "charoff", "span", "valign", "width"], data: ["value"], del: ["cite", "datetime"], details: ["open"], dialog: ["open"], dir: ["compact"], div: ["align"], dl: ["compact"], embed: ["height", "src", "type", "width"], fieldset: ["disabled", "form", "name"], font: ["color", "face", "size"], form: ["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"], frame: ["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"], frameset: ["cols", "rows"], h1: ["align"], h2: ["align"], h3: ["align"], h4: ["align"], h5: ["align"], h6: ["align"], head: ["profile"], hr: ["align", "noshade", "size", "width"], html: ["manifest", "version"], iframe: ["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "loading", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"], img: ["align", "alt", "border", "crossorigin", "decoding", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"], input: ["accept", "align", "alt", "autocomplete", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "src", "step", "type", "usemap", "value", "width"], ins: ["cite", "datetime"], isindex: ["prompt"], label: ["for", "form"], legend: ["align"], li: ["type", "value"], link: ["as", "charset", "color", "crossorigin", "disabled", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "referrerpolicy", "rel", "rev", "sizes", "target", "type"], map: ["name"], menu: ["compact"], meta: ["charset", "content", "http-equiv", "media", "name", "scheme"], meter: ["high", "low", "max", "min", "optimum", "value"], object: ["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "type", "typemustmatch", "usemap", "vspace", "width"], ol: ["compact", "reversed", "start", "type"], optgroup: ["disabled", "label"], option: ["disabled", "label", "selected", "value"], output: ["for", "form", "name"], p: ["align"], param: ["name", "type", "value", "valuetype"], pre: ["width"], progress: ["max", "value"], q: ["cite"], script: ["async", "charset", "crossorigin", "defer", "integrity", "language", "nomodule", "referrerpolicy", "src", "type"], select: ["autocomplete", "disabled", "form", "multiple", "name", "required", "size"], slot: ["name"], source: ["height", "media", "sizes", "src", "srcset", "type", "width"], style: ["media", "type"], table: ["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"], tbody: ["align", "char", "charoff", "valign"], td: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], textarea: ["autocomplete", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "wrap"], tfoot: ["align", "char", "charoff", "valign"], th: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], thead: ["align", "char", "charoff", "valign"], time: ["datetime"], tr: ["align", "bgcolor", "char", "charoff", "valign"], track: ["default", "kind", "label", "src", "srclang"], ul: ["compact", "type"], video: ["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"] } };
      } }), dD = R({ "src/language-html/utils/map-object.js"(e, r) {
        P();
        function t(a, D) {
          let n = /* @__PURE__ */ Object.create(null);
          for (let [c, E] of Object.entries(a))
            n[c] = D(E, c);
          return n;
        }
        r.exports = t;
      } }), CD = R({ "src/language-html/utils/html-elements-attributes.js"(e, r) {
        P();
        var { htmlElementAttributes: t } = ED(), a = dD(), D = Es(), n = a(t, D);
        r.exports = n;
      } }), mD = R({ "src/language-html/utils/is-unknown-namespace.js"(e, r) {
        P();
        function t(a) {
          return a.type === "element" && !a.hasExplicitNamespace && !["html", "svg"].includes(a.namespace);
        }
        r.exports = t;
      } }), gD = R({ "src/language-html/pragma.js"(e, r) {
        P();
        function t(D) {
          return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(D);
        }
        function a(D) {
          return `<!-- @format -->

` + D.replace(/^\s*\n/, "");
        }
        r.exports = { hasPragma: t, insertPragma: a };
      } }), FD = R({ "src/language-html/ast.js"(e, r) {
        P();
        var { isNonEmptyArray: t } = fs(), a = Mr(), D = { attrs: true, children: true }, n = class {
          constructor() {
            let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            for (let [s, o] of Object.entries(g))
              s in D ? this._setNodes(s, o) : this[s] = o;
          }
          _setNodes(g, s) {
            s !== this[g] && (this[g] = E(s, this), g === "attrs" && p(this, "attrMap", Object.fromEntries(this[g].map((o) => [o.fullName, o.value]))));
          }
          map(g) {
            let s = null;
            for (let o in D) {
              let l = this[o];
              if (l) {
                let C = c(l, (f) => f.map(g));
                s !== l && (s || (s = new n({ parent: this.parent })), s._setNodes(o, C));
              }
            }
            if (s)
              for (let o in this)
                o in D || (s[o] = this[o]);
            return g(s || this);
          }
          walk(g) {
            for (let s in D) {
              let o = this[s];
              if (o)
                for (let l = 0; l < o.length; l++)
                  o[l].walk(g);
            }
            g(this);
          }
          insertChildBefore(g, s) {
            let o = new n(Object.assign(Object.assign({}, s), {}, { parent: this }));
            this.children.splice(this.children.indexOf(g), 0, o);
          }
          removeChild(g) {
            this.children.splice(this.children.indexOf(g), 1);
          }
          replaceChild(g, s) {
            let o = new n(Object.assign(Object.assign({}, s), {}, { parent: this }));
            this.children[this.children.indexOf(g)] = o;
          }
          clone() {
            return new n(this);
          }
          setChildren(g) {
            this._setNodes("children", g);
          }
          get firstChild() {
            return t(this.children) ? this.children[0] : null;
          }
          get lastChild() {
            return t(this.children) ? a(this.children) : null;
          }
          get prev() {
            return this.parent ? this.parent.children[this.parent.children.indexOf(this) - 1] : null;
          }
          get next() {
            return this.parent ? this.parent.children[this.parent.children.indexOf(this) + 1] : null;
          }
          get rawName() {
            return this.hasExplicitNamespace ? this.fullName : this.name;
          }
          get fullName() {
            return this.namespace ? this.namespace + ":" + this.name : this.name;
          }
        };
        function c(g, s) {
          let o = g.map(s);
          return o.some((l, C) => l !== g[C]) ? o : g;
        }
        function E(g, s) {
          let o = g.map((l) => l instanceof n ? l.clone() : new n(Object.assign(Object.assign({}, l), {}, { parent: s })));
          for (let l of o)
            l.parent = s;
          return o;
        }
        function p(g, s, o) {
          Object.defineProperty(g, s, { value: o, enumerable: false });
        }
        r.exports = { Node: n };
      } }), AD = R({ "src/language-html/conditional-comment.js"(e, r) {
        P();
        var { ParseSourceSpan: t } = ye(), a = [{ regex: /^(\[if([^\]]*)]>)(.*?)<!\s*\[endif]$/s, parse: n }, { regex: /^\[if([^\]]*)]><!$/, parse: c }, { regex: /^<!\s*\[endif]$/, parse: E }];
        function D(p, g) {
          if (p.value)
            for (let { regex: s, parse: o } of a) {
              let l = p.value.match(s);
              if (l)
                return o(p, g, l);
            }
          return null;
        }
        function n(p, g, s) {
          let [, o, l, C] = s, f = 4 + o.length, m = p.sourceSpan.start.moveBy(f), b = m.moveBy(C.length), [B, v] = (() => {
            try {
              return [true, g(C, m).children];
            } catch {
              let O = { type: "text", value: C, sourceSpan: new t(m, b) };
              return [false, [O]];
            }
          })();
          return { type: "ieConditionalComment", complete: B, children: v, condition: l.trim().replace(/\s+/g, " "), sourceSpan: p.sourceSpan, startSourceSpan: new t(p.sourceSpan.start, m), endSourceSpan: new t(b, p.sourceSpan.end) };
        }
        function c(p, g, s) {
          let [, o] = s;
          return { type: "ieConditionalStartComment", condition: o.trim().replace(/\s+/g, " "), sourceSpan: p.sourceSpan };
        }
        function E(p) {
          return { type: "ieConditionalEndComment", sourceSpan: p.sourceSpan };
        }
        r.exports = { parseIeConditionalComment: D };
      } }), vD = R({ "src/language-html/loc.js"(e, r) {
        P();
        function t(D) {
          return D.sourceSpan.start.offset;
        }
        function a(D) {
          return D.sourceSpan.end.offset;
        }
        r.exports = { locStart: t, locEnd: a };
      } }), Ke = R({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/tags.js"(e) {
        P(), Object.defineProperty(e, "__esModule", { value: true });
        (function(p) {
          p[p.RAW_TEXT = 0] = "RAW_TEXT", p[p.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", p[p.PARSABLE_DATA = 2] = "PARSABLE_DATA";
        })(e.TagContentType || (e.TagContentType = {}));
        function t(p) {
          if (p[0] != ":")
            return [null, p];
          let g = p.indexOf(":", 1);
          if (g == -1)
            throw new Error('Unsupported format "'.concat(p, '" expecting ":namespace:name"'));
          return [p.slice(1, g), p.slice(g + 1)];
        }
        e.splitNsName = t;
        function a(p) {
          return t(p)[1] === "ng-container";
        }
        e.isNgContainer = a;
        function D(p) {
          return t(p)[1] === "ng-content";
        }
        e.isNgContent = D;
        function n(p) {
          return t(p)[1] === "ng-template";
        }
        e.isNgTemplate = n;
        function c(p) {
          return p === null ? null : t(p)[0];
        }
        e.getNsPrefix = c;
        function E(p, g) {
          return p ? ":".concat(p, ":").concat(g) : g;
        }
        e.mergeNsAndName = E, e.NAMED_ENTITIES = { Aacute: "\xC1", aacute: "\xE1", Abreve: "\u0102", abreve: "\u0103", ac: "\u223E", acd: "\u223F", acE: "\u223E\u0333", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", Acy: "\u0410", acy: "\u0430", AElig: "\xC6", aelig: "\xE6", af: "\u2061", Afr: "\u{1D504}", afr: "\u{1D51E}", Agrave: "\xC0", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", Alpha: "\u0391", alpha: "\u03B1", Amacr: "\u0100", amacr: "\u0101", amalg: "\u2A3F", AMP: "&", amp: "&", And: "\u2A53", and: "\u2227", andand: "\u2A55", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", ange: "\u29A4", angle: "\u2220", angmsd: "\u2221", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angst: "\xC5", angzarr: "\u237C", Aogon: "\u0104", aogon: "\u0105", Aopf: "\u{1D538}", aopf: "\u{1D552}", ap: "\u2248", apacir: "\u2A6F", apE: "\u2A70", ape: "\u224A", apid: "\u224B", apos: "'", ApplyFunction: "\u2061", approx: "\u2248", approxeq: "\u224A", Aring: "\xC5", aring: "\xE5", Ascr: "\u{1D49C}", ascr: "\u{1D4B6}", Assign: "\u2254", ast: "*", asymp: "\u2248", asympeq: "\u224D", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", awconint: "\u2233", awint: "\u2A11", backcong: "\u224C", backepsilon: "\u03F6", backprime: "\u2035", backsim: "\u223D", backsimeq: "\u22CD", Backslash: "\u2216", Barv: "\u2AE7", barvee: "\u22BD", Barwed: "\u2306", barwed: "\u2305", barwedge: "\u2305", bbrk: "\u23B5", bbrktbrk: "\u23B6", bcong: "\u224C", Bcy: "\u0411", bcy: "\u0431", bdquo: "\u201E", becaus: "\u2235", Because: "\u2235", because: "\u2235", bemptyv: "\u29B0", bepsi: "\u03F6", bernou: "\u212C", Bernoullis: "\u212C", Beta: "\u0392", beta: "\u03B2", beth: "\u2136", between: "\u226C", Bfr: "\u{1D505}", bfr: "\u{1D51F}", bigcap: "\u22C2", bigcirc: "\u25EF", bigcup: "\u22C3", bigodot: "\u2A00", bigoplus: "\u2A01", bigotimes: "\u2A02", bigsqcup: "\u2A06", bigstar: "\u2605", bigtriangledown: "\u25BD", bigtriangleup: "\u25B3", biguplus: "\u2A04", bigvee: "\u22C1", bigwedge: "\u22C0", bkarow: "\u290D", blacklozenge: "\u29EB", blacksquare: "\u25AA", blacktriangle: "\u25B4", blacktriangledown: "\u25BE", blacktriangleleft: "\u25C2", blacktriangleright: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bNot: "\u2AED", bnot: "\u2310", Bopf: "\u{1D539}", bopf: "\u{1D553}", bot: "\u22A5", bottom: "\u22A5", bowtie: "\u22C8", boxbox: "\u29C9", boxDL: "\u2557", boxDl: "\u2556", boxdL: "\u2555", boxdl: "\u2510", boxDR: "\u2554", boxDr: "\u2553", boxdR: "\u2552", boxdr: "\u250C", boxH: "\u2550", boxh: "\u2500", boxHD: "\u2566", boxHd: "\u2564", boxhD: "\u2565", boxhd: "\u252C", boxHU: "\u2569", boxHu: "\u2567", boxhU: "\u2568", boxhu: "\u2534", boxminus: "\u229F", boxplus: "\u229E", boxtimes: "\u22A0", boxUL: "\u255D", boxUl: "\u255C", boxuL: "\u255B", boxul: "\u2518", boxUR: "\u255A", boxUr: "\u2559", boxuR: "\u2558", boxur: "\u2514", boxV: "\u2551", boxv: "\u2502", boxVH: "\u256C", boxVh: "\u256B", boxvH: "\u256A", boxvh: "\u253C", boxVL: "\u2563", boxVl: "\u2562", boxvL: "\u2561", boxvl: "\u2524", boxVR: "\u2560", boxVr: "\u255F", boxvR: "\u255E", boxvr: "\u251C", bprime: "\u2035", Breve: "\u02D8", breve: "\u02D8", brvbar: "\xA6", Bscr: "\u212C", bscr: "\u{1D4B7}", bsemi: "\u204F", bsim: "\u223D", bsime: "\u22CD", bsol: "\\", bsolb: "\u29C5", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bump: "\u224E", bumpE: "\u2AAE", bumpe: "\u224F", Bumpeq: "\u224E", bumpeq: "\u224F", Cacute: "\u0106", cacute: "\u0107", Cap: "\u22D2", cap: "\u2229", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", capcup: "\u2A47", capdot: "\u2A40", CapitalDifferentialD: "\u2145", caps: "\u2229\uFE00", caret: "\u2041", caron: "\u02C7", Cayleys: "\u212D", ccaps: "\u2A4D", Ccaron: "\u010C", ccaron: "\u010D", Ccedil: "\xC7", ccedil: "\xE7", Ccirc: "\u0108", ccirc: "\u0109", Cconint: "\u2230", ccups: "\u2A4C", ccupssm: "\u2A50", Cdot: "\u010A", cdot: "\u010B", cedil: "\xB8", Cedilla: "\xB8", cemptyv: "\u29B2", cent: "\xA2", CenterDot: "\xB7", centerdot: "\xB7", Cfr: "\u212D", cfr: "\u{1D520}", CHcy: "\u0427", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", Chi: "\u03A7", chi: "\u03C7", cir: "\u25CB", circ: "\u02C6", circeq: "\u2257", circlearrowleft: "\u21BA", circlearrowright: "\u21BB", circledast: "\u229B", circledcirc: "\u229A", circleddash: "\u229D", CircleDot: "\u2299", circledR: "\xAE", circledS: "\u24C8", CircleMinus: "\u2296", CirclePlus: "\u2295", CircleTimes: "\u2297", cirE: "\u29C3", cire: "\u2257", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", ClockwiseContourIntegral: "\u2232", CloseCurlyDoubleQuote: "\u201D", CloseCurlyQuote: "\u2019", clubs: "\u2663", clubsuit: "\u2663", Colon: "\u2237", colon: ":", Colone: "\u2A74", colone: "\u2254", coloneq: "\u2254", comma: ",", commat: "@", comp: "\u2201", compfn: "\u2218", complement: "\u2201", complexes: "\u2102", cong: "\u2245", congdot: "\u2A6D", Congruent: "\u2261", Conint: "\u222F", conint: "\u222E", ContourIntegral: "\u222E", Copf: "\u2102", copf: "\u{1D554}", coprod: "\u2210", Coproduct: "\u2210", COPY: "\xA9", copy: "\xA9", copysr: "\u2117", CounterClockwiseContourIntegral: "\u2233", crarr: "\u21B5", Cross: "\u2A2F", cross: "\u2717", Cscr: "\u{1D49E}", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", cuesc: "\u22DF", cularr: "\u21B6", cularrp: "\u293D", Cup: "\u22D3", cup: "\u222A", cupbrcap: "\u2A48", CupCap: "\u224D", cupcap: "\u2A46", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curarrm: "\u293C", curlyeqprec: "\u22DE", curlyeqsucc: "\u22DF", curlyvee: "\u22CE", curlywedge: "\u22CF", curren: "\xA4", curvearrowleft: "\u21B6", curvearrowright: "\u21B7", cuvee: "\u22CE", cuwed: "\u22CF", cwconint: "\u2232", cwint: "\u2231", cylcty: "\u232D", Dagger: "\u2021", dagger: "\u2020", daleth: "\u2138", Darr: "\u21A1", dArr: "\u21D3", darr: "\u2193", dash: "\u2010", Dashv: "\u2AE4", dashv: "\u22A3", dbkarow: "\u290F", dblac: "\u02DD", Dcaron: "\u010E", dcaron: "\u010F", Dcy: "\u0414", dcy: "\u0434", DD: "\u2145", dd: "\u2146", ddagger: "\u2021", ddarr: "\u21CA", DDotrahd: "\u2911", ddotseq: "\u2A77", deg: "\xB0", Del: "\u2207", Delta: "\u0394", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", Dfr: "\u{1D507}", dfr: "\u{1D521}", dHar: "\u2965", dharl: "\u21C3", dharr: "\u21C2", DiacriticalAcute: "\xB4", DiacriticalDot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", DiacriticalGrave: "`", DiacriticalTilde: "\u02DC", diam: "\u22C4", Diamond: "\u22C4", diamond: "\u22C4", diamondsuit: "\u2666", diams: "\u2666", die: "\xA8", DifferentialD: "\u2146", digamma: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", DJcy: "\u0402", djcy: "\u0452", dlcorn: "\u231E", dlcrop: "\u230D", dollar: "$", Dopf: "\u{1D53B}", dopf: "\u{1D555}", Dot: "\xA8", dot: "\u02D9", DotDot: "\u20DC", doteq: "\u2250", doteqdot: "\u2251", DotEqual: "\u2250", dotminus: "\u2238", dotplus: "\u2214", dotsquare: "\u22A1", doublebarwedge: "\u2306", DoubleContourIntegral: "\u222F", DoubleDot: "\xA8", DoubleDownArrow: "\u21D3", DoubleLeftArrow: "\u21D0", DoubleLeftRightArrow: "\u21D4", DoubleLeftTee: "\u2AE4", DoubleLongLeftArrow: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", DoubleLongRightArrow: "\u27F9", DoubleRightArrow: "\u21D2", DoubleRightTee: "\u22A8", DoubleUpArrow: "\u21D1", DoubleUpDownArrow: "\u21D5", DoubleVerticalBar: "\u2225", DownArrow: "\u2193", Downarrow: "\u21D3", downarrow: "\u2193", DownArrowBar: "\u2913", DownArrowUpArrow: "\u21F5", DownBreve: "\u0311", downdownarrows: "\u21CA", downharpoonleft: "\u21C3", downharpoonright: "\u21C2", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVector: "\u21BD", DownLeftVectorBar: "\u2956", DownRightTeeVector: "\u295F", DownRightVector: "\u21C1", DownRightVectorBar: "\u2957", DownTee: "\u22A4", DownTeeArrow: "\u21A7", drbkarow: "\u2910", drcorn: "\u231F", drcrop: "\u230C", Dscr: "\u{1D49F}", dscr: "\u{1D4B9}", DScy: "\u0405", dscy: "\u0455", dsol: "\u29F6", Dstrok: "\u0110", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", dtrif: "\u25BE", duarr: "\u21F5", duhar: "\u296F", dwangle: "\u29A6", DZcy: "\u040F", dzcy: "\u045F", dzigrarr: "\u27FF", Eacute: "\xC9", eacute: "\xE9", easter: "\u2A6E", Ecaron: "\u011A", ecaron: "\u011B", ecir: "\u2256", Ecirc: "\xCA", ecirc: "\xEA", ecolon: "\u2255", Ecy: "\u042D", ecy: "\u044D", eDDot: "\u2A77", Edot: "\u0116", eDot: "\u2251", edot: "\u0117", ee: "\u2147", efDot: "\u2252", Efr: "\u{1D508}", efr: "\u{1D522}", eg: "\u2A9A", Egrave: "\xC8", egrave: "\xE8", egs: "\u2A96", egsdot: "\u2A98", el: "\u2A99", Element: "\u2208", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", elsdot: "\u2A97", Emacr: "\u0112", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", EmptySmallSquare: "\u25FB", emptyv: "\u2205", EmptyVerySmallSquare: "\u25AB", emsp: "\u2003", emsp13: "\u2004", emsp14: "\u2005", ENG: "\u014A", eng: "\u014B", ensp: "\u2002", Eogon: "\u0118", eogon: "\u0119", Eopf: "\u{1D53C}", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", Epsilon: "\u0395", epsilon: "\u03B5", epsiv: "\u03F5", eqcirc: "\u2256", eqcolon: "\u2255", eqsim: "\u2242", eqslantgtr: "\u2A96", eqslantless: "\u2A95", Equal: "\u2A75", equals: "=", EqualTilde: "\u2242", equest: "\u225F", Equilibrium: "\u21CC", equiv: "\u2261", equivDD: "\u2A78", eqvparsl: "\u29E5", erarr: "\u2971", erDot: "\u2253", Escr: "\u2130", escr: "\u212F", esdot: "\u2250", Esim: "\u2A73", esim: "\u2242", Eta: "\u0397", eta: "\u03B7", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", euro: "\u20AC", excl: "!", exist: "\u2203", Exists: "\u2203", expectation: "\u2130", ExponentialE: "\u2147", exponentiale: "\u2147", fallingdotseq: "\u2252", Fcy: "\u0424", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", Ffr: "\u{1D509}", ffr: "\u{1D523}", filig: "\uFB01", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", Fopf: "\u{1D53D}", fopf: "\u{1D557}", ForAll: "\u2200", forall: "\u2200", fork: "\u22D4", forkv: "\u2AD9", Fouriertrf: "\u2131", fpartint: "\u2A0D", frac12: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", Fscr: "\u2131", fscr: "\u{1D4BB}", gacute: "\u01F5", Gamma: "\u0393", gamma: "\u03B3", Gammad: "\u03DC", gammad: "\u03DD", gap: "\u2A86", Gbreve: "\u011E", gbreve: "\u011F", Gcedil: "\u0122", Gcirc: "\u011C", gcirc: "\u011D", Gcy: "\u0413", gcy: "\u0433", Gdot: "\u0120", gdot: "\u0121", gE: "\u2267", ge: "\u2265", gEl: "\u2A8C", gel: "\u22DB", geq: "\u2265", geqq: "\u2267", geqslant: "\u2A7E", ges: "\u2A7E", gescc: "\u2AA9", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", Gfr: "\u{1D50A}", gfr: "\u{1D524}", Gg: "\u22D9", gg: "\u226B", ggg: "\u22D9", gimel: "\u2137", GJcy: "\u0403", gjcy: "\u0453", gl: "\u2277", gla: "\u2AA5", glE: "\u2A92", glj: "\u2AA4", gnap: "\u2A8A", gnapprox: "\u2A8A", gnE: "\u2269", gne: "\u2A88", gneq: "\u2A88", gneqq: "\u2269", gnsim: "\u22E7", Gopf: "\u{1D53E}", gopf: "\u{1D558}", grave: "`", GreaterEqual: "\u2265", GreaterEqualLess: "\u22DB", GreaterFullEqual: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", GreaterSlantEqual: "\u2A7E", GreaterTilde: "\u2273", Gscr: "\u{1D4A2}", gscr: "\u210A", gsim: "\u2273", gsime: "\u2A8E", gsiml: "\u2A90", GT: ">", Gt: "\u226B", gt: ">", gtcc: "\u2AA7", gtcir: "\u2A7A", gtdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrapprox: "\u2A86", gtrarr: "\u2978", gtrdot: "\u22D7", gtreqless: "\u22DB", gtreqqless: "\u2A8C", gtrless: "\u2277", gtrsim: "\u2273", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", Hacek: "\u02C7", hairsp: "\u200A", half: "\xBD", hamilt: "\u210B", HARDcy: "\u042A", hardcy: "\u044A", hArr: "\u21D4", harr: "\u2194", harrcir: "\u2948", harrw: "\u21AD", Hat: "^", hbar: "\u210F", Hcirc: "\u0124", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", hercon: "\u22B9", Hfr: "\u210C", hfr: "\u{1D525}", HilbertSpace: "\u210B", hksearow: "\u2925", hkswarow: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", hookrightarrow: "\u21AA", Hopf: "\u210D", hopf: "\u{1D559}", horbar: "\u2015", HorizontalLine: "\u2500", Hscr: "\u210B", hscr: "\u{1D4BD}", hslash: "\u210F", Hstrok: "\u0126", hstrok: "\u0127", HumpDownHump: "\u224E", HumpEqual: "\u224F", hybull: "\u2043", hyphen: "\u2010", Iacute: "\xCD", iacute: "\xED", ic: "\u2063", Icirc: "\xCE", icirc: "\xEE", Icy: "\u0418", icy: "\u0438", Idot: "\u0130", IEcy: "\u0415", iecy: "\u0435", iexcl: "\xA1", iff: "\u21D4", Ifr: "\u2111", ifr: "\u{1D526}", Igrave: "\xCC", igrave: "\xEC", ii: "\u2148", iiiint: "\u2A0C", iiint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", IJlig: "\u0132", ijlig: "\u0133", Im: "\u2111", Imacr: "\u012A", imacr: "\u012B", image: "\u2111", ImaginaryI: "\u2148", imagline: "\u2110", imagpart: "\u2111", imath: "\u0131", imof: "\u22B7", imped: "\u01B5", Implies: "\u21D2", in: "\u2208", incare: "\u2105", infin: "\u221E", infintie: "\u29DD", inodot: "\u0131", Int: "\u222C", int: "\u222B", intcal: "\u22BA", integers: "\u2124", Integral: "\u222B", intercal: "\u22BA", Intersection: "\u22C2", intlarhk: "\u2A17", intprod: "\u2A3C", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", IOcy: "\u0401", iocy: "\u0451", Iogon: "\u012E", iogon: "\u012F", Iopf: "\u{1D540}", iopf: "\u{1D55A}", Iota: "\u0399", iota: "\u03B9", iprod: "\u2A3C", iquest: "\xBF", Iscr: "\u2110", iscr: "\u{1D4BE}", isin: "\u2208", isindot: "\u22F5", isinE: "\u22F9", isins: "\u22F4", isinsv: "\u22F3", isinv: "\u2208", it: "\u2062", Itilde: "\u0128", itilde: "\u0129", Iukcy: "\u0406", iukcy: "\u0456", Iuml: "\xCF", iuml: "\xEF", Jcirc: "\u0134", jcirc: "\u0135", Jcy: "\u0419", jcy: "\u0439", Jfr: "\u{1D50D}", jfr: "\u{1D527}", jmath: "\u0237", Jopf: "\u{1D541}", jopf: "\u{1D55B}", Jscr: "\u{1D4A5}", jscr: "\u{1D4BF}", Jsercy: "\u0408", jsercy: "\u0458", Jukcy: "\u0404", jukcy: "\u0454", Kappa: "\u039A", kappa: "\u03BA", kappav: "\u03F0", Kcedil: "\u0136", kcedil: "\u0137", Kcy: "\u041A", kcy: "\u043A", Kfr: "\u{1D50E}", kfr: "\u{1D528}", kgreen: "\u0138", KHcy: "\u0425", khcy: "\u0445", KJcy: "\u040C", kjcy: "\u045C", Kopf: "\u{1D542}", kopf: "\u{1D55C}", Kscr: "\u{1D4A6}", kscr: "\u{1D4C0}", lAarr: "\u21DA", Lacute: "\u0139", lacute: "\u013A", laemptyv: "\u29B4", lagran: "\u2112", Lambda: "\u039B", lambda: "\u03BB", Lang: "\u27EA", lang: "\u27E8", langd: "\u2991", langle: "\u27E8", lap: "\u2A85", Laplacetrf: "\u2112", laquo: "\xAB", Larr: "\u219E", lArr: "\u21D0", larr: "\u2190", larrb: "\u21E4", larrbfs: "\u291F", larrfs: "\u291D", larrhk: "\u21A9", larrlp: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", lat: "\u2AAB", lAtail: "\u291B", latail: "\u2919", late: "\u2AAD", lates: "\u2AAD\uFE00", lBarr: "\u290E", lbarr: "\u290C", lbbrk: "\u2772", lbrace: "{", lbrack: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", Lcaron: "\u013D", lcaron: "\u013E", Lcedil: "\u013B", lcedil: "\u013C", lceil: "\u2308", lcub: "{", Lcy: "\u041B", lcy: "\u043B", ldca: "\u2936", ldquo: "\u201C", ldquor: "\u201E", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", lE: "\u2266", le: "\u2264", LeftAngleBracket: "\u27E8", LeftArrow: "\u2190", Leftarrow: "\u21D0", leftarrow: "\u2190", LeftArrowBar: "\u21E4", LeftArrowRightArrow: "\u21C6", leftarrowtail: "\u21A2", LeftCeiling: "\u2308", LeftDoubleBracket: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVector: "\u21C3", LeftDownVectorBar: "\u2959", LeftFloor: "\u230A", leftharpoondown: "\u21BD", leftharpoonup: "\u21BC", leftleftarrows: "\u21C7", LeftRightArrow: "\u2194", Leftrightarrow: "\u21D4", leftrightarrow: "\u2194", leftrightarrows: "\u21C6", leftrightharpoons: "\u21CB", leftrightsquigarrow: "\u21AD", LeftRightVector: "\u294E", LeftTee: "\u22A3", LeftTeeArrow: "\u21A4", LeftTeeVector: "\u295A", leftthreetimes: "\u22CB", LeftTriangle: "\u22B2", LeftTriangleBar: "\u29CF", LeftTriangleEqual: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVector: "\u21BF", LeftUpVectorBar: "\u2958", LeftVector: "\u21BC", LeftVectorBar: "\u2952", lEg: "\u2A8B", leg: "\u22DA", leq: "\u2264", leqq: "\u2266", leqslant: "\u2A7D", les: "\u2A7D", lescc: "\u2AA8", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessapprox: "\u2A85", lessdot: "\u22D6", lesseqgtr: "\u22DA", lesseqqgtr: "\u2A8B", LessEqualGreater: "\u22DA", LessFullEqual: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", LessLess: "\u2AA1", lesssim: "\u2272", LessSlantEqual: "\u2A7D", LessTilde: "\u2272", lfisht: "\u297C", lfloor: "\u230A", Lfr: "\u{1D50F}", lfr: "\u{1D529}", lg: "\u2276", lgE: "\u2A91", lHar: "\u2962", lhard: "\u21BD", lharu: "\u21BC", lharul: "\u296A", lhblk: "\u2584", LJcy: "\u0409", ljcy: "\u0459", Ll: "\u22D8", ll: "\u226A", llarr: "\u21C7", llcorner: "\u231E", Lleftarrow: "\u21DA", llhard: "\u296B", lltri: "\u25FA", Lmidot: "\u013F", lmidot: "\u0140", lmoust: "\u23B0", lmoustache: "\u23B0", lnap: "\u2A89", lnapprox: "\u2A89", lnE: "\u2268", lne: "\u2A87", lneq: "\u2A87", lneqq: "\u2268", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", lobrk: "\u27E6", LongLeftArrow: "\u27F5", Longleftarrow: "\u27F8", longleftarrow: "\u27F5", LongLeftRightArrow: "\u27F7", Longleftrightarrow: "\u27FA", longleftrightarrow: "\u27F7", longmapsto: "\u27FC", LongRightArrow: "\u27F6", Longrightarrow: "\u27F9", longrightarrow: "\u27F6", looparrowleft: "\u21AB", looparrowright: "\u21AC", lopar: "\u2985", Lopf: "\u{1D543}", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", lowbar: "_", LowerLeftArrow: "\u2199", LowerRightArrow: "\u2198", loz: "\u25CA", lozenge: "\u25CA", lozf: "\u29EB", lpar: "(", lparlt: "\u2993", lrarr: "\u21C6", lrcorner: "\u231F", lrhar: "\u21CB", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", Lscr: "\u2112", lscr: "\u{1D4C1}", Lsh: "\u21B0", lsh: "\u21B0", lsim: "\u2272", lsime: "\u2A8D", lsimg: "\u2A8F", lsqb: "[", lsquo: "\u2018", lsquor: "\u201A", Lstrok: "\u0141", lstrok: "\u0142", LT: "<", Lt: "\u226A", lt: "<", ltcc: "\u2AA6", ltcir: "\u2A79", ltdot: "\u22D6", lthree: "\u22CB", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltri: "\u25C3", ltrie: "\u22B4", ltrif: "\u25C2", ltrPar: "\u2996", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", macr: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", Map: "\u2905", map: "\u21A6", mapsto: "\u21A6", mapstodown: "\u21A7", mapstoleft: "\u21A4", mapstoup: "\u21A5", marker: "\u25AE", mcomma: "\u2A29", Mcy: "\u041C", mcy: "\u043C", mdash: "\u2014", mDDot: "\u223A", measuredangle: "\u2221", MediumSpace: "\u205F", Mellintrf: "\u2133", Mfr: "\u{1D510}", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", mid: "\u2223", midast: "*", midcir: "\u2AF0", middot: "\xB7", minus: "\u2212", minusb: "\u229F", minusd: "\u2238", minusdu: "\u2A2A", MinusPlus: "\u2213", mlcp: "\u2ADB", mldr: "\u2026", mnplus: "\u2213", models: "\u22A7", Mopf: "\u{1D544}", mopf: "\u{1D55E}", mp: "\u2213", Mscr: "\u2133", mscr: "\u{1D4C2}", mstpos: "\u223E", Mu: "\u039C", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nabla: "\u2207", Nacute: "\u0143", nacute: "\u0144", nang: "\u2220\u20D2", nap: "\u2249", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", napprox: "\u2249", natur: "\u266E", natural: "\u266E", naturals: "\u2115", nbsp: "\xA0", nbump: "\u224E\u0338", nbumpe: "\u224F\u0338", ncap: "\u2A43", Ncaron: "\u0147", ncaron: "\u0148", Ncedil: "\u0145", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", Ncy: "\u041D", ncy: "\u043D", ndash: "\u2013", ne: "\u2260", nearhk: "\u2924", neArr: "\u21D7", nearr: "\u2197", nearrow: "\u2197", nedot: "\u2250\u0338", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", nequiv: "\u2262", nesear: "\u2928", nesim: "\u2242\u0338", NestedGreaterGreater: "\u226B", NestedLessLess: "\u226A", NewLine: `
`, nexist: "\u2204", nexists: "\u2204", Nfr: "\u{1D511}", nfr: "\u{1D52B}", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", nGg: "\u22D9\u0338", ngsim: "\u2275", nGt: "\u226B\u20D2", ngt: "\u226F", ngtr: "\u226F", nGtv: "\u226B\u0338", nhArr: "\u21CE", nharr: "\u21AE", nhpar: "\u2AF2", ni: "\u220B", nis: "\u22FC", nisd: "\u22FA", niv: "\u220B", NJcy: "\u040A", njcy: "\u045A", nlArr: "\u21CD", nlarr: "\u219A", nldr: "\u2025", nlE: "\u2266\u0338", nle: "\u2270", nLeftarrow: "\u21CD", nleftarrow: "\u219A", nLeftrightarrow: "\u21CE", nleftrightarrow: "\u21AE", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", nless: "\u226E", nLl: "\u22D8\u0338", nlsim: "\u2274", nLt: "\u226A\u20D2", nlt: "\u226E", nltri: "\u22EA", nltrie: "\u22EC", nLtv: "\u226A\u0338", nmid: "\u2224", NoBreak: "\u2060", NonBreakingSpace: "\xA0", Nopf: "\u2115", nopf: "\u{1D55F}", Not: "\u2AEC", not: "\xAC", NotCongruent: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotEqualTilde: "\u2242\u0338", NotExists: "\u2204", NotGreater: "\u226F", NotGreaterEqual: "\u2271", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", NotGreaterLess: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", notin: "\u2209", notindot: "\u22F5\u0338", notinE: "\u22F9\u0338", notinva: "\u2209", notinvb: "\u22F7", notinvc: "\u22F6", NotLeftTriangle: "\u22EA", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangleEqual: "\u22EC", NotLess: "\u226E", NotLessEqual: "\u2270", NotLessGreater: "\u2278", NotLessLess: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", notni: "\u220C", notniva: "\u220C", notnivb: "\u22FE", notnivc: "\u22FD", NotPrecedes: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", NotReverseElement: "\u220C", NotRightTriangle: "\u22EB", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangleEqual: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", NotSubset: "\u2282\u20D2", NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\u2249", NotVerticalBar: "\u2224", npar: "\u2226", nparallel: "\u2226", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", npr: "\u2280", nprcue: "\u22E0", npre: "\u2AAF\u0338", nprec: "\u2280", npreceq: "\u2AAF\u0338", nrArr: "\u21CF", nrarr: "\u219B", nrarrc: "\u2933\u0338", nrarrw: "\u219D\u0338", nRightarrow: "\u21CF", nrightarrow: "\u219B", nrtri: "\u22EB", nrtrie: "\u22ED", nsc: "\u2281", nsccue: "\u22E1", nsce: "\u2AB0\u0338", Nscr: "\u{1D4A9}", nscr: "\u{1D4C3}", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244", nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22E2", nsqsupe: "\u22E3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsube: "\u2288", nsubset: "\u2282\u20D2", nsubseteq: "\u2288", nsubseteqq: "\u2AC5\u0338", nsucc: "\u2281", nsucceq: "\u2AB0\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20D2", nsupseteq: "\u2289", nsupseteqq: "\u2AC6\u0338", ntgl: "\u2279", Ntilde: "\xD1", ntilde: "\xF1", ntlg: "\u2278", ntriangleleft: "\u22EA", ntrianglelefteq: "\u22EC", ntriangleright: "\u22EB", ntrianglerighteq: "\u22ED", Nu: "\u039D", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvap: "\u224D\u20D2", nVDash: "\u22AF", nVdash: "\u22AE", nvDash: "\u22AD", nvdash: "\u22AC", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvHarr: "\u2904", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwarhk: "\u2923", nwArr: "\u21D6", nwarr: "\u2196", nwarrow: "\u2196", nwnear: "\u2927", Oacute: "\xD3", oacute: "\xF3", oast: "\u229B", ocir: "\u229A", Ocirc: "\xD4", ocirc: "\xF4", Ocy: "\u041E", ocy: "\u043E", odash: "\u229D", Odblac: "\u0150", odblac: "\u0151", odiv: "\u2A38", odot: "\u2299", odsold: "\u29BC", OElig: "\u0152", oelig: "\u0153", ofcir: "\u29BF", Ofr: "\u{1D512}", ofr: "\u{1D52C}", ogon: "\u02DB", Ograve: "\xD2", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", ohm: "\u03A9", oint: "\u222E", olarr: "\u21BA", olcir: "\u29BE", olcross: "\u29BB", oline: "\u203E", olt: "\u29C0", Omacr: "\u014C", omacr: "\u014D", Omega: "\u03A9", omega: "\u03C9", Omicron: "\u039F", omicron: "\u03BF", omid: "\u29B6", ominus: "\u2296", Oopf: "\u{1D546}", oopf: "\u{1D560}", opar: "\u29B7", OpenCurlyDoubleQuote: "\u201C", OpenCurlyQuote: "\u2018", operp: "\u29B9", oplus: "\u2295", Or: "\u2A54", or: "\u2228", orarr: "\u21BB", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oS: "\u24C8", Oscr: "\u{1D4AA}", oscr: "\u2134", Oslash: "\xD8", oslash: "\xF8", osol: "\u2298", Otilde: "\xD5", otilde: "\xF5", Otimes: "\u2A37", otimes: "\u2297", otimesas: "\u2A36", Ouml: "\xD6", ouml: "\xF6", ovbar: "\u233D", OverBar: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", OverParenthesis: "\u23DC", par: "\u2225", para: "\xB6", parallel: "\u2225", parsim: "\u2AF3", parsl: "\u2AFD", part: "\u2202", PartialD: "\u2202", Pcy: "\u041F", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", perp: "\u22A5", pertenk: "\u2031", Pfr: "\u{1D513}", pfr: "\u{1D52D}", Phi: "\u03A6", phi: "\u03C6", phiv: "\u03D5", phmmat: "\u2133", phone: "\u260E", Pi: "\u03A0", pi: "\u03C0", pitchfork: "\u22D4", piv: "\u03D6", planck: "\u210F", planckh: "\u210E", plankv: "\u210F", plus: "+", plusacir: "\u2A23", plusb: "\u229E", pluscir: "\u2A22", plusdo: "\u2214", plusdu: "\u2A25", pluse: "\u2A72", PlusMinus: "\xB1", plusmn: "\xB1", plussim: "\u2A26", plustwo: "\u2A27", pm: "\xB1", Poincareplane: "\u210C", pointint: "\u2A15", Popf: "\u2119", popf: "\u{1D561}", pound: "\xA3", Pr: "\u2ABB", pr: "\u227A", prap: "\u2AB7", prcue: "\u227C", prE: "\u2AB3", pre: "\u2AAF", prec: "\u227A", precapprox: "\u2AB7", preccurlyeq: "\u227C", Precedes: "\u227A", PrecedesEqual: "\u2AAF", PrecedesSlantEqual: "\u227C", PrecedesTilde: "\u227E", preceq: "\u2AAF", precnapprox: "\u2AB9", precneqq: "\u2AB5", precnsim: "\u22E8", precsim: "\u227E", Prime: "\u2033", prime: "\u2032", primes: "\u2119", prnap: "\u2AB9", prnE: "\u2AB5", prnsim: "\u22E8", prod: "\u220F", Product: "\u220F", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prop: "\u221D", Proportion: "\u2237", Proportional: "\u221D", propto: "\u221D", prsim: "\u227E", prurel: "\u22B0", Pscr: "\u{1D4AB}", pscr: "\u{1D4C5}", Psi: "\u03A8", psi: "\u03C8", puncsp: "\u2008", Qfr: "\u{1D514}", qfr: "\u{1D52E}", qint: "\u2A0C", Qopf: "\u211A", qopf: "\u{1D562}", qprime: "\u2057", Qscr: "\u{1D4AC}", qscr: "\u{1D4C6}", quaternions: "\u210D", quatint: "\u2A16", quest: "?", questeq: "\u225F", QUOT: '"', quot: '"', rAarr: "\u21DB", race: "\u223D\u0331", Racute: "\u0154", racute: "\u0155", radic: "\u221A", raemptyv: "\u29B3", Rang: "\u27EB", rang: "\u27E9", rangd: "\u2992", range: "\u29A5", rangle: "\u27E9", raquo: "\xBB", Rarr: "\u21A0", rArr: "\u21D2", rarr: "\u2192", rarrap: "\u2975", rarrb: "\u21E5", rarrbfs: "\u2920", rarrc: "\u2933", rarrfs: "\u291E", rarrhk: "\u21AA", rarrlp: "\u21AC", rarrpl: "\u2945", rarrsim: "\u2974", Rarrtl: "\u2916", rarrtl: "\u21A3", rarrw: "\u219D", rAtail: "\u291C", ratail: "\u291A", ratio: "\u2236", rationals: "\u211A", RBarr: "\u2910", rBarr: "\u290F", rbarr: "\u290D", rbbrk: "\u2773", rbrace: "}", rbrack: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", Rcaron: "\u0158", rcaron: "\u0159", Rcedil: "\u0156", rcedil: "\u0157", rceil: "\u2309", rcub: "}", Rcy: "\u0420", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201D", rdquor: "\u201D", rdsh: "\u21B3", Re: "\u211C", real: "\u211C", realine: "\u211B", realpart: "\u211C", reals: "\u211D", rect: "\u25AD", REG: "\xAE", reg: "\xAE", ReverseElement: "\u220B", ReverseEquilibrium: "\u21CB", ReverseUpEquilibrium: "\u296F", rfisht: "\u297D", rfloor: "\u230B", Rfr: "\u211C", rfr: "\u{1D52F}", rHar: "\u2964", rhard: "\u21C1", rharu: "\u21C0", rharul: "\u296C", Rho: "\u03A1", rho: "\u03C1", rhov: "\u03F1", RightAngleBracket: "\u27E9", RightArrow: "\u2192", Rightarrow: "\u21D2", rightarrow: "\u2192", RightArrowBar: "\u21E5", RightArrowLeftArrow: "\u21C4", rightarrowtail: "\u21A3", RightCeiling: "\u2309", RightDoubleBracket: "\u27E7", RightDownTeeVector: "\u295D", RightDownVector: "\u21C2", RightDownVectorBar: "\u2955", RightFloor: "\u230B", rightharpoondown: "\u21C1", rightharpoonup: "\u21C0", rightleftarrows: "\u21C4", rightleftharpoons: "\u21CC", rightrightarrows: "\u21C9", rightsquigarrow: "\u219D", RightTee: "\u22A2", RightTeeArrow: "\u21A6", RightTeeVector: "\u295B", rightthreetimes: "\u22CC", RightTriangle: "\u22B3", RightTriangleBar: "\u29D0", RightTriangleEqual: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVector: "\u21BE", RightUpVectorBar: "\u2954", RightVector: "\u21C0", RightVectorBar: "\u2953", ring: "\u02DA", risingdotseq: "\u2253", rlarr: "\u21C4", rlhar: "\u21CC", rlm: "\u200F", rmoust: "\u23B1", rmoustache: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", robrk: "\u27E7", ropar: "\u2986", Ropf: "\u211D", ropf: "\u{1D563}", roplus: "\u2A2E", rotimes: "\u2A35", RoundImplies: "\u2970", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rrarr: "\u21C9", Rrightarrow: "\u21DB", rsaquo: "\u203A", Rscr: "\u211B", rscr: "\u{1D4C7}", Rsh: "\u21B1", rsh: "\u21B1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22CC", rtimes: "\u22CA", rtri: "\u25B9", rtrie: "\u22B5", rtrif: "\u25B8", rtriltri: "\u29CE", RuleDelayed: "\u29F4", ruluhar: "\u2968", rx: "\u211E", Sacute: "\u015A", sacute: "\u015B", sbquo: "\u201A", Sc: "\u2ABC", sc: "\u227B", scap: "\u2AB8", Scaron: "\u0160", scaron: "\u0161", sccue: "\u227D", scE: "\u2AB4", sce: "\u2AB0", Scedil: "\u015E", scedil: "\u015F", Scirc: "\u015C", scirc: "\u015D", scnap: "\u2ABA", scnE: "\u2AB6", scnsim: "\u22E9", scpolint: "\u2A13", scsim: "\u227F", Scy: "\u0421", scy: "\u0441", sdot: "\u22C5", sdotb: "\u22A1", sdote: "\u2A66", searhk: "\u2925", seArr: "\u21D8", searr: "\u2198", searrow: "\u2198", sect: "\xA7", semi: ";", seswar: "\u2929", setminus: "\u2216", setmn: "\u2216", sext: "\u2736", Sfr: "\u{1D516}", sfr: "\u{1D530}", sfrown: "\u2322", sharp: "\u266F", SHCHcy: "\u0429", shchcy: "\u0449", SHcy: "\u0428", shcy: "\u0448", ShortDownArrow: "\u2193", ShortLeftArrow: "\u2190", shortmid: "\u2223", shortparallel: "\u2225", ShortRightArrow: "\u2192", ShortUpArrow: "\u2191", shy: "\xAD", Sigma: "\u03A3", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", sim: "\u223C", simdot: "\u2A6A", sime: "\u2243", simeq: "\u2243", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", slarr: "\u2190", SmallCircle: "\u2218", smallsetminus: "\u2216", smashp: "\u2A33", smeparsl: "\u29E4", smid: "\u2223", smile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", SOFTcy: "\u042C", softcy: "\u044C", sol: "/", solb: "\u29C4", solbar: "\u233F", Sopf: "\u{1D54A}", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", spar: "\u2225", sqcap: "\u2293", sqcaps: "\u2293\uFE00", sqcup: "\u2294", sqcups: "\u2294\uFE00", Sqrt: "\u221A", sqsub: "\u228F", sqsube: "\u2291", sqsubset: "\u228F", sqsubseteq: "\u2291", sqsup: "\u2290", sqsupe: "\u2292", sqsupset: "\u2290", sqsupseteq: "\u2292", squ: "\u25A1", Square: "\u25A1", square: "\u25A1", SquareIntersection: "\u2293", SquareSubset: "\u228F", SquareSubsetEqual: "\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", squarf: "\u25AA", squf: "\u25AA", srarr: "\u2192", Sscr: "\u{1D4AE}", sscr: "\u{1D4C8}", ssetmn: "\u2216", ssmile: "\u2323", sstarf: "\u22C6", Star: "\u22C6", star: "\u2606", starf: "\u2605", straightepsilon: "\u03F5", straightphi: "\u03D5", strns: "\xAF", Sub: "\u22D0", sub: "\u2282", subdot: "\u2ABD", subE: "\u2AC5", sube: "\u2286", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subne: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", Subset: "\u22D0", subset: "\u2282", subseteq: "\u2286", subseteqq: "\u2AC5", SubsetEqual: "\u2286", subsetneq: "\u228A", subsetneqq: "\u2ACB", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", succ: "\u227B", succapprox: "\u2AB8", succcurlyeq: "\u227D", Succeeds: "\u227B", SucceedsEqual: "\u2AB0", SucceedsSlantEqual: "\u227D", SucceedsTilde: "\u227F", succeq: "\u2AB0", succnapprox: "\u2ABA", succneqq: "\u2AB6", succnsim: "\u22E9", succsim: "\u227F", SuchThat: "\u220B", Sum: "\u2211", sum: "\u2211", sung: "\u266A", Sup: "\u22D1", sup: "\u2283", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", supdot: "\u2ABE", supdsub: "\u2AD8", supE: "\u2AC6", supe: "\u2287", supedot: "\u2AC4", Superset: "\u2283", SupersetEqual: "\u2287", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supne: "\u228B", supplus: "\u2AC0", Supset: "\u22D1", supset: "\u2283", supseteq: "\u2287", supseteqq: "\u2AC6", supsetneq: "\u228B", supsetneqq: "\u2ACC", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swarhk: "\u2926", swArr: "\u21D9", swarr: "\u2199", swarrow: "\u2199", swnwar: "\u292A", szlig: "\xDF", Tab: "	", target: "\u2316", Tau: "\u03A4", tau: "\u03C4", tbrk: "\u23B4", Tcaron: "\u0164", tcaron: "\u0165", Tcedil: "\u0162", tcedil: "\u0163", Tcy: "\u0422", tcy: "\u0442", tdot: "\u20DB", telrec: "\u2315", Tfr: "\u{1D517}", tfr: "\u{1D531}", there4: "\u2234", Therefore: "\u2234", therefore: "\u2234", Theta: "\u0398", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", thickapprox: "\u2248", thicksim: "\u223C", ThickSpace: "\u205F\u200A", thinsp: "\u2009", ThinSpace: "\u2009", thkap: "\u2248", thksim: "\u223C", THORN: "\xDE", thorn: "\xFE", Tilde: "\u223C", tilde: "\u02DC", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\u2248", times: "\xD7", timesb: "\u22A0", timesbar: "\u2A31", timesd: "\u2A30", tint: "\u222D", toea: "\u2928", top: "\u22A4", topbot: "\u2336", topcir: "\u2AF1", Topf: "\u{1D54B}", topf: "\u{1D565}", topfork: "\u2ADA", tosa: "\u2929", tprime: "\u2034", TRADE: "\u2122", trade: "\u2122", triangle: "\u25B5", triangledown: "\u25BF", triangleleft: "\u25C3", trianglelefteq: "\u22B4", triangleq: "\u225C", triangleright: "\u25B9", trianglerighteq: "\u22B5", tridot: "\u25EC", trie: "\u225C", triminus: "\u2A3A", TripleDot: "\u20DB", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", Tscr: "\u{1D4AF}", tscr: "\u{1D4C9}", TScy: "\u0426", tscy: "\u0446", TSHcy: "\u040B", tshcy: "\u045B", Tstrok: "\u0166", tstrok: "\u0167", twixt: "\u226C", twoheadleftarrow: "\u219E", twoheadrightarrow: "\u21A0", Uacute: "\xDA", uacute: "\xFA", Uarr: "\u219F", uArr: "\u21D1", uarr: "\u2191", Uarrocir: "\u2949", Ubrcy: "\u040E", ubrcy: "\u045E", Ubreve: "\u016C", ubreve: "\u016D", Ucirc: "\xDB", ucirc: "\xFB", Ucy: "\u0423", ucy: "\u0443", udarr: "\u21C5", Udblac: "\u0170", udblac: "\u0171", udhar: "\u296E", ufisht: "\u297E", Ufr: "\u{1D518}", ufr: "\u{1D532}", Ugrave: "\xD9", ugrave: "\xF9", uHar: "\u2963", uharl: "\u21BF", uharr: "\u21BE", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", Umacr: "\u016A", umacr: "\u016B", uml: "\xA8", UnderBar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", UnionPlus: "\u228E", Uogon: "\u0172", uogon: "\u0173", Uopf: "\u{1D54C}", uopf: "\u{1D566}", UpArrow: "\u2191", Uparrow: "\u21D1", uparrow: "\u2191", UpArrowBar: "\u2912", UpArrowDownArrow: "\u21C5", UpDownArrow: "\u2195", Updownarrow: "\u21D5", updownarrow: "\u2195", UpEquilibrium: "\u296E", upharpoonleft: "\u21BF", upharpoonright: "\u21BE", uplus: "\u228E", UpperLeftArrow: "\u2196", UpperRightArrow: "\u2197", Upsi: "\u03D2", upsi: "\u03C5", upsih: "\u03D2", Upsilon: "\u03A5", upsilon: "\u03C5", UpTee: "\u22A5", UpTeeArrow: "\u21A5", upuparrows: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", Uring: "\u016E", uring: "\u016F", urtri: "\u25F9", Uscr: "\u{1D4B0}", uscr: "\u{1D4CA}", utdot: "\u22F0", Utilde: "\u0168", utilde: "\u0169", utri: "\u25B5", utrif: "\u25B4", uuarr: "\u21C8", Uuml: "\xDC", uuml: "\xFC", uwangle: "\u29A7", vangrt: "\u299C", varepsilon: "\u03F5", varkappa: "\u03F0", varnothing: "\u2205", varphi: "\u03D5", varpi: "\u03D6", varpropto: "\u221D", vArr: "\u21D5", varr: "\u2195", varrho: "\u03F1", varsigma: "\u03C2", varsubsetneq: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vartheta: "\u03D1", vartriangleleft: "\u22B2", vartriangleright: "\u22B3", Vbar: "\u2AEB", vBar: "\u2AE8", vBarv: "\u2AE9", Vcy: "\u0412", vcy: "\u0432", VDash: "\u22AB", Vdash: "\u22A9", vDash: "\u22A8", vdash: "\u22A2", Vdashl: "\u2AE6", Vee: "\u22C1", vee: "\u2228", veebar: "\u22BB", veeeq: "\u225A", vellip: "\u22EE", Verbar: "\u2016", verbar: "|", Vert: "\u2016", vert: "|", VerticalBar: "\u2223", VerticalLine: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", VeryThinSpace: "\u200A", Vfr: "\u{1D519}", vfr: "\u{1D533}", vltri: "\u22B2", vnsub: "\u2282\u20D2", vnsup: "\u2283\u20D2", Vopf: "\u{1D54D}", vopf: "\u{1D567}", vprop: "\u221D", vrtri: "\u22B3", Vscr: "\u{1D4B1}", vscr: "\u{1D4CB}", vsubnE: "\u2ACB\uFE00", vsubne: "\u228A\uFE00", vsupnE: "\u2ACC\uFE00", vsupne: "\u228B\uFE00", Vvdash: "\u22AA", vzigzag: "\u299A", Wcirc: "\u0174", wcirc: "\u0175", wedbar: "\u2A5F", Wedge: "\u22C0", wedge: "\u2227", wedgeq: "\u2259", weierp: "\u2118", Wfr: "\u{1D51A}", wfr: "\u{1D534}", Wopf: "\u{1D54E}", wopf: "\u{1D568}", wp: "\u2118", wr: "\u2240", wreath: "\u2240", Wscr: "\u{1D4B2}", wscr: "\u{1D4CC}", xcap: "\u22C2", xcirc: "\u25EF", xcup: "\u22C3", xdtri: "\u25BD", Xfr: "\u{1D51B}", xfr: "\u{1D535}", xhArr: "\u27FA", xharr: "\u27F7", Xi: "\u039E", xi: "\u03BE", xlArr: "\u27F8", xlarr: "\u27F5", xmap: "\u27FC", xnis: "\u22FB", xodot: "\u2A00", Xopf: "\u{1D54F}", xopf: "\u{1D569}", xoplus: "\u2A01", xotime: "\u2A02", xrArr: "\u27F9", xrarr: "\u27F6", Xscr: "\u{1D4B3}", xscr: "\u{1D4CD}", xsqcup: "\u2A06", xuplus: "\u2A04", xutri: "\u25B3", xvee: "\u22C1", xwedge: "\u22C0", Yacute: "\xDD", yacute: "\xFD", YAcy: "\u042F", yacy: "\u044F", Ycirc: "\u0176", ycirc: "\u0177", Ycy: "\u042B", ycy: "\u044B", yen: "\xA5", Yfr: "\u{1D51C}", yfr: "\u{1D536}", YIcy: "\u0407", yicy: "\u0457", Yopf: "\u{1D550}", yopf: "\u{1D56A}", Yscr: "\u{1D4B4}", yscr: "\u{1D4CE}", YUcy: "\u042E", yucy: "\u044E", Yuml: "\u0178", yuml: "\xFF", Zacute: "\u0179", zacute: "\u017A", Zcaron: "\u017D", zcaron: "\u017E", Zcy: "\u0417", zcy: "\u0437", Zdot: "\u017B", zdot: "\u017C", zeetrf: "\u2128", ZeroWidthSpace: "\u200B", Zeta: "\u0396", zeta: "\u03B6", Zfr: "\u2128", zfr: "\u{1D537}", ZHcy: "\u0416", zhcy: "\u0436", zigrarr: "\u21DD", Zopf: "\u2124", zopf: "\u{1D56B}", Zscr: "\u{1D4B5}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" }, e.NGSP_UNICODE = "\uE500", e.NAMED_ENTITIES.ngsp = e.NGSP_UNICODE;
      } }), ds = R({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/html_tags.js"(e) {
        P(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Ke(), t = class {
          constructor() {
            let { closedByChildren: c, implicitNamespacePrefix: E, contentType: p = r.TagContentType.PARSABLE_DATA, closedByParent: g = false, isVoid: s = false, ignoreFirstLf: o = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            this.closedByChildren = {}, this.closedByParent = false, this.canSelfClose = false, c && c.length > 0 && c.forEach((l) => this.closedByChildren[l] = true), this.isVoid = s, this.closedByParent = g || s, this.implicitNamespacePrefix = E || null, this.contentType = p, this.ignoreFirstLf = o;
          }
          isClosedByChild(c) {
            return this.isVoid || c.toLowerCase() in this.closedByChildren;
          }
        };
        e.HtmlTagDefinition = t;
        var a, D;
        function n(c) {
          return D || (a = new t(), D = { base: new t({ isVoid: true }), meta: new t({ isVoid: true }), area: new t({ isVoid: true }), embed: new t({ isVoid: true }), link: new t({ isVoid: true }), img: new t({ isVoid: true }), input: new t({ isVoid: true }), param: new t({ isVoid: true }), hr: new t({ isVoid: true }), br: new t({ isVoid: true }), source: new t({ isVoid: true }), track: new t({ isVoid: true }), wbr: new t({ isVoid: true }), p: new t({ closedByChildren: ["address", "article", "aside", "blockquote", "div", "dl", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"], closedByParent: true }), thead: new t({ closedByChildren: ["tbody", "tfoot"] }), tbody: new t({ closedByChildren: ["tbody", "tfoot"], closedByParent: true }), tfoot: new t({ closedByChildren: ["tbody"], closedByParent: true }), tr: new t({ closedByChildren: ["tr"], closedByParent: true }), td: new t({ closedByChildren: ["td", "th"], closedByParent: true }), th: new t({ closedByChildren: ["td", "th"], closedByParent: true }), col: new t({ isVoid: true }), svg: new t({ implicitNamespacePrefix: "svg" }), math: new t({ implicitNamespacePrefix: "math" }), li: new t({ closedByChildren: ["li"], closedByParent: true }), dt: new t({ closedByChildren: ["dt", "dd"] }), dd: new t({ closedByChildren: ["dt", "dd"], closedByParent: true }), rb: new t({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rt: new t({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rtc: new t({ closedByChildren: ["rb", "rtc", "rp"], closedByParent: true }), rp: new t({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), optgroup: new t({ closedByChildren: ["optgroup"], closedByParent: true }), option: new t({ closedByChildren: ["option", "optgroup"], closedByParent: true }), pre: new t({ ignoreFirstLf: true }), listing: new t({ ignoreFirstLf: true }), style: new t({ contentType: r.TagContentType.RAW_TEXT }), script: new t({ contentType: r.TagContentType.RAW_TEXT }), title: new t({ contentType: r.TagContentType.ESCAPABLE_RAW_TEXT }), textarea: new t({ contentType: r.TagContentType.ESCAPABLE_RAW_TEXT, ignoreFirstLf: true }) }), D[c] || a;
        }
        e.getHtmlTagDefinition = n;
      } }), _D = R({ "node_modules/angular-html-parser/lib/compiler/src/ast_path.js"(e) {
        P(), Object.defineProperty(e, "__esModule", { value: true });
        var r = class {
          constructor(t) {
            let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
            this.path = t, this.position = a;
          }
          get empty() {
            return !this.path || !this.path.length;
          }
          get head() {
            return this.path[0];
          }
          get tail() {
            return this.path[this.path.length - 1];
          }
          parentOf(t) {
            return t && this.path[this.path.indexOf(t) - 1];
          }
          childOf(t) {
            return this.path[this.path.indexOf(t) + 1];
          }
          first(t) {
            for (let a = this.path.length - 1; a >= 0; a--) {
              let D = this.path[a];
              if (D instanceof t)
                return D;
            }
          }
          push(t) {
            this.path.push(t);
          }
          pop() {
            return this.path.pop();
          }
        };
        e.AstPath = r;
      } }), Cs = R({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/ast.js"(e) {
        P(), Object.defineProperty(e, "__esModule", { value: true });
        var r = _D(), t = class {
          constructor(f, m, b) {
            this.value = f, this.sourceSpan = m, this.i18n = b, this.type = "text";
          }
          visit(f, m) {
            return f.visitText(this, m);
          }
        };
        e.Text = t;
        var a = class {
          constructor(f, m) {
            this.value = f, this.sourceSpan = m, this.type = "cdata";
          }
          visit(f, m) {
            return f.visitCdata(this, m);
          }
        };
        e.CDATA = a;
        var D = class {
          constructor(f, m, b, B, v, O) {
            this.switchValue = f, this.type = m, this.cases = b, this.sourceSpan = B, this.switchValueSourceSpan = v, this.i18n = O;
          }
          visit(f, m) {
            return f.visitExpansion(this, m);
          }
        };
        e.Expansion = D;
        var n = class {
          constructor(f, m, b, B, v) {
            this.value = f, this.expression = m, this.sourceSpan = b, this.valueSourceSpan = B, this.expSourceSpan = v;
          }
          visit(f, m) {
            return f.visitExpansionCase(this, m);
          }
        };
        e.ExpansionCase = n;
        var c = class {
          constructor(f, m, b) {
            let B = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, v = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, O = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null;
            this.name = f, this.value = m, this.sourceSpan = b, this.valueSpan = B, this.nameSpan = v, this.i18n = O, this.type = "attribute";
          }
          visit(f, m) {
            return f.visitAttribute(this, m);
          }
        };
        e.Attribute = c;
        var E = class {
          constructor(f, m, b, B) {
            let v = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, O = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, F = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null, x = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : null;
            this.name = f, this.attrs = m, this.children = b, this.sourceSpan = B, this.startSourceSpan = v, this.endSourceSpan = O, this.nameSpan = F, this.i18n = x, this.type = "element";
          }
          visit(f, m) {
            return f.visitElement(this, m);
          }
        };
        e.Element = E;
        var p = class {
          constructor(f, m) {
            this.value = f, this.sourceSpan = m, this.type = "comment";
          }
          visit(f, m) {
            return f.visitComment(this, m);
          }
        };
        e.Comment = p;
        var g = class {
          constructor(f, m) {
            this.value = f, this.sourceSpan = m, this.type = "docType";
          }
          visit(f, m) {
            return f.visitDocType(this, m);
          }
        };
        e.DocType = g;
        function s(f, m) {
          let b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, B = [], v = f.visit ? (O) => f.visit(O, b) || O.visit(f, b) : (O) => O.visit(f, b);
          return m.forEach((O) => {
            let F = v(O);
            F && B.push(F);
          }), B;
        }
        e.visitAll = s;
        var o = class {
          constructor() {
          }
          visitElement(f, m) {
            this.visitChildren(m, (b) => {
              b(f.attrs), b(f.children);
            });
          }
          visitAttribute(f, m) {
          }
          visitText(f, m) {
          }
          visitCdata(f, m) {
          }
          visitComment(f, m) {
          }
          visitDocType(f, m) {
          }
          visitExpansion(f, m) {
            return this.visitChildren(m, (b) => {
              b(f.cases);
            });
          }
          visitExpansionCase(f, m) {
          }
          visitChildren(f, m) {
            let b = [], B = this;
            function v(O) {
              O && b.push(s(B, O, f));
            }
            return m(v), Array.prototype.concat.apply([], b);
          }
        };
        e.RecursiveVisitor = o;
        function l(f) {
          let m = f.sourceSpan.start.offset, b = f.sourceSpan.end.offset;
          return f instanceof E && (f.endSourceSpan ? b = f.endSourceSpan.end.offset : f.children && f.children.length && (b = l(f.children[f.children.length - 1]).end)), { start: m, end: b };
        }
        function C(f, m) {
          let b = [], B = new class extends o {
            visit(v, O) {
              let F = l(v);
              if (F.start <= m && m < F.end)
                b.push(v);
              else
                return true;
            }
          }();
          return s(B, f), new r.AstPath(b, m);
        }
        e.findNode = C;
      } }), SD = R({ "node_modules/angular-html-parser/lib/compiler/src/assertions.js"(e) {
        P(), Object.defineProperty(e, "__esModule", { value: true });
        function r(D, n) {
          if (n != null) {
            if (!Array.isArray(n))
              throw new Error("Expected '".concat(D, "' to be an array of strings."));
            for (let c = 0; c < n.length; c += 1)
              if (typeof n[c] != "string")
                throw new Error("Expected '".concat(D, "' to be an array of strings."));
          }
        }
        e.assertArrayOfStrings = r;
        var t = [/^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
        function a(D, n) {
          if (n != null && !(Array.isArray(n) && n.length == 2))
            throw new Error("Expected '".concat(D, "' to be an array, [start, end]."));
          if (n != null) {
            let c = n[0], E = n[1];
            t.forEach((p) => {
              if (p.test(c) || p.test(E))
                throw new Error("['".concat(c, "', '").concat(E, "'] contains unusable interpolation symbol."));
            });
          }
        }
        e.assertInterpolationSymbols = a;
      } }), yD = R({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/interpolation_config.js"(e) {
        P(), Object.defineProperty(e, "__esModule", { value: true });
        var r = SD(), t = class {
          constructor(a, D) {
            this.start = a, this.end = D;
          }
          static fromArray(a) {
            return a ? (r.assertInterpolationSymbols("interpolation", a), new t(a[0], a[1])) : e.DEFAULT_INTERPOLATION_CONFIG;
          }
        };
        e.InterpolationConfig = t, e.DEFAULT_INTERPOLATION_CONFIG = new t("{{", "}}");
      } }), TD = R({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/lexer.js"(e) {
        P(), Object.defineProperty(e, "__esModule", { value: true });
        var r = os(), t = ye(), a = yD(), D = Ke(), n;
        (function(u) {
          u[u.TAG_OPEN_START = 0] = "TAG_OPEN_START", u[u.TAG_OPEN_END = 1] = "TAG_OPEN_END", u[u.TAG_OPEN_END_VOID = 2] = "TAG_OPEN_END_VOID", u[u.TAG_CLOSE = 3] = "TAG_CLOSE", u[u.TEXT = 4] = "TEXT", u[u.ESCAPABLE_RAW_TEXT = 5] = "ESCAPABLE_RAW_TEXT", u[u.RAW_TEXT = 6] = "RAW_TEXT", u[u.COMMENT_START = 7] = "COMMENT_START", u[u.COMMENT_END = 8] = "COMMENT_END", u[u.CDATA_START = 9] = "CDATA_START", u[u.CDATA_END = 10] = "CDATA_END", u[u.ATTR_NAME = 11] = "ATTR_NAME", u[u.ATTR_QUOTE = 12] = "ATTR_QUOTE", u[u.ATTR_VALUE = 13] = "ATTR_VALUE", u[u.DOC_TYPE_START = 14] = "DOC_TYPE_START", u[u.DOC_TYPE_END = 15] = "DOC_TYPE_END", u[u.EXPANSION_FORM_START = 16] = "EXPANSION_FORM_START", u[u.EXPANSION_CASE_VALUE = 17] = "EXPANSION_CASE_VALUE", u[u.EXPANSION_CASE_EXP_START = 18] = "EXPANSION_CASE_EXP_START", u[u.EXPANSION_CASE_EXP_END = 19] = "EXPANSION_CASE_EXP_END", u[u.EXPANSION_FORM_END = 20] = "EXPANSION_FORM_END", u[u.EOF = 21] = "EOF";
        })(n = e.TokenType || (e.TokenType = {}));
        var c = class {
          constructor(u, i, d) {
            this.type = u, this.parts = i, this.sourceSpan = d;
          }
        };
        e.Token = c;
        var E = class extends t.ParseError {
          constructor(u, i, d) {
            super(d, u);
            this.tokenType = i;
          }
        };
        e.TokenError = E;
        var p = class {
          constructor(u, i) {
            this.tokens = u, this.errors = i;
          }
        };
        e.TokenizeResult = p;
        function g(u, i, d) {
          let h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          return new f(new t.ParseSourceFile(u, i), d, h).tokenize();
        }
        e.tokenize = g;
        var s = /\r\n?/g;
        function o(u) {
          let i = u === r.$EOF ? "EOF" : String.fromCharCode(u);
          return 'Unexpected character "'.concat(i, '"');
        }
        function l(u) {
          return 'Unknown entity "'.concat(u, '" - use the "&#<decimal>;" or  "&#x<hex>;" syntax');
        }
        var C = class {
          constructor(u) {
            this.error = u;
          }
        }, f = class {
          constructor(u, i, d) {
            this._getTagContentType = i, this._currentTokenStart = null, this._currentTokenType = null, this._expansionCaseStack = [], this._inInterpolation = false, this._fullNameStack = [], this.tokens = [], this.errors = [], this._tokenizeIcu = d.tokenizeExpansionForms || false, this._interpolationConfig = d.interpolationConfig || a.DEFAULT_INTERPOLATION_CONFIG, this._leadingTriviaCodePoints = d.leadingTriviaChars && d.leadingTriviaChars.map((_) => _.codePointAt(0) || 0), this._canSelfClose = d.canSelfClose || false, this._allowHtmComponentClosingTags = d.allowHtmComponentClosingTags || false;
            let h = d.range || { endPos: u.content.length, startPos: 0, startLine: 0, startCol: 0 };
            this._cursor = d.escapedString ? new L(u, h) : new I(u, h);
            try {
              this._cursor.init();
            } catch (_) {
              this.handleError(_);
            }
          }
          _processCarriageReturns(u) {
            return u.replace(s, `
`);
          }
          tokenize() {
            for (; this._cursor.peek() !== r.$EOF; ) {
              let u = this._cursor.clone();
              try {
                if (this._attemptCharCode(r.$LT))
                  if (this._attemptCharCode(r.$BANG))
                    this._attemptStr("[CDATA[") ? this._consumeCdata(u) : this._attemptStr("--") ? this._consumeComment(u) : this._attemptStrCaseInsensitive("doctype") ? this._consumeDocType(u) : this._consumeBogusComment(u);
                  else if (this._attemptCharCode(r.$SLASH))
                    this._consumeTagClose(u);
                  else {
                    let i = this._cursor.clone();
                    this._attemptCharCode(r.$QUESTION) ? (this._cursor = i, this._consumeBogusComment(u)) : this._consumeTagOpen(u);
                  }
                else
                  this._tokenizeIcu && this._tokenizeExpansionForm() || this._consumeText();
              } catch (i) {
                this.handleError(i);
              }
            }
            return this._beginToken(n.EOF), this._endToken([]), new p(w(this.tokens), this.errors);
          }
          _tokenizeExpansionForm() {
            if (this.isExpansionFormStart())
              return this._consumeExpansionFormStart(), true;
            if (F(this._cursor.peek()) && this._isInExpansionForm())
              return this._consumeExpansionCaseStart(), true;
            if (this._cursor.peek() === r.$RBRACE) {
              if (this._isInExpansionCase())
                return this._consumeExpansionCaseEnd(), true;
              if (this._isInExpansionForm())
                return this._consumeExpansionFormEnd(), true;
            }
            return false;
          }
          _beginToken(u) {
            let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._cursor.clone();
            this._currentTokenStart = i, this._currentTokenType = u;
          }
          _endToken(u) {
            let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._cursor.clone();
            if (this._currentTokenStart === null)
              throw new E("Programming error - attempted to end a token when there was no start to the token", this._currentTokenType, this._cursor.getSpan(i));
            if (this._currentTokenType === null)
              throw new E("Programming error - attempted to end a token which has no token type", null, this._cursor.getSpan(this._currentTokenStart));
            let d = new c(this._currentTokenType, u, this._cursor.getSpan(this._currentTokenStart, this._leadingTriviaCodePoints));
            return this.tokens.push(d), this._currentTokenStart = null, this._currentTokenType = null, d;
          }
          _createError(u, i) {
            this._isInExpansionForm() && (u += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);
            let d = new E(u, this._currentTokenType, i);
            return this._currentTokenStart = null, this._currentTokenType = null, new C(d);
          }
          handleError(u) {
            if (u instanceof j && (u = this._createError(u.msg, this._cursor.getSpan(u.cursor))), u instanceof C)
              this.errors.push(u.error);
            else
              throw u;
          }
          _attemptCharCode(u) {
            return this._cursor.peek() === u ? (this._cursor.advance(), true) : false;
          }
          _attemptCharCodeCaseInsensitive(u) {
            return x(this._cursor.peek(), u) ? (this._cursor.advance(), true) : false;
          }
          _requireCharCode(u) {
            let i = this._cursor.clone();
            if (!this._attemptCharCode(u))
              throw this._createError(o(this._cursor.peek()), this._cursor.getSpan(i));
          }
          _attemptStr(u) {
            let i = u.length;
            if (this._cursor.charsLeft() < i)
              return false;
            let d = this._cursor.clone();
            for (let h = 0; h < i; h++)
              if (!this._attemptCharCode(u.charCodeAt(h)))
                return this._cursor = d, false;
            return true;
          }
          _attemptStrCaseInsensitive(u) {
            for (let i = 0; i < u.length; i++)
              if (!this._attemptCharCodeCaseInsensitive(u.charCodeAt(i)))
                return false;
            return true;
          }
          _requireStr(u) {
            let i = this._cursor.clone();
            if (!this._attemptStr(u))
              throw this._createError(o(this._cursor.peek()), this._cursor.getSpan(i));
          }
          _requireStrCaseInsensitive(u) {
            let i = this._cursor.clone();
            if (!this._attemptStrCaseInsensitive(u))
              throw this._createError(o(this._cursor.peek()), this._cursor.getSpan(i));
          }
          _attemptCharCodeUntilFn(u) {
            for (; !u(this._cursor.peek()); )
              this._cursor.advance();
          }
          _requireCharCodeUntilFn(u, i) {
            let d = this._cursor.clone();
            if (this._attemptCharCodeUntilFn(u), this._cursor.clone().diff(d) < i)
              throw this._createError(o(this._cursor.peek()), this._cursor.getSpan(d));
          }
          _attemptUntilChar(u) {
            for (; this._cursor.peek() !== u; )
              this._cursor.advance();
          }
          _readChar(u) {
            if (u && this._cursor.peek() === r.$AMPERSAND)
              return this._decodeEntity();
            {
              let i = String.fromCodePoint(this._cursor.peek());
              return this._cursor.advance(), i;
            }
          }
          _decodeEntity() {
            let u = this._cursor.clone();
            if (this._cursor.advance(), this._attemptCharCode(r.$HASH)) {
              let i = this._attemptCharCode(r.$x) || this._attemptCharCode(r.$X), d = this._cursor.clone();
              if (this._attemptCharCodeUntilFn(v), this._cursor.peek() != r.$SEMICOLON)
                throw this._createError(o(this._cursor.peek()), this._cursor.getSpan());
              let h = this._cursor.getChars(d);
              this._cursor.advance();
              try {
                let _ = parseInt(h, i ? 16 : 10);
                return String.fromCharCode(_);
              } catch {
                throw this._createError(l(this._cursor.getChars(u)), this._cursor.getSpan());
              }
            } else {
              let i = this._cursor.clone();
              if (this._attemptCharCodeUntilFn(O), this._cursor.peek() != r.$SEMICOLON)
                return this._cursor = i, "&";
              let d = this._cursor.getChars(i);
              this._cursor.advance();
              let h = D.NAMED_ENTITIES[d];
              if (!h)
                throw this._createError(l(d), this._cursor.getSpan(u));
              return h;
            }
          }
          _consumeRawText(u, i) {
            this._beginToken(u ? n.ESCAPABLE_RAW_TEXT : n.RAW_TEXT);
            let d = [];
            for (; ; ) {
              let h = this._cursor.clone(), _ = i();
              if (this._cursor = h, _)
                break;
              d.push(this._readChar(u));
            }
            return this._endToken([this._processCarriageReturns(d.join(""))]);
          }
          _consumeComment(u) {
            this._beginToken(n.COMMENT_START, u), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("-->")), this._beginToken(n.COMMENT_END), this._requireStr("-->"), this._endToken([]);
          }
          _consumeBogusComment(u) {
            this._beginToken(n.COMMENT_START, u), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === r.$GT), this._beginToken(n.COMMENT_END), this._cursor.advance(), this._endToken([]);
          }
          _consumeCdata(u) {
            this._beginToken(n.CDATA_START, u), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("]]>")), this._beginToken(n.CDATA_END), this._requireStr("]]>"), this._endToken([]);
          }
          _consumeDocType(u) {
            this._beginToken(n.DOC_TYPE_START, u), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === r.$GT), this._beginToken(n.DOC_TYPE_END), this._cursor.advance(), this._endToken([]);
          }
          _consumePrefixAndName() {
            let u = this._cursor.clone(), i = "";
            for (; this._cursor.peek() !== r.$COLON && !B(this._cursor.peek()); )
              this._cursor.advance();
            let d;
            this._cursor.peek() === r.$COLON ? (i = this._cursor.getChars(u), this._cursor.advance(), d = this._cursor.clone()) : d = u, this._requireCharCodeUntilFn(b, i === "" ? 0 : 1);
            let h = this._cursor.getChars(d);
            return [i, h];
          }
          _consumeTagOpen(u) {
            let i, d, h, _ = this.tokens.length, k = this._cursor.clone(), $ = [];
            try {
              if (!r.isAsciiLetter(this._cursor.peek()))
                throw this._createError(o(this._cursor.peek()), this._cursor.getSpan(u));
              for (h = this._consumeTagOpenStart(u), d = h.parts[0], i = h.parts[1], this._attemptCharCodeUntilFn(m); this._cursor.peek() !== r.$SLASH && this._cursor.peek() !== r.$GT; ) {
                let [X, H] = this._consumeAttributeName();
                if (this._attemptCharCodeUntilFn(m), this._attemptCharCode(r.$EQ)) {
                  this._attemptCharCodeUntilFn(m);
                  let z = this._consumeAttributeValue();
                  $.push({ prefix: X, name: H, value: z });
                } else
                  $.push({ prefix: X, name: H });
                this._attemptCharCodeUntilFn(m);
              }
              this._consumeTagOpenEnd();
            } catch (X) {
              if (X instanceof C) {
                this._cursor = k, h && (this.tokens.length = _), this._beginToken(n.TEXT, u), this._endToken(["<"]);
                return;
              }
              throw X;
            }
            if (this._canSelfClose && this.tokens[this.tokens.length - 1].type === n.TAG_OPEN_END_VOID)
              return;
            let W = this._getTagContentType(i, d, this._fullNameStack.length > 0, $);
            this._handleFullNameStackForTagOpen(d, i), W === D.TagContentType.RAW_TEXT ? this._consumeRawTextWithTagClose(d, i, false) : W === D.TagContentType.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(d, i, true);
          }
          _consumeRawTextWithTagClose(u, i, d) {
            this._consumeRawText(d, () => !this._attemptCharCode(r.$LT) || !this._attemptCharCode(r.$SLASH) || (this._attemptCharCodeUntilFn(m), !this._attemptStrCaseInsensitive(u ? "".concat(u, ":").concat(i) : i)) ? false : (this._attemptCharCodeUntilFn(m), this._attemptCharCode(r.$GT)));
            this._beginToken(n.TAG_CLOSE), this._requireCharCodeUntilFn((_) => _ === r.$GT, 3), this._cursor.advance(), this._endToken([u, i]), this._handleFullNameStackForTagClose(u, i);
          }
          _consumeTagOpenStart(u) {
            this._beginToken(n.TAG_OPEN_START, u);
            let i = this._consumePrefixAndName();
            return this._endToken(i);
          }
          _consumeAttributeName() {
            let u = this._cursor.peek();
            if (u === r.$SQ || u === r.$DQ)
              throw this._createError(o(u), this._cursor.getSpan());
            this._beginToken(n.ATTR_NAME);
            let i = this._consumePrefixAndName();
            return this._endToken(i), i;
          }
          _consumeAttributeValue() {
            let u;
            if (this._cursor.peek() === r.$SQ || this._cursor.peek() === r.$DQ) {
              this._beginToken(n.ATTR_QUOTE);
              let i = this._cursor.peek();
              this._cursor.advance(), this._endToken([String.fromCodePoint(i)]), this._beginToken(n.ATTR_VALUE);
              let d = [];
              for (; this._cursor.peek() !== i; )
                d.push(this._readChar(true));
              u = this._processCarriageReturns(d.join("")), this._endToken([u]), this._beginToken(n.ATTR_QUOTE), this._cursor.advance(), this._endToken([String.fromCodePoint(i)]);
            } else {
              this._beginToken(n.ATTR_VALUE);
              let i = this._cursor.clone();
              this._requireCharCodeUntilFn(b, 1), u = this._processCarriageReturns(this._cursor.getChars(i)), this._endToken([u]);
            }
            return u;
          }
          _consumeTagOpenEnd() {
            let u = this._attemptCharCode(r.$SLASH) ? n.TAG_OPEN_END_VOID : n.TAG_OPEN_END;
            this._beginToken(u), this._requireCharCode(r.$GT), this._endToken([]);
          }
          _consumeTagClose(u) {
            if (this._beginToken(n.TAG_CLOSE, u), this._attemptCharCodeUntilFn(m), this._allowHtmComponentClosingTags && this._attemptCharCode(r.$SLASH))
              this._attemptCharCodeUntilFn(m), this._requireCharCode(r.$GT), this._endToken([]);
            else {
              let [i, d] = this._consumePrefixAndName();
              this._attemptCharCodeUntilFn(m), this._requireCharCode(r.$GT), this._endToken([i, d]), this._handleFullNameStackForTagClose(i, d);
            }
          }
          _consumeExpansionFormStart() {
            this._beginToken(n.EXPANSION_FORM_START), this._requireCharCode(r.$LBRACE), this._endToken([]), this._expansionCaseStack.push(n.EXPANSION_FORM_START), this._beginToken(n.RAW_TEXT);
            let u = this._readUntil(r.$COMMA);
            this._endToken([u]), this._requireCharCode(r.$COMMA), this._attemptCharCodeUntilFn(m), this._beginToken(n.RAW_TEXT);
            let i = this._readUntil(r.$COMMA);
            this._endToken([i]), this._requireCharCode(r.$COMMA), this._attemptCharCodeUntilFn(m);
          }
          _consumeExpansionCaseStart() {
            this._beginToken(n.EXPANSION_CASE_VALUE);
            let u = this._readUntil(r.$LBRACE).trim();
            this._endToken([u]), this._attemptCharCodeUntilFn(m), this._beginToken(n.EXPANSION_CASE_EXP_START), this._requireCharCode(r.$LBRACE), this._endToken([]), this._attemptCharCodeUntilFn(m), this._expansionCaseStack.push(n.EXPANSION_CASE_EXP_START);
          }
          _consumeExpansionCaseEnd() {
            this._beginToken(n.EXPANSION_CASE_EXP_END), this._requireCharCode(r.$RBRACE), this._endToken([]), this._attemptCharCodeUntilFn(m), this._expansionCaseStack.pop();
          }
          _consumeExpansionFormEnd() {
            this._beginToken(n.EXPANSION_FORM_END), this._requireCharCode(r.$RBRACE), this._endToken([]), this._expansionCaseStack.pop();
          }
          _consumeText() {
            let u = this._cursor.clone();
            this._beginToken(n.TEXT, u);
            let i = [];
            do
              this._interpolationConfig && this._attemptStr(this._interpolationConfig.start) ? (i.push(this._interpolationConfig.start), this._inInterpolation = true) : this._interpolationConfig && this._inInterpolation && this._attemptStr(this._interpolationConfig.end) ? (i.push(this._interpolationConfig.end), this._inInterpolation = false) : i.push(this._readChar(true));
            while (!this._isTextEnd());
            this._endToken([this._processCarriageReturns(i.join(""))]);
          }
          _isTextEnd() {
            return !!(this._cursor.peek() === r.$LT || this._cursor.peek() === r.$EOF || this._tokenizeIcu && !this._inInterpolation && (this.isExpansionFormStart() || this._cursor.peek() === r.$RBRACE && this._isInExpansionCase()));
          }
          _readUntil(u) {
            let i = this._cursor.clone();
            return this._attemptUntilChar(u), this._cursor.getChars(i);
          }
          _isInExpansionCase() {
            return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === n.EXPANSION_CASE_EXP_START;
          }
          _isInExpansionForm() {
            return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === n.EXPANSION_FORM_START;
          }
          isExpansionFormStart() {
            if (this._cursor.peek() !== r.$LBRACE)
              return false;
            if (this._interpolationConfig) {
              let u = this._cursor.clone(), i = this._attemptStr(this._interpolationConfig.start);
              return this._cursor = u, !i;
            }
            return true;
          }
          _handleFullNameStackForTagOpen(u, i) {
            let d = D.mergeNsAndName(u, i);
            (this._fullNameStack.length === 0 || this._fullNameStack[this._fullNameStack.length - 1] === d) && this._fullNameStack.push(d);
          }
          _handleFullNameStackForTagClose(u, i) {
            let d = D.mergeNsAndName(u, i);
            this._fullNameStack.length !== 0 && this._fullNameStack[this._fullNameStack.length - 1] === d && this._fullNameStack.pop();
          }
        };
        function m(u) {
          return !r.isWhitespace(u) || u === r.$EOF;
        }
        function b(u) {
          return r.isWhitespace(u) || u === r.$GT || u === r.$SLASH || u === r.$SQ || u === r.$DQ || u === r.$EQ;
        }
        function B(u) {
          return (u < r.$a || r.$z < u) && (u < r.$A || r.$Z < u) && (u < r.$0 || u > r.$9);
        }
        function v(u) {
          return u == r.$SEMICOLON || u == r.$EOF || !r.isAsciiHexDigit(u);
        }
        function O(u) {
          return u == r.$SEMICOLON || u == r.$EOF || !r.isAsciiLetter(u);
        }
        function F(u) {
          return u === r.$EQ || r.isAsciiLetter(u) || r.isDigit(u);
        }
        function x(u, i) {
          return A(u) == A(i);
        }
        function A(u) {
          return u >= r.$a && u <= r.$z ? u - r.$a + r.$A : u;
        }
        function w(u) {
          let i = [], d;
          for (let h = 0; h < u.length; h++) {
            let _ = u[h];
            d && d.type == n.TEXT && _.type == n.TEXT ? (d.parts[0] += _.parts[0], d.sourceSpan.end = _.sourceSpan.end) : (d = _, i.push(d));
          }
          return i;
        }
        var I = class {
          constructor(u, i) {
            if (u instanceof I)
              this.file = u.file, this.input = u.input, this.end = u.end, this.state = Object.assign({}, u.state);
            else {
              if (!i)
                throw new Error("Programming error: the range argument must be provided with a file argument.");
              this.file = u, this.input = u.content, this.end = i.endPos, this.state = { peek: -1, offset: i.startPos, line: i.startLine, column: i.startCol };
            }
          }
          clone() {
            return new I(this);
          }
          peek() {
            return this.state.peek;
          }
          charsLeft() {
            return this.end - this.state.offset;
          }
          diff(u) {
            return this.state.offset - u.state.offset;
          }
          advance() {
            this.advanceState(this.state);
          }
          init() {
            this.updatePeek(this.state);
          }
          getSpan(u, i) {
            if (u = u || this, i)
              for (u = u.clone(); this.diff(u) > 0 && i.indexOf(u.peek()) !== -1; )
                u.advance();
            return new t.ParseSourceSpan(new t.ParseLocation(u.file, u.state.offset, u.state.line, u.state.column), new t.ParseLocation(this.file, this.state.offset, this.state.line, this.state.column));
          }
          getChars(u) {
            return this.input.substring(u.state.offset, this.state.offset);
          }
          charAt(u) {
            return this.input.charCodeAt(u);
          }
          advanceState(u) {
            if (u.offset >= this.end)
              throw this.state = u, new j('Unexpected character "EOF"', this);
            let i = this.charAt(u.offset);
            i === r.$LF ? (u.line++, u.column = 0) : r.isNewLine(i) || u.column++, u.offset++, this.updatePeek(u);
          }
          updatePeek(u) {
            u.peek = u.offset >= this.end ? r.$EOF : this.charAt(u.offset);
          }
        }, L = class extends I {
          constructor(u, i) {
            if (u instanceof L) {
              super(u);
              this.internalState = Object.assign({}, u.internalState);
            } else {
              super(u, i);
              this.internalState = this.state;
            }
          }
          advance() {
            this.state = this.internalState, super.advance(), this.processEscapeSequence();
          }
          init() {
            super.init(), this.processEscapeSequence();
          }
          clone() {
            return new L(this);
          }
          getChars(u) {
            let i = u.clone(), d = "";
            for (; i.internalState.offset < this.internalState.offset; )
              d += String.fromCodePoint(i.peek()), i.advance();
            return d;
          }
          processEscapeSequence() {
            let u = () => this.internalState.peek;
            if (u() === r.$BACKSLASH)
              if (this.internalState = Object.assign({}, this.state), this.advanceState(this.internalState), u() === r.$n)
                this.state.peek = r.$LF;
              else if (u() === r.$r)
                this.state.peek = r.$CR;
              else if (u() === r.$v)
                this.state.peek = r.$VTAB;
              else if (u() === r.$t)
                this.state.peek = r.$TAB;
              else if (u() === r.$b)
                this.state.peek = r.$BSPACE;
              else if (u() === r.$f)
                this.state.peek = r.$FF;
              else if (u() === r.$u)
                if (this.advanceState(this.internalState), u() === r.$LBRACE) {
                  this.advanceState(this.internalState);
                  let i = this.clone(), d = 0;
                  for (; u() !== r.$RBRACE; )
                    this.advanceState(this.internalState), d++;
                  this.state.peek = this.decodeHexDigits(i, d);
                } else {
                  let i = this.clone();
                  this.advanceState(this.internalState), this.advanceState(this.internalState), this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(i, 4);
                }
              else if (u() === r.$x) {
                this.advanceState(this.internalState);
                let i = this.clone();
                this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(i, 2);
              } else if (r.isOctalDigit(u())) {
                let i = "", d = 0, h = this.clone();
                for (; r.isOctalDigit(u()) && d < 3; )
                  h = this.clone(), i += String.fromCodePoint(u()), this.advanceState(this.internalState), d++;
                this.state.peek = parseInt(i, 8), this.internalState = h.internalState;
              } else
                r.isNewLine(this.internalState.peek) ? (this.advanceState(this.internalState), this.state = this.internalState) : this.state.peek = this.internalState.peek;
          }
          decodeHexDigits(u, i) {
            let d = this.input.substr(u.internalState.offset, i), h = parseInt(d, 16);
            if (isNaN(h))
              throw u.state = u.internalState, new j("Invalid hexadecimal escape sequence", u);
            return h;
          }
        }, j = class {
          constructor(u, i) {
            this.msg = u, this.cursor = i;
          }
        };
        e.CursorError = j;
      } }), ns = R({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/parser.js"(e) {
        P(), Object.defineProperty(e, "__esModule", { value: true });
        var r = ye(), t = Cs(), a = TD(), D = Ke(), n = class extends r.ParseError {
          constructor(s, o, l) {
            super(o, l);
            this.elementName = s;
          }
          static create(s, o, l) {
            return new n(s, o, l);
          }
        };
        e.TreeError = n;
        var c = class {
          constructor(s, o) {
            this.rootNodes = s, this.errors = o;
          }
        };
        e.ParseTreeResult = c;
        var E = class {
          constructor(s) {
            this.getTagDefinition = s;
          }
          parse(s, o, l) {
            let C = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false, f = arguments.length > 4 ? arguments[4] : void 0, m = (I) => function(L) {
              for (var j = arguments.length, u = new Array(j > 1 ? j - 1 : 0), i = 1; i < j; i++)
                u[i - 1] = arguments[i];
              return I(L.toLowerCase(), ...u);
            }, b = C ? this.getTagDefinition : m(this.getTagDefinition), B = (I) => b(I).contentType, v = C ? f : m(f), O = f ? (I, L, j, u) => {
              let i = v(I, L, j, u);
              return i !== void 0 ? i : B(I);
            } : B, F = a.tokenize(s, o, O, l), x = l && l.canSelfClose || false, A = l && l.allowHtmComponentClosingTags || false, w = new p(F.tokens, b, x, A, C).build();
            return new c(w.rootNodes, F.errors.concat(w.errors));
          }
        };
        e.Parser = E;
        var p = class {
          constructor(s, o, l, C, f) {
            this.tokens = s, this.getTagDefinition = o, this.canSelfClose = l, this.allowHtmComponentClosingTags = C, this.isTagNameCaseSensitive = f, this._index = -1, this._rootNodes = [], this._errors = [], this._elementStack = [], this._advance();
          }
          build() {
            for (; this._peek.type !== a.TokenType.EOF; )
              this._peek.type === a.TokenType.TAG_OPEN_START ? this._consumeStartTag(this._advance()) : this._peek.type === a.TokenType.TAG_CLOSE ? (this._closeVoidElement(), this._consumeEndTag(this._advance())) : this._peek.type === a.TokenType.CDATA_START ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === a.TokenType.COMMENT_START ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === a.TokenType.TEXT || this._peek.type === a.TokenType.RAW_TEXT || this._peek.type === a.TokenType.ESCAPABLE_RAW_TEXT ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === a.TokenType.EXPANSION_FORM_START ? this._consumeExpansion(this._advance()) : this._peek.type === a.TokenType.DOC_TYPE_START ? this._consumeDocType(this._advance()) : this._advance();
            return new c(this._rootNodes, this._errors);
          }
          _advance() {
            let s = this._peek;
            return this._index < this.tokens.length - 1 && this._index++, this._peek = this.tokens[this._index], s;
          }
          _advanceIf(s) {
            return this._peek.type === s ? this._advance() : null;
          }
          _consumeCdata(s) {
            let o = this._advance(), l = this._getText(o), C = this._advanceIf(a.TokenType.CDATA_END);
            this._addToParent(new t.CDATA(l, new r.ParseSourceSpan(s.sourceSpan.start, (C || o).sourceSpan.end)));
          }
          _consumeComment(s) {
            let o = this._advanceIf(a.TokenType.RAW_TEXT), l = this._advanceIf(a.TokenType.COMMENT_END), C = o != null ? o.parts[0].trim() : null, f = new r.ParseSourceSpan(s.sourceSpan.start, (l || o || s).sourceSpan.end);
            this._addToParent(new t.Comment(C, f));
          }
          _consumeDocType(s) {
            let o = this._advanceIf(a.TokenType.RAW_TEXT), l = this._advanceIf(a.TokenType.DOC_TYPE_END), C = o != null ? o.parts[0].trim() : null, f = new r.ParseSourceSpan(s.sourceSpan.start, (l || o || s).sourceSpan.end);
            this._addToParent(new t.DocType(C, f));
          }
          _consumeExpansion(s) {
            let o = this._advance(), l = this._advance(), C = [];
            for (; this._peek.type === a.TokenType.EXPANSION_CASE_VALUE; ) {
              let m = this._parseExpansionCase();
              if (!m)
                return;
              C.push(m);
            }
            if (this._peek.type !== a.TokenType.EXPANSION_FORM_END) {
              this._errors.push(n.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
              return;
            }
            let f = new r.ParseSourceSpan(s.sourceSpan.start, this._peek.sourceSpan.end);
            this._addToParent(new t.Expansion(o.parts[0], l.parts[0], C, f, o.sourceSpan)), this._advance();
          }
          _parseExpansionCase() {
            let s = this._advance();
            if (this._peek.type !== a.TokenType.EXPANSION_CASE_EXP_START)
              return this._errors.push(n.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null;
            let o = this._advance(), l = this._collectExpansionExpTokens(o);
            if (!l)
              return null;
            let C = this._advance();
            l.push(new a.Token(a.TokenType.EOF, [], C.sourceSpan));
            let f = new p(l, this.getTagDefinition, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive).build();
            if (f.errors.length > 0)
              return this._errors = this._errors.concat(f.errors), null;
            let m = new r.ParseSourceSpan(s.sourceSpan.start, C.sourceSpan.end), b = new r.ParseSourceSpan(o.sourceSpan.start, C.sourceSpan.end);
            return new t.ExpansionCase(s.parts[0], f.rootNodes, m, s.sourceSpan, b);
          }
          _collectExpansionExpTokens(s) {
            let o = [], l = [a.TokenType.EXPANSION_CASE_EXP_START];
            for (; ; ) {
              if ((this._peek.type === a.TokenType.EXPANSION_FORM_START || this._peek.type === a.TokenType.EXPANSION_CASE_EXP_START) && l.push(this._peek.type), this._peek.type === a.TokenType.EXPANSION_CASE_EXP_END)
                if (g(l, a.TokenType.EXPANSION_CASE_EXP_START)) {
                  if (l.pop(), l.length == 0)
                    return o;
                } else
                  return this._errors.push(n.create(null, s.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
              if (this._peek.type === a.TokenType.EXPANSION_FORM_END)
                if (g(l, a.TokenType.EXPANSION_FORM_START))
                  l.pop();
                else
                  return this._errors.push(n.create(null, s.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
              if (this._peek.type === a.TokenType.EOF)
                return this._errors.push(n.create(null, s.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
              o.push(this._advance());
            }
          }
          _getText(s) {
            let o = s.parts[0];
            if (o.length > 0 && o[0] == `
`) {
              let l = this._getParentElement();
              l != null && l.children.length == 0 && this.getTagDefinition(l.name).ignoreFirstLf && (o = o.substring(1));
            }
            return o;
          }
          _consumeText(s) {
            let o = this._getText(s);
            o.length > 0 && this._addToParent(new t.Text(o, s.sourceSpan));
          }
          _closeVoidElement() {
            let s = this._getParentElement();
            s && this.getTagDefinition(s.name).isVoid && this._elementStack.pop();
          }
          _consumeStartTag(s) {
            let o = s.parts[0], l = s.parts[1], C = [];
            for (; this._peek.type === a.TokenType.ATTR_NAME; )
              C.push(this._consumeAttr(this._advance()));
            let f = this._getElementFullName(o, l, this._getParentElement()), m = false;
            if (this._peek.type === a.TokenType.TAG_OPEN_END_VOID) {
              this._advance(), m = true;
              let F = this.getTagDefinition(f);
              this.canSelfClose || F.canSelfClose || D.getNsPrefix(f) !== null || F.isVoid || this._errors.push(n.create(f, s.sourceSpan, 'Only void and foreign elements can be self closed "'.concat(s.parts[1], '"')));
            } else
              this._peek.type === a.TokenType.TAG_OPEN_END && (this._advance(), m = false);
            let b = this._peek.sourceSpan.start, B = new r.ParseSourceSpan(s.sourceSpan.start, b), v = new r.ParseSourceSpan(s.sourceSpan.start.moveBy(1), s.sourceSpan.end), O = new t.Element(f, C, [], B, B, void 0, v);
            this._pushElement(O), m && (this._popElement(f), O.endSourceSpan = B);
          }
          _pushElement(s) {
            let o = this._getParentElement();
            o && this.getTagDefinition(o.name).isClosedByChild(s.name) && this._elementStack.pop(), this._addToParent(s), this._elementStack.push(s);
          }
          _consumeEndTag(s) {
            let o = this.allowHtmComponentClosingTags && s.parts.length === 0 ? null : this._getElementFullName(s.parts[0], s.parts[1], this._getParentElement());
            if (this._getParentElement() && (this._getParentElement().endSourceSpan = s.sourceSpan), o && this.getTagDefinition(o).isVoid)
              this._errors.push(n.create(o, s.sourceSpan, 'Void elements do not have end tags "'.concat(s.parts[1], '"')));
            else if (!this._popElement(o)) {
              let l = 'Unexpected closing tag "'.concat(o, '". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags');
              this._errors.push(n.create(o, s.sourceSpan, l));
            }
          }
          _popElement(s) {
            for (let o = this._elementStack.length - 1; o >= 0; o--) {
              let l = this._elementStack[o];
              if (!s || (D.getNsPrefix(l.name) ? l.name == s : l.name.toLowerCase() == s.toLowerCase()))
                return this._elementStack.splice(o, this._elementStack.length - o), true;
              if (!this.getTagDefinition(l.name).closedByParent)
                return false;
            }
            return false;
          }
          _consumeAttr(s) {
            let o = D.mergeNsAndName(s.parts[0], s.parts[1]), l = s.sourceSpan.end, C = "", f, m;
            if (this._peek.type === a.TokenType.ATTR_QUOTE && (m = this._advance().sourceSpan.start), this._peek.type === a.TokenType.ATTR_VALUE) {
              let b = this._advance();
              C = b.parts[0], l = b.sourceSpan.end, f = b.sourceSpan;
            }
            return this._peek.type === a.TokenType.ATTR_QUOTE && (l = this._advance().sourceSpan.end, f = new r.ParseSourceSpan(m, l)), new t.Attribute(o, C, new r.ParseSourceSpan(s.sourceSpan.start, l), f, s.sourceSpan);
          }
          _getParentElement() {
            return this._elementStack.length > 0 ? this._elementStack[this._elementStack.length - 1] : null;
          }
          _getParentElementSkippingContainers() {
            let s = null;
            for (let o = this._elementStack.length - 1; o >= 0; o--) {
              if (!D.isNgContainer(this._elementStack[o].name))
                return { parent: this._elementStack[o], container: s };
              s = this._elementStack[o];
            }
            return { parent: null, container: s };
          }
          _addToParent(s) {
            let o = this._getParentElement();
            o != null ? o.children.push(s) : this._rootNodes.push(s);
          }
          _insertBeforeContainer(s, o, l) {
            if (!o)
              this._addToParent(l), this._elementStack.push(l);
            else {
              if (s) {
                let C = s.children.indexOf(o);
                s.children[C] = l;
              } else
                this._rootNodes.push(l);
              l.children.push(o), this._elementStack.splice(this._elementStack.indexOf(o), 0, l);
            }
          }
          _getElementFullName(s, o, l) {
            return s === "" && (s = this.getTagDefinition(o).implicitNamespacePrefix || "", s === "" && l != null && (s = D.getNsPrefix(l.name))), D.mergeNsAndName(s, o);
          }
        };
        function g(s, o) {
          return s.length > 0 && s[s.length - 1] === o;
        }
      } }), bD = R({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/html_parser.js"(e) {
        P(), Object.defineProperty(e, "__esModule", { value: true });
        var r = ds(), t = ns(), a = ns();
        e.ParseTreeResult = a.ParseTreeResult, e.TreeError = a.TreeError;
        var D = class extends t.Parser {
          constructor() {
            super(r.getHtmlTagDefinition);
          }
          parse(n, c, E) {
            let p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false, g = arguments.length > 4 ? arguments[4] : void 0;
            return super.parse(n, c, E, p, g);
          }
        };
        e.HtmlParser = D;
      } }), ms = R({ "node_modules/angular-html-parser/lib/angular-html-parser/src/index.js"(e) {
        P(), Object.defineProperty(e, "__esModule", { value: true });
        var r = bD(), t = Ke();
        e.TagContentType = t.TagContentType;
        var a = null, D = () => (a || (a = new r.HtmlParser()), a);
        function n(c) {
          let E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { canSelfClose: p = false, allowHtmComponentClosingTags: g = false, isTagNameCaseSensitive: s = false, getTagContentType: o } = E;
          return D().parse(c, "angular-html-parser", { tokenizeExpansionForms: false, interpolationConfig: void 0, canSelfClose: p, allowHtmComponentClosingTags: g }, s, o);
        }
        e.parse = n;
      } });
      P();
      var { ParseSourceSpan: Ye, ParseLocation: ss, ParseSourceFile: BD } = ye(), wD = Yc(), ND = Mr(), OD = Qc(), { inferParserByLanguage: qD } = fs(), ID = fD(), Lr = CD(), as = mD(), { hasPragma: RD } = gD(), { Node: xD } = FD(), { parseIeConditionalComment: PD } = AD(), { locStart: kD, locEnd: LD } = vD();
      function MD(e, r, t) {
        let { recognizeSelfClosing: a, normalizeTagName: D, normalizeAttributeName: n, allowHtmComponentClosingTags: c, isTagNameCaseSensitive: E, getTagContentType: p } = r, g = ms(), { RecursiveVisitor: s, visitAll: o } = Cs(), { ParseSourceSpan: l } = ye(), { getHtmlTagDefinition: C } = ds(), { rootNodes: f, errors: m } = g.parse(e, { canSelfClose: a, allowHtmComponentClosingTags: c, isTagNameCaseSensitive: E, getTagContentType: p });
        if (t.parser === "vue")
          if (f.some((w) => w.type === "docType" && w.value === "html" || w.type === "element" && w.name.toLowerCase() === "html")) {
            a = true, D = true, n = true, c = true, E = false;
            let w = g.parse(e, { canSelfClose: a, allowHtmComponentClosingTags: c, isTagNameCaseSensitive: E });
            f = w.rootNodes, m = w.errors;
          } else {
            let w = (I) => {
              if (!I || I.type !== "element" || I.name !== "template")
                return false;
              let L = I.attrs.find((u) => u.name === "lang"), j = L && L.value;
              return !j || qD(j, t) === "html";
            };
            if (f.some(w)) {
              let I, L = () => g.parse(e, { canSelfClose: a, allowHtmComponentClosingTags: c, isTagNameCaseSensitive: E }), j = () => I || (I = L()), u = (i) => j().rootNodes.find((d) => {
                let { startSourceSpan: h } = d;
                return h && h.start.offset === i.startSourceSpan.start.offset;
              });
              for (let i = 0; i < f.length; i++) {
                let d = f[i], { endSourceSpan: h, startSourceSpan: _ } = d;
                if (h === null)
                  m = j().errors, f[i] = u(d) || d;
                else if (w(d)) {
                  let $ = j(), W = _.end.offset, X = h.start.offset;
                  for (let H of $.errors) {
                    let { offset: z } = H.span.start;
                    if (W < z && z < X) {
                      m = [H];
                      break;
                    }
                  }
                  f[i] = u(d) || d;
                }
              }
            }
          }
        if (m.length > 0) {
          let { msg: A, span: { start: w, end: I } } = m[0];
          throw OD(A, { start: { line: w.line + 1, column: w.col + 1 }, end: { line: I.line + 1, column: I.col + 1 } });
        }
        let b = (A) => {
          let w = A.name.startsWith(":") ? A.name.slice(1).split(":")[0] : null, I = A.nameSpan.toString(), L = w !== null && I.startsWith("".concat(w, ":")), j = L ? I.slice(w.length + 1) : I;
          A.name = j, A.namespace = w, A.hasExplicitNamespace = L;
        }, B = (A) => {
          switch (A.type) {
            case "element":
              b(A);
              for (let w of A.attrs)
                b(w), w.valueSpan ? (w.value = w.valueSpan.toString(), /["']/.test(w.value[0]) && (w.value = w.value.slice(1, -1))) : w.value = null;
              break;
            case "comment":
              A.value = A.sourceSpan.toString().slice(4, -3);
              break;
            case "text":
              A.value = A.sourceSpan.toString();
              break;
          }
        }, v = (A, w) => {
          let I = A.toLowerCase();
          return w(I) ? I : A;
        }, O = (A) => {
          if (A.type === "element" && (D && (!A.namespace || A.namespace === A.tagDefinition.implicitNamespacePrefix || as(A)) && (A.name = v(A.name, (w) => w in ID)), n)) {
            let w = Lr[A.name] || /* @__PURE__ */ Object.create(null);
            for (let I of A.attrs)
              I.namespace || (I.name = v(I.name, (L) => A.name in Lr && (L in Lr["*"] || L in w)));
          }
        }, F = (A) => {
          A.sourceSpan && A.endSourceSpan && (A.sourceSpan = new l(A.sourceSpan.start, A.endSourceSpan.end));
        }, x = (A) => {
          if (A.type === "element") {
            let w = C(E ? A.name : A.name.toLowerCase());
            !A.namespace || A.namespace === w.implicitNamespacePrefix || as(A) ? A.tagDefinition = w : A.tagDefinition = C("");
          }
        };
        return o(new class extends s {
          visit(A) {
            B(A), x(A), O(A), F(A);
          }
        }(), f), f;
      }
      function gs(e, r, t) {
        let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, { frontMatter: D, content: n } = a ? wD(e) : { frontMatter: null, content: e }, c = new BD(e, r.filepath), E = new ss(c, 0, 0, 0), p = E.moveBy(e.length), g = { type: "root", sourceSpan: new Ye(E, p), children: MD(n, t, r) };
        if (D) {
          let l = new ss(c, 0, 0, 0), C = l.moveBy(D.raw.length);
          D.sourceSpan = new Ye(l, C), g.children.unshift(D);
        }
        let s = new xD(g), o = (l, C) => {
          let { offset: f } = C, m = e.slice(0, f).replace(/[^\n\r]/g, " "), B = gs(m + l, r, t, false);
          B.sourceSpan = new Ye(C, ND(B.children).sourceSpan.end);
          let v = B.children[0];
          return v.length === f ? B.children.shift() : (v.sourceSpan = new Ye(v.sourceSpan.start.moveBy(f), v.sourceSpan.end), v.value = v.value.slice(f)), B;
        };
        return s.walk((l) => {
          if (l.type === "comment") {
            let C = PD(l, o);
            C && l.parent.replaceChild(l, C);
          }
        }), s;
      }
      function Qe() {
        let { name: e, recognizeSelfClosing: r = false, normalizeTagName: t = false, normalizeAttributeName: a = false, allowHtmComponentClosingTags: D = false, isTagNameCaseSensitive: n = false, getTagContentType: c } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return { parse: (E, p, g) => gs(E, Object.assign({ parser: e }, g), { recognizeSelfClosing: r, normalizeTagName: t, normalizeAttributeName: a, allowHtmComponentClosingTags: D, isTagNameCaseSensitive: n, getTagContentType: c }), hasPragma: RD, astFormat: "html", locStart: kD, locEnd: LD };
      }
      Fs.exports = { parsers: { html: Qe({ name: "html", recognizeSelfClosing: true, normalizeTagName: true, normalizeAttributeName: true, allowHtmComponentClosingTags: true }), angular: Qe({ name: "angular" }), vue: Qe({ name: "vue", recognizeSelfClosing: true, isTagNameCaseSensitive: true, getTagContentType: (e, r, t, a) => {
        if (e.toLowerCase() !== "html" && !t && (e !== "template" || a.some((D) => {
          let { name: n, value: c } = D;
          return n === "lang" && c !== "html" && c !== "" && c !== void 0;
        })))
          return ms().TagContentType.RAW_TEXT;
      } }), lwc: Qe({ name: "lwc" }) } };
    });
    return jD();
  });
})(parserHtml$2);
var parserHtml = /* @__PURE__ */ getDefaultExportFromCjs(parserHtml$2.exports);
var parserHtml$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  "default": parserHtml
}, [parserHtml$2.exports]);

export { parserHtml$1 as p };
//# sourceMappingURL=parser-html.mjs.map
