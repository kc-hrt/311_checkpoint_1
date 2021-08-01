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
              user.name = req.body.name ? req.body.name : user.name,
              user.username = req.body.username ? req.body.username : user.username,
              user.email= req.body.email ? req.body.email : user.email,
              user.address.street = req.body.address.street ? req.body.address.street : user.address.street,
              user.address.suite = req.body.address.suite ? req.body.address.suite : user.address.suite,
              user.address.city = req.body.address.city ? req.body.address.city : user.address.city,
              user.address.zipcode = req.body.address.zipcode ? req.body.address.zipcode : user.address.zipcode,
              user.address.geo.lat = req.body.address.geo.lat ? req.body.address.geo.lat : user.address.geo.lat,
              user.address.geo.lng = req.body.lng ? req.body.lng : user.address.geo.lng,
              user.phone = req.body.phone ? req.body.phone : user.phone,
              user.website = req.body.website ? req.body.website : user.website,
              user.company.name = req.body.company.name ? req.body.company.name : user.company.name,
              user.company.catchPhrase = req.body.company.catchPhrase ? req.body.company.catchPhrase : user.company.catchPhrase,
              user.company.bs = req.body.company.bs ? req.body.company.bs : user.company.bs
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
    users.splice(users.filter(user => user.id == req.params.id)[0].id - 1, 1);
    res.json({'Requset Sucessful': 'User was deleted!', users});
  } else {
    res.status(400).json({'Error Message': `400 - No user with id of ${req.params.id}`});
  }
};

module.exports = { listUsers, showUser, createUser, updateUser, deleteUser };