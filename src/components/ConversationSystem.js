import React, { useState } from 'react';

const ConversationSystem = ({ conversations, onAddConversation, onAddBranch }) => {
  const [inputMessage, setInputMessage] = useState('');
  const [selectedConversation, setSelectedConversation] = useState(null);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message
    onAddConversation({
      type: 'user',
      content: inputMessage,
      branches: []
    });

    // Simulate AI response
    const aiResponse = await generateAIResponse(inputMessage);
    onAddConversation({
      type: 'ai',
      content: aiResponse,
      branches: []
    });

    setInputMessage('');
  };

  const generateAIResponse = async (userMessage) => {
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const responses = {
      '任务': '我可以帮您在画布上创建和管理任务。您可以使用矩形来表示任务，用不同颜色区分优先级。需要我帮您创建一个新任务吗？',
      '项目': '对于项目管理，我建议使用便签来记录项目要点，用圆形表示里程碑。您想要创建什么类型的项目？',
      '画布': '画布是您的工作空间，可以自由添加各种元素。您可以创建矩形（任务）、圆形（里程碑）、文本（标签）和便签（笔记）。需要我演示如何使用吗？',
      '分支': '分支对话功能让您可以从任何对话点开始新的讨论线程。点击消息旁的"创建分支"按钮即可开始。',
      '帮助': '我是您的AI助手，可以帮助您：\n1. 在画布上管理项目和任务\n2. 创建分支对话\n3. 组织和规划工作\n4. 提供建议和指导\n\n请告诉我您需要什么帮助！'
    };

    // Simple keyword matching for demo
    for (const [keyword, response] of Object.entries(responses)) {
      if (userMessage.includes(keyword)) {
        return response;
      }
    }

    return `我理解您说的"${userMessage}"。我可以帮您在画布上可视化这个想法，或者我们可以深入讨论这个话题。您希望从哪个方向开始？`;
  };

  const handleCreateBranch = (conversationId) => {
    const branchContent = prompt('请输入分支话题：');
    if (branchContent) {
      onAddBranch(conversationId, branchContent);
    }
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('zh-CN', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="conversation-section">
      <div className="conversation-header">
        <h3>AI对话助手</h3>
        <p style={{margin: '0.5rem 0 0 0', fontSize: '0.8rem', color: '#666'}}>
          支持分支对话的智能助手
        </p>
      </div>
      
      <div className="conversation-list">
        {conversations.map((conversation) => (
          <div key={conversation.id}>
            <div className={`conversation-item ${conversation.type}`}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                <div style={{flex: 1}}>
                  <div style={{
                    fontSize: '0.8rem', 
                    color: '#666', 
                    marginBottom: '0.5rem',
                    fontWeight: 'bold'
                  }}>
                    {conversation.type === 'ai' ? 'AI助手' : '用户'} - {formatTimestamp(conversation.timestamp)}
                  </div>
                  <div style={{whiteSpace: 'pre-line'}}>
                    {conversation.content}
                  </div>
                </div>
                <div className="branch-options">
                  <button 
                    className="branch-btn"
                    onClick={() => handleCreateBranch(conversation.id)}
                  >
                    创建分支
                  </button>
                </div>
              </div>
            </div>
            
            {/* Render branches */}
            {conversation.branches && conversation.branches.map((branch) => (
              <div key={branch.id} className="conversation-item branch">
                <div style={{
                  fontSize: '0.8rem', 
                  color: '#666', 
                  marginBottom: '0.5rem',
                  fontWeight: 'bold'
                }}>
                  分支话题 - {formatTimestamp(branch.timestamp)}
                </div>
                <div>
                  {branch.content}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <div className="conversation-input">
        <div className="input-group">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="请输入您的问题或想法..."
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
          />
          <button onClick={handleSendMessage}>
            发送
          </button>
        </div>
        <div style={{marginTop: '0.5rem', fontSize: '0.8rem', color: '#666'}}>
          提示：尝试输入"任务"、"项目"、"画布"、"分支"或"帮助"
        </div>
      </div>
    </div>
  );
};

export default ConversationSystem;