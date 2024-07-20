import React, { useState } from "react";
import Screen from "./components/Screen/Screen";
import "./styles/main.css";
import "./styles/button.css";
import "./styles/upload.css";
import "./styles/loading.css";
import "./styles/error.css";
import "./styles/summary.css";
import "./styles/lang.css";
import BottomButton from "./components/BottomButton/BottomButton";
import useFetch from "./hooks/useFetch";

function App() {
  const { requestFetch, data, isLoading, error } = useFetch();
  const [isUploading, setIsUploading] = useState(false);

  return (
    <div className="wrapper">
      <main>
        <Screen
          isUploading={isUploading}
          setIsUploading={setIsUploading}
          requestFetch={requestFetch}
          data={data}
          isLoading={isLoading}
          error={error}
        />
        <BottomButton setIsUploading={setIsUploading} isLoading={isLoading} />
        <div className="dev">
          Developed by Sunil Park - sunilpark1129@gmail.com
        </div>
      </main>
    </div>
  );
}

export default App;
