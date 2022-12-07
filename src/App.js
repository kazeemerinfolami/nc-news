import PageContextProvider from "./PageContextProvider";
import Routers from "./Routers";

function App() {
  return (
    <PageContextProvider>
      <Routers />
    </PageContextProvider>
  );
}

export default App;
