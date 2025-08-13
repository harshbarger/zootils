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
function Yn(...n) {
  return e(a, ...n);
}
function m(n, t) {
  return t.every((r) => r(n));
}
function Zn(...n) {
  return e(m, ...n);
}
function p(n, t) {
  return n.every(t);
}
function zn(...n) {
  return e(p, ...n);
}
function h(n, t) {
  return Object.values(n).every(t);
}
function nt(...n) {
  return e(h, ...n);
}
function _(n, t) {
  return !Number.isInteger(t) || t > n.length || t < 1 ? [] : [...Array(n.length - t + 1)].map(
    (r, u) => n.slice(u, u + t)
  );
}
function tt(...n) {
  return e(_, ...n);
}
function N(n, t) {
  return Array.isArray(n) ? [...n, ...t] : `${n}${t}`;
}
function rt(...n) {
  return e(N, ...n);
}
function d(n, t) {
  return [...n, t];
}
function et(...n) {
  return e(d, ...n);
}
function ut(n) {
  return n;
}
function g(n, t) {
  const r = o(n, t, "onlyInBounds");
  return isNaN(r) ? "" : n[r];
}
function it(...n) {
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
function ot(...n) {
  return e(I, ...n);
}
function b(n, t, r) {
  return Math.max(t, Math.min(n, r));
}
function ct(...n) {
  return e(b, ...n);
}
function y(n, t) {
  return n.includes(t);
}
function ft(...n) {
  return e(y, ...n);
}
function A(n, t) {
  return n.reduce(
    (r, u) => u === t ? r + 1 : r,
    0
  );
}
function st(...n) {
  return e(A, ...n);
}
function O(n, t) {
  return n.reduce(
    (r, u) => t(u) ? r + 1 : r,
    0
  );
}
function lt(...n) {
  return e(O, ...n);
}
function at(n, t) {
  return M(n) ? [...new Array(n)].fill(t) : [];
}
const M = (n) => Number.isInteger(n) && n > 0;
function mt(n, t, r) {
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
  return B(n) ? [...new Array(n)].map((r, u) => t(u)) : [];
}
const B = (n) => Number.isInteger(n) && n > 0;
function j(n, t) {
  return n / t;
}
function pt(...n) {
  return e(j, ...n);
}
function w(n, t) {
  return t / n;
}
function ht(...n) {
  return e(w, ...n);
}
function L(n, t) {
  const r = o(n, t, "onlyInBounds");
  return isNaN(r) ? void 0 : n[r];
}
function _t(...n) {
  return e(L, ...n);
}
function R(n, t, r) {
  const u = o(n, t, "onlyInBounds");
  return isNaN(u) ? !1 : r(n[u]);
}
function Nt(...n) {
  return e(R, ...n);
}
function F(n, t) {
  return n === t;
}
function dt(...n) {
  return e(F, ...n);
}
function S(n, t) {
  return t.includes(n);
}
function gt(...n) {
  return e(S, ...n);
}
function q(n, t, r) {
  return r(n) === r(t);
}
function It(...n) {
  return e(q, ...n);
}
function C(n, t) {
  const r = s(t);
  return n.match(r) ?? [];
}
function bt(...n) {
  return e(C, ...n);
}
function $(n, t) {
  return n.filter(t);
}
function yt(...n) {
  return e($, ...n);
}
function G(n, t) {
  return n.filter((r, u) => t(r, u));
}
function At(...n) {
  return e(G, ...n);
}
function T(n, t) {
  const r = n.findIndex(t);
  return r >= 0 ? r : NaN;
}
function Ot(...n) {
  return e(T, ...n);
}
function D(n, t) {
  const r = n.findLastIndex(t);
  return r >= 0 ? r : NaN;
}
function Mt(...n) {
  return e(D, ...n);
}
function K(n, t, r) {
  const u = n.findLastIndex(t);
  return u >= 0 ? n[u] : r;
}
function vt(...n) {
  return e(K, ...n);
}
function U(n, t, r) {
  const u = n.findIndex(t);
  return u >= 0 ? n[u] : r;
}
function xt(...n) {
  return e(U, ...n);
}
function Et(n) {
  return n.at(0);
}
function V(n, t) {
  const r = l(t), u = n.match(r);
  return u ? u[0] : "";
}
function Pt(...n) {
  return e(V, ...n);
}
function Wt(n) {
  return n.flat();
}
function k(n, t, r) {
  const u = o(n, t, "inBoundsOrOnePast");
  return isNaN(u) ? Array.isArray(n) ? [...n] : n : Array.isArray(n) ? [
    ...n.slice(0, u),
    r,
    ...n.slice(u, 1 / 0)
  ] : `${n.slice(0, u)}${r}${n.slice(u, 1 / 0)}`;
}
function Bt(...n) {
  return e(k, ...n);
}
function H(n, t, r) {
  const u = o(n, t, "inBoundsOrOnePast");
  return isNaN(u) ? [...n] : [
    ...n.slice(0, u),
    ...r,
    ...n.slice(u, 1 / 0)
  ];
}
function jt(...n) {
  return e(H, ...n);
}
function J(n, t, r) {
  return t + n * (r - t);
}
function wt(...n) {
  return e(J, ...n);
}
function Q(n, t, r) {
  return n >= t && n <= r;
}
function Lt(...n) {
  return e(Q, ...n);
}
function X(n, t, r) {
  return Math.abs(n - t) <= r;
}
function Rt(...n) {
  return e(X, ...n);
}
function Y(n, t) {
  if (Number.isInteger(n) && Number.isInteger(t))
    return n % t === 0;
  const r = n / t;
  return Math.abs(r - Math.round(r)) <= 1e-15;
}
function Ft(...n) {
  return e(Y, ...n);
}
function St(n) {
  return n % 2 === 0;
}
function Z(n, t) {
  return n > t;
}
function qt(...n) {
  return e(Z, ...n);
}
function z(n, t) {
  return n >= t;
}
function Ct(...n) {
  return e(z, ...n);
}
function nn(n, t) {
  return n instanceof t;
}
function $t(...n) {
  return e(nn, ...n);
}
function tn(n, t) {
  return t.hasOwnProperty(n);
}
function Gt(...n) {
  return e(tn, ...n);
}
function rn(n, t) {
  return n < t;
}
function Tt(...n) {
  return e(rn, ...n);
}
function en(n, t) {
  return n <= t;
}
function Dt(...n) {
  return e(en, ...n);
}
function Kt(n) {
  return n < 0;
}
function Ut(n) {
  return n >= 0;
}
function Vt(n) {
  return n != null;
}
function kt(n) {
  return n == null;
}
function Ht(n) {
  return typeof n == "number";
}
function Jt(n) {
  return Math.abs(n % 2) === 1;
}
function Qt(n) {
  return n > 0;
}
function Xt(n) {
  return typeof n == "string";
}
function un(n, t) {
  return n.join(t);
}
function Yt(...n) {
  return e(un, ...n);
}
function Zt(n) {
  return n.at(-1);
}
function zt(n) {
  return n.length;
}
function on(n, t) {
  return t(n.length);
}
function nr(...n) {
  return e(on, ...n);
}
function cn(n, t, r, u, i) {
  const c = (n - t) / (r - t);
  return u + c * (i - u);
}
function tr(...n) {
  return e(cn, ...n);
}
function rr(n) {
  return n.toLowerCase();
}
function fn(n, t) {
  return n.map((r) => t(r));
}
function er(...n) {
  return e(fn, ...n);
}
function sn(n, t) {
  return Object.fromEntries(
    Object.entries(n).map(([r, u]) => [
      r,
      t(u)
    ])
  );
}
function ur(...n) {
  return e(sn, ...n);
}
function ln(n, t) {
  return n.map(t);
}
function ir(...n) {
  return e(ln, ...n);
}
function an(n, t) {
  return t.test(n);
}
function or(...n) {
  return e(an, ...n);
}
function mn(n, t) {
  return n - t * Math.floor(n / t);
}
function cr(...n) {
  return e(mn, ...n);
}
function fr(n) {
  return n.length >= 1 ? Math.max(...n) : NaN;
}
function pn(n, t) {
  const r = n.map(t);
  return r.length >= 1 ? Math.max(...r) : NaN;
}
function sr(...n) {
  return e(pn, ...n);
}
function lr(n) {
  return n.length > 0 ? n.reduce((t, r) => r + t, 0) / n.length : NaN;
}
function hn(n, t) {
  const r = n.map(t);
  return r.length > 0 ? r.reduce((u, i) => i + u, 0) / r.length : NaN;
}
function ar(...n) {
  return e(hn, ...n);
}
function mr(n) {
  return n.length >= 1 ? Math.min(...n) : NaN;
}
function _n(n, t) {
  const r = n.map(t);
  return r.length >= 1 ? Math.min(...r) : NaN;
}
function pr(...n) {
  return e(_n, ...n);
}
function Nn(n, t) {
  return n % t;
}
function hr(...n) {
  return e(Nn, ...n);
}
function dn(n, t) {
  return n * t;
}
function _r(...n) {
  return e(dn, ...n);
}
function gn(n, t) {
  return n.every((r) => !t(r));
}
function Nr(...n) {
  return e(gn, ...n);
}
function In(n, t) {
  return !t.some((r) => r(n));
}
function dr(...n) {
  return e(In, ...n);
}
function bn(n, t) {
  return !Object.values(n).some(t);
}
function gr(...n) {
  return e(bn, ...n);
}
function yn(n, t) {
  return !t.every((r) => r(n));
}
function Ir(...n) {
  return e(yn, ...n);
}
function An(n, t) {
  return n.some((r) => !t(r));
}
function br(...n) {
  return e(An, ...n);
}
function On(n, t) {
  return !Object.values(n).every(t);
}
function yr(...n) {
  return e(On, ...n);
}
function Mn(n, t) {
  return n !== t;
}
function Ar(...n) {
  return e(Mn, ...n);
}
function vn(n, t) {
  return !Number.isInteger(t) || t < 2 ? NaN : t % 2 === 0 && n < 0 ? NaN : Math.pow(Math.abs(n), 1 / t) * Math.sign(n);
}
function Or(...n) {
  return e(vn, ...n);
}
function xn(n, t, r) {
  const u = t - n.length;
  if (u <= 0 || r === "" || !Number.isInteger(t))
    return n;
  const i = Math.ceil(u / r.length);
  return r.repeat(i).slice(0, u) + n;
}
function Mr(...n) {
  return e(xn, ...n);
}
function En(n, t, r) {
  const u = t - n.length;
  if (u <= 0 || r === "" || !Number.isInteger(t))
    return n;
  const i = Math.ceil(u / r.length);
  return n + r.repeat(i).slice(0, u);
}
function vr(...n) {
  return e(En, ...n);
}
function Pn(n, t) {
  return t.reduce(
    (r, u) => ({ ...r, [u]: n[u] }),
    {}
  );
}
function xr(...n) {
  return e(Pn, ...n);
}
function Wn(n, t) {
  return Math.pow(n, t);
}
function Er(...n) {
  return e(Wn, ...n);
}
function Bn(n, t) {
  return Array.isArray(n) ? [...t, ...n] : `${t}${n}`;
}
function Pr(...n) {
  return e(Bn, ...n);
}
function jn(n, t) {
  return [t, ...n];
}
function Wr(...n) {
  return e(jn, ...n);
}
function Br(n) {
  return n.reduce((t, r) => r * t, 1);
}
function wn(n, t, r) {
  return t in n ? n[t] : r;
}
function jr(...n) {
  return e(wn, ...n);
}
function Ln(n, t, r) {
  return t in n && r(n[t]);
}
function wr(...n) {
  return e(Ln, ...n);
}
function Rn(n, t, r) {
  let u = r;
  return n.forEach((i) => {
    u = t(u, i);
  }), u;
}
function Lr(...n) {
  return e(Rn, ...n);
}
function Fn(n, t, r) {
  let u = r;
  for (let i = n.length - 1; i >= 0; i--)
    u = t(u, n[i]);
  return u;
}
function Rr(...n) {
  return e(Fn, ...n);
}
function Sn(n, t, r) {
  const u = typeof t == "string" ? t : s(t);
  return n.replaceAll(u, r);
}
function Fr(...n) {
  return e(Sn, ...n);
}
function Sr(n) {
  return [...n].reverse();
}
function qn(n, t) {
  if (!Number.isInteger(t))
    return NaN;
  const r = 10 ** -t;
  return Math.round(n / r) * r;
}
function qr(...n) {
  return e(qn, ...n);
}
function Cn(n, t, r) {
  const u = o(n, t, "onlyInBounds"), i = structuredClone(n);
  return Number.isNaN(u) || (i[u] = r), i;
}
function Cr(...n) {
  return e(Cn, ...n);
}
function $n(n, t, r) {
  const u = o(n, t), i = o(n, r, "inBoundsOrLarger");
  return isNaN(u) || isNaN(i) ? f(n) : n.slice(u, i);
}
function $r(...n) {
  return e($n, ...n);
}
function Gn(n, t) {
  const r = o(n, t);
  return isNaN(r) ? f(n) : n.slice(r);
}
function Gr(...n) {
  return e(Gn, ...n);
}
function Tn(n, t) {
  const r = o(n, t, "inBoundsOrLarger");
  return isNaN(r) ? f(n) : n.slice(0, r);
}
function Tr(...n) {
  return e(Tn, ...n);
}
function Dn(n, t) {
  return t.some((r) => r(n));
}
function Dr(...n) {
  return e(Dn, ...n);
}
function Kn(n, t) {
  return n.some(t);
}
function Kr(...n) {
  return e(Kn, ...n);
}
function Un(n, t) {
  return Object.values(n).some(t);
}
function Ur(...n) {
  return e(Un, ...n);
}
function Vn(n, t) {
  return n.localeCompare(t, "en-US", {
    ignorePunctuation: !0,
    caseFirst: "upper"
  });
}
function Vr(n) {
  return [...n].sort(Vn);
}
function kn(n, t) {
  return n < t ? -1 : n > t ? 1 : isNaN(n) ? isNaN(t) ? 0 : 1 : isNaN(t) ? -1 : 0;
}
function kr(n) {
  return [...n].sort(kn);
}
function Hn(n, t) {
  return n.split(t);
}
function Hr(...n) {
  return e(Hn, ...n);
}
function Jr(n) {
  return n.replace(/\s/g, "");
}
function Jn(n, t) {
  return n - t;
}
function Qr(...n) {
  return e(Jn, ...n);
}
function Qn(n, t) {
  return t - n;
}
function Xr(...n) {
  return e(Qn, ...n);
}
function Yr(n) {
  return n.reduce((t, r) => r + t, 0);
}
function Xn(n, t) {
  return n.map(t).reduce((u, i) => i + u, 0);
}
function Zr(...n) {
  return e(Xn, ...n);
}
function zr(n) {
  return Number.isInteger(n) && n >= 0 ? n.toString(16) : "";
}
function ne(n) {
  return n.trim();
}
function te(n) {
  return n.trimStart();
}
function re(n) {
  return n.trimEnd();
}
function ee(n) {
  return n.toUpperCase();
}
export {
  Yn as add,
  Zn as all,
  zn as allElements,
  nt as allProps,
  tt as aperture,
  rt as append,
  et as appendElement,
  ut as asIs,
  it as charAt,
  ot as chunk,
  ct as clamp,
  ft as contains,
  st as count,
  lt as countWith,
  at as createArrayOf,
  mt as createArrayRange,
  W as createArrayWith,
  pt as divideBy,
  ht as divideInto,
  _t as elementAt,
  Nt as elementPasses,
  dt as equals,
  gt as equalsOneOf,
  It as equalsWith,
  bt as everyMatch,
  yt as filter,
  At as filterWithIndex,
  Ot as findIndex,
  Mt as findLastIndex,
  vt as findLastOr,
  xt as findOr,
  Et as first,
  Pt as firstMatch,
  Wt as flatten,
  Bt as insert,
  jt as insertArray,
  wt as interpolate,
  Lt as isBetween,
  Rt as isCloseTo,
  Ft as isDivisibleBy,
  St as isEven,
  qt as isGt,
  Ct as isGte,
  $t as isInstanceOf,
  Gt as isKeyOf,
  Tt as isLt,
  Dt as isLte,
  Kt as isNegative,
  Ut as isNonNegative,
  Vt as isNotNullish,
  kt as isNullish,
  Ht as isNumber,
  Jt as isOdd,
  Qt as isPositive,
  Xt as isString,
  Yt as join,
  Zt as last,
  zt as length,
  nr as lengthPasses,
  tr as linearMap,
  rr as lowerCase,
  er as map,
  ur as mapProps,
  ir as mapWithIndex,
  or as matchesRegex,
  cr as mathModulo,
  fr as maximum,
  sr as maximumWith,
  lr as mean,
  ar as meanWith,
  mr as minimum,
  pr as minimumWith,
  hr as modulo,
  _r as multiply,
  Nr as noElements,
  gr as noProps,
  dr as none,
  Ir as notAll,
  br as notAllElements,
  yr as notAllProps,
  Ar as notEqual,
  Or as nthRoot,
  Mr as padLeft,
  vr as padRight,
  xr as pick,
  Er as pow,
  Pr as prepend,
  Wr as prependElement,
  Br as product,
  jr as propOr,
  wr as propPasses,
  Lr as reduce,
  Rr as reduceRight,
  Fr as replaceSubstrings,
  Sr as reverse,
  qr as round,
  Cr as setElement,
  $r as slice,
  Gr as sliceFrom,
  Tr as sliceTo,
  Dr as some,
  Kr as someElements,
  Ur as someProps,
  Vr as sortAlphabetical,
  kr as sortNumeric,
  Hr as split,
  Jr as stripWhiteSpace,
  Qr as subtract,
  Xr as subtractFrom,
  Yr as sum,
  Zr as sumWith,
  zr as toHex,
  ne as trim,
  te as trimLeft,
  re as trimRight,
  ee as upperCase
};
