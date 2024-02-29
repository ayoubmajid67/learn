#!/bin/bash

# Change to the directory of the new repository
cd /Basic-roadmap

# Fetch changes from the original repository
git fetch upstream

# Merge changes into the local repository
git merge upstream/main --no-edit

#add changes : 
git add  .
#  commit changes : 
git commit -m  "update Basic Roadmpa Stat $1"
# Push changes to the remote repository
git push origin
