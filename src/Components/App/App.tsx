import React, { useState, useEffect, Fragment, useContext } from 'react';
import './App.css';
import { Articles } from '../Articles/Articles';
import { Route, Routes } from 'react-router-dom'
import { SingleArticle } from '../SingleArticle/SingleArticle';
import Header from "../Header/Header"
import Footer from '../Footer/Footer';
import Error from '../Error/Error';
import loading from '../../Images/loading.png'
import { ThemeContext } from '../../context/ThemeContext';

export type Article = {
  abstract: string
  byline: string
  created_date: string
  des_facet: Array<string>
  geo_facet: Array<string>
  item_type: string
  kicker: string
  material_type_facet: string
  multimedia: any
  org_facet: Array<string>
  per_facet: Array<string>
  published_date: string
  section: string
  short_url: string
  subsection: string
  title: string
  updated_date: string
  uri: string
  url: string
}

const App = () => {
  const [ articles, setArticles ] = useState<Article[]>([])
  const [ error, setError ] = useState<boolean>(false)
  const {theme, toggleTheme} = useContext(ThemeContext)

  const articlesBySection = async () => {
    const url = (`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
    const options: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    let data
    let response
    try{
      response = await fetch(url, options)
      data = await response.json()
    } catch (error: any) {
      setError(true)
    }
    setArticles(data.results)
}

  useEffect(() => {
    articlesBySection()
  }, [])
  
  return (
    <div className="App">
      <Header />
      <button onClick={toggleTheme}>Switch to {theme === 'light' ? 'dark' : 'light'} mode</button>
      <Fragment>
        <Routes>
          <Route 
          path='/'
          element={!error ? <Articles articles={articles} /> : <Error />}
          />
          <Route 
          path=':id'
          element={!error ? <SingleArticle articles={articles} /> : <Error />}
          />
          <Route 
          path='*'
          element={<Error />}
          />
        </Routes>
      </Fragment>
      <Footer />
      {!error && !articles.length && (
        <div>
          <img src={loading} alt='loading' className='loading-image' />
        </div>
      )}
    </div>
  );
}

export default App;
