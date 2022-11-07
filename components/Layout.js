import { PrismicLink } from '@prismicio/react';
import { BiNews } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineBell, AiOutlineUser } from 'react-icons/ai';
import Head from 'next/head';

export default function Layout({ children }) {
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
      <header className="px-2 md:px-24 bg-slate-800 text-white flex justify-between h-16 border-b-4 border-red-900">
        <PrismicLink
          href={'/'}
          className="text-white uppercase text-2xl flex align-baseline px-10 my-auto"
        >
          <BiNews className="inline text-4xl mr-4" />
          Global News
        </PrismicLink>
        <div className="flex items-center w-1/3 text-lg">
          <input
            type="text"
            className="bg-transparent border-b w-full border-white outline-none"
          />
          <FiSearch className="-m-8 text-2xl hover:text-red-600 cursor-pointer" />
        </div>
        <div className="flex items-center text-2xl">
          <AiOutlineBell className="mr-2 cursor-pointer hover:text-red-600" />
          <AiOutlineUser className="mr-2 cursor-pointer hover:text-red-600" />
        </div>
      </header>
      <nav className="px-2 md:px-24 bg-white flex border-b border-black">
        <PrismicLink
          href={'/'}
          className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent hover:border-black"
        >
          Home
        </PrismicLink>
        <PrismicLink
          href={'/politics'}
          className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent hover:border-black"
        >
          Politics
        </PrismicLink>
        <PrismicLink
          href={'/business'}
          className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent hover:border-black"
        >
          Business
        </PrismicLink>
        <PrismicLink
          href={'/sports'}
          className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent hover:border-black"
        >
          Sports
        </PrismicLink>
      </nav>
      {children}
      <div className="bg-black text-white text-xl py-10 px-24 flex flex-col">
        <div className="">
          <PrismicLink
            href={'/'}
            className="text-white uppercase text-2xl flex align-baseline px-10 my-auto"
          >
            <BiNews className="inline text-4xl mr-4" />
            Global News
          </PrismicLink>
        </div>
        <div className="grid grid-cols-3 grid-rows-3 gap-5 mt-10 max-w-3xl">
          <PrismicLink href={'./'} className="text-xl text-white">
            Careers
          </PrismicLink>
          <PrismicLink href={'./'} className="text-xl text-white">
            About Us
          </PrismicLink>
          <PrismicLink href={'./'} className="text-xl text-white">
            API
          </PrismicLink>
          <PrismicLink href={'./'} className="text-xl text-white">
            Media
          </PrismicLink>
          <PrismicLink href={'./'} className="text-xl text-white">
            Contact Us
          </PrismicLink>
          <PrismicLink href={'./'} className="text-xl text-white">
            Privacy Policy
          </PrismicLink>
          <PrismicLink href={'./'} className="text-xl text-white">
            Partners
          </PrismicLink>
          <PrismicLink href={'./'} className="text-xl text-white">
            Vision
          </PrismicLink>
          <PrismicLink href={'./'} className="text-xl text-white">
            Project Funding
          </PrismicLink>
        </div>
        <div>
          <p className="my-10 text-sm max-w-2xl">
            Global News is an open-media initiative by TheNewsCorp, US &copy;
            and is registered as not for profit organization. All right
            reserved. &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}
