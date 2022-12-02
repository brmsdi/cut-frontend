import { createSlice } from '@reduxjs/toolkit'

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        current: 'NOT_FIND'
    },
    reducers: {
        onLoading(state) {
            return { ...state, current: 'LOADING' }
        },
        onResult(state) {
            return { ...state, current: 'RESULT' }
        },
        notFind(state) {
            return { ...state, current: 'NOT_FIND' }
        },
        notFound(state) {
            return { ...state, current: 'NOT_FOUND' }
        }
    }
})

export const { onLoading, onResult, notFind, notFound } = loadingSlice.actions

export const selectIsLoading = state => state.loading.current

export default loadingSlice.reducer