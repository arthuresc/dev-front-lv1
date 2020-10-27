/* import React, { useState, setState } from 'react'
import Card from './app/card'
import Title from './app/page_title.jsx'

export default function App() {

  const [list, setList] = useState([])
  const [error, setError] = useState()

  let listAWS = function () {
    let url = 'https://api.github.com/orgs/aws/members.json'
    fetch(url)
    .then(response => response.json())
    .then(setList())
    .catch(error)
  }
  return( 
    <div
    className="App"
    >
      <Title title='Titulo'/>
      <div>{[list]}</div>
      <Card idG=""/>
    </div>
  )
}
        {/*         {this.state.list.length > 0 &&
        <Card idG="" />
        this.state.list.map ((item) => (
          <Card idG={item.id}/>
        ))} }

*/