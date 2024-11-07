import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

function App() {

  const [categories, setCategories] = useState([])

  const onAddCategory = ( newCategory ) => {
    if( categories.includes(newCategory) ) return;
    setCategories(categories => [newCategory, ...categories])
  }

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-5/6 lg:w-1/2 flex flex-col">

          {/** Titulo */}
          <div className="mt-10">
            <h1 className="title-h1"><mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Gifs</mark> App</h1>
          </div>

          {/** Input */}
          <div className="mt-10">
          <AddCategory 
            setCategories={ setCategories }
            onAddCategory={ (value) => onAddCategory(value) }
          />
          </div>

          {/** Listado de Gifs */}
          <div className="flex flex-col w-full">
              {
                categories.map((category) => 
                  (
                    <GifGrid 
                      key={category} 
                      category={category}/>
                  )                  
                )
              }
          </div>

          {/** Gif Item */}


        </div>
      </div>

    </>
  );
}

export default App;
