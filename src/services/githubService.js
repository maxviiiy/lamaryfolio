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