import React, { useState } from 'react';
import Select from 'react-select'


const AuthorForm = ({ show, editAuthor, authors }) => {
  // create select option list
  const authorsOptions = []
  if (authors){
    authors.allAuthors.forEach(obj => {
      const newAuthor = {
        value: obj.name,
        label: obj.name
      }
      authorsOptions.push(newAuthor)
    })
  }
  
  const [name, setName] = useState('')
  const [born, setBorn] = useState('')
  const [authorOption, setAuthorOption] = useState(null)
  
  const submit = async (e) => {
    e.preventDefault()
    
    await editAuthor({
      variables: {name, born}
    })

    setName('')
    setBorn('')
    setAuthorOption(null)
  }

  const handleSelect = (authorOption) => {
    setAuthorOption(authorOption)
    setName(authorOption.value)
  }

  if (!show) {
    return null
  }
  
  return(
    <div>
      <h3>Set birthyear</h3>
      <form onSubmit={submit}>
        <label htmlFor="option-select">Select Author</label>
        <Select 
          value={authorOption}
          options={authorsOptions}
          onChange={ authorOption => handleSelect(authorOption)}
          
        />
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