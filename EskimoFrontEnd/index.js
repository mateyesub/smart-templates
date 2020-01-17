module.exports = {

    name: "eskimoFrontEnd",

    directory: false,

    params: ["Name", "Description", "Author", "Licence"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: "index.html", sourceTemplateFile: "index.template"},
          { destinationFile: ".jshintrc", sourceContentFile: ".jshintrc" },
          { destinationFile: ".gitignore", sourceContentFile: ".gitignore" },
          { destinationFile: "scripts/vendors/*", sourceContentFile: "scripts/vendors/*" },
          { destinationFile: "scripts/main.js", sourceTemplateFile: "scripts/main.js.template" },
          { destinationFile: "styles/vendors/*", sourceContentFile: "styles/vendors/*" },
          { destinationFile: "styles/style.css", sourceTemplateFile: "styles/style.css.template" },
          { destinationFile: "imgs/*", sourceContentFile: "imgs/*" },
          { destinationFile: "imgs/vendors/*", sourceContentFile: "imgs/vendors/*" },
          { destinationFile: "fonts/*", sourceContentFile: "fonts/*" },
          { destinationFile: "sass/0_main.scss", sourceTemplateFile: "sass/0_main.scss.template"},
          { destinationFile: "sass/1_settings/_settings.config.scss", sourceTemplateFile: "sass/1_settings/_settings.config.scss.template"},
          { destinationFile: "sass/1_settings/_settings.layer.scss", sourceTemplateFile: "sass/1_settings/_settings.layer.scss.template"},
          { destinationFile: "sass/1_settings/_settings.variabels.scss", sourceTemplateFile: "sass/1_settings/_settings.variabels.scss.template"},
          { destinationFile: "sass/2_tools/_tools.functions.scss", sourceTemplateFile: "sass/2_tools/_tools.functions.scss.template"},
          { destinationFile: "sass/2_tools/_tools.layer.scss", sourceTemplateFile: "sass/2_tools/_tools.layer.scss.template"},
          { destinationFile: "sass/2_tools/_tools.mixins.scss", sourceTemplateFile: "sass/2_tools/_tools.mixins.scss.template"},
          { destinationFile: "sass/3_generic/_generic.base.scss", sourceTemplateFile: "sass/3_generic/_generic.base.scss.template"},
          { destinationFile: "sass/3_generic/_generic.layer.scss", sourceTemplateFile: "sass/3_generic/_generic.layer.scss.template"},
          { destinationFile: "sass/3_generic/_generic.variabels.scss", sourceTemplateFile: "sass/3_generic/_generic.variabels.scss.template"},
          { destinationFile: "sass/4_elements/_elements.layer.scss", sourceTemplateFile: "sass/4_elements/_elements.layer.scss.template"},
          { destinationFile: "sass/4_elements/_elements.page.scss", sourceTemplateFile: "sass/4_elements/_elements.page.scss.template"},
          { destinationFile: "sass/5_objects/_objects.layer.scss", sourceTemplateFile: "sass/5_objects/_objects.layer.scss.template"},
          { destinationFile: "sass/5_objects/_objects.objects.scss", sourceTemplateFile: "sass/5_objects/_objects.objects.scss.template"},
          { destinationFile: "sass/5_objects/_objects.typography.scss", sourceTemplateFile: "sass/5_objects/_objects.typography.scss.template"},
          { destinationFile: "sass/6_components/_components.layer.scss", sourceTemplateFile: "sass/6_components/_components.layer.scss.template"},
          { destinationFile: "sass/6_components/_components.components.scss", sourceTemplateFile: "sass/6_components/_components.components.scss.template"},
          { destinationFile: "sass/7_utilities/_utilities.layer.scss", sourceTemplateFile: "sass/7_utilities/_utilities.layer.scss.template"},
          { destinationFile: "sass/7_utilities/_utilities.utilities.scss", sourceTemplateFile: "sass/7_utilities/_utilities.utilities.scss.template"},
          { destinationFile: "package.json", sourceTemplateFile: "package.json.template"}
        ]
      });

    }

};
