const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./models/Person');


passport.use(new LocalStrategy(
    async (username, password, done) => {
        //authentiation logic here
        try {
           // console.log("Recevied credentials:", username, password);
            const user = await Person.findOne({username: username});
            if(!user) {
                return done(null, false, {message: 'Incorrect username'});
            }
            //const isPasswordMatch = user.password === password ? true : false;
            const isPasswordMatch = await user.comparePassword(password)
            if(!isPasswordMatch){
                return done(null, false, { message: 'Incorrect password'});
            }else {
                return done(null, user);
            }
        } catch (error) {
            return done(error);
        }
    }));

    module.exports = passport; //Export configured passport