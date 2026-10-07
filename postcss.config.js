module.exports = {
  plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: {},
    // Skips browserslist's upward search for browserslist-stats.json, which
    // Hugo's Node.js read sandbox (security.node.permissions) would otherwise
    // block. Empty object is fine as we don't use "in my stats" queries.
    autoprefixer: { stats: {} },
  },
};
