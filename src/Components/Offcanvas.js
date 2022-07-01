import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FillerNodeForm from "./FillerNodeForm"

const Canvas = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onDoubleClick={handleShow}>
                Filler Node
            </Button>
            
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <FillerNodeForm>

                    </FillerNodeForm>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Canvas