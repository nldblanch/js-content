type Props = {
    pullRequestGuideUrl?: string;
};

export function AppFooter({ pullRequestGuideUrl }: Props) {
    return (
        <footer id="footer">
            <div className="inner">
                <section>
                    <h2>Want to add your name?</h2>
                    <a href={pullRequestGuideUrl} target="_blank" rel="noreferrer">
                        <button type="button">Pull Request Guide</button>
                    </a>
                </section>
            </div>
        </footer>
    );
}
