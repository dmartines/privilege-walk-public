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

Upgrade dynos to unlock automated SSL certificates

    heroku ps:resize web=hobby

Enable Automated Certificate Management [ACM](https://devcenter.heroku.com/articles/automated-certificate-management)

    heroku certs:auto:enable

Check certificate status

    heroku certs:auto 

Once certs are enabled run command below to get new secure domain

    heroku domains

Update DNS server CNAME with new herokudns url

Test certificates using

    curl -kvI https://www.privilegewalk.org

Test SSL certificate

    openssl s_client -connect introductory-aardvark-mxpn6d5zappek6z37v7id8sc.herokudns.com:443 -servername www.privilegewalk.org

#Helpful Git commands

View local remotes

    git remote -v

Check status of your files

    git status

