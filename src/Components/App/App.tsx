import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import { Articles } from '../Articles/Articles';
import { Route, Routes } from 'react-router-dom'
import { SingleArticle } from '../SingleArticle/SingleArticle';
import Header from "../Header/Header"
import Footer from '../Footer/Footer';

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
      <Fragment>
        <Header />
        <Routes>
          <Route 
          path='/'
          element={<Articles articles={articles} />}
          />
          <Route 
          path=':id'
          element={<SingleArticle articles={articles} />}
          />
        </Routes>
        <Footer />
      </Fragment>
    </div>
  );
}

export default App;
