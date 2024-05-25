import { FaTrashAlt } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { PostData } from './DataInterface';

export default function Post({username, content, date }: PostData) {
  return(        
    <div className="container flex-col mt-6 p-5 px-7 bg-gradient-to-b from-[#2a3d4d] via-[#1f3445] shadow-[#2a3d4d] shadow-lg rounded-lg text-white h-fit">
      <div className="header flex">
        <div className="flex justify-start items-center w-5/6 ">
          <IoPersonCircleSharp className="object-contain size-9 mr-2"/>
          <p className="mr-3 font-bold text-lg">{username}</p>
          <p className="text-xs">{date}</p>
        </div>
        <div className="flex justify-end w-1/6">
        <FaTrashAlt/>
        </div>
      </div>
      <div className="mt-3">
        <p>{content}</p>
      </div>
    </div>
  );
}