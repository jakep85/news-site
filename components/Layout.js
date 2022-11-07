import Link from 'next/link';
import { GiAstronautHelmet } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineBell, AiOutlineUser } from 'react-icons/ai';

export default function Layout({ children }) {
  return (
    <div>
      <header className="px-2 md:px-24 bg-black text-white flex justify-between h-16">
        <Link
          href={'/'}
          className="text-white uppercase text-2xl flex align-baseline px-10 my-auto"
        >
          <GiAstronautHelmet className="inline text-4xl mr-4" />
          News Site
        </Link>
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
        <Link
          href={'/'}
          className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent hover:border-black"
        >
          Home
        </Link>
        <Link
          href={'/politics'}
          className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent hover:border-black"
        >
          Politics
        </Link>
        <Link
          href={'/business'}
          className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent hover:border-black"
        >
          Business
        </Link>
        <Link
          href={'/sports'}
          className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent hover:border-black"
        >
          Sports
        </Link>
      </nav>
      {children}
      <div className="bg-black text-white text-xl py-10 px-24 flex flex-col">
        <div className="">
          <Link
            href={'/'}
            className="text-white uppercase text-2xl flex align-baseline px-10 my-auto"
          >
            <GiAstronautHelmet className="inline text-4xl mr-4" />
            News Site
          </Link>
        </div>
        <div className="grid grid-cols-3 grid-rows-3 gap-5 mt-10 max-w-3xl">
          <Link href={'./'} className="text-xl text-white">
            Careers
          </Link>
          <Link href={'./'} className="text-xl text-white">
            About Us
          </Link>
          <Link href={'./'} className="text-xl text-white">
            API
          </Link>
          <Link href={'./'} className="text-xl text-white">
            Media
          </Link>
          <Link href={'./'} className="text-xl text-white">
            Contact Us
          </Link>
          <Link href={'./'} className="text-xl text-white">
            Privacy Policy
          </Link>
          <Link href={'./'} className="text-xl text-white">
            Partners
          </Link>
          <Link href={'./'} className="text-xl text-white">
            Vision
          </Link>
          <Link href={'./'} className="text-xl text-white">
            Project VisQ
          </Link>
        </div>
        <div>
          <p className="my-10 text-sm max-w-2xl">
            News Site is an open-media initiative by Xmedia Gcorp, US &copy; and
            is registered as not for profit organization. All right reserved.
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}
