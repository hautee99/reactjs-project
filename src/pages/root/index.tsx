import React from 'react';
import styles from './styles.module.css'
import Sidebar from '../../layout/sidebar';

const RootPage = ({}) : JSX.Element => {
    return (
        <div className={`${styles.layout}`}>
            <Sidebar></Sidebar>
            <div>Main / Layout/ Content</div>
        </div>
    );
};

export default RootPage;