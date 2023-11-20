# Node Application Logger

## What is logger?
<p>Loginig is the process of recording events, activities, or messages from a computer program or system to file or another form of output. The primary purpose of logging is to provide a detailed record of what a software application or system is doing, allowing developers, administrators, and support teams to tract and understand its behavior.</p>

## Commonly Logged Information
- Error Messages: Syntax error, runtime error, error stack, error codes, and error message indicating what went wrong
- General Informational Logs: Client Request, Server Response, Password Change, etc.
- Warnings: Application Shutdown
- Authentication: Authentication Success or Failures
- Authorization:Authorization Failures
- Higher Risk functionality: Deletion, addition, privileges change [role changes], network connection
- Legal Related: terms and conditions, permission to receive data
- Event Time and Place: When the event occurs [timestamp], where the event occurs[HTTP endpoint, service level, etc]
- Type of event: severity of event [error, warn, info, HTTP, debug, verbose]
- Other: correlation ID, meaningful log message, HTTP users Agent, etc.

## What Should not be logged
- Sensitive Information: Passwords and secret keys, API Keys and access tokens, database connection strings
- Identity information: NID, Passport, license information, etc,
- Finance and Banking information: Back account information, card information, etc

## Component of logging System
- Log Parser
- Log Storage
- Log Viewers
- Popular Logging Solution
- Splunk
- Data log
- Loggly
- ELK(ElasticSearch, Logstash, Kibana)

## Create Logger in Node App

### File Structure
- [x] src/
  - [ ] middleware/
  - [ ] routes/
  - [ ] utils/
- [x] docker-compose.yml
- [x] README.md
- [x] package.json

## Dependecies
- cors
- dotenv
- express
- express-winston
- morgan
- winston-daily-rotate-file
- winston-elasticsearch
## Dev Dependencies
- nodemon