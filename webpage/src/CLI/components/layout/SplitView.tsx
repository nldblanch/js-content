import { Group, Panel, Separator } from 'react-resizable-panels';

import Terminal from '../terminal/Terminal';
import BrowserFrame from '../browser/BrowserFrame';
import PageRouter from '../browser/GitHub/PageRouter';

const panelStyles = "bg-slate-700 p-4 rounded-md shadow-md";

interface SplitViewProps {
  className?: string;
}

/**
 * For now we accept child props for the sake of testing, but eventually this component will be responsible for rendering the browser and terminal windows itself.
 * @returns -
 */
function SplitView({ className }: SplitViewProps) {

  return (
    <>
      <Group className={`${className} w-full h-full flex`}>
        {/* In TSX, we need to wrap the template literal in {} to say 'hey, switch to javascript mode!' */}
        <Panel minSize="40%" className={`${panelStyles}`}>
          {/* Browser Window Goes Here */}
          <BrowserFrame>
            <PageRouter />
          </BrowserFrame>
        </Panel>

        <Separator
          className="
          w-2
          outline-none
          rounded-sm
          mx-1.5
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
