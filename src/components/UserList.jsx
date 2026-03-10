import { FaTrash } from "react-icons/fa";
import { useUsers } from "../hooks/useUsers";

export default function UserList() {
  const { users } = useUsers();

  if (!users.length) {
    return (
      <div className="bg-zinc-900 p-6 rounded-lg mt-6">
        <p className="text-gray-400">No users found.</p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      {/* MOBILE VIEW */}
      <div className="grid gap-4 md:hidden">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-zinc-900 p-4 rounded-lg border border-zinc-800"
          >
            <p className="text-sm text-gray-400">ID</p>
            <p className="mb-2">{user.id}</p>

            <p className="text-sm text-gray-400">Name</p>
            <p className="mb-2">{user.fullName}</p>

            <p className="text-sm text-gray-400">Email</p>
            <p className="mb-3 break-words">{user.email}</p>

            <button className="text-red-500 hover:text-red-400">
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border border-zinc-800 rounded-lg overflow-hidden">
          <thead className="bg-zinc-900">
            <tr>
              <th className="p-3 border-b border-zinc-800">ID</th>
              <th className="p-3 border-b border-zinc-800">Name</th>
              <th className="p-3 border-b border-zinc-800">Email</th>
              <th className="p-3 border-b border-zinc-800 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-zinc-800 transition border-b border-zinc-800"
              >
                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.fullName}</td>
                <td className="p-3 break-words">{user.email}</td>

                <td className="p-3 text-center">
                  <button className="text-red-500 hover:text-red-400">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
