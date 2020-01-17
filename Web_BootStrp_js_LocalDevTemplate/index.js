module.exports = {

    name: "Web_BootStrp_js_LocalDevTemplate",

    directory: false,

    params: ["ProjectName", "Language"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: "./index.html", sourceTemplateFile: "./index.template"},
          { destinationFile: "./scripts/script.js", sourceTemplateFile: "./scripts/script.template" },
          { destinationFile: "./styles/style.css", sourceTemplateFile: "./styles/style.template" },
          { destinationFile: "./styles/Bootstrap/bootstrap.css", sourceContentFile: "./styles/Bootstrap/bootstrap.css" },
          { destinationFile: "./styles/Bootstrap/bootstrap.css.map", sourceContentFile: "./styles/Bootstrap/bootstrap.css.map" },
          { destinationFile: "./scripts/jQuerry/jquery-3.4.1.js", sourceContentFile: "./scripts/jQuerry/jquery-3.4.1.js" },
          { destinationFile: "./scripts/Popper/popper.min.js", sourceContentFile: "./scripts/Popper/popper.min.js" },
          { destinationFile: "./scripts/Popper/popper.min.js.map", sourceContentFile: "./scripts/Popper/popper.min.js.map" },
          { destinationFile: "./scripts/Bootstrap/bootstrap.js", sourceContentFile: "./scripts/Bootstrap/bootstrap.js" },
          { destinationFile: "./scripts/Bootstrap/bootstrap.js.map", sourceContentFile: "./scripts/Bootstrap/bootstrap.js.map" }
        ]
      });

    }
};
