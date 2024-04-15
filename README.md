<h1>Pass in web</h1> 

<p align="center">
  <img src="https://img.shields.io/static/v1?label=react&message=framework&color=blue&style=for-the-badge&logo=REACT"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/static/v1?label=lucide&message=icon&color=orange&style=for-the-badge&logo=LUCIDE"/>
<!--   <img src="https://img.shields.io/static/v1?label=Netlify&message=deploy&color=blue&style=for-the-badge&logo=netlify"/>-->
  <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=RED&style=for-the-badge"/> 
  


</p>

> Status do Projeto: :heavy_check_mark:  (Concluido)

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Documentação como instalar dependencias e libs que utilizei no projeto](#como-rodar-a-aplicação-arrow_forward)



## Descrição do projeto 

<p align="justify">
  Sistema de gestão de inscrições online para eventos, onde é possível visualizar os participantes de um evento e data de incrição
</p>



## Pré-requisitos

:warning: [Node](https://nodejs.org/en/download/)



## Documentação como instalar dependencias e libs que utilizei no projeto :arrow_forward:

Para começar a aplicação é necessário instalar o vite

Requisitos:  Ter o node instalado de preferencia na versão mais atual

`node -v`

`npm -v`

Link para instalação do node: https://nodejs.org/en/download

---

Instalação vite:

`npm create vite@latest`

- Escolha um nome para seu projeto
- Escolha o framework **React**
- Escolha a variante **Typescript**

Entre na pasta do projeto

`cd nomeprojeto`

Verifique o endereço para acessar a aplicação

`npm run dev`

Documentação vite: https://vitejs.dev/guide/

---

Instalando dependencias:

No terminal do vscode escreva o comando:

- `npm i`

---

Instalação Tailwind

No terminal do vscode escreva os comandos:

- `npm install -D tailwindcss postcss autoprefixer`
    
    Logo após escreva esse: 
    
- `npx tailwindcss init -p`

no arquivo tailwind.config.js que ja esta disponível na pasta, substitua tudo por esse

seguinte código :

```jsx
/** @type {import('tailwindcss').Config} */
export default {
content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}
```

no arquivo index.css sustitua tudo por esse seguinte código:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Documentação Tailwind: https://tailwindcss.com/docs/guides/vite

---

Instalando biblioteca de ícones:

No terminal digite o seguinte comando:

- `npm install lucide-react`

Para verificar se está funcionando, no seu arquivo App.tsx digite o seguinte código:

```tsx
import { Camera } from 'lucide-react';

// Usage
export function App(){
return (
	<Camera color="red" size={48} />;

	)
};
```





##


## Desenvolvedores/Contribuintes :octocat:


| [<img src="https://avatars.githubusercontent.com/u/100246479?v=4" width=115><br><sub>NaraliceCavalcante</sub>](https://github.com/naralicecosta) |
| :---: |

Copyright :copyright: 2024 - Pass in Web
