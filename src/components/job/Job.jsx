import React, { useState } from "react";
import "./job.css";
import Nav from "../home/home_componet/Navbar";
import Upload from "../rhstudio/rhstudio_component/Upload";
import ProfileRadiusPic from "../rhstudio/rhstudio_component/ProfileRadiusPic";
import Cardpopup from "../shop/shop_component/Cardpopup";

const Job = () => {
  const [selectedTool, setSelectedTool] = useState("job");
  const [cardClick, setCardClick] = useState(false);
  const cardPopup = () => {
    setCardClick(true);
  };
  return (
    <div className="jobContainer">
      <Nav selectedTool={selectedTool} setSelectedTool={setSelectedTool} />
      <div className="jobSection">
        <div className="topNav">
          <Upload />
          <ProfileRadiusPic />
        </div>
        <div className="jobCards">
          <div className="jobCard" onClick={cardPopup}>
            <div className="jobImg"></div>
            <div className="shopInfo">
              <div className="jobInfoMain">
                <span className="jobInfoTitle">Title Here..</span>
                {/* <span className="jobInfoDesc">Description Here..</span> */}
              </div>
              <div className="jobInfoFooter">
                <span className="jobInfoUsername">By:username</span>
                {/* <span className="jobInfoPrice">$price</span> */}
              </div>
            </div>
          </div>
          <Cardpopup trigger={cardClick} setTrigger={setCardClick}>
            <div className="jobCardInfoMainHead">
              <span className="jobCardInfoTitle">Title here..</span>
              <span className="jobCardInfoDate">Uploaded date..</span>
            </div>
            <div className="jobCardInfoMainBody">
              <div className="jobCardMainBodyLeft">
                <div className='jobCardInfoThumbnail'></div>
                <div className="cardInfoProfile">
                  <div className="cardInfoProfilePic"></div>
                  <div className="cardInfoProfileText">
                    <span>@username</span>
                    <div className="followbtn">Follow +</div>
                  </div>
                </div>
              </div>
              <div className="jobCardMainBodyRight">
                <div className="jobCardDesc">
                  <span className="jobDescHead">Description</span>
                  <span className="jobDescSub">description here...... Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia possimus sint ipsa impedit inventore vel labore nisi harum dolores aliquam, alias consectetur maiores, cum, ad perferendis explicabo! Totam deserunt quas provident quaerat blanditiis aperiam impedit labore incidunt architecto, dolores nemo tempora explicabo praesentium assumenda consectetur id dignissimos molestias sint, possimus, nihil asperiores ad magnam? Neque praesentium vero laborum delectus rerum, tempore ducimus est alias eveniet aperiam! Repellendus pariatur recusandae quisquam vitae corrupti neque at, suscipit reiciendis cumque culpa. Eligendi obcaecati fugit autem quam omnis. Aperiam consequuntur itaque doloribus! Totam, expedita amet aliquid odio cumque accusamus dolore. Consequuntur aperiam iure sit.</span>
                </div>
                <div className="cardInfoTable">
                  <table border="1" cellSpacing="0">
                    <tbody>
                      <tr>
                        <td>
                          <span className="cardInfoTableContents">
                            Posted By
                          </span>
                        </td>
                        <td>
                          <span className="cardInfoTableContents">
                            @username
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="cardInfoTableContents">Tags</span>
                        </td>
                        <td>
                          <span className="cardInfoTableKeywords">
                            keywords
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="jobCardInfoLink">
                  <span className="jobCardLinkHead">Link:</span>
                  <span className="jobCardLinkSub">https://www.google.com/</span>
                </div>
              </div>
            </div>
          </Cardpopup>
        </div>
      </div>
    </div>
  );
};

export default Job;
