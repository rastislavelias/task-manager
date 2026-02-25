# Task manager

A small, self-contained task management application built with **React and TypeScript**.

This project was created as a **practice exercise in React fundamentals and typed state management**, with a focus on clean component structure, predictable data flow, and persistent client-side storage — without external state libraries or UI frameworks.

## Key Features

- Add new tasks
- Mark tasks as completed or active
- Delete tasks
- Filter tasks by:
  - **All**
  - **Active**
  - **Completed**
- Automatic localStorage persistence
- Derived filtering logic based on active tab
- Accessible form controls and status feedback

## Tech Stack

- React
- TypeScript
- Vite
- CSS

No state libraries, UI frameworks, or external data libraries were used.

## Engineering Focus

This project intentionally focuses on React fundamentals rather than feature depth:

- Component composition and separation of concerns
- Typed props and state (no `any`)
- Lifting and centralizing state
- Derived state via filtering
- Controlled inputs
- Side-effect management with `useEffect`
- Local storage synchronization
- Avoiding unnecessary re-renders
- Clean data flow from parent to child components

## Implementation Overview

- All task state is managed through a custom `useTasks` hook.
- Filtering is derived from `tasks` and `activeTab`, not stored separately.
- localStorage persistence is handled via a `useEffect` side effect.
- UI components are split by responsibility:
  - Form
  - Tabs
  - Task list
  - Individual task item
  - Summary
- No global state or external abstractions are used.

## Accessibility Notes

- Proper `<label>` usage for inputs
- Keyboard-accessible buttons and filters
- Clear status messaging for empty task states
- ARIA attributes used minimally and intentionally
- No unnecessary screen reader announcements

## Scope Decisions

The following features were intentionally omitted to keep the project focused:

- Drag-and-drop reordering
- Editing tasks inline
- Due dates or categories
- Authentication or multi-user support
- Backend or database integration

## Live Demo

https://rastislavelias.github.io/task-manager

## Author

**Rastislav Elias**  
https://rastislavelias.com
