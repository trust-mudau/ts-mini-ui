Mini UI Framework (TypeScript + React)
Overview

This project is a lightweight, TypeScript-first component library inspired by frameworks like Chakra UI, ShadCN, and Radix UI.
It’s built from scratch using React + TypeScript + Vite, showcasing clean architecture, strong type safety, and reusable design systems.

The goal of the project is to demonstrate:

Ability to design modular, accessible UI components.

Architect reusable and themeable systems with scalable patterns.

Apply TypeScript’s advanced type inference for prop validation and API design.

Ship production-quality open-source packages (npm-ready).

✨ Features
Feature	Description
🧩 Reusable Components	Built from scratch (Button, Input, soon Modal + Toast). Fully typed props with generics.
🎨 Theming System	Centralized color palette + spacing scale via theme.ts. Easily extendable.
⚙️ Type Safety	TypeScript strict mode enabled; no any types. Leverages utility types and prop inference.
🧠 Clean Architecture	Follows component-driven development and logical folder separation (components/, hooks/, utils/).
🧪 Unit Testing	Uses Vitest for fast test runs. Includes basic examples for components and utility functions.
🚀 Developer Experience	Vite for lightning-fast dev server, TS build config for library output (dist/).
🔄 CI/CD Ready	Includes a GitHub Actions workflow that automatically runs tests on every push.
🌍 Deployment Ready	Optimized for npm publishing (npm publish). Can be imported into other React projects.
