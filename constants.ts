import { ServiceModel, Threat, BestPractice, SectionData } from './types';

export const SERVICE_MODELS: ServiceModel[] = [
  {
    name: 'IaaS',
    fullName: 'Infrastructure as a Service',
    description: 'Provides virtualized computing resources over the internet.',
    examples: 'Virtual machines, networks, storage.'
  },
  {
    name: 'PaaS',
    fullName: 'Platform as a Service',
    description: 'A platform allowing customers to develop, run, and manage applications.',
    examples: 'Runtime, databases, development tools.'
  },
  {
    name: 'SaaS',
    fullName: 'Software as a Service',
    description: 'Delivers software applications over the internet, on a subscription basis.',
    examples: 'Ready-to-use applications (Gmail, Salesforce, etc.).'
  }
];

export const THREATS: Threat[] = [
  {
    title: 'Data Breaches',
    description: 'Sensitive data leaked due to weak access controls or lack of encryption.',
    details: ['Financial loss', 'Legal penalties', 'Loss of trust']
  },
  {
    title: 'Misconfiguration',
    description: 'The most common cloud security issue, often involving poor settings.',
    details: ['Public databases', 'Open ports', 'Excessive permissions'],
    isMostCommon: true
  },
  {
    title: 'Account Hijacking',
    description: 'Attackers gaining full control of cloud resources.',
    details: ['Phishing', 'Weak passwords', 'Missing MFA']
  },
  {
    title: 'Insecure APIs',
    description: 'Exposed interfaces that allow unauthorized access to services.',
    details: ['Weak authentication', 'Poor endpoint security']
  },
  {
    title: 'Insider Threats',
    description: 'Misuse of access by authorized users within the organization.',
    details: ['Malicious intent', 'Careless handling of credentials']
  }
];

export const BEST_PRACTICES: BestPractice[] = [
  {
    title: 'Use MFA Everywhere',
    description: 'Multi-Factor Authentication adds a critical layer of identity verification.',
    icon: '🔐'
  },
  {
    title: 'Apply Least Privilege',
    description: 'Grant users only the access they strictly need to perform their jobs.',
    icon: '⚖️'
  },
  {
    title: 'Encrypt Sensitive Data',
    description: 'Protect data in all states: at rest, in transit, and in use.',
    icon: '🧊'
  },
  {
    title: 'Monitor Continuously',
    description: 'Help detect attacks and investigate incidents with logging and alerts.',
    icon: '👁️'
  },
  {
    title: 'Backup Regularly',
    description: 'Ensure data recovery in case of deletion, corruption, or ransomware.',
    icon: '💾'
  },
  {
    title: 'Train Users',
    description: 'Human error causes most incidents; education is the best defense.',
    icon: '🎓'
  }
];

export const DATA: Record<string, SectionData> = {
  advantages: {
    title: "Advantages",
    description: "AI enhances defense mechanisms with speed and adaptability.",
    color: "text-emerald-400",
    iconName: "ShieldCheck",
    points: [
      { id: "a1", text: "Faster threat detection and response", detail: "AI algorithms can identify anomalies in microseconds, far outpacing human capability." },
      { id: "a2", text: "Continuous real-time monitoring", detail: "Systems provide 24/7 surveillance without fatigue, ensuring no gap in security coverage." },
      { id: "a3", text: "Predictive analysis to anticipate attacks", detail: "Machine learning models analyze historical data to forecast and prevent potential breaches before they occur." },
      { id: "a4", text: "Automation of routine security tasks", detail: "Frees up human analysts to focus on complex strategic threats by handling patching and logging automatically." },
      { id: "a5", text: "Reduced human error and improved accuracy", detail: "Minimizes configuration mistakes and oversight that often lead to vulnerabilities." },
      { id: "a6", text: "Adaptive learning", detail: "Security systems become smarter with every interaction, learning from new attack vectors." },
      { id: "a7", text: "Massive data processing", detail: "Ability to ingest and correlate logs from thousands of endpoints simultaneously." }
    ]
  },
  risks: {
    title: "Risks",
    description: "Malicious actors leverage the same AI power for offensive capabilities.",
    color: "text-red-400",
    iconName: "AlertTriangle",
    points: [
      { id: "r1", text: "Automated attacks and enhanced phishing", detail: "AI writes convincing, personalized phishing emails at scale, bypassing traditional spam filters." },
      { id: "r2", text: "Deepfakes and social engineering", detail: "Synthetic audio and video allow attackers to impersonate executives or trusted contacts." },
      { id: "r3", text: "Poisoned training datasets", detail: "Attackers inject malicious data into AI models during training to create backdoors or bias." },
      { id: "r4", text: "Over-reliance on AI", detail: "Complacency leads to reduced human oversight, making systems vulnerable if the AI fails." },
      { id: "r5", text: "Model exploitation", detail: "Reverse engineering AI models to discover how they detect threats, then creating evasion techniques." },
      { id: "r6", text: "Privacy concerns", detail: "AI requires vast amounts of data, raising risks of sensitive user information leakage." }
    ]
  },
  disadvantages: {
    title: "Disadvantages",
    description: "Operational hurdles and resource requirements.",
    color: "text-amber-400",
    iconName: "Activity",
    points: [
      { id: "d1", text: "High implementation costs", detail: "Deploying enterprise-grade AI security solutions requires significant capital investment." },
      { id: "d2", text: "System complexity", detail: "Requires specialized skills and data scientists to manage, which are in short supply." },
      { id: "d3", text: "False positives", detail: "Over-sensitive AI can flood teams with alerts for benign events, causing 'alert fatigue'." },
      { id: "d4", text: "Lack of transparency", detail: "Black box algorithms make it difficult to understand why a specific security decision was made." },
      { id: "d5", text: "Heavy resource needs", detail: "Training and running models requires substantial computational power and energy." },
      { id: "d6", text: "Ethical concerns", detail: "Widespread monitoring capabilities raise questions about employee and user privacy rights." }
    ]
  }
};

export const SYSTEM_INSTRUCTION = `
You are a top-tier Cybersecurity Analyst Expert. 
You are analyzing a document titled "Effects of Artificial Intelligence on Cybersecurity".
The document covers three main areas:
1. Advantages (Faster detection, real-time monitoring, predictive analysis, automation, accuracy, adaptive learning, data processing).
2. Risks (Automated attacks, Deepfakes, Poisoned datasets, Over-reliance, Model exploitation, Privacy concerns).
3. Disadvantages (Costs, Complexity, False positives, Lack of transparency, Resource needs, Ethical concerns).

Your goal is to answer user questions specifically about these topics. 
Be concise, professional, and technical but accessible. 
If asked about something not in the document, mention that it's outside the scope of the current report but provide a brief general answer.
`;
