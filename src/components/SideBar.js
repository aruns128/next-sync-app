import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  UserGroupIcon,
  ServerIcon,
  CalendarIcon,
  ChartSquareBarIcon,
  CogIcon,
  LogoutIcon,
} from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { useAuth } from './auth/auth';

export default function SideBar() {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = async () => {
    router.push('/');
    logout()
  }

  const isLinkSelected = (href) => {
    return router.pathname === href;
  };

  return (
    <div className={`fixed inset-y-0 left-0  w-40 bg-white`}>
      <h1 className="flex items-center justify-center text-xl h-16 bg-purple-600 text-white font-bold">
        IndiumSync
      </h1>
      <ul className="flex flex-col text-lg h-full">
        <li className={`flex justify-center items-center flex-col py-7 ${isLinkSelected('/manage') ? 'text-purple-500 font-bold border-l-4 border-purple-500' : 'text-gray-500'}`}>
          <UserGroupIcon className="w-7 h-7" />
          <Link href="/manage">Manage</Link>
        </li>
        <li className={`flex justify-center items-center flex-col py-7 ${isLinkSelected('/boards') ? 'text-purple-500 font-bold border-l-4 border-purple-500' : 'text-gray-500'}`}>
          <ServerIcon className="w-7 h-7" />
          <Link href="/boards">Boards</Link>
        </li>
        <li className="flex justify-center items-center flex-col py-7 text-gray-500 mt-auto mb-16 cursor-auto" onClick={handleLogout}>
          <LogoutIcon className="w-7 h-7" />
          Logout
        </li>
      </ul>
    </div>
  );
}
