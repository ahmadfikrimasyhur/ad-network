<p align="center">
 <img src="https://ad-network.herokuapp.com/logo.png" width="128px" />
</p>

# Ad Network

A Fullstack app built with React Hooks, Tailwind CSS, NodeJS, Express and MongoDB (mongoose).


## DEMO

Access [ad-network demo](https://ad-network.herokuapp.com/). Create an account or log in with email: `admin@test.com` and password `admin`. 

## How to install and run

There are few steps you need to follow in order to run this project.

### Create your MongoDB cluster
Firstly, clone this repo. Then you need to [create an Mongo DB Atlas account](https://docs.atlas.mongodb.com/tutorial/create-atlas-account), [deploy a free cluster](https://docs.atlas.mongodb.com/tutorial/deploy-free-tier-cluster/) and [get your cluster connection string](https://docs.mongodb.com/drivers/node/current/quick-start/#connect-to-your-cluster). It should be in this format:

```mongodb://yourusername:yourpassword@yourhost:hostport/yourdbname```

Copy this **connection string**. We'll use it later. Access the `./.env.template` file. If everything is ok, you should see this inside it:

```
DATABASEURI=mongodb://yourusername:yourpassword@yourhost:hostport/yourdatabasename
SECRET=yourjwtsecret
```

Change your `DATABASEURI` for your **cluster connection string**. 

Change your `SECRET` variable to whenever you want, but do not reveal it for anyone, as this variable is used with JWT to authenticate users! Examples: `SECRET=cutekitty` or `SECRET=angryhamster`.

**Do not forget** to rename `.env.template` to `.env`, as `./server.js` file needs to find it.

### Install project dependencies

Now you have to run two set of commands:

```zsh
$ cd ad-network
$ yarn
```

```zsh
$ cd ad-network/client/
$ yarn
```

### Run the project!

Now, all you have to do is run these:

```zsh
$ cd ad-network
$ nodemon server.js
```

```
[nodemon] starting `node server.js`
Server is running on port3001
```

After running server.js, it's time to run the React app: 
```zsh
$ cd ad-network/client
$ yarn start
```

```Starting the development server...
...
Compiled successfully!

You can now view ad-network in the browser.

  Local:            http://localhost:3000
...

Note that the development build is not optimized.
To create a production build, use yarn build.
```

Access [http://localhost:3000](http://localhost:3000) and have fun!

### What if I want to deploy my project?

I'll teach you to deploy it on [Heroku](https://www.heroku.com/). All you have to do is install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) and run `$ heroku login`. Authenticate as it is requested and access the project root folder with `cd ad-network`. Now run 
```zsh
$ heroku create
$ git push heroku master
```

and it is done! Open your deployed app.


## Database structure

If you want to edit this project you may have to know on how [mongoose](https://mongoosejs.com/docs/) deals with your app database. It is a simple database which has a one-to-many relation between one user and many campaigns.

<p align="center">
 <img src="https://user-images.githubusercontent.com/16800059/128025863-28419918-0bf4-4579-a92e-2945587bfaa6.png" />
</p>

You may change database models at `./models/`. 

#### Thank you for reading this!
