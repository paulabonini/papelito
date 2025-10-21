import { useState, type ReactNode } from "react";
import { WordsContext } from "./hook";

export interface WordsByPlayer {
  [teamId: number]: {
    [playerId: string]: string[];
  }
}

interface WordsProviderProps {
  children: ReactNode;
}

export function WordsProvider({ children }: WordsProviderProps) {
  const [wordsByPlayer, setWordsByPlayer] = useState<WordsByPlayer>({});

  function addWordToPlayer(teamId: number, playerId: string, word: string) {
    setWordsByPlayer(prev => {
      const teamWords = prev[teamId] ?? {};
      const playerWords = teamWords[playerId] ?? [];
      return {
        ...prev,
        [teamId]: {
          ...teamWords,
          [playerId]: [...playerWords, word]
        }
      };
    });
  }

  function resetWordsForAllPlayers() {
    setWordsByPlayer({});
  }

  return (
    <WordsContext.Provider value={{ wordsByPlayer, addWordToPlayer, resetWordsForAllPlayers }}>
      {children}
    </WordsContext.Provider>
  );
}
