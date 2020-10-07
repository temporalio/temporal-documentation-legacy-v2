module.exports = {
  docs: [
    'get-started',
    {
      type: 'category',
      collapsed: true,
      label: 'Concepts',
      items: [
        'overview',
        'workflows',
        'activities',
        'events',
        'queries',
        'task-queues',
        'namespaces',
        'system-architecture',
        'glossary',
      ],
    },
    {
      type: 'category',
      collapsed: true,
      label: 'Use cases',
      items: [
        'use-cases-orchestration',
        'use-cases-distributed-transactions',
        'use-cases-provisioning',
        'use-cases-monitoring',
        'use-cases-pipelines',
        'use-cases-long-running',
        'use-cases-dsl',
        'use-cases-actors',
      ],
    },
    {
      type: 'category',
      collapsed: true,
      label: 'How to',
      items: [
        'install-temporal-server',
        'configure-temporal-server',
        'filter-workflows',
        'tctl',
        'archive-data',
      ],
    },
    {
      type: 'category',
      collapsed: true,
      label: 'Go SDK',
      items: [
        'go-quick-start',
        'go-sdk-video-tutorial',
        'go-workers',
        'go-create-workflows',
        'go-activities',
        'go-execute-activity',
        'go-child-workflows',
        'go-retries',
        'go-error-handling',
        'go-signals',
        'go-continue-as-new',
        'go-side-effect',
        'go-queries',
        'go-activity-async-completion',
        'go-workflow-testing',
        'go-versioning',
        'go-sessions',
        'go-distributed-cron',
        'go-tracing',
      ],
    },
    {
      type: 'category',
      collapsed: true,
      label: 'Java SDK',
      items: [
        'java-sdk-tutorial-prerequisites',
        'java-run-your-first-app',
        'java-quick-start',
        'java-workflow-interface',
        'java-implementing-workflows',
        'java-starting-workflow-executions',
        'java-activity-interface',
        'java-implementing-activities',
        'java-versioning',
        'java-distributed-cron',
      ],
    },
    'other-sdks',
  ],
};
