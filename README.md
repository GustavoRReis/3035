# 3035 Filmes

## Sobre o Projeto

O objetivo deste projeto é desenvolver uma aplicação completa para listar filmes ordenados pela nota e exibir detalhes utilizando a API do TMDB (The Movie Database). O projeto inclui um frontend web e um aplicativo mobile, ambos consumindo uma API própria desenvolvida para centralizar a lógica de negócio e facilitar a manutenção.

Aproveitei a experiência para estruturar o projeto como um **monorepo**, separando as responsabilidades em três pastas principais:
- **backend**: API Node.js/Express, seguindo princípios de Clean Architecture para separar entidades, repositórios, usecases e infraestrutura.
- **web**: Frontend desenvolvido com React + Vite.
- **mobile**: Aplicativo mobile desenvolvido com React Native e Expo.

Essa abordagem facilita a escalabilidade, manutenção e testes, além de permitir o reaproveitamento de tipos e lógica de domínio.

## Tecnologias Utilizadas
- **Node.js** + **Express** (API backend)
- **React** + **Vite** (Frontend web)
- **React Native** + **Expo** (Mobile)
- **TypeScript** em todos os ambientes
- **Axios** para requisições HTTP
- **Clean Architecture** para organização do backend
- **Railway** para deploy do backend
- **Vercel** para deploy do frontend web

---

## Como rodar o projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/GustavoRReis/3035.git
cd 3035
```

### 2. Configurar variáveis de ambiente

#### Backend (`backend/.env`)
```
TMDB_API_KEY=6b8b8aadfe9effd572a474adf7e24a84
```

### 3. Rodar o backend (API)
```bash
cd backend
npm install
npm run dev
```
A API estará disponível em `http://localhost:3001`.

---

### 4. Rodar o frontend web
```bash
cd web
npm install
npm run dev
```
Acesse `http://localhost:5173` no navegador.

---

### 5. Rodar o mobile (Expo)
```bash
cd mobile
npm install
npx expo start
```
Siga as instruções do Expo para rodar no emulador ou dispositivo físico.

---

## Estrutura do Monorepo
```
3035/
  backend/   # API Node.js/Express (Clean Architecture)
  web/       # Frontend React + Vite
  mobile/    # App React Native + Expo
```

---

## Licença
Desenvolvido por Gustavo Ramon dos Reis
