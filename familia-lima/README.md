# Como transformar seu site em PWA sem mudar a estrutura

Cole estes trechos no **index.html**:

1) Dentro de `<head>` (de preferência após `<meta name="viewport">`):
```html
<link rel="manifest" href="./manifest.webmanifest">
<meta name="theme-color" content="#1e2cf3">
<!-- iOS (opcional, ajuda no ícone/tela inicial do Safari): -->
<link rel="apple-touch-icon" href="./images/logo.webp">
```

2) Antes de `</body>`:
```html
<script>
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js");
    });
  }
</script>
```

3) Garanta que exista um **logo.webp 512×512** em `./images/logo.webp` (ou ajuste o caminho no `manifest.webmanifest`).

4) Publique via **HTTPS** (obrigatório). `localhost` também funciona para testes.

## O que está neste pacote
- `manifest.webmanifest` — nome, ícone, cores e comportamento standalone.
- `service-worker.js` — cache básico com fallback `offline.html`.
- `offline.html` — página exibida quando não houver conexão.
- Este `README.md` com instruções de colagem.

## Observações
- Recursos externos (Google Fonts, CSS/JS em outros domínios) podem não ser pré-cacheados por CORS; este SW faz cache em tempo de execução do que for acessado com sucesso.
- No iOS, a instalação é pelo Safari: **Compartilhar → Adicionar à Tela de Início**.
