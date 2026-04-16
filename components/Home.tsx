import NotesApp from "./NotesApp";

const Home = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h1 className="text-slate-950 text-center text-xl font-bold">Home</h1>
      <p data-testid="desc" className="text-slate-950 text-center">
        this is my description
      </p>
      <NotesApp />
    </div>
  );
};

export default Home;
