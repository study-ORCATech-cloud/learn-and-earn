export interface BackendResponse {
  learningPaths: any[];
  courses: any[];
  projects: any[];
  roadmapItems: any[];
  roadmapProjects: any[];
  metadata: {
    lastUpdated: string;
    version: string;
  };
}

export interface ApiError {
  message: string;
  status?: number;
  timestamp: string;
}
