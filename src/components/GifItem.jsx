// eslint-disable-next-line react/prop-types
const GifItem = ({ title, url }) => {
  return (
    <div className="bg-white border bg-gray-50 rounded-lg shadow ">
        <img src={ url } className="rounded-lg w-full"/>
        <div className="p-4">
            <span className="font-medium">{ title }</span>
        </div>
    </div>
  )
}

export default GifItem
