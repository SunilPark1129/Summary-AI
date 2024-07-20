import React, { useEffect, useState } from "react";
import Tip from "../Tip/Tip";
import Upload from "../Upload/Upload";
import Cookies from "js-cookie";
import Loading from "../Loading/Loading";
import SummaryScreen from "../SummaryScreen/SummaryScreen";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import logo from "../../assets/sai-logo.png";

function Screen({
  isUploading,
  setIsUploading,
  requestFetch,
  data,
  isLoading,
  error,
}) {
  const [lang, setLang] = useState("English");
  const [prevImgs, setPrevImgs] = useState([]);

  useEffect(() => {
    const langCookie = Cookies.get("langCookie");

    if (langCookie) {
      setLang(langCookie);
    }
  }, []);

  return (
    <div className={`screen ${isLoading && "screen--loading"}`}>
      {!data && !isLoading && !error ? (
        <Tip />
      ) : error ? (
        <ErrorComponent error={error} />
      ) : isLoading ? (
        <Loading logo={logo} />
      ) : (
        <SummaryScreen data={data} prevImgs={prevImgs} />
      )}
      {isUploading && (
        <Upload
          setIsUploading={setIsUploading}
          requestFetch={requestFetch}
          lang={lang}
          setLang={setLang}
          setPrevImgs={setPrevImgs}
        />
      )}
    </div>
  );
}

export default Screen;
