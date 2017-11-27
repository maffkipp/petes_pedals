
// Contains keys for clientful call; import to pull data
const contentful = require('contentful');
const client = contentful.createClient({
  space: 'wbyi9zmjrqlf',
  accessToken: '5fafd0138a2ed1ed810c131912f54b0b63d01398289eb7f2280a7dce56ddafd6'
});

export default client;
