const router = require('express').Router();
const { response } = require('express');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll()
  .then(function(catData){
    res.json(catData)
  })
});

router.get('/:id', (req, res) => {
  Category.findOne(
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(function(catData){
    res.json(catData)
  })
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    let returnedCat = await Category.create(req.body);
    res.json(returnedCat);
  } catch (error) {
    res.json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    await Category.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }
    );
    res.send(`${req.body.category_name} updated!`)
  } catch (error) {
    res.json(error);
  }
});

router.delete('/:id', (req, res) => {
  Category.destroy(
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(function(catData){
    res.send(`${req.params.id} deleted!`)
  })
  .catch(function (err) {
    res.json(err);
  })
});

module.exports = router;
