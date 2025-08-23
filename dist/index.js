function o(n, t, r = "onlyInBounds") {
  return t < -n.length || !Number.isInteger(t) || r === "inBoundsOrOnePast" && t > n.length || r === "onlyInBounds" && t >= n.length ? NaN : t >= 0 ? t : n.length + t;
}
function e(n, ...t) {
  return t.length === n.length ? n(...t) : (r) => n(r, ...t);
}
function s(n) {
  return n.global ? n : new RegExp(n.source, n.flags + "g");
}
function l(n) {
  return n.global ? new RegExp(n.source, n.flags.replace("g", "")) : n;
}
function f(n) {
  return Array.isArray(n) ? [] : "";
}
function m(n, t) {
  return n + t;
}
function rt(...n) {
  return e(m, ...n);
}
function a(n, t) {
  return t.every((r) => r(n));
}
function et(...n) {
  return e(a, ...n);
}
function p(n, t) {
  return n.every(t);
}
function ut(...n) {
  return e(p, ...n);
}
function h(n, t) {
  return Object.values(n).every(t);
}
function it(...n) {
  return e(h, ...n);
}
function _(n, t) {
  return !Number.isInteger(t) || t > n.length || t < 1 ? [] : [...Array(n.length - t + 1)].map(
    (r, u) => n.slice(u, u + t)
  );
}
function ot(...n) {
  return e(_, ...n);
}
function N(n, t) {
  return Array.isArray(n) ? [...n, ...t] : `${n}${t}`;
}
function ct(...n) {
  return e(N, ...n);
}
function d(n, t) {
  return [...n, t];
}
function ft(...n) {
  return e(d, ...n);
}
function st(n) {
  return n;
}
function g(n, t) {
  const r = o(n, t, "onlyInBounds");
  return isNaN(r) ? "" : n[r];
}
function lt(...n) {
  return e(g, ...n);
}
function y(n, t) {
  if (!Number.isInteger(t) || t < 1)
    return [];
  const r = Math.ceil(n.length / t);
  return [...new Array(r)].map(
    (u, i) => n.slice(i * t, (i + 1) * t)
  );
}
function mt(...n) {
  return e(y, ...n);
}
function I(n, t, r) {
  return Math.max(t, Math.min(n, r));
}
function at(...n) {
  return e(I, ...n);
}
function b(n, t) {
  return n.includes(t);
}
function pt(...n) {
  return e(b, ...n);
}
function O(n, t) {
  return n.reduce(
    (r, u) => u === t ? r + 1 : r,
    0
  );
}
function ht(...n) {
  return e(O, ...n);
}
function A(n, t) {
  return n.reduce(
    (r, u) => t(u) ? r + 1 : r,
    0
  );
}
function _t(...n) {
  return e(A, ...n);
}
function Nt(n, t) {
  return M(n) ? [...new Array(n)].fill(t) : [];
}
const M = (n) => Number.isInteger(n) && n > 0;
function dt(n, t, r) {
  let u = NaN;
  return "intervals" in r ? u = v(r) : "points" in r ? u = x(r) : "size" in r && (u = E(r, n, t)), isNaN(u) ? [] : P(n, t, u);
}
function v(n) {
  return Number.isInteger(n.intervals) && n.intervals >= 1 ? n.intervals + 1 : NaN;
}
function x(n) {
  return Number.isInteger(n.points) && n.points >= 2 ? n.points : NaN;
}
function E(n, t, r) {
  return n.size > 0 ? Math.max(Math.round(Math.abs((r - t) / n.size) + 1), 2) : NaN;
}
const P = (n, t, r) => {
  const u = (t - n) / (r - 1), i = W(
    r,
    (c) => n + c * u
  );
  return i[i.length - 1] = t, i;
};
function W(n, t) {
  return j(n) ? [...new Array(n)].map((r, u) => t(u)) : [];
}
const j = (n) => Number.isInteger(n) && n > 0;
function w(n, t) {
  return n / t;
}
function gt(...n) {
  return e(w, ...n);
}
function B(n, t) {
  return t / n;
}
function yt(...n) {
  return e(B, ...n);
}
function L(n, t) {
  const r = o(n, t, "onlyInBounds");
  return isNaN(r) ? void 0 : n[r];
}
function It(...n) {
  return e(L, ...n);
}
function T(n, t, r) {
  const u = o(n, t, "onlyInBounds");
  return isNaN(u) ? !1 : r(n[u]);
}
function bt(...n) {
  return e(T, ...n);
}
function R(n, t) {
  return n === t;
}
function Ot(...n) {
  return e(R, ...n);
}
function F(n, t) {
  return t.includes(n);
}
function At(...n) {
  return e(F, ...n);
}
function S(n, t, r) {
  return r(n) === r(t);
}
function Mt(...n) {
  return e(S, ...n);
}
function q(n, t) {
  const r = s(t);
  return n.match(r) ?? [];
}
function vt(...n) {
  return e(q, ...n);
}
function C(n, t) {
  return n.filter(t);
}
function xt(...n) {
  return e(C, ...n);
}
function $(n, t) {
  return n.filter((r, u) => t(r, u));
}
function Et(...n) {
  return e($, ...n);
}
function G(n, t) {
  const r = n.findIndex(t);
  return r >= 0 ? r : NaN;
}
function Pt(...n) {
  return e(G, ...n);
}
function K(n, t) {
  const r = n.findLastIndex(t);
  return r >= 0 ? r : NaN;
}
function Wt(...n) {
  return e(K, ...n);
}
function D(n, t, r) {
  const u = n.findLastIndex(t);
  return u >= 0 ? n[u] : r;
}
function jt(...n) {
  return e(D, ...n);
}
function U(n, t, r) {
  const u = n.findIndex(t);
  return u >= 0 ? n[u] : r;
}
function wt(...n) {
  return e(U, ...n);
}
function Bt(n) {
  return n.at(0);
}
function V(n, t) {
  const r = l(t), u = n.match(r);
  return u ? u[0] : "";
}
function Lt(...n) {
  return e(V, ...n);
}
function Tt(n) {
  return n.flat();
}
function H(n, t) {
  return n.hasOwnProperty(t);
}
function Rt(...n) {
  return e(H, ...n);
}
function k(n, t, r) {
  const u = o(n, t, "inBoundsOrOnePast");
  return isNaN(u) ? Array.isArray(n) ? [...n] : n : Array.isArray(n) ? [
    ...n.slice(0, u),
    r,
    ...n.slice(u, 1 / 0)
  ] : `${n.slice(0, u)}${r}${n.slice(u, 1 / 0)}`;
}
function Ft(...n) {
  return e(k, ...n);
}
function J(n, t, r) {
  const u = o(n, t, "inBoundsOrOnePast");
  return isNaN(u) ? [...n] : [
    ...n.slice(0, u),
    ...r,
    ...n.slice(u, 1 / 0)
  ];
}
function St(...n) {
  return e(J, ...n);
}
function Q(n, t, r) {
  return t + n * (r - t);
}
function qt(...n) {
  return e(Q, ...n);
}
function X(n, t, r) {
  return n >= t && n <= r;
}
function Ct(...n) {
  return e(X, ...n);
}
function Y(n, t, r) {
  return Math.abs(n - t) <= r;
}
function $t(...n) {
  return e(Y, ...n);
}
function Z(n, t) {
  if (Number.isInteger(n) && Number.isInteger(t))
    return n % t === 0;
  const r = n / t;
  return Math.abs(r - Math.round(r)) <= 1e-15;
}
function Gt(...n) {
  return e(Z, ...n);
}
function Kt(n) {
  return n.length === 0;
}
function Dt(n) {
  return n % 2 === 0;
}
function Ut(n) {
  return typeof n == "function";
}
function z(n, t) {
  return n > t;
}
function Vt(...n) {
  return e(z, ...n);
}
function nn(n, t) {
  return n >= t;
}
function Ht(...n) {
  return e(nn, ...n);
}
function tn(n, t) {
  return n instanceof t;
}
function kt(...n) {
  return e(tn, ...n);
}
function rn(n, t) {
  return t.hasOwnProperty(n);
}
function Jt(...n) {
  return e(rn, ...n);
}
function en(n, t) {
  return n < t;
}
function Qt(...n) {
  return e(en, ...n);
}
function un(n, t) {
  return n <= t;
}
function Xt(...n) {
  return e(un, ...n);
}
function Yt(n) {
  return n < 0;
}
function Zt(n) {
  return n >= 0;
}
function zt(n) {
  return n.length > 0;
}
function nr(n) {
  return n != null;
}
function tr(n) {
  return n == null;
}
function rr(n) {
  return typeof n == "number";
}
function er(n) {
  return Math.abs(n % 2) === 1;
}
function ur(n) {
  return n > 0;
}
function ir(n) {
  return typeof n == "string";
}
function on(n, t) {
  return n.join(t);
}
function or(...n) {
  return e(on, ...n);
}
function cr(n) {
  return n.at(-1);
}
function fr(n) {
  return n.length;
}
function cn(n, t) {
  return t(n.length);
}
function sr(...n) {
  return e(cn, ...n);
}
function fn(n, t, r, u, i) {
  const c = (n - t) / (r - t);
  return u + c * (i - u);
}
function lr(...n) {
  return e(fn, ...n);
}
function mr(n) {
  return n.toLowerCase();
}
function sn(n, t) {
  return n.map((r) => t(r));
}
function ar(...n) {
  return e(sn, ...n);
}
function ln(n, t) {
  return Object.fromEntries(
    Object.entries(n).map(([r, u]) => [
      r,
      t(u)
    ])
  );
}
function pr(...n) {
  return e(ln, ...n);
}
function mn(n, t) {
  return n.map(t);
}
function hr(...n) {
  return e(mn, ...n);
}
function an(n, t) {
  return t.test(n);
}
function _r(...n) {
  return e(an, ...n);
}
function pn(n, t) {
  return n - t * Math.floor(n / t);
}
function Nr(...n) {
  return e(pn, ...n);
}
function dr(n) {
  return n.length >= 1 ? Math.max(...n) : NaN;
}
function hn(n, t) {
  const r = n.map(t);
  return r.length >= 1 ? Math.max(...r) : NaN;
}
function gr(...n) {
  return e(hn, ...n);
}
function yr(n) {
  return n.length > 0 ? n.reduce((t, r) => r + t, 0) / n.length : NaN;
}
function _n(n, t) {
  const r = n.map(t);
  return r.length > 0 ? r.reduce((u, i) => i + u, 0) / r.length : NaN;
}
function Ir(...n) {
  return e(_n, ...n);
}
function br(n) {
  return n.length >= 1 ? Math.min(...n) : NaN;
}
function Nn(n, t) {
  const r = n.map(t);
  return r.length >= 1 ? Math.min(...r) : NaN;
}
function Or(...n) {
  return e(Nn, ...n);
}
function dn(n, t) {
  return n % t;
}
function Ar(...n) {
  return e(dn, ...n);
}
function gn(n, t) {
  return n * t;
}
function Mr(...n) {
  return e(gn, ...n);
}
function yn(n, t) {
  return n.every((r) => !t(r));
}
function vr(...n) {
  return e(yn, ...n);
}
function In(n, t) {
  return !t.some((r) => r(n));
}
function xr(...n) {
  return e(In, ...n);
}
function bn(n, t) {
  return !Object.values(n).some(t);
}
function Er(...n) {
  return e(bn, ...n);
}
function On(n, t) {
  return !t.every((r) => r(n));
}
function Pr(...n) {
  return e(On, ...n);
}
function An(n, t) {
  return n.some((r) => !t(r));
}
function Wr(...n) {
  return e(An, ...n);
}
function Mn(n, t) {
  return !Object.values(n).every(t);
}
function jr(...n) {
  return e(Mn, ...n);
}
function vn(n, t) {
  return n !== t;
}
function wr(...n) {
  return e(vn, ...n);
}
function xn(n, t) {
  return !Number.isInteger(t) || t < 2 ? NaN : t % 2 === 0 && n < 0 ? NaN : Math.pow(Math.abs(n), 1 / t) * Math.sign(n);
}
function Br(...n) {
  return e(xn, ...n);
}
function En(n, t) {
  return n ?? t;
}
function Lr(...n) {
  return e(En, ...n);
}
function Pn(n, t) {
  return n === null ? t : n;
}
function Tr(...n) {
  return e(Pn, ...n);
}
function Wn(n, t) {
  return Object.keys(n).reduce((r, u) => (t.includes(u) || (r[u] = n[u]), r), {});
}
function Rr(...n) {
  return e(Wn, ...n);
}
function jn(n, t, r) {
  const u = t - n.length;
  if (u <= 0 || r === "" || !Number.isInteger(t))
    return n;
  const i = Math.ceil(u / r.length);
  return r.repeat(i).slice(0, u) + n;
}
function Fr(...n) {
  return e(jn, ...n);
}
function wn(n, t, r) {
  const u = t - n.length;
  if (u <= 0 || r === "" || !Number.isInteger(t))
    return n;
  const i = Math.ceil(u / r.length);
  return n + r.repeat(i).slice(0, u);
}
function Sr(...n) {
  return e(wn, ...n);
}
function Bn(n, t) {
  return t.reduce(
    (r, u) => ({ ...r, [u]: n[u] }),
    {}
  );
}
function qr(...n) {
  return e(Bn, ...n);
}
function Ln(n, t) {
  return Math.pow(n, t);
}
function Cr(...n) {
  return e(Ln, ...n);
}
function Tn(n, t) {
  return Array.isArray(n) ? [...t, ...n] : `${t}${n}`;
}
function $r(...n) {
  return e(Tn, ...n);
}
function Rn(n, t) {
  return [t, ...n];
}
function Gr(...n) {
  return e(Rn, ...n);
}
function Kr(n) {
  return n.reduce((t, r) => r * t, 1);
}
function Fn(n, t, r) {
  return t in n ? n[t] : r;
}
function Dr(...n) {
  return e(Fn, ...n);
}
function Sn(n, t, r) {
  return t in n && r(n[t]);
}
function Ur(...n) {
  return e(Sn, ...n);
}
function qn(n, t, r) {
  let u = r;
  return n.forEach((i) => {
    u = t(u, i);
  }), u;
}
function Vr(...n) {
  return e(qn, ...n);
}
function Cn(n, t, r) {
  let u = r;
  for (let i = n.length - 1; i >= 0; i--)
    u = t(u, n[i]);
  return u;
}
function Hr(...n) {
  return e(Cn, ...n);
}
function $n(n, t, r) {
  const u = typeof t == "string" ? t : s(t);
  return n.replaceAll(u, r);
}
function kr(...n) {
  return e($n, ...n);
}
function Jr(n) {
  return [...n].reverse();
}
function Gn(n, t) {
  if (!Number.isInteger(t))
    return NaN;
  const r = 10 ** -t;
  return Math.round(n / r) * r;
}
function Qr(...n) {
  return e(Gn, ...n);
}
function Kn(n, t, r) {
  const u = o(n, t, "onlyInBounds"), i = structuredClone(n);
  return Number.isNaN(u) || (i[u] = r), i;
}
function Xr(...n) {
  return e(Kn, ...n);
}
function Dn(n, t, r) {
  const u = o(n, t), i = o(n, r, "inBoundsOrLarger");
  return isNaN(u) || isNaN(i) ? f(n) : n.slice(u, i);
}
function Yr(...n) {
  return e(Dn, ...n);
}
function Un(n, t) {
  const r = o(n, t);
  return isNaN(r) ? f(n) : n.slice(r);
}
function Zr(...n) {
  return e(Un, ...n);
}
function Vn(n, t) {
  const r = o(n, t, "inBoundsOrLarger");
  return isNaN(r) ? f(n) : n.slice(0, r);
}
function zr(...n) {
  return e(Vn, ...n);
}
function Hn(n, t) {
  return t.some((r) => r(n));
}
function ne(...n) {
  return e(Hn, ...n);
}
function kn(n, t) {
  return n.some(t);
}
function te(...n) {
  return e(kn, ...n);
}
function Jn(n, t) {
  return Object.values(n).some(t);
}
function re(...n) {
  return e(Jn, ...n);
}
function Qn(n, t) {
  return n.localeCompare(t, "en-US", {
    ignorePunctuation: !0,
    caseFirst: "upper"
  });
}
function ee(n) {
  return [...n].sort(Qn);
}
function Xn(n, t) {
  return n < t ? -1 : n > t ? 1 : isNaN(n) ? isNaN(t) ? 0 : 1 : isNaN(t) ? -1 : 0;
}
function ue(n) {
  return [...n].sort(Xn);
}
function Yn(n, t) {
  return n.split(t);
}
function ie(...n) {
  return e(Yn, ...n);
}
function oe(n) {
  return n.replace(/\s/g, "");
}
function Zn(n, t) {
  return n - t;
}
function ce(...n) {
  return e(Zn, ...n);
}
function zn(n, t) {
  return t - n;
}
function fe(...n) {
  return e(zn, ...n);
}
function se(n) {
  return n.reduce((t, r) => r + t, 0);
}
function nt(n, t) {
  return n.map(t).reduce((u, i) => i + u, 0);
}
function le(...n) {
  return e(nt, ...n);
}
function me(n) {
  return Number.isInteger(n) && n >= 0 ? n.toString(16) : "";
}
function ae(n) {
  return n.trim();
}
function pe(n) {
  return n.trimStart();
}
function he(n) {
  return n.trimEnd();
}
function tt(n, t) {
  return typeof n > "u" ? t : n;
}
function _e(...n) {
  return e(tt, ...n);
}
function Ne(n) {
  return n.toUpperCase();
}
export {
  rt as add,
  et as all,
  ut as allElements,
  it as allProps,
  ot as aperture,
  ct as append,
  ft as appendElement,
  st as asIs,
  lt as charAt,
  mt as chunk,
  at as clamp,
  pt as contains,
  ht as count,
  _t as countWith,
  Nt as createArrayOf,
  dt as createArrayRange,
  W as createArrayWith,
  gt as divideBy,
  yt as divideInto,
  It as elementAt,
  bt as elementPasses,
  Ot as equals,
  At as equalsOneOf,
  Mt as equalsWith,
  vt as everyMatch,
  xt as filter,
  Et as filterWithIndex,
  Pt as findIndex,
  Wt as findLastIndex,
  jt as findLastOr,
  wt as findOr,
  Bt as first,
  Lt as firstMatch,
  Tt as flatten,
  Rt as hasKey,
  Ft as insert,
  St as insertArray,
  qt as interpolate,
  Ct as isBetween,
  $t as isCloseTo,
  Gt as isDivisibleBy,
  Kt as isEmpty,
  Dt as isEven,
  Ut as isFunction,
  Vt as isGt,
  Ht as isGte,
  kt as isInstanceOf,
  Jt as isKeyOf,
  Qt as isLt,
  Xt as isLte,
  Yt as isNegative,
  Zt as isNonNegative,
  zt as isNotEmpty,
  nr as isNotNullish,
  tr as isNullish,
  rr as isNumber,
  er as isOdd,
  ur as isPositive,
  ir as isString,
  or as join,
  cr as last,
  fr as length,
  sr as lengthPasses,
  lr as linearMap,
  mr as lowerCase,
  ar as map,
  pr as mapProps,
  hr as mapWithIndex,
  _r as matchesRegex,
  Nr as mathModulo,
  dr as maximum,
  gr as maximumWith,
  yr as mean,
  Ir as meanWith,
  br as minimum,
  Or as minimumWith,
  Ar as modulo,
  Mr as multiply,
  vr as noElements,
  Er as noProps,
  xr as none,
  Pr as notAll,
  Wr as notAllElements,
  jr as notAllProps,
  wr as notEqual,
  Br as nthRoot,
  Tr as nullTo,
  Lr as nullishTo,
  Rr as omitKeys,
  Fr as padLeft,
  Sr as padRight,
  qr as pickKeys,
  Cr as pow,
  $r as prepend,
  Gr as prependElement,
  Kr as product,
  Dr as propOr,
  Ur as propPasses,
  Vr as reduce,
  Hr as reduceRight,
  kr as replaceSubstrings,
  Jr as reverse,
  Qr as round,
  Xr as setElement,
  Yr as slice,
  Zr as sliceFrom,
  zr as sliceTo,
  ne as some,
  te as someElements,
  re as someProps,
  ee as sortAlphabetical,
  ue as sortNumeric,
  ie as split,
  oe as stripWhiteSpace,
  ce as subtract,
  fe as subtractFrom,
  se as sum,
  le as sumWith,
  me as toHex,
  ae as trim,
  pe as trimLeft,
  he as trimRight,
  _e as undefinedTo,
  Ne as upperCase
};
