#!/bin/bash
set -e
# copy the db backup
cp .next/standalone/database.sqlite3 database.sqlite3.backup || true
# build source, this will overwrite the whole .next folder
yarn build
# move files where they should be
cp -R public .next/standalone/public
cp -R .next/static .next/standalone/.next/static

# copy the sqlite file in the repo as the default
cp database.sqlite3 .next/standalone/database.sqlite3
# overwrite it with the working version if exists
cp database.sqlite3.backup .next/standalone/database.sqlite3 || true