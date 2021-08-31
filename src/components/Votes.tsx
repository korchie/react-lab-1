import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'
import "./Votes.css";


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

            <p>Chocolate: {chocolateVotes} ({(chocolateVotes / totalVotes).toFixed(1)}%)</p>
            <ProgressBar now={chocolateVotes} className="chocolateBar" />
            <p>Strawberry: {strawberryVotes} ({(strawberryVotes / totalVotes).toFixed(1)}%)</p>
            <ProgressBar now={strawberryVotes} className="strawberryBar" />
            <p>Vanilla: {vanillaVotes} ({(vanillaVotes / totalVotes).toFixed(1)}%)</p>
            <ProgressBar now={vanillaVotes} className="vanillaBar" />
        </div>
    )
}

export default Votes;