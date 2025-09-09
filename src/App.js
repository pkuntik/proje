import React, { useState } from 'react';
import CanvasManager from './components/CanvasManager';
import ConversationSystem from './components/ConversationSystem';

function App() {
  const [canvasItems, setCanvasItems] = useState([]);
  const [conversations, setConversations] = useState([
    {
      id: 'welcome',
      type: 'ai',
      content: '欢迎使用AI主导的管理工具！我可以帮助您在画布上管理各种项目，并进行多分支对话。请告诉我您想做什么？',
      timestamp: new Date(),
      branches: []
    }
  ]);

  const addCanvasItem = (item) => {
    setCanvasItems(prev => [...prev, { ...item, id: Date.now() }]);
  };

  const addConversation = (conversation) => {
    setConversations(prev => [...prev, {
      ...conversation,
      id: Date.now(),
      timestamp: new Date()
    }]);
  };

  const addBranch = (parentId, branchContent) => {
    setConversations(prev => prev.map(conv => {
      if (conv.id === parentId) {
        return {
          ...conv,
          branches: [...conv.branches, {
            id: Date.now(),
            content: branchContent,
            timestamp: new Date()
          }]
        };
      }
      return conv;
    }));
  };

  return (
    <div className="app">
      <div className="main-content">
        <header className="header">
          <h1>AI主导的管理工具</h1>
          <p style={{margin: '0.5rem 0 0 0', fontSize: '0.9rem', opacity: 0.8}}>
            一张画布管理万物 | 分支对话系统
          </p>
        </header>
        
        <div className="content-area">
          <div className="canvas-section">
            <CanvasManager 
              items={canvasItems}
              onAddItem={addCanvasItem}
            />
          </div>
          
          <div className="conversation-section">
            <ConversationSystem 
              conversations={conversations}
              onAddConversation={addConversation}
              onAddBranch={addBranch}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;