import { Group, Panel, Separator } from "react-resizable-panels";

import Terminal from "@CLI/components/terminal/Terminal";
import BrowserFrame from "@CLI/components/browser/BrowserFrame";
import { BrowserTab } from "@CLI/components/browser/BrowserFrame";
import Challenges from "@CLI/components/browser/Challenges";
import PageRouter from "@CLI/components/browser/GitHub/PageRouter";
import Glossary from "@CLI/components/browser/Glossary";

const panelStyles = "bg-slate-800 rounded-md shadow-md overflow-hidden";

interface SplitViewProps {
  className?: string;
}

function SplitView({ className }: SplitViewProps) {
  return (
    <>
      <Group className={`${className} w-full h-full flex`}>
        {/* In TSX, we need to wrap the template literal in {} to say 'hey, switch to javascript mode!' */}
        <Panel minSize="40%" className={`${panelStyles}`}>
          {/* Browser Window Goes Here */}
          <BrowserFrame>
            <BrowserTab tabTitle="Intro | Challenges">
              <Challenges />
            </BrowserTab>
            <BrowserTab tabTitle="GitHub">
              <PageRouter />
            </BrowserTab>
            <BrowserTab tabTitle="Glossary">
              <Glossary />
            </BrowserTab>
          </BrowserFrame>
        </Panel>

        <Separator
          className="
          w-2
          outline-none
          rounded-sm
          mx-1
          bg-slate-600
          data-[separator='hover']:bg-slate-500
          data-[separator='active']:bg-slate-400
          "
        />

        <Panel className={`${panelStyles}`} minSize="20%">
          <Terminal />
        </Panel>
      </Group>
    </>
  );
}

export default SplitView;
