const VideoCard = ({ info }) => {
    if (!info) {
      return <div>Loading...</div>;
    }
  
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    const { viewCount } = statistics;
  
    return (
      <div className="m-3 p-2 w-72 shadow-lg">
        <img className = "rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
        <ul>
          <li>{title}</li>
          <li>{channelTitle}</li>
          <li>{viewCount} views</li>
        </ul>
      </div>
    );

  };
  
  export const AdVideoCard = ({info}) =>{


      return(

        <div className="border border-red-900 p-2 m-2 w-72">
          <VideoCard info = {info}/>

        </div>
      )
    }
  
  export default VideoCard;
  