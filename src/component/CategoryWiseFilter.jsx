import { videoCategories } from "../utils/genrecollection";
import { useState, useEffect } from "react";

// CategoryFilter component that allows filtering videos by genre
function CategoryFilter({ onFilterChange }) {
  const [allVideos, setAllVideos] = useState([]);

  // Fetch all videos on component mount
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch('http://localhost:3000/');
      const data = await response.json();
      setAllVideos(data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  // Handle genre filter selection
  const handleGenreSelect = (genre) => {
    if (genre.toLowerCase() === 'all') {
      onFilterChange(allVideos);
      return;
    }

    const filteredVideos = allVideos.filter(
      (video) => video.genre.toLowerCase() === genre.toLowerCase()
    );

    if (filteredVideos.length > 0) {
      onFilterChange(filteredVideos);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {videoCategories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleGenreSelect(category)}
          className="text-white py-1 px-5 text-[0.9rem] font-semibold hover:bg-[#464644] rounded-md bg-[#212121] transition-colors duration-200"
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;