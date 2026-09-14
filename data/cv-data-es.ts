import { CandidateProfile } from '@/types/cv';

export const CV_DATA: CandidateProfile = {
  lang: 'es',
  name: 'Angel Gustavo Sanchez Rodas',
  title: 'Backend Engineer & IT Infrastructure Specialist',
  location: 'El Progreso, Guatemala',
  contact: {
    email: 'sangelgustavocomo@gmail.com',
    phone: '+502 5846-3811',
    terminalHandle: 'asanchez@node-core-01'
  },
  executiveSummary:
    'Ingeniero de software con sólida formación en arquitectura cliente-servidor, desarrollo backend con Java y Spring Boot, y diseño de esquemas de bases de datos relacionales. Enfoque riguroso en rendimiento de lógica de negocio, prevención de fallos en runtime (Fail-Fast, protección OOM) y gestión de infraestructura de red física y lógica (TCP/IP, enrutamiento, subredes, cableado estructurado y CCTV/NVR).',
  systemTelemetry: {
    coreLanguage: 'Java 21 / SQL',
    primaryRuntime: 'Spring Boot 3.x / Docker Engine',
    uptimeScore: '99.98%',
    securityFocus: 'Input Sanitization, Fail-Fast & Memory Guard'
  },
  networkSkills: {
    protocols: ['TCP/IP', 'IPv4 Addressing', 'DHCP', 'Subnetting', 'Default Gateway', 'DNS Resolution'],
    standards: ['Cableado estructurado ANSI/TIA/EIA T568A / T568B', 'Ponchado y certificación RJ45', 'PoE (802.3af/at)'],
    cctvSecurity: ['Cámaras IP y Análogas', 'Protocolo ONVIF', 'Sistemas de Grabación NVR / DVR', 'Almacenamiento RAID']
  },
  backendSkills: [
    {
      category: 'Desarrollo Backend & Runtimes',
      items: ['Java 21', 'Spring Boot', 'Spring Data JPA', 'Spring Security', 'Python (Scripting)'],
      levelDescription: 'Diseño de microservicios y monolitos modulares, contratos REST estrictos e inyección de dependencias.'
    },
    {
      category: 'Bases de Datos & Almacenamiento',
      items: ['PostgreSQL', 'MySQL', 'Normalización Relacional', 'Optimización de Queries', 'Pools de Conexión HikariCP'],
      levelDescription: 'Indexación, integridad referencial y aislamiento transaccional (ACID).'
    },
    {
      category: 'Infraestructura, Servidores & DevOps',
      items: ['Docker (Containerization)', 'Linux CLI / Bash', 'Gestión de Puertos & Firewalls', 'Proxmox LXC', 'Lectura y Parsing de Logs'],
      levelDescription: 'Aislamiento de servicios en contenedores, automatización en terminal y pruebas de conectividad de red.'
    }
  ],
  projects: [
    {
      id: 'navajagt',
      name: 'NAVAJAGT — Core Engine & SaaS Backend',
      role: 'Tech Lead & Backend Architect',
      environment: 'Cloud / Spring Boot Containerized / PostgreSQL',
      focus: 'Rendimiento de Servidor, Seguridad y Protección de Memoria',
      summary:
        'Desarrollo del motor central para plataforma SaaS de alto procesamiento. Creación de contratos de API REST estrictos y algoritmos para generación dinámica de activos sin degradar los hilos del servidor.',
      architectureHighlights: [
        'Algoritmos defensivos (Fail-Fast) para validación y sanitización estricta de payloads.',
        'Mecanismo de prevención de Out-Of-Memory (OOM) mediante streaming de bytes durante el procesamiento de códigos QR y buffers de imagen.',
        'Diseño de esquema relacional optimizado en PostgreSQL para consulta de registros analíticos de alta concurrencia.',
        'Contratos de integración idempotentes con pasarelas de pago y servicios externos.'
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
          'Fail-Fast URL sanitizer (prevención de SSRF e inyección de payloads)',
          'Byte array guard para evitar degradación de Garbage Collector',
          'Validación estricta de límites de memoria previa a renderizado binario'
        ]
      }
    },
    {
      id: 'taskflow',
      name: 'TASKFLOW — Distributed Task Management API',
      role: 'Backend & Systems Engineer',
      environment: 'Linux Virtualized / Spring Boot Microservice',
      focus: 'Arquitectura Cliente-Servidor y Redes',
      summary:
        'Diseño y ejecución de una arquitectura cliente-servidor robusta. Implementación del bus de comunicación mediante una API REST en Spring Boot, gestionando puertos y validaciones de red.',
      architectureHighlights: [
        'Arquitectura desacoplada basada en controladores, servicios transaccionales y repositorios.',
        'Gestión eficiente de peticiones concurrentes HTTP y asignación controlada de puertos.',
        'Diagnóstico metódico de logs y pruebas de latencia en la capa de transporte.',
        'Persistencia estructurada y normalización de entidades en base de datos.'
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
          'Aislamiento de transacciones en base de datos con rollback automático',
          'Control de concurrencia y validación de sockets de red asignados'
        ]
      }
    }
  ],
  education: [
    {
      degree: 'Ingeniería en Sistemas y Ciencias de la Computación',
      institution: 'Universidad Mariano Gálvez de Guatemala',
      period: 'Enero 2024 — Presente',
      highlights: [
        'Énfasis en arquitectura cliente-servidor, lógica computacional, estructuras de datos y teoría de autómatas.',
        'Estudio aplicado de topologías de red, capas TCP/IP y sistemas operativos de servidor.'
      ]
    },
    {
      degree: 'Perito en Administración de Empresas',
      institution: 'Escuela Técnica Ciencia Aplicada (ESTECA-PC)',
      period: 'Enero 2021 — Octubre 2023',
      highlights: [
        'Formación en control operativo, gestión metódica de inventarios y procesos contables.',
        'Aporte de disciplina analítica al diseño de lógica de negocio y arquitectura de software.'
      ]
    }
  ]
};