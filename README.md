# NOC // Downloads

Portal interno para os técnicos baixarem firmwares, presets e informações
de apontamento de ONT, ONU e roteadores.

## Como funciona

Os arquivos de firmware/preset ficam **dentro do próprio projeto**, na
pasta `public/downloads/`. Não tem servidor externo, não tem backend, não
tem login — é um site estático (Next.js) publicado na Vercel, e os
downloads são só arquivos estáticos servidos junto com o site.

Pra adicionar, editar ou remover um equipamento, você:
1. Coloca o arquivo em `public/downloads/<fabricante>/<equipamento>/`
2. Edita `data/devices.ts` apontando pro caminho do arquivo
3. `git push` — a Vercel publica sozinha

Veja o manifesto completo (o que já tem e o que falta) em
`public/downloads/README.md`.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Adicionando um firmware novo

Abra `data/devices.ts` e adicione um novo bloco no array `devices`, ou
edite um existente. Exemplo:

```ts
{
  id: "huawei-hg8145v5",       // identificador único, sem espaços
  name: "HG8145V5",             // nome exibido no card
  manufacturer: "Huawei",       // "Huawei" | "ZTE" | "Datacom" | "TP-Link"
  category: "ONT",              // "ONT" | "ONU" | "Roteador"
  model: "HG8145V5",
  updatedAt: "2026-08-22",      // data no formato AAAA-MM-DD
  firmware: [
    {
      label: "Firmware V5R020",
      filename: "hg8145v5_v5r020.bin",
      url: "/downloads/huawei/hg8145v5/hg8145v5_v5r020.bin", // caminho local, sem https://
    },
  ],
  presets: [
    {
      label: "Configuração padrão",
      filename: "config-default.cfg",
      url: "/downloads/huawei/hg8145v5/config-default.cfg",
      description: "Vem pré configurada",
    },
  ],
  notes: "Texto opcional com observações sobre esse firmware.",
},
```

**Não esqueça de colocar o arquivo de verdade** em
`public/downloads/huawei/hg8145v5/` com o nome exato usado no `url` —
se o arquivo não existir ali, o botão de download vai dar 404.

Categorias e fabricantes novos que você adicionar aparecem
automaticamente nos filtros da página — não precisa editar mais nada.

## Adicionando um apontamento/configuração

Abra `data/info.ts` e adicione um bloco no array `infoPages`, seguindo o
exemplo do ACS TR-069 já cadastrado. Campos com `sensitive: true` (como
senhas) ficam ocultos por padrão na tela e só aparecem quando o técnico
clica para revelar.

## Publicando (deploy)

1. Suba esta pasta para um repositório no GitHub.
2. Em vercel.com, clique em "New Project" e importe o repositório.
3. A Vercel detecta que é Next.js automaticamente — não precisa configurar
   nada. Clique em Deploy.
4. Toda vez que você atualizar `data/devices.ts` (ou adicionar arquivos em
   `public/downloads/`) e der `git push`, o site atualiza sozinho em
   ~1 minuto.

Depois do primeiro deploy você pode configurar um domínio próprio (ex:
`noc.suaempresa.com.br`) direto no painel da Vercel.

### Sobre arquivos grandes

O GitHub recusa arquivos individuais acima de 100 MB num `git push`
normal. Firmware de ONT/roteador raramente chega perto disso, mas se
algum dia acontecer, me chama que a gente resolve com Git LFS ou um
bucket de storage separado — sem precisar mudar a estrutura do site.

## Estrutura do projeto

```
app/
  page.tsx           → página principal (lista de equipamentos + filtros)
  info/page.tsx       → página de apontamentos/configurações
  layout.tsx          → layout raiz, fontes e metadados
  globals.css         → paleta de cores, tipografia, estilos globais
components/            → componentes de UI (card, filtros, busca, etc)
data/
  devices.ts           → catálogo de firmwares e presets (edite aqui)
  info.ts               → apontamentos e configurações (edite aqui)
public/
  downloads/             → os arquivos de firmware/preset em si (coloque aqui)
lib/
  types.ts               → tipos TypeScript dos dados acima
  date.ts                  → formatação de datas
```
