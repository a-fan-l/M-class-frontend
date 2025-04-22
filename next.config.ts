// import type { NextConfig } from 'next';
// import path from 'path';

// const nextConfig: NextConfig = {
//   eslint: {
//     // 如果有 useEslintrc 或 extensions，请删除它们
//     // 只保留支持的选项，例如：
//     ignoreDuringBuilds: true, // 临时解决方案：构建时忽略 ESLint 错误
//   },
//   sassOptions: {
//     includePaths: [
//       path.join(__dirname, '/'),
//       path.join(__dirname, 'src/styles'),
//     ],
//   },
//   webpack: (config, { isServer, dev }) => {
//     // 添加路径别名解析
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       '@styles': path.join(__dirname, 'src/styles'),
//       '@locales': path.join(__dirname, 'src/locales'),
//       '@i18n': path.join(__dirname, 'src/i18n'),
//       '@static': path.join(__dirname, 'src/static'),
//     };

//     config.module.rules.forEach((rule: any) => {
//       if (
//         rule?.test instanceof RegExp &&
//         rule.test.test('.svg') &&
//         rule.type === 'asset'
//       ) {
//         rule.exclude = /\.svg$/i;
//       }
//     });

//     // Add SVGR loader
//     config.module.rules.push({
//       test: /\.svg$/i,
//       issuer: /\.[jt]sx?$/,
//       use: ['@svgr/webpack'],
//     });

//     return config;
//   },
// };

// export default nextConfig;



import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  transpilePackages: ['@fairxfun/design', '@fairxweb/elements'],
  eslint: {
    // 如果有 useEslintrc 或 extensions，请删除它们
    // 只保留支持的选项，例如：
    ignoreDuringBuilds: true, // 临时解决方案：构建时忽略 ESLint 错误
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, '/'),
      path.join(__dirname, 'src/styles'),
    ],
  },
  webpack: (config, { isServer, dev }) => {
    // 添加路径别名解析
    config.resolve.alias = {
      ...config.resolve.alias,
      '@styles': path.join(__dirname, 'src/styles'),
      '@root': path.join(__dirname, '/'),
      '@locales': path.join(__dirname, 'src/locales'),
      '@i18n': path.join(__dirname, 'src/i18n'),
      '@static': path.join(__dirname, 'src/static'),
    };

    config.module.rules.forEach((rule: any) => {
      if (
        rule?.test instanceof RegExp &&
        rule.test.test('.svg') &&
        rule.type === 'asset'
      ) {
        rule.exclude = /\.svg$/i;
      }
    });

    // Add SVGR loader
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
