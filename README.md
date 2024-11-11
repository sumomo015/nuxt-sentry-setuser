# Nuxt Sentry SetUser

## Reproduction Environment

- node v20.18.0
- pnpm 9.12.3
- development environment (no error in the build environment)

## Steps to Reproduce

### 1. Install dependencies
```bash
pnpm install
```

### 2. Start nuxt
```bash
pnpm run dev
```

### 3. Open your browser and navigate to
```
http://localhost:3000/
```

### 4. You will see the following error
```
[nuxt] [request error] [unhandled] [500] Cannot use import statement outside a module
```
