import { useState, useEffect } from "react";
import { hasRemoteRepo, createRepo } from "../../../lib/repo";
import { useRepoStore } from "../../../store/useRepoStore";
import { useAppStore } from "../../../store/useAppStore";

// Import Pages
import CreateRepoForm from "./CreateRepoForm";
import RepoIndex from "./RepoIndex";
import GithubRepo from "./RepoView";
import EmptyState from "./EmptyRepo";

type ViewState = 'EMPTY' | 'CREATE_FORM' | 'REPO_INDEX' | 'REPO_VIEW';

const BASE_URL = 'https://github.com';
const USERNAME = 'user';

function PageRouter() {
  const [view, setView] = useState<ViewState>('EMPTY');
  const setBrowserUrl = useAppStore(state => state.setBrowserUrl);

  // Helper to set view AND url in store
  const navigate = (newView: ViewState, url: string) => {
    setView(newView);
    setBrowserUrl(url);
  };

  useEffect(() => {
    hasRemoteRepo().then(exists => {
      if (exists) navigate('REPO_INDEX', `${BASE_URL}/${USERNAME}`);
    });
  }, []);

  const handleCreateRepo = async (name: string, addReadme: boolean) => {
    await createRepo(name, addReadme);
    navigate('REPO_VIEW', `${BASE_URL}/${USERNAME}/${name}`);
  };

  const handleSelectRepo = (repoDir: string) => {
    const repoName = repoDir.split('/').pop()?.replace('.git', '') ?? '';
    useRepoStore.getState().setRepoDir(repoDir);
    navigate('REPO_VIEW', `${BASE_URL}/${USERNAME}/${repoName}`);
  };

  return (
    <>
      {(() => {
        switch (view) {
          case 'EMPTY':
            return <EmptyState openForm={() => navigate('CREATE_FORM', `${BASE_URL}/new`)} />;
          case 'CREATE_FORM':
            return <CreateRepoForm onSubmit={handleCreateRepo} />;
          case 'REPO_INDEX':
            return <RepoIndex onSelectRepo={handleSelectRepo} />;
          case 'REPO_VIEW':
            return <GithubRepo />;
          default:
            return null;
        }
      })()}
    </>
  );
}

export default PageRouter;
