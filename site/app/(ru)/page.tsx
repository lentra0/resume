export default function IndexRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/resume/ru/" />
      <main className="sheet">
        <p>
          Резюме доступно на <a href="/resume/ru/">русском</a> и{" "}
          <a href="/resume/en/">английском</a>.
        </p>
      </main>
    </>
  );
}
