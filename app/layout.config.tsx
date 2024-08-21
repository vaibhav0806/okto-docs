import { type DocsLayoutProps } from 'fumadocs-ui/layout';
import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import { pageTree } from '@/app/source';

// shared configuration
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: 'Okto SDK',
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
  ],
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
  nav: {
    ...baseOptions.nav,
    transparentMode: 'none',
    children: undefined,
  },
  sidebar: {
    banner: (
      <RootToggle
      options={[
        {
          title: 'React',
          description: 'Okto React SDK',
          url: '/docs/react-sdk/overview',
          icon: ''
        },
        {
          title: 'React Native',
          description: 'Okto React Native SDK',
          url: '/docs/react-native-sdk/overview',
          icon: ''
        },
        {
          title: 'Flutter',
          description: 'Okto Flutter SDK',
          url: '/docs/flutter-sdk/getting-started/overview',
          icon: ''
        },
      ]}
    />
    ),
  },
};
