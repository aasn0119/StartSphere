import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../feature/authSlice'
import postSlice from '../feature/postSlice'
import profileSlice from '../feature/profileSlice'
import startupSlice from '../feature/startupSlice'
import articleSlice from '../feature/articleSlice'

const store = configureStore({
    reducer: {
        auth: authSlice,
        posts: postSlice,
        profile: profileSlice,
        startups: startupSlice,
        articles: articleSlice
    }
})
export default store