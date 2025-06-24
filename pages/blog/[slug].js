import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import mysql from 'mysql2/promise';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export async function getServerSideProps(context) {
  const { slug } = context.params;

  const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: process.env.DATABASE_SSL === 'true',
  });

  try {
    const [articleResult] = await pool.execute('SELECT * FROM articles WHERE slug = ?', [slug]);
    const article = articleResult[0];

    if (!article) {
      return {
        notFound: true,
      };
    }

    article.meta = typeof article.meta === 'string' ? JSON.parse(article.meta) : article.meta;
    if (article.created_at) article.created_at = article.created_at.toISOString();
    if (article.updated_at) article.updated_at = article.updated_at.toISOString();
    if (article.date) article.date = formatDate(article.date);

    const [relatedArticlesResult] = await pool.execute(
      'SELECT * FROM articles WHERE category = ? AND slug != ? LIMIT 3',
      [article.category, slug]
    );
    const relatedArticles = relatedArticlesResult.map((related) => ({
      ...related,
      date: related.date ? formatDate(related.date) : related.date,
      created_at: related.created_at?.toISOString(),
      updated_at: related.updated_at?.toISOString(),
    }));

    return {
      props: {
        article,
        relatedArticles,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        article: null,
        relatedArticles: [],
      },
    };
  } finally {
    await pool.end();
  }
}

const SlugPage = ({ article = {}, relatedArticles = [] }) => {
  const [tableOfContents, setTableOfContents] = useState([]);

  useEffect(() => {
    if (article && article.content) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(article.content, 'text/html');
      const headings = Array.from(doc.querySelectorAll('h2')).map((heading) => ({
        id: heading.id || heading.textContent.toLowerCase().replace(/\s+/g, '-'),
        text: heading.textContent,
      }));
      setTableOfContents(headings);
    }
  }, [article]);

  return (
    <div>
      <Head>
        <title>{article.meta?.title || 'Article'}</title>
        <meta name="description" content={article.meta?.description || ''} />
        <link rel="canonical" href={article.meta?.canonical || ''} />
      </Head>

      <section
        className="w-full h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${article.bg || ''})` }}
      >
        <h1 className="text-3xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">
          {article.meta?.title || 'Untitled Article'}
        </h1>
      </section>

      <div className="container mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8 items-start">
        <aside className="hidden lg:block w-full lg:w-1/4 sticky top-32 self-start h-fit">
          <h5 className="text-lg font-semibold mb-3">Table of Contents</h5>
          <ul className="space-y-2">
            {tableOfContents.map((item, index) => (
              <li key={index}>
                <a href={`#${item.id}`} className="text-blue-600 hover:underline">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <main className="w-full lg:w-2/4">
          {article.date && (
            <p className="text-gray-500 mb-4">
              <strong>Date:</strong> {article.date} | <strong>Category:</strong> {article.category}
            </p>
          )}
          <div
            className="prose prose-lg max-w-none text-justify [&>h1]:font-bold [&>h2]:font-bold [&>h3]:font-semibold [&>h1]:mb-4 [&>h2]:mb-4 [&>h3]:mb-3 [&>p]:mb-4 [&>ul]:mb-4 [&>ol]:mb-4"
            dangerouslySetInnerHTML={{ __html: article.content || '' }}
          />
        </main>

        <aside className="hidden lg:block w-full lg:w-1/4 sticky top-32 self-start h-fit">
          <h5 className="text-lg font-semibold mb-3">Related Articles</h5>
          {relatedArticles.length > 0 ? (
            relatedArticles.map((related) => (
              <div key={related.slug} className="mb-5">
                <img
                  src={related.image_url}
                  alt={related.title}
                  className="rounded w-full mb-2"
                />
                <h6 className="text-md font-semibold">
                  <Link href={`/articles/${related.slug}`} className="text-blue-600 hover:underline">
                    {related.title}
                  </Link>
                </h6>
                <p className="text-sm text-gray-500">{related.date}</p>
              </div>
            ))
          ) : (
            <p>No related articles available.</p>
          )}
        </aside>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6 border rounded-lg mb-6">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-gray-100 p-4">
            <i className="fa-solid fa-user"></i>
          </div>
          <div>
            <h5 className="font-semibold mb-1">Technical Team</h5>
            <p className="text-gray-600 text-sm mb-1">Cloud Experts at Sixthstar</p>
            <p className="text-sm">
              Our technical team brings over a decade of experience in cloud infrastructure,
              email security, and server management.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10 bg-blue-600 text-white text-center rounded-lg">
        <h4 className="text-xl font-semibold mb-2">Ready to Secure Your Digital Infrastructure?</h4>
        <p className="mb-4">
          Get started with Sixthstar’s enterprise-grade hosting and security solutions. Our experts
          are ready to help you build a robust digital presence.
        </p>
        <Link href="/contact" className="inline-block bg-white text-blue-600 font-semibold px-6 py-2 rounded hover:bg-gray-200">
          Contact Us Today
        </Link>
      </div>
    </div>
  );
};

export default SlugPage;
