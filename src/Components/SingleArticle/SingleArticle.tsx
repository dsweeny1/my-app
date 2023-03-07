import React from 'react'
import { Article } from '../App/App'
import { useParams } from 'react-router-dom'
import './SingleArticle.css'
const dayjs = require('dayjs')

type ArticlesType = {
    articles: Array<Article>
}

export const SingleArticle: React.FC <ArticlesType> = ({ articles }) => {
    const { id } = useParams<{id: string}>()
    const findArticle:any = articles.find(article => article.title === id)
    return(
        <div key={findArticle.title} id={findArticle.title} className='single-article-container'>
            <div className='top-container'>
                <img className='single-article-image' src={findArticle.multimedia[0].url} height='400px' width='600px' alt='article'/>
                <h2 className='article-title'>{findArticle.title}</h2>
            </div>
            <div className='bottom-container'>
                <h3 className='article-abstract'>{findArticle.abstract}</h3>
                <h4 className='article-byline'>{findArticle.byline}</h4>
                <h4 className='date-published'>Published: {dayjs(findArticle.published_date).format('MMMM, D, YYYY')}</h4>
                <h4 className='article-section'>Section: {findArticle.section}</h4>
                <a className='article-link' href={findArticle.url} rel="noreferrer" target={'_blank'}>Read more ...</a>
            </div>
            </div>
    )
}