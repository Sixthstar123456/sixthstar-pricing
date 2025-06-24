import { useState } from 'react';
import mysql from 'mysql2/promise';
import BlogCard from './components/BlogCard';
import CategoryFilter from './components/CategoryFilter';
import Footer from "../../components/Footer"

// import MainHeader from '../../components/header';


// Helper function to format the date
const formatDate = (date) => {
  if (!date) return null;
  const d = new Date(date);
  return d.toISOString().split('T')[0]; // Convert to "YYYY-MM-DD" format
};

export async function getServerSideProps() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  try {
    // Fetch articles
    const [articles] = await connection.execute(
      'SELECT id, title, description, image, slug, category, date, created_at FROM articles ORDER BY date DESC'
    );

    // Fetch categories
    const [categories] = await connection.execute(
      'SELECT category_id, name FROM categories ORDER BY name ASC'
    );

    // Format the articles' dates
    const formattedArticles = articles.map((article) => ({
      ...article,
      date: article.date ? formatDate(article.date) : null,
      created_at: article.created_at ? formatDate(article.created_at) : null,
    }));

    // Close the connection
    await connection.end();

    return {
      props: {
        articles: formattedArticles,
        categories: categories.filter((category) => category.name), // Remove categories with no name
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    if (connection) await connection.end();
    return {
      props: {
        articles: [],
        categories: [],
      },
    };
  }
}

const HomePage = ({ articles, categories }) => {
  const [filteredCategory, setFilteredCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // Filter articles based on selected category
  const filteredArticles =
    filteredCategory === 'all'
      ? articles
      : articles.filter((article) => article.category === filteredCategory);

  // Paginate filtered articles
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredArticles.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate total pages
  const totalPages = Math.ceil(filteredArticles.length / postsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* Header Section */}
   

      <section className="blog-banner-sec">
        <h1>Blog</h1>
        <p>
          Stay up-to-date with the latest trends and insights in cloud hosting,
          email security, and server management.
        </p>
      </section>

      <div className="container mt-5">
        {/* Category Filter */}
        <CategoryFilter
          categories={[{ category_id: 'all', name: 'All' }, ...categories]}
          activeCategory={filteredCategory}
          onSelectCategory={(category) => {
            setFilteredCategory(category);
            setCurrentPage(1); // Reset to the first page when category changes
          }}
        />

        {/* Display Blog Posts */}
        <div className="row">
          {currentPosts.length > 0 ? (
            currentPosts.map((article) => (
              <div key={article.id} className="col-md-4 mb-4">
                <BlogCard article={article} />
              </div>
            ))
          ) : (
            <p className="text-center">No articles found in this category.</p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav>
            <ul className="pagination justify-content-center">
              {Array.from({ length: totalPages }).map((_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    currentPage === index + 1 ? 'active' : ''
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
      <Footer/>
    </div>

  );
};

export default HomePage;
