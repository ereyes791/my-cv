import React, {Component} from 'react';
import Skill from './skill';
import Timeline from './timeline';
import Interest from './interest';
import References from './reference';
import Network from './network'

class CVes extends Component {


    render() {
        return (
            <div className="row CV">



                <div className="col-12 img col-sm-4">
                    <img  width="100%" height="422px"  src={process.env.PUBLIC_URL+ '/me.png'} alt=""/>

                </div>
                <div className="col-sm-8 col-12 name-top">
                    <div className="row">
                        <div className="col-9">
                            <h2 className="top-name"> ESTEBAN SAMUEL</h2>
                            <h1 className="top-name"><b>REYES BRITO</b></h1>

                        </div>
                        <div className="col-3 lang" align="right">
                            <ul className="languagepicker roundborders">
                                <a href="https://ereyes791.github.io/my-cv/#/my-cv-es">
                                    <li><img src="http://i68.tinypic.com/avo5ky.png"/>Español</li>
                                </a>
                                <a href="https://ereyes791.github.io/my-cv/#/my-cv">
                                    <li><img src="http://i64.tinypic.com/fd60km.png"/>English</li>
                                </a>
                            </ul>

                        </div>
                </div>
                    <h2 className="name">Ingeniero en sistemas & Full Stack Developer </h2>
                    <h4 align="justify">Mi nombre es Esteban S Reyes, tengo 26 años y mi gran pasión se ha centrado
                        en el área de la Computación y Matemáticas. En consecuencia, desde 2012 me he desarrollado orgullosamente
                        como estudiante de Ingeniera en Sistemas y, actualmente, estoy en la fase final del grado con el desarrollo
                        de mi Proyecto Industrial con la Compañía StartCoaching, la presentación correspondiente se realizará
                        en Noviembre. Abordo este proyecto como un paso importante para combinar dos grandes áreas que me
                        complementan como un profesional altamente competitivo: Informática, como una profesión versátil y de amplio
                        espectro y Coaching, como una filosofía que ayuda a ver lo que está sucediendo desde una perspectiva ontológica
                        , respaldado por el poder de las conversaciones para mejorar el rendimiento de un equipo. Hace 3 años ingresé al
                        mundo del desarrollo web con la escuela Academia Hack, donde comencé mi camino como desarrollador. Hace un año,
                        comencé mi formación para convertirme en Coach de emprendimiento con StartCoaching.Este año, participé en BogotáDev para complementar mis estudios como desarrollador y en la cual tuve
                        que poner a prueba mi conocimiento y la capacidad de trabajar bajo presión con un equipo. Actualmente estoy en
                        la búsqueda de poder continuar con el ejercicio de mi profesión y seguir adquiriendo herramientas valiosas para
                        mi crecimiento profesional, destacando que mi disposición está completa.

                    </h4>
                </div>
                <div className="col-sm-4 me">

                    <div className="skill">
                        <h1 className="title">Habilidades</h1>
                        <h2 className="title">Lenguajes de Programacion:</h2>
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
                    <h2 className=" title">Estoy interesado en estos temas:</h2>
                    {/* Internet of Things,  Swift and IOS-Fullstack ,security of the information
                        Artificial Inteligence, Machine Learning, Big data, Vue.js, React Native, Desing UX, Calculus for data, BlockChain*/}
                    <div className="row interests">
                        <Interest name="Internet De Las Cosas" img_url="https://static.platzi.com/media/achievements/badges-robotica-arduino-c7e2a329-7228-4aac-9956-86fb922a21a8.png" />
                        <Interest name="Swift" img_url="https://static.platzi.com/media/achievements/swift-new-3d13102e-811f-4ee3-a778-00b31f75bb72.png" />
                        <Interest name="iOS Apps" img_url="https://static.platzi.com/media/achievements/badge-apps-ios-2018-90d62179-4feb-4291-b2ef-73a409fe8d99.png" />
                        <Interest name="Seguridad" img_url="https://static.platzi.com/media/achievements/badge-pentesting.png" />
                        <Interest name="Inteligencia Artifical" img_url="https://static.platzi.com/media/achievements/badge-redes-neuronales.png" />
                        <Interest name="Machine Learning" img_url="https://static.platzi.com/media/achievements/badge-INTRO-machine-learning-.png" />
                        <Interest name="Big Data" img_url="https://static.platzi.com/media/achievements/badge-ecuaciones-diferenciales-62692f80-03d3-401f-82f5-3a68dc2dc0f3.png" />
                        <Interest name="Vue.js" img_url="https://static.platzi.com/media/achievements/badge-Vue-JS-profesional.png" />
                        <Interest name=" Design UX" img_url="https://static.platzi.com/media/achievements/badges-prototipado-9628c5f5-2ceb-44c6-aaf8-c85652b998f3.png" />
                        <Interest name=" BlockChain" img_url="https://static.platzi.com/media/achievements/badge-matematicas-discretas-0401d995-5814-4884-8baf-f69598161365.png" />
                        <Interest name=" GO" img_url="https://static.platzi.com/media/achievements/badge-GO-2017.png" />
                        <Interest name=" React Native" img_url="https://static.platzi.com/media/achievements/badge-reactnative-9c23a814-e9c3-4041-afbd-ff8083fbf32f.png" />

                    </div>




                    <h1 className="title"> Contactos</h1>
                    <div className="row Contact">


                        <Network network="fab fa-github" url="https://github.com/ereyes791" />
                        <Network network="fab fa-linkedin-in" url="https://www.linkedin.com/in/esteban-samuel-reyes-brito-a7509a83/" />
                        <Network network="fab fa-facebook-f" url="https://www.facebook.com/EstebanSamuel.Reyes" />
                        <Network network="fab fa-instagram" url="https://www.instagram.com/estebansamuel/" />
                        <Network network="fab fa-google" url="mailto:Estebansamuel.reyes@gmail.com" />

                    </div>

                    <div className="references">
                        <h1 className="title"> Referencias</h1>
                        <References ref_img="https://media.licdn.com/dms/image/C4E03AQHWn7b4G51Q_A/profile-displayphoto-shrink_200_200/0?e=1534982400&v=beta&t=sTrhLnjs93C3tERKtNNbfDv66E15Hwxk30LS6J1rCUE"
                                    linkedin= "https://www.linkedin.com/in/marcelo-laprea-10215388/" name ="Marcelo Laprea"  current= "Full Stack-IOS Developer" email="marcelojosel15@gmail.com"
                                    prof="Ingeniero en Sistemas" cellphone="+34-682357415"
                        />
                        <References ref_img="https://pbs.twimg.com/profile_images/1378196571/gustavo_400x400.jpg"
                                    linkedin= "https://www.linkedin.com/in/gustavo-eduardo-fuentes-moreno-1b917933/" name ="Gustavo Fuentes "  current= "Consultor en tecnología y desarrollo de soluciones" email="gustavofuentesm@gmail.com"
                                    prof="Licenciado en Computacion" cellphone="+58-4122175091"
                        />

                    </div>

                </div>
                <div className="col-sm-8 col-12">

                    <h1 className="name">Educacion</h1>
                    <section id="cd-timeline" className="cd-container">
                        <Timeline url_img="/uni.png" school="Universidad Metropolitana" degree="Ingenieria en Sistemas" date ="2012 - 2018"
                                  summary="Mientras desarrollé mi carrera universitaria aprendí que el uso de las matemáticas junto con las estadísticas y la informática son las bases para resolver los grandes y complejos problemas que enfrenta el mundo hoy en día."
                                  subjects={[{ name: 'BD' }, { name: 'Matematica' }, { name: 'Estadistica' }, { name: 'Ingenieria de Software' }, { name: 'POO' }, { name: 'Java' }, { name: 'C++' }]}/>
                        <Timeline url_img="/logo-academy-black-c0b4a906430b3143562f01bb94fbf463.svg" school="Academia Hack" degree="FullStack Developer Frontend-Backend" date ="Jun 2015  - Nov 2015"
                                  summary="Aprendí a desarrollarme en un mundo cooperativo y eso le da un gran valor agregado al trabajo en equipo. Me despertó un gran sentido de compromiso por lo que se hace y no darse por vencido hasta lograr el objetivo establecido. Además, me permitió sumergirme en importantes lenguajes de programación con más de 600 horas de estudio"
                                  subjects={[{ name: 'Git' },{ name: 'Ruby' }, { name: 'Ruby on Rails' }, { name: 'SCRUM' }, { name: 'Javascript' }, { name: 'AngularJS' }, { name: 'HTML&CSS' }, { name: 'Bootstrap' }]}/>
                        <Timeline url_img="/bogodev.png" school="Bogota Dev" degree="FullStack Developer Frontend-Backend" date ="May 2018  - July 2018"
                                  summary="Desde una vision internacional, actualicé con las nuevas tecnologías y fortalecí mi diseño con la ayuda de profesores estadounidenses, desarrollando habilidades como la creatividad y la estética para complementar y dar un aspecto más armonioso a los proyectos en los que estoy involucrado. Además, tuve la oportunidad de mejorar mi desempeño como Front-End con más de 420 horas de estudio."
                                  subjects={[{ name: 'Ruby' }, { name: 'Ruby on Rails' }, { name: 'JQUERY' }, { name: 'Javascript' }, { name: 'React' }, { name: 'Redux' }, { name: 'Firebase' }, { name: 'Heroku' },{ name: 'AWS tools' }]}/>
                        <Timeline url_img="/logo.png" school="StartCoaching" degree="Professional I&E Coach " date ="Jun 2017  - Mar 2018"
                                  summary="Con esta poderosa disciplina, aprendí el poder de las conversaciones, para trabajar en mi inteligencia emocional y cómo trabajar en equipo con relaciones transparentes gracias a una comunicación efectiva. También asimilé y comprendí que somos seres con la capacidad de cambiar su realidad dependiendo de como la veamos de la mano  con una buena actitud y profundizando lo mejor posible virtudes, podemos acomodarnos a lo que proponemos."
                                  subjects={[{ name: 'Coaching Ontologico' }, { name: 'Liderazgo' }, { name: "Poder de las Coversaciones" }, { name: 'Empresas B' }, { name: 'Mejora Personal' }]}/>
                        <Timeline url_img="/oxford.png" school="Oxford House College" degree="Upper-English " date ="Jul 2012  - Feb 2013"
                                  summary="Más de 6 meses de una experiencia enriquecedora como es vivir en un país extranjero, con una cultura totalmente diferente a la mía y con un lenguaje diferente al mío. Con esta oportunidad, me sumergí completamente en la dinámica de aprender un idioma extranjero y tuve la oportunidad de aprender a desarrollarme en un entorno totalmente innovador para mí."
                                  subjects={[{ name: 'Ingles' }, { name: 'Basico' }, { name: "English Culture" }, { name: 'B2 ' }]}/>
                        <Timeline url_img="/B.svg" school="Beet School" degree="Advance English" date ="Jul 2013  - Dec 2013"
                                  summary="Segunda experiencia de 6 meses de inglés británico. Me enfoqué en desarrollar inglés profesionalmente y mejorar aspectos clave como hablar y escuchar."
                                  subjects={[{ name: 'Ingles' }, { name: 'Advance' }, { name: "Grammar" }, { name: 'C1 ' }, { name: "Essay" }]}/>
                        <Timeline url_img="/americo.png" school="U.E. Americo Vespucio" degree="High School" date ="2007  -  2011"
                                  summary="Constituyó mi formación inicial y, por lo tanto, la base que me permitió formarme más tarde en lo que soy ahora. Adquirí conocimientos básicos en diferentes áreas de conocimiento y, dada mi inclinación hacia las nuevas tecnologías, hice mi primer acercamiento formal a las TIC en mi tesis."
                                  subjects={[{ name: 'Ciencia' }]}/>
                        <Timeline url_img="/SB.png" school="Colegio Simon Bolivar" degree="High School" date ="1997  -  2006"
                                  summary="Constituyó mi formación inicial y, por lo tanto, la base que me permitió formarme más tarde en lo que soy ahora. Adquirí conocimientos básicos en diferentes áreas de conocimiento"
                                  subjects={[{ name: 'Ciencia' }]}/>
                    </section>
                    <h1 className="name">Experiencia</h1>
                    <section id="cd-timeline" className="cd-container">
                        <Timeline url_img="/logo.png" school="StartCoaching" degree="Developer " date ="Jan 2018  - Jun 2018"
                                  summary="Obtuve una experiencia agradable con esta empresa y realizamos muchas mejoras con su sitio web y algunos proyectos interesantes, como manejar la reputación de cada entrenador y ayudé a crear nuevos productos de la escuela."
                                  subjects={[{ name: 'Webside' }, { name: 'Coaching-app' }, { name: 'Auxiliar Coach' }]}/>
                        <Timeline url_img="/dev.png" school="Freelancer"  date ="Dec 2015  - Current" degree="Developer "
                                  summary="Desde que terminé la Academia Hack hace 3 años y quería mantener un buen nivel de desarrollo, comencé a hacer algunos productos y seguí aprendiendo los Frameworks más nuevos."
                                  subjects={[{ name: 'Ionic' }, { name: 'PHP-Frameworks' }, { name: 'AngularJS' }, { name: 'HTML&CSS' }, { name: 'JQUERY' }, { name: 'ExpressJS' }, { name: 'Java' }, { name: 'Wordpress' }, { name: 'Ruby' }, { name: 'Ruby on Rails' }]}/>

                    </section>

                </div>
            </div>
        );
    }
}



export default CVes;
