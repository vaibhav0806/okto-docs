import { type DocsLayoutProps } from 'fumadocs-ui/layout';
import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import { pageTree } from '@/app/source';
import { FaReact, FaShield } from "react-icons/fa6";
import { TbApi, TbBrandReactNative } from "react-icons/tb";
import { SiFlutter } from "react-icons/si";
import { IoMdDocument } from "react-icons/io";

export const baseOptions: HomeLayoutProps = {
  githubUrl: 'https://github.com/fuma-nama/fumadocs',
  nav: {
    transparentMode: 'top',
  },
  links: [
    {
      text: 'Blog',
      url: '/blog',
      active: 'nested-url',
    },
    {
      text: 'Showcase',
      url: '/showcase',
    },
    {
      text: 'Sponsors',
      url: '/sponsors',
    },
  ],
};

export const docsOptions: DocsLayoutProps = {
  tree: pageTree,
  nav: {
    transparentMode: 'top',
  },
  sidebar: {
    banner: (
      <RootToggle
        // options={modes.map((mode) => ({
        //   url: `/docs/${mode.param}`,
        //   icon: (
        //     <mode.icon
        //       className="size-9 shrink-0 rounded-md bg-gradient-to-t from-fd-background/80 p-1.5"
        //       style={{
        //         backgroundColor: `hsl(var(--${mode.param}-color)/.3)`,
        //         color: `hsl(var(--${mode.param}-color))`,
        //       }}
        //     />
        //   ),
        //   title: mode.name,
        //   description: mode.description,
        // }))},
        options={[
          {
            url: '/docs/introduction-to-okto/okto-universe',
            title: 'Introduction',
            icon: <IoMdDocument/>,
            description: '',
          },
          {
            url: 'https://forms.gle/Q2oAWZ979cgxwjzZ6',
            title: 'Dashboard',
            icon: <FaShield/>,
            description: '',
          },
          {
            url: '/docs/react-sdk/getting-started/overview-okto-react',
            title: 'React',
            icon: <FaReact/>,
            description: '',
          },
          {
            url: 'https://sdk-docs.okto.tech/sdk-reference/react-native/setTheme',
            title: 'React Native',
            icon: <TbBrandReactNative/>,
            description: '',
          },
          {
            url: 'https://sdk-docs.okto.tech/sdk-reference/flutter/setup',
            title: 'Flutter',
            icon: <SiFlutter/>,
            description: '',
          },
          {
            url: 'https://sdk-docs.okto.tech/api-reference/client/authenticate',
            title: 'API Reference',
            icon: <TbApi/>,
            description: '',
          },
        ]}
      />
    ),
  },
};
