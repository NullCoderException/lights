# Flashlight Collection Project Plan

## Phase 1: Project Setup

- [x] Create feature/react-app branch
- [x] Set up workspace structure:

```
./light
├── package.json (marks this as workspace root)
└── /packages
    ├── /shared
    │   ├── package.json (name: "@flashlights/shared")
    │   └── /src
    │       ├── /types
    │       │   ├── index.ts
    │       │   └── types.ts
    │       ├── /data
    │       │   ├── index.ts
    │       │   └── lights.ts
    │       └── index.ts
    ├── /frontend
    │   ├── /app
    │   │   ├── routes
    │   │   │   └── _index.tsx
    │   │   ├── entry.client.tsx
    │   │   ├── entry.server.tsx
    │   │   ├── root.tsx
    │   │   └── tailwind.tss
    │   ├── /public
    │   ├── vite.config.ts
    │   ├── tailwind.config.ts
    │   ├── tsconfig.json
    │   └── package.json (depends on "@flashlights/shared")
    └── /backend
        ├── tsconfig.json
        └── package.json (depends on "@flashlights/shared")
```

Note: Current legacy project structure is as follows:

```
lights
├── package.json
├── tsconfig.json
├── .gitignore
├── .vscode
├── README.md
└── packages
    └── shared
        └── src
            ├── data
            │   └── lights.ts
            ├── types.ts
            └── index.ts
```

- [x] Move existing types to shared package
- [x] Move lights.ts to shared/data
- [ ] Set up Docker environment
- [x] Configure TypeScript for all packages
- [ ] Set up basic CI pipeline (if desired)

## Phase 2: Backend Development

- [ ] Set up Express/Fastify with TypeScript
- [ ] Configure PostgreSQL
- [ ] Create database schema
- [ ] Implement repository pattern
- [ ] Create seed functionality using shared light data
- [ ] Implement basic CRUD endpoints
- [ ] Add validation layer
- [ ] Set up CSV export functionality

## Phase 3: Frontend Foundation

- [x] Set up React + Remix
- [x] Configure Tailwind
- [ ] Set up React Query
- [x] Create basic layout components
- [ ] Implement routing structure
- [ ] Create core shared components

## Phase 4: Core Features

- [ ] Light listing view with filters
- [ ] Individual light detail view
- [ ] Add/Edit light forms
- [ ] Basic search functionality
- [ ] Collection statistics view
- [ ] CSV export interface
- [ ] Basic battery tracking

## Phase 5: Enhanced Features

- [ ] Advanced filtering
- [ ] CCT/Emitter distribution charts
- [ ] Battery inventory management
- [ ] Image upload capability
- [ ] Manufacturer statistics
- [ ] UI/UX improvements

## Phase 6: Refinement

- [ ] Add authentication (if desired)
- [ ] Performance optimization
- [ ] Mobile responsive improvements
- [ ] Data backup strategy
- [ ] Documentation

## Phase 7: Migration

- [ ] Test data migration
- [ ] Verify all functionality
- [ ] Plan cutover strategy
- [ ] Execute migration
