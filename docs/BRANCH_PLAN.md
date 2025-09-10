# Branch Plan for Spider Solitaire

This document describes the proposed branch strategy to implement the Spider Solitaire web game based on the SRS v0.1.

## Branches

- `main`: stable release branch. All completed features are merged here via pull requests.
- `feature/scaffold`: initial project scaffold (React, Vite, Tailwind, Zustand, dnd-kit).
- `feature/logic`: core game logic including deck generation, setup, move rules, and scoring.
- `feature/ui`: components and pages (`HomePage`, `GamePage`, `SettingsPage`).
- `feature/storage`: localStorage persistence and settings management.
- `feature/animations`: card animations and responsive interactions.
- `feature/tests`: unit and e2e tests covering gameplay rules.
- `release/x.y`: tagged release branches prepared for deployment.

Each feature branch is cut from `main` and merged back via pull request after review and testing.

## Sprint Mapping

| Sprint | Branches |
|-------|----------|
| 0 | `feature/scaffold` |
| 1 | `feature/logic`, `feature/ui`, `feature/tests` |
| 2 | `feature/animations`, `feature/storage` |
| 3 | `release/x.y` |

