import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/request'
function RowList() {
  return (
    <>
    <Row title="Netflix Originals"  fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="Netflix Trending"  fetchUrl={requests.fetchTrending}/>
    <Row title="Netflix Top Rated"  fetchUrl={requests.fetchTopRated}/>
    <Row title="Netflix Action Movie"  fetchUrl={requests.fetchActionMovies}/>
    <Row title="Netflix Comedy"  fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Netflix Horor"  fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Netflix Romance"  fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Netflix Documentries"  fetchUrl={requests.fetchDocumentaries}/>
    {/* <Row/>
    <Row/>
    <Row/> */}
      
    </>
  )
}

export default RowList
