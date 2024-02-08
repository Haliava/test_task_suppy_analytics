import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from "../../app/store";
import {fetchEntries} from "../../entities/searchResult/api";
import {initialSliceState} from "../../shared/constants/data";

const initialState = initialSliceState;

export const fetchRepoData = createAsyncThunk(
    'entries/fetchRepoData',
    fetchEntries
)

export const entriesSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
            state.entries = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRepoData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRepoData.fulfilled, (state, action) => {
                state.status = 'idle';
                state.entries.push(...action.payload.search.repos);
                state.cursor = action.payload.search.pageInfo.endCursor || undefined;
                state.hasNextPage = action.payload.search.pageInfo.hasNextPage;
            })
            .addCase(fetchRepoData.rejected, (state) => {
                state.status = 'failed';
            });
    },
})

export const { setQuery } = entriesSlice.actions;

export const selectQuery = (state: RootState) => state.entries.query;
export const selectCursor = (state: RootState) => state.entries.cursor;
export const selectEntries = (state: RootState) => state.entries.entries;
export const selectStatus = (state: RootState) => state.entries.status;

export default entriesSlice.reducer;
