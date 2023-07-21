(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6],
  {
    49529: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/chat/[[...chatId]]",
        function () {
          return t(90460);
        },
      ]);
    },
    90460: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          __N_SSP: function () {
            return ac;
          },
          default: function () {
            return ad;
          },
        });
      var r,
        a,
        o = t(14806),
        i = t(35250),
        s = t(91530),
        l = t.n(s),
        u = t(61432),
        c = t(70079),
        d = t(34303),
        m = t(73925),
        f = t(96424),
        h = t.n(f),
        g = t(12762),
        p = t(98943),
        v = t(62676),
        x = t(66285),
        b = t(79876),
        y = t(44819),
        C = "oai/apps/hasSeenReleaseAnnouncement",
        w = "2023-03-12";
      function j(e) {
        var n = e.hasSeenOnboardingDate;
        e.isUserPaid;
        var t = (0, c.useState)(!1),
          r = t[0],
          a = t[1],
          o = (0, x.hz)(),
          s = (0, u.useRouter)();
        (0, c.useEffect)(
          function () {
            a(function () {
              return (
                !Boolean(v.m.getItem("".concat(C, "/").concat(w))) &&
                !!n &&
                n < new Date(w)
              );
            });
          },
          [n]
        );
        var l = (0, c.useCallback)(function () {
            v.m.setItem("".concat(C, "/").concat(w), !0), a(!1);
          }, []),
          d = (0, c.useCallback)(
            function () {
              l(),
                s.replace("/chat?model=".concat(y.f_), void 0, { shallow: !0 });
            },
            [l, s]
          ),
          f = (0, g.WS)();
        return ((0, c.useEffect)(
          function () {
            r && f(p.s6.announcementViewed, { content: w });
          },
          [r, f]
        ),
        o.has("model_preview"))
          ? (0, i.jsx)(m.Z, {
              size: "small",
              isOpen: r,
              onModalClose: l,
              type: "success",
              title: "",
              theme: "dark",
              fullBleed: !0,
              primaryButton: (0, i.jsx)(m.m, {
                title: "Try GPT-4",
                color: "light",
                onClick: d,
              }),
              secondaryButton: (0, i.jsx)(m.m, {
                title: "Maybe later",
                color: "dark",
                onClick: l,
                className: "border-gray-800 hover:border-gray-700",
              }),
              className: "sm:max-w-[480px]",
              children: (0, i.jsx)(k, {}),
            })
          : null;
      }
      var k = function () {
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(h(), {
                src: "/images/gpt-4-motif.svg",
                alt: "Gpt-4 announcement banner",
                width: "480",
                height: "160",
                className: "mt-3.5",
              }),
              (0, i.jsx)("div", {
                className: "m-4 mb-6 flex flex-col gap-6 sm:m-6",
                children: (0, i.jsxs)("div", {
                  className: "prose prose-invert text-base",
                  children: [
                    (0, i.jsx)("h2", { children: "Introducing GPT-4" }),
                    (0, i.jsxs)("p", {
                      children: [
                        "Our latest model,",
                        " ",
                        (0, i.jsx)("a", {
                          href: "https://openai.com/product/gpt-4",
                          target: "_blank",
                          rel: "noreferrer",
                          children: "GPT-4",
                        }),
                        ", is now available to Plus subscribers.",
                      ],
                    }),
                    (0, i.jsx)("p", {
                      children: "GPT-4 has enhanced capabilities in:",
                    }),
                    (0, i.jsxs)("ul", {
                      children: [
                        (0, i.jsx)("li", { children: "Advanced reasoning" }),
                        (0, i.jsx)("li", { children: "Complex instructions" }),
                        (0, i.jsx)("li", { children: "More creativity" }),
                      ],
                    }),
                    (0, i.jsx)("p", {
                      children:
                        "To give every Plus subscriber a chance to try the model, we'll dynamically adjust the cap for GPT-4 usage based on demand.",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Z = t(61706),
        N = t(33861),
        I = t(31501),
        M = t(61079),
        S = t(89874),
        P = t(25769),
        T = t(45813),
        R = t(87093),
        F = t(6128),
        _ = t(19841),
        D = t(26649),
        q = t.n(D),
        A = t(11253),
        L = t.n(A),
        E = t(1454),
        U = t(82018),
        B = t(36613),
        O = t(68619),
        z = t(33264),
        G = "dfw_message_feedback",
        V = {
          AD: "Andorra",
          AE: "United Arab Emirates",
          AG: "Antigua and Barbuda",
          AI: "Anguilla",
          AL: "Albania",
          AM: "Armenia",
          AO: "Angola",
          AQ: "Antarctica",
          AR: "Argentina",
          AS: "American Samoa",
          AT: "Austria",
          AU: "Australia",
          AW: "Aruba",
          AX: "\xc5land Islands",
          AZ: "Azerbaijan",
          BA: "Bosnia and Herzegovina",
          BB: "Barbados",
          BD: "Bangladesh",
          BE: "Belgium",
          BF: "Burkina Faso",
          BG: "Bulgaria",
          BJ: "Benin",
          BL: "Saint Barth\xe9lemy",
          BM: "Bermuda",
          BN: "Brunei",
          BO: "Bolivia",
          BQ: "Caribbean Netherlands",
          BR: "Brazil",
          BS: "The Bahamas",
          BT: "Bhutan",
          BV: "Bouvet Island",
          BW: "Botswana",
          BZ: "Belize",
          CA: "Canada",
          CC: "Cocos (Keeling) Islands",
          CG: "The Republic of the Congo",
          CH: "Switzerland",
          CI: "Ivory Coast",
          CK: "Cook Islands",
          CL: "Chile",
          CO: "Colombia",
          CR: "Costa Rica",
          CV: "Cape Verde",
          CW: "Cura\xe7ao",
          CX: "Christmas Island",
          CY: "Cyprus",
          CZ: "Czech Republic",
          DE: "Germany",
          DJ: "Djibouti",
          DK: "Denmark",
          DM: "Dominica",
          DO: "Dominican Republic",
          DZ: "Algeria",
          EC: "Ecuador",
          EE: "Estonia",
          EH: "Western Sahara",
          ES: "Spain",
          FI: "Finland",
          FJ: "Fiji",
          FK: "Falkland Islands",
          FM: "Micronesia",
          FO: "Faroe Islands",
          FR: "France",
          GA: "Gabon",
          GB: "United Kingdom",
          GD: "Grenada",
          GE: "Georgia",
          GF: "French Guiana",
          GG: "Guernsey",
          GH: "Ghana",
          GI: "Gibraltar",
          GL: "Greenland",
          GM: "Gambia",
          GN: "Guinea",
          GP: "Guadeloupe",
          GR: "Greece",
          GS: "South Georgia and the South Sandwich Islands",
          GT: "Guatemala",
          GU: "Guam",
          GW: "Guinea-Bissau",
          GY: "Guyana",
          HM: "Heard Island and McDonald Islands",
          HN: "Honduras",
          HR: "Croatia",
          HT: "Haiti",
          HU: "Hungary",
          ID: "Indonesia",
          IE: "Ireland",
          IL: "Israel",
          IM: "Isle of Man",
          IN: "India",
          IO: "British Indian Ocean Territory",
          IQ: "Iraq",
          IS: "Iceland",
          IT: "Italy",
          JE: "Jersey",
          JM: "Jamaica",
          JO: "Jordan",
          JP: "Japan",
          KE: "Kenya",
          KG: "Kyrgyzstan",
          KI: "Kiribati",
          KM: "Comoros",
          KN: "Saint Kitts and Nevis",
          KR: "South Korea",
          KW: "Kuwait",
          KY: "Cayman Islands",
          KZ: "Kazakhstan",
          LB: "Lebanon",
          LC: "Saint Lucia",
          LI: "Liechtenstein",
          LK: "Sri Lanka",
          LR: "Liberia",
          LS: "Lesotho",
          LT: "Lithuania",
          LU: "Luxembourg",
          LV: "Latvia",
          MA: "Morocco",
          MC: "Monaco",
          MD: "Moldova",
          ME: "Montenegro",
          MF: "Saint Martin",
          MG: "Madagascar",
          MH: "The Marshall Islands",
          MK: "North Macedonia",
          ML: "Mali",
          MM: "Myanmar",
          MN: "Mongolia",
          MP: "The Northern Mariana Islands",
          MQ: "Martinique",
          MR: "Mauritania",
          MS: "Montserrat",
          MT: "Malta",
          MU: "Mauritius",
          MV: "Maldives",
          MW: "Malawi",
          MX: "Mexico",
          MY: "Malaysia",
          MZ: "Mozambique",
          NA: "Namibia",
          NC: "New Caledonia",
          NE: "Niger",
          NF: "Norfolk Island",
          NG: "Nigeria",
          NI: "Nicaragua",
          NL: "Netherlands",
          NO: "Norway",
          NP: "Nepal",
          NR: "Nauru",
          NU: "Niue",
          NZ: "New Zealand",
          OM: "Oman",
          PA: "Panama",
          PE: "Peru",
          PF: "French Polynesia",
          PG: "Papua New Guinea",
          PH: "Philippines",
          PK: "Pakistan",
          PL: "Poland",
          PM: "Saint Pierre and Miquelon",
          PN: "Pitcairn",
          PR: "Puerto Rico",
          PS: "Palestine",
          PT: "Portugal",
          PW: "Palau",
          PY: "Paraguay",
          QA: "Qatar",
          RE: "Reunion",
          RO: "Romania",
          RS: "Serbia",
          RW: "Rwanda",
          SB: "Solomon Islands",
          SC: "The Seychelles",
          SE: "Sweden",
          SG: "Singapore",
          SH: "Saint Helena, Ascension and Tristan da Cunha",
          SI: "Slovenia",
          SJ: "Svalbard and Jan Mayen",
          SK: "Slovakia",
          SL: "Sierra Leone",
          SM: "San Marino",
          SN: "Senegal",
          SR: "Suriname",
          ST: "Sao Tome and Principe",
          SV: "El Salvador",
          SX: "Sint Maarten",
          TC: "Turks and Caicos Islands",
          TF: "French Southern Territories",
          TG: "Togo",
          TH: "Thailand",
          TK: "Tokelau",
          TL: "Timor-Leste",
          TN: "Tunisia",
          TO: "Tonga",
          TR: "Turkey",
          TT: "Trinidad and Tobago",
          TV: "Tuvalu",
          TW: "Taiwan",
          TZ: "Tanzania",
          UA: "Ukraine",
          UG: "Uganda",
          UM: "The United States Minor Outlying Islands",
          US: "The United States",
          UY: "Uruguay",
          VA: "Vatican City",
          VC: "Saint Vincent and the Grenadines",
          VG: "British Virgin Islands",
          VI: "U.S. Virgin Islands",
          VN: "Vietnam",
          VU: "Vanuatu",
          WF: "Wallis and Futuna",
          WS: "Samoa",
          YT: "Mayotte",
          ZA: "South Africa",
          ZM: "Zambia",
          ZW: "Zimbabwe",
        },
        $ = t(27252),
        H = {
          id: "chat",
          name: "ChatGPT",
          href: "/chat",
          theme: { icon: "openai", color: "#10a37f", activeColor: "#1a7f64" },
        },
        W = t(11699),
        J = t(80836),
        K = t(64705),
        Y = t(2827),
        Q = t(39690);
      function X(e) {
        var n = e.id,
          t = e.label;
        return (0, i.jsxs)("div", {
          className: "form-check",
          children: [
            (0, i.jsx)("input", {
              className:
                "form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none",
              type: "checkbox",
              value: "",
              id: n,
            }),
            (0, i.jsx)("label", {
              className:
                "form-check-label inline-block text-gray-800 dark:text-gray-100",
              htmlFor: n,
              children: t,
            }),
          ],
        });
      }
      var ee = t(97374),
        en = t.n(ee),
        et = t(54655),
        er = t(23119),
        ea = t(95182),
        eo = t.n(ea);
      function ei() {
        var e = (0, o.Z)(["text-xs flex items-center justify-center gap-1"]);
        return (
          (ei = function () {
            return e;
          }),
          e
        );
      }
      function es() {
        var e = (0, o.Z)([
          "dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400",
        ]);
        return (
          (es = function () {
            return e;
          }),
          e
        );
      }
      function el() {
        var e = (0, o.Z)(["flex-grow flex-shrink-0"]);
        return (
          (el = function () {
            return e;
          }),
          e
        );
      }
      function eu(e) {
        var n = e.currentPage,
          t = e.onChangeIndex,
          r = e.length,
          a = e.className,
          o = function (e) {
            t(eo()(n + e, 0, r - 1));
          };
        return (0, i.jsxs)(ec, {
          className: a,
          children: [
            (0, i.jsx)(ed, {
              onClick: function () {
                return o(-1);
              },
              disabled: 0 === n,
              children: (0, i.jsx)(b.ZP, { size: "xsmall", icon: E.YFh }),
            }),
            (0, i.jsx)(em, { children: "".concat(n + 1, " / ").concat(r) }),
            (0, i.jsx)(ed, {
              onClick: function () {
                return o(1);
              },
              disabled: n === r - 1,
              children: (0, i.jsx)(b.ZP, { size: "xsmall", icon: E.Tfp }),
            }),
          ],
        });
      }
      var ec = d.Z.div(ei()),
        ed = d.Z.button(es()),
        em = d.Z.span(el()),
        ef = t(37678);
      function eh() {
        var e = (0, o.Z)(["text-center mt-2 flex justify-center"]);
        return (
          (eh = function () {
            return e;
          }),
          e
        );
      }
      var eg = d.Z.div(eh());
      function ep(e) {
        var n = e.initialText,
          t = e.role,
          r = e.threadId,
          a = e.currentLeaf,
          o = e.onUpdateNode,
          s = e.onChangeItemInView,
          l = e.onExitEdit,
          u = e.onDeleteNode,
          d = e.onRequestCompletion,
          m = e.onCreateEditNode,
          f = e.disabled,
          h = (0, g.WS)(),
          v = (0, c.useId)(),
          x = "".concat(a, "-").concat(v),
          b = (0, c.useState)(n || ""),
          y = b[0],
          C = b[1],
          w = (0, c.useRef)(null);
        (0, c.useEffect)(function () {
          m(a, x);
        }, []);
        var j = (0, c.useCallback)(function (e) {
            C(e.currentTarget.value);
          }, []),
          k = (0, c.useCallback)(
            function () {
              o(x, y), s(x), d(O.Os.Next, x, { eventSource: "mouse" }, !0), l();
            },
            [o, x, y, s, d, l]
          ),
          Z = (0, c.useCallback)(
            function () {
              u(x),
                s(a),
                l(),
                h(
                  t === O.uU.User
                    ? p.s6.cancelEditPrompt
                    : p.s6.cancelEditCompletion,
                  { threadId: r }
                );
            },
            [x, a, h, s, u, l, t, r]
          );
        return (
          (0, c.useEffect)(
            function () {
              var e = w.current,
                n = function (e) {
                  "Enter" === e.key && e.metaKey
                    ? k()
                    : "Escape" === e.key && Z();
                };
              return (
                e && e.addEventListener("keydown", n),
                function () {
                  e && e.removeEventListener("keydown", n);
                }
              );
            },
            [Z, k]
          ),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(Y.ZP, {
                ref: w,
                value: y,
                onChange: j,
                className:
                  "m-0 resize-none border-0 bg-transparent p-0 focus:ring-0 focus-visible:ring-0",
              }),
              (0, i.jsxs)(eg, {
                children: [
                  (0, i.jsx)(Q.z, {
                    as: "button",
                    onClick: k,
                    className: "mr-2",
                    disabled: f,
                    children: "Save & Submit",
                  }),
                  (0, i.jsx)(Q.z, {
                    as: "button",
                    color: "neutral",
                    onClick: Z,
                    children: "Cancel",
                  }),
                ],
              }),
            ],
          })
        );
      }
      var ev = t(77434),
        ex = t(47635),
        eb = t(31425);
      function ey() {
        var e = (0, o.Z)(["text-xs text-black\n", ""]);
        return (
          (ey = function () {
            return e;
          }),
          e
        );
      }
      function eC() {
        var e = (0, o.Z)(["relative w-full overflow-hidden pt-[67%]"]);
        return (
          (eC = function () {
            return e;
          }),
          e
        );
      }
      function ew(e) {
        var n = e.title,
          t = e.url,
          r = e.imageUrl,
          a = e.className,
          o = e.mini,
          s = Boolean(r),
          l = (0, g.WS)(),
          u = (0, c.useCallback)(
            function () {
              l(p.s6.carouselCardClick, { content: t });
            },
            [l, t]
          );
        return (0, i.jsxs)(t ? "a" : "div", {
          className: (0, _.Z)(
            "flex h-full w-full flex-col overflow-hidden rounded-md border border-black/10 bg-gray-50 shadow-[0_2px_24px_rgba(0,0,0,0.05)]",
            a
          ),
          href: t,
          target: t ? "_blank" : "",
          onClick: u,
          children: [
            s &&
              (0, i.jsx)(ek, {
                children: (0, i.jsx)("div", {
                  className: "absolute inset-0",
                  children: (0, i.jsx)("img", {
                    src: r,
                    alt: "image of ".concat(n),
                    className:
                      "h-full w-full border-b border-black/10 object-cover",
                  }),
                }),
              }),
            (0, i.jsxs)("div", {
              className: "flex flex-1 flex-col justify-between gap-1.5 p-3",
              children: [
                (0, i.jsx)(ej, {
                  $clamp: (void 0 !== o && o) || s,
                  children: n,
                }),
                (0, i.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    (0, i.jsx)(eb.Z, { url: t, size: 13 }),
                    (0, i.jsx)("div", {
                      className:
                        "text-[10px] leading-3 text-gray-500 line-clamp-1",
                      children: ex.get(new URL(t).hostname),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var ej = d.Z.div(ey(), function (e) {
          return e.$clamp && "line-clamp-2";
        }),
        ek = d.Z.div(eC()),
        eZ = t(36025),
        eN = t(41135);
      function eI(e) {
        var n = e.disabled,
          t = e.onClick,
          r = e.left,
          a = e.children;
        return (0, i.jsx)("button", {
          disabled: n,
          onClick: t,
          "aria-disabled": n,
          className: (0, _.Z)(
            "flex h-6 w-[30px] items-center justify-center rounded-full",
            "bg-gray-900 text-white shadow-sm hover:bg-gray-700 disabled:hover:bg-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:disabled:hover:bg-white",
            "transition-opacity disabled:opacity-20",
            "cursor-pointer disabled:cursor-auto",
            "absolute top-full translate-y-3 lg:top-1/2 lg:-translate-y-1/2",
            void 0 !== r && r
              ? "left-1/2 -translate-x-[calc(100%+4px)] lg:-left-3 lg:-translate-x-full"
              : "left-1/2 translate-x-1 lg:left-auto lg:-right-3 lg:translate-x-full",
            n && "lg:hidden"
          ),
          children: a,
        });
      }
      var eM = t(794),
        eS = function (e) {
          var n = e.x,
            t = e.children,
            r = e.className;
          return (0, i.jsx)(eM.E.div, {
            className: (0, _.Z)(
              "mr-3 h-full w-full flex-none sm:w-[calc((100%-12px)/2)] lg:w-[calc((100%-24px)/3)]",
              r
            ),
            style: { x: n },
            children: t,
          });
        },
        eP = { type: "spring", bounce: 0 },
        eT = (0, c.forwardRef)(function (e, n) {
          return (0,
          i.jsx)("div", { ref: n, className: (0, _.Z)("relative flex h-full w-full overflow-hidden", e.className), children: e.children });
        });
      eT.displayName = "CarouselContainer";
      var eR =
        ((r = {}),
        (0, N.Z)(r, W._G.Small, 1),
        (0, N.Z)(r, W._G.Medium, 2),
        (0, N.Z)(r, W._G.Large, 2),
        (0, N.Z)(r, W._G.XLarge, 3),
        (0, N.Z)(r, W._G.Full, 3),
        r);
      function eF(e) {
        var n = e.children,
          t = e.loop,
          r = void 0 === t || t,
          a = e.className,
          o = (0, eZ.c)(0),
          s = (0, c.useRef)(null),
          l = (0, c.useState)(0),
          u = l[0],
          d = l[1],
          m = eR[(0, W.dQ)()] || 1,
          f = c.Children.count(n) > m,
          h = c.Children.toArray(n),
          g = (0, c.useCallback)(
            function () {
              var e,
                n =
                  null === (e = s.current) || void 0 === e
                    ? void 0
                    : e.clientWidth;
              return n ? -Math.floor(u / m) * (n + 12) : 0;
            },
            [m, u]
          ),
          p = (0, c.useCallback)(
            function (e) {
              var n = m * e;
              r
                ? d(function (e) {
                    return ((e + n) % h.length) - 1;
                  })
                : d(function (e) {
                    return eo()(e + n, 0, h.length - 1);
                  });
            },
            [h.length, r, m]
          ),
          v = (0, c.useCallback)(
            function () {
              p(1);
            },
            [p]
          ),
          x = (0, c.useCallback)(
            function () {
              p(-1);
            },
            [p]
          ),
          y = (0, c.useMemo)(
            function () {
              if (r) return [!0, !0];
              var e = u < h.length - m;
              return [u > 0, e];
            },
            [h.length, u, r, m]
          ),
          C = y[0],
          w = y[1];
        return (
          (0, c.useEffect)(
            function () {
              return (0, eN.j)(o, g(), eP).stop;
            },
            [g, u, o]
          ),
          (0, i.jsxs)("div", {
            className: (0, _.Z)(
              "relative h-full w-full",
              a,
              f && "mb-12 lg:mb-0"
            ),
            children: [
              (0, i.jsx)(eT, {
                ref: s,
                children: h.map(function (e, n) {
                  return (0, i.jsx)(eS, { x: o, children: e }, n);
                }),
              }),
              f &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(eI, {
                      onClick: x,
                      left: !0,
                      disabled: !C,
                      children: (0, i.jsx)(b.ZP, { icon: E.YFh }),
                    }),
                    (0, i.jsx)(eI, {
                      onClick: v,
                      disabled: !w,
                      children: (0, i.jsx)(b.ZP, { icon: E.Tfp }),
                    }),
                  ],
                }),
            ],
          })
        );
      }
      var e_ = new Set([
          "og:site_name",
          "og:title",
          "og:description",
          "og:image",
          "og:url",
        ]),
        eD = {
          "og:site_name": "metadataTitle",
          "og:title": "title",
          "og:description": "description",
          "og:image": "imageUrl",
          "og:url": "url",
        },
        eq =
          /https:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
        eA = c.memo(function (e) {
          var n,
            t,
            r,
            a,
            o =
              ((n = { urls: e.urls }),
              (t = n.urls),
              (r = (0, U.kP)().session),
              (a = (0, ev.h)({
                queries: t.map(function (e) {
                  return {
                    queryKey: ["opengraph", e],
                    queryFn: (0, Z.Z)(function () {
                      return (0, T.__generator)(this, function (n) {
                        switch (n.label) {
                          case 0:
                            return [4, z.ZP.getPageMetadata({ url: e })];
                          case 1:
                            return [2, n.sent()];
                        }
                      });
                    }),
                    enabled: Boolean(e && (null == r ? void 0 : r.accessToken)),
                    retry: !1,
                  };
                }),
              })),
              (0, c.useMemo)(
                function () {
                  return a
                    .map(function (e, n) {
                      var r,
                        a = e.data,
                        o = e.isError,
                        i = e.isLoading,
                        s = t[n];
                      if (o || i) return null;
                      var l = a.tags.reduce(function (e, n) {
                          return e_.has(n.type) && (e[eD[n.type]] = n.value), e;
                        }, {}),
                        u = s.split(/[#?]/)[0],
                        c =
                          null === (r = l.url) || void 0 === r
                            ? void 0
                            : r.endsWith("/login"),
                        d = l.url && "/" === new URL(l.url || "").pathname;
                      return u !== l.url && (c || d) ? null : ((l.url = s), l);
                    })
                    .filter(Boolean);
                },
                [a, t]
              )),
            s = (0, c.useMemo)(
              function () {
                return !o.some(function (e) {
                  return Boolean(null == e ? void 0 : e.imageUrl);
                });
              },
              [o]
            ),
            l = (0, c.useMemo)(
              function () {
                return o.map(function (e) {
                  return e
                    ? (0, i.jsx)(
                        ew,
                        {
                          title: e.title || "",
                          url: e.url,
                          imageUrl: e.imageUrl,
                          mini: s,
                        },
                        e.url
                      )
                    : null;
                });
              },
              [o, s]
            );
          return 0 === o.length
            ? null
            : (0, i.jsx)(eF, { loop: !1, children: l });
        }),
        eL = t(44525);
      function eE() {
        var e = (0, o.Z)([
          "\npy-2 px-3 border text-gray-600 rounded-md text-sm dark:text-gray-100\n",
          "\n",
          "\n",
          "\n",
        ]);
        return (
          (eE = function () {
            return e;
          }),
          e
        );
      }
      var eU = c.memo(function (e) {
        var n,
          t = e.message,
          r = e.isEditing,
          a = e.format,
          o = e.isCompletionInProgress,
          s = e.className,
          l = e.onSandboxLinkClick,
          u = e.isCompletion,
          c = e.isResponseToPluginMessage,
          d = (0, S.Z)(e, [
            "message",
            "isEditing",
            "format",
            "isCompletionInProgress",
            "className",
            "onSandboxLinkClick",
            "isCompletion",
            "isResponseToPluginMessage",
          ]);
        return r
          ? (0, i.jsx)(
              ep,
              (0, I.Z)(
                {
                  currentLeaf: t.nodeId,
                  initialText: J.Cv.getTextFromMessage(t.message),
                  role: J.Cv.getRoleFromMessage(t.message),
                },
                d
              )
            )
          : (0, i.jsx)(eB, {
              text: J.Cv.getTextFromMessage(t.message),
              errCode: t.errCode,
              err: t.err,
              flag: t.errType,
              isCompletionInProgress: o,
              format: a,
              className: s,
              citations:
                null === (n = t.message.metadata) || void 0 === n
                  ? void 0
                  : n.citations,
              isCompletion: u,
              onSandboxLinkClick: l,
              id: t.nodeId,
              onRequestMoreCompletions: d.onRequestMoreCompletions,
              threadId: d.threadId,
              showExtractedLinkCards: c,
            });
      });
      function eB(e) {
        var n,
          t,
          r,
          a = e.citations,
          o = e.className,
          s = e.err,
          l = e.errCode,
          u = e.flag,
          d = e.format,
          m = e.isCompletionInProgress,
          f = e.size,
          h = e.text,
          g = e.onSandboxLinkClick,
          p = e.isCompletion,
          v = e.id,
          b = e.onRequestMoreCompletions,
          C = e.threadId,
          w = e.showExtractedLinkCards,
          j = l === B.Dd,
          k = (0, x.hz)(),
          Z =
            ((t = (n = { text: h, isCompletionInProgress: m }).text),
            (r = n.isCompletionInProgress),
            (0, c.useMemo)(
              function () {
                if (r) return [];
                var e = t.match(eq);
                return Array.from(new Set(e));
              },
              [r, t]
            )),
          N = (0, c.useMemo)(
            function () {
              switch (l) {
                case B.Dd:
                  return (0, i.jsx)(eV, {
                    $flag: u,
                    children: (0, i.jsx)(eG, {}),
                  });
                case y.uU:
                  if (k.has("model_preview"))
                    return (0, i.jsx)(ez, {
                      id: v,
                      onRequestMoreCompletions: b,
                      flag: u,
                      threadId: C,
                    });
                  return (0, i.jsx)(eV, { $flag: u, children: s });
                default:
                  return (0, i.jsx)(eV, { $flag: u, children: s });
              }
            },
            [s, l, k, u, v, b, C]
          );
        return (0, i.jsxs)("div", {
          className: (0, _.Z)(
            o,
            "flex flex-col items-start gap-4 whitespace-pre-wrap",
            "danger" === u && "flex flex-row gap-2 text-red-500",
            "warning" === u && "text-orange-500"
          ),
          children: [
            (s && !h) || j || !d
              ? "danger" === u && j
                ? null
                : h
              : (0, i.jsx)(eL.Z, {
                  size: void 0 === f ? "medium" : f,
                  className: (0, _.Z)(
                    "danger" !== u && m && "result-streaming",
                    "danger" === u && "text-red-500",
                    "warning" === u && "text-orange-500"
                  ),
                  onSandboxLinkClick: g,
                  children: "" === h ? "&#8203;" : (0, ef.Qd)(h, a),
                }),
            p && w && Z.length > 0 && (0, i.jsx)(eA, { urls: Z }),
            u && N,
          ],
        });
      }
      function eO(e) {
        var n = e && new Date(e),
          t = n && new Date(n);
        return t
          ? "after "
              .concat(t.getHours() % 12 || 12, ":")
              .concat(10 > t.getMinutes() ? "0" : "")
              .concat(t.getMinutes(), " ")
              .concat(t.getHours() >= 12 ? "PM" : "AM")
          : "later";
      }
      function ez(e) {
        var n = e.id,
          t = e.onRequestMoreCompletions,
          r = e.flag,
          a = e.threadId,
          o = (0, u.useRouter)(),
          s = (0, y.CS)(function (e) {
            return e.isoDate;
          }),
          l = eO(s),
          d = (0, c.useCallback)(
            function () {
              t(n, { eventSource: "mouse" }, !0, !1);
            },
            [n, t]
          ),
          m = (0, c.useCallback)(
            function () {
              a ? (0, y.m0)(a) : o.replace("/chat", void 0, { shallow: !0 }),
                t(n, { eventSource: "mouse" }, !0, !0);
            },
            [n, t, o, a]
          ),
          f = s
            ? (0, i.jsxs)("span", {
                children: [
                  "You've reached the current usage cap for GPT-4. You can continue with the default model now, or try again ".concat(
                    l,
                    "."
                  ),
                  " ",
                  (0, i.jsx)("a", {
                    href: "https://share.hsforms.com/16d0ZZVM3QZirXnCD_q7u1Q4sk30",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "underline",
                    children: "Learn more",
                  }),
                ],
              })
            : "You previously reached your usage cap for GPT-4, but you can now try sending your message again";
        return (0, i.jsx)(eV, {
          $flag: Boolean(s) && r,
          children: (0, i.jsxs)("div", {
            className: "flex items-center gap-6",
            children: [
              f,
              !s &&
                (0, i.jsx)(Q.z, {
                  color: "light",
                  className: "flex-shrink-0 bg-white",
                  onClick: d,
                  children: "Try again",
                }),
              s &&
                (0, i.jsx)(Q.z, {
                  color: "light",
                  className: "flex-shrink-0 bg-white",
                  onClick: m,
                  children: "Use default model",
                }),
            ],
          }),
        });
      }
      function eG() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            "This content may violate our",
            " ",
            (0, i.jsx)("a", {
              target: "_blank",
              href: "https://platform.openai.com/docs/usage-policies/content-policy",
              rel: "noreferrer",
              className: "bold underline",
              children: "content policy",
            }),
            ". If you believe this to be in error, please",
            " ",
            (0, i.jsx)("a", {
              target: "_blank",
              href: "https://forms.gle/3gyAMj5r5rTEcgbs5",
              rel: "noreferrer",
              className: "bold underline",
              children: "submit your feedback",
            }),
            " ",
            "— your input will aid our research in this area.",
          ],
        });
      }
      var eV = d.Z.div(
        eE(),
        function (e) {
          return "warning" === e.$flag && "border-orange-500 bg-orange-500/10";
        },
        function (e) {
          return "danger" === e.$flag && "border-red-500 bg-red-500/10";
        },
        function (e) {
          return !e.$flag && "border-green-500 bg-green-500/10";
        }
      );
      function e$(e) {
        var n = e.messages,
          t = e.isCompletionInProgress,
          r = e.isCompletion,
          a = n.reduce(function (e, n) {
            return n.err ? e : e + J.Cv.getTextFromMessage(n.message);
          }, ""),
          o = n.filter(function (e) {
            return e.errCode === B.Dd;
          }),
          s = o.some(function (e) {
            return "danger" === e.errType;
          });
        return (0, i.jsx)(eB, {
          text: a,
          format: !0,
          isCompletion: r,
          flag: o.length > 0 && (s ? "danger" : "warning"),
          isCompletionInProgress: t,
          showContentPolicyViolation: o.length > 0,
        });
      }
      var eH = t(76678);
      function eW() {
        var e = (0, o.Z)([""]);
        return (
          (eW = function () {
            return e;
          }),
          e
        );
      }
      function eJ() {
        var e = (0, o.Z)(["flex flex-grow flex-col gap-3"]);
        return (
          (eJ = function () {
            return e;
          }),
          e
        );
      }
      function eK() {
        var e = (0, o.Z)([
          "text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0",
        ]);
        return (
          (eK = function () {
            return e;
          }),
          e
        );
      }
      function eY() {
        var e = (0, o.Z)(["w-[30px] flex flex-col relative items-end"]);
        return (
          (eY = function () {
            return e;
          }),
          e
        );
      }
      function eQ() {
        var e = (0, o.Z)([
          "p-2 rounded-md hover:bg-gray-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 flex items-center gap-2",
        ]);
        return (
          (eQ = function () {
            return e;
          }),
          e
        );
      }
      function eX() {
        var e = (0, o.Z)([
          "p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400",
        ]);
        return (
          (eX = function () {
            return e;
          }),
          e
        );
      }
      function e0() {
        var e = (0, o.Z)([
          "text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-3 md:gap-4 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2\n",
          "",
        ]);
        return (
          (e0 = function () {
            return e;
          }),
          e
        );
      }
      function e1() {
        var e = (0, o.Z)([
          "text-center border-b p-3 text-gray-500 dark:border-black/20 dark:text-gray-400 text-xs",
        ]);
        return (
          (e1 = function () {
            return e;
          }),
          e
        );
      }
      function e2() {
        var e = (0, o.Z)([
          "flex justify-between items-center p-4 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm invisible lg:visible",
        ]);
        return (
          (e2 = function () {
            return e;
          }),
          e
        );
      }
      var e3,
        e4 = en()(
          function () {
            return t.e(328).then(t.bind(t, 63328));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [63328];
              },
            },
            ssr: !1,
          }
        ),
        e6 = en()(
          function () {
            return t.e(736).then(t.bind(t, 98736));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [98736];
              },
            },
            ssr: !1,
          }
        ),
        e5 = en()(
          function () {
            return t.e(24).then(t.bind(t, 6024));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [6024];
              },
            },
            ssr: !1,
          }
        ),
        e8 = en()(
          function () {
            return t.e(672).then(t.bind(t, 37672));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [37672];
              },
            },
            ssr: !1,
          }
        ),
        e7 = en()(
          function () {
            return t.e(201).then(t.bind(t, 20201));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [20201];
              },
            },
            ssr: !1,
          }
        );
      function e9(e) {
        var n, t;
        return (
          !(null === (n = e.message.recipient) || void 0 === n
            ? void 0
            : n.includes(".")) &&
          (null === (t = e.message.recipient) || void 0 === t
            ? void 0
            : t.slice(2, 3)) === "n"
        );
      }
      function ne(e) {
        var n, t, r;
        return (
          !(null === (n = e.message.recipient) || void 0 === n
            ? void 0
            : n.includes(".")) &&
          ((null === (t = e.message.recipient) || void 0 === t
            ? void 0
            : t.slice(2, 3)) === "o" ||
            (null === (r = e.message.recipient) || void 0 === r
              ? void 0
              : r.slice(2, 3)) === "s")
        );
      }
      function nn(e) {
        var n, t;
        return !(
          "o" !== e.message.content.content_type.slice(1, 2) &&
          ((null === (n = e.message.recipient) || void 0 === n
            ? void 0
            : n.includes(".")) ||
            (null === (t = e.message.recipient) || void 0 === t
              ? void 0
              : t.slice(2, 3)) !== "t" ||
            "text" !== e.message.content.content_type)
        );
      }
      function nt(e) {
        return "e" === e.message.content.content_type.slice(2, 3);
      }
      function nr(e) {
        var n,
          t,
          r =
            (null === (n = e.message.author) || void 0 === n
              ? void 0
              : n.name) ||
            (null === (t = e.message.user) || void 0 === t ? void 0 : t.name);
        return (
          !(null == r ? void 0 : r.includes(".")) &&
          ((null == r ? void 0 : r.slice(2, 3)) === "n" ||
            (null == r ? void 0 : r.slice(2, 3)) === "o" ||
            (null == r ? void 0 : r.slice(2, 3)) === "s")
        );
      }
      function na(e) {
        var n;
        return (
          J.Cv.getRoleFromMessage(e.message) === O.uU.Assistant &&
          (null === (n = e.message.recipient) || void 0 === n
            ? void 0
            : n.includes("."))
        );
      }
      function no(e) {
        return (
          J.Cv.getRoleFromMessage(e.message) === O.uU.Tool && !nr(e) && !nt(e)
        );
      }
      ((e3 = a || (a = {}))[(e3.Text = 0)] = "Text"),
        (e3[(e3.MultiText = 1)] = "MultiText"),
        (e3[(e3.SB = 2)] = "SB"),
        (e3[(e3.B = 3)] = "B"),
        (e3[(e3.C = 4)] = "C"),
        (e3[(e3.CEO = 5)] = "CEO"),
        (e3[(e3.P = 6)] = "P");
      var ni = c.memo(function (e) {
          var n,
            t,
            r = e.turn,
            o = e.isFinalTurn,
            s = e.threadId,
            l = e.treeRef,
            u = e.onChangeItemInView,
            d = e.onChangeRating,
            m = e.onRequestMoreCompletions,
            f = e.onDeleteNode,
            h = e.onRequestCompletion,
            v = e.onUpdateNode,
            C = e.onSandboxLinkClick,
            w = e.onHandleChangeVariantFeedbackInlineComparisonRating,
            j = e.activeRequests,
            k = e.inlineFeedbackDisplay,
            Z = void 0 !== k && k,
            N = e.modelBackend,
            S = r.role,
            P = r.messages,
            T = r.variantIds,
            R = (0, c.useState)(P),
            F = R[0],
            D = R[1],
            q = H.theme,
            A = q.color,
            B = q.icon,
            z = q.activeColor,
            G = (0, U.kP)().session,
            V = (0, W.dD)(),
            $ = (0, W.lj)(),
            K = (0, g.WS)(),
            Y = (0, c.useState)(!1),
            Q = Y[0],
            X = Y[1],
            ee = (0, c.useMemo)(
              function () {
                return T.findIndex(function (e) {
                  return e === F[0].nodeId;
                });
              },
              [T, F]
            ),
            en = S !== O.uU.User,
            ea = F[F.length - 1],
            eo = (0, c.useState)(ea.rating),
            ei = eo[0],
            es = eo[1],
            el = (0, x.hz)(),
            ec = (0, eH.Z)(),
            ed = (0, c.useCallback)(
              function () {
                1 === F.length &&
                  (K(S === O.uU.User ? p.s6.editPrompt : p.s6.editCompletion, {
                    id: F[0].message.id,
                    threadId: s,
                  }),
                  X(!0));
              },
              [F, K, S, s]
            ),
            em = (0, c.useCallback)(function () {
              X(!1);
            }, []),
            ef = (0, c.useCallback)(
              function (e) {
                d(ea.nodeId, ea.message.id, e), es(e);
              },
              [ea, d]
            ),
            eh = (0, c.useState)(ea.inlineComparisonRating),
            eg = eh[0],
            ep = eh[1];
          (0, c.useEffect)(
            function () {
              es(ea.rating), ep(ea.inlineComparisonRating);
            },
            [ea]
          ),
            (0, c.useEffect)(
              function () {
                D(P);
              },
              [P]
            );
          var ev = (0, c.useMemo)(
              function () {
                return J.Cv.getRequestIdFromConversationTurn(r);
              },
              [r]
            ),
            ex = "CompletionUpdated:".concat(F[F.length - 1].nodeId),
            eb = (0, c.useCallback)(
              function (e, n) {
                var t = n.nodeId;
                D(function (e) {
                  var n = [],
                    r = !0,
                    a = !1,
                    o = void 0;
                  try {
                    for (
                      var i, s = e[Symbol.iterator]();
                      !(r = (i = s.next()).done);
                      r = !0
                    ) {
                      var u = i.value;
                      if (u.nodeId === t) {
                        var c = l.current.getNode(t);
                        n.push(
                          (0, I.Z)(
                            {
                              nodeId: t,
                              parentId: c.parentId,
                              message: c.message,
                            },
                            c.metadata
                          )
                        );
                      } else n.push(u);
                    }
                  } catch (d) {
                    (a = !0), (o = d);
                  } finally {
                    try {
                      r || null == s.return || s.return();
                    } finally {
                      if (a) throw o;
                    }
                  }
                  return n;
                });
              },
              [l]
            );
          (0, c.useEffect)(
            function () {
              var e = L().subscribe(ex, eb);
              return function () {
                L().unsubscribe(e);
              };
            },
            [eb, ex]
          );
          var ey = (0, c.useMemo)(
              function () {
                return j.has(ev);
              },
              [j, ev]
            ),
            eC = (0, c.useMemo)(
              function () {
                var e = !0,
                  n = !1,
                  t = void 0;
                try {
                  for (
                    var r, a = F[Symbol.iterator]();
                    !(e = (r = a.next()).done);
                    e = !0
                  ) {
                    var o = r.value;
                    if (o.errType) return o.errType;
                  }
                } catch (i) {
                  (n = !0), (t = i);
                } finally {
                  try {
                    e || null == a.return || a.return();
                  } finally {
                    if (n) throw t;
                  }
                }
                return !1;
              },
              [F]
            ),
            ew = (0, c.useMemo)(
              function () {
                if (en) {
                  var e,
                    n,
                    t =
                      null ===
                        (e = l.current.getParentPromptNode(F[0].nodeId)) ||
                      void 0 === e
                        ? void 0
                        : e.parentId,
                    r =
                      t &&
                      (null === (n = l.current.getNode(t).message.metadata) ||
                      void 0 === n
                        ? void 0
                        : n.model_slug),
                    a =
                      (null == F ? void 0 : F[0]) &&
                      J.Cv.getModelFromMessage(
                        null == F ? void 0 : F[0].message
                      );
                  if (a && r && a !== r)
                    return "The previous model used in this conversation is unavailable. We've switched you to the latest default model";
                }
                return null;
              },
              [en, F, l]
            ),
            ej = (0, c.useMemo)(
              function () {
                if (!el.has("tools") && !el.has("tools2") && !el.has("tools3"))
                  return { avatarIcon: B, avatarColor: A };
                if (ey && F.length > 0) {
                  var e = F[F.length - 1];
                  if (e9(e) || ne(e) || nr(e))
                    return { avatarIcon: "s", avatarColor: z };
                  if (nn(e) || nt(e))
                    return { avatarIcon: "c", avatarColor: z };
                  if (na(e) || no(e)) {
                    var n = na(e) ? e.message.recipient : e.message.author.name,
                      t = null == n ? void 0 : n.split(".")[0],
                      r = ec.find(function (e) {
                        return e.namespace === t;
                      });
                    return r
                      ? { avatarPlugin: r }
                      : { avatarIcon: "p", avatarColor: z };
                  } else if (
                    J.Cv.getIsTextTypeFromMessage(e.message) &&
                    (J.Cv.getTextFromMessage(e.message).length > 0 ||
                      F.length > 1)
                  )
                    return { avatarIcon: "t", avatarColor: z };
                }
                return { avatarIcon: B, avatarColor: A };
              },
              [el, ey, F, B, A, z, ec]
            ),
            ek = ej.avatarIcon,
            eZ = ej.avatarColor,
            eN = ej.avatarPlugin,
            eI = (0, c.useCallback)(
              function (e, n) {
                var t = l.current.getParentId(e);
                l.current.addNode(n, "", t, O.Jq.Prompt);
              },
              [l]
            ),
            eM = (0, c.useMemo)(
              function () {
                var e = [];
                return (
                  F.forEach(function (n, t) {
                    var r = null == F ? void 0 : F[t - 1],
                      o =
                        r &&
                        (J.Cv.getIsIncompleteFromMessage(r.message) ||
                          J.Cv.getIsContinuedFromMessage(r.message)),
                      i = J.Cv.getIsContinuedFromMessage(n.message),
                      s =
                        J.Cv.getIsTextTypeFromMessage(n.message) &&
                        J.Cv.getTextFromMessage(n.message);
                    if (o && i && s) {
                      var l = e.pop();
                      (null == l ? void 0 : l.type) === a.MultiText
                        ? (l.messages.push(n), e.push(l))
                        : (null == l ? void 0 : l.type) === a.Text &&
                          e.push({
                            type: a.MultiText,
                            messages: [l.message, n],
                          });
                    } else if (e9(n) || ne(n) || nr(n)) {
                      var u = e[e.length - 1];
                      (null == u ? void 0 : u.type) === a.SB ||
                      (null == u ? void 0 : u.type) === a.B
                        ? u.messages.push(n)
                        : e.push({ type: e9(n) ? a.SB : a.B, messages: [n] });
                    } else if (na(n) || no(n)) {
                      var c = e[e.length - 1];
                      no(n) && (null == c ? void 0 : c.type) === a.P
                        ? c.messages.push(n)
                        : e.push({ type: a.P, messages: [n] });
                    } else {
                      var d = a.Text;
                      nn(n) ? (d = a.C) : nt(n) && (d = a.CEO),
                        e.push({ type: d, message: n });
                    }
                  }),
                  e.map(function (n, t) {
                    var r,
                      o = t === e.length - 1;
                    switch (n.type) {
                      case a.Text:
                        return (0,
                        i.jsx)(eU, { className: "min-h-[20px]", message: n.message, isEditing: Q, format: en, isCompletionInProgress: o && ey, onCreateEditNode: eI, threadId: s, onUpdateNode: v, onDeleteNode: f, onChangeItemInView: u, onRequestCompletion: h, onExitEdit: em, disabled: 0 !== j.size, onSandboxLinkClick: C, isCompletion: en, onRequestMoreCompletions: m, isResponseToPluginMessage: (null === (r = e[t - 1]) || void 0 === r ? void 0 : r.type) === a.P }, n.message.nodeId);
                      case a.MultiText:
                        return (0,
                        i.jsx)(e$, { messages: n.messages, isCompletionInProgress: o && ey, isCompletion: en }, t);
                      case a.SB:
                        if (!el.has("tools")) return null;
                        return (0,
                        i.jsx)(e4, { messages: n.messages }, n.messages[0].nodeId);
                      case a.B:
                        if (!el.has("tools")) return null;
                        return (0,
                        i.jsx)(e6, { messages: n.messages, isComplete: !o }, n.messages[0].nodeId);
                      case a.C:
                        if (!el.has("tools2")) return null;
                        var l = e[t + 1],
                          c = l && l.type === a.CEO ? l.message : void 0;
                        return (0,
                        i.jsx)(e5, { message: n.message, outputMessage: c }, n.message.nodeId);
                      case a.CEO:
                        if (!el.has("tools2")) return null;
                        return (0,
                        i.jsx)(e8, { message: n.message, isCollapsed: !1 }, n.message.nodeId);
                      case a.P:
                        if (!el.has("tools3")) return null;
                        return (0,
                        i.jsx)(e7, { messages: n.messages }, n.messages[0].nodeId);
                      default:
                        return null;
                    }
                  })
                );
              },
              [F, Q, en, ey, eI, s, v, f, u, h, em, j.size, C, m, el]
            ),
            eS = (0, c.useMemo)(
              function () {
                return (
                  (en &&
                    (null == F ? void 0 : F[0]) &&
                    J.Cv.getModelFromMessage(
                      null == F ? void 0 : F[0].message
                    )) ||
                  N
                );
              },
              [en, F, N]
            ),
            eP =
              !$ &&
              !V &&
              en &&
              !Z &&
              !Q &&
              1 === ee &&
              o &&
              null == eg &&
              null == ei &&
              2 === T.length &&
              Date.now() -
                (null !== (n = ea.message.create_time) && void 0 !== n
                  ? n
                  : 0) *
                  1e3 <
                6e5 &&
              !ey &&
              el.has("dfw_inline_message_regen_comparison"),
            eT = (0, c.useRef)(Date.now()),
            eR = (0, c.useRef)(
              (null !== (t = ea.message.create_time) && void 0 !== t
                ? t
                : Date.now()) * 1e3
            ),
            eF = (0, c.useRef)(Date.now());
          (0, c.useEffect)(
            function () {
              ey || (eF.current = Date.now());
            },
            [ey]
          );
          var e_ = (0, c.useCallback)(
              function (e) {
                if (eP) {
                  var n,
                    t,
                    r,
                    a,
                    o = T[0] || "",
                    i =
                      (null === (n = l.current) || void 0 === n
                        ? void 0
                        : n.getConversationTurns(o)) || [],
                    s = i[i.length - 1],
                    u = (null == s ? void 0 : s.messages) || [],
                    c = u[u.length - 1],
                    d =
                      (null == c
                        ? void 0
                        : null === (t = c.message) || void 0 === t
                        ? void 0
                        : t.id) || "",
                    m = T[1] || "",
                    f =
                      (null === (r = l.current) || void 0 === r
                        ? void 0
                        : r.getConversationTurns(m)) || [],
                    h = f[f.length - 1],
                    g = (null == h ? void 0 : h.messages) || [],
                    p = g[g.length - 1];
                  w(
                    d,
                    (null == p
                      ? void 0
                      : null === (a = p.message) || void 0 === a
                      ? void 0
                      : a.id) || "",
                    e,
                    eT.current,
                    eT.current,
                    eR.current,
                    eF.current
                  ),
                    l.current.updateNode(ea.nodeId, {
                      metadata: {
                        $set: (0, M.Z)(
                          (0, I.Z)({}, l.current.getMetadata(ea.nodeId)),
                          { inlineComparisonRating: e }
                        ),
                      },
                    }),
                    ep(e),
                    l.current.updateNode(c.nodeId, {
                      metadata: {
                        $set: (0, M.Z)(
                          (0, I.Z)({}, l.current.getMetadata(c.nodeId)),
                          { inlineComparisonRating: "baseline" }
                        ),
                      },
                    });
                }
              },
              [eP, ea.nodeId, w, l, T]
            ),
            eD = (0, c.useCallback)(
              function () {
                l.current.updateNode(ea.nodeId, {
                  metadata: {
                    $set: (0, M.Z)(
                      (0, I.Z)({}, l.current.getMetadata(ea.nodeId)),
                      { inlineComparisonRating: "skip" }
                    ),
                  },
                }),
                  ep("skip");
              },
              [ea.nodeId, l]
            );
          return (0, i.jsxs)(ns, {
            className: (0, _.Z)(
              "group",
              "w-full text-gray-800 dark:text-gray-100",
              Z ? "" : "border-b border-black/10 dark:border-gray-900/50",
              en ? "bg-gray-50 dark:bg-[#444654]" : "dark:bg-gray-800"
            ),
            children: [
              ew && (0, i.jsx)(nh, { children: ew }),
              (0, i.jsxs)(nu, {
                className: (0, _.Z)(Z ? "" : "m-auto"),
                children: [
                  (0, i.jsxs)(nc, {
                    children: [
                      en
                        ? eN
                          ? (0, i.jsx)(er.Ph, {
                              plugin: eN,
                              notice: eC || void 0,
                            })
                          : (0, i.jsx)(er.k$, {
                              background:
                                el.has("model_preview") && eS === y.f_
                                  ? "black"
                                  : eZ || "",
                              iconName: ek,
                              notice: eC || void 0,
                            })
                        : (0, i.jsx)(er.Yt, {
                            user: null == G ? void 0 : G.user,
                            notice: eC || void 0,
                          }),
                      T.length > 1 &&
                        !$ &&
                        !Z &&
                        (0, i.jsx)(eu, {
                          currentPage: ee,
                          onChangeIndex: function (e) {
                            return u(T[e]);
                          },
                          length: T.length,
                          className:
                            "invisible absolute left-0 top-2 -ml-4 -translate-x-full group-hover:visible",
                        }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]",
                    children: [
                      (0, i.jsx)(nl, { children: eM }),
                      !en &&
                        !Z &&
                        1 === F.length &&
                        !Q &&
                        (0, i.jsx)(nf, {
                          $hidden: 0 !== j.size,
                          children: (0, i.jsx)(nm, {
                            onClick: ed,
                            className: "md:invisible md:group-hover:visible",
                            children: (0, i.jsx)(b.ZP, { icon: E.vPQ }),
                          }),
                        }),
                      (0, i.jsxs)("div", {
                        className: "flex justify-between",
                        children: [
                          T.length > 1 &&
                            $ &&
                            !Z &&
                            (0, i.jsx)(eu, {
                              currentPage: ee,
                              onChangeIndex: function (e) {
                                return u(T[e]);
                              },
                              length: T.length,
                              className: "self-center pt-2",
                            }),
                          en &&
                            !Z &&
                            (0, i.jsxs)(nf, {
                              $hidden: 1,
                              children: [
                                "thumbsDown" !== ei &&
                                  (0, i.jsx)(
                                    nm,
                                    {
                                      onClick: function () {
                                        return ef("thumbsUp");
                                      },
                                      disabled: "thumbsUp" === ei,
                                      className: (0, _.Z)(
                                        "thumbsUp" === ei &&
                                          "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700"
                                      ),
                                      children: (0, i.jsx)(b.ZP, {
                                        icon: E.fmn,
                                      }),
                                    },
                                    "thumbsUp:".concat(ea.nodeId)
                                  ),
                                "thumbsUp" !== ei &&
                                  (0, i.jsx)(
                                    nm,
                                    {
                                      onClick: function () {
                                        return ef("thumbsDown");
                                      },
                                      disabled: "thumbsDown" === ei,
                                      className: (0, _.Z)(
                                        "thumbsDown" === ei &&
                                          "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700"
                                      ),
                                      children: (0, i.jsx)(b.ZP, {
                                        icon: E.oLd,
                                      }),
                                    },
                                    "thumbsDown:".concat(ea.nodeId)
                                  ),
                              ],
                            }),
                          false &&
                            (0, i.jsxs)(ng, {
                              children: [
                                (0, i.jsx)("div", {
                                  className: (0, _.Z)("mr-4"),
                                  children:
                                    "Was this response better or worse?",
                                }),
                                (0, i.jsxs)(nd, {
                                  onClick: function () {
                                    return e_("new");
                                  },
                                  title:
                                    "This response was better than the previous response",
                                  children: [
                                    (0, i.jsx)(b.ZP, {
                                      icon: E.fmn,
                                      className: (0, _.Z)("mr-1"),
                                    }),
                                    "Better",
                                  ],
                                }),
                                (0, i.jsxs)(nd, {
                                  onClick: function () {
                                    return e_("original");
                                  },
                                  title:
                                    "This response was worse than the previous response",
                                  children: [
                                    (0, i.jsx)(b.ZP, {
                                      icon: E.oLd,
                                      className: (0, _.Z)("mr-1"),
                                    }),
                                    "Worse",
                                  ],
                                }),
                                (0, i.jsxs)(nd, {
                                  onClick: function () {
                                    return e_("same");
                                  },
                                  title:
                                    "This response was the same in quality",
                                  children: [
                                    (0, i.jsx)(b.ZP, {
                                      icon: et.Ny3,
                                      className: (0, _.Z)(
                                        "mr-1 rounded-full border border-gray-400 dark:border-gray-300"
                                      ),
                                    }),
                                    "Same",
                                  ],
                                }),
                                (0, i.jsx)(nd, {
                                  onClick: eD,
                                  title: "Skip this comparison",
                                  children: (0, i.jsx)(b.ZP, {
                                    icon: E.q5L,
                                    size: "medium",
                                  }),
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }),
        ns = d.Z.div(eW()),
        nl = d.Z.div(eJ()),
        nu = d.Z.div(eK()),
        nc = d.Z.div(eY()),
        nd = d.Z.button(eQ()),
        nm = d.Z.button(eX()),
        nf = d.Z.div(e0(), function (e) {
          return e.$hidden ? "invisible" : "visible";
        }),
        nh = d.Z.div(e1()),
        ng = d.Z.div(e2());
      function np() {
        var e = (0, o.Z)(["mb-2 mt-auto ml-auto mr-auto"]);
        return (
          (np = function () {
            return e;
          }),
          e
        );
      }
      function nv() {
        var e = (0, o.Z)([
          "relative rounded-md border border-black/10 bg-gray-50 dark:border-gray-900/50 dark:bg-[#444654] flex flex-col overflow-hidden",
        ]);
        return (
          (nv = function () {
            return e;
          }),
          e
        );
      }
      function nx() {
        var e = (0, o.Z)([
          "mb-5 rounded-md border dark:bg-gray-800 overflow-hidden",
        ]);
        return (
          (nx = function () {
            return e;
          }),
          e
        );
      }
      function nb() {
        var e = (0, o.Z)(["ml-5"]);
        return (
          (nb = function () {
            return e;
          }),
          e
        );
      }
      function ny() {
        var e = (0, o.Z)(["ml-5"]);
        return (
          (ny = function () {
            return e;
          }),
          e
        );
      }
      function nC(e) {
        var n,
          t,
          r,
          a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          (null == e
            ? void 0
            : null === (n = e.messages) || void 0 === n
            ? void 0
            : n.length) === 1 &&
          !(null == e
            ? void 0
            : null === (t = e.messages) || void 0 === t
            ? void 0
            : t.some(function (e) {
                return "error" in e;
              })) &&
          (!a ||
            !(
              (null == e
                ? void 0
                : null === (r = e.messages) || void 0 === r
                ? void 0
                : r.length) === 1 &&
              J.Cv.getTextFromMessage(
                null == e ? void 0 : e.messages[0].message
              ).length < 20
            ))
        );
      }
      function nw(e) {
        var n,
          t,
          r,
          a,
          o,
          s = e.treeRef,
          u = e.ratingModalNodeId,
          d = e.ratingModalOpen,
          f = e.setRatingModalOpen,
          h = e.handleSubmitFeedback,
          v = e.onHandleChangeFeedbackComparisonRating,
          b = e.setCurrentLeafId,
          y = e.feedbackTextareaRef,
          C = e.threadIdRef,
          w = e.activeRequests,
          j = e.modelBackend,
          k = e.onChangeItemInView,
          Z = e.onRequestMoreCompletions,
          N = e.onDeleteNode,
          S = e.onRequestCompletion,
          P = e.onUpdateNode,
          T = e.onSandboxLinkClick,
          R = (0, c.useRef)(0.5 > Math.random() ? "left" : "right"),
          F =
            null === (n = s.current) || void 0 === n
              ? void 0
              : n.getConversationTurns(u || "root"),
          D = F[F.length - 1],
          q = (0, c.useState)("critique"),
          A = q[0],
          L = q[1],
          U = (0, W.lj)(),
          B = (0, x.hz)().has(G) && nC(D, !0) && !U,
          O = (0, g.WS)(),
          z = (0, c.useMemo)(
            function () {
              return {
                id: u || "root",
                threadId: C.current || "root",
                rating: d,
                model: j,
              };
            },
            [u, C, d, j]
          ),
          V =
            null == F
              ? void 0
              : F[(null == F ? void 0 : F.length) - 1].variantIds,
          $ = null == V ? void 0 : V[(null == V ? void 0 : V.length) - 1],
          H = (a = (r =
            null === (t = s.current) || void 0 === t
              ? void 0
              : t.getConversationTurns($))[r.length - 1]).messages[
            a.messages.length - 1
          ].nodeId,
          ee =
            null === (o = s.current) || void 0 === o
              ? void 0
              : o.getConversationTurns(H),
          en = (0, c.useMemo)(
            function () {
              var e =
                null == ee ? void 0 : ee[(null == ee ? void 0 : ee.length) - 1];
              return "thumbsDown" === d && B && nC(e) && nC(D);
            },
            [d, B, ee, D]
          ),
          et = (0, c.useRef)(Date.now()),
          er = (0, c.useRef)(-1),
          ea = (0, c.useRef)(Date.now()),
          eo = (0, c.useRef)(Date.now());
        (0, c.useEffect)(
          function () {
            "compare" === A
              ? ((er.current = Date.now()), O(p.s6.displayedComparisonUIV0, z))
              : "critique" === A &&
                "thumbsDown" === d &&
                O(p.s6.displayedThumbsDownFeedbackForm, z);
          },
          [A]
        );
        var ei = F[F.length - 2],
          es = ee[ee.length - 1],
          el = (0, c.useMemo)(
            function () {
              return es && J.Cv.getRequestIdFromConversationTurn(es);
            },
            [es]
          ),
          eu = (0, c.useMemo)(
            function () {
              return w.has(el);
            },
            [w, el]
          );
        (0, c.useMemo)(
          function () {
            eu || (eo.current = Date.now());
          },
          [eu]
        );
        var ec = D.messages,
          ed = ec[ec.length - 1],
          em = ed.message.id,
          ef = ed.nodeId,
          eh = s.current.getLeafFromNode(ef),
          eg = es.messages,
          ep = eg[eg.length - 1],
          ev = ep.message.id,
          ex = ep.nodeId,
          eb = s.current.getLeafFromNode(ex),
          ey = (0, c.useRef)([]),
          eC = (0, c.useRef)(""),
          ew = (0, c.useCallback)(
            function () {
              var e,
                n =
                  null === (e = y.current) || void 0 === e
                    ? void 0
                    : e.elements;
              (ey.current = (0, K.Z)(n || [])
                .filter(function (e) {
                  return e.checked;
                })
                .map(function (e) {
                  return e.id;
                })
                .map(function (e) {
                  return e.replace("feedback-", "");
                })),
                (eC.current =
                  (null == n ? void 0 : n["feedback-other"].value) || ""),
                h(eC.current, ey.current),
                "thumbsDown" === d && O(p.s6.submitThumbsDownFeedbackForm, z),
                en ? L("compare") : f(void 0);
            },
            [en, O, z, y, h, d, f]
          ),
          ej =
            "critique" === A
              ? (0, i.jsx)(m.m, { title: "Submit feedback", onClick: ew })
              : null,
          ek = "left" === R.current ? es : D,
          eZ = "left" === R.current ? D : es,
          eN = "left" === R.current ? "new" : "original",
          eI = "left" === R.current ? "original" : "new",
          eM = "left" === R.current ? "New Answer" : "Original Answer",
          eS = "left" === R.current ? "Original Answer" : "New Answer",
          eP =
            "left" === R.current
              ? "New answer is better"
              : "Original answer is better",
          eT =
            "left" === R.current
              ? "Original answer is better"
              : "New answer is better",
          eR = (0, c.useCallback)(
            function (e) {
              var n = "left" === e ? eN : "right" === e ? eI : "same";
              if (
                (O(
                  p.s6.submittedComparisonUIV0,
                  Object.assign({}, z, { choice: n })
                ),
                d)
              ) {
                var t = s.current.getMetadata(ef);
                s.current.updateNode(ef, {
                  metadata: {
                    $set: (0, M.Z)((0, I.Z)({}, t), {
                      inlineComparisonRating: "baseline",
                    }),
                  },
                });
                var r = s.current.getMetadata(ex);
                s.current.updateNode(ex, {
                  metadata: {
                    $set: (0, M.Z)((0, I.Z)({}, r), {
                      inlineComparisonRating: n,
                    }),
                  },
                }),
                  v(
                    em,
                    ev,
                    d,
                    n,
                    R.current,
                    et.current,
                    er.current,
                    ea.current,
                    eo.current,
                    eC.current,
                    ey.current
                  );
              }
              b(e === R.current ? eb.id : eh.id), f(void 0);
            },
            [eN, eI, O, z, d, b, eb.id, eh.id, f, s, ef, ex, v, em, ev]
          ),
          eF = !eu && null != eo.current && en,
          e_ = (0, c.useCallback)(
            function () {
              f(void 0),
                "critique" === A
                  ? O(p.s6.skippedThumbsDownFeedbackForm, Object.assign({}, z))
                  : "compare" === A &&
                    O(p.s6.skippedComparisonUIV0, Object.assign({}, z));
            },
            [f, O, z, A]
          );
        return (0, i.jsxs)(
          m.Z,
          {
            isOpen: !0,
            onModalClose: e_,
            closeButton: (0, i.jsx)(Q.z, {
              as: "button",
              color: "neutral",
              onClick: e_,
              children: (0, i.jsx)(E.q5L, {}),
            }),
            type:
              "critique" === A
                ? "thumbsUp" === d
                  ? "success"
                  : "danger"
                : "success",
            icon:
              "critique" === A ? ("thumbsUp" === d ? E.fmn : E.oLd) : void 0,
            title:
              "critique" === A
                ? "Provide additional feedback"
                : "Pick the best answer to improve the model",
            primaryButton: ej,
            size: "larger",
            children: [
              "critique" === A &&
                (0, i.jsxs)("form", {
                  ref: y,
                  children: [
                    (0, i.jsx)(Y.ZP, {
                      id: "feedback-other",
                      placeholder:
                        "thumbsUp" === d
                          ? "What do you like about the response?"
                          : "What was the issue with the response? How could it be improved?",
                      rows: 3,
                      className:
                        "mt-4 mb-1 w-full rounded-md dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white",
                    }),
                    "thumbsDown" === d &&
                      (0, i.jsxs)("div", {
                        className: "mb-4",
                        children: [
                          (0, i.jsx)(X, {
                            id: "feedback-harmful",
                            label: "This is harmful / unsafe",
                          }),
                          (0, i.jsx)(X, {
                            id: "feedback-false",
                            label: "This isn't true",
                          }),
                          (0, i.jsx)(X, {
                            id: "feedback-not-helpful",
                            label: "This isn't helpful",
                          }),
                        ],
                      }),
                  ],
                }),
              "compare" === A &&
                ee &&
                C.current &&
                (0, i.jsxs)("div", {
                  className: (0, _.Z)("w-full"),
                  children: [
                    (0, i.jsx)("p", {
                      className: (0, _.Z)("mt-3 mb-7"),
                      children:
                        "The conversation will continue with the answer you choose.",
                    }),
                    (0, i.jsx)(nZ, {
                      children: (0, i.jsx)(nI, {
                        children: (0, i.jsx)(ni, {
                          modelBackend: j,
                          turn: ei,
                          isFinalTurn: !1,
                          threadId: C.current,
                          treeRef: s,
                          onChangeItemInView: k,
                          onChangeRating: l(),
                          onRequestMoreCompletions: Z,
                          onDeleteNode: N,
                          onRequestCompletion: S,
                          onUpdateNode: P,
                          onSandboxLinkClick: T,
                          activeRequests: w,
                          inlineFeedbackDisplay: !0,
                          onHandleChangeVariantFeedbackInlineComparisonRating:
                            l(),
                        }),
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className: (0, _.Z)(),
                      children: [
                        (0, i.jsxs)("div", {
                          className: (0, _.Z)(
                            "mb-2 grid w-full grid-cols-2 gap-5"
                          ),
                          children: [
                            (0, i.jsx)("div", {
                              children: (0, i.jsx)("p", {
                                className: (0, _.Z)("font-semibold"),
                                children: eM,
                              }),
                            }),
                            (0, i.jsx)("div", {
                              children: (0, i.jsx)("p", {
                                className: (0, _.Z)("font-semibold"),
                                children: eS,
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: (0, _.Z)(
                            "mb-5 grid w-full grid-cols-2 gap-5"
                          ),
                          children: [
                            (0, i.jsxs)(nk, {
                              children: [
                                (0, i.jsx)(nN, {
                                  children: (0, i.jsx)(ni, {
                                    modelBackend: j,
                                    turn: ek,
                                    isFinalTurn: !0,
                                    threadId: C.current,
                                    treeRef: s,
                                    onChangeItemInView: k,
                                    onChangeRating: l(),
                                    onDeleteNode: N,
                                    onRequestMoreCompletions: Z,
                                    onRequestCompletion: S,
                                    onUpdateNode: P,
                                    onSandboxLinkClick: T,
                                    activeRequests: w,
                                    inlineFeedbackDisplay: !0,
                                    onHandleChangeVariantFeedbackInlineComparisonRating:
                                      l(),
                                  }),
                                }),
                                (0, i.jsx)(nj, {
                                  children: (0, i.jsx)(m.m, {
                                    disabled: !eF,
                                    title: eP,
                                    onClick: function () {
                                      return eR("left");
                                    },
                                    color: "dark",
                                  }),
                                }),
                              ],
                            }),
                            (0, i.jsxs)(nk, {
                              children: [
                                (0, i.jsx)(nN, {
                                  children: (0, i.jsx)(ni, {
                                    modelBackend: j,
                                    turn: eZ,
                                    isFinalTurn: !0,
                                    threadId: C.current,
                                    treeRef: s,
                                    onChangeItemInView: k,
                                    onChangeRating: l(),
                                    onDeleteNode: N,
                                    onRequestMoreCompletions: Z,
                                    onRequestCompletion: S,
                                    onUpdateNode: P,
                                    onSandboxLinkClick: T,
                                    activeRequests: w,
                                    inlineFeedbackDisplay: !0,
                                    onHandleChangeVariantFeedbackInlineComparisonRating:
                                      l(),
                                  }),
                                }),
                                (0, i.jsx)(nj, {
                                  children: (0, i.jsx)(m.m, {
                                    disabled: !eF,
                                    title: eT,
                                    onClick: function () {
                                      return eR("right");
                                    },
                                    color: "dark",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: (0, _.Z)("grid w-full"),
                          children: (0, i.jsxs)("div", {
                            className: (0, _.Z)("mb-2 text-right"),
                            children: [
                              (0, i.jsx)(m.m, {
                                disabled: !eF,
                                title: "Neither answer is better",
                                color: "primary",
                                onClick: function () {
                                  return eR("same");
                                },
                                className: (0, _.Z)("mr-2"),
                              }),
                              (0, i.jsx)(m.m, {
                                title: "Skip this step",
                                onClick: function () {
                                  return f(void 0);
                                },
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          },
          "RatingModal-".concat(u)
        );
      }
      var nj = d.Z.div(np()),
        nk = d.Z.div(nv()),
        nZ = d.Z.div(nx()),
        nN = d.Z.div(nb()),
        nI = d.Z.div(ny()),
        nM = t(35025),
        nS = t(42928),
        nP = t(60612);
      function nT(e) {
        var n = e.text,
          t = e.onDone,
          r = (0, nP.Z)(),
          a = (0, c.useState)(!0),
          o = a[0],
          s = a[1],
          l = (0, c.useState)(0),
          u = l[0],
          d = l[1],
          m = (0, c.useMemo)(
            function () {
              return new nR().humanTypingDelaysQuertyDistance(n);
            },
            [n]
          );
        return (
          (0, c.useEffect)(
            function () {
              n &&
                o &&
                (s(!0),
                m.forEach(function (e, n) {
                  setTimeout(function () {
                    r() &&
                      (d(n), n === m.length - 1 && (s(!1), null == t || t()));
                  }, e);
                }));
            },
            [m, r, o, t, n]
          ),
          (0, i.jsxs)(i.Fragment, {
            children: [n.substring(0, u + 1), o && "▋"],
          })
        );
      }
      var nR = (function () {
          function e() {
            (0, nM.Z)(this, e);
          }
          var n = e.prototype;
          return (
            (n.qwertyDistance = function (e, n) {
              var t,
                r,
                a,
                o = {
                  q: [0, 0],
                  w: [1, 0],
                  e: [2, 0],
                  r: [3, 0],
                  t: [4, 0],
                  y: [5, 0],
                  u: [6, 0],
                  i: [7, 0],
                  o: [8, 0],
                  p: [9, 0],
                  a: [0, 1],
                  s: [1, 1],
                  d: [2, 1],
                  f: [3, 1],
                  g: [4, 1],
                  h: [5, 1],
                  j: [6, 1],
                  k: [7, 1],
                  l: [8, 1],
                  z: [0, 2],
                  x: [1, 2],
                  c: [2, 2],
                  v: [3, 2],
                  b: [4, 2],
                  n: [5, 2],
                  m: [6, 2],
                },
                i = (0, nS.Z)(
                  null !== (t = o[e.toLowerCase()]) && void 0 !== t
                    ? t
                    : [0, 0],
                  2
                ),
                s = i[0],
                l = i[1],
                u = (0, nS.Z)(
                  null !== (r = o[n.toLowerCase()]) && void 0 !== r
                    ? r
                    : [0, 0],
                  2
                );
              return Math.abs(s - u[0]) + Math.abs(l - u[1]);
            }),
            (n.humanTypingDelaysQuertyDistance = function (e) {
              for (
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 10,
                  t =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 100,
                  r = 0,
                  a = [],
                  o = 0;
                o < e.length;
                ++o
              ) {
                var i = void 0;
                if (o > 0) {
                  var s = this.qwertyDistance(e[o - 1], e[o]);
                  i =
                    0 === s
                      ? this.getRandomInt(n, Math.floor(t / 2))
                      : 1 === s
                      ? this.getRandomInt(n, Math.floor((2 * t) / 3))
                      : this.getRandomInt(n, t);
                } else i = this.getRandomInt(n, t);
                a.push(i + r), (r += i);
              }
              return a;
            }),
            (n.getRandomInt = function (e, n) {
              return Math.floor(Math.random() * (n - e + 1)) + e;
            }),
            e
          );
        })(),
        nF = t(1744);
      function n_() {
        var e = (0, o.Z)(["flex flex-col gap-2 text-gray-100 text-sm\n", ""]);
        return (
          (n_ = function () {
            return e;
          }),
          e
        );
      }
      function nD() {
        var e = (0, o.Z)([
          "flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all\n",
          "\n",
        ]);
        return (
          (nD = function () {
            return e;
          }),
          e
        );
      }
      function nq() {
        var e = (0, o.Z)([
          "flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer hover:pr-14 break-all\n",
          "\n",
        ]);
        return (
          (nq = function () {
            return e;
          }),
          e
        );
      }
      function nA() {
        var e = (0, o.Z)(["text-sm border-none bg-transparent p-0 m-0 w-full"]);
        return (
          (nA = function () {
            return e;
          }),
          e
        );
      }
      function nL() {
        var e = (0, o.Z)([
          "flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative ",
        ]);
        return (
          (nL = function () {
            return e;
          }),
          e
        );
      }
      function nE() {
        var e = (0, o.Z)([
          "absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l\n",
          "",
        ]);
        return (
          (nE = function () {
            return e;
          }),
          e
        );
      }
      function nU() {
        var e = (0, o.Z)(["absolute flex right-1 z-10 text-gray-300\n", ""]);
        return (
          (nU = function () {
            return e;
          }),
          e
        );
      }
      function nB() {
        var e = (0, o.Z)(["p-1 hover:text-white"]);
        return (
          (nB = function () {
            return e;
          }),
          e
        );
      }
      var nO = H.href;
      function nz(e) {
        var n = e.items,
          t = e.activeId,
          r = e.onNextPage,
          a = e.hasNextPage,
          o = e.onNewThread,
          s = e.onRefetchHistory,
          l = e.onUpdateUserModifiedTitle,
          u = e.userModifiedTitle,
          d = e.newChatName,
          m = e.isLoading,
          f = e.isError,
          h = (0, c.useRef)(null),
          g = (0, c.useState)(!1),
          p = g[0],
          v = g[1],
          x = (0, c.useCallback)(
            function () {
              v(!0), s();
            },
            [s]
          ),
          b = 0 === n.length;
        return (
          (0, c.useEffect)(function () {
            h.current && h.current.scrollIntoView();
          }, []),
          (0, i.jsxs)(nG, {
            $centered: m || (f && b),
            children: [
              b &&
                !m &&
                !f &&
                (0, i.jsx)("div", {
                  className: "p-3 text-center italic text-gray-500",
                  children: "History is temporarily unavailable.",
                }),
              b && m && (0, i.jsx)(nF.Z, { className: "m-auto" }),
              b &&
                f &&
                (0, i.jsxs)("div", {
                  className: "p-3 italic text-gray-500",
                  children: [
                    "Unable to load history",
                    !p &&
                      (0, i.jsx)(Q.z, {
                        as: "button",
                        color: "dark",
                        size: "small",
                        className: "m-auto mt-2",
                        onClick: x,
                        children: "Retry",
                      }),
                  ],
                }),
              n.map(function (e) {
                var n = t === e.id;
                return (0,
                i.jsx)(nV, { id: e.id, title: e.title, newChatName: n ? d : void 0, userModifiedTitle: n ? u : "", onUpdateUserModifiedTitle: l, active: n, forwardRef: n ? h : void 0, onNewThread: o, onRefetchHistory: s }, "Entry-".concat(e.id));
              }),
              a &&
                (0, i.jsx)(Q.z, {
                  as: "button",
                  onClick: r,
                  color: "dark",
                  className: "m-auto mb-2",
                  size: "small",
                  children: "Show more",
                }),
            ],
          })
        );
      }
      var nG = d.Z.div(n_(), function (e) {
        return e.$centered && "h-full justify-center items-center";
      });
      function nV(e) {
        var n = e.id,
          t = e.title,
          r = e.active,
          a = e.onNewThread,
          o = e.onRefetchHistory,
          s = e.onUpdateUserModifiedTitle,
          d = e.newChatName,
          m = e.userModifiedTitle,
          f = e.forwardRef,
          h = (0, W.lj)(),
          v = (0, g.WS)(),
          x = (0, u.useRouter)(),
          y = (0, c.useState)(!1),
          C = y[0],
          w = y[1],
          j = (0, c.useRef)(null),
          k = (0, c.useState)(!1),
          Z = k[0],
          N = k[1],
          I = (0, c.useState)(),
          M = I[0],
          S = I[1],
          P = (0, c.useCallback)(
            function (e) {
              var r, a;
              if (
                (null == e || e.preventDefault(),
                w(!1),
                (null === (r = j.current) || void 0 === r ? void 0 : r.value) &&
                  (null === (a = j.current) || void 0 === a
                    ? void 0
                    : a.value) !== t)
              ) {
                var i = j.current.value;
                z.ZP.patchConversation(n, { title: i }),
                  s(i),
                  v(p.s6.renameThread, { threadId: n, content: i }),
                  o();
              }
            },
            [v, n, o, s, t]
          ),
          T = (0, c.useCallback)(
            function (e) {
              "Enter" === e.key && P();
            },
            [P]
          ),
          R = (0, c.useCallback)(
            function () {
              z.ZP.deleteConversation(n, { is_visible: !1 }).then(function () {
                o();
              }),
                x.asPath === nO ? a() : x.replace({ pathname: nO });
            },
            [n, a, o, x]
          ),
          F = (0, c.useCallback)(
            function (e) {
              e.preventDefault(),
                v(p.s6.loadThread, { threadId: n }),
                x.push({ pathname: x.pathname, query: { chatId: n } }, void 0, {
                  shallow: !0,
                });
            },
            [v, n, x]
          ),
          D = m || (r && d) || t;
        if (
          ((0, c.useEffect)(
            function () {
              r && d && d !== M && S(d);
            },
            [r, d, D, M, m]
          ),
          C)
        )
          return (0, i.jsxs)(nH, {
            $active: r,
            children: [
              (0, i.jsx)(b.ZP, { icon: E.IC0, className: "flex-shrink-0" }),
              (0, i.jsx)(nW, {
                ref: j,
                type: "text",
                defaultValue: D,
                autoFocus: !0,
                onKeyDown: T,
                className: "mr-0",
                onBlur: P,
              }),
              (0, i.jsxs)(nY, {
                $active: !0,
                children: [
                  (0, i.jsx)(nQ, {
                    onClick: P,
                    children: (0, i.jsx)(b.ZP, { icon: E.UgA }),
                  }),
                  (0, i.jsx)(nQ, {
                    onClick: function (e) {
                      e.preventDefault(), w(!1);
                    },
                    children: (0, i.jsx)(b.ZP, { icon: E.q5L }),
                  }),
                ],
              }),
            ],
          });
        var q = M && r && !h && !m,
          A = 'Delete "'.concat(D, '"?');
        return (0, i.jsxs)(n$, {
          onClick: r ? l() : F,
          $active: r,
          className: (0, _.Z)("group", q && "animate-flash"),
          ref: f,
          children: [
            (0, i.jsx)(b.ZP, { icon: Z ? E.Ybf : E.IC0 }),
            (0, i.jsxs)(nJ, {
              children: [
                q ? (0, i.jsx)(nT, { text: D, onDone: o }) : Z ? A : D,
                (!M || !r) && (0, i.jsx)(nK, { $active: r }),
              ],
            }),
            Z &&
              (0, i.jsxs)(nY, {
                $active: !0,
                children: [
                  (0, i.jsx)(nQ, {
                    onClick: R,
                    children: (0, i.jsx)(b.ZP, { icon: E.UgA }),
                  }),
                  (0, i.jsx)(nQ, {
                    onClick: function () {
                      N(!1);
                    },
                    children: (0, i.jsx)(b.ZP, { icon: E.q5L }),
                  }),
                ],
              }),
            r &&
              !Z &&
              (0, i.jsxs)(nY, {
                $active: r,
                children: [
                  (0, i.jsx)(nQ, {
                    onClick: function (e) {
                      e.preventDefault(), w(!0);
                    },
                    children: (0, i.jsx)(b.ZP, { icon: E.Nte }),
                  }),
                  (0, i.jsx)(nQ, {
                    onClick: function () {
                      return N(!0);
                    },
                    children: (0, i.jsx)(b.ZP, { icon: E.Ybf }),
                  }),
                ],
              }),
          ],
        });
      }
      var n$ = d.Z.a(nD(), function (e) {
          return e.$active
            ? "pr-14 bg-gray-800 hover:bg-gray-800"
            : "hover:pr-4";
        }),
        nH = d.Z.div(nq(), function (e) {
          return e.$active && "pr-14 bg-gray-800 hover:bg-gray-800";
        }),
        nW = d.Z.input(nA()),
        nJ = d.Z.div(nL()),
        nK = d.Z.div(nE(), function (e) {
          return e.$active
            ? "from-gray-800"
            : "from-gray-900 group-hover:from-[#2A2B32]";
        }),
        nY = d.Z.div(nU(), function (e) {
          return e.$active ? "visible" : "invisible group-hover:visible";
        }),
        nQ = d.Z.button(nB()),
        nX = t(40638),
        n0 = t(29634),
        n1 = t(15762),
        n2 = t(54721),
        n3 = t.n(n2);
      function n4() {
        var e = (0, o.Z)([
          "flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm",
        ]);
        return (
          (n4 = function () {
            return e;
          }),
          e
        );
      }
      function n6() {
        var e = (0, o.Z)([
          "flex-col flex-1 overflow-y-auto border-b border-white/20\n",
          "",
        ]);
        return (
          (n6 = function () {
            return e;
          }),
          e
        );
      }
      var n5 = d.Z.a(n4()),
        n8 = d.Z.div(n6(), function (e) {
          return e.$offsetScrollbar && "-mr-2";
        }),
        n7 = H.href;
      function n9(e) {
        var n = e.onClickAccountPayment,
          t = e.showAccountPaymentMenuItem,
          r = e.onClickCustomerPortal,
          a = e.showCustomerPortalMenuItem,
          o = e.onDeleteHistory,
          s = e.showDeleteHistory,
          l = e.onNewThread,
          d = e.onOpenDebugPanel,
          m = e.settings,
          f = e.children,
          h = (0, g.WS)(),
          v = (0, n1.F)(),
          y = v.theme,
          C = v.setTheme,
          w = (0, nP.Z)(),
          j = (0, x.hz)(),
          k = (0, u.useRouter)(),
          Z = (0, c.useRef)(null),
          N = (0, c.useState)(!1),
          I = N[0],
          M = N[1],
          S = (0, c.useState)(!1),
          P = S[0],
          T = S[1],
          R = (0, c.useMemo)(
            function () {
              var e;
              return (
                null === (e = k.query.chatId) || void 0 === e ? void 0 : e[0]
              )
                ? (0, i.jsx)(
                    n3(),
                    {
                      href: n7,
                      children: (0, i.jsxs)(n5, {
                        className: "mb-2 flex-shrink-0 border border-white/20",
                        children: [
                          (0, i.jsx)(b.ZP, { icon: E.OvN }),
                          "New chat",
                        ],
                      }),
                    },
                    "Page-reset"
                  )
                : (0, i.jsxs)(n5, {
                    onClick: l,
                    className: "mb-2 flex-shrink-0 border border-white/20",
                    children: [(0, i.jsx)(b.ZP, { icon: E.OvN }), "New chat"],
                  });
            },
            [l, k.query.chatId]
          ),
          F = (0, c.useCallback)(
            function () {
              h(p.s6.clickFaqLink);
            },
            [h]
          );
        (0, c.useEffect)(
          function () {
            if (Z.current) {
              var e;
              M(
                (e = Z.current).scrollHeight > e.clientHeight ||
                  e.scrollWidth > e.clientWidth
              );
            }
          },
          [f]
        );
        var _ =
            (0, $.g)(function (e) {
              return e.flags.highlightPlusUpgrade;
            }) && !j.has("disable_upgrade_ui"),
          D = (0, c.useCallback)(
            function () {
              T(!1), o();
            },
            [o]
          );
        return (0, i.jsx)("div", {
          className:
            "scrollbar-trigger flex h-full w-full flex-1 items-start border-white/20",
          children: (0, i.jsxs)("nav", {
            className: "flex h-full flex-1 flex-col space-y-1 p-2",
            children: [
              R,
              (0, i.jsx)(n8, { ref: Z, $offsetScrollbar: I, children: f }),
              s &&
                (0, i.jsxs)(n5, {
                  onClick: function () {
                    return P ? D() : T(!0);
                  },
                  children: [
                    (0, i.jsx)(b.ZP, { icon: P ? E.UgA : E.Ybf }),
                    P ? "Confirm clear conversations" : "Clear conversations",
                  ],
                }),
              j.has("debug") &&
                (0, i.jsxs)(n5, {
                  onClick: function () {
                    return d(!0);
                  },
                  children: [(0, i.jsx)(b.ZP, { icon: E.cDN }), "Debug"],
                }),
              w() &&
                (0, i.jsxs)(n5, {
                  onClick: function () {
                    return C("dark" === y ? "light" : "dark");
                  },
                  children: [
                    (0, i.jsx)(b.ZP, { icon: "dark" === y ? E.kXG : E.wOW }),
                    "dark" === y ? "Light" : "Dark",
                    " mode",
                  ],
                }),
              m,
              (0, i.jsxs)(n5, {
                href: "https://github.com/pengzhile/pandora",
                target: "_blank",
                children: [
                  (0, i.jsx)(b.ZP, { icon: E.AlO }),
                  "Pandora on GitHub",
                ],
              }),
            ],
          }),
        });
      }
      var te = function (e) {
          var n = e.onClickAccountPayment,
            t = e.showAccountPaymentMenuItem,
            r = e.onClickCustomerPortal,
            a = e.showCustomerPortalMenuItem,
            o = e.onDeleteHistory,
            s = e.showDeleteHistory,
            l = e.onNewThread,
            u = e.onOpenDebugPanel,
            c = e.settings,
            d = e.children;
          return (0, i.jsx)("div", {
            className:
              "dark hidden bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col",
            children: (0, i.jsx)("div", {
              className: "flex h-full min-h-0 flex-col ",
              children: (0, i.jsx)(n9, {
                onClickAccountPayment: n,
                showAccountPaymentMenuItem: t,
                onClickCustomerPortal: r,
                showCustomerPortalMenuItem: a,
                onDeleteHistory: o,
                showDeleteHistory: s,
                onNewThread: l,
                onOpenDebugPanel: u,
                settings: c,
                children: d,
              }),
            }),
          });
        },
        tn = function (e) {
          var n = e.onClickAccountPayment,
            t = e.showAccountPaymentMenuItem,
            r = e.onClickCustomerPortal,
            a = e.showCustomerPortalMenuItem,
            o = e.onDeleteHistory,
            s = e.onSidebarOpen,
            l = e.sidebarOpen,
            u = e.showDeleteHistory,
            d = e.onNewThread,
            m = e.onOpenDebugPanel,
            f = e.children,
            h = e.settings;
          return (0, i.jsx)(nX.u.Root, {
            show: l,
            as: c.Fragment,
            children: (0, i.jsxs)(n0.V, {
              as: "div",
              className: "relative z-40 md:hidden",
              onClose: s,
              children: [
                (0, i.jsx)(nX.u.Child, {
                  as: c.Fragment,
                  enter: "transition-opacity ease-linear duration-300",
                  enterFrom: "opacity-0",
                  enterTo: "opacity-100",
                  leave: "transition-opacity ease-linear duration-300",
                  leaveFrom: "opacity-100",
                  leaveTo: "opacity-0",
                  children: (0, i.jsx)("div", {
                    className: "fixed inset-0 bg-gray-600 bg-opacity-75",
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: "fixed inset-0 z-40 flex",
                  children: [
                    (0, i.jsx)(nX.u.Child, {
                      as: c.Fragment,
                      enter: "transition ease-in-out duration-300 transform",
                      enterFrom: "-translate-x-full",
                      enterTo: "translate-x-0",
                      leave: "transition ease-in-out duration-300 transform",
                      leaveFrom: "translate-x-0",
                      leaveTo: "-translate-x-full",
                      children: (0, i.jsxs)(n0.V.Panel, {
                        className:
                          "relative flex w-full max-w-xs flex-1 flex-col bg-gray-900",
                        children: [
                          (0, i.jsx)(nX.u.Child, {
                            as: c.Fragment,
                            enter: "ease-in-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in-out duration-300",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: (0, i.jsx)("div", {
                              className: "absolute top-0 right-0 -mr-12 pt-2",
                              children: (0, i.jsxs)("button", {
                                type: "button",
                                className:
                                  "ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                onClick: function () {
                                  return s(!1);
                                },
                                children: [
                                  (0, i.jsx)("span", {
                                    className: "sr-only",
                                    children: "Close sidebar",
                                  }),
                                  (0, i.jsx)(b.ZP, {
                                    icon: E.q5L,
                                    size: "medium",
                                    className: "text-white",
                                    "aria-hidden": "true",
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, i.jsx)(n9, {
                            onClickAccountPayment: n,
                            showAccountPaymentMenuItem: t,
                            onClickCustomerPortal: r,
                            showCustomerPortalMenuItem: a,
                            onDeleteHistory: o,
                            showDeleteHistory: u,
                            onNewThread: d,
                            onOpenDebugPanel: m,
                            settings: h,
                            children: f,
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)("div", { className: "w-14 flex-shrink-0" }),
                  ],
                }),
              ],
            }),
          });
        },
        tt = function (e) {
          var n = e.onSidebarOpen,
            t = e.onNewThread,
            r = e.title,
            a = e.newChatName,
            o = (0, c.useState)(),
            s = o[0],
            l = o[1],
            d = (0, u.useRouter)(),
            m = (0, c.useMemo)(
              function () {
                var e;
                return (
                  null === (e = d.query.chatId) || void 0 === e ? void 0 : e[0]
                )
                  ? (0, i.jsx)(
                      n3(),
                      {
                        href: n7,
                        children: (0, i.jsx)("button", {
                          type: "button",
                          className: "px-3",
                          children: (0, i.jsx)(b.ZP, {
                            icon: E.OvN,
                            size: "medium",
                          }),
                        }),
                      },
                      "Page-reset"
                    )
                  : (0, i.jsx)("button", {
                      type: "button",
                      className: "px-3",
                      onClick: t,
                      children: (0, i.jsx)(b.ZP, {
                        icon: E.OvN,
                        size: "medium",
                      }),
                    });
              },
              [t, d.query.chatId]
            );
          return (
            (0, c.useEffect)(
              function () {
                a !== s && l(a);
              },
              [a, s]
            ),
            (0, i.jsxs)("div", {
              className:
                "sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden",
              children: [
                (0, i.jsxs)("button", {
                  type: "button",
                  className:
                    "-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white",
                  onClick: function () {
                    return n(!0);
                  },
                  children: [
                    (0, i.jsx)("span", {
                      className: "sr-only",
                      children: "Open sidebar",
                    }),
                    (0, i.jsx)(b.ZP, {
                      icon: E.cur,
                      "aria-hidden": "true",
                      size: "medium",
                    }),
                  ],
                }),
                (0, i.jsx)("h1", {
                  className: "flex-1 text-center text-base font-normal",
                  children:
                    s && a ? (0, i.jsx)(nT, { text: a }) : r || "New chat",
                }),
                m,
              ],
            })
          );
        },
        tr = t(500);
      function ta() {
        var e = (0, o.Z)(["flex flex-row gap-2 mb-4"]);
        return (
          (ta = function () {
            return e;
          }),
          e
        );
      }
      function to() {
        var e = (0, o.Z)([
          "bg-gray-200 rounded-md text-gray-500 text-xs flex flex-row items-center gap-1 px-2 py-1",
        ]);
        return (
          (to = function () {
            return e;
          }),
          e
        );
      }
      function ti() {
        var e = (0, o.Z)(["flex items-center gap-1"]);
        return (
          (ti = function () {
            return e;
          }),
          e
        );
      }
      function ts() {
        var e = (0, o.Z)([""]);
        return (
          (ts = function () {
            return e;
          }),
          e
        );
      }
      var tl = function (e) {
          var n = e.urls,
            t = e.onRemoveUrl,
            r = e.clickable,
            a = e.className;
          return 0 === n.size
            ? null
            : (0, i.jsx)(tu, {
                className: a,
                children: Array.from(n).map(function (e) {
                  return (0, i.jsxs)(
                    tc,
                    {
                      children: [
                        (0, i.jsx)(E.XKb, {}),
                        (0, i.jsxs)(
                          td,
                          (0, M.Z)(
                            (0, I.Z)(
                              {},
                              r
                                ? { href: e, target: "_blank", disabled: !1 }
                                : { disabled: !0 }
                            ),
                            {
                              children: [
                                new URL(e).hostname,
                                r && (0, i.jsx)(E.AlO, {}),
                              ],
                            }
                          )
                        ),
                        t &&
                          (0, i.jsx)(tm, {
                            onClick: function () {
                              return t(e);
                            },
                            children: (0, i.jsx)(E.q5L, {}),
                          }),
                      ],
                    },
                    e
                  );
                }),
              });
        },
        tu = d.Z.div(ta()),
        tc = d.Z.div(to()),
        td = d.Z.a(ti()),
        tm = d.Z.button(ts()),
        tf = c.memo(tl);
      function th() {
        var e = (0, o.Z)([
          "\nflex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]\n",
          "\n",
        ]);
        return (
          (th = function () {
            return e;
          }),
          e
        );
      }
      function tg() {
        var e = (0, o.Z)([
          "\nabsolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5  hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent\n",
          " ",
          "",
        ]);
        return (
          (tg = function () {
            return e;
          }),
          e
        );
      }
      function tp() {
        var e = (0, o.Z)([
          "flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center",
        ]);
        return (
          (tp = function () {
            return e;
          }),
          e
        );
      }
      var tv = en()(
        function () {
          return t.e(949).then(t.bind(t, 93949));
        },
        {
          loadableGenerated: {
            webpack: function () {
              return [93949];
            },
          },
          ssr: !1,
        }
      );
      function tx(e) {
        var n = e.onAbortCompletion,
          t = e.onCreateNewCompletion,
          r = e.onUpdateArtifactStatus,
          a = e.onRequestMoreCompletions,
          o = e.onContinueGenerating,
          s = e.onFileUpload,
          l = e.canUpload,
          u = e.artifact,
          d = e.currentLeafId,
          m = e.currentRequestId,
          f = e.modelBackend,
          h = e.threadId,
          v = e.isCompletionInProgress,
          x = e.className,
          y = e.placeholder,
          C = e.currentPrompt,
          w = e.onChangeCurrentPrompt,
          j = e.clearOnSubmit,
          k = void 0 === j || j,
          N = e.disabled,
          S = void 0 !== N && N,
          P = e.shouldRetry,
          R = e.canPause,
          F = void 0 !== R && R,
          D = e.canContinue,
          q = void 0 !== D && D,
          A = "root" === d,
          L = (0, W.lj)(),
          U = (0, g.WS)(),
          B = (0, c.useContext)(tr.g).serviceStatus,
          O = (0, c.useMemo)(function () {
            return new Set([]);
          }, []),
          z = (0, c.useRef)(null),
          G = (0, c.useState)(""),
          V = G[0],
          $ = G[1],
          H = (0, c.useCallback)(
            function (e) {
              r({ state: "pasted", url: e, id: e, contents: "" }), $("");
            },
            [r]
          ),
          J = (0, c.useCallback)(
            function (e) {
              w(e.currentTarget.value);
            },
            [w]
          ),
          K = (0, c.useCallback)(
            function (e) {
              if ((null == e || e.preventDefault(), !S)) {
                var n,
                  a,
                  o =
                    null === (n = z.current) || void 0 === n ? void 0 : n.value,
                  i = "".concat(
                    null === (a = z.current) || void 0 === a
                      ? void 0
                      : a.dataset.id,
                    "-nextPrompt"
                  );
                if (o || (null == u ? void 0 : u.url)) {
                  var s = (null == u ? void 0 : u.url) || "";
                  (null == u ? void 0 : u.state) === "pasted" &&
                    r(function (e) {
                      return (0, M.Z)((0, I.Z)({}, e), { state: "static" });
                    });
                  var l =
                    (null == u ? void 0 : u.state) === "pasted"
                      ? { artifacts: [null == u ? void 0 : u.url] }
                      : {};
                  t(
                    i,
                    (0, I.Z)({ value: o || "" }, l),
                    { eventSource: e ? "mouse" : "keyboard" },
                    s
                  ),
                    k && w(""),
                    $(""),
                    (0, Y.SI)(1, z.current);
                }
              }
            },
            [
              null == u ? void 0 : u.state,
              null == u ? void 0 : u.url,
              k,
              S,
              t,
              r,
              w,
            ]
          ),
          X = (0, c.useCallback)(
            (0, Z.Z)(function () {
              var e, n, t, r;
              return (0, T.__generator)(this, function (a) {
                switch (a.label) {
                  case 0:
                    if (!O.has("link") || "root" !== d) return [2];
                    return [4, navigator.clipboard.readText()];
                  case 1:
                    return (
                      (n = a.sent()),
                      (t = /^https?:\/\/[^\s]+/g),
                      (r =
                        null === (e = n.match(t)) || void 0 === e
                          ? void 0
                          : e[0]) && $(r),
                      [2]
                    );
                }
              });
            }),
            [O, d]
          ),
          ee = (0, c.useCallback)(
            function () {
              r(null);
            },
            [r]
          ),
          en = (0, c.useCallback)(
            function () {
              n("", m), a(d, { eventSource: "mouse" });
            },
            [d, m, n, a]
          ),
          et = (0, c.useCallback)(
            function () {
              n("", m),
                U(p.s6.pauseCompletion, { threadId: h, eventSource: "mouse" });
            },
            [m, h, U, n]
          ),
          er = (0, c.useMemo)(
            function () {
              return {
                Enter: {
                  validator: function () {
                    return !S;
                  },
                  handler: function (e) {
                    L ||
                      e.shiftKey ||
                      e.isComposing ||
                      (e.preventDefault(), v || K());
                  },
                },
                Escape: {
                  validator: function () {
                    return F && v;
                  },
                  handler: function () {
                    n("", m),
                      U(p.s6.pauseCompletion, {
                        threadId: h,
                        eventSource: "keyboard",
                      });
                  },
                },
              };
            },
            [S, L, v, K, F, n, m, U, h]
          );
        (0, c.useEffect)(
          function () {
            var e = z.current,
              n = function (e) {
                var n;
                (null === (n = er[e.key]) || void 0 === n
                  ? void 0
                  : n.validator(e)) && er[e.key].handler(e);
              };
            return (
              e && e.addEventListener("keydown", n),
              function () {
                e && e.removeEventListener("keydown", n);
              }
            );
          },
          [er]
        ),
          (0, c.useEffect)(
            function () {
              var e = z.current,
                n = function (n) {
                  !(null == e ? void 0 : e.value) &&
                    V &&
                    A &&
                    (n.preventDefault(), H(V));
                };
              return (
                O.has("link") && e && A && e.addEventListener("paste", n),
                function () {
                  e && e.removeEventListener("paste", n);
                }
              );
            },
            [H, d, A, r, V, O]
          ),
          (0, c.useEffect)(
            function () {
              return (
                window.addEventListener("focus", X),
                function () {
                  window.removeEventListener("focus", X);
                }
              );
            },
            [X]
          ),
          (0, c.useEffect)(function () {
            var e;
            null === (e = z.current) || void 0 === e || e.focus();
          }, []);
        var ea = !A && !v && !(null == B ? void 0 : B.oof),
          eo = (0, c.useCallback)(
            function () {
              o(d);
            },
            [d, o]
          ),
          ei = (0, c.useMemo)(
            function () {
              return (0, i.jsxs)(tw, {
                className: (0, _.Z)(P && "m-auto flex-col items-center"),
                children: [
                  P &&
                    (0, i.jsx)("span", {
                      className: "mb-3 block text-xs md:mb-auto",
                      children: "There was an error generating a response",
                    }),
                  ea &&
                    (0, i.jsxs)(Q.z, {
                      as: "button",
                      color: P ? "primary" : "neutral",
                      onClick: en,
                      className: (0, _.Z)(P ? "m-auto" : "border-0 md:border"),
                      children: [
                        (0, i.jsx)(b.ZP, {
                          icon: E.Qxo,
                          size: L ? "small" : "xsmall",
                        }),
                        (!L || P) && "Regenerate response",
                      ],
                    }),
                  q &&
                    (0, i.jsxs)(Q.z, {
                      as: "button",
                      color: "neutral",
                      onClick: eo,
                      className: "border-0 md:border",
                      children: [
                        (0, i.jsx)(b.ZP, {
                          icon: E.lV_,
                          className: "-rotate-180",
                          size: L ? "small" : "xsmall",
                        }),
                        !L && "Continue generating",
                      ],
                    }),
                  F &&
                    v &&
                    (0, i.jsxs)(Q.z, {
                      as: "button",
                      color: "neutral",
                      onClick: et,
                      className: "border-0 md:border",
                      children: [
                        (0, i.jsx)(b.ZP, {
                          icon: E.jxP,
                          size: L ? "small" : "xsmall",
                        }),
                        !L && "Stop generating",
                      ],
                    }),
                ],
              });
            },
            [q, F, ea, et, en, eo, v, L, P]
          );
        return (0, i.jsx)("form", {
          className: x,
          onSubmit: K,
          children: (0, i.jsxs)("div", {
            className: "relative flex h-full flex-1 md:flex-col",
            children: [
              !L && ei,
              !P &&
                (0, i.jsxs)(ty, {
                  $disabled: P,
                  children: [
                    (null == u ? void 0 : u.state) === "pasted" &&
                      (0, i.jsx)(tf, {
                        urls: new Set([u.url]),
                        onRemoveUrl: ee,
                        className: "ml-2",
                      }),
                    (0, i.jsx)(Y.ZP, {
                      tabIndex: 0,
                      onFocus: X,
                      value: C,
                      "data-id": d,
                      ref: z,
                      style: { maxHeight: "200px" },
                      rows: 1,
                      onChange: J,
                      placeholder: y,
                      className: (0, _.Z)(
                        "m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent",
                        l ? "pl-7 md:pl-4" : "pl-2 md:pl-0"
                      ),
                      disabled: P,
                    }),
                    l &&
                      (0, i.jsx)(tv, {
                        threadId: h,
                        onFileUpload: s,
                        currentLeafId: d,
                        modelBackend: f,
                        disabled: v,
                        children: function (e) {
                          return (0, i.jsx)(tC, {
                            disabled: v || e,
                            $onRightSide: !1,
                            children: e
                              ? (0, i.jsx)(nF.Z, {})
                              : (0, i.jsx)(b.ZP, {
                                  icon: E.Cje,
                                  size: "small",
                                }),
                          });
                        },
                      }),
                    (0, i.jsx)(tC, {
                      disabled: v || P || S,
                      $onRightSide: !0,
                      $nudgeBottom: v,
                      children: v
                        ? (0, i.jsx)("div", {
                            className: "text-2xl",
                            children: (0, i.jsx)(tb, {}),
                          })
                        : (0, i.jsx)(b.ZP, {
                            icon: E.LbG,
                            size: "small",
                            className: "mr-1",
                          }),
                    }),
                  ],
                }),
              L && ei,
            ],
          }),
        });
      }
      function tb() {
        var e = (0, c.useState)(0),
          n = e[0],
          t = e[1];
        (0, c.useEffect)(function () {
          var e = setInterval(function () {
            t(function (e) {
              return (e + 1) % 3;
            });
          }, 350);
          return function () {
            return clearInterval(e);
          };
        }, []);
        for (var r = [], a = 0; a < 3; a++)
          r.push(
            (0, i.jsx)(
              "span",
              { className: a <= n ? "" : "invisible", children: "\xb7" },
              a
            )
          );
        return (0, i.jsx)(i.Fragment, { children: r });
      }
      var ty = d.Z.div(th(), function (e) {
          return e.$disabled && "bg-gray-100";
        }),
        tC = d.Z.button(
          tg(),
          function (e) {
            return e.$nudgeBottom && "disabled:bottom-0.5 md:disabled:bottom-1";
          },
          function (e) {
            return e.$onRightSide ? "right-1 md:right-2" : "left-1 md:left-2";
          }
        ),
        tw = d.Z.div(tp()),
        tj = t(46275);
      function tk(e) {
        var n = e.children,
          t = e.title,
          r = e.icon,
          a = e.sidebarOpen,
          o = e.onSidebarOpen;
        return (0, i.jsx)(nX.u.Root, {
          show: a,
          as: c.Fragment,
          children: (0, i.jsxs)(n0.V, {
            as: "div",
            className: "relative z-10",
            onClose: o,
            children: [
              (0, i.jsx)("div", { className: "fixed inset-0" }),
              (0, i.jsx)("div", {
                className: "fixed inset-0 overflow-hidden",
                children: (0, i.jsx)("div", {
                  className: "absolute inset-0 overflow-hidden",
                  children: (0, i.jsx)("div", {
                    className:
                      "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",
                    children: (0, i.jsx)(nX.u.Child, {
                      as: c.Fragment,
                      enter:
                        "transform transition ease-in-out duration-100 sm:duration-300",
                      enterFrom: "translate-x-full",
                      enterTo: "translate-x-0",
                      leave:
                        "transform transition ease-in-out duration-300 sm:duration-500",
                      leaveFrom: "translate-x-0",
                      leaveTo: "translate-x-full",
                      children: (0, i.jsx)(n0.V.Panel, {
                        className:
                          "pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",
                        children: (0, i.jsxs)("div", {
                          className:
                            "flex h-full flex-col overflow-y-auto bg-white shadow-xl dark:bg-gray-800",
                          children: [
                            (0, i.jsx)("div", {
                              className: "",
                              children: (0, i.jsxs)("div", {
                                className: "flex items-start justify-between",
                                children: [
                                  (0, i.jsxs)(n0.V.Title, {
                                    className:
                                      "flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 dark:text-white",
                                    children: [
                                      (0, i.jsx)(b.ZP, { icon: r }),
                                      t,
                                    ],
                                  }),
                                  (0, i.jsx)("div", {
                                    className:
                                      "mr-2 mt-2 flex h-7 items-center",
                                    children: (0, i.jsxs)("button", {
                                      type: "button",
                                      className:
                                        "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",
                                      onClick: function () {
                                        return o(!1);
                                      },
                                      children: [
                                        (0, i.jsx)("span", {
                                          className: "sr-only",
                                          children: "Close panel",
                                        }),
                                        (0, i.jsx)(b.ZP, {
                                          icon: E.q5L,
                                          size: "medium",
                                          "aria-hidden": "true",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: "relative flex-1",
                              children: n,
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      var tZ = t(1215);
      function tN() {
        var e = (0, o.Z)([
          "bg-yellow-200 text-yellow-900 py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase",
        ]);
        return (
          (tN = function () {
            return e;
          }),
          e
        );
      }
      var tI = d.Z.span(tN()),
        tM = t(60363),
        tS = t(36284),
        tP = t(87762),
        tT = { textarea: "", "model-switcher": "" };
      function tR() {
        var e = (0, x.hz)(),
          n = eO(
            (0, y.CS)(function (e) {
              return e.isoDate;
            })
          ),
          t = (0, tP.a)(
            ["modelMessageCap"],
            function () {
              return z.ZP.getModelMessageCap();
            },
            { enabled: false }
          ),
          r = t.data;
        return (
          t.isSuccess,
          t.isLoading,
          (0, c.useMemo)(
            function () {
              var e = (null == r ? void 0 : r.message_cap) || 0,
                t = (null == r ? void 0 : r.message_cap_window) || 1,
                a = (function (e) {
                  if (e < 60)
                    return e < 2 ? "minute" : "".concat(e, " minutes");
                  var n = Math.floor(e / 60);
                  if (n < 24) return n < 2 ? "hour" : "".concat(n, " hours");
                  var t = Math.floor(n / 24);
                  if (t < 7) return t < 2 ? "day" : "".concat(t, " days");
                })(t),
                o = (null == r ? void 0 : r.message_disclaimer) || tT;
              return a
                ? r && t && e
                  ? {
                      textareaDisclaimer: o.textarea
                        .replaceAll("%FORMATTED_TIME%", n)
                        .replaceAll("%NUMERATOR%", "".concat(e))
                        .replaceAll("%DENOMINATOR%", a),
                      modelSwitcherDisclaimer: o["model-switcher"]
                        .replaceAll("%FORMATTED_TIME%", n)
                        .replaceAll("%NUMERATOR%", "".concat(e))
                        .replaceAll("%DENOMINATOR%", a),
                    }
                  : {
                      textareaDisclaimer: tT.textarea,
                      modelSwitcherDisclaimer: tT["model-switcher"],
                    }
                : {
                    textareaDisclaimer: o.textarea,
                    modelSwitcherDisclaimer: o["model-switcher"],
                  };
            },
            [r, n]
          )
        );
      }
      var tF = en()(
        function () {
          return Promise.all([t.e(913), t.e(977)]).then(t.bind(t, 30545));
        },
        {
          loadableGenerated: {
            webpack: function () {
              return [30545];
            },
          },
          ssr: !1,
        }
      );
      function t_(e) {
        var n,
          t = e.onChangeModelSetting,
          r = e.availableModels,
          a = e.modelBackend,
          o = (0, x.hz)(),
          s = (0, c.useMemo)(
            function () {
              return r.find(function (e) {
                return e.id === a;
              });
            },
            [r, a]
          );
        return (0, i.jsxs)("div", {
          className: "flex items-center justify-center gap-2",
          children: [
            (0, i.jsx)(tD, {
              onChangeModelSetting: t,
              availableModels: r,
              modelBackend: a,
            }),
            o.has("tools3") &&
              (null == s
                ? void 0
                : null === (n = s.enabledTools) || void 0 === n
                ? void 0
                : n.includes("tools3")) &&
              (0, i.jsx)(tF, {}),
          ],
        });
      }
      function tD(e) {
        var n = e.onChangeModelSetting,
          t = e.availableModels,
          r = e.modelBackend,
          a = (0, y.BT)(),
          o = (0, g.WS)(),
          s = tR(),
          l = (0, c.useCallback)(
            function (e) {
              e.id !== a &&
                (n(y.G3.Model, e.id), o(p.s6.toggleModel, { model: e.id }));
            },
            [a, o, n]
          ),
          u = "".concat(s.modelSwitcherDisclaimer),
          d = t.map(function (e) {
            return {
              value: e,
              title: e.title,
              description: e.id === a ? u : e.description,
              tags: e.tags,
              disabled: e.id === a,
            };
          }),
          m =
            d.find(function (e) {
              return e.value.id === r;
            }) || d[0];
        return (0, i.jsx)(tS.ZP, {
          name: "Model",
          selectedOption: m,
          options: d,
          onChange: l,
        });
      }
      var tq = function (e) {
          var n,
            t = e.modelBackend,
            r = e.availableModels,
            a =
              r.find(function (e) {
                return e.id === t;
              }) || r[0],
            o = a.tags
              .filter(function (e) {
                return tS.D2.includes(e);
              })
              .map(function (e) {
                return (0, tS.Vp)(e);
              }),
            s = (0, eH.Z)();
          if (s.length > 0) {
            var l = s.map(function (e, n) {
              return (0,
              i.jsx)(tM.Z, { url: e.manifest.logo_url, name: e.manifest.name_for_human, size: 16 }, n);
            });
            n = (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("div", { children: "Enabled plugins:" }),
                l,
              ],
            });
          }
          return (0, i.jsxs)("div", {
            className:
              "flex w-full items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300",
            children: [
              "Model: ",
              a.title,
              o,
              n
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)("span", { className: "px-1", children: "•" }),
                      n,
                    ],
                  })
                : null,
            ],
          });
        },
        tA = t(75318);
      function tL() {
        var e = (0, o.Z)([
          "text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100",
        ]);
        return (
          (tL = function () {
            return e;
          }),
          e
        );
      }
      function tE() {
        var e = (0, o.Z)([
          "text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center",
        ]);
        return (
          (tE = function () {
            return e;
          }),
          e
        );
      }
      function tU() {
        var e = (0, o.Z)(["md:flex items-start text-center gap-3.5"]);
        return (
          (tU = function () {
            return e;
          }),
          e
        );
      }
      function tB() {
        var e = (0, o.Z)(["flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"]);
        return (
          (tB = function () {
            return e;
          }),
          e
        );
      }
      function tO() {
        var e = (0, o.Z)([
          "flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2",
        ]);
        return (
          (tO = function () {
            return e;
          }),
          e
        );
      }
      function tz() {
        var e = (0, o.Z)(["flex flex-col gap-3.5 w-full sm:max-w-md m-auto"]);
        return (
          (tz = function () {
            return e;
          }),
          e
        );
      }
      function tG() {
        var e = (0, o.Z)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md"]);
        return (
          (tG = function () {
            return e;
          }),
          e
        );
      }
      function tV() {
        var e = (0, o.Z)([
          "w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md after:content-['\"'] before:content-['\"']",
        ]);
        return (
          (tV = function () {
            return e;
          }),
          e
        );
      }
      function t$() {
        var e = (0, o.Z)([
          "w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900",
        ]);
        return (
          (t$ = function () {
            return e;
          }),
          e
        );
      }
      var tH = d.Z.div(tL()),
        tW = d.Z.h1(tE()),
        tJ = d.Z.div(tU()),
        tK = d.Z.div(tB()),
        tY = d.Z.h2(tO()),
        tQ = d.Z.ul(tz()),
        tX = d.Z.li(tG());
      d.Z.li(tV());
      var t0 = d.Z.button(t$());
      function t1(e) {
        var n = e.text,
          t = e.onChangeCurrentPrompt,
          r = (0, c.useCallback)(
            function () {
              t(n);
            },
            [n, t]
          );
        return (0, i.jsxs)(t0, { onClick: r, children: ['"', n, '" →'] });
      }
      function t2(e) {
        var n = e.onChangeCurrentPrompt,
          t = (0, x.nR)();
        return (0, i.jsxs)(tH, {
          children: [
            (0, i.jsxs)(tW, {
              children: ["ChatGPT", t && (0, i.jsx)(tI, { children: "Plus" })],
            }),
            (0, i.jsxs)(tJ, {
              children: [
                (0, i.jsxs)(tK, {
                  children: [
                    (0, i.jsxs)(tY, {
                      children: [
                        (0, i.jsx)(b.ZP, { icon: E.kXG, size: "medium" }),
                        "Examples",
                      ],
                    }),
                    (0, i.jsxs)(tQ, {
                      children: [
                        (0, i.jsx)(t1, {
                          text: "Explain quantum computing in simple terms",
                          onChangeCurrentPrompt: n,
                        }),
                        (0, i.jsx)(t1, {
                          text: "Got any creative ideas for a 10 year old’s birthday?",
                          onChangeCurrentPrompt: n,
                        }),
                        (0, i.jsx)(t1, {
                          text: "How do I make an HTTP request in Javascript?",
                          onChangeCurrentPrompt: n,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)(tK, {
                  children: [
                    (0, i.jsxs)(tY, {
                      children: [
                        (0, i.jsx)(b.ZP, { icon: tA.Z, size: "medium" }),
                        "Capabilities",
                      ],
                    }),
                    (0, i.jsxs)(tQ, {
                      children: [
                        (0, i.jsx)(tX, {
                          children:
                            "Remembers what user said earlier in the conversation",
                        }),
                        (0, i.jsx)(tX, {
                          children:
                            "Allows user to provide follow-up corrections",
                        }),
                        (0, i.jsx)(tX, {
                          children: "Trained to decline inappropriate requests",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)(tK, {
                  children: [
                    (0, i.jsxs)(tY, {
                      children: [
                        (0, i.jsx)(b.ZP, { icon: E.BJv, size: "medium" }),
                        "Limitations",
                      ],
                    }),
                    (0, i.jsxs)(tQ, {
                      children: [
                        (0, i.jsx)(tX, {
                          children:
                            "May occasionally generate incorrect information",
                        }),
                        (0, i.jsx)(tX, {
                          children:
                            "May occasionally produce harmful instructions or biased content",
                        }),
                        (0, i.jsx)(tX, {
                          children:
                            "Limited knowledge of world and events after 2021",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function t3() {
        var e = (0, o.Z)([
          "flex flex-col items-center text-sm  dark:bg-gray-800",
        ]);
        return (
          (t3 = function () {
            return e;
          }),
          e
        );
      }
      function t4() {
        var e = (0, o.Z)(["w-full h-32 md:h-48 flex-shrink-0"]);
        return (
          (t4 = function () {
            return e;
          }),
          e
        );
      }
      function t6() {
        var e = (0, o.Z)([
          "cursor-pointer absolute right-6 bottom-[124px] md:bottom-[120px] z-10 rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200",
        ]);
        return (
          (t6 = function () {
            return e;
          }),
          e
        );
      }
      function t5() {
        var e = (0, o.Z)(["px-2 py-10 relative w-full flex flex-col h-full"]);
        return (
          (t5 = function () {
            return e;
          }),
          e
        );
      }
      function t8() {
        var e = (0, o.Z)([
          "text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow",
        ]);
        return (
          (t8 = function () {
            return e;
          }),
          e
        );
      }
      function t7(e) {
        var n = e.conversationTurns,
          t = e.onChangeItemInView,
          r = e.onRequestMoreCompletions,
          a = e.onUpdateNode,
          o = e.onChangeRating,
          s = e.onDeleteNode,
          l = e.onRequestCompletion,
          u = e.onChangeCurrentPrompt,
          d = e.onSandboxLinkClick,
          m = e.onHandleChangeVariantFeedbackInlineComparisonRating,
          f = e.threadId,
          h = e.treeRef,
          g = e.activeRequests,
          p = e.isProcessingArtifact,
          v = e.isLoading,
          C = e.onChangeModelSetting,
          w = e.availableModels,
          j = e.currentThreadModel,
          k = e.canShowThreadSettings,
          Z = (0, tZ.useScrollToBottom)(),
          N = (0, nS.Z)((0, tZ.useSticky)(), 1)[0],
          I = (0, nP.Z)(),
          M = n.length < 2,
          S = k && M && !v,
          P = (0, x.nR)(),
          T = (0, c.useState)(!1),
          R = T[0],
          F = T[1],
          _ = (0, y.ZP)(w, j, f).modelBackend;
        return (
          (0, c.useEffect)(
            function () {
              v
                ? setTimeout(function () {
                    I() && F(!0);
                  }, 1e3)
                : F(!1);
            },
            [v, I]
          ),
          (0, i.jsxs)(i.Fragment, {
            children: [
              S &&
                (0, i.jsxs)(rt, {
                  children: [
                    (0, i.jsx)(t_, {
                      onChangeModelSetting: C,
                      availableModels: w,
                      modelBackend: _,
                    }),
                    (0, i.jsxs)(rr, {
                      children: [
                        "ChatGPT",
                        P && (0, i.jsx)(tI, { children: "Plus" }),
                      ],
                    }),
                  ],
                }),
              (0, i.jsxs)(t9, {
                children: [
                  M && !v && !k && (0, i.jsx)(t2, { onChangeCurrentPrompt: u }),
                  R && v && (0, i.jsx)(nF.Z, { className: "mx-auto mt-4" }),
                  !M &&
                    !v &&
                    k &&
                    (0, i.jsx)(tq, { availableModels: w, modelBackend: _ }),
                  n.map(function (e, u) {
                    return e.role === O.uU.Unknown || e.role === O.uU.System
                      ? null
                      : (0, i.jsx)(
                          ni,
                          {
                            turn: e,
                            isFinalTurn: u === n.length - 1,
                            threadId: f,
                            treeRef: h,
                            onChangeItemInView: t,
                            onChangeRating: o,
                            onRequestMoreCompletions: r,
                            onDeleteNode: s,
                            onRequestCompletion: l,
                            onUpdateNode: a,
                            onSandboxLinkClick: d,
                            onHandleChangeVariantFeedbackInlineComparisonRating:
                              m,
                            activeRequests: g,
                            modelBackend: _,
                          },
                          u
                        );
                  }),
                  !S && (0, i.jsx)(re, {}),
                ],
              }),
              p && (0, i.jsx)(nF.Z, { className: "mx-auto mt-4" }),
              !N &&
                (0, i.jsx)(rn, {
                  onClick: Z,
                  children: (0, i.jsx)(b.ZP, { icon: E.tv1, className: "m-1" }),
                }),
            ],
          })
        );
      }
      var t9 = d.Z.div(t3()),
        re = d.Z.div(t4()),
        rn = d.Z.button(t6()),
        rt = d.Z.div(t5()),
        rr = d.Z.h1(t8()),
        ra = en()(
          function () {
            return Promise.resolve().then(t.bind(t, 1215));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [1215];
              },
            },
            ssr: !1,
          }
        );
      function ro(e) {
        var n = e.children;
        return (0, i.jsx)(ra, {
          className: (0, _.Z)("h-full dark:bg-gray-800"),
          followButtonClassName: "scroll-convo",
          initialScrollBehavior: "auto",
          children: n,
        });
      }
      var ri = t(69153);
      function rs() {
        var e = (0, o.Z)(["flex gap-4 mt-6"]);
        return (
          (rs = function () {
            return e;
          }),
          e
        );
      }
      function rl(e) {
        var n = e.onBack,
          t = e.onNext,
          r = e.onSubmit;
        return (0, i.jsxs)(ru, {
          children: [
            n &&
              (0, i.jsx)(Q.z, {
                as: "button",
                color: "neutral",
                onClick: n,
                children: "Back",
              }),
            t &&
              (0, i.jsx)(Q.z, {
                as: "button",
                onClick: t,
                color: "neutral",
                className: "ml-auto",
                children: "Next",
              }),
            r &&
              (0, i.jsx)(Q.z, {
                as: "button",
                onClick: r,
                color: "primary",
                className: "ml-auto",
                children: "Done",
              }),
          ],
        });
      }
      var ru = d.Z.div(rs());
      function rc() {
        var e = (0, o.Z)(["prose dark:prose-invert"]);
        return (
          (rc = function () {
            return e;
          }),
          e
        );
      }
      function rd() {
        var e = (0, o.Z)(["!mt-4 font-normal !mb-2"]);
        return (
          (rd = function () {
            return e;
          }),
          e
        );
      }
      function rm() {
        var e = (0, o.Z)(["mb-4"]);
        return (
          (rm = function () {
            return e;
          }),
          e
        );
      }
      function rf() {
        var e = (0, o.Z)(["w-full h-[1px] bg-gray-300 opacity-20"]);
        return (
          (rf = function () {
            return e;
          }),
          e
        );
      }
      var rh = "oai/apps/hasSeenOnboarding",
        rg = H.id,
        rp = H.name,
        rv = function () {
          var e = (0, c.useCallback)(function () {
              v.m.setItem(
                "".concat(rh, "/").concat(rg),
                new Date().toLocaleDateString("en-CA", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
              );
            }, []),
            n = (0, c.useState)(null),
            t = n[0],
            r = n[1];
          (0, c.useEffect)(
            function () {
              r(v.m.getItem("".concat(rh, "/").concat(rg)));
            },
            [r]
          );
          var a = (0, c.useCallback)(
            function () {
              return new Date();
            },
            [t]
          );
          return (0, c.useMemo)(
            function () {
              return { setHasSeenOnboarding: e, getHasSeenOnboardingDate: a };
            },
            [a, e]
          );
        };
      function rx(e) {
        var n = e.onClose,
          t = rv().setHasSeenOnboarding,
          r = (0, c.useState)(0),
          a = r[0],
          o = r[1],
          s = (0, c.useCallback)(
            function () {
              n(!0), t();
            },
            [n, t]
          );
        return (0, i.jsxs)(rj, {
          children: [
            0 === a && (0, i.jsx)(ry, { onChangePage: o }),
            1 === a && (0, i.jsx)(rC, { onChangePage: o }),
            2 === a && (0, i.jsx)(rw, { onChangePage: o, onSubmit: s }),
          ],
        });
      }
      var rb = function () {
          return "chat" === rg
            ? (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)("div", {
                    className: "mb-5",
                    children: (0, i.jsx)(rk, {
                      children: (0, i.jsx)("b", { children: rp }),
                    }),
                  }),
                  (0, i.jsx)(rN, {}),
                ],
              })
            : (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsxs)(rk, {
                    children: [
                      "Welcome to ",
                      (0, i.jsx)("b", { children: rp }),
                    ],
                  }),
                  (0, i.jsx)("p", {
                    children:
                      "Here are a few things to keep in mind before we get started:",
                  }),
                  (0, i.jsx)(rN, {}),
                ],
              });
        },
        ry = function (e) {
          var n = e.onChangePage;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(rb, {}),
              (0, i.jsx)(rZ, { children: "This is a free research preview." }),
              (0, i.jsxs)(ri.I, {
                children: [
                  (0, i.jsx)(ri.Z, {
                    icon: "\uD83D\uDD2C",
                    children:
                      "Our goal is to get external feedback in order to improve our systems and make them safer.",
                  }),
                  (0, i.jsx)(ri.Z, {
                    icon: "\uD83D\uDEA8",
                    children:
                      "While we have safeguards in place, the system may occasionally generate incorrect or misleading information and produce offensive or biased content. It is not intended to give advice.",
                  }),
                ],
              }),
              (0, i.jsx)(rl, {
                onNext: function () {
                  return n(1);
                },
              }),
            ],
          });
        },
        rC = function (e) {
          var n = e.onChangePage;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(rb, {}),
              (0, i.jsx)(rZ, { children: "How we collect data" }),
              (0, i.jsxs)(ri.I, {
                children: [
                  (0, i.jsx)(ri.Z, {
                    icon: "\uD83E\uDDBE",
                    children:
                      "Conversations may be reviewed by our AI trainers to improve our systems.",
                  }),
                  (0, i.jsx)(ri.Z, {
                    icon: "\uD83D\uDD10",
                    children:
                      "Please don't share any sensitive information in your conversations.",
                  }),
                ],
              }),
              (0, i.jsx)(rl, {
                onBack: function () {
                  return n(0);
                },
                onNext: function () {
                  return n(2);
                },
              }),
            ],
          });
        },
        rw = function (e) {
          var n = e.onChangePage,
            t = e.onSubmit,
            r = (0, c.useRef)(null);
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(rb, {}),
              (0, i.jsx)(rZ, { children: "We'd love your feedback!" }),
              (0, i.jsxs)(ri.I, {
                children: [
                  (0, i.jsx)(ri.Z, {
                    icon: "\uD83D\uDC4D",
                    children:
                      "This system is optimized for dialogue. Let us know if a particular response was good or unhelpful.",
                  }),
                  (0, i.jsxs)(ri.Z, {
                    icon: "\uD83D\uDCAC",
                    children: [
                      "Share your feedback in our",
                      " ",
                      (0, i.jsx)("a", {
                        href: "https://discord.gg/openai",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Discord server",
                      }),
                      ".",
                    ],
                  }),
                ],
              }),
              (0, i.jsx)(rl, {
                onBack: function () {
                  return n(1);
                },
                onSubmit: function () {
                  return null == t ? void 0 : t(r);
                },
              }),
            ],
          });
        },
        rj = d.Z.div(rc()),
        rk = d.Z.h2(rd()),
        rZ = d.Z.h4(rm()),
        rN = d.Z.div(rf()),
        rI = t(24058),
        rM = t(74516),
        rS = t(35e3),
        rP = t(69858),
        rT = t(77507);
      function rR(e) {
        var n = e.isOpen,
          t = e.onClose,
          r = (0, c.useRef)(null),
          a = (0, g.WS)(),
          o = (0, c.useState)(!1),
          s = o[0],
          l = o[1],
          d = (0, u.useRouter)(),
          m = (0, c.useCallback)(
            function () {
              a(p.s6.closeAccountPaymentModal), t();
            },
            [t, a]
          ),
          f = (0, c.useCallback)(
            (0, Z.Z)(function () {
              var e;
              return (0, T.__generator)(this, function (n) {
                switch (n.label) {
                  case 0:
                    l(!0), a(p.s6.clickAccountCustomerPortal), (n.label = 1);
                  case 1:
                    return (
                      n.trys.push([1, 3, 4, 5]),
                      [4, z.ZP.fetchCustomerPortalUrl()]
                    );
                  case 2:
                    return (e = n.sent()), d.push(e.url), [3, 5];
                  case 3:
                    return (
                      n.sent(),
                      rM.m.warning(
                        "The account management page encountered an error. Please try again. If the problem continues, please email support@openai.com.",
                        { hasCloseButton: !0 }
                      ),
                      [3, 5]
                    );
                  case 4:
                    return l(!1), [7];
                  case 5:
                    return [2];
                }
              });
            }),
            [d, a, l]
          );
        return (0, i.jsxs)(rS.x, {
          isOpen: n,
          onClose: t,
          focusRef: r,
          children: [
            (0, i.jsxs)("div", {
              className:
                "flex w-full flex-row items-center justify-between border-b py-3 px-4 dark:border-gray-700",
              children: [
                (0, i.jsx)("span", {
                  className: "text-base font-semibold sm:text-base",
                  children: "Your Account",
                }),
                (0, i.jsx)("button", {
                  className:
                    "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                  onClick: m,
                  children: (0, i.jsx)(E.q5L, { className: "h-6 w-6" }),
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: "grid",
              children: (0, i.jsx)("div", {
                className: "relative order-1 col-span-1 sm:order-2",
                children: (0, i.jsx)(rP.Oi, {
                  rowElements: [
                    (0, i.jsx)(
                      rP.Cu,
                      {
                        text: rT.S.plus.name,
                        children: (0, i.jsx)("span", {
                          className: "font-semibold text-gray-500",
                          children: rT.S.plus.costInDollars,
                        }),
                      },
                      "row-plus-plan-name"
                    ),
                    (0, i.jsx)(
                      rP.hi,
                      {
                        disabled: !0,
                        variant: "primary-disabled",
                        ref: r,
                        text: rT.S.plus.callToAction.active,
                      },
                      "row-plus-plan-button"
                    ),
                    (0, i.jsx)(
                      rP.G,
                      { text: rT.S.plus.demandAccess },
                      "row-plus-plan-demand"
                    ),
                    (0, i.jsx)(
                      rP.G,
                      { text: rT.S.plus.responseSpeed },
                      "row-plus-plan-speed"
                    ),
                    (0, i.jsx)(
                      rP.G,
                      { className: "sm:pb-1", text: rT.S.plus.modelFeatures },
                      "row-plus-plan-feathers"
                    ),
                    (0, i.jsx)(
                      rP.nR,
                      {
                        className: "sm:pb-1",
                        isLoading: s,
                        text: rT.S.manageSubscription.callToAction,
                        onClick: f,
                      },
                      "row-plus-plan-manage"
                    ),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      var rF = t(86885),
        r_ = t(59268),
        rD = { showAccountPaymentModal: !1 },
        rq = (0, r_.ZP)()(function (e) {
          return (0, M.Z)((0, I.Z)({}, rD), {
            setShowAccountPaymentModal: function (n) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : l();
              e({ showAccountPaymentModal: n }), t && t();
            },
          });
        }),
        rA = t(35873),
        rL = t(77064);
      function rE() {
        var e = (0, o.Z)([
          "h-[37px] py-2.5 px-6 text-xs uppercase text-gray-700 font-medium border-y relative",
        ]);
        return (
          (rE = function () {
            return e;
          }),
          e
        );
      }
      function rU() {
        var e = (0, o.Z)([
          "relative py-1 px-6 text-xs uppercase text-gray-700 font-medium bg-gray-100 border-y",
        ]);
        return (
          (rU = function () {
            return e;
          }),
          e
        );
      }
      d.Z.h3(rE());
      var rB = d.Z.h3(rU());
      function rO() {
        var e = (0, o.Z)(["overflow-y-auto h-full"]);
        return (
          (rO = function () {
            return e;
          }),
          e
        );
      }
      function rz() {
        var e = (0, o.Z)(["whitespace-pre-wrap text-sm"]);
        return (
          (rz = function () {
            return e;
          }),
          e
        );
      }
      function rG() {
        var e = (0, o.Z)([
          "px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer border-b dark:border-black/10 border-gray-200",
        ]);
        return (
          (rG = function () {
            return e;
          }),
          e
        );
      }
      function rV() {
        var e = (0, o.Z)(["absolute top-1/2 -translate-y-1/2 right-6"]);
        return (
          (rV = function () {
            return e;
          }),
          e
        );
      }
      function r$(e) {
        var n = e.treeRef,
          t = e.currentLeafId,
          r = (0, c.useState)(),
          a = r[0],
          o = r[1],
          s = (0, c.useMemo)(
            function () {
              return n.current
                .getBranchFromLeaf(t)
                .filter(function (e) {
                  return e.type !== O.Jq.Root;
                })
                .map(function (e) {
                  return e.message;
                });
            },
            [n, t]
          ),
          l = (0, c.useCallback)(function () {
            o(void 0);
          }, []),
          u = (0, c.useCallback)(
            function () {
              navigator.clipboard.writeText(n.current.getTextFromThread(t));
            },
            [n, t]
          ),
          d = s.map(function (e, n) {
            var t = J.Cv.getRoleFromMessage(e),
              r = J.Cv.getNameFromMessage(e);
            return (0, i.jsxs)(
              rJ,
              {
                role: "button",
                onClick: function () {
                  return o(n);
                },
                children: [
                  (0, i.jsxs)("div", {
                    className: "text-xs font-medium uppercase text-gray-400",
                    children: [
                      t,
                      t !== r && " (".concat(r, ")"),
                      " -> ",
                      J.Cv.getRecipientFromMessage(e),
                    ],
                  }),
                  (0, i.jsx)("div", { children: J.Cv.getTextFromMessage(e) }),
                ],
              },
              e.id
            );
          });
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(rH, {
              children: [
                (0, i.jsxs)(rB, {
                  children: [
                    "Conversation messages",
                    (0, i.jsx)(rK, {
                      children: (0, i.jsx)(rL.$, {
                        label: (0, i.jsx)(rL.u, {
                          text: "Copy conversation text to clipboard",
                        }),
                        children: (0, i.jsx)(rA.Z, { onCopy: u }),
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)(rW, { children: d }),
              ],
            }),
            void 0 !== a &&
              (0, i.jsx)(
                m.Z,
                {
                  isOpen: !0,
                  onModalClose: l,
                  type: "success",
                  children: (0, i.jsx)("pre", {
                    className:
                      "max-h-[80vh] overflow-auto whitespace-pre-wrap text-xs",
                    children: JSON.stringify(s[a], null, 2),
                  }),
                },
                "DebugMessageModal-".concat(a)
              ),
          ],
        });
      }
      var rH = d.Z.div(rO()),
        rW = d.Z.pre(rz()),
        rJ = d.Z.div(rG()),
        rK = d.Z.div(rV()),
        rY = t(85087),
        rQ = t(30331);
      function rX() {
        var e = (0, U.kP)(),
          n = e.session,
          t = e.loading,
          r = (0, tP.a)(
            ["models"],
            function () {
              return z.ZP.getModels(n.accessToken);
            },
            {
              enabled: Boolean(!t && (null == n ? void 0 : n.accessToken)),
              placeholderData: {
                models: [
                  {
                    slug: "text-davinci-002-render",
                    max_tokens: 4097,
                    title: "Default",
                    description: "",
                    tags: [],
                  },
                ],
              },
              onError: function (e) {
                try {
                  rQ.Tb(e);
                } catch (n) {}
              },
            }
          ).data;
        return (0, c.useMemo)(
          function () {
            var e;
            return {
              availableModels: r
                ? (e = r.models).map(function (e) {
                    return {
                      id: e.slug,
                      maxTokens: e.max_tokens,
                      title: e.title,
                      description: e.description,
                      tags: e.tags,
                      enabledTools: e.enabled_tools,
                      properties: e.qualitative_properties,
                    };
                  })
                : [],
            };
          },
          [r]
        );
      }
      var r0 = t(62906);
      t(49674);
      var r1 = t(44675);
      "".concat(r1.env.INTERNAL_API_URL, "/api");
      var r2 = t(89678),
        r3 = t.n(r2),
        r4 = t(34388),
        r6 = t(39400),
        r5 = [
          /\bnigger\w*/i,
          /\bfaggot\w*/i,
          /\bkike\w*/i,
          /\bdykes?\b/i,
          /\bwetbacks?\b/i,
          /\bchinks?\b/i,
          /\bgooks?\b/i,
          /\bpakis?\b/i,
          /\binjuns?\b/i,
          /\btrannys?\b/i,
          /\btrannies\b/i,
          /\bspicks?\b/i,
          /\bshemales?\b/i,
        ];
      function r8() {
        var e = (0, o.Z)(["overflow-hidden w-full h-full relative"]);
        return (
          (r8 = function () {
            return e;
          }),
          e
        );
      }
      function r7() {
        var e = (0, o.Z)([
          "relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch",
        ]);
        return (
          (r7 = function () {
            return e;
          }),
          e
        );
      }
      function r9() {
        var e = (0, o.Z)(["grow flex-1 overflow-hidden"]);
        return (
          (r9 = function () {
            return e;
          }),
          e
        );
      }
      function ae() {
        var e = (0, o.Z)([
          "absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2",
        ]);
        return (
          (ae = function () {
            return e;
          }),
          e
        );
      }
      var an = "oai/apps/hasSeenHistoryRestored",
        at = H.href,
        ar = function (e) {
          var n,
            r,
            a,
            o,
            s,
            d,
            f,
            h,
            C,
            w,
            j,
            k,
            D,
            A,
            V,
            H,
            Y,
            Q,
            X,
            ee,
            en,
            et,
            er,
            ea,
            eo,
            ei,
            es,
            el,
            eu,
            ec,
            ed,
            em,
            ef,
            eh,
            eg,
            ep,
            ev,
            ex,
            eb,
            ey,
            eC,
            ew,
            ej,
            ek = e.initialData,
            eZ = e.isLoading,
            eN = (0, x.hz)(),
            eI = (0, u.useRouter)(),
            eM = (0, W.lj)(),
            eS = (0, g.WS)(),
            eP = eN.has("disable_history"),
            eT = eN.has(G) && !eM,
            eR =
              ((a = (0, r0.NL)()),
              (0, c.useCallback)(
                function (e) {
                  a.removeQueries(["conversation", e]);
                },
                [a]
              )),
            eF = (0, c.useState)(),
            e_ = eF[0],
            eD = eF[1],
            eq = (0, c.useState)(),
            eA = eq[0],
            eL = eq[1],
            eE = (0, c.useState)(),
            eU = eE[0],
            eB = eE[1],
            eO = (0, c.useRef)(null),
            ez = (0, c.useRef)(ek.threadId || ""),
            eG = (0, rY.Z)(),
            eV = eG.accountStatusResponse,
            e$ = eG.isLoading,
            eH = (0, x.nR)(),
            eW = (0, $.g)(function (e) {
              return e.flags.isUserInCanPayGroup;
            }),
            eJ = (0, U.kP)().session,
            eK = null == eJ ? void 0 : eJ.accessToken,
            eY =
              ((s = (o = {
                enabled: !eP && Boolean(eK) && !e$,
                accessToken: eK,
              }).enabled),
              (d = o.accessToken),
              (C = (h = (0, r6.N)({
                queryKey: ["conversations"],
                queryFn: function (e) {
                  var n = e.pageParam;
                  return z.ZP.getConversations(n || 0, 20, d);
                },
                getNextPageParam: function (e) {
                  var n = e.offset + e.limit;
                  return n < e.total ? n : void 0;
                },
                enabled: s,
              })).data),
              (w = h.fetchNextPage),
              (j = h.hasNextPage),
              (k = h.refetch),
              (D = h.isInitialLoading),
              (A = h.isError),
              (0, c.useMemo)(
                function () {
                  return {
                    conversations:
                      null == C
                        ? void 0
                        : C.pages.reduce(function (e, n) {
                            if (n) {
                              var t = n.items;
                              e.push.apply(e, (0, K.Z)(void 0 === t ? [] : t));
                            }
                            return e;
                          }, []),
                    hasNextPage: j,
                    fetchNextPage: w,
                    refetch: function () {
                      return s && k();
                    },
                    isLoading: D,
                    isError: s && A,
                  };
                },
                [null == C ? void 0 : C.pages, s, w, j, A, D, k]
              )),
            eQ = eY.conversations,
            eX = eY.hasNextPage,
            e0 = eY.fetchNextPage,
            e1 = eY.refetch,
            e2 = eY.isLoading,
            e3 = eY.isError,
            e4 = (0, c.useState)(!1),
            e6 = e4[0],
            e5 = e4[1],
            e8 =
              ((H = (V = {
                exempt: !1,
                onRestrictedTermFound: (0, c.useCallback)(
                  function (e) {
                    e5(!0),
                      eS(p.s6.promptUsedRestrictedWords, {
                        threadId: ez.current,
                        content: e,
                      });
                  },
                  [eS]
                ),
              }).exempt),
              (Y = V.onRestrictedTermFound),
              (X = (Q = (0, c.useState)(!1))[0]),
              (ee = Q[1]),
              {
                hasRestrictedTerms: X,
                checkRestrictedTerms: (0, c.useCallback)(
                  function (e) {
                    var n;
                    return (r5.some(function (t) {
                      var r = t.exec(e);
                      return r && (n = r[0]), r;
                    }),
                    !H && n)
                      ? (ee(!0), null == Y || Y(n), !0)
                      : (ee(!1), !1);
                  },
                  [H, Y]
                ),
              }),
            e7 = e8.hasRestrictedTerms,
            e9 = e8.checkRestrictedTerms,
            ne = (0, c.useState)(!0),
            nn = ne[0],
            nt = ne[1],
            nr = (0, c.useState)(!1),
            na = nr[0],
            no = nr[1],
            ni = (0, c.useState)(!1),
            ns = ni[0],
            nl = ni[1],
            nu = (0, c.useState)(!1),
            nc = nu[0],
            nd = nu[1],
            nm = rX().availableModels,
            nf = (0, rI.p0)(),
            nh = (0, y.ZP)(nm, ek.lastModelUsed, ez.current),
            ng = nh.temperature,
            np = nh.modelBackend,
            nv = nh.onChangeModelSetting,
            nx = (0, c.useMemo)(
              function () {
                return nm.find(function (e) {
                  return e.id === np;
                });
              },
              [nm, np]
            ),
            nb = (0, c.useRef)(new J.Cv(ek.thread)),
            ny = (0, c.useState)(ek.currentLeafId),
            nj = ny[0],
            nk = ny[1],
            nZ = (0, c.useState)(!1),
            nN = nZ[0],
            nI = nZ[1],
            nM = (0, c.useState)(null),
            nS = nM[0],
            nP = nM[1],
            nT = (0, c.useState)({}),
            nR = nT[0],
            nF = nT[1],
            n_ = (0, c.useState)(new Set()),
            nD = n_[0],
            nq = n_[1],
            nA = (0, c.useCallback)(function (e) {
              nF(function (n) {
                return n[e], (0, S.Z)(n, [e].map(P.Z));
              });
            }, []),
            nL = (0, c.useCallback)(
              function () {
                e1(), nB(""), nI(!1), eS(p.s6.newThread);
              },
              [eS, e1]
            ),
            nE = (0, c.useState)(""),
            nU = nE[0],
            nB = nE[1],
            nO = (0, c.useState)(""),
            nG = nO[0],
            nV = nO[1],
            n$ = nG || nU || ek.title,
            nH = (0, c.useCallback)(
              function (e) {
                z.ZP.generateTitle(ez.current, e, np)
                  .then(function (e) {
                    var n = e.title;
                    nB(n),
                      eS(p.s6.renameThread, {
                        threadId: ez.current,
                        content: n,
                        model: np,
                      });
                  })
                  .catch(function (e) {
                    console.error(e);
                  });
              },
              [eS, np]
            ),
            nW =
              ((en = ez),
              (el =
                eN.has("tools3") &&
                (null == nx
                  ? void 0
                  : null === (n = nx.enabledTools) || void 0 === n
                  ? void 0
                  : n.includes("tools3"))
                  ? nf.map(function (e) {
                      return e.id;
                    })
                  : void 0),
              (eu = (0, x.hz)()),
              (ec = (0, c.useId)()),
              (ed = (0, g.WS)()),
              (em = (0, y.CS)(function (e) {
                return null == e ? void 0 : e.setCapTimeout;
              })),
              (ef = (0, y.CS)(function (e) {
                return null == e ? void 0 : e.clearCapTimeout;
              })),
              (eh = (0, c.useRef)(0)),
              (eg = (0, c.useRef)({})),
              (ep = (0, c.useRef)()),
              (0, c.useEffect)(
                function () {
                  function e() {
                    return (e = (0, Z.Z)(function () {
                      return (0, T.__generator)(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return [4, t.e(554).then(t.bind(t, 76554))];
                          case 1:
                            return (ep.current = e.sent()), [2];
                        }
                      });
                    })).apply(this, arguments);
                  }
                  eu.has("tools3_dev") &&
                    (function () {
                      e.apply(this, arguments);
                    })();
                },
                [eu]
              ),
              (ev = (0, c.useCallback)(
                function (e, n, t, r) {
                  var a,
                    o = r.eventSource,
                    i = function () {
                      setTimeout(function () {
                        nA(t),
                          nq(function (e) {
                            var n = new Set(e);
                            return n.delete(t), n;
                          }),
                          delete eg.current[t];
                      }, 0);
                    },
                    s = nb.current,
                    l = t,
                    u = s.getParentId(l),
                    c = "CompletionUpdated:".concat(t),
                    d = "CompletionUpdated:".concat(u),
                    m = n === O.Os.Continue,
                    f = !0,
                    h = !1,
                    g = s.getMessage(l),
                    v = s.getIsBlockedFromNode(u),
                    x = !1,
                    b = !1,
                    C = r3()(
                      function () {
                        v ||
                          x ||
                          (s.updateNodeMessage(l, g),
                          L().publish(c, { nodeId: l }));
                      },
                      50,
                      { leading: !0, maxWait: 50 }
                    );
                  function w(e, n, t) {
                    return j.apply(this, arguments);
                  }
                  function j() {
                    return (j = (0, Z.Z)(function (e, n, t) {
                      var r,
                        a,
                        o,
                        i,
                        l,
                        u = arguments;
                      return (0, T.__generator)(this, function (m) {
                        switch (m.label) {
                          case 0:
                            (r = u.length > 3 && void 0 !== u[3] && u[3]),
                              (m.label = 1);
                          case 1:
                            return (
                              m.trys.push([1, 3, , 4]),
                              [
                                4,
                                (0, B._I)(t, !1, en.current, s.getMessageId(n)),
                              ]
                            );
                          case 2:
                            return (
                              (o = (a = m.sent()).isBlocked),
                              (i = a.isFlagged),
                              (o || i) && (b = !0),
                              o
                                ? ((x = !0),
                                  r || (v = !0),
                                  s.updateNode(n, {
                                    message: {
                                      content: { parts: { $set: [""] } },
                                    },
                                    metadata: {
                                      $set: (0, M.Z)((0, I.Z)({}, B.sK), {
                                        completionSampleFinishTime: Date.now(),
                                      }),
                                    },
                                  }),
                                  L().publish(r ? c : d, { nodeId: n }),
                                  ed(
                                    r
                                      ? p.s6.completionBlockedByModeration
                                      : p.s6.promptBlockedByModeration,
                                    { threadId: e, id: n }
                                  ))
                                : i
                                ? (s.updateNode(n, {
                                    metadata: { $set: B.Mf },
                                  }),
                                  L().publish(r ? c : d, { nodeId: n }),
                                  ed(
                                    r
                                      ? p.s6.completionFlaggedByModeration
                                      : p.s6.promptFlaggedByModeration,
                                    { threadId: e, id: n }
                                  ))
                                : r &&
                                  v &&
                                  (s.updateNodeMessage(n, g),
                                  L().publish(c, { nodeId: n })),
                              [3, 4]
                            );
                          case 3:
                            return (
                              (l = m.sent()),
                              (x = !0),
                              s.updateNode(n, {
                                metadata: {
                                  $set: {
                                    err: "An error occured",
                                    errType: "danger",
                                    completionSampleFinishTime: Date.now(),
                                  },
                                },
                              }),
                              ed(p.s6.moderationError, {
                                threadId: e,
                                content: JSON.stringify(l || ""),
                              }),
                              L().publish(r ? c : d, { nodeId: n }),
                              L().publish("UnrecoverableError"),
                              [3, 4]
                            );
                          case 4:
                            return [2];
                        }
                      });
                    })).apply(this, arguments);
                  }
                  return (
                    (a = (0, Z.Z)(function (r) {
                      var a,
                        d,
                        j,
                        k,
                        Z,
                        N,
                        S,
                        P,
                        R,
                        F,
                        _,
                        D,
                        q,
                        A,
                        E,
                        U,
                        B,
                        z,
                        G;
                      return (0, T.__generator)(this, function (T) {
                        switch (T.label) {
                          case 0:
                            if (
                              ((a = r.err),
                              (d = r.finish_reason),
                              (j = r.message),
                              (k = r.threadId),
                              (a || !j) && !d)
                            )
                              return (
                                a && console.error(a),
                                (Z =
                                  (null == a ? void 0 : a.message) ||
                                  "Something went wrong"),
                                s.updateNode(l, {
                                  message: { $set: g },
                                  metadata: {
                                    $set: {
                                      err: Z,
                                      errType: "danger",
                                      errCode: ((0, r4.T)(a) && a.code) || "",
                                      completionSampleFinishTime: Date.now(),
                                    },
                                  },
                                }),
                                L().publish(c, { nodeId: l }),
                                i(),
                                (0, r4.T)(a) &&
                                  (null == a ? void 0 : a.code) === y.uU &&
                                  (null == a ? void 0 : a.clearsIn) &&
                                  (em(
                                    new Date(
                                      Date.now() + 1e3 * a.clearsIn
                                    ).toISOString()
                                  ),
                                  setTimeout(function () {
                                    ef();
                                  }, 1e3 * a.clearsIn)),
                                [2]
                              );
                            if (f && s.isFirstCompletion) {
                              if (
                                (null == j
                                  ? void 0
                                  : null === (N = j.author) || void 0 === N
                                  ? void 0
                                  : N.role) === O.uU.System
                              )
                                return s.appendSystemMessageToRoot(j), [2];
                              if (
                                (null == j
                                  ? void 0
                                  : null === (S = j.author) || void 0 === S
                                  ? void 0
                                  : S.role) === O.uU.User
                              )
                                return [2];
                            }
                            if (
                              (f
                                ? ((f = !1),
                                  (h = s.isFirstCompletion),
                                  k && (en.current = k),
                                  s.updateNodeMessage(l, j),
                                  h && nL(),
                                  m ||
                                    w(
                                      en.current,
                                      u,
                                      s.getTextFromLastNTurns(u, 1),
                                      !1
                                    ),
                                  ed(p.s6.generateCompletion, {
                                    id: t,
                                    threadId: k,
                                    completionType: n,
                                    eventSource: o,
                                    model: e,
                                  }),
                                  L().publish("PublishAborter", {
                                    id: t,
                                    aborter: eg.current[t],
                                  }))
                                : j &&
                                  !m &&
                                  j.id !== s.getMessageId(l) &&
                                  (C.flush(),
                                  s.addNode(j.id, j, l, O.Jq.Completion),
                                  nk((l = j.id)),
                                  (c = "CompletionUpdated:".concat(l))),
                              j && (g = j),
                              C(),
                              "stop" !== d ||
                                (v ||
                                  x ||
                                  (C.flush(), !b && h && nH(s.getMessageId(l))),
                                (P = J.Cv.getTextFromMessage(g)),
                                (R =
                                  s.getTextFromLastNTurns(u, 2) + "\n\n" + P),
                                w(en.current, l, R, !0),
                                x || L().publish(c, { nodeId: l }),
                                s.updateNode(l, {
                                  metadata: {
                                    $set: (0, M.Z)(
                                      (0, I.Z)({}, s.getMetadata(l)),
                                      { completionSampleFinishTime: Date.now() }
                                    ),
                                  },
                                }),
                                i(),
                                !eu.has("tools3_dev")))
                            )
                              return [3, 3];
                            if ((F = ep.current)) return [3, 1];
                            return (
                              console.error("Error loading tools3"), [3, 3]
                            );
                          case 1:
                            if (!(_ = F.getLocalhostPluginHttpApiCallData(g)))
                              return [3, 3];
                            return [4, F.makeLocalhostPluginHttpApiCall(_)];
                          case 2:
                            (D = T.sent()),
                              (q = l),
                              (A = !0),
                              (E = !1),
                              (U = void 0);
                            try {
                              for (
                                B = D[Symbol.iterator]();
                                !(A = (z = B.next()).done);
                                A = !0
                              )
                                (G = z.value),
                                  s.addNode(G.id, G, q, O.Jq.Completion, {
                                    completionSampleFinishTime: Date.now(),
                                  }),
                                  (q = G.id);
                            } catch (V) {
                              (E = !0), (U = V);
                            } finally {
                              try {
                                A || null == B.return || B.return();
                              } finally {
                                if (E) throw U;
                              }
                            }
                            nk(q), eb(e, O.Os.Next, q, {}), (T.label = 3);
                          case 3:
                            return [2];
                        }
                      });
                    })),
                    function (e) {
                      return a.apply(this, arguments);
                    }
                  );
                },
                [ed, nL, nH, nA, nq, nk, en, nb]
              )),
              (eb = (0, c.useCallback)(
                ((ex = (0, Z.Z)(function (e, n, t, r) {
                  var a,
                    o,
                    i,
                    s,
                    l,
                    u,
                    c,
                    d,
                    m,
                    f = arguments;
                  return (0, T.__generator)(this, function (h) {
                    switch (h.label) {
                      case 0:
                        return (
                          (a = !(f.length > 4) || void 0 === f[4] || f[4]),
                          (o = nb.current),
                          (i = "request-".concat(ec, "-").concat(eh.current++)),
                          nq(function (e) {
                            var n = new Set(e);
                            return n.add(i), n;
                          }),
                          o.addNode(i, "", t, O.Jq.Completion),
                          a && nk(i),
                          (l = []),
                          (u = o.getNode(t)),
                          n === O.Os.Next || n === O.Os.Variant
                            ? ((s =
                                (null ===
                                  (c = (d = o.getNode(u.parentId)).message) ||
                                void 0 === c
                                  ? void 0
                                  : c.id) || d.id),
                              l.push(u.message))
                            : (s = u.message.id),
                          [
                            4,
                            z.ZP.publicApiCompletionStream(
                              {
                                model: e,
                                completionType: n,
                                threadId: en.current || void 0,
                                parentMessageId: s,
                                messages: l,
                                enabledPluginIds: el,
                              },
                              ev(e, n, i, r)
                            ),
                          ]
                        );
                      case 1:
                        return (m = h.sent()), (eg.current[i] = m), [2];
                    }
                  });
                })),
                function (e, n, t, r) {
                  return ex.apply(this, arguments);
                }),
                [nb, ec, nq, nk, en, el, ev]
              ))),
            nJ = (0, c.useCallback)(
              function () {
                eI.replace({ pathname: eI.basePath, query: {} }, void 0, {
                  shallow: !0,
                });
              },
              [eI]
            ),
            nK = (0, c.useCallback)(
              function () {
                if (nj) {
                  var e = nb.current.getBranchFromLeaf(nj);
                  nF(function (n) {
                    var t = (0, I.Z)({}, n);
                    return (
                      e.forEach(function (e) {
                        e.id in t && (t[e.id].abort(), delete t[e.id]);
                      }),
                      t
                    );
                  }),
                    nq(function (n) {
                      var t = new Set(n);
                      return (
                        e.forEach(function (e) {
                          t.delete(e.id);
                        }),
                        t
                      );
                    });
                }
              },
              [nj]
            ),
            nY = (0, c.useCallback)(
              ((ey = (0, Z.Z)(function (e, n, t, r) {
                var a,
                  o,
                  i = arguments;
                return (0, T.__generator)(this, function (s) {
                  return (
                    (a = !(i.length > 4) || void 0 === i[4] || i[4]),
                    (o = i.length > 5 ? i[5] : void 0),
                    r && nK(),
                    (e !== O.Os.Continue &&
                      e9(nb.current.getTextFromNode(n))) ||
                      (eR(ez.current),
                      nW(
                        o
                          ? (0, y.xt)(eN.has("priority_driven_models_list"), nm)
                          : np,
                        e,
                        n,
                        t,
                        a
                      )),
                    [2]
                  );
                });
              })),
              function (e, n, t, r) {
                return ey.apply(this, arguments);
              }),
              [e9, eR, nW, eN, nm, np, nK]
            ),
            nQ = (0, c.useCallback)(function (e, n, t, r) {
              nb.current.addNode(e, r, n, O.Jq.Prompt);
            }, []),
            nX = (0, c.useCallback)(
              function (e, n, t) {
                var r = n.value;
                nQ(e, nj, O.Jq.Prompt, r), nY(O.Os.Next, e, t, !0);
              },
              [nj, nQ, nY]
            ),
            n0 = (0, c.useMemo)(
              function () {
                var e,
                  n,
                  t = nb.current.getNode(nj),
                  r = t.type === O.Jq.Prompt,
                  a =
                    (null === (e = t.metadata) || void 0 === e
                      ? void 0
                      : e.err) &&
                    (null === (n = t.metadata) || void 0 === n
                      ? void 0
                      : n.errCode) !== B.Dd;
                return Boolean(r || a) && 0 === nD.size;
              },
              [nD.size, nj]
            ),
            n1 = (0, y.CS)(function (e) {
              return e.isoDate;
            }),
            n2 = (0, c.useMemo)(
              function () {
                var e,
                  n =
                    (null === (e = nb.current.getNode(nj).metadata) ||
                    void 0 === e
                      ? void 0
                      : e.errCode) === y.uU;
                return n0 && n && n1;
              },
              [nj, n0, n1]
            ),
            n3 = (0, c.useCallback)(
              function (e, n) {
                var t,
                  r =
                    !(arguments.length > 2) ||
                    void 0 === arguments[2] ||
                    arguments[2],
                  a = arguments.length > 3 ? arguments[3] : void 0;
                (t = n0
                  ? nb.current.getLastValidNode(e).id
                  : nb.current.getParentPromptNode(e).id),
                  nY(O.Os.Variant, t, n, !1, r, a);
              },
              [nY, n0]
            ),
            n4 = (0, c.useCallback)(
              function (e) {
                nY(O.Os.Continue, e, { eventSource: "mouse" }, !1);
              },
              [nY]
            ),
            n6 = (0, c.useCallback)(
              function (e) {
                var n = nj,
                  t = !0,
                  r = !1,
                  a = void 0;
                try {
                  for (
                    var o, i = e[Symbol.iterator]();
                    !(t = (o = i.next()).done);
                    t = !0
                  ) {
                    var s = o.value;
                    nb.current.addNode(
                      s.message.id,
                      s.message,
                      n,
                      O.Jq.Completion
                    ),
                      s.conversation_id && (ez.current = s.conversation_id),
                      (n = s.message.id);
                  }
                } catch (l) {
                  (r = !0), (a = l);
                } finally {
                  try {
                    t || null == i.return || i.return();
                  } finally {
                    if (r) throw a;
                  }
                }
                nk(n), nY(O.Os.Next, n, {}, !0);
              },
              [nY, nj, nk, ez]
            ),
            n8 = !!(
              eN.has("tools2") &&
              (null == nx
                ? void 0
                : null === (r = nx.enabledTools) || void 0 === r
                ? void 0
                : r.includes("tools2"))
            ),
            n7 = (0, c.useCallback)(
              ((eC = (0, Z.Z)(function (e) {
                var n;
                return (0, T.__generator)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      if (!n8) return [3, 3];
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        (n = e.currentTarget.href),
                        [4, t.e(949).then(t.bind(t, 93949))]
                      );
                    case 1:
                      return [
                        4,
                        r.sent().handleSandboxLinkClick(eN, nx, ez)(n),
                      ];
                    case 2:
                      r.sent(), (r.label = 3);
                    case 3:
                      return [2];
                  }
                });
              })),
              function (e) {
                return eC.apply(this, arguments);
              }),
              [eN, nx, ez, n8]
            ),
            n9 = (0, c.useCallback)(
              function (e) {
                nk(nb.current.getLeafFromNode(e).id), eS(p.s6.changeNode);
              },
              [eS, nk]
            ),
            tr = (0, c.useCallback)(function (e, n) {
              nb.current.updateNodeText(e, n);
            }, []),
            ta = (0, c.useCallback)(
              function (e, n, t) {
                eS(p.s6.thumbRating, {
                  id: n,
                  threadId: ez.current,
                  rating: t,
                  model: np,
                }),
                  ez.current &&
                    z.ZP.submitMessageFeedback({
                      message_id: n,
                      conversation_id: ez.current,
                      rating: t,
                    }),
                  eL(e),
                  eB(n),
                  eD(t);
                var r = nb.current.getMetadata(e);
                if (
                  (nb.current.updateNode(e, {
                    metadata: {
                      $set: (0, M.Z)((0, I.Z)({}, r), { rating: t }),
                    },
                  }),
                  "thumbsDown" === t && eT)
                ) {
                  var a,
                    o =
                      null === (a = nb.current) || void 0 === a
                        ? void 0
                        : a.getConversationTurns(e || "root");
                  nC(o[o.length - 1]) && n3(e, { eventSource: "mouse" }, !1);
                }
              },
              [eS, np, n3, eT]
            ),
            to = (0, c.useCallback)(
              function (e, n) {
                e_ &&
                  eA &&
                  (e || n.length > 0) &&
                  (eS(p.s6.reportResult, {
                    id: eU,
                    threadId: ez.current,
                    content: e,
                    model: np,
                    rating: e_,
                    tags: n,
                  }),
                  ez.current &&
                    eU &&
                    z.ZP.submitMessageFeedback({
                      message_id: eU,
                      conversation_id: ez.current,
                      rating: e_,
                      text: e,
                      tags: n,
                    }));
              },
              [eS, np, eA, eU, e_]
            ),
            ti = (0, c.useCallback)(
              ((ew = (0, Z.Z)(function (e, n, t, r, a, o, i, s, l, u, c) {
                return (0, T.__generator)(this, function (d) {
                  switch (d.label) {
                    case 0:
                      return [
                        4,
                        z.ZP.submitMessageComparisonFeedback({
                          feedback_version: "comparison_feedback_modal:a:1.0",
                          original_message_id: e,
                          new_message_id: n,
                          rating: t,
                          conversation_id: ez.current,
                          text: u,
                          tags: c.map(function (e) {
                            return e.replace("feedback-", "");
                          }),
                          completion_comparison_rating: r,
                          new_completion_placement: a,
                          feedback_start_time: o,
                          compare_step_start_time: i,
                          new_completion_load_start_time: s,
                          new_completion_load_end_time: l,
                          frontend_submission_time: Date.now(),
                        }),
                      ];
                    case 1:
                      return d.sent(), [2];
                  }
                });
              })),
              function (e, n, t, r, a, o, i, s, l, u, c) {
                return ew.apply(this, arguments);
              }),
              []
            ),
            ts = (0, c.useCallback)(
              ((ej = (0, Z.Z)(function (e, n, t, r, a, o, i) {
                return (0, T.__generator)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return [
                        4,
                        z.ZP.submitMessageComparisonFeedback({
                          feedback_version: "inline_regen_feedback:a:1.0",
                          original_message_id: e,
                          new_message_id: n,
                          rating: "none",
                          conversation_id: ez.current,
                          text: "",
                          tags: [],
                          completion_comparison_rating: t,
                          new_completion_placement: "not-applicable",
                          feedback_start_time: r,
                          compare_step_start_time: a,
                          new_completion_load_start_time: o,
                          new_completion_load_end_time: i,
                          frontend_submission_time: Date.now(),
                        }),
                      ];
                    case 1:
                      return s.sent(), [2];
                  }
                });
              })),
              function (e, n, t, r, a, o, i) {
                return ej.apply(this, arguments);
              }),
              []
            ),
            tl = (0, c.useCallback)(function (e) {
              nb.current.deleteNode(e);
            }, []),
            tu = (0, c.useCallback)(
              function (e) {
                switch (null == e ? void 0 : e.state) {
                  case "pending":
                    nQ("artifact", "root", O.Jq.Prompt, e.url),
                      nQ(
                        "artifact-summary",
                        "artifact",
                        O.Jq.Completion,
                        "loading..."
                      ),
                      nk("artifact"),
                      nP(e);
                    break;
                  case "success":
                    tr("artifact-summary", e.contents),
                      nk("artifact-summary"),
                      nP(e);
                    break;
                  default:
                    nP(e);
                }
              },
              [nQ, tr, nk]
            ),
            tc = (0, c.useCallback)(function () {
              nd(function (e) {
                return "debug" !== e && "debug";
              });
            }, []),
            td = (0, c.useCallback)(
              function () {
                eS(p.s6.clickSidebarAccountPortalMenuItem), nl(!0);
              },
              [eS, nl]
            ),
            tm = (0, c.useCallback)(
              function () {
                nl(!1);
              },
              [nl]
            ),
            tf = rq(function (e) {
              return {
                setShowAccountPaymentModal: e.setShowAccountPaymentModal,
                showAccountPaymentModal: e.showAccountPaymentModal,
              };
            }),
            th = tf.showAccountPaymentModal,
            tg = tf.setShowAccountPaymentModal,
            tp = (0, c.useCallback)(
              function () {
                tg(!0, function () {
                  eS(p.s6.clickSidebarAccountPaymentMenuItem);
                });
              },
              [eS, tg]
            ),
            tv = (0, c.useCallback)(
              function () {
                tg(!1);
              },
              [tg]
            ),
            tb = (0, c.useCallback)(function () {
              nd(function (e) {
                return "navigation" !== e && "navigation";
              });
            }, []),
            ty = (0, c.useCallback)(
              function (e, n) {
                if (nb.current.isFirstCompletion) {
                  var t,
                    r = nb.current.getParent(n);
                  (null === (t = r.metadata) || void 0 === t
                    ? void 0
                    : t.errCode) !== B.Dd &&
                    setTimeout(function () {
                      nH(r.message.id);
                    }, 500);
                }
                nF(function (e) {
                  var t = e[n],
                    r = (0, S.Z)(e, [n].map(P.Z));
                  return null == t || t.abort(), r;
                }),
                  nq(function (e) {
                    var t = new Set(e);
                    return t.delete(n), t;
                  });
              },
              [nH]
            ),
            tC = (0, c.useCallback)(function (e, n) {
              var t = n.id,
                r = n.aborter;
              r &&
                nF(function (e) {
                  return (0, M.Z)((0, I.Z)({}, e), (0, N.Z)({}, t, r));
                });
            }, []),
            tw = (0, c.useCallback)(
              function () {
                nF(function (e) {
                  return (
                    Object.values(e).forEach(function (e) {
                      return e.abort();
                    }),
                    {}
                  );
                }),
                  nq(new Set()),
                  nk("root"),
                  nP(null),
                  (nb.current = new J.Cv()),
                  (ez.current = ""),
                  nI(!0),
                  e1(),
                  np === y.f_ && eI.replace("/chat", void 0, { shallow: !0 });
              },
              [np, e1, eI]
            ),
            tZ = (0, c.useCallback)(
              function () {
                z.ZP.deleteConversations().then(function () {
                  e1();
                }),
                  eI.asPath !== at ? eI.replace({ pathname: at }) : tw();
              },
              [tw, e1, eI]
            ),
            tN = (0, c.useCallback)(function () {
              no(!0);
            }, []);
          (0, c.useEffect)(
            function () {
              var e = L().subscribe("AbortCompletion", ty),
                n = L().subscribe("PublishAborter", tC),
                t = L().subscribe("UnrecoverableError", tN);
              return function () {
                L().unsubscribe(e), L().unsubscribe(n), L().unsubscribe(t);
              };
            },
            [ty, tC, tN]
          );
          var tI = (0, c.useMemo)(
              function () {
                return nb.current.getConversationTurns(nj || "root");
              },
              [nj]
            ),
            tM = (0, c.useMemo)(
              function () {
                return 0 === tI.length
                  ? nj
                  : J.Cv.getRequestIdFromConversationTurn(tI[tI.length - 1]);
              },
              [tI, nj]
            ),
            tS = (0, c.useState)(""),
            tP = tS[0],
            tT = tS[1],
            tF = (0, c.useCallback)(function () {
              nt(!0), v.m.setItem("oai/librarian/hasSeenWarning", "true");
            }, []),
            t_ = (0, c.useCallback)(function () {
              e5(!1);
            }, []),
            tD = (0, c.useMemo)(
              function () {
                return eN.has("debug") ? new Set([y.G3.Model]) : new Set();
              },
              [eN]
            ),
            tq = (0, c.useMemo)(
              function () {
                return (
                  !!eN.has("can_continue") &&
                  !nR[nj] &&
                  nb.current.isMessageIncomplete(nj)
                );
              },
              [nR, nj, eN]
            ),
            tA = void 0 !== eH && eH,
            tL = (0, rv().getHasSeenOnboardingDate)(),
            tE = tL && new Date("2023-01-11") > tL && !localStorage.getItem(an);
          (0, c.useEffect)(
            function () {
              tE &&
                (rM.m.success(
                  "Your previously unavailable conversation history has been restored! Your previous conversations can now be viewed and continued as normal. We apologize for any inconvenience caused by the recent outage. Thank you for your patience and understanding.",
                  { hasCloseButton: !0, duration: 0 }
                ),
                localStorage.setItem(an, "true"));
            },
            [tE]
          );
          var tU = (0, c.useMemo)(
              function () {
                return (0, i.jsx)(nz, {
                  items: eQ || [],
                  activeId: nN ? "" : ez.current,
                  hasNextPage: Boolean(eX),
                  onNextPage: e0,
                  onNewThread: tw,
                  onRefetchHistory: e1,
                  onUpdateUserModifiedTitle: nV,
                  userModifiedTitle: nG,
                  newChatName: nU,
                  isLoading: e2,
                  isError: e3,
                });
              },
              [eQ, nN, eX, e0, tw, e1, nG, nU, e2, e3]
            ),
            tB = tI.length < 2,
            tO = tR();
          return (0, i.jsxs)(aa, {
            children: [
              (0, i.jsx)(q(), {
                children: (0, i.jsx)("title", { children: n$ }),
              }),
              !nn &&
                (0, i.jsx)(
                  m.Z,
                  {
                    isOpen: !0,
                    onModalClose: tF,
                    icon: F.Z,
                    title:
                      "Do not share sensitive materials with this application",
                    primaryButton: (0, i.jsx)(m.m, {
                      onClick: tF,
                      title: "Acknowledge",
                    }),
                    type: "danger",
                  },
                  "OnboardingModal"
                ),
              e7 &&
                e6 &&
                (0, i.jsx)(
                  m.Z,
                  {
                    isOpen: !0,
                    onModalClose: t_,
                    icon: E.U0j,
                    title: "This prompt may violate our content policy.",
                    primaryButton: (0, i.jsx)(m.m, {
                      onClick: t_,
                      title: "Acknowledge",
                    }),
                    type: "danger",
                  },
                  "RestrictedTerms"
                ),
              Boolean(e_) &&
                (0, i.jsx)(nw, {
                  treeRef: nb,
                  ratingModalNodeId: eA,
                  ratingModalOpen: e_,
                  setRatingModalOpen: eD,
                  handleSubmitFeedback: to,
                  setCurrentLeafId: nk,
                  onHandleChangeFeedbackComparisonRating: ti,
                  modelBackend: np,
                  feedbackTextareaRef: eO,
                  threadIdRef: ez,
                  activeRequests: nD,
                  onChangeItemInView: n9,
                  onRequestMoreCompletions: n3,
                  onUpdateNode: tr,
                  onChangeRating: ta,
                  onDeleteNode: tl,
                  onRequestCompletion: nY,
                  onSandboxLinkClick: n7,
                }),
              (0, i.jsxs)("div", {
                className: "flex h-full flex-1 flex-col md:pl-[260px]",
                children: [
                  eM &&
                    (0, i.jsx)(tt, {
                      onNewThread: tw,
                      onSidebarOpen: tb,
                      title: ek.title,
                      newChatName: nU,
                    }),
                  (0, i.jsxs)(ao, {
                    className: "flex-1 ",
                    children: [
                      (0, i.jsx)(ai, {
                        children: (0, i.jsx)(ro, {
                          children: (0, i.jsx)(t7, {
                            isLoading: eZ || (e$ && !eV),
                            onChangeItemInView: n9,
                            onRequestMoreCompletions: n3,
                            onUpdateNode: tr,
                            onChangeRating: ta,
                            onDeleteNode: tl,
                            onRequestCompletion: nY,
                            onChangeCurrentPrompt: tT,
                            onSandboxLinkClick: n7,
                            onHandleChangeVariantFeedbackInlineComparisonRating:
                              ts,
                            threadId: ez.current,
                            treeRef: nb,
                            conversationTurns: tI,
                            activeRequests: nD,
                            isProcessingArtifact:
                              (null == nS ? void 0 : nS.state) === "pending",
                            onChangeModelSetting: nv,
                            availableModels: nm,
                            currentThreadModel: ek.lastModelUsed,
                            canShowThreadSettings:
                              eN.has("model_switcher") && nm.length > 1,
                          }),
                        }),
                      }),
                      (0, i.jsxs)(as, {
                        children: [
                          eN.has("model_preview") &&
                            tB &&
                            np === y.f_ &&
                            (0, i.jsx)("div", {
                              className:
                                "stretch mx-2 mb-2 text-center text-xs text-gray-600 dark:text-gray-200 md:mx-4 md:text-sm lg:m-auto lg:max-w-3xl",
                              children: tO.textareaDisclaimer,
                            }),
                          !n2 &&
                            (0, i.jsx)(tx, {
                              currentLeafId: nj,
                              currentRequestId: tM,
                              threadId: ez.current,
                              currentPrompt: tP,
                              onChangeCurrentPrompt: tT,
                              onRequestMoreCompletions: n3,
                              onCreateNewCompletion: nX,
                              onAbortCompletion: ty,
                              onContinueGenerating: n4,
                              onFileUpload: n6,
                              modelBackend: np,
                              canUpload: n8,
                              isCompletionInProgress: nD.has(tM),
                              onUpdateArtifactStatus: tu,
                              artifact: nS,
                              className: (0, _.Z)(
                                "stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-3xl"
                              ),
                              shouldRetry: n0,
                              canContinue: tq,
                              disabled: !nm.length,
                              canPause: Boolean(nR[tM]),
                            }),
                          !1 &&
                            (0, i.jsxs)("div", {
                              className:
                                "px-3 pt-2 pb-3 text-center text-xs text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6",
                              children: [
                                (0, i.jsx)("a", {
                                  href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
                                  target: "_blank",
                                  rel: "noreferrer",
                                  className: "underline",
                                  children: "ChatGPT Mar 14 Version",
                                }),
                                ". Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.",
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              eM &&
                (0, i.jsx)(tn, {
                  onSidebarOpen: tb,
                  sidebarOpen: "navigation" === nc,
                  onClickAccountPayment: tp,
                  showAccountPaymentMenuItem: !tA && eW,
                  onClickCustomerPortal: td,
                  showCustomerPortalMenuItem: tA,
                  onDeleteHistory: tZ,
                  showDeleteHistory: Boolean(null == eQ ? void 0 : eQ.length),
                  onNewThread: tw,
                  onOpenDebugPanel: tc,
                  children: tU,
                }),
              !eM &&
                (0, i.jsx)(te, {
                  onClickAccountPayment: tp,
                  showAccountPaymentMenuItem: !tA && eW,
                  onClickCustomerPortal: td,
                  showCustomerPortalMenuItem: tA,
                  onDeleteHistory: tZ,
                  showDeleteHistory: Boolean(null == eQ ? void 0 : eQ.length),
                  onNewThread: tw,
                  onOpenDebugPanel: tc,
                  settings:
                    tD.size > 0 &&
                    (0, i.jsx)(tj.ZP, {
                      temperature: ng,
                      onRestoreDefaults: nJ,
                      onChangeModelSetting: nv,
                      position: "top-right",
                      modelSettings: tD,
                      features: eN,
                      children: (0, i.jsxs)(R.J.Button, {
                        as: n5,
                        children: [
                          (0, i.jsx)(b.ZP, { icon: E.nbt }),
                          "Settings",
                        ],
                      }),
                    }),
                  children: tU,
                }),
              (0, i.jsx)(tk, {
                icon: E.cDN,
                title: "Debug",
                sidebarOpen: "debug" === nc,
                onSidebarOpen: tb,
                children: (0, i.jsx)(r$, { treeRef: nb, currentLeafId: nj }),
              }),
              eW && (0, i.jsx)(rF.Z, { isOpen: th, onClose: tv }),
              tA && (0, i.jsx)(rR, { isOpen: ns, onClose: tm }),
              na &&
                (0, i.jsx)(
                  m.Z,
                  {
                    onModalClose: l(),
                    isOpen: !0,
                    icon: F.Z,
                    title: "Something went wrong",
                    description:
                      "We're sorry, but something went wrong. Please try again later.",
                    primaryButton: (0, i.jsx)(m.m, {
                      onClick: function () {
                        tw(), no(!1);
                      },
                      title: "Reset thread",
                    }),
                    type: "danger",
                  },
                  "UnrecoverableErrorModal"
                ),
            ],
          });
        },
        aa = d.Z.div(r8()),
        ao = d.Z.main(r7()),
        ai = d.Z.div(r9()),
        as = d.Z.div(ae()),
        al = t(49690);
      function au() {
        var e = (0, o.Z)([
          "fixed flex justify-center w-full top-2 px-2 z-10 pointer-events-none",
        ]);
        return (
          (au = function () {
            return e;
          }),
          e
        );
      }
      var ac = !0;
      function ad(e) {
        var n,
          t,
          r,
          a,
          o,
          s,
          d,
          f,
          h,
          v,
          b,
          C,
          w,
          k,
          Z = e.user,
          N = e.isUserInCanPayGroup,
          P = e.serviceStatus,
          T = e.serviceAnnouncement,
          R = e.userCountry,
          F = (0, c.useState)(!1),
          _ = F[0],
          D = F[1],
          q = (0, u.useRouter)(),
          A = rv().getHasSeenOnboardingDate,
          L = (0, x.nR)(),
          E =
            ((a = (r = {
              threadId:
                (null === (n = q.query.chatId) || void 0 === n
                  ? void 0
                  : n[0]) || "",
            }).threadId),
            (o = (0, u.useRouter)()),
            (s = (0, U.kP)().session),
            (d = rX().availableModels),
            (f = (0, rI.p0)()),
            (h = (0, y.ZP)(d, null, a).modelBackend),
            (v = (0, c.useMemo)(
              function () {
                return d.find(function (e) {
                  return e.id === h;
                });
              },
              [d, h]
            )),
            (C = (b = (0, tP.a)(
              ["conversation", a],
              function () {
                return z.ZP.getConversation(
                  a,
                  null == s ? void 0 : s.accessToken
                );
              },
              {
                enabled: Boolean(a && (null == s ? void 0 : s.accessToken)),
                onError: function () {
                  o.replace("/chat"),
                    rM.m.danger("Unable to load conversation ".concat(a));
                },
              }
            )).data),
            (w = b.isLoading),
            (k = (0, c.useMemo)(
              function () {
                if (C) {
                  var e,
                    n,
                    t,
                    r,
                    a,
                    i,
                    s,
                    l,
                    u =
                      ((a =
                        null ===
                          (r = Object.values(C.mapping).find(function (e) {
                            return null === e.parent;
                          })) || void 0 === r
                          ? void 0
                          : r.id),
                      (i = new Set()),
                      (s = new Set()),
                      (C.moderation_results || []).forEach(function (e) {
                        e.blocked
                          ? s.add(e.message_id)
                          : e.flagged && i.add(e.message_id);
                      }),
                      {
                        rootId: a,
                        mapping: Object.keys(C.mapping).reduce(function (e, n) {
                          var t,
                            r = C.mapping[n],
                            a = r.parent,
                            o = r.children,
                            l = (0, S.Z)(r, ["parent", "children"]),
                            u =
                              C.mapping[n].message || J.Cv.createRootMessage();
                          return (
                            s.has(u.id)
                              ? (t = B.sK)
                              : i.has(u.id) && (t = B.Mf),
                            (e[n] = (0, I.Z)(
                              (0, M.Z)((0, I.Z)({}, l), {
                                message: u,
                                children: o || [],
                                parentId: a || "",
                                type: J.uV[J.Cv.getRoleFromMessage(u)],
                              }),
                              t && { metadata: t }
                            )),
                            e
                          );
                        }, {}),
                        currentLeafId: C.current_node,
                      });
                  return {
                    thread: u.mapping || J.Cv.createTree(),
                    currentLeafId: u.currentLeafId || u.rootId || "root",
                    threadId:
                      null === (l = o.query.chatId) || void 0 === l
                        ? void 0
                        : l[0],
                    title: C.title || null,
                    lastModelUsed: (function e(n, t) {
                      var r,
                        a,
                        o = n[t];
                      return (
                        null == o
                          ? void 0
                          : null === (r = o.message) || void 0 === r
                          ? void 0
                          : null === (a = r.metadata) || void 0 === a
                          ? void 0
                          : a.model_slug
                      )
                        ? o.message.metadata.model_slug
                        : (null == o ? void 0 : o.parentId)
                        ? e(n, o.parentId)
                        : (console.log("No model found in conversation tree"),
                          null);
                    })(u.mapping, u.currentLeafId),
                    pluginIds: C.plugin_ids || [],
                  };
                }
                return (
                  (n = (
                    null == v
                      ? void 0
                      : null === (e = v.enabledTools) || void 0 === e
                      ? void 0
                      : e.includes("tools3")
                  )
                    ? f.map(function (e) {
                        return e.id;
                      })
                    : []),
                  {
                    thread: J.Cv.createTree(),
                    currentLeafId: "root",
                    threadId: null,
                    title: "New chat",
                    lastModelUsed: null,
                    pluginIds: n || [],
                  }
                );
              },
              [C, v, f, o.query.chatId]
            )),
            (0, c.useMemo)(
              function () {
                return { threadData: k, isLoading: Boolean(a && w) };
              },
              [w, k, a]
            )),
          O = E.threadData,
          G = E.isLoading,
          H = (0, rY.Z)(),
          W = H.accountStatusResponse,
          K = H.isLoading,
          Y = (0, $.g)(function (e) {
            return e.updateFlagValue;
          }),
          Q = R ? V[R] : void 0;
        (0, c.useEffect)(
          function () {
            void 0 !== N && Y("isUserInCanPayGroup", N);
          },
          [Y, N]
        ),
          (0, c.useEffect)(
            function () {
              (null == P ? void 0 : P.type) &&
                void 0 !== L &&
                !L &&
                rM.m.warning(P.message, { hasCloseButton: !0, duration: 5 });
            },
            [L, null == P ? void 0 : P.message, null == P ? void 0 : P.type]
          );
        var X = (0, c.useMemo)(function () {
            return { app: p.VY, origin: "chat" };
          }, []),
          ee = (0, x.mA)(function (e) {
            return {
              accountPlan: e.accountPlan,
              updateAccountPlanWithResponse: e.updateAccountPlanWithResponse,
            };
          }),
          en = ee.accountPlan,
          et = ee.updateAccountPlanWithResponse;
        (0, al.Z)("ChatGPT", Z, X, null == W ? void 0 : W.account_plan, {}, !K),
          (0, c.useEffect)(
            function () {
              if (!K && W) {
                var e;
                (null == en ? void 0 : en.hasPaidSubscription) !==
                  (null === (e = W.account_plan) || void 0 === e
                    ? void 0
                    : e.is_paid_subscription_active) &&
                  W &&
                  et(W);
              }
            },
            [K, et, W, en]
          ),
          (0, c.useEffect)(
            function () {
              D(!A());
            },
            [A]
          );
        var er = (0, c.useMemo)(
            function () {
              return new Set((null == O ? void 0 : O.pluginIds) || []);
            },
            [null == O ? void 0 : O.pluginIds]
          ),
          ea = (0, c.useRef)(!1);
        return (
          (0, c.useEffect)(
            function () {
              if (!K && W) {
                var e,
                  n = (
                    null === (e = W.account_plan) || void 0 === e
                      ? void 0
                      : e.is_paid_subscription_active
                  )
                    ? T.paid
                    : T.public;
                if (
                  (null == n ? void 0 : n.type) &&
                  (null == n ? void 0 : n.message) &&
                  !ea.current
                ) {
                  ea.current = !0;
                  var t = n.message,
                    r = { hasCloseButton: !0, duration: 15 };
                  switch (n.type) {
                    case "danger":
                      rM.m.danger(t, r);
                      break;
                    case "info":
                      rM.m.info(t, r);
                      break;
                    case "warning":
                      rM.m.warning(t, r);
                  }
                }
              }
            },
            [T, K, W]
          ),
          (0, i.jsx)(g.Af.Provider, {
            value: X,
            children: (0, i.jsxs)(tr.A.Provider, {
              value: er,
              children: [
                (0, i.jsx)(m.Z, {
                  isOpen: _,
                  onModalClose: l(),
                  type: "success",
                  title: "",
                  primaryButton: void 0,
                  children: (0, i.jsx)(rx, {
                    onClose: function () {
                      return D(!1);
                    },
                  }),
                }),
                !K &&
                  W &&
                  (0, i.jsx)(j, {
                    userCountry: Q,
                    isUserPaid:
                      null === (t = W.account_plan) || void 0 === t
                        ? void 0
                        : t.is_paid_subscription_active,
                    hasSeenOnboardingDate: A(),
                  }),
                (0, i.jsx)(
                  ar,
                  { initialData: O, isLoading: G },
                  O.threadId || "new"
                ),
              ],
            }),
          })
        );
      }
      d.Z.div(au());
    },
    68619: function (e, n, t) {
      "use strict";
      var r, a, o, i, s, l, u, c, d, m;
      t.d(n, {
        Jq: function () {
          return s;
        },
        Os: function () {
          return o;
        },
        uU: function () {
          return i;
        },
      }),
        ((l = r || (r = {})).Default = "default"),
        (l.Dark = "dark"),
        ((u = a || (a = {})).Retrieval = "retrieval"),
        ((c = o || (o = {})).Next = "next"),
        (c.Variant = "variant"),
        (c.Continue = "continue"),
        ((d = i || (i = {})).Unknown = "unknown"),
        (d.User = "user"),
        (d.Assistant = "assistant"),
        (d.System = "system"),
        (d.Critic = "critic"),
        (d.Tool = "tool"),
        ((m = s || (s = {})).Root = "root"),
        (m.System = "system"),
        (m.Prompt = "prompt"),
        (m.Completion = "completion");
    },
    60363: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var r = t(35250),
        a = t(19841);
      function o(e) {
        var n = e.url,
          t = e.name,
          o = e.size,
          i = e.large;
        return (0, r.jsxs)("div", {
          className: "relative",
          style: { width: o, height: o },
          children: [
            (0, r.jsx)("img", {
              src: n,
              alt: "".concat(t, " logo"),
              className: (0, a.Z)(
                "h-full w-full bg-white",
                i ? "rounded-[5px]" : "rounded-sm"
              ),
            }),
            (0, r.jsx)("div", {
              className: (0, a.Z)(
                "absolute inset-0 ring-1 ring-inset ring-black/10",
                i ? "rounded-[5px]" : "rounded-sm"
              ),
            }),
          ],
        });
      }
    },
    23119: function (e, n, t) {
      "use strict";
      t.d(n, {
        Ph: function () {
          return y;
        },
        Yt: function () {
          return j;
        },
        k$: function () {
          return b;
        },
      });
      var r = t(14806),
        a = t(35250),
        o = t(19841),
        i = t(96424),
        s = t.n(i),
        l = t(1454),
        u = t(13002),
        c = t(34303),
        d = t(60363),
        m = t(79876);
      function f() {
        var e = (0, r.Z)([
          "relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center",
        ]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = (0, r.Z)([
          "\n  absolute w-4 h-4 rounded-full text-[10px] text-white flex  justify-center items-center right-0 top-[20px] -mr-2 border border-white\n  ",
          "\n  ",
          "\n",
        ]);
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = (0, r.Z)([
          "bg-[#5436DA] rounded-sm text-white flex justify-center items-center relative tracking-widest",
        ]);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = (0, r.Z)(["relative flex"]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      var v = c.Z.div(f()),
        x = c.Z.span(
          h(),
          function (e) {
            return "warning" === e.$type && "bg-orange-500 text-white";
          },
          function (e) {
            return "danger" === e.$type && "bg-red-500 text-white";
          }
        ),
        b = function (e) {
          var n = e.iconName,
            t = e.background,
            r = e.notice,
            o = m.nI;
          switch (n) {
            case "globe":
              o = l.RsK;
              break;
            case "terminal":
              o = l.cDN;
              break;
            case "t":
              o = l.RUS;
              break;
            case "s":
              o = l.jRj;
              break;
            case "c":
              o = u.oT$;
              break;
            case "p":
              o = l.yG;
          }
          return (0, a.jsxs)(v, {
            style: { backgroundColor: t },
            children: [
              (0, a.jsx)(m.ZP, { icon: o, size: "medium" }),
              r && (0, a.jsx)(x, { $type: r, children: "!" }),
            ],
          });
        },
        y = function (e) {
          var n = e.plugin,
            t = e.notice;
          return (0, a.jsxs)(v, {
            className: "p-0",
            children: [
              (0, a.jsx)(d.Z, {
                url: n.manifest.logo_url,
                name: n.manifest.name_for_human,
                size: "100%",
              }),
              t && (0, a.jsx)(x, { $type: t, children: "!" }),
            ],
          });
        },
        C = c.Z.div(g()),
        w = c.Z.div(p()),
        j = function (e) {
          var n = e.user,
            t = e.size,
            r = void 0 === t ? "small" : t,
            i = e.notice,
            u = i && (0, a.jsx)(x, { $type: i, children: "!" });
          if (null == n ? void 0 : n.picture)
            return (0, a.jsxs)(w, {
              children: [
                (0, a.jsx)(s(), {
                  src: n.picture,
                  alt: n.name,
                  width: "small" === r ? 30 : 38,
                  height: "small" === r ? 30 : 38,
                  className: "rounded-sm",
                }),
                u,
              ],
            });
          var c = ((null == n ? void 0 : n.name) || "")
            .split(" ")
            .map(function (e) {
              return "U";
            })
            .join("");
          return (0, a.jsxs)(C, {
            className: (0, o.Z)(
              "small" === r ? "h-8 w-8 text-xs" : "h-10 w-10 text-lg"
            ),
            children: [
              c || (0, a.jsx)(m.ZP, { icon: l.fzv, size: "medium" }),
              u,
            ],
          });
        };
    },
    43404: function (e, n, t) {
      "use strict";
      t.d(n, {
        $: function () {
          return v;
        },
        Z: function () {
          return p;
        },
      });
      var r = t(14806),
        a = t(35250),
        o = t(70079),
        i = t(34303),
        s = t(35873);
      function l() {
        var e = (0, r.Z)(["bg-black rounded-md"]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = (0, r.Z)([
          "flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md",
        ]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function c() {
        var e = (0, r.Z)(["p-4 overflow-y-auto"]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = (0, r.Z)(["!whitespace-pre"]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      var m = i.Z.div(l()),
        f = i.Z.div(u()),
        h = i.Z.div(c()),
        g = i.Z.code(d());
      function p(e) {
        var n = e.children,
          t = e.className,
          r = e.language,
          i = e.content,
          l = (0, o.useCallback)(
            function () {
              navigator.clipboard.writeText(i);
            },
            [i]
          );
        return (0, a.jsx)(v, {
          title: r,
          headerDecoration: (0, a.jsx)(s.Z, { text: "Copy code", onCopy: l }),
          className: "mb-4",
          codeClassName: t,
          children: n,
        });
      }
      function v(e) {
        var n = e.children,
          t = e.title,
          r = e.headerDecoration,
          o = e.className,
          i = e.codeClassName;
        return (0, a.jsxs)(m, {
          className: o,
          children: [
            (0, a.jsxs)(f, {
              children: [t && (0, a.jsx)("span", { children: t }), r],
            }),
            (0, a.jsx)(h, {
              children: (0, a.jsx)(g, { className: i, children: n }),
            }),
          ],
        });
      }
    },
    35873: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var r = t(14806),
        a = t(35250),
        o = t(70079),
        i = t(1454),
        s = t(34303),
        l = t(60612),
        u = t(79876);
      function c() {
        var e = (0, r.Z)(["flex ml-auto gap-2"]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function d(e) {
        var n = e.text,
          t = e.onCopy,
          r = (0, o.useState)(!1),
          s = r[0],
          c = r[1],
          d = (0, l.Z)(),
          f = (0, o.useCallback)(
            function () {
              t(),
                c(!0),
                setTimeout(function () {
                  d() && c(!1);
                }, 2e3);
            },
            [d, t]
          );
        return (0, a.jsxs)(a.Fragment, {
          children: [
            !s &&
              (0, a.jsxs)(m, {
                onClick: f,
                children: [(0, a.jsx)(u.ZP, { icon: i.j4u }), n],
              }),
            s &&
              (0, a.jsxs)(m, {
                children: [(0, a.jsx)(u.ZP, { icon: i.UgA }), n && "Copied!"],
              }),
          ],
        });
      }
      var m = s.Z.button(c());
    },
    31425: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var r = t(35250);
      function a(e) {
        var n,
          t = e.url,
          a = e.size,
          o = void 0 === a ? 16 : a;
        try {
          n = new URL(t);
        } catch (i) {
          return console.error(i), null;
        }
        return (0, r.jsx)("img", {
          src: "https://icons.duckduckgo.com/ip3/".concat(n.hostname, ".ico"),
          alt: "Favicon",
          width: o,
          height: o,
        });
      }
    },
    36284: function (e, n, t) {
      "use strict";
      t.d(n, {
        D2: function () {
          return R;
        },
        ze: function () {
          return E;
        },
        YA: function () {
          return _;
        },
        Vp: function () {
          return B;
        },
        ZP: function () {
          return F;
        },
      });
      var r = t(31501),
        a = t(89874),
        o = t(14806),
        i = t(35250),
        s = t(35888),
        l = t(40638),
        u = t(57526),
        c = t(19841),
        d = t(70079),
        m = t(99581),
        f = t(1454),
        h = t(34303),
        g = t(11699),
        p = t(60363),
        v = t(79876),
        x = t(42928),
        b = t(30892),
        y = t.n(b),
        C = t(7361),
        w = t.n(C);
      function j(e) {
        var n = e.values,
          t = e.className,
          r = Object.keys(n),
          a = Object.values(n);
        return (0, i.jsxs)("div", {
          className: (0, c.Z)("flex w-full items-stretch gap-2", t),
          children: [
            (0, i.jsx)("div", {
              className:
                "flex w-1/2 flex-col justify-between gap-1 text-sm text-gray-600 dark:text-gray-300",
              children: r.map(function (e, n) {
                return (0, i.jsx)("span", { children: y()(e) }, n);
              }),
            }),
            (0, i.jsx)("div", {
              className: "my-1.5 flex flex-1 flex-col justify-between gap-2",
              children: a.map(function (e, n) {
                var t = (0, x.Z)(e, 2),
                  r = t[0],
                  a = t[1];
                return (0, i.jsx)(k, { num: r, max: a }, n);
              }),
            }),
          ],
        });
      }
      function k(e) {
        var n = e.num,
          t = e.max,
          r = (0, d.useMemo)(
            function () {
              var e = w()(Array(t), !1);
              return w()(e, !0, 0, n);
            },
            [t, n]
          );
        return (0, i.jsx)("div", {
          className: "flex w-full gap-1",
          children: r.map(function (e, n) {
            return (0,
            i.jsx)("div", { className: (0, c.Z)("h-2 w-full rounded-lg", e ? "bg-green-600" : "bg-gray-200 dark:bg-gray-600"), children: e }, n);
          }),
        });
      }
      var Z = t(1744);
      function N() {
        var e = (0, o.Z)([
          "rounded bg-white ring-1 ring-black/10 dark:bg-gray-800 dark:ring-white/20",
        ]);
        return (
          (N = function () {
            return e;
          }),
          e
        );
      }
      function I() {
        var e = (0, o.Z)([
          "absolute z-10 mt-2 max-h-60 w-full overflow-auto text-base focus:outline-none dark:last:border-0 sm:text-xs md:w-[100%]",
        ]);
        return (
          (I = function () {
            return e;
          }),
          e
        );
      }
      function M() {
        var e = (0, o.Z)([
          "absolute z-10 -ml-[1px] flex flex-col gap-2 p-3 sm:p-4",
        ]);
        return (
          (M = function () {
            return e;
          }),
          e
        );
      }
      function S() {
        var e = (0, o.Z)(["flex items-center gap-1.5 truncate"]);
        return (
          (S = function () {
            return e;
          }),
          e
        );
      }
      function P() {
        var e = (0, o.Z)(["h-6 w-6 shrink-0"]);
        return (
          (P = function () {
            return e;
          }),
          e
        );
      }
      function T() {
        var e = (0, o.Z)([
          "absolute inset-y-0 right-0 flex items-center pr-3 text-gray-800 dark:text-gray-100",
        ]);
        return (
          (T = function () {
            return e;
          }),
          e
        );
      }
      var R = ["confidential", "alpha", "plus"];
      function F(e) {
        var n = e.selectedOption,
          t = e.onChange,
          o = e.onAction,
          l = e.dropdownRef,
          u = (0, a.Z)(e, [
            "selectedOption",
            "onChange",
            "onAction",
            "dropdownRef",
          ]),
          c = (0, d.useCallback)(
            function (e) {
              "string" == typeof e ? null == o || o(e) : t(e);
            },
            [t, o]
          );
        return (0, i.jsx)(s.R, {
          value: n.value,
          onChange: c,
          children: function (e) {
            var t = e.open;
            return (0, i.jsx)(
              D,
              (0, r.Z)(
                {
                  ref: l,
                  selectedLabel: (0, i.jsxs)(i.Fragment, {
                    children: [
                      n.title,
                      n.tags.map(function (e) {
                        return B(e);
                      }),
                      n.customTags,
                    ],
                  }),
                  open: t,
                },
                u
              )
            );
          },
        });
      }
      function _(e) {
        var n = e.selectedOptions,
          t = e.selectedLabel,
          o = e.onChange,
          l = e.onAction,
          u = e.dropdownRef,
          c = (0, a.Z)(e, [
            "selectedOptions",
            "selectedLabel",
            "onChange",
            "onAction",
            "dropdownRef",
          ]),
          m = (0, d.useCallback)(
            function (e) {
              if (
                e.some(function (e) {
                  return "string" == typeof e;
                })
              ) {
                var n = e.find(function (e) {
                  return "string" == typeof e;
                });
                null == l || l(n);
              } else o(e);
            },
            [o, l]
          );
        return (0, i.jsx)(s.R, {
          value: n.map(function (e) {
            return e.value;
          }),
          multiple: !0,
          onChange: m,
          children: function (e) {
            var a = e.open;
            return (0, i.jsx)(
              D,
              (0, r.Z)(
                {
                  ref: u,
                  selectedLabel: t || "".concat(n.length, " selected"),
                  open: a,
                  multiple: !0,
                },
                c
              )
            );
          },
        });
      }
      var D = (0, d.forwardRef)(function (e, n) {
        var t = e.name,
          r = e.selectedLabel,
          a = e.open,
          o = e.options,
          h = e.actions,
          x = e.multiple,
          b = e.isLoading,
          y = e.loadingState,
          C = e.header,
          w = (0, d.useRef)(null),
          j = (0, d.useRef)(null),
          k = (0, g.dD)();
        (0, d.useImperativeHandle)(
          n,
          function () {
            return {
              open: function () {
                if (!a) {
                  var e;
                  null === (e = w.current) || void 0 === e || e.click();
                }
              },
              close: function () {
                if (a) {
                  var e;
                  null === (e = w.current) || void 0 === e || e.click();
                }
              },
            };
          },
          [a]
        );
        var N = b
          ? y ||
            (0, i.jsx)("div", {
              className: "flex h-[42px] items-center justify-center",
              children: (0, i.jsx)(Z.Z, {}),
            })
          : (0, i.jsxs)(i.Fragment, {
              children: [
                C,
                o.map(function (e, n) {
                  return (0, i.jsx)(
                    q,
                    {
                      value: e.value,
                      disabled: e.disabled,
                      children: function (n) {
                        var t = n.selected,
                          r = n.active;
                        return (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsxs)($, {
                              children: [
                                e.imageUrl &&
                                  (0, i.jsx)(H, {
                                    children: (0, i.jsx)(p.Z, {
                                      url: e.imageUrl,
                                      name: e.title,
                                      size: "100%",
                                    }),
                                  }),
                                (0, i.jsxs)("span", {
                                  className: (0, c.Z)(
                                    t && !x && "font-semibold",
                                    "flex h-6 items-center gap-1 text-gray-800 dark:text-gray-100"
                                  ),
                                  children: [
                                    e.title,
                                    e.tags.map(function (e) {
                                      return B(e);
                                    }),
                                    e.customTags,
                                  ],
                                }),
                              ],
                            }),
                            x && !e.disabled
                              ? (0, i.jsx)(L, { selected: t })
                              : t && (0, i.jsx)(A, { icon: f.UgA }),
                            e.disabled &&
                              (0, i.jsx)(A, {
                                icon: u.Z,
                                className: "text-red-700 dark:text-red-500",
                              }),
                            r &&
                              !k &&
                              (0, m.createPortal)(
                                (0, i.jsx)(U, { option: e, dropdownRef: j }),
                                document.body
                              ),
                          ],
                        });
                      },
                    },
                    n
                  );
                }),
                null == h
                  ? void 0
                  : h.map(function (e, n) {
                      return (0, i.jsx)(
                        q,
                        {
                          value: e.id,
                          children: function () {
                            return (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)("div", {
                                  className: "text-gray-800 dark:text-gray-100",
                                  children: e.label,
                                }),
                                (0, i.jsx)(A, { icon: e.icon }),
                              ],
                            });
                          },
                        },
                        n
                      );
                    }),
              ],
            });
        return (0,
        i.jsx)(i.Fragment, { children: (0, i.jsxs)("div", { className: "relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4", children: [(0, i.jsxs)(s.R.Button, { ref: w, className: "relative flex w-full cursor-default flex-col rounded-md border border-black/10 bg-white py-2 pl-3 pr-10 text-left focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20 dark:bg-gray-800 sm:text-sm", children: [(0, i.jsx)(s.R.Label, { className: "block text-xs text-gray-700 dark:text-gray-500", children: t }), (0, i.jsx)("span", { className: "inline-flex w-full truncate", children: (0, i.jsx)("span", { className: "flex h-6 items-center gap-1 truncate", children: r }) }), (0, i.jsx)("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2", children: (0, i.jsx)(v.ZP, { icon: f.bTu, className: " text-gray-400", "aria-hidden": "true" }) })] }), (0, i.jsx)(l.u, { show: a, as: d.Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: (0, i.jsx)(z, { $as: s.R.Options, ref: j, children: N }) })] }) });
      });
      function q(e) {
        var n = e.value,
          t = e.disabled,
          r = e.children;
        return (0, i.jsx)(s.R.Option, {
          className: function (e) {
            var n = e.active;
            return (0, c.Z)(
              V,
              n && !t ? "bg-gray-100 dark:bg-gray-700" : "text-gray-900",
              t &&
                "cursor-auto bg-gray-50 text-gray-400 dark:bg-gray-700 dark:text-gray-100"
            );
          },
          value: n,
          children: r,
        });
      }
      function A(e) {
        var n = e.icon,
          t = e.className;
        return (0, i.jsx)(W, {
          children: (0, i.jsx)(v.ZP, {
            icon: n,
            className: (0, c.Z)("h-5 w-5", t),
            "aria-hidden": "true",
          }),
        });
      }
      function L(e) {
        var n = e.selected,
          t = e.disabled;
        return (0, i.jsx)(W, {
          children: (0, i.jsx)("div", {
            className: (0, c.Z)(
              "flex h-6 w-6 items-center justify-center rounded-full border dark:border-white/20",
              n ? "border-black/20" : "border-black/5"
            ),
            "aria-hidden": "true",
            children: (0, i.jsx)(v.ZP, {
              icon: f.UgA,
              className: (0, c.Z)(
                "h-3 w-3 transition-opacity",
                n && "opacity-100",
                !n && "opacity-0",
                !n && !t && "group-hover:opacity-50"
              ),
              strokeWidth: n ? 2.5 : 2,
            }),
          }),
        });
      }
      function E(e) {
        var n = e.showCheckbox;
        return (0, i.jsxs)("div", {
          className: (0, c.Z)(V, "cursor-auto"),
          children: [
            (0, i.jsxs)($, {
              children: [
                (0, i.jsx)(H, {
                  children: (0, i.jsx)("div", {
                    className: "h-full w-full rounded-sm bg-gray-200",
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "h-[12px] w-[88px] rounded-sm bg-gray-100",
                }),
              ],
            }),
            n && (0, i.jsx)(L, { selected: !1, disabled: !0 }),
          ],
        });
      }
      function U(e) {
        var n = e.option,
          t = e.dropdownRef,
          r = (0, d.useState)(),
          a = r[0],
          o = r[1];
        (0, d.useEffect)(
          function () {
            var e = function () {
              if (t.current) {
                var e,
                  n = t.current.getBoundingClientRect(),
                  r = n.top;
                o({ top: r, left: n.left - 260, minHeight: n.height });
              }
            };
            return (
              e(),
              window.addEventListener("resize", e),
              function () {
                return window.removeEventListener("resize", e);
              }
            );
          },
          [t]
        );
        var s = (0, d.useMemo)(
          function () {
            return n.value.properties
              ? (0, i.jsx)(j, {
                  values: n.value.properties,
                  className: "mt-auto",
                })
              : null;
          },
          [n.value.properties]
        );
        return a
          ? (0, i.jsxs)(G, {
              style: {
                width: 260,
                minHeight: a.minHeight,
                top: a.top,
                left: a.left,
              },
              children: [
                n.disabled &&
                  (0, i.jsx)(v.ZP, {
                    icon: u.Z,
                    size: "medium",
                    className: "text-red-700 dark:text-red-500",
                  }),
                n.imageUrl &&
                  (0, i.jsx)(p.Z, { url: n.imageUrl, name: n.title, size: 70 }),
                (0, i.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    n.title,
                    " ",
                    n.tags.map(function (e) {
                      return B(e);
                    }),
                    " ",
                    n.customTags,
                  ],
                }),
                (0, i.jsx)("div", {
                  className: "whitespace-pre-line text-xs",
                  children: n.description,
                }),
                !n.disabled && s,
              ],
            })
          : null;
      }
      var B = function (e) {
          return (
            R.includes(e) &&
            (0, i.jsx)(
              "span",
              {
                className: (0, c.Z)(
                  "py-0.25 rounded px-1 text-[10px] font-semibold uppercase",
                  "confidential" === e && "bg-red-200 text-red-800",
                  "alpha" === e && "bg-blue-200 text-[#4559A4]",
                  "plus" === e && "bg-yellow-200 text-yellow-900"
                ),
                children: e,
              },
              e
            )
          );
        },
        O = h.Z.div(N()),
        z = (0, h.Z)(O)(I()),
        G = (0, h.Z)(O)(M()),
        V =
          "group relative flex h-[42px] cursor-pointer select-none items-center overflow-hidden border-b border-black/10 pl-3 pr-9 last:border-0 dark:border-white/20",
        $ = h.Z.span(S()),
        H = h.Z.span(P()),
        W = h.Z.span(T());
    },
    46275: function (e, n, t) {
      "use strict";
      t.d(n, {
        bG: function () {
          return x;
        },
        ZP: function () {
          return b;
        },
      });
      var r = t(14806),
        a = t(35250),
        o = t(87093),
        i = t(40638),
        s = t(19841),
        l = t(70079),
        u = t(34303),
        c = t(62676),
        d = t(39690),
        m = t(6004);
      function f(e) {
        var n = e.onChange,
          t = e.enabled,
          r = e.size,
          o = e.Icon,
          i = (0, l.useCallback)(
            function () {
              n(!t);
            },
            [t, n]
          ),
          u = !t && "translate-x-0";
        return (0, a.jsxs)(m.r, {
          checked: t,
          onChange: i,
          className: (0, s.Z)(
            t ? "!bg-indigo-600" : "!bg-gray-200",
            "relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0",
            "large" === r ? "h-6 w-11" : "h-4 w-8"
          ),
          children: [
            (0, a.jsx)("span", {
              className: "sr-only",
              children: "Use setting",
            }),
            (0, a.jsxs)("span", {
              className: (0, s.Z)(
                "pointer-events-none relative inline-block transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                t && "large" === r ? "translate-x-5" : u,
                t && "small" === r ? "translate-x-4" : u,
                "large" === r ? "h-5 w-5" : "h-3 w-3"
              ),
              children: [
                (0, a.jsx)("span", {
                  className: (0, s.Z)(
                    t
                      ? "opacity-0 duration-100 ease-out"
                      : "opacity-100 duration-200 ease-in",
                    "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                  ),
                  "aria-hidden": "true",
                }),
                (0, a.jsx)("span", {
                  className: (0, s.Z)(
                    t
                      ? "opacity-100 duration-200 ease-in"
                      : "opacity-0 duration-100 ease-out",
                    "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                  ),
                  "aria-hidden": "true",
                  children:
                    o &&
                    (0, a.jsx)(o, { className: "h-3 w-3 text-indigo-600" }),
                }),
              ],
            }),
          ],
        });
      }
      var h = t(44819);
      function g() {
        var e = (0, r.Z)([
          "block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 outline-none border-none",
        ]);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = (0, r.Z)(["mt-1 outline-none border-0"]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = (0, r.Z)(["text-right"]);
        return (
          (v = function () {
            return e;
          }),
          e
        );
      }
      var x = "oai/apps/autoexpandCode";
      function b(e) {
        var n = e.children,
          t = e.temperature,
          r = e.onRestoreDefaults,
          u = e.onChangeModelSetting,
          m = e.position,
          g = e.modelSettings,
          p = e.features,
          v = (0, l.useState)(Boolean(c.m.getItem(x))),
          b = v[0],
          j = v[1],
          k = (0, l.useCallback)(
            function (e) {
              u(h.G3.Temperature, e.target.value);
            },
            [u]
          ),
          Z = (0, l.useCallback)(function (e) {
            j(e), c.m.setItem(x, e);
          }, []);
        return (0, a.jsxs)(o.J, {
          className: "relative",
          children: [
            n,
            (0, a.jsx)(i.u, {
              as: l.Fragment,
              enter: "transition ease-out duration-200",
              enterFrom: (0, s.Z)(
                "opacity-0",
                "top-right" === m ? "translate-x-1" : "translate-y-1"
              ),
              enterTo: (0, s.Z)(
                "opacity-100",
                "top-right" === m ? "translate-x-0" : "translate-y-0"
              ),
              leave: "transition ease-in duration-150",
              leaveFrom: (0, s.Z)(
                "opacity-100",
                "top-right" === m ? "translate-x-0" : "translate-y-0"
              ),
              leaveTo: (0, s.Z)(
                "opacity-0",
                "top-right" === m ? "translate-x-1" : "translate-y-1"
              ),
              children: (0, a.jsx)(o.J.Panel, {
                className: (0, s.Z)(
                  "absolute z-20 mt-3 w-screen max-w-xs px-2 sm:px-0",
                  "bottom-center" === m && "right-0 top-6",
                  "bottom-right" === m && "left-2 top-8",
                  "top-right" === m &&
                    "left-full top-1/2 ml-6 -translate-y-full"
                ),
                children: (0, a.jsx)("div", {
                  className:
                    "overflow-hidden rounded-lg text-left text-sm shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600",
                  children: (0, a.jsxs)("div", {
                    className:
                      "relative grid gap-6 bg-white px-2 py-1 dark:bg-gray-800 sm:gap-4 sm:p-4",
                    children: [
                      g.has(h.G3.Temperature) &&
                        (0, a.jsxs)("div", {
                          className:
                            "rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600",
                          children: [
                            (0, a.jsx)("label", {
                              htmlFor: "temperature",
                              className:
                                "block text-xs font-medium text-gray-800",
                              children: "Temperature",
                            }),
                            (0, a.jsxs)("div", {
                              className: "mt-1",
                              children: [
                                (0, a.jsx)(y, {
                                  type: "number",
                                  name: "temperature",
                                  id: "temperature",
                                  onChange: k,
                                  value: t,
                                  className: "form-input",
                                }),
                                (0, a.jsx)(C, {
                                  name: "temperature",
                                  type: "range",
                                  min: "0",
                                  max: "1",
                                  value: t,
                                  className: "range w-full",
                                  step: "0.05",
                                  onChange: k,
                                }),
                              ],
                            }),
                          ],
                        }),
                      p.has("tools2") &&
                        (0, a.jsxs)("div", {
                          className: "flex items-center gap-2 text-white",
                          children: [
                            (0, a.jsx)("div", { children: "Auto-expand code" }),
                            (0, a.jsx)(f, {
                              size: "small",
                              enabled: b,
                              onChange: Z,
                            }),
                          ],
                        }),
                      (0, a.jsx)(w, {
                        children: (0, a.jsx)(d.z, {
                          as: "button",
                          color: "neutral",
                          onClick: r,
                          children: "Restore defaults",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        });
      }
      var y = u.Z.input(g()),
        C = u.Z.input(p()),
        w = u.Z.div(v());
    },
    44525: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return L;
        },
      });
      var r = t(31501),
        a = t(61079),
        o = t(89874),
        i = t(35250),
        s = t(19841),
        l = t(15762),
        u = t(70079),
        c = t(45306),
        d = t(9871),
        m = t(66285),
        f = t(60612),
        h = t(61110),
        g = t(55975),
        p = t(46050),
        v = t(29874),
        x = t(8449),
        b = t(15472);
      function y(e, n, t) {}
      function C(e, n) {}
      let w = {
          tokenize: function (e, n, t) {
            let r = this,
              a = this.events[this.events.length - 1],
              o =
                a && a[1].type === b.V.linePrefix
                  ? a[2].sliceSerialize(a[1], !0).length
                  : 0,
              i = [];
            return function (n) {
              return (
                n !== g.q.backslash && y("expected `\\`", n),
                e.enter("mathFlow"),
                e.enter("mathFlowFence"),
                e.enter("mathFlowFenceSequence"),
                (function n(r) {
                  return (y("sequenceOpen", r),
                  r === g.q.backslash ||
                    (r === g.q.leftSquareBracket && i[0] === g.q.backslash))
                    ? (e.consume(r), i.push(r), n)
                    : (e.exit("mathFlowFenceSequence"),
                      i.length < 2 ? t(r) : (0, p.f)(e, s, b.V.whitespace)(r));
                })(n)
              );
            };
            function s(n) {
              return (y("metaOpen", n), n === g.q.eof || (0, v.Ch)(n))
                ? l(n)
                : (e.enter("mathFlowFenceMeta"),
                  e.enter(b.V.chunkString, {
                    contentType: x._.contentTypeString,
                  }),
                  (function n(r) {
                    return (y("meta", r), r === g.q.eof || (0, v.Ch)(r))
                      ? (e.exit(b.V.chunkString),
                        e.exit("mathFlowFenceMeta"),
                        l(r))
                      : r === g.q.rightSquareBracket
                      ? t(r)
                      : (e.consume(r), n);
                  })(n));
            }
            function l(t) {
              return (
                y("openAfter", t),
                e.exit("mathFlowFence"),
                r.interrupt
                  ? n(t)
                  : (function n(t) {
                      return (y("contentStart", t), t === g.q.eof)
                        ? u(t)
                        : (0, v.Ch)(t)
                        ? e.attempt(
                            j,
                            e.attempt(
                              { tokenize: c, partial: !0 },
                              u,
                              o ? (0, p.f)(e, n, b.V.linePrefix, o + 1) : n
                            ),
                            u
                          )(t)
                        : (e.enter("mathFlowValue"),
                          (function t(r) {
                            return (y("contentContinue", r),
                            r === g.q.eof || (0, v.Ch)(r))
                              ? (e.exit("mathFlowValue"), n(r))
                              : (e.consume(r), t);
                          })(t));
                    })(t)
              );
            }
            function u(t) {
              return y("after", t), e.exit("mathFlow"), n(t);
            }
            function c(e, n, t) {
              let r = [];
              return (0, p.f)(
                e,
                function (n) {
                  return (
                    y("closingPrefixAfter", n),
                    e.enter("mathFlowFence"),
                    e.enter("mathFlowFenceSequence"),
                    (function n(o) {
                      return (y("closingSequence", o),
                      (o === g.q.backslash && 0 === r.length) ||
                        (o === g.q.rightSquareBracket &&
                          r[0] === g.q.backslash))
                        ? (e.consume(o), r.push(o), n)
                        : r < i
                        ? t(o)
                        : (e.exit("mathFlowFenceSequence"),
                          (0, p.f)(e, a, b.V.whitespace)(o));
                    })(n)
                  );
                },
                b.V.linePrefix,
                x._.tabSize
              );
              function a(r) {
                return (y("closingSequenceEnd", r),
                r === g.q.eof || (0, v.Ch)(r))
                  ? (e.exit("mathFlowFence"), n(r))
                  : t(r);
              }
            }
          },
          concrete: !0,
        },
        j = {
          tokenize: function (e, n, t) {
            let r = this;
            return function (n) {
              return (
                e.enter(b.V.lineEnding), e.consume(n), e.exit(b.V.lineEnding), a
              );
            };
            function a(e) {
              return r.parser.lazy[r.now().line] ? t(e) : n(e);
            }
          },
          partial: !0,
        },
        k = {
          tokenize: function (e, n, t) {
            let r = this,
              a = r.events[r.events.length - 1],
              o =
                a && a[1].type === b.V.linePrefix
                  ? a[2].sliceSerialize(a[1], !0).length
                  : 0,
              i = 0;
            return function (n) {
              return (
                n !== g.q.dollarSign && y("expected `$`", n),
                e.enter("mathFlow"),
                e.enter("mathFlowFence"),
                e.enter("mathFlowFenceSequence"),
                (function n(r) {
                  return (y("sequenceOpen", r), r === g.q.dollarSign)
                    ? (e.consume(r), i++, n)
                    : (e.exit("mathFlowFenceSequence"),
                      i < 2 ? t(r) : (0, p.f)(e, s, b.V.whitespace)(r));
                })(n)
              );
            };
            function s(n) {
              return (y("metaOpen", n), n === g.q.eof || (0, v.Ch)(n))
                ? l(n)
                : (e.enter("mathFlowFenceMeta"),
                  e.enter(b.V.chunkString, {
                    contentType: x._.contentTypeString,
                  }),
                  (function n(r) {
                    return (y("meta", r), r === g.q.eof || (0, v.Ch)(r))
                      ? (e.exit(b.V.chunkString),
                        e.exit("mathFlowFenceMeta"),
                        l(r))
                      : r === g.q.dollarSign
                      ? t(r)
                      : (e.consume(r), n);
                  })(n));
            }
            function l(t) {
              return (
                y("openAfter", t),
                e.exit("mathFlowFence"),
                r.interrupt
                  ? n(t)
                  : (function n(t) {
                      return (y("contentStart", t), t === g.q.eof)
                        ? u(t)
                        : (0, v.Ch)(t)
                        ? e.attempt(
                            Z,
                            e.attempt(
                              { tokenize: c, partial: !0 },
                              u,
                              o ? (0, p.f)(e, n, b.V.linePrefix, o + 1) : n
                            ),
                            u
                          )(t)
                        : (e.enter("mathFlowValue"),
                          (function t(r) {
                            return (y("contentContinue", r),
                            r === g.q.eof || (0, v.Ch)(r))
                              ? (e.exit("mathFlowValue"), n(r))
                              : (e.consume(r), t);
                          })(t));
                    })(t)
              );
            }
            function u(t) {
              return y("after", t), e.exit("mathFlow"), n(t);
            }
            function c(e, n, t) {
              let r = 0;
              return (0, p.f)(
                e,
                function (n) {
                  return (
                    y("closingPrefixAfter", n),
                    e.enter("mathFlowFence"),
                    e.enter("mathFlowFenceSequence"),
                    (function n(o) {
                      return (y("closingSequence", o), o === g.q.dollarSign)
                        ? (e.consume(o), r++, n)
                        : r < i
                        ? t(o)
                        : (e.exit("mathFlowFenceSequence"),
                          (0, p.f)(e, a, b.V.whitespace)(o));
                    })(n)
                  );
                },
                b.V.linePrefix,
                x._.tabSize
              );
              function a(r) {
                return (y("closingSequenceEnd", r),
                r === g.q.eof || (0, v.Ch)(r))
                  ? (e.exit("mathFlowFence"), n(r))
                  : t(r);
              }
            }
          },
          concrete: !0,
        },
        Z = {
          tokenize: function (e, n, t) {
            let r = this;
            return function (n) {
              return (
                (0, v.Ch)(n) && y("expected eol", n),
                e.enter(b.V.lineEnding),
                e.consume(n),
                e.exit(b.V.lineEnding),
                a
              );
            };
            function a(e) {
              return r.parser.lazy[r.now().line] ? t(e) : n(e);
            }
          },
          partial: !0,
        };
      function N(e) {
        let n = e.length - 4,
          t = 3,
          r,
          a;
        if (
          (e[t][1].type === b.V.lineEnding || "space" === e[t][1].type) &&
          (e[n][1].type === b.V.lineEnding || "space" === e[n][1].type)
        ) {
          for (r = t; ++r < n; )
            if ("mathTextData" === e[r][1].type) {
              (e[n][1].type = "mathTextPadding"),
                (e[t][1].type = "mathTextPadding"),
                (t += 2),
                (n -= 2);
              break;
            }
        }
        for (r = t - 1, n++; ++r <= n; )
          void 0 === a
            ? r !== n && e[r][1].type !== b.V.lineEnding && (a = r)
            : (r === n || e[r][1].type === b.V.lineEnding) &&
              ((e[a][1].type = "mathTextData"),
              r !== a + 2 &&
                ((e[a][1].end = e[r - 1][1].end),
                e.splice(a + 2, r - a - 2),
                (n -= r - a - 2),
                (r = a + 2)),
              (a = void 0));
        return e;
      }
      function I(e) {
        return (
          e !== g.q.backslash ||
          this.events[this.events.length - 1][1].type === b.V.characterEscape
        );
      }
      var M = t(93362),
        S = t(45369),
        P = t(42426),
        T = t(65028),
        R = t(88366),
        F = t(37678),
        _ = t(43404),
        D = [
          T.Z,
          [
            function () {
              let e = this.data();
              function n(n, t) {
                let r = e[n] ? e[n] : (e[n] = []);
                r.push(t);
              }
              n("micromarkExtensions", {
                flow: { [g.q.dollarSign]: k, [g.q.backslash]: w },
                text: {
                  [g.q.backslash]: {
                    tokenize: function (e, n, t) {
                      let r = [],
                        a = [],
                        o,
                        i = this;
                      return function (n) {
                        return (
                          y("start", n),
                          n !== g.q.backslash && C("expected `\\`", n),
                          I.call(i, i.previous) &&
                            C("expected correct previous", i.previous),
                          e.enter("mathText"),
                          e.enter("mathTextSequence"),
                          (function n(a) {
                            return (y("openingSequence", a, r.join(",")),
                            (a === g.q.backslash && 0 === r.length) ||
                              (a === g.q.leftParenthesis && 1 === r.length))
                              ? (e.consume(a), r.push(a), n)
                              : r.length < 2
                              ? t(a)
                              : (e.exit("mathTextSequence"), s(a));
                          })(n)
                        );
                      };
                      function s(i) {
                        return (y("gap", i), i === g.q.eof)
                          ? t(i)
                          : i === g.q.backslash
                          ? ((o = e.enter("mathTextSequence")),
                            (a = []),
                            (function t(i) {
                              return (y("closingSequence", i, r.join(",")),
                              (i === g.q.backslash && 0 === a.length) ||
                                (i === g.q.rightParenthesis && 1 === a.length))
                                ? (e.consume(i), a.push(i), t)
                                : a.length === r.length
                                ? (e.exit("mathTextSequence"),
                                  e.exit("mathText"),
                                  n(i))
                                : ((o.type = "mathTextData"), l(i));
                            })(i))
                          : i === g.q.space
                          ? (e.enter("space"), e.consume(i), e.exit("space"), s)
                          : (0, v.Ch)(i)
                          ? (e.enter(b.V.lineEnding),
                            e.consume(i),
                            e.exit(b.V.lineEnding),
                            s)
                          : (e.enter("mathTextData"), l(i));
                      }
                      function l(n) {
                        return (y("data", n),
                        n === g.q.eof ||
                          n === g.q.space ||
                          n === g.q.backslash ||
                          (0, v.Ch)(n))
                          ? (e.exit("mathTextData"), s(n))
                          : (e.consume(n), l);
                      }
                    },
                    resolve: N,
                    previous: I,
                  },
                },
              }),
                n("fromMarkdownExtensions", (0, h.N)()),
                n("toMarkdownExtensions", (0, h.O)());
            },
            { singleDollarTextMath: !1 },
          ],
        ],
        q = [
          [
            M.Z,
            {
              detect: !0,
              subset: [
                "python",
                "javascript",
                "java",
                "go",
                "bash",
                "c",
                "cpp",
                "csharp",
                "css",
                "diff",
                "graphql",
                "json",
                "kotlin",
                "less",
                "lua",
                "makefile",
                "markdown",
                "objectivec",
                "perl",
                "php",
                "php-template",
                "plaintext",
                "python-repl",
                "r",
                "ruby",
                "rust",
                "scss",
                "shell",
                "sql",
                "swift",
                "typescript",
                "vbnet",
                "wasm",
                "xml",
                "yaml",
              ],
              ignoreMissing: !0,
            },
          ],
          S.Z,
          [P.Z, { newlines: !0 }],
        ],
        A = {
          code: function (e) {
            var n = e.inline,
              t = e.node,
              s = e.className,
              l = e.children,
              u = (0, o.Z)(e, ["inline", "node", "className", "children"]);
            if (n) {
              var c = (0, R.B)(t),
                d = (0, F.T$)(c);
              return d
                ? (0, i.jsx)(F.s8, { displayInfo: d })
                : (0, i.jsx)(
                    "code",
                    (0, a.Z)((0, r.Z)({ className: s }, u), { children: l })
                  );
            }
            var m,
              f =
                null ===
                  (m =
                    null == s
                      ? void 0
                      : s.split(" ").filter(function (e) {
                          return e.startsWith("language-");
                        })) || void 0 === m
                  ? void 0
                  : m[0],
              h = f ? f.split("-")[1] : "";
            return (0, i.jsx)(_.Z, {
              language: h,
              className: s,
              content: (0, R.B)(t),
              children: l,
            });
          },
        };
      function L(e) {
        var n = e.size,
          h = e.children,
          g = e.className,
          p = e.onSandboxLinkClick,
          v = (0, l.F)().theme,
          x = (0, m.hz)().has("tools2"),
          b = (0, u.useState)(""),
          y = b[0],
          C = b[1],
          w = (0, f.Z)();
        (0, u.useEffect)(
          function () {
            x &&
              w() &&
              t
                .e(949)
                .then(t.bind(t, 93949))
                .then(function (e) {
                  return C(e.SANDBOX_LINK_PREFIX);
                });
          },
          [x, C, w]
        );
        var j = (0, u.useMemo)(
            function () {
              return (0, a.Z)((0, r.Z)({}, A), {
                a: function (e) {
                  var n = e.node,
                    t = (0, o.Z)(e, ["node"]),
                    s = n.properties.href;
                  return p && x && s.startsWith(y)
                    ? (0, i.jsx)("a", (0, a.Z)((0, r.Z)({}, t), { onClick: p }))
                    : (0, i.jsx)("a", (0, r.Z)({}, t));
                },
              });
            },
            [p, y, x]
          ),
          k = (0, u.useCallback)(
            function (e) {
              return e.startsWith(y) ? e : (0, d.A)(e);
            },
            [y]
          );
        return (0, i.jsx)(c.D, {
          rehypePlugins: q,
          remarkPlugins: D,
          linkTarget: "_new",
          className: (0, s.Z)(
            g,
            "markdown prose w-full break-words dark:prose-invert",
            "dark" === v ? "dark" : "light",
            "small" === (void 0 === n ? "medium" : n) && "prose-xs"
          ),
          transformLinkUri: k,
          components: j,
          children: h,
        });
      }
    },
    69153: function (e, n, t) {
      "use strict";
      t.d(n, {
        I: function () {
          return h;
        },
        Z: function () {
          return c;
        },
      });
      var r = t(14806),
        a = t(35250),
        o = t(34303);
      function i() {
        var e = (0, r.Z)([
          "flex p-4 bg-gray-50 dark:bg-white/5 rounded-md items-center gap-4 min-h-[71px]",
        ]);
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      function s() {
        var e = (0, r.Z)(["w-10 text-2xl text-center"]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function l() {
        var e = (0, r.Z)(["flex-1 leading-5"]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        var e = (0, r.Z)(["flex gap-4 flex-col text-sm"]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function c(e) {
        var n = e.icon,
          t = e.children;
        return (0, a.jsxs)(d, {
          children: [
            (0, a.jsx)(m, { children: n }),
            (0, a.jsx)(f, { children: t }),
          ],
        });
      }
      var d = o.Z.div(i()),
        m = o.Z.div(s()),
        f = o.Z.div(l()),
        h = o.Z.div(u());
    },
    76678: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var r = t(70079),
        a = t(500),
        o = t(62588);
      function i() {
        var e = (0, r.useContext)(a.A),
          n = (0, o.Z)().installedPlugins;
        return (0, r.useMemo)(
          function () {
            return n.filter(function (n) {
              return e.has(n.id);
            });
          },
          [e, n]
        );
      }
    },
    24058: function (e, n, t) {
      "use strict";
      t.d(n, {
        dT: function () {
          return m;
        },
        hZ: function () {
          return l;
        },
        p0: function () {
          return d;
        },
        wu: function () {
          return f;
        },
      });
      var r = t(64705),
        a = t(70079),
        o = t(59268),
        i = t(62676),
        s = t(62588),
        l = 3,
        u = "oai/enabledPluginIds",
        c = (0, o.ZP)(function () {
          var e = Array.from(new Set(i.m.getItem(u)));
          return { enabledPluginIds: new Set(e.splice(0, l)) };
        });
      function d() {
        var e = (0, s.Z)().installedPlugins,
          n = c().enabledPluginIds;
        return (0, a.useMemo)(
          function () {
            return e.filter(function (e) {
              return n.has(e.id);
            });
          },
          [n, e]
        );
      }
      function m(e) {
        !(e.length > l) &&
          c.setState(function () {
            return i.m.setItem(u, e), { enabledPluginIds: new Set(e) };
          });
      }
      function f(e) {
        c.setState(function (n) {
          if (n.enabledPluginIds.size >= l) return n;
          var t = (0, r.Z)(n.enabledPluginIds).concat([e]);
          return i.m.setItem(u, t), { enabledPluginIds: new Set(t) };
        });
      }
    },
    62588: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var r = t(87762),
        a = t(70079),
        o = t(82018),
        i = t(33264),
        s = t(66285);
      function l() {
        var e = (0, o.kP)().session,
          n = (0, s.hz)(),
          t = (0, r.a)(
            ["installedAip"],
            function () {
              return i.ZP.getPlugins({
                offset: 0,
                limit: 20,
                isInstalled: !0,
                accessToken: null == e ? void 0 : e.accessToken,
              });
            },
            {
              enabled:
                n.has("tools3") && !!(null == e ? void 0 : e.accessToken),
              onError: function (e) {
                console.error(e);
              },
            }
          ),
          l = t.data,
          u = t.isLoading;
        return (0, a.useMemo)(
          function () {
            return { installedPlugins: l ? l.items : [], isLoading: u };
          },
          [l, u]
        );
      }
    },
    44819: function (e, n, t) {
      "use strict";
      t.d(n, {
        BT: function () {
          return b;
        },
        CS: function () {
          return x;
        },
        G3: function () {
          return r;
        },
        ZP: function () {
          return C;
        },
        f_: function () {
          return h;
        },
        m0: function () {
          return v;
        },
        uU: function () {
          return g;
        },
        xt: function () {
          return y;
        },
      });
      var r,
        a,
        o = t(33861),
        i = t(31501),
        s = t(61079),
        l = t(64705),
        u = t(61432),
        c = t(70079),
        d = t(59268),
        m = t(13751),
        f = t(66285);
      ((a = r || (r = {})).Model = "model"),
        (a.Temperature = "temperature"),
        (a.Context = "context");
      var h = "gpt-4",
        g = "model_cap_exceeded",
        p = (0, d.ZP)(function () {
          return { threadIds: new Set() };
        });
      function v(e) {
        p.setState(function (n) {
          return { threadIds: new Set((0, l.Z)(n.threadIds).concat([e])) };
        });
      }
      var x = (0, d.ZP)()(
        (0, m.tJ)(
          function (e) {
            return {
              isoDate: "",
              setCapTimeout: function (n) {
                e(function () {
                  return { isoDate: n };
                });
              },
              clearCapTimeout: function () {
                e(function () {
                  return { isoDate: "" };
                });
              },
            };
          },
          { name: "oai/apps/capExpiresAt" }
        )
      );
      function b() {
        var e = x(function (e) {
            return e.isoDate;
          }),
          n = x(function (e) {
            return e.clearCapTimeout;
          }),
          t = Date.now(),
          r = e && new Date(e).getTime();
        return e && r && r <= t ? (n(), null) : e ? h : null;
      }
      function y(e, n) {
        var t;
        return e
          ? n[0].id
          : (null ===
              (t = n.find(function (e) {
                var n;
                return (n = e.id).includes("text-davinci");
              })) || void 0 === t
              ? void 0
              : t.id) || n[0].id;
      }
      function C(e, n, t) {
        var a,
          l,
          d = (0, u.useRouter)(),
          m = d.query,
          h = n || decodeURIComponent(m[r.Model] || ""),
          g = (0, f.hz)(),
          v = p().threadIds,
          x = (0, c.useMemo)(
            function () {
              if (0 !== e.length) {
                var n,
                  r = v.has(t),
                  a =
                    null ===
                      (n = e.find(function (e) {
                        return e.id === h;
                      })) || void 0 === n
                      ? void 0
                      : n.id,
                  o = (!r && a) || y(g.has("priority_driven_models_list"), e);
                return e.find(function (e) {
                  return e.id === o;
                });
              }
            },
            [e, g, h, t, v]
          ),
          b = parseFloat(m[r.Temperature] || "1"),
          C = (0, c.useCallback)(
            function (e, n) {
              d.replace(
                {
                  pathname: d.basePath,
                  query: (0, s.Z)(
                    (0, i.Z)({}, m),
                    (0, o.Z)({}, e, encodeURIComponent(n))
                  ),
                },
                void 0,
                { shallow: !0 }
              );
            },
            [m, d]
          );
        return (0, c.useMemo)(
          function () {
            return {
              temperature: b,
              modelBackend: (null == x ? void 0 : x.id) || "",
              onChangeModelSetting: C,
            };
          },
          [C, null == x ? void 0 : x.id, b]
        );
      }
    },
    37678: function (e, n, t) {
      "use strict";
      t.d(n, {
        Op: function () {
          return f;
        },
        Qd: function () {
          return c;
        },
        T$: function () {
          return d;
        },
        s8: function () {
          return m;
        },
      });
      var r = t(35250),
        a = t(1454),
        o = t(31425),
        i = t(79876),
        s = t(77064),
        l = "&#8203;",
        u = "oaicite:";
      function c(e, n) {
        if (!n) return e;
        for (var t = n.length - 1; t >= 0; t--) {
          var r = n[t],
            a = r.start_ix,
            o = r.end_ix,
            i = r.metadata,
            s = r.invalid_reason,
            c = { index: t };
          i ? (c.metadata = i) : s && (c.invalid_reason = s),
            (e =
              e.slice(0, a) +
              ""
                .concat(l, "`")
                .concat(u)
                .concat(JSON.stringify(c), "`")
                .concat(l) +
              e.slice(o));
        }
        return e;
      }
      function d(e) {
        if (!e.startsWith(u)) return null;
        try {
          return JSON.parse(e.slice(u.length));
        } catch (n) {
          return { index: -1 };
        }
      }
      function m(e) {
        var n,
          t = e.displayInfo;
        return (0, r.jsx)(s.$, {
          label: (0, r.jsx)(f, {
            pageInfo: t.metadata,
            invalidReason: t.invalid_reason,
          }),
          placement: "top",
          offset: [0, 3],
          leaveDelay: 150,
          withArrow: !1,
          interactive: !0,
          wide: !0,
          children: (0, r.jsx)("a", {
            href: null === (n = t.metadata) || void 0 === n ? void 0 : n.url,
            target: "_blank",
            rel: "noreferrer",
            className: "text-green-600 !no-underline",
            children: (0, r.jsx)("sup", { children: t.index + 1 }),
          }),
        });
      }
      function f(e) {
        var n = e.pageInfo,
          t = e.invalidReason;
        return (0, r.jsx)("a", {
          href: null == n ? void 0 : n.url,
          target: "_blank",
          rel: "noreferrer",
          className: "!no-underline",
          children: (0, r.jsx)(s.u, {
            children: n
              ? (0, r.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, r.jsx)("div", {
                      className: "flex shrink-0 items-center justify-center",
                      children: (0, r.jsx)(o.Z, { url: n.url }),
                    }),
                    (0, r.jsx)("div", {
                      className: "max-w-xs truncate text-xs",
                      children: n.title,
                    }),
                    (0, r.jsx)("div", {
                      className: "shrink-0",
                      children: (0, r.jsx)(i.ZP, {
                        icon: a.AlO,
                        size: "xsmall",
                      }),
                    }),
                  ],
                })
              : (0, r.jsx)("div", {
                  className: "text-red-500",
                  children: t || "Invalid citation",
                }),
          }),
        });
      }
    },
    11699: function (e, n, t) {
      "use strict";
      t.d(n, {
        _G: function () {
          return r;
        },
        dD: function () {
          return c;
        },
        dQ: function () {
          return m;
        },
        lj: function () {
          return d;
        },
      });
      var r,
        a,
        o,
        i = t(33861),
        s = t(70079);
      ((o = r || (r = {})).Small = "small"),
        (o.Medium = "medium"),
        (o.Large = "large"),
        (o.XLarge = "xlarge"),
        (o.Full = "full");
      var l =
        ((a = {}),
        (0, i.Z)(a, r.Small, 640),
        (0, i.Z)(a, r.Medium, 768),
        (0, i.Z)(a, r.Large, 1024),
        (0, i.Z)(a, r.XLarge, 1280),
        (0, i.Z)(a, r.Full, 1536),
        a);
      function u(e) {
        var n = function () {
            o(t(e));
          },
          t = function (e) {
            return window.matchMedia(e).matches;
          },
          r = (0, s.useState)(t(e)),
          a = r[0],
          o = r[1];
        return (
          (0, s.useEffect)(
            function () {
              var t = window.matchMedia(e);
              return (
                n(),
                t.addListener
                  ? t.addListener(n)
                  : t.addEventListener("change", n),
                function () {
                  t.removeListener
                    ? t.removeListener(n)
                    : t.removeEventListener("change", n);
                }
              );
            },
            [e]
          ),
          a
        );
      }
      function c() {
        return u("(max-width: ".concat(l[r.Small], "px)"));
      }
      function d() {
        return u("(max-width: ".concat(l[r.Medium], "px)"));
      }
      function m() {
        var e = c(),
          n = d(),
          t = u("(max-width: ".concat(l[r.Large], "px)")),
          a = u("(max-width: ".concat(l[r.XLarge], "px)"));
        return e ? r.Small : n ? r.Medium : t ? r.Large : a ? r.XLarge : r.Full;
      }
    },
    80836: function (e, n, t) {
      "use strict";
      t.d(n, {
        Cv: function () {
          return k;
        },
        uV: function () {
          return C;
        },
      });
      var r,
        a,
        o = t(35025),
        i = t(33468),
        s = t(37495),
        l = t(75106),
        u = t(43905),
        c = t(33861),
        d = t(31501),
        m = t(89874),
        f = t(64705),
        h = t(25769),
        g = t(84251),
        p = t.n(g),
        v = t(8844),
        x = t(36613),
        b = t(68619),
        y =
          ((r = {}),
          (0, c.Z)(r, b.Jq.Root, b.uU.Unknown),
          (0, c.Z)(r, b.Jq.Prompt, b.uU.User),
          (0, c.Z)(r, b.Jq.Completion, b.uU.Assistant),
          (0, c.Z)(r, b.Jq.System, b.uU.System),
          r),
        C =
          ((a = {}),
          (0, c.Z)(a, b.uU.Unknown, b.Jq.Root),
          (0, c.Z)(a, b.uU.System, b.Jq.System),
          (0, c.Z)(a, b.uU.User, b.Jq.Prompt),
          (0, c.Z)(a, b.uU.Assistant, b.Jq.Completion),
          (0, c.Z)(a, b.uU.Critic, b.Jq.Completion),
          (0, c.Z)(a, b.uU.Tool, b.Jq.Completion),
          a),
        w = new WeakMap(),
        j = new WeakMap(),
        k = (function () {
          function e(n) {
            (0, o.Z)(this, e),
              (0, s.Z)(this, w, { writable: !0, value: void 0 }),
              (0, s.Z)(this, j, { writable: !0, value: void 0 }),
              (0, l.Z)(this, w, n || e.createTree());
            var t = Object.values((0, i.Z)(this, w)).find(function (e) {
              return e.type === b.Jq.Root;
            });
            (0, l.Z)(this, j, (null == t ? void 0 : t.id) || "root");
          }
          var n = e.prototype;
          return (
            (n.getNode = function (e) {
              return (0, i.Z)(this, w)[e];
            }),
            (n.getMessage = function (e) {
              return (0, i.Z)(this, w)[e].message;
            }),
            (n.getMessageId = function (e) {
              return (0, i.Z)(this, w)[e].message.id;
            }),
            (n.getMetadata = function (e) {
              return (0, i.Z)(this, w)[e].metadata;
            }),
            (n.getLeafFromNode = function (e) {
              for (var n = (0, i.Z)(this, w)[e]; ; ) {
                if (0 === n.children.length) return n;
                n = (0, i.Z)(this, w)[n.children.values().next().value];
              }
            }),
            (n.getParent = function (e) {
              var n = (0, i.Z)(this, w)[e].parentId;
              return (0, i.Z)(this, w)[n];
            }),
            (n.getParentId = function (e) {
              var n;
              return (
                (null === (n = this.getParent(e)) || void 0 === n
                  ? void 0
                  : n.id) || "root"
              );
            }),
            (n.getBranchFromLeaf = function (e) {
              for (
                var n = [], t = (0, i.Z)(this, w)[e];
                n.push(t), "root" !== t.type;

              )
                t = (0, i.Z)(this, w)[t.parentId];
              return n.reverse();
            }),
            (n.getChildrenFromNode = function (e) {
              var n = this,
                t = (0, i.Z)(this, w)[e];
              return t
                ? Array.from(t.children).map(function (e) {
                    return (0, i.Z)(n, w)[e];
                  })
                : [];
            }),
            (n.getFirstPrompt = function () {
              for (var e, n, t = this.getNode((0, i.Z)(this, j)); ; ) {
                if (!t) return;
                if (
                  t.type === b.Jq.Prompt ||
                  (t.type === b.Jq.System &&
                    (null === (e = t.message.metadata) || void 0 === e
                      ? void 0
                      : e.upload_filename))
                )
                  return t;
                t = (0, i.Z)(this, w)[
                  null === (n = t.children) || void 0 === n ? void 0 : n[0]
                ];
              }
            }),
            (n.isMessageIncomplete = function (n) {
              var t = this.getMessage(n);
              return e.getIsIncompleteFromMessage(t);
            }),
            (n.addNodeToEnd = function (e, n) {
              if (!(0, i.Z)(this, w)[e]) return (0, c.Z)({}, n.id, n);
              (0, l.Z)(
                this,
                w,
                p()(
                  (0, i.Z)(this, w),
                  (0, c.Z)({ $merge: (0, c.Z)({}, n.id, n) }, e, {
                    children: {
                      $apply: function (e) {
                        return Array.from(new Set((0, f.Z)(e).concat([n.id])));
                      },
                    },
                  })
                )
              );
            }),
            (n.appendSystemMessageToRoot = function (e) {
              var n,
                t,
                r =
                  null === (n = this.getFirstPrompt()) || void 0 === n
                    ? void 0
                    : n.parentId;
              if (r) {
                var a = this.getNode(r),
                  o = this.getNode(a.children[0]),
                  s = {
                    id: e.id,
                    children: a.children,
                    parentId: a.id,
                    message: e,
                  };
                (0, l.Z)(
                  this,
                  w,
                  p()(
                    (0, i.Z)(this, w),
                    ((t = { $merge: (0, c.Z)({}, s.id, s) }),
                    (0, c.Z)(t, a.id, { children: { $set: [s.id] } }),
                    (0, c.Z)(t, o.id, { parentId: { $set: s.id } }),
                    t)
                  )
                );
              }
            }),
            (n.addNode = function (e, n, t, r, a) {
              var o =
                  "string" == typeof n
                    ? {
                        id: (0, v.Z)(),
                        author: { role: y[r] },
                        role: y[r],
                        content: { content_type: "text", parts: [n] },
                      }
                    : n,
                i = (0, d.Z)(
                  { id: e, children: [], parentId: t, type: r, message: o },
                  a ? { metadata: a } : {}
                );
              this.addNodeToEnd(t, i);
            }),
            (n.updateNode = function (e, n) {
              (0, l.Z)(this, w, p()((0, i.Z)(this, w), (0, c.Z)({}, e, n)));
            }),
            (n.updateNodeMessage = function (e, n) {
              (0, l.Z)(
                this,
                w,
                p()(
                  (0, i.Z)(this, w),
                  (0, c.Z)({}, e, { message: { $set: n } })
                )
              );
            }),
            (n.updateNodeText = function (e, n) {
              (0, l.Z)(
                this,
                w,
                p()(
                  (0, i.Z)(this, w),
                  (0, c.Z)({}, e, {
                    message: { content: { parts: { $set: [n] } } },
                  })
                )
              );
            }),
            (n.deleteNode = function (e) {
              var n = (0, i.Z)(this, w),
                t = n[e],
                r = (0, m.Z)(n, [e].map(h.Z)),
                a = t.parentId;
              (0, l.Z)(
                this,
                w,
                p()(
                  r,
                  (0, c.Z)({}, a, {
                    children: {
                      $apply: function (n) {
                        return n.filter(function (n) {
                          return n !== e;
                        });
                      },
                    },
                  })
                )
              );
            }),
            (n.getTextFromNode = function (n) {
              return e.getTextFromMessage(this.getMessage(n));
            }),
            (n.getIsBlockedFromNode = function (e) {
              var n,
                t,
                r = this.getNode(e);
              return (
                r &&
                (null === (n = r.metadata) || void 0 === n
                  ? void 0
                  : n.errCode) === x.Dd &&
                (null === (t = r.metadata) || void 0 === t
                  ? void 0
                  : t.errType) === "danger"
              );
            }),
            (n.getTextFromThread = function (n) {
              return this.getBranchFromLeaf(n)
                .filter(function (e) {
                  return e.type !== b.Jq.Root && e.type !== b.Jq.System;
                })
                .map(function (n) {
                  return e.getTextFromMessage(n.message);
                })
                .join("\n\n");
            }),
            (n.getTextFromLastNTurns = function (n, t) {
              var r =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                a = function (n) {
                  var t = n.message,
                    r = e.getMessageType(t),
                    a = n.message.author.role === b.uU.System,
                    o = n.message.author.role === b.uU.Tool;
                  return (
                    a ||
                    (o &&
                      !(
                        "code" === r ||
                        "execution_output" === r ||
                        "system_error" === r
                      ))
                  );
                };
              return this.getConversationTurns(n, a)
                .slice(-t)
                .map(function (n) {
                  var t = n.messages
                    .map(function (n) {
                      return e.getTextFromMessage(n.message);
                    })
                    .filter(function (e) {
                      return "" !== e;
                    })
                    .join("\n");
                  return r ? "[".concat(n.role, "]\n").concat(t) : t;
                })
                .join("\n");
            }),
            (n.getConversationTurns = function (n, t) {
              var r = this,
                a = [];
              return (
                this.getBranchFromLeaf(n).forEach(function (n) {
                  var o = n.id,
                    s = n.parentId,
                    l = n.message,
                    u = n.metadata;
                  if (null == t || !t(n)) {
                    var c = a[a.length - 1];
                    (null == c ? void 0 : c.role) === e.getRoleFromMessage(l) ||
                    e.getRoleFromMessage(l) === b.uU.Tool
                      ? a[a.length - 1].messages.push(
                          (0, d.Z)({ nodeId: o, parentId: s, message: l }, u)
                        )
                      : a.push({
                          role: e.getRoleFromMessage(l),
                          messages: [
                            (0, d.Z)({ nodeId: o, parentId: s, message: l }, u),
                          ],
                          variantIds: s
                            ? Array.from((0, i.Z)(r, w)[s].children)
                            : [o],
                        });
                  }
                }),
                a
              );
            }),
            (n.getLastValidNode = function (e) {
              for (
                var n, t = this.getNode(e);
                t &&
                t &&
                (null === (n = t.metadata) || void 0 === n ? void 0 : n.err);

              )
                t = this.getNode(t.parentId);
              return t;
            }),
            (n.getParentPromptNode = function (e) {
              for (
                var n, t, r = this.getNode(e);
                r &&
                r &&
                (null === (n = r.message) || void 0 === n
                  ? void 0
                  : null === (t = n.author) || void 0 === t
                  ? void 0
                  : t.role) !== b.uU.User;

              )
                r = this.getNode(r.parentId);
              return r;
            }),
            (e.createTree = function () {
              return {
                root: {
                  id: "root",
                  children: [],
                  parentId: "",
                  type: b.Jq.Root,
                  message: e.createRootMessage(),
                },
              };
            }),
            (e.createRootMessage = function () {
              return {
                id: (0, v.Z)(),
                author: { role: y[b.Jq.Root] },
                role: y[b.Jq.Root],
                content: { content_type: "text", parts: [] },
              };
            }),
            (e.getIsIncompleteFromMessage = function (e) {
              var n, t;
              return (
                (null === (n = e.metadata) || void 0 === n
                  ? void 0
                  : null === (t = n.finish_details) || void 0 === t
                  ? void 0
                  : t.type) === "max_tokens"
              );
            }),
            (e.getWasInterruptedFromMessage = function (e) {
              var n, t;
              return (
                (null === (n = e.metadata) || void 0 === n
                  ? void 0
                  : null === (t = n.finish_details) || void 0 === t
                  ? void 0
                  : t.type) === "interrupted"
              );
            }),
            (e.getIsContinuedFromMessage = function (e) {
              var n;
              return (
                (null === (n = e.metadata) || void 0 === n
                  ? void 0
                  : n.message_type) === "continue"
              );
            }),
            (e.getModelFromMessage = function (e) {
              var n;
              return null === (n = e.metadata) || void 0 === n
                ? void 0
                : n.model_slug;
            }),
            (e.getTextFromMessage = function (e) {
              if (e.content.content_type.startsWith("tether_b"))
                return e.content.text;
              switch (e.content.content_type) {
                case "text":
                  return e.content.parts.join("");
                case "code":
                case "execution_output":
                case "system_error":
                  return e.content.text;
                case "system_message":
                  var n = e.content.text,
                    t = !0,
                    r = !1,
                    a = void 0;
                  try {
                    for (
                      var o,
                        i = Object.values(e.content.tools_section)[
                          Symbol.iterator
                        ]();
                      !(t = (o = i.next()).done);
                      t = !0
                    ) {
                      var s = o.value;
                      n += "\n\n".concat(s);
                    }
                  } catch (l) {
                    (r = !0), (a = l);
                  } finally {
                    try {
                      t || null == i.return || i.return();
                    } finally {
                      if (r) throw a;
                    }
                  }
                  return n;
                default:
                  return "";
              }
            }),
            (e.getMessageType = function (e) {
              return e.content.content_type;
            }),
            (e.getIsTextTypeFromMessage = function (n) {
              return "text" === e.getMessageType(n);
            }),
            (e.getRequestIdFromConversationTurn = function (e) {
              var n = e.messages[e.messages.length - 1];
              return this.getIsContinuedFromMessage(n.message)
                ? n.nodeId
                : e.messages[0].nodeId;
            }),
            (e.getRoleFromMessage = function (e) {
              var n;
              return (
                (null === (n = e.author) || void 0 === n ? void 0 : n.role) ||
                e.role
              );
            }),
            (e.getNameFromMessage = function (e) {
              var n, t;
              return (
                (null === (n = e.author) || void 0 === n ? void 0 : n.name) ||
                (null === (t = e.author) || void 0 === t ? void 0 : t.role) ||
                e.role
              );
            }),
            (e.getRecipientFromMessage = function (e) {
              return e.recipient || "";
            }),
            (0, u.Z)(e, [
              {
                key: "isFirstCompletion",
                get: function () {
                  var e = this.getFirstPrompt();
                  if (e) {
                    var n = (0, i.Z)(this, w)[e.children[0]];
                    if (n && 0 === n.children.length) return !0;
                  }
                  return !1;
                },
              },
            ]),
            e
          );
        })();
    },
    60612: function (e, n, t) {
      "use strict";
      var r = t(70079);
      n.Z = function () {
        var e = (0, r.useRef)(!1);
        return (
          (0, r.useEffect)(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1;
              }
            );
          }, []),
          (0, r.useCallback)(function () {
            return e.current;
          }, [])
        );
      };
    },
    62676: function (e, n, t) {
      "use strict";
      t.d(n, {
        m: function () {
          return o;
        },
      });
      var r = t(35025);
      t(70079);
      var a = window.localStorage,
        o = (function () {
          function e() {
            (0, r.Z)(this, e);
          }
          return (
            (e.setItem = function (e, n) {
              if (!a) throw Error("You cannot set localStorage server-side");
              a.setItem(e, JSON.stringify(n));
            }),
            (e.getItem = function (e) {
              if (a) {
                var n = a.getItem(e);
                return "string" == typeof n ? JSON.parse(n) : n;
              }
              return null;
            }),
            (e.removeItem = function (e) {
              if (a) return a.removeItem(e);
            }),
            e
          );
        })();
    },
    36613: function (e, n, t) {
      "use strict";
      t.d(n, {
        Dd: function () {
          return i;
        },
        Mf: function () {
          return s;
        },
        _I: function () {
          return u;
        },
        sK: function () {
          return l;
        },
      });
      var r = t(95182),
        a = t.n(r),
        o = t(33264),
        i = "content_policy",
        s = { errType: "warning", errCode: i },
        l = {
          err: "Contents may violate our content policy",
          errType: "danger",
          errCode: i,
        };
      function u(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          t = arguments.length > 2 ? arguments[2] : void 0,
          r = arguments.length > 3 ? arguments[3] : void 0,
          i = a()(e.length, 0, 4e3),
          s = a()(e.length - i, 0, e.length - 1),
          l = n ? e.substring(s, e.length) : e;
        return 0
          ? o.ZP.runModerationApi(l, t, r)
              .then(function (e) {
                var n, t;
                return {
                  isBlocked: Boolean(e.blocked),
                  isFlagged: Boolean(e.flagged),
                };
              })
              .catch(function (e) {
                return (
                  console.error(e), { isBlocked: !1, isFlagged: !1, error: e }
                );
              })
          : Promise.resolve({ isBlocked: !1, isFlagged: !1 });
      }
    },
  },
  function (e) {
    e.O(
      0,
      [798, 960, 786, 762, 424, 174, 360, 113, 264, 14, 774, 888, 179],
      function () {
        return e((e.s = 49529));
      }
    ),
      (_N_E = e.O());
  },
]);
