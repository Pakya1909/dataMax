import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, { ReactFlowProvider, addEdge, useNodesState, useEdgesState, Controls } from 'react-flow-renderer';
// import Canvas from './Offcanvas';

// import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FillerNodeForm from "./FillerNodeForm"



const initialNodes = [
    {
        id: '1',
        type: 'input',
        data: { label: 'input node' },
        position: { x: 250, y: 5 },
        sourcePosition: 'right',
    },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const Middle = () => {
    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    const [offCanvasData, setOffCanvasData] = useState([])
    const [showoffCanvas, setShowOffcanvas] = useState(false)
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const [showCanvas, setShowCanvas] = useState(false);

    // const handleCloseCanvas = () => setShow(false);
    // const handleShowCanvas = () => setShow(true);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds), console.log(params)), []);

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        // console.log(event.clientX, event.clientY)
        // console.log(event)
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback((event) => {
        event.preventDefault();

        const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
        const type = event.dataTransfer.getData('application/reactflow');

        // check if the dropped element is valid
        if (typeof type === 'undefined' || !type) {
            return;
        }

        const position = reactFlowInstance.project({
            x: event.clientX - reactFlowBounds.left,
            y: event.clientY - reactFlowBounds.top,
        });
        // console.log(reactFlowBounds.left)
        // console.log(event.clientX)

        const newNode = {
            id: getId(),
            type,
            position,
            data: { label: `${type} node` },
            sourcePosition: 'right',
            targetPosition: 'left',
        };

        // console.log(newNode)

        setNodes((nds) => nds.concat(newNode));
    },
        [reactFlowInstance]
    );

    const onNodeDoubleClick = (event, node) => {
        console.log(node)
        setOffCanvasData(node)
        toggleFalseTrue()
    }

    const toggleFalseTrue = () => {
        setShowOffcanvas(handleShow)
    }

    const OffcanvasContent = () => {
        return (
            <>

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

    return (
        <div className="dndflow">
            <ReactFlowProvider>
                <div className="reactflow-wrapper" ref={reactFlowWrapper}>
                    <ReactFlow
                        style={{ height: 600 }}
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onInit={setReactFlowInstance}
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                        onNodeDoubleClick={onNodeDoubleClick}
                    >
                        {show ? <OffcanvasContent /> : null}
                        <Controls />
                    </ReactFlow>
                </div>
            </ReactFlowProvider >
        </div >
    )
}

export default Middle 