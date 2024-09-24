import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Info() {
  let userId = useParams();
  let [user, setUser] = useState([]);
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("users")).filter(
      (e) => e.id == userId["id"]
    );

    if (item) {
      setUser(item[0]);
    }
  }, []);
  return (
    <div class="bg-gray-200 min-h-screen flex justify-center items-center">
      <div class="container w-2/5 bg-white mx-auto p-10 rounded-lg shadow-xl">
        <h1 id="title" class="text-2xl font-bold text-gray-800 mb-0">
          User's Details:
        </h1>
        <form id="survey-form">
          <label class="block my-3 mt-4" for="name" id="name-label">
            <span class="font-medium text-gray-700">Name</span>
            <input
              class="bg-gray-100 border rounded focus:border-green-400 outline-none w-full block p-2 mt-2"
              id="name"
              type="text"
              value={user.Name}
              readOnly
            />
          </label>
          <label class="block my-3" for="email" id="email-label">
            <span class="font-medium text-gray-700">Email address</span>
            <input
              class="bg-gray-100 border rounded focus:border-green-400 outline-none w-full block p-2 mt-2"
              id="email"
              type="email"
              value={user.Email}
              readOnly
            />
          </label>
          <label for="Password">
            <span class="font-medium text-gray-700">Password</span>
            <input
              class="bg-gray-100 border rounded focus:border-green-400 outline-none w-full block p-2 mt-2"
              id="Password"
              type="text"
              value={user.Password}
              readOnly
            />
          </label>

          <Link
            to={`/users`}
            className="block text-center bg-green-400 font-medium text-white w-full p-3 mt-6 rounded hover:bg-green-600"
          >
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}
