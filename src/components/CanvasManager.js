import React, { useRef, useEffect, useState } from 'react';
import { fabric } from 'fabric';

const CanvasManager = ({ items, onAddItem }) => {
  const canvasRef = useRef(null);
  const fabricCanvas = useRef(null);
  const [activeTool, setActiveTool] = useState('select');

  useEffect(() => {
    // Initialize Fabric.js canvas
    fabricCanvas.current = new fabric.Canvas(canvasRef.current, {
      width: 800,
      height: 600,
      backgroundColor: '#ffffff'
    });

    // Add grid background
    const gridSize = 20;
    const canvas = fabricCanvas.current;
    
    for (let i = 0; i < (canvas.width / gridSize); i++) {
      canvas.add(new fabric.Line([i * gridSize, 0, i * gridSize, canvas.height], {
        stroke: '#f0f0f0',
        strokeWidth: 1,
        selectable: false,
        evented: false
      }));
    }
    
    for (let i = 0; i < (canvas.height / gridSize); i++) {
      canvas.add(new fabric.Line([0, i * gridSize, canvas.width, i * gridSize], {
        stroke: '#f0f0f0',
        strokeWidth: 1,
        selectable: false,
        evented: false
      }));
    }

    return () => {
      fabricCanvas.current?.dispose();
    };
  }, []);

  const addRectangle = () => {
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      width: 100,
      height: 100,
      fill: '#3498db',
      stroke: '#2980b9',
      strokeWidth: 2
    });
    
    fabricCanvas.current.add(rect);
    onAddItem({ type: 'rectangle', properties: rect.toObject() });
  };

  const addCircle = () => {
    const circle = new fabric.Circle({
      left: 150,
      top: 150,
      radius: 50,
      fill: '#e74c3c',
      stroke: '#c0392b',
      strokeWidth: 2
    });
    
    fabricCanvas.current.add(circle);
    onAddItem({ type: 'circle', properties: circle.toObject() });
  };

  const addText = () => {
    const text = new fabric.Text('新任务', {
      left: 200,
      top: 200,
      fontSize: 20,
      fill: '#2c3e50',
      fontFamily: 'Arial'
    });
    
    fabricCanvas.current.add(text);
    onAddItem({ type: 'text', properties: text.toObject() });
  };

  const addNote = () => {
    const note = new fabric.Group([
      new fabric.Rect({
        width: 120,
        height: 80,
        fill: '#f1c40f',
        stroke: '#f39c12',
        strokeWidth: 1
      }),
      new fabric.Text('便签', {
        left: -40,
        top: -25,
        fontSize: 16,
        fill: '#2c3e50',
        fontFamily: 'Arial'
      })
    ], {
      left: 250,
      top: 100
    });
    
    fabricCanvas.current.add(note);
    onAddItem({ type: 'note', properties: note.toObject() });
  };

  const clearCanvas = () => {
    fabricCanvas.current.clear();
    // Re-add grid
    const gridSize = 20;
    const canvas = fabricCanvas.current;
    
    for (let i = 0; i < (canvas.width / gridSize); i++) {
      canvas.add(new fabric.Line([i * gridSize, 0, i * gridSize, canvas.height], {
        stroke: '#f0f0f0',
        strokeWidth: 1,
        selectable: false,
        evented: false
      }));
    }
    
    for (let i = 0; i < (canvas.height / gridSize); i++) {
      canvas.add(new fabric.Line([0, i * gridSize, canvas.width, i * gridSize], {
        stroke: '#f0f0f0',
        strokeWidth: 1,
        selectable: false,
        evented: false
      }));
    }
  };

  return (
    <div className="canvas-container">
      <div className="canvas-toolbar">
        <button 
          className={`toolbar-btn ${activeTool === 'select' ? 'active' : ''}`}
          onClick={() => setActiveTool('select')}
        >
          选择
        </button>
        <button className="toolbar-btn" onClick={addRectangle}>
          矩形
        </button>
        <button className="toolbar-btn" onClick={addCircle}>
          圆形
        </button>
        <button className="toolbar-btn" onClick={addText}>
          文本
        </button>
        <button className="toolbar-btn" onClick={addNote}>
          便签
        </button>
        <button className="toolbar-btn" onClick={clearCanvas}>
          清空
        </button>
      </div>
      
      <canvas ref={canvasRef} />
    </div>
  );
};

export default CanvasManager;