import { useState, type ReactNode } from "react";
import { TeamsContext } from "./hook";

// Tipagem dos dados
export interface Player {
  id: string; // id único para cada jogador
  name: string;
}

export interface Team {
  id: number;  // número sequencial do time
  players: Player[];
}

interface TeamsContextProviderProps {
  children: ReactNode;
}

export function TeamsContextProvider({ children }: TeamsContextProviderProps) {
  // Estado dos times
  const [teams, setTeams] = useState<Team[]>([
    { id: 1, players: [{ id: crypto.randomUUID(), name: "" }] },
    { id: 2, players: [{ id: crypto.randomUUID(), name: "" }] },
  ]);

  function addTeam() {
    setTeams((prev) => {
      const newId = prev.length > 0 ? Math.max(...prev.map(t => t.id)) + 1 : 1;
      return [...prev, { id: newId, players: [{ id: crypto.randomUUID(), name: "" }] }];
    });
  }

  function removeTeam(teamId: number) {
    setTeams((prev) => {
      if (prev.length <= 2) return prev; // mínimo 2 times
      const filtered = prev.filter(t => t.id !== teamId);
      // renumerar times
      const renumbered = filtered.map((team, idx) => ({ ...team, id: idx + 1 }));
      return renumbered;
    });
  }

  function addPlayer(teamId: number) {
    setTeams((prev) =>
      prev.map(team =>
        team.id === teamId
          ? { ...team, players: [...team.players, { id: crypto.randomUUID(), name: "" }] }
          : team
      )
    );
  }

  function removePlayer(teamId: number, playerId: string) {
    setTeams((prev) =>
      prev.map(team =>
        team.id === teamId
          ? { ...team, players: team.players.filter(p => p.id !== playerId) }
          : team
      )
    );
  }

  function updatePlayerName(teamId: number, playerId: string, name: string) {
    setTeams((prev) =>
      prev.map(team =>
        team.id === teamId
          ? {
            ...team,
            players: team.players.map(p =>
              p.id === playerId ? { ...p, name } : p
            )
          }
          : team
      )
    );
  }

  return (
    <TeamsContext.Provider
      value={{
        teams,
        addTeam,
        removeTeam,
        addPlayer,
        removePlayer,
        updatePlayerName,
      }}
    >
      {children}
    </TeamsContext.Provider>
  );
}
