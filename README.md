# 🛍 Projeto E-commerce - Drip Store

Este projeto faz parte do curso de Front-End e será desenvolvido em equipe por 3 membros. A aplicação é uma loja virtual feita em **React** com **Vite**, seguindo os requisitos da escola.

---

## 👥 Equipe

| Membro | Nome         | Responsabilidade Principal                                      |
| ------ | ------------ | --------------------------------------------------------------- |
| 👤 1   | [Anderson]   | Layout geral + Página Inicial                                   |
| 👤 2   | [Dani]       | Footer + Order Tracking + FormCreatePage + CreateAccountInitialPage + LoginPage |
| 👤 3   | [Colega 2]   | Página de Visualização do Produto                               |

> Observação: todos podem revisar e ajudar nas tarefas uns dos outros via Pull Request!

---

## 🗂 Estrutura de pastas

```bash
src/
├── assets/               # Imagens e ícones
├── components/           # Componentes reutilizáveis
│   ├── Header/
│   ├── Footer/
│   ├── Logo/
│   ├── ProductListing/
│   ├── ProductCard/
│   ├── ProductOptions/
│   ├── BuyBox/
│   ├── Section/
│   ├── FilterGroup/
│   └── Gallery/
├── pages/                # Páginas
│   ├── HomePage/
│   ├── ProductListingPage/
│   └── ProductViewPage/
├── App.jsx
└── main.jsx
```

---

## 📋 Regras de colaboração

- Criar sempre uma **branch por funcionalidade**:
  - Ex: `feat/homepage-slide`, `feat/header-nav`, `feat/product-card`
- Após concluir, **criar um Pull Request** e marcar a equipe para revisão.
- Nunca trabalhar direto na branch `main`.

---

## 🔄 Repartição de Tarefas

### 👤 [ANDERSON] - Layout Geral + Home Page

📁 Diretório: `src/pages/HomePage`

**Responsável por:**

- Componente `Layout` (envolve `<Header />` e `children`)
- Componente `<Header />` (logo, campo de busca, login/cadastro, navegação, ícone do carrinho)
- Componente `<Footer />` (responsivity e styled-components);
- Página `/` (Home):
  - Slide com `<Gallery />`
  - Coleções em destaque
  - Produtos em alta usando `<ProductListing />`

[--------------------------------------------------------------------------------------------------]

### 👤 [DANI] - Components + Pages

📁 Diretório: `src/pages`
📁 Diretório: `src/assets/components`

**Responsável por:**

- contexts: 
   - `/CartContext`;
- Components:
  - Componente `<Footer />` + CSS (logo, informações, redes sociais, direitos autorais);
  - Componente `<UserDashboard/>` + CSS  (Perfil, pedidos, informações e pagamentos);
  - Componente `<ProductCard/>` + CSS;

- Páginas :
  - `/CreateAccountInitialPage` + CSS 
  - `/ShoppingCartPage` + CSS 
  - `/ProductListingPage` + CSS 
  - `/ProductViewPage` + SC
  - `/CreateFormPage` + CSS 
  - `/LoginPage` + CSS 
- Imagens:
  - Remoção de background  
  
---

### 👤 Pessoa 3 - Página de Visualização do Produto

📁 Diretório: `src/pages/ProductViewPage`

**Responsável por:**

- Página `/product/:id` com:
  - Galeria de imagens (`<Gallery />`)
  - Componente `<BuyBox />`
  - Variações de cor e tamanho com `<ProductOptions />`
  - Produto recomendado com `<ProductListing />`

---

## 💅 Estilo e cores

Utilizar a paleta fornecida:

- Primary: `#C92071`
- Secondary: `#B5B6F2`
- Tertiary: `#991956`
- Grayscale e cores de status disponíveis no documento original

## ✒️ Fontes e weights

Utilizar a fonte `Inter` com os seguintes weights:

- `Inter-700` para títulos, label
- `Inter-500` para fontes menores que 14px
- `Inter-400` para textos

---

## 🧠 Dicas técnicas

- Usar `react-router-dom` para rotas
- Usar `props.children` nos componentes de layout
- Usar `NavLink` para navegação com destaque na rota atual
- Preferência por componentes funcionais com hooks
- Reutilizar componentes com base em props

---

## ✅ Status do projeto

| Parte                          | Responsável | Status                                    |
| ------------------------------ | ----------- | ----------------------------------------- |
| Layout geral (`Layout`)        | [Anderson]  | ⬜️ Header [feito-faltando-responsividade] |
| Header/Footer                  | Pessoa 1    | ⬜️                                        |
| Página Home                    | Pessoa 1    | ⬜️                                        |
| Página de Produtos             | Pessoa 2    | ⬜️                                        |
| Filtros / Ordenação            | Pessoa 2    | ⬜️                                        |
| Página Visualização de Produto | Pessoa 3    | ⬜️                                        |
| Buy Box + Product Options      | Pessoa 3    | ⬜️                                        |
| Produtos recomendados          | Pessoa 3    | ⬜️                                        |

---

## 📌 Como rodar o projeto

```bash
git clone https://github.com/SEU-USUARIO/drip-store.git
cd drip-store
npm install
npm run dev
```

---

> Qualquer dúvida ou sugestão, converse com o time no grupo da equipe e atualize o progresso com Pull Requests!
