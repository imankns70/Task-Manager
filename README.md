task-manager/
│
├── backend/                 # NestJS backend
│   ├── src/
│   │   ├── auth/            # Auth module
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.module.ts
│   │   │   ├── dto/         # login/register DTOs
│   │   │   └── guards/      # JWT/roles
│   │   │
│   │   ├── users/           # Users module
│   │   │   ├── users.controller.ts
│   │   │   ├── users.service.ts
│   │   │   ├── users.module.ts
│   │   │   └── dto/
│   │   │
│   │   ├── projects/        # Projects module
│   │   │   ├── projects.controller.ts
│   │   │   ├── projects.service.ts
│   │   │   ├── projects.module.ts
│   │   │   └── dto/
│   │   │
│   │   ├── tasks/           # Tasks module
│   │   │   ├── tasks.controller.ts
│   │   │   ├── tasks.service.ts
│   │   │   ├── tasks.module.ts
│   │   │   ├── dto/
│   │   │   └── gateways/    # WebSocket gateway
│   │   │
│   │   ├── notifications/   # optional real-time notifications
│   │   │   ├── notifications.gateway.ts
│   │   │   └── notifications.module.ts
│   │   │
│   │   ├── common/          # shared utilities, pipes, filters
│   │   ├── main.ts
│   │   └── app.module.ts
│   │
│   ├── test/                # backend tests
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/                # Next.js frontend
│   ├── public/              # static assets
│   ├── src/
│   │   ├── pages/           # Next.js pages
│   │   │   ├── index.tsx    # login or dashboard landing
│   │   │   ├── login.tsx
│   │   │   ├── register.tsx
│   │   │   ├── profile.tsx
│   │   │   └── projects/
│   │   │       └── [id].tsx # dynamic project page
│   │   │
│   │   ├── components/      # reusable UI components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── ProjectList.tsx
│   │   │   └── TaskCard.tsx
│   │   │
│   │   ├── context/         # auth/user context
│   │   ├── hooks/           # custom hooks (e.g., useAuth, useTasks)
│   │   ├── services/        # API calls to backend
│   │   └── styles/          # CSS / Tailwind / SCSS
│   │
│   ├── tests/               # frontend tests
│   ├── package.json
│   └── tsconfig.json
│
├── docker/                  # Docker configs for frontend + backend
│   ├── Dockerfile.frontend
│   ├── Dockerfile.backend
│   └── docker-compose.yml
│
├── .gitignore
└── README.md


running nest: npm run start:dev
running next: npm run dev