
import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import Basics from "views/IndexSections/Basics.js";
import Navbars from "views/IndexSections/Navbars.js";
import Tabs from "views/IndexSections/Tabs.js";
import Pagination from "views/IndexSections/Pagination.js";
import Notifications from "views/IndexSections/Notifications.js";
import Typography from "views/IndexSections/Typography.js";
import JavaScript from "views/IndexSections/JavaScript.js";
import NucleoIcons from "views/IndexSections/NucleoIcons.js";
import Signup from "views/IndexSections/Signup.js";
import Examples from "views/IndexSections/Examples.js";
import Download from "views/IndexSections/Download.js";
import FileUpload from "components/FileUpload";

import { Container } from "reactstrap";
import { useState } from "react/cjs/react.production.min";

export default function Index() {
  const [downloadable, setDownloadable] = React.useState(false);
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);

  const onUploadSuccess = (newData) => {
    setData(newData);
    setDownloadable(true);
  }



  return (
    <>
      <IndexNavbar />
      <div className="wrapper">

        <div className="page-header header-filter">
          <PageHeader />
          <Container>
            <div className="content-center">
              <h3 className="d-none d-sm-block">
                Hồ sơ giải ngân
              </h3>
              {downloadable ?
                <>








                  <a className="btn btn-success" href={data}
                    download>Tải về</a>



                </> :
                <FileUpload onSuccess={onUploadSuccess} />

              }

            </div>
          </Container>
        </div>
        <div className="main">
          {/* <Basics />
          <Navbars />
          <Tabs />
          <Pagination />
          <Notifications />
          <Typography />
          <JavaScript />
          <NucleoIcons />
          <Signup />
          <Examples />
          <Download /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}
