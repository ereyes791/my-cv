import React, {Component} from 'react';
import Skill from './skill';
import Timeline from './timeline';
import Interest from './interest';
import References from './reference';
import Network from './network'

class CV extends Component {


    render() {
        return (
            <div className="row CV">



                <div className="col-12 img col-sm-4">
                    <img  width="100%"   src={process.env.PUBLIC_URL+ '/me.png'} alt=""/>

                </div>
                <div className="col-sm-8 col-12 name-top">
                    <div className="row">
                        <div className="col-9">
                            <h2 className="top-name"> ESTEBAN SAMUEL</h2>
                            <h1 className="top-name"><b>REYES BRITO</b></h1>

                        </div>
                        <div className="col-3 lang" align="right">
                            <ul className="languagepicker roundborders">
                                <a href="https://ereyes791.github.io/my-cv/#/my-cv">
                                    <li><img src="http://i64.tinypic.com/fd60km.png"/>English</li>
                                </a>
                                <a href="https://ereyes791.github.io/my-cv/#/my-cv-es">
                                    <li><img src="http://i68.tinypic.com/avo5ky.png"/>Español</li>
                                </a>
                            </ul>

                        </div>
                    </div>
                    <h2 className="name">Computer Science & Full Stack Developer </h2>
                    <h4 align="justify">My name is Esteban S Reyes, I am from Venezuela and I am passionate
                        about Programming and Mathematics. Since 2012, I have been studying as a
                        Computer Science major and, currently, I am in the degree's final phase with the
                        development of my thesis or “Industrial Project” as it’s called  in my University,
                        this was in conjunction with a  company called StartCoaching. My thesis will be completed
                        in November of this year. I approach this project as an important step to combine two great
                        areas that complement me as a professional: computer science, and coaching others.
                        <br/>
                        Three years ago I entered the world of full stack web development at the Academia Hack school.
                        A year ago, I started my training to become an entrepreneur and innovation coach with the
                        StartCoaching Company. This year I participated in Bogota Dev Bootcamp to improve my skills
                        as a full stack web developer. I am hoping to find a job that is not only a job, but a career.
                        Continuing to learn is an important part of being a web developer and I feel especially motivated
                        to keep up technology.

                    </h4>
                </div>
                <div className="col-sm-4 me">

                    <div className="skill">
                        <h1 className="title">Skills</h1>
                        <h2 className="title">Programing Languages:</h2>
                        <Skill name="JavaScript" star="4"/>
                        <Skill name="Ruby" star="4"/>
                        <Skill name="Java" star="4"/>
                        <Skill name="PHP" star="3"/>
                        <Skill name="Phyton" star="3"/>
                        <Skill name="HTML&CSS" star="4"/>
                        <Skill name="C++" star="4"/>

                        <h2 className="title">Frameworks:</h2>

                        <Skill name="React" star="3"/>
                        <Skill name=" Rails" star="4"/>
                        <Skill name="Angular " star="3"/>
                        <Skill name="Ionic" star="3"/>
                        <Skill name="Bootstrap" star="4"/>
                        <Skill name="Wordpress" star="3"/>

                    </div>
                    <h2 className=" title">I'm interested in:</h2>
                    {/* Internet of Things,  Swift and IOS-Fullstack ,security of the information
                        Artificial Inteligence, Machine Learning, Big data, Vue.js, React Native, Desing UX, Calculus for data, BlockChain*/}
                    <div className="row interests">
                        <Interest name="Internet Of Things" img_url="https://static.platzi.com/media/achievements/badges-robotica-arduino-c7e2a329-7228-4aac-9956-86fb922a21a8.png" />
                        <Interest name="Swift" img_url="https://static.platzi.com/media/achievements/swift-new-3d13102e-811f-4ee3-a778-00b31f75bb72.png" />
                        <Interest name="iOS Apps" img_url="https://static.platzi.com/media/achievements/badge-apps-ios-2018-90d62179-4feb-4291-b2ef-73a409fe8d99.png" />
                        <Interest name="Security" img_url="https://static.platzi.com/media/achievements/badge-pentesting.png" />
                        <Interest name="Artificial Intelligence" img_url="https://static.platzi.com/media/achievements/badge-redes-neuronales.png" />
                        <Interest name="Machine Learning" img_url="https://static.platzi.com/media/achievements/badge-INTRO-machine-learning-.png" />
                        <Interest name="Big Data" img_url="https://static.platzi.com/media/achievements/badge-ecuaciones-diferenciales-62692f80-03d3-401f-82f5-3a68dc2dc0f3.png" />
                        <Interest name="Vue.js" img_url="https://static.platzi.com/media/achievements/badge-Vue-JS-profesional.png" />
                        <Interest name=" Design UX" img_url="https://static.platzi.com/media/achievements/badges-prototipado-9628c5f5-2ceb-44c6-aaf8-c85652b998f3.png" />
                        <Interest name=" BlockChain" img_url="https://static.platzi.com/media/achievements/badge-matematicas-discretas-0401d995-5814-4884-8baf-f69598161365.png" />
                        <Interest name=" GO" img_url="https://static.platzi.com/media/achievements/badge-GO-2017.png" />
                        <Interest name=" React Native" img_url="https://static.platzi.com/media/achievements/badge-reactnative-9c23a814-e9c3-4041-afbd-ff8083fbf32f.png" />

                    </div>




                    <h1 className="title"> Contacts</h1>
                    <div className="row Contact">


                        <Network network="fab fa-github" url="https://github.com/ereyes791" />
                        <Network network="fab fa-linkedin-in" url="https://www.linkedin.com/in/esteban-samuel-reyes-brito-a7509a83/" />
                        <Network network="fab fa-facebook-f" url="https://www.facebook.com/EstebanSamuel.Reyes" />
                        <Network network="fab fa-instagram" url="https://www.instagram.com/estebansamuel/" />
                        <Network network="fab fa-google" url="mailto:Estebansamuel.reyes@gmail.com" />

                    </div>

                    <div className="references">
                        <h1 className="title"> References</h1>
                        <References ref_img="https://media.licdn.com/dms/image/C4E03AQHWn7b4G51Q_A/profile-displayphoto-shrink_200_200/0?e=1534982400&v=beta&t=sTrhLnjs93C3tERKtNNbfDv66E15Hwxk30LS6J1rCUE"
                                    linkedin= "https://www.linkedin.com/in/marcelo-laprea-10215388/" name ="Marcelo Laprea"  current= "Full Stack-IOS Developer" email="marcelojosel15@gmail.com"
                                    prof="System Engineering" cellphone="+34-682357415"
                        />
                        <References ref_img="https://pbs.twimg.com/profile_images/1378196571/gustavo_400x400.jpg"
                                    linkedin= "https://www.linkedin.com/in/gustavo-eduardo-fuentes-moreno-1b917933/" name ="Gustavo Fuentes "  current= "Technology consultant,solution developer" email="gustavofuentesm@gmail.com"
                                    prof="Computer Science" cellphone="+58-4122175091"
                        />

                    </div>

                </div>
                <div className="col-sm-8 col-12">

                    <h1 className="name">Education</h1>
                    <section id="cd-timeline" className="cd-container">
                        <Timeline url_img="/uni.png" school="Universidad Metropolitana" degree="Computer Science" date ="2012 - 2018"
                                  summary="During my university career I learned that the importance of mathematics with statistics and computer science to solve incoming problems that the world is facing. For example, engineering emphasizes the value in planning a project from start to finish. This has give me the skills to think ahead, understand that things can go wrong and in turn have a back up plan."
                                  subjects={[{ name: 'DB' }, { name: 'Maths' }, { name: 'Statistics' }, { name: 'Software Engineering' }, { name: 'OOP' }, { name: 'Java' }, { name: 'C++' }]}/>
                        <Timeline url_img="/logo-academy-black-c0b4a906430b3143562f01bb94fbf463.svg" school="Academia Hack" degree="FullStack Developer " date ="Jun 2015  - Nov 2015"
                                  summary="My experience in Academia Hack allowed me to learn the basics of programming in a group. The class was 12 students and we were constantly pushing one another to learn and create. Our teachers were available for us when we got stuck, but Academia Hack was about teamwork and learning to code with a group. Additionally, it allowed me to immerse myself in important programming languages with more than 600 hours of study within 3 months."
                                  subjects={[{ name: 'Git' },{ name: 'Ruby' }, { name: 'Ruby on Rails' }, { name: 'SCRUM' }, { name: 'Javascript' }, { name: 'AngularJS' }, { name: 'HTML&CSS' }, { name: 'Bootstrap' }]}/>
                        <Timeline url_img="/bogodev.png" school="Bogota Dev" degree="FullStack Developer " date ="May 2018  - July 2018"
                                  summary="Going abroad to code was an amazing experience for me. With the help of a New York professor, we covered new technologies and  in effect, strengthened my design skills. The group was creative and motivated to make things look pretty. I learned that functionality is what creates an application but the style and user experience of the app is what makes it sell. My understanding of stying, position, color, and UX gives me the confidence to make something that works well and looks good. I had the opportunity to improve my performance as Front-End with more than 420 hours of study."
                                  subjects={[{ name: 'Ruby' }, { name: 'Ruby on Rails' }, { name: 'JQUERY' }, { name: 'Javascript' }, { name: 'React' }, { name: 'Redux' }, { name: 'Firebase' }, { name: 'Heroku' },{ name: 'AWS tools' }]}/>
                        <Timeline url_img="/logo.png" school="StartCoaching" degree="Professional I&E Coach " date ="Jun 2017  - Mar 2018"
                                  summary="I believe that communication is a powerful discipline. Positive and negative conversations have ability to affect people and their decisions. Working on my emotional intelligence and how to work in a team with transparent relationships has made me an excellent communicator. I also comprehend that we are individuals with the ability to change reality. Utilizing a good attitude and positive virtues, we can create our goals to reality."
                                  subjects={[{ name: 'Ontological Coaching' }, { name: 'Leadership' }, { name: "Conversation's Power" }, { name: 'B Corp' }, { name: 'Personal Improvement' }]}/>
                        <Timeline url_img="/oxford.png" school="Oxford House College" degree="Upper-English " date ="Jul 2012  - Feb 2013"
                                  summary="I spent more than 6 months in Oxford, England and loved the experience of living in a foreign country, with a culture totally different from my own. I had the opportunity to meet individuals from Korea, Germany, Turkey, Italy and Brazil and we exchanged stories, traditions and experiences. Learning English was the common goal among all of us and we helped one another achieve our fluency in English."
                                  subjects={[{ name: 'English' }, { name: 'Basic' }, { name: "English Culture" }, { name: 'B2 ' }]}/>
                        <Timeline url_img="/B.svg" school="Beet School" degree="Advance English" date ="Jul 2013  - Dec 2013"
                                  summary="My second experience learning British English focused on fundamental grammar, tenses, and written English. My main focus was to develop English professionally and improve key aspects such as speaking and listening. I decided to visit the “beaches” of England and honestly, it was terribly cold. They should be called frozen deserts. "
                                  subjects={[{ name: 'English' }, { name: 'Advance' }, { name: "Grammar" }, { name: 'C1 ' }, { name: "Essay" }]}/>
                        <Timeline url_img="/americo.png" school="U.E. Americo Vespucio" degree="High School" date ="2007  -  2011"
                                  summary="I learned the basics in relationships, mathematics, science, and history. This educational foundation taught me how I study most efficiently, how to speak to others and how to have an intelligent opinion on universal subject matters. I acquired basic knowledge in different subjects and given my inclination towards new technology, I made my first senior thesis on the formal approach to Information Communication & Technology."
                                  subjects={[{ name: 'Cience' }]}/>
                        <Timeline url_img="/SB.png" school="Colegio Simon Bolivar" degree="High School" date ="1997  -  2006"
                                  summary="I learned the basics in relationships, mathematics, science, and history. This educational foundation taught me how I study most efficiently, how to speak to others and how to have an intelligent opinion on universal subject matters. I acquired basic knowledge in different subjects and given my inclination towards new technology"
                                  subjects={[{ name: 'Cience' }]}/>
                    </section>
                    <h1 className="name">Experience</h1>
                    <section id="cd-timeline" className="cd-container">
                        <Timeline url_img="/logo.png" school="StartCoaching" degree="Developer " date ="Jan 2018  - Jun 2018"
                                  summary="I helped create and style the website founded by CTO, Gustavo Fuentes. StartCoaching used Wordpress and PHP. I created the functionality necessary for the site to handle a coaches reputation, sessions, and mentees involved."
                                  subjects={[{ name: 'Webside' }, { name: 'PHP' }, { name: 'Moddle' }, { name: 'Wordpress' }, { name: 'Coaching-app' }, { name: 'Auxiliar Coach' }]}/>
                        <Timeline url_img="/dev.png" school="Freelancer"  date ="Dec 2015  - Current" degree="Developer "
                                  summary="After completed both bootcamps, Academia Hack and Bogotá Dev Bootcamp I have been an important resource for friends and family members. I have created apps using REACT, like this website! I understand the process of hosting, deployment and fixing errors that happen when working with others. I am excited to help you make your next project. I am confident that I can make you a functional and wicked impressive looking website."
                                  subjects={[{ name: 'Ionic' }, { name: 'PHP-Frameworks' }, { name: 'AngularJS' }, { name: 'HTML&CSS' }, { name: 'JQUERY' }, { name: 'ExpressJS' }, { name: 'Java' }, { name: 'Wordpress' }, { name: 'Ruby' }, { name: 'Ruby on Rails' }]}/>

                    </section>

                <h1 className="name">Achievements</h1>
                <section id="cd-timeline" className="cd-container">
                    <Timeline url_img="/angel.png" school="AngelHack" degree="2nd place " date ="August 4th & 5th, 2018"
                              summary="I recently participated in my first Hackathon. It was a crazy weekend. The experience of creating an idea from scratch and working all day and all night with others was really different that working in an office. The hackathon was sponsored by IBM, and we used the technology based on Watson that utilizes image and facial recognition. Our application was call “U.Eat” and we created functionality that identified people sitting at tables at restaurants. This way, crowded restaurants could update their clients on how many tables were available if it’s a busy Friday or Saturday night.  After 26 hours of coding, my team Bogotá Dev and I won second place at the Hackathon! Turns out, my first hackathon proved that I’m a pretty awesome coder."
                              subjects={[{ name: 'IMB' }, { name: 'Watson' }, { name: 'Visual Recognition' }, { name: 'IOT' }, { name: 'Startup' }, { name: 'AI' }]}/>

                </section>

                </div>
            </div>
        );
    }
}



export default CV;
