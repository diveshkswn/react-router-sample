📦 React Router App with Vite
This is a sample React app scaffolded using Vite and set up with modern React Router features including createBrowserRouter, lazy loading of components and loaders, nested routes, error boundaries, and route-specific data fetching.

![npm](https://img.shields.io/npm/v/react-router)
![Vite](https://img.shields.io/badge/built%20with-vite-646CFF.svg?logo=vite)
![Repo Size](https://img.shields.io/github/repo-size/diveshkswn/react-router-sample)
![Top Language](https://img.shields.io/github/languages/top/diveshkswn/react-router-sample)
![Code Lines](https://img.shields.io/tokei/lines/github/diveshkswn/react-router-sample)


🧩 Features
🔥 Vite for fast development and build

⚛️ React with code splitting via React.lazy and lazy route definitions

🔀 createBrowserRouter for nested and dynamic routing

🔐 Authentication state validation via route loaders

⚡ Dynamic data fetching via route loaders (e.g., fetchProductsById)

🧱 Error handling for unmatched routes

🧪 Mock/delayed loader functionality (commented for demonstration)

📁 Project Structure

```
├── pages/
│   ├── Homepage/
│   │   └── Homepage.tsx
│   ├── dashboard/
│   │   ├── Layout.tsx
│   │   └── DashBoard.tsx
│   ├── Login.tsx
│   └── RootLayout.tsx
├── utils/
│   └── index.ts
├── helper.ts
├── App.tsx
└── main.tsx
```
🚦 Route Overview
Root Route /
Uses RootLayout and validateAuthState loader

Children:

/ → HomePage (lazy loaded)

/dashboard → DashBoardLayout (lazy loaded)

/:userId → DashBoard with data loader (fetchProductsById)

/login → LoginPage

/app/* → Handles wildcard subpaths and renders App

/error and fallback * → Render error page

🛠️ Installation
bash
```
npm install
```
🚀 Running the App
bash
```
npm run dev
```
Open your browser at http://localhost:5173

📦 Build for Production
bash
```
npm run build
```
Serve with:

bash
```
npm run preview
```
🔍 Notes
Each route can define a lazy object with Component and/or loader.

Dynamic routes (e.g. /dashboard/:userId) can fetch data before rendering.

Errors during data fetching can redirect to an error route.

A fallback * route handles unmatched paths.

📄 Example Loader Logic

typescript
```
loader: async ({ params }) => {
  const data = await fetchProductsById(Number(params.userId));
  if (!data) {
    return redirect('/error');
  }
  return data;
}
```
📚 Useful Resources
React Router Docs

Vite Docs

React Lazy

🧪 TODO
Add error boundaries to show friendly error messages

Add suspense fallbacks for lazy-loaded components

Improve auth guard logic in validateAuthState

🧑‍💻 Author : Divesh Keswani
Built by a software developer with a love for clean routing and fast builds.
