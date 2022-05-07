
import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import FileUpload from "components/FileUpload";

import { Container } from "reactstrap";

export default function Index() {
  const [downloadable, setDownloadable] = React.useState(false);
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
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
              <h2 className="d-none d-sm-block">
                Hồ sơ giải ngân
              </h2>
              {downloadable ?
                <>
                  <a className="btn btn-success py-4 " href={data}
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
