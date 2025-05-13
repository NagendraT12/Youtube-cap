import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CircleIcon from '@mui/icons-material/Circle';
import { sampleVideos } from "../utils/dummyData";
import './SuggestedVideo.css';

// SuggestedVideos component that displays a list of recommended videos
function SuggestedVideos() {
  const [suggestedVideos, setSuggestedVideos] = useState([]);

  // Initialize with sample data
  useEffect(() => {
    setSuggestedVideos(sampleVideos);
  }, []);

  return (
    <div className="suggested-videos">
      {suggestedVideos.map((video) => (
        <div 
          key={video.id} 
          className="suggested-video-item text-white grid border-b border-[#2322224c]"
        >
          <Link to={`/watch/${video.id}`}>
            <div className="h-[7.3rem] mb-4">
              <img 
                src={video.imageIcon} 
                alt={video.description}
                className="h-[100%] w-[220px] rounded-lg" 
              />
            </div>
          </Link>
          
          <div className="text-[0.5rem]">
            <div className="mt-1 ml-1 pr-1">
              <h1 className="text-[0.7rem] font-bold">{video.description}</h1>
            </div>
            
            <h1 className="mt-4 ml-2 text-[#d6d1d1] font-[500] text-[0.8rem]">
              {video.owner}
            </h1>
            
            <h1 className="mt-[0.1rem] ml-2 text-[#d6d1d1] font-[500] text-[0.7rem]">
              <span className="mr-3">{video.views}</span>
              <span className="ml-[-6px]">
                <CircleIcon sx={{ fontSize: '0.4rem' }} />
              </span>
              <span>{video.time}</span>
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SuggestedVideos;