import MainCard from "./components/cards/maincard";

function App() {
  return (
    <div
      style={{
        background: "#0f0f0f",
        minHeight: "100vh",
        padding: "40px",
        display: "flex",
        gap: "20px",
        overflowX: "auto",
      }}
    >
      <MainCard
        title="Mess Menu"
        description="View today's meals"
        onClick={() => console.log("Mess Clicked")}
      />

      <MainCard
        title="Events"
        description="Campus happenings"
        onClick={() => console.log("Events Clicked")}
      />

      <MainCard
        title="Notices"
        description="Official announcements"
        onClick={() => console.log("Notices Clicked")}
      />
    </div>
  );
}

export default App;