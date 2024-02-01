import { createSlice } from "@reduxjs/toolkit";
import { YOUTUBE_VIDEO_API, YOUTUBE_SEARCH_API } from "../Constant";

const VideoDataSlice = createSlice({
    name: 'videoData',
    initialState: {
        VIDEODATA: null,
    },
    reducers:
    {
        setVideoData: (state, action) => {
            state.VIDEODATA = action.payload;
        },

    },
});

export const fetchSearchVideo = (searchQuery) => async (dispatch) => {
    console.log(searchQuery)
    try {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery + YOUTUBE_SEARCH_API}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        const videoData = json.items;
        console.log(videoData)
        dispatch(setVideoData(videoData));
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
};

export const getVideoData = () => async (dispatch) => {

    try {
        const response = await fetch(YOUTUBE_VIDEO_API);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        const videoData = json.items;
        dispatch(setVideoData(videoData));
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
};

export const { setVideoData } = VideoDataSlice.actions;
export default VideoDataSlice.reducer;
