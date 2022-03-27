#!/usr/bin/env bash
yarn build
# enable GCP apis
export PROJECT_ID="ideeza-frontend"
gcloud app deploy --project=ideeza-frontend 