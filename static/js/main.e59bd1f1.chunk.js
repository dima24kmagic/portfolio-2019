(this.webpackJsonpPortfolio=this.webpackJsonpPortfolio||[]).push([[0],{119:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),i=t(26),a=t.n(i),c=t(17),l=t(15),u=t(1),s=t(3),p=t(4);function d(){var n=Object(s.a)(["\n  text-decoration: none;\n  color: ",";\n  font-size: 18px;\n  font-weight: 100;\n  transition: color ",";\n  padding-right: 8px;\n  padding-left: 5px;\n  &.active {\n    color: ",";\n    font-weight: 900;\n  }\n  &:hover {\n    color: ",";\n  }\n"]);return d=function(){return n},n}function f(){var n=Object(s.a)(["\n  margin-bottom: 20px;\n"]);return f=function(){return n},n}var m=Object(u.default)(p.a.span)(f()),h=Object(u.default)(c.b)(d(),(function(n){return n.theme.color.secondary}),(function(n){return n.theme.transitionSpeed}),(function(n){return n.theme.color.secondaryHover}),(function(n){return n.theme.color.secondaryHover}));var g=Object(u.withTheme)((function(n){var e=n.menuOptionTransitions,t=n.onToggleNav;return e.map((function(n){var e=n.item,r=n.key,i=n.props;return o.a.createElement(m,{style:i,key:r},o.a.createElement(h,{exact:!0,to:e.to,onClick:t},e.text))}))})),v=t(9),b=function(n,e){var t=Object(r.useRef)(),o=Object(p.d)({ref:t,from:{transform:"translate3d(100%, 0px, 0px)"},to:{transform:n?"translate3d(0%, 0px, 0px)":"translate3d(100%, 0px, 0px)"},config:{easing:v.c,duration:n?1400:800}}),i=Object(r.useRef)(),a=Object(p.f)(n,null,{ref:i,from:{opacity:0},enter:{opacity:1},leave:{opacity:0}}),c=Object(r.useRef)(),l=Object(p.f)(n?e:[],(function(n){return n.text}),{ref:c,from:{opacity:0,transform:"translate3d(20px, 0px ,0px)"},enter:{opacity:1,transform:"translate3d(0px, 0px ,0px)"},leave:{opacity:0,transform:"translate3d(20px, 0px ,0px)"},trail:n?100:120});return Object(p.c)(n?[i,t,c]:[c,t,i],n?[0,0,.7]:[0,.6,.6]),{wrapperStyleProps:o,menuOptionTransitions:l,bgBlurTransforms:a}},x=t(31);function w(){var n=Object(s.a)(["\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  z-index: 10000;\n  outline: none;\n  padding: 0;\n  & div {\n    width: 20px;\n  }\n  & span,\n  & span::after,\n  & span::before {\n    width: 20px;\n    height: 1px;\n    background-color: ",";\n    transition: bottom 0.3s ease-in,\n      transform 0.4s 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  & span::before {\n    top: -7px;\n  }\n  & span::after {\n    bottom: ",";\n  }\n"]);return w=function(){return n},n}function y(){var n=Object(s.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.8);\n  opacity: 0;\n  cursor: pointer;\n  outline: none;\n  z-index: 9998;\n"]);return y=function(){return n},n}function j(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  position: fixed;\n  top: 0px;\n  right: 0px;\n  padding: 64px 24px;\n  width: 50vw;\n  min-width: 200px;\n  max-width: 300px;\n  height: 100vh;\n  background: ",";\n  z-index: 9999;\n  transform: translate3d(100%, 0px, 0px);\n  transition: background ",";\n  will-change: transform;\n"]);return j=function(){return n},n}var O,E=Object(u.default)(p.a.div)(j(),(function(n){return n.theme.bg.secondary}),(function(n){return n.theme.transitionSpeed})),k=Object(u.default)(p.a.div)(y()),T=Object(u.default)(x.HamburgerSpin)(w(),(function(n){var e=n.isActive,t=n.theme,r=t.bg.secondary,o=t.color.secondary;return e?o:r}),(function(n){return n.isActive?"0px":"-7px"})),M=t(12),S=o.a.createContext({isOpen:!1,handleToggle:function(){}}),H=function(){var n=Object(r.useContext)(S);return{isOpen:n.isOpen,handleToggle:n.handleToggle}},R=function(n){var e=n.children,t=Object(r.useState)(!1),i=Object(M.a)(t,2),a=i[0],c=i[1];return o.a.createElement(S.Provider,{value:{isOpen:a,handleToggle:function(){c(!a)}}},e)};!function(n){n[n.DARK=0]="DARK",n[n.LIGHT=1]="LIGHT"}(O||(O={}));var C=o.a.createContext({mode:O.LIGHT,toggleMode:function(){}}),z=function(n){var e=n.children,t=(new Date).getHours(),i=Object(r.useState)(t>18||t<6?O.DARK:O.LIGHT),a=Object(M.a)(i,2),c=a[0],l=a[1];return o.a.createElement(C.Provider,{value:{mode:c,toggleMode:function(){l(c===O.LIGHT?O.DARK:O.LIGHT)}}},e)};function P(n,e,t){return n===O.LIGHT?e:t}var L=function(){return function(n){return{bg:{primary:P(n,"#f6f6f6","#020202"),secondary:P(n,"#020202","#a20051")},skillCard:{bg:P(n,"#020202","#f6f6f6"),color:P(n,"#f6f6f6","#020202")},dropdown:{shadow:P(n,"#e1e1e1","rgba(66,0,39,0.8)"),bg:P(n,"#f6f6f6","#a20051")},color:{white:"#fcfcfc",black:"#020202",primary:P(n,"#020202","#f6f6f6"),primaryHover:P(n,"#a0148b","#fff"),secondary:P(n,"#f6f6f6","#f6f6f6"),secondaryHover:P(n,"hotpink","#ff00a6"),accent:P(n,"#ba004e","hotpink"),accent2:"#FF75E9",themeColor:P(n,"#fff","#020202")},transitionSpeed:"0.5s"}}(Object(r.useContext)(C).mode)};var A=function(n){var e=n.menuOptions,t=H(),r=t.isOpen,i=t.handleToggle,a=L(),c=b(r,e),l=c.bgBlurTransforms,s=c.menuOptionTransitions,p=c.wrapperStyleProps;return o.a.createElement(u.ThemeProvider,{theme:a},o.a.createElement(T,{isActive:r,toggleButton:i}),l.map((function(n){var e=n.item,t=n.key,r=n.props;return e&&o.a.createElement(k,{key:t,onClick:i,style:r})})),o.a.createElement(E,{style:p},o.a.createElement(g,{onToggleNav:i,menuOptionTransitions:s})))};function D(){var n=Object(s.a)(["\n  width: 100%;\n  height: 100%;\n"]);return D=function(){return n},n}var F=Object(u.default)(p.a.div)(D());var B=function(n){var e=n.children,t=Object(l.f)(),r=Object(p.f)(t,(function(n){return n.pathname}),{delay:2e3,initial:{opacity:1,transform:"translate3d(0%,0,0)"},from:{opacity:0},enter:{opacity:1},leave:{opacity:0},config:p.b.slow});return o.a.createElement(o.a.Fragment,null,r.map((function(n){var t=n.item,r=n.props,i=n.key;return o.a.createElement(F,{key:i,style:r},o.a.createElement(l.c,{location:t},e))})))},I=t(32),W=function(n){var e=1,t=1,o=1,i=0,a=0,c=i/e*window.innerHeight-16,l=Object(p.d)((function(){return{transform:"translate3d(0px, 0px, 0px)",scrollY:0,onFrame:null,config:{}}})),u=Object(M.a)(l,2),s=u[0],d=u[1],f=Object(p.d)((function(){return{to:{transform:"translate3d(0px, ".concat(-1*c,"px, 0px)"),height:0,opacity:.4},onRest:function(){g({to:{opacity:0},delay:1500,config:{}})}}})),m=Object(M.a)(f,2),h=m[0],g=m[1],b=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;i=n,n<=0&&e>window.innerHeight?Math.abs(n)>e-window.innerHeight&&(i=-1*(e-window.innerHeight)):i=0,c=i/e*window.innerHeight-16,g({to:{transform:"translate3d(0px, ".concat(-1*c,"px, 0px)"),height:a,opacity:.4},config:r||function(n){return"opacity"===n?{duration:10,easing:v.b}:{}}}),d({transform:"translate3d(0px, ".concat(i,"px, 0px)"),scrollY:0,config:t,onFrame:null})},x=function(){if(n.current&&(e=n.current.clientHeight)>window.innerHeight){if(t=window.innerHeight/n.current.clientHeight,a=window.innerHeight*t-32,i<-1*(e-window.innerHeight)){var r=-1*(e-window.innerHeight);b(r,{duration:0})}g({to:{transform:"translate3d(0px, ".concat(-1*c,"px, 0px)"),height:a,opacity:.4},config:function(n){return"height"===n?{duration:0}:{}}})}};Object(r.useEffect)((function(){x()}),[n]);var w=function(){(e=n.current.clientHeight)>window.innerHeight&&x()};Object(r.useEffect)((function(){return window.addEventListener("resize",w),function(){return window.removeEventListener("resize",w)}}),[]);var y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};1===e&&n.current&&(e=n.current.clientHeight);var o=-1*t;o<=0&&e>window.innerHeight?Math.abs(o)>e-window.innerHeight&&(o=-1*(e-window.innerHeight)):o=0,c=o/e*window.innerHeight-16,g({to:{transform:"translate3d(0px, ".concat(-1*c,"px, 0px)"),height:a,opacity:.4},config:function(n){return"opacity"===n?{duration:10,easing:v.b}:"transform"===n?r:{}}}),d({transform:"translate3d(0px, ".concat(o,"px, 0px)"),scrollY:o,config:r,onFrame:function(){}}),i=o},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n.current&&d({reset:!0,scrollY:e,from:{scrollY:n.current.scrollTop},onFrame:function(e){var t=e.scrollY;n.current.scroll({top:t,behavior:"auto"})},config:t})};return{handleMouseWheel:function(n){var e=i-n.deltaY;b(e)},scrollProps:s,handleScrollbarDrag:function(n){b(o+n)},handleScrollbarMouseUp:function(){o=i},handleScrollbarMouseDown:function(){o=i},scrollbarStyles:h,scrollbarHeight:a,scrollToExactPosition:y,scrollToRef:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(n.current){var r=n.current.getBoundingClientRect().top+e-i;y(r,t)}},scrollToEventTarget:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(n.currentTarget){var r=n.currentTarget.getBoundingClientRect().top+e-i;y(r,t)}},scrollToEventTargetMobile:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.currentTarget){var o=e.currentTarget.getBoundingClientRect().top+t+n.current.scrollTop;j(o,r)}},scrollToExactPositionMobile:j,scrollToRefMobile:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.current){var o=e.current.getBoundingClientRect().top+t+n.current.scrollTop;j(o,r)}}}},Y=function(n,e,t,r,o){var i=0,a=function(e){var r=(i-e.clientY+1)*(n.current.clientHeight/window.innerHeight);t(r)},c=function(){e.current&&(e.current.style.opacity="0.4",e.current.style.width="6px",r(),document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",a))};return function(n){e.current&&(i=n.clientY+1,e.current.style.opacity="0.8",e.current.style.width="10px",o(),document.addEventListener("mousemove",a),document.addEventListener("mouseup",c))}},G=function(){var n,e=!1;return n=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(n)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substr(0,4)))&&(e=!0),e};function J(){var n=Object(s.a)(["\n  position: fixed;\n  top: 0px;\n  right: 5px;\n  width: 6px;\n  height: ",";\n  background: ",";\n  opacity: 0.4;\n  border-radius: 8px;\n  z-index: 2;\n  transition: opacity 0.25s, width 0.25s,\n    background ",";\n  @media (hover: none) and (pointer: coarse) {\n    display: none;\n  }\n"]);return J=function(){return n},n}function N(){var n=Object(s.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100vh;\n  width: 20px;\n  z-index: 99;\n  &:hover {\n    & span {\n      width: 10px !important;\n      opacity: 0.5 !important;\n    }\n  }\n  display: ",";\n"]);return N=function(){return n},n}function _(){var n=Object(s.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  transform: translate3d(0px, 0px, 0px);\n  overflow: ",";\n  height: ",";\n  will-change: transform;\n"]);return _=function(){return n},n}var q=Object(u.default)(p.a.div)(_(),(function(n){return n.isMobile?"auto":"hidden"}),(function(n){return n.isMobile?"100%":"auto"})),K=Object(u.default)("div")(N(),(function(n){return n.isMobile?"none":"auto"})),U=Object(u.default)(p.a.span)(J(),(function(n){var e=n.height;return"".concat(e,"px")}),(function(n){return n.theme.color.primary}),(function(n){return n.theme.transitionSpeed}));var V=function(n){var e=n.children,t=n.scrollBarRef,r=n.handleMouseDown,i=n.scrollbarHeight,a=n.scrollbarStyles,c=n.scrollWrapperRef,l=n.handleMouseWheel,s=n.scrollProps,p=L(),d=G();return o.a.createElement(u.ThemeProvider,{theme:p},o.a.createElement(K,{isMobile:d,onMouseDown:r},o.a.createElement(U,{ref:t,onMouseDown:r,height:i,style:a})),o.a.createElement(q,{isMobile:d,ref:c,onWheel:l,style:s},e))},X=o.a.createContext({scroll:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&arguments[1]},scrollWrapperRef:null,scrollToRef:function(n,e,t){},scrollToEventTarget:function(n,e,t){},scrollToRefMobile:function(n,e,t){},scrollToExactPositionMobile:function(n,e){},scrollToEventTargetMobile:function(n,e,t){}}),Q=function(n){var e=n.children,t=Object(I.a)(n,["children"]),i=Object(r.useRef)(null),a=Object(r.useRef)(null),c=W(i),l=c.handleMouseWheel,u=c.scrollProps,s=c.handleScrollbarDrag,p=c.scrollbarHeight,d=c.scrollbarStyles,f=c.handleScrollbarMouseUp,m=c.handleScrollbarMouseDown,h=c.scrollToExactPosition,g=c.scrollToRef,v=c.scrollToEventTarget,b=c.scrollToRefMobile,x=c.scrollToExactPositionMobile,w=c.scrollToEventTargetMobile,y=Y(i,a,s,f,m);return o.a.createElement(X.Provider,{value:{scroll:h,scrollWrapperRef:i,scrollToRef:g,scrollToEventTarget:v,scrollToRefMobile:b,scrollToExactPositionMobile:x,scrollToEventTargetMobile:w}},o.a.createElement(V,Object.assign({scrollBarRef:a,handleMouseDown:y,scrollbarHeight:p,scrollbarStyles:d,scrollWrapperRef:i,handleMouseWheel:l,scrollProps:u},t),e))};function Z(){var n=Object(s.a)(["\n  position: absolute;\n  bottom: 120px;\n  left: 50%;\n  transform: translateX(-50%);\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  cursor: pointer;\n  transition: color ",";\n  @media (min-width: 480px) {\n    bottom: 80px;\n  }\n"]);return Z=function(){return n},n}function $(){var n=Object(s.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  background: ",";\n  transition: background-color\n    ",";\n"]);return $=function(){return n},n}function nn(){var n=Object(s.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content:center;\n  width: 100%;\n  min-height: 100vh;\n  background-size: cover;\n  background-position: center;\n  backface-visibility: hidden;\n\n  padding: 64px 15px 0 15px;\n  @media (min-width: 375px) {\n    padding: 64px 32px 0 32px;\n  }\n  @media (min-width: 480px) {\n    padding: 64px 32px 0 32px;\n  }\n  @media (min-width: 900px) {\n    padding: 80px 80px 0 80px;\n  }\n  @media (min-width: 1280px) {\n    padding: 128px 128px 0 128px;\n  }\n"]);return nn=function(){return n},n}var en=Object(u.default)("div")(nn()),tn=Object(u.default)("div")($(),(function(n){return n.theme.bg.primary}),(function(n){return n.theme.transitionSpeed})),rn=Object(u.default)(p.a.div)(Z(),(function(n){return n.theme.color.primary}),(function(n){return n.theme.color.secondaryHover}),(function(n){return n.theme.transitionSpeed}));function on(){var n=Object(s.a)(["\n  font-weight: 900;\n  font-family: 'Chivo', sans-serif;\n  color: ",";\n  transition: color ",";\n  text-shadow: 1px 1px 0px red, -1px -1px 0px hotpink;\n  margin-bottom: 15px;\n\n  font-size: 42px;\n  @media (min-width: 375px) {\n    font-size: 54px;\n  }\n  @media (min-width: 450px) {\n    font-size: 54px;\n    letter-spacing: 3px;\n    line-height: 54px;\n    text-shadow: 3px 3px 0px red, -3px -3px 0px hotpink;\n  }\n  @media (min-width: 650px) {\n    font-size: 92px;\n    letter-spacing: 3px;\n    line-height: 86px;\n  }\n  @media (min-width: 1200px) {\n    font-size: 140px;\n    letter-spacing: 3px;\n    line-height: 118px;\n  }\n"]);return on=function(){return n},n}function an(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  height: auto;\n  overflow: hidden;\n"]);return an=function(){return n},n}var cn=Object(u.default)("div")(an()),ln=Object(u.default)(p.a.h1)(on(),(function(n){return n.theme.color.primary}),(function(n){return n.theme.transitionSpeed})),un=function(n){var e=Object(p.e)(n.length,{from:{opacity:0,transform:"translate3d(0px, 100%, 0px)"},to:{opacity:1,transform:"translate3d(0px, 0%, 0px)"},config:{duration:2e3,easing:v.c}});return{renderName:function(){return e.map((function(e,t){return o.a.createElement(cn,{key:n[t]},o.a.createElement(ln,{style:e},n[t]))}))}}};function sn(){var n=Object(s.a)(["\n  width: 100%;\n  margin-bottom: 280px;\n  @media (min-width: 650px) {\n    margin-bottom: 300px;\n  }\n"]);return sn=function(){return n},n}var pn=Object(u.default)("div")(sn());var dn=Object(u.withTheme)((function(){var n=un(["Frontend-Dev","Dima Baranov"]).renderName;return o.a.createElement(pn,null,n())})),fn=t(33),mn=t.n(fn);var hn=function(n){var e=n.onReadMore,t=Object(p.d)({delay:1600,from:{opacity:0,transform:"translate3d(-80%, 0px, 0px)"},to:{opacity:1,transform:"translate3d(-50%, 0px, 0px)"},config:{duration:1900,easing:v.d}});return o.a.createElement(en,null,o.a.createElement(tn,{src:mn.a}),o.a.createElement(dn,null),o.a.createElement(rn,{onClick:e,style:t},"Read More"))};function gn(){var n=Object(s.a)(["\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  flex-direction: column;\n  border-radius: 8px;\n  width: 250px;\n  height: 40px;\n  margin: 20px auto 60px;\n  cursor: pointer;\n  color: ","\n  transition: color ",";\n"]);return gn=function(){return n},n}function vn(){var n=Object(s.a)(["\n  width: 100%;\n  height: auto;\n  padding-top: 64px;\n  margin-bottom: 32px;\n  @media (min-width: 650px) {\n    width: 80%;\n  }\n  @media (min-width: 1250px) {\n    width: 80%;\n  }\n"]);return vn=function(){return n},n}function bn(){var n=Object(s.a)(["\n  margin-bottom: 8px;\n"]);return bn=function(){return n},n}function xn(){var n=Object(s.a)(["\n  width: 100%;\n  color: ",";\n  transition: color ",";\n  @media (min-width: 650px) {\n    letter-spacing: 1px;\n    font-size: 18px;\n  }\n"]);return xn=function(){return n},n}function wn(){var n=Object(s.a)(["\n  font-family: 'Chivo', sans-serif;\n  font-weight: 700;\n  font-size: 21px;\n  margin-bottom: 72px;\n  color: ",";\n  text-align: center;\n  transition: color ",";\n"]);return wn=function(){return n},n}function yn(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  min-height: 100%;\n  height: 100%;\n  padding: 0px 32px;\n  padding-bottom: 64px;\n  overflow: auto;\n  background: ",";\n  transition: background ",";\n  backface-visibility: hidden;\n"]);return yn=function(){return n},n}var jn=Object(u.default)("div")(yn(),(function(n){return n.theme.bg.primary}),(function(n){return n.theme.transitionSpeed})),On=Object(u.default)("h1")(wn(),(function(n){return n.theme.color.primary}),(function(n){return n.theme.transitionSpeed})),En=Object(u.default)("p")(xn(),(function(n){return n.theme.color.primary}),(function(n){return n.theme.transitionSpeed})),kn=Object(u.default)("div")(bn()),Tn=Object(u.default)(p.a.div)(vn()),Mn=Object(u.default)("div")(gn(),(function(n){return n.theme.color.accent}),(function(n){return n.theme.transitionSpeed})),Sn=function(){return Object(p.d)({delay:1450,from:{opacity:0,transform:"translate3d(0px, -8px, 0px)"},to:{opacity:1,transform:"translate3d(0px, 0px, 0px)"},config:{duration:1300,easing:v.d}})};function Hn(){var n=Object(s.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 2px;\n  width: 100%;\n  background: ",";\n"]);return Hn=function(){return n},n}var Rn=Object(u.default)(p.a.div)(Hn(),(function(n){return n.theme.color.primary}));var Cn=function(n){var e=n.isShow,t=Object(p.f)(e,null,{from:{transform:"translate3d(-100%, 0, 0)"},config:{duration:300,easing:v.a},enter:{transform:"translate3d(0%, 0, 0)"},leave:{transform:"translate3d(100%, 0, 0)"}});return o.a.createElement(o.a.Fragment,null,t.map((function(n){var e=n.props,t=n.item,r=n.key;return t&&o.a.createElement(Rn,{style:e,key:r})})))};function zn(){var n=Object(s.a)(["\n  position: absolute;\n  top: 8px;\n  left: -16px;\n  width: 4px;\n  height: 4px;\n  border-radius: 100%;\n  background: ",";\n"]);return zn=function(){return n},n}function Pn(){var n=Object(s.a)(["\n  position: relative;\n  margin-bottom: 8px;\n"]);return Pn=function(){return n},n}var Ln=Object(u.default)("div")(Pn()),An=Object(u.default)("div")(zn(),(function(n){return n.theme.color.accent2}));var Dn=function(n){var e=n.descriptions;return o.a.createElement(o.a.Fragment,null,e.map((function(n){return o.a.createElement(Ln,{key:n},o.a.createElement(An,null),o.a.createElement(En,{style:{fontSize:16,fontWeight:400}},n))})))};function Fn(){var n=Object(s.a)(["\n  min-width: 300px;\n  position: absolute;\n  left: 50%;\n  top: calc(100% + 24px);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 8px 48px;\n  border-radius: 8px;\n  box-shadow: 0 10px 20px ",";\n  z-index: 1000;\n  background: ",";\n\n  transition: background ",",\n    box-shadow ",";\n"]);return Fn=function(){return n},n}var Bn=Object(u.default)(p.a.div)(Fn(),(function(n){return n.theme.dropdown.shadow}),(function(n){return n.theme.dropdown.bg}),(function(n){return n.theme.transitionSpeed}),(function(n){return n.theme.transitionSpeed}));var In=function(n){var e=n.isOpen,t=n.children,i=n.onClickAway,a=void 0===i?function(){}:i,c=n.clickAwayType,l=void 0===c?"click":c,u=Object(p.f)(e,null,{from:{opacity:0,transform:"translate3d(-50%, -8px, 0)"},enter:{opacity:1,transform:"translate3d(-50%, 0, 0)"},leave:{opacity:0,transform:"translate3d(-50%, 8px, 0)"}});return Object(r.useEffect)((function(){return e&&document.addEventListener(l,a),function(){return document.removeEventListener(l,a)}}),[e]),o.a.createElement(o.a.Fragment,null,u.map((function(n){var e=n.props,r=n.item,i=n.key;return r&&o.a.createElement(Bn,{style:e,key:i},t)})))};function Wn(){var n=Object(s.a)(["\n  display: inline-flex;\n  position: relative;\n  padding: 0 12px;\n  font-size: 36px;\n  font-weight: 300;\n  cursor: pointer;\n  overflow: hidden;\n\n  color: ",";\n  transition: color 0.15s;\n"]);return Wn=function(){return n},n}function Yn(){var n=Object(s.a)(["\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  padding-right: 0px;\n  margin-bottom: 32px;\n  width: 100%;\n  @media (min-width: 650px) {\n    padding-right: 32px;\n    width: 50%;\n  }\n  @media (min-width: 1050px) {\n    padding-right: 32px;\n    width: 30%;\n  }\n  @media (min-width: 1420px) {\n    padding-right: 32px;\n    width: auto;\n  }\n"]);return Yn=function(){return n},n}var Gn=Object(u.default)("div")(Yn()),Jn=Object(u.default)(p.a.div)(Wn(),(function(n){return n.theme.color.primary}));var Nn=function(n){var e=n.name,t=n.isSelected,i=void 0===t||t,a=n.onClick,c=void 0===a?function(){}:a,l=Object(r.useState)(!1),u=Object(M.a)(l,2),s=u[0],p=u[1],d=function(){p(!0)},f=function(){p(!1)};return o.a.createElement(Gn,null,o.a.createElement(Jn,{className:"skill-name",onClick:function(){return c(i?"":e)},onFocus:d,onBlur:f,onMouseEnter:d,onMouseOut:f,index:1},e,o.a.createElement(Cn,{isShow:s||i})),o.a.createElement(In,{isOpen:i,onClickAway:function(n){n.target.classList.contains("skill-name")||c("")}},o.a.createElement(Dn,{descriptions:["Familiar with modern JavaScript syntax","Familiar with Webpack, Babel.","Understand closures, async programming (promises, async/await)"]})))};function _n(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  @media (min-width: 650px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n"]);return _n=function(){return n},n}var qn=[{name:"JavaScript",description:"Familiar with modern JS syntax. Understand how JS compiler works.",img:"https://png.pngtree.com/svg/20170719/javascript_633988.png"},{name:"React JS",description:"Creating components (typescript), State Management, Performance tracking, API integration, hooks, styling",img:"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"},{name:"SASS",description:"",img:"https://freeicons.io/laravel/public/uploads/icons/png/10958812621551942279-512.png"},{name:"VCS",description:"",img:"https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"},{name:"Soft Skills",description:"",img:"https://cdn.pixabay.com/photo/2017/09/28/22/14/speech-icon-2797263_960_720.png"},{name:"Additional",description:"",img:"https://upload.wikimedia.org/wikipedia/commons/6/61/Book-icon-orange.png"}],Kn=Object(u.default)("div")(_n());var Un=Object(u.withTheme)((function(){var n=Object(r.useState)(""),e=Object(M.a)(n,2),t=e[0],i=e[1],a=function(n){i(n)},c=Sn();return o.a.createElement(Tn,{style:c},o.a.createElement(On,null,"My Abilities"),o.a.createElement(Kn,null,qn.map((function(n){var e=n.name,r=t===e;return o.a.createElement(Nn,{onClick:a,isSelected:r,name:e,key:e})}))))})),Vn=t(34);var Xn=function(n){Object(Vn.a)(n);var e=Sn();return o.a.createElement(Tn,{style:e},o.a.createElement(On,null,"About Me"),o.a.createElement(En,null,"Yo wasup guys I'm just cool-ass dev, who you wanna pay money."),o.a.createElement(En,null,"Looking for a remote part-time React Dev position;)"),o.a.createElement(kn,null),o.a.createElement(En,null,"My ideal life is look like this - I sniffing cocaine outta model-hoe butt, on my yacht, somewhere in Mongo-Congo. While my multiple sources of income generating me enough money to buy this Mongo-Congo and install Solar Systems everywhere."),o.a.createElement(En,null,"I would like to solve trash issue in the world, because I'm cool."))},Qn=function(n){var e=function(){var n=window.isMobile,e=Object(r.useContext)(X),t=e.scroll,o=e.scrollToRef,i=e.scrollToEventTarget,a=e.scrollToEventTargetMobile,c=e.scrollToExactPositionMobile,l=e.scrollToRefMobile;return{scroll:n?c:t,scrollToRef:n?l:o,scrollToEventTarget:n?a:i}}().scrollToRef,t=Object(r.useContext)(C).toggleMode,i=Object(r.useRef)();return o.a.createElement("div",null,o.a.createElement(hn,{onReadMore:function(){e(i,0,{duration:1200,easing:v.c})}}),o.a.createElement(jn,{ref:i},o.a.createElement(Un,null),o.a.createElement(Xn,null),o.a.createElement(Mn,{onClick:t},"Cherry on the top: Change Theme!")))};var Zn=function(n){return o.a.createElement(Q,null,o.a.createElement(Qn,null))};function $n(){var n=Object(s.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap');\n  @import url('https://fonts.googleapis.com/css?family=Chivo:300,700,900&display=swap');\n  *{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Lato', sans-serif;\n    backface-visibility: hidden;\n    -webkit-overflow-scrolling: touch;\n     //scroll-behavior: smooth;\n }\n  html,\n  body {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    user-select: none;\n    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto,\n    segoe ui, arial, sans-serif;\n    background: ",";\n    transition: background ",";\n  }\n  \n  #root {\n    width: 100%;\n    height: 100%;\n  }\n"]);return $n=function(){return n},n}var ne=function(){var n=L(),e=Object(u.createGlobalStyle)($n(),(function(n){return n.theme.bg.primary}),(function(n){return n.theme.transitionSpeed}));return o.a.createElement(u.ThemeProvider,{theme:n},o.a.createElement(e,null))},ee=[{to:"/",text:"About"},{to:"/contact",text:"Contact Me"}];var te=Object(u.withTheme)((function(n){return o.a.createElement(R,null,o.a.createElement(ne,null),o.a.createElement(A,{menuOptions:ee}),o.a.createElement(B,null,o.a.createElement(l.a,{exact:!0,path:"/"},o.a.createElement(Zn,null)),o.a.createElement(l.a,null,o.a.createElement(Q,null,o.a.createElement("div",null,"Nothing here yet")))))}));window.isMobile=G(),a.a.render(o.a.createElement(c.a,null,o.a.createElement(z,null,o.a.createElement(te,null))),document.getElementById("root"))},33:function(n,e,t){n.exports=t.p+"static/media/Me Portrait.dee09984.jpg"},37:function(n,e,t){n.exports=t(119)}},[[37,1,2]]]);
//# sourceMappingURL=main.e59bd1f1.chunk.js.map