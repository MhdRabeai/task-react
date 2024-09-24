import React, { useEffect, useState } from "react";
import "./Users.css";
import { Link } from "react-router-dom";
import eye from "../../Assets/eye-regular.svg";
export default function Users() {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("users"));
    if (items) {
      setUsers(items);
    }

    console.log(items)
    // console.log(users);
  }, []);

  return (
    // <div className="container mx-auto px-4 sm:px-8">
    //   <div className="overflow-x-auto py-8">
    //     <div>
    //       <h2 className="text-2xl font-semibold leading-tight mb-6">Users</h2>
    //     </div>
    //     <table className="w-full text-sm text-left text-gray-500 border border-slate-500">
    //       <thead className="text-xs text-gray-700 uppercase bg-gray-300">
    //         <tr>
    //           <th className="px-6 py-3">ID</th>
    //           <th className="px-6 py-3">Name</th>
    //           <th className="px-6 py-3">Email</th>

    //           <th className="px-6 py-3"></th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {users &&
    //           users.map((e) => {
    //             return (
    //               <tr className="bg-white border-b" key={e.id}>
    //                 <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
    //                   {e.id+1}
    //                 </th>
    //                 <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
    //                   {e.Name}
    //                 </th>
    //                 <td className="px-6 py-4">{e.Email}</td>
    //                 <td className="px-6 py-4">1-636-140-1210</td>
    //               </tr>
    //             );
    //           })}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">Users</h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Email
                  </th>

                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((e) => {
                    return (
                      <tr key={e.id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          {e.id + 1}
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {e.Name}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {e.Email}
                          </p>
                        </td>

                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                          <Link
                            to={`/info/${e.id}`}
                            className="inline-block text-gray-500 hover:text-gray-700"
                          >
                            <img src={eye} alt="img" width={25} />
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
