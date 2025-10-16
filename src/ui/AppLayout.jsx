import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 content-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
