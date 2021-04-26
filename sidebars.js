module.exports = {
  serverSidebar: [
    {
      type: 'doc',
      label: 'Temporal Server', 
      id: 'server/introduction',
    },
    'server/quick-install',
    'server/production-deployment',
    'server-architecture',
    'server/versions-and-dependencies',
    'server/namespaces',
    'server/workflow-search',
    'server/elasticsearch-setup',
    'server/options',
    'server/security',
    'server/configuration',
    'server/archive-data',
    'server/event-types',
    {
      type: 'category',
      label: 'Quick links',
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'Concepts',
          href: '/docs/concepts/introduction',
        },
        {
          type: 'link',
          label: 'SDKs',
          href: '/application-development',
        },
        {
          type: 'link',
          label: 'System tools',
          href: '/docs/system-tools/introduction',
        },
        {
          type: 'link',
          label: 'Additional resources',
          href: '/docs/external-resources',
        },
      ],
    },
  ],
  toolingSidebar: [
    {
      type: 'doc',
      label: 'Temporal System Tools', 
      id: 'system-tools/introduction',
    },
    'system-tools/tctl',
    'system-tools/web-ui',
    {
      type: 'category',
      label: 'Quick links',
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'Concepts',
          href: '/docs/concepts/introduction',
        },
        {
          type: 'link',
          label: 'Server',
          href: '/docs/server/introduction',
        },
        {
          type: 'link',
          label: 'SDKs',
          href: '/application-development',
        },
        {
          type: 'link',
          label: 'Additional resources',
          href: '/docs/external-resources',
        },
      ],
    },
  ],
  goSidebar: [
    {
      type: 'doc',
      label: 'Go SDK', 
      id: 'go/introduction',
    },
    {
      type: 'link',
      label: 'Reference',
      href: 'https://pkg.go.dev/go.temporal.io/sdk',
    },
    {
      type: 'category',
      label: 'Tutorials',
      collapsed: false,
      items: ['go/tutorial-prerequisites', 'go/run-your-first-app-tutorial', 'go/hello-world-tutorial', 'go/sdk-video-tutorial'],
    },
    {
      type: 'category',
      label: 'Basic concepts',
      collapsed: false,
      items: ['go/workflows', 'go/activities', 'go/workers', 'go/signals', 'go/queries'],
    },
    'go/sync-vs-async-start',
    'go/create-workflows',
    'go/child-workflows',
    'go/retries',
    'go/error-handling',
    'go/selectors',
    'go/continue-as-new',
    'go/side-effect',
    'go/testing',
    'go/versioning',
    'go/sessions',
    'go/distributed-cron',
    'go/tracing',
    'go/search-apis',
    {
      type: 'category',
      label: 'Quick links',
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'Concepts',
          href: '/docs/concepts/introduction',
        },
        {
          type: 'link',
          label: 'Server',
          href: '/docs/server/introduction',
        },
        {
          type: 'link',
          label: 'SDKs',
          href: '/application-development',
        },
        {
          type: 'link',
          label: 'System tools',
          href: '/docs/system-tools/introduction',
        },
        {
          type: 'link',
          label: 'Additional resources',
          href: '/docs/external-resources',
        },
      ],
    },
  ],
  javaSidebar: [
    {
      type: 'doc',
      label: 'Java SDK', 
      id: 'java/introduction',
    },
    {
      type: 'link',
      label: 'Reference',
      href: 'https://www.javadoc.io/doc/io.temporal/temporal-sdk/latest/index.html',
    },
    {
      type: 'category',
      label: 'Tutorials',
      collapsed: false,
      items: ['java/tutorial-prerequisites', 'java/run-your-first-app-tutorial', 'java/hello-world-tutorial'],
    },
    {
      type: 'category',
      label: 'Basic concepts',
      collapsed: false,
      items: ['java/activities'],
    },
    'java/quick-start',
    'java/workflow-interface',
    'java/implementing-workflows',
    'java/starting-workflow-executions',
    'java/versioning',
    'java/side-effect',
    'java/testing-and-debugging',
    'java/distributed-cron',
    {
      type: 'category',
      label: 'Quick links',
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'Concepts',
          href: '/docs/concepts/introduction',
        },
        {
          type: 'link',
          label: 'Server',
          href: '/docs/server/introduction',
        },
        {
          type: 'link',
          label: 'SDKs',
          href: '/application-development',
        },
        {
          type: 'link',
          label: 'System tools',
          href: '/docs/system-tools/introduction',
        },
        {
          type: 'link',
          label: 'Additional resources',
          href: '/docs/external-resources',
        },
      ],
    },
  ],
  phpSidebar: [
    {
      type: 'doc',
      label: 'PHP SDK', 
      id: 'php/introduction',
    },
    {
      type: 'category',
      label: 'Basic concepts',
      collapsed: false,
      items: ['php/workers', 'php/signals', 'php/queries'],
    },
    'php/workflow-interface',
    'php/implementing-workflows',
    'php/activity-interface',
    'php/implementing-activities',
    'php/sync-vs-async-start',
    'php/activity-async-completion',
    'php/child-workflows',
    'php/retries',
    'php/error-handling',
    'php/continue-as-new',
    'php/side-effect',
    'php/versioning',
    'php/distributed-cron',
    {
      type: 'category',
      label: 'Quick links',
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'Concepts',
          href: '/docs/concepts/introduction',
        },
        {
          type: 'link',
          label: 'Server',
          href: '/docs/server/introduction',
        },
        {
          type: 'link',
          label: 'SDKs',
          href: '/application-development',
        },
        {
          type: 'link',
          label: 'System tools',
          href: '/docs/system-tools/introduction',
        },
        {
          type: 'link',
          label: 'Additional resources',
          href: '/docs/external-resources',
        },
      ],
    },
  ],
  nodejsSidebar: [
    {
      type: 'doc',
      label: 'Node SDK', 
      id: 'node/introduction',
    },
    {
      type: 'link',
      label: 'Reference',
      href: 'https://nodejs.temporal.io',
    },
    'node/getting-started',
    {
      type: 'category',
      label: 'Tutorials',
      collapsed: false,
      items: ['node/hello-world'],
    },
    { type: 'doc', id: 'node/package-initializer', label: 'Package initializer' },
    'node/logging',
    'node/determinism',
    'node/versioning',
    'node/workflow-scopes-and-cancellation',
  ],
  coreConcepts: [
    {
      type: 'category',
      label: 'Core concepts',
      collapsed: false,
      items: [
        'concepts/introduction',
        'concepts/workflows',
        'concepts/activities',
        'concepts/workers',
        'concepts/task-queues',
        'concepts/signals',
        'concepts/queries',
      ],
    },
    {
      type: 'category',
      label: 'Additional resources',
      collapsed: false,
      items: ['external-resources', 'cadence-to-temporal', 'glossary'],
    },
    {
      type: 'category',
      label: 'Quick links',
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'Server',
          href: '/docs/server/introduction',
        },
        {
          type: 'link',
          label: 'SDKs',
          href: '/application-development',
        },
        {
          type: 'link',
          label: 'System tools',
          href: '/docs/system-tools/introduction',
        },
      ],
    },
  ],
};
