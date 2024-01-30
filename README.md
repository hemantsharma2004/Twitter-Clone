# Twitter-Clone

Table of Contents
# Introduction

This project is designed to showcase the implementation of a social media platform (twitter) without the real-time chatting functionality.

Users can register, log in, post updates, follow other users, like posts, and comment on posts. 

It provides a basic foundation for a social networking application that can be extended or customized further based on specific requirements.

![Screenshot 2023-08-24 002818 - Copy](https://github.com/Akkivarma07/Twitter-Clone/assets/124379624/9b8f5407-2d39-4f83-93a7-bf54feaef196)
![Screenshot 2023-08-24 002752 - Copy](https://github.com/Akkivarma07/Twitter-Clone/assets/124379624/36649ee7-40d5-470b-bf2f-ca9adae0f2bc)
![Screenshot 2023-08-24 002923 - Copy](https://github.com/Akkivarma07/Twitter-Clone/assets/124379624/9c094657-3070-41a3-8e76-c2e2f2ece9f7)
![Screenshot 2023-08-24 002752](https://github.com/Akkivarma07/Twitter-Clone/assets/124379624/5759cba0-4bc4-45b0-91b5-3d77789b77a2)
![Screenshot 2023-08-24 002639](https://github.com/Akkivarma07/Twitter-Clone/assets/124379624/48b23fb9-26ed-45f6-91b3-6f1c2b9aef65)
![Screenshot 2023-08-24 002638](https://github.com/Akkivarma07/Twitter-Clone/assets/124379624/aeb28014-76da-41b4-b50f-130597eafa9a)
![Screenshot 2023-08-24 002614](https://github.com/Akkivarma07/Twitter-Clone/assets/124379624/cc4c4f72-2f7c-4e4f-a592-1ae975200319)
![Screenshot 2023-08-24 002545](https://github.com/Akkivarma07/Twitter-Clone/assets/124379624/998deaec-a2bd-48b6-9dfe-321080d3967d)
![Screenshot 2023-08-24 002511](https://github.com/Akkivarma07/Twitter-Clone/assets/124379624/1b927db3-fa80-4805-bf30-234fd7ffcd56)
![Screenshot 2023-08-24 002415](https://github.com/Akkivarma07/Twitter-Clone/assets/124379624/4ab41705-1c81-4cd7-bce5-f60cecd5a4bf)
![Screenshot 2023-08-24 002923](https://github.com/Akkivarma07/Twitter-Clone/assets/124379624/87a21ab9-58f0-4802-af90-d6776457463c)

# Features
User Registration and Authentication

User Profiles and Avatars

Create, Edit, and Delete Posts

Like and Comment on Posts

Follow and Unfollow Users

News Feed based on followed users' posts

Notifications for likes and comments


## bcrypt:

Purpose: bcrypt is used for secure password hashing and storage.

Importance: Password security is crucial in any application. bcrypt helps protect user passwords from being easily compromised by employing a strong cryptographic hash function and adding a "salt" to the password before hashing. 

This makes it significantly harder for attackers to crack passwords.


# cloudinary:

Purpose: cloudinary is utilized for cloud-based image management, particularly for user avatars.

Importance: Storing and managing images on cloud services like Cloudinary offloads the burden of hosting and managing images on your own server.

This approach provides benefits like scalability, optimization, and easy transformations (resizing, cropping) for user avatars.



# cookie-parser:

Purpose: cookie-parser is used to parse and manage cookies in Express.

Importance: Cookies are widely used for maintaining user sessions, managing user preferences, and more.

cookie-parser simplifies the process of working with cookies in your Express application.


# cors:

Purpose: cors (Cross-Origin Resource Sharing) is employed to enable cross-origin requests.

Importance: Web security mechanisms often restrict requests made from one domain to another. 

cors helps manage and control cross-origin requests, which isessential when your frontend (client) and backend (server) are hosted on different domains.


# dotenv:

Purpose: dotenv is used for environment variable management.

Importance: Environment variables are used to store sensitive information like API keys, database credentials, and other configuration details. 

dotenv simplifies the process of loading these variables from a .env file, keeping your sensitive information secure.


# jsonwebtoken:

Purpose: jsonwebtoken is used to generate and verify JSON Web Tokens (JWT) for authentication.

Importance: JWTs are a popular method for securely transmitting information between parties.

They are commonly used for authentication and authorization purposes, ensuring that the data exchanged between the client and server remains tamper-proof and authenticated.


# mongoose:

Purpose: mongoose is an elegant MongoDB object modeling library.

Importance: MongoDB is a NoSQL database that uses JSON-like documents to store data.

mongoose simplifies the interaction with MongoDB by providing an intuitive way to define data schemas, perform queries, and manage data relationships.


# morgan:

Purpose: morgan is an HTTP request logger middleware.

Importance: morgan aids in logging HTTP requests, making it easier to track and analyze incoming requests to your server. 
This can be especially helpful for debugging, monitoring, and security analysis.


# time-ago:

Purpose: time-ago is used to display timestamps in a user-friendly "time ago" format.

Importance: Converting timestamps into a human-readable format like "3 hours ago" enhances the user experience by providing context and improving readability, especially in social media applications where the timing of posts and interactions is crucial.



