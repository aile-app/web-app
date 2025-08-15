import headerImage from './assets/images/header-logo-title.svg';

const App = () => {

  return (
    <div className="text-center selection:bg-green-900">
      <header className="flex min-h-screen flex-col items-center justify-center bg-[#0F1A24] text-white">
        <h1 className="flex items-center justify-center gap-8 mb-8">
          <span className="sr-only">Aile</span>
          <img
            src={headerImage as string}
            className="h-40 w-auto"
            alt="Aile logo"
            aria-hidden="true"
          />
        </h1>

        <p className="text-3xl font-bold mb-8">
          Open source Android flight tracking app
        </p>
        <p>
          Collaborate with the project on <a className="font-bold underline" href="https://github.com/aile-app" rel="noopener">Github</a>.
        </p>
      </header>
    </div>
  );
};

export default App;
