import React from 'react';
import styles from './BlogCard.module.css';

const BlogCard = ({ image, date, month, category, title, author, tags }) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
        <div className={styles.date}>
          <span className={styles.day}>{date}</span>
          <span className={styles.month}>{month}</span>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.categories}>
          {category.map((cat, index) => (
            <span key={index} className={styles.category}>{cat}</span>
          ))}
        </div>
        <h2>{title}</h2>
        <div className={styles.meta}>
          <span>By {author}</span>
        </div>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogCard;