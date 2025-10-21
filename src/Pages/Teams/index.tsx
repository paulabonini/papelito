import React from "react";
import { Button, Divider } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { TeamForm } from "./components/TeamForm";
import { useTeamsContext } from "../../Contexts/TeamsContext/hook";
import { Link } from "react-router-dom";


export default function TeamsPage() {
  const { teams, addTeam, removeTeam } = useTeamsContext();

  return (
    <div style={{ padding: 20 }}>
      <h1>Times</h1>
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={addTeam}
        sx={{ marginBottom: 3 }}
      >
        Adicionar time
      </Button>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 50 }}>
        {teams.length === 0 && <p>Não há times cadastrados.</p>}
        {teams.map((team, idx) => (
          <React.Fragment key={team.id}>
            <TeamForm
              team={team}
              onRemoveTeam={removeTeam}
              disableRemove={teams.length <= 2}
            />
            {idx !== teams.length - 1 && <Divider orientation="vertical" flexItem />}
          </React.Fragment>
        ))}
      </div>
      <Button variant="contained" component={Link} to="/words" sx={{ marginTop: 5 }}>
        Continuar
      </Button>
    </div>
  );
}
