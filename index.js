var through = require('through2');
var gutil = require('gulp-util');
var ahex = require('ahex');
var PluginError = gutil.PluginError;

var PLUGIN_NAME = 'gulp-ahex';

var ahexCSS = function(css) {
    return css.replace(/#[0-9a-fA-f]{3,8}/g, function(match){
    	return ahex(match);
    })
}

// plugin level function (dealing with files)
function gulpPrefixer() {
  // creating a stream through which each file will pass
  var stream = through.obj(function(file, enc, cb) {
    if (file.isStream()) {
      this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
      return cb();
    }

    if (file.isBuffer()) {
      file.contents = new Buffer(ahexCSS(file.contents.toString()));
    }

    // make sure the file goes through the next gulp plugin
    this.push(file);

    // tell the stream engine that we are done with this file
    cb();
  });

  // returning the file stream
  return stream;
};

// exporting the plugin main function
module.exports = gulpPrefixer;