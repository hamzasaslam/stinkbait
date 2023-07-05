import React from "react";
import gettingStarted from "../assets/pngFiles/gettingStarted.png";
import cyberSecurity from "../assets/pngFiles/cyberSecurity.png";
import stinkbotChat from "../assets/pngFiles/stinkbotChat.png";
import landingPageWorm from "../assets/pngFiles/landingPageWorm.png";
import editorWithPen from "../assets/pngFiles/editorWithPen.png";
import editorWithPenMob from "../assets/pngFiles/editorWithPenMobile.png";
import hammer from "../assets/pngFiles/hammer.png";
import wrench from "../assets/pngFiles/wrench.png";
import screwdriver from "../assets/pngFiles/screwdriver.png";
import injectBg from "../assets/pngFiles/injectBg.png";
import styles from "./Landingpage.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BsFillForwardFill } from "react-icons/bs";
import { Card } from "antd";
import CardComponent from "../planCard/Card";
import Toggle from "../toggle/Toggle";

function Landingpage() {
  return (
    <>
      <div className={styles.gettingStartedLeftSide}>
        <div className={styles.leftside}>
          <p className={styles.firstParagraph}>Reporting</p>
          <p className={styles.secondParagraph}>Made Easy.</p>
          <divj className={styles.paraDiv}>
            <p className={styles.thirdParagraph}>
              Craft better reports in less time with our AI-assisted research
              and reporting tool.
            </p>
          </divj>

          <button
            style={{
              backgroundColor: "#2AC83A",
              borderRadius: "13px",
              width: "222px",
              height: "2.5rem",
              color: "white",
              fontSize: "22px",
              border: "none",
              marginTop: "70px",
            }}
            text="Get Started"
          >
            Get Started
          </button>
        </div>

        <div className={styles.gettingStartedRight}>
          <div className={styles.imageDiv}>
            <img
              className={styles.landingPageWorm}
              src={gettingStarted}
              alt=""
            />
          </div>
        </div>
      </div>

      {/*Cyber Security   */}

      <div className={styles.landingPage__cyberSecurity}>
        <div className={styles.landingPageLeftSide}>
          <p className={styles.cyberSecurity__firstText}>
            You'll Have Access To
          </p>
          <p className={styles.cyberSecurity__heading}>
            The Most Comprehensive Index of{" "}
            <span className={styles.Knowledge}>Cyber Security Knowledge</span>
          </p>
          <p className={styles.cyberSecurity__des}>
            <strong>Don't waste countless hours looking for documents</strong> -
            we've compiled one of the largest collections of publicly available
            cyber security knowledge.
            <br />
            <br />
            We're talking blog posts, GRC documentation, DFIR reports, and
            transcripts from cyber security conference talks.
            <br />
            <br />
            Our search engine employs semantic search to analyze hundreds of
            thousands of documents across specialties such as Red Team, Blue
            Team, DFIR, and ICS to enhance your experience with our AI chat
            assistant.
            <br />
            <br />
          </p>
        </div>

        <div className={styles.landingPageRightSide}>
          <img src={cyberSecurity} alt="" />
        </div>
      </div>

      {/* Chatbot Sectoin */}

      <div className={styles.parentChat}>
        <div className={styles.ChatLeftSide}>
          <div className={styles.chatImage}>
            <img src={stinkbotChat} alt="" />
          </div>
        </div>

        <div className={styles.ChatRightSide}>
          <p className={styles.firstText}>Get Expert-Level Responses With</p>

          <p className={styles.stink_heading}>
            <span style={{ color: "#2AC83A" }}>Stinkbot </span>
            <br />
            <span style={{ fontSize: "36.446px" }}>
              Our Custom AI Virtual Assistant
            </span>
          </p>

          <p className={styles.stink_des}>
            <strong>We think AI should empower humans, not replace them.</strong>
            <br />
            That's why we created Stinkbot.
            <br />
            <br />
            Unlike other versions of Chat AI that rely on generalized data sets,
            we've custom-tailored Stinkbot to retrieve information from data
            sets that are curated for cyber security professionals.
          </p>
        </div>
      </div>

      {/* Banner sEction */}

      <div className={styles.bannerParent}>
        <div className={styles.bannerInner}>
          <div className={styles.bannerImage}>
            <div className={styles.bannerImage1}>
              <img src={landingPageWorm} alt="" />
            </div>
          </div>

          <div className={styles.bannerText}>
            <p className={styles.try}>TRY OUR</p>
            <p className={styles.free}>FREE</p>
            <p className={styles.days}>7-DAY TRIAL</p>
          </div>

          <div className={styles.bannerText2}>
            <p className={styles.find}>Find The Right Plan</p>
            <p className={styles.foryour}>For Your</p>
            <p className={styles.workflow} style={{lineHeight:"100%"}}>Workflow</p>
            <button className={styles.subscribe}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                View Our Subscription Plan{" "}
                <FaLongArrowAltRight
                  className="arrow-icon"
                  size={30}
                  style={{ display: "flex", alignItems: "center" }}
                />
              </div>
            </button>
          </div>

          <div className={styles.bannerButtons}>
            <button className={styles.bannerButton}>BASIC</button>
            <button className={styles.bannerButton}>PRO</button>
            <button className={styles.bannerButton}>ENTERPRISE</button>
          </div>
        </div>
      </div>
      <div className={styles.toggle}>
        <Toggle />
      </div>

      <CardComponent />

      {/* Editor Section */}

      <div className={styles.editorParent}>
        {/* Left Side Contet plus image */}
        <div className={styles.editorLeftside}>
          <p className={styles.inject}>Inject Results Directly Into Our</p>
          <p className={styles.easytouse}>Easy-To-Use</p>
          <p className={styles.documentedit}>Document Editor</p>
          <p className={styles.chatbotEdit}>
            <span style={{ fontWeight: "600" }}>
              Receive the perfect response?
            </span>
            <br />
            You can copy/paste it directly into your report.
            <br />
            <br />
            Our platform is designed to optimize your workflow - that includes
            direct integration with Git, as well as the ability to export
            generated documents in Word or PDF format.
          </p>
        </div>

        {/* Right Side Editor Image */}
        <div className={styles.editorrightside}>
          <div className={styles.editorImage1}></div>
        </div>
      </div>
      {/* Footer Banner */}

      <div className={styles.landingPage__toolsBanner}>
        <div className={styles.toolInner}>
          <div className={styles.readDocsWrapper}>
            <p className={styles.wanttoknow}>Want to Know How</p>
            <p className={styles.stinkB}>Stinkbait</p>
            <p className={styles.works}>Works?</p>

            <button className={styles.subscribe} style={{ marginLeft: "70px" }}>
              <div
                style={{
                  width: "244px",
                  height: "46px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "17.119px",
                }}
              >
                Read Our Docs{" "}
                <FaLongArrowAltRight
                  className="arrow-icon"
                  size={30}
                  style={{ marginLeft: "5px" }}
                />
              </div>
            </button>
          </div>

          <div className={styles.toolsBanner__imgsWrapper}>
            <div className={styles.img1}>
              {" "}
              <img src={hammer} alt="" />{" "}
            </div>
            <div className={styles.img2}>
              <img src={wrench} alt="" />
            </div>
            <div className={styles.img3}>
              <img src={screwdriver} alt="" />{" "}
            </div>
          </div>
        </div>
      </div>

      {/* 
      <div className={styles.toolsBanner__imgsWrapperMbWrapper}>
        <div className={styles.landingPage__toolsBannerMb}>
          <div className={styles.toolsBanner__readDocsWrapperMb}>
            <p>Want to Know How</p>
            <p>Stinkbait</p>
            <p>Works?</p>
              <button
                style={{
                  backgroundColor: '#2AC83A',
                  gap: '8px',
                  width: '89px',
                  height: '18px',
                  borderRadius: '4px',
                  marginLeft: '8rem',
                }}
                icon={<BsFillForwardFill size={10} color={'#fff'} />}
                iconRight={true}
                text="Read Our Docs"
              />
          </div>
          <div className={styles.toolsBanner__imgsWrapperMb}>
            <img src="/imgs/hammer.png" alt="" />
            <img src="/imgs/wrench.png" alt="" />
            <img src="/imgs/screwdriver.png" alt="" />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Landingpage;
