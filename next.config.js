// @ts-check

const withTM = require('next-transpile-modules')([
  '@mui/material',
  '@mui/system',
  '@mui/icons-material', // If @mui/icons-material is being used
]);

/**
 * @type {import('next').NextConfig}
 **/

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@mui/styled-engine': '@mui/styled-engine-sc',
    };
    return config;
  },
};

// Materialize
// module.exports = withTM(nextConfig);

// Tailwind
const vanillaNextConfig = {};
module.exports = vanillaNextConfig;
