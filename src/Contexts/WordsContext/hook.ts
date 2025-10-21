import { createContext, useContext } from "react";
import type { WordsByPlayer } from ".";

interface WordsContextData {
  wordsByPlayer: WordsByPlayer;
  addWordToPlayer: (teamId: number, playerId: string, word: string) => void;
  resetWordsForAllPlayers: () => void;
}

export const WordsContext = createContext<WordsContextData | undefined>(undefined);

export function useWords() {
  const context = useContext(WordsContext);
  if (!context) {
    throw new Error("useWords must be used within a WordsProvider");
  }
  return context;
}
