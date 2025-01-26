import React, { useState } from 'react';
import BlogCard from '../BlogCard/BlogCard';
import styles from './BlogGrid.module.css';

const blogPosts = [
  {
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    date: '22',
    month: 'March',
    category: ['HUMAN NATURE', 'LEARNING'],
    title: 'Google Introduces Gemini: The Next Evolution in AI',
    author: 'ADMIN_BLOGGER',
    tags: ['AI', 'Technology', 'Innovation']
  },
  {
    image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02',
    date: '15',
    month: 'March',
    category: ['LEARNING', 'TECH'],
    title: 'Maximizing Your LinkedIn Profile for Career Growth',
    author: 'ADMIN_BLOGGER',
    tags: ['Career', 'Development', 'Social Media']
  },
  {
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d',
    date: '13',
    month: 'March',
    category: ['EDUCATION', 'LEARNING'],
    title: 'WordPress Development Best Practices in 2024',
    author: 'ADMIN_BLOGGER',
    tags: ['Web Development', 'CMS', 'Design']
  },
  {
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
    date: '10',
    month: 'March',
    category: ['TECH', 'CYBERSECURITY'],
    title: 'Essential Cybersecurity Practices for Remote Work',
    author: 'ADMIN_BLOGGER',
    tags: ['Security', 'Remote Work', 'Best Practices']
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    date: '8',
    month: 'March',
    category: ['BUSINESS', 'ENTREPRENEURSHIP'],
    title: 'Starting a Tech Startup: A Complete Guide',
    author: 'ADMIN_BLOGGER',
    tags: ['Startup', 'Business', 'Technology']
  },
  {
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    date: '5',
    month: 'March',
    category: ['EDUCATION', 'CAREER'],
    title: 'The Future of Remote Learning and Education',
    author: 'ADMIN_BLOGGER',
    tags: ['Education', 'E-learning', 'Technology']
  },
  {
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e',
    date: '3',
    month: 'March',
    category: ['MOBILE', 'DEVELOPMENT'],
    title: 'Mobile App Development Trends in 2024',
    author: 'ADMIN_BLOGGER',
    tags: ['Mobile', 'Development', 'Trends']
  },
  {
    image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0',
    date: '1',
    month: 'March',
    category: ['DESIGN', 'UX'],
    title: 'Creating User-Centered Design Experiences',
    author: 'ADMIN_BLOGGER',
    tags: ['UX Design', 'UI', 'User Experience']
  },
  {
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984',
    date: '28',
    month: 'Feb',
    category: ['DATA', 'ANALYTICS'],
    title: 'Big Data Analytics: Transforming Business Decisions',
    author: 'ADMIN_BLOGGER',
    tags: ['Data Science', 'Analytics', 'Business Intelligence']
  },
  {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    date: '25',
    month: 'Feb',
    category: ['BLOCKCHAIN', 'CRYPTO'],
    title: 'Understanding Blockchain Technology and Its Applications',
    author: 'ADMIN_BLOGGER',
    tags: ['Blockchain', 'Cryptocurrency', 'Technology']
  },
  {
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    date: '22',
    month: 'Feb',
    category: ['SPACE', 'TECH'],
    title: 'Space Technology: The Next Frontier in Innovation',
    author: 'ADMIN_BLOGGER',
    tags: ['Space', 'Innovation', 'Technology']
  },
  {
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a',
    date: '20',
    month: 'Feb',
    category: ['HEALTH', 'TECH'],
    title: 'Digital Health: Technology Revolutionizing Healthcare',
    author: 'ADMIN_BLOGGER',
    tags: ['Healthcare', 'Technology', 'Innovation']
  },
];

const BlogGrid = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);

  const showMorePosts = () => {
    setVisiblePosts(blogPosts.length);
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {blogPosts.slice(0, visiblePosts).map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
      {visiblePosts < blogPosts.length && (
        <div className={styles.viewMoreContainer}>
          <button onClick={showMorePosts} className={styles.viewMoreButton}>
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;