export interface Evaluation {
  icon: string;
  bgrColor: string;
  title: string;
  hasOptions?: boolean;
  options?: Option[];
}

interface Option {
  icon?: string;
  bgrColor: string;
  title: string;
}
