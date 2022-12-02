import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideoInfo } from "services/video-services";
import { notFound, onLoading, onResult } from "store/slices/loadingSlice";
import { setVideo } from "store/slices/videoSlice";
import { VideoEmpty } from "types/video";

const FormLink = () => {
  const disp = useDispatch();
  const [link, setLink] = useState("");
  const getVideo = (event: any) => {
    event.preventDefault()
    disp(onLoading());
    getVideoInfo(link)
      .then((response) => {
        disp(setVideo(response.data));
        disp(onResult());
      })
      .catch((error) => {
        disp(setVideo(VideoEmpty));
        disp(notFound());
      });
  }

  return (
    <form onSubmit={getVideo}>
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="https://youtu.be/Bag1gUxuU0g"
        aria-label="Inserir o link do vídeo"
        aria-describedby="button-addon2"
        required
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <button
        className="btn btn-success"
        type="submit"
        id="button-addon2"
      >
        Enviar
      </button>
      </div>
    </form>
  );
};
export default FormLink;
