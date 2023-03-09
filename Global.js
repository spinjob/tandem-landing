import { Global } from '@mantine/core';
import vulfSansMedium from './public/fonts/Vulf Sans/Vulf_Sans-Medium.woff2';
import vulfSansRegular from './public/fonts/Vulf Sans/Vulf_Sans-Regular.woff2';
import visueltRegular from './public/fonts/visuelt/visuelt-regular-pro.woff2';
import visueltMedium from './public/fonts/visuelt/visuelt-medium-pro.woff2';

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Vulf Sans',
            src: vulfSansMedium,
            fontStyle: 'normal',
            fontWeight: 500
          },
          '@font-face': {
            fontFamily: 'Vulf Sans',
            src: `url('${vulfSansRegular}') format("woff2")`,
            fontStyle: 'normal',
            fontWeight: 400
          },
          '@font-face': {
            fontFamily: 'Visuelt',
            src: `url('${visueltRegular}') format("woff2")`,
            fontWeight: 400,
            fontStyle: 'normal'
          },
          '@font-face': {
            fontFamily: 'Visuelt',
            src: `url('${visueltMedium}') format("woff2")`,
            fontWeight: 500,
            fontStyle: 'normal'
          },
        }
      ]}
    />
  );
}