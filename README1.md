# Portfólio e serviços — Isaac Cauã

Versão autoral do site, com foco principal em serviços e soluções.

## Estrutura

```text
index.html
assets/
  css/style.css
  js/script.js
  img/favicon.svg
```

## Publicar no GitHub Pages

1. Faça backup dos arquivos atuais do repositório `icaua.github.io`.
2. Copie o conteúdo desta pasta para a raiz do repositório.
3. Faça commit e push na branch `main`.
4. Aguarde a atualização do GitHub Pages.

```bash
git clone https://github.com/icaua/icaua.github.io.git
cd icaua.github.io
# copie/substitua os arquivos

git add .
git commit -m "Atualiza identidade e serviços do portfólio"
git push origin main
```

## Antes de publicar

- Revise os valores da seção de manutenção.
- Confirme o número do WhatsApp no HTML e em `assets/js/script.js`.
- Adicione links dos projetos quando estiverem públicos.
- Ajuste o texto de atendimento presencial conforme sua disponibilidade.

## Domínio próprio

Quando comprar o domínio, configure-o em **Settings → Pages → Custom domain** e atualize a meta `og:url` no `index.html`.
