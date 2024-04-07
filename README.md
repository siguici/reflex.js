# Reflex

A lightweight and dependency-free dependency injection container designed for efficient dependency management in applications.

## 📋 Requirements

There are no external dependencies required to use this dependency injection container.

## ⚡️Installation

To install the dependency injection container, simply add it to your project:

```shell
npm install reflex.js
```

## 📖 Usage

Here's how to use Reflex in your project:

```typescript
import { Container } from 'reflex.js';

// Create a new container instance
const container = new Container();

// Define and resolve dependencies
container.bind('Config', Config);
const config = container.resolve('Config');

// Use the resolved dependency
console.log(config.get('app_name'));

```

## 👏 Contributions

Contributions are welcome! You can:

- **Open Issues**: Report bugs or suggest improvements.
  
- **Submit Pull Requests**: Contribute bug fixes, new features, or documentation enhancements.
  
- **Provide Feedback**: Share your thoughts and ideas to help improve Boss.

Let's collaborate and make Boss even more awesome together!

## 📄 License

This project is licensed under the MIT License. [See the LICENSE.md file for more details](./LICENSE.md).
