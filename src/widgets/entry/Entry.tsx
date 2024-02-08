import React from 'react';
import styles from './styles.module.scss';
import {RepositoryObject} from "../../shared/types";

export type Props = {
    data: RepositoryObject,
}
const Entry = ({data}: Props) => {
    const {name, url, shortDescriptionHTML} = data.repo;

    return (
        <div
            className={styles.root}
            onClick={() => window.location.href = url}
        >
            <p className={styles.repoName}>{name}</p>
            <p className={styles.repoDesc}>{shortDescriptionHTML}</p>
        </div>
    );
};

export default Entry;