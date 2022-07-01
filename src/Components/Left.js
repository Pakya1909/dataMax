import Accordion from 'react-bootstrap/Accordion';
import Node from './Node'
import './Left.css'

const Left = () => {
    return (
        <>
            <h3>Filler Nodes</h3>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Input</Accordion.Header>
                    <Accordion.Body>
                        <Node></Node>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Output</Accordion.Header>
                    <Accordion.Body>
                        <Node></Node>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Advanced</Accordion.Header>
                    <Accordion.Body>
                        <Node></Node>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Analysis</Accordion.Header>
                    <Accordion.Body>
                        <Node></Node>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default Left 
