import StepsMain from "./components/StepsMain";

function App() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center gap-64 overflow-hidden bg-gray-50 py-32">
      <img
        src="/beams.jpg"
        alt=""
        className="fixed top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        width="1308"
      />
      <div className="fixed inset-0 bg-[url(/grid.svg)] bg-center"></div>
      {/* nav bar here
        -needs to be sticky and have a background color blured out, animate heigth on scroll up and down
        -needs a burguer menu opener, when clicked it should animate the menu to be full screen separated in 3 cols (bg animated)
      */}

      {/* main content here */}
      {/* Calendar */}
      {/* Steps */}
      <StepsMain />
      <StepsMain />
      {/* Chart */}
      {/* footer here */}
    </div>
  );
}

export default App;