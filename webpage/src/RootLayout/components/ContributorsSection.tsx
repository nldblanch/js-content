import type { Contributor } from "../hooks/useTopContributors";

type Props = {
    contributors: Contributor[];
    totalContributions: number;
};

export function ContributorsSection({ contributors, totalContributions }: Props) {
    if (contributors.length === 0) return null;

    return (
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
                        {contributors.map((contributor) => {
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
    );
}
