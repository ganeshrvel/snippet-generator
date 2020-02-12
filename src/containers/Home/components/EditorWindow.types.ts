export interface EditorWindowProps {
  onSnippetValuesChange: (
    event:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>,
    type: EditorWindowFieldsType
  ) => void;
}

export type EditorWindowFieldsType = 'desc' | 'tabTrigger' | 'snippet';
