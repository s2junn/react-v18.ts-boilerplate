module.exports = {
    description: "Create a React Function Component with Typescript",
    prompts: [
        {
            type: "input",
            name: "name",
            message: "Component Name: "
        }
    ],
    actions: function(data) {
        let actions = [
            {
                type: "add",
                path: "{{ dashCase name }}/index.tsx",
                templateFile: "./plop/component/templates/ReactFunctionComponent.tsx.hbs"
            },
            {
                type: "add",
                path: "{{ dashCase name }}/{{ dashCase name }}.scss",
                templateFile: "./plop/component/templates/ReactFunctionComponent.scss.hbs"
            }
        ]

        return actions
    }
}