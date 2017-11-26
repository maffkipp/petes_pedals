
// Contains keys for clientful call; import to pull data
const contentful = require('contentful');
const client = contentful.createClient({
  space: 'u3y85rtp76tx',
  accessToken: '1b1172d00f715a22c027b99b1b30ffe27750aacf1578ba329f82b7803bcbb963'
});

export default client;
