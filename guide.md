# Spectra - AI Agent & Workflow System

**Spectra** is an open-source system of AI agent definitions and workflow rules. Use it with Claude, Cursor, or any AI tool by telling the AI to act according to Spectra's workflow rules.

## 🚀 Quick Start

1. **Download/Install Spectra** via npm:
   ```bash
   npm install spectra
   ```

2. **Use with Claude, Cursor, or any AI:**
   ```
   @Agent, please act as the workflow defined in: 
   [path-to-spectra]/.spectra/rules/workflow_v4.md
   ```

3. **The AI will automatically:**
   - Use specialized agents (backend-engineer, frontend-engineer, etc.)
   - Follow workflow rules (ask before changes, manage context, etc.)
   - Use skills (specify, plan, implement, etc.)

## 📋 What is Spectra?

Spectra is a collection of structured definitions that teach AI agents how to work effectively on your projects:

- **Agents** - Specialized roles with specific responsibilities and interaction rules
- **Skills** - Reusable workflows for common development tasks
- **Workflow Rules** - Mandatory practices that agents follow (asking before changes, managing context, etc.)
- **Context System** - Shared project knowledge kept in context files

Instead of a generic AI, you get a trained, specialized assistant with clear roles and boundaries.

## 🤖 Available Agents

Each agent has a specific role, experience level, and set of responsibilities:

| Agent | Role | Specialization |
|-------|------|-----------------|
| **product-manager** | Scope & requirements | User stories, feature definition, scope management |
| **domain-expert** | Business logic validation | Domain rules, compliance, business constraints |
| **backend-engineer** | API & server code | FastAPI, database integration, auth, APIs |
| **database-engineer** | Data layer | Schema design, migrations, queries, indexes |
| **frontend-engineer** | UI & client code | Component design, user experience, client logic |
| **code-reviewer** | Quality gate | Code quality, best practices, refactoring |
| **qa-debugger** | Testing & debugging | Error diagnosis, validation, testing |

### What Makes Agents Different?

Each agent knows:
- ✅ What it **must do** (its responsibilities)
- ❌ What it **must not do** (guardrails)
- 📥 What **inputs** it needs
- 📤 What **outputs** it produces
- 🤝 Who it **hands off to** next
- 🗣️ How to **interact** (asks before decisions, waits for approval)

## 🛠️ Available Skills

Skills are structured workflows for completing common tasks:

| Skill | Purpose | When to Use |
|-------|---------|------------|
| **speckit-specify** | Create detailed requirements specs | Define features before building |
| **speckit-clarify** | Ask targeted questions | Resolve ambiguity and fill gaps |
| **speckit-plan** | Create architecture/implementation plans | Plan before coding |
| **speckit-tasks** | Break work into actionable tasks | Structure large features |
| **speckit-analyze** | Analyze code/architecture/performance | Review existing code or find issues |
| **speckit-checklist** | Create validation checklists | Ensure quality before merging |
| **speckit-implement** | Execute implementation safely | Code with guardrails and approval gates |
| **speckit-git-feature** | Manage feature branches | Structured branching workflow |
| **speckit-git-commit** | Create meaningful commits | Semantic commit messages |
| **speckit-git-validate** | Check code before committing | Prevent bad code from committing |
| **speckit-constitution** | Define team conventions | Set code standards and patterns |

## 📁 Project Structure

Spectra organizes everything in `.spectra/`:

```
.spectra/
├── agents/                 # Agent definitions
│   ├── backend-engineer.md
│   ├── frontend-engineer.md
│   ├── code-reviewer.md
│   ├── qa-debugger.md
│   ├── domain-expert.md
│   ├── database-engineer.md
│   └── product-manager.md
│
├── skills/                 # Skill workflows
│   ├── speckit-specify/
│   ├── speckit-clarify/
│   ├── speckit-plan/
│   ├── speckit-tasks/
│   ├── speckit-analyze/
│   ├── speckit-checklist/
│   ├── speckit-implement/
│   ├── speckit-git-feature/
│   ├── speckit-git-commit/
│   ├── speckit-git-validate/
│   ├── speckit-constitution/
│   └── (more skills...)
│
└── rules/
    └── workflow_v4.md      # Master workflow file — pass this to your AI!
```

## 🔧 How to Use Spectra

### With Claude:
```
I'm using Spectra for my project. Please act as the workflow defined in:
./spectra/.spectra/rules/workflow_v4.md

My task is: [your task here]
```

### With Cursor:
```
@Spectra: Act as the workflow in .spectra/rules/workflow_v4.md
[Your task]
```

### With Any AI Tool:
1. Copy the path to `workflow_v4.md`
2. Tell the AI to "act as this workflow"
3. Reference specific agents or skills as needed
4. The AI follows Spectra's rules for the entire session

## 📖 Workflow Rules (What Agents Follow)

Every agent using Spectra must follow these mandatory rules:

