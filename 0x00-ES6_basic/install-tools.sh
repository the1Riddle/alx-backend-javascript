#!/bin/bash

# Create a new Node.js project (skip if you already have a package.json file)
npm init -y

# Install Jest and its dependencies
npm install --save-dev jest

# Install Babel and its dependencies
npm install --save-dev @babel/core @babel/preset-env @babel/cli

# Install ESLint and its dependencies
npm install --save-dev eslint

# Create a basic Babel configuration file
echo '{
  "presets": ["@babel/preset-env"]
}' > .babelrc

# Create a basic ESLint configuration file
npx eslint --init

# Optionally, you can add a script to your package.json file for running tests with Jest
echo '{
  "scripts": {
    "test": "jest"
  }
}' > package.json

# Display installation completion message
echo "Jest, Babel, and ESLint have been installed successfully!"

# Provide instructions for running tests (if Jest is installed)
echo "To run tests, use the following command:"
echo "npm test"

