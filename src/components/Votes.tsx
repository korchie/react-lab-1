import { useState } from 'react'
import Button from 'react-bootstrap/Button'


function Votes() {
    const [chocolateVotes, setChocolateVotes] = useState(0);
    const [strawberryVotes, setStrawberryVotes] = useState(0);
    const [vanillaVotes, setVanillaVotes] = useState(0);
    const [totalVotes, setTotalVotes] = useState(0);
    return (
        <div>
            <h1>Vote Here</h1>
            <Button
                // disabled={ad === "Chocolate"}
                variant="primary"
                onClick={() => {
                    setChocolateVotes((previous) => previous + 1);
                    setTotalVotes((previous) => previous + 1);
                }}>Chocolate
            </Button>


            <Button
                // disabled={ad === "Strawberry"}
                variant="secondary"
                onClick={() => {
                    setStrawberryVotes((previous) => previous + 1);
                    setTotalVotes((previous) => previous + 1);
                }}>Strawberry
            </Button>

            <Button
                // disabled={ad === "Vanilla"}
                variant="success"
                onClick={() => {
                    setVanillaVotes((previous) => previous + 1);
                    setTotalVotes((previous) => previous + 1);
                }}>Vanilla
            </Button>
            <p>{chocolateVotes} - {strawberryVotes} -{vanillaVotes}- {totalVotes}</p>
        </div>
    )
}

export default Votes;