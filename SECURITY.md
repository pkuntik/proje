# 安全政策 / Security Policy

## 支持的版本 / Supported Versions

我们积极维护以下版本的安全更新：
We are actively maintaining security updates for the following versions:

| 版本 / Version | 支持状态 / Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## 报告漏洞 / Reporting a Vulnerability

如果您发现了安全漏洞，请**不要**在公开的issue中报告。相反，请通过以下方式安全地披露：

If you discover a security vulnerability, please **do not** report it in a public issue. Instead, please disclose it responsibly through:

### 报告渠道 / Reporting Channels

1. **邮件报告 / Email Reporting**
   - 发送邮件至：[security@proje.ai] (待设置)
   - 主题格式：`[SECURITY] 简要描述漏洞`
   - Subject format: `[SECURITY] Brief description of vulnerability`

2. **GitHub私有漏洞报告 / GitHub Private Vulnerability Reporting**
   - 使用GitHub的私有漏洞报告功能
   - 访问：https://github.com/pkuntik/proje/security/advisories

### 报告内容 / Report Content

请在您的报告中包含：
Please include in your report:

- **漏洞类型** / Vulnerability type
- **影响组件** / Affected components  
- **攻击向量** / Attack vector
- **影响范围** / Impact scope
- **重现步骤** / Steps to reproduce
- **概念验证** / Proof of concept (如果可能 / if possible)
- **建议修复** / Suggested fix (如果有 / if any)

### 响应时间表 / Response Timeline

我们承诺：
We commit to:

- **24小时内**确认收到您的报告
- **72小时内**初步评估漏洞
- **7天内**提供详细分析和修复计划
- **30天内**发布安全修复(对于高危漏洞)

- **Within 24 hours** acknowledge receipt of your report
- **Within 72 hours** provide initial assessment of the vulnerability
- **Within 7 days** provide detailed analysis and fix plan
- **Within 30 days** release security fix (for high-severity vulnerabilities)

## 漏洞等级 / Vulnerability Severity

我们使用CVSS 3.1标准来评估漏洞严重性：
We use CVSS 3.1 standard to assess vulnerability severity:

| 等级 / Severity | CVSS分数 / Score | 响应时间 / Response Time |
| -------- | ---------- | --------------- |
| 严重 / Critical | 9.0-10.0 | 24小时 / 24 hours |
| 高危 / High | 7.0-8.9 | 72小时 / 72 hours |
| 中危 / Medium | 4.0-6.9 | 7天 / 7 days |
| 低危 / Low | 0.1-3.9 | 30天 / 30 days |

## 负责任的披露 / Responsible Disclosure

### 我们的承诺 / Our Commitment

- 我们不会对善意的安全研究者采取法律行动
- 我们会及时回应安全报告
- 我们会在修复后公开致谢报告者(除非他们要求匿名)
- 我们会维护一个公开的安全公告页面

- We will not take legal action against good faith security researchers
- We will respond to security reports in a timely manner
- We will publicly acknowledge reporters after fixes (unless they request anonymity)
- We will maintain a public security advisory page

### 研究者指南 / Researcher Guidelines

在进行安全研究时，请：
When conducting security research, please:

**✅ 允许的行为 / Acceptable Behavior:**
- 测试您自己搭建的Proje实例
- 使用公开的测试环境
- 报告漏洞而不是利用它们
- 给我们合理的时间来修复漏洞

- Test on your own Proje instance
- Use publicly available test environments
- Report vulnerabilities rather than exploit them
- Give us reasonable time to fix vulnerabilities

**❌ 禁止的行为 / Unacceptable Behavior:**
- 访问他人的数据或破坏服务
- 进行物理攻击或社会工程学攻击
- 在漏洞修复前公开披露
- 运行自动化扫描工具对生产环境造成压力

- Accessing others' data or disrupting services
- Performing physical attacks or social engineering
- Publicly disclosing vulnerabilities before fixes
- Running automated scanning tools that stress production environments

## 安全最佳实践 / Security Best Practices

### 用户建议 / User Recommendations

- 保持软件更新到最新版本
- 使用强密码和多因素认证
- 定期审查账户活动
- 报告可疑活动

- Keep software updated to the latest version
- Use strong passwords and multi-factor authentication
- Regularly review account activity
- Report suspicious activities

### 开发者建议 / Developer Recommendations

- 遵循安全编码规范
- 定期进行安全代码审查
- 使用自动化安全扫描工具
- 及时更新依赖项

- Follow secure coding practices
- Conduct regular security code reviews
- Use automated security scanning tools
- Keep dependencies up to date

## 安全联系 / Security Contact

- **安全团队邮箱** / Security Team Email: [security@proje.ai] (待设置)
- **PGP公钥** / PGP Public Key: [待提供 / To be provided]
- **响应语言** / Response Languages: 中文, English

## 致谢 / Acknowledgments

我们感谢以下安全研究者的贡献：
We thank the following security researchers for their contributions:

- 待更新 / To be updated

---

我们重视社区的安全贡献，并致力于维护Proje的安全性。
We value security contributions from the community and are committed to maintaining the security of Proje.