# Skill Registry — newflipwebco

Generated: 2026-05-22 | Project: newflipwebco | Stack: Next.js 14 / React 18 / JavaScript / Tailwind CSS

## User Skills

| Skill | Trigger | Compact Rule |
|-------|---------|--------------|
| `branch-pr` | Creating a PR, opening a PR, preparing changes for review | Follow issue-first enforcement: create issue before PR; include summary, test plan, linked issue |
| `issue-creation` | Creating a GitHub issue, reporting a bug, requesting a feature | Follow issue-first enforcement: title, description, acceptance criteria, labels |
| `judgment-day` | "judgment day", "dual review", "adversarial review", "juzgar" | Launch two independent blind judge sub-agents simultaneously; synthesize findings; fix; re-judge |
| `skill-creator` | Creating a new skill, adding agent instructions, documenting patterns for AI | Follow Agent Skills spec; include frontmatter, purpose, steps, rules, result contract |

## Built-in Harness Skills (Context-Triggered)

| Skill | Trigger |
|-------|---------|
| `verify` | Verify a PR works, confirm a fix, test a change manually |
| `run` | Run, start, or screenshot the app |
| `code-review` | Review a diff or PR for correctness bugs |
| `security-review` | Security audit of code or architecture |
| `update-config` | Configure Claude Code settings, hooks, permissions |

## Code Context → Skill Mapping

| File Pattern | Auto-Load Skill |
|-------------|-----------------|
| `*.go`, `*_test.go` | `go-testing` (not applicable to this project) |
| Any PR creation | `branch-pr` |
| Any issue creation | `issue-creation` |
| New skill creation | `skill-creator` |

## Compact Rules (inject into sub-agents)

### branch-pr
Create a GitHub issue FIRST. PR must reference it. PR body: ## Summary (bullets) + ## Test plan (checklist). Title under 70 chars.

### issue-creation
Title: imperative verb + noun. Body: problem description + acceptance criteria + labels. Assign to self.

### judgment-day
Two blind judge agents run in parallel. Each reviews independently. Synthesize findings. Apply fixes. Re-judge until both pass or escalate after 2 iterations.

### skill-creator
Skills need: frontmatter (name, description, trigger), Purpose section, Steps section (numbered), Rules section, Result Contract. Save to `~/.claude/skills/{name}/SKILL.md`.
