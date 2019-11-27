# SpeakerTalks

## Description:
Main idea is to create plase where publick speakers can save their talks and submittions, manage it and sync with calendar.

## Draft Road Map

####Phase I
- Authorization
- Speaker Profile (bio, social links, cv, etc)
- From for talks (title, description, motivation, links to slides, video)
- Public Profile page (sharing, embeded)
- integration with a

####Phase II
- Video capturing with Kaltura's capture tool
- Export videos to YouTube 
- Integration with CFP and events services (PaperCall, sessionize etc.)
- Chrome extension for automatic form filling in CFP google forms based.

###DOCKER

```shell script
docker run -d -p 27017:27017 -v ~/data:/data/db mongo
mongoku start --pm2
```

