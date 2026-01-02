---
alwaysApply: true
---

# React Component Standards

## 🎯 Core Principle

**Components must be focused, composable, and use modern React patterns.**

## 🏗️ component Structure

1.  **Functional Components:** Use functional components. The project standard prefers `React.FC` or standard function definitions.
    ```tsx
    // Usage with React.FC
    export const ComponentName: React.FC<Props> = ({ prop }) => { ... }
    
    // Usage with standard function
    export function ComponentName({ prop }: Props) { ... }
    ```
2.  **Single Responsibility:** Each component should do one thing well. Extract sub-components for complex renders.
3.  **File Naming:** Use PascalCase for component files (e.g., `ComponentName.tsx`).

## 🎨 Styling (Tailwind CSS)

1.  **Utility Classes:** Use Tailwind CSS utility classes directly in `className`.
2.  **Readability:** 
    -   Group related classes logicallly (Layout -> Spacing -> Typography -> Colors -> Interactions).
    -   Use template literals with backticks for conditional calls: `` `base-class ${isActive ? 'active-class' : ''}` ``.
    -   Avoid caching `className` strings in variables unless they are reused widely; prefer direct usage or extraction to small sub-components.

## 💾 State Management

1.  **Local State:** Use `useState` or `useReducer` for component-local state.
2.  **Global UI State:** Use **React Context** for global UI concerns (e.g., Modals, Themes, Data Overlays).
    -   Example: `useImageModal`, `useProjectDetails`.
3.  **Server State:** (If applicable) Use proper data fetching hooks. Avoid storing server data in global client stores unless necessary.

## ⚡ Performance

1.  **Memoization:**
    -   Use `React.memo` for leaf components that re-render often with the same props.
    -   Use `useMemo` for expensive calculations.
    -   Use `useCallback` for functions passed as props to memoized children.
2.  **Lazy Loading:** Use `React.lazy` and `Suspense` for large route-based components if bundle size becomes an issue.

## 🧩 Props & Interfaces

1.  **Explicit Types:** Always define a `Props` interface for components that accept props.
2.  **Prop Ordering:** Order props logically for readability:
    1.  **System Props** (`key`, `ref`)
    2.  **Custom Data Props** (`title`, `data`, `id`)
    3.  **Configuration/Boolean Props** (`isActive`, `hasIcon`)
    4.  **Event Handlers** (`onClick`, `onChange`)
    5.  **Styles** (`className`, `style`)

## 📦 Imports & Exports

1.  **Named Exports:** Prefer named exports (`export const Component = ...`) to ensuring explicit imports.
    -   *Exception:* Top-level pages or logical roots (like `App.tsx`) may use default exports.
2.  **Import Order:**
    1.  React / formatting libraries
    2.  Third-party libraries (`framer-motion`, `lucide-react`)
    3.  Internal components
    4.  Contexts / Hooks / Utils
    5.  Assets / Constants

## 🛠️ Tools & Libraries

-   **Icons:** Use `lucide-react` or `react-icons`.
-   **Animations:** Use `framer-motion` for complex animations.
-   **Utils:** Use `lodash` for robust utility functions (e.g., `throttle`, `debounce`) when native implementations are insufficient.

## 🛡️ Continuous Compliance

**Refactor on Touch:** When modifying a component, ensure it adheres to these standards. If you see simple violations (like bad prop ordering or missing types), fix them.
