import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type IUser = {
    UserId: string,
    UserName: string,
    UserMail: string,
    UserImageUrl: string,
    UserRole: string,
    UserMobile: number,
};

const UserId = localStorage.getItem("UserId")
const UserName = localStorage.getItem("UserName")
const UserMail = localStorage.getItem("UserMail")
const UserImageUrl = localStorage.getItem("UserImageUrl")
const UserRole = localStorage.getItem("UserRole")
const UserMobile = localStorage.getItem("UserMobile")

export interface UserState {
    User: IUser
}

const initialState: UserState = {
    User: {
        UserId: UserId!== null ? UserId : "",
        UserName: UserName !== null ? UserName : "",
        UserMail: UserMail !== null ? UserMail : "",
        UserImageUrl: UserImageUrl !== null ? UserImageUrl : "",
        UserRole: UserRole !== null ? UserRole : "",
        UserMobile: UserMobile !== null ? Number(UserMobile) : 0,
    }
}

export const UserSlice = createSlice({
    name: 'UserData',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser>) {
            state.User = action.payload;
            localStorage.setItem("UserName", (state.User.UserName))
            localStorage.setItem("UserMail", (state.User.UserMail))
            localStorage.setItem("UserImageUrl", (state.User.UserImageUrl))
            localStorage.setItem("UserRole", (state.User.UserRole))
            localStorage.setItem("UserMobile", String(state.User.UserMobile))
        },
    },
})


export const { setUser } = UserSlice.actions

export default UserSlice.reducer