import { IoPersonCircleSharp } from "react-icons/io5";

export default function Header() {
  return (
    <div className="text-white text-xl font-serif font-semibold">
      <header className="bg-[#161A30] p-4 flex items-center">
        <div className='w-1/6 flex'>
          <p className='items-start tracking-tight hover:tracking-wide w-fit ml-3'>twiit</p>
        </div>
        <div className='w-5/6 flex justify-end items-center'>
          <IoPersonCircleSharp className="object-contain size-9"/>
          <p className='ml-2 mr-3'>username</p>
        </div>
      </header>
    </div>
  );
}