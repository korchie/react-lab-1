import { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "./AdDesigner.css";

function AdDesigner() {
    const [ad, setAd] = useState("Strawberry");
    const [theme, setTheme] = useState("Light");
    const [font, setFont] = useState(15);

    return (
        <div className="AdDesigner">
            <Card style={{ width: '18rem', textAlign: "center" }}>
                <Card.Body className={theme == "Light" ? "light" : "dark"}>
                    {/* ^^not working! */}
                    <Card.Title>Vote for</Card.Title>
                    <Card.Subtitle className="mb-2">{ad}</Card.Subtitle>
                </Card.Body>
            </Card>

            <h2>What to Support</h2>
            <Button
                disabled={ad === "Chocolate"}
                variant="primary"
                onClick={() => { setAd("Chocolate") }}>Chocolate</Button>

            <Button
                disabled={ad === "Strawberry"}
                variant="secondary"
                onClick={() => { setAd("Strawberry") }}>Strawberry</Button>

            <Button
                disabled={ad === "Vanilla"}
                variant="success"
                onClick={() => { setAd("Vanilla") }}>Vanilla
            </Button>

            <h2>Color Theme</h2>
            <Button
                disabled={ad === "Light"}
                variant="primary"
                onClick={() => { setAd("Light") }}>Light
            </Button>

            <Button
                disabled={ad === "Dark"}
                variant="primary"
                onClick={() => { setAd("Dark") }}>Dark
            </Button>

            <h2>Font Size</h2>
            <Button
                variant="primary"
                onClick={() => { setFont(previous => previous - 1) }}>Down
            </Button>
            <span className="size">{font.toString().padStart(3, "0")}</span>
            <Button
                variant="primary"
                onClick={() => { setFont(previous => previous + 1) }}>Up
            </Button>

        </div>
    )
}

export default AdDesigner;