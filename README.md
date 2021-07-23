# RegulonDB-GraphQLAPI-Manual

# Description

A dynamic web page in React that displays the documentation of all the web services that compose the GraphQL-API of RegulonDB performing introspection queries to it in real time.

# Motivation

With the update of RegulonDB to new technologies such as GraphQL, MongoDB and NodeJS, following the guidelines called FAIR software principles, this application builds a web page that displays all the available services through queries to the GraphQL service.

# System requirements

Required software

- Node ^14.15.4
- NPM ^6.14.10

# Install

Once the repo is cloned, use this command to install all libraries dependencies of the application

```bash
$ npm install
```

Edit `apollo.conf.json` file and change graphQlUrl value to the web service URL

```
{
  "graphQlUrl": "GraphQL API URL"
}
```

# Quick start

Just use this command to start the web application

```
$ npm start
```

the application will run on port 3000 (by default) http://localhost:3000/

# Project website

[Website where the software is described and allows users to obtain it as well as its documentation.]

# License

Copyright 2021 RegulonDB

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# Support contact information

[It should be clear where to go for support, for example a contact e-mail address]

# Software quality checklist

[This may describe the state of the code, providing the necessary guidance on which aspects could be improved]

**Accessibility**

- [ ] Unique DOI [identifier](http://....) (Please update identifier and link)
- [ ] Version control system

**Documentation**

- [x] README file

**Learnability**

- [x] Quick start

**Buildability**

- [ ] INSTALL file

**Identity**

- [ ] Website

**Copyright & Licensing**

- [x] LICENSE file

**Portability**

- [ ] Multiple platforms
- [ ] Browsers

**Supportability**

- [ ] E-mail address
- [ ] Issue tracker
- [ ] Slack
- [ ] Gitter

**Analysability**

- [ ] Source code structured
- [ ] Sensible names
- [ ] Coding standards - [style guides](http://google.github.io/styleguide/)

**Changeability**

- [x] CONTRIBUTING file
- [x] Code of Conduct file
- [ ] Code changes, and their authorship, publicly visible

**Reusability**

- [ ] Source code set up in a modular fashion

**Security & Privacy**

- [ ] Passwords must never be stored in unhashed form
