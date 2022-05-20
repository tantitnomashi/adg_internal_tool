
import React, { useState, useEffect } from 'react';

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import PageHeader from "components/PageHeader/PageHeader";
import Footer from "components/Footer/Footer";

// sections for this page/view
import FileUpload from "views/IndexSections/components/FileUpload";
import LoadingOverlay from 'react-loading-overlay'
import BounceLoader from 'react-spinners/BounceLoader'
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

  const [waiting, setWaiting] = useState(false);


  return (
    <LoadingOverlay
      active={waiting}
      spinner
    >
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
                  <a className="btn btn-success py-4 " href={data}
                    download="test.zip">Tải về Hồ sơ</a>
                  :
                  <FileUpload onSuccess={onUploadSuccess} />
                }

              </div>
            </Container>

            <PageHeader />
          </div>

          <Footer />
        </div>
      </div>
    </LoadingOverlay>
  );
}
