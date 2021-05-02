import React from "react";

import Layout from "../components/Layout";

import sports from "../assets/images/running.svg";
import surfing from "../assets/images/browsing.svg";
import music from "../assets/images/music-player.svg";
import gadget from "../assets/images/tablet.svg";
import travel from "../assets/images/trekking.svg";
import ai from "../assets/images/ai.svg";
import scikit from "../assets/images/scikit.svg";
import seaborn from "../assets/images/seaborn.svg";
import opencv from "../assets/images/opencv.svg";
import git from "../assets/images/git.svg";
import postgres from "../assets/images/postgres.svg";
import django from "../assets/images/django.svg";
import tf from "../assets/images/tensorflow.svg";
import spark from "../assets/images/spark.svg";
import gcp from "../assets/images/gcp.svg";
import aws from "../assets/images/aws.svg";
import java from "../assets/images/java.svg";
import python from "../assets/images/python.svg";
import nlp from "../assets/images/nlp.svg";
import dl from "../assets/images/dl.svg";
import ml from "../assets/images/ml.svg";
import keras from "../assets/images/keras.svg";
import matplotlib from "../assets/images/matplotlib.svg";
import numpy from "../assets/images/numpy.svg";
import pandas from "../assets/images/pandas.svg";
import torch from "../assets/images/pytorch.svg";

