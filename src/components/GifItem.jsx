import PropTypes from "prop-types";

const GifItem = ({ title, url }) => {
  return (
    <div className="bg-white border bg-gray-50 rounded-lg shadow ">
        <img src={ url } alt={ title } className="rounded-lg w-full"/>
        <div className="p-4">
            <span className="font-medium">{ title }</span>
        </div>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default GifItem

