# Contributing to Kanban Frontend

Thank you for your interest in contributing to Kanban Frontend. Follow these guidelines to contribute effectively and maintain consistency across this repository.

## Code of Conduct

Contributors are expected to uphold community standards. Be respectful and constructive in all interactions.

## Development Workflow

### Fork and Clone the Repository

Fork this repository and clone it to your local machine:

```bash
git clone https://github.com/mgalvizo/kanban-frontend.git
```

### Install Dependencies

```bash
npm install
```

## Branching Strategy

1. `main`
   - Represents stable, production-ready code.
   - Direct commits are prohibitted; only tested and reviewed changes are merged through pull requests.
2. `develop`
   - Represents the integration branch for the next release.
   - Feature branches are merged into `develop`

### Supporting Branches

1. Feature branches
   - Use for developing a specific feature
   - Based on `develop`
   - Naming convention: `feat/<feature-name>`
   - These branches should be short-lived and merged into `develop` via pull requests once complete
   - Example:

```bash
git switch -c feat/create-task-component develop
```

2. Bigfix Branches

   - Used for fixing bugs in `develop`
   - Naming convention `fix/<bug-description>`
   - These branches should also be merged into `develop`

3. Release Branches
   - Used to prepare a version for release
   - Based on `develop`
   - Naming convention: `release/<version-number>`
   - From the release branch, code may be merged into both `main` and `develop` after review.
   - Example:

```bash
git switch -c release/1.0.0 develop
```

4. Hotfix Branches
   - Used for quick fixes on `main`
   - Naming convention: `hotfix/<bug-description>`
   - These branches are tested and reviewed before being merged directly into `main` and back into `develop`
   - Example:

```bash
git switch -c hotfix/critical-login-bug main
```

## Creating a Branch

To start contributing:

1. Checkout `develop`: Ensure your branch is based on `develop`:

```bash
git switch develop
```

2. Create Your Branch: Follow the naming convention for branch creation:

```bash
git switch -c feat/<feature-name>
```

### Examples:

- For new features: `feat/create-task-modal`
- For fixing a bug: `fix/drag-and-drop-bug`

## Pull Request Guidelines

- Open pull requests (PRs) only against `develop`.
- Do not open PRs directly against `main`, unless it is critical and part of a hotfix.
- Include the following in your pull request:

1. A descriptive title:
   - Example: `feat: add task creation modal`
2. References to issues (if any):
   - Example: `Closes #15`
3. Detailed description of what changes were made and why.

### PR Review Process

- Open a pull request and wait for review.
- Address reviewer comments and feedback.
- Ensure all tests are passing before requesting final approval.
- Once approved, squash and merge.

## Commit Guidelines

Use Conventional Commits for consistent and semantic commit messages. Use the following prefixes:

| Prefix   | Purpose                                         |
| :------- | :---------------------------------------------- |
| feat     | A new feature                                   |
| fix      | A bug fix                                       |
| chore    | Changes that don't impact functionality         |
| test     | Adding or updating tests                        |
| docs     | Changes to documentation                        |
| refactor | Code changes that neither fix nor add a feature |

Examples:

```plaintext
feat: add functionality for task creation
fix: resolve rendering issue with columns
chore: update eslint config file
refactor: move task-related utils to separate file
```

## Testing Workflow

Before pushing your changes, ensure all tests pass:

### Unit tests

Run unit tests with Jest:

```bash
npm run test:ci
```

### End-to-end tests

Run Cypress tests:

```bash
npm run cypress:run
```
