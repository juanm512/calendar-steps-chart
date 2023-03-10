import NavBar from "./components/NavBar";
import CalendarMain from "./components/CalendarMain";
import StepsMain from "./components/StepsMain";
import ChartMain from "./components/ChartMain";

function App() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center gap-64 overflow-hidden bg-gray-50 py-32">
      <img
        src="/beams.jpg"
        alt=""
        className="max-w-screen fixed top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 object-fill dark:invert"
        width="1308"
      />
      <div className="fixed inset-0 bg-[url(/grid.svg)] bg-center dark:invert"></div>
      {/* nav bar here
        -needs to be sticky and have a background color blured out, animate heigth on scroll up and down
        -needs a burguer menu opener, when clicked it should animate the menu to be full screen separated in 3 cols (bg animated)
      */}
      <NavBar />

      {/* main content here */}
      <>
        {/* Calendar */}
        <CalendarMain />
        {/* Steps */}
        <StepsMain />
        {/* Chart */}
        <ChartMain />
      </>
      {/* footer here */}
    </div>
  );
}

export default App;
