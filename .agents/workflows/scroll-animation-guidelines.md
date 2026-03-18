---
description: How to implement smooth scrolling animations when moving between sections
---

# Scroll Animation Guidelines

When building or updating layouts that require scrolling interactions (e.g., clicking a button to navigate to another section on the same page), you MUST use the established custom bezier scroll movement.

## Using the `Button` Component
The `Button` component located in `src/components/ui/Button/Button.tsx` has been specifically designed to handle smooth scrolling with a custom `easeInOutCubic` easing function.

Whenever possible, use this `Button` component and provide a `targetId` instead of an `href` when navigating to sections on the same page:

```tsx
import Button from "@/components/ui/Button/Button";

// DO THIS for page anchors:
<Button variant="primary" targetId="featured-works">
  Scroll to Featured Works
</Button>

// DO NOT DO THIS for page anchors:
<Button variant="primary" href="#featured-works">
  Scroll to Featured Works
</Button>
```

This guarantees that all in-page navigation maintains a buttery-smooth 1.5-second easing curve, providing a consistent feeling across the entire application.

## Fallback Implementation
If you are unable to use the `Button` component (e.g., you are building a completely custom interactive element), you MUST replicate the following `easeInOutCubic` scroll behavior:

```typescript
const handleScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const offset = 80; // Standard header offset
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    const targetPosition = offsetPosition;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1500; // 1.5 seconds scroll duration
    let start: number | null = null;

    function animation(currentTime: number) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);

        // easeInOutCubic easing function
        const ease = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
};
```
