import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <Header sidebarVisible={toggleSidebar}></Header>
      <Main showSidebar={sidebarVisible}></Main>
    </>
  );
}

export default App;
