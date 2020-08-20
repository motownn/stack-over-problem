import React from 'react';

export default () => {
  return (
    <div className="footer dashboard">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-6">
                    <div className="copyright">
                        <p>© Copyright 2020 MoTown. <br/>Owned and Managed by EmmTechnology. All Rights Reserved</p>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="footer-social">
                        <ul>
                            <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="/"><i className="fa fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
