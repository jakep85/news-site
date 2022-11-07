import * as prismicH from '@prismicio/helpers';
import { PrismicText, PrismicRichText } from '@prismicio/react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { createClient, linkResolver } from '../../prismicio';

const Article = ({ article }) => {
  return (
    <Layout>
      <div className="w-2/3 mx-auto mb-10">
        <h1 className="text-3xl uppercase font-bold opacity-50 my-10">
          <PrismicText field={article.data.title} />
        </h1>
        <img
          className="shadow-xl mb-20"
          src={article.data.featuredimage.url}
          alt={article.data.featuredimage.alt}
        />
        <div className="text-lg opacity-75 [&>p]:mb-4">
          <PrismicRichText field={article.data.fullArticle} />
        </div>
        <Link
          href={'/'}
          role="button"
          className="bg-black text-white py-3 px-10"
        >
          Back to home
        </Link>
      </div>
    </Layout>
  );
};

export default Article;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const article = await client.getByUID('article', params.uid);

  return {
    props: {
      article,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();
  const articles = await client.getAllByType('article');

  return {
    paths: articles.map((article) => prismicH.asLink(article, linkResolver)),
    fallback: false,
  };
}
