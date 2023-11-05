"use client";

import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
        console.log(users);
      });
  };

  useEffect(() => {
    try {
      getUsers();
    } catch (error) {}
  });

  return (
    <>
      <h1 className="text-4xl text-center mt-5 font-semibold">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 p-5 lg:grid-cols-3 mt-10 w-full">
        {users.map((user: any) => (
          <>
            <div className="h-39 md:h-60 mt-4 p-5 lg:mt-1 pr-8 shadow-lg rounded-md p-2 hover:shadow-md">
              <h6 className="mt-2 mb-5 font-semibold text-3xl">{user.name}</h6>
              <ul>
                <p>{user.email}</p>
                <p>{user.address.street}</p>
                <p>{user.address.city}</p>
              </ul>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
