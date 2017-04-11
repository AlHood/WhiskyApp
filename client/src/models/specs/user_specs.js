var assert = require('assert');
var User = require('../user');


describe('User tests', function() {

  var testUser;

  beforeEach(function() {
    testUser = new User({name:"strin", bucket_list: [], visited_list: []});  });



  it('Can add to user bucket list', function() {
// testUser = new User({name:"strin", bucket_list: [], visited_list: []});

testUser.addBucket("123456");

assert.equal("123456", testUser.bucket_list[0] );
}),


  it('can remove from bucket list', function() {

  testUser.addBucket("123456");
  testUser.removeBucket("123456");

  assert.equal(0, testUser.bucket_list.length );
}),


  it('bucket list doesnt accept duplicates', function() {

    testUser.addBucket("123456");
    testUser.addBucket("123456");

    assert.equal(undefined, testUser.bucket_list[1] );
  }),


  it('visited list performs sensibly', function() {

      testUser.addBucket("123456");
      testUser.addVisited("123456");

      assert.equal("123456", testUser.visited_list[0]);
      assert.deepEqual([], testUser.bucket_list);

    })

  it('able to add multipl entries to visited list', function() {

      testUser.addBucket("123456");
      testUser.addVisited("123456");
      testUser.addBucket("4567");
      testUser.addVisited("4567");

      assert.equal("123456", testUser.visited_list[0]);
      assert.equal("4567", testUser.visited_list[1]);
      assert.deepEqual([], testUser.bucket_list);

    })

  it('can remove from visited', function() {

      testUser.addBucket("123456");
      testUser.addVisited("123456");
      testUser.removeVisited("123456");


      assert.equal(0, testUser.visited_list.length);

    })

  it('multiple additions', function() {

      testUser.addBucket("123456");
      testUser.addBucket("4567");
      testUser.addVisited("123456");
      testUser.addVisited("ABCD");
      testUser.addVisited("4567");

      testUser.removeVisited("123456");

      assert.equal(1, testUser.visited_list.length);

    })


});


