module.exports = {
    description: "Create a React Function Component with Typescript",
    prompts: [
        {
            type: "input",
            name: "ComponentName",
            message: "Component Name"
        },
        {
            type: "input",
            name: "ClassName",
            message: "Class Name"
        }
    ],
    actions: function(data) {
        let actions = [
            {
                type: "add",
                path: "{{ properCase ComponentName }}/index.tsx",
                templateFile: "./plop/component/templates/ReactFunctionComponent.tsx.hbs"
            },
            {
                type: "add",
                path: "{{ properCase ComponentName }}/{{ComponentName}}.scss",
                templateFile: "./plop/component/templates/ReactFunctionComponent.scss.hbs"
            }
        ]

        return actions
    }
}