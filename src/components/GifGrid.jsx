import GifItem from "./GifItem";

import useFetchGifs from "../hooks/useFetchGifs";
import PropTypes from "prop-types";

const GifGrid = ({ category }) => {
  const {images, isLoading} = useFetchGifs(category)
  return (
    <>
      <div className="mt-10">
        <h3 className="title-secondary">{category}</h3>

        {
          isLoading && (
            <div className="flex justify-center my-10" aria-label="loading">
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

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}

export default GifGrid;
