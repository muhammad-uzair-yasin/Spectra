# Spectra Quick Start Guide

Get started with Spectra in 5 minutes.

## 1. Install

```bash
npm install spectra
```

## 2. Copy Spectra to Your Project

```bash
# If using from node_modules:
cp -r node_modules/spectra/.spectra ./your-project/

# Or if cloning from GitHub:
git clone https://github.com/veliosai/spectra.git
cd spectra
```

## 3. Create Context Directory

```bash
mkdir -p docs/context
```

## 4. Tell Claude/Cursor to Use Spectra

### With Claude:
```
I'm using Spectra for my project. Please act as the workflow defined in:
./spectra/.spectra/rules/workflow_v4.md

My task is: [describe what you need]
```

### With Cursor:
```
@Spectra: Act as the workflow in .spectra/rules/workflow_v4.md
My task is: [describe what you need]
```

## 5. That's It! 🎉

Your AI will now:
- ✅ Use specialized agents with defined roles
- ✅ Follow structured workflow rules
- ✅ Ask for approval before making changes
- ✅ Read and manage your project context
- ✅ Track all changes in progress.md

## 📝 Example Tasks

### Example 1: Build a Feature

```
Act as the workflow in .spectra/rules/workflow_v4.md
Agent: product-manager

I need to build a user registration feature.
What questions do you have about the requirements?
```

### Example 2: Debug an Issue

```
Act as the workflow in .spectra/rules/workflow_v4.md
Agent: qa-debugger

Users are getting a 500 error when logging in.
Help me find and fix the issue.
```

### Example 3: Review Code

```
Act as the workflow in .spectra/rules/workflow_v4.md
Agent: code-reviewer

Review the authentication implementation in apps/api/auth.py
Find any bugs, security issues, or improvements.
```

## 🤖 Available Agents

```
🏗️  backend-engineer     — APIs, databases, server logic
🎨  frontend-engineer    — UI, components, client code
📊  database-engineer    — Schema, migrations, queries
✅  code-reviewer        — Code quality, best practices
🧪  qa-debugger         — Testing, debugging, validation
📋  product-manager     — Requirements, scope, stories
🧠  domain-expert       — Business logic, validation
```

## 📋 Available Skills

```
speckit-specify         — Create detailed requirements
speckit-clarify         — Resolve ambiguity
speckit-plan            — Design architecture
speckit-tasks           — Break work into tasks
speckit-analyze         — Review and find issues
speckit-checklist       — Create validation checks
speckit-implement       — Execute with safeguards
speckit-git-feature     — Manage branches
speckit-git-commit      — Create meaningful commits
speckit-git-validate    — Validate before committing
speckit-constitution    — Define team conventions
```

## 📁 Your Project Structure

```
your-project/
├── .spectra/                    # ← Spectra definitions
├── docs/
│   └── context/                 # ← Your project context
│       ├── context.md
│       ├── progress.md
│       ├── preferences.md
│       └── conventions.md
├── src/
└── package.json
```

## 🔧 Creating Context Files

### docs/context/context.md
```markdown
# Project Context

## Overview
- Name: My App
- Stack: Python/FastAPI, React
- Status: In development

## Modules
| Module | Status | Owner |
|--------|--------|-------|
| Auth | Complete | Backend |
| API | In Progress | Backend |
| UI | Complete | Frontend |
```

### docs/context/progress.md
```markdown
# Progress

## Active Task
- Agent: —
- Task: —
- Status: —

## Recent Changes
- 2026-06-03 — Implemented user authentication
- 2026-06-02 — Set up API endpoints
```

### docs/context/preferences.md
```markdown
# User Preferences

- Prefer async/await over callbacks
- Require approval for database changes
- Use TypeScript for new code
- Always run tests before committing
```

### docs/context/conventions.md
```markdown
# Technical Conventions

## Tech Decisions
| Decision | Why | Date |
|----------|-----|------|
| FastAPI | Type-safe, async | 2026-01-01 |
| React | Component-based UI | 2026-01-01 |

## Code Patterns
- Use async/await for all I/O
- Test file: `test_*.py`
- Components in `components/`
```

## ✅ Best Practices

1. **Keep context updated** - Agents read it at the start of each session
2. **Use the right agent** - Specify agent names explicitly
3. **Be specific** - Give details about what you need
4. **Review the plan** - Agents present plans before executing
5. **Log decisions** - Update progress.md after each task

## 🔗 Next Steps

- 📖 Read the [full guide](./guide.md) for detailed information
- 🤖 Learn about [agents](./guide.md#available-agents)
- 🛠️ Explore [skills](./guide.md#available-skills)
- 🤝 Check out [contributing](./CONTRIBUTING.md) to add your own agents

## 💬 Need Help?

- **Questions?** Check the [guide](./guide.md)
- **Report issues?** [GitHub Issues](https://github.com/veliosai/spectra/issues)
- **Discuss ideas?** [GitHub Discussions](https://github.com/veliosai/spectra/discussions)
- **Email:** devs@veliosai.com

---

**Ready to get started?** Tell your AI tool to act as the Spectra workflow and describe your task! 🚀
