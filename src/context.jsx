import { Typography } from "@mui/material";
import { useEffect, useContext, useReducer, createContext } from "react";

const AppContext = createContext(null);

const initialState = {
  questions: [],
  result: 0,
};

const appActionTypes = {
  ADD_QUESTIONS: "ADD_QUESTIONS",
  ADD_ANSWER: "ADD_ANSWER",
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case appActionTypes.ADD_QUESTIONS:
      return {
        ...state,
        questions: action.questions,
      };
    // case appActionTypes.ADD_ANSWER:
    //   const { index, answer } = action;
    //   const updateQuestions = [...state.questions];
    //   updateQuestions[index].user_answer = answer;

    //   return {
    //     ...state,
    //     questions: updateQuestions,
    //   };
    default: {
      return state;
    }
  }
}

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const getQustions = async () => {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=10&category=20&type=boolean"
      );
      const data = await res.json();

      dispatch({ type: appActionTypes.ADD_QUESTIONS, questions: data.results });
    };
    getQustions();
  }, []);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  return useContext(AppContext);
}

export { appActionTypes, AppProvider, AppContext, useAppContext };
