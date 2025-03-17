rm -rf build node_modules
yarn link @ion-gateway/isomorphic-eventsource
yarn link @ion-gateway/isomorphic-fetch
yarn link @ion-gateway/protocol
yarn link @ion-gateway/sdk
yarn link @ion-gateway/ui
yarn link @ion-gateway/ui-react
npm install
yarn build
