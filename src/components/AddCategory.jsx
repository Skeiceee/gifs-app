import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const AddCategory = ({ onAddCategory }) => {

  const [inputValue, setInputValue] = useState("")

  const onInputChange = ({ target }) => {
    setInputValue( target.value)
  }
  
  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;
    // setCategories(categories => [...categories, inputValue])
    onAddCategory(inputValue.trim())
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div className="relative">

          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>

          <input value={inputValue} onChange={onInputChange} type="search" id="default-search" className="input-primary" placeholder="Buscar gifs..." required />
          <button type="submit" className="btn-primary">Buscar</button>

      </div>
    </form>
  )
}

export default AddCategory
