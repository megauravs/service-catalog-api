<h1 align="center">Service Catalog Api</h1>
<h4 align="center"> 
	🚧  Service Catalog Api 🚀 Under construction...  🚧
</h4> 

<hr> 

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/{{YOUR_GITHUB_USERNAME}}" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

I am responsible for the data model and API portions of this story. 
Implement a Services API that can be used to implement this dashboard widget. It should support

The API can be read-only.

## :sparkles: Features ##

:heavy_check_mark: Returning a list of services (support filtering, sorting, pagination)\
:heavy_check_mark: Fetching a particular service (including a method for retrieving its versions)

## :rocket: Technologies ##

The following tools were used in this project:

- [Postgres](https://postgresql.org)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [TypeORM](https://typeorm.io/#/)
- [TypeScript](https://www.typescriptlang.org/)

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com), [Node](https://nodejs.org/en/) and [Docker](https://www.docker.com/) installed.

## :white_check_mark: Design and Considerations ##

- To develop this API as per the given requirement, I first started developing PostgreSQL model.
- Then I extended the server by adding some middlewares. I added three middleware to the 
server. express.json is built-in middleware to parse the request body, express.static is 
also built-in middleware used to serve the static files, and morgan is used to logs the requests.
- Then I dockerize the application with postgres v12 so that any developer can easily run this project.
- Added config for the database and added controller, routes for the Service model.
- Implemented pagination for the [getServices](http://localhost:8000/services)
- Added basic test framework using jest.

## :white_check_mark: Endpoints ##

- /POST [createService](http://localhost:8000/services) 
```
{
  "title": "Service",
  "description": "Sample Service",
  "versions": [{
      "id": 1,
      "title": "Service",
      "description": "Sample Service"
  }]
}
```

- /GET [getServices](http://localhost:8000/services) 

- /GET [getService](http://localhost:8000/services/{service_id}) 


## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/{{megauravs}}/service-catalog-api

# Access
$ cd service-catalog-api

# Build docker 
$ docker-compose build

# Run the project
$ docker-compose up

# Test the Service Controller
$ npm test

# The server will initialize in the <http://localhost:8000>
```

## :memo: License ##

This project is under license from ISC. For more details, see the [LICENSE](LICENSE.md) file.


Made with :heart: by <a href="https://github.com/{{megauravs}}" target="_blank">Gaurav Shinde</a>

&#xa0;

<a href="#top">Back to top</a>
