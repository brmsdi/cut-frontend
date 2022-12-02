import { createSlice } from '@reduxjs/toolkit'
import { VideoEmpty } from 'types/video'

export const videoSlice = createSlice({
    name: 'video',
    initialState: {
        ...VideoEmpty
    }, 
    reducers: {
        setVideo(state, {payload}) {
            return { ...payload }
        }
    }
})

export const { setVideo } = videoSlice.actions

export const selectVideo = state => state.video 

export default videoSlice.reducer;