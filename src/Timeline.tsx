export default function Timeline() {
  return(
    <div className="bg-[#161A30] h-screen text-white flex justify-center">
      <div className="flex-column w-3/5 h-full mt-4">
        <div className="text-4xl font-bold tracking-wide">
          <h1>Welcome back,</h1>
          <h2 className="mt-1 text-[#7FC7D9]">@username</h2>
        </div>
        <div className="flex mt-5 h-1/4">
          <input id="username" type="text" placeholder="What's happening?" className='flex w-2/3 h-full border-[#7FC7D9] shadow-[#7FC7D9] shadow-sm border-2 rounded-lg mr-3 bg-[#161A30] p-4 placeholder-white placeholder:-translate-y-14 text-lg'></input>
          <div className="flex-col items-end w-1/3 h-full text-[#161A30] text-lg font-bold">
            <div className="kotak1 bg-white shadow-white shadow-md border-2 rounded-lg h-12 flex justify-center items-center p-2">
              <p className="mr-2">Edit Close Friends</p>
              <p>logo</p>
            </div>
            <div className="kotak2 bg-white shadow-white shadow-md border-2 rounded-lg h-12 flex justify-center items-center mt-4">
              <p className="mr-2">Post</p>
              <p>logo</p>
            </div>
          </div>
        </div>
        
        <div className="container flex-col mt-6 p-5 px-7 bg-gradient-to-b from-[#2a3d4d] via-[#1f3445] shadow-[#2a3d4d] shadow-lg rounded-lg text-white h-fit">
          <div className="header flex">
            <div className="flex justify-start w-5/6 ">
              <p className="mr-3">profile</p>
              <p className="mr-3">username</p>
              <p>04-02-2024</p>
            </div>
            <div className="flex justify-end w-1/6">
              <p>logo</p>
            </div>
          </div>
          <div className="mt-3">
            <p>test</p>
          </div>
        </div>

        <div className="container flex-col mt-6 p-5 px-7 bg-gradient-to-b from-[#2a3d4d] via-[#1f3445] shadow-[#2a3d4d] shadow-lg rounded-lg text-white h-fit">
          <div className="header flex">
            <div className="flex justify-start w-5/6 ">
              <p className="mr-3">profile</p>
              <p className="mr-3">username</p>
              <p>04-02-2024</p>
            </div>
            <div className="flex justify-end w-1/6">
              <p>logo</p>
            </div>
          </div>
          <div className="mt-3">
            <p>test</p>
          </div>
        </div>

      </div>
    </div>
  );
}