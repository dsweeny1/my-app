
const articlesBySection = async (section: any) => {
    const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_API_KEY}`)
    const articlesSection = await res.json()
    return articlesSection.results
}

export { articlesBySection }