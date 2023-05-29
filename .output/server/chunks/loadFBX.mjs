import { y as forceGet, a0 as cloneSkinnedMesh, a1 as Loader, a2 as LoaderUtils, a3 as FileLoader, a4 as TextureLoader, a5 as RepeatWrapping, a6 as ClampToEdgeWrapping, a7 as Texture, a8 as MeshPhongMaterial, a9 as MeshLambertMaterial, aa as Color, ab as sRGBEncoding, ac as EquirectangularReflectionMapping, a as Matrix4, G as Group$1, ad as Bone, ae as PropertyBinding, O as Object3D, af as OrthographicCamera, ag as PerspectiveCamera, ah as PointLight$1, ai as MathUtils, aj as SpotLight$1, ak as DirectionalLight$1, al as SkinnedMesh, M as Mesh, b as LineBasicMaterial, K as Line, V as Vector3, am as Skeleton, an as AmbientLight$1, g as BufferGeometry, I as Float32BufferAttribute, ao as Uint16BufferAttribute, ap as Matrix3, aq as Vector4, ar as AnimationClip, X as Euler, as as VectorKeyframeTrack, Q as Quaternion, at as QuaternionKeyframeTrack, au as NumberKeyframeTrack, av as increaseLoadingCount, aw as decreaseLoadingCount, ax as LinearEncoding, ay as handleProgress, az as Curve } from './app/_nuxt/model-9bf70e2c.mjs';
import 'vue';
import 'vue/server-renderer';

