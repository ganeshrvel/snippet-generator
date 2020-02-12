export interface EditorWindowProps {
  onSnippetValuesChange: (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    type: EditorWindowFieldsType
  ) => void;
}

export type EditorWindowFieldsType = 'desc' | 'tabTrigger' | 'snippet';
