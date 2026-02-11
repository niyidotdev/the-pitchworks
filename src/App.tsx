import Navbar from "./components/navbar";

function App() {
  return (
    <div className="main-background relative flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <Navbar />
      {/* <div className="mt-20 flex flex-col items-center">
        <h1 className="mb-4 bg-linear-to-r from-white to-white/70 bg-clip-text text-6xl font-bold text-transparent">
          PitchWorks
        </h1>
        <p className="max-w-2xl text-xl text-white/80 opacity-80">
          Your Creative Partner Helping Businesses Scale With Confidence.
        </p>
      </div> */}
    </div>
  );
}

export default App;
