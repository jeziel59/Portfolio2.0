import MenuMobile from "./modules/menu-mobile.js";
import ScrollSuave from "./modules/scroll-suave.js";
import moveProject from "./modules/moveProject.js";
import SlideNav from "./modules/slide.js";
import ScrollAnima from "./modules/ScrollAnima.js";
const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const scrollsuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollsuave.init();

const moveproject = new moveProject(".titulosH2", ".content-project");
moveproject.init();

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addControl(".custom-controls");

const scrollAnima = new ScrollAnima('[data-anime="scroll"]')
scrollAnima.init()