import React, { useState } from "react";

import SinglePagePDFViewer from "./components/pdf/single-page";
import AllPagesPDFViewer from "./components/pdf/all-pages";
import { sampleBase64pdf } from "./sampleBase64pdf";
/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "./sample.pdf";

import "./styles.css";

export default function App() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="App">
      {!clicked && (
        <>
          <h4>Single Page</h4>
          <SinglePagePDFViewer pdf={sampleBase64pdf} setClicked={setClicked} />
        </>
      )}
      {clicked && (
        <>
          <h4>All Pages</h4>
          <div className="all-page-container">
            <AllPagesPDFViewer pdf={sampleBase64pdf} setClicked={setClicked} />
          </div>
        </>
      )}

      <br />
      <br />
      <div>
        <button type="button" onClick={() => setClicked(!clicked)}>
          Click to change view
        </button>
      </div>
      {/* <hr />

      <h4>Base 64 Single Page</h4>
      <SinglePagePDFViewer pdf={sampleBase64pdf} />

      <hr /> */}
    </div>
  );
}
