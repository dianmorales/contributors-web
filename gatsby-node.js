const token = process.env.VERDACCIO_TOKEN;
const contributors = require('@dianmora/contributors');

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
    const result = await contributors(token);
    
    result.forEach((item) => {
        createNode({
            url: item.login,
            userId: item.id,
            id: `key-${item.login}`,
            contributions: item.contributions,
            repositories: item.repositories,
             parent: null,
            children: [],
            internal: {
                type: `Example`,                
                contentDigest: createContentDigest(item),
            },
        });
    })
}