import React from 'react';
import './Node.css';

const Node = ({ node, onAddNode }) => {
  return (
    <div className="node">
      <div className="node-content">
        {node.content}
      </div>
      <button className="add-child-btn" onClick={() => onAddNode(node.id)}>+</button>
    </div>
  );
};

export default Node;
