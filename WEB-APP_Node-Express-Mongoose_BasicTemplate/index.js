module.exports = {

    name: "WEB-APP_Node-Express-Mongoose_BasicTemplate",

    directory: false,

    params: ["ProjectName", "npmProjectName", "Version", "Description", "Author", "License"],

    rules: function(config) {

      return({
        items: [
          { destinationFile: "app.js", sourceTemplateFile: "app.template"},
          { destinationFile: ".jshintrc", sourceContentFile: ".jshintrc" },
          { destinationFile: "views/header.ejs", sourceTemplateFile: "views/header.template"},
          { destinationFile: "views/list.ejs", sourceContentFile: "views/list.ejs" },
          { destinationFile: "views/footer.ejs", sourceContentFile: "views/footer.ejs"},
          { destinationFile: "public/scripts/script.js", sourceTemplateFile: "public/scripts/script.template"},
          { destinationFile: "public/styles/style.css", sourceTemplateFile: "public/styles/style.template"},
          { destinationFile: "package.json", sourceTemplateFile: "package.template"},
          
        ]
      });

    }

};
