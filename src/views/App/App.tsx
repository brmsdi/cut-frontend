import FormLink from "componets/Form/Form/FormLink";
import PageMessage from "componets/Loader/PageLoading";
import ResultTable from "componets/Tables/ResultTable";
import { ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectIsLoading } from "store/slices/loadingSlice";
import errorIMG from "assets/img/error2.svg";
import { Information } from "componets/Footer/Information";

export const App = () => {
  const current = useSelector(selectIsLoading);
  const [currentState, setCurrentState] = useState<ReactElement>();

  useEffect(() => {
    switch (current) {
      case "LOADING":
        setCurrentState(<PageMessage />);
        break;
      case "RESULT":
        setCurrentState(<ResultTable />);
        break;
      case "NOT_FOUND":
        setCurrentState(
          <PageMessage
            title={"Vídeo não encontrado. Verifique o link e tente novamente."}
            imageForTitle={errorIMG}
          />
        );
        break;
      default:
    }
  }, [current]);

  return (
    <div>
      <header>
        <h1>Down-video.net</h1>
        <span className="icon-header">
          <i className="bi bi-camera-reels"></i>
        </span>
      </header>
      <div className="container-md">
        <main>
          <div className="main-content">
            <FormLink />
            {currentState}
          </div>
        </main>
      </div>
      <footer>
        <ul>
          {<Information link="https://wa.me/5592991071491" title="WhatsApp" />}
          &sdot;
          {<Information link="mailto:srmarquesms@gmail.com" title="E-mail" />}
          &sdot;
          {<Information link="https://github.com/brmsdi" title="GitHub" />}
        </ul>
        <div>
          <p>Wisley Bruno@2022</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
