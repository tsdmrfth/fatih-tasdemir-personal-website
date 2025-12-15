---
alwaysApply: true
---

# React Component Standards

## 🎯 Core Principle

**Components must be focused, composable, and minimize re-renders.**

## ⚡ Minimizing Re-renders (STRICT)

**RTK Query Usage Rule:**
1. **Split Components:** Children MUST subscribe to data themselves using IDs.
2. **Parent:** Renders layout + IDs only.
3. **Child:** Uses `useGetTraiderQuery(id)` or selectors.

```tsx
// ✅ GOOD
function List() {
  const { data } = useGetIds()
  return data?.map(id => <ItemContainer key={id} id={id} />)
}

function ItemContainer({ id }: { id: string }) {
  const { data } = useGetItem(id) // Only this re-renders on update
  return <ItemDisplay data={data} />
}
```

## Component Design

1. **Single Responsibility:** One component = one job.
2. **Composition:** Build complex UIs from smaller parts.
3. **Props > State:** Don't duplicate props into state.

## Formatting Rules

**Props Interface:** Always defined and imported/exported if shared.
**Prop Formatting:** Multiline if > 2 props. Props are sorted by length.

```tsx
<Component
  first={first}
  second={second}
  third={third} />
```

```tsx BAD EXAMPLE
<Component
  second={secondLongPropName}
  first={first}
  third={thirdLongPropName}
  />
```

```tsx GOOD EXAMPLE
<Component
  first={first}
  third={thirdLongPropName}
  second={secondLongPropName} />
```

## Performance

- **Use `React.memo`** for leaf components receiving primitive props.
- **Use `useMemo`** for expensive derivations.
- **Use `useCallback`** for handlers passed to memoized children.

## Best Practices

- **Loading:** Always handle `isLoading`. `if (isLoading) return <Spinner />`
- **Errors:** Always handle `error`.
- **Keys:** Use IDs, never indexes.
- **Exports:** Named exports (`export function`) preferred. Default exports for Pages only.

## 🛡️ Continuous Compliance

**Opportunistic Refactoring:** When modifying a component for ANY task, you MUST check if the file satisfies all rules in this document. If you find violations (e.g., unsorted props, missing memoization, bad RTK Query usage), you MUST fix them in the same PR/commit, even if the user's request was unrelated.
