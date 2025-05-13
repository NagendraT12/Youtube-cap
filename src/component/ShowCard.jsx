import './ShowCard.css';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';

// VideoGrid component that displays a single video card with thumbnail and metadata
function VideoGrid({ video }) {
  return (
    <Link to={`/watch/${video.id}`}>
      <div className="item text-white">
        <img 
          src={video.imageIcon} 
          alt={video.description} 
          className='video-thumbnail rounded-[8px]'
        />
        <div className='flex gap-2 mt-3'>
          <div>
            <PersonIcon className='border border-red-100 rounded-full' />
          </div>
          <div className='text-[0.8rem]'>
            <h2 className='font-bold'>{video.description}</h2>
            <h2 className='font-light text-[#8a8888] mt-1'>{video.owner}</h2>
            <div className='flex gap-3 text-[#928e8e]'>
              <span>{video.views}</span>
              <span className="ml-[2px] mr-[-8px]">
                <CircleIcon sx={{ fontSize: '0.4rem' }} />
              </span>
              <span>{video.time}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default VideoGrid;