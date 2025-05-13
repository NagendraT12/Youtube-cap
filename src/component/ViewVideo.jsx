import { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import Sidebar from "./SideBar";
import SuggestedVideo from "./SuggestedVideo";
import CommentSection from "./CommentSection";
import LoadingSkeleton from "./ShimmerViewVideo";
import { sampleVideos } from "../utils/dummyData";
import './ViewVideo.css';

// Icons
import PersonIcon from '@mui/icons-material/Person';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ShareIcon from '@mui/icons-material/Share';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import LinearScaleIcon from '@mui/icons-material/LinearScale';

// VideoPlayer component that displays the main video and its details
function VideoPlayer() {
  const [currentVideo, setCurrentVideo] = useState(null);
  const { isSidebarVisible } = useOutletContext();
  const { id } = useParams();

  // Initialize with sample data
  useEffect(() => {
    const video = sampleVideos.find(v => v.id === parseInt(id));
    setCurrentVideo(video);
  }, [id]);

  if (!currentVideo) {
    return <LoadingSkeleton />;
  }

  return (
    <>
      {!isSidebarVisible && <Sidebar />}
      
      <div className="flex">
        <div className="ml-[2rem] mr-8 my-[4.8rem] w-[65%]">
          <iframe 
            src={`${currentVideo.video_url}&autoplay=1&mute=0`}
            className="rounded-[14px] w-[100%] h-[80vh]"
            title={currentVideo.description}
          />
          
          {/* Video Details */}
          <div className="pb-3 border-b border-gray-600">
            <div className="mt-3">
              <h1 className="text-[1.2rem] font-bold text-white">
                {currentVideo.description}
              </h1>
            </div>
            
            {/* Video Actions */}
            <div className="flex justify-between">
              <div className="flex items-center text-white">
                <PersonIcon className='border border-red-100 rounded-full text-white' />
                <div className="flex flex-col mt-3 ml-2">
                  <h1 className="font-bold">{currentVideo.owner}</h1>
                  <h2 className="text-[0.7rem]">{currentVideo.id} Subscribers</h2>
                </div>
                <button className="ml-8 bg-[#f1f1f1] text-[#000] font-bold px-6 py-2 rounded-[1.3rem] hover:bg-[#ff0000] hover:text-white">
                  Subscribe
                </button>
              </div>
              
              <div className="text-white flex justify-center items-center">
                <button className="text-[0.8rem] bg-[#272727] py-[0.4rem] px-4 mr-2 rounded-[1.2rem]">
                  <span className="px-1 hover:text-[#00ff00] border-r border-white">
                    <ThumbUpIcon sx={{ fontSize: '1.5rem' }} />
                  </span>
                  <span className="px-1 hover:text-[#ff0000]">
                    <ThumbDownAltIcon sx={{ fontSize: '1.5rem' }} />
                  </span>
                </button>
                <button className="px-3 text-[0.9rem] py-2 flex justify-center items-center bg-[#272727] hover:bg-[#ff0000] mr-2 rounded-[1.2rem]">
                  <ShareIcon /> <span className="font-bold">Share</span>
                </button>
                <button className="px-3 text-[0.9rem] flex justify-center items-center py-2 bg-[#272727] hover:bg-[#ff0000] mr-2 rounded-[1.2rem]">
                  <span className="font-bold">
                    <ArrowDownwardIcon /> Download
                  </span>
                </button>
                <button className="px-1 flex justify-center items-center py-1 bg-[#272727] rounded-full hover:bg-[#ff0000]">
                  <LinearScaleIcon />
                </button>
              </div>
            </div>
          </div>

          {/* Video Description */}
          <div className="bg-[#292929] text-white mt-3 rounded-[0.6rem] p-4">
            <h1 className="text-[0.9rem] font-medium">
              {currentVideo.views} <span className='ml-3'>{currentVideo.time}</span>
            </h1>
            <h3 className="text-[0.96rem]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis pariatur nisi facilis eaque sequi fuga tempore delectus temporibus eum ducimus quam itaque rerum autem, ullam velit minus tempora. Error, ipsam?...More
            </h3>
          </div>

          {/* Comments Section */}
          <div className="comment-section">
            <CommentSection />
          </div>
        </div>

        {/* Suggested Videos */}
        <div className="w-[35%] ml-[-15px] my-[4.8rem]">
          <SuggestedVideo />
        </div>
      </div>
    </>
  );
}

export default VideoPlayer;