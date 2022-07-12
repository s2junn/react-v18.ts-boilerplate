const path = require('path')

const seperateUri = (uri) => {
  const filename = path.basename(uri)
  const ei = uri.lastIndexOf(filename)

  let filepath = uri.substr(0, ei)
  if (filepath) {
    if (filepath.at(0) === '/') {
      filepath = '.' + filepath
    }
  } else {
    filepath = './plop/generated'
  }

  return { path: filepath, name: filename }
}

const dashCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('-')

module.exports = {
  description: 'Create a React Function Component with Typescript',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Component Name: ',
    },
  ],
  actions: function (data) {
    const uri = seperateUri(data.name)

    let actions = [
      {
        type: 'add',
        path: `${uri.path}/${dashCase(uri.name)}/index.tsx`,
        templateFile: './plop/component/templates/ReactFunctionComponent.tsx.hbs',
        data: { ComponentName: uri.name },
      },
    ]

    return actions
  },
}
