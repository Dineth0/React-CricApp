import React, { useState } from "react";
import { PlayerList } from "../components/player/PlayerList";
import {PlayerForm} from "../components/player/PlayerForm"

const PlayerPage: React.FC = () => {
  const [players, setPlayers] = useState([
    {
      id: "P001",
      name: "Pathum Nissanka",
      age: 27,
      country: "Sri Lanka",
      main_role: "Batsman",
      batting: "Right-hand bat",
      balling: "Off spin",
    },
    {
      id: "P002",
      name: "Wanindu Hasaranga",
      age: 27,
      country: "Sri Lanka",
      main_role: "All-rounder",
      batting: "Right-hand bat",
      balling: "Leg spin",
    },
  ]);

  const [showForm, setShowForm] = useState(false)

    const handleAddPlayer = (newPlayer: any) => {
    setPlayers([...players, newPlayer]);
  };

  const handleEdit = (id: string) => alert(`Edit ${id}`);
  const handleDelete = (id: string) => setPlayers(players.filter((p) => p.id !== id));
  
  return (
    <div className="p-6">
      <button
        onClick={() => setShowForm(true)}
        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 mb-4"
      >
        + Add Player
      </button>

      <PlayerList players={players} onEdit={handleEdit} onDelete={handleDelete} />

      {showForm && (
        <PlayerForm
          onClose={() => setShowForm(false)}
          onSave={handleAddPlayer}
        />
      )}
    </div>
  );
};

export default PlayerPage;
