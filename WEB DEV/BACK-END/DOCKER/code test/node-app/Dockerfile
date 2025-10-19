# specify the baseImage :
# 14: version 
FROM node

# create the app directory:
WORKDIR /app  

# : app
COPY package.json . 

# download the packages : 
RUN npm install  

# Copy all files in the project to the app 
COPY   . .

# specify the port where the application running :
EXPOSE 4000   

# run the application  
CMD [ "npm", "run" ,"start-dev" ]
