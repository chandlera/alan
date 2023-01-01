/** @jsx h */
import { h, Fragment } from "../../deps.ts";

export default function Contact() {
    return (
      <Fragment>
       <div class="blurb__left rounded--inset--box--shadow">
          <img src="/images/me.png" alt="Picture of me" width="200px" style={{maxWidth: '300px'}} />
        </div>
        <div class="blurb__center rounded--box--shadow">
          <h1 class="light--font">Alan Chandler</h1>
          <h2 class="light--font">Web Developer</h2>  
          <p>
            Self-driven Web Developer with five years of experience. Engages clients and collaborates well with team members to deliver
            quality, industry-leading products. Outgoing professional ready to learn and lead in a friendly culture.
          </p>
        </div>
        <div class="blurb__right rounded--inset--box--shadow">
          <table>
            <tbody>
              <tr>
                <td><strong>LinkedIn</strong></td>
                <td><a class="anchor" href="https://www.linkedin.com/in/alanchandler718">alanchandler718</a></td>
              </tr>
              <tr>
                <td><strong>Email</strong></td>
                <td><a href="mailto:chandlera718@gmail.com">chandlera718@gmail.com</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }