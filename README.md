# CodeLeap Network

A social networking app built as a frontend challenge for [CodeLeap](https://codeleap.co.uk/). Create, edit, and delete posts in a clean, modern interface with infinite scroll, theme switching, and full accessibility support.

**Live demo:** https://codeleap-network-snowy.vercel.app/

![App mobile showcase](https://github.com/user-attachments/assets/d783045d-3bf7-48e9-8f3e-9428f2747699)

| Light Theme Signup                    | Dark Theme Signup                 |
| ----------------------------------- | ----------------------------------- |
| ![Light theme signup screenshot](https://github.com/user-attachments/assets/df9ac533-ffe9-409a-b871-46cf71c3aad7) | ![Dark theme signup screenshot](https://github.com/user-attachments/assets/50a2f3af-7da3-419a-8ad4-adbcba22f8ae) |

| Light Theme Home                    | Dark Theme Home                     |
| ----------------------------------- | ----------------------------------- |
| ![Light theme home screenshot](https://github.com/user-attachments/assets/c9a72563-7aaa-4d6d-8598-2dac514e95e3) | ![Dark theme home screenshot](https://github.com/user-attachments/assets/422dbc06-3f77-4aef-aba3-4f39d264db2b) |

| Light Theme Edit Post               | Dark Theme Edit Post                |
| ----------------------------------- | ----------------------------------- |
| ![Light theme edit post screenshot](https://github.com/user-attachments/assets/86073a45-6ecf-4a06-8b4f-b77f3db7b2cc) | ![Dark theme edit post screenshot](https://github.com/user-attachments/assets/68a66cf6-7a8b-4ada-987f-103401ba49aa) |

| Light Theme Delete Post             | Dark Theme Delete Post              |
| ----------------------------------- | ----------------------------------- |
| ![Light theme edit post screenshot](https://github.com/user-attachments/assets/7a1f5708-d1f5-4cd0-ad20-993b45118528) | ![Dark theme edit post screenshot](https://github.com/user-attachments/assets/8af66b52-aec6-407f-80da-704d21d0b11a) |

| Light Theme Mobile Edit Post        | Dark Theme Mobile Edit Post         |
| ----------------------------------- | ----------------------------------- |
| ![Light theme mobile edit post screenshot](https://github.com/user-attachments/assets/71a79de4-db45-41e8-b504-4a6c91655207) | ![Dark theme mobile edit post screenshot](https://github.com/user-attachments/assets/bd878ab7-d8b5-4a96-99ef-111b2e2c8b01) |

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (`@layer base/utilities`, `@theme`)
- **State management:** Zustand (Client-side Auth & Theme, persisted to localStorage)
- **Server state:** TanStack Query v5 (infinite scroll, suspense queries)
- **Forms:** React Hook Form + Zod
- **HTTP:** Axios
- **UI primitives:** Base UI (accessible, unstyled)
- **Package manager:** Bun


## Features

### Posts
- Infinite scroll feed with offset-based pagination
- Skeleton loading via React Suspense on first load, and skeleton on subsequent fetches
- Create, edit, and delete your own posts
- Edit/delete dialogs are screen-aware: slide-up drawer on mobile, centered modal from `md` breakpoint

### Auth
- Username-only auth (no password) stored in Zustand and persisted to localStorage
- Route protection: unauthenticated users are redirected to `/signup`, authenticated users are redirected away from it
- Signup button disabled until username passes validation (3–20 chars, letters, numbers, underscores only)

### Theme
- Light, dark, and system modes
- Persisted via Zustand + localStorage
- Dark variables applied via `.dark` class on `<html>`, compatible with Tailwind CSS v4

### DX & Code Quality
- Atomic commits following Conventional Commits throughout the entire development history
- Husky + lint-staged for pre-commit formatting validation
- Prettier with `prettier-plugin-tailwindcss` and `prettier-plugin-organize-imports`
- Feature-based folder structure (`features/auth`, `features/post`) with shared UI primitives under `components/ui`
- `POSTS_LIMIT` and `siteConfig` as single-source-of-truth constants
- `postKeys` object for type-safe TanStack Query cache invalidation
- API base URL stored in `.env` following security best practices, even though the API is public
- Full accessibility: `aria-label`, `aria-invalid`, `focus-visible` styles, `active` states on interactive elements


## Project Structure

```
src/
├── app/                  # Next.js App Router (layout, pages, globals.css)
├── components/
│   ├── ui/               # Reusable UI primitives (Button, Input, Icon, etc.)
│   └── ...               # App-level components (Header, ThemeProvider, UserMenu, etc.)
├── features/
│   ├── auth/             # Auth store, types, components (AuthGuard, SignupForm)
│   └── post/             # Post API, queries, mutations, types, components
└── lib/                  # Constants, utilities, query client, theme store
```


## Getting Started

```bash
# Install dependencies
bun install

# Set up environment
cp .env.example .env
# Add NEXT_PUBLIC_API_BASE_URL=https://dev.codeleap.co.uk/careers/

# Run development server
bun dev
```


## Design Decisions

**React Hook Form over TanStack Form** — TanStack Form is a great choice for complex, highly dynamic forms with deep TypeScript integration (I used it in "Z" project), but it would be overkill here. React Hook Form is lightweight, has minimal boilerplate, and is the right tool for this scope.

**No full-stack implementation** — The challenge backend is Django. Since I'm focused on the TypeScript ecosystem and the challenge is frontend-scoped, I built against the provided REST API rather than re-implementing the backend.

**Like and Comment UI** — These interactions are implemented in the UI for visual consistency and to reflect a realistic product interface, but are disabled since the provided API does not support these endpoints.

**Client-side auth routing** — Because auth state lives in Zustand (client-side), route protection is handled with client navigation. This means there's a brief flash before redirect on direct URL access. With a server-side auth solution, Next.js middleware could handle this — a known and intentional tradeoff given the constraints of the challenge.

**Brand colors** — Pulled directly from the CodeLeap website to keep the app visually consistent with their brand.

---
*Built with passion and a focus on code quality.*
