# Frontend Architecture and Workflow Diagrams

This file contains key diagrams that illustrate the architecture, workflows, and state management of the Kanban Frontend application.

## Component Hierarchy

This diagram illustrates the top-level structure of the Kanban frontend application and how components interact with one another.

```mermaid
---
config:
  flowchart:
    curve: linear
---
flowchart TD
  App --> Sidebar
  App --> Header
  App --> BoardView
  BoardView --> Column
  Column --> Task
  App --> Modal
```

- **App**: The root component that initializes and manages the entire application.
  - **Sidebar**: Displays the list of boards and allows switching between them or adding new boards.
  - **Header**: Displays the current board's title and provides actions like opening the "Add New Task" modal.
  - **BoardView**: Contains all the columns and tasks of the selected board.
    - **Column**: Represents a single column; contains tasks with drag-and-drop functionality.
    - **Task**: Represents an individual task; clicking it opens the task details/edit modal.
  - **Modal**: A reusable modal component for editing boards, columns, or tasks.

## State Flow

This diagram illustrates the flow of data and state interactions within the application. The state is globally managed using Redux Toolkit slices for boards, columns, and tasks

```mermaid
stateDiagram-v2
  [*] --> Sidebar
  Sidebar --> |onSelectBoard| BoardView
  Sidebar --> |onAddBoard| Modal
  BoardView --> Column
  Column --> |onStatusChange| Task
  Task --> Column : Drag and Drop
  Modal --> Sidebar : Add/Edit/Delete Board
  Modal --> Column : Add/Edit/Delete Column
  Modal --> Task : Add/Edit/Delete Task
  [*] --> Header
  Header --> Modal : Open Add Task Modal
```

- The primary app state transitions occur via user interactions (e.g., selecting a board, dragging tasks).
- Redux slices (e.g., boardsSlice, tasksSlice) handle state changes in response to dispatched actions.
- The Modal is used for CRUD operations (Create, Read, Update, Delete) on boards, columns, and tasks.

## Data Flow Between Slices

```mermaid
flowchart TD
  BoardsSlice --> |boardId| ColumnsSlice
  ColumnsSlice --> |columnId| TasksSlice
  TasksSlice --> BoardView
  ColumnsSlice --> BoardView
  BoardsSlice --> Sidebar
```

- BoardsSlice:
  - Stores data about all boards.
  - Provides data to the Sidebar and facilitates board switching in BoardView.
- ColumnsSlice:
  - Stores data of columns.
  - Supplies column-specific data to the BoardView.
- TasksSlice:
  - Stores information about individual tasks.
  - Supplies task details to Task components and supports drag-and-drop workflows.

This state hierarchy ensures a normalized database-like structure, avoiding duplication of data between slices.

## End-to-End Workflow

This diagram illustrates the typical workflow when a user interacts with the app, from executing actions to triggering state updates and UI changes.

```mermaid
sequenceDiagram
  actor User
  User ->> Sidebar: Select Board
  Sidebar ->> Store: Dispatch SelectBoard Action
  Store ->> BoardView: Update Board State
  User ->> Header: Add New Task
  Header ->> Modal: Open Add Task Modal
  User ->> Modal: Fill Task Details and Submit
  Modal ->> Store: Dispatch AddTask Action
  Store ->> BoardView: Update Task State
  BoardView ->> Column: Insert New Task in Column
```

1. Board Selection:
   - The user clicks a board in the Sidebar.
   - A Redux action is dispatched, updating the currently active board in the state.
   - The BoardView re-renders, displaying the selected board’s columns and tasks.
2. Adding a Task:
   - The user selects "Add New Task" in the Header, which opens the Modal.
   - On submitting the task details, a Redux action is dispatched to add the task.
   - The BoardView updates to reflect the new task in the associated column.

## CI/CD Workflow

This diagram demonstrates the CI/CD pipeline steps for the project, automated using GitHub Actions.

```mermaid
flowchart TD
  Developer --> |Push Code| GitHub
  GitHub --> |Trigger Workflow| Pipeline[CI/CD Pipeline]
  Pipeline --> |Run Tests| Unit[Unit Tests]
  Pipeline --> |Run Linting| Lint
  Pipeline --> |Run E2E Tests| Cypress[Cypress Tests]
  Pipeline --> |Build App| Build
  Build --> |Deploy| Hosting[Hosting Service]
```

## Planned Drag-and-Drop Implementation

This diagram illustrates how drag-and-drop functionality for tasks within and across columns works.

```mermaid
stateDiagram-v2
  Task --> Column : Start Dragging
  Column --> BoardView : Dragged Task Data Sent to State
  BoardView --> Column : Target Column Receives Dropped Task
  Column --> Task : Task Re-Renders in New Column
```

1. Start Dragging:
   - A task component is dragged using a library like react-dnd or @dnd-kit.
   - Data about the dragged task is captured and sent to the BoardView.
2. Drop Task:
   - The task is dropped into a column.
   - A Redux action updates the task’s `status` and `columnId` in the application state.
3. Update Column:
   The affected columns re-render to reflect the updated task placement.

## API Interaction Workflow (Future)

Though the backend isn't implemented yet, here’s the planned interaction between the frontend and backend.

```mermaid
sequenceDiagram
  actor User
  User ->> Frontend: Create New Task
  Frontend ->> ReduxStore: Add Task to Local State
  Frontend ->> BackendAPI: POST /tasks
  BackendAPI --> Frontend: Return Task with ID and Status
  Frontend ->> ReduxStore: Update Task with Backend Response
```
