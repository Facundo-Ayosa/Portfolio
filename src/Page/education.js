import React from 'react';
import Certificate from '../Components/certificate';
import data from '../resources/database.json';
function Education() {

    return (
        <main>
            <h1 id="certificates">Certificates</h1>
            <section>
                {formatCertificates()}
            </section>
        </main>
    )
}

function formatCertificates() {
    let array = data.certificates.map((e, i) => {
        return <Certificate data={e} key={i} />
    });
    return array;
}

export default Education;