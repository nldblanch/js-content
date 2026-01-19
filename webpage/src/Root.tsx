import { useEffect, useMemo } from "react";
import { Link } from "react-router";
import { associates } from "./data/associates";
import { commitStats } from "./data/commitStats";

type Particle = {
    id: string;
    sizePx: number;
    leftPct: number;
    topPct: number;
    animationDelayS: number;
    animationDurationS: number;
};

const PARTICLE_COUNT = 30;
const TILE_STYLE_COUNT = 6;

function mulberry32(seed: number) {
    return function () {
        let t = (seed += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

function createParticles(seed: number, count: number): Particle[] {
    const rand = mulberry32(seed);
    return Array.from({ length: count }, (_, index) => ({
        id: `p-${index}`,
        sizePx: rand() * 15 + 5,
        leftPct: rand() * 100,
        topPct: rand() * 100,
        animationDelayS: rand() * 15,
        animationDurationS: rand() * 10 + 10,
    }));
}

function normalizeGithubLink(github?: string) {
    if (!github) return null;
    if (github.includes("github.com")) return github;
    return `https://github.com/${github}`;
}

const Root = () => {
    const baseUrl = import.meta.env.BASE_URL;

    useEffect(() => {
        document.body.classList.add("is-preload");

        const clearPreload = () => {
            document.body.classList.remove("is-preload");
        };

        if (document.readyState === "complete") {
            window.setTimeout(clearPreload, 0);
        } else {
            window.addEventListener("load", clearPreload, { once: true });
        }

        return () => {
            window.removeEventListener("load", clearPreload);
            clearPreload();
        };
    }, []);

    const particles = useMemo<Particle[]>(() => {
        return createParticles(1337, PARTICLE_COUNT);
    }, []);

    const topContributors = useMemo(() => {
        return Object.entries(commitStats)
            .filter(([, contributions]) => contributions > 1)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 3)
            .map(([name, contributions]) => ({ name, contributions }));
    }, []);

    const totalContributions = useMemo(() => {
        return topContributors.reduce((sum, contributor) => sum + contributor.contributions, 0);
    }, [topContributors]);

    return (
        <>
            <div className="particles" aria-hidden="true">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="particle"
                        style={{
                            width: `${particle.sizePx}px`,
                            height: `${particle.sizePx}px`,
                            left: `${particle.leftPct}%`,
                            top: `${particle.topPct}%`,
                            animationDelay: `${particle.animationDelayS}s`,
                            animationDuration: `${particle.animationDurationS}s`,
                        }}
                    />
                ))}
            </div>

            <div id="wrapper">
                <header id="header">
                    <div className="inner">
                        <Link to="/" className="logo">
                            <span className="symbol">
                                <img src={`${baseUrl}images/logo.svg`} alt="" />
                            </span>
                            <span className="title">Digital Skills Academy</span>
                        </Link>
                    </div>
                </header>

                <div id="main">
                    <div className="inner">
                        <header>
                            <h1>🎓 Academy Associates</h1>
                            <p>
                                Welcome to our community of learners! Here is a list of everyone who has contributed to this{" "}
                                <strong>&nbsp;js-content&nbsp;</strong> repository.
                            </p>
                        </header>

                        {topContributors.length > 0 && (
                            <section id="contributors">
                                <h2>Top Contributors</h2>
                                <div className="table-wrapper">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Contribution</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {topContributors.map((contributor) => {
                                                const percentage =
                                                    totalContributions === 0
                                                        ? "0.0"
                                                        : ((contributor.contributions / totalContributions) * 100).toFixed(1);
                                                return (
                                                    <tr key={contributor.name} className="contributors-item">
                                                        <td>
                                                            <strong>{contributor.name}</strong>
                                                        </td>
                                                        <td>
                                                            <strong>{contributor.contributions}</strong>
                                                        </td>
                                                        <td>
                                                            <strong>{percentage}%</strong>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        )}

                        <section className="tiles" aria-label="Associates">
                            {associates.map((associate, index) => {
                                const githubLink = normalizeGithubLink(associate.github);
                                const target = githubLink ? "_blank" : undefined;
                                const rel = githubLink ? "noreferrer" : undefined;
                                const tileStyle = `style${(index % TILE_STYLE_COUNT) + 1}`;
                                const imageIndex = (index % 9) + 1;
                                return (
                                    <article key={`${associate.name}-${index}`} className={tileStyle}>
                                        <span className="image">
                                            <img src={`${baseUrl}images/pic0${imageIndex}.jpg`} alt="" />
                                        </span>

                                        <a href={githubLink ?? "#"} target={target} rel={rel}>
                                            <h2>{associate.name}</h2>
                                            <p>{associate.academy}</p>
                                            <div className="content">
                                                <p>{associate.tip}</p>
                                            </div>
                                        </a>
                                    </article>
                                );
                            })}
                        </section>
                    </div>
                </div>

                <footer id="footer">
                    <div className="inner">
                        <section>
                            <h2>Want to add your name?</h2>
                            <a href="https://github.com/nldblanch/js-content/tree/main/docs" target="_blank" rel="noreferrer">
                                <button type="button">Pull Request Guide</button>
                            </a>
                        </section>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Root;