// UserCard.jsx
import React from 'react';
import styles from './UserCard.module.scss';

function UserCard({ name, role, avatar, online }) {
  return (
    <div className={`p-6 bg-white ${styles.card} max-w-sm w-full`}>
      <div className="flex items-center space-x-4">
        <img src={avatar} alt={name} className={styles.avatar} />
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-500">{role}</p>
          {online && <span className={`${styles.badge} mt-1`}>Online</span>}
        </div>
      </div>
      <div className="mt-4 flex justify-between text-sm text-gray-600">
        <span>📍 Shanghai</span>
        <span>🕒 Active 5m ago</span>
      </div>
    </div>
  );
}

export default UserCard;
