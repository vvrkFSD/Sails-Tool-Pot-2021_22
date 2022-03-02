package com.sailssoft.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailSenderService{
	
	@Autowired
	 private JavaMailSender mailsender;
	 
	 public void sendSimpleEmail(String toEmail,
             String body,
             String subject) {

              SimpleMailMessage message=new SimpleMailMessage();
             message.setFrom("prasannaimmaneni445@gmail.com");
              message.setTo(toEmail);
				message.setText(body);
				message.setSubject(subject);
				mailsender.send(message);


}
}
