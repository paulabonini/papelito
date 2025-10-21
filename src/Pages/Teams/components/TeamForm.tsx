import { Button, TextField, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTeamsContext } from "../../../Contexts/TeamsContext/hook";
import type { Team } from "../../../Contexts/TeamsContext";

interface TeamFormProps {
  team: Team;
  onRemoveTeam: (teamId: number) => void;
  disableRemove: boolean;
}

export function TeamForm({ team, onRemoveTeam, disableRemove }: TeamFormProps) {
  const { addPlayer, removePlayer, updatePlayerName } = useTeamsContext();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: 300 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>Time {team.id}</h3>
        <div>
          <Button
            variant="outlined"
            size="small"
            startIcon={<AddIcon />}
            onClick={() => addPlayer(team.id)}
            style={{ marginRight: 8 }}
          >
            Adicionar jogador
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={() => onRemoveTeam(team.id)}
            disabled={disableRemove}
          >
            Remover time
          </Button>
        </div>
      </div>

      {team.players.length === 0 && <p>Nenhum jogador no time.</p>}

      {team.players.map((player, idx) => (
        <div key={player.id} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <TextField
            label={`Jogador ${idx + 1}`}
            variant="outlined"
            value={player.name}
            onChange={(e) => updatePlayerName(team.id, player.id, e.target.value)}
            fullWidth
          />
          <IconButton
            aria-label="remover jogador"
            color="error"
            onClick={() => removePlayer(team.id, player.id)}
            size="small"
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ))}
    </div>
  );
}
