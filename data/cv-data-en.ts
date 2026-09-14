import { CandidateProfile } from '@/types/cv';

export const CV_DATA_EN: CandidateProfile = {
  lang: 'en',
  name: 'Angel Gustavo Sanchez Rodas',
  title: 'Backend Engineer & IT Infrastructure Specialist',
  location: 'El Progreso, Guatemala',
  contact: {
    email: 'sangelgustavocomo@gmail.com',
    phone: '+502 5846-3811',
    terminalHandle: 'asanchez@node-core-01'
  },
  executiveSummary:
    'Software Engineer with a solid background in client-server architecture, backend development with Java and Spring Boot, and relational database schema design. Rigorous focus on business logic performance, runtime failure prevention (Fail-Fast, OOM protection), and physical/logical network infrastructure management (TCP/IP, routing, subnets, structured cabling, and CCTV/NVR).',
  systemTelemetry: {
    coreLanguage: 'Java 21 / SQL',
    primaryRuntime: 'Spring Boot 3.x / Docker Engine',
    uptimeScore: '99.98%',
    securityFocus: 'Input Sanitization, Fail-Fast & Memory Guard'
  },
  networkSkills: {
    protocols: ['TCP/IP', 'IPv4 Addressing', 'DHCP', 'Subnetting', 'Default Gateway', 'DNS Resolution'],
    standards: ['ANSI/TIA/EIA T568A / T568B Structured Cabling', 'RJ45 Termination & Certification', 'PoE (802.3af/at)'],
    cctvSecurity: ['IP & Analog Cameras', 'ONVIF Protocol', 'NVR / DVR Recording Systems', 'RAID Storage']
  },
  backendSkills: [
    {
      category: 'Backend Development & Runtimes',
      items: ['Java 21', 'Spring Boot', 'Spring Data JPA', 'Spring Security', 'Python (Scripting)'],
      levelDescription: 'Design of microservices and modular monoliths, strict REST contracts, and dependency injection.'
    },
    {
      category: 'Databases & Storage',
      items: ['PostgreSQL', 'MySQL', 'Relational Normalization', 'Query Optimization', 'HikariCP Connection Pools'],
      levelDescription: 'Indexing, referential integrity, and transactional isolation (ACID).'
    },
    {
      category: 'Infrastructure, Servers & DevOps',
      items: ['Docker (Containerization)', 'Linux CLI / Bash', 'Port & Firewall Management', 'Proxmox LXC', 'Log Reading & Parsing'],
      levelDescription: 'Service isolation in containers, terminal automation, and network connectivity testing.'
    }
  ],
  projects: [
    {
      id: 'navajagt',
      name: 'NAVAJAGT — Core Engine & SaaS Backend',
      role: 'Tech Lead & Backend Architect',
      environment: 'Cloud / Spring Boot Containerized / PostgreSQL',
      focus: 'Server Performance, Security, and Memory Protection',
      summary:
        'Development of the core engine for a high-processing SaaS platform. Creation of strict REST API contracts and algorithms for dynamic asset generation without degrading server threads.',
      architectureHighlights: [
        'Defensive algorithms (Fail-Fast) for strict payload validation and sanitization.',
        'Out-Of-Memory (OOM) prevention mechanism using byte streaming during QR code and image buffer processing.',
        'Optimized relational schema design in PostgreSQL for high-concurrency analytical record querying.',
        'Idempotent integration contracts with payment gateways and external services.'
      ],
      techStack: ['Java 21', 'Spring Boot 3', 'Spring Data JPA', 'PostgreSQL', 'Docker', 'Linux CLI'],
      liveUrl: 'https://navajapagegt.vercel.app/',
      apiSample: {
        endpoint: '/api/v1/qr/generate',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Rate-Limit-Remaining': '120'
        },
        requestPayload: {
          targetUrl: 'https://tripleaestudio.gua.gt',
          errorCorrectionLevel: 'H',
          bufferLimitBytes: 1048576
        },
        responsePayload: {
          status: 200,
          code: 'RESOURCE_STREAM_READY',
          allocatedMemoryMs: 18,
          integrityCheck: 'SHA-256:e3b0c44298fc1c149afbf4c8996fb924...'
        },
        defensiveMechanisms: [
          'Fail-Fast URL sanitizer (SSRF and payload injection prevention)',
          'Byte array guard to prevent Garbage Collector degradation',
          'Strict memory limit validation prior to binary rendering'
        ]
      }
    },
    {
      id: 'taskflow',
      name: 'TASKFLOW — Distributed Task Management API',
      role: 'Backend & Systems Engineer',
      environment: 'Linux Virtualized / Spring Boot Microservice',
      focus: 'Client-Server Architecture and Networks',
      summary:
        'Design and execution of a robust client-server architecture. Implementation of the communication bus via a Spring Boot REST API, managing ports and network validations.',
      architectureHighlights: [
        'Decoupled architecture based on controllers, transactional services, and repositories.',
        'Efficient management of concurrent HTTP requests and controlled port allocation.',
        'Methodical log diagnostics and latency testing at the transport layer.',
        'Structured persistence and entity normalization in the database.'
      ],
      techStack: ['Java', 'Spring Boot', 'REST APIs', 'TCP/IP', 'Linux Console', 'MySQL'],
      liveUrl: 'https://taskflow-front-flzf.onrender.com/',
      apiSample: {
        endpoint: '/api/v1/tasks/dispatch',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Cluster-Node': 'worker-gt-01'
        },
        requestPayload: {
          taskId: 'tsk-9482',
          priority: 'CRITICAL',
          assignedIp: '192.168.1.120'
        },
        responsePayload: {
          statusCode: 201,
          state: 'QUEUED',
          dispatchSocket: 'TCP/8080'
        },
        defensiveMechanisms: [
          'Database transaction isolation with automatic rollback',
          'Concurrency control and assigned network socket validation'
        ]
      }
    }
  ],
  education: [
    {
      degree: 'B.S. in Systems Engineering and Computer Science',
      institution: 'Universidad Mariano Gálvez de Guatemala',
      period: 'January 2024 — Present',
      highlights: [
        'Emphasis on client-server architecture, computational logic, data structures, and automata theory.',
        'Applied study of network topologies, TCP/IP layers, and server operating systems.'
      ]
    },
    {
      degree: 'Business Administration Technician',
      institution: 'Escuela Técnica Ciencia Aplicada (ESTECA-PC)',
      period: 'January 2021 — October 2023',
      highlights: [
        'Training in operational control, methodical inventory management, and accounting processes.',
        'Contribution of analytical discipline to the design of business logic and software architecture.'
      ]
    }
  ]
};
