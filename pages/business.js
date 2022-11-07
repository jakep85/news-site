import Prismic from 'prismic-javascript';
import { PrismicLink, PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import Layout from '../components/Layout';
import { Client } from '../prismic-configuration';

export default function Business({ articles, trending }) {
  return (
    <div>
      <Layout>
        <h1 className="text-2xl uppercase font-bold opacity-50 my-10 ml-24">
          See what's happening around the world in Business
        </h1>
        <div className="flex">
          <div className="flex flex-col w-2/3 ml-24 mr-20">
            {articles.results.map((article, index) => (
              <article key={article.uid} className="mb-6">
                <h2 className="bold text-3xl text-blue-600 cursor-pointer">
                  <PrismicLink href={`articles/${article.uid}`}>
                    <PrismicRichText field={article.data.title} />
                  </PrismicLink>
                </h2>

                <PrismicNextImage
                  className="w-2/3 my-2"
                  field={article.data.featuredimage}
                  alt=""
                />
                <PrismicRichText field={article.data.previewinfo} />
              </article>
            ))}
          </div>
          <div className="flex flex-col w-1/3">
            <h2 className="text-xl uppercase font-bold opacity-50 mb-5">
              See whats trending
            </h2>
            {trending.results.map((trending, index) => (
              <article
                key={trending.uid}
                className="mb-4 pb-4 border-b border-t-gray-400 last:border-b-0"
              >
                <h3 className="bold text-xl text-blue-600 cursor-pointer">
                  <PrismicLink href={`trending/${trending.uid}`}>
                    <PrismicRichText field={trending.data.headline} />
                  </PrismicLink>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}

// this function is called everytime a request/refresh is made

export async function getServerSideProps() {
  const articles = await Client().query(
    Prismic.Predicates.at('document.tags', ['business'])
  );

  const trending = await Client().query(
    Prismic.Predicates.at('document.type', 'trending')
  );

  return {
    props: {
      articles: articles,
      trending: trending,
    },
  };
}
