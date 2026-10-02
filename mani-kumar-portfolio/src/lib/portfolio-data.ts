export const primarySkills = ["C#", ".NET", "ASP.NET Core", "React", "AWS", "SQL Server", "Redis", "Terraform"];

export const focusAreas = [
  {
    number: "01",
    title: "Backend Engineering",
    description: ".NET, ASP.NET Core, REST APIs, LINQ, background services, clean architecture",
  },
  {
    number: "02",
    title: "Distributed Systems",
    description: "Microservices, event-driven architecture, SNS, SQS, Redis, ECS, asynchronous processing",
  },
  {
    number: "03",
    title: "Cloud & AI",
    description: "AWS, Terraform, DynamoDB, AI-powered workflows, FHIR-based clinical workflows",
  },
];

export const experience = [
  {
    company: "Greenway Health",
    role: "Associate Software Engineer",
    period: "Nov 2023 — Present",
    location: "Bengaluru, India",
    highlights: [
      "Developed features for the Novare application using .NET and React.",
      "Implemented pharmacy search with 1-second debouncing and lazy loading.",
      "Built background synchronization services integrating Pharmacy and GCS APIs.",
      "Implemented draft medication persistence using DynamoDB and Redis.",
      "Integrated AI Agent-generated FHIR checklist data into clinical workflows.",
      "Designed and implemented the Patient Search and Summary AI Agent using event-driven architecture.",
      "Worked with AWS SNS, SQS, DLQ, Redis, ECS, and Terraform.",
      "Implemented risk-based Adaptive Authentication using contextual signals to dynamically enforce MFA.",
    ],
  },
  {
    company: "Nagarro",
    role: "Associate Software Engineer",
    period: "Jul 2022 — Oct 2023",
    location: "Bengaluru, India",
    highlights: [
      "Worked as a Full Stack Developer using .NET and React.",
      "Designed and implemented a notification management system.",
      "Applied clean architecture and scalability practices.",
      "Participated in code reviews, sprint planning, and Agile ceremonies.",
    ],
  },
];

export const projects = [
  {
    number: "01",
    name: "Patient Search & Summary AI Agent",
    description: "An event-driven AI workflow designed to support scalable patient search and summary processing.",
    label: "Distributed AI workflow",
    flow: ["Clinical Search ECS", "SNS", "SQS", "BFF ECS Worker", "Redis", "UI"],
    technologies: ["AWS SNS", "AWS SQS", "DLQ", "ECS", "Redis", "Terraform", ".NET"],
    contributions: [
      "Designed event-driven architecture.",
      "Published AI response chunks through SNS.",
      "Used SQS for downstream processing.",
      "Built BFF worker processing flow.",
      "Cached response chunks in Redis.",
      "Streamed incremental responses to the UI through polling.",
    ],
  },
  {
    number: "02",
    name: "Novare Application",
    description: "A healthcare application with modern clinical workflows, pharmacy integrations, medication management, and AI-assisted considerations.",
    label: "Clinical workflow platform",
    flow: ["Clinical UI", ".NET Services", "FHIR Checklist", "Data & Cache"],
    technologies: ["React", ".NET", "DynamoDB", "Redis", "FHIR", "XML"],
    contributions: [
      "AI Agent-generated FHIR checklist integration",
      "Scheduled checklist generation",
      "Pharmacy data synchronization",
      "Redis and in-memory caching",
      "DynamoDB draft medication persistence",
      "Drug interaction processing and Dr First XML generation",
    ],
  },
  {
    number: "03",
    name: "Adaptive Authentication",
    description: "Risk-based authentication that dynamically determines when additional MFA verification is required.",
    label: "Identity security",
    flow: ["Context Signals", "Risk Evaluation", "MFA Decision", "Access"],
    technologies: ["Adaptive Auth", "MFA", "Risk Signals", "Security"],
    contributions: [
      "Evaluated real-time contextual signals.",
      "Applied risk-based MFA decisions.",
      "Strengthened authentication security.",
      "Reduced unnecessary MFA challenges.",
    ],
  },
];

export const skillGroups = [
  { title: "Backend", skills: ["C#", ".NET 8", ".NET Core", "ASP.NET Core", "REST APIs", "LINQ", "Python", "XUnit"] },
  { title: "Frontend", skills: ["React", "Angular", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Jest"] },
  { title: "Cloud & Infrastructure", skills: ["AWS", "SNS", "SQS", "ECS", "CloudWatch", "DynamoDB", "Terraform", "Docker", "Git", "GitHub"] },
  { title: "Data & Architecture", skills: ["SQL Server", "PostgreSQL", "Redis", "Microservices", "Event-Driven Architecture", "Distributed Systems"] },
];

export const architecture = [
  { title: "Event-Driven Architecture", flow: ["SNS", "SQS", "Workers", "Redis", "UI"], copy: "Loosely coupled services built for durable, asynchronous flow." },
  { title: "Distributed Systems", flow: ["Decouple", "Process", "Retry", "Isolate"], copy: "Asynchronous processing, scalability, retries, and fault isolation." },
  { title: "Cloud Architecture", flow: ["IaC", "Containers", "Cache", "Observe"], copy: "AWS services, infrastructure as code, containerized workloads, caching, and observability." },
  { title: "Backend Engineering", flow: ["API", "Services", "Data", "Reliability"], copy: "REST APIs, clean architecture, background services, concurrency, and maintainability." },
];

export const interests = ["System Design", "Distributed Systems", "Microservices", "Cloud Architecture", "Artificial Intelligence", "AI Agents", "Data Structures & Algorithms", "Backend Performance", "Concurrency & Multithreading"];