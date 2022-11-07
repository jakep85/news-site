import * as prismicH from '@prismicio/helpers';
import { PrismicText, PrismicRichText } from '@prismicio/react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { createClient, linkResolver } from '../../prismicio';

const Trending = ({ trending }) => {
  return (
    <Layout>
      <div className="w-2/3 mx-auto mb-10">
        <h1 className="text-3xl uppercase font-bold opacity-50 my-10">
          <PrismicText field={trending.data.headline} />
        </h1>
        <div className="text-lg opacity-75 [&>p]:mb-4">
          <PrismicRichText field={trending.data.info} />
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

export default Trending;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const trending = await client.getByUID('trending', params.uid);

  return {
    props: {
      trending,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();
  const trendingItems = await client.getAllByType('trending');

  return {
    paths: trendingItems.map((trending) =>
      prismicH.asLink(trending, linkResolver)
    ),
    fallback: false,
  };
}
