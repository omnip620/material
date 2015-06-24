/**
 * Created by panew on 15-6-12.
 */
/**
 * Created by panew on 15-3-17.
 */
var moment = require('moment');


module.exports = {
  extname      : 'hbs',
  defaultLayout: 'layout',
  helpers      : {
    block      : function (name) {
      var blocks = this._blocks;
      content = blocks && blocks[name];
      return content ? content.join('\n') : null;
    },
    contentFor : function (name, options) {
      var blocks = this._blocks || (this._blocks = {}),
          block = blocks[name] || (blocks[name] = []);

      block.push(options.fn(this));
    },
    formatDate : function (item) {
      if (moment().isSame(item, 'day')) {
        return moment(item).format('HH:mm');
      }
      return moment(item).format('MM-DD HH:mm');
    },
    getDay     : function (item) {
      return moment(item).format('DD');
    },
    titlesplice: function (title) {
      return title.length > 16 ? title.substring(0, 16) : title;
    }
  }
};