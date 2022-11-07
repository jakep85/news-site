import Prismic from 'prismic-javascript';
import Head from 'next/head';
import { PrismicRichText } from '@prismicio/react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { Client } from '../prismic-configuration';

export default function Business({ articles, trending }) {
  return (
    <div>
      <Head>
        <title>News Site: Business</title>
        <meta
          name="description"
          content="New site related to business, politics and sports"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1 className="text-2xl uppercase font-bold opacity-50 my-10 ml-24">
          See what's happening around the world in Business
        </h1>
        <div className="flex">
          <div className="flex flex-col w-2/3 ml-24 mr-20">
            {articles.results.map((article, index) => (
              <article key={article.uid} className="mb-6">
                <h2 className="bold text-3xl text-blue-600 cursor-pointer">
                  <Link href={`articles/${article.uid}`}>
                    <PrismicRichText field={article.data.title} />
                  </Link>
                </h2>

                <img
                  className="w-2/3 my-2"
                  src={article.data.featuredimage.url}
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
                  <Link href={`trending/${trending.uid}`}>
                    <PrismicRichText field={trending.data.headline} />
                  </Link>
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
