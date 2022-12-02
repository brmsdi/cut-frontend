import { Video } from "types/video";
interface Props {
  video: Video;
}

const HeaderResult = (props: Props) => {
  let video = props.video;
  return (
    <div className="header-result">
      <div className="header-row">
        <p className="header-title">Titulo</p>
        <p className="header-value">{video.title}</p>
      </div>
      <div className="header-row">
        <p className="header-title">Autor</p>
        <p className="header-value">{video.author}</p>
      </div>
      <div className="header-row">
        <p className="header-title">Duração</p>
        <p className="header-value">{video.duration}</p>
      </div>
    </div>
  );
};

export default HeaderResult;
