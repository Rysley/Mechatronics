"use strict";

const navBar = document.querySelector(".nav_bar");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const projectContainer = document.querySelector(".courses");
const highlightsText = document.querySelector(".highlights__main");
const highlightsBtns = document.querySelector(".highlights__misc");
const projectText = document.querySelector(".project_markup");
const btnSubmit = document.querySelector(".btn_submit");

//////////// MARKUPS ////

const coursesMarkups = {
  mecha: `
  <h2 class='highlights__text_element'>MECHATRONICS</h2>
  <p class='highlights__text_element'>Mechatronics (the word comes from the combination of the terms mechanics and electronics) is a field of science that integrates mechanics, electronics, automation, computer science, and other technical and non-technical areas. It integrates some of the more difficult sciences, which is why it is becoming more popular in the labor market.
  </p>
    <p class='highlights__text_element'>Thanks to its reliable features and simplicity of use, mechatronics has significantly relieved humans of many difficult tasks</p>
    
    <h5 class='highlights__text_element'>Mechatronic is something that we are facing in everyday life,
    thanks to it was created among other:</h5>
    <ul>
    <li><p class='highlights__text_element'>robots, for example robot ,,da Vinci” – used in medicine</p></li>
    
    <li><p class='highlights__text_element'>automatically opening doors</p></li>
    
    <li><p class='highlights__text_element'>automatic barrier (at the entrance to the parking, at rail crossings)</p></li>
    
    <li><p class='highlights__text_element'>traffic lights</p></li>
   `,
  elraCAN: `<h2 class='highlights__text_element'>ELRASOFT – CAN</h2>
  <p class='highlights__text_element'>CAN bus analyzer (Elrasoft)</p>

  <p class='highlights__text_element'>This training has to show how look like transering information in CAN, how systems respond to and answer questions about various physical quantities and how they and how they answer them.</p>
  
  <p class='highlights__text_element'>Our task is to present an environment for creating scripts in Visual Pascal language, the knowledge of which helps in reading data transmitted on CAN bus.</p>
  <a class="course__button button" target="_blank" rel="noopener noreferrer" href="http://quality-education.eu/courses/"><span>Sign Up</span></a>`,
  elraProg: `<h2 class='highlights__text_element'>ELRASOFT – PROGRAMMER</h2>

  <p class='highlights__text_element'>Device and memory programmer – Elrasoft</p>

<p class='highlights__text_element'>Currently, all mechatronic modules are built on processors, which can collect information in real-time and respond to external commands. During this classes will be discussed about different ways of reading the collected information using the Elrasoft programmer. This programmer has a built-in environment for writing scripts in Visual Pascal that support the work. Our task (during these classes) will be to combine the skiils to read data with learning programming.</p>
<a class='course__button button' target="_blank" rel="noopener noreferrer" href='http://quality-education.eu/courses/'><span>Sign Up</span></a>`,
  arduino_1: `<h2 class='highlights__text_element'>ARDUINO COURSE I</h2>
  <p class='highlights__text_element'>Arduino – measuring and digitizing various physical objects.</p>

  <p class='highlights__text_element'>In this course, using the Arduino module and a specially prepared kit for measuring physical values (voltage, current, vibration, temperature, humidity, time, motion sensor, distance, tilt, magnetic switch, magnetic field sensors, infrared receiver) the student learns how to convert these physical quantities into a language understood by the components and integrated circuits.</p>
  <a class='course__button button' target="_blank" rel="noopener noreferrer" href='http://quality-education.eu/courses/'><span>Sign Up</span></a>`,
  arduino_2: `<h2 class='highlights__text_element'>ARDUINO COURSE II</h2>
   <p class='highlights__text_element'>Arduino – read and write numerical data from integrated circuits</p>

  <p class='highlights__text_element'>In this course, the student will expand their knowledge about the transfer of information to integrated circuits, whose task is to collect and store results, using i2c, spi and microwire buses.</p>
  <a class='course__button button' target="_blank" rel="noopener noreferrer" href='http://quality-education.eu/courses/'><span>Sign Up</span></a>`,
  arduino_3: `<h2 class='highlights__text_element'>ARDUINO COURSE III</h2>
  <p class='highlights__text_element'>Arduino – CAN network</p>

  <p class='highlights__text_element'>This course is designed for those who want to learn the secrets related to the transmission of information using CAN bus. CAN bus was created to exchange information between modules in cars, streetcars, elevators. The class will describe and explain how to construct appropriate questions asking about basic physical quantities (speed, acceleration, temperature, pressure)</p>
  <a class='course__button button' target="_blank" rel="noopener noreferrer" href='http://quality-education.eu/courses/'><span>Sign Up</span></a>`,
};

