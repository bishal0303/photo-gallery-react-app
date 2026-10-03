import { useState, useEffect } from 'react';
import PhotoCard from './PhotoCard';
import { Loader2, AlertCircle } from 'lucide-react';

function PhotoGallery() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch() implementation
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data from API');
        }
        return response.json();
      })
      .then((data) => {
        // first 100 photos using slice() method
        setPhotos(data.slice(0, 100));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <Loader2 className="w-12 h-12 text-indigo-600 animate-spin mb-3" />
        <p className="text-gray-600 font-medium">Loading photos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-red-500">
        <AlertCircle className="w-12 h-12 mb-3" />
        <p className="font-semibold">Error: {error}</p>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 mb-12">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Gallery Feed</h2>
        <span className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full font-medium">
          Total: {photos.length} Photos
        </span>
      </div>

      {/* Grid Layout using map() */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </section>
  );
}




export default PhotoGallery;