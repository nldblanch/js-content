import type { Associate } from "../../data/associates";

type Props = {
    associates: Associate[];
    baseUrl: string;
    tileStyleCount?: number;
};

function normalizeGithubLink(github?: string) {
    if (!github) return null;
    if (github.includes("github.com")) return github;
    return `https://github.com/${github}`;
}

export function AssociatesGrid({ associates, baseUrl, tileStyleCount = 6 }: Props) {
    return (
        <section className="tiles" aria-label="Associates">
            {associates.map((associate, index) => {
                const githubLink = normalizeGithubLink(associate.github);
                const target = githubLink ? "_blank" : undefined;
                const rel = githubLink ? "noreferrer" : undefined;
                const tileStyle = `style${(index % tileStyleCount) + 1}`;
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
    );
}
