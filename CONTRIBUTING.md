# Contributing to Spectra

We love contributions! Whether it's fixing bugs, adding new agents, creating skills, or improving documentation, we appreciate your help.

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Create a feature branch** for your changes
4. **Make your changes** following our guidelines
5. **Submit a pull request** with a clear description

## 📝 Types of Contributions

### Adding a New Agent

1. Create a new file in `.spectra/agents/your-agent-name.md`
2. Follow the frontmatter format from existing agents
3. Define:
   - Agent name and description
   - Experience level
   - Purpose
   - Required inputs and outputs
   - Folder ownership (if applicable)
   - Environment responsibilities
   - Must Do / Must Not Do rules
   - Interaction rules
   - Handoff instructions

**Example structure:**
```markdown
---
name: your-agent
model: inherit
description: Brief description of agent specialization
---

# Agent Name

## Experience
[Agent background]

## Purpose
[What this agent does]

## Required Inputs
- Input 1
- Input 2

## Required Outputs
- Output 1
- Output 2

## Must Do
- ✅ Clear responsibilities

## Must Not Do
- ❌ Clear guardrails

## Handoff To
[Next agent in workflow]

## Interaction Rule
[How this agent communicates]
```

### Adding a New Skill

1. Create a new directory in `.spectra/skills/skill-name/`
2. Create `SKILL.md` with the workflow definition
3. Define clear steps and outputs
4. Include examples

**Example structure:**
```
.spectra/skills/speckit-yourskill/
├── SKILL.md          # Workflow definition
└── README.md         # Optional: Additional documentation
```

### Improving Documentation

1. Update `guide.md` for user-facing changes
2. Update `README.md` for package information
3. Update agent/skill documentation inline
4. Add examples where helpful

### Reporting Bugs

1. Check if the issue already exists
2. Create a clear title and description
3. Include steps to reproduce
4. Provide expected vs. actual behavior
5. Add labels and milestones if applicable

## 📋 Contribution Guidelines

### Code Quality
- Keep Markdown well-formatted
- Use consistent naming (kebab-case for files)
- Include examples and use cases
- Keep descriptions clear and concise

### Naming Conventions
- Agents: `adjective-noun.md` (e.g., `backend-engineer.md`)
- Skills: `speckit-skillname` (all lowercase, hyphenated)
- Files: lowercase, hyphenated, descriptive

### Documentation Standards
- Use clear, professional language
- Include examples and use cases
- Keep frontmatter consistent
- Add links to related agents/skills

### Commit Messages
```
type: short description

Longer explanation if needed.

Fixes #123
```

**Types:**
- `feat:` - New agent, skill, or feature
- `fix:` - Bug fixes
- `docs:` - Documentation updates
- `refactor:` - Restructuring without changing behavior
- `test:` - Adding tests or test utilities

### Pull Request Process

1. Update documentation as needed
2. Test with an AI tool (Claude, Cursor, etc.)
3. Ensure your changes follow guidelines
4. Write a clear PR description
5. Link any related issues
6. Wait for review from maintainers

## 🧪 Testing Your Contributions

### For New Agents:
1. Tell Claude: "Act as the workflow in ./spectra/.spectra/rules/workflow_v4.md"
2. Reference your new agent by name
3. Verify it behaves as documented
4. Check interaction rules work (asks before decisions, etc.)

### For New Skills:
1. Tell Claude: "Use the workflow and call this skill: your-skill"
2. Verify it produces expected outputs
3. Check the workflow follows guidelines
4. Test with different input scenarios

### For Documentation:
1. Read it carefully for clarity
2. Check all links and references work
3. Verify examples are accurate
4. Ensure formatting is consistent

## 📚 Project Structure

```
spectra/
├── .spectra/
│   ├── agents/           # Add new agents here
│   ├── skills/           # Add new skills here
│   └── rules/
├── guide.md              # User guide
├── README.md             # Package README
├── CONTRIBUTING.md       # This file
├── LICENSE               # MIT License
└── package.json          # npm metadata
```

## 🎯 Areas Where Help is Needed

- [ ] New specialized agents (QA Engineer, DevOps Engineer, ML Engineer, etc.)
- [ ] Additional skills (testing, documentation, performance optimization)
- [ ] Framework-specific guidance (React, Vue, Django, Rails, etc.)
- [ ] Better examples and use cases
- [ ] Tutorial content
- [ ] Localization to other languages

## 💬 Discussion

Have ideas but not sure how to implement them?
1. Open an issue with the "discussion" label
2. Post in GitHub Discussions
3. Email us at devs@veliosai.com

## ⚖️ License

By contributing, you agree your contributions are licensed under the MIT License. The same license as the project.

## ❤️ Code of Conduct

We're committed to a welcoming, inclusive community. Please:
- Be respectful and constructive
- Assume good intent
- Focus on ideas, not people
- Welcome diverse perspectives

## 🙏 Thank You

Thank you for contributing to Spectra! Your help makes this project better for everyone.

---

**Questions?** Open an issue or email devs@veliosai.com
