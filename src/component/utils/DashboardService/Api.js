import { createAsyncThunk } from "@reduxjs/toolkit";
import { DashboardServices } from "./Service";


export const GET_MAIN_SCREEN_STATS = createAsyncThunk(
    "dashboard/getMainScreenStatsV2",
    async (data, { rejectWithValue }) => {
        try {
            const response = await DashboardServices.getMainScreenStatsV2();
            console.log(JSON.parse(response));
            return JSON.parse(response);
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);