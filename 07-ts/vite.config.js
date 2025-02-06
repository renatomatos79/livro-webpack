import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        include: ['src/**/*.test.ts'],
        coverage: {
            provider: 'v8',
            include: ['src/libs/**/*.ts'],
            exclude: ['src/libs/index.ts', 'src/main.ts', 'src/**/*.test.ts'],
            reporter: ['text', 'html'],
        },
    },
})
