import { createSlice } from "@reduxjs/toolkit";

const getInitialLanguage = () => {
  const storedLanguage = localStorage.getItem("lang");
  return storedLanguage === "mm" ? "mm" : "eng";
};

const getInitialLangData = (lang) => {
  if (lang === "mm") {
    return {
      greeting: "မင်္ဂလာပါ",
      MMLanguage: "မြန်မာ",
      EngLanguage: "အင်္ဂလိပ်",
      all: "အားလုံး",
      Meat: "အသားဟင်း",
      Vegan: "သက်သက်လွတ်ဟင်း",
      search: "ရှာဖွေထားသောဟင်းချက်နည်းများ",
    };
  }
  if (lang === "eng") {
    return {
      greeting: "hello",
      MMLanguage: "Myanmar",
      EngLanguage: "English",
      all: "all",
      Meat: "Meat Eater",
      Vegan: "Vegan",
      search: "Searched recipes",
    };
  }
};
const initialState = {
  lang: getInitialLanguage(),
  langData: getInitialLangData(getInitialLanguage()),
};

export const LanguageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeToMMLanguage: (state) => {
      state.lang = "mm";
      state.langData = getInitialLangData("mm");
      localStorage.setItem("lang", "mm");
    },
    changeToEngLanguage: (state) => {
      state.lang = "eng";
      localStorage.setItem("lang", "eng");
      state.langData = getInitialLangData("eng");
    },
  },
});

export const { changeToEngLanguage, changeToMMLanguage } =
  LanguageSlice.actions;
export default LanguageSlice.reducer;
