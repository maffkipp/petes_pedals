// takes image url and percentage for quality and outputs query string
// for Contentful
module.exports = function imageQuality(url, value) {
    return `${url}?fm=jpg&q=${value}`
}

