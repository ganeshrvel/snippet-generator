/* eslint-disable no-case-declarations */

import { html } from 'common-tags';

export const getSnippetBody = (
  appType: string,
  desc: string,
  tabTrigger: string,
  snippet: string
) => {
  let snippetBody = '';

  switch (appType) {
    case 'vscode':
      const cleanedSnippet = snippet
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .split('\n');

      const _snippetVscode = cleanedSnippet.map((line, index) => {
        return index === cleanedSnippet.length - 1 ? `"${line}"` : `"${line}",`;
      });

      // prettier-ignore
      snippetBody = html`
        "${desc}": {
          "prefix": "${tabTrigger}",
          "body": [
            ${_snippetVscode.join('\n')}
          ],
          "description": "${desc}"
        }
      `;
      break;

    case 'sublime':
      const regex = /(\$)([a-z(]+)([^$])/gi;
      const _snippetSublime = snippet.replace(regex, '\\$1$2$3');

      // prettier-ignore
      snippetBody = html`
        <snippet>
          <content><![CDATA[
        ${_snippetSublime}
        ]]></content>
          <tabTrigger>${tabTrigger}</tabTrigger>
          <description>${desc}</description>
          <!-- Optional: Set a scope to limit where the snippet will trigger -->
          <!-- <scope >source.python</scope > -->
        </snippet>
      `;
      break;

    case 'atom':
      // prettier-ignore
      snippetBody = html`
        '${desc}':
          'prefix': '${tabTrigger}'
          'body': """
            ${snippet}
          """
      `;
      break;

    default:
      break;
  }

  return snippetBody;
};
