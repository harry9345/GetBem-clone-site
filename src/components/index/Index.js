import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import "../../App.css";

export default function Index() {
  return (
    <div>
      <div className="header">
        <Navbar active="index" />
        <img src="../../asset/b(1).svg" alt="" />
      </div>

      <div className="index">
        <div className="description">
          BEM — Block Element Modifier is a methodology that helps you to create
          reusable components and code sharing in front-end development
        </div>
        <div className="container" style={{ marginBottom: "50px" }}>
          <div className="row">
            <div className="column">
              <div className="advantage advantage--block">
                <h2>Easy</h2>
                <div>
                  To use BEM, you only need to employ BEM’s naming convention.
                </div>
              </div>
            </div>
            <div className="column">
              <div className="advantage advantage--element">
                <h2>Modular</h2>
                <div>
                  Independent blocks and CSS selectors make your code reusable
                  and modular.
                </div>
              </div>
            </div>
            <div className="column">
              <div className="advantage advantage--modifier">
                <h2>Flexible</h2>
                <div>
                  Using BEM, methodologies and tools can be recomposed and
                  configured the way you like.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="panel panel--introduction">
          <div className="panel__container">
            <a href="/introduction/">
              <img src="/assets/ic1.svg" alt="ic1" />
            </a>
            <h2>
              <a href="/introduction/">Introduction</a>
            </h2>
            <p>
              BEM is a highly useful, powerful, and simple naming convention
              that makes your front-end code easier to read and understand,
              easier to work with, easier to scale, more robust and explicit,
              and a lot more strict.
            </p>
          </div>
        </div>
        <div className="panel panel--naming">
          <div className="panel__container">
            <a href="/naming/">
              <img src="/assets/ic2.svg" alt="ic2" />
            </a>
            <h2>
              <a href="/naming/">Naming</a>
            </h2>
          </div>
          <p>
            The BEM approach ensures that everyone who participates in the
            development of a website works with a single codebase and speaks the
            same language. Using BEM’s proper naming convention will better
            prepare you for design changes made to your website.
          </p>
        </div>

        <div className="panel panel--questions">
          <div className="panel__container">
            <a href="/faq/">
              <img src="/assets/ic3.svg" alt="ic3" />
            </a>
            <h2>
              <a href="/faq/">FAQ</a>
            </h2>
            <div>
              <p>
                <i>
                  —{" "}
                  <a href="/faq/#custom-tags-for-blocks">
                    Why do I need CSS classNamees for block instead of using
                    semantic custom tags?
                  </a>
                </i>
              </p>
              <p>
                <i>
                  —{" "}
                  <a href="/faq/#encapsulating-tag-selector">
                    May I combine a tag and a className in a selector, such as
                    button.button?
                  </a>
                </i>
              </p>
              <br />
              <p>
                Look for answers in the awesome <a href="/faq/">FAQ list</a>!
              </p>
            </div>
          </div>
        </div>
        <div className="panel panel--companies">
          <div className="panel__container">
            <h2>Companies using BEM</h2>
            <ul>
              <li>
                <a href="https://yandex.com" title="Yandex">
                  <img alt="som" src="/assets/yandex.png" />
                </a>
              </li>
              <li>
                <a href="http://www.jetbrains.com" title="JetBrains">
                  <img alt="som" src="/assets/jetbrains.png" />
                </a>
              </li>
              <li>
                <a href="http://factory.mn" title="Manufactura">
                  <img alt="som" src="/assets/manufactura.png" />
                </a>
              </li>
              <li>
                <a href="http://eu.ideus.biz" title="iDeus">
                  <img alt="som" src="/assets/ideus.png" />
                </a>
              </li>
              <li>
                <a href="http://alfabank.com" title="Alfa-Bank">
                  <img alt="som" src="/assets/alfabank.png" />
                </a>
              </li>
              <li>
                <a href="http://edster.ru" title="Edster">
                  <img alt="som" src="/assets/edster.png" />
                </a>
              </li>
              <li>
                <a href="http://www.wimdu.com" title="Wimdu">
                  <img alt="som" src="/assets/wimdu.png" />
                </a>
              </li>
              <li>
                <a href="http://megafon.com" title="Megafon">
                  <img alt="som" src="/assets/megafon.svg" />
                </a>
              </li>
              <li>
                <a href="http://decaf.de" title="Decaf">
                  <img alt="som" src="/assets/decaf.png" />
                </a>
              </li>
              <li>
                <a href="http://epam.com" title="EPAM">
                  <img alt="som" src="/assets/epam.svg" />
                </a>
              </li>
              <li>
                <a href="https://renuo.ch" title="Renuo">
                  <img alt="som" src="/assets/renuo.png" />
                </a>
              </li>
              <li>
                <a
                  className="panel--companies__add-button"
                  href="https://github.com/getbem/getbem.com/issues/1"
                  title="Add your company"
                >
                  <img
                    src="/assets/ic_add_circle_outline_white_24px.svg"
                    alt="s"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
