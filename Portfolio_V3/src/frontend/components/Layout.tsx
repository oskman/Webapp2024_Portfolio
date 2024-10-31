import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {

  return (
    <div id="app">
      <header>
        <h1>Min Portefølje</h1>
        <nav>
          <ul>
            <li><a href="">Hjem</a></li>
            <li><a href="">Om</a></li>
            <li><a href="">Kontakt</a></li>
          </ul>
        </nav>
      </header>
      <main id="root">
        {children}
      </main>
      <footer><h6>Les mer</h6></footer>
    </div>
  );
}