import { Button } from "@mui/material"
import { Wrapper } from "./styles"
import { Link } from "react-router-dom"


function Home() {
    return <Wrapper>
        <h1>Papelito</h1>
            <Button variant="outlined" component={Link} to="/rules">Ver regras</Button>
            <Button variant="contained" component={Link} to="/teams">Start</Button>
        </Wrapper>
}

export default Home