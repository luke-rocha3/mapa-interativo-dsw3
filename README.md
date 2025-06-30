# 🌍 Mapa-Múndi Interativo com API REST

Este projeto consiste em uma aplicação web interativa que exibe **informações sobre países** ao passar o mouse sobre um mapa-múndi em SVG.

## ✨ Funcionalidades

- Destaca o país selecionado ao passar o mouse (muda a cor).
- Utiliza a **API REST** [https://restcountries.com](https://restcountries.com) para buscar os dados.
- Apresenta:
  - Nome do país
  - Bandeira
  - Capital
  - Moeda
  - Continente

## 🛠 Tecnologias utilizadas

- HTML5, CSS3 e JavaScript
- `fetch()` para chamadas assíncronas à API REST
- SVG para representação gráfica do mapa-múndi

## 📁 Estrutura do projeto
├── index.html
├── README.md
├── assets/
│ ├── js/
│ │ └── script.js
│ ├── css/
│ │ └── style.css
│ └── images/
│ └── world.svg

## 🚀 Como executar

Para que o mapa interativo funcione corretamente, é necessário utilizar um servidor local, pois o navegador pode bloquear o carregamento do arquivo SVG externo via `file://`.

### Recomendado: usar o **Live Server** (no VS Code)

1. Abra o projeto no Visual Studio Code.
2. Instale a extensão **Live Server** (caso ainda não tenha).
3. Clique com o botão direito no arquivo `index.html` e selecione `Open with Live Server`.

A aplicação será aberta no navegador e estará pronta para uso.

---

## ℹ️ Observações

- O arquivo `world.svg` deve conter elementos `<path>` com atributo `id` representando os códigos ISO Alpha-2 de cada país (ex: `BR`, `US`, `FR`).
- A API só é consultada quando o usuário **passa o mouse sobre um país**.
- Regiões como Alasca ou territórios distantes (ex: Havaí, Polinésia Francesa) podem aparecer como partes separadas do mesmo país no SVG, mas usam o mesmo `id`.

---

Projeto desenvolvido como parte da disciplina **Desenvolvimento de Sistemas Web 3 (DSW3)**.

