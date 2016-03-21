mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    firstname : String,
    lastname : String,
    email : String,
    preferred_units : String,
    username : { type : String, unique : true, required : true },
    password : {type : String, required : true }
});

UserSchema.methods.getWorkouts = function(callback){
    return this.model('Workout').find({username : this.username},callback);
}

var User = mongoose.model('User',UserSchema);

var ExerciseSchema = new mongoose.Schema({
    username : String,
    excercisename : String,
    excercisedesc : String
});

ExerciseSchema.index({username : 1, excercisename : 1}, {unique : true});

var Exercise = mongoose.model('Exercise', ExerciseSchema)

var WorkoutSchema = new mongoose.Schema({
    workoutname : String,
    workoutdesc : String,
    username : String,
    exercises : [{type : mongoose.Schema.Types.ObjectId, ref : "Exercise"}]
});

WorkoutSchema.index({workoutname : 1, username : 1}, {unique : true});

var Workout = mongoose.model('Workout', WorkoutSchema)

module.exports = {
    User : User,
    Exercise : Exercise,
    Workout : Workout
}
