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
                    <img  width="100%"   src={process.env.PUBLIC_URL+ './me.png'} alt=""/>

                </div>
                <div className="col-sm-8 col-12 name-top">
                    <div className="row">
                        <div className="col-9">
                            <h2 className="top-name"> ESTEBAN SAMUEL</h2>
                            <h1 className="top-name"><b>REYES BRITO</b></h1>

                        </div>
                        <div className="col-3 lang" align="right">
                            <ul className="languagepicker roundborders">
                                <a href="/my-cv">
                                    <li><img src="http://i64.tinypic.com/fd60km.png"/>English</li>
                                </a>
                                <a href="/my-cv-es">
                                    <li><img src="http://i68.tinypic.com/avo5ky.png"/>Español</li>
                                </a>
                            </ul>

                        </div>
                    </div>
                    <h2 className="name">Computer Science & Full Stack Developer </h2>
                    <h4 align="justify">My name is Esteban S Reyes, I am 26 years old and my great passion has focused
                        on the area of ​​Computing and Mathematics. Consequently, since 2012 I have proudly developed
                        as a Computer Science student and, currently, I am in the degree's final phase with the development
                        of an Industrial Project in conjunction with the StartCoaching Company, the corresponding
                        presentation will be made in November of this year. I approach this project as an important step
                        to combine two great areas that complement myself as a highly competitive professional: Computer
                        Science, as a versatile and broad-spectrum profession and Coaching, as a philosophy that helps to
                        see what is happening from an ontological view, supported by the power of conversations to improve
                        the performance of a team. 3 years ago i entered the world of Web Development with the Academia Hack
                        school, where I started my path as a developer.A year ago, I started my training to become a
                        Entrepreneurship and Innovation Coach with the StartCoaching Company. This year, I participated
                        in Bogota Dev Academy to complement my studies as a developer and in which I had to test my
                        knowledge and the ability to work under pressure with a team. Currently I am in the search of
                        being able to continue with the exercise of my profession and continue acquiring valuable tools
                        for my professional growth, highlighting that my disposition is complete.

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
                                  summary="While  i have developed my university career I learned that the use of mathematics together with statistics and computer science are bases to solve the great complex problems that the world is facing nowadays."
                                  subjects={[{ name: 'DB' }, { name: 'Maths' }, { name: 'Statistics' }, { name: 'Software Engineering' }, { name: 'OOP' }, { name: 'Java' }, { name: 'C++' }]}/>
                        <Timeline url_img="/logo-academy-black-c0b4a906430b3143562f01bb94fbf463.svg" school="Academia Hack" degree="FullStack Developer Frontend-Backend" date ="Jun 2015  - Nov 2015"
                                  summary="I learned to develop in a cooperative world and that gives a great added value to teamwork. It awakened in me a great sense of commitment for what is done and not to falter until achieving the goal set. Additionally, it allowed me to immerse myself in important programming languages with more than 600 hours of study"
                                  subjects={[{ name: 'Git' },{ name: 'Ruby' }, { name: 'Ruby on Rails' }, { name: 'SCRUM' }, { name: 'Javascript' }, { name: 'AngularJS' }, { name: 'HTML&CSS' }, { name: 'Bootstrap' }]}/>
                        <Timeline url_img="/bogodev.png" school="Bogota Dev" degree="FullStack Developer Frontend-Backend" date ="May 2018  - July 2018"
                                  summary="From a completely international projection, I updated with the new technologies and strengthened my design with the help of American professors, developing skills such as creativity and aesthetics to complement and give a more harmonious look to the projects in which I am involved . In addition, I had the opportunity to improve my performance as Front-End with more than 420 hours of study."
                                  subjects={[{ name: 'Ruby' }, { name: 'Ruby on Rails' }, { name: 'JQUERY' }, { name: 'Javascript' }, { name: 'React' }, { name: 'Redux' }, { name: 'Firebase' }, { name: 'Heroku' },{ name: 'AWS tools' }]}/>
                        <Timeline url_img="/logo.png" school="StartCoaching" degree="Professional I&E Coach " date ="Jun 2017  - Mar 2018"
                                  summary="With this powerful discipline, I learned the power of conversations, to work on my emotional intelligence and how to work in a team with transparent relationships thanks to effective communication. I also assimilated and understood that we are beings with the ability to change their reality and that, with a good attitude and deepening our best virtues, we can accommodate what we propose."
                                  subjects={[{ name: 'Ontological Coaching' }, { name: 'Leadership' }, { name: "Conversation's Power" }, { name: 'B Corp' }, { name: 'Personal Improvement' }]}/>
                        <Timeline url_img="/oxford.png" school="Oxford House College" degree="Upper-English " date ="Jul 2012  - Feb 2013"
                                  summary="More than 6 months of an enriching experience as it is to live in a foreign country, with a culture totally different from my own and with a language that differs from mine. With this opportunity I immersed myself fully in the dynamics of learning a foreign language and I had the opportunity to learn to develop myself in a completely innovative environment for myself."
                                  subjects={[{ name: 'English' }, { name: 'Basic' }, { name: "English Culture" }, { name: 'B2 ' }]}/>
                        <Timeline url_img="/B.svg" school="Beet School" degree="Advance English" date ="Jul 2013  - Dec 2013"
                                  summary="Second experience of 6 months of British English.I focused  to develop English professionally and improve key aspects such as Speaking and Listening."
                                  subjects={[{ name: 'English' }, { name: 'Advance' }, { name: "Grammar" }, { name: 'C1 ' }, { name: "Essay" }]}/>
                        <Timeline url_img="/americo.png" school="U.E. Americo Vespucio" degree="High School" date ="2007  -  2011"
                                  summary="It constituted my initial formation and, therefore, the basis that allowed me to form later in what I am now. I acquired basic knowledge in different areas of knowledge and, given my inclination towards new technologies, I made my first formal approach to ICT on my thesis."
                                  subjects={[{ name: 'Cience' }]}/>
                        <Timeline url_img="/SB.png" school="Colegio Simon Bolivar" degree="High School" date ="1997  -  2006"
                                  summary="It constituted my initial formation and, therefore, the basis that allowed me to form later in what I am now. I acquired basic knowledge in different areas of knowledge."
                                  subjects={[{ name: 'Cience' }]}/>
                    </section>
                    <h1 className="name">Experience</h1>
                    <section id="cd-timeline" className="cd-container">
                        <Timeline url_img="/logo.png" school="StartCoaching" degree="Developer " date ="Jan 2018  - Jun 2018"
                                  summary="I got a nice experience with this company and we made many improvements with their website and some interesting projects such as handle every Coach reputation and i helped to create a new products of the school."
                                  subjects={[{ name: 'Webside' }, { name: 'Coaching-app' }, { name: 'Auxiliar Coach' }]}/>
                        <Timeline url_img="/dev.png" school="Freelancer"  date ="Dec 2015  - Current" degree="Developer "
                                  summary="Since i finished Academia Hack 3 years ago y wanted to keep in a good level of developing so i started to do some products and keep learning the newest Frameworks."
                                  subjects={[{ name: 'Webside' }, { name: 'Coaching-app' }, { name: 'Auxiliar Coach' }]}/>

                    </section>

                </div>
            </div>
        );
    }
}



export default CV;
