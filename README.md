# 3035 Filmes

🔗 [Acesse o projeto online](https://3035-qnmk.vercel.app/)

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
  <img src="https://github.com/user-attachments/assets/babda6af-5d14-4f75-8c8f-0ef21a55198e" width="300" height="650" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
  <img src="https://github.com/user-attachments/assets/c384007d-8bac-4e72-9a8e-3eaaf86216de" width="300" height="650" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
  <img src="https://github.com/user-attachments/assets/36b0a1ce-4221-4333-9747-395c73236dd7" width="300" height="650" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
  <img src="https://github.com/user-attachments/assets/e62f04b6-1c0e-4061-8cf8-0e58cf534af1" width="300" height="650" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
 
<img src="https://github.com/user-attachments/assets/a8bf1f88-841b-4181-86da-3279403cc85e" width="300" height="650" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
<img src="https://github.com/user-attachments/assets/58159ded-8019-48ea-84a6-dbaae4745708" width="300" height="650" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
<img src="https://github.com/user-attachments/assets/db545435-09c2-448d-acbb-f74c064447fb" width="300" height="650" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />



 
</div>

---

## Screenshots do App Web

<div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; margin: 20px 0;">
  <img src="https://github.com/user-attachments/assets/21c932c1-eafd-44e2-a47e-5ab7c6c8801c" alt="Web Screenshot 2" width="600" height="320" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
  <img src="https://github.com/user-attachments/assets/7b27f251-212d-4bb5-a697-9a37997f51f5" alt="Web Screenshot 1" width="600" height="320" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />

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
