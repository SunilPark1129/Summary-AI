import React, { useEffect, useRef, useState } from "react";
import Language from "../Language/Language";

function Upload({ setIsUploading, requestFetch, lang, setLang, setPrevImgs }) {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isSelectingLang, setIsSelectingLang] = useState(false);
  const [objURL, setObjURL] = useState([]);

  function getUploadedFiles(items) {
    const { files } = items.target;

    if (files.length === 0) return;
    if (files.length + uploadedFiles.length >= 11) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type !== "image/jpeg" && files[i].type !== "image/png")
        return;
    }

    const temp = Object.values(files).map((item) => item);
    setUploadedFiles((prev) => [...prev, ...temp]);
  }

  function deleteClickHandler(targetIdx) {
    const temp = uploadedFiles.filter((_, idx) => idx !== targetIdx);

    setUploadedFiles([...temp]);
  }

  useEffect(() => {
    // remove all image cache
    uploadedFiles.forEach((item) => URL.revokeObjectURL(item));

    // create new image cache with new added images
    const prevTemp = uploadedFiles.map((item) => URL.createObjectURL(item));
    setObjURL([...prevTemp]);
  }, [uploadedFiles]);

  async function submitHandler() {
    const temp = [];
    setPrevImgs(objURL);

    uploadedFiles.map((file) => {
      const read = new FileReader();
      read.onloadend = async function () {
        temp.push(read.result);
        if (uploadedFiles.length === temp.length) {
          requestFetch(temp, lang);
        }
      };
      read.readAsDataURL(file);
    });

    setIsUploading(false);
  }

  function cancelHandler() {
    setIsUploading(false);
  }

  return (
    <>
      <div className="bg"></div>
      <div className="modal__wrapper">
        <div className="modal">
          <span className="modal__tip">You can upload up to 10 images</span>
          <div className="modal__top">
            <div className="modal__img-container">
              {objURL.map((item, idx) => (
                <button className="modal__img" key={item}>
                  <img src={item} alt="img" />
                  <div
                    className="trash"
                    onClick={() => deleteClickHandler(idx)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 7l16 0" />
                      <path d="M10 11l0 6" />
                      <path d="M14 11l0 6" />
                      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                  </div>
                </button>
              ))}
              <label className="modal__add" title="add new image">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 5l0 14" />
                  <path d="M5 12l14 0" />
                </svg>
                <input
                  type="file"
                  multiple
                  onChange={getUploadedFiles}
                  accept=".jpg, .jpeg, .png"
                />
              </label>
            </div>
          </div>
          <button
            className="option-container"
            onClick={() => setIsSelectingLang(true)}
            title="change language"
          >
            Translate Language: <span>{lang}</span>
          </button>
          <div className="modal__btn-container">
            <button className="btn" onClick={submitHandler}>
              Submit
            </button>
            <button className="btn" onClick={cancelHandler}>
              Cancel
            </button>
          </div>
          {isSelectingLang && (
            <Language
              lang={lang}
              setLang={setLang}
              setIsSelectingLang={setIsSelectingLang}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Upload;
