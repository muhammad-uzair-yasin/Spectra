# Changelog

All notable changes to Spectra are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [4.0.0] - 2026-06-03

### Added
- Initial open source release
- 7 core agents (Backend Engineer, Frontend Engineer, Database Engineer, Code Reviewer, QA Debugger, Product Manager, Domain Expert)
- 11 core skills (Specify, Clarify, Plan, Tasks, Analyze, Checklist, Implement, Git Feature, Git Commit, Git Validate, Constitution)
- Workflow rules system (workflow_v4.md)
- Context management system for shared project knowledge
- Comprehensive documentation (guide.md, README.md)
- MIT License for open source distribution
- npm package support

### Features
- Context-aware agent definitions
- Interaction rules with approval gates
- Safety guardrails and audit trails
- Structured workflow for development
- Multi-agent orchestration patterns
- Task tracking and progress management

## [Unreleased]

### Planned
- [ ] Web UI for managing agents and context
- [ ] VS Code extension
- [ ] Pre-built skill templates for frameworks (React, Vue, Django, Rails)
- [ ] Agent performance analytics
- [ ] GitHub/Linear integration
- [ ] Custom agent builder
- [ ] Skill marketplace
- [ ] Multi-language support

---

## Migration Guide

### From v3.x to v4.0.0

**Breaking Changes:**
- Workflow file structure updated to workflow_v4.md (from workflow_v3.md)
- Agent role definitions refactored for clarity
- Context files reorganized under docs/context/

**Migration Steps:**
1. Update workflow reference to `.spectra/rules/workflow_v4.md`
2. Review updated agent definitions in `.spectra/agents/`
3. Create docs/context/ directory for your project context
4. Copy your context files to new structure

**New Recommended Context Structure:**
```
docs/context/
├── context.md        # Project overview (was project-context.md)
├── progress.md       # Status and changes (was progress.md)
├── preferences.md    # User rules and preferences (new)
└── conventions.md    # Tech decisions (was tech-decisions.md)
```

---

## Version History

### v4.0.0 (Current)
- Initial open source release
- Public npm package
- Comprehensive documentation

### v3.x
- Internal/private releases
- Agent workflow experimentation
- Skill development

---

## Support

- Report issues: https://github.com/veliosai/spectra/issues
- Discuss ideas: https://github.com/veliosai/spectra/discussions
- Email: devs@veliosai.com

---

**Last Updated:** 2026-06-03
