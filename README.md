# my-portfolio

This project consists of a Django backend and a React frontend, containerized using Docker. The backend uses MySQL as its database.


## Index

1. [Project Structure](#project-structure)
2. [Initial Setup](#initial-setup)
3. [Daily Development Workflow](#daily-development-workflow)
4. [Committing and Pushing Changes](#committing-and-pushing-changes)

## Project Structure

```
my-portfolio/
├── backend/
│ ├── Dockerfile
│ ├── django_project/
│ └── requirements.txt
├──frontend/
│ ├── Dockerfile
│ │ ├── src/
│ │ ├── public/
│ │ ├── package.json
│ │ └── .dockerignore
└── docker-compose.yml

```


## Initial Setup

1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/my-portfolio.git
   cd my-portfolio

   ```

2. Build and Run Docker Containers

    ```
    docker-compose up --build
    ```


## Daily Development Workflow

1. Start Docker Containers

    ```
    docker-compose up

    ```

2. Running Commands in Containers
    * Django Management Commands:
        ```
        docker-compose exec backend python manage.py migrate
        docker-compose exec backend python manage.py createsuperuser
        ```
    * Install New Python Packages
        * Add the package to requirements.txt
        * Rebuild the Docker image
            ```
            docker-compose build backend
            docker-compose up
            ```
    * Install New NPM Packages
        * Add the package using npm
             ```
            npm install package-name
            ```
        * Rebuild the Docker image
            ```
            docker-compose restart frontend
            ```

3. Stopping Containers
    ```
    docker-compose down
    ```

## Committing and Pushing Changes

1. Commit Changes in Submodules:

```
cd my-portfolio-frontend
git add .
git commit -m "Update frontend components"
git push origin main

cd ../my-portfolio-backend
git add .
git commit -m "Update backend logic"
git push origin main

```

2. Update Submodule References in Main Repository:

```
cd ..
git add my-portfolio-frontend my-portfolio-backend
git commit -m "Update submodule references"
git push origin main
```