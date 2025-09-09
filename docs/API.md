# API设计规范 / API Design Specification

## API概览 / API Overview

### 基础信息 / Basic Information
- **Base URL:** `https://api.proje.ai/v1`
- **认证方式:** Bearer Token (JWT)
- **内容类型:** `application/json`
- **API版本:** v1

### 通用响应格式 / Common Response Format
```json
{
  "success": true,
  "data": {},
  "message": "操作成功",
  "timestamp": "2024-01-01T00:00:00Z",
  "requestId": "uuid-string"
}
```

### 错误响应格式 / Error Response Format
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "错误描述",
    "details": {}
  },
  "timestamp": "2024-01-01T00:00:00Z",
  "requestId": "uuid-string"
}
```

## 认证API / Authentication API

### 用户注册 / User Registration
```http
POST /auth/register
Content-Type: application/json

{
  "username": "testuser",
  "email": "test@example.com",
  "password": "securepassword",
  "profile": {
    "firstName": "张",
    "lastName": "三",
    "company": "示例公司"
  }
}
```

**响应示例:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "username": "testuser",
      "email": "test@example.com",
      "profile": {
        "firstName": "张",
        "lastName": "三",
        "company": "示例公司"
      }
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### 用户登录 / User Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "securepassword"
}
```

### 刷新Token / Refresh Token
```http
POST /auth/refresh
Authorization: Bearer <refresh_token>
```

## 用户管理API / User Management API

### 获取用户信息 / Get User Profile
```http
GET /users/profile
Authorization: Bearer <access_token>
```

### 更新用户信息 / Update User Profile
```http
PUT /users/profile
Authorization: Bearer <access_token>
Content-Type: application/json

{
  "profile": {
    "firstName": "李",
    "lastName": "四",
    "avatar": "https://example.com/avatar.jpg",
    "timezone": "Asia/Shanghai"
  }
}
```

### 获取用户列表 / Get Users List
```http
GET /users?page=1&limit=20&search=张三
Authorization: Bearer <access_token>
```

## 项目管理API / Project Management API

### 创建项目 / Create Project
```http
POST /projects
Authorization: Bearer <access_token>
Content-Type: application/json

{
  "name": "新项目",
  "description": "项目描述",
  "settings": {
    "visibility": "private",
    "allowGuestAccess": false,
    "defaultTaskPriority": "medium"
  },
  "members": [
    {
      "userId": 2,
      "role": "developer"
    }
  ]
}
```

### 获取项目列表 / Get Projects List
```http
GET /projects?page=1&limit=10&status=active&owner=true
Authorization: Bearer <access_token>
```

**响应示例:**
```json
{
  "success": true,
  "data": {
    "projects": [
      {
        "id": 1,
        "name": "项目A",
        "description": "项目A描述",
        "owner": {
          "id": 1,
          "username": "testuser"
        },
        "status": "active",
        "createdAt": "2024-01-01T00:00:00Z",
        "stats": {
          "totalTasks": 25,
          "completedTasks": 15,
          "members": 5
        }
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 50,
      "pages": 5
    }
  }
}
```

### 获取项目详情 / Get Project Details
```http
GET /projects/{projectId}
Authorization: Bearer <access_token>
```

### 更新项目 / Update Project
```http
PUT /projects/{projectId}
Authorization: Bearer <access_token>
Content-Type: application/json

{
  "name": "更新的项目名",
  "description": "更新的描述"
}
```

### 删除项目 / Delete Project
```http
DELETE /projects/{projectId}
Authorization: Bearer <access_token>
```

## 任务管理API / Task Management API

### 创建任务 / Create Task
```http
POST /projects/{projectId}/tasks
Authorization: Bearer <access_token>
Content-Type: application/json

{
  "title": "新任务",
  "description": "任务描述",
  "assigneeId": 2,
  "priority": "high",
  "dueDate": "2024-12-31T23:59:59Z",
  "tags": ["前端", "紧急"],
  "metadata": {
    "estimatedHours": 8,
    "complexity": "medium"
  }
}
```

### 获取任务列表 / Get Tasks List
```http
GET /projects/{projectId}/tasks?status=pending&assignee=2&priority=high&page=1&limit=20
Authorization: Bearer <access_token>
```

### 更新任务状态 / Update Task Status
```http
PATCH /tasks/{taskId}/status
Authorization: Bearer <access_token>
Content-Type: application/json

{
  "status": "in_progress",
  "comment": "开始处理任务"
}
```

### 分配任务 / Assign Task
```http
PATCH /tasks/{taskId}/assign
Authorization: Bearer <access_token>
Content-Type: application/json

{
  "assigneeId": 3,
  "comment": "重新分配给张三"
}
```

## AI功能API / AI Features API

### 智能推荐 / Intelligent Recommendations
```http
POST /ai/recommendations
Authorization: Bearer <access_token>
Content-Type: application/json

{
  "type": "task_assignment",
  "context": {
    "projectId": 1,
    "taskId": 5,
    "userPreferences": {}
  }
}
```

