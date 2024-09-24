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
    <div>
      <ul className="mb-6">
        <li>ID: {user.id}</li>
        <li>Name: {user.Name}</li>
        <li>Email: {user.Email}</li>
        <li>Password: {user.Password}</li>
      </ul>
      <Link
        to={`/users`}
        className=" rounded-lg px-4 py-2 bg-green-700 text-green-100 hover:bg-green-800 duration-300"
      >
        Back
      </Link>
    </div>
  );
}
