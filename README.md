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

## Screenshots do App Mobile

<div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; margin: 20px 0;">
  <img src="https://github.com/user-attachments/assets/a314232d-462e-4d2a-9449-e1505ffdb937" alt="Screenshot 2" width="300" height="650" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
  <img src="https://github.com/user-attachments/assets/ce620e95-7ca0-4f82-a832-68c56c1a9919" alt="Screenshot 1" width="300" height="650" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
   <img src="https://github.com/user-attachments/assets/af226764-3acd-4693-b88b-7e42802d49ee" alt="Screenshot 6" width="300" height="650" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
   <img src="https://github.com/user-attachments/assets/9d0c717d-055e-4551-bd93-0f352328ebb8" alt="Screenshot 5" width="300" height="650" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
  <img src="https://github.com/user-attachments/assets/2720758f-f28a-4d9e-8cf7-c9c65f885fee" alt="Screenshot 3" width="300" height="650" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
  <img src="https://github.com/user-attachments/assets/9bc014a6-0abc-4546-b267-55fbeb9efedb" alt="Screenshot 4" width="300" height="650" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
 
</div>

---

## Screenshots do App Web

<div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; margin: 20px 0;">
  <img src="https://github.com/user-attachments/assets/ff063956-3103-4938-9c1a-6c7b5b553f50" alt="Web Screenshot 2" width="600" height="320" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
  <img src="https://github.com/user-attachments/assets/0b32939e-aad8-4eca-8d52-2c16c5a00136" alt="Web Screenshot 1" width="600" height="320" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
</div>

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
