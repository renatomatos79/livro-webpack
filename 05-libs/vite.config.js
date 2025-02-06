import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        include: ['src/**/*.test.js'],
        coverage: {
            provider: 'v8',
            include: ['src/libs/**/*.js'],
            exclude: ['src/libs/index.js', 'src/main.js', 'src/**/*.test.js'],
            reporter: ['text', 'html'],
        },
    },
})
