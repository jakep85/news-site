import * as prismicH from '@prismicio/helpers';
import { PrismicLink, PrismicText, PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import Layout from '../../components/Layout';
import { createClient, linkResolver } from '../../prismicio';

const Article = ({ article }) => {
  return (
    <Layout>
      <div className="w-2/3 mx-auto mb-10">
        <h1 className="text-3xl uppercase font-bold opacity-50 my-10">
          <PrismicText field={article.data.title} />
        </h1>
        <PrismicNextImage
          className="shadow-xl mb-20"
          field={article.data.featuredimage}
          alt={article.data.featuredimage.alt}
        />
        <div className="text-lg opacity-75 [&>p]:mb-4">
          <PrismicRichText field={article.data.fullArticle} />
        </div>
        <PrismicLink
          href={'/'}
          role="button"
          className="bg-black text-white py-3 px-10"
        >
          Back to home
        </PrismicLink>
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
