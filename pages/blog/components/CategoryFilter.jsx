import PropTypes from 'prop-types';

const CategoryFilter = ({ categories = [], activeCategory, onSelectCategory = () => {} }) => {
  if (!Array.isArray(categories)) {
    console.error('Expected categories to be an array, but received:', categories);
    return null; // Return null if invalid categories
  }

  return (
    <div className="d-flex mb-3 blog-category" style={{ justifyContent: 'center' }}>
      {/* All Categories Button */}
      <button
        key="all"
        className={`btn btn-outline-primary ${activeCategory === 'all' ? 'active' : ''}`}
        onClick={() => onSelectCategory('all')}
      >
        All
      </button>

      {/* Render buttons for each category */}
      {categories.map((category) => {
        if (!category || !category.category_id || !category.name) {
          console.warn('Invalid category data:', category);
          return null;
        }

        return (
          <button
            key={category.category_id}
            className={`btn btn-outline-primary ${
              activeCategory === category.category_id ? 'active' : ''
            } ms-2`}
            onClick={() => onSelectCategory(category.category_id)}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
};

// Prop validation
CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      category_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  activeCategory: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSelectCategory: PropTypes.func,
};

export default CategoryFilter;
