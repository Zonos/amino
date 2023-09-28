import { getColorVariables } from 'svgReact/build-utils/getColorVariables';

test.only('BookmarkAdd', () => {
  const fileContent = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#C5C6CA" d="M7.75 3A2.75 2.75 0 0 0 5 5.75v14.278a1 1 0 0 0 1.562.827l4.735-3.22a1.25 1.25 0 0 1 1.406 0l4.735 3.22A1 1 0 0 0 19 20.028V5.75A2.75 2.75 0 0 0 16.25 3h-8.5Z"/><path fill="#4D505A" fill-rule="evenodd" d="M12 6.5a.75.75 0 0 1 .75.75v2h2a.75.75 0 0 1 0 1.5h-2v2a.75.75 0 0 1-1.5 0v-2h-2a.75.75 0 0 1 0-1.5h2v-2A.75.75 0 0 1 12 6.5Z" clip-rule="evenodd"/></svg>
    `;
  const result = getColorVariables({ fileContent, isDuotone: true });
  expect(result).toMatchInlineSnapshot(`
    "<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill={secondaryColor ? \`\${theme[secondaryColor]}\` : \`\${theme.gray400}\`} data-is-secondary-color="true"  d="M7.75 3A2.75 2.75 0 0 0 5 5.75v14.278a1 1 0 0 0 1.562.827l4.735-3.22a1.25 1.25 0 0 1 1.406 0l4.735 3.22A1 1 0 0 0 19 20.028V5.75A2.75 2.75 0 0 0 16.25 3h-8.5Z"/><path fill="currentColor" fill-rule="evenodd" d="M12 6.5a.75.75 0 0 1 .75.75v2h2a.75.75 0 0 1 0 1.5h-2v2a.75.75 0 0 1-1.5 0v-2h-2a.75.75 0 0 1 0-1.5h2v-2A.75.75 0 0 1 12 6.5Z" clip-rule="evenodd"/></svg>
        "
  `);
});

test('Book', () => {
  const fileContent = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 6.604v9.661a2 2 0 0 0 2.22 1.988l.826-.091a10.002 10.002 0 0 1 2.893.1L12 19V5l-3.513-.639a10 10 0 0 0-3.958.077l-.963.214A2 2 0 0 0 2 6.604Z" fill="#3D3D42"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="m9.58 19.48 2.42.88 2.42-.88a9.015 9.015 0 0 1 6.16 0A1.803 1.803 0 0 0 23 17.785V5.76a2 2 0 0 0-1.317-1.88l-.766-.278a10 10 0 0 0-6.834 0L12 4.36l-2.083-.757a10 10 0 0 0-6.834 0l-.766.279A2 2 0 0 0 1 5.76v12.024a1.803 1.803 0 0 0 2.42 1.695 9.015 9.015 0 0 1 6.16 0ZM11 6.124l-1.766-.642a8 8 0 0 0-5.468 0l-.108.039A1 1 0 0 0 3 6.46v9.657c0 .683.672 1.166 1.342 1.032a11.015 11.015 0 0 1 5.922.45l.736.268V6.124Z" fill="#CACACE"/>
    </svg>`;
  const result = getColorVariables({ fileContent, isDuotone: false });
  expect(result).toMatchInlineSnapshot(`
    "<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 6.604v9.661a2 2 0 0 0 2.22 1.988l.826-.091a10.002 10.002 0 0 1 2.893.1L12 19V5l-3.513-.639a10 10 0 0 0-3.958.077l-.963.214A2 2 0 0 0 2 6.604Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="m9.58 19.48 2.42.88 2.42-.88a9.015 9.015 0 0 1 6.16 0A1.803 1.803 0 0 0 23 17.785V5.76a2 2 0 0 0-1.317-1.88l-.766-.278a10 10 0 0 0-6.834 0L12 4.36l-2.083-.757a10 10 0 0 0-6.834 0l-.766.279A2 2 0 0 0 1 5.76v12.024a1.803 1.803 0 0 0 2.42 1.695 9.015 9.015 0 0 1 6.16 0ZM11 6.124l-1.766-.642a8 8 0 0 0-5.468 0l-.108.039A1 1 0 0 0 3 6.46v9.657c0 .683.672 1.166 1.342 1.032a11.015 11.015 0 0 1 5.922.45l.736.268V6.124Z" fill={secondaryColor ? \`\${theme[secondaryColor]}\` : '#fff'} data-is-secondary-color="true" />
        </svg>"
  `);
});
