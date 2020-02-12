export interface SnippetViewerProps {
  desc: string;
  tabTrigger: string;
  snippet: string;
}

export type SnippetViewerAppType = 'vscode' | 'sublime' | 'atom';
