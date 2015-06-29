/**
 * Created by panew on 15-6-12.
 */
exports.index = function (req, res) {
  return res.render('index');
};

exports.start = function (req, res) {
  return res.render('start');
};

exports.color = function (req, res) {
  return res.render('css/color');
};

exports.grid = function (req, res) {
  return res.render('css/grid');
};

exports.helpers = function (req, res) {
  return res.render('css/helpers');
};

exports.mediacss = function (req, res) {
  return res.render('css/mediacss');
};

exports.sass = function (req, res) {
  return res.render('css/sass');
};

exports.shadow = function (req, res) {
  return res.render('css/shadow');
};

exports.table = function (req, res) {
  return res.render('css/table');
};

exports.typography = function (req, res) {
  return res.render('css/typography');
};

exports.badges = function (req, res) {
  return res.render('components/badges');
};

exports.buttons = function (req, res) {
  return res.render('components/buttons');
};

exports.cards = function (req, res) {
  return res.render('components/cards');
};
exports.collections = function (req, res) {
  return res.render('components/collections');
};
exports.footer = function (req, res) {
  return res.render('components/footer');
};
exports.forms = function (req, res) {
  return res.render('components/forms');
};
exports.icons = function (req, res) {
  return res.render('components/icons');
};
exports.navbar = function (req, res) {
  return res.render('components/navbar');
};
exports.pagination = function (req, res) {
  return res.render('components/pagination');
};
exports.preloader = function (req, res) {
  return res.render('components/preloader');
};

//javascript

exports.collapsible = function (req, res) {
  return res.render('javascript/collapsible');
};
exports.dialogs = function (req, res) {
  return res.render('javascript/dialogs');
};
exports.dropdown = function (req, res) {
  return res.render('javascript/dropdown');
};
exports.media = function (req, res) {
  return res.render('javascript/media');
};
exports.modals = function (req, res) {
  return res.render('javascript/modals');
};
exports.parallax = function (req, res) {
  return res.render('javascript/parallax');
};
exports.pushpin = function (req, res) {
  return res.render('javascript/pushpin');
};
exports.scrollfire = function (req, res) {
  return res.render('javascript/scrollfire');
};
exports.scrollspy = function (req, res) {
  return res.render('javascript/scrollspy');
};
exports.sidenav = function (req, res) {
  return res.render('javascript/side-nav');
};
exports.tabs = function (req, res) {
  return res.render('javascript/tabs');
};
exports.transitions = function (req, res) {
  return res.render('javascript/transitions');
};
exports.waves = function (req, res) {
  return res.render('javascript/waves');
};
exports.mobile = function (req, res) {
  return res.render('mobile');
};
exports.showcase = function (req, res) {
  return res.render('showcase');
};
exports.fsd = function (req, res) {
  return res.render('javascript/fullscreen-slider-demo');
};