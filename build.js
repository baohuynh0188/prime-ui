const esbuild = require('esbuild');

esbuild
    .build({
        entryPoints: ['./src/index.ts'], // Entry point for your components
        bundle: true, // Bundle all dependencies into one file
        minify: true, // Minify the output
        sourcemap: true, // Generate source maps
        target: ['es2023'], // Target environment
        outdir: 'dist', // Output directory
        splitting: true, // Enable code splitting for ESM
        format: 'esm', // Output format (ESM)
        external: ['react', 'react-dom'], // Treat these as external dependencies
        tsconfig: './tsconfig.json', // Use your tsconfig for TypeScript support
        platform: 'browser', // Target browser environments
        jsx: 'automatic', // Support JSX with React 17+ (automatic JSX runtime)
        logLevel: 'info',
    })
    .catch(() => process.exit(1));
