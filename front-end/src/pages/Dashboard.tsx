
import React from "react"
import { Link } from "react-router-dom"
import { GiBabyfootPlayers } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";


const Dashboard = () =>{
    return(
        <div className="min-h-screen p-18">
            <h1 className="text-center text-2xl p-6">Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">

                <Link to="/player">
                    <div className="bg-blue-100 h-40 rounded-lg shadow-md">
                        <h2 className="text-center bg-sky-700 text-xl">Players</h2>
                        <GiBabyfootPlayers className="text-blue-700 w-20 h-20 text-4xl mx-auto m-4" />
                    </div>
                </Link>

                <Link to="/teams">
                    <div className="bg-blue-100 h-40 rounded-lg shadow-md">
                        <h1 className="text-center bg-sky-700 text-xl">Teams</h1>
                         <RiTeamFill className="text-blue-700 w-20 h-20 text-4xl mx-auto m-4" />
                    </div>
                </Link>
                <div className="bg-blue-100 h-40 rounded-lg shadow-md"></div>
            </div>
        </div>
    )
}
export default Dashboard