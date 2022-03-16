import { createSlice } from "@reduxjs/toolkit";
import { Get_Main_Screen_StatsV1, Get_Main_Screen_StatsV2, GET_WAIT_CALL, Get_Slider_Stat, GET_TABLE_KHI_LHR, GET_TABLE_KHI } from "../../utils/WallboardService/Api";


const initialState = {
    call_wait: null,
    getMainStatsV1: null,
    getMainStatsV2: null,
    getSliderStat: null,
    getTableKHILHR: null,
    getTableKHI: null
}
export const ManagerdSlice = createSlice({
    name: 'managerdSlice',
    initialState,

    reducers: {
        // createUser: (state, { payload }) => {
        //     // state.loginUser = payload;
        // },
        // resetCreateUserProgress: (state, { payload }) => {
        //     state.userCreatStatus = payload
        // },
        // clearState: () => initialState,
    },
    extraReducers: {
        [GET_WAIT_CALL.pending]: (state, { payload }) => {
            // state.isProcess = true;
        },
        [GET_WAIT_CALL.fulfilled]: (state, { payload }) => {
            console.log(payload);
            state.call_wait = payload?.data[0]
        },
        [GET_WAIT_CALL.rejected]: (state, { payload }) => {
            // state.isProcess = false;
        },
        [Get_Main_Screen_StatsV1.pending]: (state, { payload }) => {
            // state.isProcess = true;
        },
        [Get_Main_Screen_StatsV1.fulfilled]: (state, { payload }) => {
            console.log(payload);
            state.getMainStatsV1 = payload?.data[0]
        },
        [Get_Main_Screen_StatsV1.rejected]: (state, { payload }) => {
            // state.isProcess = false;
        },
        [Get_Main_Screen_StatsV2.pending]: (state, { payload }) => {
            // state.isProcess = true;
        },
        [Get_Main_Screen_StatsV2.fulfilled]: (state, { payload }) => {
            console.log(payload);
            state.getMainStatsV2 = payload.data
        },
        [Get_Main_Screen_StatsV2.rejected]: (state, { payload }) => {
            // state.isProcess = false;
        },
        [Get_Slider_Stat.pending]: (state, { payload }) => {
            // state.isProcess = true;
        },
        [Get_Slider_Stat.fulfilled]: (state, { payload }) => {
            state.getSliderStat = payload.data
        },
        [Get_Slider_Stat.rejected]: (state, { payload }) => {
            // state.isProcess = false;
        },
        [GET_TABLE_KHI_LHR.pending]: (state, { payload }) => {
            // state.isProcess = true;
        },
        [GET_TABLE_KHI_LHR.fulfilled]: (state, { payload }) => {
            state.getTableKHILHR = payload.data
        },
        [GET_TABLE_KHI_LHR.rejected]: (state, { payload }) => {
            // state.isProcess = false;
        },
        [GET_TABLE_KHI.pending]: (state, { payload }) => {
            // state.isProcess = true;
        },
        [GET_TABLE_KHI.fulfilled]: (state, { payload }) => {
            state.getTableKHI = payload.data
        },
        [GET_TABLE_KHI.rejected]: (state, { payload }) => {
            // state.isProcess = false;
        }

    }

})

export const { } = ManagerdSlice.actions;
export default ManagerdSlice.reducer;