const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer=require("nodemailer")

const app = express();
const PORT = process.env.PORT || 5000; // Use the port you prefer

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Endpoint to handle form submission
app.post('/submit', (req, res) => {
  const {firstName,lastName,email,phone,message,discussionTopics,discussionOptions,contactMethods,contactOptions,preferredDate,preferredTime,declaration} = req.body.formData;
  const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"munavathnaveen15@gmail.com",
        pass:"nvex hcbx jgnh tawv"
    }
  })
  const mailOptions={
    from:"munavathnaveen15@gmail.com",
    to:"info@amxsol.com",
    subject:message,
    text:"hello world",
    text:"this is testing"
    
    }
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error)
            console.log(error)
        else
            console.log("mail sent")
    });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
