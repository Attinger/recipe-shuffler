"use client"
import { UserButton, useUser } from "@clerk/nextjs";
import React from 'react';

export const UserInfo = (): JSX.Element => {
  const { user } = useUser();
  const userName = user?.fullName || 'Gast'; // 'Gast' as a fallback if user is not defined

  // Get the current hour
  const hours = new Date().getHours();

  let greeting;
  if (hours >= 6 && hours < 11) {
    greeting = 'Guten Morgen';
  } else if (hours >= 11 && hours < 17) {
    greeting = 'Guten Mittag';
  } else {
    greeting = 'Guten Abend';
  }

  return (
    <div className="flex justify-between items-center w-full p-4">
        <div>
            <h1 className="text-2xl font-semibold">{greeting} {userName}</h1>
            <p className="text-md text-gray-600">Was kochst du heute?</p>
        </div>
        <UserButton />
    </div>
  );
};
