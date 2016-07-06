:sunny: :partly_sunny: :cloud: :snowflake: :zap:
## Weather Forecast for outdoor activities in the CLI

### Roadmap :bike: :bike: :bike:

- Install:
  - [ ] create an alias `go-for-a` so it's accesible via CLI 

- Run:  
  - [ ] check if the user has an [Open Weather](http://openweathermap.org) **API key**  
    - [ ] if not → tip the user [to go and get it](http://openweathermap.org/appid)
    - [ ] prompt the user to enter its API key
  - [ ] if the user has defaults set
    - [ ] query **OW** with defaults
    - [ ] `&` **handle-response**
  - [ ] check if the user has not a default **location** set
    - [ ] ! → ask him if he wants to be _geolocated_
    - [ ] ! → ask him to enter it manually
    - [ ] ! → tip him he can set the location via flag
  - [ ] check if the user has a default **activity** set
    - [ ] ! → prompt user to choose between `swim` / `hike` / `run`
    - [ ] ! → tip him he can set the activity via flag
  - [ ] query [Open Weather](http://openweathermap.org) API usgin 
    - [ ] pass key as arg
    - [ ] pass location as arg
    - [ ] `&` **handle-response**
  - [ ] handle response

- User should be able to pass flags:
  - [ ] custom location
  - [ ] geolocate
  - [ ] activity
  - [ ] API key

- User should be able to set defaults via flags:
  - [ ] location
  - [ ] activity
  - [ ] API key
    - [ ] store defaults via **ENV** vars