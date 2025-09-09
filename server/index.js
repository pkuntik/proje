const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// In-memory storage for demo purposes
let canvasData = [];
let conversationHistory = [];

// API Routes
app.get('/api/canvas', (req, res) => {
  res.json(canvasData);
});

app.post('/api/canvas', (req, res) => {
  const item = {
    id: uuidv4(),
    ...req.body,
    createdAt: new Date()
  };
  canvasData.push(item);
  res.json(item);
});

app.get('/api/conversations', (req, res) => {
  res.json(conversationHistory);
});

app.post('/api/conversations', (req, res) => {
  const conversation = {
    id: uuidv4(),
    ...req.body,
    timestamp: new Date()
  };
  conversationHistory.push(conversation);
  res.json(conversation);
});

app.post('/api/ai-response', async (req, res) => {
  const { message } = req.body;
  
  // Simple AI response simulation
  const responses = {
    '任务': '我可以帮您在画布上创建和管理任务。您可以使用矩形来表示任务，用不同颜色区分优先级。',
    '项目': '对于项目管理，我建议使用便签来记录项目要点，用圆形表示里程碑。',
    '画布': '画布是您的工作空间，可以自由添加各种元素。需要我演示如何使用吗？',
    '分支': '分支对话功能让您可以从任何对话点开始新的讨论线程。',
    '帮助': 'AI主导的管理工具帮助您：\n1. 在画布上管理项目\n2. 创建分支对话\n3. 组织工作流程'
  };

  let response = responses['帮助']; // Default response
  
  for (const [keyword, resp] of Object.entries(responses)) {
    if (message.includes(keyword)) {
      response = resp;
      break;
    }
  }

  // Simulate processing delay
  setTimeout(() => {
    res.json({ response });
  }, 1000);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});