const hbs = require('nodemailer-express-handlebars')
const nodemailer = require('nodemailer')
const path = require('path')

const transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth:{
            user: 'user_email',
            pass: 'user_pass'
        }
    }
)

// point to the template folder
const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve('./views/'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./views/'),
};

transporter.use('compile', hbs(handlebarOptions))


function sendMail(){

const mailOptions = {
    from: '"haki" <hakifred20@gmail.com>',
    to: 'example@gmail.com', 
    subject: 'Welcome!',
    template: 'email', 
    context:{
        name: "Fred", 
        company: 'WebcloudStudio' 
    }
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
}

sendMail()