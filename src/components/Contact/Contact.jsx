import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper ">
      <div className="paddings innerwdth flexCenter c-container">
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy To Contact Us</span>
          <span className="secondaryText">
            Doing business with us becomes easier with the website in place just
            key in and contact us on daily basis
          </span>

          <div className="flexStart contactMode">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="sect1">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className=" details">
                    <span>Call</span>
                    <span>021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button contactButton ">call us </div>
              </div>

              {/* second mode */}
              <div className="flexColCenter mode">
                <div className="sect1">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className=" details">
                    <span>Chat</span>
                    <span>021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button contactButton ">
                  Chat Us Now{" "}
                </div>
              </div>
            </div>

            {/* second row */}
          </div>

          <div className="flexColStart contactMode">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="sect1">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className=" details">
                    <span>Video</span>
                    <span>021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button contactButton ">
                  {" "}
                  Video call
                </div>
              </div>

              {/* second mode */}
              <div className="flexColCenter mode">
                <div className="sect1">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className=" details">
                    <span>Message</span>
                    <span>021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button contactButton ">
                  Message Us{" "}
                </div>
              </div>
            </div>

            {/* second row */}
          </div>
        </div>
        <div className="c-right">
          <div className="image-container">
            <img className="img" src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
