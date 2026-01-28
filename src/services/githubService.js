const BASE_URL = `https://api.github.com/users/maxviiiy/repos?per_page=100`;

const techIconMap = {
  javascript: "🟨",
  typescript: "🔷",
  react: "⚛️",
  css: "🎨",
  html: "🟧",
  nodejs: "🌿",
  tailwind: "🌬️",
  prisma: "🧩",
  // Add more mappings as needed
};

const filterShowcase = (repos) =>
  repos.filter((repo) => repo.topics && repo.topics.includes("showcase"));

const transformRepo = (repo) => ({
  id: repo.id,
  name: repo.name,
  description: repo.description,
  html_url: repo.html_url,
  topics: repo.topics || [],
  updated_at: repo.updated_at,
});

function sortByUpdatedAt(projects) {
  return [...projects].sort(
    (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
  );
}

export async function getAllShowcaseProjects() {
  try {
    const res = await fetch(BASE_URL, {
      headers: {
        Accept: "application/vnd.github.mercy-preview+json",
      },
    });

    if (!res.ok) throw new Error("GitHub API error");

    const raw = await res.json();
    const filtered = filterShowcase(raw);
    const transformed = sortByUpdatedAt(filtered.map(transformRepo));

    return transformed;
  } catch (err) {
    console.error("Error fetching GitHub projects:", err);
    return [];
  }
}

export async function getTopProjects() {
  const all = await getAllShowcaseProjects();
  return all.slice(0, 4);
}

export function getTechIcons(topics) {
  return topics.map((tech) => ({
    name: tech,
    icon: techIconMap[tech.toLowerCase()] || "📦",
  }));
}

const techNameMap = {
  javascript: 'javascript',
  typescript: 'typescript',
  react: 'react',
  reactjs: 'react',
  css: 'css3',
  css3: 'css3',
  html: 'html5',
  html5: 'html5',
  nodejs: 'nodejs',
  node: 'nodejs',
  tailwind: 'tailwindcss',
  tailwindcss: 'tailwindcss',
  prisma: 'prisma',
  python: 'python',
  java: 'java',
  vue: 'vuejs',
  vuejs: 'vuejs',
  angular: 'angularjs',
  express: 'express',
  mongodb: 'mongodb',
  postgresql: 'postgresql',
  mysql: 'mysql',
  docker: 'docker',
  git: 'git',
  github: 'github',
  nextjs: 'nextjs',
  'next.js': 'nextjs',
  firebase: 'firebase',
  redux: 'redux',
  sass: 'sass',
  scss: 'sass',
  webpack: 'webpack',
  vite: 'vitejs',
};

export function getTechLogos(topics) {
  return topics.map((tech) => {
    const techName = techNameMap[tech.toLowerCase()] || tech.toLowerCase();
    return {
      name: tech,
      logoUrl: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${techName}/${techName}-original.svg`,
    };
  });
}