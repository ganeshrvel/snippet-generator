export interface EditorWindowProps {
  onSnippetValuesChange: (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    type: 'desc' | 'tabTrigger' | 'snippet'
  ) => void;
}
