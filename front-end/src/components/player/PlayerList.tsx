import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

interface Player {
  id: string;
  name: string;   
  age: number;
  country: string;
  main_role: string;
  batting: string;
  balling: string;
}

interface PlayerTableProps {
  players: Player[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const PlayerList: React.FC<PlayerTableProps> = ({ players, onEdit, onDelete }) => {
  return (
    <div className="max-w-6xl mx-auto mt-10 bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Player Management</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border border-gray-700 rounded-lg">
          <thead className="bg-blue-600 uppercase text-white text-sm">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Age</th>
              <th className="px-6 py-3">Country</th>
              <th className="px-6 py-3">Main Role</th>
              <th className="px-6 py-3">Batting</th>
              <th className="px-6 py-3">Balling</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {players.map((player) => (
              <tr key={player.id} className="hover:bg-gray-700 transition">
                <td className="px-6 py-3">{player.name}</td>
                <td className="px-6 py-3">{player.age}</td>
                <td className="px-6 py-3">{player.country}</td>
                <td className="px-6 py-3">{player.main_role}</td>
                <td className="px-6 py-3">{player.batting}</td>
                <td className="px-6 py-3">{player.balling}</td>
                <td className="px-6 py-3 flex justify-center space-x-4">
                  <button
                    onClick={() => onEdit(player.id)}
                    className="text-blue-400 hover:text-blue-600"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => onDelete(player.id)}
                    className="text-red-400 hover:text-red-600"
                  >
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
};
export default PlayerList
