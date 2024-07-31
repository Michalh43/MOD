# Project Name

## Overview

This project includes three components:
1. **Frontend** - React application
2. **Backend** - .NET API
3. **Order Management** - Node.js service

## Getting Started

### Prerequisites

- Node.js
- .NET SDK
- MongoDB
- SQL Server (for .NET API)
- Docker (optional for containerization)

### Setup

#### Frontend (React)

1. Navigate to the `src` directory:
    bash
    cd src
    
2. Install dependencies:
    bash
    npm install
    
3. Start the development server:
    bash
    npm start
    

#### Backend (.NET)

1. Navigate to the .NET project directory:
    bash
    cd dotnet-backend
    
2. Restore dependencies:
    bash
    dotnet restore

3. Start the API server:
    bash
    dotnet run
    

#### Order Management (Node.js)

1. Navigate to the Node.js project directory:
    bash
    cd node-order-management

2. Install dependencies:
    bash
    npm install
   
3. Start the server:
    bash
    npm start

## Deployment

### Cloud Provider

This project can be deployed on [GCP/AWS/Azure]. Please refer to `docs/ARCHITECTURE.md` for details on the cloud architecture.

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Architecture Diagram](docs/ARCHITECTURE_Diagram.png)
- [Components](docs/COMPONENTS.md)
