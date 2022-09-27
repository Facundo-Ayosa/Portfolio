import React from 'react';
import * as certificates from '../resources/certificates';
function Education() {
  return (
    <main id="educationPage">
        <h1>Certificates</h1>
        <section>
            <article>
                <div id="title">
                    <h3>Javascript Algorithms and Data Structures Certificate</h3>
                </div>
                <img src={certificates.javascript} alt="Javascript Algorithms and Data Structures Certificate From FreeCodeCamp.org"/>
            </article>
            <article>
                <div id="title">
                    <h3>Responsive Web Design</h3>
                </div>
                <img src={certificates.webDesign} alt="Responsive Web Design Certificate From FreeCodeCamp.org"/>
            </article>
        </section>
    </main>
  )
}

export default Education;