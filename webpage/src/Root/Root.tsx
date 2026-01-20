import { associates } from "../data/associates";
import { commitStats } from "../data/commitStats";
import { AssociatesGrid } from "./components/AssociatesGrid";
import { AppFooter } from "./components/AppFooter";
import { AppHeader } from "./components/AppHeader";
import { ContributorsSection } from "./components/ContributorsSection";
import { ParticlesOverlay } from "./components/ParticlesOverlay";
import { useParticles } from "./hooks/useParticles";
import { usePreloadClass } from "./hooks/usePreloadClass";
import { useTopContributors } from "./hooks/useTopContributors";
import { NavBar } from "./components/NavBar";
const Root = () => {
    const baseUrl = import.meta.env.BASE_URL;

    usePreloadClass();
    const particles = useParticles();
    const { contributors, totalContributions } = useTopContributors(commitStats);

    return (
        <>
            <ParticlesOverlay particles={particles} />

            <div id="wrapper">
                <NavBar />
                <AppHeader baseUrl={baseUrl} />

                <div id="main">
                    <div className="inner">
                        <header>
                            <h1>🎓 Academy Associates</h1>
                            <p>
                                Welcome to our community of learners! Here is a list of everyone who has contributed to this{" "}
                                <strong>&nbsp;js-content&nbsp;</strong> repository.
                            </p>
                        </header>

                        <ContributorsSection contributors={contributors} totalContributions={totalContributions} />
                        <AssociatesGrid associates={associates} baseUrl={baseUrl} />
                    </div>
                </div>

                <AppFooter pullRequestGuideUrl="https://github.com/nldblanch/js-content/tree/main/docs" />
            </div>
        </>
    );
};

export default Root;