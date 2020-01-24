import React, { useState } from 'react';

const AuthorForm = ({ show, editAuthor }) => {
    const [name, setName] = useState('')
  const [born, setBorn] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    
    await editAuthor({
      variables: {name, born}
    })

    setName('')
    setBorn('')
  }

  if (!show) {
    return null
  }
  
  return(
    <div>
      <h3>Set birthyear</h3>
      <form onSubmit={submit}>
        <div>
          name <input
            value={name}
            onChange={({target}) => setName(target.value)}
            />
        </div>
        <div>
          born <input
            type='number'
            value={born}
            onChange={({target}) => setBorn(parseInt(target.value))}
          />
        </div>
        <button type='submit'>update author</button>
      </form>
    </div>
  )

}

export default AuthorForm