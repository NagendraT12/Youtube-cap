import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import VideoGrid from "./ShowCard";
import CategoryFilter from "./CategoryWiseFilter";
import LoadingSkeleton from './Shimmer.jsx';
import { sampleVideos } from '../utils/dummyData';
import './VideoCard.css';

// VideoGallery component that displays a grid of videos with filtering capabilities
function VideoGallery() {
  const { isGridView, searchQuery } = useOutletContext();
  const [videos, setVideos] = useState([]);
  const [allVideos, setAllVideos] = useState([]);

  // Initialize with sample data
  useEffect(() => {
    setVideos(sampleVideos);
    setAllVideos(sampleVideos);
  }, []);

  // Filter videos based on search query
  useEffect(() => {
    if (searchQuery) {
      const filteredVideos = allVideos.filter((video) =>
        video.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setVideos(filteredVideos);
    } else {
      setVideos(allVideos);
    }
  }, [searchQuery, allVideos]);

  return (
    <>
      <div className="fixed p-6 top-[3rem] w-[100%] bg-[#0f0f0f] z-20 left-[10.9rem] h-[4.5rem] text-white">
        <CategoryFilter onFilterChange={setVideos} />
      </div>
      
      {videos.length > 0 ? (
        <div id={isGridView ? 'grid' : 'grid-width'}>
          {videos.map((video) => (
            <VideoGrid key={video.id} video={video} />
          ))}
        </div>
      ) : (
        <LoadingSkeleton />
      )}
    </>
  );
}

export default VideoGallery;