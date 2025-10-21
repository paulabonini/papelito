import { useRef, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material";
import { useWords } from "../../Contexts/WordsContext/hook";
import { useTeamsContext } from "../../Contexts/TeamsContext/hook";
import { useNavigate } from "react-router-dom";


export default function WordEntryPage() {
  const { teams } = useTeamsContext();
  const navigate = useNavigate();

  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [wordToConfirm, setWordToConfirm] = useState<string>("");

  const { addWordToPlayer } = useWords();

  const currentTeam = teams[currentTeamIndex];
  const currentPlayer = currentTeam.players[currentPlayerIndex];

  function handleOpenConfirm() {
    const currentWord = inputRef.current?.value.trim() || "";
    if (currentWord === "") {
      alert("Por favor, digite uma palavra antes de confirmar.");
      return;
    }
    setWordToConfirm(currentWord);
    setIsConfirmOpen(true);
  }

  function handleConfirmWord() {
    setIsConfirmOpen(false);

    addWordToPlayer(currentTeam.id, currentPlayer.id, wordToConfirm);

    if (inputRef.current) {
      inputRef.current.value = "";
    }

    // Se for o último jogador do último time e última palavra, vai para próxima página
    if (
      currentWordIndex === 2 &&
      currentPlayerIndex === currentTeam.players.length - 1 &&
      currentTeamIndex === teams.length - 1
    ) {
      alert("Todos os jogadores inseriram suas palavras! Vamos começar o jogo!");
      navigate("/jogo"); // redireciona para a página do jogo
      return;
    }

    if (currentWordIndex < 2) {
      setCurrentWordIndex(currentWordIndex + 1);
    } else {
      setCurrentWordIndex(0);

      if (currentPlayerIndex < currentTeam.players.length - 1) {
        setCurrentPlayerIndex(currentPlayerIndex + 1);
      } else if (currentTeamIndex < teams.length - 1) {
        setCurrentTeamIndex(currentTeamIndex + 1);
        setCurrentPlayerIndex(0);
      }
    }
  }


  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 5, p: 2, border: "1px solid #ccc", borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        Time {currentTeam.id} - Jogador {currentPlayer.name}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Palavra {currentWordIndex + 1} de 3
      </Typography>

      <TextField
        fullWidth
        label="Digite a palavra"
        inputRef={inputRef}
        autoFocus
      />

      <Button
        variant="contained"
        sx={{ mt: 2 }}
        onClick={handleOpenConfirm}
      >
        Confirmar palavra
      </Button>

      <Dialog
        open={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
      >
        <DialogTitle>Confirme a palavra</DialogTitle>
        <DialogContent>
          <DialogContentText>
            A palavra digitada foi:
          </DialogContentText>
          <Typography variant="h6" sx={{ mt: 2 }}>
            {wordToConfirm}
          </Typography>
          <DialogContentText sx={{ mt: 1 }}>
            Está correta? Deseja inserir essa palavra?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsConfirmOpen(false)}>Cancelar</Button>
          <Button onClick={handleConfirmWord} variant="contained">Confirmar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
