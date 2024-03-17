export default function Header() {
  return (
    <div className="text-white text-xl font-serif font-semibold">
      <header className="bg-[#161A30] p-4 flex">
        <div className='w-1/6 flex'>
          <p className='ml-3'>logo</p>
          <p className='items-start tracking-tight hover:tracking-wide w-fit ml-3'>twiit</p>
        </div>
        <div className='w-5/6 flex justify-end'>
          <p>logo</p>
          <p className='ml-4 mr-3'>username</p>
        </div>
      </header>
    </div>
  );
}