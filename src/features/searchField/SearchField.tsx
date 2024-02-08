import React, {useState} from 'react';
import {TextField} from "@mui/material";
import useDebounce from "../../shared/hooks/useDebounce";
import {useSelector} from "react-redux";
import {fetchRepoData, selectStatus, setQuery} from "../entryList/entriesSlice";
import {useAppDispatch} from "../../app/store";

const SearchField = () => {
    const dispatch = useAppDispatch();
    const status = useSelector(selectStatus);
    const [gitQuery, setGitQuery] = useState('');
    const fetchData = (query: string) => {
        dispatch(setQuery(query));
        dispatch(fetchRepoData({query}));
    }

    useDebounce(() => {
        if (status !== 'loading')
            fetchData(gitQuery);
    }, [gitQuery], 500);

    return (
        <TextField
            label="Запрос"
            variant="outlined"
            onChange={(e) => setGitQuery(e.target.value)}
        />
    );
};

export default SearchField;