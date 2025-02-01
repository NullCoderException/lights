# Flashlight Collection Project Plan

## Phase 1: Project Setup

- [ ] Create feature/react-app branch
- [ ] Set up workspace structure:

```
lights
├── package.json (marks this as workspace root)
├── tsconfig.json
├── .gitignore
├── .vscode
├── README.md
└── packages
    ├── shared
    │   ├── package.json (name: "@flashlights/shared")
    │   └── src
    │       ├── types
    │       │   └── index.ts
    │       └── data
    │           └── lights.ts
    ├── frontend
    │   └── package.json (depends on "@flashlights/shared")
    └── backend
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

- [ ] Move existing types to shared package
- [ ] Move lights.ts to shared/data
- [ ] Set up Docker environment
- [ ] Configure TypeScript for all packages
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

- [ ] Set up React + Remix
- [ ] Configure Tailwind
- [ ] Set up React Query
- [ ] Create basic layout components
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
