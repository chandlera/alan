/** @jsx h */
import { h, Fragment } from "../../deps.ts";
import PictureWithSources from "./picture-with-sources.tsx";

export default function Index() {
    return (
      <Fragment>
        <h1>Welcome to my site</h1>
        <p>Here's a little info about me</p>
        <div className="blurb__timeline">
          <div className="blurb__timeline__item rounded--box--shadow">
            <p>I hail from the beautiful state of Washington</p>
            <PictureWithSources largeSource={"/images/rainier-large.jpg"} smallSource={"/images/rainier-small.jpg"} />
          </div>
          <div className="blurb__timeline__item rounded--box--shadow">
            <p>Went to school at Central Washington University, and received a Bachelor of Science in Computer Science</p>
            <PictureWithSources largeSource={"/images/cwu-large.jpg"} smallSource={"/images/cwu-small.jpg"} />
          </div>
          <div className="blurb__timeline__item rounded--box--shadow">
            <p>Interned and worked at Wizards of the Coast in Renton, WA for a year and a half as a Web Developer using the
              .Net Framework
            </p>
            <p>Summer 2011 and February 2012 through February 2013</p>
            <PictureWithSources largeSource={"/images/wizards.svg"} smallSource={"/images/wizards.svg"} />
            <img src="/images/wizards.svg" alt="Wizards of the Coast Logo" />
          </div>
          <div className="blurb__timeline__item rounded--box--shadow">
            <p>Worked as a Web Application Developer at Intrepid Learning Inc. for 3 Years</p>
            <p>April 2013 through May 2016</p>
            <PictureWithSources largeSource={"/images/intrepid.jpg"} smallSource={"/images/intrepid.jpg"} />
          </div>
          <div className="blurb__timeline__item rounded--box--shadow">
            <p>Currently working at Expedia Group Inc.</p>
            <p>May 2016 through present</p>
            <PictureWithSources largeSource={"/images/expedia.png"} smallSource={"/images/expedia.png"} />
          </div>
        </div>
      </Fragment>
    );
  }