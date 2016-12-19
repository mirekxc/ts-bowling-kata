module.exports = function(config) {
    config.set({

        frameworks: ["jasmine", "karma-typescript"],

        files: [...walkSync('test/'), ...walkSync('src/')],

        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },

        reporters: ["mocha", "karma-typescript"],

        logLevel: config.LOG_WARN,

        browsers: ["PhantomJS"],

        autoWatch: true
    });
};

/**
 * for Karma autoWatch fix
 */
function walkSync(dir, filelist) {
  var fs = fs || require('fs'),
    files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function(file) {
      if (fs.statSync(dir + file).isDirectory()) {
        filelist = walkSync(dir + file + '/', filelist);
      }
      else {
        filelist.push(dir + file);
      }
    });
  return filelist;
};
