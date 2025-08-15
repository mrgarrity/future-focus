import React from 'react';

type User = {
  id: number;
  name: string;
  email: string;
};

const users: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
];

// Child component
const UserCard: React.FC<{ user: User }> = ({ user }) => (
  <div className="p-4 border rounded mb-2">
    <h3 className="font-bold">{user.name}</h3>
    <p>{user.email}</p>
  </div>
);

// Parent component
const UserList: React.FC = () => {
  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
