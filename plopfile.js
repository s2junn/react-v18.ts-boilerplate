const fs = require('fs');
const path = require("path")

const getAllRegistrationFormsForGenerators = function(dirPath, arrayOfFiles) {
    files = fs.readdirSync(dirPath)

    generators = []

    files.forEach(function(file) {
        if (fs.statSync(`${dirPath}/${file}`).isDirectory() && file !== 'generated') {
            generator = require(`${dirPath}/${file}/generator`)
            generators.push( {
                name: file,
                generator
            } )
        }
    })

    return generators
}

module.exports = function (plop) {
    getAllRegistrationFormsForGenerators('./plop').map(form => {
        plop.setGenerator(form.name, form.generator);
    })
};