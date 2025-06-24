import { useRouter } from 'next/router';
import Link from 'next/link';
import BlogCard from '../components/BlogCard';
import mysql from 'mysql2/promise';

export async function getServerSideProps(context) {
  const { category } = context.params;

  const connection = await mysql.createConnection({
    host: process.env.DB_HOST, // MySQL host
    user: process.env.DB_USER, // MySQL username
    password: process.env.DB_PASSWORD, // MySQL password
    database: process.env.DB_NAME, // MySQL database name
  });

  try {
    // Fetch category details from the database
    const [categoryResult] = await connection.execute(
      'SELECT * FROM categories WHERE category_id = ?',
      [category]
    );
    const categoryDetails = categoryResult[0];

    if (!categoryDetails) {
      return {
        notFound: true, // Return a 404 page if the category is not found
      };
    }

    // Fetch articles from the same category
    const [articlesResult] = await connection.execute(
      'SELECT * FROM articles WHERE category = ?',
      [category]
    );
    const filteredArticles = articlesResult.map((article) => ({
      ...article,
      date: article.date ? new Date(article.date).toISOString() : null, // Convert Date object to ISO string
    }));

    return {
      props: {
        categoryDetails,
        filteredArticles,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        categoryDetails: null,
        filteredArticles: [],
      },
    };
  } finally {
    await connection.end(); // Close the MySQL connection
  }
}

const CategoryPage = ({ categoryDetails, filteredArticles }) => {
  if (!categoryDetails) {
    return (
      <div className="container mt-5">
        <h2>Category Not Found</h2>
        <Link href="/" className="btn btn-primary mt-3">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1>{categoryDetails.name}</h1>
      <p>{categoryDetails.description || 'No description available.'}</p>
      <div className="row">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div key={article.id} className="col-md-4 mb-4">
              <BlogCard article={article} />
            </div>
          ))
        ) : (
          <p>No articles found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
