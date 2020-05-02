import React from 'react';
import Helmet from 'react-helmet';
import Face from '../assets/images/avatar.jpg';
import Layout from '../components/layout';

function HomeIndex() {
  const siteTitle = 'Cooper Cain';
  const siteDescription = 'Small personal site';

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <link rel="shortcut icon" type="image/x-icon" href={Face} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              Hello! I&apos;m Cooper Cain, a Frontend Engineer passionate about
              creating delightful user experiences.
            </h2>
          </header>
          <p>
            With a background in Informatics (focusing in HCI) from the
            University of Washington and working professionally since 2017, I am
            well versed in creating applications that delight users. I have
            experience working with React, Redux and Next.js as well as some
            experience building APIs in Golang and Node. In my free time I like
            to hike, exercise, and play D&amp;D.
          </p>
        </section>

        {/* Can add once we have projects to show */}
        {/* <section id="two">
          <h2>Recent Work</h2>

          <Gallery
            images={DEFAULT_IMAGES.map(
              ({ id, source, thumbnail, caption, description }) => ({
                source,
                thumbnail,
                caption,
                description,
              })
            )}
          />

          <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Portfolio
              </a>
            </li>
          </ul>
        </section> */}

        <section id="three">
          <h2>Get In Touch</h2>
          <p>
            I&apos;m open to talk to anyone. Whether you have a project you want
            to talk about, or just want to chat, feel free to reach out.
          </p>
          <div className="row">
            <div className="7u 12u$(small)">
              <form method="POST" action="https://formspree.io/xaypyyjd">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    />
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="5u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  Seattle, WA
                  <br />
                  United States
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="mailto:cooper@coopercc.me">cooper@coopercc.me</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default HomeIndex;
