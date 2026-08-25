# Pasta de downloads

Coloque os arquivos reais de firmware/preset nas pastas abaixo, com **o
nome exato** indicado (ou ajuste o nome em `data/devices.ts` se o seu
arquivo tiver um nome diferente — os dois só precisam bater).

Depois de colocar os arquivos, é só `git add . && git commit && git push`
— a Vercel publica sozinha, sem precisar mexer em mais nada.

## Manifesto — o que falta colocar em cada pasta

| Pasta | Arquivo esperado | Status |
|---|---|---|
| `zte/f670l-v9/` | `F670L_V9.0.11P3N10.bin` | ✅ já linkado (era do site antigo) |
| `zte/f670l-v9/` | `config.bin` | ✅ já linkado |
| `zte/f670l-v9/` | `F670Lv9-default.bin` | ✅ já linkado |
| `zte/f6600p/` | `F6600P_V9.0.10P6N34.bin` | ✅ já linkado |
| `zte/h199a/` | `zxhnh199a_hv910_fv910p12_mul_firmware.bin` | ✅ já linkado |
| `zte/f6201b/` | `firmware.bin` | ⏳ **falta adicionar** |
| `zte/f6201b/` | `config.bin` | ⏳ **falta adicionar** |
| `tplink/xx530v/` | `firmware.bin` | ⏳ **falta adicionar** |
| `tplink/xx530v/` | `config.bin` | ⏳ **falta adicionar** |
| `huawei/hg8145v5-teste/` | — | 🧪 pasta de exemplo, pode apagar |
| `datacom/dm986-4211-teste/` | — | 🧪 pasta de exemplo, pode apagar |

> Os itens marcados como "✅ já linkado" apontavam pro site antigo — o
> `url` em `data/devices.ts` já foi trocado pra pasta local, mas o
> **arquivo em si ainda não está aqui**. Baixe do servidor antigo (ou
> pegue do seu backup) e coloque nessas pastas antes do próximo deploy,
> senão o botão de download vai dar 404.

## Como adicionar um equipamento novo

1. Crie uma pasta: `public/downloads/<fabricante>/<equipamento>/`
2. Coloque o(s) arquivo(s) dentro
3. No `data/devices.ts`, aponte o `url` pro caminho exato, por exemplo:

```ts
url: "/downloads/huawei/hg8145v5/firmware_v5r020.bin",
```

Repare que o caminho sempre começa com `/downloads/` (sem `https://`,
sem domínio) — é relativo à raiz do site.

## Um aviso sobre arquivos grandes

Se algum firmware passar de ~90–100 MB, o GitHub recusa o arquivo no
`git push` normal (limite de 100 MB por arquivo). Na prática, firmware
de ONT/roteador quase sempre fica bem abaixo disso, então não deve ser
problema — mas se algum dia acontecer, me avisa que a gente resolve com
Git LFS ou um bucket de storage separado (S3, Vercel Blob, etc), sem
precisar mudar a estrutura do site.
