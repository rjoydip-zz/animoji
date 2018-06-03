const jsesc = require('jsesc');
const emoj = require('./emoj');

exports.middleware = (store) => (next) => (action) => {

  if (!action) {
    return;
  }

  if (action.type === 'SESSION_ADD_DATA') {
    const { data } = action;

    emoj.fetchEmoj( escape(data).replace('%1B%5B0K', '')).then(res => console.log(res));

    console.log('middleware data', data, escape(data).replace('%1B%5B0K', ''));
    if (/(toggle-window: command not found)|(command not found: toggle-window)/.test(data)) { } else {
      next(action);
    }
  } else {
    next(action);
  }
}

exports.decorateConfig = config => {
  const emojConfig = Object.assign({
    fontSize: config.fontSize,
    speed: 1000,
    emoj: ['🐱'],
  }, config.emojConfig);

  return Object.assign({}, config, {
    // cursorColor: 'transparent',
    // termCSS: `
    //   ${config.termCSS || ''}
    //   .cursor-node::after {
    //     content: '${emojConfig.emoj[0]}';
    //     font-size: ${emojConfig.fontSize}px;
    //     position: absolute;
    //     left: 0;
    //     right: 0;
    //     bottom: 0;
    //   }`,
  });
};
