"use client";

export default function GlobalErrorPage({ error, reset }) {
  return (
    <html>
      <body>
        <h1>This page is global Error Page</h1>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
