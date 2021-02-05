const token = process.env.VERDACCIO_TOKEN;
const contributors = require('@dianmora/contributors');
const excludebots = ['verdacciobot', 'dependabot-preview[bot]', 'dependabot[bot]', '64b2b6d12bfe4baae7dad3d01', 'greenkeeper[bot]', 'snyk-bot', 
                    'allcontributors[bot]', 'renovate[bot]', 'undefined', 'renovate-bot'];
exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
    const result = await contributors(token, 'verdaccio', excludebots);
    
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