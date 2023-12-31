import React from 'react';
import { SearchIcon, AtSymbolIcon, BellIcon } from '@heroicons/react/outline';
import Image from 'next/image';

export default function TopBar() {
  return (
    <div className="h-16 pl-8 sm:pl-40 fixed bg-gradient-to-r from-purple-400
        to-blue-500 w-full flex items-center justify-between pr-5">
      <div className="flex px-2 sm:px-5 items-center flex-grow">
        <SearchIcon className="w-5 h-5 text-white" />
        <input
          type="text"
          placeholder="Search for tasks ..."
          className="bg-transparent border-0 text-white placeholder-gray-200 outline-none focus:ring-0 text-base sm:text-lg w-full"
        />
      </div>
      <div className="flex space-x-3 sm:space-x-6">
        <AtSymbolIcon className="w-7 h-7 text-white" />
        <BellIcon className="w-7 h-7 text-white" />
        <div className="hidden sm:flex items-center text-white">
          <h3 className="font-bold mr-2">M. John</h3>
          <Image
            src="https://randomuser.me/api/portraits/men/75.jpg"
            width="36"
            height="36"
            className="rounded-full"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
}
