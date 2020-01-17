module.exports = {

    name: "HTML_SCSS_JS_NormalizeCSS",

    directory: false,

    params: ["Name", "Description", "Author", "Licence"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: "index.html", sourceTemplateFile: "index.template"},
          { destinationFile: ".jshintrc", sourceContentFile: ".jshintrc" },
          { destinationFile: "scripts/vendors/*", sourceContentFile: "scripts/vendors/*" },
          { destinationFile: "scripts/main.js", sourceTemplateFile: "scripts/main.js.template" },
          { destinationFile: "styles/vendors/*", sourceContentFile: "styles/vendors/*" },
          { destinationFile: "styles/main.css", sourceTemplateFile: "styles/main.css.template" },
          { destinationFile: "imgs/*", sourceContentFile: "imgs/*" },
          { destinationFile: "imgs/vendors/*", sourceContentFile: "imgs/vendors/*" },
          { destinationFile: "fonts/*", sourceContentFile: "fonts/*" },
          { destinationFile: "styles/vendors/normalize.css", sourceContentFile: "node_modules/normalize.css/normalize.css" },
          { destinationFile: "sass/main.scss", sourceTemplateFile: "sass/main.scss.template"},
          { destinationFile: "package.json", sourceTemplateFile: "package.json.template"}
        ]
      });

    }

};
