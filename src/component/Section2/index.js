import React from "react";
import section2 from "../../assets/Img/section2.png";
import Section3 from "../Section3";

const Section2 = () => {
  return (
    <div id="section2">
      <div className="container">
        <div className="section2">
          <div className="icons">
            <div className="div1"></div>
            <h1>Об RitmStyle</h1>
            <div className="div2"></div>
          </div>

          <div className="section2--texts">
            <div className="section2--texts__tex">
              <h3>RitmStyle массаж </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec{" "}
                <br />
                in purus, sed tellus eget mattis nibh quam. Eu ornare nunc, id{" "}
                <br />
                est. Erat consectetur etiam a sit diam in imperdiet amet. Diam{" "}
                <br />
                nisl, ipsum suscipit amet. Eleifend amet habitasse proin quis{" "}
                <br />
                adipiscing.
              </p>
              <p>
                Nisl convallis mauris in consequat. Sit ac vitae posuere <br />
                maecenas dictumst quam. Felis amet diam, non augue massa. <br />
                Egestas molestie lobortis rhoncus, elit nulla nisl. Habitant{" "}
                <br />
                tortor at tempor.
              </p>
            </div>
            <img src={section2} alt="img" />
          </div>
          <div className="section2--texts">
            <img src={section2} alt="img" />
            <div className="section2--texts__tex">
              <h3>RitmStyle гидротерапия </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu{" "}
                <br />
                cras quis ac a non ut viverra turpis eget. Hendrerit quis <br />
                pulvinar massa ipsum sem. Donec posuere nulla enim non neque{" "}
                <br />
                etiam. Eros arcu, pulvinar penatibus luctus ridiculus sagittis{" "}
                <br />
                vel nunc hac. Nisi, diam tincidunt dui viverra. Eget quis <br />
                ultricies sem nunc risus senectus luctus ultricies. Enim feugiat{" "}
                <br />
                pharetra pharetra et.
              </p>
              <p>
                Pulvinar arcu at morbi posuere cursus. Fermentum est sit enim{" "}
                <br />
                velit ornare molestie. Ipsum nisi id sed tempor elementum. Mi{" "}
                <br />
                nunc eget pellentesque ipsum. Suspendisse risus a id vel massa{" "}
                <br />
                tincidunt. Hendrerit blandit in augue vel mi quam magna egestas.{" "}
                <br />
                Fringilla ac lacus viverra ullamcorper leo, enim vitae id <br />
                aliquam. Magna sed tristique tellus enim, netus tempor at elit{" "}
                <br />
                dui. Ullamcorper hendrerit feugiat libero tellus diam egestas{" "}
                <br />
                dui tellus odio.
              </p>
            </div>
          </div>
        </div>
        <Section3 />
      </div>
    </div>
  );
};

export default Section2;