const projectMarkups = {
  about_project: `<p>During the needs analysis, which we conducted together with our partners, we examined the needs of students. We came to the joint conclusion that such a forward-looking direction which is mechatronics requires intensified work at the school level as well as providing additional development opportunities.</p> 
  <p>The needs of students result from the insufficient level of education in technical schools and the lack of necessary educational tools. Our project in its innovative form will allow students with fewer opportunities to acquire skills and qualifications that are unattainable due to the lack of sufficient financial support from parents and the school. Less opportunities often result from amuch lower level of education offered by schools in smaller towns.</p>

  <p>During the project, an on-line platform will be developed:</p>
  <p>– containing courses,</p>
  <p>– tutorials, instructions,</p>
  <p>– a forum for exchanging experiences,</p>
  <p>– lesson plans,</p>
  <p>– teaching materials for independent work of the student.</p>
  
  <p>The platform will be developed during the next stages of the project (user needs analysis, implementation of demo version, tests, feedback) from users, usability and substantive research) so that our final result is the culmination of the work of experts, users and other people taking participation in the venture.</p>`,
  directed_to: `<p>Prepared online vocational courses are primarily addressed to:</p>
  <p>vocational school students (who are studying in mechatronics and want to apply for a place in mechatronics studies),
  for students who want to make up for their educational shortcomings,
  for people who want to improve their competences in work related to mechatronics,
  for people interested in improving their qualifications getting a job in a profession where mechatronics knowledge is used</p>`,
  purpose: `<p>Develop skills in the field of mechatronics using innovative methods.
  Develop an innovative educational tool – an online platform that will enable students to acquire new competences, knowledge and practical professional experience in the field of mechatronics.</p>
  <p>Expanding contacts and exchanging experience with teachers and students from other EU countries</p>`,
  benefits: `<p>The project assumes, among others, conducting a programming course on the basis of which platform users will master the issues of operating data reading equipment, e.g. counters that will allow them to move on to the next stages of the course, including CAN support, and then to write programs that will combine and handle the data they collect andmessages.</p>

  <p>Trainings and courses will be divided into short theoretical lessons during which issues to be learned in the form of films, descriptions and presentations will be presented. Undergoing training for users with the knowledge necessary to pass the course. The courses will be divided into lessons during which students will take courses and pass them in stages. The courses are focused on acquiring practical knowledge. During the course, everyone will have to create a prototype root or other device.</p>`,
  about_us: `<p>
  The Center for Education and Civic Entrepreneurship Foundation is a non-governmental organization whose priority is to support cooperation between various types of organizations and institutions in the field of international activities, educational classes, conferences and trainings. Trainings organized by the Foundations primarily support professional and personal development. All activities carried out by the Foundation are based on informal learning methods. The goals of the Foundation’s are similar with the strategic goals set by the Erasmus Plus program, i.e. increasing attractiveness, improving the quality of education and training, and increasing the number of professional and training trips. For several years, the Foundation’s activities have also focused on developing cooperation between institutions involved in education.</p>
  
  <p>The Foundation is a partner of a network of local companies and is actively involved in EU projects that support educational activities related to raising social and professional competences.</p>
  
  <p>The Center for Education and Civic Entrepreneurship Foundation actively participates in the implementation of Polish and international projects related to raising social competences and professional qualifications of various social groups: pupils, students, employees of small and medium-sized enterprises. Thanks to the extensive network of contacts with foreign partners, the Foundation is able to organize the best internships and trainings, as well as increase the professional competence of participants, as well as organize visits to companies / organizations, specialist seminars and workshops, language courses and cultural programs. The solutions prepared and offered are always tailored to the individual needs of the participants. The Foundation works closely with vocational education institutions, companies and NGOs sharing knowledge and experience in the field of conducting educational activities. Foundation also cooperates with vocational schools by organizing trainings for students and teachers, sharing good practices in education and training. The Foundation’s activities in this area significantly affect the improvement of the quality of education and international cooperation between institutions.</p>
  
  <p>The foundation is experienced in the implementation of Erasmus + projects both as a beneficiary and partner. So far, Foundation completed 20 projects financed from EU funds. The Foundation’s employees and associates have a lot of experience in organizing and conducting educational workshops and seminars promoting individual entrepreneurship, as well as training in strengthening social and professional competences. Foundation employees implementing projects under the Erasmus + program and other EU programs have gained experience in organization, coordination of activities as well as proper monitoring and evaluation. The employees of the Foundation are people experienced in education – academic teachers and trainers of vocational schools, who specialize in the fields of the labor market, education and vocational training in their current work, including research.</p>`,
  erasmus_plus: `<p>Our project is implemented under the Erasmus + Vocational Education and Training program.</p>

  <p>The aim of the Programme is to improve the quality of vocational and continuing education.</p>
  
  <p>Our project is implemented under the Erasmus + Vocational Education and Training program.</p>
  
  <p>The program aims to improve the quality of vocational and continuing education.</p>
  
  <p>In the project implemebted under the Erasmus + Programme can take part students, graduates as well as teachers of practical vocational training, management staff of educational institutions, trainers, coaches and employees on the European labour market.</p>
  
  <p>The project will help to implement innovative educational solutions, supports solutions that increase transparency and recognition of professional qualifications.</p>
  
  <a target="_blank" rel="noopener noreferrer" href="https://erasmusplus.org.pl/sektory?sector=2" style="padding-left: 1rem">erasmusplus.org.pl</a>
  
  <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ZawodowyErasmus" style="padding-left: 1rem">facebook.com/ZawodowyErasmus</a>
  `,
};

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function (e) {
  e.preventDefault();
  clearModal();
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const renderMarkup = function (parentEl, markup) {
  parentEl.innerHTML = "";
  parentEl.insertAdjacentHTML("afterbegin", markup);
};

const fadeInElement = function (el) {
  if (
    !(
      el.classList.contains("fade-in-image") ||
      el.classList.contains("fade-in-image2")
    )
  ) {
    el.classList.add("fade-in-image");
  }

  el.classList.toggle("fade-in-image");
  el.classList.toggle("fade-in-image2");
};

highlightsBtns.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".highlights__misc_container");
  if (!clicked) return;
  const courseMarkup = coursesMarkups[clicked.id];
  const parentEl = highlightsText;
  const parentElMobile = clicked.querySelector(".highlights__main_mobile");
  const readMeContainer = clicked.querySelector(".read_me_cont");
  console.log(parentElMobile);

  if (!clicked.classList.contains(".highlights__misc_container")) {
    [...clicked.parentElement.children].forEach((btn) => {
      btn.classList.remove("highlight-active");
      btn.classList.remove("highlights__main_mobile");
      btn.querySelector(".highlights__main_mobile").innerHTML = "";
      clicked.classList.add("highlight-active");
      if (btn.querySelector(".read_me_cont").classList.contains("hidden_2")) {
        console.log(btn.querySelector(".read_me_cont"));
        btn.querySelector(".read_me_cont").classList.remove("hidden_2");
      }
    });
  }

  readMeContainer.classList.add("hidden_2");
  fadeInElement(parentEl);
  renderMarkup(parentEl, courseMarkup);
  renderMarkup(parentElMobile, courseMarkup);
});

