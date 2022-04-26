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
    ],
  });
};
