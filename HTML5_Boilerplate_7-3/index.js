module.exports = {

    name: "HTML5_Boilerplate_7-3",

    directory: false,

    params: ["Name", 'Language', "Description"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: "index.html", sourceTemplateFile: "index.template"},
          { destinationFile: ".jshintrc", sourceContentFile: ".jshintrc" },
          { destinationFile: "js/main.js", sourceTemplateFile: "js/main.template" },
          { destinationFile: "js/plugins.js", sourceTemplateFile: "js/plugins.template" },
          { destinationFile: "js/vendors/jquery-3.4.1.min.js", sourceContentFile: "node_modules/html5-boilerplate/dist/js/vendor/jquery-3.4.1.min.js" },
          { destinationFile: "js/vendors/modernizr-3.8.0.min.js", sourceContentFile: "node_modules/html5-boilerplate/dist/js/vendor/modernizr-3.8.0.min.js" },
          { destinationFile: "css/main.css", sourceTemplateFile: "css/main.template" },
          { destinationFile: "css/vendors/normalize.css", sourceContentFile: "node_modules/html5-boilerplate/dist/css/normalize.css" },
          { destinationFile: "site.webmanifest", sourceContentFile: "node_modules/html5-boilerplate/dist/site.webmanifest" },
        ]
      });

    }

};
