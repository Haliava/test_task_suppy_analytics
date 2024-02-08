import React from 'react';
import {useSelector} from "react-redux";
import styles from './sctyles.module.scss';
import {fetchRepoData, selectCursor, selectEntries, selectQuery, selectStatus} from "./entriesSlice";
import Entry from "../../widgets/entry";
import Pagination from "../../widgets/pagination";
import {useAppDispatch} from "../../app/store";

const EntryList = () => {
    const dispatch = useAppDispatch();
    const entries = useSelector(selectEntries);
    const status = useSelector(selectStatus);
    const query = useSelector(selectQuery);
    const cursor = useSelector(selectCursor);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (status !== 'loading') {
            dispatch(fetchRepoData({query, cursor: cursor || undefined}));
        }
    }

    return (
        <div className={styles.root} onClick={(e) => {}}>
            {entries.map((entry, i) => (
                <Entry
                    key={i}
                    data={entry}
                />
            ))}
            <Pagination
                className={styles.pagination}
                onClick={handleClick}
            />
        </div>
    );
};

export default EntryList;