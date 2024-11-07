import GifItem from "./GifItem";

import useFetchGifs from "../hooks/useFetchGifs";

// eslint-disable-next-line react/prop-types
const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs(category)

  return (
    <>
      <div className="mt-10">
        <h3 className="title-secondary">{category}</h3>

        {
          isLoading && (
            <div className="flex justify-center my-10">
              <div className="container">
                <div className="cube"><div className="cube__inner"></div></div>
                <div className="cube"><div className="cube__inner"></div></div>
                <div className="cube"><div className="cube__inner"></div></div>
              </div>
            </div>
          )
        }

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {
              images.map((image) => 
                (
                  <GifItem 
                    key={ image.id } 
                    { ...image }
                  ></GifItem>
                )
              )
            }
        </div>
      </div>
    </>
  );
};

export default GifGrid;
