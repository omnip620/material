/**
 * Created by panew on 15-6-12.
 */

var express = require('express');
var router = express.Router();
var index = require('./controllers/index');

router.get('/', index.index);
router.get('/start', index.start);
router.get('/color', index.color);
router.get('/grid', index.grid);
router.get('/helpers', index.helpers);
router.get('/media', index.media);
router.get('/sass', index.sass);
router.get('/shadow', index.shadow);
router.get('/table', index.table);
router.get('/typography', index.typography);
//components
router.get('/badges', index.badges);
router.get('/buttons', index.buttons);
router.get('/cards', index.cards);
router.get('/collections', index.collections);
router.get('/footer', index.footer);
router.get('/forms', index.forms);
router.get('/icons', index.icons);
router.get('/navbar', index.navbar);
router.get('/pagination', index.pagination);
router.get('/preloader', index.preloader);
//javascript
router.get('/collapsible', index.collapsible);
router.get('/dialogs', index.dialogs);
router.get('/dropdown', index.dropdown);
router.get('/media', index.media);
router.get('/modals', index.modals);
router.get('/parallax', index.parallax);
router.get('/pushpin', index.pushpin);
router.get('/scrollfire', index.scrollfire);
router.get('/scrollspy', index.scrollspy);
router.get('/side-nav', index.sidenav);
router.get('/tabs', index.tabs);
router.get('/transitions', index.transitions);
router.get('/waves', index.waves);

router.get('/mobile', index.mobile);
router.get('/showcase', index.showcase);

module.exports = router;