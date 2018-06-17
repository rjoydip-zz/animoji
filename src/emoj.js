import got from 'got'

module.exports.fetchEmoj = async input => {
    // https://emoji.getdango.com/api/emoji?q=clap
    const response = await got('emoji.getdango.com/api/emoji', {
        json: true,
        query: {q: input}
    })

    return response.body.results.map(x => x.text)
}
