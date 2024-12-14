# NextJS

### Key Features and Benefits of NextJS

- Full-stack applications
- File-based routing
- Server si-e rendering

## App Router VS Pages Router

- Page router is stable and old way
- allows to build feature rich apps
- App router is new and partially buggy
- Future of nextJS

##### Lazy Loading- The img will load if it is really visible

### React Server Components
- only renders on server
- by default all react components are RSC
- Less client side JS, better SEO

### React Client Components
- components that are pre rendered on the serverbut then potentially also on client
- opt in via "use client" directive
- client side interactivity ( like use react hooks it's not possible in server side)

- fill is used in image component to tell to take in height and width automatically

## PRISMA and DOCKER
- install prisma
`npm install @prisma/client
npm install --save-dev prisma `
- install docker desktop and write docker compose file
```yaml
version: '3.8'
services:
  db:
    image: postgres:15
    container_name: postgres_container
    restart: always
    environment:
      POSTGRES_USER: your_username
      POSTGRES_PASSWORD: your_password
      POSTGRES_DB: your_database
    ports:
      - '5432:5432'
    volumes:
      - db_data:/var/lib/postgresql/data
volumes:
  db_data:
```

- start the container
  ```jsx
  docker-compose up -d
  ```
- for building container
  ```jsx
  docker-compose up --build
  ```

- confirm postgre is running or not
  ```jsx
  docker ps
  ```

- Initialize prism
  ```jsx
  npx prisma init
  ```
- update env file
  ```jsx
  DATABASE_URL="postgresql://your_username:your_password@localhost:5432/your_database"
  ```
- generate prisma client ( whenever you do changes in prisma.js you need to generate the client)
```jsx
npx prisma generate
```
- Apply migration to db
```jsx
npx prisma migrate dev
```



