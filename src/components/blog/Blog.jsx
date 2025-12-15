import './Blog.css';
import Image1 from '../../assets/blog-1.svg';
import Image2 from '../../assets/blog-2.svg';
import Image3 from '../../assets/blog-3.svg';

const blogData = [
  {
    id: 1,
    category: 'Reviews',
    title: '5 Best App Development Tool for Your Projects',
    metaTag: '09 February, 2022',
    author: 'Kavinda',
    image: Image1,
    description: 'Discover the top app development tools that can streamline your workflow and enhance productivity in your projects.',
  },
  {
    id: 2,
    category: 'Tutorial',
    title: 'Complete Guide to Modern Web Development',
    metaTag: '07 February, 2022',
    author: 'Kavinda',
    image: Image2,
    description: 'Learn about essential development tools that every developer should have in their toolkit for successful project delivery.',
  },
  {
    id: 3,
    category: 'Business',
    title: '3 Things to know about startup business',
    metaTag: '05 February, 2022',
    author: 'Kavinda',
    image: Image3,
    description: 'Essential insights and tips for launching and growing your startup business in today\'s competitive market.',
  },
];

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Latest Posts</h2>

      <div className="blog__container grid">
        {blogData.map(({ id, category, title, metaTag, author, image, description }) => {
          return (
            <div className="blog__card" key={id}>
              <a href="">
                <span className="blog__category">{category}</span>
              </a>
              <div className="blog__thumb">
                <a href="">
                  <img src={image} alt={title} className="blog__img" />
                </a>
              </div>
              <div className="blog__details">
                <h3 className="blog__title">{title}</h3>
                <p className="blog__description">{description}</p>

                <div className="blog__meta">
                  <span>{metaTag}</span>
                  <span className="blog__dot">.</span>
                  <span>{author}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
