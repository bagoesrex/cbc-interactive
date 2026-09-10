import type { ReactNode } from "react";

export interface Hotspot {
  id: string;
  label: string;
  src: string;
  hotspotClassName: string;
  dialogTitle: string;
  dialogBody: ReactNode;
}
