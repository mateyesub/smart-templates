module.exports = {

    name: "jQuery_WebBase_DEV",

    directory: false,

    params: ["Name"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: "index.html", sourceTemplateFile: "index.template"},
          { destinationFile: "scripts/script.js", sourceContentFile: "scripts/script.js" },
          { destinationFile: "styles/style.css", sourceContentFile: "styles/style.css" },
          { destinationFile: "scripts/jQuery/jquery-3.4.1.js", sourceContentFile: "scripts/jQuery/jquery-3.4.1.js" }
        ]
      });

    }

};
