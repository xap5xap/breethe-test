# Solution to Breethe Test

Using this api documentation (only v5 of the API is documented here and it's currenlty being build): https://admindev.breethe.com/api-doc

You can use the https://apidev.breethe.com base url instead of https://admindev.breethe.com for the api but the server will apend /api just after the domain automaticaly. So https://admindev.breethe.com/api/v5/catalogs/default would be https://apidev.breethe.com/v5/catalogs/default on the api domain.

### To do before the test

Read this full document first.
The task are not fully documented and we are well aware of it. 

You can "sniff" https://breethe.com to check some stuff but it's using api/v4 and not api/v5 that is needed for this test.


# You need to

## Setup

Setup your tools, framework, build script, etc. You can wether create a HTML app or a APK (that will be install manually not on the store) or both. 

You must structure your code the best way possible to plan reuse it for a Android app build and HTML.

You need to update this README.md (you can remove the content of it if you want) with what you find usefull in the README.md (this is the main place you document your project).

Using docker would be great ;)

## Create what we call a dummy user

Using this endpoint: 

POST https://apidev.breethe.com/v4/users

Payload: {device: "html5", guest: 1}

You will get something like this:

{"error":false,"message":"Account created.","users":{"email":"SUG3Jv1c@omgdummymail.com"}}

You will then get a connection token using the first part of the email as the password.

POST https://apidev.breethe.com/oauth/access_token?grant_type=password

Payload: {"client_id":"OMG_ID_ZeB3BCEAohRpyBp","client_secret":"OMG_SECRET_KEY_kW4eksl3PeZzY7z","username":"SUG3Jv1c@omgdummymail.com","password":"SUG3Jv1c"}

You will get something like this:

{"access_token":"qTBkDjXB1o8o6rbb9LynNrlJcPs0oQu0NuEFqcpa"}

You can now use the access_token in the "Authorization" header to be connected.

## Display content named LearnToMeditate

In the catalog you have a content (name: LearnToMeditate) that have the (discriminator_type: Course).

You must do a interface with the information you go to display it and loop trough it's content (that are discriminator_type: SimpleList) and loop trought the simple list content and display the content (That are discriminator_type: Meditation)

## Display the access status

Base on the content state display if the user can access or not the content Meditation.

## Add to favorite

Allow to add/remove Meditation content to Favorite

## Add a button refresh on meditation

Add a button refresh on meditation that will only refresh it's content state.





