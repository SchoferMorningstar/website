import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const githubUsername = "SchoferMorningstar";

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=10`
        );

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();

        const filtered = data.filter(
          (repo) => repo.name !== "SchoferMorningstar"
        );
        setRepos(filtered.slice(0, 3));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, [githubUsername]);

  if (loading) {
    return <div className="text-center py-10">Loading projects...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-600">
        Error loading projects: {error}
      </div>
    );
  }

  if (repos.length === 0) {
    return <div className="text-center py-10">No projects found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 space-y-8 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-8">My Latest Projects</h1>
      <ul className="space-y-8">
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800"
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-semibold text-blue-600 hover:underline"
            >
              {repo.name}
            </a>

            {repo.language && (
              <div className="flex items-center mt-2 space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <i
                  className={`devicon-${
                    repo.language.toLowerCase() === "css"
                      ? "css3"
                      : repo.language.toLowerCase() === "html"
                      ? "html5"
                      : repo.language.toLowerCase()
                  }-plain colored`}
                ></i>
                <span>{repo.language}</span>
              </div>
            )}

            {repo.description && (
              <p className="mt-3 text-gray-700 dark:text-gray-300 line-clamp-3">
                {repo.description}
              </p>
            )}

            <div className="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>
                Updated on {new Date(repo.updated_at).toLocaleDateString()}
              </span>
              <div className="flex space-x-6">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faStar} />
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faCodeBranch} />
                  <span>{repo.forks_count}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 text-center">
        <p>
          For all my projects, see my GitHub profile —{" "}
          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {githubUsername}
          </a>
        </p>
      </div>
    </div>
  );
}
