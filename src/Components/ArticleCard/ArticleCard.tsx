import React from 'react'
import {Link} from 'react-router-dom'
import './ArticleCard.css'
// import nytSymbol from '../../Images/nytSymbol.png'

    type ArticleType = {
    multimedia: any
    title: string
}

export const ArticleCard: React.FC <ArticleType> = ({ multimedia, title }) => {
    return(
        <div key={title} id={title} className='article-card'>
            <Link to={`/${title}`} key={title} id={title} className='single-article-link'>
            <img className='article-image' src={multimedia} height='400px' alt='article'/>
            <h2 className='article-title'>{title}</h2>
            </Link>
        </div>
    )
}