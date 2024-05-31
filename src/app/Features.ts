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

type StationData = {
    StationName: string,
    StationAddress: string,
    StaionCode: string,
    NumberChargers: number,
    AvailableChargers: number,
    NextAvailableCharger: number,
}

const UserId = localStorage.getItem("UserId")
const UserName = localStorage.getItem("UserName")
const UserMail = localStorage.getItem("UserMail")
const UserImageUrl = localStorage.getItem("UserImageUrl")
const UserRole = localStorage.getItem("UserRole")
const UserMobile = localStorage.getItem("UserMobile")

const StationName = localStorage.getItem("StationName")
const StationAddress = localStorage.getItem("StationAddress")
const StaionCode = localStorage.getItem("StaionCode")
const NumberChargers = localStorage.getItem("NumberChargers")
const AvailableChargers = localStorage.getItem("AvailableChargers")
const NextAvailableCharger = localStorage.getItem("NextAvailableCharger")

export interface UserState {
    User: IUser
    Station: StationData
}

const initialState: UserState = {
    User: {
        UserId: UserId !== null ? UserId : "",
        UserName: UserName !== null ? UserName : "",
        UserMail: UserMail !== null ? UserMail : "",
        UserImageUrl: UserImageUrl !== null ? UserImageUrl : "",
        UserRole: UserRole !== null ? UserRole : "",
        UserMobile: UserMobile !== null ? Number(UserMobile) : 0,
    },
    Station: {
        StationName: StationName !== null ? StationName : "",
        StationAddress: StationAddress !== null ? StationAddress : "",
        StaionCode: StaionCode !== null ? StaionCode : "",
        NumberChargers: NumberChargers !== null ? Number(NumberChargers) : 0,
        AvailableChargers: AvailableChargers !== null ? Number(AvailableChargers) : 0,
        NextAvailableCharger: NextAvailableCharger != null ? Number(NextAvailableCharger) : 0
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

        setStation(state, action: PayloadAction<StationData>) {
            state.Station = action.payload;
            localStorage.setItem("StationName", (state.Station.StationName))
            localStorage.setItem("StationAddress", (state.Station.StationAddress))
            localStorage.setItem("StaionCode", (state.Station.StaionCode))
            localStorage.setItem("NumberChargers", String(state.Station.NumberChargers))
            localStorage.setItem("AvailableChargers", String(state.Station.AvailableChargers))
            localStorage.setItem("NextAvailableCharger", String(state.Station.NextAvailableCharger))
        }
    },
})


export const { setUser } = UserSlice.actions

export default UserSlice.reducer