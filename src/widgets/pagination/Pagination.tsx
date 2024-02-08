import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

type Props = {
    className: string,
    onClick: React.MouseEventHandler<HTMLDivElement>
}
const Pagination = ({onClick, className}: Props) => {
    return (
        <div className={classNames(styles.root, className)} onClick={onClick}>
            Далее
        </div>
    );
};

export default Pagination;