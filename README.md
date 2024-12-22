# React Native App in GitHub Codespaces

Follow these steps to set up and run a React Native app in GitHub Codespaces:

---

## 1. Create a New Repository on GitHub
1. Go to [GitHub](https://github.com) and create a new repository for your project.
2. After creating the repository, open it directly in GitHub Codespaces.

---

## 2. Open the Repository in GitHub Codespaces
1. In your GitHub repository, click the green **Code** button.
2. Select **Open with Codespaces** and choose **New Codespace**.
3. GitHub Codespaces will set up an online development environment with the necessary configurations.

---

## 3. Set Up the Environment in Codespaces

### Install Node.js and npm
1. Check if Node.js and npm are installed by running:
   ```bash
   node -v
   npm -v
# Install nvm if it’s not already installed
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# Install the latest version of Node.js
 ```bash
nvm install node
npm install -g expo-cli
expo init MyReactNativeApp
cd MyReactNativeApp
expo start
```
# Output_1
![alt text](<Screenshot 2024-12-22 235930.png>)
# Output_2
![alt text](<Screenshot 2024-12-23 003708.png>)