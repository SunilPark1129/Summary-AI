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

  const preim = [
    "https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg",
  ];

  const text = "hello";

  useEffect(() => {
    const langCookie = Cookies.get("langCookie");

    if (langCookie) {
      setLang(langCookie);
    }
  }, []);

  return (
    <div className={`screen ${isLoading && "screen--loading"}`}>
      {/* {!data && !isLoading && !error ? (
        <Tip />
      ) : error ? (
        <ErrorComponent error={error} />
      ) : isLoading ? (
        <Loading logo={logo} />
      ) : (
        <SummaryScreen data={data} prevImgs={preim} />
      )} */}
      <SummaryScreen data={text} prevImgs={preim} />

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