**响应示例:**
```json
{
  "success": true,
  "data": {
    "recommendations": [
      {
        "type": "assignee",
        "suggestion": {
          "userId": 2,
          "username": "developer1",
          "confidence": 0.85,
          "reason": "基于历史经验和当前工作负荷"
        }
      },
      {
        "type": "priority",
        "suggestion": {
          "priority": "high",
          "confidence": 0.92,
          "reason": "相似任务的历史数据分析"
        }
      }
    ]
  }
}
```

### AI助手对话 / AI Assistant Chat
```http
POST /ai/chat
Authorization: Bearer <access_token>
Content-Type: application/json

{
  "message": "帮我创建一个前端开发任务",
  "context": {
    "projectId": 1,
    "conversationId": "uuid"
  }
}
```

### 项目分析 / Project Analytics
```http
GET /ai/analytics/projects/{projectId}?period=30d&metrics=efficiency,risk,prediction
Authorization: Bearer <access_token>
```

### 文本分析 / Text Analysis
```http
POST /ai/analyze/text
Authorization: Bearer <access_token>
Content-Type: application/json

{
  "text": "需要开发一个用户登录功能，包括邮箱验证和密码重置",
  "analysisType": ["intent", "entities", "sentiment"]
}
```

## 通知API / Notification API

### 获取通知列表 / Get Notifications
```http
GET /notifications?unread=true&page=1&limit=20
Authorization: Bearer <access_token>
```

### 标记为已读 / Mark as Read
```http
PATCH /notifications/{notificationId}/read
Authorization: Bearer <access_token>
```

### 创建通知 / Create Notification
```http
POST /notifications
Authorization: Bearer <access_token>
Content-Type: application/json

{
  "type": "task_assigned",
  "recipientId": 2,
  "title": "新任务分配",
  "message": "您有一个新的任务需要处理",
  "data": {
    "taskId": 5,
    "projectId": 1
  }
}
```

## 文件管理API / File Management API

### 上传文件 / Upload File
```http
POST /files/upload
Authorization: Bearer <access_token>
Content-Type: multipart/form-data

file: <binary data>
projectId: 1
description: 项目文档
```

### 获取文件列表 / Get Files List
```http
GET /projects/{projectId}/files?type=image&page=1&limit=20
Authorization: Bearer <access_token>
```

### 下载文件 / Download File
```http
GET /files/{fileId}/download
Authorization: Bearer <access_token>
```

## 搜索API / Search API

### 全局搜索 / Global Search
```http
GET /search?q=前端开发&type=task,project&page=1&limit=20
Authorization: Bearer <access_token>
```

### 高级搜索 / Advanced Search
```http
POST /search/advanced
Authorization: Bearer <access_token>
Content-Type: application/json

{
  "query": "前端开发",
  "filters": {
    "projectId": [1, 2],
    "status": ["pending", "in_progress"],
    "dateRange": {
      "start": "2024-01-01",
      "end": "2024-12-31"
    }
  },
  "sort": {
    "field": "createdAt",
    "order": "desc"
  }
}
```

## 报告API / Reports API

### 项目报告 / Project Report
```http
GET /reports/projects/{projectId}?period=30d&format=json
Authorization: Bearer <access_token>
```

### 团队效率报告 / Team Efficiency Report
```http
GET /reports/team/efficiency?projectId=1&userId=2&period=7d
Authorization: Bearer <access_token>
```

### 导出报告 / Export Report
```http
POST /reports/export
Authorization: Bearer <access_token>
Content-Type: application/json

{
  "type": "project_summary",
  "projectId": 1,
  "format": "pdf",
  "period": "30d"
}
```

## WebSocket API / Real-time API

### 连接WebSocket / WebSocket Connection
```javascript
const ws = new WebSocket('wss://api.proje.ai/ws?token=<access_token>');

// 订阅项目更新
ws.send(JSON.stringify({
  type: 'subscribe',
  channel: 'project.1.updates'
}));

// 接收实时消息
ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  console.log('实时更新:', message);
};
```

### 支持的频道 / Supported Channels
- `project.{id}.updates` - 项目更新
- `task.{id}.updates` - 任务更新
- `user.{id}.notifications` - 用户通知
- `team.{id}.chat` - 团队聊天

## 错误代码 / Error Codes

| 代码 | 描述 | HTTP状态码 |
|------|------|------------|
| `AUTH_REQUIRED` | 需要认证 | 401 |
| `AUTH_INVALID` | 认证无效 | 401 |
| `ACCESS_DENIED` | 访问被拒绝 | 403 |
| `RESOURCE_NOT_FOUND` | 资源不存在 | 404 |
| `VALIDATION_ERROR` | 参数验证错误 | 400 |
| `RATE_LIMITED` | 请求频率超限 | 429 |
| `SERVER_ERROR` | 服务器内部错误 | 500 |

## 限流规则 / Rate Limiting

| 端点类型 | 限制 | 时间窗口 |
|----------|------|----------|
| 认证相关 | 5次/分钟 | 1分钟 |
| 普通API | 100次/分钟 | 1分钟 |
| AI功能 | 10次/分钟 | 1分钟 |
| 文件上传 | 20次/小时 | 1小时 |

---

本API文档将随着功能开发持续更新，请关注版本变更。