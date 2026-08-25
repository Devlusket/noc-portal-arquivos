export type Category = "ONT" | "ONU" | "Roteador";
export type Manufacturer = "ZTE" | "Huawei" | "Datacom" | "TP-Link";

export interface DownloadFile {
  label: string;
  filename: string;
  url: string;
  description?: string;
}

export interface Device {
  id: string;
  name: string;
  manufacturer: Manufacturer;
  category: Category;
  model: string;
  image?: string;
  updatedAt: string; // ISO date
  firmware?: DownloadFile[];
  presets?: DownloadFile[];
  notes?: string;
}

export interface InfoField {
  label: string;
  value: string;
  sensitive?: boolean;
}

export interface InfoPage {
  id: string;
  title: string;
  category: string;
  updatedAt: string;
  summary: string;
  fields?: InfoField[];
  body?: string[];
}
