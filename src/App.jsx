import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import DataCard from "./components/DataCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center">
        <Form />
        <DataCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
