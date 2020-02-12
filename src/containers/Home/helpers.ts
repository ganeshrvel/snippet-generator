export const getSnippetBody = (
  appType: string,
  desc: string,
  tabTrigger: string,
  snippet: string
) => {
  let snippetBody = '';

  switch (appType) {
    case 'vscode':
      snippetBody = `"${desc}": {
  "prefix": "${tabTrigger}",
  "body": [
    "${snippet}"
  ],
  "description": "${desc}"
}`;
      break;

    case 'sublime':
      snippetBody = `<snippet>
  <content><![CDATA[
${snippet}
]]></content>
  <tabTrigger>${tabTrigger}</tabTrigger>
  <description>${desc}</description>
  <!-- Optional: Set a scope to limit where the snippet will trigger -->
  <!-- <scope >source.python</scope > -->
</snippet>`;
      break;

    case 'atom':
      snippetBody = `'${desc}':
'prefix': '${tabTrigger}'
'body': """
  ${snippet}
"""`;
      break;

    default:
      break;
  }

  return snippetBody;
};
