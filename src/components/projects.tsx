/** @jsx h */
import { h, Fragment } from "../../deps.ts";

export default function Projects() {
    return (
      <Fragment>
        <section>
          <h6>Website for my wedding</h6>
          
          <div>
            
          </div>
        </section>
        <div id="drawing">
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
        <div id="svg">
        <h6>randomly generated color wheels</h6>
        <br />
      </div>
      </Fragment>
    );
  }