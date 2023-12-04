'use client'

export default function ErrorPage({ error }: { error: Error }) {
  console.error(error);

  return (
    <div>Error 404, la casa que buscas no se pudo encontrar 🤨</div>
  );
}