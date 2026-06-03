/**
 * Spectra - AI Agent & Workflow System
 *
 * This package exports the Spectra agent and workflow definitions.
 *
 * Usage:
 * Tell your AI tool (Claude, Cursor, etc.):
 * "Please act as the workflow defined in: [path-to-node_modules]/spectra/.spectra/rules/workflow_v4.md"
 *
 * The AI will then use the agents and skills defined in .spectra/
 */

import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Get the path to Spectra's .spectra directory
 */
export function getSpectraPath() {
  return resolve(__dirname, '.spectra');
}

/**
 * Get the path to the main workflow file
 */
export function getWorkflowPath() {
  return resolve(__dirname, '.spectra/rules/workflow_v4.md');
}

/**
 * Get the path to an agent definition
 */
export function getAgentPath(agentName) {
  return resolve(__dirname, `.spectra/agents/${agentName}.md`);
}

/**
 * Get the path to a skill definition
 */
export function getSkillPath(skillName) {
  return resolve(__dirname, `.spectra/skills/${skillName}/SKILL.md`);
}

/**
 * Read the workflow file content
 */
export function getWorkflowContent() {
  try {
    return readFileSync(getWorkflowPath(), 'utf-8');
  } catch (error) {
    console.error('Error reading workflow file:', error.message);
    return null;
  }
}

/**
 * Read an agent definition
 */
export function getAgent(agentName) {
  try {
    return readFileSync(getAgentPath(agentName), 'utf-8');
  } catch (error) {
    console.error(`Error reading agent ${agentName}:`, error.message);
    return null;
  }
}

/**
 * Read a skill definition
 */
export function getSkill(skillName) {
  try {
    return readFileSync(getSkillPath(skillName), 'utf-8');
  } catch (error) {
    console.error(`Error reading skill ${skillName}:`, error.message);
    return null;
  }
}

/**
 * Package metadata
 */
export const version = '4.0.0';
export const name = 'spectra';
export const description = 'AI Agent & Workflow System for Claude, Cursor, and other AI tools';

/**
 * List of available agents
 */
export const agents = [
  'backend-engineer',
  'frontend-engineer',
  'database-engineer',
  'code-reviewer',
  'qa-debugger',
  'product-manager',
  'domain-expert'
];

/**
 * List of available skills
 */
export const skills = [
  'speckit-specify',
  'speckit-clarify',
  'speckit-plan',
  'speckit-tasks',
  'speckit-analyze',
  'speckit-checklist',
  'speckit-implement',
  'speckit-git-feature',
  'speckit-git-commit',
  'speckit-git-validate',
  'speckit-constitution'
];

/**
 * Get quick start instructions
 */
export function getQuickStart() {
  return `
🚀 Spectra Quick Start

1. Tell your AI tool (Claude, Cursor, etc.):

   "Please act as the workflow defined in:
    ${getWorkflowPath()}"

2. Your task:

   [Describe what you need help with]

3. The AI will use specialized agents:

   ${agents.map(a => '   - ' + a).join('\n')}

📖 Full guide: ${resolve(__dirname, 'guide.md')}
  `;
}

export default {
  version,
  name,
  description,
  agents,
  skills,
  getSpectraPath,
  getWorkflowPath,
  getAgentPath,
  getSkillPath,
  getWorkflowContent,
  getAgent,
  getSkill,
  getQuickStart
};