// import { Link } from 'gatsby';
import Sidebar from "../components/Sidebar";
import config from "../../config";
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            A Passionate Machine Learning Developer with nearly 4 years of
            experience in building ML models for various industries targeting
            healthcare, banking and ecommerce. Expertise in Time Series
            analysis, clustering & classification, web scraping, data analysis
            and visualization. Started as an Individual contributor, Currently
            leading a team of 4 members and is a key architect in developing
            Machine Learning solutions. Flexible and versatile to adapt to new
            environments and technologies. Strong communication, interpersonal,
            learning and organizing skills matched with the ability to manage
            the stress and time effectively.
          </p>
          <div className="social-icons">
            {config.socialLinks.map((social) => {
              const { icon, url } = social;
              return (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item ai">
              <a
                href="https://en.wikipedia.org/wiki/Artificial_intelligence"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ai} className="item" alt="AI" />
              </a>
            </li>
            <li className="list-inline-item dl">
              <a
                href="https://en.wikipedia.org/wiki/Deep_learning"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={dl} className="item" alt="Deep Learning" />
              </a>
            </li>
            <li className="list-inline-item nlp">
              <a
                href="https://en.wikipedia.org/wiki/Natural_language_processing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={nlp} className="item" alt="NLP" />
              </a>
            </li>
            <li className="list-inline-item ml">
              <a
                href="https://en.wikipedia.org/wiki/Machine_learning"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ml} className="item" alt="Machine Learning" />
              </a>
            </li>
            <li className="list-inline-item numpy">
              <a
                href="https://numpy.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={numpy} className="item" alt="Numpy" />
              </a>
            </li>
            <li className="list-inline-item pandas">
              <a
                href="https://pandas.pydata.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={pandas} className="item" alt="Pandas" />
              </a>
            </li>
            <li className="list-inline-item matplotlib">
              <a
                href="https://matplotlib.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={matplotlib} className="item" alt="Matplotlib" />
              </a>
            </li>
            <li className="list-inline-item seaborn">
              <a
                href="https://seaborn.pydata.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={seaborn} className="item" alt="Seaborn" />
              </a>
            </li>
            <li className="list-inline-item tf">
              <a
                href="https://www.tensorflow.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={tf} className="item" alt="TensorFlow" />
              </a>
            </li>
            <li className="list-inline-item keras">
              <a
                href="https://keras.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={keras} className="item" alt="Keras" />
              </a>
            </li>
            <li className="list-inline-item torch">
              <a
                href="https://pytorch.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={torch} className="item" alt="PyTorch" />
              </a>
            </li>
            <li className="list-inline-item django">
              <a
                href="https://www.djangoproject.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={django} className="item" alt="Django" />
              </a>
            </li>
            <li className="list-inline-item python">
              <a
                href="https://www.python.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={python} className="item" alt="Python" />
              </a>
            </li>

            <li className="list-inline-item gcp">
              <a
                href="https://cloud.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gcp} className="item" alt="GCP" />
              </a>
            </li>
            <li className="list-inline-item aws">
              <a
                href="https://aws.amazon.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={aws} className="item" alt="AWS" />
              </a>
            </li>
            <li className="list-inline-item java">
              <a
                href="https://www.java.com/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={java} className="item" alt="Java" />
              </a>
            </li>
            <li className="list-inline-item postgres">
              <a
                href="https://www.postgresql.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={postgres} className="item" alt="Postgres" />
              </a>
            </li>
            <li className="list-inline-item spark">
              <a
                href="https://spark.apache.org/docs/latest/api/python/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={spark} className="item" alt="Spark" />
              </a>
            </li>
            <li className="list-inline-item opencv">
              <a
                href="https://opencv.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={opencv} className="item" alt="OpenCV" />
              </a>
            </li>
            <li className="list-inline-item git">
              <a
                href="https://git-scm.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={git} className="item" alt="Git" />
              </a>
            </li>
            <li className="list-inline-item scikit">
              <a
                href="https://scikit-learn.org/stable/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={scikit} className="item" alt="SkLearn" />
              </a>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Develop highly scalable, cross browser compatible and WCAG
              complaint applications
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Consulting and troubleshooting support for all the adoption teams
              in the department.
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Monitoring website performance and rectifying front-end-related
              issues and providing hotfixes for clients.
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Participation in Code reviews and Design discussions.
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Developing utilities and generic reusable solutions used across
              applications
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>

            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards</h2>
          <ul className="fa-ul mb-0">
            <li className="mb-3">
              <i className="fa-li fa fa-trophy text-warning"></i>
              <b>Best performer of the team</b> –{" "}
              <b>
                <span className="text-primary">Q4’20.</span>
              </b>
            </li>
            <li className="mb-3">
              <i className="fa-li fa fa-trophy text-warning"></i>
              <b>Won people's choice award.</b> –
              <b>
                <span className="text-primary">
                  Resource Management using AI.
                </span>
              </b>
            </li>
            <li className="mb-3">
              <i className="fa-li fa fa-trophy text-warning"></i>
              <b>Best performer of the team</b> –{" "}
              <b>
                <span className="text-primary">Q2’19.</span>
              </b>
            </li>
            <li className="mb-3">
              <i className="fa-li fa fa-trophy text-warning"></i>
              <b>STAR Award</b> –{" "}
              <b>
                <span className="text-primary">
                  For driving the EPIC effectively.
                </span>
              </b>
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">PROFESSIONAL EXPERIENCE</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <p style={{ marginBottom: "0px" }}>
                <b>Brane Enterprises, Hyderabad – </b> Sr. Machine Learning
                Developer{" "}
              </p>
              <p className="date_grey_bold">Nov 2020 - PRESENT</p>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between ">
            <div className="resume-content">
              <p style={{ marginBottom: "0px" }}>
                <b>Pegasystems, Hyderabad – </b> Machine Learning Developer{" "}
              </p>
              <p className="date_grey_bold">July 2017 – June 2020</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="project_profile"
      >
        <div className="w-100">
          <h2 className="mb-5">Project profile</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">
                Brane Enterprises, Hyderabad -{" "}
                <span className="text-primary">
                  Sr. Machine Learning Developer
                </span>
              </h3>
              <p>
                <b>Skills Used:</b> NLP, Web scraping, ARIMAX, SARIMAX,
                Infersent, Python, Django, Faiss indexing, FAST API, Matplotlib,
                Seaborn, PCA.
              </p>
              <p>
                <b>Projects:</b> Predictive Analytics, Measure Generation,
                Analytics Engine.
              </p>
              <p>
                <b>Roles and Responsibilities:</b>
                <ul>
                  <li>
                    Developed the base architecture combining both generated and
                    library measures.
                  </li>
                  <li>
                    Analysed ARIMAX, SARIMAX models for recommending relevant
                    business analytics.
                  </li>
                  <li>
                    Improved the measure recommendation relevancy using NLP
                    techniques.
                  </li>
                  <li>
                    Complete integration of ML models using FAST API and Django.
                  </li>
                  <li>Automated the ETL(extract, transform, load) process.</li>
                  <li>
                    Curated thousands of records of measures using Web scraping.
                  </li>
                  <li>
                    Used FAISS indexing to improve the performance of Nearest
                    neighbours search.
                  </li>
                  <li>
                    Automation script for testing the flow with bulk no. of use
                    cases.
                  </li>
                  <li>
                    Using Matplotlib, Seaborn developed the Analytical
                    dashboard.
                  </li>
                  <li>
                    Implemented the caching mechanism for performance
                    optimization.
                  </li>
                  <li>
                    Collaborated with various stakeholders in integrating the
                    Analytical engine with platform.
                  </li>
                  <li>
                    Lead & mentored a team of 4 members in improving the code
                    quality and reusability.
                  </li>
                  <li>
                    Single point of contact for the entire Analytical engine.
                  </li>
                  <li>
                    Review the code and ensure proper best practices are
                    followed across the products.
                  </li>
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="date_grey_bold">June 2020 – Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">
                Pegasystems, Hyderabad -{" "}
                <span className="text-primary">Machine Learning Developer</span>
              </h3>
              <p>
                <b>Skills Used:</b> Recurring Neural networks, NLP, LSTM ,
                Support Vector Machines, Random Forest, Logistic regression,
                ARIMA, Market Basket Analysis.
              </p>
              <p>
                <b>Projects:</b> Chatbot for a banking company, Loan approvals
                estimation, Sales Prediction.
              </p>
              <p>
                <b>Roles and Responsibilities:</b>
                <ul>
                  <li>
                    Carried out data extraction and data manipulation using
                    Python, Spark ,SQL tools.
                  </li>
                  <li>
                    Handled the word embedding mechanisms like tokenizing,
                    stemming, and lemmatization.
                  </li>
                  <li>Built the Seq2Seq Neural network using Tensor flow.</li>
                  <li>
                    Applied boosting algorithms like bi-directional LSTMs,
                    bucketing to improve the bot performance.
                  </li>
                  <li>
                    Predicted the Default and Non-default customers in the next
                    3 months with 95% accuracy using the ML algorithms like
                    Logistic regression, Decision trees and Random forest.
                  </li>
                  <li>
                    Validated the test data using techniques like AUC,
                    Sensitivity, Specificity, F1-Score, Decile analysis.
                  </li>
                  <li>
                    Applied boosting algorithms like Adaboost, XGBoost to
                    improve the performance.
                  </li>
                  <li>
                    Market Basket Analysis: Used the partner data to develop
                    market baskets predicting the likelihood of products being
                    purchased together and customize offers to cross sell the
                    products .
                  </li>
                  <li>
                    Data Visualization using MATPLOTLIB, and ARIMA time series
                    model for forecasting the sales
                  </li>
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="date_grey_bold">July 2017 – June 2020</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="pilot_projects"
      >
        <div className="w-100">
          <h2 className="mb-5">Pilot projects</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <p>
                <b>Covid 19 Chatbot</b> – built using Google dialog flow, Flask,
                Heroku.{" "}
                <a
                  href="https://sangeethayemisetty.github.io/Covid-19-Chatbot/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>Git URL</b>
                </a>
              </p>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between ">
            <div className="resume-content">
              <p>
                <b>Netflix recommendation</b> – built using XG Boost and
                clustering{" "}
                <a
                  href="https://sangeethayemisetty.github.io/Netflix-Movie-Recommendation-System/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>Git URL</b>
                </a>
              </p>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between ">
            <div className="resume-content">
              <p>
                <b>Self-driving Car</b> – built using OpenCV and Tensor flow{" "}
                <a
                  href="https://sangeethayemisetty.github.io/Self-Driving-Car/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>Git URL</b>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education_interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-start mb-5">
            <div className="resume-content">
              <h3 className="mb-0" style={{ paddingRight: "236px" }}>
                BITS, Pilani
              </h3>
              <div className="subheading mb-3">
                Pursuing Master of Technology
              </div>
              <div>Data Science &amp; Engineering </div>
            </div>
            <div className="resume-date text-md-right">
              <b>
                <span className="text-primary">November 2020 - PRESENT</span>
              </b>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-start mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Vasavi College of Engineering</h3>
              <div className="subheading mb-3">Bachelor of Engineering</div>
              <div>Computer Science &amp; Engineering - 82%</div>
            </div>
            <div className="resume-date text-md-right">
              <b>
                <span className="text-primary">July 2013 - May 2017</span>
              </b>
            </div>
          </div>

          <h2 className="mb-5">Interests</h2>
          <ul className=" mb-0 interest-item-wrapper">
            <li className="mb-3 interest-item">
              <img src={sports} className="item" alt="sports" />
              <p className="pl-3">Sports</p>
            </li>
            <li className="mb-3 interest-item">
              <img src={surfing} className="item" alt="sports" />
              <p className="pl-3">Browsing Internet</p>
            </li>
            <li className="mb-3 interest-item">
              <img src={music} className="item" alt="sports" />
              <p className="pl-3">Listening Music</p>
            </li>
            <li className="mb-3 interest-item">
              <img src={gadget} className="item" alt="sports" />
              <p className="pl-3">
                Gadgets{" "}
                <span role="img" aria-label="love">
                  ❤️
                </span>
              </p>
            </li>
            <li className="mb-3 interest-item">
              <img src={travel} className="item" alt="sports" />
              <p className="pl-3">Travelling</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
