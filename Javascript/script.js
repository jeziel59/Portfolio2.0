import MenuMobile from "./modules/menu-mobile.js";
const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

import ScrollSuave from "./modules/scroll-suave.js";

const scrollsuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollsuave.init();

import moveProject from "./modules/moveProject.js";

 const moveproject = new moveProject('.titulosH2', '.content-project');
 moveproject.init();

 import SlideNav from './modules/slide.js'

 const slide = new SlideNav('.slide', '.slide-wrapper')
slide.init()
slide.addControl('.custom-controls');