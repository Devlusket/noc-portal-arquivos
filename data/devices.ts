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
    image: "/images/ZTEF670L.png",
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
        label: "Preset da Rapeedo",
        filename: "config.bin",
        url: "/downloads/zte/f670l-v9/config.bin",
        description: "Vem pré configurada",
      },
    ],
  },
  {
    id: "zte-f6600p",
    name: "F6600P",
    manufacturer: "ZTE",
    category: "ONT",
    model: "ZXHN F6600P",
    image: "/images/F6600P.png",
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
    image: "/images/H199A.png",
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
    image: "/images/F6201B.png",
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
        label: "Preset da Rapeedo",
        filename: "config.bin",
        url: "/downloads/zte/f6201b/config.bin",
        description: "Vem pré configurada",
      },
    ],
    notes: "",
  },
  {
    id: "tplink-xx530v",
    name: "XX530v V2",
    manufacturer: "TP-Link",
    category: "ONT",
    model: "XX530V | AX3000",
    image: "/images/XX530V.jpg",
    updatedAt: "2026-08-24",
    firmware: [
      {
        label: "Firmware 0.8.0_3.2.2 ",
        filename: "firmware.bin",
        url: "/downloads/tplink/xx530v/XX530vV2v2_0.8.0_3.2.2_UP_BOOT_agc3000(260506)_2026-05-07_09.22.23.bin",
      },
      {
        label: "Firmware 0.6.0_3.1.10 ",
        filename: "firmware.bin",
        url: "/downloads/tplink/xx530v/XX530vV2v2_0.6.0_3.1.10_UP_BOOT_agc3000(251231)_2025-12-31_13.45.39.bin",
      },
    ],
    presets: [
      /*{
        label: "Configurações da Rapeedo",
        filename: "config.bin",
        url: "/downloads/tplink/xx530v/config.bin",
      },*/
    ],
    notes: "Só é possível importar um preset com a ONT registrada.",
  },
];



