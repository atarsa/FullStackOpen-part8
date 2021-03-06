import React from 'react'
import { useApolloClient} from '@apollo/react-hooks'



const Authors = ({show, result}) => {
  
  const client = useApolloClient()

  if (!show) {
    return null
  }
  
  if (result.loading){
    return <div>Loading...</div>
  }
  
  const authors = result.data.allAuthors

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              born
            </th>
            <th>
              books
            </th>
          </tr>
          {authors.map(a =>
            <tr key={a.id}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          )}
        </tbody>
      </table>
      
    </div>
  )
}

export default Authors