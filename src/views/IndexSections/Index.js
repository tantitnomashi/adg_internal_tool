
import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import PageHeader from "components/PageHeader/PageHeader";
import Footer from "components/Footer/Footer";

// sections for this page/view
import FileUpload from "views/IndexSections/components/FileUpload";

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
    <div className="index-page">
      <IndexNavbar />
      <div className="wrapper">
        <div className="page-header header-filter">

          <Container>
            <div className="content-center">
              <h2 className="d-sm-block">
                Hồ sơ giải ngân
              </h2>
              {downloadable ?
<<<<<<< HEAD:src/views/Index.js
                <>
                  <a className="btn btn-success py-4 " href={data}
                    download="vgvg.jpg">Tải về</a>
                </> :
=======
                <a className="btn btn-success py-4 " href={data}
                  download>Tải về</a>
                :
>>>>>>> c21b8c1f36c4168753346e4866e1188cd89e615d:src/views/IndexSections/Index.js
                <FileUpload onSuccess={onUploadSuccess} />
              }

            </div>
          </Container>
          <PageHeader />
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
    </div>
  );
}
