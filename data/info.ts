import { InfoPage } from "@/lib/types";

// Páginas de informação/configuração que não são arquivo para baixar
// (apontamentos, credenciais de sistemas internos, procedimentos, etc).

export const infoPages: InfoPage[] = [
  {
    id: "login",
    title: "Login e Senha para acessar a ONT após o preset",
    category: "NOC",
    updatedAt: "2026-08-24",
    summary:
      "Configuração de acesso para entrar na ONT após a importação do preset de configuração da Rapeedo.",
    fields: [
      { label: "Usuário", value: "rapeedo" },
      { label: "Senha", value: "Rapeedo@998855jj", sensitive: true },
    ],
  },
  {
    id: "acs-tr069",
    title: "Apontamento ACS TR-069",
    category: "NOC",
    updatedAt: "2025-08-19",
    summary:
      "Dados de apontamento e conexão do ACS (Auto Configuration Server) via protocolo TR-069.",
    fields: [
      { label: "URL ACS", value: "http://acs.rapeedo.com.br/tr069" },
      { label: "User Name", value: "admin" },
      { label: "Password", value: "ep3AYMa1rB3aMAXsosHU", sensitive: true },
      { label: "Request User Name", value: "IXCSoft" },
      { label: "Request Password", value: "ep3AYMa1rB3aMAXsosHU", sensitive: true },
      { label: "Porta de conexão", value: "7547" },
      { label: "Endereço de conexão", value: "/tr069" },
    ],
  },
  {
    id: "acesso-remoto",
    title: "Apontamento de Acesso Remoto",
    category: "NOC",
    updatedAt: "2026-09-22",
    summary:
      "Configuração de acesso remoto para gerenciamento dos equipamentos através da entrada WAN.",
    fields: [
      { label: "Intervalo de IP", value: "191.37.16.0 ~ 191.37.23.255" },
      { label: "Nome da Entrada WAN", value: "Gerencia/Rapeedo" },
      { label: "Status da entrada WAN", value: "Ligado" },
      { label: "Tipo de serviço", value: "HTTP, HTTPS e PING" },
    ],
  },
];
