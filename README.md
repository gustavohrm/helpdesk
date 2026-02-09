# Self-hosted & Open Source Helpesk

## Teck stack

### Front-end

- HTML, CSS, TailwindCSS & TypeScript: UI/UX
- Vite: Bundling
- Vitest & Playwright: automated tests

### Back-end

- Node.js
- Fastify: RESTful API
- PostgreSQL: database & auth
- better-auth: authentication
- MinIO: file storage
- Docker
- Nodemailer: mail sending
- Vitest: unit & e2e tests

## Project structure

```plain
helpdesk/
├── .data/               # Persistent data
│   ├── postgres/
│   └── minio/
├── apps/                   # Node.js back-end
│   ├── backend/
│   │   ├── src/
│   │   │   ├── plugins/    # Auth, DB, WebSocket, e-mail
│   │   │   ├── modules/    # Logic & workflows (tickets, users, etc.)
│   │   │   ├── migrations/ # SQL migration files
│   │   │   ├── tests/      # Unit & integration tests
│   │   │   └── index.ts    # Back-end entry point
│   │   └── package.json
│   └── frontend/                # Vite frontend application
│       ├── src/
│       │   ├── _core/           # App logic, API clients, and utilities
│       │   │   ├── api/         # Back-end integration
│       │   │   ├── storage/     # Session and local storage management
│       │   │   └── utils/       # Shared helpers (Alerts, Markdown, etc)
│       │   ├── _public/         # Static assets
│       │   ├── _ui/             # Global styles and UI-only scripts
│       │   ├── _tests/          # Unit, integration & E2E tests
│       │   ├── admin/index.html # Admin panel home page
│       │   ├── login/index.html # Login page
│       │   ├── .../index.html   # Other pages
│       │   └── index.html       # Home page (ticket list, sidebar, etc)
│       ├── vite.config.ts
│       └── package.json
├── .env.example         # Environment variables template
├── compose.yml          # Container & volumes configuration
└── package.json         # Root orchestrator
```
