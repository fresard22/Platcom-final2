import React, { useState } from "react";

import Aportes from "../src/client/components/Aportes";
import Header from "../src/client/components/Header";
import Sidebar from "../src/client/components/Sidebar";

const VideoExplicativo = () => {
  return (
    <iframe
      src="https://drive.google.com/file/d/1-dq603JjT6VYVrdXfLYhK-g-WCE_wF-R/preview"
      width="640"
      height="480"
    />
  );
};

function Index() {
  const [semestreOpen, setSemestreOpen] = useState(0);
  const [ramo, setRamo] = useState("");

  const handleSemestre = (newSemestre, newRamo) => {
    setSemestreOpen(newSemestre);
    setRamo(newRamo);
  };

  const handleRamo = (newSemestre, newRamo) => {
    setSemestreOpen(newSemestre);
    setRamo(newRamo);
  };

  const handleGoHome = (newSemestre, newRamo) => {
    setSemestreOpen(newSemestre);
    setRamo(newRamo);
  };

  return (
    <div className="container">
      <div className="">
        <Header onSemestre={handleSemestre} onGoHome={handleGoHome} />
        {semestreOpen > 0 ? (
          <div className="row">
            <Sidebar semestre={semestreOpen} onRamo={handleRamo} />
            <Aportes ramo={ramo} />
          </div>
        ) : (
          <VideoExplicativo></VideoExplicativo>
        )}
      </div>
    </div>
  );
}

export default Index;
