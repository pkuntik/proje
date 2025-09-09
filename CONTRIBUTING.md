# 贡献指南 / Contributing Guidelines

欢迎参与 Proje 项目的开发！本文档将帮助您了解如何为项目做出贡献。

Welcome to contribute to the Proje project! This document will help you understand how to contribute to the project.

## 行为准则 / Code of Conduct

### 我们的承诺 / Our Pledge
我们致力于为每个人提供友好、安全和欢迎的环境，无论年龄、身体能力、种族、性别认同、经验水平、国籍、个人外貌、种族、宗教或性取向如何。

We are committed to providing a friendly, safe and welcoming environment for all, regardless of age, disability, ethnicity, gender identity, level of experience, nationality, personal appearance, race, religion, or sexual orientation.

### 我们的标准 / Our Standards
**积极行为包括:**
- 使用欢迎和包容的语言
- 尊重不同的观点和经验
- 优雅地接受建设性批评
- 专注于对社区最有利的事情
- 对其他社区成员表示同理心

**不可接受的行为包括:**
- 使用性化的语言或图像
- 恶意攻击、侮辱或贬损评论
- 公开或私人骚扰
- 未经明确许可发布他人的私人信息
- 在专业环境中可能被认为不合适的其他行为

## 如何贡献 / How to Contribute

### 报告问题 / Reporting Issues

在创建新issue之前，请:
1. 搜索现有issues，确保问题尚未被报告
2. 检查问题是否在最新版本中仍然存在
3. 收集尽可能多的相关信息

**Bug报告应包括:**
- 清晰的标题和描述
- 重现步骤
- 预期行为和实际行为
- 错误信息和截图(如适用)
- 环境信息(操作系统、浏览器版本等)

**功能请求应包括:**
- 功能的清晰描述
- 使用场景和动机
- 可能的实现方案
- 相关的设计稿或示例

### 提交代码 / Submitting Code

#### 开发环境设置 / Development Setup

1. **Fork 仓库 / Fork the Repository**
   ```bash
   # 点击GitHub页面上的Fork按钮
   # Click the Fork button on GitHub page
   ```

2. **克隆你的Fork / Clone Your Fork**
   ```bash
   git clone https://github.com/your-username/proje.git
   cd proje
   ```

3. **添加上游仓库 / Add Upstream Repository**
   ```bash
   git remote add upstream https://github.com/pkuntik/proje.git
   ```

4. **安装依赖 / Install Dependencies**
   ```bash
   # 待项目结构建立后更新
   # To be updated after project structure is established
   npm install
   ```

5. **设置开发环境 / Setup Development Environment**
   ```bash
   # 复制环境配置文件
   cp .env.example .env
   # 编辑配置文件
   nano .env
   ```

#### 开发流程 / Development Workflow

1. **创建功能分支 / Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # 或者用于bug修复 / or for bug fixes
   git checkout -b fix/issue-number
   ```

2. **编写代码 / Write Code**
   - 遵循项目的编码规范
   - 添加必要的测试
   - 更新相关文档

3. **运行测试 / Run Tests**
   ```bash
   npm test
   npm run lint
   npm run type-check
   ```

4. **提交更改 / Commit Changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

5. **推送分支 / Push Branch**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **创建Pull Request / Create Pull Request**
   - 在GitHub上创建PR
   - 填写PR模板
   - 等待代码审查

#### 提交信息规范 / Commit Message Convention

使用[Conventional Commits](https://conventionalcommits.org/)格式:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**类型 / Types:**
- `feat`: 新功能
- `fix`: Bug修复
- `docs`: 文档更新
- `style`: 代码格式(不影响代码运行的变动)
- `refactor`: 重构(既不是新增功能，也不是修改bug的代码变动)
- `test`: 增加测试
- `chore`: 构建过程或辅助工具的变动

**示例 / Examples:**
```
feat(auth): add OAuth2 authentication
fix(api): resolve task assignment bug
docs(readme): update installation instructions
style(components): format code with prettier
refactor(database): optimize query performance
test(auth): add unit tests for login
chore(deps): update dependencies
```

### 代码审查 / Code Review

#### 提交PR的要求 / PR Requirements
- [ ] 代码遵循项目规范
- [ ] 包含适当的测试
- [ ] 通过所有CI检查
- [ ] 更新相关文档
- [ ] PR描述清晰完整

#### 审查清单 / Review Checklist
- [ ] 代码功能正确
- [ ] 代码风格一致
- [ ] 性能考虑合理
- [ ] 安全性检查
- [ ] 测试覆盖充分
- [ ] 文档更新及时

## 编码规范 / Coding Standards

### 通用原则 / General Principles
- **可读性优于简洁性**
- **使用有意义的变量和函数名**
- **保持函数简短和专一**
- **添加必要的注释**
- **遵循DRY原则(Don't Repeat Yourself)**

### JavaScript/TypeScript 规范
```javascript
// ✅ 好的命名
const getUserProfile = async (userId: string): Promise<UserProfile> => {
  // 函数逻辑
};

