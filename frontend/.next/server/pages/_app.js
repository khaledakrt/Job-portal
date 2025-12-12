/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./components/NavBar.tsx":
/*!*******************************!*\
  !*** ./components/NavBar.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n// components/Navbar.tsx\n\n\n\n\nfunction Navbar() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isLogged, setIsLogged] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // Pour le menu mobile\n    // Vérifie si l'utilisateur est connecté\n    const checkUser = ()=>{\n        if (true) return;\n        const user = localStorage.getItem(\"user\");\n        setIsLogged(!!user);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"Navbar.useEffect\": ()=>{\n            checkUser();\n            const onAuthChange = {\n                \"Navbar.useEffect.onAuthChange\": ()=>checkUser()\n            }[\"Navbar.useEffect.onAuthChange\"];\n            window.addEventListener(\"authChange\", onAuthChange);\n            return ({\n                \"Navbar.useEffect\": ()=>window.removeEventListener(\"authChange\", onAuthChange)\n            })[\"Navbar.useEffect\"];\n        }\n    }[\"Navbar.useEffect\"], [\n        router.pathname\n    ]);\n    const handleLogout = ()=>{\n        localStorage.removeItem(\"user\");\n        window.dispatchEvent(new Event(\"authChange\"));\n        router.push(\"/auth/login\"); // Redirection après logout\n    };\n    const guestLinks = [\n        {\n            href: \"/\",\n            label: \"Accueil\"\n        },\n        {\n            href: \"/jobs\",\n            label: \"Offres\"\n        },\n        {\n            href: \"/auth/register\",\n            label: \"S'inscrire\"\n        },\n        {\n            href: \"/auth/login\",\n            label: \"Connexion\"\n        }\n    ];\n    const authLinks = [\n        {\n            href: \"/\",\n            label: \"Accueil\"\n        },\n        {\n            href: \"/jobs\",\n            label: \"Offres\"\n        },\n        {\n            href: \"/candidate/profile\",\n            label: \"Profil\"\n        }\n    ];\n    const links = isLogged ? authLinks : guestLinks;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bg-primary text-white shadow-md\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between h-16 items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/\",\n                            className: \"text-2xl font-bold hover:text-yellow transition\",\n                            children: \"JobPortal\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Job-portal\\\\Job-portal\\\\frontend\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hidden md:flex space-x-6 items-center\",\n                            children: [\n                                links.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: link.href,\n                                        className: `hover:text-yellow transition ${router.pathname === link.href ? \"underline\" : \"\"}`,\n                                        children: link.label\n                                    }, link.href, false, {\n                                        fileName: \"D:\\\\Job-portal\\\\Job-portal\\\\frontend\\\\components\\\\NavBar.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, this)),\n                                isLogged && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleLogout,\n                                    className: \"ml-4 hover:text-yellow\",\n                                    children: \"D\\xe9connexion\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Job-portal\\\\Job-portal\\\\frontend\\\\components\\\\NavBar.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Job-portal\\\\Job-portal\\\\frontend\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"md:hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setIsOpen(!isOpen),\n                                className: \"text-2xl focus:outline-none\",\n                                children: \"☰\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Job-portal\\\\Job-portal\\\\frontend\\\\components\\\\NavBar.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Job-portal\\\\Job-portal\\\\frontend\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Job-portal\\\\Job-portal\\\\frontend\\\\components\\\\NavBar.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this),\n                isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"md:hidden flex flex-col space-y-2 mt-2 px-4 pb-4\",\n                    children: [\n                        links.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: link.href,\n                                className: \"hover:text-yellow\",\n                                onClick: ()=>setIsOpen(false),\n                                children: link.label\n                            }, link.href, false, {\n                                fileName: \"D:\\\\Job-portal\\\\Job-portal\\\\frontend\\\\components\\\\NavBar.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 15\n                            }, this)),\n                        isLogged && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleLogout,\n                            className: \"hover:text-yellow mt-2\",\n                            children: \"D\\xe9connexion\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Job-portal\\\\Job-portal\\\\frontend\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Job-portal\\\\Job-portal\\\\frontend\\\\components\\\\NavBar.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Job-portal\\\\Job-portal\\\\frontend\\\\components\\\\NavBar.tsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Job-portal\\\\Job-portal\\\\frontend\\\\components\\\\NavBar.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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XGNvbXBvbmVudHNcXE5hdkJhci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9OYXZiYXIudHN4XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbaXNMb2dnZWQsIHNldElzTG9nZ2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBQb3VyIGxlIG1lbnUgbW9iaWxlXHJcblxyXG4gIC8vIFbDqXJpZmllIHNpIGwndXRpbGlzYXRldXIgZXN0IGNvbm5lY3TDqVxyXG4gIGNvbnN0IGNoZWNrVXNlciA9ICgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XHJcbiAgICBjb25zdCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpO1xyXG4gICAgc2V0SXNMb2dnZWQoISF1c2VyKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY2hlY2tVc2VyKCk7XHJcbiAgICBjb25zdCBvbkF1dGhDaGFuZ2UgPSAoKSA9PiBjaGVja1VzZXIoKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYXV0aENoYW5nZVwiLCBvbkF1dGhDaGFuZ2UpO1xyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiYXV0aENoYW5nZVwiLCBvbkF1dGhDaGFuZ2UpO1xyXG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xyXG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiYXV0aENoYW5nZVwiKSk7XHJcbiAgICByb3V0ZXIucHVzaChcIi9hdXRoL2xvZ2luXCIpOyAvLyBSZWRpcmVjdGlvbiBhcHLDqHMgbG9nb3V0XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ3Vlc3RMaW5rcyA9IFtcclxuICAgIHsgaHJlZjogXCIvXCIsIGxhYmVsOiBcIkFjY3VlaWxcIiB9LFxyXG4gICAgeyBocmVmOiBcIi9qb2JzXCIsIGxhYmVsOiBcIk9mZnJlc1wiIH0sXHJcbiAgICB7IGhyZWY6IFwiL2F1dGgvcmVnaXN0ZXJcIiwgbGFiZWw6IFwiUydpbnNjcmlyZVwiIH0sXHJcbiAgICB7IGhyZWY6IFwiL2F1dGgvbG9naW5cIiwgbGFiZWw6IFwiQ29ubmV4aW9uXCIgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBhdXRoTGlua3MgPSBbXHJcbiAgICB7IGhyZWY6IFwiL1wiLCBsYWJlbDogXCJBY2N1ZWlsXCIgfSxcclxuICAgIHsgaHJlZjogXCIvam9ic1wiLCBsYWJlbDogXCJPZmZyZXNcIiB9LFxyXG4gICAgICB7IGhyZWY6IFwiL2NhbmRpZGF0ZS9wcm9maWxlXCIsIGxhYmVsOiBcIlByb2ZpbFwiIH0sIC8vIDwtLS0gaWNpXHJcblxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGxpbmtzID0gaXNMb2dnZWQgPyBhdXRoTGlua3MgOiBndWVzdExpbmtzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJiZy1wcmltYXJ5IHRleHQtd2hpdGUgc2hhZG93LW1kXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGgtMTYgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPVwiL1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBob3Zlcjp0ZXh0LXllbGxvdyB0cmFuc2l0aW9uXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgSm9iUG9ydGFsXHJcbiAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgey8qIERlc2t0b3AgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IHNwYWNlLXgtNiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAge2xpbmtzLm1hcCgobGluaykgPT4gKFxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBrZXk9e2xpbmsuaHJlZn1cclxuICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsuaHJlZn1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGhvdmVyOnRleHQteWVsbG93IHRyYW5zaXRpb24gJHtcclxuICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBsaW5rLmhyZWYgPyBcInVuZGVybGluZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2xpbmsubGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgIHtpc0xvZ2dlZCAmJiAoXHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9nb3V0fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtNCBob3Zlcjp0ZXh0LXllbGxvd1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRMOpY29ubmV4aW9uXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogTW9iaWxlICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoaWRkZW5cIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbighaXNPcGVuKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg4piwXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBNZW51IG1vYmlsZSAqL31cclxuICAgICAgICB7aXNPcGVuICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6aGlkZGVuIGZsZXggZmxleC1jb2wgc3BhY2UteS0yIG10LTIgcHgtNCBwYi00XCI+XHJcbiAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmspID0+IChcclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAga2V5PXtsaW5rLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICBocmVmPXtsaW5rLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXllbGxvd1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfSAvLyBGZXJtZXIgbGUgbWVudSBhdSBjbGljXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2xpbmsubGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAge2lzTG9nZ2VkICYmIChcclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXllbGxvdyBtdC0yXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBEw6ljb25uZXhpb25cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTmF2YmFyIiwicm91dGVyIiwiaXNMb2dnZWQiLCJzZXRJc0xvZ2dlZCIsImlzT3BlbiIsInNldElzT3BlbiIsImNoZWNrVXNlciIsInVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib25BdXRoQ2hhbmdlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwYXRobmFtZSIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJwdXNoIiwiZ3Vlc3RMaW5rcyIsImhyZWYiLCJsYWJlbCIsImF1dGhMaW5rcyIsImxpbmtzIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwibWFwIiwibGluayIsImJ1dHRvbiIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/NavBar.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavBar */ \"(pages-dir-node)/./components/NavBar.tsx\");\n// frontend/pages/_app.tsx\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Job-portal\\\\Job-portal\\\\frontend\\\\pages\\\\_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            \"  \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\Job-portal\\\\Job-portal\\\\frontend\\\\pages\\\\_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDBCQUEwQjs7QUFDSztBQUVXO0FBRTNCLFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDOUQscUJBQ0U7OzBCQUNFLDhEQUFDSCwwREFBTUE7Ozs7O1lBQUc7MEJBQ1YsOERBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyJEOlxcSm9iLXBvcnRhbFxcSm9iLXBvcnRhbFxcZnJvbnRlbmRcXHBhZ2VzXFxfYXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmcm9udGVuZC9wYWdlcy9fYXBwLnRzeFxyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmF2YmFyIC8+ICB7LyogTmF2YmFyIHNlcmEgc3VyIHRvdXRlcyBsZXMgcGFnZXMgKi99XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5hdmJhciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();