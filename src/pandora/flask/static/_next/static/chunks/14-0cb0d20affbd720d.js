"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [14],
  {
    77064: function (e, n, t) {
      t.d(n, {
        $: function () {
          return m;
        },
        u: function () {
          return p;
        },
      });
      var r = t(31501),
        a = t(61079),
        s = t(14806),
        o = t(35250),
        i = t(19841),
        l = t(70079),
        u = t(65921),
        c = t(34303);
      function d() {
        var e = (0, s.Z)([
          '\nbefore:absolute before:w-2 before:h-2 before:visible before:content-[""] before:bg-gray-100 before:border-b before:border-r before:border-black/10\n',
          "\n",
          "\n",
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = (0, s.Z)(["absolute w-2 h-2 -z-10"]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function p(e) {
        var n = e.text,
          t = e.children;
        return (0, o.jsx)("div", {
          className:
            "tooltip-label flex items-center whitespace-pre-wrap py-1 px-2 text-center text-sm font-medium normal-case text-gray-700",
          "data-content": n,
          children: t,
        });
      }
      var m = function (e) {
          var n = e.children,
            t = e.label,
            s = e.enterDelay,
            c = void 0 === s ? 0 : s,
            d = e.leaveDelay,
            f = void 0 === d ? 50 : d,
            p = e.placement,
            m = void 0 === p ? "bottom" : p,
            v = e.offset,
            h = e.withArrow,
            x = e.interactive,
            g = void 0 !== x && x,
            y = e.wide,
            w = (0, l.useState)(!1),
            j = w[0],
            P = w[1],
            k = (0, l.useState)(null),
            Z = k[0],
            S = k[1],
            C = (0, l.useState)(null),
            N = C[0],
            _ = C[1],
            A = (0, l.useState)(null),
            T = A[0],
            R = A[1],
            E = (0, u.D)(Z, N, {
              placement: m,
              modifiers: [
                {
                  name: "offset",
                  options: { offset: void 0 === v ? [0, 14] : v },
                },
                { name: "arrow", options: { element: T } },
              ],
            }),
            U = E.styles,
            F = E.attributes,
            M = E.forceUpdate,
            O = (0, l.useRef)(),
            L = (0, l.useRef)(),
            D = (0, l.useCallback)(
              function () {
                null == M || M(),
                  L.current && clearTimeout(L.current),
                  (O.current = setTimeout(function () {
                    return P(!0);
                  }, c));
              },
              [c, M]
            ),
            G = (0, l.useCallback)(
              function () {
                O.current && clearTimeout(O.current),
                  (L.current = setTimeout(function () {
                    return P(!1);
                  }, f));
              },
              [f]
            );
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)("span", {
                ref: S,
                onMouseEnter: D,
                onMouseLeave: G,
                children: n,
              }),
              (0, o.jsxs)(
                "div",
                (0, a.Z)((0, r.Z)({ ref: _, style: U.popper }, F.popper), {
                  className: (0, i.Z)(
                    "relative z-10 m-0 rounded p-1 transition-opacity",
                    j ? "opacity-100" : "pointer-events-none opacity-0",
                    void 0 !== y && y ? "max-w-sm" : "max-w-xs",
                    "border border-black/10 bg-gray-100"
                  ),
                  onMouseEnter: g ? D : void 0,
                  onMouseLeave: g ? G : void 0,
                  children: [
                    t,
                    (void 0 === h || h) &&
                      (0, o.jsx)(b, { ref: R, $placement: m }),
                  ],
                })
              ),
            ],
          });
        },
        v = c.Z.div(
          d(),
          function (e) {
            return (
              "bottom" === e.$placement &&
              "-top-1 left-1/2 -translate-x-[50%] rotate-[225deg]"
            );
          },
          function (e) {
            return "top" === e.$placement && "before:top-0 before:rotate-45";
          }
        ),
        b = (0, c.Z)(v)(f());
    },
    86885: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h;
        },
      });
      var r = t(61706),
        a = t(45813),
        s = t(35250),
        o = t(61432),
        i = t(70079),
        l = t(1454),
        u = t(12762),
        c = t(98943),
        d = t(33264),
        f = t(66285),
        p = t(74516),
        m = t(35e3),
        v = t(69858),
        b = t(77507);
      function h(e) {
        var n = e.isOpen,
          t = e.onClose,
          h = (0, i.useRef)(null),
          x = (0, f.hz)(),
          g = (0, u.WS)(),
          y = (0, i.useState)(!1),
          w = y[0],
          j = y[1],
          P = (0, o.useRouter)(),
          k = (0, i.useCallback)(
            function () {
              g(c.s6.closeAccountPaymentModal), t();
            },
            [t, g]
          ),
          Z = (0, i.useCallback)(
            (0, r.Z)(function () {
              var e;
              return (0, a.__generator)(this, function (n) {
                switch (n.label) {
                  case 0:
                    j(!0), g(c.s6.clickAccountPaymentCheckout), (n.label = 1);
                  case 1:
                    return (
                      n.trys.push([1, 3, 4, 5]), [4, d.ZP.submitCheckoutForm()]
                    );
                  case 2:
                    return (e = n.sent()), P.push(e.url), [3, 5];
                  case 3:
                    return (
                      n.sent(),
                      p.m.warning(
                        "The payments page encountered an error. Please try again. If the problem continues, please email support@openai.com.",
                        { hasCloseButton: !0 }
                      ),
                      [3, 5]
                    );
                  case 4:
                    return j(!1), [7];
                  case 5:
                    return [2];
                }
              });
            }),
            [P, g, j]
          ),
          S = (0, i.useCallback)(
            (0, r.Z)(function () {
              var e;
              return (0, a.__generator)(this, function (n) {
                switch (n.label) {
                  case 0:
                    j(!0), g(c.s6.clickAccountCustomerPortal), (n.label = 1);
                  case 1:
                    return (
                      n.trys.push([1, 3, 4, 5]),
                      [4, d.ZP.fetchCustomerPortalUrl()]
                    );
                  case 2:
                    return (e = n.sent()), P.push(e.url), [3, 5];
                  case 3:
                    return (
                      n.sent(),
                      p.m.warning(
                        "The account management page encountered an error. Please try again. If the problem continues, please email support@openai.com.",
                        { hasCloseButton: !0 }
                      ),
                      [3, 5]
                    );
                  case 4:
                    return j(!1), [7];
                  case 5:
                    return [2];
                }
              });
            }),
            [P, g, j]
          ),
          C = (0, f.mA)(function (e) {
            var n;
            return null === (n = e.accountPlan) || void 0 === n
              ? void 0
              : n.hasCustomerObject;
          }),
          N = x.has("disable_upgrade_ui");
        return (0, s.jsxs)(m.x, {
          isOpen: n,
          onClose: t,
          focusRef: h,
          children: [
            (0, s.jsxs)("div", {
              className:
                "flex w-full flex-row items-center justify-between border-b py-3 px-4 dark:border-gray-700",
              children: [
                (0, s.jsx)("span", {
                  className: "text-base font-semibold sm:text-base",
                  children: "Your Account",
                }),
                (0, s.jsx)("button", {
                  className:
                    "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                  onClick: k,
                  children: (0, s.jsx)(l.q5L, { className: "h-6 w-6" }),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "grid sm:grid-cols-2",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "relative order-2 col-span-1 border-t border-r-0 dark:border-gray-700 sm:order-1 sm:border-t-0 sm:border-r",
                  children: (0, s.jsx)(v.Oi, {
                    rowElements: [
                      (0, s.jsx)(
                        v.Cu,
                        { text: "Free Plan" },
                        "row-free-plan-name"
                      ),
                      (0, s.jsx)(
                        v.hi,
                        {
                          variant: "disabled",
                          disabled: !0,
                          text: b.S.free.callToAction.active,
                        },
                        "row-free-plan-button"
                      ),
                      (0, s.jsx)(
                        v.G,
                        { variant: "secondary", text: b.S.free.demandAccess },
                        "row-free-plan-demand"
                      ),
                      (0, s.jsx)(
                        v.G,
                        { variant: "secondary", text: b.S.free.responseSpeed },
                        "row-free-plan-speed"
                      ),
                      (0, s.jsx)(
                        v.G,
                        {
                          className: "sm:pb-2",
                          variant: "secondary",
                          text: b.S.free.modelFeatures,
                        },
                        "row-free-plan-updates"
                      ),
                    ],
                  }),
                }),
                (0, s.jsx)("div", {
                  className: "relative order-1 col-span-1 sm:order-2",
                  children: (0, s.jsx)(v.Oi, {
                    rowElements: [
                      (0, s.jsx)(
                        v.Cu,
                        {
                          text: b.S.plus.name,
                          children: (0, s.jsx)("span", {
                            className: "font-semibold text-gray-500",
                            children: b.S.plus.costInDollars,
                          }),
                        },
                        "row-plus-plan-title"
                      ),
                      (0, s.jsx)(
                        v.hi,
                        {
                          variant: "primary",
                          disabledText: N
                            ? "Due to high demand, we've temporarily paused upgrades."
                            : "",
                          disabled: w,
                          isLoading: w,
                          ref: h,
                          onClick: Z,
                          text: b.S.plus.callToAction.inactivePayment,
                        },
                        "row-plus-plan-button"
                      ),
                      (0, s.jsx)(
                        v.G,
                        { variant: "primary", text: b.S.plus.demandAccess },
                        "row-plus-plan-demand"
                      ),
                      (0, s.jsx)(
                        v.G,
                        { variant: "primary", text: b.S.plus.responseSpeed },
                        "row-plus-plan-speed"
                      ),
                      (0, s.jsx)(
                        v.G,
                        {
                          className: "sm:pb-2",
                          variant: "primary",
                          text: b.S.plus.modelFeatures,
                        },
                        "row-plus-plan-updates"
                      ),
                      C &&
                        (0, s.jsx)(
                          v.nR,
                          {
                            className: "sm:pb-1",
                            isLoading: w,
                            text: b.S.manageSubscription.callToAction,
                            onClick: S,
                          },
                          "row-plus-plan-manage"
                        ),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    35e3: function (e, n, t) {
      t.d(n, {
        x: function () {
          return l;
        },
      });
      var r = t(14806),
        a = t(35250),
        s = t(34303),
        o = t(73925);
      function i() {
        var e = (0, r.Z)([
          "flex grow items-center justify-center bg-white dark:bg-gray-900 rounded-md flex flex-col items-start overflow-hidden border shadow-md dark:border-gray-700",
        ]);
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      var l = function (e) {
          var n = e.children,
            t = e.isOpen,
            r = e.onClose,
            s = e.focusRef;
          return (0, a.jsx)(o.Z, {
            size: "fullscreen",
            isOpen: t,
            onModalClose: r,
            type: "success",
            title: "",
            className: "bg-transparent dark:bg-transparent",
            initialFocusRef: s,
            children: (0, a.jsx)("div", {
              className: "flex h-full flex-col items-center justify-start",
              children: (0, a.jsx)("div", {
                className: "relative",
                children: (0, a.jsx)(u, { children: n }),
              }),
            }),
          });
        },
        u = s.Z.div(i());
    },
    69858: function (e, n, t) {
      t.d(n, {
        Cu: function () {
          return b;
        },
        G: function () {
          return g;
        },
        Oi: function () {
          return v;
        },
        hi: function () {
          return x;
        },
        nR: function () {
          return y;
        },
      });
      var r = t(14806),
        a = t(35250),
        s = t(19841),
        o = t(70079),
        i = t(1454),
        l = t(34303),
        u = t(39690),
        c = t(79876),
        d = t(77064);
      function f() {
        var e = (0, r.Z)([
          "p-4 flex flex-col gap-3 bg-white z-20 relative dark:bg-gray-900",
        ]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = (0, r.Z)([
          "gap-2 flex flex-row justify-start items-center text-sm",
        ]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = (0, r.Z)([
          "text-xl font-semibold justify-between items-center flex",
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      var v = function (e) {
          var n = e.rowElements;
          return (0, a.jsx)(w, {
            children: n.map(function (e) {
              return e;
            }),
          });
        },
        b = function (e) {
          var n = e.className,
            t = e.text,
            r = e.children;
          return (0, a.jsxs)(P, {
            className: n,
            children: [(0, a.jsx)("span", { children: t }), r],
          });
        },
        h = {
          "primary-disabled":
            "border-none bg-gray-200 py-3 font-semibold hover:bg-gray-200",
          primary: "border-none py-3 font-semibold",
          disabled:
            "dark:text-gray-white border-none bg-gray-300 py-3 font-semibold text-gray-800 hover:bg-gray-300 dark:bg-gray-500 dark:opacity-100",
        },
        x = (0, o.forwardRef)(function (e, n) {
          var t = e.isLoading,
            r = void 0 !== t && t,
            o = e.disabled,
            l = e.onClick,
            f = e.variant,
            p = void 0 === f ? "primary" : f,
            m = e.text,
            v = e.disabledText;
          return v
            ? (0, a.jsx)("div", {
                className: "relative",
                children: (0, a.jsx)(d.$, {
                  placement: "bottom",
                  offset: [0, 20],
                  label: (0, a.jsx)(d.u, { children: v }),
                  children: (0, a.jsxs)(u.z, {
                    ref: n,
                    as: "button",
                    color: "disabled",
                    className: (0, s.Z)("w-full", h[p]),
                    children: [
                      m,
                      r &&
                        (0, a.jsx)(c.ZP, {
                          className: "animate-spin",
                          icon: i.dAq,
                        }),
                    ],
                  }),
                }),
              })
            : (0, a.jsxs)(u.z, {
                disabled: void 0 !== o && o,
                onClick: l,
                openNewTab: !0,
                ref: n,
                as: "button",
                className: (0, s.Z)(h[p]),
                children: [
                  (0, a.jsx)("span", {
                    className: (0, s.Z)("inline-block", {
                      "text-gray-700": "primary-disabled" === p,
                      "text-white": "primary" === p,
                    }),
                    children: m,
                  }),
                  r &&
                    (0, a.jsx)(c.ZP, {
                      className: "animate-spin",
                      icon: i.dAq,
                    }),
                ],
              });
        });
      x.displayName = "PricingPlanButton";
      var g = function (e) {
          var n = e.variant,
            t = void 0 === n ? "primary" : n,
            r = e.className,
            o = e.text;
          return (0, a.jsxs)(j, {
            className: r,
            children: [
              (0, a.jsx)(c.ZP, {
                icon: i._rq,
                className: (0, s.Z)("h-5 w-5", {
                  "text-green-700": "primary" == t,
                  "text-gray-400": "secondary" == t,
                }),
              }),
              (0, a.jsx)("span", { children: o }),
            ],
          });
        },
        y = function (e) {
          var n = e.className,
            t = e.text,
            r = e.isLoading,
            s = e.onClick;
          return (0, a.jsx)(j, {
            className: n,
            children: (0, a.jsxs)("button", {
              onClick: s,
              className: "flex flex-row items-center space-x-1 underline",
              children: [
                (0, a.jsx)("span", { children: t }),
                r &&
                  (0, a.jsx)(c.ZP, { className: "animate-spin", icon: i.dAq }),
              ],
            }),
          });
        },
        w = l.Z.div(f()),
        j = l.Z.div(p()),
        P = l.Z.div(m());
    },
    77507: function (e, n, t) {
      t.d(n, {
        S: function () {
          return r;
        },
      });
      var r = {
        free: {
          name: "Free Plan",
          callToAction: {
            active: "Your Current Plan",
            inactive: "Your Current Plan",
          },
          costInDollars: "",
          demandAccess: "Available when demand is low",
          responseSpeed: "Standard response speed",
          modelFeatures: "Regular model updates",
        },
        plus: {
          name: "ChatGPT Plus",
          callToAction: {
            active: "Your current plan",
            inactive: "I'm Interested",
            inactivePayment: "Upgrade plan",
          },
          costInDollars: "USD $20/mo",
          demandAccess: "Available even when demand is high",
          responseSpeed: "Faster response speed",
          modelFeatures: "Priority access to new features",
        },
        manageSubscription: { callToAction: "Manage my subscription" },
      };
    },
    85087: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var r = t(87762),
        a = t(70079),
        s = t(82018),
        o = t(33264),
        i = t(66285),
        l = t(27252);
      function u() {
        var e = (0, s.kP)(),
          n = e.session,
          t = e.loading,
          u = (0, i.mA)(function (e) {
            return e.hasBeenSet;
          }),
          c = (0, l.g)(function (e) {
            return e.updateFlagValue;
          }),
          d = (0, r.a)(
            ["account-status"],
            function () {
              return o.ZP.getAccountStatus(null == n ? void 0 : n.accessToken);
            },
            {
              enabled: !t && Boolean(null == n ? void 0 : n.accessToken),
              onError: function () {
                console.error("Unable to load account");
              },
              onSuccess: function (e) {
                var n;
                m(e),
                  c(
                    "highlightPlusUpgrade",
                    !(null === (n = e.account_plan) || void 0 === n
                      ? void 0
                      : n.is_paid_subscription_active)
                  );
              },
            }
          ),
          f = d.data,
          p = d.isLoading,
          m = (0, i.mA)(function (e) {
            return {
              accountPlan: e.accountPlan,
              updateAccountPlanWithResponse: e.updateAccountPlanWithResponse,
            };
          }).updateAccountPlanWithResponse;
        return (0, a.useMemo)(
          function () {
            return { accountStatusResponse: f, isLoading: !u && p };
          },
          [f, u, p]
        );
      }
    },
    49690: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var r = t(27215),
        a = t(70079),
        s = t(12762),
        o = t(98943),
        i = t(82018),
        l = t(33264),
        u = t(66285);
      function c(e, n, t, c, d) {
        var f =
            !(arguments.length > 5) || void 0 === arguments[5] || arguments[5],
          p = (0, u.mA)(function (e) {
            return e.features;
          }),
          m = (0, i.kP)().session,
          v = (0, s.WS)(t);
        (0, a.useEffect)(
          function () {
            f && (p && n.id && s.ZP.setUser(n, p, c, d), v(o.s6.pageLoad));
          },
          [p, n.id, f]
        ),
          (0, a.useEffect)(
            function () {
              if (null == m ? void 0 : m.accessToken)
                l.ZP.setAccessToken(m.accessToken);
              else if (m && !(null == m ? void 0 : m.error)) {
                var e;
                null === r.default ||
                  void 0 === r.default ||
                  r.default.captureMessage(
                    "Missing access token for User: "
                      .concat(
                        null == m
                          ? void 0
                          : null === (e = m.user) || void 0 === e
                          ? void 0
                          : e.id,
                        " ("
                      )
                      .concat(null == m ? void 0 : m.accessToken, ")")
                  );
              }
              (null == m ? void 0 : m.error) === "RefreshAccessTokenError" &&
                (null === r.default ||
                  void 0 === r.default ||
                  r.default.captureException(m.error),
                window._oaiHandleSessionExpired("page load", m.error));
            },
            [m, n.id]
          ),
          (0, a.useEffect)(
            function () {
              document.title = e;
            },
            [e]
          );
      }
    },
    66285: function (e, n, t) {
      t.d(n, {
        hz: function () {
          return c;
        },
        mA: function () {
          return l;
        },
        nR: function () {
          return u;
        },
      });
      var r = t(31501),
        a = t(61079),
        s = t(70079),
        o = t(59268),
        i = { lastUpdated: Date.now(), hasBeenSet: !1 },
        l = (0, o.ZP)()(function (e) {
          return (0, a.Z)((0, r.Z)({}, i), {
            updateAccountPlanWithResponse: function (n) {
              var t, r, a, s, o;
              e({
                accountPlan: {
                  hasPaidSubscription:
                    (null == n
                      ? void 0
                      : null === (t = n.account_plan) || void 0 === t
                      ? void 0
                      : t.is_paid_subscription_active) || !1,
                  subscriptionPlan:
                    (null == n
                      ? void 0
                      : null === (r = n.account_plan) || void 0 === r
                      ? void 0
                      : r.subscription_plan) || "chatgptplusfreeplan",
                  accountUserRole:
                    (null == n
                      ? void 0
                      : null === (a = n.account_plan) || void 0 === a
                      ? void 0
                      : a.account_user_role) || "account-owner",
                  wasPaidCustomer:
                    (null == n
                      ? void 0
                      : null === (s = n.account_plan) || void 0 === s
                      ? void 0
                      : s.was_paid_customer) || !1,
                  hasCustomerObject:
                    (null == n
                      ? void 0
                      : null === (o = n.account_plan) || void 0 === o
                      ? void 0
                      : o.has_customer_object) || !1,
                },
                features: (null == n ? void 0 : n.features) || [],
                hasBeenSet: !0,
              });
            },
          });
        }),
        u = function () {
          return l(function (e) {
            var n;
            return null === (n = e.accountPlan) || void 0 === n
              ? void 0
              : n.hasPaidSubscription;
          });
        },
        c = function () {
          var e = l(function (e) {
            return e.features;
          });
          return (0, s.useMemo)(
            function () {
              return new Set(e);
            },
            [e]
          );
        };
    },
    27252: function (e, n, t) {
      t.d(n, {
        g: function () {
          return l;
        },
      });
      var r = t(33861),
        a = t(31501),
        s = t(61079),
        o = t(59268),
        i = {
          flags: {
            isUserInCanPayGroup: !1,
            highlightPlusUpgrade: !1,
            failwhaleBypassEnabled: !1,
          },
        },
        l = (0, o.ZP)()(function (e, n) {
          return (0, s.Z)((0, a.Z)({}, i), {
            updateFlagValue: function (t, o) {
              var i = n().flags;
              e({ flags: (0, s.Z)((0, a.Z)({}, i), (0, r.Z)({}, t, o)) });
            },
          });
        });
    },
    82018: function (e, n, t) {
      t.d(n, {
        kP: function () {
          return f;
        },
        w7: function () {
          return u;
        },
      });
      var r = t(61706),
        a = t(31501),
        s = t(45813),
        o = t(87762),
        i = t(44928),
        l = t(61432);
      function u(e) {
        (0, i.signOut)(
          (0, a.Z)(
            { callbackUrl: window.location.origin + "/api/auth/logout" },
            e
          )
        );
      }
      function c() {
        return d.apply(this, arguments);
      }
      function d() {
        return (d = (0, r.Z)(function () {
          var e, n;
          return (0, s.__generator)(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, fetch("/api/auth/session")];
              case 1:
                return [4, e.sent().json()];
              case 2:
                if (Object.keys((n = e.sent())).length) return [2, n];
                return [2, null];
            }
          });
        })).apply(this, arguments);
      }
      function f(e) {
        var n = e || {},
          t = n.required,
          r = n.redirectTo,
          a = n.queryConfig,
          s = (0, l.useRouter)(),
          i = (0, o.a)(["session"], c, {
            onSettled: function (e, n) {
              (null == a ? void 0 : a.onSettled) &&
                (null == a || a.onSettled(e, n)),
                !e && t && s.push(r);
            },
          });
        return {
          session: (null == i ? void 0 : i.data) || null,
          loading: (null == i ? void 0 : i.status) === "loading",
        };
      }
    },
  },
]);
