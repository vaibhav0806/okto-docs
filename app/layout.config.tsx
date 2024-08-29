import { type DocsLayoutProps } from 'fumadocs-ui/layout';
import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';
import Image from 'next/image';
import Logo from '@/public/logo/okto-icon.png';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import { pageTree } from '@/app/source';

// shared configuration
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: (
      <>
        <Image
          alt="Okto"
          src={Logo}
          sizes="100px"
          className="h-7 w-7"
          aria-label="Okto"
        />

        {/* <FumadocsIcon
          className="size-4 [.uwu_&]:hidden [header_&]:size-5"
          fill="currentColor"
        /> */}
        <span className="font-medium text-lg">
          Okto SDK
        </span>
      </>
    ),
    transparentMode: 'top',
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
            url: '/docs/react-sdk/introduction-to-okto/okto-universe',
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