/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/
var ch2 = {};
var durl = function(c) {
  return URL.createObjectURL(new Blob([c], { type: "text/javascript" }));
};
var cwk = function(u) {
  return new Worker(u);
};
try {
  URL.revokeObjectURL(durl(""));
} catch (e) {
  durl = function(c) {
    return "data:application/javascript;charset=UTF-8," + encodeURI(c);
  };
  cwk = function(u) {
    return new Worker(u, { type: "module" });
  };
}
var wk = function(c, id, msg, transfer, cb) {
  var w = cwk(ch2[id] || (ch2[id] = durl(c)));
  w.onerror = function(e) {
    return cb(e.error, null);
  };
  w.onmessage = function(e) {
    return cb(null, e.data);
  };
  w.postMessage(msg, transfer);
  return w;
};
var u8 = Uint8Array, u16 = Uint16Array, u32 = Uint32Array;
var fleb = new u8([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]);
var fdeb = new u8([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b = new u16(31);
  for (var i = 0; i < 31; ++i) {
    b[i] = start += 1 << eb[i - 1];
  }
  var r = new u32(b[30]);
  for (var i = 1; i < 30; ++i) {
    for (var j = b[i]; j < b[i + 1]; ++j) {
      r[j] = j - b[i] << 5 | i;
    }
  }
  return [b, r];
};
var _a = freb(fleb, 2), fl = _a[0], revfl = _a[1];
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b[0], revfd = _b[1];
var rev = new u16(32768);
for (var i = 0; i < 32768; ++i) {
  var x = (i & 43690) >>> 1 | (i & 21845) << 1;
  x = (x & 52428) >>> 2 | (x & 13107) << 2;
  x = (x & 61680) >>> 4 | (x & 3855) << 4;
  rev[i] = ((x & 65280) >>> 8 | (x & 255) << 8) >>> 1;
}
var hMap = function(cd, mb, r) {
  var s = cd.length;
  var i = 0;
  var l = new u16(mb);
  for (; i < s; ++i)
    ++l[cd[i] - 1];
  var le = new u16(mb);
  for (i = 0; i < mb; ++i) {
    le[i] = le[i - 1] + l[i - 1] << 1;
  }
  var co;
  if (r) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i = 0; i < s; ++i) {
      if (cd[i]) {
        var sv = i << 4 | cd[i];
        var r_1 = mb - cd[i];
        var v = le[cd[i] - 1]++ << r_1;
        for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
          co[rev[v] >>> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s);
    for (i = 0; i < s; ++i) {
      if (cd[i]) {
        co[i] = rev[le[cd[i] - 1]++] >>> 15 - cd[i];
      }
    }
  }
  return co;
};
var flt = new u8(288);
for (var i = 0; i < 144; ++i)
  flt[i] = 8;
for (var i = 144; i < 256; ++i)
  flt[i] = 9;
for (var i = 256; i < 280; ++i)
  flt[i] = 7;
for (var i = 280; i < 288; ++i)
  flt[i] = 8;
var fdt = new u8(32);
for (var i = 0; i < 32; ++i)
  fdt[i] = 5;
var flm = /* @__PURE__ */ hMap(flt, 9, 0), flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdm = /* @__PURE__ */ hMap(fdt, 5, 0), fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a) {
  var m = a[0];
  for (var i = 1; i < a.length; ++i) {
    if (a[i] > m)
      m = a[i];
  }
  return m;
};
var bits = function(d, p, m) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
};
var bits16 = function(d, p) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
};
var shft = function(p) {
  return (p / 8 | 0) + (p & 7 && 1);
};
var slc = function(v, s, e) {
  if (s == null || s < 0)
    s = 0;
  if (e == null || e > v.length)
    e = v.length;
  var n = new (v instanceof u16 ? u16 : v instanceof u32 ? u32 : u8)(e - s);
  n.set(v.subarray(s, e));
  return n;
};
var inflt = function(dat, buf, st) {
  var sl = dat.length;
  if (!sl || st && !st.l && sl < 5)
    return buf || new u8(0);
  var noBuf = !buf || st;
  var noSt = !st || st.i;
  if (!st)
    st = {};
  if (!buf)
    buf = new u8(sl * 3);
  var cbuf = function(l2) {
    var bl = buf.length;
    if (l2 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l2));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
  var tbts = sl * 8;
  do {
    if (!lm) {
      st.f = final = bits(dat, pos, 1);
      var type = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type) {
        var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
        if (t > sl) {
          if (noSt)
            throw "unexpected EOF";
          break;
        }
        if (noBuf)
          cbuf(bt + l);
        buf.set(dat.subarray(s, t), bt);
        st.b = bt += l, st.p = pos = t * 8;
        continue;
      } else if (type == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl);
        var clt = new u8(19);
        for (var i = 0; i < hcLen; ++i) {
          clt[clim[i]] = bits(dat, pos + i * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i = 0; i < tl; ) {
          var r = clm[bits(dat, pos, clbmsk)];
          pos += r & 15;
          var s = r >>> 4;
          if (s < 16) {
            ldt[i++] = s;
          } else {
            var c = 0, n = 0;
            if (s == 16)
              n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
            else if (s == 17)
              n = 3 + bits(dat, pos, 7), pos += 3;
            else if (s == 18)
              n = 11 + bits(dat, pos, 127), pos += 7;
            while (n--)
              ldt[i++] = c;
          }
        }
        var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt);
        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        throw "invalid block type";
      if (pos > tbts) {
        if (noSt)
          throw "unexpected EOF";
        break;
      }
    }
    if (noBuf)
      cbuf(bt + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c = lm[bits16(dat, pos) & lms], sym = c >>> 4;
      pos += c & 15;
      if (pos > tbts) {
        if (noSt)
          throw "unexpected EOF";
        break;
      }
      if (!c)
        throw "invalid length/literal";
      if (sym < 256)
        buf[bt++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i = sym - 257, b = fleb[i];
          add = bits(dat, pos, (1 << b) - 1) + fl[i];
          pos += b;
        }
        var d = dm[bits16(dat, pos) & dms], dsym = d >>> 4;
        if (!d)
          throw "invalid distance";
        pos += d & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
        }
        if (pos > tbts) {
          if (noSt)
            throw "unexpected EOF";
          break;
        }
        if (noBuf)
          cbuf(bt + 131072);
        var end = bt + add;
        for (; bt < end; bt += 4) {
          buf[bt] = buf[bt - dt];
          buf[bt + 1] = buf[bt + 1 - dt];
          buf[bt + 2] = buf[bt + 2 - dt];
          buf[bt + 3] = buf[bt + 3 - dt];
        }
        bt = end;
      }
    }
    st.l = lm, st.p = lpos, st.b = bt;
    if (lm)
      final = 1, st.m = lbt, st.d = dm, st.n = dbt;
  } while (!final);
  return bt == buf.length ? buf : slc(buf, 0, bt);
};
var wbits = function(d, p, v) {
  v <<= p & 7;
  var o = p / 8 | 0;
  d[o] |= v;
  d[o + 1] |= v >>> 8;
};
var wbits16 = function(d, p, v) {
  v <<= p & 7;
  var o = p / 8 | 0;
  d[o] |= v;
  d[o + 1] |= v >>> 8;
  d[o + 2] |= v >>> 16;
};
var hTree = function(d, mb) {
  var t = [];
  for (var i = 0; i < d.length; ++i) {
    if (d[i])
      t.push({ s: i, f: d[i] });
  }
  var s = t.length;
  var t2 = t.slice();
  if (!s)
    return [et, 0];
  if (s == 1) {
    var v = new u8(t[0].s + 1);
    v[t[0].s] = 1;
    return [v, 1];
  }
  t.sort(function(a, b) {
    return a.f - b.f;
  });
  t.push({ s: -1, f: 25001 });
  var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
  t[0] = { s: -1, f: l.f + r.f, l, r };
  while (i1 != s - 1) {
    l = t[t[i0].f < t[i2].f ? i0++ : i2++];
    r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
    t[i1++] = { s: -1, f: l.f + r.f, l, r };
  }
  var maxSym = t2[0].s;
  for (var i = 1; i < s; ++i) {
    if (t2[i].s > maxSym)
      maxSym = t2[i].s;
  }
  var tr = new u16(maxSym + 1);
  var mbt = ln(t[i1 - 1], tr, 0);
  if (mbt > mb) {
    var i = 0, dt = 0;
    var lft = mbt - mb, cst = 1 << lft;
    t2.sort(function(a, b) {
      return tr[b.s] - tr[a.s] || a.f - b.f;
    });
    for (; i < s; ++i) {
      var i2_1 = t2[i].s;
      if (tr[i2_1] > mb) {
        dt += cst - (1 << mbt - tr[i2_1]);
        tr[i2_1] = mb;
      } else
        break;
    }
    dt >>>= lft;
    while (dt > 0) {
      var i2_2 = t2[i].s;
      if (tr[i2_2] < mb)
        dt -= 1 << mb - tr[i2_2]++ - 1;
      else
        ++i;
    }
    for (; i >= 0 && dt; --i) {
      var i2_3 = t2[i].s;
      if (tr[i2_3] == mb) {
        --tr[i2_3];
        ++dt;
      }
    }
    mbt = mb;
  }
  return [new u8(tr), mbt];
};
var ln = function(n, l, d) {
  return n.s == -1 ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1)) : l[n.s] = d;
};
var lc = function(c) {
  var s = c.length;
  while (s && !c[--s])
    ;
  var cl = new u16(++s);
  var cli = 0, cln = c[0], cls = 1;
  var w = function(v) {
    cl[cli++] = v;
  };
  for (var i = 1; i <= s; ++i) {
    if (c[i] == cln && i != s)
      ++cls;
    else {
      if (!cln && cls > 2) {
        for (; cls > 138; cls -= 138)
          w(32754);
        if (cls > 2) {
          w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
          cls = 0;
        }
      } else if (cls > 3) {
        w(cln), --cls;
        for (; cls > 6; cls -= 6)
          w(8304);
        if (cls > 2)
          w(cls - 3 << 5 | 8208), cls = 0;
      }
      while (cls--)
        w(cln);
      cls = 1;
      cln = c[i];
    }
  }
  return [cl.subarray(0, cli), s];
};
var clen = function(cf, cl) {
  var l = 0;
  for (var i = 0; i < cl.length; ++i)
    l += cf[i] * cl[i];
  return l;
};
var wfblk = function(out, pos, dat) {
  var s = dat.length;
  var o = shft(pos + 2);
  out[o] = s & 255;
  out[o + 1] = s >>> 8;
  out[o + 2] = out[o] ^ 255;
  out[o + 3] = out[o + 1] ^ 255;
  for (var i = 0; i < s; ++i)
    out[o + i + 4] = dat[i];
  return (o + 4 + s) * 8;
};
var wblk = function(dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
  wbits(out, p++, final);
  ++lf[256];
  var _a2 = hTree(lf, 15), dlt = _a2[0], mlb = _a2[1];
  var _b2 = hTree(df, 15), ddt = _b2[0], mdb = _b2[1];
  var _c = lc(dlt), lclt = _c[0], nlc = _c[1];
  var _d = lc(ddt), lcdt = _d[0], ndc = _d[1];
  var lcfreq = new u16(19);
  for (var i = 0; i < lclt.length; ++i)
    lcfreq[lclt[i] & 31]++;
  for (var i = 0; i < lcdt.length; ++i)
    lcfreq[lcdt[i] & 31]++;
  var _e = hTree(lcfreq, 7), lct = _e[0], mlcb = _e[1];
  var nlcc = 19;
  for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc)
    ;
  var flen = bl + 5 << 3;
  var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
  var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + (2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18]);
  if (flen <= ftlen && flen <= dtlen)
    return wfblk(out, p, dat.subarray(bs, bs + bl));
  var lm, ll, dm, dl;
  wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
  if (dtlen < ftlen) {
    lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
    var llm = hMap(lct, mlcb, 0);
    wbits(out, p, nlc - 257);
    wbits(out, p + 5, ndc - 1);
    wbits(out, p + 10, nlcc - 4);
    p += 14;
    for (var i = 0; i < nlcc; ++i)
      wbits(out, p + 3 * i, lct[clim[i]]);
    p += 3 * nlcc;
    var lcts = [lclt, lcdt];
    for (var it = 0; it < 2; ++it) {
      var clct = lcts[it];
      for (var i = 0; i < clct.length; ++i) {
        var len = clct[i] & 31;
        wbits(out, p, llm[len]), p += lct[len];
        if (len > 15)
          wbits(out, p, clct[i] >>> 5 & 127), p += clct[i] >>> 12;
      }
    }
  } else {
    lm = flm, ll = flt, dm = fdm, dl = fdt;
  }
  for (var i = 0; i < li; ++i) {
    if (syms[i] > 255) {
      var len = syms[i] >>> 18 & 31;
      wbits16(out, p, lm[len + 257]), p += ll[len + 257];
      if (len > 7)
        wbits(out, p, syms[i] >>> 23 & 31), p += fleb[len];
      var dst = syms[i] & 31;
      wbits16(out, p, dm[dst]), p += dl[dst];
      if (dst > 3)
        wbits16(out, p, syms[i] >>> 5 & 8191), p += fdeb[dst];
    } else {
      wbits16(out, p, lm[syms[i]]), p += ll[syms[i]];
    }
  }
  wbits16(out, p, lm[256]);
  return p + ll[256];
};
var deo = /* @__PURE__ */ new u32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
var et = /* @__PURE__ */ new u8(0);
var dflt = function(dat, lvl, plvl, pre, post, lst) {
  var s = dat.length;
  var o = new u8(pre + s + 5 * (1 + Math.ceil(s / 7e3)) + post);
  var w = o.subarray(pre, o.length - post);
  var pos = 0;
  if (!lvl || s < 8) {
    for (var i = 0; i <= s; i += 65535) {
      var e = i + 65535;
      if (e < s) {
        pos = wfblk(w, pos, dat.subarray(i, e));
      } else {
        w[i] = lst;
        pos = wfblk(w, pos, dat.subarray(i, s));
      }
    }
  } else {
    var opt = deo[lvl - 1];
    var n = opt >>> 13, c = opt & 8191;
    var msk_1 = (1 << plvl) - 1;
    var prev = new u16(32768), head = new u16(msk_1 + 1);
    var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
    var hsh = function(i2) {
      return (dat[i2] ^ dat[i2 + 1] << bs1_1 ^ dat[i2 + 2] << bs2_1) & msk_1;
    };
    var syms = new u32(25e3);
    var lf = new u16(288), df = new u16(32);
    var lc_1 = 0, eb = 0, i = 0, li = 0, wi = 0, bs = 0;
    for (; i < s; ++i) {
      var hv = hsh(i);
      var imod = i & 32767, pimod = head[hv];
      prev[imod] = pimod;
      head[hv] = imod;
      if (wi <= i) {
        var rem = s - i;
        if ((lc_1 > 7e3 || li > 24576) && rem > 423) {
          pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
          li = lc_1 = eb = 0, bs = i;
          for (var j = 0; j < 286; ++j)
            lf[j] = 0;
          for (var j = 0; j < 30; ++j)
            df[j] = 0;
        }
        var l = 2, d = 0, ch_1 = c, dif = imod - pimod & 32767;
        if (rem > 2 && hv == hsh(i - dif)) {
          var maxn = Math.min(n, rem) - 1;
          var maxd = Math.min(32767, i);
          var ml = Math.min(258, rem);
          while (dif <= maxd && --ch_1 && imod != pimod) {
            if (dat[i + l] == dat[i + l - dif]) {
              var nl = 0;
              for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl)
                ;
              if (nl > l) {
                l = nl, d = dif;
                if (nl > maxn)
                  break;
                var mmd = Math.min(dif, nl - 2);
                var md = 0;
                for (var j = 0; j < mmd; ++j) {
                  var ti = i - dif + j + 32768 & 32767;
                  var pti = prev[ti];
                  var cd = ti - pti + 32768 & 32767;
                  if (cd > md)
                    md = cd, pimod = ti;
                }
              }
            }
            imod = pimod, pimod = prev[imod];
            dif += imod - pimod + 32768 & 32767;
          }
        }
        if (d) {
          syms[li++] = 268435456 | revfl[l] << 18 | revfd[d];
          var lin = revfl[l] & 31, din = revfd[d] & 31;
          eb += fleb[lin] + fdeb[din];
          ++lf[257 + lin];
          ++df[din];
          wi = i + l;
          ++lc_1;
        } else {
          syms[li++] = dat[i];
          ++lf[dat[i]];
        }
      }
    }
    pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
    if (!lst && pos & 7)
      pos = wfblk(w, pos + 1, et);
  }
  return slc(o, 0, pre + shft(pos) + post);
};
var crct = /* @__PURE__ */ function() {
  var t = new u32(256);
  for (var i = 0; i < 256; ++i) {
    var c = i, k = 9;
    while (--k)
      c = (c & 1 && 3988292384) ^ c >>> 1;
    t[i] = c;
  }
  return t;
}();
var crc = function() {
  var c = -1;
  return {
    p: function(d) {
      var cr = c;
      for (var i = 0; i < d.length; ++i)
        cr = crct[cr & 255 ^ d[i]] ^ cr >>> 8;
      c = cr;
    },
    d: function() {
      return ~c;
    }
  };
};
var adler = function() {
  var a = 1, b = 0;
  return {
    p: function(d) {
      var n = a, m = b;
      var l = d.length;
      for (var i = 0; i != l; ) {
        var e = Math.min(i + 2655, l);
        for (; i < e; ++i)
          m += n += d[i];
        n = (n & 65535) + 15 * (n >> 16), m = (m & 65535) + 15 * (m >> 16);
      }
      a = n, b = m;
    },
    d: function() {
      a %= 65521, b %= 65521;
      return (a & 255) << 24 | a >>> 8 << 16 | (b & 255) << 8 | b >>> 8;
    }
  };
};
var dopt = function(dat, opt, pre, post, st) {
  return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 12 + opt.mem, pre, post, !st);
};
var mrg = function(a, b) {
  var o = {};
  for (var k in a)
    o[k] = a[k];
  for (var k in b)
    o[k] = b[k];
  return o;
};
var wcln = function(fn, fnStr, td2) {
  var dt = fn();
  var st = fn.toString();
  var ks = st.slice(st.indexOf("[") + 1, st.lastIndexOf("]")).replace(/ /g, "").split(",");
  for (var i = 0; i < dt.length; ++i) {
    var v = dt[i], k = ks[i];
    if (typeof v == "function") {
      fnStr += ";" + k + "=";
      var st_1 = v.toString();
      if (v.prototype) {
        if (st_1.indexOf("[native code]") != -1) {
          var spInd = st_1.indexOf(" ", 8) + 1;
          fnStr += st_1.slice(spInd, st_1.indexOf("(", spInd));
        } else {
          fnStr += st_1;
          for (var t in v.prototype)
            fnStr += ";" + k + ".prototype." + t + "=" + v.prototype[t].toString();
        }
      } else
        fnStr += st_1;
    } else
      td2[k] = v;
  }
  return [fnStr, td2];
};
var ch = [];
var cbfs = function(v) {
  var tl = [];
  for (var k in v) {
    if (v[k] instanceof u8 || v[k] instanceof u16 || v[k] instanceof u32)
      tl.push((v[k] = new v[k].constructor(v[k])).buffer);
  }
  return tl;
};
var wrkr = function(fns, init, id, cb) {
  var _a2;
  if (!ch[id]) {
    var fnStr = "", td_1 = {}, m = fns.length - 1;
    for (var i = 0; i < m; ++i)
      _a2 = wcln(fns[i], fnStr, td_1), fnStr = _a2[0], td_1 = _a2[1];
    ch[id] = wcln(fns[m], fnStr, td_1);
  }
  var td2 = mrg({}, ch[id][1]);
  return wk(ch[id][0] + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + init.toString() + "}", id, td2, cbfs(td2), cb);
};
var bInflt = function() {
  return [u8, u16, u32, fleb, fdeb, clim, fl, fd, flrm, fdrm, rev, hMap, max, bits, bits16, shft, slc, inflt, inflateSync, pbf, gu8];
};
var bDflt = function() {
  return [u8, u16, u32, fleb, fdeb, clim, revfl, revfd, flm, flt, fdm, fdt, rev, deo, et, hMap, wbits, wbits16, hTree, ln, lc, clen, wfblk, wblk, shft, slc, dflt, dopt, deflateSync, pbf];
};
var gze = function() {
  return [gzh, gzhl, wbytes, crc, crct];
};
var guze = function() {
  return [gzs, gzl];
};
var zle = function() {
  return [zlh, wbytes, adler];
};
var zule = function() {
  return [zlv];
};
var pbf = function(msg) {
  return postMessage(msg, [msg.buffer]);
};
var gu8 = function(o) {
  return o && o.size && new u8(o.size);
};
var cbify = function(dat, opts, fns, init, id, cb) {
  var w = wrkr(fns, init, id, function(err, dat2) {
    w.terminate();
    cb(err, dat2);
  });
  w.postMessage([dat, opts], opts.consume ? [dat.buffer] : []);
  return function() {
    w.terminate();
  };
};
var astrm = function(strm) {
  strm.ondata = function(dat, final) {
    return postMessage([dat, final], [dat.buffer]);
  };
  return function(ev) {
    return strm.push(ev.data[0], ev.data[1]);
  };
};
var astrmify = function(fns, strm, opts, init, id) {
  var t;
  var w = wrkr(fns, init, id, function(err, dat) {
    if (err)
      w.terminate(), strm.ondata.call(strm, err);
    else {
      if (dat[1])
        w.terminate();
      strm.ondata.call(strm, err, dat[0], dat[1]);
    }
  });
  w.postMessage(opts);
  strm.push = function(d, f) {
    if (t)
      throw "stream finished";
    if (!strm.ondata)
      throw "no stream handler";
    w.postMessage([d, t = f], [d.buffer]);
  };
  strm.terminate = function() {
    w.terminate();
  };
};
var b2 = function(d, b) {
  return d[b] | d[b + 1] << 8;
};
var b4 = function(d, b) {
  return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
};
var b8 = function(d, b) {
  return b4(d, b) + b4(d, b + 4) * 4294967296;
};
var wbytes = function(d, b, v) {
  for (; v; ++b)
    d[b] = v, v >>>= 8;
};
var gzh = function(c, o) {
  var fn = o.filename;
  c[0] = 31, c[1] = 139, c[2] = 8, c[8] = o.level < 2 ? 4 : o.level == 9 ? 2 : 0, c[9] = 3;
  if (o.mtime != 0)
    wbytes(c, 4, Math.floor(new Date(o.mtime || Date.now()) / 1e3));
  if (fn) {
    c[3] = 8;
    for (var i = 0; i <= fn.length; ++i)
      c[i + 10] = fn.charCodeAt(i);
  }
};
var gzs = function(d) {
  if (d[0] != 31 || d[1] != 139 || d[2] != 8)
    throw "invalid gzip data";
  var flg = d[3];
  var st = 10;
  if (flg & 4)
    st += d[10] | (d[11] << 8) + 2;
  for (var zs = (flg >> 3 & 1) + (flg >> 4 & 1); zs > 0; zs -= !d[st++])
    ;
  return st + (flg & 2);
};
var gzl = function(d) {
  var l = d.length;
  return (d[l - 4] | d[l - 3] << 8 | d[l - 2] << 16 | d[l - 1] << 24) >>> 0;
};
var gzhl = function(o) {
  return 10 + (o.filename && o.filename.length + 1 || 0);
};
var zlh = function(c, o) {
  var lv = o.level, fl2 = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;
  c[0] = 120, c[1] = fl2 << 6 | (fl2 ? 32 - 2 * fl2 : 1);
};
var zlv = function(d) {
  if ((d[0] & 15) != 8 || d[0] >>> 4 > 7 || (d[0] << 8 | d[1]) % 31)
    throw "invalid zlib data";
  if (d[1] & 32)
    throw "invalid zlib data: preset dictionaries not supported";
};
function AsyncCmpStrm(opts, cb) {
  if (!cb && typeof opts == "function")
    cb = opts, opts = {};
  this.ondata = cb;
  return opts;
}
var Deflate = /* @__PURE__ */ function() {
  function Deflate2(opts, cb) {
    if (!cb && typeof opts == "function")
      cb = opts, opts = {};
    this.ondata = cb;
    this.o = opts || {};
  }
  Deflate2.prototype.p = function(c, f) {
    this.ondata(dopt(c, this.o, 0, 0, !f), f);
  };
  Deflate2.prototype.push = function(chunk, final) {
    if (this.d)
      throw "stream finished";
    if (!this.ondata)
      throw "no stream handler";
    this.d = final;
    this.p(chunk, final || false);
  };
  return Deflate2;
}();
var AsyncDeflate = /* @__PURE__ */ function() {
  function AsyncDeflate2(opts, cb) {
    astrmify([
      bDflt,
      function() {
        return [astrm, Deflate];
      }
    ], this, AsyncCmpStrm.call(this, opts, cb), function(ev) {
      var strm = new Deflate(ev.data);
      onmessage = astrm(strm);
    }, 6);
  }
  return AsyncDeflate2;
}();
function deflate(data, opts, cb) {
  if (!cb)
    cb = opts, opts = {};
  if (typeof cb != "function")
    throw "no callback";
  return cbify(data, opts, [
    bDflt
  ], function(ev) {
    return pbf(deflateSync(ev.data[0], ev.data[1]));
  }, 0, cb);
}
function deflateSync(data, opts) {
  return dopt(data, opts || {}, 0, 0);
}
var Inflate = /* @__PURE__ */ function() {
  function Inflate2(cb) {
    this.s = {};
    this.p = new u8(0);
    this.ondata = cb;
  }
  Inflate2.prototype.e = function(c) {
    if (this.d)
      throw "stream finished";
    if (!this.ondata)
      throw "no stream handler";
    var l = this.p.length;
    var n = new u8(l + c.length);
    n.set(this.p), n.set(c, l), this.p = n;
  };
  Inflate2.prototype.c = function(final) {
    this.d = this.s.i = final || false;
    var bts = this.s.b;
    var dt = inflt(this.p, this.o, this.s);
    this.ondata(slc(dt, bts, this.s.b), this.d);
    this.o = slc(dt, this.s.b - 32768), this.s.b = this.o.length;
    this.p = slc(this.p, this.s.p / 8 | 0), this.s.p &= 7;
  };
  Inflate2.prototype.push = function(chunk, final) {
    this.e(chunk), this.c(final);
  };
  return Inflate2;
}();
var AsyncInflate = /* @__PURE__ */ function() {
  function AsyncInflate2(cb) {
    this.ondata = cb;
    astrmify([
      bInflt,
      function() {
        return [astrm, Inflate];
      }
    ], this, 0, function() {
      var strm = new Inflate();
      onmessage = astrm(strm);
    }, 7);
  }
  return AsyncInflate2;
}();
function inflate(data, opts, cb) {
  if (!cb)
    cb = opts, opts = {};
  if (typeof cb != "function")
    throw "no callback";
  return cbify(data, opts, [
    bInflt
  ], function(ev) {
    return pbf(inflateSync(ev.data[0], gu8(ev.data[1])));
  }, 1, cb);
}
function inflateSync(data, out) {
  return inflt(data, out);
}
var Gzip = /* @__PURE__ */ function() {
  function Gzip2(opts, cb) {
    this.c = crc();
    this.l = 0;
    this.v = 1;
    Deflate.call(this, opts, cb);
  }
  Gzip2.prototype.push = function(chunk, final) {
    Deflate.prototype.push.call(this, chunk, final);
  };
  Gzip2.prototype.p = function(c, f) {
    this.c.p(c);
    this.l += c.length;
    var raw = dopt(c, this.o, this.v && gzhl(this.o), f && 8, !f);
    if (this.v)
      gzh(raw, this.o), this.v = 0;
    if (f)
      wbytes(raw, raw.length - 8, this.c.d()), wbytes(raw, raw.length - 4, this.l);
    this.ondata(raw, f);
  };
  return Gzip2;
}();
var AsyncGzip = /* @__PURE__ */ function() {
  function AsyncGzip2(opts, cb) {
    astrmify([
      bDflt,
      gze,
      function() {
        return [astrm, Deflate, Gzip];
      }
    ], this, AsyncCmpStrm.call(this, opts, cb), function(ev) {
      var strm = new Gzip(ev.data);
      onmessage = astrm(strm);
    }, 8);
  }
  return AsyncGzip2;
}();
function gzip(data, opts, cb) {
  if (!cb)
    cb = opts, opts = {};
  if (typeof cb != "function")
    throw "no callback";
  return cbify(data, opts, [
    bDflt,
    gze,
    function() {
      return [gzipSync];
    }
  ], function(ev) {
    return pbf(gzipSync(ev.data[0], ev.data[1]));
  }, 2, cb);
}
function gzipSync(data, opts) {
  if (!opts)
    opts = {};
  var c = crc(), l = data.length;
  c.p(data);
  var d = dopt(data, opts, gzhl(opts), 8), s = d.length;
  return gzh(d, opts), wbytes(d, s - 8, c.d()), wbytes(d, s - 4, l), d;
}
var Gunzip = /* @__PURE__ */ function() {
  function Gunzip2(cb) {
    this.v = 1;
    Inflate.call(this, cb);
  }
  Gunzip2.prototype.push = function(chunk, final) {
    Inflate.prototype.e.call(this, chunk);
    if (this.v) {
      var s = this.p.length > 3 ? gzs(this.p) : 4;
      if (s >= this.p.length && !final)
        return;
      this.p = this.p.subarray(s), this.v = 0;
    }
    if (final) {
      if (this.p.length < 8)
        throw "invalid gzip stream";
      this.p = this.p.subarray(0, -8);
    }
    Inflate.prototype.c.call(this, final);
  };
  return Gunzip2;
}();
var AsyncGunzip = /* @__PURE__ */ function() {
  function AsyncGunzip2(cb) {
    this.ondata = cb;
    astrmify([
      bInflt,
      guze,
      function() {
        return [astrm, Inflate, Gunzip];
      }
    ], this, 0, function() {
      var strm = new Gunzip();
      onmessage = astrm(strm);
    }, 9);
  }
  return AsyncGunzip2;
}();
function gunzip(data, opts, cb) {
  if (!cb)
    cb = opts, opts = {};
  if (typeof cb != "function")
    throw "no callback";
  return cbify(data, opts, [
    bInflt,
    guze,
    function() {
      return [gunzipSync];
    }
  ], function(ev) {
    return pbf(gunzipSync(ev.data[0]));
  }, 3, cb);
}
function gunzipSync(data, out) {
  return inflt(data.subarray(gzs(data), -8), out || new u8(gzl(data)));
}
var Zlib = /* @__PURE__ */ function() {
  function Zlib2(opts, cb) {
    this.c = adler();
    this.v = 1;
    Deflate.call(this, opts, cb);
  }
  Zlib2.prototype.push = function(chunk, final) {
    Deflate.prototype.push.call(this, chunk, final);
  };
  Zlib2.prototype.p = function(c, f) {
    this.c.p(c);
    var raw = dopt(c, this.o, this.v && 2, f && 4, !f);
    if (this.v)
      zlh(raw, this.o), this.v = 0;
    if (f)
      wbytes(raw, raw.length - 4, this.c.d());
    this.ondata(raw, f);
  };
  return Zlib2;
}();
var AsyncZlib = /* @__PURE__ */ function() {
  function AsyncZlib2(opts, cb) {
    astrmify([
      bDflt,
      zle,
      function() {
        return [astrm, Deflate, Zlib];
      }
    ], this, AsyncCmpStrm.call(this, opts, cb), function(ev) {
      var strm = new Zlib(ev.data);
      onmessage = astrm(strm);
    }, 10);
  }
  return AsyncZlib2;
}();
function zlib(data, opts, cb) {
  if (!cb)
    cb = opts, opts = {};
  if (typeof cb != "function")
    throw "no callback";
  return cbify(data, opts, [
    bDflt,
    zle,
    function() {
      return [zlibSync];
    }
  ], function(ev) {
    return pbf(zlibSync(ev.data[0], ev.data[1]));
  }, 4, cb);
}
function zlibSync(data, opts) {
  if (!opts)
    opts = {};
  var a = adler();
  a.p(data);
  var d = dopt(data, opts, 2, 4);
  return zlh(d, opts), wbytes(d, d.length - 4, a.d()), d;
}
var Unzlib = /* @__PURE__ */ function() {
  function Unzlib2(cb) {
    this.v = 1;
    Inflate.call(this, cb);
  }
  Unzlib2.prototype.push = function(chunk, final) {
    Inflate.prototype.e.call(this, chunk);
    if (this.v) {
      if (this.p.length < 2 && !final)
        return;
      this.p = this.p.subarray(2), this.v = 0;
    }
    if (final) {
      if (this.p.length < 4)
        throw "invalid zlib stream";
      this.p = this.p.subarray(0, -4);
    }
    Inflate.prototype.c.call(this, final);
  };
  return Unzlib2;
}();
var AsyncUnzlib = /* @__PURE__ */ function() {
  function AsyncUnzlib2(cb) {
    this.ondata = cb;
    astrmify([
      bInflt,
      zule,
      function() {
        return [astrm, Inflate, Unzlib];
      }
    ], this, 0, function() {
      var strm = new Unzlib();
      onmessage = astrm(strm);
    }, 11);
  }
  return AsyncUnzlib2;
}();
function unzlib(data, opts, cb) {
  if (!cb)
    cb = opts, opts = {};
  if (typeof cb != "function")
    throw "no callback";
  return cbify(data, opts, [
    bInflt,
    zule,
    function() {
      return [unzlibSync];
    }
  ], function(ev) {
    return pbf(unzlibSync(ev.data[0], gu8(ev.data[1])));
  }, 5, cb);
}
function unzlibSync(data, out) {
  return inflt((zlv(data), data.subarray(2, -4)), out);
}
var Decompress = /* @__PURE__ */ function() {
  function Decompress2(cb) {
    this.G = Gunzip;
    this.I = Inflate;
    this.Z = Unzlib;
    this.ondata = cb;
  }
  Decompress2.prototype.push = function(chunk, final) {
    if (!this.ondata)
      throw "no stream handler";
    if (!this.s) {
      if (this.p && this.p.length) {
        var n = new u8(this.p.length + chunk.length);
        n.set(this.p), n.set(chunk, this.p.length);
      } else
        this.p = chunk;
      if (this.p.length > 2) {
        var _this_1 = this;
        var cb = function() {
          _this_1.ondata.apply(_this_1, arguments);
        };
        this.s = this.p[0] == 31 && this.p[1] == 139 && this.p[2] == 8 ? new this.G(cb) : (this.p[0] & 15) != 8 || this.p[0] >> 4 > 7 || (this.p[0] << 8 | this.p[1]) % 31 ? new this.I(cb) : new this.Z(cb);
        this.s.push(this.p, final);
        this.p = null;
      }
    } else
      this.s.push(chunk, final);
  };
  return Decompress2;
}();
var AsyncDecompress = /* @__PURE__ */ function() {
  function AsyncDecompress2(cb) {
    this.G = AsyncGunzip;
    this.I = AsyncInflate;
    this.Z = AsyncUnzlib;
    this.ondata = cb;
  }
  AsyncDecompress2.prototype.push = function(chunk, final) {
    Decompress.prototype.push.call(this, chunk, final);
  };
  return AsyncDecompress2;
}();
function decompress(data, opts, cb) {
  if (!cb)
    cb = opts, opts = {};
  if (typeof cb != "function")
    throw "no callback";
  return data[0] == 31 && data[1] == 139 && data[2] == 8 ? gunzip(data, opts, cb) : (data[0] & 15) != 8 || data[0] >> 4 > 7 || (data[0] << 8 | data[1]) % 31 ? inflate(data, opts, cb) : unzlib(data, opts, cb);
}
function decompressSync(data, out) {
  return data[0] == 31 && data[1] == 139 && data[2] == 8 ? gunzipSync(data, out) : (data[0] & 15) != 8 || data[0] >> 4 > 7 || (data[0] << 8 | data[1]) % 31 ? inflateSync(data, out) : unzlibSync(data, out);
}
var fltn = function(d, p, t, o) {
  for (var k in d) {
    var val = d[k], n = p + k;
    if (val instanceof u8)
      t[n] = [val, o];
    else if (Array.isArray(val))
      t[n] = [val[0], mrg(o, val[1])];
    else
      fltn(val, n + "/", t, o);
  }
};
var te = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et, { stream: true });
  tds = 1;
} catch (e) {
}
var dutf8 = function(d) {
  for (var r = "", i = 0; ; ) {
    var c = d[i++];
    var eb = (c > 127) + (c > 223) + (c > 239);
    if (i + eb > d.length)
      return [r, slc(d, i - 1)];
    if (!eb)
      r += String.fromCharCode(c);
    else if (eb == 3) {
      c = ((c & 15) << 18 | (d[i++] & 63) << 12 | (d[i++] & 63) << 6 | d[i++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
    } else if (eb & 1)
      r += String.fromCharCode((c & 31) << 6 | d[i++] & 63);
    else
      r += String.fromCharCode((c & 15) << 12 | (d[i++] & 63) << 6 | d[i++] & 63);
  }
};
var DecodeUTF8 = /* @__PURE__ */ function() {
  function DecodeUTF82(cb) {
    this.ondata = cb;
    if (tds)
      this.t = new TextDecoder();
    else
      this.p = et;
  }
  DecodeUTF82.prototype.push = function(chunk, final) {
    if (!this.ondata)
      throw "no callback";
    final = !!final;
    if (this.t) {
      this.ondata(this.t.decode(chunk, { stream: true }), final);
      if (final) {
        if (this.t.decode().length)
          throw "invalid utf-8 data";
        this.t = null;
      }
      return;
    }
    if (!this.p)
      throw "stream finished";
    var dat = new u8(this.p.length + chunk.length);
    dat.set(this.p);
    dat.set(chunk, this.p.length);
    var _a2 = dutf8(dat), ch3 = _a2[0], np = _a2[1];
    if (final) {
      if (np.length)
        throw "invalid utf-8 data";
      this.p = null;
    } else
      this.p = np;
    this.ondata(ch3, final);
  };
  return DecodeUTF82;
}();
var EncodeUTF8 = /* @__PURE__ */ function() {
  function EncodeUTF82(cb) {
    this.ondata = cb;
  }
  EncodeUTF82.prototype.push = function(chunk, final) {
    if (!this.ondata)
      throw "no callback";
    if (this.d)
      throw "stream finished";
    this.ondata(strToU8(chunk), this.d = final || false);
  };
  return EncodeUTF82;
}();
function strToU8(str, latin1) {
  if (latin1) {
    var ar_1 = new u8(str.length);
    for (var i = 0; i < str.length; ++i)
      ar_1[i] = str.charCodeAt(i);
    return ar_1;
  }
  if (te)
    return te.encode(str);
  var l = str.length;
  var ar = new u8(str.length + (str.length >> 1));
  var ai = 0;
  var w = function(v) {
    ar[ai++] = v;
  };
  for (var i = 0; i < l; ++i) {
    if (ai + 5 > ar.length) {
      var n = new u8(ai + 8 + (l - i << 1));
      n.set(ar);
      ar = n;
    }
    var c = str.charCodeAt(i);
    if (c < 128 || latin1)
      w(c);
    else if (c < 2048)
      w(192 | c >> 6), w(128 | c & 63);
    else if (c > 55295 && c < 57344)
      c = 65536 + (c & 1023 << 10) | str.charCodeAt(++i) & 1023, w(240 | c >> 18), w(128 | c >> 12 & 63), w(128 | c >> 6 & 63), w(128 | c & 63);
    else
      w(224 | c >> 12), w(128 | c >> 6 & 63), w(128 | c & 63);
  }
  return slc(ar, 0, ai);
}
function strFromU8(dat, latin1) {
  if (latin1) {
    var r = "";
    for (var i = 0; i < dat.length; i += 16384)
      r += String.fromCharCode.apply(null, dat.subarray(i, i + 16384));
    return r;
  } else if (td)
    return td.decode(dat);
  else {
    var _a2 = dutf8(dat), out = _a2[0], ext = _a2[1];
    if (ext.length)
      throw "invalid utf-8 data";
    return out;
  }
}
var dbf = function(l) {
  return l == 1 ? 3 : l < 6 ? 2 : l == 9 ? 1 : 0;
};
var slzh = function(d, b) {
  return b + 30 + b2(d, b + 26) + b2(d, b + 28);
};
var zh = function(d, b, z) {
  var fnl = b2(d, b + 28), fn = strFromU8(d.subarray(b + 46, b + 46 + fnl), !(b2(d, b + 8) & 2048)), es = b + 46 + fnl, bs = b4(d, b + 20);
  var _a2 = z && bs == 4294967295 ? z64e(d, es) : [bs, b4(d, b + 24), b4(d, b + 42)], sc = _a2[0], su = _a2[1], off = _a2[2];
  return [b2(d, b + 10), sc, su, fn, es + b2(d, b + 30) + b2(d, b + 32), off];
};
var z64e = function(d, b) {
  for (; b2(d, b) != 1; b += 4 + b2(d, b + 2))
    ;
  return [b8(d, b + 12), b8(d, b + 4), b8(d, b + 20)];
};
var exfl = function(ex) {
  var le = 0;
  if (ex) {
    for (var k in ex) {
      var l = ex[k].length;
      if (l > 65535)
        throw "extra field too long";
      le += l + 4;
    }
  }
  return le;
};
var wzh = function(d, b, f, fn, u, c, ce, co) {
  var fl2 = fn.length, ex = f.extra, col = co && co.length;
  var exl = exfl(ex);
  wbytes(d, b, ce != null ? 33639248 : 67324752), b += 4;
  if (ce != null)
    d[b++] = 20, d[b++] = f.os;
  d[b] = 20, b += 2;
  d[b++] = f.flag << 1 | (c == null && 8), d[b++] = u && 8;
  d[b++] = f.compression & 255, d[b++] = f.compression >> 8;
  var dt = new Date(f.mtime == null ? Date.now() : f.mtime), y = dt.getFullYear() - 1980;
  if (y < 0 || y > 119)
    throw "date not in range 1980-2099";
  wbytes(d, b, y << 25 | dt.getMonth() + 1 << 21 | dt.getDate() << 16 | dt.getHours() << 11 | dt.getMinutes() << 5 | dt.getSeconds() >>> 1), b += 4;
  if (c != null) {
    wbytes(d, b, f.crc);
    wbytes(d, b + 4, c);
    wbytes(d, b + 8, f.size);
  }
  wbytes(d, b + 12, fl2);
  wbytes(d, b + 14, exl), b += 16;
  if (ce != null) {
    wbytes(d, b, col);
    wbytes(d, b + 6, f.attrs);
    wbytes(d, b + 10, ce), b += 14;
  }
  d.set(fn, b);
  b += fl2;
  if (exl) {
    for (var k in ex) {
      var exf = ex[k], l = exf.length;
      wbytes(d, b, +k);
      wbytes(d, b + 2, l);
      d.set(exf, b + 4), b += 4 + l;
    }
  }
  if (col)
    d.set(co, b), b += col;
  return b;
};
var wzf = function(o, b, c, d, e) {
  wbytes(o, b, 101010256);
  wbytes(o, b + 8, c);
  wbytes(o, b + 10, c);
  wbytes(o, b + 12, d);
  wbytes(o, b + 16, e);
};
var ZipPassThrough = /* @__PURE__ */ function() {
  function ZipPassThrough2(filename) {
    this.filename = filename;
    this.c = crc();
    this.size = 0;
    this.compression = 0;
  }
  ZipPassThrough2.prototype.process = function(chunk, final) {
    this.ondata(null, chunk, final);
  };
  ZipPassThrough2.prototype.push = function(chunk, final) {
    if (!this.ondata)
      throw "no callback - add to ZIP archive before pushing";
    this.c.p(chunk);
    this.size += chunk.length;
    if (final)
      this.crc = this.c.d();
    this.process(chunk, final || false);
  };
  return ZipPassThrough2;
}();
var ZipDeflate = /* @__PURE__ */ function() {
  function ZipDeflate2(filename, opts) {
    var _this_1 = this;
    if (!opts)
      opts = {};
    ZipPassThrough.call(this, filename);
    this.d = new Deflate(opts, function(dat, final) {
      _this_1.ondata(null, dat, final);
    });
    this.compression = 8;
    this.flag = dbf(opts.level);
  }
  ZipDeflate2.prototype.process = function(chunk, final) {
    try {
      this.d.push(chunk, final);
    } catch (e) {
      this.ondata(e, null, final);
    }
  };
  ZipDeflate2.prototype.push = function(chunk, final) {
    ZipPassThrough.prototype.push.call(this, chunk, final);
  };
  return ZipDeflate2;
}();
var AsyncZipDeflate = /* @__PURE__ */ function() {
  function AsyncZipDeflate2(filename, opts) {
    var _this_1 = this;
    if (!opts)
      opts = {};
    ZipPassThrough.call(this, filename);
    this.d = new AsyncDeflate(opts, function(err, dat, final) {
      _this_1.ondata(err, dat, final);
    });
    this.compression = 8;
    this.flag = dbf(opts.level);
    this.terminate = this.d.terminate;
  }
  AsyncZipDeflate2.prototype.process = function(chunk, final) {
    this.d.push(chunk, final);
  };
  AsyncZipDeflate2.prototype.push = function(chunk, final) {
    ZipPassThrough.prototype.push.call(this, chunk, final);
  };
  return AsyncZipDeflate2;
}();
var Zip = /* @__PURE__ */ function() {
  function Zip2(cb) {
    this.ondata = cb;
    this.u = [];
    this.d = 1;
  }
  Zip2.prototype.add = function(file) {
    var _this_1 = this;
    if (this.d & 2)
      throw "stream finished";
    var f = strToU8(file.filename), fl2 = f.length;
    var com = file.comment, o = com && strToU8(com);
    var u = fl2 != file.filename.length || o && com.length != o.length;
    var hl = fl2 + exfl(file.extra) + 30;
    if (fl2 > 65535)
      throw "filename too long";
    var header = new u8(hl);
    wzh(header, 0, file, f, u);
    var chks = [header];
    var pAll = function() {
      for (var _i = 0, chks_1 = chks; _i < chks_1.length; _i++) {
        var chk = chks_1[_i];
        _this_1.ondata(null, chk, false);
      }
      chks = [];
    };
    var tr = this.d;
    this.d = 0;
    var ind = this.u.length;
    var uf = mrg(file, {
      f,
      u,
      o,
      t: function() {
        if (file.terminate)
          file.terminate();
      },
      r: function() {
        pAll();
        if (tr) {
          var nxt = _this_1.u[ind + 1];
          if (nxt)
            nxt.r();
          else
            _this_1.d = 1;
        }
        tr = 1;
      }
    });
    var cl = 0;
    file.ondata = function(err, dat, final) {
      if (err) {
        _this_1.ondata(err, dat, final);
        _this_1.terminate();
      } else {
        cl += dat.length;
        chks.push(dat);
        if (final) {
          var dd = new u8(16);
          wbytes(dd, 0, 134695760);
          wbytes(dd, 4, file.crc);
          wbytes(dd, 8, cl);
          wbytes(dd, 12, file.size);
          chks.push(dd);
          uf.c = cl, uf.b = hl + cl + 16, uf.crc = file.crc, uf.size = file.size;
          if (tr)
            uf.r();
          tr = 1;
        } else if (tr)
          pAll();
      }
    };
    this.u.push(uf);
  };
  Zip2.prototype.end = function() {
    var _this_1 = this;
    if (this.d & 2) {
      if (this.d & 1)
        throw "stream finishing";
      throw "stream finished";
    }
    if (this.d)
      this.e();
    else
      this.u.push({
        r: function() {
          if (!(_this_1.d & 1))
            return;
          _this_1.u.splice(-1, 1);
          _this_1.e();
        },
        t: function() {
        }
      });
    this.d = 3;
  };
  Zip2.prototype.e = function() {
    var bt = 0, l = 0, tl = 0;
    for (var _i = 0, _a2 = this.u; _i < _a2.length; _i++) {
      var f = _a2[_i];
      tl += 46 + f.f.length + exfl(f.extra) + (f.o ? f.o.length : 0);
    }
    var out = new u8(tl + 22);
    for (var _b2 = 0, _c = this.u; _b2 < _c.length; _b2++) {
      var f = _c[_b2];
      wzh(out, bt, f, f.f, f.u, f.c, l, f.o);
      bt += 46 + f.f.length + exfl(f.extra) + (f.o ? f.o.length : 0), l += f.b;
    }
    wzf(out, bt, this.u.length, tl, l);
    this.ondata(null, out, true);
    this.d = 2;
  };
  Zip2.prototype.terminate = function() {
    for (var _i = 0, _a2 = this.u; _i < _a2.length; _i++) {
      var f = _a2[_i];
      f.t();
    }
    this.d = 2;
  };
  return Zip2;
}();
function zip(data, opts, cb) {
  if (!cb)
    cb = opts, opts = {};
  if (typeof cb != "function")
    throw "no callback";
  var r = {};
  fltn(data, "", r, opts);
  var k = Object.keys(r);
  var lft = k.length, o = 0, tot = 0;
  var slft = lft, files = new Array(lft);
  var term = [];
  var tAll = function() {
    for (var i2 = 0; i2 < term.length; ++i2)
      term[i2]();
  };
  var cbf = function() {
    var out = new u8(tot + 22), oe = o, cdl = tot - o;
    tot = 0;
    for (var i2 = 0; i2 < slft; ++i2) {
      var f = files[i2];
      try {
        var l = f.c.length;
        wzh(out, tot, f, f.f, f.u, l);
        var badd = 30 + f.f.length + exfl(f.extra);
        var loc = tot + badd;
        out.set(f.c, loc);
        wzh(out, o, f, f.f, f.u, l, tot, f.m), o += 16 + badd + (f.m ? f.m.length : 0), tot = loc + l;
      } catch (e) {
        return cb(e, null);
      }
    }
    wzf(out, o, files.length, cdl, oe);
    cb(null, out);
  };
  if (!lft)
    cbf();
  var _loop_1 = function(i2) {
    var fn = k[i2];
    var _a2 = r[fn], file = _a2[0], p = _a2[1];
    var c = crc(), size = file.length;
    c.p(file);
    var f = strToU8(fn), s = f.length;
    var com = p.comment, m = com && strToU8(com), ms = m && m.length;
    var exl = exfl(p.extra);
    var compression = p.level == 0 ? 0 : 8;
    var cbl = function(e, d) {
      if (e) {
        tAll();
        cb(e, null);
      } else {
        var l = d.length;
        files[i2] = mrg(p, {
          size,
          crc: c.d(),
          c: d,
          f,
          m,
          u: s != fn.length || m && com.length != ms,
          compression
        });
        o += 30 + s + exl + l;
        tot += 76 + 2 * (s + exl) + (ms || 0) + l;
        if (!--lft)
          cbf();
      }
    };
    if (s > 65535)
      cbl("filename too long", null);
    if (!compression)
      cbl(null, file);
    else if (size < 16e4) {
      try {
        cbl(null, deflateSync(file, p));
      } catch (e) {
        cbl(e, null);
      }
    } else
      term.push(deflate(file, p, cbl));
  };
  for (var i = 0; i < slft; ++i) {
    _loop_1(i);
  }
  return tAll;
}
function zipSync(data, opts) {
  if (!opts)
    opts = {};
  var r = {};
  var files = [];
  fltn(data, "", r, opts);
  var o = 0;
  var tot = 0;
  for (var fn in r) {
    var _a2 = r[fn], file = _a2[0], p = _a2[1];
    var compression = p.level == 0 ? 0 : 8;
    var f = strToU8(fn), s = f.length;
    var com = p.comment, m = com && strToU8(com), ms = m && m.length;
    var exl = exfl(p.extra);
    if (s > 65535)
      throw "filename too long";
    var d = compression ? deflateSync(file, p) : file, l = d.length;
    var c = crc();
    c.p(file);
    files.push(mrg(p, {
      size: file.length,
      crc: c.d(),
      c: d,
      f,
      m,
      u: s != fn.length || m && com.length != ms,
      o,
      compression
    }));
    o += 30 + s + exl + l;
    tot += 76 + 2 * (s + exl) + (ms || 0) + l;
  }
  var out = new u8(tot + 22), oe = o, cdl = tot - o;
  for (var i = 0; i < files.length; ++i) {
    var f = files[i];
    wzh(out, f.o, f, f.f, f.u, f.c.length);
    var badd = 30 + f.f.length + exfl(f.extra);
    out.set(f.c, f.o + badd);
    wzh(out, o, f, f.f, f.u, f.c.length, f.o, f.m), o += 16 + badd + (f.m ? f.m.length : 0);
  }
  wzf(out, o, files.length, cdl, oe);
  return out;
}
var UnzipPassThrough = /* @__PURE__ */ function() {
  function UnzipPassThrough2() {
  }
  UnzipPassThrough2.prototype.push = function(data, final) {
    this.ondata(null, data, final);
  };
  UnzipPassThrough2.compression = 0;
  return UnzipPassThrough2;
}();
var UnzipInflate = /* @__PURE__ */ function() {
  function UnzipInflate2() {
    var _this_1 = this;
    this.i = new Inflate(function(dat, final) {
      _this_1.ondata(null, dat, final);
    });
  }
  UnzipInflate2.prototype.push = function(data, final) {
    try {
      this.i.push(data, final);
    } catch (e) {
      this.ondata(e, data, final);
    }
  };
  UnzipInflate2.compression = 8;
  return UnzipInflate2;
}();
var AsyncUnzipInflate = /* @__PURE__ */ function() {
  function AsyncUnzipInflate2(_, sz) {
    var _this_1 = this;
    if (sz < 32e4) {
      this.i = new Inflate(function(dat, final) {
        _this_1.ondata(null, dat, final);
      });
    } else {
      this.i = new AsyncInflate(function(err, dat, final) {
        _this_1.ondata(err, dat, final);
      });
      this.terminate = this.i.terminate;
    }
  }
  AsyncUnzipInflate2.prototype.push = function(data, final) {
    if (this.i.terminate)
      data = slc(data, 0);
    this.i.push(data, final);
  };
  AsyncUnzipInflate2.compression = 8;
  return AsyncUnzipInflate2;
}();
var Unzip = /* @__PURE__ */ function() {
  function Unzip2(cb) {
    this.onfile = cb;
    this.k = [];
    this.o = {
      0: UnzipPassThrough
    };
    this.p = et;
  }
  Unzip2.prototype.push = function(chunk, final) {
    var _this_1 = this;
    if (!this.onfile)
      throw "no callback";
    if (!this.p)
      throw "stream finished";
    if (this.c > 0) {
      var len = Math.min(this.c, chunk.length);
      var toAdd = chunk.subarray(0, len);
      this.c -= len;
      if (this.d)
        this.d.push(toAdd, !this.c);
      else
        this.k[0].push(toAdd);
      chunk = chunk.subarray(len);
      if (chunk.length)
        return this.push(chunk, final);
    } else {
      var f = 0, i = 0, is = void 0, buf = void 0;
      if (!this.p.length)
        buf = chunk;
      else if (!chunk.length)
        buf = this.p;
      else {
        buf = new u8(this.p.length + chunk.length);
        buf.set(this.p), buf.set(chunk, this.p.length);
      }
      var l = buf.length, oc = this.c, add = oc && this.d;
      var _loop_2 = function() {
        var _a2;
        var sig = b4(buf, i);
        if (sig == 67324752) {
          f = 1, is = i;
          this_1.d = null;
          this_1.c = 0;
          var bf = b2(buf, i + 6), cmp_1 = b2(buf, i + 8), u = bf & 2048, dd = bf & 8, fnl = b2(buf, i + 26), es = b2(buf, i + 28);
          if (l > i + 30 + fnl + es) {
            var chks_2 = [];
            this_1.k.unshift(chks_2);
            f = 2;
            var sc_1 = b4(buf, i + 18), su_1 = b4(buf, i + 22);
            var fn_1 = strFromU8(buf.subarray(i + 30, i += 30 + fnl), !u);
            if (sc_1 == 4294967295) {
              _a2 = dd ? [-2] : z64e(buf, i), sc_1 = _a2[0], su_1 = _a2[1];
            } else if (dd)
              sc_1 = -1;
            i += es;
            this_1.c = sc_1;
            var d_1;
            var file_1 = {
              name: fn_1,
              compression: cmp_1,
              start: function() {
                if (!file_1.ondata)
                  throw "no callback";
                if (!sc_1)
                  file_1.ondata(null, et, true);
                else {
                  var ctr = _this_1.o[cmp_1];
                  if (!ctr)
                    throw "unknown compression type " + cmp_1;
                  d_1 = sc_1 < 0 ? new ctr(fn_1) : new ctr(fn_1, sc_1, su_1);
                  d_1.ondata = function(err, dat3, final2) {
                    file_1.ondata(err, dat3, final2);
                  };
                  for (var _i = 0, chks_3 = chks_2; _i < chks_3.length; _i++) {
                    var dat2 = chks_3[_i];
                    d_1.push(dat2, false);
                  }
                  if (_this_1.k[0] == chks_2 && _this_1.c)
                    _this_1.d = d_1;
                  else
                    d_1.push(et, true);
                }
              },
              terminate: function() {
                if (d_1 && d_1.terminate)
                  d_1.terminate();
              }
            };
            if (sc_1 >= 0)
              file_1.size = sc_1, file_1.originalSize = su_1;
            this_1.onfile(file_1);
          }
          return "break";
        } else if (oc) {
          if (sig == 134695760) {
            is = i += 12 + (oc == -2 && 8), f = 3, this_1.c = 0;
            return "break";
          } else if (sig == 33639248) {
            is = i -= 4, f = 3, this_1.c = 0;
            return "break";
          }
        }
      };
      var this_1 = this;
      for (; i < l - 4; ++i) {
        var state_1 = _loop_2();
        if (state_1 === "break")
          break;
      }
      this.p = et;
      if (oc < 0) {
        var dat = f ? buf.subarray(0, is - 12 - (oc == -2 && 8) - (b4(buf, is - 16) == 134695760 && 4)) : buf.subarray(0, i);
        if (add)
          add.push(dat, !!f);
        else
          this.k[+(f == 2)].push(dat);
      }
      if (f & 2)
        return this.push(buf.subarray(i), final);
      this.p = buf.subarray(i);
    }
    if (final) {
      if (this.c)
        throw "invalid zip file";
      this.p = null;
    }
  };
  Unzip2.prototype.register = function(decoder) {
    this.o[decoder.compression] = decoder;
  };
  return Unzip2;
}();
function unzip(data, cb) {
  if (typeof cb != "function")
    throw "no callback";
  var term = [];
  var tAll = function() {
    for (var i2 = 0; i2 < term.length; ++i2)
      term[i2]();
  };
  var files = {};
  var e = data.length - 22;
  for (; b4(data, e) != 101010256; --e) {
    if (!e || data.length - e > 65558) {
      cb("invalid zip file", null);
      return;
    }
  }
  var lft = b2(data, e + 8);
  if (!lft)
    cb(null, {});
  var c = lft;
  var o = b4(data, e + 16);
  var z = o == 4294967295;
  if (z) {
    e = b4(data, e - 12);
    if (b4(data, e) != 101075792) {
      cb("invalid zip file", null);
      return;
    }
    c = lft = b4(data, e + 32);
    o = b4(data, e + 48);
  }
  var _loop_3 = function(i2) {
    var _a2 = zh(data, o, z), c_1 = _a2[0], sc = _a2[1], su = _a2[2], fn = _a2[3], no = _a2[4], off = _a2[5], b = slzh(data, off);
    o = no;
    var cbl = function(e2, d) {
      if (e2) {
        tAll();
        cb(e2, null);
      } else {
        files[fn] = d;
        if (!--lft)
          cb(null, files);
      }
    };
    if (!c_1)
      cbl(null, slc(data, b, b + sc));
    else if (c_1 == 8) {
      var infl = data.subarray(b, b + sc);
      if (sc < 32e4) {
        try {
          cbl(null, inflateSync(infl, new u8(su)));
        } catch (e2) {
          cbl(e2, null);
        }
      } else
        term.push(inflate(infl, { size: su }, cbl));
    } else
      cbl("unknown compression type " + c_1, null);
  };
  for (var i = 0; i < c; ++i) {
    _loop_3();
  }
  return tAll;
}
function unzipSync(data) {
  var files = {};
  var e = data.length - 22;
  for (; b4(data, e) != 101010256; --e) {
    if (!e || data.length - e > 65558)
      throw "invalid zip file";
  }
  var c = b2(data, e + 8);
  if (!c)
    return {};
  var o = b4(data, e + 16);
  var z = o == 4294967295;
  if (z) {
    e = b4(data, e - 12);
    if (b4(data, e) != 101075792)
      throw "invalid zip file";
    c = b4(data, e + 32);
    o = b4(data, e + 48);
  }
  for (var i = 0; i < c; ++i) {
    var _a2 = zh(data, o, z), c_2 = _a2[0], sc = _a2[1], su = _a2[2], fn = _a2[3], no = _a2[4], off = _a2[5], b = slzh(data, off);
    o = no;
    if (!c_2)
      files[fn] = slc(data, b, b + sc);
    else if (c_2 == 8)
      files[fn] = inflateSync(data.subarray(b, b + sc), new u8(su));
    else
      throw "unknown compression type " + c_2;
  }
  return files;
}
var fflate = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Deflate,
  AsyncDeflate,
  deflate,
  deflateSync,
  Inflate,
  AsyncInflate,
  inflate,
  inflateSync,
  Gzip,
  AsyncGzip,
  gzip,
  gzipSync,
  Gunzip,
  AsyncGunzip,
  gunzip,
  gunzipSync,
  Zlib,
  AsyncZlib,
  zlib,
  zlibSync,
  Unzlib,
  AsyncUnzlib,
  unzlib,
  unzlibSync,
  compress: gzip,
  AsyncCompress: AsyncGzip,
  compressSync: gzipSync,
  Compress: Gzip,
  Decompress,
  AsyncDecompress,
  decompress,
  decompressSync,
  DecodeUTF8,
  EncodeUTF8,
  strToU8,
  strFromU8,
  ZipPassThrough,
  ZipDeflate,
  AsyncZipDeflate,
  Zip,
  zip,
  zipSync,
  UnzipPassThrough,
  UnzipInflate,
  AsyncUnzipInflate,
  Unzip,
  unzip,
  unzipSync
}, Symbol.toStringTag, { value: "Module" }));
function findSpan(p, u, U) {
  const n = U.length - p - 1;
  if (u >= U[n]) {
    return n - 1;
  }
  if (u <= U[p]) {
    return p;
  }
  let low = p;
  let high = n;
  let mid = Math.floor((low + high) / 2);
  while (u < U[mid] || u >= U[mid + 1]) {
    if (u < U[mid]) {
      high = mid;
    } else {
      low = mid;
    }
    mid = Math.floor((low + high) / 2);
  }
  return mid;
}
function calcBasisFunctions(span, u, p, U) {
  const N = [];
  const left = [];
  const right = [];
  N[0] = 1;
  for (let j = 1; j <= p; ++j) {
    left[j] = u - U[span + 1 - j];
    right[j] = U[span + j] - u;
    let saved = 0;
    for (let r = 0; r < j; ++r) {
      const rv = right[r + 1];
      const lv = left[j - r];
      const temp = N[r] / (rv + lv);
      N[r] = saved + rv * temp;
      saved = lv * temp;
    }
    N[j] = saved;
  }
  return N;
}
function calcBSplinePoint(p, U, P, u) {
  const span = findSpan(p, u, U);
  const N = calcBasisFunctions(span, u, p, U);
  const C = new Vector4(0, 0, 0, 0);
  for (let j = 0; j <= p; ++j) {
    const point = P[span - p + j];
    const Nj = N[j];
    const wNj = point.w * Nj;
    C.x += point.x * wNj;
    C.y += point.y * wNj;
    C.z += point.z * wNj;
    C.w += point.w * Nj;
  }
  return C;
}
function calcBasisFunctionDerivatives(span, u, p, n, U) {
  const zeroArr = [];
  for (let i = 0; i <= p; ++i)
    zeroArr[i] = 0;
  const ders = [];
  for (let i = 0; i <= n; ++i)
    ders[i] = zeroArr.slice(0);
  const ndu = [];
  for (let i = 0; i <= p; ++i)
    ndu[i] = zeroArr.slice(0);
  ndu[0][0] = 1;
  const left = zeroArr.slice(0);
  const right = zeroArr.slice(0);
  for (let j = 1; j <= p; ++j) {
    left[j] = u - U[span + 1 - j];
    right[j] = U[span + j] - u;
    let saved = 0;
    for (let r2 = 0; r2 < j; ++r2) {
      const rv = right[r2 + 1];
      const lv = left[j - r2];
      ndu[j][r2] = rv + lv;
      const temp = ndu[r2][j - 1] / ndu[j][r2];
      ndu[r2][j] = saved + rv * temp;
      saved = lv * temp;
    }
    ndu[j][j] = saved;
  }
  for (let j = 0; j <= p; ++j) {
    ders[0][j] = ndu[j][p];
  }
  for (let r2 = 0; r2 <= p; ++r2) {
    let s1 = 0;
    let s2 = 1;
    const a = [];
    for (let i = 0; i <= p; ++i) {
      a[i] = zeroArr.slice(0);
    }
    a[0][0] = 1;
    for (let k = 1; k <= n; ++k) {
      let d = 0;
      const rk = r2 - k;
      const pk = p - k;
      if (r2 >= k) {
        a[s2][0] = a[s1][0] / ndu[pk + 1][rk];
        d = a[s2][0] * ndu[rk][pk];
      }
      const j1 = rk >= -1 ? 1 : -rk;
      const j2 = r2 - 1 <= pk ? k - 1 : p - r2;
      for (let j3 = j1; j3 <= j2; ++j3) {
        a[s2][j3] = (a[s1][j3] - a[s1][j3 - 1]) / ndu[pk + 1][rk + j3];
        d += a[s2][j3] * ndu[rk + j3][pk];
      }
      if (r2 <= pk) {
        a[s2][k] = -a[s1][k - 1] / ndu[pk + 1][r2];
        d += a[s2][k] * ndu[r2][pk];
      }
      ders[k][r2] = d;
      const j = s1;
      s1 = s2;
      s2 = j;
    }
  }
  let r = p;
  for (let k = 1; k <= n; ++k) {
    for (let j = 0; j <= p; ++j) {
      ders[k][j] *= r;
    }
    r *= p - k;
  }
  return ders;
}
function calcBSplineDerivatives(p, U, P, u, nd) {
  const du = nd < p ? nd : p;
  const CK = [];
  const span = findSpan(p, u, U);
  const nders = calcBasisFunctionDerivatives(span, u, p, du, U);
  const Pw = [];
  for (let i = 0; i < P.length; ++i) {
    const point = P[i].clone();
    const w = point.w;
    point.x *= w;
    point.y *= w;
    point.z *= w;
    Pw[i] = point;
  }
  for (let k = 0; k <= du; ++k) {
    const point = Pw[span - p].clone().multiplyScalar(nders[k][0]);
    for (let j = 1; j <= p; ++j) {
      point.add(Pw[span - p + j].clone().multiplyScalar(nders[k][j]));
    }
    CK[k] = point;
  }
  for (let k = du + 1; k <= nd + 1; ++k) {
    CK[k] = new Vector4(0, 0, 0);
  }
  return CK;
}
function calcKoverI(k, i) {
  let nom = 1;
  for (let j = 2; j <= k; ++j) {
    nom *= j;
  }
  let denom = 1;
  for (let j = 2; j <= i; ++j) {
    denom *= j;
  }
  for (let j = 2; j <= k - i; ++j) {
    denom *= j;
  }
  return nom / denom;
}
function calcRationalCurveDerivatives(Pders) {
  const nd = Pders.length;
  const Aders = [];
  const wders = [];
  for (let i = 0; i < nd; ++i) {
    const point = Pders[i];
    Aders[i] = new Vector3(point.x, point.y, point.z);
    wders[i] = point.w;
  }
  const CK = [];
  for (let k = 0; k < nd; ++k) {
    const v = Aders[k].clone();
    for (let i = 1; i <= k; ++i) {
      v.sub(CK[k - i].clone().multiplyScalar(calcKoverI(k, i) * wders[i]));
    }
    CK[k] = v.divideScalar(wders[0]);
  }
  return CK;
}
function calcNURBSDerivatives(p, U, P, u, nd) {
  const Pders = calcBSplineDerivatives(p, U, P, u, nd);
  return calcRationalCurveDerivatives(Pders);
}
class NURBSCurve extends Curve {
  constructor(degree, knots, controlPoints, startKnot, endKnot) {
    super();
    this.degree = degree;
    this.knots = knots;
    this.controlPoints = [];
    this.startKnot = startKnot || 0;
    this.endKnot = endKnot || this.knots.length - 1;
    for (let i = 0; i < controlPoints.length; ++i) {
      const point = controlPoints[i];
      this.controlPoints[i] = new Vector4(point.x, point.y, point.z, point.w);
    }
  }
  getPoint(t, optionalTarget = new Vector3()) {
    const point = optionalTarget;
    const u = this.knots[this.startKnot] + t * (this.knots[this.endKnot] - this.knots[this.startKnot]);
    const hpoint = calcBSplinePoint(this.degree, this.knots, this.controlPoints, u);
    if (hpoint.w !== 1) {
      hpoint.divideScalar(hpoint.w);
    }
    return point.set(hpoint.x, hpoint.y, hpoint.z);
  }
  getTangent(t, optionalTarget = new Vector3()) {
    const tangent = optionalTarget;
    const u = this.knots[0] + t * (this.knots[this.knots.length - 1] - this.knots[0]);
    const ders = calcNURBSDerivatives(this.degree, this.knots, this.controlPoints, u, 1);
    tangent.copy(ders[1]).normalize();
    return tangent;
  }
}
let fbxTree;
let connections;
let sceneGraph;
class FBXLoader extends Loader {
  constructor(manager) {
    super(manager);
  }
  load(url, onLoad, onProgress, onError) {
    const scope = this;
    const path = scope.path === "" ? LoaderUtils.extractUrlBase(url) : scope.path;
    const loader2 = new FileLoader(this.manager);
    loader2.setPath(scope.path);
    loader2.setResponseType("arraybuffer");
    loader2.setRequestHeader(scope.requestHeader);
    loader2.setWithCredentials(scope.withCredentials);
    loader2.load(url, function(buffer) {
      try {
        onLoad(scope.parse(buffer, path));
      } catch (e) {
        if (onError) {
          onError(e);
        } else {
          console.error(e);
        }
        scope.manager.itemError(url);
      }
    }, onProgress, onError);
  }
  parse(FBXBuffer, path) {
    if (isFbxFormatBinary(FBXBuffer)) {
      fbxTree = new BinaryParser().parse(FBXBuffer);
    } else {
      const FBXText = convertArrayBufferToString(FBXBuffer);
      if (!isFbxFormatASCII(FBXText)) {
        throw new Error("THREE.FBXLoader: Unknown format.");
      }
      if (getFbxVersion(FBXText) < 7e3) {
        throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + getFbxVersion(FBXText));
      }
      fbxTree = new TextParser().parse(FBXText);
    }
    const textureLoader = new TextureLoader(this.manager).setPath(this.resourcePath || path).setCrossOrigin(this.crossOrigin);
    return new FBXTreeParser(textureLoader, this.manager).parse(fbxTree);
  }
}
class FBXTreeParser {
  constructor(textureLoader, manager) {
    this.textureLoader = textureLoader;
    this.manager = manager;
  }
  parse() {
    connections = this.parseConnections();
    const images = this.parseImages();
    const textures = this.parseTextures(images);
    const materials = this.parseMaterials(textures);
    const deformers = this.parseDeformers();
    const geometryMap = new GeometryParser().parse(deformers);
    this.parseScene(deformers, geometryMap, materials);
    return sceneGraph;
  }
  parseConnections() {
    const connectionMap = /* @__PURE__ */ new Map();
    if ("Connections" in fbxTree) {
      const rawConnections = fbxTree.Connections.connections;
      rawConnections.forEach(function(rawConnection) {
        const fromID = rawConnection[0];
        const toID = rawConnection[1];
        const relationship = rawConnection[2];
        if (!connectionMap.has(fromID)) {
          connectionMap.set(fromID, {
            parents: [],
            children: []
          });
        }
        const parentRelationship = { ID: toID, relationship };
        connectionMap.get(fromID).parents.push(parentRelationship);
        if (!connectionMap.has(toID)) {
          connectionMap.set(toID, {
            parents: [],
            children: []
          });
        }
        const childRelationship = { ID: fromID, relationship };
        connectionMap.get(toID).children.push(childRelationship);
      });
    }
    return connectionMap;
  }
  parseImages() {
    const images = {};
    const blobs = {};
    if ("Video" in fbxTree.Objects) {
      const videoNodes = fbxTree.Objects.Video;
      for (const nodeID in videoNodes) {
        const videoNode = videoNodes[nodeID];
        const id = parseInt(nodeID);
        images[id] = videoNode.RelativeFilename || videoNode.Filename;
        if ("Content" in videoNode) {
          const arrayBufferContent = videoNode.Content instanceof ArrayBuffer && videoNode.Content.byteLength > 0;
          const base64Content = typeof videoNode.Content === "string" && videoNode.Content !== "";
          if (arrayBufferContent || base64Content) {
            const image = this.parseImage(videoNodes[nodeID]);
            blobs[videoNode.RelativeFilename || videoNode.Filename] = image;
          }
        }
      }
    }
    for (const id in images) {
      const filename = images[id];
      if (blobs[filename] !== void 0)
        images[id] = blobs[filename];
      else
        images[id] = images[id].split("\\").pop();
    }
    return images;
  }
  parseImage(videoNode) {
    const content = videoNode.Content;
    const fileName = videoNode.RelativeFilename || videoNode.Filename;
    const extension = fileName.slice(fileName.lastIndexOf(".") + 1).toLowerCase();
    let type;
    switch (extension) {
      case "bmp":
        type = "image/bmp";
        break;
      case "jpg":
      case "jpeg":
        type = "image/jpeg";
        break;
      case "png":
        type = "image/png";
        break;
      case "tif":
        type = "image/tiff";
        break;
      case "tga":
        if (this.manager.getHandler(".tga") === null) {
          console.warn("FBXLoader: TGA loader not found, skipping ", fileName);
        }
        type = "image/tga";
        break;
      default:
        console.warn('FBXLoader: Image type "' + extension + '" is not supported.');
        return;
    }
    if (typeof content === "string") {
      return "data:" + type + ";base64," + content;
    } else {
      const array = new Uint8Array(content);
      return window.URL.createObjectURL(new Blob([array], { type }));
    }
  }
  parseTextures(images) {
    const textureMap = /* @__PURE__ */ new Map();
    if ("Texture" in fbxTree.Objects) {
      const textureNodes = fbxTree.Objects.Texture;
      for (const nodeID in textureNodes) {
        const texture = this.parseTexture(textureNodes[nodeID], images);
        textureMap.set(parseInt(nodeID), texture);
      }
    }
    return textureMap;
  }
  parseTexture(textureNode, images) {
    const texture = this.loadTexture(textureNode, images);
    texture.ID = textureNode.id;
    texture.name = textureNode.attrName;
    const wrapModeU = textureNode.WrapModeU;
    const wrapModeV = textureNode.WrapModeV;
    const valueU = wrapModeU !== void 0 ? wrapModeU.value : 0;
    const valueV = wrapModeV !== void 0 ? wrapModeV.value : 0;
    texture.wrapS = valueU === 0 ? RepeatWrapping : ClampToEdgeWrapping;
    texture.wrapT = valueV === 0 ? RepeatWrapping : ClampToEdgeWrapping;
    if ("Scaling" in textureNode) {
      const values = textureNode.Scaling.value;
      texture.repeat.x = values[0];
      texture.repeat.y = values[1];
    }
    if ("Translation" in textureNode) {
      const values = textureNode.Translation.value;
      texture.offset.x = values[0];
      texture.offset.y = values[1];
    }
    return texture;
  }
  loadTexture(textureNode, images) {
    let fileName;
    const currentPath = this.textureLoader.path;
    const children = connections.get(textureNode.id).children;
    if (children !== void 0 && children.length > 0 && images[children[0].ID] !== void 0) {
      fileName = images[children[0].ID];
      if (fileName.indexOf("blob:") === 0 || fileName.indexOf("data:") === 0) {
        this.textureLoader.setPath(void 0);
      }
    }
    let texture;
    const extension = textureNode.FileName.slice(-3).toLowerCase();
    if (extension === "tga") {
      const loader2 = this.manager.getHandler(".tga");
      if (loader2 === null) {
        console.warn("FBXLoader: TGA loader not found, creating placeholder texture for", textureNode.RelativeFilename);
        texture = new Texture();
      } else {
        loader2.setPath(this.textureLoader.path);
        texture = loader2.load(fileName);
      }
    } else if (extension === "psd") {
      console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for", textureNode.RelativeFilename);
      texture = new Texture();
    } else {
      texture = this.textureLoader.load(fileName);
    }
    this.textureLoader.setPath(currentPath);
    return texture;
  }
  parseMaterials(textureMap) {
    const materialMap = /* @__PURE__ */ new Map();
    if ("Material" in fbxTree.Objects) {
      const materialNodes = fbxTree.Objects.Material;
      for (const nodeID in materialNodes) {
        const material = this.parseMaterial(materialNodes[nodeID], textureMap);
        if (material !== null)
          materialMap.set(parseInt(nodeID), material);
      }
    }
    return materialMap;
  }
  parseMaterial(materialNode, textureMap) {
    const ID = materialNode.id;
    const name = materialNode.attrName;
    let type = materialNode.ShadingModel;
    if (typeof type === "object") {
      type = type.value;
    }
    if (!connections.has(ID))
      return null;
    const parameters = this.parseParameters(materialNode, textureMap, ID);
    let material;
    switch (type.toLowerCase()) {
      case "phong":
        material = new MeshPhongMaterial();
        break;
      case "lambert":
        material = new MeshLambertMaterial();
        break;
      default:
        console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.', type);
        material = new MeshPhongMaterial();
        break;
    }
    material.setValues(parameters);
    material.name = name;
    return material;
  }
  parseParameters(materialNode, textureMap, ID) {
    const parameters = {};
    if (materialNode.BumpFactor) {
      parameters.bumpScale = materialNode.BumpFactor.value;
    }
    if (materialNode.Diffuse) {
      parameters.color = new Color().fromArray(materialNode.Diffuse.value);
    } else if (materialNode.DiffuseColor && (materialNode.DiffuseColor.type === "Color" || materialNode.DiffuseColor.type === "ColorRGB")) {
      parameters.color = new Color().fromArray(materialNode.DiffuseColor.value);
    }
    if (materialNode.DisplacementFactor) {
      parameters.displacementScale = materialNode.DisplacementFactor.value;
    }
    if (materialNode.Emissive) {
      parameters.emissive = new Color().fromArray(materialNode.Emissive.value);
    } else if (materialNode.EmissiveColor && (materialNode.EmissiveColor.type === "Color" || materialNode.EmissiveColor.type === "ColorRGB")) {
      parameters.emissive = new Color().fromArray(materialNode.EmissiveColor.value);
    }
    if (materialNode.EmissiveFactor) {
      parameters.emissiveIntensity = parseFloat(materialNode.EmissiveFactor.value);
    }
    if (materialNode.Opacity) {
      parameters.opacity = parseFloat(materialNode.Opacity.value);
    }
    if (parameters.opacity < 1) {
      parameters.transparent = true;
    }
    if (materialNode.ReflectionFactor) {
      parameters.reflectivity = materialNode.ReflectionFactor.value;
    }
    if (materialNode.Shininess) {
      parameters.shininess = materialNode.Shininess.value;
    }
    if (materialNode.Specular) {
      parameters.specular = new Color().fromArray(materialNode.Specular.value);
    } else if (materialNode.SpecularColor && materialNode.SpecularColor.type === "Color") {
      parameters.specular = new Color().fromArray(materialNode.SpecularColor.value);
    }
    const scope = this;
    connections.get(ID).children.forEach(function(child) {
      const type = child.relationship;
      switch (type) {
        case "Bump":
          parameters.bumpMap = scope.getTexture(textureMap, child.ID);
          break;
        case "Maya|TEX_ao_map":
          parameters.aoMap = scope.getTexture(textureMap, child.ID);
          break;
        case "DiffuseColor":
        case "Maya|TEX_color_map":
          parameters.map = scope.getTexture(textureMap, child.ID);
          if (parameters.map !== void 0) {
            parameters.map.encoding = sRGBEncoding;
          }
          break;
        case "DisplacementColor":
          parameters.displacementMap = scope.getTexture(textureMap, child.ID);
          break;
        case "EmissiveColor":
          parameters.emissiveMap = scope.getTexture(textureMap, child.ID);
          if (parameters.emissiveMap !== void 0) {
            parameters.emissiveMap.encoding = sRGBEncoding;
          }
          break;
        case "NormalMap":
        case "Maya|TEX_normal_map":
          parameters.normalMap = scope.getTexture(textureMap, child.ID);
          break;
        case "ReflectionColor":
          parameters.envMap = scope.getTexture(textureMap, child.ID);
          if (parameters.envMap !== void 0) {
            parameters.envMap.mapping = EquirectangularReflectionMapping;
            parameters.envMap.encoding = sRGBEncoding;
          }
          break;
        case "SpecularColor":
          parameters.specularMap = scope.getTexture(textureMap, child.ID);
          if (parameters.specularMap !== void 0) {
            parameters.specularMap.encoding = sRGBEncoding;
          }
          break;
        case "TransparentColor":
        case "TransparencyFactor":
          parameters.alphaMap = scope.getTexture(textureMap, child.ID);
          parameters.transparent = true;
          break;
        case "AmbientColor":
        case "ShininessExponent":
        case "SpecularFactor":
        case "VectorDisplacementColor":
        default:
          console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.", type);
          break;
      }
    });
    return parameters;
  }
  getTexture(textureMap, id) {
    if ("LayeredTexture" in fbxTree.Objects && id in fbxTree.Objects.LayeredTexture) {
      console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer.");
      id = connections.get(id).children[0].ID;
    }
    return textureMap.get(id);
  }
  parseDeformers() {
    const skeletons = {};
    const morphTargets = {};
    if ("Deformer" in fbxTree.Objects) {
      const DeformerNodes = fbxTree.Objects.Deformer;
      for (const nodeID in DeformerNodes) {
        const deformerNode = DeformerNodes[nodeID];
        const relationships = connections.get(parseInt(nodeID));
        if (deformerNode.attrType === "Skin") {
          const skeleton = this.parseSkeleton(relationships, DeformerNodes);
          skeleton.ID = nodeID;
          if (relationships.parents.length > 1)
            console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported.");
          skeleton.geometryID = relationships.parents[0].ID;
          skeletons[nodeID] = skeleton;
        } else if (deformerNode.attrType === "BlendShape") {
          const morphTarget = {
            id: nodeID
          };
          morphTarget.rawTargets = this.parseMorphTargets(relationships, DeformerNodes);
          morphTarget.id = nodeID;
          if (relationships.parents.length > 1)
            console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported.");
          morphTargets[nodeID] = morphTarget;
        }
      }
    }
    return {
      skeletons,
      morphTargets
    };
  }
  parseSkeleton(relationships, deformerNodes) {
    const rawBones = [];
    relationships.children.forEach(function(child) {
      const boneNode = deformerNodes[child.ID];
      if (boneNode.attrType !== "Cluster")
        return;
      const rawBone = {
        ID: child.ID,
        indices: [],
        weights: [],
        transformLink: new Matrix4().fromArray(boneNode.TransformLink.a)
      };
      if ("Indexes" in boneNode) {
        rawBone.indices = boneNode.Indexes.a;
        rawBone.weights = boneNode.Weights.a;
      }
      rawBones.push(rawBone);
    });
    return {
      rawBones,
      bones: []
    };
  }
  parseMorphTargets(relationships, deformerNodes) {
    const rawMorphTargets = [];
    for (let i = 0; i < relationships.children.length; i++) {
      const child = relationships.children[i];
      const morphTargetNode = deformerNodes[child.ID];
      const rawMorphTarget = {
        name: morphTargetNode.attrName,
        initialWeight: morphTargetNode.DeformPercent,
        id: morphTargetNode.id,
        fullWeights: morphTargetNode.FullWeights.a
      };
      if (morphTargetNode.attrType !== "BlendShapeChannel")
        return;
      rawMorphTarget.geoID = connections.get(parseInt(child.ID)).children.filter(function(child2) {
        return child2.relationship === void 0;
      })[0].ID;
      rawMorphTargets.push(rawMorphTarget);
    }
    return rawMorphTargets;
  }
  parseScene(deformers, geometryMap, materialMap) {
    sceneGraph = new Group$1();
    const modelMap = this.parseModels(deformers.skeletons, geometryMap, materialMap);
    const modelNodes = fbxTree.Objects.Model;
    const scope = this;
    modelMap.forEach(function(model) {
      const modelNode = modelNodes[model.ID];
      scope.setLookAtProperties(model, modelNode);
      const parentConnections = connections.get(model.ID).parents;
      parentConnections.forEach(function(connection) {
        const parent = modelMap.get(connection.ID);
        if (parent !== void 0)
          parent.add(model);
      });
      if (model.parent === null) {
        sceneGraph.add(model);
      }
    });
    this.bindSkeleton(deformers.skeletons, geometryMap, modelMap);
    this.createAmbientLight();
    sceneGraph.traverse(function(node) {
      if (node.userData.transformData) {
        if (node.parent) {
          node.userData.transformData.parentMatrix = node.parent.matrix;
          node.userData.transformData.parentMatrixWorld = node.parent.matrixWorld;
        }
        const transform = generateTransform(node.userData.transformData);
        node.applyMatrix4(transform);
        node.updateWorldMatrix();
      }
    });
    const animations = new AnimationParser().parse();
    if (sceneGraph.children.length === 1 && sceneGraph.children[0].isGroup) {
      sceneGraph.children[0].animations = animations;
      sceneGraph = sceneGraph.children[0];
    }
    sceneGraph.animations = animations;
  }
  parseModels(skeletons, geometryMap, materialMap) {
    const modelMap = /* @__PURE__ */ new Map();
    const modelNodes = fbxTree.Objects.Model;
    for (const nodeID in modelNodes) {
      const id = parseInt(nodeID);
      const node = modelNodes[nodeID];
      const relationships = connections.get(id);
      let model = this.buildSkeleton(relationships, skeletons, id, node.attrName);
      if (!model) {
        switch (node.attrType) {
          case "Camera":
            model = this.createCamera(relationships);
            break;
          case "Light":
            model = this.createLight(relationships);
            break;
          case "Mesh":
            model = this.createMesh(relationships, geometryMap, materialMap);
            break;
          case "NurbsCurve":
            model = this.createCurve(relationships, geometryMap);
            break;
          case "LimbNode":
          case "Root":
            model = new Bone();
            break;
          case "Null":
          default:
            model = new Group$1();
            break;
        }
        model.name = node.attrName ? PropertyBinding.sanitizeNodeName(node.attrName) : "";
        model.ID = id;
      }
      this.getTransformData(model, node);
      modelMap.set(id, model);
    }
    return modelMap;
  }
  buildSkeleton(relationships, skeletons, id, name) {
    let bone = null;
    relationships.parents.forEach(function(parent) {
      for (const ID in skeletons) {
        const skeleton = skeletons[ID];
        skeleton.rawBones.forEach(function(rawBone, i) {
          if (rawBone.ID === parent.ID) {
            const subBone = bone;
            bone = new Bone();
            bone.matrixWorld.copy(rawBone.transformLink);
            bone.name = name ? PropertyBinding.sanitizeNodeName(name) : "";
            bone.ID = id;
            skeleton.bones[i] = bone;
            if (subBone !== null) {
              bone.add(subBone);
            }
          }
        });
      }
    });
    return bone;
  }
  createCamera(relationships) {
    let model;
    let cameraAttribute;
    relationships.children.forEach(function(child) {
      const attr = fbxTree.Objects.NodeAttribute[child.ID];
      if (attr !== void 0) {
        cameraAttribute = attr;
      }
    });
    if (cameraAttribute === void 0) {
      model = new Object3D();
    } else {
      let type = 0;
      if (cameraAttribute.CameraProjectionType !== void 0 && cameraAttribute.CameraProjectionType.value === 1) {
        type = 1;
      }
      let nearClippingPlane = 1;
      if (cameraAttribute.NearPlane !== void 0) {
        nearClippingPlane = cameraAttribute.NearPlane.value / 1e3;
      }
      let farClippingPlane = 1e3;
      if (cameraAttribute.FarPlane !== void 0) {
        farClippingPlane = cameraAttribute.FarPlane.value / 1e3;
      }
      let width = window.innerWidth;
      let height = window.innerHeight;
      if (cameraAttribute.AspectWidth !== void 0 && cameraAttribute.AspectHeight !== void 0) {
        width = cameraAttribute.AspectWidth.value;
        height = cameraAttribute.AspectHeight.value;
      }
      const aspect = width / height;
      let fov = 45;
      if (cameraAttribute.FieldOfView !== void 0) {
        fov = cameraAttribute.FieldOfView.value;
      }
      const focalLength = cameraAttribute.FocalLength ? cameraAttribute.FocalLength.value : null;
      switch (type) {
        case 0:
          model = new PerspectiveCamera(fov, aspect, nearClippingPlane, farClippingPlane);
          if (focalLength !== null)
            model.setFocalLength(focalLength);
          break;
        case 1:
          model = new OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, nearClippingPlane, farClippingPlane);
          break;
        default:
          console.warn("THREE.FBXLoader: Unknown camera type " + type + ".");
          model = new Object3D();
          break;
      }
    }
    return model;
  }
  createLight(relationships) {
    let model;
    let lightAttribute;
    relationships.children.forEach(function(child) {
      const attr = fbxTree.Objects.NodeAttribute[child.ID];
      if (attr !== void 0) {
        lightAttribute = attr;
      }
    });
    if (lightAttribute === void 0) {
      model = new Object3D();
    } else {
      let type;
      if (lightAttribute.LightType === void 0) {
        type = 0;
      } else {
        type = lightAttribute.LightType.value;
      }
      let color = 16777215;
      if (lightAttribute.Color !== void 0) {
        color = new Color().fromArray(lightAttribute.Color.value);
      }
      let intensity = lightAttribute.Intensity === void 0 ? 1 : lightAttribute.Intensity.value / 100;
      if (lightAttribute.CastLightOnObject !== void 0 && lightAttribute.CastLightOnObject.value === 0) {
        intensity = 0;
      }
      let distance = 0;
      if (lightAttribute.FarAttenuationEnd !== void 0) {
        if (lightAttribute.EnableFarAttenuation !== void 0 && lightAttribute.EnableFarAttenuation.value === 0) {
          distance = 0;
        } else {
          distance = lightAttribute.FarAttenuationEnd.value;
        }
      }
      const decay = 1;
      switch (type) {
        case 0:
          model = new PointLight$1(color, intensity, distance, decay);
          break;
        case 1:
          model = new DirectionalLight$1(color, intensity);
          break;
        case 2:
          let angle = Math.PI / 3;
          if (lightAttribute.InnerAngle !== void 0) {
            angle = MathUtils.degToRad(lightAttribute.InnerAngle.value);
          }
          let penumbra = 0;
          if (lightAttribute.OuterAngle !== void 0) {
            penumbra = MathUtils.degToRad(lightAttribute.OuterAngle.value);
            penumbra = Math.max(penumbra, 1);
          }
          model = new SpotLight$1(color, intensity, distance, angle, penumbra, decay);
          break;
        default:
          console.warn("THREE.FBXLoader: Unknown light type " + lightAttribute.LightType.value + ", defaulting to a PointLight.");
          model = new PointLight$1(color, intensity);
          break;
      }
      if (lightAttribute.CastShadows !== void 0 && lightAttribute.CastShadows.value === 1) {
        model.castShadow = true;
      }
    }
    return model;
  }
  createMesh(relationships, geometryMap, materialMap) {
    let model;
    let geometry = null;
    let material = null;
    const materials = [];
    relationships.children.forEach(function(child) {
      if (geometryMap.has(child.ID)) {
        geometry = geometryMap.get(child.ID);
      }
      if (materialMap.has(child.ID)) {
        materials.push(materialMap.get(child.ID));
      }
    });
    if (materials.length > 1) {
      material = materials;
    } else if (materials.length > 0) {
      material = materials[0];
    } else {
      material = new MeshPhongMaterial({ color: 13421772 });
      materials.push(material);
    }
    if ("color" in geometry.attributes) {
      materials.forEach(function(material2) {
        material2.vertexColors = true;
      });
    }
    if (geometry.FBX_Deformer) {
      model = new SkinnedMesh(geometry, material);
      model.normalizeSkinWeights();
    } else {
      model = new Mesh(geometry, material);
    }
    return model;
  }
  createCurve(relationships, geometryMap) {
    const geometry = relationships.children.reduce(function(geo, child) {
      if (geometryMap.has(child.ID))
        geo = geometryMap.get(child.ID);
      return geo;
    }, null);
    const material = new LineBasicMaterial({ color: 3342591, linewidth: 1 });
    return new Line(geometry, material);
  }
  getTransformData(model, modelNode) {
    const transformData = {};
    if ("InheritType" in modelNode)
      transformData.inheritType = parseInt(modelNode.InheritType.value);
    if ("RotationOrder" in modelNode)
      transformData.eulerOrder = getEulerOrder(modelNode.RotationOrder.value);
    else
      transformData.eulerOrder = "ZYX";
    if ("Lcl_Translation" in modelNode)
      transformData.translation = modelNode.Lcl_Translation.value;
    if ("PreRotation" in modelNode)
      transformData.preRotation = modelNode.PreRotation.value;
    if ("Lcl_Rotation" in modelNode)
      transformData.rotation = modelNode.Lcl_Rotation.value;
    if ("PostRotation" in modelNode)
      transformData.postRotation = modelNode.PostRotation.value;
    if ("Lcl_Scaling" in modelNode)
      transformData.scale = modelNode.Lcl_Scaling.value;
    if ("ScalingOffset" in modelNode)
      transformData.scalingOffset = modelNode.ScalingOffset.value;
    if ("ScalingPivot" in modelNode)
      transformData.scalingPivot = modelNode.ScalingPivot.value;
    if ("RotationOffset" in modelNode)
      transformData.rotationOffset = modelNode.RotationOffset.value;
    if ("RotationPivot" in modelNode)
      transformData.rotationPivot = modelNode.RotationPivot.value;
    model.userData.transformData = transformData;
  }
  setLookAtProperties(model, modelNode) {
    if ("LookAtProperty" in modelNode) {
      const children = connections.get(model.ID).children;
      children.forEach(function(child) {
        if (child.relationship === "LookAtProperty") {
          const lookAtTarget = fbxTree.Objects.Model[child.ID];
          if ("Lcl_Translation" in lookAtTarget) {
            const pos = lookAtTarget.Lcl_Translation.value;
            if (model.target !== void 0) {
              model.target.position.fromArray(pos);
              sceneGraph.add(model.target);
            } else {
              model.lookAt(new Vector3().fromArray(pos));
            }
          }
        }
      });
    }
  }
  bindSkeleton(skeletons, geometryMap, modelMap) {
    const bindMatrices = this.parsePoseNodes();
    for (const ID in skeletons) {
      const skeleton = skeletons[ID];
      const parents = connections.get(parseInt(skeleton.ID)).parents;
      parents.forEach(function(parent) {
        if (geometryMap.has(parent.ID)) {
          const geoID = parent.ID;
          const geoRelationships = connections.get(geoID);
          geoRelationships.parents.forEach(function(geoConnParent) {
            if (modelMap.has(geoConnParent.ID)) {
              const model = modelMap.get(geoConnParent.ID);
              model.bind(new Skeleton(skeleton.bones), bindMatrices[geoConnParent.ID]);
            }
          });
        }
      });
    }
  }
  parsePoseNodes() {
    const bindMatrices = {};
    if ("Pose" in fbxTree.Objects) {
      const BindPoseNode = fbxTree.Objects.Pose;
      for (const nodeID in BindPoseNode) {
        if (BindPoseNode[nodeID].attrType === "BindPose" && BindPoseNode[nodeID].NbPoseNodes > 0) {
          const poseNodes = BindPoseNode[nodeID].PoseNode;
          if (Array.isArray(poseNodes)) {
            poseNodes.forEach(function(poseNode) {
              bindMatrices[poseNode.Node] = new Matrix4().fromArray(poseNode.Matrix.a);
            });
          } else {
            bindMatrices[poseNodes.Node] = new Matrix4().fromArray(poseNodes.Matrix.a);
          }
        }
      }
    }
    return bindMatrices;
  }
  createAmbientLight() {
    if ("GlobalSettings" in fbxTree && "AmbientColor" in fbxTree.GlobalSettings) {
      const ambientColor = fbxTree.GlobalSettings.AmbientColor.value;
      const r = ambientColor[0];
      const g = ambientColor[1];
      const b = ambientColor[2];
      if (r !== 0 || g !== 0 || b !== 0) {
        const color = new Color(r, g, b);
        sceneGraph.add(new AmbientLight$1(color, 1));
      }
    }
  }
}
class GeometryParser {
  parse(deformers) {
    const geometryMap = /* @__PURE__ */ new Map();
    if ("Geometry" in fbxTree.Objects) {
      const geoNodes = fbxTree.Objects.Geometry;
      for (const nodeID in geoNodes) {
        const relationships = connections.get(parseInt(nodeID));
        const geo = this.parseGeometry(relationships, geoNodes[nodeID], deformers);
        geometryMap.set(parseInt(nodeID), geo);
      }
    }
    return geometryMap;
  }
  parseGeometry(relationships, geoNode, deformers) {
    switch (geoNode.attrType) {
      case "Mesh":
        return this.parseMeshGeometry(relationships, geoNode, deformers);
      case "NurbsCurve":
        return this.parseNurbsGeometry(geoNode);
    }
  }
  parseMeshGeometry(relationships, geoNode, deformers) {
    const skeletons = deformers.skeletons;
    const morphTargets = [];
    const modelNodes = relationships.parents.map(function(parent) {
      return fbxTree.Objects.Model[parent.ID];
    });
    if (modelNodes.length === 0)
      return;
    const skeleton = relationships.children.reduce(function(skeleton2, child) {
      if (skeletons[child.ID] !== void 0)
        skeleton2 = skeletons[child.ID];
      return skeleton2;
    }, null);
    relationships.children.forEach(function(child) {
      if (deformers.morphTargets[child.ID] !== void 0) {
        morphTargets.push(deformers.morphTargets[child.ID]);
      }
    });
    const modelNode = modelNodes[0];
    const transformData = {};
    if ("RotationOrder" in modelNode)
      transformData.eulerOrder = getEulerOrder(modelNode.RotationOrder.value);
    if ("InheritType" in modelNode)
      transformData.inheritType = parseInt(modelNode.InheritType.value);
    if ("GeometricTranslation" in modelNode)
      transformData.translation = modelNode.GeometricTranslation.value;
    if ("GeometricRotation" in modelNode)
      transformData.rotation = modelNode.GeometricRotation.value;
    if ("GeometricScaling" in modelNode)
      transformData.scale = modelNode.GeometricScaling.value;
    const transform = generateTransform(transformData);
    return this.genGeometry(geoNode, skeleton, morphTargets, transform);
  }
  genGeometry(geoNode, skeleton, morphTargets, preTransform) {
    const geo = new BufferGeometry();
    if (geoNode.attrName)
      geo.name = geoNode.attrName;
    const geoInfo = this.parseGeoNode(geoNode, skeleton);
    const buffers = this.genBuffers(geoInfo);
    const positionAttribute = new Float32BufferAttribute(buffers.vertex, 3);
    positionAttribute.applyMatrix4(preTransform);
    geo.setAttribute("position", positionAttribute);
    if (buffers.colors.length > 0) {
      geo.setAttribute("color", new Float32BufferAttribute(buffers.colors, 3));
    }
    if (skeleton) {
      geo.setAttribute("skinIndex", new Uint16BufferAttribute(buffers.weightsIndices, 4));
      geo.setAttribute("skinWeight", new Float32BufferAttribute(buffers.vertexWeights, 4));
      geo.FBX_Deformer = skeleton;
    }
    if (buffers.normal.length > 0) {
      const normalMatrix = new Matrix3().getNormalMatrix(preTransform);
      const normalAttribute = new Float32BufferAttribute(buffers.normal, 3);
      normalAttribute.applyNormalMatrix(normalMatrix);
      geo.setAttribute("normal", normalAttribute);
    }
    buffers.uvs.forEach(function(uvBuffer, i) {
      let name = "uv" + (i + 1).toString();
      if (i === 0) {
        name = "uv";
      }
      geo.setAttribute(name, new Float32BufferAttribute(buffers.uvs[i], 2));
    });
    if (geoInfo.material && geoInfo.material.mappingType !== "AllSame") {
      let prevMaterialIndex = buffers.materialIndex[0];
      let startIndex = 0;
      buffers.materialIndex.forEach(function(currentIndex, i) {
        if (currentIndex !== prevMaterialIndex) {
          geo.addGroup(startIndex, i - startIndex, prevMaterialIndex);
          prevMaterialIndex = currentIndex;
          startIndex = i;
        }
      });
      if (geo.groups.length > 0) {
        const lastGroup = geo.groups[geo.groups.length - 1];
        const lastIndex = lastGroup.start + lastGroup.count;
        if (lastIndex !== buffers.materialIndex.length) {
          geo.addGroup(lastIndex, buffers.materialIndex.length - lastIndex, prevMaterialIndex);
        }
      }
      if (geo.groups.length === 0) {
        geo.addGroup(0, buffers.materialIndex.length, buffers.materialIndex[0]);
      }
    }
    this.addMorphTargets(geo, geoNode, morphTargets, preTransform);
    return geo;
  }
  parseGeoNode(geoNode, skeleton) {
    const geoInfo = {};
    geoInfo.vertexPositions = geoNode.Vertices !== void 0 ? geoNode.Vertices.a : [];
    geoInfo.vertexIndices = geoNode.PolygonVertexIndex !== void 0 ? geoNode.PolygonVertexIndex.a : [];
    if (geoNode.LayerElementColor) {
      geoInfo.color = this.parseVertexColors(geoNode.LayerElementColor[0]);
    }
    if (geoNode.LayerElementMaterial) {
      geoInfo.material = this.parseMaterialIndices(geoNode.LayerElementMaterial[0]);
    }
    if (geoNode.LayerElementNormal) {
      geoInfo.normal = this.parseNormals(geoNode.LayerElementNormal[0]);
    }
    if (geoNode.LayerElementUV) {
      geoInfo.uv = [];
      let i = 0;
      while (geoNode.LayerElementUV[i]) {
        if (geoNode.LayerElementUV[i].UV) {
          geoInfo.uv.push(this.parseUVs(geoNode.LayerElementUV[i]));
        }
        i++;
      }
    }
    geoInfo.weightTable = {};
    if (skeleton !== null) {
      geoInfo.skeleton = skeleton;
      skeleton.rawBones.forEach(function(rawBone, i) {
        rawBone.indices.forEach(function(index, j) {
          if (geoInfo.weightTable[index] === void 0)
            geoInfo.weightTable[index] = [];
          geoInfo.weightTable[index].push({
            id: i,
            weight: rawBone.weights[j]
          });
        });
      });
    }
    return geoInfo;
  }
  genBuffers(geoInfo) {
    const buffers = {
      vertex: [],
      normal: [],
      colors: [],
      uvs: [],
      materialIndex: [],
      vertexWeights: [],
      weightsIndices: []
    };
    let polygonIndex = 0;
    let faceLength = 0;
    let displayedWeightsWarning = false;
    let facePositionIndexes = [];
    let faceNormals = [];
    let faceColors = [];
    let faceUVs = [];
    let faceWeights = [];
    let faceWeightIndices = [];
    const scope = this;
    geoInfo.vertexIndices.forEach(function(vertexIndex, polygonVertexIndex) {
      let materialIndex;
      let endOfFace = false;
      if (vertexIndex < 0) {
        vertexIndex = vertexIndex ^ -1;
        endOfFace = true;
      }
      let weightIndices = [];
      let weights = [];
      facePositionIndexes.push(vertexIndex * 3, vertexIndex * 3 + 1, vertexIndex * 3 + 2);
      if (geoInfo.color) {
        const data = getData(polygonVertexIndex, polygonIndex, vertexIndex, geoInfo.color);
        faceColors.push(data[0], data[1], data[2]);
      }
      if (geoInfo.skeleton) {
        if (geoInfo.weightTable[vertexIndex] !== void 0) {
          geoInfo.weightTable[vertexIndex].forEach(function(wt) {
            weights.push(wt.weight);
            weightIndices.push(wt.id);
          });
        }
        if (weights.length > 4) {
          if (!displayedWeightsWarning) {
            console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights.");
            displayedWeightsWarning = true;
          }
          const wIndex = [0, 0, 0, 0];
          const Weight = [0, 0, 0, 0];
          weights.forEach(function(weight, weightIndex) {
            let currentWeight = weight;
            let currentIndex = weightIndices[weightIndex];
            Weight.forEach(function(comparedWeight, comparedWeightIndex, comparedWeightArray) {
              if (currentWeight > comparedWeight) {
                comparedWeightArray[comparedWeightIndex] = currentWeight;
                currentWeight = comparedWeight;
                const tmp = wIndex[comparedWeightIndex];
                wIndex[comparedWeightIndex] = currentIndex;
                currentIndex = tmp;
              }
            });
          });
          weightIndices = wIndex;
          weights = Weight;
        }
        while (weights.length < 4) {
          weights.push(0);
          weightIndices.push(0);
        }
        for (let i = 0; i < 4; ++i) {
          faceWeights.push(weights[i]);
          faceWeightIndices.push(weightIndices[i]);
        }
      }
      if (geoInfo.normal) {
        const data = getData(polygonVertexIndex, polygonIndex, vertexIndex, geoInfo.normal);
        faceNormals.push(data[0], data[1], data[2]);
      }
      if (geoInfo.material && geoInfo.material.mappingType !== "AllSame") {
        materialIndex = getData(polygonVertexIndex, polygonIndex, vertexIndex, geoInfo.material)[0];
      }
      if (geoInfo.uv) {
        geoInfo.uv.forEach(function(uv, i) {
          const data = getData(polygonVertexIndex, polygonIndex, vertexIndex, uv);
          if (faceUVs[i] === void 0) {
            faceUVs[i] = [];
          }
          faceUVs[i].push(data[0]);
          faceUVs[i].push(data[1]);
        });
      }
      faceLength++;
      if (endOfFace) {
        scope.genFace(buffers, geoInfo, facePositionIndexes, materialIndex, faceNormals, faceColors, faceUVs, faceWeights, faceWeightIndices, faceLength);
        polygonIndex++;
        faceLength = 0;
        facePositionIndexes = [];
        faceNormals = [];
        faceColors = [];
        faceUVs = [];
        faceWeights = [];
        faceWeightIndices = [];
      }
    });
    return buffers;
  }
  genFace(buffers, geoInfo, facePositionIndexes, materialIndex, faceNormals, faceColors, faceUVs, faceWeights, faceWeightIndices, faceLength) {
    for (let i = 2; i < faceLength; i++) {
      buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[0]]);
      buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[1]]);
      buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[2]]);
      buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[(i - 1) * 3]]);
      buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[(i - 1) * 3 + 1]]);
      buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[(i - 1) * 3 + 2]]);
      buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[i * 3]]);
      buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[i * 3 + 1]]);
      buffers.vertex.push(geoInfo.vertexPositions[facePositionIndexes[i * 3 + 2]]);
      if (geoInfo.skeleton) {
        buffers.vertexWeights.push(faceWeights[0]);
        buffers.vertexWeights.push(faceWeights[1]);
        buffers.vertexWeights.push(faceWeights[2]);
        buffers.vertexWeights.push(faceWeights[3]);
        buffers.vertexWeights.push(faceWeights[(i - 1) * 4]);
        buffers.vertexWeights.push(faceWeights[(i - 1) * 4 + 1]);
        buffers.vertexWeights.push(faceWeights[(i - 1) * 4 + 2]);
        buffers.vertexWeights.push(faceWeights[(i - 1) * 4 + 3]);
        buffers.vertexWeights.push(faceWeights[i * 4]);
        buffers.vertexWeights.push(faceWeights[i * 4 + 1]);
        buffers.vertexWeights.push(faceWeights[i * 4 + 2]);
        buffers.vertexWeights.push(faceWeights[i * 4 + 3]);
        buffers.weightsIndices.push(faceWeightIndices[0]);
        buffers.weightsIndices.push(faceWeightIndices[1]);
        buffers.weightsIndices.push(faceWeightIndices[2]);
        buffers.weightsIndices.push(faceWeightIndices[3]);
        buffers.weightsIndices.push(faceWeightIndices[(i - 1) * 4]);
        buffers.weightsIndices.push(faceWeightIndices[(i - 1) * 4 + 1]);
        buffers.weightsIndices.push(faceWeightIndices[(i - 1) * 4 + 2]);
        buffers.weightsIndices.push(faceWeightIndices[(i - 1) * 4 + 3]);
        buffers.weightsIndices.push(faceWeightIndices[i * 4]);
        buffers.weightsIndices.push(faceWeightIndices[i * 4 + 1]);
        buffers.weightsIndices.push(faceWeightIndices[i * 4 + 2]);
        buffers.weightsIndices.push(faceWeightIndices[i * 4 + 3]);
      }
      if (geoInfo.color) {
        buffers.colors.push(faceColors[0]);
        buffers.colors.push(faceColors[1]);
        buffers.colors.push(faceColors[2]);
        buffers.colors.push(faceColors[(i - 1) * 3]);
        buffers.colors.push(faceColors[(i - 1) * 3 + 1]);
        buffers.colors.push(faceColors[(i - 1) * 3 + 2]);
        buffers.colors.push(faceColors[i * 3]);
        buffers.colors.push(faceColors[i * 3 + 1]);
        buffers.colors.push(faceColors[i * 3 + 2]);
      }
      if (geoInfo.material && geoInfo.material.mappingType !== "AllSame") {
        buffers.materialIndex.push(materialIndex);
        buffers.materialIndex.push(materialIndex);
        buffers.materialIndex.push(materialIndex);
      }
      if (geoInfo.normal) {
        buffers.normal.push(faceNormals[0]);
        buffers.normal.push(faceNormals[1]);
        buffers.normal.push(faceNormals[2]);
        buffers.normal.push(faceNormals[(i - 1) * 3]);
        buffers.normal.push(faceNormals[(i - 1) * 3 + 1]);
        buffers.normal.push(faceNormals[(i - 1) * 3 + 2]);
        buffers.normal.push(faceNormals[i * 3]);
        buffers.normal.push(faceNormals[i * 3 + 1]);
        buffers.normal.push(faceNormals[i * 3 + 2]);
      }
      if (geoInfo.uv) {
        geoInfo.uv.forEach(function(uv, j) {
          if (buffers.uvs[j] === void 0)
            buffers.uvs[j] = [];
          buffers.uvs[j].push(faceUVs[j][0]);
          buffers.uvs[j].push(faceUVs[j][1]);
          buffers.uvs[j].push(faceUVs[j][(i - 1) * 2]);
          buffers.uvs[j].push(faceUVs[j][(i - 1) * 2 + 1]);
          buffers.uvs[j].push(faceUVs[j][i * 2]);
          buffers.uvs[j].push(faceUVs[j][i * 2 + 1]);
        });
      }
    }
  }
  addMorphTargets(parentGeo, parentGeoNode, morphTargets, preTransform) {
    if (morphTargets.length === 0)
      return;
    parentGeo.morphTargetsRelative = true;
    parentGeo.morphAttributes.position = [];
    const scope = this;
    morphTargets.forEach(function(morphTarget) {
      morphTarget.rawTargets.forEach(function(rawTarget) {
        const morphGeoNode = fbxTree.Objects.Geometry[rawTarget.geoID];
        if (morphGeoNode !== void 0) {
          scope.genMorphGeometry(parentGeo, parentGeoNode, morphGeoNode, preTransform, rawTarget.name);
        }
      });
    });
  }
  genMorphGeometry(parentGeo, parentGeoNode, morphGeoNode, preTransform, name) {
    const vertexIndices = parentGeoNode.PolygonVertexIndex !== void 0 ? parentGeoNode.PolygonVertexIndex.a : [];
    const morphPositionsSparse = morphGeoNode.Vertices !== void 0 ? morphGeoNode.Vertices.a : [];
    const indices = morphGeoNode.Indexes !== void 0 ? morphGeoNode.Indexes.a : [];
    const length = parentGeo.attributes.position.count * 3;
    const morphPositions = new Float32Array(length);
    for (let i = 0; i < indices.length; i++) {
      const morphIndex = indices[i] * 3;
      morphPositions[morphIndex] = morphPositionsSparse[i * 3];
      morphPositions[morphIndex + 1] = morphPositionsSparse[i * 3 + 1];
      morphPositions[morphIndex + 2] = morphPositionsSparse[i * 3 + 2];
    }
    const morphGeoInfo = {
      vertexIndices,
      vertexPositions: morphPositions
    };
    const morphBuffers = this.genBuffers(morphGeoInfo);
    const positionAttribute = new Float32BufferAttribute(morphBuffers.vertex, 3);
    positionAttribute.name = name || morphGeoNode.attrName;
    positionAttribute.applyMatrix4(preTransform);
    parentGeo.morphAttributes.position.push(positionAttribute);
  }
  parseNormals(NormalNode) {
    const mappingType = NormalNode.MappingInformationType;
    const referenceType = NormalNode.ReferenceInformationType;
    const buffer = NormalNode.Normals.a;
    let indexBuffer = [];
    if (referenceType === "IndexToDirect") {
      if ("NormalIndex" in NormalNode) {
        indexBuffer = NormalNode.NormalIndex.a;
      } else if ("NormalsIndex" in NormalNode) {
        indexBuffer = NormalNode.NormalsIndex.a;
      }
    }
    return {
      dataSize: 3,
      buffer,
      indices: indexBuffer,
      mappingType,
      referenceType
    };
  }
  parseUVs(UVNode) {
    const mappingType = UVNode.MappingInformationType;
    const referenceType = UVNode.ReferenceInformationType;
    const buffer = UVNode.UV.a;
    let indexBuffer = [];
    if (referenceType === "IndexToDirect") {
      indexBuffer = UVNode.UVIndex.a;
    }
    return {
      dataSize: 2,
      buffer,
      indices: indexBuffer,
      mappingType,
      referenceType
    };
  }
  parseVertexColors(ColorNode) {
    const mappingType = ColorNode.MappingInformationType;
    const referenceType = ColorNode.ReferenceInformationType;
    const buffer = ColorNode.Colors.a;
    let indexBuffer = [];
    if (referenceType === "IndexToDirect") {
      indexBuffer = ColorNode.ColorIndex.a;
    }
    return {
      dataSize: 4,
      buffer,
      indices: indexBuffer,
      mappingType,
      referenceType
    };
  }
  parseMaterialIndices(MaterialNode) {
    const mappingType = MaterialNode.MappingInformationType;
    const referenceType = MaterialNode.ReferenceInformationType;
    if (mappingType === "NoMappingInformation") {
      return {
        dataSize: 1,
        buffer: [0],
        indices: [0],
        mappingType: "AllSame",
        referenceType
      };
    }
    const materialIndexBuffer = MaterialNode.Materials.a;
    const materialIndices = [];
    for (let i = 0; i < materialIndexBuffer.length; ++i) {
      materialIndices.push(i);
    }
    return {
      dataSize: 1,
      buffer: materialIndexBuffer,
      indices: materialIndices,
      mappingType,
      referenceType
    };
  }
  parseNurbsGeometry(geoNode) {
    if (NURBSCurve === void 0) {
      console.error("THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry.");
      return new BufferGeometry();
    }
    const order = parseInt(geoNode.Order);
    if (isNaN(order)) {
      console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s", geoNode.Order, geoNode.id);
      return new BufferGeometry();
    }
    const degree = order - 1;
    const knots = geoNode.KnotVector.a;
    const controlPoints = [];
    const pointsValues = geoNode.Points.a;
    for (let i = 0, l = pointsValues.length; i < l; i += 4) {
      controlPoints.push(new Vector4().fromArray(pointsValues, i));
    }
    let startKnot, endKnot;
    if (geoNode.Form === "Closed") {
      controlPoints.push(controlPoints[0]);
    } else if (geoNode.Form === "Periodic") {
      startKnot = degree;
      endKnot = knots.length - 1 - startKnot;
      for (let i = 0; i < degree; ++i) {
        controlPoints.push(controlPoints[i]);
      }
    }
    const curve = new NURBSCurve(degree, knots, controlPoints, startKnot, endKnot);
    const points = curve.getPoints(controlPoints.length * 12);
    return new BufferGeometry().setFromPoints(points);
  }
}
class AnimationParser {
  parse() {
    const animationClips = [];
    const rawClips = this.parseClips();
    if (rawClips !== void 0) {
      for (const key in rawClips) {
        const rawClip = rawClips[key];
        const clip = this.addClip(rawClip);
        animationClips.push(clip);
      }
    }
    return animationClips;
  }
  parseClips() {
    if (fbxTree.Objects.AnimationCurve === void 0)
      return void 0;
    const curveNodesMap = this.parseAnimationCurveNodes();
    this.parseAnimationCurves(curveNodesMap);
    const layersMap = this.parseAnimationLayers(curveNodesMap);
    const rawClips = this.parseAnimStacks(layersMap);
    return rawClips;
  }
  parseAnimationCurveNodes() {
    const rawCurveNodes = fbxTree.Objects.AnimationCurveNode;
    const curveNodesMap = /* @__PURE__ */ new Map();
    for (const nodeID in rawCurveNodes) {
      const rawCurveNode = rawCurveNodes[nodeID];
      if (rawCurveNode.attrName.match(/S|R|T|DeformPercent/) !== null) {
        const curveNode = {
          id: rawCurveNode.id,
          attr: rawCurveNode.attrName,
          curves: {}
        };
        curveNodesMap.set(curveNode.id, curveNode);
      }
    }
    return curveNodesMap;
  }
  parseAnimationCurves(curveNodesMap) {
    const rawCurves = fbxTree.Objects.AnimationCurve;
    for (const nodeID in rawCurves) {
      const animationCurve = {
        id: rawCurves[nodeID].id,
        times: rawCurves[nodeID].KeyTime.a.map(convertFBXTimeToSeconds),
        values: rawCurves[nodeID].KeyValueFloat.a
      };
      const relationships = connections.get(animationCurve.id);
      if (relationships !== void 0) {
        const animationCurveID = relationships.parents[0].ID;
        const animationCurveRelationship = relationships.parents[0].relationship;
        if (animationCurveRelationship.match(/X/)) {
          curveNodesMap.get(animationCurveID).curves["x"] = animationCurve;
        } else if (animationCurveRelationship.match(/Y/)) {
          curveNodesMap.get(animationCurveID).curves["y"] = animationCurve;
        } else if (animationCurveRelationship.match(/Z/)) {
          curveNodesMap.get(animationCurveID).curves["z"] = animationCurve;
        } else if (animationCurveRelationship.match(/d|DeformPercent/) && curveNodesMap.has(animationCurveID)) {
          curveNodesMap.get(animationCurveID).curves["morph"] = animationCurve;
        }
      }
    }
  }
  parseAnimationLayers(curveNodesMap) {
    const rawLayers = fbxTree.Objects.AnimationLayer;
    const layersMap = /* @__PURE__ */ new Map();
    for (const nodeID in rawLayers) {
      const layerCurveNodes = [];
      const connection = connections.get(parseInt(nodeID));
      if (connection !== void 0) {
        const children = connection.children;
        children.forEach(function(child, i) {
          if (curveNodesMap.has(child.ID)) {
            const curveNode = curveNodesMap.get(child.ID);
            if (curveNode.curves.x !== void 0 || curveNode.curves.y !== void 0 || curveNode.curves.z !== void 0) {
              if (layerCurveNodes[i] === void 0) {
                const modelID = connections.get(child.ID).parents.filter(function(parent) {
                  return parent.relationship !== void 0;
                })[0].ID;
                if (modelID !== void 0) {
                  const rawModel = fbxTree.Objects.Model[modelID.toString()];
                  if (rawModel === void 0) {
                    console.warn("THREE.FBXLoader: Encountered a unused curve.", child);
                    return;
                  }
                  const node = {
                    modelName: rawModel.attrName ? PropertyBinding.sanitizeNodeName(rawModel.attrName) : "",
                    ID: rawModel.id,
                    initialPosition: [0, 0, 0],
                    initialRotation: [0, 0, 0],
                    initialScale: [1, 1, 1]
                  };
                  sceneGraph.traverse(function(child2) {
                    if (child2.ID === rawModel.id) {
                      node.transform = child2.matrix;
                      if (child2.userData.transformData)
                        node.eulerOrder = child2.userData.transformData.eulerOrder;
                    }
                  });
                  if (!node.transform)
                    node.transform = new Matrix4();
                  if ("PreRotation" in rawModel)
                    node.preRotation = rawModel.PreRotation.value;
                  if ("PostRotation" in rawModel)
                    node.postRotation = rawModel.PostRotation.value;
                  layerCurveNodes[i] = node;
                }
              }
              if (layerCurveNodes[i])
                layerCurveNodes[i][curveNode.attr] = curveNode;
            } else if (curveNode.curves.morph !== void 0) {
              if (layerCurveNodes[i] === void 0) {
                const deformerID = connections.get(child.ID).parents.filter(function(parent) {
                  return parent.relationship !== void 0;
                })[0].ID;
                const morpherID = connections.get(deformerID).parents[0].ID;
                const geoID = connections.get(morpherID).parents[0].ID;
                const modelID = connections.get(geoID).parents[0].ID;
                const rawModel = fbxTree.Objects.Model[modelID];
                const node = {
                  modelName: rawModel.attrName ? PropertyBinding.sanitizeNodeName(rawModel.attrName) : "",
                  morphName: fbxTree.Objects.Deformer[deformerID].attrName
                };
                layerCurveNodes[i] = node;
              }
              layerCurveNodes[i][curveNode.attr] = curveNode;
            }
          }
        });
        layersMap.set(parseInt(nodeID), layerCurveNodes);
      }
    }
    return layersMap;
  }
  parseAnimStacks(layersMap) {
    const rawStacks = fbxTree.Objects.AnimationStack;
    const rawClips = {};
    for (const nodeID in rawStacks) {
      const children = connections.get(parseInt(nodeID)).children;
      if (children.length > 1) {
        console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");
      }
      const layer = layersMap.get(children[0].ID);
      rawClips[nodeID] = {
        name: rawStacks[nodeID].attrName,
        layer
      };
    }
    return rawClips;
  }
  addClip(rawClip) {
    let tracks = [];
    const scope = this;
    rawClip.layer.forEach(function(rawTracks) {
      tracks = tracks.concat(scope.generateTracks(rawTracks));
    });
    return new AnimationClip(rawClip.name, -1, tracks);
  }
  generateTracks(rawTracks) {
    const tracks = [];
    let initialPosition = new Vector3();
    let initialRotation = new Quaternion();
    let initialScale = new Vector3();
    if (rawTracks.transform)
      rawTracks.transform.decompose(initialPosition, initialRotation, initialScale);
    initialPosition = initialPosition.toArray();
    initialRotation = new Euler().setFromQuaternion(initialRotation, rawTracks.eulerOrder).toArray();
    initialScale = initialScale.toArray();
    if (rawTracks.T !== void 0 && Object.keys(rawTracks.T.curves).length > 0) {
      const positionTrack = this.generateVectorTrack(rawTracks.modelName, rawTracks.T.curves, initialPosition, "position");
      if (positionTrack !== void 0)
        tracks.push(positionTrack);
    }
    if (rawTracks.R !== void 0 && Object.keys(rawTracks.R.curves).length > 0) {
      const rotationTrack = this.generateRotationTrack(rawTracks.modelName, rawTracks.R.curves, initialRotation, rawTracks.preRotation, rawTracks.postRotation, rawTracks.eulerOrder);
      if (rotationTrack !== void 0)
        tracks.push(rotationTrack);
    }
    if (rawTracks.S !== void 0 && Object.keys(rawTracks.S.curves).length > 0) {
      const scaleTrack = this.generateVectorTrack(rawTracks.modelName, rawTracks.S.curves, initialScale, "scale");
      if (scaleTrack !== void 0)
        tracks.push(scaleTrack);
    }
    if (rawTracks.DeformPercent !== void 0) {
      const morphTrack = this.generateMorphTrack(rawTracks);
      if (morphTrack !== void 0)
        tracks.push(morphTrack);
    }
    return tracks;
  }
  generateVectorTrack(modelName, curves, initialValue, type) {
    const times = this.getTimesForAllAxes(curves);
    const values = this.getKeyframeTrackValues(times, curves, initialValue);
    return new VectorKeyframeTrack(modelName + "." + type, times, values);
  }
  generateRotationTrack(modelName, curves, initialValue, preRotation, postRotation, eulerOrder) {
    if (curves.x !== void 0) {
      this.interpolateRotations(curves.x);
      curves.x.values = curves.x.values.map(MathUtils.degToRad);
    }
    if (curves.y !== void 0) {
      this.interpolateRotations(curves.y);
      curves.y.values = curves.y.values.map(MathUtils.degToRad);
    }
    if (curves.z !== void 0) {
      this.interpolateRotations(curves.z);
      curves.z.values = curves.z.values.map(MathUtils.degToRad);
    }
    const times = this.getTimesForAllAxes(curves);
    const values = this.getKeyframeTrackValues(times, curves, initialValue);
    if (preRotation !== void 0) {
      preRotation = preRotation.map(MathUtils.degToRad);
      preRotation.push(eulerOrder);
      preRotation = new Euler().fromArray(preRotation);
      preRotation = new Quaternion().setFromEuler(preRotation);
    }
    if (postRotation !== void 0) {
      postRotation = postRotation.map(MathUtils.degToRad);
      postRotation.push(eulerOrder);
      postRotation = new Euler().fromArray(postRotation);
      postRotation = new Quaternion().setFromEuler(postRotation).invert();
    }
    const quaternion = new Quaternion();
    const euler = new Euler();
    const quaternionValues = [];
    for (let i = 0; i < values.length; i += 3) {
      euler.set(values[i], values[i + 1], values[i + 2], eulerOrder);
      quaternion.setFromEuler(euler);
      if (preRotation !== void 0)
        quaternion.premultiply(preRotation);
      if (postRotation !== void 0)
        quaternion.multiply(postRotation);
      quaternion.toArray(quaternionValues, i / 3 * 4);
    }
    return new QuaternionKeyframeTrack(modelName + ".quaternion", times, quaternionValues);
  }
  generateMorphTrack(rawTracks) {
    const curves = rawTracks.DeformPercent.curves.morph;
    const values = curves.values.map(function(val) {
      return val / 100;
    });
    const morphNum = sceneGraph.getObjectByName(rawTracks.modelName).morphTargetDictionary[rawTracks.morphName];
    return new NumberKeyframeTrack(rawTracks.modelName + ".morphTargetInfluences[" + morphNum + "]", curves.times, values);
  }
  getTimesForAllAxes(curves) {
    let times = [];
    if (curves.x !== void 0)
      times = times.concat(curves.x.times);
    if (curves.y !== void 0)
      times = times.concat(curves.y.times);
    if (curves.z !== void 0)
      times = times.concat(curves.z.times);
    times = times.sort(function(a, b) {
      return a - b;
    });
    if (times.length > 1) {
      let targetIndex = 1;
      let lastValue = times[0];
      for (let i = 1; i < times.length; i++) {
        const currentValue = times[i];
        if (currentValue !== lastValue) {
          times[targetIndex] = currentValue;
          lastValue = currentValue;
          targetIndex++;
        }
      }
      times = times.slice(0, targetIndex);
    }
    return times;
  }
  getKeyframeTrackValues(times, curves, initialValue) {
    const prevValue = initialValue;
    const values = [];
    let xIndex = -1;
    let yIndex = -1;
    let zIndex = -1;
    times.forEach(function(time) {
      if (curves.x)
        xIndex = curves.x.times.indexOf(time);
      if (curves.y)
        yIndex = curves.y.times.indexOf(time);
      if (curves.z)
        zIndex = curves.z.times.indexOf(time);
      if (xIndex !== -1) {
        const xValue = curves.x.values[xIndex];
        values.push(xValue);
        prevValue[0] = xValue;
      } else {
        values.push(prevValue[0]);
      }
      if (yIndex !== -1) {
        const yValue = curves.y.values[yIndex];
        values.push(yValue);
        prevValue[1] = yValue;
      } else {
        values.push(prevValue[1]);
      }
      if (zIndex !== -1) {
        const zValue = curves.z.values[zIndex];
        values.push(zValue);
        prevValue[2] = zValue;
      } else {
        values.push(prevValue[2]);
      }
    });
    return values;
  }
  interpolateRotations(curve) {
    for (let i = 1; i < curve.values.length; i++) {
      const initialValue = curve.values[i - 1];
      const valuesSpan = curve.values[i] - initialValue;
      const absoluteSpan = Math.abs(valuesSpan);
      if (absoluteSpan >= 180) {
        const numSubIntervals = absoluteSpan / 180;
        const step = valuesSpan / numSubIntervals;
        let nextValue = initialValue + step;
        const initialTime = curve.times[i - 1];
        const timeSpan = curve.times[i] - initialTime;
        const interval = timeSpan / numSubIntervals;
        let nextTime = initialTime + interval;
        const interpolatedTimes = [];
        const interpolatedValues = [];
        while (nextTime < curve.times[i]) {
          interpolatedTimes.push(nextTime);
          nextTime += interval;
          interpolatedValues.push(nextValue);
          nextValue += step;
        }
        curve.times = inject(curve.times, i, interpolatedTimes);
        curve.values = inject(curve.values, i, interpolatedValues);
      }
    }
  }
}
class TextParser {
  getPrevNode() {
    return this.nodeStack[this.currentIndent - 2];
  }
  getCurrentNode() {
    return this.nodeStack[this.currentIndent - 1];
  }
  getCurrentProp() {
    return this.currentProp;
  }
  pushStack(node) {
    this.nodeStack.push(node);
    this.currentIndent += 1;
  }
  popStack() {
    this.nodeStack.pop();
    this.currentIndent -= 1;
  }
  setCurrentProp(val, name) {
    this.currentProp = val;
    this.currentPropName = name;
  }
  parse(text) {
    this.currentIndent = 0;
    this.allNodes = new FBXTree();
    this.nodeStack = [];
    this.currentProp = [];
    this.currentPropName = "";
    const scope = this;
    const split = text.split(/[\r\n]+/);
    split.forEach(function(line, i) {
      const matchComment = line.match(/^[\s\t]*;/);
      const matchEmpty = line.match(/^[\s\t]*$/);
      if (matchComment || matchEmpty)
        return;
      const matchBeginning = line.match("^\\t{" + scope.currentIndent + "}(\\w+):(.*){", "");
      const matchProperty = line.match("^\\t{" + scope.currentIndent + "}(\\w+):[\\s\\t\\r\\n](.*)");
      const matchEnd = line.match("^\\t{" + (scope.currentIndent - 1) + "}}");
      if (matchBeginning) {
        scope.parseNodeBegin(line, matchBeginning);
      } else if (matchProperty) {
        scope.parseNodeProperty(line, matchProperty, split[++i]);
      } else if (matchEnd) {
        scope.popStack();
      } else if (line.match(/^[^\s\t}]/)) {
        scope.parseNodePropertyContinued(line);
      }
    });
    return this.allNodes;
  }
  parseNodeBegin(line, property) {
    const nodeName = property[1].trim().replace(/^"/, "").replace(/"$/, "");
    const nodeAttrs = property[2].split(",").map(function(attr) {
      return attr.trim().replace(/^"/, "").replace(/"$/, "");
    });
    const node = { name: nodeName };
    const attrs = this.parseNodeAttr(nodeAttrs);
    const currentNode = this.getCurrentNode();
    if (this.currentIndent === 0) {
      this.allNodes.add(nodeName, node);
    } else {
      if (nodeName in currentNode) {
        if (nodeName === "PoseNode") {
          currentNode.PoseNode.push(node);
        } else if (currentNode[nodeName].id !== void 0) {
          currentNode[nodeName] = {};
          currentNode[nodeName][currentNode[nodeName].id] = currentNode[nodeName];
        }
        if (attrs.id !== "")
          currentNode[nodeName][attrs.id] = node;
      } else if (typeof attrs.id === "number") {
        currentNode[nodeName] = {};
        currentNode[nodeName][attrs.id] = node;
      } else if (nodeName !== "Properties70") {
        if (nodeName === "PoseNode")
          currentNode[nodeName] = [node];
        else
          currentNode[nodeName] = node;
      }
    }
    if (typeof attrs.id === "number")
      node.id = attrs.id;
    if (attrs.name !== "")
      node.attrName = attrs.name;
    if (attrs.type !== "")
      node.attrType = attrs.type;
    this.pushStack(node);
  }
  parseNodeAttr(attrs) {
    let id = attrs[0];
    if (attrs[0] !== "") {
      id = parseInt(attrs[0]);
      if (isNaN(id)) {
        id = attrs[0];
      }
    }
    let name = "", type = "";
    if (attrs.length > 1) {
      name = attrs[1].replace(/^(\w+)::/, "");
      type = attrs[2];
    }
    return { id, name, type };
  }
  parseNodeProperty(line, property, contentLine) {
    let propName = property[1].replace(/^"/, "").replace(/"$/, "").trim();
    let propValue = property[2].replace(/^"/, "").replace(/"$/, "").trim();
    if (propName === "Content" && propValue === ",") {
      propValue = contentLine.replace(/"/g, "").replace(/,$/, "").trim();
    }
    const currentNode = this.getCurrentNode();
    const parentName = currentNode.name;
    if (parentName === "Properties70") {
      this.parseNodeSpecialProperty(line, propName, propValue);
      return;
    }
    if (propName === "C") {
      const connProps = propValue.split(",").slice(1);
      const from = parseInt(connProps[0]);
      const to = parseInt(connProps[1]);
      let rest = propValue.split(",").slice(3);
      rest = rest.map(function(elem) {
        return elem.trim().replace(/^"/, "");
      });
      propName = "connections";
      propValue = [from, to];
      append(propValue, rest);
      if (currentNode[propName] === void 0) {
        currentNode[propName] = [];
      }
    }
    if (propName === "Node")
      currentNode.id = propValue;
    if (propName in currentNode && Array.isArray(currentNode[propName])) {
      currentNode[propName].push(propValue);
    } else {
      if (propName !== "a")
        currentNode[propName] = propValue;
      else
        currentNode.a = propValue;
    }
    this.setCurrentProp(currentNode, propName);
    if (propName === "a" && propValue.slice(-1) !== ",") {
      currentNode.a = parseNumberArray(propValue);
    }
  }
  parseNodePropertyContinued(line) {
    const currentNode = this.getCurrentNode();
    currentNode.a += line;
    if (line.slice(-1) !== ",") {
      currentNode.a = parseNumberArray(currentNode.a);
    }
  }
  parseNodeSpecialProperty(line, propName, propValue) {
    const props = propValue.split('",').map(function(prop) {
      return prop.trim().replace(/^\"/, "").replace(/\s/, "_");
    });
    const innerPropName = props[0];
    const innerPropType1 = props[1];
    const innerPropType2 = props[2];
    const innerPropFlag = props[3];
    let innerPropValue = props[4];
    switch (innerPropType1) {
      case "int":
      case "enum":
      case "bool":
      case "ULongLong":
      case "double":
      case "Number":
      case "FieldOfView":
        innerPropValue = parseFloat(innerPropValue);
        break;
      case "Color":
      case "ColorRGB":
      case "Vector3D":
      case "Lcl_Translation":
      case "Lcl_Rotation":
      case "Lcl_Scaling":
        innerPropValue = parseNumberArray(innerPropValue);
        break;
    }
    this.getPrevNode()[innerPropName] = {
      "type": innerPropType1,
      "type2": innerPropType2,
      "flag": innerPropFlag,
      "value": innerPropValue
    };
    this.setCurrentProp(this.getPrevNode(), innerPropName);
  }
}
class BinaryParser {
  parse(buffer) {
    const reader = new BinaryReader(buffer);
    reader.skip(23);
    const version = reader.getUint32();
    if (version < 6400) {
      throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + version);
    }
    const allNodes = new FBXTree();
    while (!this.endOfContent(reader)) {
      const node = this.parseNode(reader, version);
      if (node !== null)
        allNodes.add(node.name, node);
    }
    return allNodes;
  }
  endOfContent(reader) {
    if (reader.size() % 16 === 0) {
      return (reader.getOffset() + 160 + 16 & ~15) >= reader.size();
    } else {
      return reader.getOffset() + 160 + 16 >= reader.size();
    }
  }
  parseNode(reader, version) {
    const node = {};
    const endOffset = version >= 7500 ? reader.getUint64() : reader.getUint32();
    const numProperties = version >= 7500 ? reader.getUint64() : reader.getUint32();
    version >= 7500 ? reader.getUint64() : reader.getUint32();
    const nameLen = reader.getUint8();
    const name = reader.getString(nameLen);
    if (endOffset === 0)
      return null;
    const propertyList = [];
    for (let i = 0; i < numProperties; i++) {
      propertyList.push(this.parseProperty(reader));
    }
    const id = propertyList.length > 0 ? propertyList[0] : "";
    const attrName = propertyList.length > 1 ? propertyList[1] : "";
    const attrType = propertyList.length > 2 ? propertyList[2] : "";
    node.singleProperty = numProperties === 1 && reader.getOffset() === endOffset ? true : false;
    while (endOffset > reader.getOffset()) {
      const subNode = this.parseNode(reader, version);
      if (subNode !== null)
        this.parseSubNode(name, node, subNode);
    }
    node.propertyList = propertyList;
    if (typeof id === "number")
      node.id = id;
    if (attrName !== "")
      node.attrName = attrName;
    if (attrType !== "")
      node.attrType = attrType;
    if (name !== "")
      node.name = name;
    return node;
  }
  parseSubNode(name, node, subNode) {
    if (subNode.singleProperty === true) {
      const value = subNode.propertyList[0];
      if (Array.isArray(value)) {
        node[subNode.name] = subNode;
        subNode.a = value;
      } else {
        node[subNode.name] = value;
      }
    } else if (name === "Connections" && subNode.name === "C") {
      const array = [];
      subNode.propertyList.forEach(function(property, i) {
        if (i !== 0)
          array.push(property);
      });
      if (node.connections === void 0) {
        node.connections = [];
      }
      node.connections.push(array);
    } else if (subNode.name === "Properties70") {
      const keys = Object.keys(subNode);
      keys.forEach(function(key) {
        node[key] = subNode[key];
      });
    } else if (name === "Properties70" && subNode.name === "P") {
      let innerPropName = subNode.propertyList[0];
      let innerPropType1 = subNode.propertyList[1];
      const innerPropType2 = subNode.propertyList[2];
      const innerPropFlag = subNode.propertyList[3];
      let innerPropValue;
      if (innerPropName.indexOf("Lcl ") === 0)
        innerPropName = innerPropName.replace("Lcl ", "Lcl_");
      if (innerPropType1.indexOf("Lcl ") === 0)
        innerPropType1 = innerPropType1.replace("Lcl ", "Lcl_");
      if (innerPropType1 === "Color" || innerPropType1 === "ColorRGB" || innerPropType1 === "Vector" || innerPropType1 === "Vector3D" || innerPropType1.indexOf("Lcl_") === 0) {
        innerPropValue = [
          subNode.propertyList[4],
          subNode.propertyList[5],
          subNode.propertyList[6]
        ];
      } else {
        innerPropValue = subNode.propertyList[4];
      }
      node[innerPropName] = {
        "type": innerPropType1,
        "type2": innerPropType2,
        "flag": innerPropFlag,
        "value": innerPropValue
      };
    } else if (node[subNode.name] === void 0) {
      if (typeof subNode.id === "number") {
        node[subNode.name] = {};
        node[subNode.name][subNode.id] = subNode;
      } else {
        node[subNode.name] = subNode;
      }
    } else {
      if (subNode.name === "PoseNode") {
        if (!Array.isArray(node[subNode.name])) {
          node[subNode.name] = [node[subNode.name]];
        }
        node[subNode.name].push(subNode);
      } else if (node[subNode.name][subNode.id] === void 0) {
        node[subNode.name][subNode.id] = subNode;
      }
    }
  }
  parseProperty(reader) {
    const type = reader.getString(1);
    let length;
    switch (type) {
      case "C":
        return reader.getBoolean();
      case "D":
        return reader.getFloat64();
      case "F":
        return reader.getFloat32();
      case "I":
        return reader.getInt32();
      case "L":
        return reader.getInt64();
      case "R":
        length = reader.getUint32();
        return reader.getArrayBuffer(length);
      case "S":
        length = reader.getUint32();
        return reader.getString(length);
      case "Y":
        return reader.getInt16();
      case "b":
      case "c":
      case "d":
      case "f":
      case "i":
      case "l":
        const arrayLength = reader.getUint32();
        const encoding = reader.getUint32();
        const compressedLength = reader.getUint32();
        if (encoding === 0) {
          switch (type) {
            case "b":
            case "c":
              return reader.getBooleanArray(arrayLength);
            case "d":
              return reader.getFloat64Array(arrayLength);
            case "f":
              return reader.getFloat32Array(arrayLength);
            case "i":
              return reader.getInt32Array(arrayLength);
            case "l":
              return reader.getInt64Array(arrayLength);
          }
        }
        if (typeof fflate === "undefined") {
          console.error("THREE.FBXLoader: External library fflate.min.js required.");
        }
        const data = unzlibSync(new Uint8Array(reader.getArrayBuffer(compressedLength)));
        const reader2 = new BinaryReader(data.buffer);
        switch (type) {
          case "b":
          case "c":
            return reader2.getBooleanArray(arrayLength);
          case "d":
            return reader2.getFloat64Array(arrayLength);
          case "f":
            return reader2.getFloat32Array(arrayLength);
          case "i":
            return reader2.getInt32Array(arrayLength);
          case "l":
            return reader2.getInt64Array(arrayLength);
        }
      default:
        throw new Error("THREE.FBXLoader: Unknown property type " + type);
    }
  }
}
class BinaryReader {
  constructor(buffer, littleEndian) {
    this.dv = new DataView(buffer);
    this.offset = 0;
    this.littleEndian = littleEndian !== void 0 ? littleEndian : true;
  }
  getOffset() {
    return this.offset;
  }
  size() {
    return this.dv.buffer.byteLength;
  }
  skip(length) {
    this.offset += length;
  }
  getBoolean() {
    return (this.getUint8() & 1) === 1;
  }
  getBooleanArray(size) {
    const a = [];
    for (let i = 0; i < size; i++) {
      a.push(this.getBoolean());
    }
    return a;
  }
  getUint8() {
    const value = this.dv.getUint8(this.offset);
    this.offset += 1;
    return value;
  }
  getInt16() {
    const value = this.dv.getInt16(this.offset, this.littleEndian);
    this.offset += 2;
    return value;
  }
  getInt32() {
    const value = this.dv.getInt32(this.offset, this.littleEndian);
    this.offset += 4;
    return value;
  }
  getInt32Array(size) {
    const a = [];
    for (let i = 0; i < size; i++) {
      a.push(this.getInt32());
    }
    return a;
  }
  getUint32() {
    const value = this.dv.getUint32(this.offset, this.littleEndian);
    this.offset += 4;
    return value;
  }
  getInt64() {
    let low, high;
    if (this.littleEndian) {
      low = this.getUint32();
      high = this.getUint32();
    } else {
      high = this.getUint32();
      low = this.getUint32();
    }
    if (high & 2147483648) {
      high = ~high & 4294967295;
      low = ~low & 4294967295;
      if (low === 4294967295)
        high = high + 1 & 4294967295;
      low = low + 1 & 4294967295;
      return -(high * 4294967296 + low);
    }
    return high * 4294967296 + low;
  }
  getInt64Array(size) {
    const a = [];
    for (let i = 0; i < size; i++) {
      a.push(this.getInt64());
    }
    return a;
  }
  getUint64() {
    let low, high;
    if (this.littleEndian) {
      low = this.getUint32();
      high = this.getUint32();
    } else {
      high = this.getUint32();
      low = this.getUint32();
    }
    return high * 4294967296 + low;
  }
  getFloat32() {
    const value = this.dv.getFloat32(this.offset, this.littleEndian);
    this.offset += 4;
    return value;
  }
  getFloat32Array(size) {
    const a = [];
    for (let i = 0; i < size; i++) {
      a.push(this.getFloat32());
    }
    return a;
  }
  getFloat64() {
    const value = this.dv.getFloat64(this.offset, this.littleEndian);
    this.offset += 8;
    return value;
  }
  getFloat64Array(size) {
    const a = [];
    for (let i = 0; i < size; i++) {
      a.push(this.getFloat64());
    }
    return a;
  }
  getArrayBuffer(size) {
    const value = this.dv.buffer.slice(this.offset, this.offset + size);
    this.offset += size;
    return value;
  }
  getString(size) {
    let a = [];
    for (let i = 0; i < size; i++) {
      a[i] = this.getUint8();
    }
    const nullByte = a.indexOf(0);
    if (nullByte >= 0)
      a = a.slice(0, nullByte);
    return LoaderUtils.decodeText(new Uint8Array(a));
  }
}
class FBXTree {
  add(key, val) {
    this[key] = val;
  }
}
function isFbxFormatBinary(buffer) {
  const CORRECT = "Kaydara FBX Binary  \0";
  return buffer.byteLength >= CORRECT.length && CORRECT === convertArrayBufferToString(buffer, 0, CORRECT.length);
}
function isFbxFormatASCII(text) {
  const CORRECT = ["K", "a", "y", "d", "a", "r", "a", "\\", "F", "B", "X", "\\", "B", "i", "n", "a", "r", "y", "\\", "\\"];
  let cursor = 0;
  function read(offset) {
    const result = text[offset - 1];
    text = text.slice(cursor + offset);
    cursor++;
    return result;
  }
  for (let i = 0; i < CORRECT.length; ++i) {
    const num = read(1);
    if (num === CORRECT[i]) {
      return false;
    }
  }
  return true;
}
function getFbxVersion(text) {
  const versionRegExp = /FBXVersion: (\d+)/;
  const match = text.match(versionRegExp);
  if (match) {
    const version = parseInt(match[1]);
    return version;
  }
  throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.");
}
function convertFBXTimeToSeconds(time) {
  return time / 46186158e3;
}
const dataArray = [];
function getData(polygonVertexIndex, polygonIndex, vertexIndex, infoObject) {
  let index;
  switch (infoObject.mappingType) {
    case "ByPolygonVertex":
      index = polygonVertexIndex;
      break;
    case "ByPolygon":
      index = polygonIndex;
      break;
    case "ByVertice":
      index = vertexIndex;
      break;
    case "AllSame":
      index = infoObject.indices[0];
      break;
    default:
      console.warn("THREE.FBXLoader: unknown attribute mapping type " + infoObject.mappingType);
  }
  if (infoObject.referenceType === "IndexToDirect")
    index = infoObject.indices[index];
  const from = index * infoObject.dataSize;
  const to = from + infoObject.dataSize;
  return slice(dataArray, infoObject.buffer, from, to);
}
const tempEuler = new Euler();
const tempVec = new Vector3();
function generateTransform(transformData) {
  const lTranslationM = new Matrix4();
  const lPreRotationM = new Matrix4();
  const lRotationM = new Matrix4();
  const lPostRotationM = new Matrix4();
  const lScalingM = new Matrix4();
  const lScalingPivotM = new Matrix4();
  const lScalingOffsetM = new Matrix4();
  const lRotationOffsetM = new Matrix4();
  const lRotationPivotM = new Matrix4();
  const lParentGX = new Matrix4();
  const lParentLX = new Matrix4();
  const lGlobalT = new Matrix4();
  const inheritType = transformData.inheritType ? transformData.inheritType : 0;
  if (transformData.translation)
    lTranslationM.setPosition(tempVec.fromArray(transformData.translation));
  if (transformData.preRotation) {
    const array = transformData.preRotation.map(MathUtils.degToRad);
    array.push(transformData.eulerOrder);
    lPreRotationM.makeRotationFromEuler(tempEuler.fromArray(array));
  }
  if (transformData.rotation) {
    const array = transformData.rotation.map(MathUtils.degToRad);
    array.push(transformData.eulerOrder);
    lRotationM.makeRotationFromEuler(tempEuler.fromArray(array));
  }
  if (transformData.postRotation) {
    const array = transformData.postRotation.map(MathUtils.degToRad);
    array.push(transformData.eulerOrder);
    lPostRotationM.makeRotationFromEuler(tempEuler.fromArray(array));
    lPostRotationM.invert();
  }
  if (transformData.scale)
    lScalingM.scale(tempVec.fromArray(transformData.scale));
  if (transformData.scalingOffset)
    lScalingOffsetM.setPosition(tempVec.fromArray(transformData.scalingOffset));
  if (transformData.scalingPivot)
    lScalingPivotM.setPosition(tempVec.fromArray(transformData.scalingPivot));
  if (transformData.rotationOffset)
    lRotationOffsetM.setPosition(tempVec.fromArray(transformData.rotationOffset));
  if (transformData.rotationPivot)
    lRotationPivotM.setPosition(tempVec.fromArray(transformData.rotationPivot));
  if (transformData.parentMatrixWorld) {
    lParentLX.copy(transformData.parentMatrix);
    lParentGX.copy(transformData.parentMatrixWorld);
  }
  const lLRM = lPreRotationM.clone().multiply(lRotationM).multiply(lPostRotationM);
  const lParentGRM = new Matrix4();
  lParentGRM.extractRotation(lParentGX);
  const lParentTM = new Matrix4();
  lParentTM.copyPosition(lParentGX);
  const lParentGRSM = lParentTM.clone().invert().multiply(lParentGX);
  const lParentGSM = lParentGRM.clone().invert().multiply(lParentGRSM);
  const lLSM = lScalingM;
  const lGlobalRS = new Matrix4();
  if (inheritType === 0) {
    lGlobalRS.copy(lParentGRM).multiply(lLRM).multiply(lParentGSM).multiply(lLSM);
  } else if (inheritType === 1) {
    lGlobalRS.copy(lParentGRM).multiply(lParentGSM).multiply(lLRM).multiply(lLSM);
  } else {
    const lParentLSM = new Matrix4().scale(new Vector3().setFromMatrixScale(lParentLX));
    const lParentLSM_inv = lParentLSM.clone().invert();
    const lParentGSM_noLocal = lParentGSM.clone().multiply(lParentLSM_inv);
    lGlobalRS.copy(lParentGRM).multiply(lLRM).multiply(lParentGSM_noLocal).multiply(lLSM);
  }
  const lRotationPivotM_inv = lRotationPivotM.clone().invert();
  const lScalingPivotM_inv = lScalingPivotM.clone().invert();
  let lTransform = lTranslationM.clone().multiply(lRotationOffsetM).multiply(lRotationPivotM).multiply(lPreRotationM).multiply(lRotationM).multiply(lPostRotationM).multiply(lRotationPivotM_inv).multiply(lScalingOffsetM).multiply(lScalingPivotM).multiply(lScalingM).multiply(lScalingPivotM_inv);
  const lLocalTWithAllPivotAndOffsetInfo = new Matrix4().copyPosition(lTransform);
  const lGlobalTranslation = lParentGX.clone().multiply(lLocalTWithAllPivotAndOffsetInfo);
  lGlobalT.copyPosition(lGlobalTranslation);
  lTransform = lGlobalT.clone().multiply(lGlobalRS);
  lTransform.premultiply(lParentGX.invert());
  return lTransform;
}
function getEulerOrder(order) {
  order = order || 0;
  const enums = [
    "ZYX",
    "YZX",
    "XZY",
    "ZXY",
    "YXZ",
    "XYZ"
  ];
  if (order === 6) {
    console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect.");
    return enums[0];
  }
  return enums[order];
}
function parseNumberArray(value) {
  const array = value.split(",").map(function(val) {
    return parseFloat(val);
  });
  return array;
}
function convertArrayBufferToString(buffer, from, to) {
  if (from === void 0)
    from = 0;
  if (to === void 0)
    to = buffer.byteLength;
  return LoaderUtils.decodeText(new Uint8Array(buffer, from, to));
}
function append(a, b) {
  for (let i = 0, j = a.length, l = b.length; i < l; i++, j++) {
    a[j] = b[i];
  }
}
function slice(a, b, from, to) {
  for (let i = from, j = 0; i < to; i++, j++) {
    a[j] = b[i];
  }
  return a;
}
function inject(a1, index, a2) {
  return a1.slice(0, index).concat(a2).concat(a1.slice(index));
}
const cache = /* @__PURE__ */ new Map();
const loader = new FBXLoader();
var loadFBX = async (url, clone) => {
  const [group, noBone] = await forceGet(cache, url, () => new Promise((resolve, reject) => {
    increaseLoadingCount();
    loader.load(url, (group2) => {
      decreaseLoadingCount();
      let noBone2 = true;
      group2.traverse((child) => {
        var _a2;
        noBone2 && child instanceof Bone && (noBone2 = false);
        ((_a2 = child.material) === null || _a2 === void 0 ? void 0 : _a2.map) && (child.material.map.encoding = LinearEncoding);
      });
      resolve([group2, noBone2]);
    }, handleProgress, () => {
      decreaseLoadingCount();
      reject();
    });
  }));
  if (clone)
    return cloneSkinnedMesh(group, noBone);
  return group;
};

export { loadFBX as default };
//# sourceMappingURL=loadFBX.mjs.map
