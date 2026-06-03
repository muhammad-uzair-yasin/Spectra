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

## Triggers - How to Use Spectra

Use triggers to tell the AI what type of work you need. Include the trigger in your request:

```
-l to build a new feature
```

### All Triggers & Commands

| Trigger | Command | Sub-Version | Use For |
|---------|---------|-------------|---------|
| **`-init`** | `-init` | Mode A: Fresh Project | New project, no code/docs → AI asks all questions |
| | `-init docs/` | Mode B: From Docs | Have existing documentation → AI reads + creates context |
| | `-init --existing` | Mode C: Auto-Detect | Have code → AI scans + auto-creates context |
| **`-l`** | `-l [feature name]` | — | Large feature: specify → plan → implement → review |
| **`-s`** | `-s [task name]` | — | Small task: plan → implement → review |
| **`-q`** | `-q [change]` | — | Quick change: single file, minimal planning |
| **`-us`** | `-us [feature]` | — | User story: define with diagrams + acceptance criteria |
| **`-d`** | `-d [topic]` | — | Discussion: expert advice (read-only) |
| **`-fix`** | `-fix` | — | Fix error: debug + fix + verify |
| **`-ask`** | `-ask [question]` | — | Explain code: read + explain flow + flag issues |
| **`-review`** | `-review` | — | Code review: check quality (read-only) |
| **`-db`** | `-db [task]` | — | Database: schema + migrations + seeders |
| **`-update`** | `-update [file]` | — | Update docs: modify existing MD files |
| **`-g`** | `-g` | Full Workflow | Create branch → commit → push → create PR |
| | `-g --simple` | Simple Push | Commit → push to current branch (no PR) |
| | `-g --simple [branch]` | Push to Branch | Commit → push to specified branch |
| **`-help`** | `-help` | — | Show all triggers |



## When to Use Each Trigger

**Planning & Discovery:**
- `-init` — Starting a new project? Initialize context first
- `-us` — Defining a new feature? Start with user story
- `-d` — Need expert advice? Use discussion mode (read-only)

**Building Features:**
- `-l` — Building a full feature? Use large task (full workflow)
- `-s` — Small feature or fix? Use small task (faster)
- `-q` — One-line change? Use quick task

**Code Quality:**
- `-review` — Review code before merging? Use code review
- `-ask` — Understand existing code? Read and explain
- `-fix` — Something broken? Diagnose and fix

**Specialized Work:**
- `-db` — Schema changes, migrations? Use database engineer
- `-g` — Commit and push? Use git operations
- `-update` — Change docs/specs? Update existing files

### Example Usages

**Step 1: Initialize Workflow (Do this once)**
```
Please act as the workflow defined in: ./.spectra/rules/workflow_v4.md
```

Then use any trigger below:

**`-init`**
```
-init
```

**`-init docs/`**
```
-init docs/
```

**`-init --existing`**
```
-init --existing
```

**`-l [feature]`**
```
-l build a real-time chat system
```

**`-s [task]`**
```
-s add user profile avatars
```

**`-q [change]`**
```
-q fix the typo in UserModel.ts
```

**`-us [feature]`**
```
-us email notification feature
```

**`-d [topic]`**
```
-d review if this API design is scalable
```

**`-fix`**
```
-fix TypeError at line 42 in payment.service.ts
```

**`-ask [question]`**
```
-ask explain how the authentication flow works
```

**`-review`**
```
-review
```

**`-db [task]`**
```
-db add an orders table with migration
```

**`-g`**
```
-g
```

**`-g --simple`**
```
-g --simple
```

**`-g --simple [branch]`**
```
-g --simple develop
```

**`-update [file]`**
```
-update docs/context/preferences.md
```


## Available Agents

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




## Installation

**Local Installation** (Recommended)
```bash
cd /path/to/your/project
npm install spectra-ai
```

After installation, the `.spectra` folder will automatically appear in your project root.

**Troubleshooting: Package installs in home node_modules instead of project**

If npm is installing packages globally (in home directory) instead of your project:

1. **Check npm configuration:**
   ```bash
   npm config get prefix
   ```

2. **Reset npm to use local project folder:**
   ```bash
   npm config set prefix ~/.npm-global
   npm config set registry https://registry.npmjs.org/
   ```

3. **Make sure you're NOT using -g flag:**
   ```bash
   npm install spectra-ai    # ✅ Correct (local)
   npm install -g spectra-ai # ❌ Wrong (global)
   ```

4. **Verify installation:**
   ```bash
   ls -la node_modules/spectra-ai
   ls -la .spectra
   ```

Your project structure should look like:
```
my-project/
├── node_modules/
│   └── spectra-ai/
├── .spectra/              ← Auto-copied here
└── package.json
```

## Documentation

- **[guide.md](./guide.md)** - Full usage guide with examples
- **[QUICK_START.md](./QUICK_START.md)** - 5-minute getting started
- **[.spectra/rules/workflow_v4.md](./.spectra/rules/workflow_v4.md)** - Complete workflow rules & trigger details

## License
MIT