// ✅ 使用接口定义类型
interface UserProfile {
  id: string;
  username: string;
  email: string;
  createdAt: Date;
}

// ✅ 错误处理
try {
  const result = await apiCall();
  return result;
} catch (error) {
  logger.error('API call failed:', error);
  throw new APIError('Failed to fetch user profile');
}
```

### Python 规范
```python
# ✅ 函数和类命名
def get_user_profile(user_id: str) -> UserProfile:
    """获取用户资料
    
    Args:
        user_id: 用户ID
        
    Returns:
        UserProfile: 用户资料对象
        
    Raises:
        UserNotFoundError: 用户不存在时抛出
    """
    pass

# ✅ 类定义
class UserService:
    """用户服务类"""
    
    def __init__(self, database: Database):
        self.database = database
    
    async def create_user(self, user_data: dict) -> User:
        """创建新用户"""
        pass
```

### CSS/SCSS 规范
```css
/* ✅ BEM命名法 */
.project-card {
  padding: 16px;
  border-radius: 8px;
}

.project-card__title {
  font-size: 18px;
  font-weight: 600;
}

.project-card__title--highlighted {
  color: var(--primary-color);
}

/* ✅ 使用CSS变量 */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --border-radius: 8px;
}
```

## 测试规范 / Testing Standards

### 测试类型 / Test Types
1. **单元测试 / Unit Tests**: 测试独立的函数和组件
2. **集成测试 / Integration Tests**: 测试组件间的交互
3. **端到端测试 / E2E Tests**: 测试完整的用户流程

### 测试命名 / Test Naming
```javascript
describe('UserService', () => {
  describe('createUser', () => {
    it('should create user with valid data', async () => {
      // 测试逻辑
    });
    
    it('should throw error when email already exists', async () => {
      // 测试逻辑
    });
  });
});
```

### 测试覆盖率 / Test Coverage
- **最小覆盖率**: 80%
- **关键路径**: 100%覆盖率
- **边界条件**: 必须测试
- **错误处理**: 必须测试

## 文档规范 / Documentation Standards

### API文档 / API Documentation
- 使用OpenAPI/Swagger规范
- 包含请求/响应示例
- 详细的错误代码说明
- 参数验证规则

### 代码注释 / Code Comments
```javascript
/**
 * 计算项目进度百分比
 * @param completedTasks - 已完成任务数
 * @param totalTasks - 总任务数
 * @returns 进度百分比 (0-100)
 * @throws {Error} 当总任务数为0时抛出错误
 */
function calculateProgress(completedTasks: number, totalTasks: number): number {
  if (totalTasks === 0) {
    throw new Error('Total tasks cannot be zero');
  }
  return Math.round((completedTasks / totalTasks) * 100);
}
```

## 发布流程 / Release Process

### 版本号规范 / Versioning
使用[语义化版本](https://semver.org/)规范:
- **主版本号**: 不兼容的API修改
- **次版本号**: 向下兼容的功能性新增
- **修订号**: 向下兼容的问题修正

### 发布步骤 / Release Steps
1. 更新CHANGELOG.md
2. 更新版本号
3. 创建发布标签
4. 生成发布说明
5. 部署到生产环境

## 获取帮助 / Getting Help

### 联系方式 / Contact
- **GitHub Issues**: 技术问题和bug报告
- **GitHub Discussions**: 一般讨论和问题
- **Email**: [项目邮箱] (待设置)

### 资源链接 / Resources
- [项目文档](./docs/)
- [API文档](./docs/API.md)
- [架构文档](./docs/ARCHITECTURE.md)
- [问题跟踪](https://github.com/pkuntik/proje/issues)

---

感谢您对Proje项目的贡献！您的参与让项目变得更好。

Thank you for contributing to the Proje project! Your participation makes the project better.