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
function a(n, t) {
  return n + t;
}
function Jn(...n) {
  return e(a, ...n);
}
function m(n, t) {
  return t.every((r) => r(n));
}
function Qn(...n) {
  return e(m, ...n);
}
function p(n, t) {
  return n.every(t);
}
function Xn(...n) {
  return e(p, ...n);
}
function N(n, t) {
  return Object.values(n).every(t);
}
function Yn(...n) {
  return e(N, ...n);
}
function _(n, t) {
  return !Number.isInteger(t) || t > n.length || t < 1 ? [] : [...Array(n.length - t + 1)].map(
    (r, u) => n.slice(u, u + t)
  );
}
function Zn(...n) {
  return e(_, ...n);
}
function h(n, t) {
  return Array.isArray(n) ? [...n, ...t] : `${n}${t}`;
}
function zn(...n) {
  return e(h, ...n);
}
function d(n, t) {
  return [...n, t];
}
function nt(...n) {
  return e(d, ...n);
}
function tt(n) {
  return n;
}
function g(n, t) {
  const r = o(n, t, "onlyInBounds");
  return isNaN(r) ? "" : n[r];
}
function rt(...n) {
  return e(g, ...n);
}
function I(n, t) {
  if (!Number.isInteger(t) || t < 1)
    return [];
  const r = Math.ceil(n.length / t);
  return [...new Array(r)].map(
    (u, i) => n.slice(i * t, (i + 1) * t)
  );
}
function et(...n) {
  return e(I, ...n);
}
function b(n, t, r) {
  return Math.max(t, Math.min(n, r));
}
function ut(...n) {
  return e(b, ...n);
}
function y(n, t) {
  return n.includes(t);
}
function it(...n) {
  return e(y, ...n);
}
function ot(n, t) {
  return A(n) ? [...new Array(n)].fill(t) : [];
}
const A = (n) => Number.isInteger(n) && n > 0;
function ct(n, t, r) {
  let u = NaN;
  return "intervals" in r ? u = O(r) : "points" in r ? u = M(r) : "size" in r && (u = v(r, n, t)), isNaN(u) ? [] : x(n, t, u);
}
function O(n) {
  return Number.isInteger(n.intervals) && n.intervals >= 1 ? n.intervals + 1 : NaN;
}
function M(n) {
  return Number.isInteger(n.points) && n.points >= 2 ? n.points : NaN;
}
function v(n, t, r) {
  return n.size > 0 ? Math.max(Math.round(Math.abs((r - t) / n.size) + 1), 2) : NaN;
}
const x = (n, t, r) => {
  const u = (t - n) / (r - 1), i = E(
    r,
    (c) => n + c * u
  );
  return i[i.length - 1] = t, i;
};
function E(n, t) {
  return P(n) ? [...new Array(n)].map((r, u) => t(u)) : [];
}
const P = (n) => Number.isInteger(n) && n > 0;
function B(n, t) {
  return n / t;
}
function ft(...n) {
  return e(B, ...n);
}
function j(n, t) {
  return t / n;
}
function st(...n) {
  return e(j, ...n);
}
function w(n, t) {
  const r = o(n, t, "onlyInBounds");
  return isNaN(r) ? void 0 : n[r];
}
function lt(...n) {
  return e(w, ...n);
}
function L(n, t, r) {
  const u = o(n, t, "onlyInBounds");
  return isNaN(u) ? !1 : r(n[u]);
}
function at(...n) {
  return e(L, ...n);
}
function W(n, t) {
  return n === t;
}
function mt(...n) {
  return e(W, ...n);
}
function R(n, t) {
  return t.includes(n);
}
function pt(...n) {
  return e(R, ...n);
}
function F(n, t) {
  const r = s(t);
  return n.match(r) ?? [];
}
function Nt(...n) {
  return e(F, ...n);
}
function S(n, t) {
  return n.filter(t);
}
function _t(...n) {
  return e(S, ...n);
}
function C(n, t) {
  return n.filter((r, u) => t(r, u));
}
function ht(...n) {
  return e(C, ...n);
}
function $(n, t) {
  const r = n.findIndex(t);
  return r >= 0 ? r : NaN;
}
function dt(...n) {
  return e($, ...n);
}
function G(n, t) {
  const r = n.findLastIndex(t);
  return r >= 0 ? r : NaN;
}
function gt(...n) {
  return e(G, ...n);
}
function T(n, t, r) {
  const u = n.findLastIndex(t);
  return u >= 0 ? n[u] : r;
}
function It(...n) {
  return e(T, ...n);
}
function q(n, t, r) {
  const u = n.findIndex(t);
  return u >= 0 ? n[u] : r;
}
function bt(...n) {
  return e(q, ...n);
}
function yt(n) {
  return n.at(0);
}
function D(n, t) {
  const r = l(t), u = n.match(r);
  return u ? u[0] : "";
}
function At(...n) {
  return e(D, ...n);
}
function Ot(n) {
  return n.flat();
}
function K(n, t, r) {
  const u = o(n, t, "inBoundsOrOnePast");
  return isNaN(u) ? Array.isArray(n) ? [...n] : n : Array.isArray(n) ? [
    ...n.slice(0, u),
    r,
    ...n.slice(u, 1 / 0)
  ] : `${n.slice(0, u)}${r}${n.slice(u, 1 / 0)}`;
}
function Mt(...n) {
  return e(K, ...n);
}
function U(n, t, r) {
  const u = o(n, t, "inBoundsOrOnePast");
  return isNaN(u) ? [...n] : [
    ...n.slice(0, u),
    ...r,
    ...n.slice(u, 1 / 0)
  ];
}
function vt(...n) {
  return e(U, ...n);
}
function V(n, t, r) {
  return t + n * (r - t);
}
function xt(...n) {
  return e(V, ...n);
}
function k(n, t, r) {
  return n >= t && n <= r;
}
function Et(...n) {
  return e(k, ...n);
}
function H(n, t, r) {
  return Math.abs(n - t) <= r;
}
function Pt(...n) {
  return e(H, ...n);
}
function J(n, t) {
  if (Number.isInteger(n) && Number.isInteger(t))
    return n % t === 0;
  const r = n / t;
  return Math.abs(r - Math.round(r)) <= 1e-15;
}
function Bt(...n) {
  return e(J, ...n);
}
function jt(n) {
  return n % 2 === 0;
}
function Q(n, t) {
  return n > t;
}
function wt(...n) {
  return e(Q, ...n);
}
function X(n, t) {
  return n >= t;
}
function Lt(...n) {
  return e(X, ...n);
}
function Y(n, t) {
  return n instanceof t;
}
function Wt(...n) {
  return e(Y, ...n);
}
function Z(n, t) {
  return t.hasOwnProperty(n);
}
function Rt(...n) {
  return e(Z, ...n);
}
function z(n, t) {
  return n < t;
}
function Ft(...n) {
  return e(z, ...n);
}
function nn(n, t) {
  return n <= t;
}
function St(...n) {
  return e(nn, ...n);
}
function Ct(n) {
  return n < 0;
}
function $t(n) {
  return n >= 0;
}
function Gt(n) {
  return n != null;
}
function Tt(n) {
  return n == null;
}
function qt(n) {
  return typeof n == "number";
}
function Dt(n) {
  return Math.abs(n % 2) === 1;
}
function Kt(n) {
  return n > 0;
}
function Ut(n) {
  return typeof n == "string";
}
function tn(n, t) {
  return n.join(t);
}
function Vt(...n) {
  return e(tn, ...n);
}
function kt(n) {
  return n.at(-1);
}
function Ht(n) {
  return n.length;
}
function rn(n, t) {
  return t(n.length);
}
function Jt(...n) {
  return e(rn, ...n);
}
function en(n, t, r, u, i) {
  const c = (n - t) / (r - t);
  return u + c * (i - u);
}
function Qt(...n) {
  return e(en, ...n);
}
function Xt(n) {
  return n.toLowerCase();
}
function un(n, t) {
  return n.map((r) => t(r));
}
function Yt(...n) {
  return e(un, ...n);
}
function on(n, t) {
  return Object.fromEntries(
    Object.entries(n).map(([r, u]) => [
      r,
      t(u)
    ])
  );
}
function Zt(...n) {
  return e(on, ...n);
}
function cn(n, t) {
  return n.map(t);
}
function zt(...n) {
  return e(cn, ...n);
}
function fn(n, t) {
  return t.test(n);
}
function nr(...n) {
  return e(fn, ...n);
}
function sn(n, t) {
  return n - t * Math.floor(n / t);
}
function tr(...n) {
  return e(sn, ...n);
}
function rr(n) {
  return n.length >= 1 ? Math.max(...n) : NaN;
}
function ln(n, t) {
  const r = n.map(t);
  return r.length >= 1 ? Math.max(...r) : NaN;
}
function er(...n) {
  return e(ln, ...n);
}
function ur(n) {
  return n.length > 0 ? n.reduce((t, r) => r + t, 0) / n.length : NaN;
}
function an(n, t) {
  const r = n.map(t);
  return r.length > 0 ? r.reduce((u, i) => i + u, 0) / r.length : NaN;
}
function ir(...n) {
  return e(an, ...n);
}
function or(n) {
  return n.length >= 1 ? Math.min(...n) : NaN;
}
function mn(n, t) {
  const r = n.map(t);
  return r.length >= 1 ? Math.min(...r) : NaN;
}
function cr(...n) {
  return e(mn, ...n);
}
function pn(n, t) {
  return n % t;
}
function fr(...n) {
  return e(pn, ...n);
}
function Nn(n, t) {
  return n * t;
}
function sr(...n) {
  return e(Nn, ...n);
}
function _n(n, t) {
  return n.every((r) => !t(r));
}
function lr(...n) {
  return e(_n, ...n);
}
function hn(n, t) {
  return !t.some((r) => r(n));
}
function ar(...n) {
  return e(hn, ...n);
}
function dn(n, t) {
  return !Object.values(n).some(t);
}
function mr(...n) {
  return e(dn, ...n);
}
function gn(n, t) {
  return !t.every((r) => r(n));
}
function pr(...n) {
  return e(gn, ...n);
}
function In(n, t) {
  return n.some((r) => !t(r));
}
function Nr(...n) {
  return e(In, ...n);
}
function bn(n, t) {
  return !Object.values(n).every(t);
}
function _r(...n) {
  return e(bn, ...n);
}
function yn(n, t) {
  return n !== t;
}
function hr(...n) {
  return e(yn, ...n);
}
function An(n, t) {
  return !Number.isInteger(t) || t < 2 ? NaN : t % 2 === 0 && n < 0 ? NaN : Math.pow(Math.abs(n), 1 / t) * Math.sign(n);
}
function dr(...n) {
  return e(An, ...n);
}
function On(n, t, r) {
  const u = t - n.length;
  if (u <= 0 || r === "" || !Number.isInteger(t))
    return n;
  const i = Math.ceil(u / r.length);
  return r.repeat(i).slice(0, u) + n;
}
function gr(...n) {
  return e(On, ...n);
}
function Mn(n, t, r) {
  const u = t - n.length;
  if (u <= 0 || r === "" || !Number.isInteger(t))
    return n;
  const i = Math.ceil(u / r.length);
  return n + r.repeat(i).slice(0, u);
}
function Ir(...n) {
  return e(Mn, ...n);
}
function vn(n, t) {
  return t.reduce(
    (r, u) => ({ ...r, [u]: n[u] }),
    {}
  );
}
function br(...n) {
  return e(vn, ...n);
}
function xn(n, t) {
  return Math.pow(n, t);
}
function yr(...n) {
  return e(xn, ...n);
}
function En(n, t) {
  return Array.isArray(n) ? [...t, ...n] : `${t}${n}`;
}
function Ar(...n) {
  return e(En, ...n);
}
function Pn(n, t) {
  return [t, ...n];
}
function Or(...n) {
  return e(Pn, ...n);
}
function Mr(n) {
  return n.reduce((t, r) => r * t, 1);
}
function Bn(n, t, r) {
  return t in n ? n[t] : r;
}
function vr(...n) {
  return e(Bn, ...n);
}
function jn(n, t, r) {
  return t in n && r(n[t]);
}
function xr(...n) {
  return e(jn, ...n);
}
function wn(n, t, r) {
  let u = r;
  return n.forEach((i) => {
    u = t(u, i);
  }), u;
}
function Er(...n) {
  return e(wn, ...n);
}
function Ln(n, t, r) {
  let u = r;
  for (let i = n.length - 1; i >= 0; i--)
    u = t(u, n[i]);
  return u;
}
function Pr(...n) {
  return e(Ln, ...n);
}
function Wn(n, t, r) {
  const u = typeof t == "string" ? t : s(t);
  return n.replaceAll(u, r);
}
function Br(...n) {
  return e(Wn, ...n);
}
function jr(n) {
  return [...n].reverse();
}
function Rn(n, t) {
  if (!Number.isInteger(t))
    return NaN;
  const r = 10 ** -t;
  return Math.round(n / r) * r;
}
function wr(...n) {
  return e(Rn, ...n);
}
function Fn(n, t, r) {
  const u = o(n, t, "onlyInBounds"), i = structuredClone(n);
  return Number.isNaN(u) || (i[u] = r), i;
}
function Lr(...n) {
  return e(Fn, ...n);
}
function Sn(n, t, r) {
  const u = o(n, t), i = o(n, r, "inBoundsOrLarger");
  return isNaN(u) || isNaN(i) ? f(n) : n.slice(u, i);
}
function Wr(...n) {
  return e(Sn, ...n);
}
function Cn(n, t) {
  const r = o(n, t);
  return isNaN(r) ? f(n) : n.slice(r);
}
function Rr(...n) {
  return e(Cn, ...n);
}
function $n(n, t) {
  const r = o(n, t, "inBoundsOrLarger");
  return isNaN(r) ? f(n) : n.slice(0, r);
}
function Fr(...n) {
  return e($n, ...n);
}
function Gn(n, t) {
  return t.some((r) => r(n));
}
function Sr(...n) {
  return e(Gn, ...n);
}
function Tn(n, t) {
  return n.some(t);
}
function Cr(...n) {
  return e(Tn, ...n);
}
function qn(n, t) {
  return Object.values(n).some(t);
}
function $r(...n) {
  return e(qn, ...n);
}
function Dn(n, t) {
  return n.localeCompare(t, "en-US", {
    ignorePunctuation: !0,
    caseFirst: "upper"
  });
}
function Gr(n) {
  return [...n].sort(Dn);
}
function Kn(n, t) {
  return n < t ? -1 : n > t ? 1 : isNaN(n) ? isNaN(t) ? 0 : 1 : isNaN(t) ? -1 : 0;
}
function Tr(n) {
  return [...n].sort(Kn);
}
function Un(n, t) {
  return n.split(t);
}
function qr(...n) {
  return e(Un, ...n);
}
function Dr(n) {
  return n.replace(/\s/g, "");
}
function Vn(n, t) {
  return n - t;
}
function Kr(...n) {
  return e(Vn, ...n);
}
function kn(n, t) {
  return t - n;
}
function Ur(...n) {
  return e(kn, ...n);
}
function Vr(n) {
  return n.reduce((t, r) => r + t, 0);
}
function Hn(n, t) {
  return n.map(t).reduce((u, i) => i + u, 0);
}
function kr(...n) {
  return e(Hn, ...n);
}
function Hr(n) {
  return Number.isInteger(n) && n >= 0 ? n.toString(16) : "";
}
function Jr(n) {
  return n.trim();
}
function Qr(n) {
  return n.trimStart();
}
function Xr(n) {
  return n.trimEnd();
}
function Yr(n) {
  return n.toUpperCase();
}
export {
  Jn as add,
  Qn as all,
  Xn as allElements,
  Yn as allProps,
  Zn as aperture,
  zn as append,
  nt as appendElement,
  tt as asIs,
  rt as charAt,
  et as chunk,
  ut as clamp,
  it as contains,
  ot as createArrayOf,
  ct as createArrayRange,
  E as createArrayWith,
  ft as divideBy,
  st as divideInto,
  lt as elementAt,
  at as elementPasses,
  mt as equals,
  pt as equalsOneOf,
  Nt as everyMatch,
  _t as filter,
  ht as filterWithIndex,
  dt as findIndex,
  gt as findLastIndex,
  It as findLastOr,
  bt as findOr,
  yt as first,
  At as firstMatch,
  Ot as flatten,
  Mt as insert,
  vt as insertArray,
  xt as interpolate,
  Et as isBetween,
  Pt as isCloseTo,
  Bt as isDivisibleBy,
  jt as isEven,
  wt as isGt,
  Lt as isGte,
  Wt as isInstanceOf,
  Rt as isKeyOf,
  Ft as isLt,
  St as isLte,
  Ct as isNegative,
  $t as isNonNegative,
  Gt as isNotNullish,
  Tt as isNullish,
  qt as isNumber,
  Dt as isOdd,
  Kt as isPositive,
  Ut as isString,
  Vt as join,
  kt as last,
  Ht as length,
  Jt as lengthPasses,
  Qt as linearMap,
  Xt as lowerCase,
  Yt as map,
  Zt as mapProps,
  zt as mapWithIndex,
  nr as matchesRegex,
  tr as mathModulo,
  rr as maximum,
  er as maximumWith,
  ur as mean,
  ir as meanWith,
  or as minimum,
  cr as minimumWith,
  fr as modulo,
  sr as multiply,
  lr as noElements,
  mr as noProps,
  ar as none,
  pr as notAll,
  Nr as notAllElements,
  _r as notAllProps,
  hr as notEqual,
  dr as nthRoot,
  gr as padLeft,
  Ir as padRight,
  br as pick,
  yr as pow,
  Ar as prepend,
  Or as prependElement,
  Mr as product,
  vr as propOr,
  xr as propPasses,
  Er as reduce,
  Pr as reduceRight,
  Br as replaceSubstrings,
  jr as reverse,
  wr as round,
  Lr as setElement,
  Wr as slice,
  Rr as sliceFrom,
  Fr as sliceTo,
  Sr as some,
  Cr as someElements,
  $r as someProps,
  Gr as sortAlphabetical,
  Tr as sortNumeric,
  qr as split,
  Dr as stripWhiteSpace,
  Kr as subtract,
  Ur as subtractFrom,
  Vr as sum,
  kr as sumWith,
  Hr as toHex,
  Jr as trim,
  Qr as trimLeft,
  Xr as trimRight,
  Yr as upperCase
};
