function PhotoCard({ photo }) {
  return (
    <div className="bg-violet rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between border border-gray-100">
      <div>
        <div className="relative overflow-hidden group">
          <img 
            src={photo.thumbnailUrl} 
            alt={photo.title} 
            className="w-full h-50 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <span className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
            Album: {photo.albumId}
          </span>
        </div>
        <div className="p-4">
          <h3 className="text-gray-800 font-medium text-sm line-clamp-2 capitalize">
            {photo.title}
          </h3>
        </div>
      </div>
      <div className="px-4 pb-4 pt-0">
        <span className="text-xs text-indigo-600 font-semibold bg-indigo-100 px-2 py-1 rounded">
          ID: #{photo.id}
        </span>
      </div>
    </div>
  );
}

export default PhotoCard;