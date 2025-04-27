import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion";
import "./value.css";

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerwidth flexCenter v-container">
        {/* v left */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="Our Values" />
          </div>
        </div>

        {/* v right */}
        <div className="flexColStart v-right">
          <p className="orangeText">Our Values</p>
          <p className="primaryText">Value We Give</p>
          <p className="secondaryText">
            Our intention is to help Port-Harcourt <br />
            solve the <br />
            housing problems
          </p>

          {/* Accordion */}
          <Accordion
            className="Accordion"
            allowMultipleExpanded={false}
            allowZeroExpanded={true}
            preExpanded={[0]}
          >
            {data.map((item, i) => (

                

              <AccordionItem className= "b-dion"   key={i} uuid={i}>
                <AccordionItemHeading>
                  <AccordionItemButton className="flexCenter accordion-button">

                   < accordionItemState>
                   {({expanded}) => expanded ? setClassName ('expanded') : setClassName('collapsed')}
                   </accordionItemState>
                    <div className="flexCenter icon">{item.icon}</div>
                    <span className="primaryText main-item">{item.heading}</span>
                    <div className="flexCenter icon">
                      <MdOutlineArrowDropDown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
