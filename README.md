# Project Setup and Usage Guide

This guide will help you set up the environment and run the code properly.

## 1. Pull the Code into a Folder

Clone the repository into a desired folder:

```bash
git clone <repo-url> abc
cd abc
```

## 2. Activate the Python Virtual Environment

Navigate to the location where your virtual environment is set up. In this case, it's located at:

```
/Users/prateekgaurav/Desktop/PotholeDetection
```

The environment is named `pothole_env`.

### Activation

Check your terminal to confirm you're in the right directory, then run:

```bash
source pothole_env/bin/activate
```

You can verify the environment's Python version:

```bash
python3 --version
```

### Deactivation

To deactivate the virtual environment:

```bash
deactivate
```

---

## 3. Expo Setup (React Native Frontend)

### Prerequisite

Make sure you have **Node.js version >=18**, preferably an LTS version:

```bash
node -v
```

To install or upgrade Node.js (example):

```bash
sudo n 22
```

### Initialize a New Project (if needed)

```bash
npx create-expo-app my-first-project --template
cd my-first-project
npm start
```

### Running the App

Once inside the project directory:

```bash
npm start
```

You will see Metro Bundler starting and a QR code in the terminal.

#### Options:

* Press `a` to open Android
* Press `i` to open iOS simulator
* Press `w` to open web
* Press `j` to open debugger
* Press `r` to reload app
* Press `m` to toggle menu

---

### Note:

If you see an error such as:

```
Error: ENOENT: no such file or directory, scandir '.../assets/images'
```

Ensure that the `assets/images` directory exists or is correctly referenced in your code.
