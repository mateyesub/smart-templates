module.exports = {

    name: "HTML_CSS_JS_BasicTemplate",

    directory: false,

    params: ["Name"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: "index.html", sourceTemplateFile: "index.template"},
          { destinationFile: ".jshintrc", sourceContentFile: ".jshintrc" },
          { destinationFile: "scripts/vendors/*", sourceContentFile: "scripts/vendors/*" },
          { destinationFile: "scripts/main.js", sourceTemplateFile: "scripts/main.template" },
          { destinationFile: "styles/vendors/*", sourceContentFile: "styles/vendors/*" },
          { destinationFile: "styles/main.css", sourceTemplateFile: "styles/main.template" },
          { destinationFile: "imgs/*", sourceContentFile: "imgs/*" },
          { destinationFile: "imgs/vendors/*", sourceContentFile: "imgs/vendors/*" },
          { destinationFile: "fonts/*", sourceContentFile: "fonts/*" }
        ]
      });

    }

};