projectContainer.addEventListener("click", function (e) {
  /*  e.preventDefault(); */
  const clicked = e.target.closest(".courses__subject");
  if (!clicked) return;
  const textArea = clicked.querySelector(".project_markup");
  const subtitle = clicked.querySelector(".project_subtitle");
  const image = clicked.querySelector(".landscape");
  const projectMarkup = projectMarkups[clicked.id];

  if (!clicked.classList.contains(".courses__subject")) {
    [...clicked.parentElement.children].forEach((projElement) => {
      projElement.classList.remove("courses__subject-active");
      projElement
        .querySelector(".landscape")
        .classList.remove("courses__img-active");
      projElement.querySelector(".project_subtitle").classList.remove("hidden");
      projElement.querySelector(".project_markup").innerHTML = "";
      projElement
        .querySelector(".courses__subject_text")
        .classList.remove("courses__text-active");
    });

    clicked.classList.add("courses__subject-active");
    clicked.querySelector(".landscape").classList.add("courses__img-active");
    clicked
      .querySelector(".courses__subject_text")
      .classList.add("courses__text-active");
  }

  const scroll = function () {
    clicked.scrollIntoView(true);
  };

  setTimeout(scroll, 500);
  subtitle.classList.add("hidden");

  fadeInElement(textArea);
  fadeInElement(image);

  renderMarkup(textArea, projectMarkup);
});

btnsOpenModal.forEach((node) => node.addEventListener("click", openModal));
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

////////////////////////////
// MODAL FORM VALIDATION //

const getChildrenOfElement = (element) =>
  document.querySelectorAll(`.${element} > .input`);
const objInputID = {};
const childrenIDs = getChildrenOfElement("modal__form").forEach(
  (el) => (objInputID[el.id] = "")
);

const clearModal = () =>
  Object.entries(objInputID).forEach(
    (el) => (document.getElementById(el[0]).innerHTML = "")
  );

const validateContent = (inputID) =>
  Boolean(document.getElementById(inputID).value);

const finalValidation = (validationsArr) => validationsArr.every((val) => val);

const resetInputField = function (id) {
  document.getElementById(id).style.borderColor = "#ddd";
  document.getElementById(id).style.backgroundColor = "E8F0FE";
};

const submitValidation = function (e) {
  const invalidInputs = [];

  Object.entries(objInputID).forEach((id) => {
    resetInputField(id[0]);
    objInputID[id[0]] = validateContent(id[0]);

    if (!validateContent(id[0])) invalidInputs.push([id[0]]);
  });

  if (Object.values(objInputID).every((value) => value)) {
    console.log("execute the submit AND some user success info HERE");
    closeModal();
  } else {
    e.preventDefault();
    invalidInputs.forEach((err) => {
      document.getElementById(err).style.borderColor = "red";
    });
  }
};

btnSubmit.addEventListener("click", submitValidation);

/* const validateType = function (inputID) {
  const inputValue = document.getElementById(inputID).value;

  if (typeof inputValue !== "string") {
    console.log(`Input field $${inputID} is not a string`);
    return false;
  }

  if (typeof inputValue === "string") return true;
}; */
