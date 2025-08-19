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
function Zn(...n) {
  return e(a, ...n);
}
function m(n, t) {
  return t.every((r) => r(n));
}
function zn(...n) {
  return e(m, ...n);
}
function p(n, t) {
  return n.every(t);
}
function nt(...n) {
  return e(p, ...n);
}
function h(n, t) {
  return Object.values(n).every(t);
}
function tt(...n) {
  return e(h, ...n);
}
function _(n, t) {
  return !Number.isInteger(t) || t > n.length || t < 1 ? [] : [...Array(n.length - t + 1)].map(
    (r, u) => n.slice(u, u + t)
  );
}
function rt(...n) {
  return e(_, ...n);
}
function N(n, t) {
  return Array.isArray(n) ? [...n, ...t] : `${n}${t}`;
}
function et(...n) {
  return e(N, ...n);
}
function d(n, t) {
  return [...n, t];
}
function ut(...n) {
  return e(d, ...n);
}
function it(n) {
  return n;
}
function g(n, t) {
  const r = o(n, t, "onlyInBounds");
  return isNaN(r) ? "" : n[r];
}
function ot(...n) {
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
function ct(...n) {
  return e(I, ...n);
}
function y(n, t, r) {
  return Math.max(t, Math.min(n, r));
}
function ft(...n) {
  return e(y, ...n);
}
function b(n, t) {
  return n.includes(t);
}
function st(...n) {
  return e(b, ...n);
}
function O(n, t) {
  return n.reduce(
    (r, u) => u === t ? r + 1 : r,
    0
  );
}
function lt(...n) {
  return e(O, ...n);
}
function A(n, t) {
  return n.reduce(
    (r, u) => t(u) ? r + 1 : r,
    0
  );
}
function at(...n) {
  return e(A, ...n);
}
function mt(n, t) {
  return M(n) ? [...new Array(n)].fill(t) : [];
}
const M = (n) => Number.isInteger(n) && n > 0;
function pt(n, t, r) {
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
  return w(n) ? [...new Array(n)].map((r, u) => t(u)) : [];
}
const w = (n) => Number.isInteger(n) && n > 0;
function B(n, t) {
  return n / t;
}
function ht(...n) {
  return e(B, ...n);
}
function j(n, t) {
  return t / n;
}
function _t(...n) {
  return e(j, ...n);
}
function L(n, t) {
  const r = o(n, t, "onlyInBounds");
  return isNaN(r) ? void 0 : n[r];
}
function Nt(...n) {
  return e(L, ...n);
}
function R(n, t, r) {
  const u = o(n, t, "onlyInBounds");
  return isNaN(u) ? !1 : r(n[u]);
}
function dt(...n) {
  return e(R, ...n);
}
function F(n, t) {
  return n === t;
}
function gt(...n) {
  return e(F, ...n);
}
function S(n, t) {
  return t.includes(n);
}
function It(...n) {
  return e(S, ...n);
}
function q(n, t, r) {
  return r(n) === r(t);
}
function yt(...n) {
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
function Ot(...n) {
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
function Mt(...n) {
  return e(T, ...n);
}
function K(n, t) {
  const r = n.findLastIndex(t);
  return r >= 0 ? r : NaN;
}
function vt(...n) {
  return e(K, ...n);
}
function D(n, t, r) {
  const u = n.findLastIndex(t);
  return u >= 0 ? n[u] : r;
}
function xt(...n) {
  return e(D, ...n);
}
function U(n, t, r) {
  const u = n.findIndex(t);
  return u >= 0 ? n[u] : r;
}
function Et(...n) {
  return e(U, ...n);
}
function Pt(n) {
  return n.at(0);
}
function V(n, t) {
  const r = l(t), u = n.match(r);
  return u ? u[0] : "";
}
function Wt(...n) {
  return e(V, ...n);
}
function wt(n) {
  return n.flat();
}
function k(n, t) {
  return n.hasOwnProperty(t);
}
function Bt(...n) {
  return e(k, ...n);
}
function H(n, t, r) {
  const u = o(n, t, "inBoundsOrOnePast");
  return isNaN(u) ? Array.isArray(n) ? [...n] : n : Array.isArray(n) ? [
    ...n.slice(0, u),
    r,
    ...n.slice(u, 1 / 0)
  ] : `${n.slice(0, u)}${r}${n.slice(u, 1 / 0)}`;
}
function jt(...n) {
  return e(H, ...n);
}
function J(n, t, r) {
  const u = o(n, t, "inBoundsOrOnePast");
  return isNaN(u) ? [...n] : [
    ...n.slice(0, u),
    ...r,
    ...n.slice(u, 1 / 0)
  ];
}
function Lt(...n) {
  return e(J, ...n);
}
function Q(n, t, r) {
  return t + n * (r - t);
}
function Rt(...n) {
  return e(Q, ...n);
}
function X(n, t, r) {
  return n >= t && n <= r;
}
function Ft(...n) {
  return e(X, ...n);
}
function Y(n, t, r) {
  return Math.abs(n - t) <= r;
}
function St(...n) {
  return e(Y, ...n);
}
function Z(n, t) {
  if (Number.isInteger(n) && Number.isInteger(t))
    return n % t === 0;
  const r = n / t;
  return Math.abs(r - Math.round(r)) <= 1e-15;
}
function qt(...n) {
  return e(Z, ...n);
}
function Ct(n) {
  return n % 2 === 0;
}
function $t(n) {
  return typeof n == "function";
}
function z(n, t) {
  return n > t;
}
function Gt(...n) {
  return e(z, ...n);
}
function nn(n, t) {
  return n >= t;
}
function Tt(...n) {
  return e(nn, ...n);
}
function tn(n, t) {
  return n instanceof t;
}
function Kt(...n) {
  return e(tn, ...n);
}
function rn(n, t) {
  return t.hasOwnProperty(n);
}
function Dt(...n) {
  return e(rn, ...n);
}
function en(n, t) {
  return n < t;
}
function Ut(...n) {
  return e(en, ...n);
}
function un(n, t) {
  return n <= t;
}
function Vt(...n) {
  return e(un, ...n);
}
function kt(n) {
  return n < 0;
}
function Ht(n) {
  return n >= 0;
}
function Jt(n) {
  return n.length > 0;
}
function Qt(n) {
  return n != null;
}
function Xt(n) {
  return n == null;
}
function Yt(n) {
  return typeof n == "number";
}
function Zt(n) {
  return Math.abs(n % 2) === 1;
}
function zt(n) {
  return n > 0;
}
function nr(n) {
  return typeof n == "string";
}
function on(n, t) {
  return n.join(t);
}
function tr(...n) {
  return e(on, ...n);
}
function rr(n) {
  return n.at(-1);
}
function er(n) {
  return n.length;
}
function cn(n, t) {
  return t(n.length);
}
function ur(...n) {
  return e(cn, ...n);
}
function fn(n, t, r, u, i) {
  const c = (n - t) / (r - t);
  return u + c * (i - u);
}
function ir(...n) {
  return e(fn, ...n);
}
function or(n) {
  return n.toLowerCase();
}
function sn(n, t) {
  return n.map((r) => t(r));
}
function cr(...n) {
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
function fr(...n) {
  return e(ln, ...n);
}
function an(n, t) {
  return n.map(t);
}
function sr(...n) {
  return e(an, ...n);
}
function mn(n, t) {
  return t.test(n);
}
function lr(...n) {
  return e(mn, ...n);
}
function pn(n, t) {
  return n - t * Math.floor(n / t);
}
function ar(...n) {
  return e(pn, ...n);
}
function mr(n) {
  return n.length >= 1 ? Math.max(...n) : NaN;
}
function hn(n, t) {
  const r = n.map(t);
  return r.length >= 1 ? Math.max(...r) : NaN;
}
function pr(...n) {
  return e(hn, ...n);
}
function hr(n) {
  return n.length > 0 ? n.reduce((t, r) => r + t, 0) / n.length : NaN;
}
function _n(n, t) {
  const r = n.map(t);
  return r.length > 0 ? r.reduce((u, i) => i + u, 0) / r.length : NaN;
}
function _r(...n) {
  return e(_n, ...n);
}
function Nr(n) {
  return n.length >= 1 ? Math.min(...n) : NaN;
}
function Nn(n, t) {
  const r = n.map(t);
  return r.length >= 1 ? Math.min(...r) : NaN;
}
function dr(...n) {
  return e(Nn, ...n);
}
function dn(n, t) {
  return n % t;
}
function gr(...n) {
  return e(dn, ...n);
}
function gn(n, t) {
  return n * t;
}
function Ir(...n) {
  return e(gn, ...n);
}
function In(n, t) {
  return n.every((r) => !t(r));
}
function yr(...n) {
  return e(In, ...n);
}
function yn(n, t) {
  return !t.some((r) => r(n));
}
function br(...n) {
  return e(yn, ...n);
}
function bn(n, t) {
  return !Object.values(n).some(t);
}
function Or(...n) {
  return e(bn, ...n);
}
function On(n, t) {
  return !t.every((r) => r(n));
}
function Ar(...n) {
  return e(On, ...n);
}
function An(n, t) {
  return n.some((r) => !t(r));
}
function Mr(...n) {
  return e(An, ...n);
}
function Mn(n, t) {
  return !Object.values(n).every(t);
}
function vr(...n) {
  return e(Mn, ...n);
}
function vn(n, t) {
  return n !== t;
}
function xr(...n) {
  return e(vn, ...n);
}
function xn(n, t) {
  return !Number.isInteger(t) || t < 2 ? NaN : t % 2 === 0 && n < 0 ? NaN : Math.pow(Math.abs(n), 1 / t) * Math.sign(n);
}
function Er(...n) {
  return e(xn, ...n);
}
function En(n, t, r) {
  const u = t - n.length;
  if (u <= 0 || r === "" || !Number.isInteger(t))
    return n;
  const i = Math.ceil(u / r.length);
  return r.repeat(i).slice(0, u) + n;
}
function Pr(...n) {
  return e(En, ...n);
}
function Pn(n, t, r) {
  const u = t - n.length;
  if (u <= 0 || r === "" || !Number.isInteger(t))
    return n;
  const i = Math.ceil(u / r.length);
  return n + r.repeat(i).slice(0, u);
}
function Wr(...n) {
  return e(Pn, ...n);
}
function Wn(n, t) {
  return t.reduce(
    (r, u) => ({ ...r, [u]: n[u] }),
    {}
  );
}
function wr(...n) {
  return e(Wn, ...n);
}
function wn(n, t) {
  return Math.pow(n, t);
}
function Br(...n) {
  return e(wn, ...n);
}
function Bn(n, t) {
  return Array.isArray(n) ? [...t, ...n] : `${t}${n}`;
}
function jr(...n) {
  return e(Bn, ...n);
}
function jn(n, t) {
  return [t, ...n];
}
function Lr(...n) {
  return e(jn, ...n);
}
function Rr(n) {
  return n.reduce((t, r) => r * t, 1);
}
function Ln(n, t, r) {
  return t in n ? n[t] : r;
}
function Fr(...n) {
  return e(Ln, ...n);
}
function Rn(n, t, r) {
  return t in n && r(n[t]);
}
function Sr(...n) {
  return e(Rn, ...n);
}
function Fn(n, t, r) {
  let u = r;
  return n.forEach((i) => {
    u = t(u, i);
  }), u;
}
function qr(...n) {
  return e(Fn, ...n);
}
function Sn(n, t, r) {
  let u = r;
  for (let i = n.length - 1; i >= 0; i--)
    u = t(u, n[i]);
  return u;
}
function Cr(...n) {
  return e(Sn, ...n);
}
function qn(n, t, r) {
  const u = typeof t == "string" ? t : s(t);
  return n.replaceAll(u, r);
}
function $r(...n) {
  return e(qn, ...n);
}
function Gr(n) {
  return [...n].reverse();
}
function Cn(n, t) {
  if (!Number.isInteger(t))
    return NaN;
  const r = 10 ** -t;
  return Math.round(n / r) * r;
}
function Tr(...n) {
  return e(Cn, ...n);
}
function $n(n, t, r) {
  const u = o(n, t, "onlyInBounds"), i = structuredClone(n);
  return Number.isNaN(u) || (i[u] = r), i;
}
function Kr(...n) {
  return e($n, ...n);
}
function Gn(n, t, r) {
  const u = o(n, t), i = o(n, r, "inBoundsOrLarger");
  return isNaN(u) || isNaN(i) ? f(n) : n.slice(u, i);
}
function Dr(...n) {
  return e(Gn, ...n);
}
function Tn(n, t) {
  const r = o(n, t);
  return isNaN(r) ? f(n) : n.slice(r);
}
function Ur(...n) {
  return e(Tn, ...n);
}
function Kn(n, t) {
  const r = o(n, t, "inBoundsOrLarger");
  return isNaN(r) ? f(n) : n.slice(0, r);
}
function Vr(...n) {
  return e(Kn, ...n);
}
function Dn(n, t) {
  return t.some((r) => r(n));
}
function kr(...n) {
  return e(Dn, ...n);
}
function Un(n, t) {
  return n.some(t);
}
function Hr(...n) {
  return e(Un, ...n);
}
function Vn(n, t) {
  return Object.values(n).some(t);
}
function Jr(...n) {
  return e(Vn, ...n);
}
function kn(n, t) {
  return n.localeCompare(t, "en-US", {
    ignorePunctuation: !0,
    caseFirst: "upper"
  });
}
function Qr(n) {
  return [...n].sort(kn);
}
function Hn(n, t) {
  return n < t ? -1 : n > t ? 1 : isNaN(n) ? isNaN(t) ? 0 : 1 : isNaN(t) ? -1 : 0;
}
function Xr(n) {
  return [...n].sort(Hn);
}
function Jn(n, t) {
  return n.split(t);
}
function Yr(...n) {
  return e(Jn, ...n);
}
function Zr(n) {
  return n.replace(/\s/g, "");
}
function Qn(n, t) {
  return n - t;
}
function zr(...n) {
  return e(Qn, ...n);
}
function Xn(n, t) {
  return t - n;
}
function ne(...n) {
  return e(Xn, ...n);
}
function te(n) {
  return n.reduce((t, r) => r + t, 0);
}
function Yn(n, t) {
  return n.map(t).reduce((u, i) => i + u, 0);
}
function re(...n) {
  return e(Yn, ...n);
}
function ee(n) {
  return Number.isInteger(n) && n >= 0 ? n.toString(16) : "";
}
function ue(n) {
  return n.trim();
}
function ie(n) {
  return n.trimStart();
}
function oe(n) {
  return n.trimEnd();
}
function ce(n) {
  return n.toUpperCase();
}
export {
  Zn as add,
  zn as all,
  nt as allElements,
  tt as allProps,
  rt as aperture,
  et as append,
  ut as appendElement,
  it as asIs,
  ot as charAt,
  ct as chunk,
  ft as clamp,
  st as contains,
  lt as count,
  at as countWith,
  mt as createArrayOf,
  pt as createArrayRange,
  W as createArrayWith,
  ht as divideBy,
  _t as divideInto,
  Nt as elementAt,
  dt as elementPasses,
  gt as equals,
  It as equalsOneOf,
  yt as equalsWith,
  bt as everyMatch,
  Ot as filter,
  At as filterWithIndex,
  Mt as findIndex,
  vt as findLastIndex,
  xt as findLastOr,
  Et as findOr,
  Pt as first,
  Wt as firstMatch,
  wt as flatten,
  Bt as hasKey,
  jt as insert,
  Lt as insertArray,
  Rt as interpolate,
  Ft as isBetween,
  St as isCloseTo,
  qt as isDivisibleBy,
  Ct as isEven,
  $t as isFunction,
  Gt as isGt,
  Tt as isGte,
  Kt as isInstanceOf,
  Dt as isKeyOf,
  Ut as isLt,
  Vt as isLte,
  kt as isNegative,
  Ht as isNonNegative,
  Jt as isNotEmpty,
  Qt as isNotNullish,
  Xt as isNullish,
  Yt as isNumber,
  Zt as isOdd,
  zt as isPositive,
  nr as isString,
  tr as join,
  rr as last,
  er as length,
  ur as lengthPasses,
  ir as linearMap,
  or as lowerCase,
  cr as map,
  fr as mapProps,
  sr as mapWithIndex,
  lr as matchesRegex,
  ar as mathModulo,
  mr as maximum,
  pr as maximumWith,
  hr as mean,
  _r as meanWith,
  Nr as minimum,
  dr as minimumWith,
  gr as modulo,
  Ir as multiply,
  yr as noElements,
  Or as noProps,
  br as none,
  Ar as notAll,
  Mr as notAllElements,
  vr as notAllProps,
  xr as notEqual,
  Er as nthRoot,
  Pr as padLeft,
  Wr as padRight,
  wr as pick,
  Br as pow,
  jr as prepend,
  Lr as prependElement,
  Rr as product,
  Fr as propOr,
  Sr as propPasses,
  qr as reduce,
  Cr as reduceRight,
  $r as replaceSubstrings,
  Gr as reverse,
  Tr as round,
  Kr as setElement,
  Dr as slice,
  Ur as sliceFrom,
  Vr as sliceTo,
  kr as some,
  Hr as someElements,
  Jr as someProps,
  Qr as sortAlphabetical,
  Xr as sortNumeric,
  Yr as split,
  Zr as stripWhiteSpace,
  zr as subtract,
  ne as subtractFrom,
  te as sum,
  re as sumWith,
  ee as toHex,
  ue as trim,
  ie as trimLeft,
  oe as trimRight,
  ce as upperCase
};
