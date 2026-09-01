import type { ResumeData } from "./types";

export const en: ResumeData = {
  lang: "en",
  name: "Gleb Staforkin",
  title: "DevOps Engineer",
  location: "Moscow, hybrid or remote",

  summary:
    "Administered Jenkins and development environments across about fifty Kubernetes and OpenShift clusters at Sberbank, " +
    "automating access provisioning, secret rotation and certificate issuance. " +
    "I write Groovy, Bash and Python, and work with PostgreSQL and MS SQL Server.",

  contacts: [
    { label: "Telegram", value: "@lentra0", href: "https://t.me/lentra0" },
    { label: "Phone", value: "+7 900 965-08-37", href: "tel:+79009650837", pdfOnly: true },
    { label: "Email", value: "gstaforkin@yandex.ru", href: "mailto:gstaforkin@yandex.ru" },
    { label: "GitHub", value: "github.com/lentra0", href: "https://github.com/lentra0" },
  ],

  experience: [
    {
      company: "Sberbank, head office",
      role: "DevOps Engineer",
      period: "March 2026 - September 2026",
      context: [
        "Government Products and Services division",
        "Jenkins, around 50 Kubernetes and OpenShift clusters, environments from DEV through acceptance testing.",
      ],
      bullets: [
        "Closed a security risk: Jenkins authenticated into OpenShift under an employee's personal account. I created a ServiceAccount in each of 189 namespaces, issued the tokens, stored them in SecMan (a HashiCorp Vault analogue), and mapped them to clusters in a database.",
        "Automated access to DropApp clusters (the bank's internal managed Kubernetes, mK8s) from a Jira request: kubeconfig is assembled over OIDC with kubelogin, cluster secrets are kept in SecMan.",
        "Wrote imagePullSecret rotation across all namespaces. Before that, technical account passwords in Active Directory expired and the registry returned 403.",
        "Restored and maintained the shared Jenkins library: environment definitions, SecMan paths, cluster hosts, psql wrappers, log levels, helpers for Kubernetes, Kafka and certificates.",
        "Rewrote job failure notifications: HTML instead of plain text, separate handling of errors in the requests themselves, a Jira availability check before sending.",
        "Built a comparison of running images against reference hashes from Bitbucket: mismatches are written to a database and shown in Grafana.",
        "Migrated Jenkins to a new instance over the REST API: jobs, configs and credentials. Secret text had to be read out and republished, since the API returns it hidden.",
        "Handled requests from development and support teams: OpenShift permissions, Kafka topics and ACLs, cron jobs and stored procedures in PostgreSQL, secrets in SecMan, certificate issuance packaged into JKS and P12, and so on.",
      ],
    },
  ],

  skills: [
    {
      group: "Orchestration and containers",
      items: ["Kubernetes", "OpenShift", "Docker", "Helm"],
    },
    {
      group: "CI/CD and automation",
      items: ["Jenkins", "GitHub Actions", "Ansible", "Terraform"],
    },
    {
      group: "Databases",
      items: ["PostgreSQL", "MS SQL Server"],
    },
    {
      group: "Brokers and monitoring",
      items: ["Kafka", "Grafana", "Prometheus"],
    },
    {
      group: "Systems and virtualisation",
      items: ["Linux", "QEMU/KVM"],
    },
    {
      group: "Corporate tooling",
      items: ["Jira", "Confluence", "Bitbucket", "Git"],
    },
    {
      group: "Languages",
      items: ["Groovy", "Bash", "Python", "SQL", "C/C++"],
    },
    {
      group: "English",
      items: ["fluent spoken and written"],
    },
  ],

  projects: [
    {
      name: "containerized-blog-platform",
      href: "https://github.com/lentra0/containerized-blog-platform",
      description: "A blog platform deployed in containers: networking, secrets, monitoring-ready setup.",
    },
    {
      name: "messenger-docker-k8s",
      href: "https://github.com/lentra0/messenger-docker-k8s",
      description:
        "A messenger with CI/CD: service isolation, health checks, persistent storage, Docker Compose and Kubernetes.",
    },
    {
      name: "omarchy-cachyos",
      href: "https://github.com/lentra0/omarchy-cachyos",
      meta: "128 stars",
      description: "Install and configuration scripts for a CachyOS desktop with Hyprland.",
    },
  ],

  education: [
    {
      org: "Moscow Aviation Institute (National Research University)",
      degree: "BSc in Systems Analysis and Control. Fourth year, full-time.",
      period: "2023 - 2027",
    },
  ],

  ui: {
    sections: {
      summary: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      extras: "Additional",
    },
    downloadPdf: "Download PDF",
    langLabel: "Resume language",
  },
};
