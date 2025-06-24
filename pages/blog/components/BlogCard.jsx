import Link from 'next/link';
import { format } from 'date-fns';

const BlogCard = ({ article }) => {
  if (!article) return null;

  return (
    <div className="card">
      <img
        src={article.image || '/placeholder-image.jpg'}
        className="card-img-top"
        alt={article.title || 'No Title'}
      />
   <div className="card-body">
  <h5 className="card-title text-xl pt-4 font-bold">
    {article.title || 'Untitled Article'}
  </h5>
  <p className="card-text">
    {(article.description && article.description.substring(0, 100)) || 'No description available'}...
  </p>
  <p className="text-muted">
    {article.date ? format(new Date(article.date), 'dd/MM/yyyy') : 'No Date'}
  </p>
  <Link
    href={`/blog/${article.slug || ''}`}
    className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
  >
    Read More
  </Link>
</div>

    </div>
  );
};

export default BlogCard;
