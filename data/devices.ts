import { Device } from "@/lib/types";

// Edite este arquivo para adicionar, atualizar ou remover equipamentos.
//
// IMPORTANTE: agora os arquivos ficam DENTRO do projeto, na pasta
// public/downloads/<fabricante>/<equipamento>/. O campo "url" abaixo é só
// o caminho relativo até o arquivo — não precisa (nem deve) ser um link
// completo com https://.
//
// Fluxo pra adicionar um firmware novo:
// 1. Coloque o arquivo .bin/.cfg dentro de public/downloads/<pasta certa>/
// 2. Confira se o "url" aqui embaixo bate com o nome exato do arquivo
// 3. git add / commit / push — a Vercel publica sozinha
//
// Veja o manifesto completo em public/downloads/README.md

export const devices: Device[] = [
  {
    id: "zte-f670l-v9",
    name: "F670L V9",
    manufacturer: "ZTE",
    category: "ONT",
    model: "ZXHN F670L V9.0",
    image: "https://rapeedo.com.br/noc/wp-content/uploads/2025/03/ZTEF670L.png",
    updatedAt: "2026-01-07",
    firmware: [
      {
        label: "Firmware V9.0.11P3N10",
        filename: "F670L_V9.0.11P3N10.bin",
        url: "/downloads/zte/f670l-v9/F670L_V9.0.11P3N10.bin",
      },
    ],
    presets: [
      {
        label: "Configurações da Rapeedo",
        filename: "config.bin",
        url: "/downloads/zte/f670l-v9/config.bin",
        description: "Vem pré configurada",
      },
      {
        label: "Configurações de fábrica",
        filename: "F670Lv9-default.bin",
        url: "/downloads/zte/f670l-v9/F670Lv9-default.bin",
        description: "Não vem configurada",
      },
    ],
  },
  {
    id: "zte-f6600p",
    name: "F6600P",
    manufacturer: "ZTE",
    category: "ONT",
    model: "ZXHN F6600P",
    image: "https://rapeedo.com.br/noc/wp-content/uploads/2026/01/F6600P--300x243.png",
    updatedAt: "2026-01-06",
    firmware: [
      {
        label: "Firmware P6N34",
        filename: "F6600P_V9.0.10P6N34.bin",
        url: "/downloads/zte/f6600p/F6600P_V9.0.10P6N34.bin",
      },
    ],
    notes:
      "Está em conformidade com a nova política de senhas fortes estabelecida pelo Ato 2436 da Anatel e habilita o uso no software SCP.",
  },
  {
    id: "zte-h199a",
    name: "ZXHN H199A",
    manufacturer: "ZTE",
    category: "Roteador",
    model: "ZXHN H199A",
    image: "https://rapeedo.com.br/noc/wp-content/uploads/2026/03/Roteador-H199A.png",
    updatedAt: "2026-03-24",
    firmware: [
      {
        label: "Versão P12",
        filename: "zxhnh199a_hv910_fv910p12_mul_firmware.bin",
        url: "/downloads/zte/h199a/zxhnh199a_hv910_fv910p12_mul_firmware.bin",
      },
    ],
  },
  {
    id: "zte-f6201b",
    name: "F6201B",
    manufacturer: "ZTE",
    category: "ONT",
    model: "ZXHN F6201B V9.3",
    image: "https://cache2net4.com/Repositorio/18647/Produtos/480850/Fotos/F601BPhotoroom.webp",
    updatedAt: "2026-08-24",
    firmware: [
      {
        label: "Firmware 10P7N9",
        filename: "F6201B_V9.3.10P7N9.bin",
        url: "/downloads/zte/f6201b/F6201B_V9.3.10P7N9.bin",
      },
    ],
    presets: [
      {
        label: "Configurações da Rapeedo",
        filename: "config.bin",
        url: "/downloads/zte/f6201b/config.bin",
      },
    ],
    notes: "Aguardando o arquivo real em public/downloads/zte/f6201b/.",
  },
  {
    id: "tplink-xx530v",
    name: "XX530V / AX3000",
    manufacturer: "TP-Link",
    category: "ONT",
    model: "XX530V",
    image:
      "https://static.wixstatic.com/media/b5c52f_455b864b64954683aa4a6e3114a599b7~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    updatedAt: "2026-08-24",
    firmware: [
      {
        label: "Firmware baixado automaticamente ",
        filename: "firmware.bin",
        url: "/downloads/tplink/xx530v/firmware.bin",
      },
    ],
    presets: [
      {
        label: "Configurações da Rapeedo (só é possivel configurar com internet)",
        filename: "config.bin",
        url: "/downloads/tplink/xx530v/config.bin",
      },
    ],
    notes: "",
  },

  // --- Exemplos de Huawei e Datacom para você preencher com os arquivos reais ---
  // Duplique um bloco, troque os dados e o arquivo dentro de public/downloads/.
  {
    id: "huawei-exemplo",
    name: "EG8145V5 (teste)",
    manufacturer: "Huawei",
    category: "ONT",
    model: "HG8145V5",
    updatedAt: "2026-01-01",
    firmware: [
      {
        label: "Substitua pelo firmware real",
        filename: "firmware.bin",
        url: "/downloads/huawei/hg8145v5-teste/firmware.bin",
      },
    ],
    presets: [
      {
        label: "Configuração padrão",
        filename: "config-default.cfg",
        url: "/downloads/huawei/hg8145v5-teste/config-default.cfg",
      },
    ],
    notes: "Item de exemplo — edite ou remova em data/devices.ts",
  },
  {
    id: "datacom-exemplo",
    name: "DM986-4211 (teste)",
    manufacturer: "Datacom",
    category: "ONU",
    model: "DM986-4211",
    updatedAt: "2026-01-01",
    firmware: [
      {
        label: "Substitua pelo firmware real",
        filename: "firmware.bin",
        url: "/downloads/datacom/dm986-4211-teste/firmware.bin",
      },
    ],
    notes: "Item de exemplo — edite ou remova em data/devices.ts",
  },
];
