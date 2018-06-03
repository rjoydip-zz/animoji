const got = require('got');

const fetchEmoj = async input => {
  // https://emoji.getdango.com/api/emoji?q=clap
	const response = await got('emoji.getdango.com/api/emoji', {
		json: true,
		query: {
			q: input
		}
	});

	return response.body.results.map(x => x.text);
};

exports.decorateConfig = config => {
  const emojConfig = Object.assign({
    fontSize: config.fontSize,
    speed: 1000,
    emoj: ['🐱'],
  }, config.emojConfig);

  console.log(config);

  return Object.assign({}, config, {
    cursorColor: 'transparent',
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node::after {
        content: '${emojConfig.emoj[0]}';
        font-size: ${emojConfig.fontSize}px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
      }`,
  });
};
