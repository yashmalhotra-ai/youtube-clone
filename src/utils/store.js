import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import CacheSuggestionSlice from "./CacheSuggestionSlice";
import VideoDataSlice from "./VideoDataSlice";
const store = configureStore({
    reducer: {
        app: AppSlice,
        suggestioncache: CacheSuggestionSlice,
        searchvideoapi: VideoDataSlice
    },
});

export default store;