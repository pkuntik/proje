import React, { useState } from 'react';

const initialTree = {
  id: 1,
  content: 'Root Node',
  children: [
    {
      id: 2,
      content: 'Child 1',
      children: []
    },
    {
      id: 3,
      content: 'Child 2',
      children: []
    }
  ]
};

import Tree from './components/Tree';

function App() {
  const [treeData, setTreeData] = useState(initialTree);

  const handleAddNode = (parentId) => {
    const newNode = {
      id: Date.now(), // Simple unique ID
      content: 'New Node',
      children: [],
    };

    const recursivelyAddNode = (node) => {
      if (node.id === parentId) {
        return { ...node, children: [...node.children, newNode] };
      }
      if (node.children) {
        return { ...node, children: node.children.map(recursivelyAddNode) };
      }
      return node;
    };

    setTreeData(recursivelyAddNode(treeData));
  };

  return (
    <div className="app-container">
      <h1>AI-Powered Mind Map</h1>
      <Tree data={treeData} onAddNode={handleAddNode} />
    </div>
  );
}

export default App;
