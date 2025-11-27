export interface Task {
  id: string;
  description: string;
  completed: boolean;
  userAnswer?: string; // New field for user text input
}

export interface Module {
  id: number;
  title: string;
  description: string;
  content: string; // HTML or Markdown string for the lesson
  tasks: Task[];
  isCompleted: boolean;
}

export interface User {
  name: string;
  email: string;
  password?: string; // Stored insecurely just for the demo requirement
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum AppView {
  LOGIN = 'LOGIN',
  DASHBOARD = 'DASHBOARD',
  MODULE = 'MODULE',
  PROFILE = 'PROFILE'
}