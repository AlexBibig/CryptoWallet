module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Creates new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name (casing will be changed to dashCase)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'plop/component.hbs',
      },
      {
        type: 'modify',
        path: 'src/components/index.ts',
        pattern: /(\/\/ COMPONENT IMPORTS)/g,
        template:
          "import {{pascalCase name}} from './{{pascalCase name}}';\n$1",
      },
      {
        path: 'src/components/index.ts',
        pattern: /(\/\/ COMPONENT EXPORTS)/g,
        template: '{{pascalCase name}},\n  $1',
        type: 'modify',
      },
    ],
  });
  plop.setGenerator('screen', {
    description: 'Creates new screen',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Screen name (casing will be changed to dashCase)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/screens/{{pascalCase name}}/index.tsx',
        templateFile: 'plop/screen/container.hbs',
      },
      {
        type: 'add',
        path: 'src/screens/{{pascalCase name}}/{{pascalCase name}}View.tsx',
        templateFile: 'plop/screen/view.hbs',
      },
      {
        type: 'modify',
        path: 'src/screens/index.ts',
        pattern: /(\/\/ SCREEN IMPORTS)/g,
        template:
          "import {{pascalCase name}} from './{{pascalCase name}}';\n$1",
      },
      {
        path: 'src/screens/index.ts',
        pattern: /(\/\/ SCREEN EXPORTS)/g,
        template: '{{pascalCase name}},\n  $1',
        type: 'modify',
      },
    ],
  });
};
