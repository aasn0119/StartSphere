// src/components/ProfileCard.js
import React from 'react';

const ProfileCard = () => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg text-white mb-4">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 rounded-full bg-gray-600"></div>
        <div>
          <h2 className="text-xl font-bold">Your Profile</h2>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;