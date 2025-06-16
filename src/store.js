import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoSlice";
import goalReducer from "./reducers/goalSlice";
import optionsReducer from "./reducers/optionsSlice";
import logger  from "./middleware/logger";
import checker from "./middleware/checker";

export default configureStore({
    reducer: {
        todos: todoReducer,
        goals: goalReducer,
        options: optionsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger, checker),
    });
