import { configureStore } from '@reduxjs/toolkit'
import loadingSlice from 'store/slices/loadingSlice'
import videoSlice from 'store/slices/videoSlice'

export default configureStore({
    reducer: {
        loading: loadingSlice,
        video: videoSlice
    }
})