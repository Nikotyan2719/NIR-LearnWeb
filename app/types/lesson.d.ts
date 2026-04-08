export type Comment = {
  id: string
  author: string
  text: string
  date: string
  avatar?: string
};

export type TextBlock = {
  type: "text"
  content: string
};

export type HeadingBlock = {
  type: "heading"
  level: 2 | 3 | 4
  content: string
};

export type CalloutBlock = {
  type: "callout"
  variant: "info" | "tip" | "warning" | "advanced" | "danger"
  title: string
  content: string
};

export type CodeBlock = {
  type: "code"
  language: "html" | "css" | "javascript"
  code: string
  label?: string
};

export type EditorBlock = {
  type: "editor"
  language: "html" | "css" | "javascript"
  initialCode: string
  previewHtml?: string
  previewCss?: string
  instructions?: string
};

export type ListItem = {
  title: string
  description: string
  code?: {
    language: "html" | "css" | "javascript"
    code: string
  }
};

export type ListBlock = {
  type: "list"
  ordered: boolean
  items: ListItem[]
};

export type LessonBlock = TextBlock | HeadingBlock | CalloutBlock | CodeBlock | EditorBlock | ListBlock;

export type Lesson = {
  id: string
  slug: string
  title: string
  description: string
  order: number
  blocks: LessonBlock[]
};

export type CourseConfig = {
  topics: Topic[]
};

export type Topic = {
  id: string
  title: string
  icon?: string
  order: number
  lessons: LessonRef[]
};

export type LessonRef = {
  id: string
  title: string
};

export type ProgressData = {
  completedLessonIds: string[]
};
