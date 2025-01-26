import React from 'react';
import BlogHeader from '../../components/BlogHeader/BlogHeader';
import BlogGrid from '../../components/BlogGrid/BlogGrid';
import styles from './Blog.module.css';

const Blog = () => {
  return (
    <div className={styles.blogPage}>
      <BlogHeader />
      <main className={styles.main}>
        <BlogGrid />
      </main>
    </div>
  );
};

export default Blog;