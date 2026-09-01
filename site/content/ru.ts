import type { ResumeData } from "./types";

export const ru: ResumeData = {
  lang: "ru",
  name: "Глеб Стафоркин",
  title: "DevOps-инженер",
  location: "Москва, гибрид или удалённо",

  summary:
    "Администрировал Jenkins и контуры разработки на полусотне кластеров Kubernetes и OpenShift в Сбербанке, " +
    "автоматизировал выдачу доступов, ротацию секретов и выпуск сертификатов. " +
    "Пишу на Groovy, Bash и Python, работаю с PostgreSQL и MS SQL Server.",

  contacts: [
    { label: "Telegram", value: "@lentra0", href: "https://t.me/lentra0" },
    { label: "Телефон", value: "+7 900 965-08-37", href: "tel:+79009650837", pdfOnly: true },
    { label: "Email", value: "gstaforkin@yandex.ru", href: "mailto:gstaforkin@yandex.ru" },
    { label: "GitHub", value: "github.com/lentra0", href: "https://github.com/lentra0" },
  ],

  experience: [
    {
      company: "ПАО Сбербанк, центральный аппарат",
      role: "DevOps-инженер",
      period: "март 2026 - сентябрь 2026",
      context: [
        "Блок «Государственные продукты и сервисы»",
        "Jenkins, около 50 кластеров Kubernetes и OpenShift, контуры от DEV до ПСИ.",
      ],
      bullets: [
        "Устранил риск информационной безопасности: Jenkins авторизовался в OpenShift под личной учётной записью сотрудника. Завёл ServiceAccount в каждом из 189 неймспейсов, выпустил токены, сложил в SecMan (аналог HashiCorp Vault), связал с кластерами в БД.",
        "Автоматизировал выдачу доступа к кластерам DropApp (внутренний managed Kubernetes, mK8s) по заявке в Jira: kubeconfig собирается через OIDC и kubelogin, секреты кластеров лежат в SecMan.",
        "Написал ротацию imagePullSecret по всем неймспейсам. До этого пароли технических учётных записей в AD протухали и registry отдавал 403.",
        "Восстановил и вёл общую Jenkins-библиотеку: описания контуров, пути в SecMan, хосты кластеров, обёртки над psql, уровни логирования, хелперы для Kubernetes, Kafka и сертификатов.",
        "Переписал уведомления о падении джоб: HTML вместо простого текста, отдельная обработка ошибок в самих заявках, проверка доступности Jira перед отправкой.",
        "Сделал сверку образов в кластерах с эталонными хешами из Bitbucket: расхождения пишутся в БД и выводятся в Grafana.",
        "Перенёс Jenkins на новый инстанс через REST API: джобы, конфиги и креды. Secret text приходилось вычитывать и публиковать заново, API отдаёт их скрытыми.",
        "Разбирал заявки от команд разработки и сопровождения: выдача прав в OpenShift, топики и ACL в Kafka, кроны и хранимые процедуры в PostgreSQL, секреты в SecMan, выпуск сертификатов с упаковкой в JKS и P12 и т. д.",
      ],
    },
  ],

  skills: [
    {
      group: "Оркестрация и контейнеры",
      items: ["Kubernetes", "OpenShift", "Docker", "Helm"],
    },
    {
      group: "CI/CD и автоматизация",
      items: ["Jenkins", "GitHub Actions", "Ansible", "Terraform"],
    },
    {
      group: "Базы данных",
      items: ["PostgreSQL", "MS SQL Server"],
    },
    {
      group: "Брокеры и мониторинг",
      items: ["Kafka", "Grafana", "Prometheus"],
    },
    {
      group: "Системы и виртуализация",
      items: ["Linux", "QEMU/KVM"],
    },
    {
      group: "Корпоративные инструменты",
      items: ["Jira", "Confluence", "Bitbucket", "Git"],
    },
    {
      group: "Языки",
      items: ["Groovy", "Bash", "Python", "SQL", "C/C++"],
    },
    {
      group: "Английский",
      items: ["свободный устный и письменный"],
    },
  ],

  projects: [
    {
      name: "containerized-blog-platform",
      href: "https://github.com/lentra0/containerized-blog-platform",
      description: "Развёртывание блог-платформы в контейнерах: сеть, секреты, заготовки под мониторинг.",
    },
    {
      name: "messenger-docker-k8s",
      href: "https://github.com/lentra0/messenger-docker-k8s",
      description:
        "Мессенджер с CI/CD: изоляция сервисов, health-check'и, постоянное хранилище, Docker Compose и Kubernetes.",
    },
    {
      name: "omarchy-cachyos",
      href: "https://github.com/lentra0/omarchy-cachyos",
      meta: "128 звёзд",
      description: "Скрипты установки и настройки окружения CachyOS с Hyprland.",
    },
  ],

  education: [
    {
      org: "Московский авиационный институт (НИУ)",
      degree: "Бакалавриат, «Системный анализ и управление». 4 курс, очно.",
      period: "2023 - 2027",
    },
  ],

  ui: {
    sections: {
      summary: "О себе",
      experience: "Опыт работы",
      skills: "Навыки",
      projects: "Проекты",
      education: "Образование",
      extras: "Дополнительно",
    },
    downloadPdf: "Скачать PDF",
    langLabel: "Язык резюме",
  },
};
