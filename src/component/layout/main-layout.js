import React from 'react';
import styles from './main-layout.module.css';
const MainLayout = ({ show, toggle, sidebar, children }) => {
    return (
        <main className={show ?  `${styles['st-container']} ${styles['st-menu-open']} ${styles['st-effect-1']}` : `${styles['st-container']} ${styles['st-effect-1']}`}>
            {toggle && (
                toggle
            )}
            <nav className={`${styles['st-menu']} ${styles['st-effect-1']}`}>
                {sidebar}
            </nav>

            <div className={styles['content']}>
                {children}
            </div>
        </main>
    )
}

export default MainLayout;