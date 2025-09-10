import React from 'react';
import Node from './Node';
import './Tree.css';

const Tree = ({ data, onAddNode }) => {
  return (
    <div className="tree-container">
      <div className="tree-node-wrapper">
        <Node node={data} onAddNode={onAddNode} />
        {data.children && data.children.length > 0 && (
          <div className="tree-children">
            {data.children.map(child => (
              <Tree key={child.id} data={child} onAddNode={onAddNode} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tree;
