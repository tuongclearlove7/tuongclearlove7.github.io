function tests() {


  console.log('Tests are passing');
  throw new Error('Tests are failing now');
}

tests();