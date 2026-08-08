const fs = require('fs');

const colorMap = [
  // CategoryPage.jsx
  { file: './src/shared/CategoryPage.jsx', from: 'className="hover:text-blue-600 transition"', to: 'className="hover:text-[var(--accent)] transition-colors"' },
  { file: './src/shared/CategoryPage.jsx', from: '<aside className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100 h-fit sticky top-28">', to: '<aside className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm h-fit sticky top-28">' },
  { file: './src/shared/CategoryPage.jsx', from: '<FiFilter className="text-xl text-blue-600" />', to: '<FiFilter className="text-xl text-[var(--accent)]" />' },
  { file: './src/shared/CategoryPage.jsx', from: '<h2 className="text-xl font-bold">\n                Filters\n              </h2>', to: '<h2 className="text-xl font-bold text-[var(--text)]">Filters</h2>' },
  { file: './src/shared/CategoryPage.jsx', from: '<h3 className="font-semibold text-slate-900">\n                Category\n              </h3>', to: '<h3 className="font-semibold text-[var(--text)]">Category</h3>' },
  { file: './src/shared/CategoryPage.jsx', from: '<h3 className="font-semibold text-slate-900">\n                Material\n              </h3>', to: '<h3 className="font-semibold text-[var(--text)]">Material</h3>' },
  { file: './src/shared/CategoryPage.jsx', from: '<h3 className="font-semibold text-slate-900">\n                Finish\n              </h3>', to: '<h3 className="font-semibold text-[var(--text)]">Finish</h3>' },
  { file: './src/shared/CategoryPage.jsx', from: '<h2 className="text-3xl font-bold text-slate-900">', to: '<h2 className="text-3xl font-bold text-[var(--text)]">' },
  { file: './src/shared/CategoryPage.jsx', from: '<p className="mt-2 text-gray-600">', to: '<p className="mt-2 text-[var(--text-secondary)]">' },
  { file: './src/shared/CategoryPage.jsx', from: 'className="group overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"', to: 'className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[var(--accent)]/30 hover:shadow-xl"' },
  { file: './src/shared/CategoryPage.jsx', from: '<p className="text-xs uppercase tracking-[3px] text-blue-600 font-semibold">', to: '<p className="text-xs uppercase tracking-[3px] text-[var(--accent)] font-semibold">' },
  { file: './src/shared/CategoryPage.jsx', from: '<h3 className="mt-3 text-2xl font-bold text-slate-900">', to: '<h3 className="mt-3 text-2xl font-bold text-[var(--text)]">' },
  { file: './src/shared/CategoryPage.jsx', from: '<p className="mt-3 text-gray-600 leading-7">', to: '<p className="mt-3 text-[var(--text-secondary)] leading-7">' },
  { file: './src/shared/CategoryPage.jsx', from: '<span className="text-blue-600 font-semibold group-hover:translate-x-1 transition-all">', to: '<span className="text-[var(--accent)] font-semibold group-hover:translate-x-1 transition-all">' },
  // Pagination buttons
  { file: './src/shared/CategoryPage.jsx', from: 'className="h-11 w-11 rounded-xl border border-gray-200 bg-white font-semibold text-blue-600 shadow-sm transition hover:bg-blue-600 hover:text-white"', to: 'className="h-11 w-11 rounded-xl border border-[var(--border)] bg-[var(--card)] font-semibold text-[var(--accent)] shadow-sm transition hover:bg-[var(--accent)] hover:text-white"' },
  { file: './src/shared/CategoryPage.jsx', from: 'className="h-11 w-11 rounded-xl border border-gray-200 bg-white font-semibold transition hover:bg-blue-600 hover:text-white"', to: 'className="h-11 w-11 rounded-xl border border-[var(--border)] bg-[var(--card)] font-semibold text-[var(--text-secondary)] transition hover:bg-[var(--accent)] hover:text-white"' },
  { file: './src/shared/CategoryPage.jsx', from: 'className="rounded-xl border border-gray-200 bg-white px-5 py-3 font-semibold transition hover:bg-blue-600 hover:text-white"', to: 'className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 py-3 font-semibold text-[var(--text-secondary)] transition hover:bg-[var(--accent)] hover:text-white"' },
];

colorMap.forEach(({ file, from, to }) => {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes(from)) {
    const updated = content.replace(from, to);
    fs.writeFileSync(file, updated, 'utf8');
    console.log(`Fixed: ${from.substring(0, 40)}...`);
  } else {
    console.log(`NOT FOUND: ${from.substring(0, 50)}...`);
  }
});

console.log('Done fixing CategoryPage.jsx colors');
