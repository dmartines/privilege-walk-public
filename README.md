# Privilege Walk
The privilege walk exercise that examines the intricacies of privilege in our society. It explores how we enjoy or do not enjoy privileges during our interactions at work and personal life. The exercise can be done individually or as groups. For group exercises it is important to ensure trust and respect, as the exercise will highlight privilege differences within the group. 

The exercise is not meant to make anyone feel guilty nor exacerbate division in a group. Instead it is meant to bring awareness of disparities within group dynamics and help teams learn how to work better with each other. By educating people on privilege we can identify ways to work and collaborate more inclusively, with deeper awareness of one's intersectionality. 

#Helpful Git commands

View local remotes

    git remote -v

Check status of your files

    git status

#Heroku commands 
Heroku is the platform-as-a-service (PaaS) we use to host our web application. So first you need a Heroku login account. Once you have an account then follow the commands below.

    heroku login

Create new Heroku app with the following command

    heroku create <appname> --region eu --buildpack https://github.com/AdmitHub/meteor-buildpack-horse.git

Setup Git remote on Heroku

    heroku git:remote -a https://github.com/dmartines/privilege-walk-public.git

Configure Root URL

    heroku config:set ROOT_URL=http://privilegewalk.org/

Add domains

    heroku domains:add privilegewalk.org
    heroku domains:add www.privilegewalk.org

Configure MONGO_URL

    heroku config:set MONGO_URL=mongodb+srv://<dbuser>:<dbpassword>@privilegewalk.ggjbv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

Your application is ready. You can then commit your changes with Git commands above. Once committed use the following command to push changes to Heroku:

    git push heroku master
