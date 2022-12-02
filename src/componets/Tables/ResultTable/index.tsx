import HeaderResult from "componets/Header/HeaderResult";
import { useSelector } from "react-redux";
import { selectVideo } from "store/slices/videoSlice";
import { Item } from "types/Item";
import { Video } from "types/video";
import { convertBytes } from "utils/convert";
import { fileTypeToView } from "utils/text";

const ResultTable = () => {
  const selectedVideo: Video = useSelector(selectVideo);
  const items: Item[] = selectedVideo.items;
  return (
    <div className="table-responsive table-result">
      <HeaderResult video={selectedVideo} />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Tipo</th>
            <th scope="col">Resolução</th>
            <th scope="col">Tamanho</th>
            <th scope="col">Baixar</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item: Item) => {
            let fileType = fileTypeToView(item);
            return (
              <tr key={item.key}>
                <td className="td-type">{`${fileType?.text}`}</td>
                <td>
                  {item.resolution}
                  <i
                    className={
                      fileType.audio ? "mute" : "bi bi-volume-mute-fill"
                    }
                  ></i>
                </td>
                <td>{convertBytes(item.filesize)}</td>
                <td>
                  <div className="box-3">
                    <a
                      className="btn-modern btn-down"
                      type="button"
                      id="button-addon2"
                      aria-label="Baixar arquivo"
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Baixar
                    </a>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
