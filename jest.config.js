// jest.config.js

import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './', // Caminho para a pasta do seu projeto Next.js
});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // Mapear as importações de CSS do Next.js
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

export default createJestConfig(customJestConfig);
