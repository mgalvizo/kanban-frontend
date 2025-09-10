# Kanban Frontend

Welcome to the **Kanban Frontend** repository! This is a Kanban-style web application built with modern tools and best practices to showcase a professional-level software development lifecycle (SDLC).

## Overview

This app is the frontend interface for a Kanban board that allows users to:

- Manage **boards**, **columns**, and **tasks**.
- Drag and drop tasks across columns to update their status.
- Add, edit, and delete tasks, columns, and boards.

The app is built using **Next.js**, styled with **Styled Components**, and managed using **Redux Toolkit (planned for the next phase)**. Future work will connect this app to a **NestJS backend**.

---

## Tech Stack

| Tool                      | Purpose                      | Version |
| ------------------------- | ---------------------------- | ------- |
| **Next.js**               | React-based framework        | 15.52   |
| **Storybook**             | Component visualization      | 9.1.5   |
| **Styled Components**     | CSS-in-JS styling framework  | 6.1.19  |
| **Redux Toolkit**         | State management             | 2.9.0   |
| **Jest**                  | Unit testing                 | 30.1.3  |
| **React Testing Library** | Frontend integration testing | 16.3.0  |
| **Cypress**               | End-to-End (E2E) testing     | 15.1.0  |
| **Docker**                | Containerization             | N/A     |
| **GitHub Actions**        | CI/CD pipeline               | N/A     |

---

## Folder Structure

```plaintext
src/
  components/         // Reusable UI components
  features/           // Feature-based modules (e.g., boards, columns, tasks)
  store/              // Redux slices for global state management
  styles/             // Global styled-components and themes
  hooks/              // Custom React hooks
  utils/              // Helper functions and utilities
  tests/              // Custom test utilities and shared mocks
  pages/
```

## Development

### Prerequisites

Ensure you have the following installed:

- Node.js >= 18.x
- npm >= 8.x

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/mgalvizo/kanban-frontend.git
cd kanban-frontend
npm install
```

### Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000/](http://localhost:3000/) to view the app.

## Testing

I use Jest, React Testing Library and Cyrpess for testing.

- Run unit tests:

```bash
npm run test:ci
```

- Run End-to-End Tests with Cypress:

```bash
npx run cypress:run
```

## Storybook

Visualize and test components in isolation:

```bash
npm run storybook
```

Visit [http://localhost:6006](http://localhost:6006) to view Storybook.

## CI/CD Pipeline

### Workflow Triggers

- Push to `develop`: Triggers the build and test workflow for continuous integration.
- Push to `main`: Triggers workflows for production deployment.

### Pipelines Overview

1. Continuous Integration for develop Branch

Ensures all changes integrated into `develop` meet quality standards through automatic testing:

- **Static Code Analysis**: Runs eslint to enforce consistent coding style.
- **Unit Tests**: Runs Jest tests to validate individual components.
- **Integration Tests**: Uses React Testing Library to verify overall functionality.
- **E2E Tests**: Performs end-to-end testing with Cypress.

2. Continuous Deployment for `main` Branch

On merging changes to `main`:

- **Build Application**: Builds the production-ready version of the app.
- **Containerize with Docker**: Creates a Docker container for deployment.
- **Deploy to Hosting Service**: Deploys the app to production.

### Quality Gates

The CI pipeline enforces these quality gates before merging:

1. **Linting**: Ensures consistent coding style using ESLint.
2. **Unit Tests**: Checks individual components and logic.
3. **Integration Tests**: Ensures components work together as expected.
4. **End-to-End (E2E) Tests**: Verifies the user journey.

### Artifacts

- Test Reports: CI jobs generate test reports and logs for debugging failures.
- Docker Images: Built production Docker images are uploaded to a container registry (e.g., Docker Hub, AWS ECR) if needed.

## Future Improvements

Set up preview builds using Vercel or a similar service for feature branches.
Add visual testing with tools like Percy to catch regressions in the UI.
Implement performance monitoring and analytics in deployment pipelines.

## Documentation

- [Contributing Guidelines](./CONTRIBUTING.md)
- [Diagrams](./DIAGRAMS.md)
