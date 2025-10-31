# @streamfarm/types

Shared TypeScript type definitions for the **StreamFarm** project ecosystem.

---

## Overview

This package contains data types and interfaces that are used across multiple StreamFarm projects and services.  
It helps ensure **type safety** and **consistency** between backend and frontend code.

---

## Installation
```
bash npm install @streamfarm/types
or
yarn add @streamfarm/types
```

## Usage

Import types into your TypeScript code:
```
typescript import type { UserProfile, CommentEvent, VideoMeta } from '@streamfarm/types';
// Example usage function handleComment(event: CommentEvent) { // your logic here }``` 
```

> See the [src](src) directory for full list of available types.


## Contributing

1. Fork or clone this repository.
2. Add or modify types in `src/`.
3. Run `npm run lint` and `npm run typecheck` before submitting a PR.
4. Document major changes in this README if needed.
5. Open a pull request!

---

## Publishing

To publish a new version (requires npm org permissions):
```
bash npm version patch|minor|major npm publish --access public
```

---
## License

MIT

---

## Authors & Acknowledgments

- [Alexander S](mailto:alexander@sharapov.biz) and the [StreamFarm Team](https://streamfarm.ru)
- Thanks to all contributors.

---

## Project Status

_Actively maintained. Contributions and suggestions welcome!_
