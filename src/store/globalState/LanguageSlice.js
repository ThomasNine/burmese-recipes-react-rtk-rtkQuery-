import { createSlice } from "@reduxjs/toolkit";

const getInitialLanguage = () => {
  const storedLanguage = localStorage.getItem("lang");
  return storedLanguage === "mm" ? "mm" : "eng";
};

const initialState = {
  lang: getInitialLanguage(),
};

export const LanguageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeToMMLanguage: (state) => {
      state.lang = "mm";

      localStorage.setItem("lang", "mm");
    },
    changeToEngLanguage: (state) => {
      state.lang = "eng";

      localStorage.setItem("lang", "eng");
    },
  },
});

export const { changeToEngLanguage, changeToMMLanguage } =
  LanguageSlice.actions;
export default LanguageSlice.reducer;