### Session Start
- Read all context files first (context.md, progress.md, preferences.md, conventions.md)
- Do NOT ask the user to explain the project—context is in the files
- Announce which agent you are and what the task is

### During Work
- **Present a plan** before executing
- **Wait for approval** before making irreversible changes
- **Ask clarifying questions** if inputs are incomplete
- **Never assume**—always check context first

### After Work
- Update progress.md with what changed
- Add one-line entries to "Recent Changes"
- If creating new tech decisions or code patterns, add them to conventions.md
- Hand off to the next agent in the workflow

### Response Style
- Keep replies short: code + one-line summary
- No filler ("Great!", "Let me explain...", etc.)
- Reports should be bullet points, not paragraphs
- Ask max 2-3 questions at once

## 📝 Context Files

When using Spectra, create these files in your project:

**docs/context/context.md** - Project overview
```markdown
# Project Context

## Overview
- Stack: Python/FastAPI backend, React frontend
- Status: In development

## Module Status
| Module | Status | Owner |
|--------|--------|-------|
| Auth | In Progress | Backend Team |
| API | Complete | Backend Team |
```

**docs/context/progress.md** - Current task and history
```markdown
# Progress

## Active Task
- Agent: —
- Task: —
- Status: —

## Recent Changes
- 2026-06-03 — Implemented user authentication API
```

**docs/context/preferences.md** - Your rules
```markdown
# User Preferences

- Approve all database schema changes before implementation
- Prefer React hooks over class components
- Always run tests before committing
```

**docs/context/conventions.md** - Tech decisions
```markdown
# Technical Conventions

## Tech Decisions
| Decision | Rationale | Since |
|----------|-----------|-------|
| FastAPI + SQLAlchemy | Type-safe, ORM support | 2026-01-01 |

## Code Patterns
- Use async/await for all I/O
- Name test files `test_*.py`
```

## 🚀 Common Workflows

### Building a New Feature
```
1. Product Manager (speckit-clarify) → Get requirements
2. Domain Expert (speckit-specify) → Define requirements
3. Backend Engineer (speckit-plan) → Plan API implementation
4. Backend Engineer (speckit-implement) → Build API
5. Code Reviewer (speckit-analyze) → Review code
6. QA Debugger (speckit-checklist) → Validate
```

### Debugging an Issue
```
1. QA Debugger (speckit-analyze) → Understand the problem
2. Backend Engineer (speckit-implement) → Fix the issue
3. Code Reviewer → Review the fix
4. QA Debugger → Test the fix
```

### Code Review
```
1. Code Reviewer (speckit-analyze) → Find issues
2. Code Reviewer (speckit-checklist) → Create quality checklist
3. Backend Engineer → Fix issues
4. Code Reviewer → Re-review
```

## 🔐 Safety & Guardrails

Spectra enforces safety practices:

✅ **Every change is announced** - No silent modifications
✅ **Approval gates** - Irreversible decisions wait for user approval
✅ **Context-driven** - Agents always check context before proceeding
✅ **Clear responsibilities** - Each agent has defined boundaries
✅ **Structured handoffs** - Clear next steps after each task
✅ **Audit trail** - Changes logged in progress.md

## 🤝 Customizing Spectra

You can extend Spectra for your needs:

1. **Add custom agents**: Create `.spectra/agents/your-agent.md`
2. **Add custom skills**: Create `.spectra/skills/your-skill/SKILL.md`
3. **Update workflow**: Modify `.spectra/rules/workflow_v4.md`
4. **Add context files**: Create docs/context/* files for your project

## 📦 Installation & Distribution

### Via npm:
```bash
npm install spectra
```

### From GitHub:
```bash
git clone https://github.com/veliosai/spectra.git
```

### In Your Project:
1. Copy `.spectra/` folder into your project root
2. Create `docs/context/` folder for your context files
3. Point your AI to `.spectra/rules/workflow_v4.md`

## 📚 Example Session

**You tell Claude:**
> I'm using Spectra. Please act as the workflow in `.spectra/rules/workflow_v4.md`. 
> I need to build a user registration feature.

**Claude responds:**
```
🤖 Agent: product-manager
📋 Task: Clarify registration requirements
```

Then asks clarifying questions about registration flow, validation, security needs, etc.

After clarification, you can request:
> Now have the backend-engineer plan the implementation

**Claude switches to backend-engineer and:**
1. Reads context files
2. Presents an architecture plan
3. Waits for your approval
4. Implements when you approve

## 🔗 Links & Resources

- **GitHub**: [veliosai/spectra](https://github.com/veliosai/spectra)
- **Issues**: [Report bugs](https://github.com/veliosai/spectra/issues)
- **Email**: devs@veliosai.com

## 📄 License

MIT - Free to use, modify, and distribute

---

**Spectra v4.0.0** | Built by Velios AI | Last Updated: 2026-06-03
