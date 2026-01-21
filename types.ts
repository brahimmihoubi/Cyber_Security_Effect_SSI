
export interface ServiceModel {
  name: string;
  fullName: string;
  description: string;
  examples: string;
}

export interface ResponsibilityItem {
  area: string;
  owner: 'Provider' | 'Customer';
}

export interface Threat {
  title: string;
  description: string;
  details: string[];
  isMostCommon?: boolean;
}

export interface BestPractice {
  title: string;
  description: string;
  icon: string;
}

export interface SectionPoint {
  id: string;
  text: string;
  detail: string;
}

export interface SectionData {
  title: string;
  description: string;
  color: string;
  iconName: string;
  points: SectionPoint[];
}
