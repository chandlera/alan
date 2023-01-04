/** @jsx h */
import { h } from "../../deps.ts";
import PictureWithSources from "./picture-with-sources.tsx";

export default function Projects() {
    return (
      <section className="blurb_left">
        <h1>Projects I have made and am currently working on</h1>
        
        <div className="blurb__timeline">
          <div className="blurb__timeline__item rounded--box--shadow">
            <p>A website I made for my <a href="https://www.chandler-family.org/">family reunions</a>.</p>
            <PictureWithSources largeSource={"/images/chandler_reunions.png"} smallSource={"/images/chandler_reunions.png"} />
          </div>
          <div className="blurb__timeline__item rounded--box--shadow">
            <p>A website I made for my wedding.</p>
            <PictureWithSources largeSource={"/images/wedding_website.png"} smallSource={"/images/wedding_website.png"} />
          </div>
          <div style={{display: 'none'}} className="blurb__timeline__item rounded--box--shadow">
            <div>
              <h6>Ascii :before heart render using content css attribute</h6>
              I
              <span className="heart-one"></span> you.
              <hr />
            </div>
            <div>
              <h6>Heart render using css :before and :after with two circles and a triangle</h6>
              I
              <span className="heart-two"></span> you.
              <hr />
            </div>
            <div>
              <h6>SVG Heart with transform</h6>
              I
              <svg className="heart-three" viewBox="0 0 32 29.6">
                <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
            c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" />
              </svg>
              You
            </div>
          </div>
        </div>
      </section>
    );
  }