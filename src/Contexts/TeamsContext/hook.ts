import { useContext, createContext } from "react";
import type { Team } from ".";

interface TeamsContextData {
  teams: Team[];
  addTeam: () => void;
  removeTeam: (teamId: number) => void;
  addPlayer: (teamId: number) => void;
  removePlayer: (teamId: number, playerId: string) => void;
  updatePlayerName: (teamId: number, playerId: string, name: string) => void;
}

export const TeamsContext = createContext<TeamsContextData | undefined>(undefined);
export function useTeamsContext() {
  const context = useContext(TeamsContext);
  if (!context) {
    throw new Error("useTeamsContext must be used within a TeamsContextProvider");
  }
  return context;
}