#!/bin/bash

echo 'starting API and react App..'


cd Backend
npm start &
echo 'backend is running...'


cd ../sampleOlx
npm run dev
echo 'frontend is running...'

echo "Both servers started successfully!"

