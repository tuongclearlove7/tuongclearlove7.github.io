import App from "../../../app.js";

App.getTagName('title').textContent = 'Home - Trần Thế Tường';

export default function Home(){


        return (

            App.setElement('div').setInner(

                App.setElement('main').setInner(

                    App.setElement('div').setInner(

                        App.setElement('div').setInner(


                            App.setElement('div').setInner(

                                App.setElement('div').setInner(
    
                                    App.setElement('h1').setInner(
                                                            
                                        ``
                                    ),
                                    App.setElement('br'),
    
                                    App.setElement('p').setInnerBOT(
                                    
                                        ``
                                    )
                                ).setClass("panel-top-bottom"),
                            
                            ).setClass("container-panel"),

                            App.setElement('div').setInner(

                                App.setElement('div').setInner(
                                
                                    App.setElement('img').setImageUrl(
                                        '../../../image/rose.jpg'
                                    ),

                                    App.setElement('h1').setInnerBOT(
                                        'Tran The Tuong'.toUpperCase()
                                    ).setStyle({

                                        paddingTop: '25px',
                                    }),
    
    
                                    App.setElement('h2').setInner(
    
                                        App.setElement('i').setInner(
                                        
                                        ).setClass("fa fa-php"),
    
                                        'Apply For PHP'.toUpperCase()
                                    )
    
    
                                ).setClass('left'),
                        
                                App.setElement('div').setInner(

                                    App.setElement('h1').setInner(
                                        `OBJECTIVE`
                                    
                                    ).setStyle({
                                        color: '#F4511E',
                                    }),
                                
                                    App.setElement('p').setInnerBotToTime(15,
                                                        
                                        `I am a software technology major at Duy Tan University, I discovered my passion for programming with PHP. To further enhance my skills, I enrolled in a web programming course with PHP & MySQL at the iViettech programming training center. Throughout my studies, I had the opportunity to participate in real projects that not only helped me gain practical experience but also allowed me to improve my skills. I am passionate about becoming a skilled PHP programmer and I am willing to learn as much as possible to fulfill my duties. I'm looking forward to joining your company as an intern in PHP. I am committed to continuous learning, acquiring new skills, and gaining additional experience to contribute to the growth and development of the company.`
                                    ),

                                    App.setElement('p').setStyle({
                                        marginBottom:"30px",
                                    }),
    
                                ).setClass('right'),
                                
                             

                            ).setClass("content"),
                        
                        ).setClass("container-2"),
                      
                        App.setElement('div').setInner(

                            App.setElement('div').setInner(

                                App.setElement('div').setInner(
                                                        
                                    App.setElement('h1').setInner(
                                                        
                                        "Information".toUpperCase()

                                    ).setStyle({
                                        color:'aqua',
                                        paddingBottom:"30px",
                                    }),
                                    App.setElement('br'),

                                    App.setElement('br'),

                                    App.setElement('p').setInner(

                                        App.setElement('span').setInner(
     
                                             App.setElement('i').setInner(
                                         
                                             ).setClass("fa fa-birthday-cake"),
     
                                             `${" birthday: ".toUpperCase()}`,
                                         
                                             ).setClass('sign'),
     
                                         App.setElement('span').setInnerBOT(
     
                                             `16/1/2002`,
     
                                         ),
                                     ),
     
                                     App.setElement('p').setInner(
                                         
                                         App.setElement('span').setInner(
     
                                             App.setElement('i').setInner(
                                         
                                             ).setClass("fa fa-phone"),
     
                                             `${" phone: ".toUpperCase()}`,
                                         
                                             ).setClass('sign'),
     
                                         App.setElement('span').setInnerBOT(
     
                                             `0915662495`,
     
                                         ),
                                 
                                     ),
                                     App.setElement('p').setInner(
     
                                         App.setElement('span').setInner(
     
                                             App.setElement('i').setInner(
                                         
                                             ).setClass("fa fa-envelope"),
     
                                             `${" Email: ".toUpperCase()}`,
                                         
                                             ).setClass('sign'),
     
                                         App.setElement('span').setInnerBOT(
     
                                             `tranthetuong@dtu.edu.vn`,
     
                                         ),
                                         
                                 
                                     ),
                                     App.setElement('p').setInner(
     
                                         App.setElement('span').setInner(
     
                                             App.setElement('i').setInner(
                                         
                                             ).setClass("fa fa-home"),
     
                                             `${" Address: ".toUpperCase()}`,
                                         
                                             ).setClass('sign'),
     
                                         App.setElement('span').setInnerBOT(
     
                                             `58 Chon Tam 10, Lien Chieu, Da Nang`,
     
                                         ),
                                         
                                     ),
                                     App.setElement('p').setInner(
                                         
                                         App.setElement('span').setInner(
     
                                             App.setElement('i').setInner(
                                         
                                             ).setClass("fa fa-linkedin"),
     
                                             `${" LinkedIn: ".toUpperCase()}`,
                                         
                                         ).setClass('sign'),
     
                                         App.setElement('span').setInnerBOT(
     
                                             `tuong-tran-the-391688293`,
     
                                         ).setStyle({
     
                                             cursor:'wait',
                                             textDecoration:"underline",
     
                                         }).on('click', function(){
     
                                             window.location.href = 'https://www.linkedin.com/in/tuong-tran-the-391688293/';
                                         }),
                                         
                                     ),
     
                                     App.setElement('p').setInner(
                                         
                                         App.setElement('span').setInner(
     
                                             App.setElement('i').setInner(
                                         
                                             ).setClass("fa fa-github"),
     
                                             `${" github: ".toUpperCase()}`,
                                         
                                         ).setClass('sign'),
     
                                         App.setElement('span').setInnerBOT(
     
                                             `Tuongclearlove7`,
     
                                         ).setStyle({
     
                                             cursor:'wait',
                                             textDecoration:"underline",
     
                                         }).on('click', function(){
                                             window.location.href = 'https://github.com/tuongclearlove7';
                                         }),
                                         
                                     ),
     
                                     App.setElement('p').setInner(
                                         
                                         App.setElement('span').setInner(
     
                                             App.setElement('i').setInner(
                                         
                                             ).setClass("fa fa-facebook"),
     
                                             `${" facebook: ".toUpperCase()}`,
                                         
                                         ).setClass('sign'),
     
                                         App.setElement('span').setInnerBOT(
     
                                             `Trần Thế Tường`,
     
                                         ).setStyle({
     
                                             cursor:'wait',
                                             textDecoration:"underline",
     
                                         }).on('click', function(){
                                             window.location.href = 'https://www.facebook.com/Ytttuong1';
                                         }),
                                         
                                     ).setStyle({

                                        paddingBottom: '50px',
                                     }),

                                    
                                ).setClass('left2'),


                                App.setElement('div').setInner(
                                                        
                                    App.setElement('h1').setInner(
                                                        
                                        "education".toUpperCase()

                                    ).setStyle({

                                        color:'aqua',
                                        paddingBottom:"30px",
                                    }),

                                  
                                    App.setElement('p').setInner(

                                        App.setElement('i').setInner(
                                                    
                                        ).setClass('fa fa-clock-o'),
        
                                        " 03/2023 - 09/2023"
                                    ),

                                    App.setElement('p').setInner(

                                        App.setElement('i').setInner(
                                                    
                                        ).setClass('fa fa-graduation-cap'),
                                                        
                                        ` IVIETTECH - PROGRAMMING
                                        TRAINING CENTER`.toUpperCase()
                                    ),
                                    App.setElement('p').setInner(
     
                                        App.setElement('span').setInner(
    
                                            `${" major: ".toUpperCase()}`,
                                        
                                            ).setClass('sign'),
    
                                        App.setElement('span').setInnerBOT(
    
                                            `PHP Programmer`,
    
                                        ),
                                        
                                    ),

                                    App.setElement('p').setInner(

                                        App.setElement('i').setInner(
                                                    
                                            ).setClass('fa fa-clock-o'),
            
                                                        
                                        " 2021 - 2025"
                                    ),

                                    App.setElement('p').setInner(
                                        
                                        App.setElement('i').setInner(
                                                    
                                        ).setClass('fa fa-graduation-cap'),
                                                        
                                        ` duy tan - university`.toUpperCase()
                                    ),
                                    App.setElement('p').setInner(
     
                                        App.setElement('span').setInner(
    
                                            `${" major: ".toUpperCase()}`,
                                        
                                            ).setClass('sign'),
    
                                        App.setElement('span').setInnerBOT(
    
                                            `Software engineer`,
    
                                        ),
                                        
                                    ),
                 
                                ).setClass('right2'),

                               
                                App.setElement('br'),

                                ).setClass("content"),
                          
                            ).setClass("container-2"),



                            App.setElement('div').setInner(

                                App.setElement('div').setInner(

                                        App.setElement('h1').setInner(
                                                                
                                            `TECHNICAL SKILLS`.toUpperCase()
                                        ),
                                        App.setElement('br'),
        
                                        App.setElement('h3').setInner(
                                                        
                                            `# Web Developer`
                                        ).setStyle({
                                            
                                            width:"175px",
                                        }),
                                        App.setElement('br'),

                                        App.setElement('span').setInnerBOT(
                                                                
                                            `+ Possesses basic skills in using PHP and developing applications that don’t require a database.
                                            `
                                        ),
                                        App.setElement('br'),
                                        App.setElement('span').setInnerBOT(
                                                                
                                            `+ Possesses basic skills in using and developing PHP and NodeJS
                                            applications to retrieve and store data in both MySQL and MongoDB
                                            databases.                                            
                                            `
                                        ),
                                        App.setElement('br'),
                                        App.setElement('span').setInnerBOT(
                                                                
                                            `+ Possesses basic skills in using phpMyAdmin and MongoDB Cloud to
                                            work with a MySQL and MongoDB database.                                            
                                            `
                                        ),
                                        App.setElement('br'),
                                        App.setElement('span').setInnerBOT(
                                                                
                                            `+ Skilled in using the MVC pattern to structure and organize code.`
                                        ),
                                        App.setElement('br'),
                                        App.setElement('span').setInnerBOT(
                                                                
                                            `+ Skilled in analyzing and designing databases.                                            
                                            `
                                        ),
                                        App.setElement('br'),
                                        App.setElement('span').setInnerBOT(
                                                                
                                            `+ Possesses basic skills in developing web applications using Laravel, Socket.io, and ExpressJS frameworks.                                            
                                            `
                                        ),

                                        App.setElement('p').setInner(
                                                        
                                            ``

                                        ).setStyle({
                                            paddingBottom: '20px',
                                        }),

                                        App.setElement('h3').setInner(
                                                        
                                            `# Programming languages`

                                        ),
                                        App.setElement('br'),

                                        App.setElement('span').setInner(
                                                                
                                            `+ Possess basic skills in using PHP, HTML, CSS, JavaScript, and NodeJS.                                           
                                            `
                                        ),
                                        App.setElement('br'),

                                        App.setElement('span').setInnerBOT(
                                                                
                                            `+ Have a basic understanding of C, C++, C#, Python, and Java.                                           
                                            `
                                        ),

                                        App.setElement('p').setInner(
                                                        
                                            ``

                                        ).setStyle({
                                            paddingBottom: '20px',
                                        }),

                                        App.setElement('h3').setInner(
                                                        
                                            `# Databases`
                                        ).setStyle(
                                            {
                                                    
                                             //   paddingTop:"15px",     
                                            }
                                        ),
                                        App.setElement('br'),

                                        App.setElement('span').setInnerBOT(
                                                                
                                            `+ Possess basic skills in using MySQL and SQL Server.                       
                                            `
                                        ),
                                        App.setElement('br'),

                                        App.setElement('span').setInnerBOT(
                                                                
                                            `+ Possess basic skills in working with MongoDB (NoSQL).                                           
                                            `
                                        ),

                                    ).setClass("content"),

                                ).setClass("container-1"),



                        App.setElement('div').setInner(

                            App.setElement('div').setInner(

                                    App.setElement('h1').setInner(
                                                            
                                        `TAKEN PROJECTS SUMMARIES`.toUpperCase()
                                    ),
                                    App.setElement('br'),
    
                                    App.setElement('h3').setInner(
                                                    
                                        `# HOTEL BOOKING ONLINE - HOTELIER`
                                    ),
                                    App.setElement('br'),

                                    App.setElement('span').setInner(
                                                        
                                        App.setElement('b').setInner(`Description: `)
                                        .setStyle(
                                            { 
                                                color:"deepskyblue",
                                                
                                            }
                                        ),
                                        `The purpose of this project is to provide an online
                                        management facility, it helps admin can manage orders faster, more
                                        convenient.
                                        `
                                    ),
                                    App.setElement('br'),
                                    App.setElement('span').setInner(
                                                            
                                        App.setElement('b').setInner(`Programming language: `)
                                        .setStyle(
                                            { 
                                                color:"deepskyblue",
                                                
                                            }
                                        ),
                                        `PHP.
                                        `
                                    ),
                                    App.setElement('br'),
                                    App.setElement('span').setInner(
                                                            
                                        App.setElement('b').setInner(`Database: `)
                                        .setStyle(
                                            { 
                                                color:"deepskyblue",
                                                
                                            }
                                        ),
                                        `MYSQL.
                                        `
                                    ),
                                    App.setElement('br'),
                                  
                                    App.setElement('span').setInner(
                                                            
                                        App.setElement('b').setInner(`Web Server: `)
                                        .setStyle(
                                            { 
                                                color:"deepskyblue",
                                                
                                            }
                                        ),
                                        `Apache.
                                        `
                                    ),
                                    App.setElement('br'),

                                    App.setElement('span').setInner(
                                        
                                        App.setElement('b').setInner(`Technology used: `)
                                        .setStyle(
                                            { 
                                                color:"deepskyblue",
                                                
                                            }
                                        ),
                                        `Laravel Framework 10.10.
                                        `             
                                    ),
                                    App.setElement('br'),

                                    App.setElement('span').setInner(
                                        
                                        App.setElement('b').setInner(`Main function: `)
                                        .setStyle(
                                            { 
                                                color:"deepskyblue",
                                                
                                            }
                                        ),
                                        App.setElement('p')
                                        .setInnerBOT(
                                            `+ Login and logout 
                                        `),
                                        App.setElement('p')
                                        .setInnerBOT(
                                            `+ Setup room
                                        `),
                                        App.setElement('p')
                                        .setInnerBOT(
                                            `+ Manage bookings
                                        `),
                                        App.setElement('p')
                                        .setInnerBOT(
                                            `+ Manage customers
                                        `),
                                        App.setElement('p')
                                        .setInnerBOT(
                                            `+ Booking
                                        `),
                                        App.setElement('p')
                                        .setInnerBOT(
                                            `+ Cancel the booking
                                        `),
                                                    
                                    ),
                                    App.setElement('span').setInner(
                                        
                                        App.setElement('b').setInner(`Source code: `)
                                        .setStyle(
                                            { 
                                                color:"deepskyblue",
                                                
                                            }
                                        ),
                                        App.setElement('span').setInner(
                                            `Hotelier-Project
                                            `
                                        ).setStyle(
                                            {
                                                textDecoration: "underline",
                                                cursor: "wait",
                                            }
                                        ).on('click', function(){
                                            window.location.href = 'https://github.com/tuongclearlove7/Hotelier-Project';

                                        })
                                                    
                                    ),
                                    
                                    App.setElement('hr').setStyle(
                                        {
                                            marginTop:"30px",
                                            marginBottom:"30px",
                                        }
                                    ),



                                    
                                    App.setElement('h3').setInner(
                                                    
                                        `# SMART CHAT APPLICATION - WEBCHAT`
                                    ),
                                    App.setElement('br'),

                                    App.setElement('span').setInner(
                                                        
                                        App.setElement('b').setInner(`Description: `)
                                        .setStyle(
                                            { 
                                                color:"deepskyblue",
                                                
                                            }
                                        ),
                                        `A smart chatbot can be used on Facebook to chat in real
                                        time.                                        
                                        `
                                    ),
                                    App.setElement('br'),
                                    App.setElement('span').setInner(
                                                            
                                        App.setElement('b').setInner(`Programming language: `)
                                        .setStyle(
                                            { 
                                                color:"deepskyblue",
                                                
                                            }
                                        ),
                                        `Javascript (NodeJS).
                                        `
                                    ),
                                    App.setElement('br'),
                                    App.setElement('span').setInner(
                                                            
                                        App.setElement('b').setInner(`Database: `)
                                        .setStyle(
                                            { 
                                                color:"deepskyblue",
                                                
                                            }
                                        ),
                                        `MongoDB.
                                        `
                                    ),
                                    App.setElement('br'),
                                  
                                    App.setElement('span').setInner(
                                                            
                                        App.setElement('b').setInner(`Web Server: `)
                                        .setStyle(
                                            { 
                                                color:"deepskyblue",
                                                
                                            }
                                        ),
                                        `Google Chrome (V8 Engine).
                                        `
                                    ),
                                    App.setElement('br'),

                                    App.setElement('span').setInner(
                                        
                                        App.setElement('b').setInner(`Technologies used: `)
                                        .setStyle(
                                            { 
                                                color:"deepskyblue",
                                                
                                            }
                                        ),
                                        ` Socket.io Framework 4.6.1, Express Framework 4.18.2.
                                        `             
                                    ),
                                    App.setElement('br'),

                                    App.setElement('span').setInner(
                                        
                                        App.setElement('b').setInner(`Main function: `)
                                        .setStyle(
                                            { 
                                                color:"deepskyblue",
                                                
                                            }
                                        ),
                                        App.setElement('p')
                                        .setInnerBOT(
                                            `+ Chat real time (Can use the Chat GPT API to chat with users).
                                        `),
                                        App.setElement('p')
                                        .setInner(
                                            `+ Chatbot on Facebook.
                                        `),
                                                    
                                    ),
                                    App.setElement('span').setInner(
                                        
                                        App.setElement('b').setInner(`Link project: `)
                                        .setStyle(
                                            { 
                                                color:"deepskyblue",
                                                
                                            }
                                        ),
                                        App.setElement('span').setInner(
                                            `web-chat.up.railway.app
                                            `
                                        ).setStyle(
                                            {
                                                textDecoration: "underline",
                                                cursor: "wait",
                                            }
                                        ).on('click', function(){
                                            window.location.href = 'https://web-chat.up.railway.app/';

                                        })
                                                    
                                    ),

                                    App.setElement('br'),
                                    App.setElement('span').setInner(
                                        
                                        App.setElement('b').setInner(`Source code: `)
                                        .setStyle(
                                            { 
                                                color:"deepskyblue",
                                                
                                            }
                                        ),
                                        App.setElement('span').setInner(
                                            `Web-chat-project.
                                            `
                                        ).setStyle(
                                            {
                                                textDecoration: "underline",
                                                cursor: "wait",
                                            }
                                        ).on('click', function(){
                                            window.location.href = 'https://github.com/alison16smotthie/Web-chat';

                                        })
                                                    
                                    ),


                                
                                ).setClass("content"),

                            ).setClass("container-1"),



                            App.setElement('div').setInner(

                                App.setElement('div').setInner(
    
                                    App.setElement('h1').setInner(
                                                            
                                        "GAINED EXPERIENCE AND SKILLS ON PROJECTS".toUpperCase()
                                    ),
                                    App.setElement('br'),
    
                                    App.setElement('p').setInner(
                                                            
                                        `
                                        - Database design and analysis.
                                        `,
                                        App.setElement('br'),
                                        `                                        
                                        - Working with MySQL, SQL Server, MongoDB.
                                        `,
                                        App.setElement('br'),
                                        `                                        
                                        - Working with Laravel Framework 10.10, ExpessJS Framework 4.18.2.
                                        `,
                                        App.setElement('br'),
                                        `                                        
                                        - Experience in using HTML, CSS & Bootstrap.
                                        `,
                                        App.setElement('br'),
                                        `      
                                        - Experience in using JQuery, and JavaScript.                                  
                                        `,
                                        App.setElement('br'),
                                        `      
                                        - Experience in using Gitlab, and Github.                                  
                                        `,
                                        App.setElement('br'),
                                        `            
                                        - Adaptability.                            
                                        `,
                                        App.setElement('br'),
                                        `
                                        - Information research.                                        
                                        `,
                                        App.setElement('br'),
                                        `
                                        - Work carefully.                                        
                                        `,
                                        App.setElement('br'),
                                        `
                                        - Presentation skills.
                                        `,
                                    )).setClass("content"),
                              
                                ).setClass("container-1"),



                            App.setElement('div').setInner(

                                App.setElement('div').setInner(
    
                                    App.setElement('h1').setInner(
                                                            
                                        ``
                                    ),
                                    App.setElement('br'),
    
                                    App.setElement('p').setInnerBOT(
                                    
                                        ``
                                    )
                                ).setClass("panel-top-bottom"),
                            
                            ).setClass("container-panel"),

                        ),
                )
            ).setClass("content-container")        
        );
}   
    
    
findElement("#content-body").appendInner(

    Home()

);