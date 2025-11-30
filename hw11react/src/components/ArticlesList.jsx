import React from 'react'
import { Link } from 'react-router-dom'

const ArticlesList = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Список статей</h1>
      <ul>
        <li>
          <Link to='/articles/1'>Статья 1</Link>
        </li>
        <li>
          <Link to='/articles/2'>Статья 2</Link>
        </li>
        <li>
          <Link to='/articles/3'>Статья 3</Link>
        </li>
      </ul>
    </div>
  )
}

export default ArticlesList
