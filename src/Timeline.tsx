import { BsFillPeopleFill } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa6";
import Post from './Post';
import data from './postdata.json';
import { PostData } from './DataInterface';

export default function Timeline() {
  let posts: PostData[] = data;

  return(
    <div className="bg-[#161A30] text-white flex justify-center">
      <div className="flex-column w-3/5 h-full mt-4">
        <div className="text-4xl font-bold tracking-wide">
          <h1>Welcome back,</h1>
          <h2 className="mt-1 text-[#7FC7D9]">@username</h2>
        </div>
        <div className="flex mt-5 h-1/4">
          <input id="username" type="text" placeholder="What's happening?" className='flex w-2/3 border-[#7FC7D9] shadow-[#7FC7D9] shadow-sm border-2 rounded-lg mr-3 bg-[#161A30] p-4 placeholder-white text-lg'></input>
          <div className="flex flex-col justify-end w-1/3 h-full py-1 text-[#161A30] text-lg font-bold">
            <div className="kotak1 bg-white shadow-white shadow-md border-2 rounded-lg h-12 flex justify-center items-center p-2">
              <p className="">Edit Close Friends</p>
              <BsFillPeopleFill className="ml-2"/>
            </div>
            <div className="kotak2 bg-white shadow-white shadow-md border-2 rounded-lg h-12 flex justify-center items-center mt-4">
              <p>Post</p>
              <FaPaperPlane className="ml-2"/>
            </div>
          </div>
        </div>
        {posts.map((post, index) => (
          <Post key={index} username={post.username} content={post.content} date={post.date} />
        ))}
      </div>
    </div>
  );
}