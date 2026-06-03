# Spectra - AI Agent & Workflow System

Spectra is a system of specialized AI agents and workflow rules. Use it with Claude, Cursor, or any AI tool to get expert-level help on any software engineering task.

## Quick Start

1. **Install via npm:**
   ```bash
   npm install spectra-ai
   ```

2. **Tell your AI tool:**
   ```
   Please act as the workflow defined in: ./.spectra/rules/workflow_v4.md
   ```

3. **Describe your task** - The AI will use the right agent to help.

## When to Use Each Agent

Choose the agent that matches your task:

| Agent | Use When | Examples |
|-------|----------|----------|
| 🏗️ **backend-engineer** | Building APIs, servers, databases | "Design a REST API", "Optimize database queries", "Set up authentication" |
| 🎨 **frontend-engineer** | Building UIs, components, web pages | "Create a React component", "Fix CSS layout", "Build a dashboard" |
| 📊 **database-engineer** | Schema design, migrations, queries | "Design a user schema", "Write an efficient query", "Plan a migration" |
| ✅ **code-reviewer** | Code quality, best practices, bugs | "Review this code", "Check for security issues", "Optimize performance" |
| 🧪 **qa-debugger** | Testing, debugging, validation | "Debug this error", "Write tests", "Trace a bug" |
| 📋 **product-manager** | Requirements, scope, planning | "Define requirements", "Clarify scope", "Plan a feature" |
| 🧠 **domain-expert** | Business logic, validation | "Validate this solution", "Check business rules", "Domain expertise" |

## How It Works

1. Tell the AI your task in plain language
2. The workflow automatically routes to the right agent(s)
3. Agents collaborate and provide expert-level solutions
4. You get comprehensive results with code, architecture, or planning

## Documentation

- **[guide.md](./guide.md)** - Full usage guide with examples
- **[QUICK_START.md](./QUICK_START.md)** - 5-minute getting started
- **[.spectra/rules/workflow_v4.md](./.spectra/rules/workflow_v4.md)** - Main workflow rules

## Installation

```bash
npm install spectra-ai
```

Then import in your project or use the workflow file with your AI tool.

## License

MIT
