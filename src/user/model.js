'use strict';

const dynamoose = require('dynamoose');
const validator = require('validator');
const uuid = require('uuid');

const Schema = dynamoose.Schema;

class User {

    constructor() {

        const userSchema = new Schema({
            id: String,
            password: {
                type: String,
                required: true,
                validate: (value) => value.length > 8,
            },
            email: {
                type: String,
                required: true,
                validate: (value) => validator.default.isEmail(value),
            },
        });

        this.User = dynamoose.model('User', userSchema);
    }

    create(user) {
        user.id = uuid.v1();
        return this.User.create(user);
    }

    findById(id) {
        return this.User.get(id);
    }
}

module.exports = new User();