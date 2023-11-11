# TechSkillEval

#### Video Demo:  <https://youtu.be/0Dpz0pZT4h4>

## DESCRIPTION

### TechSkillEval is a project I am developing as an ultimate destination for video-based independent technical skills evaluations. As the developer behind this platform, my aim is to provide developers and employers with a comprehensive, modern, and reliable evaluation solution. 

## TECHNOLOGIES

###

- Angular: The frontend of TechSkillEval is developed using Angular, a popular and powerful JavaScript framework for building dynamic web applications.

- Python Flask: The backend of TechSkillEval is built with Python Flask, a lightweight and versatile web framework that enables rapid development of RESTful APIs.

- SQLite: TechSkillEval utilizes SQLite as its database management system. SQLite is a reliable and efficient embedded database engine that offers robust features and easy integration.

- Deployment: The frontend of TechSkillEval is deployed using Netlify, a popular platform for continuous deployment and hosting static websites. The backend is deployed using Render, a cloud platform that provides scalable and reliable infrastructure for web applications.

- CI/CD: Both frontend and backend deployments of TechSkillEval are implemented with continuous integration and continuous deployment (CI/CD) practices. This ensures seamless integration of new features, automated testing, and efficient deployment processes.

## FILE STRUCTURE

- backend 
  - app
    - __init__.py 
    - auth.py
    - models.py
    - routes.py
  -  requirements.txt
  - run.py
  - seed_db.py
- screenshots
- venv
- TechSkillEval-angular
  - src 
    - app
      - components
        - about 
        - evaluations
        - footer
        - fqa
        - header
        - home
        - join
        - login
        - profile
      - models
      - services
      - assets    
- package-lock.json
- package.json
- README.md # Project documentation (you are here)

The `backend` directory contains the backend implementation of TechSkillEval. It includes the `app` directory, which contains files such as `__init__.py`, `auth.py`, `models.py`, and `routes.py`, handling different aspects of the backend logic. The `requirements.txt` file lists the project dependencies, `run.py` is the entry point for running the backend server, and `seed_db.py` handles database seeding.

The `screenshots` directory is used to store screenshots capturing different stages of the development process.

The `venv` directory contains the Python virtual environment for managing project dependencies.

The `TechSkillEval-angular` directory is where the frontend Angular application is. The `src` directory contains various subdirectories such as `app`, `components`, `models`, `services`, and `assets`, organizing the frontend codebase.

The `package-lock.json` and `package.json` files are related to the project's npm package configuration.

#### by Esther White {{ MonaCodeLisa }}