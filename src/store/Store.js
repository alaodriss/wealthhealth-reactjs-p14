import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../feature/UserSalice';

const store = configureStore({
  reducer: {
    users: userReducer,
  },
})

export default store