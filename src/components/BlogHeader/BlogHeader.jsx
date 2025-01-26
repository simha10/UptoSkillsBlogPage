import React from 'react';
import styles from './BlogHeader.module.css';

const BlogHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 >Blog</h1>
          <div className={styles.breadcrumb}>
            <span>Home</span>
            <span className={styles.separator}>›</span>
            <span>Blog</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;