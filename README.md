# Tizen Studio Project - CTV Sample App

This repository contains the main entry point file (`index.html`) for a Tizen Studio project. The `index.html` file serves as the starting point for the CTV (Connected TV) sample app.

## Overview

The `index.html` file is responsible for initializing and rendering the CTV sample app. It includes the necessary scripts and dependencies to ensure proper functionality.

In the `index.html` file, you'll find the following line of code responsible for loading a notice:

```html
<script id="spcloader" type="text/javascript" async="" src="https://sdk.staging.privacy-center.org/7685b6f7-3062-491b-ba50-207f440951dc/loader.js?platform=ctv&amp;target_type=notice&amp;target=mHgXhmJW" charset="utf-8"></script>
```

## File Structure

The repository structure is as follows:

- `index.html`: This file is the main entry point for the Tizen Studio project. It contains the necessary HTML structure, scripts, and styles for the CTV sample app.
- `main.js`: This file contains additional JavaScript code that enhances the functionality of the CTV sample app.

## Usage

To run the CTV sample app:

1. Ensure you have the required dependencies and development environment set up for Tizen Studio.
2. Copy the contents of the repository to your Tizen Studio project directory.
3. Open the project in Tizen Studio.
4. Build and run the project using the Tizen Studio development tools.
5. The app should load and be displayed on the connected CTV device.

