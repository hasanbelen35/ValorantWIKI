import React from "react";
import { Routes, Route } from "react-router-dom";
import AgentsList from "../components/AgentsList";
import Home from "../components/Home";
import MapPage from "../components/MapPage";
import GunList from "../components/GunList";
export default function RouterConfig() {
  return (
    <div>
      <Routes>
        <Route path="/agents" element={<AgentsList />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />

        <Route path="/maps" element={<MapPage />} />
        <Route path="/guns" element={<GunList />} />
      </Routes>
    </div>
  );
}
