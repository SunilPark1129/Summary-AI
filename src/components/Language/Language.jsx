import Cookies from "js-cookie";

function Language({ lang, setLang, setIsSelectingLang }) {
  function getLanguage(target) {
    Cookies.set("langCookie", target);
    setLang(target);
    setIsSelectingLang(false);
  }
  return (
    <div className="lang">
      <span>Select Your language</span>
      <div className="lang__btn-container">
        <button
          className={`lang-btn ${lang === "English" && "lang-btn--active"}`}
          onClick={() => getLanguage("English")}
        >
          English
        </button>
        <button
          className={`lang-btn ${lang === "Spanish" && "lang-btn--active"}`}
          onClick={() => getLanguage("Spanish")}
        >
          Spanish
        </button>
        <button
          className={`lang-btn ${lang === "Korean" && "lang-btn--active"}`}
          onClick={() => getLanguage("Korean")}
        >
          Korean
        </button>
        <button
          className={`lang-btn ${lang === "Hindi" && "lang-btn--active"}`}
          onClick={() => getLanguage("Hindi")}
        >
          Hindi
        </button>
        <button
          className={`lang-btn ${lang === "Japanese" && "lang-btn--active"}`}
          onClick={() => getLanguage("Japanese")}
        >
          Japanese
        </button>
        <button
          className={`lang-btn ${lang === "Chinese" && "lang-btn--active"}`}
          onClick={() => getLanguage("Chinese")}
        >
          Chinese
        </button>
        <button
          className={`lang-btn ${lang === "French" && "lang-btn--active"}`}
          onClick={() => getLanguage("French")}
        >
          French
        </button>
        <button
          className={`lang-btn ${lang === "Germany" && "lang-btn--active"}`}
          onClick={() => getLanguage("Germany")}
        >
          Germany
        </button>
        <button
          className={`lang-btn ${lang === "Turkish" && "lang-btn--active"}`}
          onClick={() => getLanguage("Turkish")}
        >
          Turkish
        </button>
        <button
          className={`lang-btn ${lang === "Portuguese" && "lang-btn--active"}`}
          onClick={() => getLanguage("Portuguese")}
        >
          Portuguese
        </button>
        <button
          className={`lang-btn ${lang === "Indonesian" && "lang-btn--active"}`}
          onClick={() => getLanguage("Indonesian")}
        >
          Indonesian
        </button>
        <button
          className={`lang-btn ${lang === "Philippines" && "lang-btn--active"}`}
          onClick={() => getLanguage("Philippines")}
        >
          Philippines
        </button>
      </div>
    </div>
  );
}

export default Language;
