import { Course } from '../../types/learningPath';

export const kubernetesProfessional: Course = {
  id: 'kubernetes-professional',
  title: 'Kubernetes Advanced Operations',
  description: 'Master advanced Kubernetes operations including enterprise GitOps, service mesh, comprehensive security, and production observability',
  longDescription: 'Achieve expert-level Kubernetes operations with advanced GitOps patterns, service mesh integration, comprehensive security practices, and production-grade observability solutions.',
  level: 'Professional',
  difficulty: 'Professional',
  duration: '80 hours',
  icon: '☸️',
  iconColor: 'text-red-400',
  color: 'red',
  gradient: 'from-red-500 to-pink-500',
  category: 'DevOps',
  estimatedHours: 80,
  topics: [
    'Advanced GitOps Patterns',
    'Multi-Environment Deployments',
    'Service Mesh with Istio',
    'Enterprise Security',
    'Production Observability',
    'Advanced Helm Operations',
    'Admission Controllers',
    'Audit and Compliance',
    'Performance Optimization'
  ],
  prerequisites: [
    'Completed Kubernetes Administration',
    'Production Kubernetes experience',
    'Advanced networking knowledge',
    'Security and compliance understanding'
  ],
  tags: ['Kubernetes', 'Enterprise', 'Production', 'Expert'],
  resourceGroups: [
    {
      title: 'Advanced GitOps Patterns',
      description: 'Enterprise GitOps patterns including Kustomize, App of Apps, and promotion strategies',
      resources: [
        {
          id: 'k8s-pro-kustomize-argocd',
          title: 'Kustomize with ArgroCD',
          description: 'Advanced configuration management with Kustomize',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB05-Kustomize-with-ArgoCD',
          tags: ['Kustomize', 'ArgoCD'],
          difficulty: 'Advanced',
          duration: '4 hours',
          estimatedMinutes: 240
        },
        {
          id: 'k8s-pro-helm-argocd',
          title: 'Helm Charts with ArgoCD',
          description: 'Integrating Helm with GitOps workflows',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB06-Helm-Charts-with-ArgoCD',
          tags: ['Helm', 'ArgoCD'],
          difficulty: 'Advanced',
          duration: '4 hours',
          estimatedMinutes: 240
        },
        {
          id: 'k8s-pro-app-of-apps',
          title: 'App of Apps Pattern',
          description: 'Managing multiple applications with ArgoCD',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB07-App-of-Apps-Pattern',
          tags: ['ArgoCD', 'Patterns'],
          difficulty: 'Advanced',
          duration: '4 hours',
          estimatedMinutes: 240
        },
        {
          id: 'k8s-pro-promotion',
          title: 'GitOps Promotion Strategy',
          description: 'Implementing promotion workflows across environments',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB08-GitOps-Promotion-Strategy',
          tags: ['GitOps', 'Promotion'],
          difficulty: 'Advanced',
          duration: '4 hours',
          estimatedMinutes: 240
        }
      ]
    },
    {
      title: 'Enterprise ArgoCD',
      description: 'Advanced ArgoCD features for enterprise environments',
      resources: [
        {
          id: 'k8s-pro-notifications',
          title: 'ArgoCD Notifications and Webhooks',
          description: 'Setting up notifications and webhook integrations',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB09-ArgoCD-Notifications-and-Webhooks',
          tags: ['Notifications', 'Webhooks'],
          difficulty: 'Advanced',
          duration: '4 hours',
          estimatedMinutes: 240
        },
        {
          id: 'k8s-pro-rollbacks',
          title: 'ArgoCD Rollbacks and Revisions',
          description: 'Managing rollbacks and revision history',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB10-ArgoCD-Rollbacks-and-Revisions',
          tags: ['Rollbacks', 'Revisions'],
          difficulty: 'Advanced',
          duration: '4 hours',
          estimatedMinutes: 240
        },
        {
          id: 'k8s-pro-sync-waves',
          title: 'Sync Waves and Phases',
          description: 'Orchestrating complex deployment sequences',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB11-Sync-Waves-and-Phases',
          tags: ['Sync Waves', 'Orchestration'],
          difficulty: 'Advanced',
          duration: '4 hours',
          estimatedMinutes: 240
        },
        {
          id: 'k8s-pro-multi-env',
          title: 'Multi-Env Staging to Prod',
          description: 'Managing multi-environment deployments',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB12-Multi-Env-Staging-to-Prod',
          tags: ['Multi-Environment', 'Production'],
          difficulty: 'Advanced',
          duration: '4 hours',
          estimatedMinutes: 240
        },
        {
          id: 'k8s-pro-sso-rbac',
          title: 'SSO and RBAC for ArgoCD',
          description: 'Enterprise authentication and authorization',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB13-SSO-and-RBAC-for-ArgoCD',
          tags: ['SSO', 'RBAC'],
          difficulty: 'Advanced',
          duration: '4 hours',
          estimatedMinutes: 240
        },
        {
          id: 'k8s-pro-troubleshoot',
          title: 'Troubleshoot ArgoCD Apps',
          description: 'Advanced troubleshooting techniques',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB14-Troubleshoot-ArgoCD-Apps',
          tags: ['Troubleshooting', 'Debugging'],
          difficulty: 'Advanced',
          duration: '4 hours',
          estimatedMinutes: 240
        },
        {
          id: 'k8s-pro-sealed-secrets',
          title: 'ArgoCD and SealedSecrets',
          description: 'Secure secrets management in GitOps',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/GitOps-ArgoCD/LAB15-ArgoCD-and-SealedSecrets',
          tags: ['SealedSecrets', 'Security'],
          difficulty: 'Advanced',
          duration: '4 hours',
          estimatedMinutes: 240
        }
      ]
    },
    {
      title: 'Production Helm Operations',
      description: 'Advanced Helm operations for production environments',
      resources: [
        {
          id: 'k8s-pro-helm-versioning',
          title: 'Versioning and Chart Repository',
          description: 'Managing Helm chart versions and repositories',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Helm/LAB09-Versioning-and-Chart-Repository',
          tags: ['Helm', 'Versioning'],
          difficulty: 'Advanced',
          duration: '4 hours',
          estimatedMinutes: 240
        },
        {
          id: 'k8s-pro-helm-secrets',
          title: 'Helm Secrets and SOPS',
          description: 'Encrypted secrets management with Helm',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Helm/LAB10-Helm-Secrets-and-SOPS',
          tags: ['Helm', 'Secrets'],
          difficulty: 'Advanced',
          duration: '4 hours',
          estimatedMinutes: 240
        },
        {
          id: 'k8s-pro-helm-gitops',
          title: 'Helm GitOps with ArgoCD',
          description: 'Integrating Helm with GitOps workflows',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Helm/LAB13-Helm-GitOps-with-ArgoCD',
          tags: ['Helm', 'GitOps'],
          difficulty: 'Advanced',
          duration: '4 hours',
          estimatedMinutes: 240
        }
      ]
    },
    {
      title: 'Service Mesh & Advanced Networking',
      description: 'Service mesh implementation and advanced networking patterns',
      resources: [
        {
          id: 'k8s-pro-istio',
          title: 'Service Mesh Intro with Istio',
          description: 'Implementing service mesh architecture',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Networking/LAB09-Service-Mesh-Intro-with-Istio',
          tags: ['Service Mesh', 'Istio'],
          difficulty: 'Advanced',
          duration: '4 hours',
          estimatedMinutes: 240
        },
        {
          id: 'k8s-pro-ingress-auth',
          title: 'Ingress Authentication Mechanisms',
          description: 'Advanced authentication at the ingress layer',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Networking/LAB12-Ingress-Authentication-Mechanisms',
          tags: ['Ingress', 'Authentication'],
          difficulty: 'Advanced',
          duration: '4 hours',
          estimatedMinutes: 240
        }
      ]
    },
    {
      title: 'Production Observability',
      description: 'Comprehensive observability including metrics, logging, and distributed tracing',
      resources: [
        {
          id: 'k8s-pro-alerting',
          title: 'Alerting Rules in Prometheus',
          description: 'Setting up comprehensive alerting strategies',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Observability/LAB05-Alerting-Rules-in-Prometheus',
          tags: ['Alerting', 'Prometheus'],
          difficulty: 'Advanced',
          duration: '4 hours',
          estimatedMinutes: 240
        },
        {
          id: 'k8s-pro-jaeger',
          title: 'Trace Requests with Jaeger',
          description: 'Distributed tracing with Jaeger',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Observability/LAB07-Trace-Requests-with-Jaeger',
          tags: ['Tracing', 'Jaeger'],
          difficulty: 'Advanced',
          duration: '4 hours',
          estimatedMinutes: 240
        },
        {
          id: 'k8s-pro-tempo',
          title: 'Tracing with Tempo and Otel',
          description: 'Modern tracing with Tempo and OpenTelemetry',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Observability/LAB11-Tracing-with-Tempo-and-Otel',
          tags: ['Tracing', 'Tempo', 'OpenTelemetry'],
          difficulty: 'Advanced',
          duration: '4 hours',
          estimatedMinutes: 240
        },
        {
          id: 'k8s-pro-full-stack',
          title: 'Full Observability Stack',
          description: 'Implementing comprehensive observability',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Observability/LAB12-Full-Observability-Stack',
          tags: ['Observability', 'Full Stack'],
          difficulty: 'Advanced',
          duration: '4 hours',
          estimatedMinutes: 240
        }
      ]
    },
    {
      title: 'Enterprise Security & Compliance',
      description: 'Advanced security practices, compliance, and policy enforcement',
      resources: [
        {
          id: 'k8s-pro-gatekeeper',
          title: 'Restrict API Access with OPA Gatekeeper',
          description: 'Policy enforcement with OPA Gatekeeper',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Security/LAB02-Restrict-API-Access-with-OPA-Gatekeeper',
          tags: ['OPA', 'Gatekeeper'],
          difficulty: 'Advanced',
          duration: '4 hours',
          estimatedMinutes: 240
        },
        {
          id: 'k8s-pro-network-isolation',
          title: 'NetworkPolicies for Isolation',
          description: 'Advanced network isolation strategies',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Security/LAB04-NetworkPolicies-for-Isolation',
          tags: ['Network Policies', 'Isolation'],
          difficulty: 'Advanced',
          duration: '4 hours',
          estimatedMinutes: 240
        },
        {
          id: 'k8s-pro-seccomp',
          title: 'Seccomp and AppArmor Integration',
          description: 'Advanced security profiles and restrictions',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Security/LAB05-Seccomp-and-AppArmor-Integration',
          tags: ['Seccomp', 'AppArmor'],
          difficulty: 'Advanced',
          duration: '4 hours',
          estimatedMinutes: 240
        },
        {
          id: 'k8s-pro-kubebench',
          title: 'KubeBench and Benchmarks',
          description: 'Security benchmarking and compliance',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Security/LAB08-KubeBench-and-Benchmarks',
          tags: ['KubeBench', 'Compliance'],
          difficulty: 'Advanced',
          duration: '4 hours',
          estimatedMinutes: 240
        },
        {
          id: 'k8s-pro-audit-logs',
          title: 'AuditLogs and API Server',
          description: 'Comprehensive audit logging and monitoring',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Security/LAB10-AuditLogs-and-API-Server',
          tags: ['Audit Logs', 'API Server'],
          difficulty: 'Advanced',
          duration: '4 hours',
          estimatedMinutes: 240
        },
        {
          id: 'k8s-pro-admission-controllers',
          title: 'Admission Controllers and Gatekeeper',
          description: 'Custom admission controllers and policy enforcement',
          type: 'lab',
          url: 'https://github.com/study-ORCATech-cloud/kubernetes-labs/tree/main/Security/LAB11-Admission-Controllers-and-Gatekeeper',
          tags: ['Admission Controllers', 'Policies'],
          difficulty: 'Advanced',
          duration: '4 hours',
          estimatedMinutes: 240
        }
      ]
    }
  ],
  lastUpdated: new Date('2024-01-20')
};
