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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n// components/Navbar.tsx\n\n\n\n\nfunction Navbar() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isLogged, setIsLogged] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    // Vérifie si l'utilisateur est connecté\n    const checkUser = ()=>{\n        if (true) return;\n        const user = localStorage.getItem(\"user\");\n        setIsLogged(!!user);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"Navbar.useEffect\": ()=>{\n            checkUser();\n            const onAuthChange = {\n                \"Navbar.useEffect.onAuthChange\": ()=>checkUser()\n            }[\"Navbar.useEffect.onAuthChange\"];\n            window.addEventListener(\"authChange\", onAuthChange);\n            return ({\n                \"Navbar.useEffect\": ()=>window.removeEventListener(\"authChange\", onAuthChange)\n            })[\"Navbar.useEffect\"];\n        }\n    }[\"Navbar.useEffect\"], [\n        router.pathname\n    ]);\n    const handleLogout = ()=>{\n        localStorage.removeItem(\"user\");\n        window.dispatchEvent(new Event(\"authChange\"));\n        router.push(\"/login\");\n    };\n    const guestLinks = [\n        {\n            href: \"/\",\n            label: \"Accueil\"\n        },\n        {\n            href: \"/jobs\",\n            label: \"Offres\"\n        },\n        {\n            href: \"/register\",\n            label: \"S'inscrire\"\n        },\n        {\n            href: \"/login\",\n            label: \"Connexion\"\n        }\n    ];\n    const authLinks = [\n        {\n            href: \"/\",\n            label: \"Accueil\"\n        },\n        {\n            href: \"/jobs\",\n            label: \"Offres\"\n        },\n        {\n            href: \"/profile\",\n            label: \"Profil\"\n        }\n    ];\n    const links = isLogged ? authLinks : guestLinks;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bg-primary text-white shadow-md\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between h-16 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        className: \"text-2xl font-bold hover:text-yellow transition\",\n                        children: \"JobPortal\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\portal\\\\job-portal\\\\frontend\\\\components\\\\NavBar.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden md:flex space-x-6 items-center\",\n                        children: [\n                            links.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: link.href,\n                                    className: `hover:text-yellow transition ${router.pathname === link.href ? \"underline\" : \"\"}`,\n                                    children: link.label\n                                }, link.href, false, {\n                                    fileName: \"D:\\\\portal\\\\job-portal\\\\frontend\\\\components\\\\NavBar.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, this)),\n                            isLogged && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleLogout,\n                                className: \"ml-4 hover:text-yellow\",\n                                children: \"D\\xe9connexion\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\portal\\\\job-portal\\\\frontend\\\\components\\\\NavBar.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\portal\\\\job-portal\\\\frontend\\\\components\\\\NavBar.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:hidden\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setIsLogged(!isLogged),\n                            className: \"text-2xl\",\n                            children: \"☰\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\portal\\\\job-portal\\\\frontend\\\\components\\\\NavBar.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\portal\\\\job-portal\\\\frontend\\\\components\\\\NavBar.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\portal\\\\job-portal\\\\frontend\\\\components\\\\NavBar.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\portal\\\\job-portal\\\\frontend\\\\components\\\\NavBar.tsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\portal\\\\job-portal\\\\frontend\\\\components\\\\NavBar.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvTmF2QmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx3QkFBd0I7O0FBQ0s7QUFDVztBQUNJO0FBRTdCLFNBQVNJO0lBQ3RCLE1BQU1DLFNBQVNKLHNEQUFTQTtJQUN4QixNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUM7SUFFekMsd0NBQXdDO0lBQ3hDLE1BQU1NLFlBQVk7UUFDaEIsSUFBSSxJQUE2QixFQUFFO1FBQ25DLE1BQU1DLE9BQU9DLGFBQWFDLE9BQU8sQ0FBQztRQUNsQ0osWUFBWSxDQUFDLENBQUNFO0lBQ2hCO0lBRUFOLGdEQUFTQTs0QkFBQztZQUNSSztZQUNBLE1BQU1JO2lEQUFlLElBQU1KOztZQUMzQkssT0FBT0MsZ0JBQWdCLENBQUMsY0FBY0Y7WUFDdEM7b0NBQU8sSUFBTUMsT0FBT0UsbUJBQW1CLENBQUMsY0FBY0g7O1FBQ3hEOzJCQUFHO1FBQUNQLE9BQU9XLFFBQVE7S0FBQztJQUVwQixNQUFNQyxlQUFlO1FBQ25CUCxhQUFhUSxVQUFVLENBQUM7UUFDeEJMLE9BQU9NLGFBQWEsQ0FBQyxJQUFJQyxNQUFNO1FBQy9CZixPQUFPZ0IsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxNQUFNQyxhQUFhO1FBQ2pCO1lBQUVDLE1BQU07WUFBS0MsT0FBTztRQUFVO1FBQzlCO1lBQUVELE1BQU07WUFBU0MsT0FBTztRQUFTO1FBQ2pDO1lBQUVELE1BQU07WUFBYUMsT0FBTztRQUFhO1FBQ3pDO1lBQUVELE1BQU07WUFBVUMsT0FBTztRQUFZO0tBQ3RDO0lBRUQsTUFBTUMsWUFBWTtRQUNoQjtZQUFFRixNQUFNO1lBQUtDLE9BQU87UUFBVTtRQUM5QjtZQUFFRCxNQUFNO1lBQVNDLE9BQU87UUFBUztRQUNqQztZQUFFRCxNQUFNO1lBQVlDLE9BQU87UUFBUztLQUNyQztJQUVELE1BQU1FLFFBQVFwQixXQUFXbUIsWUFBWUg7SUFFckMscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQUlELFdBQVU7c0JBQ2IsNEVBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQzVCLGtEQUFJQTt3QkFBQ3VCLE1BQUs7d0JBQUlLLFdBQVU7a0NBQWtEOzs7Ozs7a0NBSTNFLDhEQUFDQzt3QkFBSUQsV0FBVTs7NEJBQ1pGLE1BQU1JLEdBQUcsQ0FBQyxDQUFDQyxxQkFDViw4REFBQy9CLGtEQUFJQTtvQ0FFSHVCLE1BQU1RLEtBQUtSLElBQUk7b0NBQ2ZLLFdBQVcsQ0FBQyw2QkFBNkIsRUFBRXZCLE9BQU9XLFFBQVEsS0FBS2UsS0FBS1IsSUFBSSxHQUFHLGNBQWMsSUFBSTs4Q0FFNUZRLEtBQUtQLEtBQUs7bUNBSk5PLEtBQUtSLElBQUk7Ozs7OzRCQVFqQmpCLDBCQUNDLDhEQUFDMEI7Z0NBQU9DLFNBQVNoQjtnQ0FBY1csV0FBVTswQ0FBeUI7Ozs7Ozs7Ozs7OztrQ0FPdEUsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDSTs0QkFBT0MsU0FBUyxJQUFNMUIsWUFBWSxDQUFDRDs0QkFBV3NCLFdBQVU7c0NBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFoRiIsInNvdXJjZXMiOlsiRDpcXHBvcnRhbFxcam9iLXBvcnRhbFxcZnJvbnRlbmRcXGNvbXBvbmVudHNcXE5hdkJhci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9OYXZiYXIudHN4XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbaXNMb2dnZWQsIHNldElzTG9nZ2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8gVsOpcmlmaWUgc2kgbCd1dGlsaXNhdGV1ciBlc3QgY29ubmVjdMOpXHJcbiAgY29uc3QgY2hlY2tVc2VyID0gKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcclxuICAgIGNvbnN0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIik7XHJcbiAgICBzZXRJc0xvZ2dlZCghIXVzZXIpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjaGVja1VzZXIoKTtcclxuICAgIGNvbnN0IG9uQXV0aENoYW5nZSA9ICgpID0+IGNoZWNrVXNlcigpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJhdXRoQ2hhbmdlXCIsIG9uQXV0aENoYW5nZSk7XHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhdXRoQ2hhbmdlXCIsIG9uQXV0aENoYW5nZSk7XHJcbiAgfSwgW3JvdXRlci5wYXRobmFtZV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XHJcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJhdXRoQ2hhbmdlXCIpKTtcclxuICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGd1ZXN0TGlua3MgPSBbXHJcbiAgICB7IGhyZWY6IFwiL1wiLCBsYWJlbDogXCJBY2N1ZWlsXCIgfSxcclxuICAgIHsgaHJlZjogXCIvam9ic1wiLCBsYWJlbDogXCJPZmZyZXNcIiB9LFxyXG4gICAgeyBocmVmOiBcIi9yZWdpc3RlclwiLCBsYWJlbDogXCJTJ2luc2NyaXJlXCIgfSxcclxuICAgIHsgaHJlZjogXCIvbG9naW5cIiwgbGFiZWw6IFwiQ29ubmV4aW9uXCIgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBhdXRoTGlua3MgPSBbXHJcbiAgICB7IGhyZWY6IFwiL1wiLCBsYWJlbDogXCJBY2N1ZWlsXCIgfSxcclxuICAgIHsgaHJlZjogXCIvam9ic1wiLCBsYWJlbDogXCJPZmZyZXNcIiB9LFxyXG4gICAgeyBocmVmOiBcIi9wcm9maWxlXCIsIGxhYmVsOiBcIlByb2ZpbFwiIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgbGlua3MgPSBpc0xvZ2dlZCA/IGF1dGhMaW5rcyA6IGd1ZXN0TGlua3M7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cImJnLXByaW1hcnkgdGV4dC13aGl0ZSBzaGFkb3ctbWRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaC0xNiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIGhvdmVyOnRleHQteWVsbG93IHRyYW5zaXRpb25cIj5cclxuICAgICAgICAgICAgSm9iUG9ydGFsXHJcbiAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBzcGFjZS14LTYgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmspID0+IChcclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAga2V5PXtsaW5rLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICBocmVmPXtsaW5rLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bob3Zlcjp0ZXh0LXllbGxvdyB0cmFuc2l0aW9uICR7cm91dGVyLnBhdGhuYW1lID09PSBsaW5rLmhyZWYgPyBcInVuZGVybGluZVwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtsaW5rLmxhYmVsfVxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICB7aXNMb2dnZWQgJiYgKFxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9nb3V0fSBjbGFzc05hbWU9XCJtbC00IGhvdmVyOnRleHQteWVsbG93XCI+XHJcbiAgICAgICAgICAgICAgICBEw6ljb25uZXhpb25cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsvKiBNb2JpbGUgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmhpZGRlblwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzTG9nZ2VkKCFpc0xvZ2dlZCl9IGNsYXNzTmFtZT1cInRleHQtMnhsXCI+XHJcbiAgICAgICAgICAgICAg4piwXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTmF2YmFyIiwicm91dGVyIiwiaXNMb2dnZWQiLCJzZXRJc0xvZ2dlZCIsImNoZWNrVXNlciIsInVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwib25BdXRoQ2hhbmdlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwYXRobmFtZSIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJwdXNoIiwiZ3Vlc3RMaW5rcyIsImhyZWYiLCJsYWJlbCIsImF1dGhMaW5rcyIsImxpbmtzIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwibWFwIiwibGluayIsImJ1dHRvbiIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/NavBar.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavBar */ \"(pages-dir-node)/./components/NavBar.tsx\");\n// frontend/pages/_app.tsx\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\portal\\\\job-portal\\\\frontend\\\\pages\\\\_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            \"  \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\portal\\\\job-portal\\\\frontend\\\\pages\\\\_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDBCQUEwQjs7QUFDSztBQUVXO0FBRTNCLFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDOUQscUJBQ0U7OzBCQUNFLDhEQUFDSCwwREFBTUE7Ozs7O1lBQUc7MEJBQ1YsOERBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyJEOlxccG9ydGFsXFxqb2ItcG9ydGFsXFxmcm9udGVuZFxccGFnZXNcXF9hcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZyb250ZW5kL3BhZ2VzL19hcHAudHN4XHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdkJhcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOYXZiYXIgLz4gIHsvKiBOYXZiYXIgc2VyYSBzdXIgdG91dGVzIGxlcyBwYWdlcyAqL31cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTmF2YmFyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

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