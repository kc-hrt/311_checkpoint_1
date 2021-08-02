const users = require('../data/index');

// get users list
const listUsers = (req, res) => res.json(users);

// get user by id
const showUser = (req, res) => {
  if (users.some(user => user.id === parseInt(req.params.id))) {
    res.json(users.filter(user => user.id === parseInt(req.params.id))); 
  } else {
    res.status(404).json({ 'Error Message': `404 - No user with id of ${req.params.id}`});
  }
};

// create a new user
const createUser = (req, res) => {
  
  users.push({
    id: users.length + 1,
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    address: {
      street: req.body.address.street,
      suite: req.body.address.suite,
      city: req.body.address.city,
      zipcode: req.body.address.zipcode,
      geo: {
        lat: req.body.address.geo.lat,
        long: req.body.address.geo.long
      }
    },
    phone: req.body.phone,
    website: req.body.website,
    company: {
      name: req.body.company.name,
      catchPhrase: req.body.company.catchPhrase,
      bs: req.body.company.bs
    }
  });
  // res.json(users[users.length - 1]);
  res.json({'Requset Sucessful': 'User was updated!', users});
};

// update user by id
const updateUser = (req, res) => {
  if(users.find(user => user.id === Number(req.params.id))){
      users.forEach(user => {
          if(user.id === Number(req.params.id)){
              user.isActive = 'false'
              res.json({'Requset Sucessful': 'User was updated!', user});
          }
      });
  } else{

    res.status(400).json({'Error Message': `400 - No user with id of ${req.params.id}`});
  }
};

// Delete User by id
const deleteUser = (req, res) => {
  if (users.filter(user => user.id == req.params.id)) {
    
    users.forEach(user => {
      if(user.id === Number(req.params.id)) {
          user.isActive = 'false'
          res.json({'Requset Sucessful': 'User was deleted!', user});
      }});
  } else {
    res.status(400).json({'Error Message': `400 - No user with id of ${req.params.id}`});
  }
};

module.exports = { listUsers, showUser, createUser, updateUser, deleteUser };